import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook: "Did you know a four-way crossroads in Chinese is called **十字路口 (shízì lùkǒu — 'ten-character junction')** because **十** literally draws an intersection, while a T-junction is **丁字路口 ('T-character junction')**?",
  didYouKnow: [
    "The character **马路 (mǎlù — road)** literally means **'horse road'**! Before cars arrived, wide paved urban avenues were designed for horse-drawn carriages — and the name stuck in everyday modern Mandarin (**过马路** = cross the road).",
    "In northern Chinese cities like Beijing and Xi'an, streets align strictly north–south and east–west, so locals commonly give directions using **东/南/西/北** ('walk 200 metres north, then turn east') instead of left/right!",
    "The polyphone **银行 (yínháng — bank)** literally means **'silver firm/guild'** — recalling the era when silver ingots (**银 yín**) were stored and exchanged by merchant guilds (**行 háng**).",
    "Singapore's bilingual MRT network lets Year 9 Tanglin students practise Chinese directions every day: **一站** (one stop), **换乘** (transfer lines), **出口** (exit), and **地铁站** (MRT station).",
    "**热闹 (rènào)** combines **热 (hot)** and **闹 (bustling)** — in Chinese culture, a 'hot and bustling' street market or neighbourhood plaza is considered joyful and auspicious, unlike English 'noisy' (**吵 chǎo**).",
  ],
  activities: [
    {
      title: "Tanglin One-North Walking Map Challenge",
      emoji: "🧭",
      materials: ["Printed or hand-drawn street grid around school or home", "Coloured highlighter", "Partner"],
      steps: [
        "Draw a clean 3×3 street grid and label 8 real places in Simplified Chinese: **学校, 地铁站, 超市, 公园, 图书馆, 医院, 银行, 购物中心**.",
        "Pick a hidden start point and destination without telling your partner the destination.",
        "Give spoken directions in Mandarin using ONLY **一直往前走, 过马路, 在第X个路口往左/右拐, 就在你的左/右边**.",
        "See if your partner lands on the exact right building — then swap roles and add a **离** distance + **走路/坐地铁** time estimate!",
      ],
      maths:
        "Practising Place → Direction → Verb (**在第一个路口往左拐**) in real-time speaking builds automatic fluency for IGCSE 0547 Role-Play tasks.",
    },
    {
      title: "Great Year 9 Debate: 市中心 vs 郊区",
      emoji: "🏙️",
      materials: ["Two-column T-chart", "Timer (2 minutes per side)"],
      steps: [
        "Fill the left column (**市中心**) with 3 strengths and 2 downsides in Chinese (**交通方便, 热闹, 购物中心多 / 有点儿吵, 堵车, 房子贵**).",
        "Fill the right column (**郊区**) with 3 strengths and 2 downsides (**环境安静, 空气新鲜, 绿化好 / 离市中心远, 没有市中心热闹**).",
        "Deliver a 60-second mini-speech using at least ONE **比…得多**, ONE **没有…那么…**, and ONE **虽然…，但是我更喜欢住在…**.",
      ],
      maths:
        "Balancing advantages and drawbacks with **虽然…但是…** and **没有…但是更…** is the exact reasoning structure rewarded at IGCSE Band 1.",
    },
  ],
  bonusDiagrams: [
    {
      title: "P-D-V Direction Machine (指路语序公式)",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mandarin Place-Direction-Verb direction formula: 在第一个路口 + 往左 + 拐">
  <rect x="0" y="0" width="560" height="220" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">指路黄金语序 · Place → Direction → Verb (P-D-V)</text>
  <rect x="24" y="54" width="180" height="84" rx="12" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/>
  <text x="114" y="80" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">1. PLACE (Where?)</text>
  <text x="114" y="106" text-anchor="middle" font-size="16" font-weight="800" fill="var(--ink)">在第一个路口</text>
  <text x="114" y="126" text-anchor="middle" font-size="11" fill="var(--ink-2)">zài dì-yī gè lùkǒu</text>
  <text x="220" y="102" text-anchor="middle" font-size="22" font-weight="800" fill="var(--ink-2)">+</text>
  <rect x="236" y="54" width="144" height="84" rx="12" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.8"/>
  <text x="308" y="80" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">2. DIRECTION</text>
  <text x="308" y="106" text-anchor="middle" font-size="16" font-weight="800" fill="var(--ink)">往左 / 往右</text>
  <text x="308" y="126" text-anchor="middle" font-size="11" fill="var(--ink-2)">wǎng zuǒ / yòu</text>
  <text x="396" y="102" text-anchor="middle" font-size="22" font-weight="800" fill="var(--ink-2)">+</text>
  <rect x="412" y="54" width="124" height="84" rx="12" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.8"/>
  <text x="474" y="80" text-anchor="middle" font-size="11" font-weight="800" fill="var(--bad)">3. VERB</text>
  <text x="474" y="106" text-anchor="middle" font-size="16" font-weight="800" fill="var(--ink)">拐 / 走</text>
  <text x="474" y="126" text-anchor="middle" font-size="11" fill="var(--ink-2)">guǎi / zǒu</text>
  <rect x="44" y="156" width="472" height="44" rx="10" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="280" y="176" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">✅ 在第一个路口往左拐  ·  ❌ 往左拐在第一个路口</text>
  <text x="280" y="193" text-anchor="middle" font-size="11" fill="var(--ink-2)">Always set the landmark FIRST, aim with 往 SECOND, and move LAST!</text>
</svg>`,
      caption:
        "Mandarin flips English order ('turn left at the first intersection') into Place → Direction → Verb: 在第一个路口往左拐.",
    },
    {
      title: "Chinese Compass & Building Suffixes (东南西北与建筑词尾)",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chinese compass rose with 北南东西 and four building suffixes 站, 院, 馆, 中心">
  <rect x="0" y="0" width="560" height="220" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="145" y="28" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">东南西北 · Compass</text>
  <circle cx="145" cy="120" r="64" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <line x1="145" y1="68" x2="145" y2="172" stroke="var(--brand)" stroke-width="2"/>
  <line x1="93" y1="120" x2="197" y2="120" stroke="var(--good)" stroke-width="2"/>
  <text x="145" y="54" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">北 běi (N)</text>
  <text x="145" y="198" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">南 nán (S)</text>
  <text x="58" y="125" text-anchor="middle" font-size="14" font-weight="800" fill="var(--good)">西 xī (W)</text>
  <text x="232" y="125" text-anchor="middle" font-size="14" font-weight="800" fill="var(--good)">东 dōng (E)</text>
  <text x="412" y="28" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">4 Building Suffix Clues</text>
  <rect x="286" y="44" width="250" height="34" rx="8" fill="var(--brand-soft)" stroke="var(--brand)"/>
  <text x="411" y="66" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">站 (zhàn) · 地铁站 · 公共汽车站</text>
  <rect x="286" y="86" width="250" height="34" rx="8" fill="var(--surface-2)" stroke="var(--good)"/>
  <text x="411" y="108" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">院 (yuàn) · 医院 · 电影院</text>
  <rect x="286" y="128" width="250" height="34" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)"/>
  <text x="411" y="150" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">馆 (guǎn) · 图书馆 · 博物馆 · 咖啡馆</text>
  <rect x="286" y="170" width="250" height="34" rx="8" fill="var(--surface-2)" stroke="var(--bad)"/>
  <text x="411" y="192" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">中心 (zhōngxīn) · 购物中心 · 体育中心</text>
</svg>`,
      caption:
        "Memorise the Chinese compass order 东南西北 (dōng nán xī běi — clockwise starting East!) alongside the four key building suffixes.",
    },
  ],
  history: {
    title: "The Ancient Grid of Chang'an & Singapore's Planned Garden Towns",
    story:
      "Over 1,300 years ago, the Tang Dynasty capital **长安 (Cháng'ān — modern Xi'an)** was the world's largest planned city, laid out on a giant chessboard of 108 walled neighbourhoods (**坊 fāng**), each with its own temples, wells, shops, and straight avenues aligned to **东、南、西、北**. Centuries later, Singapore's urban planners adopted a remarkably similar vision of self-contained **社区 (neighbourhoods)** connected by rapid **地铁 (MRT)** lines, tree-lined parks, libraries, and sports centres — turning the entire island into a modern **花园城市 (Garden City)**!",
  },
};
