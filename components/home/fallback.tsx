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
