/* 熱賣儀表板：業者公布的 iPhone 18 Pro 系列（與 iPhone Duo）初期銷售／預約／問卷數據
 * 讀取日：2026-10-08（台北時間）。數字都出自下列新聞報導或德誼官網新聞，沒有 Apple 官方的台灣銷量，也沒有實際台數。
 * 各家口徑（預購、預約、問卷、首賣日成交）與時間不同，所以每個來源各自成一張卡，不合併、不平均。
 * rows[].v：畫長條用的數字（%）；vl：顯示的文字（保留原文「近／約／逾」）；a=1：原文是「近／約」；d=1：由原文推算（例如 100% 減去已知的部分）；na=1：原文沒給數字。
 */
window.SALES = {
  read: "2026-10-08",
  kpi: [
    { tab: "color", c: "burg", h: { z: "最多人選的顏色", e: "Most-chosen color" }, v: { z: "勃根地紅 近 40%", e: "Burgundy, nearly 40%" }, s: { z: "電商首波預購、台灣大預約；冰川藍次之", e: "E-commerce first-wave pre-orders and Taiwan Mobile reservations; Glacier Blue next" } },
    { tab: "cap", c: "c256", h: { z: "最多人選的容量", e: "Most-chosen capacity" }, v: { z: "256GB 約 65–70%", e: "256GB, about 65–70%" }, s: { z: "電商 70%、台灣大預約 70%、首賣日近 65%", e: "E-commerce 70%, Taiwan Mobile reservations 70%, launch day nearly 65%" } },
    { tab: "model", c: "pro", h: { z: "Pro 與 Pro Max", e: "Pro vs Pro Max" }, v: { z: "各通路說法不同", e: "Differs by channel" }, s: { z: "電商：Pro 約 60%；台灣大預約：Pro Max 50%", e: "E-commerce: Pro about 60%; Taiwan Mobile reservations: Pro Max 50%" } },
    { tab: "growth", c: "grow", h: { z: "較去年成長", e: "Growth over last year" }, v: { z: "近 10% 到超過 60%", e: "Nearly 10% to over 60%" }, s: { z: "電商銷額、電信首賣日；基準不同，不能互比", e: "E-commerce sales value and carriers’ launch day; different baselines, not comparable" } }
  ],
  sum: [
    { z: "顏色：「勃根地紅」在銷售與預約統計裡都領先：電商首波預購近四成、台灣大預約近四成、中華電信首賣日前三名有兩個是它；冰川藍次之。只有中華電信的 LINE 問卷把冰川藍排第一，那是問卷，不是成交。", e: "Color: Burgundy leads in the sales and reservation figures: nearly 40% of e-commerce first-wave pre-orders, nearly 40% of Taiwan Mobile reservations, and two of China Telecom’s top three on launch day. Glacier Blue comes next. Only China Telecom’s LINE survey ranks Glacier Blue first, and that is a survey, not purchases." },
    { z: "容量：實際預約與銷售以 256GB 為主（電商 70%、台灣大預約 70%、首賣日近 65%）。512GB 在問卷與偏好說法裡聲量高，但沒有任何一家公布 512GB 的銷售占比。", e: "Capacity: actual reservations and sales are mostly 256GB (70% for e-commerce, 70% of Taiwan Mobile reservations, nearly 65% on launch day). 512GB is popular in surveys and stated preferences, but no one has published 512GB’s share of sales." },
    { z: "機型：沒有一致答案。電商首波預購 18 Pro 約六成、Pro Max 約四成；台灣大預約是 Pro Max 占五成；中華電信首賣日排行 18 Pro 256GB 第一、Pro Max 256GB 第二。比較穩妥的說法是兩款都賣得好，誰多要看通路。", e: "Model: there is no single answer. E-commerce first-wave pre-orders were about 60% 18 Pro and 40% Pro Max; Taiwan Mobile reservations were 50% Pro Max; China Telecom’s launch-day ranking put the 18 Pro 256GB first and the Pro Max 256GB second. The safe reading is that both sell well, and which leads depends on the channel." },
    { z: "成長：各家都說比去年好，但基準不同：電商銷額近 10%，台灣大首賣日近 5 成，中華電信超過 6 成，不能直接互比。", e: "Growth: everyone says it beats last year, but the baselines differ: about 10% in e-commerce sales value, nearly 50% for Taiwan Mobile on launch day, over 60% for China Telecom. They cannot be compared directly." },
    { z: "給銷售的提醒：對客人說「最熱賣」時，要講明是哪一家、哪一段時間、預約還是成交。這些都是業者初期公布的數字，不是 Apple 的官方銷量，也沒有實際台數。", e: "A note for sales staff: when you tell a customer something is “the best seller”, say whose figures, which period, and whether it is reservations or purchases. These are early figures published by resellers, not Apple’s official sales, and no unit counts were given." }
  ],
  tabs: {
    model: [
      { kind: "presale", u: "https://udn.com/news/story/7241/9760309", s: { z: "經濟日報（udn）2026/09/17", e: "Economic Daily News (udn), 2026/09/17" }, t: { z: "全電商首波預購（依銷量）", e: "All e-commerce, first-wave pre-orders (by units)" }, per: { z: "9/12 晚上 8 點到 9/14", e: "9/12 8 p.m. to 9/14" },
        note: { z: "報導只寫「全電商」，沒有列出電商名稱。", e: "The report says only “all e-commerce” and names no sites." },
        rows: [ { l: { z: "iPhone 18 Pro", e: "iPhone 18 Pro" }, v: 60, vl: { z: "約 60%", e: "about 60%" }, a: 1, c: "pro" }, { l: { z: "iPhone 18 Pro Max", e: "iPhone 18 Pro Max" }, v: 40, vl: { z: "約 40%", e: "about 40%" }, a: 1, c: "max" } ] },
      { kind: "reserve", u: "https://www.sogi.com.tw/articles/apple-iphone-18-pro-max/6269637", s: { z: "Sogi 手機王 2026/09/12（台灣大哥大）", e: "Sogi, 2026/09/12 (Taiwan Mobile)" }, t: { z: "台灣大首波預約（整體 iPhone 新機預約量）", e: "Taiwan Mobile first-wave reservations (all new iPhone reservations)" }, per: { z: "9/11 上午 11 點起", e: "From 9/11 11 a.m." },
        note: { z: "預約開放範圍含 iPhone Duo，但原文沒說這個占比有沒有算進去。「其他」是 100% 減去 Pro Max 推算的，原文沒有拆開。", e: "Reservations included iPhone Duo, but the report does not say whether this share counts it. “Everything else” is 100% minus Pro Max; the report does not break it down." },
        rows: [ { l: { z: "iPhone 18 Pro Max", e: "iPhone 18 Pro Max" }, v: 50, vl: { z: "5 成", e: "50%" }, c: "max" }, { l: { z: "其他機型合計（Pro、Duo 等）", e: "All other models (Pro, Duo, etc.)" }, v: 50, vl: { z: "約 50%（推算）", e: "about 50% (derived)" }, d: 1, c: "other" } ] },
      { kind: "reserve", u: "https://www.dataexpress.com.tw/page-news-detail/af6bf23b-86bd-4e7c-96aa-92b80663085a", s: { z: "德誼官網新聞（中央社 2026/09/16）", e: "Data Express site news (CNA, 2026/09/16)" }, t: { z: "德誼的預約機款占比", e: "Data Express reservation mix" }, per: { z: "開賣前（9/16 公布）", e: "Before launch (published 9/16)" },
        note: { z: "原文：Pro 和 Pro Max 合計 75%，各占一半，其餘 25% 是摺疊機。各 37.5% 是由「各占一半」推算的。", e: "The report: Pro and Pro Max together 75%, half each, the other 25% foldable. 37.5% each is derived from “half each”." },
        rows: [ { l: { z: "iPhone 18 Pro", e: "iPhone 18 Pro" }, v: 37.5, vl: { z: "約 37.5%（推算）", e: "about 37.5% (derived)" }, d: 1, c: "pro" }, { l: { z: "iPhone 18 Pro Max", e: "iPhone 18 Pro Max" }, v: 37.5, vl: { z: "約 37.5%（推算）", e: "about 37.5% (derived)" }, d: 1, c: "max" }, { l: { z: "摺疊機（iPhone Duo）", e: "Foldable (iPhone Duo)" }, v: 25, vl: { z: "25%", e: "25%" }, c: "duo" } ] },
      { kind: "survey", u: "https://www.sogi.com.tw/articles/apple-iphone-18-pro-max/6269637", s: { z: "Sogi 手機王 2026/09/12（中華電信 LINE 問卷）", e: "Sogi, 2026/09/12 (China Telecom LINE survey)" }, t: { z: "中華電信 LINE 問卷：想買哪個機型", e: "China Telecom LINE survey: which model people want" }, per: { z: "9/10 起", e: "From 9/10" },
        note: { z: "這是問卷，不是預約或成交。原文只給 18 Pro 與 Pro Max 合計約 7 成，各自占比沒寫。", e: "This is a survey, not reservations or purchases. The report gives only about 70% for the 18 Pro and Pro Max together, not each." },
        rows: [ { l: { z: "iPhone 18 Pro ＋ Pro Max 合計", e: "iPhone 18 Pro + Pro Max together" }, v: 70, vl: { z: "約 70%", e: "about 70%" }, a: 1, c: "pro" }, { l: { z: "各自占比", e: "Each model separately" }, na: 1, vl: { z: "未公布", e: "not published" } } ] },
      { kind: "launch", u: "https://www.cna.com.tw/news/afe/202609180294.aspx", s: { z: "中央社 2026/09/18", e: "CNA, 2026/09/18" }, t: { z: "首賣日排行（沒有占比）", e: "Launch-day rankings (no shares given)" }, per: { z: "9/18 首賣日", e: "9/18 launch day" },
        rows: [],
        text: [ { z: "中華電信：iPhone 18 Pro 256GB 第一，iPhone 18 Pro Max 256GB 第二。", e: "China Telecom: iPhone 18 Pro 256GB first, iPhone 18 Pro Max 256GB second." }, { z: "遠傳：iPhone 18 Pro Max 最受青睞（沒有數字）。", e: "Far EasTone: iPhone 18 Pro Max is the favorite (no figures)." }, { z: "台灣大：沒有列出機型排名。", e: "Taiwan Mobile: no model ranking given." } ] }
    ],
    color: [
      { kind: "presale", u: "https://udn.com/news/story/7241/9760309", s: { z: "經濟日報（udn）2026/09/17", e: "Economic Daily News (udn), 2026/09/17" }, t: { z: "全電商首波預購：顏色（依銷量）", e: "All e-commerce first-wave pre-orders: color (by units)" }, per: { z: "9/12 晚上 8 點到 9/14", e: "9/12 8 p.m. to 9/14" },
        note: { z: "原文：兩款新色合計近七成。黑、銀合計約 30% 是推算的，原文沒有拆開。", e: "The report: the two new colors together nearly 70%. About 30% for black and silver together is derived and not broken down." },
        rows: [ { l: { z: "勃根地紅", e: "Burgundy" }, v: 40, vl: { z: "近 40%", e: "nearly 40%" }, a: 1, c: "burg" }, { l: { z: "冰川藍", e: "Glacier Blue" }, v: 30, vl: { z: "約 30%", e: "about 30%" }, a: 1, c: "glac" }, { l: { z: "其他（黑、銀）", e: "Others (black, silver)" }, v: 30, vl: { z: "約 30%（推算）", e: "about 30% (derived)" }, d: 1, c: "other" } ] },
      { kind: "reserve", u: "https://www.sogi.com.tw/articles/apple-iphone-18-pro-max/6269637", s: { z: "Sogi 手機王 2026/09/12（台灣大哥大）", e: "Sogi, 2026/09/12 (Taiwan Mobile)" }, t: { z: "台灣大首波預約：顏色", e: "Taiwan Mobile first-wave reservations: color" }, per: { z: "9/11 上午 11 點起", e: "From 9/11 11 a.m." },
        rows: [ { l: { z: "勃根地紅", e: "Burgundy" }, v: 40, vl: { z: "近 40%", e: "nearly 40%" }, a: 1, c: "burg" }, { l: { z: "冰川藍（次之）", e: "Glacier Blue (second)" }, na: 1, vl: { z: "占比未公布", e: "share not published" } } ] },
      { kind: "survey", u: "https://www.sogi.com.tw/articles/apple-iphone-18-pro-max/6269637", s: { z: "Sogi 手機王 2026/09/12（中華電信 LINE 問卷）", e: "Sogi, 2026/09/12 (China Telecom LINE survey)" }, t: { z: "中華電信 LINE 問卷：最想要的顏色", e: "China Telecom LINE survey: favorite color" }, per: { z: "9/10 起", e: "From 9/10" },
        note: { z: "這是問卷支持度，不是預約或成交，結果和上面兩組相反。", e: "This is survey support, not reservations or purchases, and it runs opposite to the two groups above." },
        rows: [ { l: { z: "冰川藍", e: "Glacier Blue" }, v: 46, vl: { z: "46%", e: "46%" }, c: "glac" }, { l: { z: "勃根地紅", e: "Burgundy" }, v: 26, vl: { z: "26%", e: "26%" }, c: "burg" } ] },
      { kind: "launch", u: "https://www.cna.com.tw/news/afe/202609180294.aspx", s: { z: "中央社 2026/09/18", e: "CNA, 2026/09/18" }, t: { z: "首賣日：熱銷顏色（沒有占比）", e: "Launch day: best-selling colors (no shares given)" }, per: { z: "9/18 首賣日", e: "9/18 launch day" },
        rows: [],
        text: [ { z: "中華電信：銷售前三名中，兩個是勃根地紅、一個是冰川藍。", e: "China Telecom: of the top three sellers, two are Burgundy and one is Glacier Blue." }, { z: "台灣大：勃根地紅是 iPhone 18 Pro 與 Pro Max 共同的人氣冠軍。", e: "Taiwan Mobile: Burgundy is the shared favorite for both the iPhone 18 Pro and Pro Max." }, { z: "遠傳：勃根地紅最搶手，冰川藍次之。", e: "Far EasTone: Burgundy is hottest, Glacier Blue next." } ] }
    ],
    cap: [
      { kind: "presale", u: "https://udn.com/news/story/7241/9760309", s: { z: "經濟日報（udn）2026/09/17", e: "Economic Daily News (udn), 2026/09/17" }, t: { z: "全電商首波預購：容量", e: "All e-commerce first-wave pre-orders: capacity" }, per: { z: "9/12 晚上 8 點到 9/14", e: "9/12 8 p.m. to 9/14" },
        note: { z: "原文只說 512GB 次之。512GB 以上合計約 30% 是 100% 減去 256GB 推算的，沒有 512GB 的確切數字。", e: "The report says only that 512GB is second. About 30% for 512GB and up is 100% minus 256GB; there is no exact 512GB figure." },
        rows: [ { l: { z: "256GB", e: "256GB" }, v: 70, vl: { z: "70%", e: "70%" }, c: "c256" }, { l: { z: "512GB 以上合計", e: "512GB and up together" }, v: 30, vl: { z: "約 30%（推算）", e: "about 30% (derived)" }, d: 1, c: "c512" } ] },
      { kind: "reserve", u: "https://www.sogi.com.tw/articles/apple-iphone-18-pro-max/6269637", s: { z: "Sogi 手機王 2026/09/12（台灣大哥大）", e: "Sogi, 2026/09/12 (Taiwan Mobile)" }, t: { z: "台灣大首波預約：容量", e: "Taiwan Mobile first-wave reservations: capacity" }, per: { z: "9/11 上午 11 點起", e: "From 9/11 11 a.m." },
        rows: [ { l: { z: "256GB", e: "256GB" }, v: 70, vl: { z: "7 成", e: "70%" }, c: "c256" }, { l: { z: "其他容量合計", e: "All other capacities" }, v: 30, vl: { z: "約 30%（推算）", e: "about 30% (derived)" }, d: 1, c: "c512" } ] },
      { kind: "launch", u: "https://www.cna.com.tw/news/afe/202609180294.aspx", s: { z: "中央社 2026/09/18", e: "CNA, 2026/09/18" }, t: { z: "台灣大首賣日：容量（iPhone 18 Pro 與 Pro Max）", e: "Taiwan Mobile launch day: capacity (iPhone 18 Pro and Pro Max)" }, per: { z: "9/18 首賣日", e: "9/18 launch day" },
        rows: [ { l: { z: "256GB", e: "256GB" }, v: 65, vl: { z: "近 65%", e: "nearly 65%" }, a: 1, c: "c256" }, { l: { z: "其他容量合計", e: "All other capacities" }, v: 35, vl: { z: "約 35%（推算）", e: "about 35% (derived)" }, d: 1, c: "c512" } ] },
      { kind: "survey", u: "https://www.sogi.com.tw/articles/apple-iphone-18-pro-max/6269637", s: { z: "Sogi 手機王 2026/09/12（中華電信 LINE 問卷）", e: "Sogi, 2026/09/12 (China Telecom LINE survey)" }, t: { z: "中華電信 LINE 問卷：想要的容量", e: "China Telecom LINE survey: capacity people want" }, per: { z: "9/10 起", e: "From 9/10" },
        note: { z: "這是問卷，不是成交。想要的和實際買的差很多。", e: "This is a survey, not purchases. What people want and what they buy differ a lot." },
        rows: [ { l: { z: "512GB", e: "512GB" }, v: 45, vl: { z: "約 45%", e: "about 45%" }, a: 1, c: "c512" } ] },
      { kind: "launch", u: "https://www.cna.com.tw/news/afe/202609180294.aspx", s: { z: "中央社 2026/09/18", e: "CNA, 2026/09/18" }, t: { z: "首賣日其他說法（沒有占比）", e: "Other launch-day statements (no shares given)" }, per: { z: "9/18 首賣日", e: "9/18 launch day" },
        rows: [],
        text: [ { z: "中華電信：排行以 256GB 為主，沒有列出容量占比。", e: "China Telecom: the ranking is mostly 256GB; no capacity shares given." }, { z: "遠傳：說果迷偏好 512GB，沒有數字。", e: "Far EasTone: says fans prefer 512GB, with no figures." } ] }
    ],
    growth: [
      { kind: "reserve", u: "https://www.sogi.com.tw/articles/apple-iphone-18-pro-max/6269637", s: { z: "Sogi 手機王 2026/09/12", e: "Sogi, 2026/09/12" }, t: { z: "預約階段：較去年成長", e: "Reservation stage: growth over last year" }, per: { z: "9/10–9/11 起（各家開放時間不同）", e: "From 9/10–9/11 (each carrier opened at a different time)" },
        note: { z: "遠傳：首日登記量較去年同期成長逾 1 倍；台灣大：預約量較去年高階機種同期成長近 2 倍。中華電信沒寫。基準不同，不能互比。", e: "Far EasTone: first-day sign-ups over 100% above the same period last year. Taiwan Mobile: reservations nearly 200% above last year’s high-end models over the same period. China Telecom gave none. The baselines differ, so don’t compare them." },
        max: 200,
        rows: [ { l: { z: "遠傳（首日登記量）", e: "Far EasTone (first-day sign-ups)" }, v: 100, vl: { z: "逾 100%", e: "over 100%" }, c: "grow" }, { l: { z: "台灣大（預約量）", e: "Taiwan Mobile (reservations)" }, v: 200, vl: { z: "近 200%", e: "nearly 200%" }, a: 1, c: "grow" } ] },
      { kind: "presale", u: "https://news.cnyes.com/news/id/6609923", s: { z: "鉅亨網 2026/09/18、經濟日報 2026/09/17", e: "Anue (cnyes) 2026/09/18, Economic Daily News 2026/09/17" }, t: { z: "預購階段：較去年成長", e: "Pre-order stage: growth over last year" }, per: { z: "預購期間", e: "Pre-order period" },
        note: { z: "台灣大只說預購量「年對年成長雙位數」，沒有確切數字，所以只標文字。電商是「銷額」，不是銷量。", e: "Taiwan Mobile says only that pre-orders grew “by double digits” year on year, with no exact figure, so only text is shown. E-commerce is sales value, not units." },
        max: 100,
        rows: [ { l: { z: "台灣大（預購量）", e: "Taiwan Mobile (pre-orders)" }, na: 1, vl: { z: "雙位數成長（未公布確切數字）", e: "double-digit growth (exact figure not published)" } }, { l: { z: "全電商（銷額）", e: "All e-commerce (sales value)" }, v: 10, vl: { z: "近 10%", e: "nearly 10%" }, a: 1, c: "grow" } ] },
      { kind: "launch", u: "https://www.cna.com.tw/news/afe/202609180294.aspx", s: { z: "中央社 2026/09/18", e: "CNA, 2026/09/18" }, t: { z: "首賣日：較去年成長", e: "Launch day: growth over last year" }, per: { z: "9/18 首賣日", e: "9/18 launch day" },
        note: { z: "中華電信比的是去年 17 Pro 系列；台灣大只寫「去年」，沒說哪一段；遠傳比的是 17 系列首賣日，只說「顯著成長」。", e: "China Telecom compares with last year’s 17 Pro series; Taiwan Mobile says only “last year”, without the period; Far EasTone compares with the 17 series launch day and says only “significant growth”." },
        max: 100,
        rows: [ { l: { z: "中華電信", e: "China Telecom" }, v: 60, vl: { z: "超過 60%", e: "over 60%" }, c: "grow" }, { l: { z: "台灣大（整體銷售量）", e: "Taiwan Mobile (total units)" }, v: 50, vl: { z: "近 50%", e: "nearly 50%" }, a: 1, c: "grow" }, { l: { z: "遠傳", e: "Far EasTone" }, na: 1, vl: { z: "顯著成長（沒有數字）", e: "significant growth (no figure)" } } ] }
    ],
    duo: [
      { kind: "reserve", u: "https://www.dataexpress.com.tw/page-news-detail/af6bf23b-86bd-4e7c-96aa-92b80663085a", s: { z: "德誼官網新聞（中央社 2026/09/16）", e: "Data Express site news (CNA, 2026/09/16)" }, t: { z: "德誼：摺疊機占預約機款", e: "Data Express: foldable share of reservations" }, per: { z: "開賣前（9/16 公布）", e: "Before launch (published 9/16)" },
        rows: [ { l: { z: "摺疊機（iPhone Duo）", e: "Foldable (iPhone Duo)" }, v: 25, vl: { z: "25%", e: "25%" }, c: "duo" } ] },
      { kind: "survey", u: "https://www.sogi.com.tw/articles/apple-iphone-18-pro-max/6269637", s: { z: "Sogi 手機王 2026/09/12（中華電信 LINE 問卷）", e: "Sogi, 2026/09/12 (China Telecom LINE survey)" }, t: { z: "中華電信 LINE 問卷：iPhone Duo 顏色", e: "China Telecom LINE survey: iPhone Duo color" }, per: { z: "9/10 起", e: "From 9/10" },
        note: { z: "問卷，不是預約或成交。「6 成」「4 成」是原文寫法。", e: "A survey, not reservations or purchases. “60%” and “40%” are the report’s own wording." },
        rows: [ { l: { z: "星光白", e: "Starlight white" }, v: 60, vl: { z: "6 成", e: "60%" }, c: "duo" }, { l: { z: "夜空色", e: "Night sky" }, v: 40, vl: { z: "4 成", e: "40%" }, c: "other" } ] },
      { kind: "reserve", u: "https://www.sogi.com.tw/articles/apple-iphone-18-pro-max/6269637", s: { z: "Sogi 手機王 2026/09/12（台灣大哥大）", e: "Sogi, 2026/09/12 (Taiwan Mobile)" }, t: { z: "台灣大 myfone：iPhone Duo 預約", e: "Taiwan Mobile myfone: iPhone Duo reservations" }, per: { z: "9/11 起", e: "From 9/11" },
        rows: [ { l: { z: "開放後額滿時間", e: "Time to sell out after opening" }, na: 1, vl: { z: "2 分鐘額滿（沒有占比或台數）", e: "sold out in 2 minutes (no share or units)" } } ] }
    ]
  }
};
