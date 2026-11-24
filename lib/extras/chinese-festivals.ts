import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "Why can a single bowl of round white rice balls (`汤圆`), an upside-down doorway character (`福`), and a pair of mandarin oranges (`橘子`) convey entire blessings without a single sentence? Discover the secret sound-puns and lunar calendar astronomy hidden inside China's greatest festivals!",
  didYouKnow: [
    "The Chinese lunar calendar (`农历` nónglì) is actually **lunisolar**: months follow the moon's 29.5-day cycle (so day 15 is ALWAYS a full moon!), while an extra leap month (`闰月` rùnyuè) is added roughly every 2–3 years so Spring Festival stays in late winter and Mid-Autumn stays in autumn.",
    "Why does **Singapore's Chinatown** have the Chinese name **牛车水** (Niúchēshuǐ — 'bullock-cart water')? In 19th-century Singapore, before piped water existed, residents collected fresh water from a well on Ann Siang Hill and hauled it down the streets on ox-drawn carts (`牛车`)!",
    "The word **年** (nián — year) connects to the ancient legend of **年兽** (Niánshòu), a fierce beast said to terrorise villages on the eve of the new year until villagers discovered it feared the colour red (`红色`), bright firelight, and loud banging noises — inspiring `贴春联` and `放鞭炮`!",
    "Singapore's famous Spring Festival dish **捞鱼生** (lāo yúshēng — 'Lo Hei' prosperity toss) was popularised in Singapore and Malaysia in the 1960s by Cantonese chefs who turned raw-fish salad into a joyful table ritual where everyone tosses the ingredients high while shouting auspicious idioms.",
    "Lantern riddles (`灯谜` dēngmí) date back more than a thousand years to the Song Dynasty: scholars painted clues onto paper lanterns so everyone — rich or poor — could test their wit with wordplay on `正月十五`!",
  ],
  activities: [
    {
      title: "Tanglin Lantern Riddle (猜灯谜) Challenge Deck",
      emoji: "🏮",
      materials: [
        "10 slips of red or yellow index paper",
        "Black marker pen & string or paper clips",
        "Your Year 9 Chinese Festivals vocabulary list",
      ],
      steps: [
        "Pick 6 Chinese characters or festival items (e.g., 月亮, 饺子, 粽子, 红包, 春联, 龙舟).",
        "On the front of each card, write a 2-line clue in Simplified Chinese (or bilingual hint) WITHOUT naming the item — for instance: '农历五月初五吃，用竹叶包糯米。'",
        "Write the Simplified Hanzi + tone-marked Pinyin answer on the back.",
        "Clip the cards along a string across your desk or classroom and challenge a classmate or parent to solve all 6 riddles in under 2 minutes!",
      ],
      maths:
        "Writing clues in Simplified Chinese trains circumlocution — the exact IGCSE 0547 skill of describing an object using its date, shape, material (`用…做的`), and symbolism (`象征…`) when you need rich detail.",
    },
    {
      title: "Four-Festival Homophone & Food Infocard",
      emoji: "🥮",
      materials: [
        "1 sheet of A4 paper folded into 4 quadrants",
        "Coloured pens (red, gold, green, blue)",
      ],
      steps: [
        "Label the four quadrants with the exact lunar dates: 正月初一 (春节), 正月十五 (元宵节), 五月初五 (端午节), 八月十五 (中秋节).",
        "In each quadrant, draw the signature food (饺子/年糕, 汤圆, 粽子, 月饼) and write ONE verb–object custom (贴春联, 猜灯谜, 划龙舟, 赏月).",
        "Underneath, add a single STPVO past sentence (`去年…我在…了`) and one `象征` or `纪念` explanation.",
        "Fold the sheet in half and test yourself orally until you can recite all four dates, foods, verbs, and symbols without peeking!",
      ],
      maths:
        "Grouping all four festivals visually by lunar date + verb + food + symbolism eliminates the #1 Year 9 exam mistake: swapping `粽子`/`汤圆`/`月饼` or misplacing `初`.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Chinese Lunar Festival Year Wheel (农历节日全年图)",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lunar year wheel placing Spring Festival (1/1), Lantern Festival (1/15), Dragon Boat (5/5), and Mid-Autumn (8/15)">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1" />
  <text x="280" y="25" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">Lunar Calendar Year — 4 Major Year 9 Festivals</text>
  <line x1="40" y1="125" x2="520" y2="125" stroke="var(--line)" stroke-width="4" stroke-linecap="round" />
  <circle cx="88" cy="125" r="14" fill="var(--brand)" />
  <text x="88" y="129" text-anchor="middle" font-size="10" font-weight="800" fill="var(--surface)">1/1</text>
  <circle cx="216" cy="125" r="14" fill="var(--brand)" />
  <text x="216" y="129" text-anchor="middle" font-size="10" font-weight="800" fill="var(--surface)">1/15</text>
  <circle cx="344" cy="125" r="14" fill="var(--good)" />
  <text x="344" y="129" text-anchor="middle" font-size="10" font-weight="800" fill="var(--surface)">5/5</text>
  <circle cx="472" cy="125" r="14" fill="var(--brand)" />
  <text x="472" y="129" text-anchor="middle" font-size="10" font-weight="800" fill="var(--surface)">8/15</text>
  <rect x="24" y="42" width="128" height="62" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="88" y="61" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">春节 (正月初一)</text>
  <text x="88" y="79" text-anchor="middle" font-size="11" fill="var(--ink)">饺子 · 年糕 · 红包</text>
  <text x="88" y="96" text-anchor="middle" font-size="10" fill="var(--ink-2)">贴春联 · 舞龙舞狮</text>
  <rect x="152" y="148" width="128" height="62" rx="8" fill="var(--surface-2)" stroke="var(--brand)" />
  <text x="216" y="167" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">元宵节 (正月十五)</text>
  <text x="216" y="185" text-anchor="middle" font-size="11" fill="var(--ink)">汤圆 · 元宵</text>
  <text x="216" y="202" text-anchor="middle" font-size="10" fill="var(--ink-2)">看花灯 · 猜灯谜</text>
  <rect x="280" y="42" width="128" height="62" rx="8" fill="var(--surface-2)" stroke="var(--good)" />
  <text x="344" y="61" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">端午节 (五月初五)</text>
  <text x="344" y="79" text-anchor="middle" font-size="11" fill="var(--ink)">粽子 (竹叶糯米)</text>
  <text x="344" y="96" text-anchor="middle" font-size="10" fill="var(--ink-2)">划龙舟 · 纪念屈原</text>
  <rect x="408" y="148" width="128" height="62" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="472" y="167" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">中秋节 (八月十五)</text>
  <text x="472" y="185" text-anchor="middle" font-size="11" fill="var(--ink)">月饼 · 柚子</text>
  <text x="472" y="202" text-anchor="middle" font-size="10" fill="var(--ink-2)">赏月 · 提灯笼 · 团圆</text>
  <text x="280" y="236" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">Notice: Both day-15 festivals (正月十五 &amp; 八月十五) celebrate the full round moon (团圆)!</text>
</svg>`,
      caption: "Track the lunar year from left to right: 1/1 → 1/15 → 5/5 → 8/15.",
    },
    {
      title: "Auspicious Homophone Decoder (中国节日谐音图)",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four auspicious Chinese festival homophones: fish/surplus, cake/rise, inverted/arrive, round/reunion">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1" />
  <text x="280" y="26" text-anchor="middle" font-size="15" font-weight="800" fill="var(--brand)">谐音 (xiéyīn) — Why Chinese Festival Foods &amp; Signs Carry Luck</text>
  <rect x="22" y="44" width="250" height="86" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="147" y="68" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">鱼 (yú)  =  余 (yú)</text>
  <text x="147" y="90" text-anchor="middle" font-size="12" fill="var(--ink)">Fish → Surplus / Abundance</text>
  <text x="147" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink-2)">Blessing: 年年有余</text>
  <rect x="288" y="44" width="250" height="86" rx="10" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="413" y="68" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">年糕 (gāo)  =  高 (gāo)</text>
  <text x="413" y="90" text-anchor="middle" font-size="12" fill="var(--ink)">Rice cake → Rising higher</text>
  <text x="413" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink-2)">Blessing: 年年高升</text>
  <rect x="22" y="146" width="250" height="86" rx="10" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="147" y="170" text-anchor="middle" font-size="14" font-weight="800" fill="var(--good)">倒 (dào)  =  到 (dào)</text>
  <text x="147" y="192" text-anchor="middle" font-size="12" fill="var(--ink)">Upside down → Has arrived!</text>
  <text x="147" y="214" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink-2)">Sign: 福倒了 = 福到了</text>
  <rect x="288" y="146" width="250" height="86" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="413" y="170" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">汤圆 / 圆  =  团圆 (yuán)</text>
  <text x="413" y="192" text-anchor="middle" font-size="12" fill="var(--ink)">Round shape → Whole family united</text>
  <text x="413" y="214" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink-2)">Theme: 全家团圆</text>
</svg>`,
      caption: "Four auspicious Mandarin sound-puns you can cite with 象征 (xiàngzhēng) in IGCSE essays.",
    },
  ],
  history: {
    title: "The Poet Who Inspired Dragon Boat Racing — 屈原 (Qū Yuán, c. 340–278 BCE)",
    story:
      "More than 2,300 years ago during China's Warring States period, **屈原** (Qū Yuán) served as a loyal minister and celebrated poet of the southern state of Chu (`楚国`). When corrupt rivals convinced the king to banish him and his homeland fell into crisis, Qu Yuan poured his heartbreak into immortal poems such as *Li Sao* (`离骚`). On the 5th day of the 5th lunar month (`农历五月初五`), he threw himself into the Miluo River (`汨罗江`). Heartbroken local fishermen immediately jumped into long wooden boats (`划龙舟`) beating drums and splashing paddles to search for him, while tossing bamboo-wrapped sticky rice parcels (`粽子`) into the water so fish would eat the rice instead of the poet's body. Centuries later, that act of grief and devotion evolved into **端午节** — celebrated today from China's Yangtze River all the way to Singapore's Marina Bay!",
  },
};
