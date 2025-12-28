import CoinOverview from '@/components/home/CoinOverview';
import TrendingCoin from '@/components/home/TrendingCoin';
import {
  CoinOverviewFallback,
  TrendingCoinsFallback,
} from '@/components/home/fallback';
import React, { Suspense } from 'react';

const Page = async () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview />
        </Suspense>

        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoin />
        </Suspense>
      </section>

      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  );
};

export default Page;
