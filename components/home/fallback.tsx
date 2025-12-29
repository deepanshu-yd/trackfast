import React from 'react';
import DataTable from '../DataTable';

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header pt-2">
        <div className="skeleton header-image" />
        <div className="info">
          <div className="skeleton rounded header-line-sm" />
          <div className="skeleton rounded header-line-lg" />
        </div>
      </div>
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  const skeletonData = Array.from({ length: 6 }, (_, i) => ({ id: i }));

  const columns: DataTableColumn<{ id: number }>[] = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: () => (
        <div className="name-link">
          <div className="skeleton name-image" />
          <div className="skeleton rounded name-line" />
        </div>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'name-cell',
      cell: () => (
        <div className="price-change">
          <div className="skeleton change-icon" />
          <div className="skeleton rounded change-line" />
        </div>
      ),
    },
    {
      header: 'Price',
      cellClassName: 'price-cell',
      cell: () => <div className="skeleton rounded price-line" />,
    },
  ];

  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <DataTable
        data={skeletonData}
        columns={columns}
        rowKey={(item) => item.id.toString()}
        tableClassName="trending-coins-table"
        headerCellClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </div>
  );
};

export const CategoriesFallback = () => {
  const skeletonData = Array.from({ length: 10 }, (_, i) => ({ id: i }));

  const columns: DataTableColumn<{ id: number }>[] = [
    {
      header: 'Category',
      cellClassName: 'category-cell',
      cell: () => <div className="skeleton rounded category-skeleton" />,
    },
    {
      header: 'Top Gainer',
      cellClassName: 'top-gainers-cell',
      cell: () => (
        <div className="flex items-center gap-1">
          <div className="skeleton coin-skeleton" />
          <div className="skeleton coin-skeleton" />
          <div className="skeleton coin-skeleton" />
        </div>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'change-header-cell',
      cell: () => (
        <div className="change-cell flex items-center gap-1">
          <div className="skeleton change-icon" />
          <div className="skeleton rounded value-skeleton-sm" />
        </div>
      ),
    },
    {
      header: 'Market Cap',
      cellClassName: 'market-cap-cell',
      cell: () => <div className="skeleton rounded value-skeleton-lg" />,
    },
    {
      header: '24h Volume',
      cellClassName: 'volume-cell',
      cell: () => <div className="skeleton rounded value-skeleton-md" />,
    },
  ];

  return (
    <div id="categories-fallback" className="custom-scrollbar">
      <h4>Top Categories</h4>
      <DataTable
        data={skeletonData}
        columns={columns}
        rowKey={(item) => item.id.toString()}
        tableClassName="mt-3"
      />
    </div>
  );
};
