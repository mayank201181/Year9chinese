// Audited practice bank for Year 9 Mandarin Chinese — Pets & Animal Care (宠物)
// quiz (10) + p1 (15) + p2 (15) + challenge (8) = 48 questions.
// Simplified Chinese (简体中文) with tone-marked Pinyin throughout.
import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "pets-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "common-pets-measure-words",
      question: "Fill in the exact animal measure word: **我家有两___小狗** (two puppies). Type Simplified Hanzi or tone-marked Pinyin.",
      answer: {
        type: "text",
        accept: ["只", "zhī"],
        display: "只 (zhī)",
      },
      traps: [
        { spec: { type: "text", accept: ["个", "gè"] }, feedback: "Don't default to 个 for pets — dogs take the animal classifier 只 (zhī)." },
        { spec: { type: "text", accept: ["匹", "pǐ"] }, feedback: "匹 (pǐ) is only for horses! Dogs take 只 (zhī)." },
      ],
      hints: [
        "Compact pets like dogs, cats, rabbits, and birds share one core classifier.",
        "First tone: zhī.",
      ],
      solution: [
        "Dogs, cats, rabbits, hamsters, birds, and turtles all take 只 (zhī).",
        "两只小狗 (liǎng zhī xiǎogǒu) = two puppies.",
      ],
    },
    {
      id: "pets-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "common-pets-measure-words",
      question: "Translate **three goldfish** into Simplified Mandarin (or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["三条金鱼", "sān tiáo jīnyú", "sāntiáo jīnyú"],
        display: "三条金鱼 (sān tiáo jīnyú)",
      },
      traps: [
        { spec: { type: "text", accept: ["三只金鱼", "sān zhī jīnyú"] }, feedback: "Fish never take 只 — long, slender swimming animals take 条 (tiáo)." },
      ],
      hints: [
        "Goldfish is 金鱼 (jīnyú).",
        "Remember: fish take the long/slender measure word 条 (tiáo).",
      ],
      solution: [
        "3 = 三 (sān), fish classifier = 条 (tiáo), goldfish = 金鱼 (jīnyú).",
        "Combine: 三条金鱼 (sān tiáo jīnyú).",
      ],
    },
    {
      id: "pets-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "common-pets-measure-words",
      question: "Which animal takes the measure word **匹 (pǐ)**?",
      options: ["乌龟 (wūguī)", "马 (mǎ)", "仓鼠 (cāngshǔ)", "金鱼 (jīnyú)"],
      answerIndex: 1,
      hints: [
        "匹 is reserved for one specific large riding animal.",
        "乌龟 and 仓鼠 take 只; 金鱼 takes 条.",
      ],
      explanation:
        "Horses (**马 mǎ**) take **匹 (pǐ)**: **一匹马**, **两匹马**. Turtles and hamsters take **只**, and goldfish take **条**.",
    },
    {
      id: "pets-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      guideRef: "describing-pets",
      question: "What is the Mandarin word for **fur / hair (on an animal)**? Type Simplified Hanzi or tone-marked Pinyin.",
      answer: {
        type: "text",
        accept: ["毛", "máo"],
        display: "毛 (máo)",
      },
      hints: [
        "It is a single 2nd-tone character used in the pet name 毛毛 (Fluffy).",
        "Pinyin starts with m- (2nd tone).",
      ],
      solution: [
        "毛 (máo) means fur, hair, or feathers on an animal: 它的毛又白又软。",
      ],
    },
    {
      id: "pets-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "describing-pets",
      question: "Translate into Mandarin: **lively / energetic** (an adjective often used for puppies).",
      answer: {
        type: "text",
        accept: ["活泼", "huópō"],
        display: "活泼 (huópō)",
      },
      hints: [
        "A two-character adjective starting with 活 (huó — alive/active).",
        "Pinyin: huópō.",
      ],
      solution: [
        "活泼 (huópō) means lively/energetic: 我的小狗很活泼。",
      ],
    },
    {
      id: "pets-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "describing-pets",
      question: "Which sentence correctly says *\"My little cat is a bit naughty\"*?",
      options: [
        "我的小猫有点儿淘气。",
        "我的小猫淘气有点儿。",
        "我的小猫是有淘气。",
        "我的小猫有点儿很淘气。",
      ],
      answerIndex: 0,
      hints: [
        "有点儿 (yǒudiǎnr) stands directly BEFORE a slightly negative adjective.",
        "Never stack 有点儿 with 很, and never place 有点儿 after the adjective.",
      ],
      explanation:
        "**我的小猫有点儿淘气** places **有点儿** directly before **淘气** (*naughty*) with no extra **很** or **是**.",
    },
    {
      id: "pets-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "caring-for-pets",
      question: "Translate the daily care action **to walk the dog** into Simplified Mandarin (or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["遛狗", "liù gǒu", "liùgǒu"],
        display: "遛狗 (liù gǒu)",
      },
      traps: [
        { spec: { type: "text", accept: ["喂狗", "wèi gǒu", "wèigǒu"] }, feedback: "喂狗 means to FEED the dog! Walking the dog uses 遛 (liù)." },
      ],
      hints: [
        "The verb has the walking radical 辶 and is pronounced in the 4th tone.",
        "Verb + 狗 (gǒu).",
      ],
      solution: [
        "遛狗 (liù gǒu) means to walk the dog: 我每天晚上在公园遛狗。",
      ],
    },
    {
      id: "pets-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "caring-for-pets",
      question: "Fill in the single missing word so the sentence means *\"I give the puppy a bath\"*: **我___小狗洗澡。**",
      answer: {
        type: "text",
        accept: ["给", "gěi"],
        display: "给 (gěi)",
      },
      traps: [
        { spec: { type: "text", accept: ["在", "zài"] }, feedback: "在 introduces a place; giving a bath to a pet uses 给 (gěi)." },
      ],
      hints: [
        "洗澡 cannot take an object after it, so you introduce the pet beforehand with 'for / to'.",
        "The preposition is pronounced gěi (3rd tone).",
      ],
      solution: [
        "Use 给 (gěi) + pet + 洗澡: 我给小狗洗澡 (Wǒ gěi xiǎogǒu xǐzǎo).",
      ],
    },
    {
      id: "pets-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "reasons-for-against-pets",
      question: "Fill in the single missing word: **爸爸___猫毛过敏** (Dad is allergic to cat fur).",
      answer: {
        type: "text",
        accept: ["对", "duì"],
        display: "对 (duì)",
      },
      traps: [
        { spec: { type: "text", accept: ["给", "gěi"] }, feedback: "Allergies never take 给 — use the fixed pattern 对……过敏." },
      ],
      hints: [
        "Mandarin uses one fixed preposition meaning 'towards / to' before the allergen.",
        "4th tone: duì.",
      ],
      solution: [
        "The allergy pattern is Subject + 对 + allergen + 过敏: 爸爸对猫毛过敏。",
      ],
    },
    {
      id: "pets-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      guideRef: "reasons-for-against-pets",
      question: "Which connective correctly completes **养宠物虽然很花时间，___它能给我们带来很多快乐**?",
      options: ["所以 (suǒyǐ)", "而且 (érqiě)", "但是 (dànshì)", "因为 (yīnwèi)"],
      answerIndex: 2,
      hints: [
        "Look at the opening bracket 虽然 (suīrán — although).",
        "虽然 pairs with a contrasting word meaning 'yet / but'.",
      ],
      explanation:
        "**虽然** (*although*) always pairs with **但是 (dànshì)** (or **可是**) to show contrast. **所以** pairs with **因为**, and **而且** pairs with **不但**.",
    },
  ],
  papers: [
    {
      id: "pets-p1",
      title: "Practice Paper 1 — Pets, Measure Words & Descriptions",
      questions: [
        {
          id: "pets-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "common-pets-measure-words",
          question: "Translate **two rabbits** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["两只兔子", "两只小兔子", "liǎng zhī tùzi", "liǎng zhī xiǎo tùzi"],
            display: "两只兔子 (liǎng zhī tùzi)",
          },
          traps: [
            { spec: { type: "text", accept: ["二只兔子", "èr zhī tùzi"] }, feedback: "Before a measure word, 2 must always be 两 (liǎng), not 二!" },
            { spec: { type: "text", accept: ["两个兔子", "liǎng ge tùzi", "liǎng gè tùzi"] }, feedback: "Rabbits take the animal classifier 只 (zhī), not 个!" },
          ],
          hints: [
            "Use 两 (liǎng) for two before a measure word.",
            "Rabbits (兔子 tùzi) take 只 (zhī).",
          ],
          solution: [
            "2 before MW = 两 (liǎng), rabbit classifier = 只 (zhī), rabbit = 兔子 (tùzi).",
            "Answer: 两只兔子 (liǎng zhī tùzi).",
          ],
        },
        {
          id: "pets-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "common-pets-measure-words",
          question: "Translate **one turtle / tortoise** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["一只乌龟", "一只小乌龟", "yì zhī wūguī", "yī zhī wūguī", "yì zhī xiǎo wūguī"],
            display: "一只乌龟 (yì zhī wūguī)",
          },
          traps: [
            { spec: { type: "text", accept: ["一条乌龟", "yì tiáo wūguī", "yī tiáo wūguī"] }, feedback: "Turtles are compact-shelled pets, so they take 只 (zhī), not 条!" },
          ],
          hints: [
            "Turtle is 乌龟 (wūguī).",
            "Turtles take the compact-animal measure word 只 (zhī).",
          ],
          solution: [
            "1 = 一, turtle classifier = 只 (zhī), turtle = 乌龟 (wūguī) → 一只乌龟 (yì zhī wūguī).",
          ],
        },
        {
          id: "pets-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "common-pets-measure-words",
          question: "Translate **two horses** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["两匹马", "liǎng pǐ mǎ"],
            display: "两匹马 (liǎng pǐ mǎ)",
          },
          traps: [
            { spec: { type: "text", accept: ["两只马", "liǎng zhī mǎ"] }, feedback: "Horses never take 只 — use the horse classifier 匹 (pǐ)!" },
            { spec: { type: "text", accept: ["二匹马", "èr pǐ mǎ"] }, feedback: "Use 两 (liǎng) before a measure word, never 二!" },
          ],
          hints: [
            "Remember the 两 rule for 'two' before a measure word.",
            "Horses take their own special measure word: 匹 (pǐ).",
          ],
          solution: [
            "2 = 两 (liǎng), horse classifier = 匹 (pǐ), horse = 马 (mǎ) → 两匹马 (liǎng pǐ mǎ).",
          ],
        },
        {
          id: "pets-p1-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "common-pets-measure-words",
          question: "What is the Mandarin word for **hamster**? Type Simplified Hanzi or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["仓鼠", "cāngshǔ"],
            display: "仓鼠 (cāngshǔ)",
          },
          hints: [
            "Literally 'storehouse mouse'.",
            "1st tone + 3rd tone: cāngshǔ.",
          ],
          solution: [
            "仓鼠 (cāngshǔ) means hamster: 一只仓鼠 (yì zhī cāngshǔ).",
          ],
        },
        {
          id: "pets-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "common-pets-measure-words",
          question: "Write **six goldfish** in Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["六条金鱼", "liù tiáo jīnyú"],
            display: "六条金鱼 (liù tiáo jīnyú)",
          },
          traps: [
            { spec: { type: "text", accept: ["六只金鱼", "liù zhī jīnyú"] }, feedback: "Goldfish take 条 (tiáo), never 只!" },
          ],
          hints: [
            "6 = 六 (liù), goldfish = 金鱼 (jīnyú).",
            "Choose the slender/swimming animal classifier.",
          ],
          solution: [
            "六 (6) + 条 (fish MW) + 金鱼 (goldfish) = 六条金鱼 (liù tiáo jīnyú).",
          ],
        },
        {
          id: "pets-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "describing-pets",
          question: "What is the Mandarin word for **tail**? Type Simplified Hanzi or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["尾巴", "wěiba"],
            display: "尾巴 (wěiba)",
          },
          hints: [
            "Dogs wag this when they see you come home (摇___).",
            "Starts with wěi- (3rd tone + neutral tone).",
          ],
          solution: [
            "尾巴 (wěiba) means tail: 小狗开心的时候会摇尾巴。",
          ],
        },
        {
          id: "pets-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "describing-pets",
          question: "Translate into Simplified Mandarin: **both cute and clever** (using the **又……又……** pattern).",
          answer: {
            type: "text",
            accept: ["又可爱又聪明", "又聪明又可爱", "yòu kě'ài yòu cōngmíng", "yòu kěài yòu cōngmíng", "yòu cōngmíng yòu kě'ài", "yòu kě'ài yòu cōngming"],
            display: "又可爱又聪明 (yòu kě'ài yòu cōngmíng)",
          },
          hints: [
            "Frame: 又 + Adj 1 + 又 + Adj 2.",
            "Cute = 可爱 (kě'ài), clever = 聪明 (cōngmíng).",
          ],
          solution: [
            "Place 可爱 and 聪明 directly after each 又: 又可爱又聪明 (yòu kě'ài yòu cōngmíng).",
          ],
        },
        {
          id: "pets-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "describing-pets",
          question: "Translate **My puppy is called Maomao** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["我的小狗叫毛毛", "我的狗叫毛毛", "wǒ de xiǎogǒu jiào máomao", "wǒ de gǒu jiào máomao"],
            display: "我的小狗叫毛毛 (Wǒ de xiǎogǒu jiào Máomao)",
          },
          traps: [
            { spec: { type: "text", accept: ["我的小狗是毛毛", "wǒ de xiǎogǒu shì máomao"] }, feedback: "Use 叫 (jiào — is called) for names, rather than 是." },
          ],
          hints: [
            "Subject: 我的小狗 (wǒ de xiǎogǒu).",
            "Verb for 'is called': 叫 (jiào) + 毛毛 (Máomao).",
          ],
          solution: [
            "Subject (我的小狗) + 叫 (is called) + 毛毛 → 我的小狗叫毛毛 (Wǒ de xiǎogǒu jiào Máomao).",
          ],
        },
        {
          id: "pets-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "describing-pets",
          question: "Give the Mandarin adjective meaning **gentle / docile** (often used for calm dogs or rabbits).",
          answer: {
            type: "text",
            accept: ["温顺", "wēnshùn"],
            display: "温顺 (wēnshùn)",
          },
          hints: [
            "First character 温 (wēn) means warm/mild.",
            "1st tone + 4th tone: wēnshùn.",
          ],
          solution: [
            "温顺 (wēnshùn) means gentle / docile: 这只金毛犬非常温顺。",
          ],
        },
        {
          id: "pets-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "describing-pets",
          question: "Fill in the verb phrase meaning *\"to have (inborn physical features)\"* in **小兔子___长长的耳朵**.",
          answer: {
            type: "text",
            accept: ["长着", "有", "zhǎngzhe", "yǒu"],
            display: "长着 (zhǎngzhe)",
          },
          hints: [
            "A higher-band alternative to 有 for natural body features like fur, ears, or big eyes.",
            "3rd tone + neutral: zhǎngzhe.",
          ],
          solution: [
            "长着 (zhǎngzhe) specifically describes inborn physical features: 小兔子长着长长的耳朵 (有 is also grammatical).",
          ],
        },
        {
          id: "pets-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "common-pets-measure-words",
          question: "Translate **one snake** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["一条蛇", "yì tiáo shé", "yī tiáo shé"],
            display: "一条蛇 (yì tiáo shé)",
          },
          traps: [
            { spec: { type: "text", accept: ["一只蛇", "yì zhī shé", "yī zhī shé"] }, feedback: "Snakes are long and slender, so they take 条 (tiáo), never 只!" },
          ],
          hints: [
            "Snake is 蛇 (shé).",
            "Think about a snake's long, flexible body — which classifier does it share with goldfish?",
          ],
          solution: [
            "Snakes take 条 (tiáo): 一条蛇 (yì tiáo shé).",
          ],
        },
        {
          id: "pets-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "describing-pets",
          question: "Translate **a bit lazy** into Simplified Mandarin (or tone-marked Pinyin), using the correct word order.",
          answer: {
            type: "text",
            accept: ["有点儿懒", "有点懒", "yǒudiǎnr lǎn", "yǒudiǎn lǎn"],
            display: "有点儿懒 (yǒudiǎnr lǎn)",
          },
          traps: [
            { spec: { type: "text", accept: ["懒有点儿", "懒有点"] }, feedback: "有点儿 must stand BEFORE the adjective, never after it!" },
            { spec: { type: "text", accept: ["有点儿很懒", "有点很懒"] }, feedback: "Never stack 有点儿 and 很 together — write 有点儿懒." },
          ],
          hints: [
            "'A bit' before a mildly negative adjective is 有点儿 (yǒudiǎnr).",
            "'Lazy' is 懒 (lǎn) — place 有点儿 right in front of it.",
          ],
          solution: [
            "有点儿 + adjective (no 很): 有点儿懒 (yǒudiǎnr lǎn).",
          ],
        },
        {
          id: "pets-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "common-pets-measure-words",
          marks: 3,
          question:
            "Write TWO Mandarin sentences (in Simplified Chinese with tone-marked Pinyin) saying that your family keeps **two cats** and **five goldfish**, and that your uncle keeps **one white horse** on a farm.",
          hints: [
            "Check ALL three animal measure words: cats → 只, goldfish → 条, horse → 匹.",
            "Remember to use 两 (not 二) for 'two cats'.",
            "Include Simplified Hanzi and tone-marked Pinyin for full clarity.",
          ],
          modelAnswer:
            "我家养了两只小猫和五条金鱼。我叔叔在农场养了一匹白马。(Wǒ jiā yǎng le liǎng zhī xiǎomāo hé wǔ tiáo jīnyú. Wǒ shūshu zài nóngchǎng yǎng le yì pǐ báimǎ. — My family keeps two kittens and five goldfish. My uncle keeps a white horse on a farm.)",
          markScheme: [
            {
              point: "Correctly expresses two cats with 两 + 只 (两只猫 / 两只小猫)",
              keywords: ["两只猫", "两只小猫", "liǎng zhī māo", "liǎng zhī xiǎomāo"],
            },
            {
              point: "Correctly expresses five goldfish with 五 + 条 (五条金鱼)",
              keywords: ["五条金鱼", "wǔ tiáo jīnyú"],
            },
            {
              point: "Correctly expresses one white horse with 一 + 匹 (一匹白马 / 一匹白色的马)",
              keywords: ["一匹白马", "一匹白色的马", "yì pǐ báimǎ", "yī pǐ báimǎ"],
            },
          ],
          commonError:
            "Writing *二只猫*, *五只金鱼*, or *一只白马* — each animal requires its exact classifier (只, 条, 匹) and standalone 2 takes 两.",
        },
        {
          id: "pets-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "describing-pets",
          marks: 4,
          question:
            "Write a short profile (Simplified Chinese + tone-marked Pinyin) introducing an imaginary pet rabbit. You must include:\n- its name and age (2 years old)\n- TWO physical features (fur colour, long ears, or short tail) using **长着**\n- TWO positive traits joined with **又……又……**\n- ONE mild quirk using **有点儿**",
          hints: [
            "Open with 我的兔子叫……，今年两岁。",
            "Use 长着白色的毛和长长的耳朵 for features.",
            "Pair 又可爱又温顺 with 可是它有时候有点儿胆小 (or 淘气).",
          ],
          modelAnswer:
            "我的兔子叫小白，今年两岁。它长着白色的毛和长长的耳朵，尾巴短短的。小白又可爱又温顺，可是它有时候有点儿胆小。(Wǒ de tùzi jiào Xiǎobái, jīnnián liǎng suì. Tā zhǎngzhe báisè de máo hé chángcháng de ěrduo, wěiba duǎnduǎn de. Xiǎobái yòu kě'ài yòu wēnshùn, kěshì tā yǒushíhou yǒudiǎnr dǎnxiǎo.)",
          markScheme: [
            {
              point: "States the rabbit's name with 叫 and age as two years old (两岁)",
              keywords: ["叫", "两岁", "liǎng suì"],
            },
            {
              point: "Describes physical features (毛 / 耳朵 / 尾巴) accurately with 长着",
              keywords: ["毛", "耳朵", "尾巴", "máo", "ěrduo", "wěiba"],
            },
            {
              point: "Combines two positive traits with 又……又…… (e.g. 又可爱又温顺 / 又活泼又聪明)",
              keywords: ["又可爱", "又温顺", "又聪明", "又活泼", "yòu kě'ài", "yòu wēnshùn"],
            },
            {
              point: "Adds a mildly negative trait directly after 有点儿 (e.g. 有点儿胆小 / 有点儿淘气 / 有点儿懒)",
              keywords: ["胆小", "淘气", "懒", "dǎnxiǎo", "táoqì", "lǎn"],
            },
          ],
          commonError:
            "Inserting 是 before adjectives (*小白是可爱*) or placing 有点儿 after the adjective (*胆小有点儿*).",
        },
        {
          id: "pets-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "describing-pets",
          marks: 3,
          question:
            "Spot and explain the THREE grammar errors in this sentence, then write the corrected Mandarin sentence (with Pinyin): *我家有二只金鱼，它们是可爱，可是有点儿很懒。*",
          hints: [
            "Error 1 is in the quantity + measure word phrase for goldfish.",
            "Error 2 is how the adjective 可爱 is linked to 它们.",
            "Error 3 is stacking two degree adverbs before 懒.",
          ],
          modelAnswer:
            "1) Change 二只金鱼 to 两条金鱼 (use 两 before a measure word, and 条 for fish). 2) Replace 是可爱 with 很可爱 (adjectives do not take 是). 3) Remove 很 from 有点儿很懒 to make 有点儿懒. Corrected sentence: 我家有两条金鱼，它们很可爱，可是有点儿懒。(Wǒ jiā yǒu liǎng tiáo jīnyú, tāmen hěn kě'ài, kěshì yǒudiǎnr lǎn.)",
          markScheme: [
            {
              point: "Corrects 二只金鱼 → 两条金鱼 (两 + 条 for fish)",
              keywords: ["两条金鱼", "liǎng tiáo jīnyú"],
            },
            {
              point: "Corrects 是可爱 → 很可爱 / 非常可爱 (removes 是 before adjective)",
              keywords: ["很可爱", "非常可爱", "hěn kě'ài"],
            },
            {
              point: "Corrects 有点儿很懒 → 有点儿懒 (does not stack 有点儿 with 很)",
              keywords: ["有点儿懒", "有点懒", "yǒudiǎnr lǎn"],
            },
          ],
          commonError:
            "Fixing 只 → 条 while forgetting to also switch 二 → 两, or forgetting to remove 很 after 有点儿.",
        },
      ],
    },
    {
      id: "pets-p2",
      title: "Practice Paper 2 — Pet Care Routines & Balanced Opinions",
      questions: [
        {
          id: "pets-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "caring-for-pets",
          question: "Translate **to look after / take care of** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["照顾", "zhàogù"],
            display: "照顾 (zhàogù)",
          },
          hints: [
            "Used in the section title 'Looking After Pets' (___宠物).",
            "Both syllables are 4th tone: zhàogù.",
          ],
          solution: [
            "照顾 (zhàogù) means to look after / take care of: 每天认真照顾宠物。",
          ],
        },
        {
          id: "pets-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "caring-for-pets",
          question: "Translate **vet / veterinarian** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["兽医", "shòuyī"],
            display: "兽医 (shòuyī)",
          },
          hints: [
            "Literally 'beast/animal doctor' (医 = doctor).",
            "4th tone + 1st tone: shòuyī.",
          ],
          solution: [
            "兽医 (shòuyī) means veterinarian: 带小狗去看兽医。",
          ],
        },
        {
          id: "pets-p2-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "caring-for-pets",
          question: "Translate **dog food** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["狗粮", "gǒuliáng"],
            display: "狗粮 (gǒuliáng)",
          },
          hints: [
            "狗 (dog) + 粮 (grain/food ration).",
            "3rd tone + 2nd tone: gǒuliáng.",
          ],
          solution: [
            "狗粮 (gǒuliáng) means dog food (similarly, 猫粮 māoliáng = cat food).",
          ],
        },
        {
          id: "pets-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "caring-for-pets",
          question: "Translate **play with it (keep it company playing)** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["陪它玩儿", "陪它玩", "péi tā wánr", "péi tā wán"],
            display: "陪它玩儿 (péi tā wánr)",
          },
          hints: [
            "Pattern: 陪 (accompany) + animal pronoun 它 + 玩儿 (play).",
            "Pinyin: péi tā wánr.",
          ],
          solution: [
            "陪 (accompany) + 它 (it) + 玩儿 (play) = 陪它玩儿 (péi tā wánr).",
          ],
        },
        {
          id: "pets-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "caring-for-pets",
          question: "Re-order these blocks into accurate **STPVO** Mandarin: `遛狗` / `在公园` / `我` / `每天晚上`.",
          answer: {
            type: "text",
            accept: [
              "我每天晚上在公园遛狗",
              "每天晚上我在公园遛狗",
              "wǒ měitiān wǎnshang zài gōngyuán liù gǒu",
              "měitiān wǎnshang wǒ zài gōngyuán liù gǒu",
            ],
            display: "我每天晚上在公园遛狗 (Wǒ měitiān wǎnshang zài gōngyuán liù gǒu)",
          },
          traps: [
            { spec: { type: "text", accept: ["我遛狗在公园每天晚上"] }, feedback: "That follows English order! In Mandarin STPVO, Time and Place go BEFORE 遛狗." },
          ],
          hints: [
            "STPVO = Subject → Time → Place → Verb + Object.",
            "Put 每天晚上 and 在公园 before 遛狗.",
          ],
          solution: [
            "S (我) + T (每天晚上) + P (在公园) + VO (遛狗) → 我每天晚上在公园遛狗。",
          ],
        },
        {
          id: "pets-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "caring-for-pets",
          question: "Translate **to adopt (a pet from a shelter)** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["领养", "lǐngyǎng"],
            display: "领养 (lǐngyǎng)",
          },
          hints: [
            "Used in the campaign slogan ___代替购买 (adopt instead of buy).",
            "Combines 领 (receive/lead) + 养 (raise): lǐngyǎng.",
          ],
          solution: [
            "领养 (lǐngyǎng) means to adopt a pet: 我们领养了一只小狗。",
          ],
        },
        {
          id: "pets-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "caring-for-pets",
          question: "Translate **fish tank** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["鱼缸", "yúgāng"],
            display: "鱼缸 (yúgāng)",
          },
          hints: [
            "鱼 (fish) + 缸 (jar/vat/tank).",
            "2nd tone + 1st tone: yúgāng.",
          ],
          solution: [
            "鱼缸 (yúgāng) means fish tank: 给鱼缸换水 (change the water in the fish tank).",
          ],
        },
        {
          id: "pets-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "reasons-for-against-pets",
          question: "Translate **allergic to cat fur** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["对猫毛过敏", "duì māomáo guòmǐn"],
            display: "对猫毛过敏 (duì māomáo guòmǐn)",
          },
          traps: [
            { spec: { type: "text", accept: ["过敏猫毛", "guòmǐn māomáo"] }, feedback: "Don't place 猫毛 after 过敏 — use the frame 对 + 猫毛 + 过敏!" },
          ],
          hints: [
            "Pattern: 对 + allergen + 过敏.",
            "Cat fur = 猫毛 (māomáo); allergic = 过敏 (guòmǐn).",
          ],
          solution: [
            "对 (duì) + 猫毛 (māomáo) + 过敏 (guòmǐn) = 对猫毛过敏。",
          ],
        },
        {
          id: "pets-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "reasons-for-against-pets",
          question: "Fill in the closing connective to complete the pair: **因为爸爸妈妈工作很忙，___我们没时间照顾小狗。**",
          answer: {
            type: "text",
            accept: ["所以", "suǒyǐ"],
            display: "所以 (suǒyǐ)",
          },
          traps: [
            { spec: { type: "text", accept: ["但是", "dànshì", "可是", "kěshì"] }, feedback: "但是 pairs with 虽然 (contrast). Here 因为 expresses a cause, so use 所以!" },
          ],
          hints: [
            "The opening connective is 因为 (because).",
            "What two-character connective means 'therefore / so'?",
          ],
          solution: [
            "因为……，所以…… (because…, therefore/so…) → 所以 (suǒyǐ).",
          ],
        },
        {
          id: "pets-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "reasons-for-against-pets",
          question: "What is the Mandarin noun for **advantage / benefit** (as in the benefits of keeping a pet)?",
          answer: {
            type: "text",
            accept: ["好处", "hǎochù"],
            display: "好处 (hǎochù)",
          },
          traps: [
            { spec: { type: "text", accept: ["坏处", "huàichù"] }, feedback: "坏处 means DISADVANTAGE! The opposite (advantage/benefit) is 好处." },
          ],
          hints: [
            "The opposite of 坏处 (huàichù — drawback).",
            "好 (good) + 处: hǎochù.",
          ],
          solution: [
            "好处 (hǎochù) means advantage / benefit: 养宠物有很多好处。",
          ],
        },
        {
          id: "pets-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "reasons-for-against-pets",
          question: "Translate **sense of responsibility** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["责任感", "zérèngǎn"],
            display: "责任感 (zérèngǎn)",
          },
          hints: [
            "Combines 责任 (responsibility) + 感 (sense/feeling).",
            "Pinyin: zérèngǎn.",
          ],
          solution: [
            "责任感 (zérèngǎn) means sense of responsibility: 养宠物可以培养责任感。",
          ],
        },
        {
          id: "pets-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "caring-for-pets",
          question: "Translate **no time to look after (a pet)** into Simplified Mandarin (or tone-marked Pinyin).",
          answer: {
            type: "text",
            accept: ["没时间照顾", "没有时间照顾", "méi shíjiān zhàogù", "méiyǒu shíjiān zhàogù"],
            display: "没时间照顾 (méi shíjiān zhàogù)",
          },
          hints: [
            "'No time' = 没时间 (méi shíjiān).",
            "Add 'to look after' = 照顾 (zhàogù).",
          ],
          solution: [
            "没时间 (no time) + 照顾 (look after) = 没时间照顾 (méi shíjiān zhàogù).",
          ],
        },
        {
          id: "pets-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "caring-for-pets",
          marks: 4,
          question:
            "Write a short daily pet-care paragraph (Simplified Chinese + tone-marked Pinyin) describing how you care for a dog from morning to the weekend. Include:\n- feeding it in the morning (time before verb)\n- walking it in a park (STPVO order)\n- giving it a bath at the weekend using the **给……洗澡** pattern\n- taking it to the vet if it gets sick",
          hints: [
            "Use 每天早上喂狗 / 给小狗喂狗粮.",
            "Keep Place before Verb: 每天晚上在公园遛狗.",
            "Remember 给小狗洗澡 (NOT *洗澡小狗*) and 如果它生病了，带它去看兽医.",
          ],
          modelAnswer:
            "每天早上七点我先给小狗喂狗粮。晚饭以后，我在公园遛狗，还陪它玩儿。每个星期六我给小狗洗澡。如果它生病了，我会带它去看兽医。(Měitiān zǎoshang qī diǎn wǒ xiān gěi xiǎogǒu wèi gǒuliáng. Wǎnfàn yǐhòu, wǒ zài gōngyuán liù gǒu, hái péi tā wánr. Měi ge xīngqīliù wǒ gěi xiǎogǒu xǐzǎo. Rúguǒ tā shēngbìng le, wǒ huì dài tā qù kàn shòuyī.)",
          markScheme: [
            {
              point: "Includes morning feeding routine with 喂 (喂狗粮 / 喂食)",
              keywords: ["喂", "wèi"],
            },
            {
              point: "Includes walking the dog with STPVO place-before-verb (在公园遛狗)",
              keywords: ["在公园遛狗", "遛狗", "liù gǒu"],
            },
            {
              point: "Uses 给 + pet + 洗澡 accurately for bathing",
              keywords: ["给小狗洗澡", "给狗洗澡", "给它洗澡", "xǐzǎo"],
            },
            {
              point: "Mentions taking the dog to see the vet (带它去看兽医 / 看兽医)",
              keywords: ["兽医", "shòuyī"],
            },
          ],
          commonError:
            "Placing 在公园 after 遛狗 (*遛狗在公园*) or writing *洗澡小狗* instead of 给小狗洗澡.",
        },
        {
          id: "pets-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "reasons-for-against-pets",
          marks: 4,
          question:
            "A friend asks why your family does not keep a cat or dog in a Singapore flat. Write a response (Simplified Chinese + tone-marked Pinyin) giving:\n- a space reason and an allergy reason linked with **因为……，所以……**\n- ONE contrasting positive point using **虽然……，但是……**\n- ONE quieter pet you keep (or want to keep in the future) with its exact measure word",
          hints: [
            "Open with 因为我家住在小公寓，而且爸爸对猫毛过敏，所以……",
            "Use 虽然我们没有养猫和狗，但是……",
            "Mention 金鱼 with 条 (e.g. 五条金鱼) or 乌龟 with 只 (e.g. 一只乌龟).",
          ],
          modelAnswer:
            "因为我家住在小公寓，空间不够大，而且爸爸对猫毛过敏，所以我们没有养猫和狗。虽然有时候很遗憾，但是我们在客厅养了五条金鱼，它们既安静又漂亮！(Yīnwèi wǒ jiā zhù zài xiǎo gōngyù, kōngjiān bú gòu dà, érqiě bàba duì māomáo guòmǐn, suǒyǐ wǒmen méiyǒu yǎng māo hé gǒu. Suīrán yǒushíhou hěn yíhàn, dànshì wǒmen zài kètīng yǎng le wǔ tiáo jīnyú, tāmen jì ānjìng yòu piàoliang!)",
          markScheme: [
            {
              point: "Mentions small flat / limited space (公寓 / 空间 / 太小)",
              keywords: ["公寓", "空间", "太小", "gōngyù", "kōngjiān"],
            },
            {
              point: "Uses 对……过敏 accurately for the fur allergy",
              keywords: ["过敏", "guòmǐn"],
            },
            {
              point: "Uses paired connectives (因为……所以…… and 虽然……但是……)",
              keywords: ["所以", "但是", "suǒyǐ", "dànshì"],
            },
            {
              point: "Names an alternative quieter pet with exact classifier (条金鱼 / 只乌龟 / 只仓鼠)",
              keywords: ["条金鱼", "只乌龟", "只仓鼠", "tiáo jīnyú", "zhī wūguī", "zhī cāngshǔ"],
            },
          ],
          commonError:
            "Dropping 所以 or 但是, or using 只 instead of 条 for goldfish.",
        },
        {
          id: "pets-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "reasons-for-against-pets",
          marks: 4,
          question:
            "Write a balanced IGCSE opinion paragraph (Simplified Chinese + tone-marked Pinyin) on whether teenagers should keep pets. Include:\n- TWO advantages using the paired *'not only … but also …'* structure (e.g. companionship / responsibility / exercise)\n- TWO drawbacks (e.g. time, cost, or holiday inconvenience)\n- a concluding verdict using the paired *'although … yet …'* structure",
          hints: [
            "Stack two benefits: 养宠物不但能陪伴我们，而且能培养责任感。",
            "Add drawbacks: 可是买狗粮和看兽医很花钱，而且没时间照顾。",
            "Conclude with 虽然养宠物很累，但是我觉得好处比坏处多。",
          ],
          modelAnswer:
            "我觉得青少年养宠物有很多好处。养宠物不但能陪伴我们、让我们不觉得孤独，而且能培养我们的责任感。不过，养宠物也有坏处，比如买狗粮和看兽医很花钱，出门旅游也不方便。虽然照顾宠物很累，但是只要全家一起帮忙，宠物就会成为最好的家庭成员。(Wǒ juéde qīngshàonián yǎng chǒngwù yǒu hěn duō hǎochù. Yǎng chǒngwù búdàn néng péibàn wǒmen, ràng wǒmen bù juéde gūdú, érqiě néng péiyǎng wǒmen de zérèngǎn. Búguò, yǎng chǒngwù yě yǒu huàichù, bǐrú mǎi gǒuliáng hé kàn shòuyī hěn huā qián, chūmén lǚyóu yě bù fāngbiàn. Suīrán zhàogù chǒngwù hěn lèi, dànshì zhǐyào quánjiā yìqǐ bāngmáng, chǒngwù jiù huì chéngwéi zuì hǎo de jiātíng chéngyuán.)",
          markScheme: [
            {
              point: "States advantages clearly (陪伴 / 孤独 / 责任感 / 负责任 / 快乐 / 运动)",
              keywords: ["陪伴", "责任感", "负责任", "孤独", "péibàn", "zérèngǎn"],
            },
            {
              point: "Uses paired 不但……而且…… accurately",
              keywords: ["而且", "érqiě"],
            },
            {
              point: "States drawbacks clearly (花钱 / 麻烦 / 旅游不方便 / 没时间 / 很累)",
              keywords: ["花钱", "不方便", "麻烦", "没时间", "huā qián", "máfan"],
            },
            {
              point: "Concludes with a balanced 虽然……但是…… evaluation",
              keywords: ["虽然", "但是", "suīrán", "dànshì"],
            },
          ],
          commonError:
            "Listing only one side of the argument or pairing 虽然 with 所以 instead of 但是.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "pets-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "common-pets-measure-words",
      question: "Translate **twenty-two goldfish** into Simplified Mandarin (or tone-marked Pinyin) — watch the **二 vs 两** rule carefully!",
      answer: {
        type: "text",
        accept: ["二十二条金鱼", "èrshí'èr tiáo jīnyú", "èrshíèr tiáo jīnyú"],
        display: "二十二条金鱼 (èrshí'èr tiáo jīnyú)",
      },
      traps: [
        { spec: { type: "text", accept: ["二十两条金鱼", "两十二条金鱼"] }, feedback: "In 22, BOTH twos stay 二: 二十二 (never *二十两* or *两十二*)!" },
        { spec: { type: "text", accept: ["二十二只金鱼"] }, feedback: "Goldfish always take 条 (tiáo), never 只!" },
      ],
      hints: [
        "Standalone 2 before a measure word is 两, but what happens in 12, 20, and 22?",
        "In 22, both digits use 二 → 二十二.",
        "Attach the fish classifier 条 + 金鱼.",
      ],
      solution: [
        "Only standalone 2 switches to 两; 22 is always 二十二 (èrshí'èr).",
        "Goldfish take 条 (tiáo) → 二十二条金鱼 (èrshí'èr tiáo jīnyú).",
      ],
    },
    {
      id: "pets-ch-q02",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "caring-for-pets",
      question: "A student wants to say *\"I walk the dog in the park for half an hour every evening.\"* Because **遛狗** is a verb-object compound, which sentence handles duration accurately?",
      options: [
        "我每天晚上遛狗半个小时了在公园。",
        "我每天晚上在公园遛半个小时的狗。",
        "我每天晚上遛狗三十分钟在公园里。",
        "我半个小时每天晚上在公园遛狗。",
      ],
      answerIndex: 1,
      hints: [
        "With a separable verb-object like 遛狗, the duration sits either between verb and object (遛半个小时的狗) or after a repeated verb (遛狗遛半个小时).",
        "Keep STPVO intact: Time (每天晚上) and Place (在公园) must come BEFORE 遛!",
      ],
      explanation:
        "Inserting the duration between **遛** and **狗** with optional **的** (**遛半个小时的狗**) while preserving STPVO (**我每天晚上在公园遛半个小时的狗**) is completely idiomatic Mandarin.",
    },
    {
      id: "pets-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "describing-pets",
      question: "Translate into Simplified Mandarin using **比 (bǐ)** (and NO **很**!): **My dog is much livelier than my cat.**",
      answer: {
        type: "text",
        accept: [
          "我的狗比我的猫活泼得多",
          "我的小狗比我的小猫活泼得多",
          "我家的狗比我家的猫活泼得多",
          "wǒ de gǒu bǐ wǒ de māo huópō de duō",
          "wǒ de xiǎogǒu bǐ wǒ de xiǎomāo huópō de duō",
        ],
        display: "我的狗比我的猫活泼得多 (Wǒ de gǒu bǐ wǒ de māo huópō de duō)",
      },
      traps: [
        { spec: { type: "text", accept: ["我的狗比我的猫很活泼", "我的小狗比我的小猫很活泼"] }, feedback: "NEVER put 很 after 比! Use 得多 AFTER the adjective for 'much more'." },
      ],
      hints: [
        "Frame: A 比 B + Adjective + 得多 (much more).",
        "Lively = 活泼 (huópō); 'much more' = 得多 (de duō).",
        "Never place 很 before 活泼 in a 比 sentence.",
      ],
      solution: [
        "A (我的狗) + 比 + B (我的猫) + 活泼 (lively) + 得多 (much more) → 我的狗比我的猫活泼得多。",
      ],
    },
    {
      id: "pets-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "reasons-for-against-pets",
      question: "Read: **爷爷不但每天早上带鹦鹉去公园散步，而且教它说了十句中文。** What impressive thing has Grandpa done?",
      options: [
        "He bought ten parrots at a pet shop near the park.",
        "He takes the parrot to the park and taught it ten Chinese phrases.",
        "He adopted a quiet turtle because the parrot was too noisy.",
        "He walks ten dogs every morning and speaks Chinese to them.",
      ],
      answerIndex: 1,
      hints: [
        "Decode 鹦鹉 (yīngwǔ — parrot) and 教它说了十句中文 (taught it to speak ten Chinese sentences/phrases).",
        "不但……而且…… adds two things Grandpa does with the same parrot.",
      ],
      explanation:
        "Grandpa not only takes his **鹦鹉** (parrot) for a walk in the park every morning (**带鹦鹉去公园散步**), but also taught it to speak ten Chinese phrases (**教它说了十句中文**).",
    },
    {
      id: "pets-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "caring-for-pets",
      question: "Translate into Simplified Mandarin: **Yesterday Dad took the kitten to see the vet.** (Include completed-action **了**.)",
      answer: {
        type: "text",
        accept: [
          "昨天爸爸带小猫去看兽医了",
          "爸爸昨天带小猫去看兽医了",
          "昨天爸爸带了小猫去看兽医",
          "zuótiān bàba dài xiǎomāo qù kàn shòuyī le",
          "bàba zuótiān dài xiǎomāo qù kàn shòuyī le",
        ],
        display: "昨天爸爸带小猫去看兽医了 (Zuótiān bàba dài xiǎomāo qù kàn shòuyī le)",
      },
      hints: [
        "Yesterday = 昨天 (zuótiān); kitten = 小猫 (xiǎomāo).",
        "Serial-verb pattern: 带 + pet + 去 + 看兽医 + 了.",
        "Place 昨天 either before or right after 爸爸.",
      ],
      solution: [
        "昨天 + 爸爸 + 带小猫去看兽医 + 了 → 昨天爸爸带小猫去看兽医了。",
      ],
    },
    {
      id: "pets-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "reasons-for-against-pets",
      question: "Read: **虽然养一只狗不如养几条金鱼省事，但是狗狗给我们的陪伴是无价的。** What does **省事 (shěngshì)** mean in context?",
      options: [
        "requiring huge garden space",
        "costing a lot of vet fees",
        "saving trouble / being low-effort",
        "making a lot of loud noise",
      ],
      answerIndex: 2,
      hints: [
        "Compare keeping a dog vs keeping a few goldfish using 不如 (not as … as).",
        "省 (shěng) means save, 事 (shì) means trouble/work — goldfish save trouble!",
      ],
      explanation:
        "**不如** compares keeping a dog with keeping a few goldfish: keeping goldfish is **省事** (*saving trouble / low-effort*), yet (**但是**) a dog's companionship (**陪伴**) is priceless.",
    },
    {
      id: "pets-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "caring-for-pets",
      marks: 4,
      question:
        "You adopted a dog from a Singapore shelter last month. Write a 3-timeframe IGCSE bridge paragraph (Simplified Chinese + tone-marked Pinyin) covering:\n- **Past (了)**: when and where you adopted it (with exact measure word)\n- **Present**: its appearance/personality (using **又……又……**) and one daily STPVO care job\n- **Future (打算 / 将来)**: one plan you have with your pet next weekend or holiday",
      hints: [
        "Past: 上个月我们从动物收容所领养了一只两岁的小狗。",
        "Present: 它又聪明又温顺，我每天晚上在公园遛狗。",
        "Future: 下个周末我打算带它去东海岸公园玩儿。",
      ],
      modelAnswer:
        "上个月我们从动物收容所领养了一只两岁的小狗，它叫豆豆。豆豆长着棕色的短毛，性格又聪明又温顺。现在我每天放学后都在公园遛狗，每周末给它洗澡。下个周末我打算带豆豆去海边散步，让它开心地跑一跑。(Shàng ge yuè wǒmen cóng dòngwù shōuróngsuǒ lǐngyǎng le yì zhī liǎng suì de xiǎogǒu, tā jiào Dòudou. Dòudou zhǎngzhe zōngsè de duǎnmáo, xìnggé yòu cōngmíng yòu wēnshùn. Xiànzài wǒ měitiān fàngxué hòu dōu zài gōngyuán liù gǒu, měi zhōumò gěi tā xǐzǎo. Xià ge zhōumò wǒ dǎsuàn dài Dòudou qù hǎibiān sànbù, ràng tā kāixīn de pǎo yì pǎo.)",
      markScheme: [
        {
          point: "Past time frame with 领养了 and exact classifier 一只",
          keywords: ["领养了", "一只", "lǐngyǎng le", "yì zhī"],
        },
        {
          point: "Present description using 又……又…… accurately",
          keywords: ["又聪明", "又温顺", "又可爱", "又活泼", "yòu cōngmíng", "yòu wēnshùn"],
        },
        {
          point: "Daily care routine in STPVO order (遛狗 / 喂 / 给它洗澡)",
          keywords: ["遛狗", "洗澡", "喂", "liù gǒu", "xǐzǎo"],
        },
        {
          point: "Future plan using 打算 / 想 / 将来",
          keywords: ["打算", "将来", "想带", "dǎsuàn", "jiānglái"],
        },
      ],
      commonError:
        "Staying only in the present tense and missing the past (了) or future (打算) markers required for IGCSE Band A.",
    },
    {
      id: "pets-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "reasons-for-against-pets",
      marks: 4,
      question:
        "Translate this IGCSE-level paragraph into Simplified Chinese (with tone-marked Pinyin):\n*\"My older brother has two hamsters and three goldfish. Although hamsters are very quiet, cleaning the cage every week is a bit troublesome. Because Dad is allergic to cat fur, we cannot keep a cat, so in the future I want to adopt a gentle turtle.\"*",
      hints: [
        "Watch every classifier: 两只仓鼠, 三条金鱼, 一只温顺的乌龟.",
        "Use 虽然……但是…… for the quiet vs troublesome contrast, and 有点儿麻烦.",
        "Use 因为爸爸对猫毛过敏，所以…… + 将来我想领养…….",
      ],
      modelAnswer:
        "我哥哥有两只仓鼠和三条金鱼。虽然仓鼠很安静，但是每星期清理笼子有点儿麻烦。因为爸爸对猫毛过敏，所以我们不能养猫，所以将来我想领养一只温顺的乌龟。(Wǒ gēge yǒu liǎng zhī cāngshǔ hé sān tiáo jīnyú. Suīrán cāngshǔ hěn ānjìng, dànshì měi xīngqī qīnglǐ lóngzi yǒudiǎnr máfan. Yīnwèi bàba duì māomáo guòmǐn, suǒyǐ wǒmen bù néng yǎng māo, suǒyǐ jiānglái wǒ xiǎng lǐngyǎng yì zhī wēnshùn de wūguī.)",
      markScheme: [
        {
          point: "Accurate animal counts & measure words: 两只仓鼠 and 三条金鱼",
          keywords: ["两只仓鼠", "三条金鱼", "liǎng zhī cāngshǔ", "sān tiáo jīnyú"],
        },
        {
          point: "Contrast clause with 虽然……但是…… and 有点儿麻烦",
          keywords: ["虽然", "但是", "有点儿麻烦", "yǒudiǎnr máfan"],
        },
        {
          point: "Allergy cause clause with 因为……对猫毛过敏，所以……",
          keywords: ["对猫毛过敏", "duì māomáo guòmǐn"],
        },
        {
          point: "Future wish with 将来 + 领养 + 一只温顺的乌龟",
          keywords: ["一只温顺的乌龟", "领养一只", "wēnshùn de wūguī"],
        },
      ],
      commonError:
        "Using 只 for goldfish or dropping 对 in 对猫毛过敏.",
    },
  ],
};
