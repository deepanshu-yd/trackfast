import React from 'react';
import { fetcher } from '@/lib/coingecko.actions';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingDown, TrendingUp } from 'lucide-react';
import DataTable from '../DataTable';
import { cn, formatCurrency } from '@/lib/utils';

const TrendingCoinError = () => {
  return (
    <div id="trending-coins">
      <h4>Trending Coins</h4>
      <div className="p-4 text-center">
        <p className="text-red-500">Failed to load trending coins</p>
        <p className="text-sm text-muted-foreground">
          Please try again later
        </p>
      </div>
    </div>
  );
};

const TrendingCoin = async () => {
  let trendingCoins: { coins: TrendingCoin[] };

  try {
    trendingCoins = await fetcher<{ coins: TrendingCoin[] }>(
      '/search/trending',
      undefined,
      300
    );
  } catch (error) {
    console.error('Failed to fetch trending coins:', error);
    return <TrendingCoinError />;
  }

  const columns: DataTableColumn<TrendingCoin>[] = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: (coin) => {
        const item = coin.item;

        return (
          <Link href={`/coins/${item.id}`}>
            <Image src={item.large} alt={item.name || 'Coin image'} width={36} height={36} />
            <p>{item.name}</p>
          </Link>
        );
      },
    },
    {
      header: '24h Change',
      cellClassName: 'name-cell',
      cell: (coin) => {
        const item = coin.item;
        const percentage = item.data.price_change_percentage_24h.usd;
        const isTrendingUp = percentage > 0;

        return (
          <div
            className={cn(
              'price-change flex items-center gap-1',
              isTrendingUp ? 'text-green-500' : 'text-red-500'
            )}
          >
            {isTrendingUp ? (
              <TrendingUp width={16} height={16} />
            ) : (
              <TrendingDown width={16} height={16} />
            )}
            <span>{Math.abs(percentage).toFixed(2)}%</span>
          </div>
        );
      },
    },
    {
      header: 'Price',
      cellClassName: 'price-cell',
      cell: (coin) => formatCurrency(coin.item.data.price),
    },
  ];
  return (
    <div id="trending-coins">
      <h4>Trending Coins</h4>
      <DataTable
        data={trendingCoins.coins.slice(0, 6) || []}
        columns={columns}
        rowKey={(coin) => coin.item.id}
        tableClassName="trending-coins-table"
        headerCellClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </div>
  );
};

export default TrendingCoin;
