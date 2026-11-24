import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook: "Did you know Chinese families actually use smartphone apps called **亲戚计算器 (qīnqi jìsuànqì — Relative Calculators)** at Chinese New Year just to figure out whether to call a cousin's husband's aunt **表姨** or **堂婶**?",
  didYouKnow: [
    "In China and Singapore, **亲戚计算器** (*Relative Calculator*) mini-programs spike to millions of searches every **春节 (Chūnjié)**! You type a chain like *'爸爸 → 妹妹 → 儿子'* and the app instantly outputs **表哥 (biǎogē)** or **表弟 (biǎodì)**.",
    "One English word — **'cousin'** — splits into **eight** exact Mandarin titles (**堂哥, 堂姐, 堂弟, 堂妹, 表哥, 表姐, 表弟, 表妹**), encoding branch, paternal surname, gender, and age relative to you in just two syllables!",
    "The **女 (nǚ — woman)** radical quietly acts like a colour-coded badge across the Chinese family tree: spot it in **妈, 姐, 妹, 奶, 婆, 姥, 姑, 姨, 婶**!",
    "In Singapore's hawker centres and HDB estates, calling elders **叔叔 (shūshu)** and **阿姨 (āyí)** is everyday courtesy — a reflection of the traditional Chinese ideal **四海之内皆兄弟** (*sìhǎi zhī nèi jiē xiōngdì* — within the four seas, all are family).",
    "Northern and Southern Mandarin speakers call maternal grandparents by completely different words (**姥爷/姥姥** in Beijing vs **外公/外婆** in Singapore, Guangdong, and Shanghai), yet both sides share **爷爷/奶奶** for father's parents!",
  ],
  activities: [
    {
      title: "Draw Your Bilingual 家谱 (Family Tree) Poster",
      emoji: "🌳",
      materials: [
        "One A3 sheet of paper or iPad drawing app",
        "Two highlighter colours (blue for Father's side / green for Mother's side)",
        "Your family's approximate ages and cities",
      ],
      steps: [
        "Place **我 (wǒ — Me)** and your age in the centre-bottom of the page.",
        "Draw the paternal branch (**爷爷, 奶奶, 伯伯/叔叔, 姑姑**) on the left in blue, and the maternal branch (**外公, 外婆, 舅舅, 阿姨**) on the right in green.",
        "Add every cousin underneath their parent — colour **堂** cousins with a star (same paternal surname!) and **表** cousins with a diamond, comparing each cousin's age directly against yours.",
        "Write one full STPVO sentence below three relatives stating where they live (**住在…**) and their job (**是一位…** or **已经退休了**).",
      ],
      maths:
        "Mapping real relatives forces your brain to apply the two-axis Chinese kinship algorithm — **Lineage Branch (父系 vs 母系)** × **Surname Rule (堂 vs 表)** × **Relative Age (哥/姐 vs 弟/妹)** — instead of guessing from English.",
    },
    {
      title: "60-Second CNY 拜年 Greeting Challenge",
      emoji: "🍊",
      materials: [
        "A partner (classmate or family member)",
        "10 index cards with English prompts (e.g., 'Mum's older brother', 'Dad's sister's 10-year-old son')",
        "A 60-second timer",
      ],
      steps: [
        "Shuffle the 10 prompt cards face down.",
        "Start the timer: flip a card and greet that relative aloud in Mandarin with a New Year wish (e.g., **舅舅，新年快乐，身体健康！**).",
        "If you slip (such as saying **叔叔** for Mum's brother or **堂弟** for Dad's sister's son), put the card at the bottom of the deck.",
        "Try to clear all 10 cards with zero branch or tone slips in under 60 seconds!",
      ],
      maths:
        "Spoken recall under gentle time pressure locks in **automatic retrieval** of paternal vs maternal titles and neutral-tone rhythm (*yéye, nǎinai, jiùjiu, gūgu*) — the exact fluency tested in IGCSE 0547 Role Play & Conversation!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Measure Words for People: 口 · 个 · 位",
      svg: `<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Chinese people measure words kou, ge, and wei">
  <rect x="4" y="4" width="552" height="212" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="30" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--brand)">People Measure Words: 口 (kǒu) · 个 (gè) · 位 (wèi)</text>
  <rect x="18" y="46" width="166" height="154" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="101" y="78" text-anchor="middle" font-size="26" font-weight="700" fill="var(--brand)">口</text>
  <text x="101" y="98" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">kǒu · Household</text>
  <text x="101" y="122" text-anchor="middle" font-size="11" fill="var(--ink-2)">Total family members</text>
  <text x="101" y="138" text-anchor="middle" font-size="11" fill="var(--ink-2)">living in one home</text>
  <text x="101" y="168" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">我家有五口人</text>
  <text x="101" y="186" text-anchor="middle" font-size="10" fill="var(--ink-2)">Wǒ jiā yǒu wǔ kǒu rén</text>
  <rect x="197" y="46" width="166" height="154" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="78" text-anchor="middle" font-size="26" font-weight="700" fill="var(--ink)">个</text>
  <text x="280" y="98" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">gè · General</text>
  <text x="280" y="122" text-anchor="middle" font-size="11" fill="var(--ink-2)">Everyday counting of</text>
  <text x="280" y="138" text-anchor="middle" font-size="11" fill="var(--ink-2)">cousins &amp; siblings</text>
  <text x="280" y="168" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">两个表弟</text>
  <text x="280" y="186" text-anchor="middle" font-size="10" fill="var(--ink-2)">liǎng gè biǎodì (NOT 二!)</text>
  <rect x="376" y="46" width="166" height="154" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="459" y="78" text-anchor="middle" font-size="26" font-weight="700" fill="var(--good)">位</text>
  <text x="459" y="98" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">wèi · Polite VIP</text>
  <text x="459" y="122" text-anchor="middle" font-size="11" fill="var(--ink-2)">Respectful for elders,</text>
  <text x="459" y="138" text-anchor="middle" font-size="11" fill="var(--ink-2)">teachers &amp; professions</text>
  <text x="459" y="168" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">一位医生 / 这位外婆</text>
  <text x="459" y="186" text-anchor="middle" font-size="10" fill="var(--ink-2)">yí wèi yīshēng</text>
</svg>`,
      caption: "Use 口 for total household headcount, 个 for everyday people, and 位 to show cultural respect.",
    },
    {
      title: "The 女 (Woman) Radical Across Female Relatives",
      svg: `<svg viewBox="0 0 560 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Woman radical appearing in Chinese female relative characters">
  <rect x="4" y="4" width="552" height="187" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">Radical Decoder: Spot 女 (nǚ) in Female Relatives!</text>
  <rect x="20" y="48" width="80" height="70" rx="8" fill="var(--brand-soft)" stroke="var(--brand)"/>
  <text x="60" y="78" text-anchor="middle" font-size="22" font-weight="700" fill="var(--ink)">奶奶</text>
  <text x="60" y="98" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">nǎinai</text>
  <text x="60" y="112" text-anchor="middle" font-size="9.5" fill="var(--brand)">Dad's Mum</text>
  <rect x="108" y="48" width="80" height="70" rx="8" fill="var(--brand-soft)" stroke="var(--brand)"/>
  <text x="148" y="78" text-anchor="middle" font-size="22" font-weight="700" fill="var(--ink)">外婆</text>
  <text x="148" y="98" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">wàipó</text>
  <text x="148" y="112" text-anchor="middle" font-size="9.5" fill="var(--brand)">Mum's Mum</text>
  <rect x="196" y="48" width="80" height="70" rx="8" fill="var(--brand-soft)" stroke="var(--brand)"/>
  <text x="236" y="78" text-anchor="middle" font-size="22" font-weight="700" fill="var(--ink)">姥姥</text>
  <text x="236" y="98" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">lǎolao</text>
  <text x="236" y="112" text-anchor="middle" font-size="9.5" fill="var(--brand)">North Mum's</text>
  <rect x="284" y="48" width="80" height="70" rx="8" fill="var(--brand-soft)" stroke="var(--brand)"/>
  <text x="324" y="78" text-anchor="middle" font-size="22" font-weight="700" fill="var(--ink)">姑姑</text>
  <text x="324" y="98" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">gūgu</text>
  <text x="324" y="112" text-anchor="middle" font-size="9.5" fill="var(--brand)">Dad's Sis</text>
  <rect x="372" y="48" width="80" height="70" rx="8" fill="var(--brand-soft)" stroke="var(--brand)"/>
  <text x="412" y="78" text-anchor="middle" font-size="22" font-weight="700" fill="var(--ink)">阿姨</text>
  <text x="412" y="98" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">āyí</text>
  <text x="412" y="112" text-anchor="middle" font-size="9.5" fill="var(--brand)">Mum's Sis</text>
  <rect x="460" y="48" width="80" height="70" rx="8" fill="var(--brand-soft)" stroke="var(--brand)"/>
  <text x="500" y="78" text-anchor="middle" font-size="22" font-weight="700" fill="var(--ink)">婶婶</text>
  <text x="500" y="98" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">shěnshen</text>
  <text x="500" y="112" text-anchor="middle" font-size="9.5" fill="var(--brand)">叔叔's Wife</text>
  <rect x="20" y="132" width="520" height="44" rx="8" fill="var(--surface-2)" stroke="var(--line)"/>
  <text x="280" y="152" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Exam Strategy: Even if a character looks unfamiliar, spotting 女 confirms female gender!</text>
  <text x="280" y="168" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Also present in 妈 (mā), 姐 (jiě), 妹 (mèi), 舅妈 (jiùmā), and 孙女 (sūnnǚ).</text>
</svg>`,
      caption: "The 女 radical acts as an instant visual decoder across Chinese female relative characters.",
    },
  ],
  history: {
    title: "From the 2,200-Year-Old《尔雅》Dictionary to Smartphone Relative Calculators",
    story:
      "Over 2,200 years ago during the Han Dynasty, scholars compiled China's oldest surviving dictionary, the **《尔雅》** (*Ěryǎ*). One entire chapter — **《释亲》** (*Shìqīn*, 'Explaining Kinship') — carefully recorded over a hundred distinct titles for paternal relatives (**宗族 zōngzú**), maternal relatives (**母党 mǔdǎng**), and relatives by marriage (**妻党 qīdǎng**). Why did ancient Chinese society invent such precision? Because in large multi-generational courtyards (**四合院 sìhéyuàn**), knowing a person's exact title immediately signalled how to greet them, where to seat them at the banquet table, and how to honour elders (**尊老爱幼 zūnlǎo àiyòu**). Today, families live across cities from Singapore to London and Shanghai, yet those exact distinctions (**伯伯 vs 叔叔 vs 舅舅**, **堂 vs 表**) remain so alive at **春节** reunions that modern software engineers built **亲戚计算器** smartphone apps to keep a 2,200-year-old family code thriving in the digital age!",
  },
};
