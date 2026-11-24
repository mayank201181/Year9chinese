import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "house-furniture",
  title: "House, Rooms & Furniture (房屋与家具)",
  strand: "Home & Community",
  icon: "🏠",
  summary:
    "Describe homes, rooms and furniture accurately using exact classifiers (间, 层, 张, 把, 台), position words (方位词), 有 vs 在, and 比 comparisons.",
  intro:
    "In Year 9 Mandarin at Tanglin Trust School, talking about your home bridges everyday family vocabulary with core IGCSE 0547 spatial grammar. Whether you live in a Singapore high-rise apartment (公寓 gōngyù) or a two-storey detached house (别墅 biéshù), Mandarin builds descriptions in a clean, visual order: **big location first, small location next**, and chooses between **有 (yǒu)** and **在 (zài)** depending on whether you are introducing something new or locating something already known.",
  guide: [
    {
      id: "house-types-rooms",
      heading: "Types of Homes & Rooms (房子和房间)",
      discovery: {
        problem:
          "Compare these two Mandarin sentences carefully:\n1. 我家住在新加坡的一套公寓里，在十楼。(Wǒ jiā zhù zài Xīnjiāpō de yí tào gōngyù lǐ, zài shí lóu.)\n2. 我们的房子有两层：楼下有客厅、厨房和花园；楼上有三间卧室和两间卫生间。(Wǒmen de fángzi yǒu liǎng céng: lóuxià yǒu kètīng, chúfáng hé huāyuán; lóushàng yǒu sān jiān wòshì hé liǎng jiān wèishēngjiān.)\n\nNotice the two measure words **层 (céng)** and **间 (jiān)**, and look at the number **two** before both of them. Why did the writer use **两** instead of **二**, and what is the difference between **十楼** and **两层**?",
        idea: "Before ANY measure word, the number 2 is **两 (liǎng)**, never 二 (èr): **两层** (two storeys), **两间卫生间** (two bathrooms). Meanwhile, **层 (céng)** counts the total number of storeys/floors in a building (有两层 = has two storeys), while **楼 (lóu)** names a specific floor level (在十楼 = on the 10th floor; 楼上 upstairs / 楼下 downstairs)!",
      },
      body: `To introduce where you live in Mandarin, anchor the sentence with **住在 (zhù zài — to live in/at)**:

- **Subject + 住在 + Place (+ 里)**
- 我住在新加坡的公寓里。(Wǒ zhù zài Xīnjiāpō de gōngyù lǐ. — I live in an apartment in Singapore.)
- 我爷爷奶奶住在一栋两层的别墅里。(Wǒ yéye nǎinai zhù zài yí dòng liǎng céng de biéshù lǐ. — My paternal grandparents live in a two-storey detached house/villa.)

### Core Types of Homes & Floor Vocabulary
| Hanzi | Pinyin | English | Key Measure Word / Pattern |
|---|---|---|---|
| 房子 | fángzi | house / home (building) | 一栋房子 (yí dòng fángzi) / 一座房子 |
| 公寓 | gōngyù | apartment / condo | 一套公寓 (yí tào gōngyù) |
| 别墅 | biéshù | villa / detached house | 一栋别墅 (yí dòng biéshù) |
| 组屋 | zǔwū | HDB flat (Singapore) | 一套组屋 (yí tào zǔwū) |
| 楼上 / 楼下 | lóushàng / lóuxià | upstairs / downstairs | 楼上有三间卧室 |
| 层 / 楼 | céng / lóu | storey (classifier) / floor (level) | 两层 (two storeys) · 在八楼 (on the 8th floor) |

### Essential Rooms of a Home (房间 fángjiān)
The dedicated classifier for rooms is **间 (jiān)** (though **个 gè** is also heard in casual speech, **间** earns higher IGCSE accuracy):
- **客厅 (kètīng)** — living room (literally "guest hall")
- **饭厅 / 餐厅 (fàntīng / cāntīng)** — dining room
- **厨房 (chúfáng)** — kitchen
- **卧室 (wòshì)** — bedroom (**三间卧室** = three bedrooms)
- **卫生间 / 洗手间 (wèishēngjiān / xǐshǒujiān)** — bathroom / washroom
- **书房 (shūfáng)** — study room ("book room")
- **阳台 (yángtái)** — balcony ("sun platform")
- **花园 (huāyuán)** — garden ("flower yard")

### Building Floor-by-Floor Descriptions
Notice how Mandarin orders locations from **largest container to smallest**:
- **我家有两层。楼下有客厅、餐厅和厨房；楼上有三间卧室、一间书房和两间卫生间。**
  *(Wǒ jiā yǒu liǎng céng. Lóuxià yǒu kètīng, cāntīng hé chúfáng; lóushàng yǒu sān jiān wòshì, yì jiān shūfáng hé liǎng jiān wèishēngjiān.)*
- Remember to use the **enumeration comma (顿号 、)** between listed nouns, and put **和 (hé)** only before the final item!`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-storey house floorplan showing upstairs and downstairs rooms in Simplified Chinese">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <polygon points="40,52 240,12 440,52" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>
  <text x="240" y="42" text-anchor="middle" font-size="13" font-weight="800" fill="var(--brand)">两层别墅 · liǎng céng biéshù</text>
  <rect x="52" y="52" width="376" height="82" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>
  <line x1="180" y1="52" x2="180" y2="134" stroke="var(--ink-2)" stroke-width="1.2"/>
  <line x1="308" y1="52" x2="308" y2="134" stroke="var(--ink-2)" stroke-width="1.2"/>
  <text x="116" y="88" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">卧室</text>
  <text x="116" y="106" text-anchor="middle" font-size="11" fill="var(--ink-2)">wòshì (Bedroom)</text>
  <text x="244" y="88" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">书房</text>
  <text x="244" y="106" text-anchor="middle" font-size="11" fill="var(--ink-2)">shūfáng (Study)</text>
  <text x="368" y="88" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">卫生间</text>
  <text x="368" y="106" text-anchor="middle" font-size="11" fill="var(--ink-2)">wèishēngjiān</text>
  <rect x="52" y="134" width="376" height="88" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.5"/>
  <line x1="210" y1="134" x2="210" y2="222" stroke="var(--ink-2)" stroke-width="1.2"/>
  <line x1="322" y1="134" x2="322" y2="222" stroke="var(--ink-2)" stroke-width="1.2"/>
  <text x="131" y="172" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">客厅</text>
  <text x="131" y="190" text-anchor="middle" font-size="11" fill="var(--ink-2)">kètīng (Living Room)</text>
  <text x="266" y="172" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">厨房</text>
  <text x="266" y="190" text-anchor="middle" font-size="11" fill="var(--ink-2)">chúfáng (Kitchen)</text>
  <text x="375" y="172" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">饭厅</text>
  <text x="375" y="190" text-anchor="middle" font-size="11" fill="var(--ink-2)">fàntīng (Dining)</text>
  <rect x="444" y="58" width="102" height="66" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="495" y="84" text-anchor="middle" font-size="13" font-weight="800" fill="var(--brand)">楼上 lóushàng</text>
  <text x="495" y="104" text-anchor="middle" font-size="11" fill="var(--ink)">二楼 · 上层</text>
  <rect x="444" y="144" width="102" height="72" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="495" y="168" text-anchor="middle" font-size="13" font-weight="800" fill="var(--good)">楼下 lóuxià</text>
  <text x="495" y="186" text-anchor="middle" font-size="11" fill="var(--ink)">一楼 &amp; 花园</text>
  <text x="495" y="203" text-anchor="middle" font-size="10" fill="var(--ink-2)">huāyuán (Garden)</text>
</svg>`,
      diagramCaption:
        "House layout divided cleanly into 楼上 (lóushàng — upstairs) and 楼下 (lóuxià — downstairs) with 间 (jiān) for rooms and 层 (céng) for storeys.",
      whyItWorks:
        "Chinese room names are transparent compounds built from meaning clues: **客** (guest) + **厅** (hall) = 客厅 (living room); **书** (book) + **房** (room) = 书房 (study); **花** (flower) + **园** (enclosed yard) = 花园 (garden); **阳** (sun) + **台** (platform) = 阳台 (balcony). Learning the roots lets you decode new building vocabulary automatically!",
      keyPoints: [
        "Always use **住在 (zhù zài)** to say where someone lives — never omit 在 (*我住新加坡* is incomplete; write **我住在新加坡**).",
        "Use **间 (jiān)** to count rooms (**三间卧室**) and **层 (céng)** to count total storeys (**两层**).",
        "Always use **两 (liǎng)** instead of **二 (èr)** directly before a measure word: **两间卧室**, **两层**, **两套公寓** — but floor numbers use **二**: **二楼** (2nd floor).",
        "Use **楼上 (lóushàng)** for upstairs and **楼下 (lóuxià)** for downstairs as location nouns right before **有 (yǒu)**.",
        "Separate 3+ listed rooms with the Chinese enumeration comma **`、`** and place **和 (hé)** before the last item only.",
      ],
      strategies: [
        "Split your home description cleanly into **Home Type + Floor** first, then **楼下** rooms, then **楼上** rooms — examiners love logical organisation.",
        "Check every number 2 in your writing: if a classifier follows immediately (间, 层, 套, 栋), write **两**; if it is an ordinal floor number (二楼, 十二楼), write **二**.",
      ],
      workedExamples: [
        {
          title: "Describing an Apartment with Floors and Rooms",
          problem:
            "Translate into natural Simplified Chinese (with tone-marked Pinyin): 'My family lives in an apartment on the 8th floor. There is one living room, one kitchen, and three bedrooms.'",
          steps: [
            "Start with **住在**: 我家住在公寓里 (Wǒ jiā zhù zài gōngyù lǐ) and add the floor with **在八楼** (zài bā lóu).",
            "Combine naturally: **我家住在一套公寓里，在八楼。** (or **我家住在八楼的一套公寓里。**)",
            "List the rooms with **有** and the room classifier **间**: **里面有一间客厅、一间厨房和三间卧室。** (or omit 一间 before 客厅/厨房 when counting is implied, though keeping **三间卧室** showcases your classifier).",
            "Verify punctuation: use **`、`** between the first two rooms and **和** before the final room.",
          ],
          answer:
            "我家住在八楼的一套公寓里。家里有一间客厅、一间厨房和三间卧室。(Wǒ jiā zhù zài bā lóu de yí tào gōngyù lǐ. Jiālǐ yǒu yì jiān kètīng, yì jiān chúfáng hé sān jiān wòshì.)",
          yourTurn: {
            question:
              "What is the dedicated Mandarin measure word (classifier) for counting rooms, as in 'three bedrooms' (三___卧室)? Answer in Simplified Chinese or tone-marked Pinyin.",
            answer: {
              type: "text",
              accept: ["间", "jiān"],
              display: "间 (jiān)",
            },
            solution:
              "**间 (jiān)** is the specific measure word for rooms: 三间卧室 (sān jiān wòshì — three bedrooms).",
          },
        },
        {
          title: "Choosing 二 vs 两 with Storeys and Floor Numbers",
          problem:
            "Fill in the two blanks with **二** or **两**: 我的房子有___层，我的卧室在___楼。",
          steps: [
            "Blank 1 precedes the classifier **层 (céng — storeys)**, meaning a quantity ('two storeys'). Quantities of 2 before a classifier ALWAYS take **两 (liǎng)** → **两层**.",
            "Blank 2 is an ordinal floor label ('the 2nd floor'). Floor labels and ordinals take **二 (èr)** → **二楼**.",
            "Read aloud to confirm: 我的房子有**两**层，我的卧室在**二**楼。(Wǒ de fángzi yǒu liǎng céng, wǒ de wòshì zài èr lóu.)",
          ],
          answer: "两；二 (两层，二楼)",
          yourTurn: {
            question:
              "Translate 'two bathrooms' into Simplified Chinese (or tone-marked Pinyin) using the classifier 间 and 卫生间.",
            answer: {
              type: "text",
              accept: ["两间卫生间", "liǎng jiān wèishēngjiān"],
              display: "两间卫生间 (liǎng jiān wèishēngjiān)",
            },
            solution:
              "Because 2 comes directly before the measure word 间, use **两** (never 二): **两间卫生间 (liǎng jiān wèishēngjiān)**.",
          },
        },
      ],
      thinkDeeper:
        "In China and Singapore, **一楼 (yī lóu)** usually refers to the ground floor, whereas in the UK 'first floor' is one level above the ground floor! If you tell a Chinese pen-pal 我的卧室在一楼 while thinking of British English, which floor will they picture? How could you make it 100% unambiguous using **楼上 / 楼下**?",
    },
    {
      id: "furniture-measure-words",
      heading: "Furniture & Measure Words (家具和量词)",
      discovery: {
        problem:
          "Look at these four bedroom items in Mandarin:\n- **一张床** (yì zhāng chuáng — one bed) and **一张书桌** (yì zhāng shūzhuō — one desk)\n- **一把椅子** (yì bǎ yǐzi — one chair)\n- **一台电脑** (yì tái diànnǎo — one computer) and **一台空调** (yì tái kōngtiáo — one air-conditioner)\n- **一个衣柜** (yí gè yīguì — one wardrobe) and **一个书架** (yí gè shūjià — one bookshelf)\n\nWhat physical shape or function connects the objects that share **张**, **把**, and **台**?",
        idea: "Mandarin classifiers sort furniture by **shape and type**: **张 (zhāng)** = flat horizontal surface (beds, desks, tables, sofas); **把 (bǎ)** = something with a back/handle you grip or pull (chairs); **台 (tái)** = electrical machines & appliances (computers, TVs, air-conditioners); **盏 (zhǎn)** = lamps (一盏台灯), while boxy storage pieces (衣柜, 书架) use **个 (gè)**!",
      },
      body: `In Year 9 exams, dropping **个 (gè)** onto every piece of furniture costs accuracy marks. Mastering six shape-based classifiers turns basic sentences into top-band Mandarin!

### Essential Furniture & Exact Measure Words (家具与量词)
| Measure Word | Shape / Category | Key Furniture Examples |
|---|---|---|
| **张 (zhāng)** | Flat surface / top | 一张床 (chuáng — bed), 一张书桌 (shūzhuō — desk), 一张桌子 (zhuōzi — table), 一张沙发 (shāfā — sofa) |
| **把 (bǎ)** | Backrest / handle to grip | 一把椅子 (yǐzi — chair), 两把扶手椅 (fúshǒuyǐ — armchair) |
| **台 (tái)** | Electrical appliances | 一台电脑 (diànnǎo — computer), 一台电视 (diànshì — TV), 一台空调 (kōngtiáo — air-con) |
| **盏 (zhǎn)** | Lamps & lights | 一盏台灯 (táidēng — desk lamp; 个 also accepted in casual speech) |
| **个 (gè)** | Boxy storage / general | 一个书架 (shūjià — bookshelf), 一个衣柜 (yīguì — wardrobe), 一个沙发 (also common!) |
| **面 (miàn)** | Flat vertical panes | 一面镜子 (jìngzi — mirror), 一扇窗户 (yí shàn chuānghu — window) |

### Describing Room Size, Light & Colours: **又…又… (yòu… yòu…)**
To praise (or complain about) a room using **two adjectives at once**, use the high-band pattern **又 + Adj₁ + 又 + Adj₂** ("both … and …"):
- 我的卧室**又大又明亮**。(Wǒ de wòshì yòu dà yòu míngliàng. — My bedroom is both big and bright.)
- 客厅**又宽敞又舒服**。(Kètīng yòu kuānchang yòu shūfu. — The living room is both spacious and comfortable.)
- 弟弟的房间**又小又乱**。(Dìdi de fángjiān yòu xiǎo yòu luàn. — My younger brother's room is both small and messy.)

### Colour + 的 + Furniture
- **一张白色的书桌** (yì zhāng báisè de shūzhuō — a white desk)
- **一个蓝色的衣柜** (yí gè lánsè de yīguì — a blue wardrobe)
- Remember the order: **Number + Measure Word + Colour + 的 + Noun** (never *白色的一个衣柜* unless emphasising which one — standard neutral order puts the number+classifier first, or colour before noun: 一张很大的红色沙发).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mandarin furniture measure words grouped by shape: 张 flat surfaces, 把 chairs, 台 appliances, 个 storage">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">家具量词分类 · Furniture Classifiers by Shape</text>
  <rect x="18" y="44" width="122" height="186" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="79" y="72" text-anchor="middle" font-size="22" font-weight="800" fill="var(--brand)">张</text>
  <text x="79" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">zhāng · Flat</text>
  <text x="79" y="120" text-anchor="middle" font-size="12" fill="var(--ink)">一张床 chuáng</text>
  <text x="79" y="144" text-anchor="middle" font-size="12" fill="var(--ink)">一张书桌 shūzhuō</text>
  <text x="79" y="168" text-anchor="middle" font-size="12" fill="var(--ink)">一张桌子 zhuōzi</text>
  <text x="79" y="192" text-anchor="middle" font-size="12" fill="var(--ink)">一张沙发 shāfā</text>
  <rect x="152" y="44" width="122" height="186" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="213" y="72" text-anchor="middle" font-size="22" font-weight="800" fill="var(--good)">把</text>
  <text x="213" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">bǎ · Gripped</text>
  <text x="213" y="128" text-anchor="middle" font-size="12" fill="var(--ink)">一把椅子 yǐzi</text>
  <text x="213" y="154" text-anchor="middle" font-size="12" fill="var(--ink)">两把椅子</text>
  <text x="213" y="182" text-anchor="middle" font-size="11" fill="var(--ink-2)">(backrest / handle)</text>
  <rect x="286" y="44" width="122" height="186" rx="10" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>
  <text x="347" y="72" text-anchor="middle" font-size="22" font-weight="800" fill="var(--ink)">台</text>
  <text x="347" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">tái · Machines</text>
  <text x="347" y="120" text-anchor="middle" font-size="12" fill="var(--ink)">一台电脑 diànnǎo</text>
  <text x="347" y="144" text-anchor="middle" font-size="12" fill="var(--ink)">一台电视 diànshì</text>
  <text x="347" y="168" text-anchor="middle" font-size="12" fill="var(--ink)">一台空调 kōngtiáo</text>
  <text x="347" y="192" text-anchor="middle" font-size="11" fill="var(--ink-2)">(appliances)</text>
  <rect x="420" y="44" width="122" height="186" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="481" y="72" text-anchor="middle" font-size="22" font-weight="800" fill="var(--bad)">个 &amp; 盏</text>
  <text x="481" y="90" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">gè / zhǎn</text>
  <text x="481" y="120" text-anchor="middle" font-size="12" fill="var(--ink)">一个衣柜 yīguì</text>
  <text x="481" y="144" text-anchor="middle" font-size="12" fill="var(--ink)">一个书架 shūjià</text>
  <text x="481" y="168" text-anchor="middle" font-size="12" fill="var(--ink)">一盏台灯 táidēng</text>
  <text x="481" y="192" text-anchor="middle" font-size="11" fill="var(--ink-2)">(storage &amp; lamps)</text>
</svg>`,
      diagramCaption:
        "Sorting furniture by physical feature (flat, gripped, electrical, storage/lamp) makes Mandarin classifiers predictable rather than random memorisation.",
      whyItWorks:
        "Classifiers act like visual tags. Once you see **张** means 'stretched flat surface' (paper, tickets, beds, tables) and **台** means 'platform/machine' (computers, TVs, air-conditioners), you can deduce the right measure word for unfamiliar household items too. And **又…又…** works because it pairs two **consistent** tones (two positives like 又大又明亮, or two negatives like 又小又吵) — never mix one positive and one negative with 又…又…!",
      keyPoints: [
        "**张 (zhāng)** counts flat surfaces: 一张床, 一张书桌, 一张桌子, 一张沙发.",
        "**把 (bǎ)** counts chairs and handled tools: 一把椅子, 两把椅子.",
        "**台 (tái)** counts machines and electrical appliances: 一台电脑, 一台空调, 一台电视.",
        "**个 (gè)** counts boxy storage items (**一个衣柜**, **一个书架**); **盏 (zhǎn)** is the precise classifier for lamps (**一盏台灯**).",
        "**又 + Adj₁ + 又 + Adj₂** pairs two compatible adjectives (both positive or both negative): **又大又明亮**, **又干净又舒服**.",
      ],
      strategies: [
        "Before writing any furniture noun, picture its silhouette: flat top → **张**, grab the backrest → **把**, plugs into the wall → **台**, tall box → **个**.",
        "When describing a room with two contrasting traits (e.g. 'small, **but** tidy'), do NOT use 又…又…; switch to **虽然…，但是…** (**我的卧室虽然不大，但是很干净**).",
      ],
      workedExamples: [
        {
          title: "Furnishing a Bedroom with Accurate Classifiers",
          problem:
            "Write a sentence in Simplified Chinese saying: 'My bedroom is both big and bright. Inside there is a bed, a desk, two chairs, and a computer.'",
          steps: [
            "Translate the opening description with **又…又…**: **我的卧室又大又明亮。** (Wǒ de wòshì yòu dà yòu míngliàng.)",
            "Assign each furniture item its exact classifier: bed → **一张床**, desk → **一张书桌**, two chairs → **两把椅子** (两, not 二!), computer → **一台电脑**.",
            "Join with **里面有** (inside there is/are), **`、`** commas, and **和** before the last item.",
          ],
          answer:
            "我的卧室又大又明亮。里面有一张床、一张书桌、两把椅子和一台电脑。(Wǒ de wòshì yòu dà yòu míngliàng. Lǐmiàn yǒu yì zhāng chuáng, yì zhāng shūzhuō, liǎng bǎ yǐzi hé yì tái diànnǎo.)",
          yourTurn: {
            question:
              "Which exact measure word fills the blank in 一___空调 (one air-conditioner)? Answer in Simplified Chinese or tone-marked Pinyin.",
            answer: {
              type: "text",
              accept: ["台", "tái"],
              display: "台 (tái)",
            },
            solution:
              "Electrical appliances such as air-conditioners (空调), computers (电脑), and TVs (电视) take **台 (tái)**: 一台空调.",
          },
        },
        {
          title: "Fixing a 又…又… Polarity Trap",
          problem:
            "A student wrote: *我的卧室又小又舒服。* Why does this sound unnatural in Mandarin, and how should they fix it?",
          steps: [
            "**又…又…** requires two adjectives with the **same** evaluation (both good or both bad). Here 小 (small, negative/limiting) clashes with 舒服 (comfortable, positive).",
            "To express a contrast ('small, yet comfortable'), replace 又…又… with **虽然…，但是…** (although…, still/but…).",
            "Write the corrected sentence: **我的卧室虽然很小，但是很舒服。** (Wǒ de wòshì suīrán hěn xiǎo, dànshì hěn shūfu.)",
          ],
          answer:
            "我的卧室虽然很小，但是很舒服。(Wǒ de wòshì suīrán hěn xiǎo, dànshì hěn shūfu.)",
          yourTurn: {
            question:
              "Complete the positive 又…又… description for 'both big and bright': 我的卧室___。(Answer in Simplified Chinese or tone-marked Pinyin.)",
            answer: {
              type: "text",
              accept: ["又大又明亮", "yòu dà yòu míngliàng"],
              display: "又大又明亮 (yòu dà yòu míngliàng)",
            },
            solution:
              "Both 大 (big) and 明亮 (bright) are positive qualities, so they pair cleanly with 又…又…: **又大又明亮 (yòu dà yòu míngliàng)**.",
          },
        },
      ],
      thinkDeeper:
        "Why do some native speakers say **一个沙发** while others say **一张沙发** or **一套沙发**? What is the difference in meaning between **一张沙发** (a single sofa) and **一套沙发** (a full living-room sofa set)?",
    },
    {
      id: "position-words-you-zai",
      heading: "Position Words (方位词) & 有 vs 在",
      discovery: {
        problem:
          "Read this pair of sentences describing the exact same scene:\n- **Sentence A:** 书桌上面有一台电脑。(Shūzhuō shàngmiàn yǒu yì tái diànnǎo.)\n- **Sentence B:** 电脑在书桌上面。(Diànnǎo zài shūzhuō shàngmiàn.)\n\nBoth mean a computer is on the desk — yet the **Place** and **Object** completely swapped sides! When should you use **有 (yǒu)**, and when should you use **在 (zài)**? And notice where **上面** sits relative to **书桌**: before or after?",
        idea: "1) Mandarin position words ALWAYS go **AFTER** the reference noun: **书桌上面** (lit. 'desk's top-side', NEVER *上面书桌*). 2) **有 (yǒu)** introduces an indefinite/new item: **Place + 有 + (Number + MW) + Object** ('On the desk there is a computer'). **在 (zài)** locates a specific/known item: **Object + 在 + Place** ('The computer is on the desk').",
      },
      body: `This is the #1 grammar focus of Year 9 Term 1. Getting **方位词 (fāngwèicí — position words)** and **有 vs 在** 100% automatic immediately unlocks clear room tours, photo descriptions, and map tasks.

### The 10 Core Position Words (方位词)
Place any of these **directly after** the reference noun (optional **的 de** is allowed between noun and 2-syllable position word, e.g. 书桌的上面 or 书桌上面):

| Position Word | Pinyin | English | Example Phrase |
|---|---|---|---|
| 上面 / 上边 | shàngmiàn / shàngbiān | on top of / above | 书桌上面 (on the desk) |
| 下面 / 下边 | xiàmiàn / xiàbiān | under / below | 床下面 (under the bed) |
| 里面 / 里边 | lǐmiàn / lǐbiān | inside | 衣柜里面 (inside the wardrobe) |
| 外面 / 外边 | wàimiàn / wàibiān | outside | 窗户外面 (outside the window) |
| 前面 / 前边 | qiánmiàn / qiánbiān | in front of | 沙发前面 (in front of the sofa) |
| 后面 / 后边 | hòumiàn / hòubiān | behind | 门后面 (behind the door) |
| 左边 | zuǒbiān | to the left of | 床的左边 (to the left of the bed) |
| 右边 | yòubiān | to the right of | 书桌右边 (to the right of the desk) |
| 旁边 | pángbiān | next to / beside | 窗户旁边 (next to the window) |
| 中间 | zhōngjiān | in the middle / between | 房间中间 (in the middle of the room); 床和书桌中间 (between the bed and the desk) |

### The Golden Mirror Rule: **有 (Existence)** vs **在 (Location)**
Think of **有** and **在** as mirror images of each other:

1. **Existence — "There is a … at [Place]"** → **Place + 有 + (Number + MW) + Object**
   - **书桌上面有一台电脑。** *(Shūzhuō shàngmiàn yǒu yì tái diànnǎo. — There is a computer on the desk.)*
   - **床的旁边有一个书架。** *(Chuáng de pángbiān yǒu yí gè shūjià. — Next to the bed there is a bookshelf.)*
   - **床和衣柜中间有一张书桌。** *(Chuáng hé yīguì zhōngjiān yǒu yì zhāng shūzhuō. — Between the bed and the wardrobe there is a desk.)*

2. **Location — "[Specific Object] is at [Place]"** → **Object + 在 + Place**
   - **电脑在书桌上面。** *(Diànnǎo zài shūzhuō shàngmiàn. — The computer is on the desk.)*
   - **我的书包在椅子下面。** *(Wǒ de shūbāo zài yǐzi xiàmiàn. — My schoolbag is under the chair.)*
   - **台灯在电脑的左边。** *(Táidēng zài diànnǎo de zuǒbiān. — The desk lamp is to the left of the computer.)*

### Two Fatal Traps to Avoid
- ❌ **Never write 在 before the place in a 有 sentence**: do NOT write *在书桌上面有一台电脑* — just write **书桌上面有一台电脑**!
- ❌ **Never put 是 before 在**: do NOT write *电脑是在书桌上面* (English "is on") — **在** already functions as the verb "is located at": **电脑在书桌上面**!`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mirror comparison diagram of Place + 有 + Object versus Object + 在 + Place with bedroom position words">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">有 (yǒu) vs 在 (zài) · Mirror Sentence Order</text>
  <rect x="20" y="42" width="520" height="72" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="36" y="62" font-size="11" font-weight="800" fill="var(--brand)">1. EXISTENCE ("There is a…")</text>
  <rect x="36" y="70" width="160" height="32" rx="6" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="116" y="90" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">书桌上面 (Place)</text>
  <rect x="210" y="70" width="84" height="32" rx="6" fill="var(--brand)"/>
  <text x="252" y="91" text-anchor="middle" font-size="14" font-weight="800" fill="var(--surface)">有 yǒu</text>
  <rect x="308" y="70" width="216" height="32" rx="6" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="416" y="90" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">一台电脑 (New Object)</text>
  <rect x="20" y="128" width="520" height="72" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="36" y="148" font-size="11" font-weight="800" fill="var(--good)">2. LOCATION ("The … is at …")</text>
  <rect x="36" y="156" width="176" height="32" rx="6" fill="var(--surface)" stroke="var(--good)" stroke-width="1.2"/>
  <text x="124" y="176" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">我的电脑 (Known Object)</text>
  <rect x="226" y="156" width="84" height="32" rx="6" fill="var(--good)"/>
  <text x="268" y="177" text-anchor="middle" font-size="14" font-weight="800" fill="var(--surface)">在 zài</text>
  <rect x="324" y="156" width="200" height="32" rx="6" fill="var(--surface)" stroke="var(--good)" stroke-width="1.2"/>
  <text x="424" y="176" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">书桌上面 (Place)</text>
  <text x="280" y="226" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink-2)">Position word ALWAYS follows the noun: 书桌 + 上面 · 床 + 旁边 · A 和 B + 中间</text>
</svg>`,
      diagramCaption:
        "Swapping between 有 and 在 flips the Place and Object blocks cleanly — while the position word always stays anchored AFTER the reference noun.",
      whyItWorks:
        "Mandarin puts **known/background information (Topic)** at the front of the sentence and **new information (Comment)** at the end. In **书桌上面有一台电脑**, the desk is the backdrop and the computer is the new detail you reveal. In **我的电脑在书桌上面**, we already care about 'my computer' and the new answer is *where* it is!",
      keyPoints: [
        "Position words (**上面, 下面, 里面, 外面, 前面, 后面, 左边, 右边, 旁边, 中间**) ALWAYS follow the reference noun: **床下面**, **沙发前面**.",
        "Use **`Place + 有 + (Num + MW) + Object`** to say what exists somewhere — NEVER put 在 before the Place.",
        "Use **`Object + 在 + Place`** to say where a known/specific object is — NEVER put 是 before 在.",
        "To say 'between A and B', use **`A 和 B 中间`** (e.g. **床和书桌中间**).",
        "After a noun like **书桌**, you may drop 面 in short forms (**书桌上**, **房间里**), though keeping **上面/里面** is always clear and safe in Year 9.",
      ],
      strategies: [
        "Check the first word of the English sentence: starts with **'There is / There are'** → start with **Place + 有**; starts with **'The [item] is… / My [item] is…'** → start with **Object + 在**.",
        "Draw a quick 3-box template before writing: `[Place] [有] [Object]` vs `[Object] [在] [Place]` so you never accidentally write *在房间里有…* or *书是桌子上面*.",
      ],
      workedExamples: [
        {
          title: "Converting a 有 Sentence into a 在 Sentence",
          problem:
            "Rewrite this existence sentence as a location sentence using **在**: **窗户旁边有一张书桌。** (Chuānghu pángbiān yǒu yì zhāng shūzhuō.)",
          steps: [
            "Identify the two halves around **有**: Place = **窗户旁边** (next to the window), Object = **书桌** (desk).",
            "Flip them around **在**: put the specific Object first (drop 一张 so it means 'the desk'), then **在**, then the Place.",
            "Result: **书桌在窗户旁边。** (Shūzhuō zài chuānghu pángbiān. — The desk is next to the window.)",
          ],
          answer: "书桌在窗户旁边。(Shūzhuō zài chuānghu pángbiān.)",
          yourTurn: {
            question:
              "Translate 'My schoolbag is under the bed' into Simplified Chinese (or tone-marked Pinyin) using 我的书包, 在, 床, and 下面.",
            answer: {
              type: "text",
              accept: [
                "我的书包在床下面",
                "我的书包在床的下面",
                "wǒ de shūbāo zài chuáng xiàmiàn",
                "wǒ de shūbāo zài chuáng de xiàmiàn",
              ],
              display: "我的书包在床下面 (wǒ de shūbāo zài chuáng xiàmiàn)",
            },
            solution:
              "Specific object first (**我的书包**), verb **在**, then reference noun + position word (**床下面**): **我的书包在床下面**.",
          },
        },
        {
          title: "Using 中间 ('Between A and B')",
          problem:
            "How do you say 'There is a chair between the bed and the desk' in Simplified Chinese?",
          steps: [
            "Build the 'between' Place phrase: **床和书桌中间** (chuáng hé shūzhuō zhōngjiān — between the bed and the desk).",
            "Because the English sentence begins with 'There is a…', use **`Place + 有 + Num + MW + Object`**.",
            "Choose the chair classifier **把**: **一把椅子**.",
            "Combine: **床和书桌中间有一把椅子。**",
          ],
          answer:
            "床和书桌中间有一把椅子。(Chuáng hé shūzhuō zhōngjiān yǒu yì bǎ yǐzi.)",
          yourTurn: {
            question:
              "Write the Mandarin position word for 'to the left of' in Simplified Chinese or tone-marked Pinyin.",
            answer: {
              type: "text",
              accept: ["左边", "zuǒbiān"],
              display: "左边 (zuǒbiān)",
            },
            solution:
              "**左边 (zuǒbiān)** means 'left side / to the left of' (its opposite is 右边 yòubiān).",
          },
        },
      ],
      thinkDeeper:
        "Can you say **电脑在书桌上面** and **书桌上面有一台电脑** both in the same paragraph? Notice how writers introduce a new piece of furniture with **有** first ('Next to the bed there is a desk — 床旁边有一张书桌'), and then tell you where a specific item sits on it using **在** ('My computer is on the desk — 我的电脑在书桌上面'). Why does alternating **有** and **在** make your writing sound much more natural?",
    },
    {
      id: "ideal-home-writing",
      heading: "Describing Your Home & Dream Bedroom",
      discovery: {
        problem:
          "Compare two Year 9 students' attempts to say 'My bedroom is bigger than my younger brother's':\n- **Student 1:** *我的卧室比弟弟的很更大。*\n- **Student 2:** **我的卧室比弟弟的大得多。** (Wǒ de wòshì bǐ dìdi de dà de duō.)\n\nSpot the **two** grammar errors in Student 1's sentence, and work out how Student 2 made the comparison stronger ('much bigger')!",
        idea: "In a **比 (bǐ)** comparison, you **NEVER** put **很 (hěn)** or **非常** before the adjective! Instead, put a degree complement **AFTER** the adjective: **大一点儿** (a little bigger) or **大得多** (much bigger). Also notice **弟弟的** cleverly omits the repeated noun 卧室 ('my brother's [one]')!",
      },
      body: `To score top marks on an IGCSE-style 80-character paragraph about your home or dream bedroom (理想的房子 lǐxiǎng de fángzi), combine four ingredients: **layout + furniture/positions + comparison + justified opinion**.

### 1. Comparing Rooms with **比 (bǐ)** & **没有 (méiyǒu)**
- **A 比 B + Adjective** ("A is more [adj] than B"):
  - 我的卧室**比**弟弟的大。(Wǒ de wòshì bǐ dìdi de dà. — My bedroom is bigger than my brother's.)
  - 客厅**比**书房明亮**得多**。(Kètīng bǐ shūfáng míngliàng de duō. — The living room is much brighter than the study.)
  - 厨房**比**阳台大**一点儿**。(Chúfáng bǐ yángtái dà yìdiǎnr. — The kitchen is a little bigger than the balcony.)
- **A 没有 B (那么) + Adjective** ("A is not as [adj] as B"):
  - 我的卧室**没有**客厅那么大。(Wǒ de wòshì méiyǒu kètīng nàme dà. — My bedroom is not as big as the living room.)

### 2. Expressing Preferences & Reasons (**最喜欢…，因为…**)
- 我**最喜欢**客厅，**因为**它又宽敞又舒服，而且我常常在那里跟家人一起看电视、聊天儿。
  *(Wǒ zuì xǐhuan kètīng, yīnwèi tā yòu kuānchang yòu shūfu, érqiě wǒ chángcháng zài nàlǐ gēn jiārén yìqǐ kàn diànshì, liáotiānr.)*
- 我**不太喜欢**厨房，**因为**厨房有点儿小。
  *(Wǒ bú tài xǐhuan chúfáng, yīnwèi chúfáng yǒudiǎnr xiǎo.)*
- Notice **有点儿 (yǒudiǎnr — a little bit)** sits **BEFORE** a negative/undesired adjective (有点儿小, 有点儿吵, 有点儿乱), while **一点儿 (yìdiǎnr)** sits **AFTER** an adjective in comparisons (大一点儿)!

### 3. Describing a Dream Home (将来我想住… jiānglái wǒ xiǎng zhù…)
IGCSE writing loves a **future time frame**:
- **将来我想住在一栋靠海的别墅里，因为我希望有一个大花园和一个游泳池。**
  *(Jiānglái wǒ xiǎng zhù zài yí dòng kào hǎi de biéshù lǐ, yīnwèi wǒ xīwàng yǒu yí gè dà huāyuán hé yí gè yóuyǒngchí. — In the future I want to live in a seaside villa, because I hope to have a big garden and a swimming pool.)*

### 4. Model 80-Character Paragraph Structure
> 我家住在新加坡的一套公寓里，在十楼。家里有一间客厅、一间厨房、两间卫生间和三间卧室。我的卧室虽然没有客厅那么大，但是比弟弟的明亮得多。床的旁边有一张书桌，书桌上面有一台电脑和一盏台灯。我最喜欢我的卧室，因为那里又安静又舒服，我可以安心做作业。将来我想住在一栋有大花园的别墅里。`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-step IGCSE home essay blueprint: Home Type, Room Positions, Comparison, and Opinion with Future Wish">
  <rect x="0" y="0" width="560" height="250" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="26" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">80字房屋写作蓝图 · 4-Step Home Writing Blueprint</text>
  <rect x="18" y="44" width="122" height="170" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="79" y="66" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">1. 房子 &amp; 房间</text>
  <text x="79" y="92" text-anchor="middle" font-size="11" fill="var(--ink)">住在公寓 / 别墅</text>
  <text x="79" y="114" text-anchor="middle" font-size="11" fill="var(--ink)">有两层 / 在十楼</text>
  <text x="79" y="136" text-anchor="middle" font-size="11" fill="var(--ink)">三间卧室</text>
  <text x="79" y="164" text-anchor="middle" font-size="10" fill="var(--ink-2)">Home &amp; layout</text>
  <rect x="152" y="44" width="122" height="170" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="213" y="66" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">2. 家具 &amp; 方位</text>
  <text x="213" y="92" text-anchor="middle" font-size="11" fill="var(--ink)">一张床 · 一把椅子</text>
  <text x="213" y="114" text-anchor="middle" font-size="11" fill="var(--ink)">书桌上面有电脑</text>
  <text x="213" y="136" text-anchor="middle" font-size="11" fill="var(--ink)">书架在床旁边</text>
  <text x="213" y="164" text-anchor="middle" font-size="10" fill="var(--ink-2)">有 vs 在 + MW</text>
  <rect x="286" y="44" width="122" height="170" rx="10" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>
  <text x="347" y="66" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">3. 比较房间</text>
  <text x="347" y="92" text-anchor="middle" font-size="11" fill="var(--ink)">A 比 B 大得多</text>
  <text x="347" y="114" text-anchor="middle" font-size="11" fill="var(--ink)">A 没有 B 大</text>
  <text x="347" y="136" text-anchor="middle" font-size="11" fill="var(--ink)">又大又明亮</text>
  <text x="347" y="164" text-anchor="middle" font-size="10" fill="var(--ink-2)">No 很 after 比!</text>
  <rect x="420" y="44" width="122" height="170" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="481" y="66" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">4. 看法 &amp; 将来</text>
  <text x="481" y="92" text-anchor="middle" font-size="11" fill="var(--ink)">我最喜欢…因为</text>
  <text x="481" y="114" text-anchor="middle" font-size="11" fill="var(--ink)">虽然…，但是…</text>
  <text x="481" y="136" text-anchor="middle" font-size="11" fill="var(--ink)">将来我想住…</text>
  <text x="481" y="164" text-anchor="middle" font-size="10" fill="var(--ink-2)">Opinion &amp; future</text>
  <text x="280" y="236" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">Hit all 4 pillars to reach top IGCSE 0547 communication &amp; accuracy bands!</text>
</svg>`,
      diagramCaption:
        "A repeatable 4-pillar plan for any 80–100 character Year 9 essay about your current home or dream home.",
      whyItWorks:
        "Examiners mark two separate things: **content coverage** (did you describe rooms, furniture, opinions, and future hopes?) and **language variety** (classifiers, 有/在, 比/没有, 虽然…但是…, 因为). Building your paragraph from these 4 pillars automatically ticks every criterion without sounding repetitive!",
      keyPoints: [
        "NEVER place **很** after **比**: write **我的卧室比弟弟的大** or **大得多** (much bigger) / **大一点儿** (a little bigger).",
        "Use **弟弟的** / **哥哥的** to mean 'my brother's [room]' without repeating 卧室.",
        "Use **A 没有 B (那么) + Adj** for 'not as … as': **卧室没有客厅那么大**.",
        "Use **有点儿 + Adj** before mild complaints (**厨房有点儿小**), and **Adj + 一点儿** after adjectives in comparisons (**大一点儿**).",
        "Add a **future wish** with **将来我想住…** or **我希望有…** to showcase a second time frame.",
      ],
      strategies: [
        "Pair a concession with a preference: **虽然我的卧室有点儿小，但是很干净，所以我很喜欢。** (instant high-band connective pair!).",
        "Always justify **我最喜欢 [room]** with **因为** + **what you do there** (在那里看书 / 做作业 / 跟家人看电视) — that upgrades a basic opinion into a full IGCSE sentence.",
      ],
      workedExamples: [
        {
          title: "Upgrading a Basic Comparison and Opinion",
          problem:
            "Combine these ideas into two high-band Simplified Chinese sentences: (1) My bedroom is much brighter than my brother's. (2) I like my bedroom most because it is both quiet and comfortable.",
          steps: [
            "Sentence 1: Use **比** + **明亮** + **得多** (NO 很!): **我的卧室比弟弟的明亮得多。** (Wǒ de wòshì bǐ dìdi de míngliàng de duō.)",
            "Sentence 2: Open with **我最喜欢我的卧室，因为** and use **又…又…** for the two positive traits: **它又安静又舒服。**",
            "Check tones and Simplified characters: 卧 (wò), 室 (shì), 亮 (liàng), 静 (jìng), 舒 (shū).",
          ],
          answer:
            "我的卧室比弟弟的明亮得多。我最喜欢我的卧室，因为它又安静又舒服。(Wǒ de wòshì bǐ dìdi de míngliàng de duō. Wǒ zuì xǐhuan wǒ de wòshì, yīnwèi tā yòu ānjìng yòu shūfu.)",
          yourTurn: {
            question:
              "Translate 'My bedroom is not as big as the living room' into Simplified Chinese (or tone-marked Pinyin) using 我的卧室, 没有, 客厅, and 大.",
            answer: {
              type: "text",
              accept: [
                "我的卧室没有客厅大",
                "我的卧室没有客厅那么大",
                "wǒ de wòshì méiyǒu kètīng dà",
                "wǒ de wòshì méiyǒu kètīng nàme dà",
              ],
              display: "我的卧室没有客厅那么大 (wǒ de wòshì méiyǒu kètīng nàme dà)",
            },
            solution:
              "Pattern **`A 没有 B (那么) + Adj`**: **我的卧室没有客厅那么大** (or without 那么: 我的卧室没有客厅大).",
          },
        },
        {
          title: "Writing a Future Dream-Home Sentence",
          problem:
            "Translate into Simplified Chinese: 'In the future I want to live in a big villa with a garden.'",
          steps: [
            "Start with the future time word **将来 (jiānglái — in the future)** and **我想住在 (wǒ xiǎng zhù zài)**.",
            "Put the modifier 'with a garden' (**有花园的**) BEFORE the noun **大别墅** (modifiers always precede the noun in Mandarin!).",
            "Assemble: **将来我想住在一栋有花园的大别墅里。**",
          ],
          answer:
            "将来我想住在一栋有花园的大别墅里。(Jiānglái wǒ xiǎng zhù zài yí dòng yǒu huāyuán de dà biéshù lǐ.)",
          yourTurn: {
            question:
              "Which modifier means 'much bigger' in a 比 comparison: 大一点儿 or 大得多? Answer in Simplified Chinese or tone-marked Pinyin.",
            answer: {
              type: "text",
              accept: ["大得多", "dà de duō"],
              display: "大得多 (dà de duō)",
            },
            solution:
              "**Adj + 得多 (de duō)** means 'much more [adj]' (**大得多** = much bigger), whereas Adj + 一点儿 means 'a little more [adj]'.",
          },
        },
      ],
      thinkDeeper:
        "Look at the modifier order in **一栋有花园的大别墅** ('a big villa that has a garden'). Why does English put 'with a garden' AFTER 'villa' while Mandarin puts **有花园的** BEFORE **别墅**? Try translating 'a bedroom that has a big balcony' using the exact same Mandarin rule!",
    },
  ],
  learn: {
    flashcards: [
      { front: "公寓 (gōngyù)", back: "apartment / condominium — measure word 套 (yí tào gōngyù)" },
      { front: "别墅 (biéshù)", back: "villa / detached house — measure word 栋 (yí dòng biéshù)" },
      { front: "楼上 / 楼下 (lóushàng / lóuxià)", back: "upstairs / downstairs" },
      { front: "客厅 (kètīng)", back: "living room ('guest hall') — 间 (jiān)" },
      { front: "卧室 (wòshì)", back: "bedroom — 三间卧室 (three bedrooms)" },
      { front: "厨房 (chúfáng)", back: "kitchen" },
      { front: "卫生间 (wèishēngjiān)", back: "bathroom / washroom (also 洗手间 xǐshǒujiān)" },
      { front: "书房 (shūfáng)", back: "study room ('book room')" },
      { front: "阳台 (yángtái)", back: "balcony ('sun platform')" },
      { front: "花园 (huāyuán)", back: "garden ('flower yard')" },
      { front: "一张床 / 一张书桌", back: "a bed (chuáng) / a desk (shūzhuō) — 张 (zhāng) for flat surfaces" },
      { front: "一把椅子 (yì bǎ yǐzi)", back: "a chair — 把 (bǎ) for gripped objects / backrests" },
      { front: "一台电脑 / 一台空调", back: "a computer (diànnǎo) / an air-con (kōngtiáo) — 台 (tái) for appliances" },
      { front: "书架 / 衣柜 (shūjià / yīguì)", back: "bookshelf / wardrobe — classifier 个 (gè)" },
      { front: "旁边 / 中间 (pángbiān / zhōngjiān)", back: "next to / in the middle (A 和 B 中间 = between A and B)" },
      { front: "又大又明亮 (yòu dà yòu míngliàng)", back: "both big and bright (又…又… pairs two consistent adjectives)" },
    ],
    mustKnow: [
      "Say what type of home you live in and on which floor using **住在…** and **层 vs 楼**.",
      "Name all 8+ core rooms (**客厅, 卧室, 厨房, 卫生间, 书房, 饭厅, 阳台, 花园**) with the classifier **间 (jiān)**.",
      "Apply the **二 vs 两** rule reliably (**两间卧室**, **两层**, **两把椅子**, but **二楼**).",
      "Match core furniture nouns to exact measure words (**张** for beds/desks/sofas, **把** for chairs, **台** for electrical appliances, **盏** for lamps, **个** for wardrobes/bookshelves).",
      "Place all 10 **position words (方位词)** AFTER the reference noun (**书桌上面**, **床旁边**, **A 和 B 中间**).",
      "Choose cleanly between **Place + 有 + Object** (existence) and **Object + 在 + Place** (location).",
      "Describe rooms with **又…又…** (two matching qualities) and **虽然…，但是…** (two contrasting qualities).",
      "Compare two rooms accurately using **A 比 B + Adj (+ 一点儿 / 得多)** and **A 没有 B (那么) + Adj** without inserting 很.",
      "Express and justify room preferences (**我最喜欢…，因为…**) and a future dream home (**将来我想住…**).",
    ],
    misconceptions: [
      {
        wrong: "❌ 我住公寓。 / 我住新加坡。",
        right: "✅ 我**住在**公寓里。 / 我**住在**新加坡。(Never drop **在** after 住!)",
      },
      {
        wrong: "❌ 在书桌上面有一台电脑。",
        right: "✅ **书桌上面有一台电脑。** (Never put 在 before a place in a 有 existence sentence!)",
      },
      {
        wrong: "❌ 电脑是在书桌上面。",
        right: "✅ **电脑在书桌上面。** (**在** already means 'is located at' — never add 是 before 在!)",
      },
      {
        wrong: "❌ 我的卧室上面书桌有一盏台灯。",
        right: "✅ **书桌上面有一盏台灯。** (Position words ALWAYS go AFTER the noun: 书桌上面, never *上面书桌*!)",
      },
      {
        wrong: "❌ 我的房子有二层，二间卫生间。",
        right: "✅ 我的房子有**两**层，**两**间卫生间。(Before any measure word, 2 is ALWAYS **两 liǎng**, never 二!)",
      },
      {
        wrong: "❌ 我的卧室比弟弟的很大。",
        right: "✅ 我的卧室比弟弟的**大得多** / **大**。(NEVER put 很 after 比!)",
      },
      {
        wrong: "❌ 我的房间又小又舒服。",
        right: "✅ 我的房间**虽然**小，**但是**很舒服。(Do not mix one negative + one positive trait inside 又…又…!)",
      },
    ],
    examMistakes: [
      "Writing **二间卧室** or **二把椅子** instead of **两间卧室** / **两把椅子** (the #1 Year 9 classifier slip).",
      "Translating English 'There is a desk in my room' word-for-word as *有书桌在我的房间* instead of **我的房间里有一张书桌**.",
      "Putting position words in front of the noun (*旁边床* instead of **床旁边**) under English preposition interference.",
      "Using **个** for every piece of furniture instead of **张** (床/书桌), **把** (椅子), and **台** (电脑/空调).",
      "Adding **很** inside a **比** sentence (*客厅比卧室很明亮*) — immediately loses grammar accuracy marks.",
      "Confusing **有点儿** (before negative adjectives: 有点儿小) with **一点儿** (after adjectives in comparisons: 大一点儿).",
      "Forgetting a future time frame (**将来我想住…**) when the exam prompt asks about your ideal/dream home.",
    ],
    mnemonics: [
      {
        topic: "有 vs 在 Word Order",
        device: "PYO vs OZP — 'Place-Yǒu-Object' vs 'Object-Zài-Place'",
        explanation:
          "**P-Y-O** (Place + 有 + Object: 书桌上面有一台电脑) introduces what is there; **O-Z-P** (Object + 在 + Place: 电脑在书桌上面) tells where the known item is.",
      },
      {
        topic: "Furniture Measure Words",
        device: "Flat 张 (zhāng) · Grab 把 (bǎ) · Plug-in 台 (tái)",
        explanation:
          "Flat tops take **张** (床, 书桌, 沙发), chairs you grab take **把** (椅子), and anything you plug into a wall socket takes **台** (电脑, 电视, 空调).",
      },
      {
        topic: "二 vs 两 Floors & Storeys",
        device: "'Two Storeys = 两层 (count), 2nd Floor = 二楼 (label)'",
        explanation:
          "Counting how many storeys uses the classifier 层 → **两层**; naming the floor number on the lift button uses **二楼**.",
      },
    ],
    realWorld: [
      {
        title: "Singapore HDB Flats & Condos (组屋与公寓)",
        emoji: "🏙️",
        detail:
          "Over 80% of Singapore residents live in high-rise **组屋 (zǔwū — HDB flats)** or **公寓 (gōngyù — condos)**, so talking about **几楼 (which floor)** and **阳台 (balcony)** is everyday Singapore Mandarin.",
      },
      {
        title: "Traditional Beijing Siheyuan (四合院 sìhéyuàn)",
        emoji: "🏮",
        detail:
          "Historic courtyard homes in Beijing arrange rooms around a central **院子 (yuànzi — courtyard)** facing south (**坐北朝南**) for maximum winter sunshine — showing why compass and position words matter deeply in Chinese architecture.",
      },
      {
        title: "IKEA China / Singapore Labels",
        emoji: "🪑",
        detail:
          "Walk through IKEA (宜家 Yíjiā) in Alexandra or Tampines and every price tag uses exact Mandarin classifiers: **一张书桌**, **一把椅子**, **一个衣柜**, **一盏台灯**.",
      },
      {
        title: "Floor Numbering Differences (一楼 vs Ground Floor)",
        emoji: "🛗",
        detail:
          "In Chinese-speaking cities, lifts start at **一楼 (1F)** for the ground floor — matching Singapore malls — whereas British homes call the ground level G and the upstairs level 1F!",
      },
    ],
    videos: [
      {
        title: "Mandarin Rooms of the House & Furniture Vocabulary",
        channel: "YouTube Search — Chinese House & Furniture",
        url: "https://www.youtube.com/results?search_query=Mandarin+Chinese+rooms+house+furniture+vocabulary+pinyin",
      },
      {
        title: "Chinese Position Words (方位词) & 有 vs 在 Explained",
        channel: "YouTube Search — Chinese Position Words 有 在",
        url: "https://www.youtube.com/results?search_query=Chinese+grammar+position+words+you+vs+zai+fangweici",
      },
      {
        title: "Chinese Measure Words for Furniture (张 把 台 个 间)",
        channel: "YouTube Search — Chinese Measure Words Furniture",
        url: "https://www.youtube.com/results?search_query=Chinese+measure+words+zhang+ba+tai+jian+furniture",
      },
      {
        title: "IGCSE Chinese 0547 Describing Your House & Bedroom",
        channel: "YouTube Search — IGCSE Chinese My House",
        url: "https://www.youtube.com/results?search_query=IGCSE+Chinese+0547+describing+my+house+bedroom+essay",
      },
    ],
    formulas: [
      {
        name: "Living Somewhere (住在)",
        formula: "Subject + 住在 + Place (+ 里)",
        note: "我家住在新加坡的一套公寓里。(Never omit 在 after 住.)",
      },
      {
        name: "Counting Storeys vs Naming Floors",
        formula: "有两层 (two storeys) · 在十楼 (on the 10th floor)",
        note: "层 is a classifier (takes 两); 楼 is a floor number label (takes 二楼).",
      },
      {
        name: "Counting Rooms (间)",
        formula: "Number (2 = 两) + 间 + Room",
        note: "三间卧室 (three bedrooms), 两间卫生间 (two bathrooms).",
      },
      {
        name: "Furniture Classifiers",
        formula: "一张床/书桌 · 一把椅子 · 一台电脑/空调 · 一盏台灯 · 一个衣柜/书架",
        note: "Match classifier to shape/function for top IGCSE accuracy.",
      },
      {
        name: "Position Word Order (方位词)",
        formula: "Reference Noun (+ 的) + Position Word",
        note: "书桌上面, 床下面, 衣柜里面, 窗户旁边, 床和书桌中间.",
      },
      {
        name: "Existence Sentence (有)",
        formula: "Place + 有 + (Number + MW) + Object",
        note: "书桌上面有一台电脑。(Never put 在 before Place.)",
      },
      {
        name: "Location Sentence (在)",
        formula: "Specific Object + 在 + Place",
        note: "电脑在书桌上面。(Never put 是 before 在.)",
      },
      {
        name: "Both … and … (又…又…)",
        formula: "Subject + 又 + Adj₁ + 又 + Adj₂",
        note: "我的卧室又大又明亮。(Both adjectives must share positive or negative tone.)",
      },
      {
        name: "Comparison (比)",
        formula: "A + 比 + B + Adj (+ 一点儿 / 得多)",
        note: "我的卧室比弟弟的大得多。(NEVER put 很 before Adj!)",
      },
      {
        name: "Negative Comparison (没有)",
        formula: "A + 没有 + B + (那么) + Adj",
        note: "我的卧室没有客厅那么大。(A is not as big as B.)",
      },
      {
        name: "Preference + Reason",
        formula: "我最喜欢 + Room，因为 + Reason",
        note: "我最喜欢客厅，因为它又宽敞又舒服。",
      },
      {
        name: "Future Dream Home",
        formula: "将来我想住在 + [Modifier 的] + 公寓 / 别墅 + 里",
        note: "将来我想住在一栋有大花园的别墅里。",
      },
    ],
  },
};
