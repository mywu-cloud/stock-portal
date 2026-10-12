// ── 分頁設定 ─────────────────────────────────────────────
// 新增 / 移除 / 排序分頁只需修改這個陣列，各子站程式完全不用動。
//   id    : 網址 hash 使用（stock.pinncafe.com/#nettrade）
//   label : 分頁顯示名稱
//   url   : 子站網址（日後若改綁自有子網域，只改這裡）
//   repo  : 對應的 GitHub repo（僅供備註）
window.STOCK_TABS = [
  { id: "twstock", label: "大盤K線",   url: "https://twstock-3a2.pages.dev/",              repo: "mywu-cloud/twstock" },
  { id: "nettrade", label: "法人籌碼",  url: "https://nettrade.pages.dev/#cat=combo&mkt=twse&src=fubon&side=buy&cf=all&cs=score&etf=1", repo: "mywu-cloud/nettrade" },
  { id: "futures", label: "期貨持倉",   url: "https://futures-0v4.pages.dev/?id=foreign",   repo: "mywu-cloud/futures" },
  { id: "msh",     label: "大股東籌碼", url: "https://majorsh.pages.dev/top-changes/",      repo: "mywu-cloud/msh" },
  { id: "finrev",  label: "月營收",     url: "https://finrev.pages.dev/",                   repo: "mywu-cloud/finrev" },
  { id: "fineps",  label: "EPS 排行",   url: "https://fineps.pages.dev/",                   repo: "mywu-cloud/fineps" },
  { id: "fxremit", label: "外資匯出入", url: "https://fxremit.pages.dev/",                  repo: "mywu-cloud/FxRemit" },
  { id: "etf",     label: "ETF 持股",   url: "https://etf-2xx.pages.dev/",                  repo: "mywu-cloud/ETF" },
];
