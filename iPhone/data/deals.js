/* 最優惠：主要經銷商的 iPhone 18 Pro 系列與 iPhone Duo 促銷整理
 * 讀取日：2026-10-08（台北時間）。只收錄「經銷商官網」或「新聞報導」寫明的內容；沒寫的一律標示「不知道」，不推測補上。
 * s：o = 經銷商官網（讀取當日頁面）；n = 新聞報導（二手，官網未見同一則）；i = 說明（非優惠本身）
 * start / end：活動起訖日（YYYY-MM-DD），頁面有寫才填；網頁會依瀏覽者今天的日期顯示「進行中／已結束／尚未開始」
 * 活動內容、名額、期限常變動，一切以店家公告為準。
 */
window.DEALS = {
  read: "2026-10-08",
  best: {
    pro: {
      h: { z: "目前查得到、條件最明確的，是德誼獨立門市的刷卡加碼；其餘要看你要現金回饋、贈品抽獎，還是舊換新。", e: "The most clearly stated offer I could verify is Data Express’s card bonus at its stand-alone stores. For the rest, it depends on whether you want cash back, gifts or a prize draw, or a trade-in." },
      pts: [
        { z: "價格：STUDIO A 與 iStore 官網標示的 iPhone 18 Pro 價格相同（256GB 44,900 元起），沒有直接降價。差別在贈品、回饋和分期，不在標價。", e: "Price: STUDIO A and iStore list the same iPhone 18 Pro prices (from NT$44,900 for 256GB), with no direct discount. The difference is in gifts, rewards and installments, not the sticker price." },
        { z: "想要「回到口袋的錢」：德誼官網寫明 iPhone 18 Pro 系列單筆分期滿 45,000 元加碼 1,200 元（到 10/31，限量 3,000 名，要先登錄），另有一般滿額刷卡金。但只列在「獨立門市」，北北基只有台北台大店（羅斯福路三段 292 號）。若定價同為 44,900 元，256GB 單機差 100 元，要搭配周邊或選 512GB 以上。哪家銀行、能否和一般滿額一起拿，頁面沒寫，請向門市確認。", e: "If you want money back: Data Express’s site says a single installment purchase of NT$45,000 or more on iPhone 18 Pro models earns an extra NT$1,200 (until 10/31, 3,000 places, registration first), plus general spend-based card rewards. These are listed only for its “stand-alone stores”, and in the Taipei area that is only the Taipei NTU store (292 Sec. 3, Roosevelt Rd.). If the price is also NT$44,900, a 256GB phone alone falls NT$100 short, so add an accessory or pick 512GB or more. The page does not say which bank, or whether this stacks with the general rewards, so ask the store." },
        { z: "想要贈品或抽獎：STUDIO A 官網寫「好禮五選一」（五樣是什麼頁面沒寫）；報導提到購機登錄抽獎到 11/30。德誼的「讓選擇，更值得」抽獎只見於報導，德誼官網活動頁沒看到。", e: "If you want gifts or a prize draw: STUDIO A’s site says “pick one of five gifts” (it does not say what they are), and a news report mentions a purchase-registration draw until 11/30. Data Express’s draw appears only in news reports; I did not see it on its own offers page." },
        { z: "舊換新：報導提到德誼最高加碼 15%、燦坤最高加碼 20%，但這是報導數字，期限和條件不明。建議兩家各拿一份現場估價再比較。", e: "Trade-in: news reports mention up to 15% extra at Data Express and up to 20% at Tkec (Sinya), but those are reported figures with unclear terms and dates. Get an in-store quote from each and compare." },
        { z: "燦坤的官網預購已在 9/13 結束；開賣後的銀行限量現折只見於報導，名額還剩多少不知道。iStore、優仕：不知道有沒有活動。", e: "Tkec’s official pre-order ended 9/13. Its after-launch bank discounts appear only in news reports, and I do not know how many places are left. iStore and Youth: I do not know whether they have any offer." }
      ],
      f: { z: "如果只能照資料選一家：要刷卡分期買 512GB 以上，先看德誼台北台大店；要贈品或抽獎，看 STUDIO A；舊換新金額大，就在德誼與燦坤各估一次價。以上不是保證，下單前請向店家確認條件與名額。", e: "If you must pick one from this data: for a card installment purchase of 512GB or more, look at the Data Express Taipei NTU store first; for gifts or a draw, look at STUDIO A; if the trade-in value matters most, get a quote at both Data Express and Tkec. None of this is a guarantee, so confirm the terms and remaining places with the store before you buy." }
    },
    duo: {
      h: { z: "iPhone Duo 目前沒有足夠資料比較促銷：預購要到 10/16 晚上 8 點才開始。", e: "There is not enough data to compare iPhone Duo offers yet: pre-orders only open at 8 p.m. on 10/16." },
      pts: [
        { z: "目前唯一查得到的是 STUDIO A 的預約：鑽石／白金會員 10/16 20:00 到 10/18 23:59，全會員 10/19 10:00 起到 10/31。預約頁只寫期間與會員資格，贈品和折扣沒寫；預約也不等於保證有貨。", e: "The only thing I could find is STUDIO A’s reservation: Diamond/Platinum members 10/16 20:00 to 10/18 23:59, all members from 10/19 10:00 to 10/31. The page states only the dates and member tier, not gifts or discounts, and a reservation does not guarantee stock." },
        { z: "德誼、iStore、燦坤、優仕：查不到 iPhone Duo 專屬活動，不知道。iStore 官網的 iPhone Duo 分類頁目前沒有商品。", e: "Data Express, iStore, Tkec and Youth: I found no iPhone Duo offer, so I do not know. iStore’s iPhone Duo category page has no products yet." },
        { z: "德誼的 iPhone 18 Pro 刷卡加碼，頁面寫的是「iPhone 18 Pro 系列」，請不要假設也適用 iPhone Duo。", e: "Data Express’s iPhone 18 Pro card bonus is written for “iPhone 18 Pro models”, so do not assume it also applies to iPhone Duo." }
      ],
      f: { z: "建議：想先卡位就看 STUDIO A 的預約；其他家等 10/16 之後再查，並向店家確認是否適用刷卡與舊換新活動。", e: "Suggestion: to get a place early, look at STUDIO A’s reservation; check the others after 10/16 and ask each store whether card and trade-in offers apply." }
    }
  },
  shops: [
    {
      id: "studioa", name: "STUDIO A", brand: "studioa",
      links: [
        { z: "STUDIO A 官網：iPhone 最新優惠", e: "STUDIO A site: iPhone offers", u: "https://www.studioa.com.tw/landing/iphone" },
        { z: "STUDIO A 官網：預約頁", e: "STUDIO A site: reservations", u: "https://www.studioa.com.tw/booking" },
        { z: "報導：三立新聞網（鏡週刊轉載）2026/09/17", e: "News: SET News via Mirror Media, 2026/09/17", u: "https://www.mirrormedia.mg/external/setn_1908687" }
      ],
      pro: [
        { s: "o", end: "2026-11-01", t: { z: "秋盛典｜iPhone 新機上市", e: "Autumn event | new iPhone launch" }, d: { z: "頁面標題「最高9折，現省$4,252」，商品標示「大禮包最高省$4252好禮五選一」。五樣好禮是什麼、有什麼條件，頁面沒寫。", e: "The page title says “up to 10% off, save NT$4,252” and products say “gift bundle saves up to NT$4,252, pick one of five”. What the five gifts are, and any conditions, are not on the page." }, p: { z: "頁面寫「2025/09/17~2026/11/01」（年份看起來是筆誤，照原文）", e: "The page says “2025/09/17~2026/11/01” (the year looks like a typo; quoted as written)" } },
        { s: "o", end: "2026-11-30", start: "2026-09-15", t: { z: "iPhone 18 Pro 系列預約（全會員）", e: "iPhone 18 Pro reservation (all members)" }, d: { z: "預約頁只寫活動名稱與期間，內容、贈品、條件沒寫。", e: "The reservation page states only the name and dates, not the content, gifts or conditions." }, p: { z: "2026/09/15 10:00 起到 2026/11/30", e: "From 2026/09/15 10:00 to 2026/11/30" } },
        { s: "o", t: { z: "標價", e: "List prices" }, d: { z: "iPhone 18 Pro：256GB 44,900、512GB 51,900、1TB 66,900、2TB 88,900 元。iPhone 18 Pro Max：256GB 49,900 元起。512GB 以上標示「現貨或預購」。", e: "iPhone 18 Pro: 256GB NT$44,900, 512GB 51,900, 1TB 66,900, 2TB 88,900. iPhone 18 Pro Max: from NT$49,900 for 256GB. 512GB and up are marked “in stock or pre-order”." }, p: { z: "沒有期限", e: "No end date" } },
        { s: "n", end: "2026-11-30", t: { z: "購機登錄抽獎", e: "Purchase-registration prize draw" }, d: { z: "在 STUDIO A、Straight A 全台門市或官網購買 iPhone 或 Apple Watch 新機，並加購保固或任一副廠周邊即可登錄。最大獎是 1 元購得 iPhone 18 Pro 256GB（1 名），另有 5 名 1 元購 AirPods 5、10,000 點會員點數等。", e: "Buy a new iPhone or Apple Watch at any STUDIO A or Straight A store or online, and add a warranty or any third-party accessory, to register. Top prize: an iPhone 18 Pro 256GB for NT$1 (1 winner); also 5 winners buy AirPods 5 for NT$1, 10,000 member points, and more." }, p: { z: "到 2026/11/30", e: "Until 2026/11/30" } },
        { s: "n", t: { z: "指定周邊 9 折、支付回饋", e: "10% off selected accessories, payment rewards" }, d: { z: "PQI、MAGEASY、Maktar、AUKEY、MONOCOZZI、Zeiss、UAG 指定商品限時 9 折。台灣 Pay 付款享 10% 現金回饋（每卡或帳戶上限 1,000 元）；指定信用卡最長 12 期 0 利率，滿額刷卡金最高 23,000 元。", e: "Selected products from PQI, MAGEASY, Maktar, AUKEY, MONOCOZZI, Zeiss and UAG are 10% off for a limited time. Taiwan Pay earns 10% cash back (cap NT$1,000 per card or account); selected credit cards get up to 12 interest-free installments and spend-based card rewards of up to NT$23,000." }, p: { z: "報導沒寫期間", e: "The report gives no dates" } },
        { s: "n", t: { z: "舊換新加碼、AppleCare+ 贈品", e: "Trade-in bonus, AppleCare+ gift" }, d: { z: "指定機型舊機換新最高再加碼 10% 折抵；購機加購 AppleCare+ 可獲贈最高 4,350 元的周邊禮品。", e: "Up to 10% extra trade-in value on selected models; adding AppleCare+ earns accessory gifts worth up to NT$4,350." }, p: { z: "報導沒寫期間", e: "The report gives no dates" } }
      ],
      duo: [
        { s: "o", start: "2026-10-16", end: "2026-10-18", t: { z: "iPhone Duo 系列限時預約（鑽石／白金會員限定）", e: "iPhone Duo timed reservation (Diamond/Platinum members only)" }, d: { z: "預約頁只寫期間與會員資格，贈品、折扣、條件沒寫。", e: "The page states only the dates and member tier, not gifts, discounts or conditions." }, p: { z: "10/16 20:00 到 10/18 23:59", e: "10/16 20:00 to 10/18 23:59" } },
        { s: "o", start: "2026-10-19", end: "2026-10-31", t: { z: "iPhone Duo 系列預約（全會員）", e: "iPhone Duo reservation (all members)" }, d: { z: "預約頁只寫期間，贈品、折扣、條件沒寫。", e: "The page states only the dates, not gifts, discounts or conditions." }, p: { z: "10/19 10:00 起到 10/31", e: "From 10/19 10:00 to 10/31" } }
      ]
    },
    {
      id: "dataexpress", name: "德誼數位 Data Express", brand: "dataexpress",
      links: [
        { z: "德誼官網：最新優惠（刷卡與分期）", e: "Data Express site: offers (cards and installments)", u: "https://www.dataexpress.com.tw/page-activity-detail/9ff1dbd2-3b30-4b4d-80c5-87c3a4ee837c" },
        { z: "德誼官網：最新優惠列表", e: "Data Express site: all offers", u: "https://www.dataexpress.com.tw/page/page-activity" },
        { z: "報導：Sogi 手機王 2026/09/18", e: "News: Sogi, 2026/09/18", u: "https://www.sogi.com.tw/articles/apple-iphone-18-pro/6269690" }
      ],
      pro: [
        { s: "o", start: "2026-09-09", end: "2026-10-31", t: { z: "iPhone 18 Pro 分期加碼刷卡金", e: "iPhone 18 Pro installment card bonus" }, d: { z: "指定商品：iPhone 18 Pro 系列指定新機及周邊。單筆分期滿 45,000 元，加碼回饋 1,200 元；限量 3,000 名，需登錄，限分期。頁面這一段沒寫是哪家銀行。", e: "Eligible: selected iPhone 18 Pro models and accessories. A single installment purchase of NT$45,000 or more earns an extra NT$1,200; 3,000 places, registration required, installments only. This part of the page does not say which bank." }, p: { z: "2026/09/09 到 10/31", e: "2026/09/09 to 10/31" } },
        { s: "o", start: "2026-10-01", end: "2026-12-31", t: { z: "一般分期滿額刷卡金（最高 23,000 元）", e: "General installment spend rewards (up to NT$23,000)" }, d: { z: "滿 15,000 元回饋 250 元、滿 25,000 元 500 元、滿 60,000 元 1,200 元，之後每滿 100,000 元 2,300 元。每月 1 日開放當月登錄，每月限量 1,000 名，需在消費當月登錄。未限定機型；是否適用 iPhone Duo 頁面沒寫。", e: "NT$250 back at NT$15,000, NT$500 at NT$25,000, NT$1,200 at NT$60,000, then NT$2,300 per NT$100,000. Registration opens on the 1st of each month, 1,000 places a month, and you must register in the month you spend. No model is specified; the page does not say whether iPhone Duo qualifies." }, p: { z: "2026/10/01 到 12/31", e: "2026/10/01 to 12/31" } },
        { s: "i", t: { z: "適用門市：只限獨立門市", e: "Which stores: stand-alone stores only" }, d: { z: "上面兩項刷卡優惠在官網歸在「獨立門市」，百貨門市要依各百貨公司公告。官網列的獨立門市：台北台大（羅斯福路三段 292 號 1 樓）、台中 NOVA 2 店、NOVA 東海、員林、台南民族。北北基只有台北台大店（本站地圖資料裡叫「德誼數位@台北羅斯福店」，地址相同）。", e: "The site files the two card offers above under “stand-alone stores”; department-store branches follow each department store’s own rules. Stand-alone stores listed: Taipei NTU (292 Sec. 3, Roosevelt Rd., 1F), Taichung NOVA 2, NOVA Donghai, Yuanlin and Tainan Minzu. In the Taipei area only the Taipei NTU store qualifies (the map data here calls it “德誼數位@台北羅斯福店”; same address)." }, p: { z: "—", e: "—" } },
        { s: "o", start: "2026-01-01", end: "2026-12-31", t: { z: "分期 0 利率", e: "0% installments" }, d: { z: "購買主機及周邊，依指定銀行與期數享 0 利率：3 期有星展、遠東商銀、第一、聯邦、永豐、兆豐、凱基、台新、國泰世華、台北富邦、玉山等多家；6 期星展；12 與 15 期星展、台新；18 期星展。實際以銀行與門市公告為準。", e: "On devices and accessories, 0% installments by bank and term: 3 months with many banks (DBS, Far Eastern, First, Union, SinoPac, Mega, KGI, Taishin, Cathay, Fubon, E.SUN and others); 6 months DBS; 12 and 15 months DBS and Taishin; 18 months DBS. The bank and store announcements prevail." }, p: { z: "2026/01/01 到 12/31", e: "2026/01/01 to 12/31" } },
        { s: "o", end: "2026-10-31", start: "2026-09-01", t: { z: "JINS 折價券、iPASS MONEY 加碼點數", e: "JINS voucher, iPASS MONEY bonus points" }, d: { z: "全台德誼消費不限金額送 JINS 300 元折價券（9/1 到 10/31）。另有 iPASS MONEY 支付購買指定商品加贈好德點（9/22 到 10/31）；指定商品是否含 iPhone，頁面列表沒寫。", e: "Spend any amount at any Data Express store and get a NT$300 JINS voucher (9/1 to 10/31). Paying with iPASS MONEY on selected products also earns bonus loyalty points (9/22 to 10/31); the offers list does not say whether iPhone is included." }, p: { z: "9/1 到 10/31", e: "9/1 to 10/31" } },
        { s: "n", end: "2026-10-31", t: { z: "「讓選擇，更值得」抽獎與換新優惠（官網活動頁未見）", e: "“Choose better” draw and trade-in offers (not seen on the site’s offers page)" }, d: { z: "報導提到：會員購買 iPhone 18 Pro 系列可抽星宇航空單人來回機票（價值 25,000 元）；回收指定 iPhone 最高加碼 15%；加購 Apple Care 可二選一拿無線磁吸充電器；門號攜碼月付 1,399 元（30 個月）另加贈 17,100 元折扣金。", e: "A news report says: members who buy an iPhone 18 Pro model can enter a draw for a STARLUX round-trip ticket (worth NT$25,000); up to 15% extra for trading in selected iPhones; adding Apple Care earns a choice of two wireless chargers; a number-porting plan at NT$1,399 a month for 30 months adds a NT$17,100 discount." }, p: { z: "報導寫 9/18 到 10/31", e: "The report says 9/18 to 10/31" } }
      ],
      duo: [
        { s: "i", unknown: 1, t: { z: "iPhone Duo 專屬活動", e: "iPhone Duo-specific offers" }, d: { z: "不知道。德誼官網的優惠列表沒有 iPhone Duo 專屬活動。", e: "I do not know. Data Express’s offers list has no iPhone Duo-specific offer." }, p: { z: "—", e: "—" } }
      ]
    },
    {
      id: "istore", name: "iStore", brand: "istore",
      links: [
        { z: "iStore 官網：iPhone 18 Pro", e: "iStore site: iPhone 18 Pro", u: "https://ishop.istore.com.tw/categories/iphone-18-pro" },
        { z: "iStore 官網：iPhone Duo", e: "iStore site: iPhone Duo", u: "https://ishop.istore.com.tw/categories/iphone-duo" }
      ],
      pro: [
        { s: "o", t: { z: "標價（官網商品頁）", e: "List prices (site product page)" }, d: { z: "iPhone 18 Pro：256GB 44,900、512GB 51,900、1TB 66,900、2TB 88,900 元，與 STUDIO A 相同。商品頁沒有原價、折扣、贈品或預約活動。門市或會員有沒有其他活動：不知道。", e: "iPhone 18 Pro: 256GB NT$44,900, 512GB 51,900, 1TB 66,900, 2TB 88,900, the same as STUDIO A. The product page shows no original price, discount, gift or reservation offer. Whether stores or members get other offers: I do not know." }, p: { z: "沒有期限", e: "No end date" } }
      ],
      duo: [
        { s: "i", unknown: 1, t: { z: "iPhone Duo", e: "iPhone Duo" }, d: { z: "不知道。官網 iPhone Duo 分類頁目前沒有商品，也沒有促銷。", e: "I do not know. The site’s iPhone Duo category page has no products and no offers." }, p: { z: "—", e: "—" } }
      ]
    },
    {
      id: "youth", name: "優仕 Youth", brand: "youth",
      links: [],
      pro: [
        { s: "i", unknown: 1, t: { z: "iPhone 18 Pro 促銷", e: "iPhone 18 Pro offers" }, d: { z: "不知道。找不到優仕的官方活動頁，也沒有報導提到優仕的 iPhone 18 Pro 促銷。", e: "I do not know. I could not find an official Youth offers page, and no report mentions a Youth iPhone 18 Pro offer." }, p: { z: "—", e: "—" } }
      ],
      duo: [
        { s: "i", unknown: 1, t: { z: "iPhone Duo 促銷", e: "iPhone Duo offers" }, d: { z: "不知道。同上，找不到優仕的官方來源。", e: "I do not know. As above, I found no official Youth source." }, p: { z: "—", e: "—" } }
      ]
    },
    {
      id: "tk3c", name: "燦坤 Tkec", brand: "tk3c",
      links: [
        { z: "燦坤官網：iPhone 18 Pro 預購活動辦法", e: "Tkec site: iPhone 18 Pro pre-order rules", u: "https://events.tk3c.com/events_net/2026ApplePreorder/" },
        { z: "報導：三立新聞網（鏡週刊轉載）2026/09/17", e: "News: SET News via Mirror Media, 2026/09/17", u: "https://www.mirrormedia.mg/external/setn_1908687" }
      ],
      pro: [
        { s: "o", start: "2026-09-12", end: "2026-09-13", t: { z: "線上預購專案", e: "Online pre-order package" }, d: { z: "會員以信用卡預購、到門市取貨。每台送「蘋安無憂轉資料服務」（會員價 700 元）與「滿萬送 300 元 Apple 指定配件商品券」；分期刷滿 37,000 元，台新燦坤聯名卡現折 2,500（限 80 張）、星展 2,500（120 張）、第一 2,400（50 張）、玉山 2,000（270 張）。Surpass 會員另送 35W 充電器。", e: "Members pre-order by credit card and collect in store. Each phone comes with a data-transfer service (member price NT$700) and an “NT$300 Apple accessory voucher per NT$10,000”; with installments of NT$37,000 or more, the Taishin Tkec card gets NT$2,500 off (80 cards), DBS 2,500 (120), First 2,400 (50) and E.SUN 2,000 (270). Surpass members also get a 35W charger." }, p: { z: "2026/09/12 20:00 到 09/13 23:59", e: "2026/09/12 20:00 to 09/13 23:59" } },
        { s: "n", start: "2026-09-18", end: "2026-09-30", t: { z: "開賣後配件金", e: "After-launch accessory credit" }, d: { z: "消費指定款 iPhone 18 Pro Max 與 iPhone 18 Pro，每滿 1 萬送 200 元指定配件金，單支手機最高 1,800 元。每人每卡限購 2 台。", e: "Buy selected iPhone 18 Pro Max and iPhone 18 Pro models and get NT$200 accessory credit per NT$10,000, up to NT$1,800 per phone. Limit two phones per person per card." }, p: { z: "9/18 到 9/30", e: "9/18 to 9/30" } },
        { s: "n", start: "2026-09-18", end: "2026-10-31", t: { z: "開賣後銀行限量現折", e: "After-launch limited bank discounts" }, d: { z: "台新（限台新燦坤聯名卡）最高現折 700 元；星展、第一、玉山各現折 2,500、2,400、2,000 元，皆為限量。目前還剩多少名額：不知道。", e: "Taishin (Tkec co-branded card only) up to NT$700 off; DBS, First and E.SUN NT$2,500, 2,400 and 2,000 off, all limited. How many places are left now: I do not know." }, p: { z: "9/18 到 10/31", e: "9/18 to 10/31" } },
        { s: "n", t: { z: "舊換新加碼", e: "Trade-in bonus" }, d: { z: "舊機換新估價加碼最高 20%。期限與條件報導沒寫，不確定。", e: "Up to 20% extra on trade-in valuations. The report gives no dates or conditions, so this is uncertain." }, p: { z: "不確定", e: "Uncertain" } },
        { s: "i", unknown: 1, t: { z: "官網 Apple 旗艦館", e: "Site Apple store page" }, d: { z: "讀取當天，燦坤官網 Apple 旗艦館頁面只列 iPhone 17 系列等商品，沒看到 iPhone 18 Pro 或 iPhone Duo 商品。", e: "When I read it, Tkec’s Apple store page listed only iPhone 17 models and the like, and showed no iPhone 18 Pro or iPhone Duo products." }, p: { z: "—", e: "—" } }
      ],
      duo: [
        { s: "i", unknown: 1, t: { z: "iPhone Duo 預購或預約", e: "iPhone Duo pre-order or reservation" }, d: { z: "不知道。官網和報導都沒有燦坤的 iPhone Duo 活動。", e: "I do not know. Neither the site nor the reports show a Tkec iPhone Duo offer." }, p: { z: "—", e: "—" } }
      ]
    }
  ]
};
