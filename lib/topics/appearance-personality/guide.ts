import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "appearance-personality",
  title: "Appearance & Personality (外貌与性格)",
  strand: "Home & Community",
  icon: "🧑",
  summary: "Describe height, hair, clothes vs accessories (穿 vs 戴), personality traits with 又…又… and 有点儿, and compare people accurately using 比, 没有, and 跟…一样.",
  intro:
    "How do you paint a vivid portrait of a friend, relative, or classmate in Mandarin Chinese — without falling into the classic English-to-Chinese traps? In English we say *'He **is** tall'*, *'She **wears** a shirt and **wears** glasses'*, and *'My sister is **very** taller than me'*. In Mandarin, every single one of those literal translations breaks an essential rule! In this Year 9 unit, you will master physical descriptions with **长着 (zhǎngzhe)** and **留着 (liúzhe)**, split wearing into **穿 (chuān)** vs **戴 (dài)**, balance personality pairs with **又…又…** and **有点儿**, and build precision comparisons with **比 (bǐ)**, **没有 (méiyǒu)**, and **跟…一样** — core skills for IGCSE 0547 picture descriptions and essays.",
  guide: [
    {
      id: "height-hair-eyes",
      heading: "Describing Height, Hair & Facial Features",
      discovery: {
        problem:
          "Look at these two student attempts to say *'My older brother is tall and has short black hair'*: (1) *我哥哥**是**高，他有黑色的短头发。* (2) *我哥哥**很**高，他**留着**黑色的短头发。* Why does Sentence (1) sound broken to a native speaker, and why is Sentence (2) far more natural?",
        idea:
          "First, Mandarin adjectives act like built-in predicates — **NEVER put 是 (shì) before an adjective** like 高 or 瘦! Use a degree adverb like **很 (hěn)** instead (**我哥哥很高**). Second, while **有 (yǒu)** works for basic statements, upgrading to **长着 (zhǎngzhe)** for born facial features and **留着 (liúzhe)** for chosen hairstyles instantly elevates your Year 9 Chinese to IGCSE Grade 9!",
      },
      body: `To describe how someone looks clearly and naturally, organise your description from **overall build** → **hair** → **facial features**.

### 1. Height & Build (身高和身材) — Never Use 是!
- **高 / 矮** (*gāo / ǎi*) — tall / short (height): **爸爸很高，弟弟还比较矮。**
- **胖 / 瘦** (*pàng / shòu*) — plump / slim: **表哥又高又瘦。** (*Be tactful with **胖** when describing people politely — **微胖 wēipàng** or **中等身材 zhōngděng shēncái** 'medium build' sounds much kinder!*)
- **个子很高 / 个子不高不矮** (*gèzi hěn gāo / gèzi bù gāo bù ǎi*) — tall build / average height: **她个子不高不矮，中等身材。**

### 2. Hair & Facial Features (头发和五官)
| Feature | Mandarin | Pinyin | Useful Adjectives / Phrases |
|---|---|---|---|
| Hair | **头发** | *tóufa* | **长头发** (*long hair*), **短头发** (*short hair*), **黑色的直发** (*straight black hair*), **棕色的卷发** (*curly brown hair*) |
| Eyes | **眼睛** | *yǎnjing* | **大眼睛** (*big eyes*), **小眼睛** (*small eyes*), **黑色的眼睛**, **蓝色的眼睛** |
| Nose | **鼻子** | *bízi* | **高高的鼻子** (*high/prominent nose*), **小鼻子** |
| Mouth | **嘴巴** | *zuǐba* | **小小的嘴巴** (*small mouth*), **常常笑** (*often smiles*) |
| Ears | **耳朵** | *ěrduo* | **大耳朵** (*big ears*) |
| Face | **脸** | *liǎn* | **圆脸** (*yuánliǎn — round face*), **长脸** (*chángliǎn — oval/long face*) |

### 3. The IGCSE Upgrade: 长着 (zhǎngzhe) vs 留着 (liúzhe)
Instead of repeating **他有…，她有…**, split features into **born features** vs **chosen hairstyles**:
- **长着 (zhǎngzhe — 'grown with / born with')** → eyes, nose, mouth, round face:
  **妹妹长着一双大大的黑眼睛和一张圆脸。** (*Mèimei zhǎngzhe yì shuāng dàda de hēi yǎnjing hé yì zhāng yuánliǎn.*)
- **留着 (liúzhe — 'keeping / wearing [a hairstyle or beard]')** → long hair, short hair, curly hair, beard:
  **我表姐留着一头长长的黑色直发。** (*Wǒ biǎojiě liúzhe yì tóu chángchang de hēisè zhífà.*)
  **爷爷留着白胡子。** (*Yéye liúzhe bái húzi.* — Grandpa has a white beard.)`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Portrait label map showing height, hair, and facial features with zhangzhe versus liuzhe">
  <rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--brand)">Portrait Blueprint: 留着 (Hair) vs 长着 (Born Features)</text>
  <circle cx="280" cy="118" r="46" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.8"/>
  <path d="M 234 110 C 234 62, 326 62, 326 110 C 318 88, 298 84, 280 84 C 262 84, 242 88, 234 110 Z" fill="var(--ink)"/>
  <circle cx="263" cy="114" r="5" fill="var(--ink)"/>
  <circle cx="297" cy="114" r="5" fill="var(--ink)"/>
  <path d="M 280 118 L 276 130 L 284 130" fill="none" stroke="var(--ink)" stroke-width="1.8"/>
  <path d="M 267 142 Q 280 152 293 142" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <rect x="18" y="44" width="168" height="50" rx="8" fill="var(--brand-soft)" stroke="var(--brand)"/>
  <text x="102" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">留着 (liúzhe) — Hairstyles</text>
  <text x="102" y="83" text-anchor="middle" font-size="11" fill="var(--ink)">长头发 / 短头发 / 直发 / 卷发</text>
  <line x1="186" y1="68" x2="245" y2="82" stroke="var(--brand)" stroke-width="1.6"/>
  <rect x="374" y="44" width="168" height="50" rx="8" fill="var(--surface-2)" stroke="var(--good)"/>
  <text x="458" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">长着 (zhǎngzhe) — Features</text>
  <text x="458" y="83" text-anchor="middle" font-size="11" fill="var(--ink)">大眼睛 · 高鼻子 · 圆脸</text>
  <line x1="374" y1="74" x2="306" y2="112" stroke="var(--good)" stroke-width="1.6"/>
  <rect x="18" y="122" width="168" height="44" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="102" y="141" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">鼻子 (bízi) &amp; 嘴巴 (zuǐba)</text>
  <text x="102" y="157" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">高高的鼻子 · 爱笑的嘴巴</text>
  <line x1="186" y1="142" x2="265" y2="142" stroke="var(--ink-2)" stroke-width="1.3"/>
  <rect x="374" y="122" width="168" height="44" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="458" y="141" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">身高和身材 (Build)</text>
  <text x="458" y="157" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">高/矮 · 胖/瘦 · 中等身材</text>
  <rect x="18" y="182" width="524" height="50" rx="8" fill="var(--surface-2)" stroke="var(--bad)"/>
  <text x="280" y="202" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">Golden Rule: NEVER put 是 (shì) directly before a bare adjective!</text>
  <text x="280" y="221" text-anchor="middle" font-size="11.5" fill="var(--ink)">✓ 他很高 (Tā hěn gāo) · 她个子不高不矮   |   ✗ 他是高 (WRONG!)</text>
</svg>`,
      diagramCaption: "Use 留着 for hairstyles/beards, 长着 for born facial features, and 很 (never 是) before adjectives.",
      whyItWorks:
        "The particle **着 (zhe)** marks a continuous, visible state — just like looking at a snapshot! Pairing **留 (to keep/grow) + 着** tells the listener the hairstyle is maintained, while **长 (zhǎng — to grow naturally) + 着** signals innate features like eyes and nose. Note the pronunciation: here **长** is third-tone **zhǎng** (to grow), NOT second-tone **cháng** (long)!",
      keyPoints: [
        "NEVER use **是 (shì)** before an adjective: write **她很瘦** or **哥哥很高**, never ~~她是瘦~~.",
        "Use **个子 (gèzi)** to talk specifically about stature: **他个子很高** / **她个子不高不矮**.",
        "Distinguish **长头发 / 短头发** (long/short hair) and **直发 / 卷发** (straight/curly hair); remember **长** = *cháng* (long) vs **长着** = *zhǎngzhe* (born with).",
        "Use **留着 (liúzhe)** for hairstyles and beards (**留着短发 / 留着胡子**), and **长着 (zhǎngzhe)** for facial features (**长着大眼睛 / 圆脸**).",
        "Keep colours before nouns with **的**: **黑色的直发**, **棕色的卷发**.",
      ],
      strategies: [
        "**Top-to-Bottom Scan**: When describing a person in an IGCSE speaking photo, scan in order — height/build → hair (**留着**) → face/eyes (**长着**) → clothes/glasses (**穿着 / 戴着**)!",
        "**Pronunciation Alert (多音字)**: Check **长**: before a noun like **长头发** it is *cháng* (long); before **着** (**长着大眼睛**) it is *zhǎng* (to grow/have features)!",
      ],
      thinkDeeper:
        "Why does Mandarin **长** have two different readings (*cháng* = long; *zhǎng* = grow/senior)? Think about how growing plants get longer and taller over time — both meanings share one ancient root! That is why **长着长长的头发** (*zhǎngzhe chángchang de tóufa*) uses BOTH readings in one phrase!",
      workedExamples: [
        {
          title: "Upgrading a Basic Physical Description",
          problem:
            "Upgrade this basic sentence using **留着** and **长着**: *我姐姐是高。她有黑色的长头发，她有大眼睛。*",
          steps: [
            "1. Fix **是高** → **很高** (never use **是** before a bare adjective!).",
            "2. Upgrade **有黑色的长头发** → **留着黑色的长头发** (chosen hairstyle).",
            "3. Upgrade **有大眼睛** → **长着一双大眼睛** (born facial feature).",
          ],
          answer: "**我姐姐很高，留着黑色的长头发，长着一双大眼睛。** (*Wǒ jiějie hěn gāo, liúzhe hēisè de cháng tóufa, zhǎngzhe yì shuāng dà yǎnjing.*)",
          yourTurn: {
            question: "Which verb + 着 (**长着** or **留着**) best completes **我表弟___短头发** (My younger cousin has short hair)? (Type Simplified Hanzi or tone-marked Pinyin.)",
            answer: { type: "text", accept: ["留着", "liúzhe"], display: "留着 (liúzhe)" },
            solution: "Hairstyles use **留着 (liúzhe)**: **我表弟留着短头发** (*Wǒ biǎodì liúzhe duǎn tóufa*).",
          },
        },
        {
          title: "Describing Curly Hair & Facial Features",
          problem:
            "Translate into natural Mandarin: *'My best friend is of medium height, has curly brown hair, and has a round face.'*",
          steps: [
            "1. Medium height: **我最好的朋友个子不高不矮** (or **中等身材**).",
            "2. Curly brown hair: **留着棕色的卷发** (*liúzhe zōngsè de juǎnfà*).",
            "3. Round face: **长着一张圆脸** (*zhǎngzhe yì zhāng yuánliǎn*).",
          ],
          answer: "**我最好的朋友个子不高不矮，留着棕色的卷发，长着一张圆脸。**",
        },
      ],
    },
    {
      id: "wearing-clothes-glasses",
      heading: "Wearing Clothes & Accessories (穿 vs 戴)",
      discovery: {
        problem:
          "In English, the verb **wear** covers EVERYTHING: *'He is wearing a white shirt, jeans, trainers, glasses, a watch, and a cap.'* If you translate every 'wear' into Mandarin as **穿 (chuān)**, half of your sentence is WRONG! Where exactly is the dividing line between **穿 (chuān)** and **戴 (dài)**?",
        idea:
          "**穿 (chuān)** is ONLY for **garments and footwear** that you step into or pull onto your body (shirts, jackets, trousers, skirts, socks, shoes). **戴 (dài)** is for **accessories** placed onto your head, face, neck, ears, or wrists (glasses, hats, scarves, watches, earrings, necklaces, face masks)!",
      },
      body: `The **穿 (chuān)** vs **戴 (dài)** split is one of the highest-frequency grammar tests in Year 9 and IGCSE 0547 Chinese. Always pair each verb with **着 (zhe)** when describing what someone is wearing right now or in a photograph!

### 1. 穿 (chuān) — Clothes & Footwear (+ Measure Words!)
| Item | Mandarin | Pinyin | Exact Measure Word |
|---|---|---|---|
| Shirt | **衬衫** | *chènshān* | **一件** (*yí jiàn*) |
| T-shirt | **T恤衫** | *T-xùshān* | **一件** (*yí jiàn*) |
| Sweater / Jumper | **毛衣** | *máoyī* | **一件** (*yí jiàn*) |
| Jacket / Coat | **外套** | *wàitào* | **一件** (*yí jiàn*) |
| School uniform | **校服** | *xiàofú* | **一套** (*yí tào* — a set) / **一件** |
| Jeans / Trousers | **牛仔裤 / 裤子** | *niúzǎikù / kùzi* | **一条** (*yì tiáo*) |
| Skirt / Dress | **裙子 / 连衣裙** | *qúnzi / liányīqún* | **一条** (*yì tiáo*) |
| Trainers / Shoes | **运动鞋 / 鞋子** | *yùndòngxié / xiézi* | **一双** (*yì shuāng*) |
| Socks | **袜子** | *wàzi* | **一双** (*yì shuāng*) |

### 2. 戴 (dài) — Accessories (+ Measure Words!)
| Accessory | Mandarin | Pinyin | Exact Measure Word |
|---|---|---|---|
| Glasses | **眼镜** | *yǎnjìng* | **一副** (*yí fù*) |
| Sunglasses | **太阳镜** | *tàiyángjìng* | **一副** (*yí fù*) |
| Hat / Cap | **帽子** | *màozi* | **一顶** (*yì dǐng*) |
| Scarf | **围巾** | *wéijīn* | **一条** (*yì tiáo*) |
| Watch | **手表** | *shǒubiǎo* | **一块** (*yí kuài*) |
| Earrings | **耳环** | *ěrhuán* | **一对** (*yí duì*) |
| Necklace | **项链** | *xiàngliàn* | **一条** (*yì tiáo*) |
| Face mask | **口罩** | *kǒuzhào* | **一个** (*yí gè*) |

### 3. Describing Someone in a Photograph (穿着…、戴着…的 + Person)
In IGCSE speaking and reading exams, you often identify a person in a group photo by turning **穿着 / 戴着** into a modifier right before **的 + Person**:
- **照片里那个穿着白色衬衫、戴着一副眼镜的男生是我哥哥。**
  (*Zhàopiàn lǐ nà gè chuānzhe báisè chènshān, dàizhe yí fù yǎnjìng de nánshēng shì wǒ gēge.*)
  — *The boy in the photo wearing a white shirt and a pair of glasses is my older brother.*
- **站在左边穿着蓝色连衣裙、戴着草帽的女生是我表姐。**
  — *The girl standing on the left wearing a blue dress and a straw hat is my older female cousin.*`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Split diagram comparing chuan for clothes and shoes versus dai for accessories and measure words">
  <rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--brand)">穿 (chuān) vs 戴 (dài) &amp; Exact Measure Words</text>
  <rect x="18" y="42" width="252" height="148" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="144" y="66" text-anchor="middle" font-size="16" font-weight="700" fill="var(--brand)">穿 (chuān) · Clothes &amp; Shoes</text>
  <text x="144" y="84" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Pull onto torso, legs, or feet</text>
  <text x="34" y="108" font-size="11.5" fill="var(--ink)">• 一件 (jiàn): 衬衫, 毛衣, 外套, T恤衫</text>
  <text x="34" y="128" font-size="11.5" fill="var(--ink)">• 一条 (tiáo): 裤子, 牛仔裤, 裙子</text>
  <text x="34" y="148" font-size="11.5" fill="var(--ink)">• 一双 (shuāng): 运动鞋, 鞋子, 袜子</text>
  <text x="34" y="168" font-size="11.5" fill="var(--ink)">• 一套 (tào): 校服 (school uniform)</text>
  <rect x="290" y="42" width="252" height="148" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="416" y="66" text-anchor="middle" font-size="16" font-weight="700" fill="var(--good)">戴 (dài) · Accessories</text>
  <text x="416" y="84" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Place on head, face, neck, ears, or wrist</text>
  <text x="306" y="108" font-size="11.5" fill="var(--ink)">• 一副 (fù): 眼镜 (yǎnjìng), 太阳镜</text>
  <text x="306" y="128" font-size="11.5" fill="var(--ink)">• 一顶 (dǐng): 帽子 (màozi — hat)</text>
  <text x="306" y="148" font-size="11.5" fill="var(--ink)">• 一条 (tiáo): 围巾 (scarf), 项链</text>
  <text x="306" y="168" font-size="11.5" fill="var(--ink)">• 一块 (kuài): 手表 (shǒubiǎo — watch)</text>
  <rect x="18" y="200" width="524" height="36" rx="8" fill="var(--brand-soft)" stroke="var(--brand)"/>
  <text x="280" y="222" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Photo Pattern: 穿着白色衬衫、戴着一副眼镜的男生 (The boy wearing a white shirt &amp; glasses)</text>
</svg>`,
      diagramCaption: "Use 穿着 for garments/shoes and 戴着 for glasses, hats, scarves, watches, and jewellery.",
      whyItWorks:
        "Look at the character **穿 (chuān)**: it literally means 'to thread / pass through' (穴 hole + 牙 tooth) — you thread your arms through sleeves and legs through trousers! By contrast, **戴 (dài)** originally meant 'to carry / rest on top of the head', which expanded naturally to hats, glasses, watches, scarves, and jewellery.",
      keyPoints: [
        "Use **穿 (chuān)** for garments and footwear: **衬衫, T恤衫, 外套, 牛仔裤, 裙子, 校服, 运动鞋, 袜子**.",
        "Use **戴 (dài)** for accessories: **眼镜, 太阳镜, 帽子, 围巾, 手表, 耳环, 项链, 口罩**.",
        "Attach **着 (zhe)** (**穿着 / 戴着**) to describe the ongoing state of what someone has on in a photo or right now.",
        "Watch the tone difference! **眼镜** (*yǎnjìng* — glasses, 4th tone) vs **眼睛** (*yǎnjing* — eyes, neutral tone)!",
        "Pair clothing nouns with exact measure words: **一件衬衫**, **一条牛仔裤**, **一双运动鞋**, **一副眼镜**, **一顶帽子**, **一块手表**.",
      ],
      strategies: [
        "**The Thread-Through Test**: Do your arms, legs, or feet thread *through* it? Yes → **穿**. Does it sit *on* your face, head, neck, or wrist? Yes → **戴**.",
        "**Photo-Spotting Formula**: Practise building one long noun phrase: **穿着 + Clothes、戴着 + Accessory + 的 + 男生/女生/老人**.",
      ],
      thinkDeeper:
        "Why do **围巾 (scarf)** and **领带 (tie)** both use **戴 (dài)** (or **系 jì** 'tie') instead of **穿**, even though they are made of fabric? Because you drape or wrap them onto your neck as accessories rather than pulling your limbs through sleeves or trouser legs!",
      workedExamples: [
        {
          title: "Splitting 穿 and 戴 in One Sentence",
          problem:
            "Fill the two blanks with **穿着** or **戴着**: 今天天气很冷，妹妹___一件红色毛衣和一条牛仔裤，还___一顶帽子和一条围巾。",
          steps: [
            "1. First blank precedes **毛衣** (sweater) and **牛仔裤** (jeans) — body garments → **穿着 (chuānzhe)**.",
            "2. Second blank precedes **帽子** (hat) and **围巾** (scarf) — head/neck accessories → **戴着 (dàizhe)**.",
          ],
          answer: "**穿着**, **戴着** (**妹妹穿着一件红色毛衣和一条牛仔裤，还戴着一顶帽子和一条围巾。**)",
          yourTurn: {
            question: "Which verb (**穿** or **戴**) goes with **一副眼镜** (a pair of glasses)? (Type Simplified Hanzi or tone-marked Pinyin.)",
            answer: { type: "text", accept: ["戴", "dài", "戴着", "dàizhe"], display: "戴 (dài)" },
            solution: "Glasses sit on your face as an accessory, so always use **戴 (dài)** — **戴着一副眼镜** (*dàizhe yí fù yǎnjìng*).",
          },
        },
        {
          title: "Identifying Someone in a Photo",
          problem:
            "Translate into Mandarin: *'The girl wearing a yellow skirt and wearing a watch is my younger cousin (mother's sister's daughter).'*",
          steps: [
            "1. Wearing a yellow skirt → **穿着黄色裙子** (skirt = garment → **穿**).",
            "2. Wearing a watch → **戴着手表** (watch = wrist accessory → **戴**).",
            "3. Combine with **的女生** + mother's sister's younger daughter (**表妹**).",
          ],
          answer: "**穿着黄色裙子、戴着手表的女生是我表妹。** (*Chuānzhe huángsè qúnzi, dàizhe shǒubiǎo de nǚshēng shì wǒ biǎomèi.*)",
        },
      ],
    },
    {
      id: "personality-traits",
      heading: "Personality Adjectives & 又…又… Patterns",
      discovery: {
        problem:
          "Compare these two Mandarin sentences:\n- (A) *我表哥**又**聪明**又**幽默。* (My cousin is both clever and humorous.)\n- (B) *我弟弟**又**聪明**又**懒。* (Intended: My brother is both clever and lazy.)\nWhy is Sentence (A) natural Grade-9 Chinese, whereas Sentence (B) breaks an unwritten rule of **又…又…**?",
        idea:
          "**又 + Adj1 + 又 + Adj2** ONLY links two qualities of the **same emotional tone** (both positive like **又聪明又勤快**, OR both negative like **又懒又粗心**)! To combine a positive quality with a negative one, switch to **虽然…，但是有点儿…**: **弟弟虽然很聪明，但是有点儿懒。**",
      },
      body: `Describing someone's inner personality (**性格 xìnggé**) turns a simple physical list into a vivid IGCSE portrait.

### 1. Core Year 9 Personality Vocabulary (性格词汇)
| Positive Traits (优点) | Pinyin | English | Contrast / Nuanced Traits | Pinyin | English |
|---|---|---|---|---|---|
| **聪明** | *cōngmíng* | clever / smart | **懒** | *lǎn* | lazy |
| **友好** | *yǒuhǎo* | friendly | **害羞** | *hàixiū* | shy |
| **幽默** | *yōumò* | humorous / funny | **严格** | *yángé* | strict |
| **认真** | *rènzhēn* | serious / diligent | **粗心** | *cūxīn* | careless |
| **勤快** | *qínkuài* | hardworking | **固执** | *gùzhí* | stubborn |
| **耐心** | *nàixīn* | patient | **严肃** | *yánsù* | stern / grave |
| **开朗 / 活泼** | *kāilǎng / huópō* | outgoing / lively | **急躁** | *jízào* | impatient |
| **善良 / 诚实** | *shànliáng / chéngshí* | kind-hearted / honest | **内向** | *nèixiàng* | introverted |

### 2. Mastering 又…又… (yòu... yòu... — 'both... and...')
- **Same polarity ONLY!**
  - Positive + Positive: **她又聪明又勤快。** (*Tā yòu cōngmíng yòu qínkuài.*) — She is both smart and hardworking.
  - Physical + Physical: **哥哥又高又瘦。** (*Gēge yòu gāo yòu shòu.*) — Older brother is both tall and slim.
  - Negative + Negative: **小狗又懒又贪吃。** (*Xiǎogǒu yòu lǎn yòu tānchī.*) — The puppy is both lazy and greedy.
- **NEVER put 很 inside 又…又…**: say **又高又瘦**, NOT ~~又很高又很瘦~~!

### 3. Mastering 有点儿 (yǒudiǎnr) vs 一点儿 (yìdiǎnr)
Students constantly confuse these two look-alike phrases — notice their **opposite positions** and **different meanings**!

| Pattern | Position | Nuance & Use | Model Example |
|---|---|---|---|
| **有点儿 + Adj** | **BEFORE** adjective | "a little bit (undesirable / mild flaw)" — softens criticism politely! | **数学老师有点儿严格。** (*The maths teacher is a bit strict.*) / **妹妹有点儿害羞。** |
| **Adj + 一点儿** | **AFTER** adjective | "a bit more..." — used in **比** comparisons or requests! | **姐姐比我高一点儿。** (*Older sister is a little taller than me.*) |`,
      diagram: `<svg viewBox="0 0 560 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Polarity rule for you...you... and position rule for youdianr versus yidianr">
  <rect x="4" y="4" width="552" height="237" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--brand)">Personality Patterns: 又…又… &amp; 有点儿 vs 一点儿</text>
  <rect x="18" y="42" width="254" height="108" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="145" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="var(--good)">又 + Adj₁ + 又 + Adj₂ (Same Tone!)</text>
  <text x="145" y="88" text-anchor="middle" font-size="11.5" fill="var(--ink)">✓ (+) 又聪明又认真 · 又友好又幽默</text>
  <text x="145" y="108" text-anchor="middle" font-size="11.5" fill="var(--ink)">✓ (−) 又懒又粗心 (both negative)</text>
  <text x="145" y="132" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">✗ 又聪明又懒 (mixed → use 虽然…但是!)</text>
  <rect x="288" y="42" width="254" height="108" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="415" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">Mixed Qualities Formula</text>
  <text x="415" y="88" text-anchor="middle" font-size="11.5" fill="var(--ink)">虽然 + Positive，但是 + 有点儿 + Flaw</text>
  <text x="415" y="110" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--good)">虽然王老师有点儿严格，但是很有耐心。</text>
  <text x="415" y="132" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Softens criticism into Grade-9 balance!</text>
  <rect x="18" y="164" width="254" height="64" rx="10" fill="var(--brand-soft)" stroke="var(--brand)"/>
  <text x="145" y="186" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--brand)">有点儿 + Adj (BEFORE Adj)</text>
  <text x="145" y="206" text-anchor="middle" font-size="11" fill="var(--ink)">Mildly negative / shy nuance</text>
  <text x="145" y="221" text-anchor="middle" font-size="11" fill="var(--ink-2)">他有点儿害羞 · 弟弟有点儿懒</text>
  <rect x="288" y="164" width="254" height="64" rx="10" fill="var(--surface-2)" stroke="var(--good)"/>
  <text x="415" y="186" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--good)">Adj + 一点儿 (AFTER Adj)</text>
  <text x="415" y="206" text-anchor="middle" font-size="11" fill="var(--ink)">Used in comparisons (比) or requests</text>
  <text x="415" y="221" text-anchor="middle" font-size="11" fill="var(--ink-2)">她比我认真一点儿 · 请慢一点儿</text>
</svg>`,
      diagramCaption: "Match polarity inside 又…又…, and keep 有点儿 BEFORE the adjective vs 一点儿 AFTER the adjective.",
      whyItWorks:
        "In **有点儿 + Adj**, **有 (have)** acts as a mini-verb introducing a touch of an unwanted trait ('has a bit of shyness/strictness'), which naturally stands **before** the adjective. In **Adj + 一点儿**, **一点儿** measures the degree *by how much* an adjective differs, so it stands in the **post-adjective degree slot**, right where **五厘米** or **得多** sits!",
      keyPoints: [
        "Use **又 + Adj1 + 又 + Adj2** ONLY when both adjectives share the same polarity (**又聪明又耐心**), and NEVER insert **很**.",
        "When mixing a strength and a flaw, use **虽然…，但是有点儿…** (**虽然弟弟很聪明，但是有点儿懒**).",
        "**有点儿 (yǒudiǎnr)** goes **BEFORE** an adjective and carries a mildly negative or apologetic tone (**有点儿害羞**, **有点儿严格**).",
        "**一点儿 (yìdiǎnr)** goes **AFTER** an adjective for comparisons (**高一点儿**, **快一点儿**).",
        "Know core opposite pairs: **勤快 ↔ 懒**, **认真 ↔ 粗心**, **开朗 ↔ 害羞/内向**, **耐心 ↔ 急躁**.",
      ],
      strategies: [
        "**Balanced Portrait Trick**: In IGCSE writing, never describe someone as 100% perfect — add one gentle flaw with **虽然…但是有点儿…** (**虽然爸爸有点儿严格，但是他很幽默**) to show mature control!",
        "**Before-vs-After Check**: Has **有**? Put **有点儿** BEFORE the adjective. No **有**? Put **一点儿** AFTER the adjective!",
      ],
      thinkDeeper:
        "Why does **他有点儿高** sound slightly critical (like 'he is a bit *too* tall for this doorway'), whereas **他比我高一点儿** sounds completely neutral ('he is a little taller than me')? Because **有点儿** carries an inherent 'slightly more than ideal' nuance!",
      workedExamples: [
        {
          title: "Fixing a Mixed-Polarity 又…又… Sentence",
          problem:
            "A student writes: *我的科学老师又幽默又严格。* (Intended: My science teacher is humorous, though a bit strict.) Rewrite this into balanced Grade-9 Mandarin.",
          steps: [
            "1. Spot the mismatch: **幽默** (humorous, positive) vs **严格** (strict, demanding/mildly negative) clash inside **又…又…**.",
            "2. Switch to **虽然…，但是…** and soften **严格** with **有点儿**.",
          ],
          answer: "**我的科学老师虽然有点儿严格，但是非常幽默。** (*Wǒ de kēxué lǎoshī suīrán yǒudiǎnr yángé, dànshì fēicháng yōumò.*)",
          yourTurn: {
            question: "Fill in **有点儿** or **一点儿** before the adjective: **我的小表妹第一次见陌生人，___害羞。**",
            answer: { type: "text", accept: ["有点儿", "yǒudiǎnr", "有点", "yǒudiǎn"], display: "有点儿 (yǒudiǎnr)" },
            solution: "Before a mildly negative/shy adjective (**害羞**), always use **有点儿 (yǒudiǎnr)**: **有点儿害羞**.",
          },
        },
        {
          title: "Pairing Antonyms & Positive Traits",
          problem:
            "Translate into Mandarin using **又…又…**: *'My older female cousin is both hardworking and patient; she is never careless.'*",
          steps: [
            "1. Both hardworking (**勤快**) and patient (**耐心**) are positive → **又勤快又耐心**.",
            "2. 'Never careless' → **从来不粗心** (*cónglái bù cūxīn*).",
          ],
          answer: "**我表姐又勤快又耐心，从来不粗心。** (*Wǒ biǎojiě yòu qínkuài yòu nàixīn, cónglái bù cūxīn.*)",
        },
      ],
    },
    {
      id: "comparing-people",
      heading: "Comparing People with 比 (bǐ) & 跟…一样",
      discovery: {
        problem:
          "Look at the #1 most common comparison mistake in Year 9 Chinese: *'姐姐比我**很**高。'* (Trying to translate *'My older sister is much taller than me'*). Why is **很** strictly BANNED after **比**, and what exact Mandarin words SHOULD replace it?",
        idea:
          "In Mandarin, **很** is a weak default filler (not a comparison degree word) — placing **很, 非常, 真,** or **太** after **比** is ungrammatical! To say *much* taller, place **得多 (de duō)** or **多了 (duō le)** **AFTER** the adjective (**姐姐比我高得多**), or put **更 (gèng — even more)** **BEFORE** the adjective (**姐姐比我更高**)!",
      },
      body: `Comparing people's height, age, appearance, and personality uses **three** crystal-clear Mandarin formulas.

### 1. Superiority: A 比 B + Adj (+ Post-Adjective Degree)
**Basic**: **A 比 B + Adj**
- **姐姐比我高。** (*Jiějie bǐ wǒ gāo.*) — Older sister is taller than me.

**With Degree Modifiers (NEVER use 很 / 非常 / 太 after 比!)**:
| English Nuance | Exact Pattern | Model Sentence |
|---|---|---|
| A little more | **A 比 B + Adj + 一点儿** | **表哥比我高一点儿。** (*a little taller*) |
| Much more | **A 比 B + Adj + 得多 / 多了** | **哥哥比弟弟勤快得多。** (*much more hardworking*) |
| Exact amount | **A 比 B + Adj + Number + Unit** | **姐姐比我高五厘米。** (*5 cm taller*) · **堂哥比我大三岁。** (*3 years older*) |
| Even more | **A 比 B + 更 (gèng) + Adj** | **弟弟很幽默，但是妹妹比弟弟更幽默！** (*even funnier*) |

### 2. Negative Comparison: A 没有 B (那么) + Adj ('not as ... as')
When A is LESS than B, **do NOT write ~~A 不比 B 高~~** for a simple 'not as tall as' — use **没有 (méiyǒu)**!
- **我没有哥哥高。** (*Wǒ méiyǒu gēge gāo.*) — I am not as tall as my older brother. (Logically equivalent to **哥哥比我高**!)
- **弟弟没有姐姐那么认真。** (*Dìdi méiyǒu jiějie nàme rènzhēn.*) — Younger brother is not as diligent as older sister.

### 3. Equality & Inequality: A 跟 / 和 B (不)一样 (+ Adj / Verb Phrase)
- **Same adjective**: **我和表姐一样高。** (*Wǒ hé biǎojiě yíyàng gāo.*) — My cousin and I are the same height.
- **Same hobby / verb phrase**: **我跟堂哥一样喜欢打篮球。** (*Wǒ gēn tánggē yíyàng xǐhuan dǎ lánqiú.*) — I like playing basketball just as much as my cousin does.
- **Different**: **我的性格跟妹妹不一样，我比较安静，她非常活泼。** (*My personality is different from my younger sister's: I am fairly quiet, while she is super lively.*)`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three Mandarin comparison formulas using bi, meiyou, and gen...yiyang with forbidden hen warning">
  <rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--brand)">The 3 Comparison Formulas (比 · 没有 · 跟…一样)</text>
  <rect x="18" y="42" width="524" height="58" rx="9" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="32" y="63" font-size="12" font-weight="700" fill="var(--brand)">1. MORE (比 bǐ): A 比 B + [更] + Adj + [一点儿 / 得多 / 五厘米]</text>
  <text x="32" y="84" font-size="11.5" fill="var(--ink)">✓ 姐姐比我高五厘米 · 哥哥比我高得多     ✗ 姐姐比我很高 (NEVER 很/非常/太!)</text>
  <rect x="18" y="110" width="524" height="56" rx="9" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/>
  <text x="32" y="131" font-size="12" font-weight="700" fill="var(--bad)">2. NOT AS...AS (没有 méiyǒu): A 没有 B (那么) + Adj</text>
  <text x="32" y="152" font-size="11.5" fill="var(--ink)">✓ 我没有哥哥高 (equiv. to 哥哥比我高) · 弟弟没有姐姐那么认真</text>
  <rect x="18" y="176" width="524" height="56" rx="9" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="32" y="197" font-size="12" font-weight="700" fill="var(--good)">3. EQUAL / DIFFERENT (跟…一样): A 跟/和 B (不)一样 + [Adj / Verb]</text>
  <text x="32" y="218" font-size="11.5" fill="var(--ink)">✓ 我和表姐一样喜欢看书 · 我跟堂妹一样高 · 性格跟弟弟不一样</text>
</svg>`,
      diagramCaption: "Master the three comparison blueprints — and remember the strict 'No 很 after 比' rule!",
      whyItWorks:
        "Think of **比 (bǐ)** as placing Person A and Person B onto a balance scale: the scale already compares them, so it only accepts **relative** modifiers (before: **更** 'even more', **还** 'still more'; after: **一点儿** 'a bit', **得多/多了** 'a lot', or an exact measurement like **三岁 / 五厘米**). Absolute adverbs like **很** or **非常** describe one person alone, not the gap between two people!",
      keyPoints: [
        "NEVER place **很, 非常, 真,** or **太** after **比** (~~姐姐比我很高~~ ✗ → **姐姐比我高得多** ✓).",
        "Put exact differences **AFTER** the adjective: **姐姐比我高五厘米**, **表哥比我大三岁**.",
        "Use **一点儿** AFTER the adjective for small gaps (**高一点儿**), **得多 / 多了** for big gaps (**高得多**), and **更 (gèng)** BEFORE the adjective for 'even more' (**更高**).",
        "Express 'not as... as' with **A 没有 B (那么) + Adj**: **我没有哥哥高** means the exact same thing as **哥哥比我高**!",
        "Express equality with **A 跟/和 B 一样 (+ Adj / Verb)**: **我和表姐一样喜欢看书**; negate with **不一样**.",
      ],
      strategies: [
        "**Scale-Flip Check**: Whenever you read **A 没有 B + Adj**, mentally flip it to **B 比 A + Adj** — that instantly prevents mix-ups in listening and reading comprehension!",
        "**The Post-Adjective Slot**: Memorise the 3 fillers that sit *after* the adjective in a **比** sentence: **一点儿** (small), **得多** (big), **Number + Unit** (exact).",
      ],
      thinkDeeper:
        "What is the subtle difference between **A 没有 B 高** and **A 不比 B 高**? **A 没有 B 高** clearly states A < B ('A is shorter than B'). **A 不比 B 高** merely denies 'A > B' — meaning A is shorter OR the exact same height (A ≤ B), usually used to contradict someone! In Year 9 exams, stick to **没有** for 'not as... as'!",
      workedExamples: [
        {
          title: "Correcting 'Very' Inside a 比 Comparison",
          problem:
            "Correct the error in BOTH ways (one using **得多**, one using an exact gap of **8 cm**): *我表哥比我很高。*",
          steps: [
            "1. Delete the banned adverb **很** after **比**.",
            "2. Way 1 (much taller): add **得多** (or **多了**) AFTER **高** → **我表哥比我高得多。**",
            "3. Way 2 (8 cm taller): add **八厘米** AFTER **高** → **我表哥比我高八厘米。**",
          ],
          answer: "**我表哥比我高得多。** or **我表哥比我高八厘米。**",
          yourTurn: {
            question: "Rewrite **哥哥比我高** (*Older brother is taller than me*) starting with **我** using **没有** (Write Simplified Hanzi or tone-marked Pinyin).",
            answer: {
              type: "text",
              accept: ["我没有哥哥高", "我没有哥哥那么高", "wǒ méiyǒu gēge gāo", "wǒ méiyǒu gēge nàme gāo"],
              display: "我没有哥哥高 (Wǒ méiyǒu gēge gāo)",
            },
            solution: "Flip A and B with **没有**: **我没有哥哥高** (or **我没有哥哥那么高**) = 'I am not as tall as my older brother.'",
          },
        },
        {
          title: "Comparing Two People with 跟…一样",
          problem:
            "Translate into Mandarin: *'My older female cousin and I both like reading just as much, and we are the same height!'*",
          steps: [
            "1. Same hobby: **我和表姐一样喜欢看书** (or **跟**).",
            "2. Same height: **而且我们一样高** (or **我和表姐一样高**).",
          ],
          answer: "**我和表姐一样喜欢看书，而且我们一样高！** (*Wǒ hé biǎojiě yíyàng xǐhuan kànshū, érqiě wǒmen yíyàng gāo!*)",
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "**长着** (*zhǎngzhe*)", back: "To be born with / have innate facial features (e.g. **长着大眼睛、圆脸** — note 3rd tone *zhǎng*!)" },
      { front: "**留着** (*liúzhe*)", back: "To keep / wear a hairstyle or beard (e.g. **留着黑色的短发 / 留着胡子**)" },
      { front: "**直发 / 卷发** (*zhífà / juǎnfà*)", back: "Straight hair / curly hair" },
      { front: "**中等身材 / 个子** (*zhōngděng shēncái / gèzi*)", back: "Medium build / stature (height)" },
      { front: "**穿 (穿着)** (*chuān / chuānzhe*)", back: "To wear clothes & footwear (shirts, jackets, jeans, skirts, socks, shoes)" },
      { front: "**戴 (戴着)** (*dài / dàizhe*)", back: "To wear accessories on head/face/neck/wrists (glasses, hats, scarves, watches, earrings)" },
      { front: "**一副眼镜** (*yí fù yǎnjìng*)", back: "A pair of glasses (remember **戴着一副眼镜**, 4th tone *jìng*, NOT **眼睛** *yǎnjing* 'eyes'!)" },
      { front: "**一顶帽子 / 一块手表** (*yì dǐng màozi / yí kuài shǒubiǎo*)", back: "A hat (with **戴**) / a watch (with **戴**)" },
      { front: "**聪明 / 幽默 / 认真** (*cōngmíng / yōumò / rènzhēn*)", back: "Clever / humorous / serious & diligent" },
      { front: "**勤快 ↔ 懒** (*qínkuài ↔ lǎn*)", back: "Hardworking ↔ lazy" },
      { front: "**耐心 / 严格 / 害羞** (*nàixīn / yángé / hàixiū*)", back: "Patient / strict / shy" },
      { front: "**又…又…** (*yòu... yòu...*)", back: "Both... and... (MUST link two adjectives of the SAME polarity; NEVER insert **很**)" },
      { front: "**有点儿 + Adj** (*yǒudiǎnr*)", back: "A little bit (BEFORE adjective, mildly negative/apologetic nuance: **有点儿害羞**)" },
      { front: "**A 比 B + Adj + 一点儿 / 得多**", back: "A is a little / much more [Adj] than B (NEVER put **很 / 非常 / 太** after **比**!)" },
      { front: "**A 没有 B (那么) + Adj**", back: "A is not as [Adj] as B (**我没有哥哥高** ≡ **哥哥比我高**)" },
      { front: "**A 跟/和 B 一样 (+ Adj/Verb)**", back: "A is just as [Adj/Verb] as B (**我和表姐一样高 / 一样喜欢看书**)" },
    ],
    mustKnow: [
      "Can you describe height, build, hair, and facial features WITHOUT ever putting **是** before a bare adjective?",
      "Can you distinguish **留着** (*liúzhe* — hairstyles) from **长着** (*zhǎngzhe* — born facial features)?",
      "Can you sort ANY clothing item or accessory accurately into **穿 (chuān)** vs **戴 (dài)**?",
      "Can you pair clothing/accessory nouns with exact measure words (**件, 条, 双, 副, 顶, 块**)?",
      "Can you distinguish **眼睛** (*yǎnjing* — eyes) from **眼镜** (*yǎnjìng* — glasses) in reading and writing?",
      "Can you obey the same-polarity rule in **又…又…** and use **虽然…但是有点儿…** for mixed traits?",
      "Can you place **有点儿** BEFORE an adjective and **一点儿** AFTER an adjective in comparisons?",
      "Can you build error-free **比**, **没有**, and **跟…一样** comparisons — with ZERO **很** after **比**?",
    ],
    misconceptions: [
      {
        wrong: "Writing **我哥哥是高** or **她是很聪明** (copying English 'is tall').",
        right: "Mandarin adjectives do not take **是**! Write **我哥哥很高** and **她很聪明**.",
      },
      {
        wrong: "Using **穿** for glasses, hats, scarves, or watches (**穿着眼镜** ✗, **穿着帽子** ✗).",
        right: "Always use **戴 (dài)** for head/face/neck/wrist accessories: **戴着一副眼镜**, **戴着一顶帽子**, **戴着手表**.",
      },
      {
        wrong: "Mixing positive and negative adjectives in **又…又…** (**我弟弟又聪明又懒** ✗).",
        right: "Keep **又…又…** strictly same-polarity (**又聪明又幽默**). For mixed traits, use **虽然…，但是有点儿…**: **弟弟虽然很聪明，但是有点儿懒。**",
      },
      {
        wrong: "Putting **很 / 非常 / 太** after **比** (**姐姐比我很高** ✗, **表哥比我非常幽默** ✗).",
        right: "NEVER put **很 / 非常 / 太** after **比**! Use **高得多 / 高多了** (much taller), **高一点儿** (a little taller), **高五厘米** (5 cm taller), or **更幽默** (even funnier).",
      },
      {
        wrong: "Swapping **有点儿** and **一点儿** (**姐姐比我有点儿高** ✗ or **妹妹一点儿害羞** ✗).",
        right: "**有点儿** stands BEFORE an adjective (**妹妹有点儿害羞**); **一点儿** stands AFTER an adjective in comparisons (**姐姐比我高一点儿**).",
      },
      {
        wrong: "Confusing **眼睛 (yǎnjing — eyes)** and **眼镜 (yǎnjìng — glasses)**.",
        right: "**眼睛** has the eye radical **目** in BOTH characters (**大眼睛**); **眼镜** ends with **镜** (mirror/lens, gold/metal radical **钅**) → **戴着一副眼镜**.",
      },
    ],
    examMistakes: [
      "Writing **穿眼镜** or **穿帽子** in IGCSE photo-description tasks — instant grammar penalty!",
      "Slipping **很** after **比** (**他比我很高**) under timed exam pressure.",
      "Forgetting the measure word **副 (fù)** for glasses (**一副眼镜**) or **顶 (dǐng)** for hats (**一顶帽子**).",
      "Misreading **A 没有 B 高** as 'A is taller than B' — remember **没有** means A is LESS tall than B (so B > A)!",
      "Putting the exact gap BEFORE the adjective (**比我五厘米高** ✗) instead of AFTER (**比我高五厘米** ✓).",
      "Confusing **有点儿** (mild negative before adjective) with **一点儿** (comparison gap after adjective).",
    ],
    mnemonics: [
      {
        topic: "穿 (chuān) vs 戴 (dài)",
        device: "**穿** = **C**lothes & shoes you **C**limb through; **戴** = **D**ecorations & accessories you **D**rape/put on",
        explanation:
          "If limbs pass through it (shirts, trousers, skirts, socks, shoes), use **穿**. If it sits on your head, face, neck, ears, or wrist (hats, glasses, scarves, watches), use **戴**!",
      },
      {
        topic: "眼睛 (eyes) vs 眼镜 (glasses)",
        device: "**睛** has **目** (an eye inside your eye!); **镜** has **钅** (metal frames of glasses!)",
        explanation:
          "Look at the second character: **目** (eye) in **睛** = real eyes (**大眼睛**); **钅** (metal) in **镜** = lens/glasses frames (**一副眼镜**).",
      },
      {
        topic: "No 很 After 比!",
        device: "**比** bans **很** — put **更** before, or **一点儿 / 得多 / Number** after!",
        explanation:
          "Picture a red STOP sign between **比** and **很**: valid upgrades are **比我更高**, **比我高一点儿**, **比我高得多**, or **比我高五厘米**.",
      },
    ],
    realWorld: [
      {
        title: "Tanglin & Singapore School Uniform Descriptions",
        detail:
          "Describing school uniforms is a classic IGCSE 0547 oral & writing prompt: **学生们穿着整洁的校服和白色的运动鞋，有的同学还戴着一副黑框眼镜** (*Students wear neat uniforms and white trainers, and some classmates also wear black-framed glasses*).",
        emoji: "👕",
      },
      {
        title: "Polite Body Descriptions in Chinese Culture",
        detail:
          "While **高/矮** and **胖/瘦** are core textbook pairs, modern Chinese speakers politely soften descriptions with **中等身材** (medium build), **苗条** (*miáotiao* — slender), or **有点儿丰满/微胖** rather than blunt labels.",
        emoji: "💬",
      },
      {
        title: "IGCSE 0547 Photo-Card & Role-Play Strategy",
        detail:
          "In IGCSE speaking exams, pointing out a person in a busy scene using **穿着…、戴着…的那个男生/女生** immediately shows fluency with **着** and relative clauses.",
        emoji: "📸",
      },
      {
        title: "Comparing Siblings & Friends Across Cultures",
        detail:
          "Saying **我和最好的朋友虽然性格不一样，但是有很多共同爱好** (*Although my best friend and I have different personalities, we share many hobbies*) is a gold-standard high-band IGCSE bridge sentence.",
        emoji: "🤝",
      },
    ],
    videos: [
      {
        title: "穿 (chuān) vs 戴 (dài) in Mandarin Chinese — Never Mix Them Up!",
        channel: "YouTube Search — Chinese chuan vs dai",
        url: "https://www.youtube.com/results?search_query=Mandarin+Chinese+chuan+vs+dai+clothes+accessories",
      },
      {
        title: "Mandarin Comparisons: 比 (bǐ), 没有 (méiyǒu), and 跟…一样 Explained",
        channel: "YouTube Search — Chinese bi comparison grammar",
        url: "https://www.youtube.com/results?search_query=Mandarin+Chinese+bi+meiyou+gen+yiyang+comparison+grammar",
      },
      {
        title: "Describing Appearance & Personality in Chinese (外貌和性格) for IGCSE 0547",
        channel: "YouTube Search — IGCSE Chinese Appearance Personality",
        url: "https://www.youtube.com/results?search_query=IGCSE+Chinese+describing+appearance+personality+Mandarin",
      },
    ],
    formulas: [
      { name: "No 是 before Adjectives", formula: "Subject + 很 / 非常 / 比较 + Adj", note: "他很高 (NEVER 他是高)" },
      { name: "长着 vs 留着 (zhǎngzhe vs liúzhe)", formula: "长着 + born features (大眼睛/圆脸) · 留着 + hairstyle/beard (长头发/短发)", note: "Notice tone: zhǎngzhe (3rd) vs cháng tóufa (2nd)" },
      { name: "穿 vs 戴 (chuān vs dài)", formula: "穿 = clothes & shoes; 戴 = glasses, hats, scarves, watches & jewellery", note: "Add 着 (穿着/戴着) for current state / photos" },
      { name: "Clothing Classifiers", formula: "一件衬衫 · 一条牛仔裤 · 一双运动鞋 · 一副眼镜 · 一顶帽子 · 一块手表", note: "Match every noun to its exact classifier" },
      { name: "又…又… (yòu... yòu...)", formula: "Subject + 又 + Adj₁ + 又 + Adj₂", note: "SAME polarity only; never insert 很" },
      { name: "有点儿 vs 一点儿", formula: "有点儿 + Adj (before, mild flaw) · Adj + 一点儿 (after, comparison gap)", note: "妹妹有点儿害羞 vs 姐姐比我高一点儿" },
      { name: "比 Comparison (A > B)", formula: "A 比 B + [更] + Adj + [一点儿 / 得多 / Number + Unit]", note: "NEVER put 很 / 非常 / 太 after 比!" },
      { name: "没有 Comparison (A < B)", formula: "A 没有 B (那么) + Adj", note: "我没有哥哥高 ≡ 哥哥比我高" },
      { name: "跟 / 和…一样 (A = B)", formula: "A 跟/和 B (不)一样 + [Adj / Verb Phrase]", note: "我和表姐一样喜欢看书" },
    ],
  },
};
