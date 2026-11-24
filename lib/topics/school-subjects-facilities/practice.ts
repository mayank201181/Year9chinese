// Audited practice bank for Year 9 Mandarin Chinese — School Subjects & Facilities (学校科目与设施)
// quiz (10) + p1 (15) + p2 (15) + challenge (8) = 48 questions.
// Simplified Chinese (简体中文) with tone-marked Pinyin throughout.
import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "school-subjects-facilities-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "school-subjects-opinions",
      question: "Fill in the exact measure word for whole school subjects: **我学习两___外语** (I study two foreign languages). Type Simplified Hanzi or tone-marked Pinyin.",
      answer: {
        type: "text",
        accept: ["门", "mén"],
        display: "门 (mén)",
      },
      traps: [
        { spec: { type: "text", accept: ["节", "jié"] }, feedback: "节 (jié) counts single timetable lessons; whole subjects/courses take 门 (mén)!" },
        { spec: { type: "text", accept: ["个", "gè"] }, feedback: "Don't default to 个 — school subjects take 门 (mén)." },
      ],
      hints: [
        "Whole subjects take the 'doorway' classifier.",
        "2nd tone: mén.",
      ],
      solution: [
        "Whole subjects and courses take 门 (mén): 两门外语 (liǎng mén wàiyǔ).",
      ],
    },
    {
      id: "school-subjects-facilities-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "school-subjects-opinions",
      question: "Translate the school subject **Geography** into Simplified Mandarin (or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["地理", "dìlǐ"],
        display: "地理 (dìlǐ)",
      },
      traps: [
        { spec: { type: "text", accept: ["历史", "lìshǐ"] }, feedback: "历史 is History! Geography combines 地 (earth) + 理 (principles)." },
      ],
      hints: [
        "Literally 'earth principles' (地 = earth/ground).",
        "4th tone + 3rd tone: dìlǐ.",
      ],
      solution: [
        "地理 (dìlǐ) means Geography.",
      ],
    },
    {
      id: "school-subjects-facilities-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "school-subjects-opinions",
      question: "Which Mandarin subject means **Biology**?",
      options: ["化学 (huàxué)", "生物 (shēngwù)", "物理 (wùlǐ)", "数学 (shùxué)"],
      answerIndex: 1,
      hints: [
        "生 (shēng) means life / living.",
        "化学 is Chemistry, 物理 is Physics, and 数学 is Maths.",
      ],
      explanation:
        "**生物 (shēngwù)** literally means *living things* = **Biology**. **化学** is Chemistry, **物理** is Physics, and **数学** is Maths.",
    },
    {
      id: "school-subjects-facilities-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      guideRef: "school-timetable",
      question: "Fill in the exact measure word for daily timetable lessons: **我们每天有六___课** (We have six lessons every day).",
      answer: {
        type: "text",
        accept: ["节", "jié"],
        display: "节 (jié)",
      },
      traps: [
        { spec: { type: "text", accept: ["门", "mén"] }, feedback: "门 counts whole curriculum subjects; daily periods take 节 (jié)!" },
      ],
      hints: [
        "Think of bamboo joints slicing the school day into individual periods.",
        "2nd tone: jié.",
      ],
      solution: [
        "Individual timetable periods take 节 (jié): 每天有六节课 (měitiān yǒu liù jié kè).",
      ],
    },
    {
      id: "school-subjects-facilities-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "school-timetable",
      question: "Translate **extracurricular activities / CCAs** into Simplified Mandarin (or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["课外活动", "kèwài huódòng", "kèwàihuódòng"],
        display: "课外活动 (kèwài huódòng)",
      },
      hints: [
        "Literally 'outside-class activities' (课外 + 活动).",
        "Pinyin: kèwài huódòng.",
      ],
      solution: [
        "课外活动 (kèwài huódòng) means extracurricular activities / CCAs: 放学后参加课外活动。",
      ],
    },
    {
      id: "school-subjects-facilities-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "school-timetable",
      question: "Which sentence puts **从……到……** in the right Mandarin position?",
      options: [
        "我们从上午八点到下午三点半上课。",
        "我们上课从上午八点到下午三点半。",
        "从上午八点上课我们到下午三点半。",
        "我们到下午三点半从上午八点上课。",
      ],
      answerIndex: 0,
      hints: [
        "从……到…… is a Time phrase — in STPVO, Time ALWAYS precedes the verb (上课).",
        "Keep 从 (start) before 到 (end).",
      ],
      explanation:
        "**我们从上午八点到下午三点半上课** places the **从……到……** time span directly before **上课**.",
    },
    {
      id: "school-subjects-facilities-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "school-facilities",
      question: "Translate **library** into Simplified Mandarin (or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["图书馆", "túshūguǎn"],
        display: "图书馆 (túshūguǎn)",
      },
      hints: [
        "Contains 书 (shū — book) and ends with the large-hall suffix 馆 (guǎn).",
        "Pinyin: túshūguǎn.",
      ],
      solution: [
        "图书馆 (túshūguǎn) means library: 午饭后我去图书馆借书。",
      ],
    },
    {
      id: "school-subjects-facilities-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "school-facilities",
      question: "Translate **science laboratory** (or **laboratory**) into Simplified Mandarin (or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["科学实验室", "实验室", "kēxué shíyànshì", "shíyànshì"],
        display: "科学实验室 (kēxué shíyànshì)",
      },
      hints: [
        "实验 (shíyàn) means experiment; add the specialist-room suffix 室 (shì).",
        "科学实验室 (kēxué shíyànshì) or 实验室 (shíyànshì).",
      ],
      solution: [
        "科学实验室 (kēxué shíyànshì) / 实验室 (shíyànshì) means science laboratory.",
      ],
    },
    {
      id: "school-subjects-facilities-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "comparing-subjects-teachers",
      question: "Fill in the single missing particle so the sentence means *\"Teacher Wang teaches very well\"*: **王老师教___很好。**",
      answer: {
        type: "text",
        accept: ["得", "de"],
        display: "得 (de)",
      },
      traps: [
        { spec: { type: "text", accept: ["的"] }, feedback: "的 links to nouns; right AFTER a verb (教) to evaluate performance, you MUST use 得!" },
        { spec: { type: "text", accept: ["地"] }, feedback: "地 comes BEFORE verbs; right AFTER a verb (教) use 得!" },
      ],
      hints: [
        "This particle sits directly after a verb to introduce a degree evaluation.",
        "It is NOT 的 and NOT 地 — choose the third 'de'!",
      ],
      solution: [
        "Degree complement after a verb ALWAYS uses 得 (de): 王老师教得很好 (Wáng lǎoshī jiāo de hěn hǎo).",
      ],
    },
    {
      id: "school-subjects-facilities-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      guideRef: "comparing-subjects-teachers",
      question: "Which sentence accurately says *\"Science is much more interesting than History\"*?",
      options: [
        "科学比历史很有趣。",
        "科学比历史非常有趣。",
        "科学比历史有趣得多。",
        "科学很比历史有趣。",
      ],
      answerIndex: 2,
      hints: [
        "NEVER put 很 or 非常 before the adjective in a 比 sentence!",
        "Add 得多 (de duō) AFTER the adjective to express 'much more'.",
      ],
      explanation:
        "**科学比历史有趣得多** follows **A 比 B + Adj + 得多** with zero **很** or **非常**.",
    },
  ],
  papers: [
    {
      id: "school-subjects-facilities-p1",
      title: "Practice Paper 1 — Subjects, Timetables & 从……到……",
      questions: [
        {
          id: "school-subjects-facilities-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "school-subjects-opinions",
          question: "Translate the subject **History** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["历史", "lìshǐ"],
            display: "历史 (lìshǐ)",
          },
          hints: [
            "4th tone + 3rd tone: lìshǐ.",
            "Not 地理 (Geography)!",
          ],
          solution: [
            "历史 (lìshǐ) means History.",
          ],
        },
        {
          id: "school-subjects-facilities-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "school-subjects-opinions",
          question: "Translate the subject **Physics** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["物理", "wùlǐ"],
            display: "物理 (wùlǐ)",
          },
          hints: [
            "Literally 'principles of matter' (物 + 理).",
            "4th tone + 3rd tone: wùlǐ.",
          ],
          solution: [
            "物理 (wùlǐ) means Physics (while 生物 is Biology and 化学 is Chemistry).",
          ],
        },
        {
          id: "school-subjects-facilities-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "school-subjects-opinions",
          question: "Translate **Spanish** (as a school subject) into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["西班牙文", "西班牙语", "xībānyáwén", "xībānyáyǔ"],
            display: "西班牙文 (Xībānyáwén)",
          },
          hints: [
            "Spain = 西班牙 (Xībānyá); add 文 (wén) or 语 (yǔ).",
            "Pinyin: Xībānyáwén.",
          ],
          solution: [
            "西班牙文 (Xībānyáwén) or 西班牙语 (Xībānyáyǔ) means Spanish.",
          ],
        },
        {
          id: "school-subjects-facilities-p1-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "school-subjects-opinions",
          question: "Translate **two foreign languages** into Simplified Mandarin (or tone-marked Pinyin) using the correct number form and subject measure word.",
          answer: {
            type: "text",
            accept: ["两门外语", "liǎng mén wàiyǔ", "liǎngmén wàiyǔ"],
            display: "两门外语 (liǎng mén wàiyǔ)",
          },
          traps: [
            { spec: { type: "text", accept: ["二门外语", "èr mén wàiyǔ"] }, feedback: "Before a measure word, 2 must be 两 (liǎng), never 二!" },
            { spec: { type: "text", accept: ["两节外语", "liǎng jié wàiyǔ"] }, feedback: "Whole subjects take 门 (mén), not 节!" },
          ],
          hints: [
            "2 before a measure word = 两 (liǎng); whole subjects take 门 (mén).",
            "Foreign language = 外语 (wàiyǔ).",
          ],
          solution: [
            "两 (2) + 门 (subject MW) + 外语 (foreign language) = 两门外语 (liǎng mén wàiyǔ).",
          ],
        },
        {
          id: "school-subjects-facilities-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "school-subjects-opinions",
          question: "Translate **useful** (e.g. for describing Chinese or Computing) into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["有用", "yǒuyòng"],
            display: "有用 (yǒuyòng)",
          },
          hints: [
            "Literally 'have use' (有 + 用).",
            "3rd tone + 4th tone: yǒuyòng.",
          ],
          solution: [
            "有用 (yǒuyòng) means useful: 我觉得中文非常有用。",
          ],
        },
        {
          id: "school-subjects-facilities-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "school-subjects-opinions",
          question: "Translate **boring** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["无聊", "wúliáo"],
            display: "无聊 (wúliáo)",
          },
          hints: [
            "The opposite of 有趣 / 有意思 (interesting).",
            "Both syllables are 2nd tone: wúliáo.",
          ],
          solution: [
            "无聊 (wúliáo) means boring.",
          ],
        },
        {
          id: "school-subjects-facilities-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "school-timetable",
          question: "Translate **timetable / class schedule** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["课程表", "课表", "kèchéngbiǎo", "kèbiǎo"],
            display: "课程表 (kèchéngbiǎo)",
          },
          hints: [
            "课程 (courses/curriculum) + 表 (chart/table).",
            "Pinyin: kèchéngbiǎo.",
          ],
          solution: [
            "课程表 (kèchéngbiǎo) — or short form 课表 — means timetable.",
          ],
        },
        {
          id: "school-subjects-facilities-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "school-timetable",
          question: "Translate **Period 1 / the first lesson** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["第一节课", "dì yī jié kè", "dìyī jié kè", "dìyījiékè"],
            display: "第一节课 (dì yī jié kè)",
          },
          hints: [
            "Ordinal prefix 第 (dì) + 一 (1) + lesson measure word 节 (jié) + 课 (kè).",
            "Pinyin: dì yī jié kè.",
          ],
          solution: [
            "第 + 一 + 节 + 课 = 第一节课 (dì yī jié kè).",
          ],
        },
        {
          id: "school-subjects-facilities-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "school-timetable",
          question: "Translate **lunchtime** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["午饭时间", "wǔfàn shíjiān", "wǔfànshíjiān"],
            display: "午饭时间 (wǔfàn shíjiān)",
          },
          hints: [
            "Lunch (午饭) + time (时间).",
            "Pinyin: wǔfàn shíjiān.",
          ],
          solution: [
            "午饭时间 (wǔfàn shíjiān) means lunchtime: 午饭时间从十二点半到一点半。",
          ],
        },
        {
          id: "school-subjects-facilities-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "school-timetable",
          question: "Translate **homework** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["作业", "功课", "zuòyè", "gōngkè"],
            display: "作业 (zuòyè)",
          },
          hints: [
            "Used with 做: 做___ (do homework).",
            "Both syllables are 4th tone: zuòyè.",
          ],
          solution: [
            "作业 (zuòyè) — or 功课 (gōngkè) — means homework.",
          ],
        },
        {
          id: "school-subjects-facilities-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "school-timetable",
          question: "Re-order these 3 blocks into natural Mandarin: `上课` / `我们` / `从上午八点到下午三点半`.",
          answer: {
            type: "text",
            accept: [
              "我们从上午八点到下午三点半上课",
              "从上午八点到下午三点半我们上课",
              "wǒmen cóng shàngwǔ bā diǎn dào xiàwǔ sān diǎn bàn shàngkè",
            ],
            display: "我们从上午八点到下午三点半上课 (Wǒmen cóng shàngwǔ bā diǎn dào xiàwǔ sān diǎn bàn shàngkè)",
          },
          traps: [
            { spec: { type: "text", accept: ["我们上课从上午八点到下午三点半"] }, feedback: "Don't put 从……到…… after 上课! Time spans always come BEFORE the verb." },
          ],
          hints: [
            "STPVO puts Subject first, then the entire 从……到…… time span, then the verb 上课.",
            "End the sentence with 上课.",
          ],
          solution: [
            "Subject (我们) + Time span (从上午八点到下午三点半) + Verb (上课) → 我们从上午八点到下午三点半上课。",
          ],
        },
        {
          id: "school-subjects-facilities-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "school-timetable",
          question: "Translate **to finish school (for the day)** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["放学", "fàngxué"],
            display: "放学 (fàngxué)",
          },
          traps: [
            { spec: { type: "text", accept: ["下课", "xiàkè"] }, feedback: "下课 means finishing one lesson; finishing the whole school day is 放学 (fàngxué)!" },
          ],
          hints: [
            "Opposite of 上学 (go to school) — NOT 下课 (finish one lesson).",
            "4th tone + 2nd tone: fàngxué.",
          ],
          solution: [
            "放学 (fàngxué) means to finish school for the day: 下午三点半放学。",
          ],
        },
        {
          id: "school-subjects-facilities-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "school-subjects-opinions",
          marks: 4,
          question:
            "Write a short Year 9 Mandarin paragraph (Simplified Chinese + tone-marked Pinyin) about the subjects you study. You must include:\n- how many subjects you study in total using the exact subject classifier\n- at least THREE specific subjects (including one language and one Science branch)\n- your favourite subject with a clear reason\n- ONE subject you think is difficult yet useful (using the paired *'although … yet …'* structure)",
          hints: [
            "Use 门 for whole subjects: 九年级我学习十门科目。",
            "Name 中文, 生物/化学/物理, 数学 or 历史.",
            "Give a reason with 因为, and end with 虽然……有点儿难，但是非常有用。",
          ],
          modelAnswer:
            "九年级我学习十门科目，包括中文、数学、生物、化学、物理和历史。我最喜欢生物，因为可以在实验室做有趣的实验。我觉得中文虽然有点儿难，但是非常有用。(Jiǔ niánjí wǒ xuéxí shí mén kēmù, bāokuò Zhōngwén, shùxué, shēngwù, huàxué, wùlǐ hé lìshǐ. Wǒ zuì xǐhuan shēngwù, yīnwèi kěyǐ zài shíyànshì zuò yǒuqù de shíyàn. Wǒ juéde Zhōngwén suīrán yǒudiǎnr nán, dànshì fēicháng yǒuyòng.)",
          markScheme: [
            {
              point: "Counts whole subjects accurately with 门 (e.g. 十门科目 / 九门科目 / 两门外语)",
              keywords: ["门科目", "门外语", "门课", "mén kēmù", "mén wàiyǔ"],
            },
            {
              point: "Names at least one language and one Science branch (中文/英文/西班牙文 + 生物/化学/物理)",
              keywords: ["生物", "化学", "物理", "shēngwù", "huàxué", "wùlǐ"],
            },
            {
              point: "Expresses favourite subject with 最喜欢 and a reason with 因为",
              keywords: ["最喜欢", "因为", "zuì xǐhuan", "yīnwèi"],
            },
            {
              point: "Uses paired 虽然……但是…… with 难 and 有用",
              keywords: ["虽然", "但是", "有用", "suīrán", "dànshì", "yǒuyòng"],
            },
          ],
          commonError:
            "Using 节 instead of 门 for whole subjects, or inserting 是 before adjectives (*中文是很有用*).",
        },
        {
          id: "school-subjects-facilities-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "school-timetable",
          marks: 4,
          question:
            "Describe a typical weekday at Tanglin Trust School in Simplified Chinese (with tone-marked Pinyin). Include:\n- school hours using the *'from … to …'* time-span pattern placed BEFORE the verb\n- total number of lessons per day using the exact period classifier\n- lunchtime hours\n- one after-school CCA and evening homework",
          hints: [
            "Open with 我们从上午八点到下午三点半上课，每天有六节课。",
            "Add 午饭时间从十二点半到一点半。",
            "Close with 放学以后我参加课外活动，晚上做作业。",
          ],
          modelAnswer:
            "我们每天从上午八点到下午三点半上课，每天有六节课，上午四节，下午两节。午饭时间从十二点半到一点半。下午三点半放学以后，我参加羽毛球课外活动，晚上花一个小时做作业。(Wǒmen měitiān cóng shàngwǔ bā diǎn dào xiàwǔ sān diǎn bàn shàngkè, měitiān yǒu liù jié kè, shàngwǔ sì jié, xiàwǔ liǎng jié. Wǔfàn shíjiān cóng shí'èr diǎn bàn dào yì diǎn bàn. Xiàwǔ sān diǎn bàn fàngxué yǐhòu, wǒ cānjiā yǔmáoqiú kèwài huódòng, wǎnshang huā yí ge xiǎoshí zuò zuòyè.)",
          markScheme: [
            {
              point: "Uses 从……到…… cleanly before 上课 for school hours",
              keywords: ["从上午", "到下午", "上课", "cóng shàngwǔ", "shàngkè"],
            },
            {
              point: "Counts daily periods accurately with 节 (e.g. 六节课)",
              keywords: ["节课", "jié kè"],
            },
            {
              point: "Includes lunchtime (午饭时间)",
              keywords: ["午饭时间", "wǔfàn shíjiān"],
            },
            {
              point: "Mentions after-school CCAs (课外活动) and homework (作业)",
              keywords: ["课外活动", "作业", "kèwài huódòng", "zuòyè"],
            },
          ],
          commonError:
            "Placing 从上午八点到下午三点半 after 上课, or using 门 instead of 节 for daily lessons.",
        },
        {
          id: "school-subjects-facilities-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "school-timetable",
          marks: 3,
          question:
            "Find and explain the THREE errors in this timetable sentence, then write the corrected version (with tone-marked Pinyin): *我们上课从八点到三点半，每天有六门课，下午有二节课。*",
          hints: [
            "Error 1: Where must the 从……到…… time span sit relative to 上课?",
            "Error 2: Daily timetable lessons take 节, not 门.",
            "Error 3: Check the number two directly before a measure word (二 vs 两).",
          ],
          modelAnswer:
            "1) Move 从八点到三点半 BEFORE 上课 (Time precedes verb in STPVO). 2) Change 六门课 to 六节课 (daily periods take 节, not 门). 3) Change 二节课 to 两节课 (standalone 2 before a measure word is 两). Corrected sentence: 我们从八点到三点半上课，每天有六节课，下午有两节课。(Wǒmen cóng bā diǎn dào sān diǎn bàn shàngkè, měitiān yǒu liù jié kè, xiàwǔ yǒu liǎng jié kè.)",
          markScheme: [
            {
              point: "Moves 从八点到三点半 before 上课 (从八点到三点半上课)",
              keywords: ["到三点半上课", "dào sān diǎn bàn shàngkè"],
            },
            {
              point: "Corrects 六门课 → 六节课",
              keywords: ["六节课", "liù jié kè"],
            },
            {
              point: "Corrects 二节课 → 两节课",
              keywords: ["两节课", "liǎng jié kè"],
            },
          ],
          commonError:
            "Remembering to fix 六门课 → 六节课 while overlooking 二节课 → 两节课.",
        },
      ],
    },
    {
      id: "school-subjects-facilities-p2",
      title: "Practice Paper 2 — Campus Facilities, Teachers & Comparisons",
      questions: [
        {
          id: "school-subjects-facilities-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "school-facilities",
          question: "Translate **assembly hall / auditorium** into Simplified Mandarin (or tone-marked Pinyin) — watch: NOT canteen!",
          answer: {
            type: "text",
            accept: ["礼堂", "lǐtáng"],
            display: "礼堂 (lǐtáng)",
          },
          traps: [
            { spec: { type: "text", accept: ["食堂", "shítáng"] }, feedback: "食堂 is the dining hall / canteen! Assembly hall starts with 礼 (ceremony): 礼堂." },
          ],
          hints: [
            "Starts with 礼 (lǐ — ceremony/politeness) + 堂 (táng — large hall).",
            "3rd tone + 2nd tone: lǐtáng.",
          ],
          solution: [
            "礼堂 (lǐtáng) means assembly hall / auditorium.",
          ],
        },
        {
          id: "school-subjects-facilities-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "school-facilities",
          question: "Translate **swimming pool** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["游泳池", "yóuyǒngchí"],
            display: "游泳池 (yóuyǒngchí)",
          },
          hints: [
            "Swim (游泳 yóuyǒng) + pool suffix 池 (chí).",
            "Pinyin: yóuyǒngchí.",
          ],
          solution: [
            "游泳池 (yóuyǒngchí) means swimming pool.",
          ],
        },
        {
          id: "school-subjects-facilities-p2-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "school-facilities",
          question: "Translate **sports field / athletics ground** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["运动场", "操场", "yùndòngchǎng", "cāochǎng"],
            display: "运动场 (yùndòngchǎng)",
          },
          traps: [
            { spec: { type: "text", accept: ["体育馆", "tǐyùguǎn"] }, feedback: "体育馆 is the INDOOR sports hall / gym; the outdoor field ends in 场 (运动场 / 操场)!" },
          ],
          hints: [
            "Ends with the open-field suffix 场 (chǎng).",
            "运动场 (yùndòngchǎng) or 操场 (cāochǎng).",
          ],
          solution: [
            "运动场 (yùndòngchǎng) or 操场 (cāochǎng) means outdoor sports field / playground.",
          ],
        },
        {
          id: "school-subjects-facilities-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "school-facilities",
          question: "Translate **music room** into Simplified Mandarin (or tone-marked Pinyin) — watch the tone of **乐**!",
          answer: {
            type: "text",
            accept: ["音乐室", "yīnyuèshì"],
            display: "音乐室 (yīnyuèshì)",
          },
          traps: [
            { spec: { type: "text", accept: ["yīnlèshì"] }, feedback: "In Music (音乐), 乐 is pronounced yuè (4th tone), NOT lè → yīnyuèshì!" },
          ],
          hints: [
            "Music (音乐 yīnyuè) + room suffix 室 (shì).",
            "Pinyin: yīnyuèshì.",
          ],
          solution: [
            "音乐室 (yīnyuèshì) means music room.",
          ],
        },
        {
          id: "school-subjects-facilities-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "school-facilities",
          question: "Re-order these 4 blocks into accurate **STPVO** Mandarin: `吃午饭` / `我` / `在食堂` / `午饭时间`.",
          answer: {
            type: "text",
            accept: [
              "午饭时间我在食堂吃午饭",
              "我午饭时间在食堂吃午饭",
              "wǔfàn shíjiān wǒ zài shítáng chī wǔfàn",
              "wǒ wǔfàn shíjiān zài shítáng chī wǔfàn",
            ],
            display: "午饭时间我在食堂吃午饭 (Wǔfàn shíjiān wǒ zài shítáng chī wǔfàn)",
          },
          traps: [
            { spec: { type: "text", accept: ["我吃午饭在食堂午饭时间", "午饭时间我吃午饭在食堂"] }, feedback: "Place 在食堂 directly BEFORE 吃午饭 in Mandarin STPVO!" },
          ],
          hints: [
            "Put Time (午饭时间) and Place (在食堂) BEFORE the action (吃午饭).",
            "午饭时间 can stand before or right after 我.",
          ],
          solution: [
            "Time (午饭时间) + Subject (我) + Place (在食堂) + Action (吃午饭) → 午饭时间我在食堂吃午饭。",
          ],
        },
        {
          id: "school-subjects-facilities-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "school-facilities",
          question: "Translate **opposite / across from** (as in *The pool is opposite the sports hall*) into Simplified Mandarin.",
          answer: {
            type: "text",
            accept: ["对面", "duìmiàn"],
            display: "对面 (duìmiàn)",
          },
          hints: [
            "Literally 'facing side' (对 + 面).",
            "Both syllables are 4th tone: duìmiàn.",
          ],
          solution: [
            "对面 (duìmiàn) means opposite: 游泳池在体育馆的对面。",
          ],
        },
        {
          id: "school-subjects-facilities-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "school-facilities",
          question: "Translate **to do experiments** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["做实验", "zuò shíyàn", "zuòshíyàn"],
            display: "做实验 (zuò shíyàn)",
          },
          hints: [
            "Verb 做 (zuò — do/make) + 实验 (shíyàn — experiment).",
            "Pinyin: zuò shíyàn.",
          ],
          solution: [
            "做实验 (zuò shíyàn) means to do experiments: 我们在科学实验室做实验。",
          ],
        },
        {
          id: "school-subjects-facilities-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-subjects-teachers",
          question: "Translate the teacher adjective **humorous** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["幽默", "yōumò"],
            display: "幽默 (yōumò)",
          },
          hints: [
            "Sounds a bit like the English word 'humour'.",
            "1st tone + 4th tone: yōumò.",
          ],
          solution: [
            "幽默 (yōumò) means humorous: 历史老师非常幽默。",
          ],
        },
        {
          id: "school-subjects-facilities-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-subjects-teachers",
          question: "Translate the teacher adjective **strict** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["严格", "yángé"],
            display: "严格 (yángé)",
          },
          hints: [
            "Both syllables are 2nd tone: yángé.",
            "Often balanced with 虽然有点儿___，但是教得很好.",
          ],
          solution: [
            "严格 (yángé) means strict.",
          ],
        },
        {
          id: "school-subjects-facilities-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-subjects-teachers",
          question: "Translate **Maths is harder than History** into Simplified Mandarin (remember: NO **很**!).",
          answer: {
            type: "text",
            accept: ["数学比历史难", "shùxué bǐ lìshǐ nán"],
            display: "数学比历史难 (Shùxué bǐ lìshǐ nán)",
          },
          traps: [
            { spec: { type: "text", accept: ["数学比历史很难", "shùxué bǐ lìshǐ hěn nán"] }, feedback: "NEVER place 很 after 比! Write 数学比历史难 (or 难一点儿 / 难得多)." },
          ],
          hints: [
            "Frame: A 比 B + Adjective (no 很!).",
            "Maths = 数学 (shùxué), History = 历史 (lìshǐ), hard = 难 (nán).",
          ],
          solution: [
            "A (数学) + 比 + B (历史) + 难 → 数学比历史难 (Shùxué bǐ lìshǐ nán).",
          ],
        },
        {
          id: "school-subjects-facilities-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-subjects-teachers",
          question: "Fill in the negative comparison word meaning *\"not as … as\"*: **地理___物理那么难。**",
          answer: {
            type: "text",
            accept: ["没有", "méiyǒu"],
            display: "没有 (méiyǒu)",
          },
          traps: [
            { spec: { type: "text", accept: ["比", "bǐ"] }, feedback: "比 means MORE difficult than; 'not as … as' uses 没有 (méiyǒu)!" },
          ],
          hints: [
            "Standard negative comparison pattern: A ___ B (那么) + Adj.",
            "Same word as 'do not have': méiyǒu.",
          ],
          solution: [
            "A 没有 B (那么) + Adj = 'A is not as adj as B' → 地理没有物理那么难。",
          ],
        },
        {
          id: "school-subjects-facilities-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-subjects-teachers",
          question: "Translate **patient** (as a teacher quality) into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["耐心", "nàixīn"],
            display: "耐心 (nàixīn)",
          },
          hints: [
            "Literally 'enduring heart' (耐 + 心).",
            "4th tone + 1st tone: nàixīn.",
          ],
          solution: [
            "耐心 (nàixīn) means patient / patience: 中文老师非常耐心。",
          ],
        },
        {
          id: "school-subjects-facilities-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "school-facilities",
          marks: 4,
          question:
            "Give a short Mandarin campus tour of your school (Simplified Chinese + tone-marked Pinyin). You must include:\n- TWO adjectives describing the campus or classrooms (e.g. modern, spacious, bright)\n- THREE distinct school facilities (such as library, science lab, sports hall, canteen, or swimming pool)\n- ONE relative location sentence (using *next to*, *opposite*, or *upstairs/downstairs*)\n- ONE STPVO activity sentence stating what students do inside one of those facilities",
          hints: [
            "Describe campus: 我们学校的校园又现代又宽敞。",
            "Give location: 游泳池在体育馆的对面 / 科学实验室在图书馆的楼上。",
            "Add STPVO action: 午饭后我常常在图书馆借书和看书。",
          ],
          modelAnswer:
            "我们学校的校园非常现代，教室又宽敞又明亮。学校里有图书馆、科学实验室、体育馆和游泳池。游泳池就在体育馆的对面，非常方便。每天午饭以后，我常常在图书馆借书和复习。(Wǒmen xuéxiào de xiàoyuán fēicháng xiàndài, jiàoshì yòu kuānchang yòu míngliàng. Xuéxiào lǐ yǒu túshūguǎn, kēxué shíyànshì, tǐyùguǎn hé yóuyǒngchí. Yóuyǒngchí jiù zài tǐyùguǎn de duìmiàn, fēicháng fāngbiàn. Měitiān wǔfàn yǐhòu, wǒ chángcháng zài túshūguǎn jiè shū hé fùxí.)",
          markScheme: [
            {
              point: "Describes campus/rooms with quality adjectives (现代 / 宽敞 / 明亮 / 先进 / 干净)",
              keywords: ["现代", "宽敞", "明亮", "先进", "xiàndài", "kuānchang", "míngliàng"],
            },
            {
              point: "Names campus facilities accurately (图书馆 / 实验室 / 体育馆 / 游泳池 / 食堂)",
              keywords: ["图书馆", "实验室", "体育馆", "游泳池", "食堂", "túshūguǎn", "shíyànshì"],
            },
            {
              point: "States relative campus location with 在……的旁边 / 对面 / 楼上 / 楼下",
              keywords: ["对面", "旁边", "楼上", "楼下", "duìmiàn", "pángbiān", "lóushàng"],
            },
            {
              point: "Includes an STPVO campus activity (在 + facility + verb: 借书 / 做实验 / 打篮球 / 吃午饭)",
              keywords: ["在图书馆", "在实验室", "在食堂", "在体育馆", "借书", "做实验"],
            },
          ],
          commonError:
            "Placing the facility after the verb (*借书在图书馆*) or confusing 食堂 (canteen) with 礼堂 (assembly hall).",
        },
        {
          id: "school-subjects-facilities-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "comparing-subjects-teachers",
          marks: 4,
          question:
            "Write a short paragraph (Simplified Chinese + tone-marked Pinyin) comparing two school subjects and describing one teacher. You must include:\n- a comparison between two subjects (without inserting *very* before the adjective!)\n- your favourite subject using the superlative *most*\n- TWO personality adjectives describing a teacher (e.g. humorous, patient, or strict)\n- an evaluation of how well they teach using the proper post-verb degree particle",
          hints: [
            "Compare with 比 + Adj (+ 一点儿 / 得多 / 更): 我觉得数学比历史难得多。",
            "Superlative: 不过我最喜欢科学。",
            "Teacher + 得: 虽然物理老师有点儿严格，但是他非常耐心，而且教得很好。",
          ],
          modelAnswer:
            "我觉得数学比历史难得多，可是地理没有物理那么难。在所有科目里，我最喜欢中文，因为我们的中文老师不但非常幽默，而且很有耐心，教得很好！(Wǒ juéde shùxué bǐ lìshǐ nán de duō, kěshì dìlǐ méiyǒu wùlǐ nàme nán. Zài suǒyǒu kēmù lǐ, wǒ zuì xǐhuan Zhōngwén, yīnwèi wǒmen de Zhōngwén lǎoshī búdàn fēicháng yōumò, érqiě hěn yǒu nàixīn, jiāo de hěn hǎo!)",
          markScheme: [
            {
              point: "Compares two subjects accurately using 比 (without 很)",
              keywords: ["比", "bǐ"],
            },
            {
              point: "States favourite subject with 最 (最喜欢)",
              keywords: ["最喜欢", "zuì xǐhuan"],
            },
            {
              point: "Describes teacher traits accurately (幽默 / 耐心 / 严格 / 友善)",
              keywords: ["幽默", "耐心", "严格", "yōumò", "nàixīn", "yángé"],
            },
            {
              point: "Uses post-verb degree complement 教得很好 (with 得, not 的)",
              keywords: ["教得很好", "教得非常", "jiāo de hěn hǎo"],
            },
          ],
          commonError:
            "Writing *数学比历史很难* or *教的很好* (with 的 instead of 得).",
        },
        {
          id: "school-subjects-facilities-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "comparing-subjects-teachers",
          marks: 4,
          question:
            "Write a cohesive 80–100 character essay (Simplified Chinese + tone-marked Pinyin) introducing your school life at Tanglin Trust School. Cover:\n- school timetable hours and daily lesson count\n- your favourite facility and what you do there\n- a subject comparison and teacher description\n- ONE future plan for Year 10 elective options",
          hints: [
            "Timetable: 我在唐林信托学校读九年级，从上午八点到下午三点半上课，每天有六节课。",
            "Facility: 我最喜欢现代的科学实验室，每个星期三在那里做实验。",
            "Comparison + future: 科学比历史更有趣，科学老师教得很好。明年十年级我打算选修中文和化学。",
          ],
          modelAnswer:
            "我在唐林信托学校读九年级。我们从上午八点到下午三点半上课，每天有六节课。学校设施非常先进，我最喜欢科学实验室，每个星期三都在那里做实验。我觉得科学比历史更有趣，科学老师既幽默又耐心，教得很好。明年十年级我打算选修中文和化学，希望将来能考出好成绩。(Wǒ zài Tánglín Xìntuō Xuéxiào dú jiǔ niánjí. Wǒmen cóng shàngwǔ bā diǎn dào xiàwǔ sān diǎn bàn shàngkè, měitiān yǒu liù jié kè. Xuéxiào shèshī fēicháng xiānjìn, wǒ zuì xǐhuan kēxué shíyànshì, měi ge xīngqīsān dōu zài nàlǐ zuò shíyàn. Wǒ juéde kēxué bǐ lìshǐ gèng yǒuqù, kēxué lǎoshī jì yōumò yòu nàixīn, jiāo de hěn hǎo. Míngnián shí niánjí wǒ dǎsuàn xuǎnxiū Zhōngwén hé huàxué, xīwàng jiānglái néng kǎochū hǎo chéngjì.)",
          markScheme: [
            {
              point: "Includes school hours (从……到……) and daily lesson count with 节",
              keywords: ["从上午", "节课", "cóng shàngwǔ", "jié kè"],
            },
            {
              point: "Describes a campus facility and activity in STPVO order",
              keywords: ["实验室", "图书馆", "体育馆", "游泳池", "做实验", "借书"],
            },
            {
              point: "Compares subjects with 比 and evaluates a teacher with 教得很好 / 幽默 / 耐心",
              keywords: ["比", "教得", "幽默", "耐心", "jiāo de"],
            },
            {
              point: "Adds Year 10 future option plan using 明年 / 打算 / 选修",
              keywords: ["打算", "选修", "明年", "dǎsuàn", "xuǎnxiū"],
            },
          ],
          commonError:
            "Forgetting the future time frame (明年 / 打算选修) or mixing up 门 and 节.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "school-subjects-facilities-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "comparing-subjects-teachers",
      question: "Translate into Simplified Mandarin using **没有** (*not as … as*): **Geography is not as difficult as Physics.**",
      answer: {
        type: "text",
        accept: [
          "地理没有物理那么难",
          "地理没有物理难",
          "dìlǐ méiyǒu wùlǐ nàme nán",
          "dìlǐ méiyǒu wùlǐ nán",
        ],
        display: "地理没有物理那么难 (Dìlǐ méiyǒu wùlǐ nàme nán)",
      },
      traps: [
        { spec: { type: "text", accept: ["地理不比物理很难", "地理没有物理很难"] }, feedback: "Don't insert 很 — use 没有 + B + (那么) + 难!" },
      ],
      hints: [
        "Negative comparison frame: A 没有 B (那么) + Adj.",
        "Geography = 地理 (dìlǐ); Physics = 物理 (wùlǐ); difficult = 难 (nán).",
        "Optionally include 那么 (nàme — 'that / so') before 难.",
      ],
      solution: [
        "A (地理) + 没有 + B (物理) + 那么 + 难 → 地理没有物理那么难 (Dìlǐ méiyǒu wùlǐ nàme nán).",
      ],
    },
    {
      id: "school-subjects-facilities-ch-q02",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "school-subjects-opinions",
      question: "Which sentence correctly expresses *\"I study ten subjects, including two foreign languages, and have six lessons every day\"*?",
      options: [
        "我学习十节科目，包括两节外语，每天有六门课。",
        "我学习十门科目，包括两门外语，每天有六节课。",
        "我学习十门科目，包括二门外语，每天有六节课。",
        "我学习十个科目，包括两门外语，每天有六门课。",
      ],
      answerIndex: 1,
      hints: [
        "Check THREE rules simultaneously: 科目 → 门, 外语 → 门 with 两 (NOT 二!), daily lessons → 节.",
        "Eliminate any option with 二门, 十节科目, or 六门课.",
      ],
      explanation:
        "**我学习十门科目，包括两门外语，每天有六节课** gets all three classifiers and **两** completely right: **十门科目**, **两门外语**, and **六节课**.",
    },
    {
      id: "school-subjects-facilities-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "comparing-subjects-teachers",
      question: "Translate into Simplified Mandarin (NO **很** after **比**!): **Chemistry is even more interesting than Biology.**",
      answer: {
        type: "text",
        accept: [
          "化学比生物更有趣",
          "化学比生物更有意思",
          "huàxué bǐ shēngwù gèng yǒuqù",
          "huàxué bǐ shēngwù gèng yǒuyìsi",
        ],
        display: "化学比生物更有趣 (Huàxué bǐ shēngwù gèng yǒuqù)",
      },
      traps: [
        { spec: { type: "text", accept: ["化学比生物很有趣", "化学比生物非常有趣"] }, feedback: "Never use 很 or 非常 after 比! For 'even more', use 更 (gèng)." },
      ],
      hints: [
        "Chemistry = 化学 (huàxué); Biology = 生物 (shēngwù).",
        "'Even more' in a 比 sentence is 更 (gèng) directly before the adjective.",
        "Interesting = 有趣 (yǒuqù) or 有意思 (yǒuyìsi).",
      ],
      solution: [
        "A (化学) + 比 + B (生物) + 更 (even more) + 有趣 → 化学比生物更有趣。",
      ],
    },
    {
      id: "school-subjects-facilities-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "school-facilities",
      question: "Read: **从教室出发，先下楼，经过食堂后往右拐，游泳池就在体育馆的对面。** Which route leads to the swimming pool?",
      options: [
        "Go upstairs, pass the library, turn left; the pool is behind the canteen.",
        "Go downstairs, pass the canteen, turn right; the pool is opposite the sports hall.",
        "Go downstairs, pass the music room, turn left; the pool is inside the sports hall.",
        "Stay on the same floor, pass the hall, turn right; the pool is beside the science lab.",
      ],
      answerIndex: 1,
      hints: [
        "Trace each direction verb in order: 下楼 (go downstairs) → 经过食堂 (pass the canteen) → 往右拐 (turn right).",
        "Final landmark: 就在体育馆的对面 (right opposite the sports hall).",
      ],
      explanation:
        "**先下楼** (go downstairs), **经过食堂** (pass the canteen), **往右拐** (turn right), and **就在体育馆的对面** (right opposite the sports hall) trace the exact campus route.",
    },
    {
      id: "school-subjects-facilities-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "school-timetable",
      question: "Translate into Simplified Mandarin: **Lunchtime is from 12:30 to 1:30.**",
      answer: {
        type: "text",
        accept: [
          "午饭时间从十二点半到一点半",
          "午饭时间是从十二点半到一点半",
          "wǔfàn shíjiān cóng shí'èr diǎn bàn dào yì diǎn bàn",
          "wǔfàn shíjiān shì cóng shí'èr diǎn bàn dào yì diǎn bàn",
          "wǔfàn shíjiān cóng shíèr diǎn bàn dào yī diǎn bàn",
        ],
        display: "午饭时间从十二点半到一点半 (Wǔfàn shíjiān cóng shí'èr diǎn bàn dào yì diǎn bàn)",
      },
      hints: [
        "Lunchtime = 午饭时间 (wǔfàn shíjiān).",
        "12:30 = 十二点半; 1:30 = 一点半.",
        "Join with 从……到…….",
      ],
      solution: [
        "午饭时间 + (是) + 从十二点半到一点半 → 午饭时间从十二点半到一点半。",
      ],
    },
    {
      id: "school-subjects-facilities-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "comparing-subjects-teachers",
      question: "Read: **王老师不但在课堂上讲得很清楚，而且下课后还常常在办公室耐心地帮我们复习。** What makes Teacher Wang so appreciated?",
      options: [
        "She explains clearly in class and patiently helps students revise after class.",
        "She cancels Friday tests and lets students play football on the field.",
        "She teaches only small groups in the music room during lunchtime.",
        "She gives students half an hour of break after every single lesson.",
      ],
      answerIndex: 0,
      hints: [
        "Clause 1: 讲得很清楚 (explains very clearly — degree complement 得!).",
        "Clause 2: 下课后还常常在办公室耐心地帮我们复习 (after class often patiently helps us revise in the office).",
      ],
      explanation:
        "Using **不但……而且……**, the text praises Teacher Wang because she **讲得很清楚** (*explains very clearly*) in class and **耐心地帮我们复习** (*patiently helps us revise*) in her office after class.",
    },
    {
      id: "school-subjects-facilities-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "school-facilities",
      marks: 4,
      question:
        "A visiting Year 9 student from Beijing asks what makes your school campus special. Write a bilingual reply (Simplified Chinese + tone-marked Pinyin) containing:\n- a **not only … but also …** sentence praising two campus qualities\n- a clear location sentence linking two buildings (e.g. library, science lab, sports hall, or pool)\n- ONE past experience (*yesterday* or *last week* with completed-action marker) of an activity you did in a school facility\n- ONE suggestion inviting the visitor to try a facility or CCA with you",
      hints: [
        "Use 不但……而且……: 我们的校园不但非常现代，而且运动设施很先进。",
        "Location: 科学实验室在图书馆的楼上，游泳池在体育馆的对面。",
        "Past (了) + invite: 上星期三我们在科学实验室做了一个有趣的实验。放学后一起去体育馆打羽毛球吧！",
      ],
      modelAnswer:
        "我们的校园不但非常现代，而且设施十分先进。图书馆在食堂的旁边，五十米长的游泳池就在体育馆的对面。上星期三我在科学实验室做了一个很有趣的化学实验。今天下午放学以后，我们一起去体育馆参加羽毛球课外活动吧！(Wǒmen de xiàoyuán búdàn fēicháng xiàndài, érqiě shèshī shífēn xiānjìn. Túshūguǎn zài shítáng de pángbiān, wǔshí mǐ cháng de yóuyǒngchí jiù zài tǐyùguǎn de duìmiàn. Shàng xīngqīsān wǒ zài kēxué shíyànshì zuò le yí ge hěn yǒuqù de huàxué shíyàn. Jīntiān xiàwǔ fàngxué yǐhòu, wǒmen yìqǐ qù tǐyùguǎn cānjiā yǔmáoqiú kèwài huódòng ba!)",
      markScheme: [
        {
          point: "Uses paired 不但……而且…… to praise campus qualities",
          keywords: ["不但", "而且", "búdàn", "érqiě"],
        },
        {
          point: "Links two named facilities with a campus position word (旁边 / 对面 / 楼上 / 楼下)",
          keywords: ["旁边", "对面", "楼上", "楼下", "pángbiān", "duìmiàn"],
        },
        {
          point: "Narrates a past facility activity with completed-action 了",
          keywords: ["做了", "借了", "打了", "游了", "zuò le", "jiè le"],
        },
        {
          point: "Includes an invitation using 一起……吧 or 邀请",
          keywords: ["一起", "吧", "yìqǐ"],
        },
      ],
      commonError:
        "Omitting 了 in the past-tense campus anecdote or forgetting 而且 after 不但.",
    },
    {
      id: "school-subjects-facilities-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "comparing-subjects-teachers",
      marks: 4,
      question:
        "Translate this IGCSE-level paragraph into Simplified Chinese (with tone-marked Pinyin):\n*\"In Year 9 I study ten subjects and have six lessons every day from 8:00 a.m. to 3:30 p.m. I think Physics is harder than Geography, yet our Physics teacher is humorous and teaches very well. Next year I plan to choose Chinese and Computer Science as my options.\"*",
      hints: [
        "Watch 门 vs 节: 十门科目 vs 六节课, and put 从上午八点到下午三点半 BEFORE 上课.",
        "Compare without 很: 物理比地理难; evaluate teaching with 得: 教得很好.",
        "Future options: 明年我打算选修中文和计算机 (or 电脑).",
      ],
      modelAnswer:
        "九年级我学习十门科目，每天从上午八点到下午三点半上六节课。我觉得物理比地理难，可是我们的物理老师很幽默，而且教得很好。明年我打算选修中文和计算机。(Jiǔ niánjí wǒ xuéxí shí mén kēmù, měitiān cóng shàngwǔ bā diǎn dào xiàwǔ sān diǎn bàn shàng liù jié kè. Wǒ juéde wùlǐ bǐ dìlǐ nán, kěshì wǒmen de wùlǐ lǎoshī hěn yōumò, érqiě jiāo de hěn hǎo. Míngnián wǒ dǎsuàn xuǎnxiū Zhōngwén hé jìsuànjī.)",
      markScheme: [
        {
          point: "Accurate subject and lesson classifiers plus time span (十门科目, 从上午八点到下午三点半, 六节课)",
          keywords: ["十门科目", "六节课", "shí mén kēmù", "liù jié kè"],
        },
        {
          point: "Compares Physics and Geography accurately with 物理比地理难 (no 很!)",
          keywords: ["物理比地理难", "wùlǐ bǐ dìlǐ nán"],
        },
        {
          point: "Describes teacher as humorous (幽默) and uses 得 complement (教得很好)",
          keywords: ["幽默", "教得很好", "yōumò", "jiāo de hěn hǎo"],
        },
        {
          point: "Expresses next year's option plan with 打算选修 + 中文 + 计算机/电脑",
          keywords: ["选修", "计算机", "电脑", "xuǎnxiū", "jìsuànjī"],
        },
      ],
      commonError:
        "Writing *物理比地理很难*, *教的很好*, or swapping 门 and 节.",
    },
  ],
};
