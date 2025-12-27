import React from 'react';
import Image from 'next/image';
import { fetcher } from '@/lib/coingecko.actions';
import { formatCurrency } from '@/lib/utils';

const CoinOverviewError = () => {
  return (
    <div id="coin-overview">
      <div className="header pt-2">
        <div className="info">
          <p className="text-red-500">Failed to load coin data</p>
          <p className="text-sm text-muted-foreground">
            Please try again later
          </p>
        </div>
      </div>
    </div>
  );
};

const CoinOverview = async () => {
  try {
    const coin = await fetcher<CoinDetailsData>('/coins/bitcoin', {
      dex_pair_format: 'symbol',
    });

    return (
      <div id="coin-overview">
        <div className="header pt-2">
          <Image src={coin.image.large} alt={coin.name} width={56} height={56} />
          <div className="info">
            <p>
              {coin.name} / {coin.symbol.toUpperCase()}{' '}
            </p>
            <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch coin overview:', error);
    return <CoinOverviewError />;
  }
};

export default CoinOverview;
