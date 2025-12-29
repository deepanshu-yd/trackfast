'use client';
import { getCandlestickConfig, getChartConfig, PERIOD_BUTTONS, PERIOD_CONFIG, Period } from "@/constants";
import { convertOHLCData } from "@/lib/utils";
import { fetcher } from "@/lib/coingecko.actions";
import { CandlestickSeries, createChart, IChartApi, ISeriesApi } from "lightweight-charts";
import { useState, useRef, useTransition, useEffect } from "react";

const CandlestickChart = ({
  children,
  data,
  coinId,
  height = 360,
  initialPeriod = 'daily',
}: CandlestickChartProps) => {
    const chartContainerRef = useRef<HTMLDivElement | null>(null);
    const chartRef = useRef<IChartApi | null>(null);
    const candleSeriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

    const [period, setPeriod] = useState(initialPeriod);
    const [ohlcData, setohlcData] = useState<OHLCData[]>(data ?? []);
    const [isPending, startTransition] = useTransition();

    const fetchOHLCData = async (selectedPeriod: Period) => {
      try {
        const { days } = PERIOD_CONFIG[selectedPeriod];

        const newData = await fetcher<OHLCData[]>(`/coins/${coinId}/ohlc`, {
                vs_currency: 'usd',
                days,
                precision: 'full',
              });

        setohlcData(newData ?? []);
      } catch (e) {
        console.error('failed to fetch OHLCData', e);
      }
    }

    const handlePeriodChange = (newPeriod: Period) => {
        if(newPeriod === period) return;

        startTransition(async () => {
          setPeriod(newPeriod);
          await fetchOHLCData(newPeriod);
        });
    };

    useEffect(() => {
      const container = chartContainerRef.current;
      if(!container) return;

      const chart = createChart(container, {
        ...getChartConfig(height, period as Period),
        width: container.clientWidth,
      });
      const series = chart.addSeries(CandlestickSeries, getCandlestickConfig());

      series.setData(convertOHLCData(ohlcData));
      chart.timeScale().fitContent();

      chartRef.current = chart;
      candleSeriesRef.current = series;

      const observer = new ResizeObserver((entries) => {
        if(!entries.length) return;
        chart.applyOptions({ width: entries[0].contentRect.width });
      });
      observer.observe(container);

      return () => {
        observer.disconnect();
        chart.remove();
        chartRef.current = null;
        candleSeriesRef.current = null;
      };
    }, [height, period]);

    useEffect (() => {
      if(!candleSeriesRef.current) return;

      candleSeriesRef.current.setData(convertOHLCData(ohlcData));
      chartRef.current?.timeScale().fitContent();
    }, [ohlcData, period])

  return (
    <div id="candlestick-chart">
      <div className="chart-header">
        <div className="flex-1">{children}</div>

        <div className="button-group">
            <span className="text-sm mx-2 font-medium text-purple-100/50">Period:</span>
            {PERIOD_BUTTONS.map(({value, label}) => (
                <button key={value} className={period === value ? 'config-button-active' : 'config-button'} onClick={() => handlePeriodChange(value)} disabled={isPending}>
                {label}
            </button>
            ))}
        </div>
      </div>

      <div ref={chartContainerRef} className="chart" style={{ height }}/>
    </div>
  );
};

export default CandlestickChart;
