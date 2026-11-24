import type { ExamPaper } from "../types.ts";

const FESTIVALS_TIMELINE_SVG =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lunar calendar timeline of four traditional Chinese festivals: Spring Festival on 1st of 1st month, Lantern Festival on 15th of 1st month, Dragon Boat Festival on 5th of 5th month with a food blank, and Mid-Autumn Festival on 15th of 8th month">' +
  '<rect x="8" y="8" width="544" height="234" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>' +
  '<text x="280" y="32" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">中国传统节日农历时间轴 (Lunar Calendar Festivals)</text>' +
  '<line x1="36" y1="68" x2="524" y2="68" stroke="var(--brand)" stroke-width="2.5"/>' +
  '<circle cx="84" cy="68" r="7" fill="var(--brand)"/>' +
  '<circle cx="214" cy="68" r="7" fill="var(--brand)"/>' +
  '<circle cx="346" cy="68" r="7" fill="var(--good)"/>' +
  '<circle cx="476" cy="68" r="7" fill="var(--brand)"/>' +
  '<text x="84" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">正月初一</text>' +
  '<text x="214" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">正月十五</text>' +
  '<text x="346" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">五月初五</text>' +
  '<text x="476" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">八月十五</text>' +
  '<rect x="24" y="88" width="120" height="134" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4"/>' +
  '<text x="84" y="112" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">春节</text>' +
  '<text x="84" y="129" text-anchor="middle" font-size="10" fill="var(--ink-2)">Chūnjié</text>' +
  '<text x="84" y="154" text-anchor="middle" font-size="11" fill="var(--ink)">吃年夜饭</text>' +
  '<text x="84" y="176" text-anchor="middle" font-size="11" fill="var(--ink)">贴春联</text>' +
  '<text x="84" y="198" text-anchor="middle" font-size="11" fill="var(--ink)">发红包·饺子</text>' +
  '<rect x="154" y="88" width="120" height="134" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4"/>' +
  '<text x="214" y="112" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">元宵节</text>' +
  '<text x="214" y="129" text-anchor="middle" font-size="10" fill="var(--ink-2)">Yuánxiāojié</text>' +
  '<text x="214" y="154" text-anchor="middle" font-size="11" fill="var(--ink)">看花灯</text>' +
  '<text x="214" y="176" text-anchor="middle" font-size="11" fill="var(--ink)">猜灯谜</text>' +
  '<text x="214" y="198" text-anchor="middle" font-size="11" fill="var(--ink)">吃汤圆</text>' +
  '<rect x="286" y="88" width="120" height="134" rx="8" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.8"/>' +
  '<text x="346" y="112" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">端午节</text>' +
  '<text x="346" y="129" text-anchor="middle" font-size="10" fill="var(--good)">Duānwǔjié</text>' +
  '<text x="346" y="154" text-anchor="middle" font-size="11" fill="var(--ink)">划龙舟</text>' +
  '<text x="346" y="176" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--good)">吃 [ ??? ]</text>' +
  '<text x="346" y="198" text-anchor="middle" font-size="11" fill="var(--ink)">纪念屈原</text>' +
  '<rect x="416" y="88" width="120" height="134" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4"/>' +
  '<text x="476" y="112" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">中秋节</text>' +
  '<text x="476" y="129" text-anchor="middle" font-size="10" fill="var(--ink-2)">Zhōngqiūjié</text>' +
  '<text x="476" y="154" text-anchor="middle" font-size="11" fill="var(--ink)">赏月·团圆</text>' +
  '<text x="476" y="176" text-anchor="middle" font-size="11" fill="var(--ink)">吃月饼</text>' +
  '<text x="476" y="198" text-anchor="middle" font-size="11" fill="var(--ink)">提灯笼·嫦娥</text>' +
  '</svg>';

const STPVO_BLUEPRINT_SVG =
  '<svg viewBox="0 0 560 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mandarin STPVO word order blueprint showing Subject, Time, Place, Verb with Aspect, and Object plus four time and aspect markers">' +
  '<rect x="8" y="8" width="544" height="229" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>' +
  '<text x="280" y="32" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">STPVO 汉语句序蓝图 (Mandarin Sentence Order)</text>' +
  '<rect x="22" y="48" width="76" height="74" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.6"/>' +
  '<text x="60" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">S 主语</text>' +
  '<text x="60" y="92" text-anchor="middle" font-size="12" fill="var(--ink)">Subject</text>' +
  '<text x="60" y="110" text-anchor="middle" font-size="11" fill="var(--ink-2)">他 / 弟弟</text>' +
  '<rect x="108" y="48" width="106" height="74" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="161" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">T 时间</text>' +
  '<text x="161" y="92" text-anchor="middle" font-size="12" fill="var(--ink)">Time</text>' +
  '<text x="161" y="110" text-anchor="middle" font-size="11" fill="var(--ink-2)">今天上午</text>' +
  '<rect x="224" y="48" width="108" height="74" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="278" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">P 地点</text>' +
  '<text x="278" y="92" text-anchor="middle" font-size="12" fill="var(--ink)">Place</text>' +
  '<text x="278" y="110" text-anchor="middle" font-size="11" fill="var(--ink-2)">在公园</text>' +
  '<rect x="342" y="48" width="96" height="74" rx="8" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.6"/>' +
  '<text x="390" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="var(--good)">V 动词</text>' +
  '<text x="390" y="92" text-anchor="middle" font-size="12" fill="var(--ink)">Verb + Aspect</text>' +
  '<text x="390" y="110" text-anchor="middle" font-size="11" fill="var(--ink-2)">打了 / 玩过</text>' +
  '<rect x="448" y="48" width="90" height="74" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="493" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">O 宾语</text>' +
  '<text x="493" y="92" text-anchor="middle" font-size="12" fill="var(--ink)">Object</text>' +
  '<text x="493" y="110" text-anchor="middle" font-size="11" fill="var(--ink-2)">羽毛球</text>' +
  '<text x="280" y="148" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">四大时态标记 (4 Key IGCSE Time &amp; Aspect Markers)</text>' +
  '<rect x="22" y="160" width="122" height="60" rx="7" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.3"/>' +
  '<text x="83" y="184" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">V + 了 (le)</text>' +
  '<text x="83" y="206" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">completed past</text>' +
  '<rect x="154" y="160" width="122" height="60" rx="7" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.3"/>' +
  '<text x="215" y="184" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">V + 过 (guo)</text>' +
  '<text x="215" y="206" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">past experience</text>' +
  '<rect x="286" y="160" width="122" height="60" rx="7" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.3"/>' +
  '<text x="347" y="184" text-anchor="middle" font-size="13" font-weight="700" fill="var(--good)">正在…呢</text>' +
  '<text x="347" y="206" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">ongoing right now</text>' +
  '<rect x="418" y="160" width="120" height="60" rx="7" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.3"/>' +
  '<text x="478" y="184" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">打算 / 将来想</text>' +
  '<text x="478" y="206" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">future plans</text>' +
  '</svg>';

const WEEKEND_CLOCK_SVG =
  '<svg viewBox="0 0 560 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Weekend routine schedule showing 08:30 breakfast and walking the dog, 10:00 revising Chinese at the library, 14:00 badminton at the sports hall, and 19:00 listening to music while drawing with a simultaneous-action blank">' +
  '<rect x="8" y="8" width="544" height="229" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>' +
  '<text x="280" y="32" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">周末作息时间表 (Weekend Routine Sequence)</text>' +
  '<rect x="24" y="48" width="512" height="38" rx="7" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.3"/>' +
  '<text x="42" y="72" font-size="12" font-weight="700" fill="var(--brand)">08:30 先 (xiān)</text>' +
  '<text x="174" y="72" font-size="12" fill="var(--ink)">在家吃早饭，然后带小狗去公园遛狗。</text>' +
  '<rect x="24" y="94" width="512" height="38" rx="7" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.3"/>' +
  '<text x="42" y="118" font-size="12" font-weight="700" fill="var(--brand)">10:00 然后 (ránhòu)</text>' +
  '<text x="174" y="118" font-size="12" fill="var(--ink)">去社区图书馆复习中文复习两个小时。</text>' +
  '<rect x="24" y="140" width="512" height="38" rx="7" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.3"/>' +
  '<text x="42" y="164" font-size="12" font-weight="700" fill="var(--good)">14:00 接着 (jiēzhe)</text>' +
  '<text x="174" y="164" font-size="12" fill="var(--ink)">和表弟一起去体育中心打羽毛球。</text>' +
  '<rect x="24" y="186" width="512" height="38" rx="7" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/>' +
  '<text x="42" y="210" font-size="12" font-weight="700" fill="var(--brand)">19:00 最后 (zuìhòu)</text>' +
  '<text x="174" y="210" font-size="12" font-weight="700" fill="var(--ink)">在卧室 [ ??? ] 听音乐 [ ??? ] 画画儿。(at the same time)</text>' +
  '</svg>';

export const paper: ExamPaper = {
  id: "exam-3",
  title: "Year 9 Chinese Term 3 & Culture Mock Paper (Festivals & IGCSE Bridge)",
  calculator: false,
  minutes: 45,
  questions: [
    {
      id: "exam-3-q01",
      kind: "mcq",
      topicId: "chinese-festivals",
      guideRef: "spring-festival",
      difficulty: "warmup",
      question:
        "Which traditional festival begins on **农历正月初一** (nónglì Zhēngyuè chūyī — the 1st day of the 1st lunar month) and features `年夜饭` and `发红包`?",
      options: [
        "春节 (Chūnjié)",
        "中秋节 (Zhōngqiūjié)",
        "端午节 (Duānwǔjié)",
        "元宵节 (Yuánxiāojié)",
      ],
      answerIndex: 0,
      hints: [
        "`正月初一` is the very first day of the lunar year.",
        "`年夜饭` (New Year's Eve reunion dinner) and `红包` (red packets) are its signature traditions.",
      ],
      explanation:
        "`春节` (Chūnjié — Spring Festival / Chinese New Year) falls on `农历正月初一`, preceded by `除夕` (`年夜饭`) and celebrated with `发红包`, `贴春联`, and `舞龙舞狮`.",
    },
    {
      id: "exam-3-q02",
      kind: "short",
      topicId: "chinese-festivals",
      guideRef: "mid-autumn-festival",
      difficulty: "warmup",
      question:
        "Type the two-character Mandarin word (Simplified Hanzi or tone-marked Pinyin) for **mooncake**, the traditional pastry eaten during `中秋节` (Zhōngqiūjié).",
      answer: {
        type: "text",
        accept: ["月饼", "yuèbǐng"],
        display: "月饼 (yuèbǐng)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["粽子", "zòngzi"] },
          feedback: "`粽子` (zòngzi) is eaten at Dragon Boat Festival (`端午节`), not Mid-Autumn Festival.",
        },
        {
          spec: { type: "text", accept: ["汤圆", "tāngyuán"] },
          feedback: "`汤圆` (tāngyuán) is eaten at the Lantern Festival (`元宵节`), not Mid-Autumn Festival.",
        },
        {
          spec: { type: "text", accept: ["饺子", "jiǎozi"] },
          feedback: "`饺子` (jiǎozi — dumplings) is associated with Spring Festival (`春节`), not Mid-Autumn Festival.",
        },
      ],
      hints: [
        "Literally 'moon' (`月`) + 'cake / pastry' (`饼`).",
        "4th tone + 3rd tone: `yuèbǐng`.",
      ],
      solution: [
        "`月` (yuè — moon) + `饼` (bǐng — flat cake/pastry) forms `月饼` (yuèbǐng).",
        "Complete phrase: `中秋节吃月饼、赏月。`",
      ],
      commonError: "Mixing up the four festival foods: `饺子/年糕` (春节), `汤圆` (元宵节), `粽子` (端午节), `月饼` (中秋节).",
    },
    {
      id: "exam-3-q03",
      kind: "mcq",
      topicId: "chinese-festivals",
      guideRef: "spring-festival",
      difficulty: "warmup",
      question:
        "Before Spring Festival, families stick red auspicious poetic scrolls on both sides of their doorway. What is this tradition called in Mandarin?",
      options: [
        "划龙舟 (huá lóngzhōu)",
        "猜灯谜 (cāi dēngmí)",
        "贴春联 (tiē chūnlián)",
        "提灯笼 (tí dēnglóng)",
      ],
      answerIndex: 2,
      hints: [
        "The verb `贴` (tiē) means 'to paste / stick onto a surface'.",
        "`春` (spring) + `联` (couplet) gives the festival scroll name.",
      ],
      explanation:
        "`贴春联` (tiē chūnlián) means pasting Spring Festival couplets beside the front door. `划龙舟` is rowing dragon boats (`端午节`), `猜灯谜` is guessing lantern riddles (`元宵节`), and `提灯笼` is carrying lanterns (`中秋节`).",
    },
    {
      id: "exam-3-q04",
      kind: "short",
      topicId: "chinese-festivals",
      guideRef: "mid-autumn-festival",
      difficulty: "warmup",
      question:
        "Type the two-character Mandarin verb-object phrase (Simplified Hanzi or tone-marked Pinyin) meaning **to admire the full moon** on `中秋节` night.",
      answer: {
        type: "text",
        accept: ["赏月", "shǎngyuè"],
        display: "赏月 (shǎngyuè)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["看月", "看月亮", "kànyuè", "kàn yuèliang"] },
          feedback: "`看月亮` is understandable, but the formal cultural Year 9 term specifically for admiring the Mid-Autumn moon is `赏月` (shǎngyuè).",
        },
      ],
      hints: [
        "Use the cultured verb `赏` (shǎng — appreciate/admire) + `月` (yuè — moon).",
        "3rd tone + 4th tone: `shǎngyuè`.",
      ],
      solution: [
        "`赏` (shǎng — admire/enjoy aesthetically) + `月` (yuè — moon) gives `赏月` (shǎngyuè).",
        "Example: `中秋节晚上，我们全家人一边吃月饼，一边赏月。`",
      ],
      commonError: "Writing plain `看月亮` instead of the high-band cultural verb `赏月` (shǎngyuè).",
    },
    {
      id: "exam-3-q05",
      kind: "mcq",
      topicId: "igcse-bridge-grammar",
      guideRef: "igcse-self-intro-family-pets",
      difficulty: "warmup",
      question:
        "Read the IGCSE self-introduction:\n\n**「我叫林安娜，今年十四岁，生日是十月十二号，我住在新加坡，家里有五口人和一只兔子。」**\n\nWhich summary matches ALL the facts in the sentence?",
      options: [
        "Anna is twelve years old, born on 14 October, and lives in Beijing.",
        "Anna is fourteen, born on 10 December, and keeps five small goldfish.",
        "Anna is fifteen, lives in Singapore, and has four siblings and a cat.",
        "Anna is fourteen, born on 12 October, lives in Singapore, and has a rabbit.",
      ],
      answerIndex: 3,
      hints: [
        "Remember Mandarin dates go **Month first, Day second**: `十月十二号` = October 12.",
        "`十四岁` = 14 years old; `一只兔子` = one rabbit.",
      ],
      explanation:
        "`十四岁` is 14 years old, `十月十二号` is 12 October (Month 10, Day 12), `住在新加坡` means lives in Singapore, `五口人` is 5 family members, and `一只兔子` is one rabbit.",
    },
    {
      id: "exam-3-q06",
      kind: "short",
      topicId: "chinese-festivals",
      guideRef: "dragon-boat-lantern",
      difficulty: "core",
      diagram: FESTIVALS_TIMELINE_SVG,
      question:
        "Study the lunar calendar timeline (`中国传统节日农历时间轴`). Type the two-character Mandarin food name (Simplified Hanzi or tone-marked Pinyin) missing from **端午节 (五月初五)** — sticky rice dumplings wrapped in bamboo leaves.",
      answer: {
        type: "text",
        accept: ["粽子", "zòngzi"],
        display: "粽子 (zòngzi)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["饺子", "jiǎozi"] },
          feedback: "`饺子` (jiǎozi) are wheat-skin dumplings eaten at Spring Festival, not sticky rice pyramids wrapped in bamboo leaves.",
        },
        {
          spec: { type: "text", accept: ["月饼", "yuèbǐng"] },
          feedback: "`月饼` (yuèbǐng) belongs to Mid-Autumn Festival (`八月十五`), not Dragon Boat Festival (`五月初五`).",
        },
        {
          spec: { type: "text", accept: ["汤圆", "tāngyuán"] },
          feedback: "`汤圆` (tāngyuán) is eaten at the Lantern Festival (`正月十五`), not Dragon Boat Festival.",
        },
      ],
      hints: [
        "The first character has the rice radical `米` and a 4th tone (`zòng`).",
        "It pairs with `吃___` and `划龙舟` on `五月初五`.",
      ],
      solution: [
        "At Dragon Boat Festival (`端午节`, lunar 5/5), people race dragon boats (`划龙舟`) and eat `粽子` (zòngzi) to honour poet `屈原` (Qū Yuán).",
        "Missing item: `粽子` (zòngzi).",
      ],
      commonError: "Confusing `粽子` (zòngzi — bamboo-leaf rice dumplings) with `饺子` (jiǎozi — Spring Festival dumplings).",
    },
    {
      id: "exam-3-q07",
      kind: "mcq",
      topicId: "chinese-festivals",
      guideRef: "dragon-boat-lantern",
      difficulty: "core",
      question:
        "Which pairing correctly matches the famous **cultural figure** to each Chinese festival?",
      options: [
        "嫦娥 (Cháng'é) for Dragon Boat Festival, and 屈原 (Qū Yuán) for Mid-Autumn Festival",
        "屈原 (Qū Yuán) for Dragon Boat Festival, and 嫦娥 (Cháng'é) for Mid-Autumn Festival",
        "屈原 (Qū Yuán) for Spring Festival, and 嫦娥 (Cháng'é) for Lantern Festival",
        "屈原 (Qū Yuán) for Lantern Festival, and 嫦娥 (Cháng'é) for Spring Festival",
      ],
      answerIndex: 1,
      hints: [
        "One figure was a patriotic poet remembered by racing boats and tossing rice into the river.",
        "The other figure flew to the moon (`奔月`) in the Mid-Autumn legend.",
      ],
      explanation:
        "The patriotic poet `屈原` (Qū Yuán) is commemorated at the Dragon Boat Festival (`端午节`), while the moon goddess legend of `嫦娥` (Cháng'é) belongs to the Mid-Autumn Festival (`中秋节`).",
    },
    {
      id: "exam-3-q08",
      kind: "short",
      topicId: "chinese-festivals",
      guideRef: "mid-autumn-festival",
      difficulty: "core",
      question:
        "At Mid-Autumn Festival, the round full moon symbolises **family reunion**. Type the two-character Mandarin word (Simplified Hanzi or tone-marked Pinyin) that completes:\n\n**「圆圆的月亮象征着全家___。」**",
      answer: {
        type: "text",
        accept: ["团圆", "tuányuán"],
        display: "团圆 (tuányuán)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["好运", "hǎoyùn"] },
          feedback: "`好运` (hǎoyùn) means good luck (often linked to red envelopes/couplets), whereas the round moon symbolises reunion (`团圆`).",
        },
        {
          spec: { type: "text", accept: ["快乐", "kuàilè"] },
          feedback: "`快乐` means happy/joyful, not family reunion (`团圆`).",
        },
      ],
      hints: [
        "Notice the round enclosure radical `囗` in both characters — literally 'round together'!",
        "Both syllables are in the 2nd tone: `tuányuán`.",
      ],
      solution: [
        "`团圆` (tuányuán) means family reunion — both characters visually echo the shape of the full moon (`圆圆的月亮`).",
        "Complete sentence: `圆圆的月亮象征着全家团圆。`",
      ],
      commonError: "Writing `见面` (to meet) instead of the cultural term `团圆` (family reunion).",
    },
    {
      id: "exam-3-q09",
      kind: "mcq",
      topicId: "igcse-bridge-grammar",
      guideRef: "stpvo-tenses-aspect",
      difficulty: "core",
      question:
        "Which Mandarin sentence correctly expresses an **ongoing action happening right now** (*'My younger sister is currently reading in the study'*)?",
      options: [
        "我妹妹正在书房里看书呢。",
        "我妹妹在书房里看过书了。",
        "我妹妹打算在书房里看书。",
        "我妹妹去年在书房里看书。",
      ],
      answerIndex: 0,
      hints: [
        "Look for the continuous/ongoing frame `正在 + [Place] + Verb + Object + 呢`.",
        "`过` signals past experience and `打算` signals future plans.",
      ],
      explanation:
        "`正在…呢` (zhèngzài...ne) marks an action in progress right now: `我妹妹正在书房里看书呢。` (Wǒ mèimei zhèngzài shūfáng lǐ kànshū ne.). Note how `正在` precedes the place `书房里` cleanly.",
    },
    {
      id: "exam-3-q10",
      kind: "short",
      topicId: "chinese-festivals",
      guideRef: "dragon-boat-lantern",
      difficulty: "core",
      question:
        "On **元宵节** (`正月十五` — Lantern Festival), families admire lanterns (`看花灯`), guess riddles (`猜灯谜`), and eat sweet glutinous rice balls in warm syrup. Type the Mandarin name of this food (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["汤圆", "元宵", "tāngyuán", "yuánxiāo"],
        display: "汤圆 (tāngyuán)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["年糕", "niángāo"] },
          feedback: "`年糕` (niángāo — New Year rice cake) is eaten at Spring Festival (`春节`), not the Lantern Festival.",
        },
        {
          spec: { type: "text", accept: ["月饼", "yuèbǐng"] },
          feedback: "`月饼` (mooncakes) are eaten at Mid-Autumn Festival (`中秋节`), not the Lantern Festival.",
        },
      ],
      hints: [
        "Literally 'soup-round' (`汤` + `圆`) — their round shape also represents `团圆` (reunion)!",
        "1st tone + 2nd tone: `tāngyuán` (or `元宵` yuánxiāo).",
      ],
      solution: [
        "At the Lantern Festival (`元宵节`, lunar 1/15), families eat `汤圆` (tāngyuán — southern China & Singapore) or `元宵` (yuánxiāo — northern China).",
        "Eating round `汤圆` marks the reunion close of the 15-day Spring Festival season.",
      ],
      commonError: "Writing `饺子` or `年糕` instead of `汤圆` / `元宵` for the Lantern Festival.",
    },
    {
      id: "exam-3-q11",
      kind: "mcq",
      topicId: "igcse-bridge-grammar",
      guideRef: "stpvo-tenses-aspect",
      difficulty: "core",
      diagram: STPVO_BLUEPRINT_SVG,
      question:
        "Use the STPVO blueprint (`STPVO 汉语句序蓝图`) to choose the **only grammatically natural** Mandarin sentence meaning *'Last Spring Festival I watched lion dances in Chinatown'*:",
      options: [
        "我看了舞狮在牛车水去年春节。",
        "我在牛车水去年春节看了舞狮。",
        "我去年春节在牛车水看了舞狮。",
        "我去年春节看了舞狮在牛车水。",
      ],
      answerIndex: 2,
      hints: [
        "Trace the five blocks left to right: **S** (`我`) → **T** (`去年春节`) → **P** (`在牛车水`) → **V+Aspect** (`看了`) → **O** (`舞狮`).",
        "Time (`去年春节`) MUST come before Place (`在牛车水`), and BOTH come before the verb (`看了`)!",
      ],
      explanation:
        "Following **S + T + P + V + O** gives `我去年春节在牛车水看了舞狮。` (Wǒ qùnián Chūnjié zài Niúchēshuǐ kànle wǔshī.). Putting `在牛车水` after `看了舞狮` or placing Place before Time violates standard Mandarin word order.",
    },
    {
      id: "exam-3-q12",
      kind: "short",
      topicId: "igcse-bridge-grammar",
      guideRef: "stpvo-tenses-aspect",
      difficulty: "core",
      question:
        "Complete this future-plan sentence meaning *'This summer holiday, I **plan** to travel to Beijing with my family'*:\n\n**「今年暑假，我___和家人去北京旅游。」**\n\nType the two-character Mandarin verb (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["打算", "准备", "dǎsuàn", "dǎsuan", "zhǔnbèi"],
        display: "打算 (dǎsuàn)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["正在", "zhèngzài"] },
          feedback: "`正在` marks an ongoing action right now, not a future plan for the summer holiday.",
        },
        {
          spec: { type: "text", accept: ["已经", "yǐjīng"] },
          feedback: "`已经` means 'already' (completed past), not a future intention.",
        },
      ],
      hints: [
        "Think of the high-frequency IGCSE future marker meaning 'to plan / intend' (`dǎsuàn`).",
        "3rd tone + 4th tone: `dǎsuàn` (or `准备` zhǔnbèi).",
      ],
      solution: [
        "Using `打算` (dǎsuàn — plan to) before a verb cleanly ticks the IGCSE future time frame.",
        "Complete sentence: `今年暑假，我打算和家人去北京旅游。`",
      ],
      commonError: "Using `了` in a future sentence or omitting a future verb like `打算` / `会` / `将来想`.",
    },
    {
      id: "exam-3-q13",
      kind: "mcq",
      topicId: "relatives-family",
      guideRef: "visiting-relatives",
      difficulty: "core",
      question:
        "Cross-topic festival reading:\n\n**「除夕晚上，我们全家去外公外婆家吃年夜饭，表哥和表妹也从马来西亚回来了，大家一起发红包、看春节晚会。」**\n\nWho travelled back from Malaysia for the reunion dinner?",
      options: [
        "The paternal uncle and paternal aunt from Beijing",
        "The older male cousin and younger female cousin (`表` side)",
        "The maternal grandfather and maternal grandmother",
        "The father's brother's son and daughter (`堂` side)",
      ],
      answerIndex: 1,
      hints: [
        "Look closely at `表哥和表妹` (biǎogē hé biǎomèi).",
        "Remember `表` is for mother's-side or father's-sister's cousins; `哥` = older male, `妹` = younger female.",
      ],
      explanation:
        "`表哥` (biǎogē) is an older male cousin and `表妹` (biǎomèi) is a younger female cousin on the `表` side (here visiting maternal grandparents `外公外婆`), who came back from Malaysia (`从马来西亚回来了`).",
    },
    {
      id: "exam-3-q14",
      kind: "short",
      topicId: "igcse-bridge-grammar",
      guideRef: "igcse-connectives-writing",
      difficulty: "core",
      question:
        "Complete this IGCSE conditional sentence meaning *'**If** it does not rain tomorrow, we **will** go to the park'*:\n\n**「___明天不下雨，我们___去公园。」**\n\nType the **two Mandarin connective words** separated by a space (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["如果 就", "如果就", "rúguǒ jiù", "rúguǒjiù"],
        display: "如果…就 (rúguǒ…jiù)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["虽然 但是", "虽然但是", "suīrán dànshì"] },
          feedback: "`虽然…但是…` means 'although ... but ...' (concession), not 'if ... then ...' (condition).",
        },
        {
          spec: { type: "text", accept: ["因为 所以", "因为所以", "yīnwèi suǒyǐ"] },
          feedback: "`因为…所以…` means 'because ... therefore ...' (cause and effect), not 'if ... then ...'.",
        },
      ],
      hints: [
        "The first word is two characters meaning 'if' (`rúguǒ`); the second is one character meaning 'then' (`jiù`).",
        "Notice `就` always goes AFTER the subject (`我们`) of the second clause!",
      ],
      solution: [
        "The conditional structure is `如果…, [Subject] + 就…` (rúguǒ..., ...jiù...).",
        "Complete sentence: `如果明天不下雨，我们就去公园。`",
      ],
      commonError: "Placing `就` before the subject (`就我们去公园`) instead of directly before the verb (`我们就去公园`).",
    },
    {
      id: "exam-3-q15",
      kind: "mcq",
      topicId: "neighbourhood",
      guideRef: "distance-li-transport",
      difficulty: "core",
      question:
        "Cross-topic reading:\n\n**「从我家坐地铁去牛车水看花灯只要十五分钟，非常方便；不过春节前夕那里比平时热闹得多。」**\n\nWhat does the writer say about going to Chinatown (`牛车水`) before Spring Festival?",
      options: [
        "It takes fifty minutes by bus and feels quiet and empty.",
        "The MRT station is far from home, making travel inconvenient.",
        "Chinatown is less crowded before Spring Festival than on normal days.",
        "It takes only fifteen minutes by MRT, though it is much livelier than usual.",
      ],
      answerIndex: 3,
      hints: [
        "Check `坐地铁…只要十五分钟` (takes only 15 minutes by MRT) and `非常方便` (very convenient).",
        "`比平时热闹得多` = much livelier/busier than usual.",
      ],
      explanation:
        "The writer notes taking the MRT (`坐地铁`) takes just 15 minutes (`只要十五分钟`) and is very convenient (`非常方便`), while before Spring Festival Chinatown is much livelier than usual (`比平时热闹得多`).",
    },
    {
      id: "exam-3-q16",
      kind: "short",
      topicId: "igcse-bridge-grammar",
      guideRef: "igcse-routine-hobbies",
      difficulty: "core",
      diagram: WEEKEND_CLOCK_SVG,
      question:
        "Look at the **19:00** row of the weekend routine (`周末作息时间表`). Type the **repeated two-character Mandarin connective** (Simplified Hanzi or tone-marked Pinyin) that fills both blanks to express doing two actions **at the same time** (`___听音乐___画画儿`).",
      answer: {
        type: "text",
        accept: ["一边", "yìbiān", "yībiān"],
        display: "一边 (yìbiān)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["又", "yòu"] },
          feedback: "`又…又…` links two adjectives (`又大又明亮`), whereas two simultaneous ACTIONS take `一边…一边…`!",
        },
        {
          spec: { type: "text", accept: ["先", "xiān"] },
          feedback: "`先…然后…` sequences actions one AFTER another, not at the exact same time.",
        },
      ],
      hints: [
        "Literally 'one side ... one side ...' — used when one person performs two actions simultaneously.",
        "Its tone-marked Pinyin is `yìbiān` (or citation `yībiān`).",
      ],
      solution: [
        "Simultaneous actions use `一边 + Action 1 + 一边 + Action 2` (yìbiān...yìbiān...).",
        "Complete sentence: `我一边听音乐，一边画画儿。`",
      ],
      commonError: "Using `又…又…` for verbs like `听音乐` and `画画儿` instead of `一边…一边…`.",
    },
    {
      id: "exam-3-q17",
      kind: "mcq",
      topicId: "chinese-festivals",
      guideRef: "festival-comparisons-writing",
      difficulty: "challenge",
      question:
        "Read the student's cultural comparison:\n\n**「我觉得中秋节跟春节一样重要，因为两个节日都象征着家庭团圆；不过我更喜欢春节，因为可以收到长辈给的红包。」**\n\nWhy does the student prefer **Spring Festival**?",
      options: [
        "Because Mid-Autumn Festival does not symbolise family reunion.",
        "Because they can receive red packets from older family members.",
        "Because they can race dragon boats and eat sticky rice dumplings.",
        "Because Spring Festival lasts for only one quiet evening at home.",
      ],
      answerIndex: 1,
      hints: [
        "Focus on the final clause after `不过我更喜欢春节，因为…`.",
        "Decode `收到` (receive), `长辈` (elders / older relatives), and `红包` (red packets).",
      ],
      explanation:
        "While the student believes both festivals are equally important (`一样重要`) for family reunion (`家庭团圆`), they prefer `春节` because they can receive red packets from elders (`可以收到长辈给的红包`).",
    },
    {
      id: "exam-3-q18",
      kind: "short",
      topicId: "igcse-bridge-grammar",
      guideRef: "igcse-routine-hobbies",
      difficulty: "challenge",
      question:
        "Complete this IGCSE routine sentence meaning *'I complete my homework carefully every day and am **never** late'*:\n\n**「我每天都很认真地完成作业，___迟到。」**\n\nType the Mandarin frequency phrase meaning **never** (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["从来不", "从不", "cónglái bù", "cóngláibù", "cóngbù", "cóng bù"],
        display: "从来不 (cónglái bù)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["偶尔", "ǒu'ěr", "ǒuěr"] },
          feedback: "`偶尔` (ǒu'ěr) means 'occasionally / once in a while', not 'never'.",
        },
        {
          spec: { type: "text", accept: ["经常", "jīngcháng"] },
          feedback: "`经常` (jīngcháng) means 'often', the opposite of 'never'!",
        },
      ],
      hints: [
        "It pairs `从来` (ever since / always) with the negative `不` (for habits).",
        "Tone-marked Pinyin: `cónglái bù` (short form `从不` cóngbù is also accepted).",
      ],
      solution: [
        "'Never' for present habits is `从来不` (cónglái bù) or `从不` (cóngbù); for past experience ('have never done') it is `从来没…过`.",
        "Complete sentence: `我每天都很认真地完成作业，从来不迟到。`",
      ],
      commonError: "Writing `不从来` instead of `从来不` (the negative `不` always comes AFTER `从来`).",
    },
    {
      id: "exam-3-q19",
      kind: "mcq",
      topicId: "house-furniture",
      guideRef: "position-words-you-zai",
      difficulty: "challenge",
      question:
        "Cross-topic home & festival reading:\n\n**「春节前，爸爸在大门两边贴了红色的春联，客厅的沙发后面挂着一幅中国画，阳台外面还挂着两个大红灯笼。」**\n\nWhere are the **two big red lanterns** hanging?",
      options: [
        "On both sides of the main entrance doorway",
        "Behind the sofa in the living room",
        "Inside the bedroom beside the bookshelf",
        "Outside the balcony",
      ],
      answerIndex: 3,
      hints: [
        "Scan for `两个大红灯笼` (two big red lanterns) in the last clause.",
        "Translate `阳台外面` (yángtái wàimian).",
      ],
      explanation:
        "`阳台` (yángtái) means balcony and `外面` (wàimian) means outside, so `阳台外面还挂着两个大红灯笼` means two big red lanterns hang outside the balcony. The couplets are on both sides of the front door (`大门两边`), and the Chinese painting is behind the sofa (`沙发后面`).",
    },
    {
      id: "exam-3-q20",
      kind: "short",
      topicId: "chinese-festivals",
      guideRef: "festival-comparisons-writing",
      difficulty: "challenge",
      question:
        "Complete this high-band cultural sentence meaning *'In Chinese culture, the colour red **symbolises** good luck and happiness'*:\n\n**「在中国文化里，红色___好运和幸福。」**\n\nType the two-character Mandarin verb (Simplified Hanzi or tone-marked Pinyin) meaning **to symbolise**.",
      answer: {
        type: "text",
        accept: ["象征", "代表", "xiàngzhēng", "dàibiǎo"],
        display: "象征 (xiàngzhēng)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["觉得", "juéde"] },
          feedback: "`觉得` means 'to think / feel', not 'to symbolise'.",
        },
        {
          spec: { type: "text", accept: ["喜欢", "xǐhuan"] },
          feedback: "`喜欢` means 'to like'; here you need the cultural verb 'to symbolise / represent' (`象征`).",
        },
      ],
      hints: [
        "4th tone + 1st tone (`xiàngzhēng`), commonly used before `好运` (good luck) and `团圆` (reunion).",
        "`代表` (dàibiǎo — represent) is also accepted.",
      ],
      solution: [
        "`象征` (xiàngzhēng — symbolise) elevates cultural essays immediately (`红色象征好运`, `月亮象征团圆`).",
        "Complete sentence: `在中国文化里，红色象征好运和幸福。`",
      ],
      commonError: "Using plain `是` (`红色是好运`) instead of the accurate cultural verb `象征` (or `代表`).",
    },
    {
      id: "exam-3-q21",
      kind: "short",
      topicId: "pets",
      guideRef: "describing-pets",
      difficulty: "challenge",
      question:
        "Cross-topic accuracy check: Complete the sentence with the exact animal measure word (Simplified Hanzi or tone-marked Pinyin):\n\n**「我家里有两___非常活泼的小猫，它们都喜欢在客厅的沙发上睡觉。」**",
      answer: {
        type: "text",
        accept: ["只", "zhī"],
        display: "只 (zhī)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["条", "tiáo"] },
          feedback: "`条` (tiáo) is for fish and snakes (`一条金鱼`), whereas cats and dogs take `只` (zhī).",
        },
        {
          spec: { type: "text", accept: ["个", "gè", "ge"] },
          feedback: "Avoid generic `个` — cats, dogs, rabbits, birds, and tortoises all take `只` (zhī).",
        },
      ],
      hints: [
        "Notice `两` (liǎng, used before a measure word) + [animal MW] + `小猫`.",
        "1st tone: `zhī`.",
      ],
      solution: [
        "Small land animals like cats (`小猫`), dogs (`小狗`), and rabbits (`兔子`) take `只` (zhī).",
        "Also notice the number 2 before a measure word is ALWAYS `两` (`两只小猫`), never `二只`!",
      ],
      commonError: "Using `个` or `条` for cats, or writing `二只` instead of `两只`.",
    },
    {
      id: "exam-3-q22",
      kind: "written",
      topicId: "chinese-festivals",
      guideRef: "spring-festival",
      difficulty: "core",
      marks: 3,
      question:
        "Write **3 sentences in Simplified Chinese** (with tone-marked Pinyin) describing how a family celebrates **Lunar New Year** in Singapore, covering all three prompts:\n\n1. Mention gathering on **New Year's Eve** to eat the **reunion dinner**.\n2. Describe **two traditional customs** (such as pasting doorway couplets, receiving red packets, eating dumplings/rice cakes, or watching lion dances).\n3. End with a traditional **four-character festive wish**.",
      modelAnswer:
        "除夕晚上，我们全家人一起吃丰盛的年夜饭。春节的时候，我们在门边贴春联，孩子还能收到长辈发的红包，我们还会去牛车水看舞狮。祝大家新年快乐，恭喜发财！\n\n(Chúxī wǎnshang, wǒmen quánjiārén yìqǐ chī fēngshèng de niányèfàn. Chūnjié de shíhou, wǒmen zài ménbiān tiē chūnlián, háizi hái néng shōudào zhǎngbèi fā de hóngbāo, wǒmen hái huì qù Niúchēshuǐ kàn wǔshī. Zhù dàjiā xīnnián kuàilè, gōngxǐ fācái!)",
      markScheme: [
        {
          point: "Mentions New Year's Eve (`除夕`) and the reunion dinner (`年夜饭`).",
          keywords: ["除夕", "chúxī", "年夜饭", "niányèfàn"],
        },
        {
          point: "Includes traditional Spring Festival customs (`贴春联`, `红包`, `舞狮`, `饺子`, or `年糕`).",
          keywords: ["红包", "hóngbāo", "春联", "chūnlián", "舞狮", "饺子", "年糕"],
        },
        {
          point: "Closes with a four-character greeting (`新年快乐` or `恭喜发财`).",
          keywords: ["新年快乐", "xīnnián kuàilè", "恭喜发财", "gōngxǐ fācái"],
        },
      ],
      hints: [
        "New Year's Eve = `除夕` (Chúxī); reunion dinner = `年夜饭` (niányèfàn).",
        "Core customs: `贴春联` (tiē chūnlián), `发红包` (fā hóngbāo), `看舞龙舞狮` (kàn wǔlóng wǔshī).",
        "Classic greetings: `新年快乐` (xīnnián kuàilè) and `恭喜发财` (gōngxǐ fācái).",
      ],
      commonError: "Confusing `除夕` (New Year's Eve) with `正月初一` (New Year's Day), or mixing in Mid-Autumn foods like `月饼`.",
    },
    {
      id: "exam-3-q23",
      kind: "written",
      topicId: "chinese-festivals",
      guideRef: "festival-comparisons-writing",
      difficulty: "core",
      marks: 3,
      question:
        "Write **3 sentences in Simplified Chinese** (with tone-marked Pinyin) comparing **Mid-Autumn Festival** and **Dragon Boat Festival**, covering all three points:\n\n1. Mention **Mid-Autumn** (`八月十五`), one activity (admiring the moon, eating mooncakes, or carrying lanterns), and its **reunion** symbolism.\n2. Mention **Dragon Boat** (`五月初五`) and one custom (racing dragon boats or eating bamboo-leaf rice dumplings).\n3. State **which festival you prefer** and explain **why**.",
      modelAnswer:
        "中秋节的时候，我们一边吃月饼一边赏月，圆月象征着家庭团圆。端午节的时候，很多人去看划龙舟、吃粽子，纪念诗人屈原。我更喜欢中秋节，因为提灯笼非常有趣，而且月饼很好吃。\n\n(Zhōngqiūjié de shíhou, wǒmen yìbiān chī yuèbǐng yìbiān shǎngyuè, yuányuè xiàngzhēngzhe jiātíng tuányuán. Duānwǔjié de shíhou, hěn duō rén qù kàn huá lóngzhōu, chī zòngzi, jìniàn shīrén Qū Yuán. Wǒ gèng xǐhuan Zhōngqiūjié, yīnwèi tí dēnglóng fēicháng yǒuqù, érqiě yuèbǐng hěn hǎochī.)",
      markScheme: [
        {
          point: "Describes `中秋节` with an accurate activity (`赏月` / `月饼` / `提灯笼`) and `团圆` symbolism.",
          keywords: ["中秋节", "zhōngqiūjié", "赏月", "月饼", "团圆", "tuányuán"],
        },
        {
          point: "Describes `端午节` with an accurate custom (`划龙舟` / `粽子` / `屈原`).",
          keywords: ["端午节", "duānwǔjié", "划龙舟", "粽子", "zòngzi"],
        },
        {
          point: "States a clear personal preference (`更喜欢` / `最喜欢`) backed by a reason (`因为`).",
          keywords: ["更喜欢", "最喜欢", "因为", "yīnwèi"],
        },
      ],
      hints: [
        "Mid-Autumn vocabulary: `中秋节`, `赏月`, `吃月饼`, `提灯笼`, `象征团圆`.",
        "Dragon Boat vocabulary: `端午节`, `划龙舟`, `吃粽子`, `屈原`.",
        "Preference sentence: `我更喜欢…, 因为…` (Wǒ gèng xǐhuan..., yīnwèi...).",
      ],
      commonError: "Swapping `粽子` and `月饼` between the two festivals.",
    },
    {
      id: "exam-3-q24",
      kind: "written",
      topicId: "igcse-bridge-grammar",
      guideRef: "igcse-connectives-writing",
      difficulty: "challenge",
      marks: 4,
      question:
        "Write a **4-sentence IGCSE 0547 multi-tense paragraph** in Simplified Chinese (with tone-marked Pinyin) covering all four bullets:\n\n1. **Completed past**: State one activity you completed **last weekend** using the completed-action particle.\n2. **Past experience**: Name a city or cultural event you **have visited before** using the experiential particle.\n3. **Present hobby**: Describe a hobby using the paired connective **not only ... moreover ...**.\n4. **Future plan**: State what you **plan** to do in the upcoming holiday.",
      modelAnswer:
        "上周末我和朋友在购物中心看了电影，还吃了晚饭。我以前去过上海，也参加过龙舟比赛。我平时经常弹钢琴，因为音乐不但让人放松，而且很有趣。下个暑假，我打算和家人去日本旅游。\n\n(Shàng zhōumò wǒ hé péngyou zài gòuwù zhōngxīn kànle diànyǐng, hái chīle wǎnfàn. Wǒ yǐqián qùguo Shànghǎi, yě cānjiāguo lóngzhōu bǐsài. Wǒ píngshí jīngcháng tán gāngqín, yīnwèi yīnyuè búdàn ràng rén fàngsōng, érqiě hěn yǒuqù. Xià gè shǔjià, wǒ dǎsuàn hé jiārén qù Rìběn lǚyóu.)",
      markScheme: [
        {
          point: "Uses a past time phrase (`上周末` / `昨天` / `去年`) with completed-action `了` (`看了` / `去了` / `吃了`).",
          keywords: ["上周末", "shàng zhōumò", "看了", "去了", "吃了", "买了"],
        },
        {
          point: "Uses experiential `过` directly after a verb (`去过` / `看过` / `吃过` / `参加过`).",
          keywords: ["去过", "qùguo", "qùguò", "看过", "吃过", "参加过"],
        },
        {
          point: "Uses the high-band paired connective `不但…而且…` accurately.",
          keywords: ["不但", "búdàn", "而且", "érqiě"],
        },
        {
          point: "Expresses a clear future intention using `打算` (or `准备` / `将来想`).",
          keywords: ["打算", "dǎsuàn", "准备", "将来想", "暑假"],
        },
      ],
      hints: [
        "Completed past: `上周末我去了… / 看了…` (STPVO order!).",
        "Past experience: `我以前去过…` (no `了` needed after `过`!).",
        "Paired connective: `不但…, 而且…`; Future marker: `下个暑假，我打算…`.",
      ],
      commonError: "Forgetting to cover all three time frames (past, present, future) — a key IGCSE 0547 band-descriptor requirement.",
    },
    {
      id: "exam-3-q25",
      kind: "written",
      topicId: "school-subjects-facilities",
      guideRef: "comparing-subjects-teachers",
      difficulty: "challenge",
      marks: 4,
      question:
        "Cross-topic IGCSE email reply! Write **4 sentences in Simplified Chinese** (with tone-marked Pinyin) to a pen pal in Beijing covering all four notes:\n\n1. Introduce your **age** and state that you **live in Singapore**.\n2. Name **one campus facility** you often use (library, science laboratory, or swimming pool).\n3. Name your **favourite subject**, compare it with another subject, and explain **why**.\n4. Invite your pen pal to visit during **Lunar New Year** or **Mid-Autumn** next year.",
      modelAnswer:
        "你好！我今年十四岁，和家人住在新加坡。在学校，我经常去科学实验室做实验，也喜欢去图书馆看书。我最喜欢的科目是中文，我觉得中文比历史有趣，因为学会中文很有用。欢迎你明年春节来新加坡看望我！\n\n(Nǐ hǎo! Wǒ jīnnián shísì suì, hé jiārén zhù zài Xīnjiāpō. Zài xuéxiào, wǒ jīngcháng qù kēxué shíyànshì zuò shíyàn, yě xǐhuan qù túshūguǎn kànshū. Wǒ zuì xǐhuan de kēmù shì Zhōngwén, wǒ juéde Zhōngwén bǐ lìshǐ yǒuqù, yīnwèi xuéhuì Zhōngwén hěn yǒuyòng. Huānyíng nǐ míngnián Chūnjié lái Xīnjiāpō kànwàng wǒ!)",
      markScheme: [
        {
          point: "Gives age (`岁`) and living in Singapore (`住在新加坡`).",
          keywords: ["住在新加坡", "新加坡", "xīnjiāpō", "十四岁", "十三岁"],
        },
        {
          point: "Mentions a real campus facility (`图书馆`, `科学实验室`, `游泳池`, or `体育馆`).",
          keywords: ["图书馆", "túshūguǎn", "实验室", "shíyànshì", "游泳池", "体育馆"],
        },
        {
          point: "Names favourite subject (`最喜欢`) with a `比` comparison and `因为` reason.",
          keywords: ["最喜欢", "zuì xǐhuan", "比", "因为", "yīnwèi"],
        },
        {
          point: "Extends a festival invitation for next year (`欢迎` + `明年` + `春节` / `中秋节`).",
          keywords: ["欢迎", "huānyíng", "明年", "míngnián", "春节", "中秋节"],
        },
      ],
      hints: [
        "Age & city: `我今年十四岁，住在新加坡。` (Wǒ jīnnián shísì suì, zhù zài Xīnjiāpō.)",
        "Facilities: `科学实验室` (science lab), `图书馆` (library), `游泳池` (swimming pool).",
        "Invitation: `欢迎你明年春节来新加坡玩儿！` (Huānyíng nǐ míngnián Chūnjié lái Xīnjiāpō wánr!)",
      ],
      commonError: "Writing `我是十四岁` (never put `是` before age in Mandarin — write `我十四岁`!).",
    },
  ],
};
