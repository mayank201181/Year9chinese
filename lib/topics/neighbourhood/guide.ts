import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "neighbourhood",
  title: "Neighbourhood & Directions (社区与方向)",
  strand: "Home & Community",
  icon: "🗺️",
  summary:
    "Describe neighbourhood facilities (我家附近有…), measure distance with 离 (lí) and transport modes, give step-by-step street directions, and compare city centre vs suburbs.",
  intro:
    "Whether you are explaining what lies near Tanglin Trust School around One-North and Holland Village, guiding a visitor to the nearest MRT station (**地铁站 dìtiězhàn**), or debating city centre (**市中心 shìzhōngxīn**) versus suburbs (**郊区 jiāoqū**) in an IGCSE 0547 essay, Mandarin relies on crystal-clear spatial patterns: **附近有…** for local amenities, **A 离 B + 很近/很远** for distance, **往 + direction + verb** for turns, and **比 / 没有** for neighbourhood comparisons.",
  guide: [
    {
      id: "local-facilities",
      heading: "Places in the Neighbourhood (社区设施)",
      discovery: {
        problem:
          "Compare how English and Mandarin express 'There is a supermarket and a library near my home':\n- **English:** *Near my home, there is a supermarket and a library.*\n- **Mandarin:** **我家附近有一家超市和一个图书馆。** (Wǒ jiā fùjìn yǒu yì jiā chāoshì hé yí gè túshūguǎn.)\n\nLook at **我家附近** ('my home's vicinity') and the classifiers **家 (jiā)** and **个 (gè)**. Where does **附近 (fùjìn — nearby)** sit relative to **我家**, and why is there NO **在** at the start of the sentence?",
        idea: "**附近 (fùjìn)** behaves like a position word — it ALWAYS follows the reference place (**我家附近**, NEVER *附近我家*). And just like room descriptions, introducing places uses the existence formula **Place + 有 + Object** (NO leading 在!): **我家附近有一家超市和一个图书馆。** Shops, banks, and restaurants often use the smart classifier **家 (jiā)**!",
      },
      body: `To describe your neighbourhood (**社区 shèqū**), start from your anchor point (**我家附近** — near my home, or **学校附近** — near school) and list the key facilities around it.

### 12 Essential Neighbourhood Facilities (社区设施)
| Hanzi | Pinyin | English | Natural Measure Word & Use |
|---|---|---|---|
| 超市 | chāoshì | supermarket | 一家超市 (yì jiā chāoshì) — 买东西 |
| 银行 | yínháng | bank | 一家银行 (yì jiā yínháng) — 取钱 / 换钱 |
| 邮局 | yóujú | post office | 一个邮局 (yí gè yóujú) — 寄信 / 寄包裹 |
| 医院 | yīyuàn | hospital | 一家医院 (yì jiā yīyuàn) — 看病 |
| 公园 | gōngyuán | park | 一个公园 (yí gè gōngyuán) — 散步 / 跑步 |
| 图书馆 | túshūguǎn | library | 一个图书馆 (yí gè túshūguǎn) — 看书 / 借书 |
| 电影院 | diànyǐngyuàn | cinema | 一家电影院 (yì jiā diànyǐngyuàn) — 看电影 |
| 地铁站 | dìtiězhàn | MRT / subway station | 一个地铁站 (yí gè dìtiězhàn) — 坐地铁 |
| 公共汽车站 | gōnggòng qìchēzhàn | bus stop | 一个公共汽车站 — 坐公共汽车 |
| 购物中心 | gòuwù zhōngxīn | shopping mall | 一个购物中心 — 逛街 / 买衣服 |
| 体育中心 | tǐyù zhōngxīn | sports centre | 一个体育中心 — 做运动 / 游泳 |
| 餐厅 | cāntīng | restaurant | 一家餐厅 (yì jiā cāntīng) — 吃饭 |

### Describing Your Neighbourhood with **附近有…** & **对面有…**
- **我家附近有一家大超市、一个地铁站和一个公园，生活非常方便。**
  *(Wǒ jiā fùjìn yǒu yì jiā dà chāoshì, yí gè dìtiězhàn hé yí gè gōngyuán, shēnghuó fēicháng fāngbiàn. — Near my home there is a big supermarket, an MRT station, and a park; life is very convenient.)*
- **学校对面有一个体育中心，图书馆在公园的旁边。**
  *(Xuéxiào duìmiàn yǒu yí gè tǐyù zhōngxīn, túshūguǎn zài gōngyuán de pángbiān. — Opposite the school there is a sports centre, and the library is next to the park.)*

### Pro Tip: Watch the Polyphone **银行 (yínháng)**!
The character **行** has two common readings: **xíng** (okay / walk) and **háng** (trade / line / bank). In **银行 (bank)**, it is ALWAYS **yínháng** (never *yínxíng*)!`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Neighbourhood facility map around我家 showing supermarket, MRT station, library, park, cinema, and sports centre in Simplified Chinese">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">我家附近有什么？ · Neighbourhood Facilities Map</text>
  <rect x="218" y="96" width="124" height="58" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <text x="280" y="121" text-anchor="middle" font-size="15" font-weight="800" fill="var(--brand)">我家 (wǒ jiā)</text>
  <text x="280" y="140" text-anchor="middle" font-size="11" fill="var(--ink)">附近 fùjìn (nearby)</text>
  <rect x="26" y="42" width="132" height="46" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="92" y="63" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">超市 chāoshì</text>
  <text x="92" y="80" text-anchor="middle" font-size="10" fill="var(--ink-2)">一家超市 (Supermarket)</text>
  <rect x="214" y="38" width="132" height="44" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="280" y="58" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">地铁站 dìtiězhàn</text>
  <text x="280" y="74" text-anchor="middle" font-size="10" fill="var(--ink-2)">MRT Station</text>
  <rect x="402" y="42" width="132" height="46" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="468" y="63" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">图书馆 túshūguǎn</text>
  <text x="468" y="80" text-anchor="middle" font-size="10" fill="var(--ink-2)">Library</text>
  <rect x="26" y="166" width="132" height="46" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>
  <text x="92" y="187" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">公园 gōngyuán</text>
  <text x="92" y="204" text-anchor="middle" font-size="10" fill="var(--ink-2)">Park</text>
  <rect x="214" y="172" width="132" height="46" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>
  <text x="280" y="193" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">购物中心</text>
  <text x="280" y="210" text-anchor="middle" font-size="10" fill="var(--ink-2)">gòuwù zhōngxīn (Mall)</text>
  <rect x="402" y="166" width="132" height="46" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>
  <text x="468" y="187" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">体育中心</text>
  <text x="468" y="204" text-anchor="middle" font-size="10" fill="var(--ink-2)">tǐyù zhōngxīn (Sports)</text>
  <line x1="158" y1="80" x2="218" y2="110" stroke="var(--brand)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="280" y1="82" x2="280" y2="96" stroke="var(--brand)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="402" y1="80" x2="342" y2="110" stroke="var(--brand)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="158" y1="170" x2="218" y2="140" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="280" y1="154" x2="280" y2="172" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="402" y1="170" x2="342" y2="140" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="280" y="238" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">Pattern: 我家附近有 + [Facilities] · Place + 附近 ALWAYS puts 附近 after the noun!</text>
</svg>`,
      diagramCaption:
        "Anchor neighbourhood tours with 我家附近有… (Near my home there is…) and pair each place with what you do there.",
      whyItWorks:
        "Building names in Mandarin end with logical category suffixes: **院 (yuàn)** = large institution/courtyard (**医院** hospital, **电影院** cinema); **馆 (guǎn)** = cultural/service hall (**图书馆** library, **体育馆** gym); **站 (zhàn)** = transport stop (**地铁站** MRT station, **公共汽车站** bus stop); **中心 (zhōngxīn)** = centre (**购物中心**, **体育中心**). Recognising those four suffixes makes decoding new town vocabulary effortless!",
      keyPoints: [
        "Place **附近 (fùjìn — nearby)** AFTER the reference place: **我家附近有…**, **学校附近有…** (no leading 在!).",
        "Use **家 (jiā)** as the smart business classifier for shops, banks, hospitals, cinemas, and restaurants (**一家超市**, **一家银行**, **一家餐厅**).",
        "Master the four facility suffixes: **站 (station/stop)**, **院 (hospital/cinema)**, **馆 (library/hall)**, **中心 (centre)**.",
        "Always read **银行** as **yínháng** (never *yínxíng*) and **邮局** as **yóujú** (post office).",
        "Upgrade every neighbourhood sentence by adding what you do there: **我周末常去图书馆看书、去体育中心游泳。**",
      ],
      strategies: [
        "Group neighbourhood facilities by purpose — **Transport** (地铁站, 公共汽车站), **Daily Needs** (超市, 银行, 邮局, 医院), and **Leisure** (公园, 图书馆, 电影院, 购物中心, 体育中心, 餐厅) — so you never run out of ideas in speaking or writing exams.",
        "Follow any **我家附近有…** sentence with **所以生活非常方便** ('so daily life is very convenient') to show immediate cause-and-effect.",
      ],
      workedExamples: [
        {
          title: "Describing Local Amenities Near Your Home",
          problem:
            "Translate into natural Simplified Chinese (with tone-marked Pinyin): 'Near my home there is a supermarket, a park, and an MRT station, so it is very convenient.'",
          steps: [
            "Build the location anchor: **我家附近** (wǒ jiā fùjìn — near my home). Do NOT put 在 before it!",
            "Add **有** and exact classifiers: **一家超市** (supermarket), **一个公园** (park), **一个地铁站** (MRT station).",
            "Join the list with **`、`** and **和** before the last noun, then add the consequence **所以非常方便**.",
          ],
          answer:
            "我家附近有一家超市、一个公园和一个地铁站，所以非常方便。(Wǒ jiā fùjìn yǒu yì jiā chāoshì, yí gè gōngyuán hé yí gè dìtiězhàn, suǒyǐ fēicháng fāngbiàn.)",
          yourTurn: {
            question:
              "Write the Mandarin word for **library** in Simplified Chinese or tone-marked Pinyin.",
            answer: {
              type: "text",
              accept: ["图书馆", "túshūguǎn"],
              display: "图书馆 (túshūguǎn)",
            },
            solution:
              "**图书馆 (túshūguǎn)** literally means 'chart-book hall' — library.",
          },
        },
        {
          title: "Matching Places to Daily Activities",
          problem:
            "Complete the sentence with the right neighbourhood facility: **我每个星期六都去___寄信，然后去___看电影。**",
          steps: [
            "**寄信 (jì xìn)** means 'to post/mail a letter' → the matching facility is **邮局 (yóujú — post office)**.",
            "**看电影 (kàn diànyǐng)** means 'to watch a film' → the matching facility is **电影院 (diànyǐngyuàn — cinema)**.",
            "Combine: **我每个星期六都去邮局寄信，然后去电影院看电影。**",
          ],
          answer: "邮局；电影院 (yóujú; diànyǐngyuàn)",
          yourTurn: {
            question:
              "Which neighbourhood facility in Simplified Chinese or tone-marked Pinyin is a **shopping mall** (4 characters)?",
            answer: {
              type: "text",
              accept: ["购物中心", "gòuwù zhōngxīn"],
              display: "购物中心 (gòuwù zhōngxīn)",
            },
            solution:
              "**购物 (gòuwù = shopping) + 中心 (zhōngxīn = centre)** = **购物中心 (gòuwù zhōngxīn)**.",
          },
        },
      ],
      thinkDeeper:
        "In Singapore, people often say **商场 (shāngchǎng)** or **购物中心 (gòuwù zhōngxīn)** for a shopping mall, and **食阁 (shígé)** or **小贩中心 (xiǎofàn zhōngxīn)** for a food court / hawker centre. How could mentioning local Singapore landmarks like **地铁站** and **小贩中心** make your Year 9 oral presentation sound authentic while keeping standard IGCSE vocabulary?",
    },
    {
      id: "distance-li-transport",
      heading: "Expressing Distance with 离 (lí) & Transport",
      discovery: {
        problem:
          "Look carefully at these three Mandarin distance sentences:\n1. **我家离学校很近。** (Wǒ jiā lí xuéxiào hěn jìn. — My home is very close to school.)\n2. **市中心离机场很远。** (Shìzhōngxīn lí jīchǎng hěn yuǎn. — The city centre is very far from the airport.)\n3. **从我家到学校坐地铁只要二十分钟。** (Cóng wǒ jiā dào xuéxiào zuò dìtiě zhǐ yào èrshí fēnzhōng. — From my home to school by MRT takes only 20 minutes.)\n\nSpot why English speakers frequently make a mistake with **离 (lí)**: where does **离** sit in the sentence, and do we EVER write **是** before **很近 / 很远**?",
        idea: "**离 (lí — 'away from')** sits directly between the two places: **A + 离 + B + 很近 / 很远 / 不远 / 大概两公里**! NEVER insert **是** (*我家是离学校很近* ❌) and NEVER translate 'close to' with *跟…近* or *到…近* ❌. Meanwhile, when naming a journey from start to finish, switch to **从 A 到 B** (cóng A dào B — from A to B) + transport + duration!",
      },
      body: `Expressing how close places are and how long it takes to get there is a Year 9 & IGCSE staple. Master these two rock-solid templates:

### Template 1: Measuring Distance with **离 (lí)**
- **A + 离 + B + 很近 / 很远 / 不远 / 不太远**
  - **我家离学校很近。** *(Wǒ jiā lí xuéxiào hěn jìn. — My home is very close to school.)*
  - **公园离我家不远。** *(Gōngyuán lí wǒ jiā bù yuǎn. — The park is not far from my home.)*
  - **超市离地铁站有多远？** *(Chāoshì lí dìtiězhàn yǒu duō yuǎn? — How far is the supermarket from the MRT station?)*
- Adding an exact distance or travel time right after **离**:
  - **我家离学校大概三公里。** *(Wǒ jiā lí xuéxiào dàgài sān gōnglǐ. — My home is about 3 km from school.)*
  - **地铁站离我家只有五百米。** *(Dìtiězhàn lí wǒ jiā zhǐ yǒu wǔbǎi mǐ. — The MRT station is only 500 metres from my home.)*

### Template 2: Journey & Transport with **从 A 到 B (cóng A dào B)**
Remember Mandarin's **Action + Time Duration** rule and **Transport Verb + Vehicle**:

| Transport Phrase | Pinyin | English | Duration Example |
|---|---|---|---|
| 走路 / 步行 | zǒulù / bùxíng | walk / on foot | 走路十分钟 (10-minute walk) |
| 坐地铁 | zuò dìtiě | take the MRT / subway | 坐地铁二十分钟 (20 mins by MRT) |
| 坐公共汽车 | zuò gōnggòng qìchē | take the bus | 坐公共汽车十五分钟 (15 mins by bus) |
| 坐出租车 | zuò chūzūchē | take a taxi | 坐出租车十分钟 (10 mins by taxi) |
| 骑自行车 | qí zìxíngchē | ride a bicycle | 骑自行车一刻钟 (15 mins by bike) |
| 开车 | kāichē | drive a car | 爸爸开车送我上学 (Dad drives me to school) |

### Putting **从 A 到 B** + Transport + Duration Together
- **从我家到地铁站走路只要五分钟。**
  *(Cóng wǒ jiā dào dìtiězhàn zǒulù zhǐ yào wǔ fēnzhōng. — Walking from my home to the MRT station only takes 5 minutes.)*
- **从学校到购物中心坐公共汽车要十五分钟。**
  *(Cóng xuéxiào dào gòuwù zhōngxīn zuò gōnggòng qìchē yào shíwǔ fēnzhōng. — Taking the bus from school to the mall takes 15 minutes.)*
- **Watch out for 坐 (zuò) vs 骑 (qí) vs 开 (kāi):**
  - Sit inside a vehicle → **坐** (坐地铁, 坐公共汽车, 坐出租车)
  - Straddle a bike/horse → **骑** (骑自行车)
  - Operate/drive a car yourself → **开** (开车)`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Distance and transport timeline showing A 离 B 很近 and 从 A 到 B with walk, bike, bus, and MRT durations">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="25" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">距离与交通 · Distance (离) &amp; Journey (从…到…)</text>
  <rect x="24" y="42" width="512" height="62" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <rect x="40" y="55" width="96" height="36" rx="8" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="88" y="78" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">我家 (A)</text>
  <rect x="150" y="55" width="76" height="36" rx="8" fill="var(--brand)"/>
  <text x="188" y="78" text-anchor="middle" font-size="15" font-weight="800" fill="var(--surface)">离 lí</text>
  <rect x="240" y="55" width="96" height="36" rx="8" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="288" y="78" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">学校 (B)</text>
  <rect x="350" y="55" width="170" height="36" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="435" y="78" text-anchor="middle" font-size="13" font-weight="800" fill="var(--good)">很近 / 很远 / 不远</text>
  <rect x="24" y="118" width="512" height="106" rx="10" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.2"/>
  <text x="280" y="140" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">从 我家 到 学校 · Cóng A dào B + Transport + Duration</text>
  <rect x="40" y="154" width="112" height="54" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.2"/>
  <text x="96" y="176" text-anchor="middle" font-size="13" font-weight="800" fill="var(--good)">走路 zǒulù</text>
  <text x="96" y="195" text-anchor="middle" font-size="11" fill="var(--ink-2)">十分钟 (walk)</text>
  <rect x="164" y="154" width="112" height="54" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.2"/>
  <text x="220" y="176" text-anchor="middle" font-size="13" font-weight="800" fill="var(--good)">骑自行车</text>
  <text x="220" y="195" text-anchor="middle" font-size="11" fill="var(--ink-2)">qí zìxíngchē</text>
  <rect x="288" y="154" width="112" height="54" rx="8" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="344" y="176" text-anchor="middle" font-size="13" font-weight="800" fill="var(--brand)">坐地铁</text>
  <text x="344" y="195" text-anchor="middle" font-size="11" fill="var(--ink-2)">zuò dìtiě</text>
  <rect x="412" y="154" width="112" height="54" rx="8" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.2"/>
  <text x="468" y="176" text-anchor="middle" font-size="13" font-weight="800" fill="var(--bad)">坐公共汽车</text>
  <text x="468" y="195" text-anchor="middle" font-size="11" fill="var(--ink-2)">zuò gōnggòng qìchē</text>
</svg>`,
      diagramCaption:
        "Use A 离 B + 很近/很远 to state distance directly (no 是!), and 从 A 到 B + Transport + Time to explain how you commute.",
      whyItWorks:
        "**离 (lí)** originally meant 'to separate / be apart from'. So **我家离学校很近** literally says 'My home separated-from school is very close'. Because **很近** is an adjectival predicate, Mandarin needs NO **是** — just like 天气很热! And **骑 (qí)** has the horse radical **马** on the left, reminding you it is for things you sit astride (bicycles, horses, motorbikes), NOT buses or trains!",
      keyPoints: [
        "Always use **`A 离 B + 很近 / 很远 / 不远`** to express distance — NEVER use 跟/到 with 近/远, and NEVER insert 是.",
        "Ask 'How far is A from B?' using **`A 离 B 有多远？`** (e.g. 地铁站离我家有多远？).",
        "Express 'from A to B' using **`从 A 到 B`** (**从我家到学校**).",
        "Match transport verbs cleanly: **走路** (walk), **坐** (坐地铁 / 坐公共汽车 / 坐出租车), **骑** (骑自行车), **开** (开车).",
        "Place transport + **要 / 只要** + minutes right after **从 A 到 B**: **从我家到公园走路只要十分钟。**",
      ],
      strategies: [
        "Combine **离** + **从…到…** into a two-sentence pair in every speaking/writing response: **我家离学校不太远。从我家到学校坐地铁只要十五分钟。**",
        "Check your verb before 自行车: if you wrote *坐自行车*, stop immediately! Look for the horse radical **马** in **骑 (qí)** → **骑自行车**.",
      ],
      workedExamples: [
        {
          title: "Stating Distance with 离 and Commute Time with 从…到…",
          problem:
            "Translate into Simplified Chinese (with tone-marked Pinyin): 'My home is not far from the MRT station. Walking from my home to the MRT station takes 10 minutes.'",
          steps: [
            "Sentence 1 uses `A 离 B + 不远`: **我家离地铁站不远。** (Wǒ jiā lí dìtiězhàn bù yuǎn.)",
            "Sentence 2 uses `从 A 到 B + 走路 + 要 + 十分钟`: **从我家到地铁站走路要十分钟。** (or 走路十分钟就到了).",
            "Verify: NO 是 before 不远, and 离 sits directly between 我家 and 地铁站.",
          ],
          answer:
            "我家离地铁站不远。从我家到地铁站走路要十分钟。(Wǒ jiā lí dìtiězhàn bù yuǎn. Cóng wǒ jiā dào dìtiězhàn zǒulù yào shí fēnzhōng.)",
          yourTurn: {
            question:
              "Fill in the single Mandarin preposition meaning 'away from' in: **医院___我家很近。** (Simplified Chinese or tone-marked Pinyin.)",
            answer: {
              type: "text",
              accept: ["离", "lí"],
              display: "离 (lí)",
            },
            solution:
              "Distance between two places always uses **离 (lí)**: **医院离我家很近** (The hospital is very close to my home).",
          },
        },
        {
          title: "Choosing the Right Transport Verb",
          problem:
            "Fix the transport verb in both incorrect phrases: (1) *我每天坐自行车去公园。* (2) *我每天骑地铁去学校。*",
          steps: [
            "For a bicycle (**自行车**), you straddle it → use **骑 (qí)**, never 坐: **骑自行车**.",
            "For the MRT/subway (**地铁**), you sit inside it as a passenger → use **坐 (zuò)**, never 骑: **坐地铁**.",
            "Write the corrected sentences clearly.",
          ],
          answer:
            "1) 我每天骑自行车去公园。(Wǒ měitiān qí zìxíngchē qù gōngyuán.) 2) 我每天坐地铁去学校。(Wǒ měitiān zuò dìtiě qù xuéxiào.)",
          yourTurn: {
            question:
              "Translate **to take the MRT (subway)** into Simplified Chinese or tone-marked Pinyin.",
            answer: {
              type: "text",
              accept: ["坐地铁", "zuò dìtiě"],
              display: "坐地铁 (zuò dìtiě)",
            },
            solution:
              "Being a passenger on a train/MRT takes **坐 (zuò)**: **坐地铁 (zuò dìtiě)**.",
          },
        },
      ],
      thinkDeeper:
        "What is the subtle difference between **从我家到学校走路十分钟** ('Walking from my home to school takes 10 minutes') and **从我家到学校走路只要十分钟** ('Walking from my home to school takes ONLY 10 minutes')? How does adding the single adverb **只 (zhǐ — only)** signal that the speaker feels the school is conveniently close?",
    },
    {
      id: "giving-directions",
      heading: "Asking for & Giving Directions (问路和指路)",
      discovery: {
        problem:
          "Read this street dialogue in Singapore:\n- **Visitor:** 请问，去地铁站怎么走？(Qǐngwèn, qù dìtiězhàn zěnme zǒu?)\n- **Local:** 你先一直往前走，过马路，在第一个路口往左拐，再走两分钟，地铁站就在你的右边。(Nǐ xiān yìzhí wǎng qián zǒu, guò mǎlù, zài dì-yī gè lùkǒu wǎng zuǒ guǎi, zài zǒu liǎng fēnzhōng, dìtiězhàn jiù zài nǐ de yòubiān.)\n\nLook at the word **往 (wǎng — towards)** in **往前走** and **往左拐**. Where does **往 + Direction** sit relative to the verb (**走** walk / **拐** turn)?",
        idea: "In Mandarin, **往 (wǎng) + Direction** ALWAYS goes **BEFORE** the motion verb! You literally say 'towards-front walk' (**往前走**), 'towards-left turn' (**往左拐**), 'towards-right turn' (**往右拐**) — NEVER *走往前* or *拐左*!",
      },
      body: `Asking for and giving directions (**问路和指路 wènlù hé zhǐlù**) is one of the most rewarding IGCSE Role-Play scenarios because five core phrases handle almost any street map!

### 1. Asking Politely for Directions (问路 wènlù)
Always open with **请问 (qǐngwèn — Excuse me, may I ask…)**:
- **请问，[Place] 怎么走？** *(Qǐngwèn, … zěnme zǒu? — Excuse me, how do I get to …?)*
  - 请问，地铁站怎么走？*(Excuse me, how do I get to the MRT station?)*
  - 请问，去图书馆怎么走？*(Excuse me, how do I get to the library?)*
- **请问，这儿附近有 [Place] 吗？** *(Qǐngwèn, zhèr fùjìn yǒu … ma? — Excuse me, is there a … near here?)*

### 2. The 6 Essential Direction Commands (指路 zhǐlù)
| Mandarin Phrase | Pinyin | English | Watch Out! |
|---|---|---|---|
| **一直往前走** | yìzhí wǎng qián zǒu | walk straight ahead | 往前 goes BEFORE 走 |
| **往左拐 / 往左转** | wǎng zuǒ guǎi / zhuǎn | turn left | 往左 goes BEFORE 拐 |
| **往右拐 / 往右转** | wǎng yòu guǎi / zhuǎn | turn right | 往右 goes BEFORE 拐 |
| **过马路** | guò mǎlù | cross the road | 过 = cross, 马路 = road |
| **在第一个路口** | zài dì-yī gè lùkǒu | at the first intersection | 第 + Number + 个 + 路口 |
| **就在你的右边 / 左边** | jiù zài nǐ de yòubiān / zuǒbiān | it's right on your right / left | 就 = 'right there!' |

### 3. Sequencing Multi-Step Routes Clearly
Use **先…，然后…，再…** (first…, then…, next…) and **红绿灯 (hónglǜdēng — traffic lights)** / **十字路口 (shízì lùkǒu — crossroads)**:
1. **你先一直往前走，** *(First go straight ahead,)*
2. **过马路以后，在第一个红绿灯往右拐，** *(after crossing the road, turn right at the first traffic lights,)*
3. **再一直走大概五分钟，** *(then keep walking straight for about 5 minutes,)*
4. **图书馆就在你的左边，超市的对面。** *(and the library is right on your left, opposite the supermarket.)*

### 4. Polite Closings
- **谢谢你！/ 太感谢你了！** *(Xièxie nǐ! / Tài gǎnxiè nǐ le! — Thank you!)*
- **不客气！** *(Bú kèqi! — You're welcome!)*`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Street directions map showing 一直往前走, 过马路, 在第一个路口往左拐, and 就在你的右边">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">指路路线图 · Step-by-Step Street Directions</text>
  <rect x="40" y="138" width="480" height="32" fill="var(--surface-2)" stroke="var(--line)"/>
  <rect x="256" y="42" width="36" height="178" fill="var(--surface-2)" stroke="var(--line)"/>
  <line x1="150" y1="140" x2="150" y2="168" stroke="var(--ink-2)" stroke-width="2" stroke-dasharray="4 3"/>
  <line x1="160" y1="140" x2="160" y2="168" stroke="var(--ink-2)" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="155" y="186" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">过马路 guò mǎlù</text>
  <circle cx="62" cy="154" r="10" fill="var(--good)"/>
  <text x="62" y="190" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">起点 Start</text>
  <path d="M 74 154 L 274 154 L 274 72" fill="none" stroke="var(--brand)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <polygon points="274,60 266,76 282,76" fill="var(--brand)"/>
  <text x="165" y="128" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">① 一直往前走 yìzhí wǎng qián zǒu</text>
  <circle cx="274" cy="154" r="6" fill="var(--bad)"/>
  <text x="394" y="158" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">② 在第一个路口往左拐</text>
  <text x="394" y="186" text-anchor="middle" font-size="11" fill="var(--ink-2)">zài dì-yī gè lùkǒu wǎng zuǒ guǎi</text>
  <rect x="312" y="48" width="176" height="54" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <text x="400" y="72" text-anchor="middle" font-size="13" font-weight="800" fill="var(--brand)">③ 图书馆 就在你的右边</text>
  <text x="400" y="90" text-anchor="middle" font-size="11" fill="var(--ink)">jiù zài nǐ de yòubiān</text>
  <text x="280" y="232" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">Formula: 往 + Direction (前 / 左 / 右) ALWAYS goes BEFORE Verb (走 / 拐)!</text>
</svg>`,
      diagramCaption:
        "Follow the red arrow: 一直往前走 → 过马路 → 在第一个路口往左拐 → 就在你的右边.",
      whyItWorks:
        "Mandarin always follows **chronological & pre-verbal modifier order**: you set the **Place** first (**在第一个路口** — at the first intersection), then the **Direction** (**往左** — towards the left), and ONLY THEN the **Action** (**拐** — turn)! That matches the STPVO rule you will rely on right through IGCSE.",
      keyPoints: [
        "Ask directions politely with **`请问，[Place] 怎么走？`** (Excuse me, how do I get to …?).",
        "Always put **`往 + Direction`** BEFORE the verb: **一直往前走** (straight ahead), **往左拐** (turn left), **往右拐** (turn right).",
        "Name intersections with **`在 + 第 + Number + 个 + 路口`** (e.g. **在第一个路口**, **在第二个红绿灯**).",
        "Use **过马路 (guò mǎlù)** for 'cross the road' and **红绿灯 (hónglǜdēng)** for 'traffic lights'.",
        "Pinpoint the destination at the end with **`[Place] 就在你的左边 / 右边`** ('is right on your left / right').",
      ],
      strategies: [
        "Memorise the 4-beat rhythm for ANY direction answer: **先一直往前走 → 过马路 → 在第X个路口往左/右拐 → 就在你的左/右边**.",
        "In listening exams, trace the path on paper with your pencil tip facing the direction of travel — left/right flips when you turn!",
      ],
      workedExamples: [
        {
          title: "Giving 3-Step Directions to the Post Office",
          problem:
            "Translate into natural Simplified Chinese (with tone-marked Pinyin): 'Go straight ahead, turn right at the second intersection, and the post office is right on your left.'",
          steps: [
            "Step 1 ('go straight ahead'): **一直往前走** (yìzhí wǎng qián zǒu).",
            "Step 2 ('at the second intersection turn right'): Place FIRST (**在第二个路口**), then Direction + Verb (**往右拐**).",
            "Step 3 ('the post office is right on your left'): **邮局就在你的左边** (yóujú jiù zài nǐ de zuǒbiān).",
            "Connect smoothly with commas.",
          ],
          answer:
            "一直往前走，在第二个路口往右拐，邮局就在你的左边。(Yìzhí wǎng qián zǒu, zài dì-èr gè lùkǒu wǎng yòu guǎi, yóujú jiù zài nǐ de zuǒbiān.)",
          yourTurn: {
            question:
              "Translate **turn left** into Simplified Chinese or tone-marked Pinyin using 往, 左, and 拐 (or 转).",
            answer: {
              type: "text",
              accept: ["往左拐", "往左转", "wǎng zuǒ guǎi", "wǎng zuǒ zhuǎn"],
              display: "往左拐 (wǎng zuǒ guǎi)",
            },
            solution:
              "Direction (`往左`) goes BEFORE the turn verb (`拐` / `转`): **往左拐 (wǎng zuǒ guǎi)**.",
          },
        },
        {
          title: "Asking Politely for Directions",
          problem:
            "How do you politely ask a passer-by: 'Excuse me, how do I get to the hospital?'",
          steps: [
            "Open politely with **请问，** (qǐngwèn — Excuse me, may I ask…).",
            "Place the destination **医院** (or **去医院**) before **怎么走？** (zěnme zǒu — how to go).",
            "Combine: **请问，医院怎么走？** (or **请问，去医院怎么走？**).",
          ],
          answer: "请问，医院怎么走？(Qǐngwèn, yīyuàn zěnme zǒu?)",
          yourTurn: {
            question:
              "Write the 3-character Mandarin phrase for **cross the road** in Simplified Chinese or tone-marked Pinyin.",
            answer: {
              type: "text",
              accept: ["过马路", "guò mǎlù"],
              display: "过马路 (guò mǎlù)",
            },
            solution:
              "**过 (guò = cross) + 马路 (mǎlù = road)** = **过马路 (guò mǎlù)**.",
          },
        },
      ],
      thinkDeeper:
        "Why is a crossroads called **十字路口 (shízì lùkǒu)** in Mandarin? Look closely at the character **十 (shí — ten)**: it literally looks like a **+ (cross)** where two roads intersect! Can you guess what **丁字路口 (dīngzì lùkǒu)** means just by looking at the shape of the character **丁**?",
    },
    {
      id: "comparing-neighbourhoods",
      heading: "City vs Suburbs & Neighbourhood Opinions",
      discovery: {
        problem:
          "Read this balanced Year 9 opinion comparing two living areas:\n**郊区没有市中心热闹，但是空气更新鲜，环境也更安静。** *(Jiāoqū méiyǒu shìzhōngxīn rènào, dànshì kōngqì gèng xīnxiān, huánjìng yě gèng ānjìng.)*\n\nLook at how the speaker avoided saying *郊区比市中心不热闹* (which is WRONG in Mandarin!). What structure did they use for 'not as lively as', and what word did they place before **新鲜** and **安静** to mean 'even fresher / even quieter'?",
        idea: "Never negate a **比** sentence by putting 不 before the adjective! Use **A 没有 B (那么) + Adj** (**郊区没有市中心热闹** = the suburbs are not as lively as the city centre). And use **更 (gèng — even more)** directly before an adjective to express a clear upgrade: **更安静 (gèng ānjìng — quieter / even quieter)**, **更方便 (gèng fāngbiàn — more convenient)**!",
      },
      body: `Comparing living in the **city centre (市中心 shìzhōngxīn)** versus the **suburbs (郊区 jiāoqū)** or **countryside (农村 nóngcūn)** is a classic IGCSE 0547 discussion topic — and ideal for showing off high-band Mandarin connectives!

### Core Neighbourhood Adjectives & Nouns
| Hanzi | Pinyin | English | Typical Association |
|---|---|---|---|
| 市中心 | shìzhōngxīn | city centre / downtown | 交通方便, 热闹, 购物中心多 |
| 郊区 | jiāoqū | suburbs | 安静, 空气新鲜, 房子更宽敞 |
| 农村 | nóngcūn | countryside / village | 自然风景美, 空气好, 交通不太方便 |
| 方便 | fāngbiàn | convenient | 坐地铁很方便 (very convenient by MRT) |
| 安静 | ānjìng | quiet / peaceful | 环境很安静 (quiet environment) |
| 热闹 | rènào | lively / bustling | 市中心非常热闹 (bustling downtown) |
| 吵 | chǎo | noisy | 马路旁边有点儿吵 (a bit noisy by the road) |
| 环境 | huánjìng | environment / surroundings | 环境很好 / 环境很干净 |
| 交通 | jiāotōng | transport / traffic | 交通很方便 (convenient transport) |
| 空气新鲜 | kōngqì xīnxiān | fresh air | 郊区的空气比市中心新鲜得多 |

### Balanced Comparison Patterns (比 · 没有 · 更 · 虽然…但是…)
1. **City Centre Advantage (比):**
   - **市中心比郊区方便得多，因为有很多地铁站、超市和购物中心。**
     *(Shìzhōngxīn bǐ jiāoqū fāngbiàn de duō, yīnwèi yǒu hěn duō dìtiězhàn, chāoshì hé gòuwù zhōngxīn.)*
2. **Suburbs Advantage (没有…，但是更…):**
   - **郊区没有市中心热闹，但是更安静，空气也更新鲜。**
     *(Jiāoqū méiyǒu shìzhōngxīn rènào, dànshì gèng ānjìng, kōngqì yě gèng xīnxiān.)*
3. **Balanced Personal Choice (虽然…，但是…):**
   - **虽然市中心有点儿吵，房子也比较贵，但是我更喜欢住在市中心，因为去学校和逛街都很方便。**
     *(Suīrán shìzhōngxīn yǒudiǎnr chǎo, fángzi yě bǐjiào guì, dànshì wǒ gèng xǐhuan zhù zài shìzhōngxīn, yīnwèi qù xuéxiào hé guàngjiē dōu hěn fāngbiàn.)*
4. **Using 不但…，而且… (Not only…, but also…):**
   - **我住的社区不但环境很好，而且离学校很近。**
     *(Wǒ zhù de shèqū búdàn huánjìng hěn hǎo, érqiě lí xuéxiào hěn jìn.)*`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Balanced comparison table of 市中心 (city centre) versus 郊区 (suburbs) with Mandarin adjectives and connectors">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="25" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">市中心 vs 郊区 · Comparing Living Areas</text>
  <rect x="20" y="42" width="248" height="162" rx="12" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="144" y="68" text-anchor="middle" font-size="16" font-weight="800" fill="var(--brand)">市中心 shìzhōngxīn</text>
  <text x="144" y="88" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">City Centre / Downtown</text>
  <text x="38" y="114" font-size="12" fill="var(--good)" font-weight="700">+ 交通方便 (convenient transport)</text>
  <text x="38" y="136" font-size="12" fill="var(--good)" font-weight="700">+ 很热闹 · 商店多 (lively &amp; shops)</text>
  <text x="38" y="162" font-size="12" fill="var(--bad)" font-weight="700">− 有点儿吵 (a bit noisy)</text>
  <text x="38" y="184" font-size="12" fill="var(--bad)" font-weight="700">− 房子比较贵 (more expensive)</text>
  <rect x="292" y="42" width="248" height="162" rx="12" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="416" y="68" text-anchor="middle" font-size="16" font-weight="800" fill="var(--good)">郊区 jiāoqū</text>
  <text x="416" y="88" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">Suburbs</text>
  <text x="310" y="114" font-size="12" fill="var(--good)" font-weight="700">+ 更安静 (quieter &amp; peaceful)</text>
  <text x="310" y="136" font-size="12" fill="var(--good)" font-weight="700">+ 环境好 · 空气新鲜 (fresh air)</text>
  <text x="310" y="162" font-size="12" fill="var(--bad)" font-weight="700">− 没有市中心热闹 (less lively)</text>
  <text x="310" y="184" font-size="12" fill="var(--bad)" font-weight="700">− 离市中心比较远 (farther out)</text>
  <text x="280" y="232" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Top Pattern: 郊区没有市中心热闹，但是更安静，环境也很好！</text>
</svg>`,
      diagramCaption:
        "Weighing pros and cons of 市中心 (city centre) vs 郊区 (suburbs) with 比, 没有, 更, and 虽然…但是… earns top IGCSE marks.",
      whyItWorks:
        "Examiners award the highest bands to **justified, balanced opinions** — acknowledging one downside (**虽然有点儿吵**) before proving your preference (**但是交通更方便，所以我更喜欢…**). Using **更喜欢 (gèng xǐhuan — prefer / like even more)** naturally compares two options without repeating 喜欢!",
      keyPoints: [
        "Contrast **市中心 (shìzhōngxīn — city centre)** and **郊区 (jiāoqū — suburbs)** using **方便, 安静, 热闹, 吵, 环境很好, 空气新鲜**.",
        "Use **`A 比 B + Adj (+ 得多 / 一点儿)`** (NO 很!) for stronger comparisons: **市中心比郊区热闹得多**.",
        "Use **`A 没有 B (那么) + Adj`** for 'not as … as': **郊区没有市中心热闹**.",
        "Use **`更 (gèng) + Adj / 喜欢`** to say 'even more … / prefer': **更安静**, **我更喜欢住在郊区**.",
        "Combine two arguments seamlessly using **虽然…，但是…** (contrast) or **不但…，而且…** (adding two positives).",
      ],
      strategies: [
        "Never write a one-sided neighbourhood essay: give **1 pro + 1 con** for city life AND **1 pro + 1 con** for suburban life, then finish with **我觉得…** or **将来我更想住在…**.",
        "Pair **环境 (environment)** and **交通 (transport)** — those two nouns alone unlock four high-scoring phrases: **环境很好, 环境很安静, 交通很方便, 交通不太方便**.",
      ],
      workedExamples: [
        {
          title: "Comparing Suburbs and City Centre with 没有 and 更",
          problem:
            "Translate into natural Simplified Chinese (with tone-marked Pinyin): 'The suburbs are not as lively as the city centre, but they are quieter and the environment is very good.'",
          steps: [
            "Clause 1 ('not as lively as'): `A 没有 B + Adj` → **郊区没有市中心热闹** (Jiāoqū méiyǒu shìzhōngxīn rènào).",
            "Clause 2 ('but quieter'): **但是更安静** (dànshì gèng ānjìng).",
            "Clause 3 ('and the environment is very good'): **环境也很好** (huánjìng yě hěn hǎo).",
          ],
          answer:
            "郊区没有市中心热闹，但是更安静，环境也很好。(Jiāoqū méiyǒu shìzhōngxīn rènào, dànshì gèng ānjìng, huánjìng yě hěn hǎo.)",
          yourTurn: {
            question:
              "Write the Mandarin word for **suburbs** in Simplified Chinese or tone-marked Pinyin.",
            answer: {
              type: "text",
              accept: ["郊区", "jiāoqū"],
              display: "郊区 (jiāoqū)",
            },
            solution:
              "**郊区 (jiāoqū)** means suburbs (contrasted with **市中心 shìzhōngxīn** — city centre).",
          },
        },
        {
          title: "Using 不但…，而且… to Praise Your Neighbourhood",
          problem:
            "Combine these two ideas using **不但…，而且…**: (1) My neighbourhood has convenient transport. (2) Near my home there is a big park.",
          steps: [
            "Open with subject **我住的社区** (or **我家附近**).",
            "Put the first positive after **不但**: **不但交通非常方便**.",
            "Put the second positive after **而且**: **而且附近有一个大公园**.",
          ],
          answer:
            "我住的社区不但交通非常方便，而且附近有一个大公园。(Wǒ zhù de shèqū búdàn jiāotōng fēicháng fāngbiàn, érqiě fùjìn yǒu yí gè dà gōngyuán.)",
          yourTurn: {
            question:
              "Write the Mandarin adjective for **lively / bustling** in Simplified Chinese or tone-marked Pinyin.",
            answer: {
              type: "text",
              accept: ["热闹", "rènào", "rènao"],
              display: "热闹 (rènào)",
            },
            solution:
              "**热闹 (rènào / rènao)** means lively or bustling (e.g. 市中心非常热闹).",
          },
        },
      ],
      thinkDeeper:
        "In Chinese, **热闹 (rènào)** is usually a **positive** word (vibrant, buzzing, festive!), whereas **吵 (chǎo — noisy)** is **negative**. When describing Orchard Road or Chinatown during Chinese New Year, why does choosing **热闹** instead of **吵** completely change the attitude of your sentence?",
    },
  ],
  learn: {
    flashcards: [
      { front: "超市 (chāoshì)", back: "supermarket — 一家超市 (yì jiā chāoshì)" },
      { front: "银行 (yínháng)", back: "bank — watch pronunciation háng (never xíng!)" },
      { front: "邮局 (yóujú)", back: "post office — 去邮局寄信 (go to the post office to mail a letter)" },
      { front: "医院 (yīyuàn)", back: "hospital — 一家医院" },
      { front: "图书馆 (túshūguǎn)", back: "library — 去图书馆看书、借书" },
      { front: "电影院 (diànyǐngyuàn)", back: "cinema — 去电影院看电影" },
      { front: "地铁站 / 公共汽车站", back: "MRT/subway station (dìtiězhàn) / bus stop (gōnggòng qìchēzhàn)" },
      { front: "购物中心 / 体育中心", back: "shopping mall (gòuwù zhōngxīn) / sports centre (tǐyù zhōngxīn)" },
      { front: "A 离 B 很近 / 很远", back: "A is very close to / far from B (lí — never add 是!)" },
      { front: "从 A 到 B (cóng A dào B)", back: "from A to B — 从我家到学校坐地铁二十分钟" },
      { front: "走路 / 骑自行车 / 坐地铁", back: "walk (zǒulù) / ride a bike (qí zìxíngchē) / take the MRT (zuò dìtiě)" },
      { front: "请问，…怎么走？", back: "Excuse me, how do I get to …? (qǐngwèn, … zěnme zǒu?)" },
      { front: "一直往前走 (yìzhí wǎng qián zǒu)", back: "go straight ahead (往 + direction BEFORE verb)" },
      { front: "往左拐 / 往右拐", back: "turn left (wǎng zuǒ guǎi) / turn right (wǎng yòu guǎi)" },
      { front: "过马路 / 在第一个路口", back: "cross the road (guò mǎlù) / at the first intersection (zài dì-yī gè lùkǒu)" },
      { front: "市中心 / 郊区", back: "city centre (shìzhōngxīn) / suburbs (jiāoqū)" },
      { front: "方便 / 安静 / 热闹", back: "convenient (fāngbiàn) / quiet (ānjìng) / lively (rènào)" },
      { front: "环境很好 (huánjìng hěn hǎo)", back: "the environment / surroundings are very good" },
    ],
    mustKnow: [
      "Name all 12 core neighbourhood facilities (**超市, 银行, 邮局, 医院, 公园, 图书馆, 电影院, 地铁站, 公共汽车站, 购物中心, 体育中心, 餐厅**).",
      "Describe what is nearby using **`Place + 附近有…`** (without putting 在 before Place).",
      "State distance accurately using **`A 离 B + 很近 / 很远 / 不远`** (and ask with **有多远？**).",
      "State commute methods and durations with **`从 A 到 B`** + **走路 / 坐地铁 / 坐公共汽车 / 骑自行车 / 开车**.",
      "Ask politely for directions with **`请问，…怎么走？`**.",
      "Give multi-step directions using **一直往前走**, **过马路**, **在第一个路口**, **往左拐 / 往右拐**, and **就在你的左边 / 右边**.",
      "Keep **往 + Direction** strictly BEFORE the verb (**往前走**, **往左拐**, **往右拐**).",
      "Compare **市中心 (city centre)** and **郊区 (suburbs)** using **比**, **没有**, **更**, and **虽然…，但是…**.",
      "Give a balanced, justified opinion on where you prefer to live using **方便, 安静, 热闹, 吵, 环境, 交通, 空气新鲜**.",
    ],
    misconceptions: [
      {
        wrong: "❌ 在我家附近有一家超市。",
        right: "✅ **我家附近有一家超市。** (Existence sentences follow Place + 有 + Object — drop the leading 在!)",
      },
      {
        wrong: "❌ 我家是离学校很近。 / 我家跟学校很近。",
        right: "✅ **我家离学校很近。** (Always use **离 lí** for distance, and NEVER insert 是 before 很近/很远!)",
      },
      {
        wrong: "❌ 我每天坐自行车去公园。",
        right: "✅ 我每天**骑**自行车去公园。(Bikes you straddle take **骑 qí**; trains/buses/taxis take **坐 zuò**!)",
      },
      {
        wrong: "❌ 一直走往前，然后拐往左。",
        right: "✅ 一直**往前走**，然后**往左拐**。(Direction `往 + 前/左/右` ALWAYS precedes the verb!)",
      },
      {
        wrong: "❌ 往左拐在第一个路口。",
        right: "✅ **在第一个路口往左拐。** (In Mandarin, Place `在第一个路口` comes BEFORE the action!)",
      },
      {
        wrong: "❌ 郊区比市中心不热闹。",
        right: "✅ 郊区**没有**市中心热闹。(Never negate a 比 sentence with 不 + Adj — switch to **没有**!)",
      },
      {
        wrong: "❌ 银行 = yínxíng",
        right: "✅ **银行 = yínháng** (行 is read **háng** when it means bank/industry/row!).",
      },
    ],
    examMistakes: [
      "Translating 'close to' literally with *到* or *跟* instead of **离 (lí)** (*学校到我家很近* ❌ → **学校离我家很近** ✅).",
      "Putting the intersection phrase AFTER the turn command under English word order (*往右拐在第二个路口* ❌ → **在第二个路口往右拐** ✅).",
      "Confusing **走路 (walk)** with **坐车 (take a bus/car)** or using **坐** for bicycles instead of **骑自行车**.",
      "Writing **市中心比郊区很方便** — inserting the forbidden **很** after **比** instead of **方便得多**.",
      "Mixing up **图书馆 (library)**, **博物馆 (museum)**, and **体育馆 (gym)** in listening/reading tasks.",
      "Confusing **热闹 (lively — positive)** with **吵 (noisy — negative)** when identifying a speaker's attitude.",
      "Forgetting **请问** at the start of a Role-Play direction request (costs politeness/register credit!).",
    ],
    mnemonics: [
      {
        topic: "Direction Word Order (P-D-V)",
        device: "Place → Direction → Verb: 在第一个路口 + 往左 + 拐",
        explanation:
          "Mandarin builds street directions like zooming in with a camera: **Where** (`在第一个路口`) → **Which way** (`往左`) → **Action** (`拐`).",
      },
      {
        topic: "Transport Verbs (坐 vs 骑 vs 开)",
        device: "Sit inside = 坐 (zuò) · Straddle like a horse = 骑 (qí, 马 radical!) · Steer the wheel = 开 (kāi)",
        explanation:
          "Look at the left side of **骑**: it literally contains **马 (horse)**! If you straddle it (bicycle, motorbike, horse), use **骑**; if you sit inside as a passenger (MRT, bus, taxi), use **坐**.",
      },
      {
        topic: "4 Building Suffixes",
        device: "站 = Stop · 院 = Institution · 馆 = Hall · 中心 = Centre",
        explanation:
          "地铁**站**/汽车**站** (stops), 医**院**/电影**院** (institutions), 图书**馆**/体育**馆** (halls), 购物**中心**/体育**中心** (centres).",
      },
    ],
    realWorld: [
      {
        title: "Bilingual Singapore MRT Announcements (地铁站)",
        emoji: "🚇",
        detail:
          "Every SMRT train in Singapore announces stations in Mandarin — e.g. **下一站，纬壹 (One-North)** and **请站在黄线后面** — giving Tanglin students daily real-world listening practice!",
      },
      {
        title: "Using Compass Directions in Northern China",
        emoji: "🧭",
        detail:
          "In Beijing's grid-shaped streets, locals often say **往北走 (go north)** or **往东拐 (turn east)** rather than left/right — while in southern China and Singapore, **往左拐 / 往右拐** is universal.",
      },
      {
        title: "Crossroads Character Picture (十字路口)",
        emoji: "🚦",
        detail:
          "Look at **十** (a cross `+`) in **十字路口 (shízì lùkǒu — four-way crossroads)** and **丁** (a `T` shape) in **丁字路口 (T-junction)** — Chinese road vocabulary is literally drawn on the page!",
      },
      {
        title: "15-Minute Neighbourhoods (一刻钟便民生活圈)",
        emoji: "🏘️",
        detail:
          "Both Singapore's HDB towns and major Chinese cities design '15-minute neighbourhoods' so **超市, 公园, 地铁站, 医院, 图书馆** are all within a 15-minute walk (**走路一刻钟**).",
      },
    ],
    videos: [
      {
        title: "Asking & Giving Directions in Mandarin Chinese (问路和指路)",
        channel: "YouTube Search — Chinese Directions",
        url: "https://www.youtube.com/results?search_query=Mandarin+Chinese+asking+giving+directions+wang+zuo+guai",
      },
      {
        title: "How to Use 离 (lí) for Distance in Chinese Grammar",
        channel: "YouTube Search — Chinese Grammar 离 Distance",
        url: "https://www.youtube.com/results?search_query=Chinese+grammar+li+distance+hen+jin+hen+yuan",
      },
      {
        title: "Places in Town & Neighbourhood Vocabulary in Mandarin",
        channel: "YouTube Search — Chinese Places in Town",
        url: "https://www.youtube.com/results?search_query=Mandarin+Chinese+places+in+town+neighbourhood+vocabulary",
      },
      {
        title: "IGCSE Chinese 0547 City vs Countryside / Neighbourhood Essay",
        channel: "YouTube Search — IGCSE Chinese Neighbourhood",
        url: "https://www.youtube.com/results?search_query=IGCSE+Chinese+0547+my+neighbourhood+city+vs+suburbs",
      },
    ],
    formulas: [
      {
        name: "Nearby Facilities (附近有)",
        formula: "Anchor Place + 附近 + 有 + Facilities",
        note: "我家附近有一家超市和一个地铁站。(No leading 在!)",
      },
      {
        name: "Expressing Distance (离)",
        formula: "A + 离 + B + 很近 / 很远 / 不远 / 大概 X 公里",
        note: "我家离学校不远。(Never insert 是 before 很近/很远!)",
      },
      {
        name: "Asking Distance",
        formula: "A + 离 + B + 有多远？",
        note: "地铁站离你家有多远？ (How far is the MRT station from your home?)",
      },
      {
        name: "Journey From A to B (从…到…)",
        formula: "从 A 到 B + Transport + (只)要 + Duration",
        note: "从我家到学校坐地铁只要二十分钟。",
      },
      {
        name: "Transport Verbs",
        formula: "走路 (walk) · 坐地铁/公共汽车 (ride inside) · 骑自行车 (straddle) · 开车 (drive)",
        note: "Never say *坐自行车* — bicycles take 骑 (qí)!",
      },
      {
        name: "Asking for Directions (问路)",
        formula: "请问，(去) + Place + 怎么走？",
        note: "请问，去图书馆怎么走？",
      },
      {
        name: "Direction Before Verb (往)",
        formula: "一直往前走 · 往左拐 · 往右拐",
        note: "往 + direction ALWAYS precedes the motion verb.",
      },
      {
        name: "Intersection Order (P-D-V)",
        formula: "在 + 第 X 个路口 / 红绿灯 + 往左/右拐",
        note: "在第一个路口往左拐。(Place BEFORE action!)",
      },
      {
        name: "Final Pinpoint (就在…)",
        formula: "Place + 就在你的左边 / 右边 (+ Landmark 对面)",
        note: "银行就在你的右边，超市的对面。",
      },
      {
        name: "Negative Area Comparison (没有)",
        formula: "A + 没有 + B + (那么) + Adj",
        note: "郊区没有市中心热闹。(Never write *比…不热闹*.)",
      },
      {
        name: "Upgraded Comparison (更)",
        formula: "但是 + 更 + Adj / 我更喜欢住在…",
        note: "郊区没有市中心热闹，但是更安静，空气也更新鲜。",
      },
      {
        name: "Balanced Neighbourhood Opinion",
        formula: "虽然…有点儿…，但是…更…，所以我更喜欢住在…",
        note: "Combines concession + comparison + preference for Band 1 IGCSE marks.",
      },
    ],
  },
};
