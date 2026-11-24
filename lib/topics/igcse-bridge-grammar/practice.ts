import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "igcse-bridge-grammar-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "igcse-self-intro-family-pets",
      question:
        "Complete the household-size sentence with ONE exact classifier: `我家有五___人。` (Type Simplified Hanzi or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: ["口", "kǒu"],
        display: "口 (kǒu)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["只", "zhī"] },
          feedback: "只 is for small animals like cats and dogs! Household members take 口 (kǒu).",
        },
      ],
      hints: ["This 3-stroke character literally means 'mouth' (kǒu) and counts family members in a household."],
      solution: ["我家有五口人 (Wǒ jiā yǒu wǔ kǒu rén) — use classifier 口 (kǒu) for household members."],
    },
    {
      id: "igcse-bridge-grammar-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "igcse-self-intro-family-pets",
      question: "How do you say **'I am 14 years old this year'** naturally without a classic English error?",
      options: [
        "我是今年十四岁。",
        "我今年十四岁。",
        "今年我是十四岁。",
        "我十四是岁今年。",
      ],
      answerIndex: 1,
      explanation:
        "Mandarin drops `是` directly before an age: `我今年十四岁` (Wǒ jīnnián shísì suì). Never write `*我是十四岁*`.",
      hints: ["Age predicates in Chinese do NOT take the verb 是 (shì)."],
    },
    {
      id: "igcse-bridge-grammar-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "igcse-routine-hobbies",
      question:
        "Fill the exact verb for playing basketball (`___篮球`), tennis (`___网球`), and badminton (`___羽毛球`). (Type 1 Simplified character or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: ["打", "dǎ"],
        display: "打 (dǎ)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["踢", "tī"] },
          feedback: "踢 (tī) is for kicking football (踢足球); hand/racket sports take 打 (dǎ).",
        },
        {
          spec: { type: "text", accept: ["玩", "wán"] },
          feedback: "Never use 玩 for sports! Hand and racket sports take 打 (dǎ).",
        },
      ],
      hints: ["Hand and racket sports share this single verb with hand radical 扌."],
      solution: ["打篮球, 打网球, 打羽毛球 — all take 打 (dǎ)."],
    },
    {
      id: "igcse-bridge-grammar-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "igcse-routine-hobbies",
      question:
        "Fill the missing middle sequencing word ('then / afterwards'): `早上我先刷牙，___吃早饭，最后坐校车上学。` (Type Simplified Hanzi or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: ["然后", "ránhòu", "接着", "jiēzhe"],
        display: "然后 (ránhòu)",
      },
      hints: [
        "Recall the 3-step sequence ladder: 先…，___…，最后….",
        "2-character word pronounced ránhòu.",
      ],
      solution: ["先…，然后…，最后… = first…, then…, finally…."],
    },
    {
      id: "igcse-bridge-grammar-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "stpvo-tenses-aspect",
      question: "Which sentence puts Subject, Time, Place, Verb, and Object in natural **STPVO** order?",
      options: [
        "我昨天在书房做了一个小时的作业。",
        "我做了一个小时的作业在书房昨天。",
        "我在书房昨天做了一个小时的作业。",
        "我昨天做了一个小时的作业在书房。",
      ],
      answerIndex: 0,
      explanation:
        "`我昨天在书房做了一个小时的作业` places Subject (`我`) → Time (`昨天`) → Place (`在书房`) → Verb + Object (`做了一个小时的作业`) cleanly before the verb.",
      hints: [
        "Check both Time (昨天) and Place (在书房): BOTH must sit BEFORE 做了!",
        "Time comes before Place inside STPVO.",
      ],
    },
    {
      id: "igcse-bridge-grammar-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "stpvo-tenses-aspect",
      question:
        "Fill the ongoing-action marker meaning **'right now (-ing)'**: `别打扰爸爸，他___书房里开会呢！` (Type Simplified Hanzi or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: ["正在", "zhèngzài", "在", "zài"],
        display: "正在 (zhèngzài)",
      },
      hints: [
        "Notice sentence-final 呢 signalling an action in progress right now.",
        "2-character marker zhèngzài (or single character zài).",
      ],
      solution: ["正在 + Verb (+ 呢) expresses an action happening right now: 他正在书房里开会呢！"],
    },
    {
      id: "igcse-bridge-grammar-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "stpvo-tenses-aspect",
      question:
        "Negate `昨天我看了那部电影` by typing the exact 2-character verb phrase for **'didn't watch'** (remember the `没` + `了` rule!). (Type Simplified Hanzi or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: ["没看", "没有看", "méi kàn", "méiyǒu kàn", "méikàn"],
        display: "没看 (méi kàn)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["没看了", "méi kànle"] },
          feedback: "Remember: 没 kicks 了 OUT! Write 没看, never *没看了*.",
        },
        {
          spec: { type: "text", accept: ["不看", "bù kàn", "不看了"] },
          feedback: "Completed past events take 没(有), never 不!",
        },
      ],
      hints: [
        "Past actions are negated with 没(有).",
        "Drop 了 when 没 enters the sentence!",
      ],
      solution: ["昨天我没看那部电影。(没看 méi kàn — 了 is dropped.)"],
    },
    {
      id: "igcse-bridge-grammar-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "igcse-connectives-writing",
      question: "Complete the paired connective: `虽然每天坐校车要四十分钟，___我可以在车上看书。`",
      options: [
        "所以 (suǒyǐ)",
        "而且 (érqiě)",
        "但是 (dànshì)",
        "因为 (yīnwèi)",
      ],
      answerIndex: 2,
      explanation:
        "`虽然` (although) always pairs with `但是` (but/yet): `虽然每天坐校车要四十分钟，但是我可以在车上看书`. Never cross-wire `虽然` with `所以`.",
      hints: [
        "Match 虽然 (suīrán) with its exact contrast partner.",
        "The second clause gives a positive contrast to the 40-minute ride.",
      ],
    },
    {
      id: "igcse-bridge-grammar-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "igcse-connectives-writing",
      question:
        "Complete the conditional pair with ONE character (placed AFTER the subject `我们`): `如果周末天气好，我们___去东海岸骑自行车。` (Type Simplified Hanzi or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: ["就", "jiù"],
        display: "就 (jiù)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["所以", "suǒyǐ"] },
          feedback: "所以 pairs with 因为; 如果 (if) pairs with Subject + 就 (then)!",
        },
      ],
      hints: [
        "Recall the conditional pair: 如果…，Subject + ___….",
        "1-character adverb pronounced jiù (4th tone).",
      ],
      solution: ["如果…，Subject + 就… → 如果周末天气好，我们就去东海岸骑自行车。"],
    },
    {
      id: "igcse-bridge-grammar-quiz-q10",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "igcse-connectives-writing",
      question: "Which sentence correctly expresses BOTH duration AND a paired connective?",
      options: [
        "虽然我昨天弹钢琴一个小时，但是我很开心。",
        "虽然我昨天弹钢琴弹了一个小时，所以我不累。",
        "因为我昨天弹钢琴弹了一个小时，所以我进步了不少。",
        "因为我昨天弹了钢琴一个小时，所以我进步了不少。",
      ],
      answerIndex: 2,
      explanation:
        "`因为我昨天弹钢琴弹了一个小时，所以我进步了不少` uses BOTH the verb-copy duration (`弹钢琴弹了一个小时`) AND the intact `因为…，所以…` connective pair!",
      hints: [
        "Check TWO things in every option: verb-copy duration (弹钢琴弹了一个小时) AND an accurate connective pair.",
        "Eliminate *虽然…所以…* and any option missing the repeated verb 弹.",
      ],
    },
  ],
  papers: [
    {
      id: "igcse-bridge-grammar-p1",
      title: "Practice Paper 1 — Self-Intro, Routine, Hobbies & STPVO",
      questions: [
        {
          id: "igcse-bridge-grammar-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "igcse-self-intro-family-pets",
          question:
            "Write the 1-character verb meaning **'to keep / raise (a pet)'** in `我家___了一只小狗。` (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["养", "yǎng"],
            display: "养 (yǎng)",
          },
          hints: ["This 3rd-tone verb (yǎng) is always paired with 宠物 (chǒngwù)."],
          solution: ["养宠物 (yǎng chǒngwù) → 我家养了一只小狗。"],
        },
        {
          id: "igcse-bridge-grammar-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "igcse-self-intro-family-pets",
          question:
            "Write **'two cute rabbits'** in Simplified Chinese (applying the `两` rule and exact animal classifier). (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: [
              "两只可爱的兔子",
              "两只兔子",
              "liǎng zhī kě'ài de tùzi",
              "liǎng zhī tùzi",
            ],
            display: "两只可爱的兔子 (liǎng zhī kě'ài de tùzi)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["二只可爱的兔子", "二只兔子"] },
              feedback: "Remember: 2 before a classifier is ALWAYS 两 (liǎng), never 二!",
            },
          ],
          hints: ["Use 两 (2) + 只 (small animal classifier) + 可爱的 + 兔子."],
          solution: ["两只可爱的兔子 (liǎng zhī kě'ài de tùzi)."],
        },
        {
          id: "igcse-bridge-grammar-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "igcse-routine-hobbies",
          question:
            "Write the exact 1-character verb for playing **the violin** (`___小提琴`). (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["拉", "lā"],
            display: "拉 (lā)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["弹", "tán"] },
              feedback: "弹 is for keyboard/plucked instruments (钢琴, 吉他); bowed strings like the violin take 拉 (lā)!",
            },
          ],
          hints: ["Literally means 'to pull' (a bow across strings)."],
          solution: ["拉小提琴 (lā xiǎotíqín) = to play the violin."],
        },
        {
          id: "igcse-bridge-grammar-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "igcse-routine-hobbies",
          question:
            "Write the 2-character Mandarin frequency adverb meaning **'occasionally / once in a while'**. (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["偶尔", "ǒu'ěr", "ǒuěr"],
            display: "偶尔 (ǒu'ěr)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["经常", "jīngcháng"] },
              feedback: "经常 means 'often'; 'occasionally' is 偶尔 (ǒu'ěr).",
            },
          ],
          hints: [
            "It sits between 有时候 (sometimes) and 很少 (rarely) on the frequency scale.",
            "Two 3rd-tone syllables: ǒu'ěr.",
          ],
          solution: ["偶尔 (ǒu'ěr) = occasionally."],
        },
        {
          id: "igcse-bridge-grammar-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "igcse-routine-hobbies",
          question:
            "Fix the verb-copy duration error by typing the missing **2-character Verb + `了`** chunk: `昨天晚上我做作业___两个小时。` (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["做了", "zuòle", "zuò le"],
            display: "做了 (zuòle)",
          },
          hints: [
            "Repeat the main verb (做) right after the object (作业), then add 了 before 两个小时!",
            "Pattern: 做作业 + ___ + 两个小时.",
          ],
          solution: ["昨天晚上我做作业做了两个小时。(V + O + V + 了 + Duration)."],
        },
        {
          id: "igcse-bridge-grammar-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "igcse-routine-hobbies",
          question:
            "Read: `我每天早上六点半起床，七点一刻坐校车去学校。` How many minutes are there between waking up and boarding the school bus? (Type a number.)",
          answer: {
            type: "number",
            value: 45,
            display: "45 分钟",
          },
          traps: [
            {
              spec: { type: "number", value: 15 },
              feedback: "六点半 is 6:30 and 七点一刻 is 7:15 — count the full gap from 6:30 to 7:15!",
            },
          ],
          hints: [
            "六点半 = 6:30; 七点一刻 = 7:15.",
            "From 6:30 to 7:15 is 30 + 15 minutes.",
          ],
          solution: ["6:30 to 7:15 = 45 minutes."],
        },
        {
          id: "igcse-bridge-grammar-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "stpvo-tenses-aspect",
          question:
            "Unscramble these 4 chunks into correct Mandarin **STPVO** order: `看中文书` / `在图书馆` / `明天下午` / `我打算`. (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: [
              "我明天下午打算在图书馆看中文书",
              "我明天下午打算在图书馆看中文书。",
              "我打算明天下午在图书馆看中文书",
              "我打算明天下午在图书馆看中文书。",
              "Wǒ dǎsuàn míngtiān xiàwǔ zài túshūguǎn kàn Zhōngwén shū",
              "明天下午我打算在图书馆看中文书",
              "明天下午，我打算在图书馆看中文书",
              "明天下午，我打算在图书馆看中文书。",
              "明天下午我打算在图书馆看中文书。",
              "Wǒ míngtiān xiàwǔ dǎsuàn zài túshūguǎn kàn Zhōngwén shū",
              "Míngtiān xiàwǔ wǒ dǎsuàn zài túshūguǎn kàn Zhōngwén shū",
            ],
            display: "明天下午，我打算在图书馆看中文书。",
          },
          hints: [
            "Time (明天下午) goes before Subject (or right after 我); Place (在图书馆) sits directly before 看中文书.",
            "Keep 打算 right before 在图书馆看中文书!",
          ],
          solution: [
            "TSPVO: 明天下午，我打算在图书馆看中文书。",
          ],
        },
        {
          id: "igcse-bridge-grammar-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "stpvo-tenses-aspect",
          question:
            "Complete the experiential sentence with ONE particle: `你以前去___成都看大熊猫吗？` (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["过", "guo", "guò"],
            display: "过 (guo)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["了", "le"] },
              feedback: "With 以前 ('ever before'), use experiential 过 (guo) rather than 了!",
            },
          ],
          hints: [
            "Notice 以前 (previously / ever).",
            "Verb + ___ asks whether someone has ever had a life experience.",
          ],
          solution: ["你以前去过成都看大熊猫吗？(过 guo marks past life experience)."],
        },
        {
          id: "igcse-bridge-grammar-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "stpvo-tenses-aspect",
          question:
            "Write the 2-character negative chunk to say **'is NOT (doing right now)'**: `妹妹现在___看电视，她在房间里画画儿呢。` (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["没在", "没有在", "méizài", "méi zài", "méiyǒu zài"],
            display: "没在 (méi zài)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["不在", "búzài", "bù zài"] },
              feedback: "Negating an ongoing action (正在/在 + Verb) uses 没在, NOT *不在*!",
            },
          ],
          hints: [
            "Ongoing 正在 + Verb is negated with 没 + 在 (not 不).",
            "Two characters: méi zài.",
          ],
          solution: ["妹妹现在没在看电视 (méi zài kàn diànshì)."],
        },
        {
          id: "igcse-bridge-grammar-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "stpvo-tenses-aspect",
          question:
            "Write the 2-character future-intention phrase meaning **'in the future'** in `___我想当一名医生。` (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["将来", "jiānglái", "以后", "yǐhòu", "未来", "wèilái"],
            display: "将来 (jiānglái)",
          },
          hints: [
            "Key IGCSE future time marker meaning 'in the future' (jiānglái).",
            "以后 (yǐhòu) or 未来 (wèilái) is also accepted.",
          ],
          solution: ["将来我想当一名医生 (Jiānglái wǒ xiǎng dāng yì míng yīshēng)."],
        },
        {
          id: "igcse-bridge-grammar-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "igcse-routine-hobbies",
          question:
            "Write the 3-character habitual 'never' phrase to complete: `因为我不喜欢甜饮料，所以我___喝可乐。` (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["从来不", "cónglái bù", "cóngláibù"],
            display: "从来不 (cónglái bù)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["从来没", "cónglái méi"] },
              feedback: "从来没 pairs with 过 for life experience ('have never tried'); a present habit uses 从来不!",
            },
          ],
          hints: [
            "Habits use 不 (not 没).",
            "Combine 从来 (ever/always) + 不.",
          ],
          solution: ["从来不 (cónglái bù) = never (as a habit)."],
        },
        {
          id: "igcse-bridge-grammar-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "igcse-self-intro-family-pets",
          question:
            "Read: `我有两个表弟，他们都比我小三岁。我今年十四岁。` How old are the two cousins? (Type a number.)",
          answer: {
            type: "number",
            value: 11,
            display: "11 岁",
          },
          traps: [
            {
              spec: { type: "number", value: 17 },
              feedback: "比我小三岁 means 3 years YOUNGER than me (14 − 3), not older!",
            },
          ],
          hints: [
            "我今年十四岁 = 14 years old; 比我小三岁 = 3 years younger than me.",
            "Calculate 14 − 3.",
          ],
          solution: ["14 − 3 = 11 岁 (11 years old)."],
        },
        {
          id: "igcse-bridge-grammar-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "igcse-self-intro-family-pets",
          marks: 4,
          question:
            "Write a fluent IGCSE 0547 opening paragraph (Simplified Hanzi + tone-marked Pinyin or English gloss) introducing yourself: include (1) name & age without `是`, (2) nationality & living in Singapore, (3) household size with `口`, and (4) a pet using `养` + exact classifier.",
          hints: [
            "Drop 是 before age (今年十四岁) and use 我家有…口人.",
            "Use 养了一只… or 两条… plus a personality adjective like 可爱 / 活泼.",
          ],
          modelAnswer:
            "大家好！我叫林浩，今年十四岁，生日是四月九号。(Dàjiā hǎo! Wǒ jiào Lín Hào, jīnnián shísì suì, shēngrì shì Sìyuè jiǔ hào.) 我是新加坡人，现在跟家人住在一套公寓里。(Wǒ shì Xīnjiāpōrén, xiànzài gēn jiārén zhù zài yí tào gōngyù lǐ.) 我家有四口人：爸爸、妈妈、妹妹和我。(Wǒ jiā yǒu sì kǒu rén: bàba, māma, mèimei hé wǒ.) 我们还养了一只又聪明又活泼的小狗，它叫乐乐。(Wǒmen hái yǎngle yì zhī yòu cōngmíng yòu huópō de xiǎogǒu, tā jiào Lèle.)",
          markScheme: [
            {
              point: "Gives name and age accurately without 是 (叫… + 今年…岁).",
              keywords: ["我叫", "wǒ jiào", "岁", "suì"],
            },
            {
              point: "States nationality and residence in Singapore using 住在.",
              keywords: ["住在", "zhù zài", "新加坡", "xīnjiāpō"],
            },
            {
              point: "States household size accurately using 我家有…口人.",
              keywords: ["口人", "kǒu rén"],
            },
            {
              point: "Describes a pet using 养了 + exact animal classifier (一只 / 两条 / 一匹).",
              keywords: ["一只", "两只", "两条", "一匹", "yì zhī", "liǎng tiáo"],
            },
          ],
          commonError:
            "Writing `*我是十四岁*`, `*我有四个人*`, or using `个` instead of `只 / 条` for animals.",
        },
        {
          id: "igcse-bridge-grammar-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "igcse-routine-hobbies",
          marks: 3,
          question:
            "Write a short bilingual description of your weekday routine and favourite hobby (Simplified Hanzi + tone-marked Pinyin or English): include (1) `先…，然后…，最后…` sequencing, (2) one frequency adverb, and (3) one verb-copy duration phrase.",
          hints: [
            "Sequence morning/evening actions with 先, 然后, 最后.",
            "Include 经常 / 偶尔 / 总是 and a duration like 弹钢琴弹了半个小时 or 做作业做一个小时.",
          ],
          modelAnswer:
            "每天早上六点半，我先起床，然后吃早饭，最后七点一刻坐校车去上学。(Měitiān zǎoshang liùdiǎn bàn, wǒ xiān qǐchuáng, ránhòu chī zǎofàn, zuìhòu qīdiǎn yíkè zuò xiàochē qù shàngxué.) 放学以后，我经常去运动场踢足球，昨天我踢足球踢了一个小时，虽然很累，但是能让我放松。(Fàngxué yǐhòu, wǒ jīngcháng qù yùndòngchǎng tī zúqiú, zuótiān wǒ tī zúqiú tīle yí gè xiǎoshí, suīrán hěn lèi, dànshì néng ràng wǒ fàngsōng.)",
          markScheme: [
            {
              point: "Uses the 3-step routine sequence (起床 / 吃早饭 / 上学 / 睡觉 with 先, 然后, 最后).",
              keywords: ["起床", "qǐchuáng", "吃早饭", "上学", "睡觉"],
            },
            {
              point: "Includes an authentic frequency adverb (经常 / 常常 / 总是 / 偶尔 / 有时候).",
              keywords: ["经常", "jīngcháng", "常常", "总是", "偶尔", "有时候"],
            },
            {
              point: "Includes an accurate duration phrase (e.g. 一个小时 / 半个小时 / 三十分钟 with verb-copy or 的).",
              keywords: ["小时", "xiǎoshí", "分钟", "fēnzhōng"],
            },
          ],
          commonError:
            "Writing `*我踢足球一个小时*` without copying the verb `踢` (or inserting `的`).",
        },
        {
          id: "igcse-bridge-grammar-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "stpvo-tenses-aspect",
          marks: 4,
          question:
            "Write FOUR linked Mandarin sentences (with tone-marked Pinyin or English) using verbs of travel or viewing across all FOUR aspect lenses: (1) a specific completed past event, (2) a past life experience ('have ever'), (3) an ongoing action right now ('-ing'), and (4) a future plan.",
          hints: [
            "Match each aspect to a matching time cue: 昨天, 以前, 现在, 明天/明年.",
            "Check STPVO whenever you include a place!",
          ],
          modelAnswer:
            "昨天下午我在电影院看了一部精彩的电影。(Zuótiān xiàwǔ wǒ zài diànyǐngyuàn kànle yí bù jīngcǎi de diànyǐng — completed past.) 我以前去过北京，爬过长城。(Wǒ yǐqián qùguo Běijīng, páguo Chángchéng — past life experience.) 现在我正在房间里看中文小说呢。(Xiànzài wǒ zhèngzài fángjiān lǐ kàn Zhōngwén xiǎoshuō ne — ongoing right now.) 明年暑假我打算跟家人去上海旅游。(Míngnián shǔjià wǒ dǎsuàn gēn jiārén qù Shànghǎi lǚyóu — future plan.)",
          markScheme: [
            {
              point: "Demonstrates completed past action with past time cue + Verb + 了.",
              keywords: ["昨天", "去年", "看了", "去了", "kànle", "qùle"],
            },
            {
              point: "Demonstrates past life experience with 以前 + Verb + 过.",
              keywords: ["以前", "yǐqián", "去过", "看过", "qùguo", "kànguo"],
            },
            {
              point: "Demonstrates ongoing action right now with 现在 + 正在…呢.",
              keywords: ["现在", "xiànzài", "正在", "zhèngzài"],
            },
            {
              point: "Demonstrates future plan with 明年 / 明天 + 打算 / 想.",
              keywords: ["明年", "明天", "míngnián", "míngtiān", "打算", "dǎsuàn"],
            },
          ],
          commonError:
            "Using `了` with `以前` instead of `过`, or forgetting to pair `正在` with a present cue (`现在`).",
        },
      ],
    },
    {
      id: "igcse-bridge-grammar-p2",
      title: "Practice Paper 2 — Aspect Negation, Paired Connectives & IGCSE Writing",
      questions: [
        {
          id: "igcse-bridge-grammar-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "igcse-connectives-writing",
          question:
            "Complete the cause-and-effect connective pair: `因为昨天发烧，___我请假在家休息了一天。` (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["所以", "suǒyǐ"],
            display: "所以 (suǒyǐ)",
          },
          hints: ["Partner of 因为 (yīnwèi)."],
          solution: ["因为…，所以… (yīnwèi…, suǒyǐ…) = because…, therefore…."],
        },
        {
          id: "igcse-bridge-grammar-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "igcse-connectives-writing",
          question:
            "Complete the concession connective pair: `___我住的地方离市中心有点儿远，但是那里非常安静。` (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["虽然", "suīrán"],
            display: "虽然 (suīrán)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["因为", "yīnwèi"] },
              feedback: "因为 pairs with 所以! Here the second clause opens with 但是 (contrast), so Clause 1 needs 虽然.",
            },
          ],
          hints: ["Partner of 但是 (dànshì), meaning 'although'."],
          solution: ["虽然…，但是… (suīrán…, dànshì…) = although…, yet…."],
        },
        {
          id: "igcse-bridge-grammar-p2-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "igcse-connectives-writing",
          question:
            "Complete the addition connective pair: `东陵学校的图书馆___很大，而且中文书特别多。` (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["不但", "búdàn", "bùdàn", "不仅", "bùjǐn"],
            display: "不但 (búdàn)",
          },
          hints: ["Partner of 而且 (érqiě), meaning 'not only'."],
          solution: ["不但…，而且… (búdàn…, érqiě…) = not only…, but also…."],
        },
        {
          id: "igcse-bridge-grammar-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "igcse-connectives-writing",
          question:
            "Complete the conditional pair: `___你坚持每天复习十五分钟生词，你的中文就会进步很快。` (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["如果", "rúguǒ", "要是", "yàoshi"],
            display: "如果 (rúguǒ)",
          },
          hints: [
            "Look at 就 in the second clause (`你的中文就会…`).",
            "2-character word meaning 'if' (rúguǒ).",
          ],
          solution: ["如果…，Subject + 就… = if…, then…."],
        },
        {
          id: "igcse-bridge-grammar-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "igcse-connectives-writing",
          question:
            "Fix the misplaced adverb `就` by writing ONLY the corrected second clause (`5 characters`): `如果明天有空，*就我去游泳*。` (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["我就去游泳", "我就去游泳。", "wǒ jiù qù yóuyǒng"],
            display: "我就去游泳 (wǒ jiù qù yóuyǒng)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["就我去游泳", "jiù wǒ qù yóuyǒng"] },
              feedback: "That keeps the error! Move the subject 我 BEFORE the adverb 就.",
            },
          ],
          hints: [
            "In Mandarin, adverbs like 就 ALWAYS come AFTER the subject.",
            "Swap the first two characters of *就我去游泳*!",
          ],
          solution: ["Subject before 就: 我就去游泳 (wǒ jiù qù yóuyǒng)."],
        },
        {
          id: "igcse-bridge-grammar-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "stpvo-tenses-aspect",
          question:
            "Rewrite `我以前坐过高铁` in the **negative** ('I have never ridden the high-speed train before'). (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: [
              "我以前没坐过高铁",
              "我以前没坐过高铁。",
              "我以前没有坐过高铁",
              "我以前没有坐过高铁。",
              "Wǒ yǐqián méi zuòguo gāotiě",
              "Wǒ yǐqián méiyǒu zuòguo gāotiě",
            ],
            display: "我以前没坐过高铁。",
          },
          traps: [
            {
              spec: { type: "text", accept: ["我以前不坐过高铁", "我以前没坐高铁"] },
              feedback: "Negating past experience requires BOTH 没(有) AND keeping 过: 没坐过!",
            },
          ],
          hints: [
            "Use 没(有) right before 坐.",
            "Do NOT drop 过 — keep 坐过 intact!",
          ],
          solution: ["我以前没坐过高铁。(没 + V + 过)."],
        },
        {
          id: "igcse-bridge-grammar-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "stpvo-tenses-aspect",
          question:
            "Negate this future intention with ONE character: `今年暑假我___打算去国外旅游，我想留在新加坡学游泳。` (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["不", "bù"],
            display: "不 (bù)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["没", "没有", "méi", "méiyǒu"] },
              feedback: "Future plans and mental verbs like 打算 take 不 (bù), not 没!",
            },
          ],
          hints: [
            "Future plans and mental verbs (打算, 想) take which negator?",
            "1 character: bù.",
          ],
          solution: ["我不打算去国外旅游 (future plans are negated with 不)."],
        },
        {
          id: "igcse-bridge-grammar-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "igcse-connectives-writing",
          question:
            "Read: `我一边吃早饭，一边听中文广播。` Translate the grammatical relationship expressed by `一边…一边…` in 2–4 English words (e.g. 'cause and effect').",
          answer: {
            type: "text",
            accept: [
              "at the same time",
              "simultaneous actions",
              "two actions together",
              "doing two things together",
              "doing two actions simultaneously",
              "while",
            ],
            display: "simultaneous actions (at the same time)",
          },
          hints: [
            "The speaker eats breakfast AND listens to Chinese radio simultaneously.",
            "Think: 'simultaneous actions' or 'at the same time'.",
          ],
          solution: ["一边…一边… expresses simultaneous actions happening at the same time."],
        },
        {
          id: "igcse-bridge-grammar-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "stpvo-tenses-aspect",
          question:
            "Spot the ONE illegal character in `*昨天晚上我在家里没吃了晚饭*` and type ONLY that character that must be deleted. (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["了", "le"],
            display: "了 (le)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["没", "méi"] },
              feedback: "没 is the right negator for a past event! Delete the aspect particle that clashes with 没.",
            },
          ],
          hints: [
            "Remember the golden rule: 没 kicks ___ out!",
            "Type the single aspect particle that cannot coexist with 没.",
          ],
          solution: ["Delete 了 → 昨天晚上我在家里没吃晚饭。"],
        },
        {
          id: "igcse-bridge-grammar-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "igcse-connectives-writing",
          question:
            "Fix the cross-wired connective in `*虽然我每天很忙，所以我坚持跑步*` by typing the ONE 2-character connective that replaces `所以`. (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["但是", "dànshì", "可是", "kěshì"],
            display: "但是 (dànshì)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["而且", "érqiě"] },
              feedback: "而且 pairs with 不但; 虽然 always pairs with 但是 (or 可是)!",
            },
          ],
          hints: [
            "Look at the opening connective 虽然 — what is its exact partner?",
            "2 characters: dànshì (or kěshì).",
          ],
          solution: ["虽然 always pairs with 但是 (or 可是) — never 所以!"],
        },
        {
          id: "igcse-bridge-grammar-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "igcse-routine-hobbies",
          question:
            "Read: `我星期一、星期三和星期五下午都去游泳馆游泳，每次游四十分钟。` How many minutes in total does the writer swim per week? (Type a number.)",
          answer: {
            type: "number",
            value: 120,
            display: "120 分钟",
          },
          traps: [
            {
              spec: { type: "number", value: 40 },
              feedback: "40 minutes is EACH session (每次); they swim three days a week (Mon, Wed, Fri)!",
            },
          ],
          hints: [
            "Count the days: 星期一 (Mon), 星期三 (Wed), 星期五 (Fri) = 3 sessions.",
            "Multiply 3 × 40 minutes.",
          ],
          solution: ["3 sessions × 40 minutes = 120 minutes per week."],
        },
        {
          id: "igcse-bridge-grammar-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "igcse-connectives-writing",
          question:
            "What 2-character purpose word meaning **'in order to'** opens this IGCSE sentence: `___考好明年的IGCSE中文，我每天都练习写汉字。` (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["为了", "wèile"],
            display: "为了 (wèile)",
          },
          hints: [
            "Also used in festival writing: ___纪念屈原.",
            "2 characters pronounced wèile.",
          ],
          solution: ["为了 (wèile) = in order to."],
        },
        {
          id: "igcse-bridge-grammar-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "igcse-connectives-writing",
          marks: 4,
          question:
            "Write FOUR original Mandarin sentences about school or home life (include tone-marked Pinyin or English gloss), demonstrating each of these four paired connectives cleanly: (1) cause–effect, (2) concession/contrast, (3) not only… but also, and (4) if… then (with subject BEFORE `就`).",
          hints: [
            "Use 因为…所以…, 虽然…但是…, 不但…而且…, and 如果…Subject+就….",
            "Check that no connective pairs are cross-wired and Subject sits before 就.",
          ],
          modelAnswer:
            "因为我最喜欢科学，所以我每天认真做实验。(Yīnwèi wǒ zuì xǐhuan kēxué, suǒyǐ wǒ měitiān rènzhēn zuò shíyàn.) 虽然数学作业有点儿多，但是我还是按时完成了。(Suīrán shùxué zuòyè yǒudiǎnr duō, dànshì wǒ háishi ànshí wánchéngle.) 我的新卧室不但很大，而且非常明亮。(Wǒ de xīn wòshì búdàn hěn dà, érqiě fēicháng míngliàng.) 如果周末不下雨，我就跟同学去公园打网球。(Rúguǒ zhōumò bú xiàyǔ, wǒ jiù gēn tóngxué qù gōngyuán dǎ wǎngqiú.)",
          markScheme: [
            {
              point: "Uses 因为…，所以… accurately for cause and effect.",
              keywords: ["因为", "所以", "yīnwèi", "suǒyǐ"],
            },
            {
              point: "Uses 虽然…，但是… accurately for contrast/concession.",
              keywords: ["虽然", "但是", "suīrán", "dànshì"],
            },
            {
              point: "Uses 不但…，而且… accurately with clean subject placement.",
              keywords: ["不但", "而且", "búdàn", "érqiě"],
            },
            {
              point: "Uses 如果…，Subject + 就… with the subject placed BEFORE 就.",
              keywords: ["如果", "我就", "我们就", "他就会", "rúguǒ"],
            },
          ],
          commonError:
            "Putting `就` before the subject (`*就我去…*`) or cross-wiring `*虽然…所以…*`.",
        },
        {
          id: "igcse-bridge-grammar-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "stpvo-tenses-aspect",
          marks: 3,
          question:
            "A Year 8 learner wrote three broken sentences:\n1. `*我学习中文在图书馆昨天。*`\n2. `*昨天我没去了学校。*`\n3. `*我以前不去过北京。*`\nRewrite ALL THREE sentences correctly in Simplified Chinese and briefly explain each grammar fix (include tone-marked Pinyin or English).",
          hints: [
            "Sentence 1: apply STPVO (Time + Place before Verb).",
            "Sentence 2: 没 kicks 了 out. Sentence 3: 过 is negated with 没, not 不!",
          ],
          modelAnswer:
            "1. 我昨天在图书馆学习了中文。(Wǒ zuótiān zài túshūguǎn xuéxíle Zhōngwén — STPVO moves time and place before the verb.) 2. 昨天我没去学校。(Zuótiān wǒ méi qù xuéxiào — drop 了 after 没.) 3. 我以前没去过北京。(Wǒ yǐqián méi qùguo Běijīng — past experience 过 always takes 没, never 不.)",
          markScheme: [
            {
              point: "Fixes Sentence 1 into valid STPVO/TSPVO order (昨天 + 在图书馆 before 学习).",
              keywords: ["昨天在图书馆学习", "在图书馆学习", "stpvo"],
            },
            {
              point: "Fixes Sentence 2 by removing 了 after 没 (昨天我没去学校).",
              keywords: ["没去学校", "méi qù", "drop 了"],
            },
            {
              point: "Fixes Sentence 3 by replacing 不 with 没 while keeping 过 (我以前没去过北京).",
              keywords: ["没去过", "没有去过", "méi qùguo"],
            },
          ],
          commonError:
            "Dropping `过` in Sentence 3 (`*我以前没去北京*` loses the 'ever been' nuance).",
        },
        {
          id: "igcse-bridge-grammar-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "igcse-connectives-writing",
          marks: 4,
          question:
            "Write a cohesive IGCSE 0547 email paragraph to a new pen pal (Simplified Hanzi + tone-marked Pinyin or English) answering ALL 4 bullets: (1) your hobbies & frequency, (2) a fun weekend activity you did **last week**, (3) a balanced opinion using `虽然…但是…` or `不但…而且…`, and (4) a **future invitation** using `如果…，…就…`.",
          hints: [
            "Verify every single bullet has its own clear Mandarin sentence.",
            "Include past (上个周末…了), present habit (经常), paired connective, and future conditional (如果…我就…).",
          ],
          modelAnswer:
            "平时周末我经常跟同学一起打羽毛球，偶尔在家弹吉他。(Píngshí zhōumò wǒ jīngcháng gēn tóngxué yìqǐ dǎ yǔmáoqiú, ǒu'ěr zài jiā tán jítā.) 上个星期六，我和家人在东海岸公园骑自行车骑了一个小时。(Shàng gè xīngqīliù, wǒ hé jiārén zài Dōnghǎi'àn Gōngyuán qí zìxíngchē qíle yí gè xiǎoshí.) 骑车不但能锻炼身体，而且让我非常放松。(Qíchē búdàn néng duànliàn shēntǐ, érqiě ràng wǒ fēicháng fàngsōng.) 如果你明年来新加坡，我就带你去那里玩儿！(Rúguǒ nǐ míngnián lái Xīnjiāpō, wǒ jiù dài nǐ qù nàlǐ wánr!)",
          markScheme: [
            {
              point: "States hobby/hobbies with an authentic frequency adverb (经常 / 偶尔 / 总是 / 有时候).",
              keywords: ["经常", "偶尔", "总是", "jīngcháng", "ǒu'ěr"],
            },
            {
              point: "Describes a specific past activity using 上个周末/上个星期 + 了 + STPVO.",
              keywords: ["上个", "去了", "打了", "骑了", "看了", "shàng gè"],
            },
            {
              point: "Uses 不但…而且… or 虽然…但是… to justify an opinion.",
              keywords: ["而且", "但是", "érqiě", "dànshì"],
            },
            {
              point: "Gives a future invitation using 如果 + Subject + 就 (with 明年 / 下次).",
              keywords: ["我就", "我们就", "wǒ jiù", "明年", "下次"],
            },
          ],
          commonError:
            "Missing the past time frame or placing `就` in front of `我`.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "igcse-bridge-grammar-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "stpvo-tenses-aspect",
      question:
        "Unscramble these 5 chunks into a single flawless STPVO/TSPVO sentence: `弹了半个小时的钢琴` / `昨天晚上` / `在客厅里` / `跟姐姐一起` / `我`. (Type Simplified Hanzi or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: [
          "昨天晚上我跟姐姐一起在客厅里弹了半个小时的钢琴",
          "昨天晚上，我跟姐姐一起在客厅里弹了半个小时的钢琴",
          "昨天晚上，我跟姐姐一起在客厅里弹了半个小时的钢琴。",
          "昨天晚上我在客厅里跟姐姐一起弹了半个小时的钢琴",
          "昨天晚上，我在客厅里跟姐姐一起弹了半个小时的钢琴",
          "昨天晚上，我在客厅里跟姐姐一起弹了半个小时的钢琴。",
          "我昨天晚上跟姐姐一起在客厅里弹了半个小时的钢琴",
          "我昨天晚上跟姐姐一起在客厅里弹了半个小时的钢琴。",
          "我昨天晚上在客厅里跟姐姐一起弹了半个小时的钢琴",
          "我昨天晚上在客厅里跟姐姐一起弹了半个小时的钢琴。",
          "Zuótiān wǎnshang wǒ gēn jiějie yìqǐ zài kètīng lǐ tánle bàn gè xiǎoshí de gāngqín",
          "Wǒ zuótiān wǎnshang gēn jiějie yìqǐ zài kètīng lǐ tánle bàn gè xiǎoshí de gāngqín",
        ],
        display: "昨天晚上，我跟姐姐一起在客厅里弹了半个小时的钢琴。",
      },
      hints: [
        "Place Time (昨天晚上) at the start or right after 我.",
        "Keep BOTH Companion (跟姐姐一起) and Place (在客厅里) BEFORE the verb phrase 弹了半个小时的钢琴!",
      ],
      solution: [
        "Time: 昨天晚上 | Subject: 我 | Companion: 跟姐姐一起 | Place: 在客厅里 | V+Duration+O: 弹了半个小时的钢琴.",
        "Full sentence: 昨天晚上，我跟姐姐一起在客厅里弹了半个小时的钢琴。",
      ],
    },
    {
      id: "igcse-bridge-grammar-ch-q02",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "igcse-routine-hobbies",
      question: "Which pair of sentences BOTH express 'She practised Chinese calligraphy for 45 minutes' accurately?",
      options: [
        "她练习书法四十五分钟了。 / 她四十五分钟练习书法。",
        "她练习了书法四十五分钟。 / 她练习四十五分钟书法。",
        "她练习书法练习了四十五分钟。 / 她练习了四十五分钟的书法。",
        "她练四十五分钟习了书法。 / 她书法练习了四十五分钟。",
      ],
      answerIndex: 2,
      explanation:
        "The two gold-standard Mandarin duration structures for verb–object phrases are (1) verb-copy `她练习书法练习了四十五分钟` and (2) `Verb + 了 + Duration + 的 + Object` → `她练习了四十五分钟的书法`!",
      hints: [
        "Recall BOTH legal duration formulas when a verb has an object (书法).",
        "Form 1 repeats the verb (`V + O + V + 了 + Duration`); Form 2 puts `Duration + 的` before the object.",
      ],
    },
    {
      id: "igcse-bridge-grammar-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "stpvo-tenses-aspect",
      question:
        "Translate accurately into Simplified Chinese: **'Although I have never been to Beijing, I plan to travel there next summer.'** Complete the missing 10-character opening clause before `, 但是明年暑假我打算去那里旅游。` (Type Simplified Hanzi or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: [
          "虽然我从来没去过北京",
          "虽然我从来没有去过北京",
          "虽然我以前没去过北京",
          "虽然我以前没有去过北京",
          "Suīrán wǒ cónglái méi qùguo Běijīng",
          "Suīrán wǒ cónglái méiyǒu qùguo Běijīng",
          "Suīrán wǒ yǐqián méi qùguo Běijīng",
        ],
        display: "虽然我从来没去过北京 (Suīrán wǒ cónglái méi qùguo Běijīng)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["虽然我从来不去过北京", "虽然我从来没去了北京"] },
          feedback: "Experiential negation ALWAYS uses 没(有) + Verb + 过 (never *不去过* or *没去了*)!",
        },
      ],
      hints: [
        "Open with 虽然 (matching 但是 in clause 2).",
        "Translate 'I have never been to Beijing' using 我从来没去过北京 (keeping 过!).",
      ],
      solution: [
        "虽然 + 我 + 从来没去过 + 北京 = 虽然我从来没去过北京。",
      ],
    },
    {
      id: "igcse-bridge-grammar-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "igcse-connectives-writing",
      question:
        "Read: `不但爸爸擅长做中餐，而且妈妈也会烤面包，所以我从来不觉得家里的晚饭无聊。` Why is `不但` placed BEFORE `爸爸` here?",
      options: [
        "Because the two clauses have DIFFERENT subjects (爸爸 vs 妈妈)",
        "Because 不但 must always sit at the start of every Chinese sentence",
        "Because 爸爸 is a family member, which moves behind connectives",
        "Because 所以 in the third clause forces 不但 to jump forward",
      ],
      answerIndex: 0,
      explanation:
        "When two clauses have **different subjects** (`爸爸` and `妈妈`), `不但` sits **before Subject 1** and `而且` sits **before Subject 2**. When both clauses share ONE subject, that subject sits before `不但`!",
      hints: [
        "Compare the subject of clause 1 (爸爸) with the subject of clause 2 (妈妈).",
        "Recall the subject-placement rule for 不但…而且….",
      ],
    },
    {
      id: "igcse-bridge-grammar-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "igcse-connectives-writing",
      question:
        "Spot the ONE word-order error in this conditional sentence and type ONLY the corrected 7-character second clause: `如果下个星期五考试结束了，*就我们去吃火锅*。` (Type Simplified Hanzi or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: ["我们就去吃火锅", "我们就去吃火锅。", "wǒmen jiù qù chī huǒguō"],
        display: "我们就去吃火锅 (wǒmen jiù qù chī huǒguō)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["就我们去吃火锅"] },
          feedback: "就 must sit AFTER the subject 我们, not before it!",
        },
      ],
      hints: [
        "Identify the subject (我们) and the adverb (就).",
        "Put Subject BEFORE 就: 我们 + 就 + 去吃火锅.",
      ],
      solution: ["我们就去吃火锅 (wǒmen jiù qù chī huǒguō) — Subject precedes 就."],
    },
    {
      id: "igcse-bridge-grammar-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "stpvo-tenses-aspect",
      question:
        "Which sentence subtly conveys **change of state** ('It has started raining now!') using sentence-final `了` rather than a past action?",
      options: [
        "昨天下午下了两个小时的大雨。",
        "快带雨伞，外面下大雨了！",
        "去年冬天北京下过三次大雪。",
        "天气预报说明天早上会下雨。",
      ],
      answerIndex: 1,
      explanation:
        "`快带雨伞，外面下大雨了！` uses sentence-final `了` to signal a brand-new current situation / change of state ('Look, it's started raining heavily now!'). The others describe a past duration, past experience (`过`), and future forecast (`会`).",
      hints: [
        "Look for a present-moment warning ('Quick, grab an umbrella!').",
        "Sentence-final 了 after an ongoing weather cue marks a new state that wasn't true a moment ago.",
      ],
    },
    {
      id: "igcse-bridge-grammar-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "igcse-connectives-writing",
      marks: 5,
      question:
        "Full IGCSE 0547 Bridge Writing Task (90–120 characters, include tone-marked Pinyin or English gloss): Write a self-introduction blog post for a partner school in Shanghai. Cover ALL 5 requirements: (1) personal profile & family/pet, (2) weekday routine using `先…然后…最后…`, (3) a hobby with frequency & duration, (4) a past visit/experience using `了` or `过`, and (5) a future goal using `打算 / 将来想` + a paired connective.",
      hints: [
        "Check off all 5 bullets before finishing so zero marks are dropped.",
        "Keep every time/place BEFORE its verb (STPVO) and verify 100% Simplified Chinese.",
        "Include at least two paired connectives (因为…所以…, 虽然…但是…, 不但…而且…, 如果…就…).",
      ],
      modelAnswer:
        "大家好！我叫陈思敏，今年十四岁，现在跟父母和弟弟住在新加坡，我家有四口人，还养了一只可爱的橘猫。(Dàjiā hǎo! Wǒ jiào Chén Sīmǐn, jīnnián shísì suì, xiànzài gēn fùmǔ hé dìdi zhù zài Xīnjiāpō, wǒ jiā yǒu sì kǒu rén, hái yǎngle yì zhī kě'ài de júmāo.) 每天早上我先起床、刷牙，然后吃早饭，最后七点一刻坐校车去东陵学校。(Měitiān zǎoshang wǒ xiān qǐchuáng, shuāyá, ránhòu chī zǎofàn, zuìhòu qīdiǎn yíkè zuò xiàochē qù Dōnglíng Xuéxiào.) 课余时间我经常弹钢琴，周末我常常弹钢琴弹一个小时。(Kèyú shíjiān wǒ jīngcháng tán gāngqín, zhōumò wǒ chángcháng tán gāngqín tán yí gè xiǎoshí.) 去年暑假，我和家人去过北京，爬了长城，非常难忘。(Qùnián shǔjià, wǒ hé jiārén qùguo Běijīng, pále Chángchéng, fēicháng nánwàng.) 因为我很喜欢中文，而且觉得学外语很有用，所以明年我打算参加IGCSE中文考试，将来想再去上海交流学习！(Yīnwèi wǒ hěn xǐhuan Zhōngwén, érqiě juéde xué wàiyǔ hěn yǒuyòng, suǒyǐ míngnián wǒ dǎsuàn cānjiā IGCSE Zhōngwén kǎoshì, jiānglái xiǎng zài qù Shànghǎi jiāoliú xuéxí!)",
      markScheme: [
        {
          point: "Accurate personal intro + household (口人) + pet (养 + classifier).",
          keywords: ["口人", "一只", "两只", "两条", "养了", "kǒu rén"],
        },
        {
          point: "Clear daily routine using 起床 / 吃早饭 / 上学 with sequencing.",
          keywords: ["起床", "早饭", "上学", "qǐchuáng", "zǎofàn"],
        },
        {
          point: "Hobby expanded with frequency (经常 / 偶尔 / 总是) and duration (小时 / 分钟).",
          keywords: ["经常", "常常", "小时", "分钟", "jīngcháng", "xiǎoshí"],
        },
        {
          point: "Authentic past event or experience (去年 / 上个 + 了 / 过).",
          keywords: ["去年", "去过", "看了", "爬了", "吃了", "qùguo"],
        },
        {
          point: "Future plan plus an intact paired connective (因为…所以… / 虽然…但是… / 不但…而且… / 如果…就…).",
          keywords: ["因为", "所以", "虽然", "但是", "不但", "而且", "如果", "明年"],
        },
      ],
      commonError:
        "Missing the duration structure or omitting one of the three time frames (Past / Present / Future).",
    },
    {
      id: "igcse-bridge-grammar-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "stpvo-tenses-aspect",
      marks: 4,
      question:
        "Design a crisp 4-rule Mandarin Grammar Survival Card for Year 9 students moving up to IGCSE 0547 (include Simplified Chinese examples + tone-marked Pinyin or English): explain (1) STPVO vs English word order, (2) why `没` drops `了` but keeps `过`, (3) how verb-copy solves duration, and (4) where the subject sits with `就`.",
      hints: [
        "Give ONE short example sentence for each of the four rules.",
        "Keep every example 100% Simplified Chinese with accurate Pinyin.",
      ],
      modelAnswer:
        "1. 时间和地点放在动词前面：我昨天在图书馆看了书。(Shíjiān hé dìdiǎn fàngzài dòngcí qiánmiàn: Wǒ zuótiān zài túshūguǎn kànle shū — Time and Place come BEFORE the verb.) 2. 否定过去动作要用“没”并去掉“了”（昨天我没买书），但否定经历必须保留“过”（我没去过北京）。(Fǒudìng guòqù dòngzuò qùdiào le, dàn bǎoliú guo: méi mǎi shū vs méi qùguo Běijīng.) 3. 动词带宾语又加时间长度时要重复动词：我弹钢琴弹了一个小时。(Chóngfù dòngcí: Wǒ tán gāngqín tánle yí gè xiǎoshí — repeat the verb before duration.) 4. “如果…就…”句型里，主语必须在“就”前面：如果下雨，我们就待在家里。(Zhǔyǔ zài jiù qiánmiàn: wǒmen jiù dāi zài jiālǐ — Subject always precedes 就.)",
      markScheme: [
        {
          point: "Explains & illustrates placing Time + Place before Verb (e.g. 在图书馆看了书).",
          keywords: ["动词前面", "在图书馆", "before the verb", "zuótiān zài"],
        },
        {
          point: "Contrasts 没 + V (dropping 了) vs 没 + V + 过 (keeping 过) with examples.",
          keywords: ["没去过", "没买", "保留", "méi qùguo", "méi mǎi"],
        },
        {
          point: "Explains & illustrates verb-copy duration (e.g. 弹钢琴弹了一个小时).",
          keywords: ["重复动词", "弹钢琴弹了", "一个小时", "repeat the verb"],
        },
        {
          point: "Explains & illustrates placing Subject BEFORE 就 (e.g. 我们就 / 我就).",
          keywords: ["我们就", "我就", "主语", "precedes"],
        },
      ],
      commonError:
        "Explaining the grammar rules in English only without giving clear Simplified Chinese model examples.",
    },
  ],
};
