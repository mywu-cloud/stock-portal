# stock-portal — PiNNCafe 股市入口

`stock.pinncafe.com` 的 Tab 入口頁。各工具仍在自己的 repo / Cloudflare Pages 獨立開發部署，本 repo 只負責以 iframe 分頁整合。

| Tab | 子站 | Repo |
|---|---|---|
| 大盤K線 | twstock-3a2.pages.dev | twstock |
| 法人籌碼 | nettrade.pages.dev | nettrade |
| 期貨持倉 | futures-0v4.pages.dev | futures |
| 大股東籌碼 | majorsh.pages.dev | msh |
| 月營收 | finrev.pages.dev | finrev |
| EPS 排行 | fineps.pages.dev | fineps |
| 外資匯出入 | fxremit.pages.dev | FxRemit |
| ETF 持股 | etf-2xx.pages.dev | ETF |

## 修改分頁
只改 `tabs.js`（名稱、順序、網址）。push 後 Cloudflare Pages 自動部署。

## 使用
- `stock.pinncafe.com/#nettrade` 直接開指定分頁；未指定時回到上次分頁
- Alt+1…8 切換分頁；右上角可重新整理或在新視窗開啟
- 分頁切換時保留各站狀態（不重新載入）

## 部署（Cloudflare Pages）
1. Workers & Pages → Create → Pages → Connect to Git → 選 `stock-portal`
2. Framework preset: None；Build command 留空；Output directory: `/`
3. 專案 → Custom domains → Set up a custom domain → `stock.pinncafe.com`（pinncafe.com 已在 Cloudflare，CNAME 會自動建立）

## 注意
- 子站若日後加上 `X-Frame-Options: DENY` 或 `frame-ancestors`，會無法嵌入；需允許 `https://stock.pinncafe.com`。
- 瀏覽器會把 iframe 內的 localStorage 依上層網站分區：在入口頁內使用時，子站的設定 / FinMind Token 需重新輸入一次（與直接開 pages.dev 互不共用）。
