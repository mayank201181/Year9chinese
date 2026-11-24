import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "relatives-family",
  title: "Extended Family & Relatives (亲戚与大家庭)",
  strand: "Home & Community",
  icon: "👨‍👩‍👧‍👦",
  summary: "Master paternal vs maternal Chinese relatives, the 堂/表 cousin rule, polite measure words (口/个/位), and fluent IGCSE descriptions of family visits.",
  intro:
    "In English, one word — **uncle**, **aunt**, **grandpa**, or **cousin** — hides almost everything about how someone is related to you. In Mandarin Chinese (**普通话 Pǔtōnghuà**), every relative title is a mini family-tree GPS coordinate! Just hearing **伯伯 (bóbo)**, **舅舅 (jiùjiu)**, or **堂妹 (tángmèi)** instantly tells a listener which parent's side the person is on, whether they are older or younger, and whether they share your family surname. In this Year 9 unit, you will build complete precision across paternal vs maternal sides, master the **堂 (táng)** vs **表 (biǎo)** cousin system, pick the right people measure words (**口 / 个 / 位**), and write high-band IGCSE paragraphs about visiting and celebrating with your extended family.",
  guide: [
    {
      id: "paternal-maternal-grandparents",
      heading: "Paternal vs Maternal Grandparents & Uncles/Aunts",
      discovery: {
        problem:
          "In English, Liam says: *'I'm having dinner with my grandpa, my uncle, and my aunt.'* Now imagine translating that single sentence into Mandarin. Why is it **impossible** to translate accurately without asking Liam at least four follow-up questions?",
        idea:
          "Chinese never uses one blanket word for grandparents, uncles, or aunts. You must know: (1) **Father's side (爸爸这边)** or **Mother's side (妈妈这边)**? (2) For father's brother, is he **older than Dad** (**伯伯 bóbo**) or **younger than Dad** (**叔叔 shūshu**)? (3) Is the aunt Dad's sister (**姑姑 gūgu**) or Mum's sister (**阿姨 āyí**)? Every title encodes exact family lineage!",
      },
      body: `In Chinese culture, family lineage has historically followed the paternal line (father's side, carrying the family surname **姓 xìng**). That is why maternal relatives often carry the prefix **外 (wài — outside/maternal)**, while paternal relatives have distinct seniority titles.

### 1. Grandparents: Father's Side vs Mother's Side
| Side of Family | Grandfather | Grandmother | Regional & Exam Note |
|---|---|---|---|
| **Father's side (父系)** | **爷爷** (*yéye*) | **奶奶** (*nǎinai*) | Universal across China, Singapore & IGCSE 0547 |
| **Mother's side (母系 — South / Singapore)** | **外公** (*wàigōng*) | **外婆** (*wàipó*) | Standard in Singapore, Southern China & IGCSE exams |
| **Mother's side (母系 — North / Beijing)** | **姥爷** (*lǎoye*) | **姥姥** (*lǎolao*) | Very common in Northern China (recognise for listening!) |

Notice the clever clue in **外公 (wàigōng)** and **外婆 (wàipó)**: **外 (wài)** means "outer / maternal side", marking them as Mum's parents rather than Dad's.

### 2. Uncles & Aunts: Five Core Blood Titles (Plus Spouses!)
Never translate "uncle" blindly as **叔叔 (shūshu)** or "aunt" blindly as **阿姨 (āyí)**!

- **Father's older brother**: **伯伯** (*bóbo*) — his wife is **伯母** (*bómǔ*)
- **Father's younger brother**: **叔叔** (*shūshu*) — his wife is **婶婶** (*shěnshen*)
- **Father's sister**: **姑姑** (*gūgu*) — her husband is **姑父** (*gūfu*)
- **Mother's brother** (older OR younger!): **舅舅** (*jiùjiu*) — his wife is **舅妈** (*jiùmā*)
- **Mother's sister** (older OR younger!): **阿姨** (*āyí*) — her husband is **姨父** (*yífu*)

Notice the asymmetry! Only **father's brothers** split by age (**伯伯** older vs **叔叔** younger). Mother's brother is ALWAYS **舅舅 (jiùjiu)** regardless of whether he is older or younger than Mum, and mother's sister is ALWAYS **阿姨 (āyí)** (sometimes **姨妈 yímā** if older).

### 3. Polite Social Use in Singapore & China
When speaking to non-relatives of your parents' generation (for example, a friend's dad, a taxi driver, or a hawker-centre stallholder), Chinese speakers warmly use **叔叔 (shūshu)** and **阿姨 (āyí)** — just like "Uncle" and "Auntie" in Singapore! In an exam family-tree question, however, always match the exact blood relationship.`,
      diagram: `<svg viewBox="0 0 560 255" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Paternal versus maternal grandparents, uncles, and aunts in Mandarin Chinese">
  <rect x="4" y="4" width="552" height="247" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <rect x="16" y="14" width="256" height="226" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <rect x="288" y="14" width="256" height="226" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="144" y="36" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">Father's Side · 爸爸这边 (Paternal)</text>
  <text x="416" y="36" text-anchor="middle" font-size="13" font-weight="700" fill="var(--good)">Mother's Side · 妈妈这边 (Maternal)</text>
  <rect x="36" y="48" width="98" height="44" rx="8" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="85" y="67" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">爷爷</text>
  <text x="85" y="84" text-anchor="middle" font-size="11" fill="var(--ink-2)">yéye (Grandpa)</text>
  <rect x="154" y="48" width="98" height="44" rx="8" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.2"/>
  <text x="203" y="67" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">奶奶</text>
  <text x="203" y="84" text-anchor="middle" font-size="11" fill="var(--ink-2)">nǎinai (Grandma)</text>
  <line x1="144" y1="92" x2="144" y2="112" stroke="var(--brand)" stroke-width="1.5"/>
  <line x1="56" y1="112" x2="232" y2="112" stroke="var(--brand)" stroke-width="1.5"/>
  <line x1="56" y1="112" x2="56" y2="124" stroke="var(--brand)" stroke-width="1.5"/>
  <line x1="144" y1="112" x2="144" y2="124" stroke="var(--brand)" stroke-width="1.5"/>
  <line x1="232" y1="112" x2="232" y2="124" stroke="var(--brand)" stroke-width="1.5"/>
  <rect x="24" y="124" width="70" height="52" rx="7" fill="var(--surface)" stroke="var(--line)"/>
  <text x="59" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">伯伯</text>
  <text x="59" y="158" text-anchor="middle" font-size="10" fill="var(--ink-2)">bóbo</text>
  <text x="59" y="171" text-anchor="middle" font-size="9.5" fill="var(--brand)">Older Bro</text>
  <rect x="104" y="124" width="80" height="52" rx="7" fill="var(--surface)" stroke="var(--line)"/>
  <text x="144" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">叔叔</text>
  <text x="144" y="158" text-anchor="middle" font-size="10" fill="var(--ink-2)">shūshu</text>
  <text x="144" y="171" text-anchor="middle" font-size="9.5" fill="var(--brand)">Younger Bro</text>
  <rect x="194" y="124" width="70" height="52" rx="7" fill="var(--surface)" stroke="var(--line)"/>
  <text x="229" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">姑姑</text>
  <text x="229" y="158" text-anchor="middle" font-size="10" fill="var(--ink-2)">gūgu</text>
  <text x="229" y="171" text-anchor="middle" font-size="9.5" fill="var(--brand)">Dad's Sis</text>
  <text x="144" y="204" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Spouses: 伯母 (bómǔ) · 婶婶 (shěnshen) · 姑父 (gūfu)</text>
  <text x="144" y="224" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">Key rule: Dad's brothers split by age!</text>
  <rect x="308" y="48" width="98" height="44" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.2"/>
  <text x="357" y="67" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">外公/姥爷</text>
  <text x="357" y="84" text-anchor="middle" font-size="10" fill="var(--ink-2)">wàigōng / lǎoye</text>
  <rect x="426" y="48" width="98" height="44" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.2"/>
  <text x="475" y="67" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">外婆/姥姥</text>
  <text x="475" y="84" text-anchor="middle" font-size="10" fill="var(--ink-2)">wàipó / lǎolao</text>
  <line x1="416" y1="92" x2="416" y2="112" stroke="var(--good)" stroke-width="1.5"/>
  <line x1="356" y1="112" x2="476" y2="112" stroke="var(--good)" stroke-width="1.5"/>
  <line x1="356" y1="112" x2="356" y2="124" stroke="var(--good)" stroke-width="1.5"/>
  <line x1="476" y1="112" x2="476" y2="124" stroke="var(--good)" stroke-width="1.5"/>
  <rect x="304" y="124" width="104" height="52" rx="7" fill="var(--surface)" stroke="var(--line)"/>
  <text x="356" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">舅舅</text>
  <text x="356" y="158" text-anchor="middle" font-size="10" fill="var(--ink-2)">jiùjiu</text>
  <text x="356" y="171" text-anchor="middle" font-size="9.5" fill="var(--good)">Mum's Bro (any age)</text>
  <rect x="424" y="124" width="104" height="52" rx="7" fill="var(--surface)" stroke="var(--line)"/>
  <text x="476" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">阿姨</text>
  <text x="476" y="158" text-anchor="middle" font-size="10" fill="var(--ink-2)">āyí</text>
  <text x="476" y="171" text-anchor="middle" font-size="9.5" fill="var(--good)">Mum's Sis (any age)</text>
  <text x="416" y="204" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Spouses: 舅妈 (jiùmā) · 姨父 (yífu)</text>
  <text x="416" y="224" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--good)">Key rule: 外 marks maternal grandparents!</text>
</svg>`,
      diagramCaption: "Side-by-side map of father's side (paternal) vs mother's side (maternal) titles in Mandarin.",
      whyItWorks:
        "Many female relative characters contain the woman radical **女 (nǚ)**: look at **奶 (nǎi)**, **婆 (pó)**, **姥 (lǎo)**, **姑 (gū)**, **姨 (yí)**, **婶 (shěn)**, and **妈 (mā)**! Spotting **女** immediately tells you the relative is female, while **外 (wài)** flags maternal grandparents and **伯 (bó — eldest)** vs **叔 (shū — younger)** flags paternal brothers' age.",
      keyPoints: [
        "Father's parents are **爷爷 (yéye)** and **奶奶 (nǎinai)**; mother's parents are **外公 (wàigōng)** / **姥爷 (lǎoye)** and **外婆 (wàipó)** / **姥姥 (lǎolao)**.",
        "Father's brothers split by age: older brother = **伯伯 (bóbo)**, younger brother = **叔叔 (shūshu)**.",
        "Father's sister = **姑姑 (gūgu)**; mother's sister = **阿姨 (āyí)**.",
        "Mother's brother = **舅舅 (jiùjiu)** regardless of whether he is older or younger than Mum.",
        "Reduplicated family terms normally weaken the second syllable to neutral tone (e.g. *yéye, nǎinai, shūshu, gūgu, jiùjiu*), except **阿姨 (*āyí*)** which keeps full tones.",
      ],
      strategies: [
        "**Two-Step Lineage Check**: Before choosing any uncle/aunt word, ask (1) Dad's side or Mum's side? (2) If Dad's brother, older or younger than Dad?",
        "**Radical Scanner**: Look for the **女** radical to confirm female relatives (**奶奶, 姑姑, 阿姨, 姥姥, 舅妈**) when reading unfamiliar Hanzi in listening or reading exams.",
      ],
      thinkDeeper:
        "Why does Chinese have a separate word for **father's older brother (伯伯)** vs **father's younger brother (叔叔)**, yet uses just one word (**舅舅**) for mother's brothers? Think about traditional Chinese multi-generational courtyards where brothers lived together under one roof and the eldest brother held authority after the grandfather!",
      workedExamples: [
        {
          title: "Choosing Exact Uncle & Aunt Titles",
          problem:
            "Chloe's father (46) has an older brother (50) and a sister (42). Chloe's mother (44) has a younger brother (39). What should Chloe call each of these three relatives in Mandarin?",
          steps: [
            "1. Father's older brother (50 > 46): Father's side + brother + older than Dad → **伯伯 (bóbo)**.",
            "2. Father's sister (42): Father's side + sister → **姑姑 (gūgu)** (do NOT use 阿姨!).",
            "3. Mother's younger brother (39): Mother's side + brother → **舅舅 (jiùjiu)** (do NOT use 叔叔 — age does not split 舅舅!).",
          ],
          answer: "**伯伯 (bóbo)**, **姑姑 (gūgu)**, and **舅舅 (jiùjiu)**.",
          yourTurn: {
            question: "What do you call your **mother's older brother** in Mandarin? (Write Simplified Hanzi or tone-marked Pinyin.)",
            answer: { type: "text", accept: ["舅舅", "jiùjiu"], display: "舅舅 (jiùjiu)" },
            solution: "Any brother of your mother — whether older or younger than her — is **舅舅 (jiùjiu)**. (**伯伯** is only for father's older brother!)",
          },
        },
        {
          title: "Decoding a Family Paragraph",
          problem:
            "Read: **我的爸爸有一个弟弟和一个姐姐，妈妈有一个妹妹。** (Wǒ de bàba yǒu yí gè dìdi hé yí gè jiějie, māma yǒu yí gè mèimei.) List the three Mandarin titles for these relatives.",
          steps: [
            "1. **爸爸的弟弟** (father's younger brother) → **叔叔 (shūshu)**.",
            "2. **爸爸的姐姐** (father's older sister) → **姑姑 (gūgu)**.",
            "3. **妈妈的妹妹** (mother's younger sister) → **阿姨 (āyí)**.",
          ],
          answer: "**叔叔 (shūshu)**, **姑姑 (gūgu)**, and **阿姨 (āyí)**.",
        },
      ],
    },
    {
      id: "cousins-family-tree",
      heading: "Cousins (堂 vs 表) & Extended Family Tree",
      discovery: {
        problem:
          "Maya has two male cousins who are both 16 years old (older than Maya, who is 14). One is her **叔叔's son** (father's younger brother's son). The other is her **姑姑's son** (father's sister's son). Both are on her **father's side**! Why does Maya call one **堂哥 (tánggē)** and the other **表哥 (biǎogē)**?",
        idea:
          "The split between **堂 (táng)** and **表 (biǎo)** is NOT simply 'father's side vs mother's side'! **堂 (táng — same ancestral hall)** is ONLY for **father's brothers' children** (**伯伯** and **叔叔**'s kids), who traditionally share your exact paternal surname (**同姓**). **姑姑**'s children take her husband's surname, so they — along with **舅舅**'s and **阿姨**'s children — are **表 (biǎo — outer/different surname)**!",
      },
      body: `Every English "cousin" maps to **eight** possible Mandarin titles, built from a crystal-clear 2 × 4 matrix:

### 1. The Golden Rule of 堂 (táng) vs 表 (biǎo)
| Prefix | Whose Children? | Traditional Surname Rule | All 4 Combinations |
|---|---|---|---|
| **堂 (táng)** | **伯伯** (dad's older bro) or **叔叔** (dad's younger bro) ONLY | Same paternal surname (**同姓 tóngxìng**) | **堂哥** (*tánggē*), **堂姐** (*tángjiě*), **堂弟** (*tángdì*), **堂妹** (*tángmèi*) |
| **表 (biǎo)** | **姑姑** (dad's sis), **舅舅** (mum's bro), or **阿姨** (mum's sis) | Different paternal surname (**外姓 wàixìng**) | **表哥** (*biǎogē*), **表姐** (*biǎojiě*), **表弟** (*biǎodì*), **表妹** (*biǎomèi*) |

### 2. Choosing 哥 / 姐 / 弟 / 妹: Compare YOUR Age with the Cousin's Age!
Once you pick **堂** or **表**, attach the sibling suffix by comparing **the cousin's age to YOUR age** (NOT your parents' ages!):
- Male & older than you → **哥** (*gē*): **堂哥 / 表哥**
- Female & older than you → **姐** (*jiě*): **堂姐 / 表姐**
- Male & younger than you → **弟** (*dì*): **堂弟 / 表弟**
- Female & younger than you → **妹** (*mèi*): **堂妹 / 表妹**

*Careful!* Even if your **叔叔 (father's younger brother)** is younger than your Dad, if your 叔叔's son is 18 and you are 14, he is still your **堂哥 (tánggē)** because he is older than **you**!

### 3. Essential People Measure Words: 口 (kǒu), 个 (gè), 位 (wèi)
Never forget the measure word between a number (or **几 jǐ / 这 zhè / 那 nà**) and a person! And remember: before a measure word, always use **两 (liǎng)** for "two", never **二 (èr)**!

| Measure Word | Pinyin | When to Use It | Model Example |
|---|---|---|---|
| **口** | *kǒu* | Total number of family members in a household (literally "mouths to feed") | **我家有五口人。** (*Wǒ jiā yǒu wǔ kǒu rén.*) |
| **个** | *gè* | Everyday general classifier for relatives, cousins, siblings, friends | **我有两个表妹。** (*Wǒ yǒu liǎng gè biǎomèi.*) |
| **位** | *wèi* | Polite, respectful classifier for elders, teachers, doctors & guests | **我伯伯是一位医生。** (*Wǒ bóbo shì yí wèi yīshēng.*) |

*Quick check*: You can say **我有两个表弟** (general) and **这位是我外婆** (respectful introduction), but **NEVER** say ~~我有两个口人~~ or ~~二个表妹~~!`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decision tree for Chinese cousins tang versus biao and age suffixes">
  <rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <rect x="175" y="16" width="210" height="34" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="280" y="38" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">Is this cousin Dad's brother's child?</text>
  <line x1="220" y1="50" x2="140" y2="82" stroke="var(--good)" stroke-width="2"/>
  <line x1="340" y1="50" x2="420" y2="82" stroke="var(--brand)" stroke-width="2"/>
  <text x="152" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">YES (伯伯 / 叔叔)</text>
  <text x="415" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">NO (姑姑 / 舅舅 / 阿姨)</text>
  <rect x="24" y="82" width="232" height="72" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="140" y="104" text-anchor="middle" font-size="15" font-weight="700" fill="var(--good)">堂 (táng) — Same Hall</text>
  <text x="140" y="123" text-anchor="middle" font-size="11.5" fill="var(--ink)">堂哥 · 堂姐 · 堂弟 · 堂妹</text>
  <text x="140" y="142" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Shares paternal surname (同姓)</text>
  <rect x="304" y="82" width="232" height="72" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="420" y="104" text-anchor="middle" font-size="15" font-weight="700" fill="var(--brand)">表 (biǎo) — Outer Branch</text>
  <text x="420" y="123" text-anchor="middle" font-size="11.5" fill="var(--ink)">表哥 · 表姐 · 表弟 · 表妹</text>
  <text x="420" y="142" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Includes Dad's sister (姑姑)'s kids!</text>
  <rect x="24" y="170" width="512" height="62" rx="10" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="280" y="191" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Step 2: Compare Cousin's Age &amp; Gender to YOU (我)</text>
  <text x="92" y="216" text-anchor="middle" font-size="12" fill="var(--ink)">♂ Older → 哥 (gē)</text>
  <text x="218" y="216" text-anchor="middle" font-size="12" fill="var(--ink)">♀ Older → 姐 (jiě)</text>
  <text x="344" y="216" text-anchor="middle" font-size="12" fill="var(--ink)">♂ Younger → 弟 (dì)</text>
  <text x="468" y="216" text-anchor="middle" font-size="12" fill="var(--ink)">♀ Younger → 妹 (mèi)</text>
</svg>`,
      diagramCaption: "Two-step cousin classifier: check 堂 vs 表 first, then attach 哥/姐/弟/妹 relative to your own age.",
      whyItWorks:
        "Historically, **堂 (táng)** means the main ancestral hall shared by brothers and their descendants of the same family surname. **表 (biǎo)** means 'surface / exterior' — relatives linked through marriage into another surname (whether through Dad's sister **姑姑**, or through Mum's siblings **舅舅/阿姨**). That single cultural fact explains why **姑姑**'s children are **表**, not **堂**!",
      keyPoints: [
        "**堂 (táng)** is ONLY for **father's brothers'** children (**伯伯** or **叔叔**'s kids).",
        "**表 (biǎo)** covers ALL other cousins: **姑姑**'s, **舅舅**'s, and **阿姨**'s children.",
        "Pick **哥/姐/弟/妹** by comparing the cousin's age to **your** age, not your parents' ages.",
        "Use **口 (kǒu)** for total household size (**我家有四口人**), **个 (gè)** for general relatives (**三个表弟**), and **位 (wèi)** to show respect (**这位是我外公** / **一位律师**).",
        "Always use **两 (liǎng)** — never **二 (èr)** — directly before a measure word (**两个堂姐**, **两位老人**).",
      ],
      strategies: [
        "**The 'Dad's Brother?' Filter**: Ask one yes/no question first — *Is this cousin the child of my father's brother?* Yes = **堂**; No = **表**.",
        "**Upgrade to 位 for IGCSE**: Whenever you mention an older relative's job or introduce an elder, swap **个** for **位** (**他是一位工程师**) to show cultural register.",
      ],
      thinkDeeper:
        "Can your **堂妹** be older than your **表哥**? Think carefully: **堂妹** must be younger than **you**, and **表哥** must be older than **you** — so by transitivity, your **表哥** is ALWAYS older than your **堂妹**! Yet your **堂妹**'s father (**伯伯**) might be older than your **表哥**'s father (**舅舅**). Relative titles always anchor around **you (我)**!",
      workedExamples: [
        {
          title: "Classifying Tricky Cousins",
          problem:
            "You are 14 years old. Name these two cousins in Mandarin: (a) your **姑姑 (father's sister)**'s 17-year-old daughter; (b) your **叔叔 (father's younger brother)**'s 11-year-old son.",
          steps: [
            "1. (a) Child of **姑姑** (father's sister, NOT father's brother) → prefix is **表 (biǎo)**.",
            "2. Female and older than you (17 > 14) → suffix **姐 (jiě)** → **表姐 (biǎojiě)**.",
            "3. (b) Child of **叔叔** (father's brother!) → prefix is **堂 (táng)**.",
            "4. Male and younger than you (11 < 14) → suffix **弟 (dì)** → **堂弟 (tángdì)**.",
          ],
          answer: "(a) **表姐 (biǎojiě)**; (b) **堂弟 (tángdì)**.",
          yourTurn: {
            question: "You are 14. What do you call your **伯伯 (father's older brother)**'s 12-year-old daughter? (Write Simplified Hanzi or tone-marked Pinyin.)",
            answer: { type: "text", accept: ["堂妹", "tángmèi"], display: "堂妹 (tángmèi)" },
            solution: "Father's brother's child → **堂 (táng)**; female and younger than you (12 < 14) → **妹 (mèi)** → **堂妹 (tángmèi)**.",
          },
        },
        {
          title: "Choosing 口, 个, and 位 in One Sentence",
          problem:
            "Fill the three blanks with **口**, **个**, or **位**: 我家有四___人；我还有两___表哥，我舅舅是一___很有名的医生。",
          steps: [
            "1. **我家有四___人** counts total household members → **口 (kǒu)**.",
            "2. **两___表哥** counts peers/cousins → **个 (gè)**.",
            "3. **一___很有名的医生** introduces an elder's profession politely → **位 (wèi)**.",
          ],
          answer: "**口**, **个**, **位** (**我家有四口人；我还有两个表哥，我舅舅是一位很有名的医生。**)",
        },
      ],
    },
    {
      id: "visiting-relatives",
      heading: "Visiting Relatives & Describing Relationships",
      discovery: {
        problem:
          "Sam writes: *'我每个周末去**看**我的外婆，因为她住在新加坡。'* His teacher says the sentence is understandable, but circles **看 (kàn)** and suggests a warmer, more respectful two-character verb. Which verb elevates 'look at / see' into 'pay a caring visit to an elder'?",
        idea:
          "Use **看望 (kànwàng)**! While **看 (kàn)** alone can mean 'watch' or 'look at', **看望 (kànwàng)** specifically means visiting elders, relatives, or someone who is unwell to check on them with care. Pair it with **每年春节去外婆家** and STPVO word order (**Subject + Time + Place + Verb + Object**) for top IGCSE marks!",
      },
      body: `Once you know every relative's exact title, you need fluent Year 9 structures to say **where** they live, **what** they do, and **when** you visit them.

### 1. Visiting Verbs — Choosing the Right Nuance
- **看望** (*kànwàng*) — to visit an elder or relative with affection (**周末我们去医院看望爷爷。**)
- **拜访** (*bàifǎng*) — to pay a formal or courteous visit (**春节时我们拜访了很多亲戚。**)
- **拜年** (*bàinián*) — to pay a Chinese New Year visit (**大年初一我去外公外婆家拜年。**)
- **住在一起** (*zhù zài yìqǐ*) — to live together (**我和爷爷奶奶住在一起。**)
- **探亲** (*tànqīn*) — to travel (often overseas) to visit relatives (**暑假我们回英国探亲。**)

### 2. Core Sentence Patterns (STPVO Word Order!)
In Mandarin, **Time** comes before **Place**, and **Place** usually comes before the **Verb** (except with **住在**, where the location follows **在**):

1. **Residence (住在 + Place)**:
   - **我舅舅住在新加坡，他是一位医生。** (*Wǒ jiùjiu zhù zài Xīnjiāpō, tā shì yí wèi yīshēng.*) — My maternal uncle lives in Singapore; he is a doctor.
   - **我姑姑住在伦敦，离新加坡很远。** (*Wǒ gūgu zhù zài Lúndūn, lí Xīnjiāpō hěn yuǎn.*) — My paternal aunt lives in London, very far from Singapore.
2. **Visiting with Time (Subject + Time + 去 + Relative + 家 + Action)**:
   - **每年春节，我们全家都去外婆家吃团圆饭。** (*Měinián Chūnjié, wǒmen quánjiā dōu qù wàipó jiā chī tuányuánfàn.*) — Every Spring Festival, our whole family goes to Grandma's house for reunion dinner.
   - **上个月我坐飞机去香港看望了我的伯伯。** (*Shàng gè yuè wǒ zuò fēijī qù Xiānggǎng kànwàng le wǒ de bóbo.*) — Last month I flew to Hong Kong to visit my elder paternal uncle.
3. **Ages & Professions (已经退休了 / 在…工作)**:
   - **爷爷今年七十五岁，已经退休了。** (*Yéye jīnnián qīshíwǔ suì, yǐjīng tuìxiū le.*) — Grandpa is 75 this year and is already retired.
   - **表姐在一家医院当护士。** (*Biǎojiě zài yì jiā yīyuàn dāng hùshi.*) — My older female cousin works as a nurse in a hospital.

### 3. Essential Professions for Describing Relatives
| Hanzi | Pinyin | English | Hanzi | Pinyin | English |
|---|---|---|---|---|---|
| **医生** | *yīshēng* | doctor | **工程师** | *gōngchéngshī* | engineer |
| **老师** | *lǎoshī* | teacher | **律师** | *lǜshī* | lawyer |
| **护士** | *hùshi* | nurse | **厨师** | *chúshī* | chef |
| **商人** | *shāngrén* | businessperson | **退休** | *tuìxiū* | to retire (verb) |`,
      diagram: `<svg viewBox="0 0 560 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="STPVO sentence blueprint for visiting relatives in Mandarin">
  <rect x="4" y="4" width="552" height="227" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="30" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--brand)">Visiting Relatives: STPVO &amp; Residence Patterns</text>
  <rect x="18" y="46" width="96" height="58" rx="8" fill="var(--brand-soft)" stroke="var(--brand)"/>
  <text x="66" y="65" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">1. SUBJECT</text>
  <text x="66" y="83" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">我们全家</text>
  <text x="66" y="97" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">wǒmen quánjiā</text>
  <rect x="124" y="46" width="96" height="58" rx="8" fill="var(--surface-2)" stroke="var(--good)"/>
  <text x="172" y="65" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--good)">2. TIME</text>
  <text x="172" y="83" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">每年春节</text>
  <text x="172" y="97" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">měinián Chūnjié</text>
  <rect x="230" y="46" width="100" height="58" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="280" y="65" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink-2)">3. MANNER</text>
  <text x="280" y="83" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">坐飞机</text>
  <text x="280" y="97" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">zuò fēijī</text>
  <rect x="340" y="46" width="96" height="58" rx="8" fill="var(--surface-2)" stroke="var(--brand)"/>
  <text x="388" y="65" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">4. GO + PLACE</text>
  <text x="388" y="83" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">去北京</text>
  <text x="388" y="97" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">qù Běijīng</text>
  <rect x="446" y="46" width="96" height="58" rx="8" fill="var(--brand-soft)" stroke="var(--good)"/>
  <text x="494" y="65" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--good)">5. PURPOSE</text>
  <text x="494" y="83" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">看望外婆</text>
  <text x="494" y="97" text-anchor="middle" font-size="9.5" fill="var(--ink-2)">kànwàng wàipó</text>
  <rect x="18" y="122" width="524" height="44" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="280" y="140" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Residence Exception: 住 (live) + 在 + Place (NEVER 在+Place+住!)</text>
  <text x="280" y="158" text-anchor="middle" font-size="11.5" fill="var(--good)">✓ 我舅舅住在新加坡 (Wǒ jiùjiu zhù zài Xīnjiāpō)   ✗ 我舅舅在新加坡住 (unnatural)</text>
  <rect x="18" y="176" width="524" height="42" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="280" y="194" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Co-residence: A 和 B 住在一起 (live together)</text>
  <text x="280" y="210" text-anchor="middle" font-size="11" fill="var(--ink-2)">爷爷奶奶和叔叔住在一起 (Yéye nǎinai hé shūshu zhù zài yìqǐ)</text>
</svg>`,
      diagramCaption: "STPVO order for visiting relatives and the special 住在 + Place rule.",
      whyItWorks:
        "In Mandarin, action chains follow strict **chronological iconicity**: first *when* (每年春节), then *how you travel* (坐飞机), then *where you go* (去北京), and finally *what you do upon arriving* (看望外婆). Meanwhile, **住在** locks the resultative location directly after **住** because staying/residing ends up *at* that place.",
      keyPoints: [
        "Use **看望 (kànwàng)** for warmly visiting elders/relatives, **拜访 (bàifǎng)** for formal visits, and **拜年 (bàinián)** for Chinese New Year visits.",
        "Always say **住在 + Place** (**我姑姑住在伦敦**), NOT ~~在伦敦住~~.",
        "Say **A 和 B 住在一起** to mean A and B live together.",
        "In a sentence with a trip and a purpose, follow chronological order: **Time + Transport + 去 + Place + 看望 + Relative**.",
        "Use **已经退休了 (yǐjīng tuìxiū le)** to say a grandparent has already retired, and **是一位 + Job** to state a relative's profession respectfully.",
      ],
      strategies: [
        "**Movie-Camera Order**: Imagine filming a visit from start to finish — calendar date → boarding the plane → arriving in London → hugging Grandma (**去年圣诞节我们坐飞机去伦敦看望了外婆**).",
        "**Upgrade Jobs with 位 & 在…工作**: Instead of bare *他是医生*, write **他在一家医院工作，是一位很有经验的医生**.",
      ],
      thinkDeeper:
        "Why do we say **去外婆家 (qù wàipó jiā)** without **的 (de)** between **外婆** and **家**? In Mandarin, **的** is regularly dropped for close kinship and home expressions (**我爸爸**, **我外婆家**, **我妹妹**), making your Chinese sound far more natural than word-for-word English translations!",
      workedExamples: [
        {
          title: "Building a Full Visiting Sentence",
          problem:
            "Translate into natural Mandarin: *'Every summer holiday, I go to Beijing by plane with my parents to visit my paternal grandparents.'*",
          steps: [
            "1. Time first: **每年暑假** (*měinián shǔjià*).",
            "2. Subject + companion: **我和爸爸妈妈** (*wǒ hé bàba māma*).",
            "3. Transport + destination: **坐飞机去北京** (*zuò fēijī qù Běijīng*).",
            "4. Purpose + paternal grandparents: **看望爷爷奶奶** (*kànwàng yéye nǎinai*).",
          ],
          answer: "**每年暑假，我和爸爸妈妈坐飞机去北京看望爷爷奶奶。** (*Měinián shǔjià, wǒ hé bàba māma zuò fēijī qù Běijīng kànwàng yéye nǎinai.*)",
          yourTurn: {
            question: "Which two-character verb means 'to visit (an elder or relative warmly)'? (Write Simplified Hanzi or tone-marked Pinyin.)",
            answer: { type: "text", accept: ["看望", "kànwàng"], display: "看望 (kànwàng)" },
            solution: "**看望 (kànwàng)** is the standard respectful verb for visiting relatives or elders.",
          },
        },
        {
          title: "Fixing Word Order with 住在",
          problem:
            "Spot and correct the TWO errors in this student sentence: **我的阿姨在伦敦住，她是二个孩子的妈妈，也是一个老师。**",
          steps: [
            "1. Error 1: **在伦敦住** → should be **住在伦敦** (location follows **住在**).",
            "2. Error 2: **二个孩子** → should be **两个孩子** (always use **两**, never **二**, before a measure word).",
            "3. Bonus upgrade: swap **一个老师** to **一位老师** for polite register.",
          ],
          answer: "**我的阿姨住在伦敦，她是两个孩子的妈妈，也是一位老师。**",
        },
      ],
    },
    {
      id: "family-celebrations-writing",
      heading: "Describing Family Gatherings & Relationships",
      discovery: {
        problem:
          "Compare these two Year 9 IGCSE paragraphs about a favourite relative:\n- **Draft A**: *我喜欢我的外婆。她七十岁。她很好。我常常去她家。*\n- **Draft B**: *在所有亲戚中，我最喜欢我的外婆。她今年七十岁，虽然已经退休了，但是每天都很活跃。我们关系非常好，每个周末我都去外婆家看望她，一边喝茶一边聊天儿。*\nWhat four upgrades turn Draft A (Grade 5) into Draft B (Grade 9)?",
        idea:
          "Draft B adds: (1) a strong opener (**在所有亲戚中，我最喜欢…**), (2) a paired connective (**虽然…，但是…**), (3) relationship vocabulary (**关系非常好**, **看望**), and (4) simultaneous actions (**一边…一边…** — drinking tea while chatting)!",
      },
      body: `For Tanglin Year 9 assessments and IGCSE 0547 writing tasks (80–120 characters), examiners reward **relationship precision**, **varied connectives**, **cross-generational contrast**, and **specific anecdotes**.

### 1. High-Band Relationship Phrases
- **关系很好 / 关系非常亲密** (*guānxi hěn hǎo / guānxi fēicháng qīnmì*) — have a great / very close relationship
- **相处得很好** (*xiāngchǔ de hěn hǎo*) — get along really well
- **常常一起聊天儿** (*chángcháng yìqǐ liáotiānr*) — often chat together
- **互相帮助 / 互相照顾** (*hùxiāng bāngzhù / hùxiāng zhàogù*) — help / look after each other
- **很疼爱我** (*hěn téng'ài wǒ*) — dotes on / deeply loves me (used for elders loving children)
- **团聚 / 团圆** (*tuánjù / tuányuán*) — to reunite as a family
- **家庭聚会** (*jiātíng jùhuì*) — family gathering
- **拍全家福** (*pāi quánjiāfú*) — to take a whole-family portrait
- **很热闹** (*hěn rènao*) — very lively and festive

### 2. Contrasting Generations with Paired Connectives
Show off your grammar control by pairing clauses cleanly:
- **虽然…，但是…** (*suīrán..., dànshì...* — although... yet...):
  **虽然爷爷年纪大了，但是他很喜欢和我们聊天儿。** (*Although Grandpa is elderly, he loves chatting with us.*)
- **因为…，所以…** (*yīnwèi..., suǒyǐ...* — because... therefore...):
  **因为堂哥很幽默，所以我最喜欢和他一起玩儿。** (*Because my paternal male cousin is humorous, I love hanging out with him most.*)
- **一边…一边…** (*yìbiān... yìbiān...* — doing two things at once):
  **春节时，我们一边吃饺子，一边看电视，非常热闹！** (*At Spring Festival, we eat dumplings while watching TV — super lively!*)
- **不但…，而且…** (*búdàn..., érqiě...* — not only... but also...):
  **我阿姨不但很聪明，而且做饭做得特别好吃。** (*My maternal aunt is not only clever, but also cooks amazingly well.*)

### 3. Five-Part IGCSE Paragraph Blueprint (80–120 Characters)
When asked to write about **我最喜欢的亲戚** (*My Favourite Relative*) or **一次家庭聚会** (*A Family Gathering*):
1. **Hook & Exact Title**: Name who they are precisely (**舅舅 / 外婆 / 堂姐**) + **在所有亲戚中，我最喜欢…**
2. **Age, Job & Residence**: Age + **住在…** + **是一位…** (or **已经退休了**)
3. **Personality & Bond**: Use **关系很好** + **不但…而且…** or **虽然…但是…**
4. **Shared Activity / Past Memory**: Include **了** or **过** (**去年春节我们一起包了饺子、拍了全家福**)
5. **Future Wish**: End with **打算** or **希望** (**今年暑假我打算再去新加坡/伦敦看望她！**)`,
      diagram: `<svg viewBox="0 0 560 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five-step IGCSE paragraph blueprint for writing about a favourite relative">
  <rect x="4" y="4" width="552" height="237" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="30" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--brand)">5-Step IGCSE Band-9 Paragraph: 我最喜欢的亲戚</text>
  <rect x="20" y="44" width="520" height="32" rx="7" fill="var(--brand-soft)" stroke="var(--brand)"/>
  <text x="34" y="65" font-size="11.5" font-weight="700" fill="var(--brand)">1. WHO</text>
  <text x="106" y="65" font-size="11.5" fill="var(--ink)">在所有亲戚中，我最喜欢我的外婆。(Exact paternal/maternal title)</text>
  <rect x="20" y="82" width="520" height="32" rx="7" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="34" y="103" font-size="11.5" font-weight="700" fill="var(--good)">2. INFO</text>
  <text x="106" y="103" font-size="11.5" fill="var(--ink)">她今年六十八岁，住在新加坡，以前是一位老师，现在退休了。</text>
  <rect x="20" y="120" width="520" height="32" rx="7" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="34" y="141" font-size="11.5" font-weight="700" fill="var(--brand)">3. BOND</text>
  <text x="106" y="141" font-size="11.5" fill="var(--ink)">虽然她年纪大了，但是很幽默，我们关系非常好，常常一起聊天儿。</text>
  <rect x="20" y="158" width="520" height="32" rx="7" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="34" y="179" font-size="11.5" font-weight="700" fill="var(--good)">4. PAST</text>
  <text x="106" y="179" font-size="11.5" fill="var(--ink)">去年春节，我们全家去她家吃了团圆饭，还拍了全家福，非常热闹！</text>
  <rect x="20" y="196" width="520" height="32" rx="7" fill="var(--brand-soft)" stroke="var(--good)"/>
  <text x="34" y="217" font-size="11.5" font-weight="700" fill="var(--good)">5. FUTURE</text>
  <text x="106" y="217" font-size="11.5" fill="var(--ink)">下个月我打算再去看望她，希望她身体健康！(3 time frames hit!)</text>
</svg>`,
      diagramCaption: "Five-part paragraph checklist combining present, past (了), and future (打算) time frames.",
      whyItWorks:
        "IGCSE 0547 writing mark schemes award top Communication and Language bands when you cover **all three time frames** (present description, past event with **了/过**, and future plan with **打算/希望**) and link ideas with **paired connectives** rather than short disconnected sentences.",
      keyPoints: [
        "Use **关系很好 (guānxi hěn hǎo)** or **相处得很好 (xiāngchǔ de hěn hǎo)** to say you get on well with a relative.",
        "Use **疼爱 (téng'ài)** only downward from older relatives to younger ones (**外婆很疼爱我**), never the reverse.",
        "Link generations with **虽然…，但是…** and describe festive gatherings with **一边…一边…** and **很热闹 (hěn rènao)**.",
        "Include **拍全家福 (pāi quánjiāfú)** and **吃团圆饭 (chī tuányuánfàn)** for authentic cultural detail.",
        "Always check your final draft for **three time frames**: present (**住在 / 常常**), past (**去年…了**), and future (**打算 / 希望**).",
      ],
      strategies: [
        "**3-Time-Frame Checklist**: Tick off Present, Past (**了**), and Future (**打算**) in the margin before handing in any Year 9 essay.",
        "**Upgrade 'Very Good'**: Replace repeated **很好** with specific phrases: **关系很亲密**, **很幽默**, **很热闹**, **特别好吃**.",
      ],
      thinkDeeper:
        "Why is it an error in Mandarin to write *'虽然我伯伯很忙，他常常看望我们'* without **但是**? Unlike English (where you must NOT write *'Although..., but...'*), Mandarin **requires** the paired partner **但是** (or **可是**) to balance **虽然**!",
      workedExamples: [
        {
          title: "Upgrading a Simple Gathering Sentence",
          problem:
            "Combine these two simple ideas using **一边…一边…** and **热闹**: (1) At Mid-Autumn Festival our relatives ate mooncakes and chatted. (2) Grandpa's house was very lively.",
          steps: [
            "1. Time + subject + place: **中秋节的时候，我们亲戚在爷爷家…**",
            "2. Join the two simultaneous actions with **一边…一边…**: **一边吃月饼，一边聊天儿**.",
            "3. Add the lively atmosphere clause: **家里非常热闹！**",
          ],
          answer: "**中秋节的时候，我们亲戚在爷爷家一边吃月饼，一边聊天儿，家里非常热闹！** (*Zhōngqiūjié de shíhou, wǒmen qīnqi zài yéye jiā yìbiān chī yuèbǐng, yìbiān liáotiānr, jiālǐ fēicháng rènao!*)",
          yourTurn: {
            question: "Fill in the missing two-character noun in **我们___很好** meaning 'We get on very well / have a great relationship'. (Write Simplified Hanzi or tone-marked Pinyin.)",
            answer: { type: "text", accept: ["关系", "guānxi", "guānxì"], display: "关系 (guānxi)" },
            solution: "**关系 (guānxi)** means 'relationship / connection'. **我们关系很好** literally says 'Our relationship is very good.'",
          },
        },
        {
          title: "Fixing an English-Style Connective",
          problem:
            "Correct the grammar mistake: **虽然我表弟住在澳大利亚，我们常常在网上聊天儿。**",
          steps: [
            "1. Notice **虽然** (*suīrán* — although) in the first clause.",
            "2. Mandarin requires its partner **但是** (*dànshì*) or **可是** (*kěshì*) at the start of the second clause.",
          ],
          answer: "**虽然我表弟住在澳大利亚，但是我们常常在网上聊天儿。**",
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "**爷爷 / 奶奶** (*yéye / nǎinai*)", back: "Paternal grandfather / paternal grandmother (father's parents)" },
      { front: "**外公 / 外婆** (*wàigōng / wàipó*)", back: "Maternal grandfather / maternal grandmother (mother's parents — Singapore & Southern China standard)" },
      { front: "**姥爷 / 姥姥** (*lǎoye / lǎolao*)", back: "Maternal grandfather / maternal grandmother (Northern China / Beijing usage)" },
      { front: "**伯伯 / 伯母** (*bóbo / bómǔ*)", back: "Father's older brother / his wife" },
      { front: "**叔叔 / 婶婶** (*shūshu / shěnshen*)", back: "Father's younger brother / his wife" },
      { front: "**姑姑 / 姑父** (*gūgu / gūfu*)", back: "Father's sister / her husband" },
      { front: "**舅舅 / 舅妈** (*jiùjiu / jiùmā*)", back: "Mother's brother (older or younger) / his wife" },
      { front: "**阿姨 / 姨父** (*āyí / yífu*)", back: "Mother's sister (older or younger) / her husband" },
      { front: "**堂哥 / 堂姐 / 堂弟 / 堂妹** (*tánggē / tángjiě / tángdì / tángmèi*)", back: "Paternal cousins — ONLY father's brothers' (**伯伯/叔叔**) children (same surname)" },
      { front: "**表哥 / 表姐 / 表弟 / 表妹** (*biǎogē / biǎojiě / biǎodì / biǎomèi*)", back: "Cousins via **姑姑** (dad's sister), **舅舅** (mum's brother), or **阿姨** (mum's sister)" },
      { front: "**口 / 个 / 位** (*kǒu / gè / wèi*)", back: "People measure words: **口** = household total, **个** = general, **位** = polite/respectful" },
      { front: "**看望** (*kànwàng*)", back: "To visit (an elder, relative, or sick person warmly)" },
      { front: "**拜访 / 拜年** (*bàifǎng / bàinián*)", back: "To pay a formal visit / to pay a Chinese New Year visit" },
      { front: "**关系很好** (*guānxi hěn hǎo*)", back: "To have a very good relationship / get on very well" },
      { front: "**团圆 / 团聚** (*tuányuán / tuánjù*)", back: "Family reunion / to reunite as a family" },
      { front: "**拍全家福** (*pāi quánjiāfú*)", back: "To take a whole-family portrait photo" },
    ],
    mustKnow: [
      "Can you name all four grandparents distinctly (**爷爷/奶奶** vs **外公/外婆** and **姥爷/姥姥**)?",
      "Can you distinguish all five blood uncles and aunts (**伯伯, 叔叔, 姑姑, 舅舅, 阿姨**) plus their spouses?",
      "Can you apply the **堂 vs 表** rule accurately — including remembering that **姑姑**'s children are **表**, NOT **堂**?",
      "Can you choose **哥/姐/弟/妹** by comparing the cousin's age to YOUR own age?",
      "Can you pick accurately between **口** (household total), **个** (general people), and **位** (respectful)?",
      "Can you always use **两 (liǎng)** instead of **二 (èr)** before a measure word (**两个表弟**, **两位老人**)?",
      "Can you put **住在 + Place** in the right word order and build a chronological visiting sentence with **看望**?",
      "Can you write an 80–120 character paragraph about a favourite relative using **虽然…但是…**, **关系很好**, and 3 time frames?",
    ],
    misconceptions: [
      {
        wrong: "Calling your mother's brother **叔叔 (shūshu)** or your father's sister **阿姨 (āyí)**.",
        right: "Mother's brother is ALWAYS **舅舅 (jiùjiu)**, and father's sister is ALWAYS **姑姑 (gūgu)**. (**叔叔** = dad's younger brother; **阿姨** = mum's sister.)",
      },
      {
        wrong: "Calling your **姑姑** (father's sister)'s children **堂哥/堂妹** because they are on Dad's side.",
        right: "**堂 (táng)** is ONLY for **father's brothers'** (**伯伯/叔叔**) children! **姑姑**'s children take her husband's surname, so they are **表 (biǎo)** (**表哥/表妹**).",
      },
      {
        wrong: "Writing **我舅舅在新加坡住** or **我有二个表妹**.",
        right: "Write **我舅舅住在新加坡** (location follows **住在**) and **我有两个表妹** (always use **两** before a measure word).",
      },
      {
        wrong: "Writing **虽然爷爷年纪大了，他很活跃** without **但是** (copying English 'Although..., ...').",
        right: "Always pair **虽然** with **但是** (or **可是**): **虽然爷爷年纪大了，但是他很活跃。**",
      },
      {
        wrong: "Saying **我很疼爱外婆** to mean 'I love my grandma'.",
        right: "**疼爱 (téng'ài)** only goes from elders downward to children (**外婆很疼爱我**). From you to Grandma, say **我很爱外婆** or **我很尊敬外婆** (*zūnjìng* — respect).",
      },
      {
        wrong: "Using **口** for cousins outside your household (**我有三口表弟**).",
        right: "**口 (kǒu)** is ONLY for total household headcount (**我家有五口人**). Count individual cousins with **个 (gè)**: **我有三个表弟**.",
      },
    ],
    examMistakes: [
      "Mixing up **伯伯** (dad's older brother) and **叔叔** (dad's younger brother) in IGCSE reading comprehensions that give parents' ages.",
      "Forgetting that **姥爷/姥姥** in Northern Chinese audio tracks means **外公/外婆** (maternal grandparents), not paternal grandparents!",
      "Forgetting to check whether a cousin is older or younger than the **speaker (我)** — leading to **堂哥** vs **堂弟** errors.",
      "Using **二** instead of **两** with measure words (**二个舅舅** ✗ → **两个舅舅** ✓).",
      "Omitting **了** or **打算** in a written essay, leaving all verbs in present tense and missing the 3-time-frame top band.",
      "Accidentally mixing Traditional forms into Simplified Mandarin exam answers — always stick strictly to Simplified **亲戚, 个, 两, 岁**.",
    ],
    mnemonics: [
      {
        topic: "堂 vs 表 Cousin Rule",
        device: "**Táng** = **T**wo brothers' **T**eam (Dad + Dad's bros); **Biǎo** = **B**eyond the paternal surname",
        explanation:
          "Only **伯伯** and **叔叔**'s children share the father's brother team (**堂**). Everyone else (**姑姑, 舅舅, 阿姨**'s kids) is **表**!",
      },
      {
        topic: "Paternal vs Maternal Uncles & Aunts",
        device: "**Bó-Shū-Gū** stay with **Bàba**; **Jiù-Ā** match **Māma**",
        explanation:
          "Notice **伯伯 (bóbo)** starts with **b** like **爸爸 (bàba)**; **舅舅 (jiùjiu)** and **阿姨 (āyí)** belong strictly to Mum's branch alongside **外公/外婆**.",
      },
      {
        topic: "People Measure Words (口 · 个 · 位)",
        device: "**口** counts mouths at home; **个** goes anywhere; **位** shows VIP respect",
        explanation:
          "Picture **口** (a mouth/square) around your dining table (**我家有五口人**), **个** for everyday counting (**两个堂弟**), and **位** (person **亻** standing tall **立**) for respected elders (**一位医生**).",
      },
    ],
    realWorld: [
      {
        title: "Chinese New Year Visiting (拜年 Bàinián) in Singapore",
        detail:
          "During **春节 (Chūnjié)** in Singapore, families carry pairs of mandarin oranges (**柑 gān**) when visiting **爷爷奶奶**, **外公外婆**, **伯伯**, **叔叔**, **姑姑**, **舅舅**, and **阿姨** — greeting every relative by their exact title before receiving **红包 (hóngbāo)**!",
        emoji: "🍊",
      },
      {
        title: "Northern vs Southern Grandparent Names",
        detail:
          "Students in Singapore hear **外公/外婆** daily, while friends from Beijing or Tianjin call Mum's parents **姥爷/姥姥**. Knowing both sets helps you ace IGCSE listening recordings from across the Chinese-speaking world.",
        emoji: "🌏",
      },
      {
        title: "Social 'Uncle' & 'Auntie' vs Exact Family Titles",
        detail:
          "In Singapore's hawker centres and HDB neighbourhoods, calling elders **叔叔 (shūshu)** and **阿姨 (āyí)** is warm and polite — even if they aren't related to you. Just remember not to let that habit overwrite **舅舅** and **姑姑** on your family tree!",
        emoji: "🇸🇬",
      },
      {
        title: "Multigenerational Living (三代同堂 Sāndài Tóngtáng)",
        detail:
          "The idiom **三代同堂** literally means 'three generations under one hall (**堂**)'. Many families in Singapore and China live with or close to grandparents so generations can **互相照顾 (look after one another)**.",
        emoji: "🏡",
      },
    ],
    videos: [
      {
        title: "Chinese Family Tree Explained (爷爷, 外公, 伯伯, 叔叔, 舅舅, 堂/表)",
        channel: "YouTube Search — Chinese Family Relatives",
        url: "https://www.youtube.com/results?search_query=Chinese+family+tree+relatives+tang+biao+cousins+Mandarin",
      },
      {
        title: "Mandarin Measure Words for People: 口, 个, 位 (kǒu, gè, wèi)",
        channel: "YouTube Search — Chinese Measure Words People",
        url: "https://www.youtube.com/results?search_query=Mandarin+measure+words+people+kou+ge+wei",
      },
      {
        title: "IGCSE 0547 Mandarin: Describing Your Family & Relatives",
        channel: "YouTube Search — IGCSE Chinese Family",
        url: "https://www.youtube.com/results?search_query=IGCSE+0547+Chinese+family+relatives+writing+speaking",
      },
    ],
    formulas: [
      { name: "爷爷 / 奶奶 (yéye / nǎinai)", formula: "Father's father / Father's mother", note: "Paternal grandparents" },
      { name: "外公 / 外婆 (wàigōng / wàipó)", formula: "Mother's father / Mother's mother", note: "Also 姥爷 (lǎoye) / 姥姥 (lǎolao) in Northern China" },
      { name: "伯伯 vs 叔叔 (bóbo vs shūshu)", formula: "Father's OLDER brother vs Father's YOUNGER brother", note: "Spouses: 伯母 (bómǔ) / 婶婶 (shěnshen)" },
      { name: "姑姑 vs 阿姨 (gūgu vs āyí)", formula: "Father's sister vs Mother's sister", note: "Spouses: 姑父 (gūfu) / 姨父 (yífu)" },
      { name: "舅舅 (jiùjiu)", formula: "Mother's brother (older OR younger)", note: "Spouse: 舅妈 (jiùmā)" },
      { name: "堂 (táng) vs 表 (biǎo)", formula: "堂 = 伯伯/叔叔's children ONLY; 表 = 姑姑/舅舅/阿姨's children", note: "Add 哥/姐/弟/妹 relative to YOUR age" },
      { name: "口 / 个 / 位 (kǒu / gè / wèi)", formula: "口 = household total; 个 = general; 位 = polite/respectful", note: "Always use 两 (liǎng), never 二, before a measure word" },
      { name: "住在 + Place (zhù zài)", formula: "Subject + 住在 + City/Country", note: "Co-residence: A 和 B 住在一起" },
      { name: "看望 (kànwàng)", formula: "Subject + Time + 去 + Place + 看望 + Relative", note: "Warm, respectful verb for visiting elders/relatives" },
      { name: "虽然…，但是… (suīrán..., dànshì...)", formula: "虽然 + Clause A，但是 + Clause B", note: "Always keep BOTH halves in Mandarin" },
    ],
  },
};
