<div align="center">
  <img src="public/logo.svg" alt="TrackFast Logo" width="200" />

  <h3>⚡ Real-time Cryptocurrency Tracker</h3>

  <p>A sleek, fast, and modern crypto dashboard built with Next.js 16 & React 19</p>

  ![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)
  ![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss)

</div>

---

## ✨ Features

- 📊 **Live Bitcoin Overview** — Real-time price tracking with interactive candlestick charts
- 🔥 **Trending Coins** — Stay updated with the hottest cryptocurrencies
- 📈 **Category Analytics** — Track top crypto categories by market cap and volume
- 💹 **All Coins Explorer** — Browse paginated list of all cryptocurrencies with key metrics
- 🎨 **Beautiful UI** — Dark-themed, modern design with smooth animations
- ⚡ **Blazing Fast** — Server-side rendering with smart caching strategies

---

## 📸 Pages Overview

### 🏠 Home Page (`/`)

The dashboard's landing page featuring:

| Section | Description |
|---------|-------------|
| **Coin Overview** | Bitcoin spotlight with live price and interactive candlestick chart (1D, 7D, 30D, 1Y periods) |
| **Trending Coins** | Top 6 trending cryptocurrencies with 24h price changes |
| **Top Categories** | Top 10 crypto categories ranked by market cap |

### 💰 All Coins Page (`/coins`)

A comprehensive paginated table showing:

- **Rank** — Market cap ranking
- **Token** — Name, symbol, and logo
- **Price** — Current USD price
- **24h Change** — Daily price movement (color-coded)
- **Market Cap** — Total market capitalization

### 🔍 Coin Detail Page (`/coins/[id]`) — *Coming Soon*

Detailed view for individual cryptocurrencies.

### 🔎 Search Modal — *Coming Soon*

Quick search functionality to find any cryptocurrency.

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Charts** | [Lightweight Charts](https://tradingview.github.io/lightweight-charts/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Data Source** | [CoinGecko API](https://www.coingecko.com/en/api) |
| **UI Components** | [Radix UI](https://www.radix-ui.com/) + Custom components |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- CoinGecko API Key ([Get one here](https://www.coingecko.com/en/api))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/trackfast.git
   cd trackfast
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   COINGECKO_BASE_URL=https://api.coingecko.com/api/v3
   COINGECKO_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) 🎉

---

## 📁 Project Structure

```
trackfast/
├── app/
│   ├── layout.tsx          # Root layout with Header
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── coins/
│       └── page.tsx         # All coins listing page
├── components/
│   ├── CandlestickChart.tsx # Interactive price chart
│   ├── CoinsPagination.tsx  # Pagination component
│   ├── DataTable.tsx        # Reusable data table
│   ├── Header.tsx           # Navigation header
│   ├── home/
│   │   ├── Categories.tsx   # Top categories section
│   │   ├── CoinOverview.tsx # Bitcoin overview section
│   │   ├── TrendingCoin.tsx # Trending coins section
│   │   └── fallback.tsx     # Loading skeletons
│   └── ui/                  # Reusable UI primitives
├── lib/
│   ├── coingecko.actions.ts # API fetcher with caching
│   └── utils.ts             # Utility functions
├── constants.ts             # Chart configs & constants
└── type.d.ts                # TypeScript type definitions
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

---

## 🎯 Roadmap

- [x] Home dashboard with coin overview
- [x] Trending coins section
- [x] Top categories table
- [x] All coins paginated listing
- [x] Interactive candlestick charts
- [ ] Individual coin detail page
- [ ] Search modal with instant results
- [ ] Watchlist functionality
- [ ] Portfolio tracker
- [ ] Price alerts

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p>Built with ❤️ using Next.js & CoinGecko API</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
