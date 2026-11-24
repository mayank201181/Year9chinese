import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "Mandarin has ZERO irregular past-tense verb conjugations (*go / went / gone*, *buy / bought*) — instead, it uses a sleek LEGO-like architecture of **STPVO slots**, **4 aspect markers (`了·过·正在·打算`)**, and **magnetic paired connectives**. Master that blueprint once, and IGCSE 0547 opens wide!",
  didYouKnow: [
    "Unlike French, Spanish, or English, Mandarin verbs **never change form** for person or tense: `去` (qù) stays `去` for I/you/he/we and for yesterday/today/tomorrow — time is carried cleanly by time nouns (`昨天 / 明天`) and aspect markers (`了 / 过 / 正在 / 打算`)!",
    "Why does Mandarin always put **Time (`昨天`)** and **Place (`在图书馆`)** before the verb (`看书`)? Linguists call this **Temporal Sequence Iconicity**: Chinese narrates events in the exact order your brain pictures a film scene — first set the time and location, *then* roll the action!",
    "In English, writing *'Although it rained, but we played'* is a grammar error — yet in Mandarin, keeping BOTH halves of **`虽然…，但是…`** and **`因为…，所以…`** is the hallmark of clear, Band-A writing!",
    "The verb-copy pattern (`弹钢琴弹了一个小时`) exists because of a famous Mandarin rhythm rule: a verb cannot comfortably carry BOTH a direct object AND a time-duration complement right after it — repeating the verb gives each half its own clean slot.",
    "Standard **Hanyu Pinyin (`汉语拼音`)** was officially adopted in 1958 and today powers over a billion smartphones — letting you type Simplified Chinese characters instantly by spelling their sound, while tone marks (`ā á ǎ à`) keep four completely different meanings separate!",
  ],
  activities: [
    {
      title: "STPVO Colour-Coded Sentence Scramble",
      emoji: "🧩",
      materials: [
        "5 coloured sticky-note pads (or index cards labelled S, T, P, V, O)",
        "1 marker pen & a stopwatch",
      ],
      steps: [
        "Write 4 Subject cards (`我`, `我和家人`, `姐姐`, `同学们`), 4 Time cards (`昨天下午`, `上个周末`, `现在`, `明年暑假`), 4 Place cards (`在图书馆`, `在公园里`, `在客厅里`, `在牛车水`), and 4 Verb+Object cards (`看了中文书`, `打了羽毛球`, `正在弹钢琴呢`, `打算吃年糕`).",
        "Shuffle one card from each stack face down on the desk.",
        "Start a 60-second timer, flip four cards, and snap them into legal **STPVO** (or **TSPVO**) order — then read the sentence aloud AND check whether the Time card matches the Aspect marker (`了 / 正在 / 打算`)!",
        "Bonus round: negate your assembled sentence out loud — remember `没` kicks `了` out, keeps `过`, and `打算` takes `不`!",
      ],
      maths:
        "Physical slot-sorting wires Mandarin STPVO directly into muscle memory so you stop translating word-for-word from English SVOPT under timed IGCSE exam pressure.",
    },
    {
      title: "3-Time-Frame IGCSE Paragraph Upgrade Challenge",
      emoji: "🚀",
      materials: [
        "A lined notebook page & 3 highlighter colours (Past = blue, Present = green, Future = red)",
      ],
      steps: [
        "Write a basic 3-sentence Band-C paragraph about your favourite hobby or school subject (around 30 characters).",
        "Now upgrade it to Band A by inserting: (1) a frequency adverb + verb-copy duration (`经常…弹了一个小时`), (2) one Past sentence (`去年/上个周末…了` or `以前…过`), (3) one Future sentence (`明年打算…`), and (4) TWO magnetic paired connectives (`虽然…但是…`, `不但…而且…`, or `如果…就…`).",
        "Highlight Past in blue, Present in green, and Future in red — verify ALL THREE colours appear on the page!",
        "Final 30-second audit: check every character is Simplified Chinese (`学`, `书`, `欢`, `过`, `虽`, `为`, `两`) and verify Subject sits BEFORE `就`!",
      ],
      maths:
        "Colour-coding Past, Present, and Future visually mirrors how Cambridge IGCSE 0547 examiners scan scripts for time-frame variety and complex structures.",
    },
  ],
  bonusDiagrams: [
    {
      title: "English SVOPT vs Mandarin STPVO Train Diagram",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Visual comparison showing English SVOPT reversing into Mandarin STPVO word order">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1" />
  <text x="280" y="25" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">Why Direct English Translation Fails: SVOPT → STPVO</text>
  <text x="24" y="54" font-size="11" font-weight="800" fill="var(--bad)">English Order (SVOPT) — ❌ Do NOT copy in Mandarin!</text>
  <rect x="24" y="64" width="84" height="42" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="66" y="89" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">S · I</text>
  <rect x="116" y="64" width="102" height="42" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="167" y="89" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">V · studied</text>
  <rect x="226" y="64" width="94" height="42" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="273" y="89" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">O · Chinese</text>
  <rect x="328" y="64" width="106" height="42" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" />
  <text x="381" y="89" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">P · in library</text>
  <rect x="442" y="64" width="96" height="42" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" />
  <text x="490" y="89" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">T · yesterday</text>
  <text x="280" y="130" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">↓  Move TIME &amp; PLACE directly in front of the VERB!  ↓</text>
  <text x="24" y="156" font-size="11" font-weight="800" fill="var(--good)">Mandarin Order (STPVO) — ✅ Natural IGCSE Syntax</text>
  <rect x="24" y="166" width="76" height="48" rx="8" fill="var(--surface-2)" stroke="var(--good)" />
  <text x="62" y="186" text-anchor="middle" font-size="10" font-weight="800" fill="var(--good)">S</text>
  <text x="62" y="204" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">我</text>
  <rect x="108" y="166" width="96" height="48" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="156" y="186" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand)">T · Time</text>
  <text x="156" y="204" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">昨天</text>
  <rect x="212" y="166" width="118" height="48" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="271" y="186" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand)">P · Place</text>
  <text x="271" y="204" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">在图书馆</text>
  <rect x="338" y="166" width="100" height="48" rx="8" fill="var(--surface-2)" stroke="var(--good)" />
  <text x="388" y="186" text-anchor="middle" font-size="10" font-weight="800" fill="var(--good)">V · Verb</text>
  <text x="388" y="204" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">学习了</text>
  <rect x="446" y="166" width="92" height="48" rx="8" fill="var(--surface-2)" stroke="var(--good)" />
  <text x="492" y="186" text-anchor="middle" font-size="10" font-weight="800" fill="var(--good)">O · Object</text>
  <text x="492" y="204" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">中文</text>
  <text x="280" y="236" text-anchor="middle" font-size="11" fill="var(--ink-2)">Also valid (TSPVO): 昨天，我在图书馆学习了中文。</text>
</svg>`,
      caption: "Shift Time and Place from the tail of an English sentence right in front of the Mandarin verb.",
    },
    {
      title: "The 4-Lens Mandarin Aspect & Negation Matrix",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline showing Mandarin aspect lenses: past experience 过, completed past 了, ongoing 正在...呢, and future 打算 with their exact negative rules">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1" />
  <text x="280" y="25" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">Timeline of the 4 Aspect Lenses &amp; Exact Negation Rules</text>
  <line x1="36" y1="66" x2="524" y2="66" stroke="var(--brand)" stroke-width="3" />
  <polygon points="524,60 536,66 524,72" fill="var(--brand)" />
  <circle cx="90" cy="66" r="8" fill="var(--brand)" />
  <circle cx="218" cy="66" r="8" fill="var(--brand)" />
  <circle cx="346" cy="66" r="8" fill="var(--good)" />
  <circle cx="472" cy="66" r="8" fill="var(--brand)" />
  <text x="90" y="50" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Ever Past</text>
  <text x="218" y="50" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Specific Past</text>
  <text x="346" y="50" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">Right Now</text>
  <text x="472" y="50" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Future</text>
  <rect x="22" y="86" width="126" height="146" rx="10" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="85" y="109" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">V + 过</text>
  <text x="85" y="131" text-anchor="middle" font-size="11" fill="var(--ink)">以前去过北京</text>
  <text x="85" y="156" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">Neg: 没 + V + 过</text>
  <text x="85" y="177" text-anchor="middle" font-size="11" fill="var(--ink)">没去过北京</text>
  <text x="85" y="206" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">KEEP 过!</text>
  <rect x="155" y="86" width="126" height="146" rx="10" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="218" y="109" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">V + 了</text>
  <text x="218" y="131" text-anchor="middle" font-size="11" fill="var(--ink)">昨天买了书</text>
  <text x="218" y="156" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">Neg: 没 + V</text>
  <text x="218" y="177" text-anchor="middle" font-size="11" fill="var(--ink)">昨天没买书</text>
  <text x="218" y="206" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">DROP 了!</text>
  <rect x="288" y="86" width="126" height="146" rx="10" fill="var(--surface-2)" stroke="var(--good)" />
  <text x="351" y="109" text-anchor="middle" font-size="14" font-weight="800" fill="var(--good)">正在…呢</text>
  <text x="351" y="131" text-anchor="middle" font-size="11" fill="var(--ink)">正在听音乐呢</text>
  <text x="351" y="156" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">Neg: 没在 + V</text>
  <text x="351" y="177" text-anchor="middle" font-size="11" fill="var(--ink)">没在听音乐</text>
  <text x="351" y="206" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Not 不在!</text>
  <rect x="421" y="86" width="118" height="146" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="480" y="109" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">打算 / 会</text>
  <text x="480" y="131" text-anchor="middle" font-size="11" fill="var(--ink)">明年打算去</text>
  <text x="480" y="156" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">Neg: 不打算</text>
  <text x="480" y="177" text-anchor="middle" font-size="11" fill="var(--ink)">明年不会去</text>
  <text x="480" y="206" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">Uses 不!</text>
</svg>`,
      caption: "Keep all four affirmative & negative pairs side by side whenever reviewing for IGCSE 0547.",
    },
  ],
  history: {
    title: "The Banker Who Invented Pinyin — 周有光 (Zhōu Yǒuguāng, 1906–2017)",
    story:
      "Every time you read tone-marked Pinyin (`zhèngzài`, `suīrán`, `tuányuán`) or type Simplified Chinese on an iPad, you are using the masterpiece of **周有光** (Zhōu Yǒuguāng) — often called the 'Father of Hanyu Pinyin' (`汉语拼音之父`). Remarkably, Zhou spent the first half of his life as an economist and banker on Wall Street and in Shanghai before switching careers at age 49 to lead the committee creating a unified phonetic alphabet for Mandarin! Between 1955 and 1958, his team designed **Hanyu Pinyin** using the 26 Latin letters plus four intuitive tone marks (`ā á ǎ à`) mirroring the pitch contour of your voice — alongside Simplified Chinese (`简体中文`), which reduced dense multi-stroke characters into clean everyday forms. Zhou lived to age 111 and saw his system help raise literacy across China and let millions of learners worldwide — including Year 9 students in Singapore — bridge straight into fluent Mandarin!",
  },
};
