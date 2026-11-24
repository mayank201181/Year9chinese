import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "house-furniture-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "house-types-rooms",
      question:
        "Write the Mandarin word for **bedroom** in Simplified Chinese or tone-marked Pinyin.",
      answer: {
        type: "text",
        accept: ["卧室", "wòshì"],
        display: "卧室 (wòshì)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["客厅", "kètīng"] },
          feedback: "客厅 (kètīng) is the living room — the bedroom is 卧室 (wòshì).",
        },
        {
          spec: { type: "text", accept: ["书房", "shūfáng"] },
          feedback: "书房 (shūfáng) is the study room — the bedroom is 卧室 (wòshì).",
        },
      ],
      hints: [
        "Literally 'lying-down room' (卧 wò + 室 shì).",
      ],
      solution: [
        "Bedroom in Simplified Chinese is **卧室 (wòshì)**.",
        "Example: 我家有三间卧室 (My home has three bedrooms).",
      ],
    },
    {
      id: "house-furniture-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "house-types-rooms",
      question:
        "Fill in the measure word for rooms: **我家有三___卧室。** (Answer in Simplified Chinese or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: ["间", "jiān"],
        display: "间 (jiān)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["层", "céng"] },
          feedback: "层 (céng) counts storeys/floors of a house, not individual rooms.",
        },
      ],
      hints: [
        "Use the dedicated room classifier, not the storey classifier 层.",
      ],
      solution: [
        "The specific classifier for rooms is **间 (jiān)**: 三间卧室.",
      ],
    },
    {
      id: "house-furniture-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "furniture-measure-words",
      question:
        "Translate **two chairs** into Simplified Chinese (or tone-marked Pinyin) using the exact furniture classifier.",
      answer: {
        type: "text",
        accept: ["两把椅子", "liǎng bǎ yǐzi"],
        display: "两把椅子 (liǎng bǎ yǐzi)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["二把椅子", "èr bǎ yǐzi"] },
          feedback: "Use 两 (liǎng), never 二 (èr), directly before a measure word!",
        },
        {
          spec: { type: "text", accept: ["两张椅子", "liǎng zhāng yǐzi"] },
          feedback: "张 is for flat surfaces like beds and desks; chairs take 把 (bǎ).",
        },
      ],
      hints: [
        "Remember the 二 vs 两 rule before any measure word.",
        "Chairs (椅子) take the gripped-object classifier 把 (bǎ).",
      ],
      solution: [
        "2 before a classifier is **两 (liǎng)**.",
        "The classifier for chairs (椅子) is **把 (bǎ)**.",
        "Combine: **两把椅子 (liǎng bǎ yǐzi)**.",
      ],
    },
    {
      id: "house-furniture-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "furniture-measure-words",
      question:
        "Which measure word matches **电脑 (diànnǎo)**, **电视 (diànshì)**, and **空调 (kōngtiáo)**?",
      options: ["张 (zhāng)", "台 (tái)", "把 (bǎ)", "间 (jiān)"],
      answerIndex: 1,
      hints: [
        "All three items are electrical appliances plugged into the wall.",
        "张 is for flat furniture and 把 is for chairs.",
      ],
      explanation:
        "**台 (tái)** counts machines and electrical appliances: **一台电脑**, **一台电视**, **一台空调**.",
    },
    {
      id: "house-furniture-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "position-words-you-zai",
      question:
        "Write the Mandarin position word for **next to / beside** in Simplified Chinese or tone-marked Pinyin.",
      answer: {
        type: "text",
        accept: ["旁边", "pángbiān"],
        display: "旁边 (pángbiān)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["中间", "zhōngjiān"] },
          feedback: "中间 (zhōngjiān) means 'in the middle / between', not 'next to'.",
        },
      ],
      hints: [
        "Two syllables starting with páng-.",
        "Example: 书桌在窗户___ (The desk is next to the window).",
      ],
      solution: [
        "**旁边 (pángbiān)** means next to / beside.",
      ],
    },
    {
      id: "house-furniture-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "position-words-you-zai",
      question:
        "Choose **有** or **在** to complete this location sentence: **台灯___书桌上面。**",
      answer: {
        type: "text",
        accept: ["在", "zài"],
        display: "在 (zài)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["有", "yǒu"] },
          feedback: "The known Object (台灯) is first and the Place (书桌上面) is second — that takes 在, not 有!",
        },
      ],
      hints: [
        "Identify whether the sentence starts with Place or Object.",
        "Object + ___ + Place locates a known item.",
      ],
      solution: [
        "Because the sentence follows **Object (台灯) + verb + Place (书桌上面)**, use **在 (zài)**: 台灯在书桌上面。",
      ],
    },
    {
      id: "house-furniture-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "position-words-you-zai",
      question:
        "Which sentence correctly translates **'There is a wardrobe next to the bed'**?",
      options: [
        "在床旁边有一个衣柜。",
        "床旁边有一个衣柜。",
        "旁边床有一个衣柜。",
        "衣柜有在床的旁边。",
      ],
      answerIndex: 1,
      hints: [
        "Use PYO: Place + 有 + (Num + MW) + Object.",
        "Never put 在 at the start of a 有 sentence, and keep 旁边 after 床.",
      ],
      explanation:
        "**床旁边有一个衣柜。** (Chuáng pángbiān yǒu yí gè yīguì.) places **旁边** after **床** and omits **在** before the place.",
    },
    {
      id: "house-furniture-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "ideal-home-writing",
      question:
        "Complete the **比** comparison meaning 'much bigger': **客厅比我的卧室___。** (Write the 3-character phrase in Simplified Chinese or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: ["大得多", "dà de duō"],
        display: "大得多 (dà de duō)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["很大", "hěn dà"] },
          feedback: "Never put 很 after 比! Use Adj + 得多 for 'much more …'.",
        },
        {
          spec: { type: "text", accept: ["大一点儿", "dà yìdiǎnr"] },
          feedback: "大一点儿 means 'a little bigger' — for 'much bigger', use 大得多.",
        },
      ],
      hints: [
        "Never use 很 inside a 比 sentence.",
        "Attach the 2-character degree complement meaning 'much more' after 大.",
      ],
      solution: [
        "After an adjective in a 比 comparison, **得多 (de duō)** means 'much more': **大得多 (dà de duō)**.",
      ],
    },
    {
      id: "house-furniture-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "house-types-rooms",
      question:
        "Write the Mandarin word for **apartment / condo** in Simplified Chinese or tone-marked Pinyin.",
      answer: {
        type: "text",
        accept: ["公寓", "gōngyù"],
        display: "公寓 (gōngyù)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["别墅", "biéshù"] },
          feedback: "别墅 (biéshù) is a villa / detached house, not an apartment.",
        },
      ],
      hints: [
        "Starts with 公 (gōng) and takes the measure word 套.",
        "Tone pattern: 1st tone + 4th tone.",
      ],
      solution: [
        "Apartment / condo is **公寓 (gōngyù)**.",
      ],
    },
    {
      id: "house-furniture-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      guideRef: "ideal-home-writing",
      question:
        "Which sentence correctly says **'My bedroom is not as bright as the living room'**?",
      options: [
        "我的卧室不比客厅明亮得。",
        "客厅没有我的卧室这么明亮。",
        "我的卧室比客厅没有明亮。",
        "我的卧室没有客厅那么明亮。",
      ],
      answerIndex: 3,
      hints: [
        "Use the negative comparison pattern: A + 没有 + B + (那么) + Adjective.",
        "Make sure A is 我的卧室 and B is 客厅.",
      ],
      explanation:
        "**我的卧室没有客厅那么明亮。** (Wǒ de wòshì méiyǒu kètīng nàme míngliàng.) uses **`A 没有 B 那么 Adj`** accurately.",
    },
  ],
  papers: [
    {
      id: "house-furniture-p1",
      title: "House, Rooms & Furniture — Practice Paper 1",
      questions: [
        {
          id: "house-furniture-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "house-types-rooms",
          question:
            "Write the Mandarin word for **living room** in Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["客厅", "kètīng"],
            display: "客厅 (kètīng)",
          },
          hints: ["Literally 'guest hall' (客 kè + 厅 tīng)."],
          solution: ["Living room is **客厅 (kètīng)**."],
        },
        {
          id: "house-furniture-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "house-types-rooms",
          question:
            "Write the Mandarin word for **kitchen** in Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["厨房", "chúfáng"],
            display: "厨房 (chúfáng)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["书房", "shūfáng"] },
              feedback: "书房 (shūfáng) is the study room — kitchen is 厨房 (chúfáng).",
            },
          ],
          hints: ["Ends with 房 (fáng), first syllable chú."],
          solution: ["Kitchen is **厨房 (chúfáng)**."],
        },
        {
          id: "house-furniture-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "house-types-rooms",
          question:
            "Fill in **二** or **两**: **爷爷的别墅有___层。** (Answer in Simplified Chinese or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["两", "liǎng"],
            display: "两 (liǎng)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["二", "èr"] },
              feedback: "层 (céng) is a measure word counting storeys, so 2 MUST be 两 (liǎng)!",
            },
          ],
          hints: [
            "Check whether the blank comes before a classifier counting quantity.",
            "Before 层 (storeys), 2 is always 两.",
          ],
          solution: [
            "Because 层 is a measure word, 'two storeys' is **两层 (liǎng céng)**.",
          ],
        },
        {
          id: "house-furniture-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "house-types-rooms",
          question:
            "Translate **upstairs** into Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["楼上", "lóushàng"],
            display: "楼上 (lóushàng)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["楼下", "lóuxià"] },
              feedback: "楼下 (lóuxià) means downstairs — upstairs uses 上 (shàng).",
            },
          ],
          hints: [
            "Combine 楼 (floor/building) + 上 (up).",
            "Tone pattern: 2nd tone + 4th tone.",
          ],
          solution: ["Upstairs is **楼上 (lóushàng)**."],
        },
        {
          id: "house-furniture-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "furniture-measure-words",
          question:
            "Translate **a desk** into Simplified Chinese (or tone-marked Pinyin) using **一张** and **书桌**.",
          answer: {
            type: "text",
            accept: ["一张书桌", "yì zhāng shūzhuō", "yī zhāng shūzhuō"],
            display: "一张书桌 (yì zhāng shūzhuō)",
          },
          hints: [
            "Put Number + Measure Word directly before the noun.",
            "书桌 takes the flat-surface classifier 张.",
          ],
          solution: ["A desk is **一张书桌 (yì zhāng shūzhuō)**."],
        },
        {
          id: "house-furniture-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "furniture-measure-words",
          question:
            "Write the Mandarin word for **bookshelf** in Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["书架", "shūjià"],
            display: "书架 (shūjià)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["书桌", "shūzhuō"] },
              feedback: "书桌 (shūzhuō) is a desk — bookshelf is 书架 (shūjià).",
            },
            {
              spec: { type: "text", accept: ["书房", "shūfáng"] },
              feedback: "书房 (shūfáng) is a study room — bookshelf is 书架 (shūjià).",
            },
          ],
          hints: [
            "Literally 'book rack/frame': 书 (shū) + 架 (jià).",
            "Tone pattern: 1st tone + 4th tone.",
          ],
          solution: ["Bookshelf is **书架 (shūjià)**."],
        },
        {
          id: "house-furniture-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "furniture-measure-words",
          question:
            "Complete with the exact appliance classifier: **客厅里有一___空调和一张沙发。**",
          answer: {
            type: "text",
            accept: ["台", "tái"],
            display: "台 (tái)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["张", "zhāng"] },
              feedback: "张 is for flat surfaces (beds/desks); electrical appliances like 空调 take 台 (tái).",
            },
          ],
          hints: [
            "空调 (air-conditioner) is an electrical machine, just like 电视 and 电脑.",
            "Look at the classifier already used before 电视 in the same sentence!",
          ],
          solution: [
            "Air-conditioners take **台 (tái)**: **一台空调 (yì tái kōngtiáo)**.",
          ],
        },
        {
          id: "house-furniture-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "position-words-you-zai",
          question:
            "Translate **under the bed** into Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["床下面", "床的下面", "床下", "chuáng xiàmiàn", "chuáng de xiàmiàn", "chuáng xià"],
            display: "床下面 (chuáng xiàmiàn)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["下面床", "xiàmiàn chuáng"] },
              feedback: "In Mandarin, the position word (下面) ALWAYS follows the noun (床): 床下面!",
            },
          ],
          hints: [
            "Reference noun first (床), then position word (下面).",
            "Never copy English preposition order.",
          ],
          solution: [
            "Place **下面 (xiàmiàn)** after **床 (chuáng)**: **床下面 (chuáng xiàmiàn)**.",
          ],
        },
        {
          id: "house-furniture-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "position-words-you-zai",
          question:
            "Translate **'There is a computer on the desk'** into Simplified Chinese (or tone-marked Pinyin) using **书桌上面**, **有**, and **一台电脑**.",
          answer: {
            type: "text",
            accept: [
              "书桌上面有一台电脑",
              "书桌上有一台电脑",
              "书桌的上面有一台电脑",
              "shūzhuō shàngmiàn yǒu yì tái diànnǎo",
              "shūzhuō shàngmiàn yǒu yī tái diànnǎo",
            ],
            display: "书桌上面有一台电脑 (shūzhuō shàngmiàn yǒu yì tái diànnǎo)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["在书桌上面有一台电脑"] },
              feedback: "Drop the leading 在! Existence sentences follow Place + 有 + Object directly.",
            },
          ],
          hints: [
            "Use the PYO formula: Place + 有 + Object.",
            "Do NOT put 在 in front of 书桌上面.",
          ],
          solution: [
            "Place (**书桌上面**) + **有** + Object (**一台电脑**) = **书桌上面有一台电脑**.",
          ],
        },
        {
          id: "house-furniture-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "position-words-you-zai",
          question:
            "Rewrite **窗户旁边有一把椅子** as a location sentence using **在** (meaning 'The chair is next to the window').",
          answer: {
            type: "text",
            accept: ["椅子在窗户旁边", "椅子在窗户的旁边", "yǐzi zài chuānghu pángbiān", "yǐzi zài chuānghu de pángbiān"],
            display: "椅子在窗户旁边 (yǐzi zài chuānghu pángbiān)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["窗户在椅子旁边"] },
              feedback: "Careful! That says the window is next to the chair — put the chair (椅子) first!",
            },
            {
              spec: { type: "text", accept: ["椅子是在窗户旁边"] },
              feedback: "Never put 是 before 在 — 在 already means 'is located at'.",
            },
          ],
          hints: [
            "Use OZP: Object + 在 + Place.",
            "Drop 一把 so 椅子 is specific ('the chair'), and keep 窗户旁边 together.",
          ],
          solution: [
            "Flip Place and Object around **在**: **椅子在窗户旁边 (yǐzi zài chuānghu pángbiān)**.",
          ],
        },
        {
          id: "house-furniture-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "ideal-home-writing",
          question:
            "Which sentence accurately says **'My bedroom is a little smaller than my older sister's'**?",
          options: [
            "我的卧室比姐姐的小一点儿。",
            "我的卧室比姐姐的很小一点儿。",
            "我的卧室比姐姐的有点儿小。",
            "姐姐的卧室比我的小一点儿。",
          ],
          answerIndex: 0,
          hints: [
            "Check who is A (我的卧室) and who is B (姐姐的).",
            "In a 比 comparison, use Adj + 一点儿 (never 很 and never 有点儿).",
          ],
          explanation:
            "**我的卧室比姐姐的小一点儿。** (Wǒ de wòshì bǐ jiějie de xiǎo yìdiǎnr.) puts **一点儿** after **小** without **很** or **有点儿**.",
        },
        {
          id: "house-furniture-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "ideal-home-writing",
          question:
            "Translate **'both spacious and comfortable'** using **又…又…**, **宽敞**, and **舒服**.",
          answer: {
            type: "text",
            accept: ["又宽敞又舒服", "yòu kuānchang yòu shūfu", "yòu kuānchang yòu shūfú"],
            display: "又宽敞又舒服 (yòu kuānchang yòu shūfu)",
          },
          hints: [
            "Pattern: 又 + Adj₁ + 又 + Adj₂.",
            "Both 宽敞 and 舒服 are positive qualities.",
          ],
          solution: [
            "Slot the two adjectives into 又…又…: **又宽敞又舒服 (yòu kuānchang yòu shūfu)**.",
          ],
        },
        {
          id: "house-furniture-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "house-types-rooms",
          marks: 3,
          question:
            "Write 2–3 sentences in Simplified Chinese (with tone-marked Pinyin) explaining what kind of home your family lives in, which floor or how many storeys it has, and listing at least three rooms with an accurate room classifier.",
          hints: [
            "Start with 住在 (live in) plus 公寓 (apartment) or 别墅 (villa).",
            "Mention a floor (在十楼) or storeys (有两层) and count rooms using 间 (jiān).",
            "Include both Hanzi and tone-marked Pinyin.",
          ],
          modelAnswer:
            "我家住在新加坡的一套公寓里，在十楼。家里有一间客厅、一间厨房和三间卧室。(Wǒ jiā zhù zài Xīnjiāpō de yí tào gōngyù lǐ, zài shí lóu. Jiālǐ yǒu yì jiān kètīng, yì jiān chúfáng hé sān jiān wòshì.)",
          markScheme: [
            {
              point: "Uses 住在 with a home type (公寓 / 别墅 / 组屋)",
              keywords: ["住在", "公寓", "别墅", "组屋", "zhù zài", "gōngyù", "biéshù"],
            },
            {
              point: "States floor number or storeys (楼 / 层)",
              keywords: ["楼", "层", "lóu", "céng"],
            },
            {
              point: "Lists rooms accurately with the room classifier 间 (jiān)",
              keywords: ["间", "客厅", "卧室", "厨房", "书房", "卫生间", "jiān", "kètīng", "wòshì"],
            },
          ],
          commonError:
            "Omitting 在 after 住 (*我家住公寓*) or writing 二间卧室 instead of 两间卧室.",
        },
        {
          id: "house-furniture-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "position-words-you-zai",
          marks: 3,
          question:
            "Describe a study space in 2 sentences (Simplified Chinese + tone-marked Pinyin): one existence sentence stating what sits on top of a desk, and one location sentence stating where a chair or bookshelf is relative to another object.",
          hints: [
            "Sentence 1 uses Place + 有 + Num + MW + Object (no leading 在!).",
            "Sentence 2 uses Object + 在 + Reference Noun + Position Word (no 是 before 在!).",
            "Use exact classifiers like 一台电脑, 一盏台灯, 一把椅子.",
          ],
          modelAnswer:
            "书桌上面有一台电脑和一盏台灯。椅子在书桌前面，书架在床的旁边。(Shūzhuō shàngmiàn yǒu yì tái diànnǎo hé yì zhǎn táidēng. Yǐzi zài shūzhuō qiánmiàn, shūjià zài chuáng de pángbiān.)",
          markScheme: [
            {
              point: "Correct existence sentence (Place + 有 + Object with furniture/appliances)",
              keywords: ["上面有", "里面有", "旁边有", "一台电脑", "台灯", "shàngmiàn yǒu", "diànnǎo"],
            },
            {
              point: "Correct location sentence (Object + 在 + Place)",
              keywords: ["在书桌", "在床", "在窗户", "zài shūzhuō", "zài chuáng"],
            },
            {
              point: "Accurate position words placed after the reference noun",
              keywords: ["上面", "前面", "旁边", "左边", "右边", "下面", "shàngmiàn", "qiánmiàn", "pángbiān"],
            },
          ],
          commonError:
            "Writing *在书桌上面有一台电脑* (extra 在 before 有) or *椅子是在书桌前面* (extra 是 before 在).",
        },
        {
          id: "house-furniture-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "ideal-home-writing",
          marks: 4,
          question:
            "Write a short paragraph (Simplified Chinese + tone-marked Pinyin) comparing two rooms in your home, stating which room is your favourite with a reason, and describing your future dream residence.",
          hints: [
            "Compare two rooms with 比 (no 很!) or 没有…那么….",
            "Give your preference using 最喜欢 and explain why with 因为 + 又…又….",
            "Add a future time frame with 将来我想住在… + a pre-noun modifier ending in 的.",
          ],
          modelAnswer:
            "我的卧室比弟弟的大得多，而且很明亮。我最喜欢我的卧室，因为它又安静又舒服，我可以安心看书。将来我想住在一栋有大花园的别墅里。(Wǒ de wòshì bǐ dìdi de dà de duō, érqiě hěn míngliàng. Wǒ zuì xǐhuan wǒ de wòshì, yīnwèi tā yòu ānjìng yòu shūfu, wǒ kěyǐ ānxīn kànshū. Jiānglái wǒ xiǎng zhù zài yí dòng yǒu dà huāyuán de biéshù lǐ.)",
          markScheme: [
            {
              point: "Valid room comparison using 比 (+ 得多/一点儿) or 没有 without 很",
              keywords: ["比", "大得多", "明亮", "没有", "bǐ", "dà de duō"],
            },
            {
              point: "States favourite room with 最喜欢",
              keywords: ["最喜欢", "zuì xǐhuan"],
            },
            {
              point: "Gives a clear reason with 因为 (and descriptive adjectives)",
              keywords: ["因为", "安静", "舒服", "宽敞", "yīnwèi", "ānjìng", "shūfu"],
            },
            {
              point: "Includes a future dream-home sentence (将来 / 希望 + 别墅/公寓)",
              keywords: ["将来", "希望", "别墅", "花园", "jiānglái", "biéshù"],
            },
          ],
          commonError:
            "Inserting 很 into the 比 clause (*比弟弟的很大*) or putting 'with a garden' after 别墅 instead of before it (有花园的别墅).",
        },
      ],
    },
    {
      id: "house-furniture-p2",
      title: "House, Rooms & Furniture — Practice Paper 2",
      questions: [
        {
          id: "house-furniture-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "house-types-rooms",
          question:
            "Write the Mandarin word for **garden** in Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["花园", "huāyuán"],
            display: "花园 (huāyuán)",
          },
          hints: ["Literally 'flower yard' (花 huā + 园 yuán)."],
          solution: ["Garden is **花园 (huāyuán)**."],
        },
        {
          id: "house-furniture-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "house-types-rooms",
          question:
            "Write the Mandarin word for **bathroom / washroom** (3 characters) in Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["卫生间", "洗手间", "wèishēngjiān", "xǐshǒujiān"],
            display: "卫生间 (wèishēngjiān)",
          },
          hints: ["Ends with 间 (jiān); starts with 卫生 (hygiene) or 洗手 (wash hands)."],
          solution: ["Bathroom is **卫生间 (wèishēngjiān)** (also **洗手间 xǐshǒujiān**)."],
        },
        {
          id: "house-furniture-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "house-types-rooms",
          question:
            "Fill in **二** or **两**: **我的书房在___楼。** (Answer in Simplified Chinese or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["二", "èr"],
            display: "二 (èr)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["两", "liǎng"] },
              feedback: "二楼 is a specific floor label (2nd floor), NOT a quantity of storeys (两层)!",
            },
          ],
          hints: [
            "Is this counting how many storeys (层), or naming a specific floor number (楼)?",
            "Ordinal floor numbers take 二.",
          ],
          solution: [
            "Specific floor numbers take **二 (èr)**: **二楼 (èr lóu — 2nd floor)**.",
          ],
        },
        {
          id: "house-furniture-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "furniture-measure-words",
          question:
            "Write the Mandarin word for **wardrobe / closet** in Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["衣柜", "yīguì"],
            display: "衣柜 (yīguì)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["书架", "shūjià"] },
              feedback: "书架 (shūjià) is a bookshelf — wardrobe is 衣柜 (yīguì).",
            },
          ],
          hints: [
            "Literally 'clothes cabinet': 衣 (yī) + 柜 (guì).",
            "Tone pattern: 1st tone + 4th tone.",
          ],
          solution: ["Wardrobe is **衣柜 (yīguì)**."],
        },
        {
          id: "house-furniture-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "furniture-measure-words",
          question:
            "Translate **two beds** into Simplified Chinese (or tone-marked Pinyin) using the exact classifier.",
          answer: {
            type: "text",
            accept: ["两张床", "liǎng zhāng chuáng"],
            display: "两张床 (liǎng zhāng chuáng)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["二张床", "èr zhāng chuáng"] },
              feedback: "Use 两 (liǎng) before any measure word, never 二 (èr)!",
            },
          ],
          hints: [
            "Bed (床) is a flat horizontal surface → classifier 张 (zhāng).",
            "Apply the 两 rule for 2 before a classifier.",
          ],
          solution: ["Two beds is **两张床 (liǎng zhāng chuáng)**."],
        },
        {
          id: "house-furniture-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "furniture-measure-words",
          question:
            "Write the Mandarin word for **desk lamp** in Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["台灯", "táidēng"],
            display: "台灯 (táidēng)",
          },
          hints: [
            "Literally 'table/platform lamp': 台 (tái) + 灯 (dēng).",
            "Takes the lamp classifier 盏 (zhǎn).",
          ],
          solution: ["Desk lamp is **台灯 (táidēng)**."],
        },
        {
          id: "house-furniture-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "position-words-you-zai",
          question:
            "Write the Mandarin position word for **behind** in Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["后面", "后边", "hòumiàn", "hòubiān"],
            display: "后面 (hòumiàn)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["前面", "qiánmiàn"] },
              feedback: "前面 (qiánmiàn) means 'in front of' — the opposite is 后面 (hòumiàn).",
            },
          ],
          hints: [
            "Opposite of 前面 (qiánmiàn).",
            "Starts with 后 (hòu).",
          ],
          solution: ["Behind is **后面 (hòumiàn)** (or **后边 hòubiān**)."],
        },
        {
          id: "house-furniture-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "position-words-you-zai",
          question:
            "Translate **between the bed and the desk** into Simplified Chinese (or tone-marked Pinyin) using **床**, **书桌**, and **中间**.",
          answer: {
            type: "text",
            accept: [
              "床和书桌中间",
              "床和书桌的中间",
              "chuáng hé shūzhuō zhōngjiān",
              "chuáng hé shūzhuō de zhōngjiān",
            ],
            display: "床和书桌中间 (chuáng hé shūzhuō zhōngjiān)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["中间床和书桌"] },
              feedback: "Put 中间 AFTER both nouns: A 和 B 中间!",
            },
          ],
          hints: [
            "Follow the Mandarin template: A 和 B + 中间.",
            "Join 床 and 书桌 with 和, then put 中间 at the end.",
          ],
          solution: [
            "Between the bed and the desk is **床和书桌中间 (chuáng hé shūzhuō zhōngjiān)**.",
          ],
        },
        {
          id: "house-furniture-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "position-words-you-zai",
          question:
            "Choose **有** or **在** to complete: **沙发前面___一张小桌子。**",
          answer: {
            type: "text",
            accept: ["有", "yǒu"],
            display: "有 (yǒu)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["在", "zài"] },
              feedback: "The Place (沙发前面) comes first and an indefinite object (一张小桌子) comes second → use 有!",
            },
          ],
          hints: [
            "Look at what comes first: Place (沙发前面) followed by an indefinite item (一张小桌子).",
            "Place + ___ + Object takes the existence verb.",
          ],
          solution: [
            "Existence sentence (`Place + 有 + Object`): **沙发前面有一张小桌子**.",
          ],
        },
        {
          id: "house-furniture-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "position-words-you-zai",
          question:
            "Translate **'The bookshelf is to the right of the wardrobe'** into Simplified Chinese (or tone-marked Pinyin) using **书架**, **衣柜**, **在**, and **右边**.",
          answer: {
            type: "text",
            accept: [
              "书架在衣柜右边",
              "书架在衣柜的右边",
              "shūjià zài yīguì yòubiān",
              "shūjià zài yīguì de yòubiān",
            ],
            display: "书架在衣柜的右边 (shūjià zài yīguì de yòubiān)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["衣柜在书架右边", "衣柜在书架的右边"] },
              feedback: "Check which object is being located: 'The bookshelf (书架) is…' so 书架 comes first!",
            },
          ],
          hints: [
            "Use OZP: Object (书架) + 在 + Place (衣柜右边 / 衣柜的右边).",
            "Never put 是 before 在.",
          ],
          solution: [
            "Specific object first (**书架**), verb **在**, then reference noun + position (**衣柜的右边**): **书架在衣柜的右边**.",
          ],
        },
        {
          id: "house-furniture-p2-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "ideal-home-writing",
          question:
            "Read: **我们公寓的阳台虽然不大，但是可以看到很美的风景，所以我最喜欢在阳台上喝茶、看书。** Why does the speaker love the balcony most?",
          options: [
            "It is the biggest room in the whole apartment.",
            "It has a big swimming pool and two beds outside.",
            "It has a lovely view and is great for tea and reading.",
            "It is inside the kitchen right next to the big fridge.",
          ],
          answerIndex: 2,
          hints: [
            "Read after 但是 (but): 可以看到很美的风景 (can see a very pretty view).",
            "Check the activities after 所以: 喝茶 (drink tea) and 看书 (read books).",
          ],
          explanation:
            "Even though the **阳台 (balcony)** is not big (**虽然不大**), the speaker loves it because **可以看到很美的风景** (lovely view) and they can **喝茶、看书** (drink tea and read) there.",
        },
        {
          id: "house-furniture-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "ideal-home-writing",
          question:
            "Complete the negative complaint ('The kitchen is a bit small') with the 3-character adverb before **小**: **厨房___小。**",
          answer: {
            type: "text",
            accept: ["有点儿", "有点", "yǒudiǎnr", "yǒudiǎn"],
            display: "有点儿 (yǒudiǎnr)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["一点儿", "yìdiǎnr"] },
              feedback: "一点儿 goes AFTER an adjective in comparisons (小一点儿); BEFORE an undesired adjective use 有点儿!",
            },
          ],
          hints: [
            "This adverb sits BEFORE a negative/undesired adjective like 小, 乱, or 吵.",
            "Compare 有点儿 + Adj with Adj + 一点儿.",
          ],
          solution: [
            "**有点儿 (yǒudiǎnr)** precedes undesired adjectives: **厨房有点儿小** (The kitchen is a bit small).",
          ],
        },
        {
          id: "house-furniture-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "furniture-measure-words",
          marks: 3,
          question:
            "A student wrote three incorrect phrases: (1) 二把书桌 (2) 一张椅子 (3) 我的房间又乱又明亮. In English and Simplified Chinese (with Pinyin), fix ALL THREE mistakes clearly.",
          hints: [
            "Check the 二 vs 两 rule and flat-surface vs gripped-chair classifiers for (1) and (2).",
            "For (3), remember that 又…又… cannot mix one negative trait (乱) with one positive trait (明亮).",
          ],
          modelAnswer:
            "1) 两张书桌 (liǎng zhāng shūzhuō — use 两 before a classifier and 张 for flat desks). 2) 一把椅子 (yì bǎ yǐzi — chairs take 把). 3) 我的房间虽然有点儿乱，但是很明亮 (Wǒ de fángjiān suīrán yǒudiǎnr luàn, dànshì hěn míngliàng — use 虽然…但是… for contrasting traits instead of 又…又…).",
          markScheme: [
            {
              point: "Fixes (1) to 两张书桌 (both 两 and 张)",
              keywords: ["两张书桌", "liǎng zhāng shūzhuō"],
            },
            {
              point: "Fixes (2) to 一把椅子 (把 for chair)",
              keywords: ["一把椅子", "yì bǎ yǐzi", "yī bǎ yǐzi"],
            },
            {
              point: "Fixes (3) using 虽然…但是… (or matching positive pair like 又干净又明亮)",
              keywords: ["虽然", "但是", "suīrán", "dànshì", "又干净又明亮"],
            },
          ],
          commonError:
            "Fixing only the classifier in (1) while forgetting to change 二 to 两.",
        },
        {
          id: "house-furniture-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "position-words-you-zai",
          marks: 3,
          question:
            "Explain the grammar difference between an existence sentence and a location sentence in Mandarin, and provide ONE correct Chinese example (with tone-marked Pinyin) of EACH using a desk and a lamp.",
          hints: [
            "Recall PYO (Place + 有 + Object) vs OZP (Object + 在 + Place).",
            "Mention that 在 is never placed before Place in a 有 sentence, and 是 is never placed before 在.",
            "Give one clean example with 书桌上面 and 台灯 for each pattern.",
          ],
          modelAnswer:
            "Existence uses Place + 有 + Object (never add 在 before Place): 书桌上面有一盏台灯 (Shūzhuō shàngmiàn yǒu yì zhǎn táidēng). Location uses Object + 在 + Place (never add 是 before 在): 台灯在书桌上面 (Táidēng zài shūzhuō shàngmiàn).",
          markScheme: [
            {
              point: "Clearly distinguishes Place + 有 + Object (existence) vs Object + 在 + Place (location)",
              keywords: ["place + 有", "object + 在", "有", "在"],
            },
            {
              point: "Correct 有 example with desk and lamp",
              keywords: ["书桌上面有", "书桌上有", "shūzhuō shàngmiàn yǒu"],
            },
            {
              point: "Correct 在 example with lamp and desk",
              keywords: ["台灯在书桌", "táidēng zài shūzhuō"],
            },
          ],
          commonError:
            "Putting 在 before 书桌上面 in the 有 example or adding 是 before 在.",
        },
        {
          id: "house-furniture-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "ideal-home-writing",
          marks: 4,
          question:
            "Write a cohesive IGCSE-style paragraph (around 70–90 characters in Simplified Chinese + tone-marked Pinyin) describing a bedroom's size and colours, two pieces of furniture with their positions, a comparison with another family member's room, and why you like it.",
          hints: [
            "Open with size/brightness using 又…又… or 虽然…但是….",
            "Describe two furniture items with exact classifiers (张, 把, 台, 个) and position words (旁边, 上面, 前面, 中间).",
            "Include a 比 or 没有 comparison without 很, and end with 我最喜欢…，因为….",
          ],
          modelAnswer:
            "我的卧室又大又明亮，墙是白色的。窗户旁边有一张书桌，书桌上面有一台电脑，床在书桌的左边。我的卧室比哥哥的干净得多，虽然没有客厅那么宽敞，但是我最喜欢这里，因为每天晚上我可以在这里安静地看书和听音乐。(Wǒ de wòshì yòu dà yòu míngliàng, qiáng shì báisè de. Chuānghu pángbiān yǒu yì zhāng shūzhuō, shūzhuō shàngmiàn yǒu yì tái diànnǎo, chuáng zài shūzhuō de zuǒbiān. Wǒ de wòshì bǐ gēge de gānjìng de duō, suīrán méiyǒu kètīng nàme kuānchang, dànshì wǒ zuì xǐhuan zhèlǐ, yīnwèi měitiān wǎnshang wǒ kěyǐ zài zhèlǐ ānjìng de kànshū hé tīng yīnyuè.)",
          markScheme: [
            {
              point: "Describes bedroom size, brightness or colour (又…又… / 白色 / 明亮 / 宽敞)",
              keywords: ["又大又明亮", "明亮", "白色", "蓝色", "宽敞", "míngliàng", "kuānchang"],
            },
            {
              point: "Includes furniture with accurate classifiers and position words",
              keywords: ["书桌", "电脑", "旁边", "上面", "左边", "右边", "shūzhuō", "pángbiān"],
            },
            {
              point: "Uses a grammatically sound comparison (比 / 没有)",
              keywords: ["比哥哥", "比弟弟", "比姐姐", "比妹妹", "没有客厅", "得多", "一点儿", "de duō"],
            },
            {
              point: "Expresses preference with a justified reason (最喜欢 / 喜欢 + 因为)",
              keywords: ["因为", "喜欢", "安静", "舒服", "yīnwèi", "xǐhuan"],
            },
          ],
          commonError:
            "Writing short disconnected sentences without connectives (虽然…但是…, 因为) or placing 很 before the adjective after 比.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "house-furniture-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "position-words-you-zai",
      question:
        "Three pieces of furniture sit in a row along the wall: **床在书桌的左边，衣柜在书桌的右边。** Using **床**, **衣柜**, **中间**, and **在**, write ONE Simplified Chinese sentence stating where the desk (**书桌**) is.",
      answer: {
        type: "text",
        accept: [
          "书桌在床和衣柜中间",
          "书桌在床和衣柜的中间",
          "书桌在衣柜和床中间",
          "书桌在衣柜和床的中间",
          "shūzhuō zài chuáng hé yīguì zhōngjiān",
          "shūzhuō zài chuáng hé yīguì de zhōngjiān",
        ],
        display: "书桌在床和衣柜中间 (shūzhuō zài chuáng hé yīguì zhōngjiān)",
      },
      hints: [
        "Visualise left-to-right: 床 — 书桌 — 衣柜.",
        "Start with the known Object (书桌) + 在 + A 和 B 中间.",
        "Keep 中间 at the very end after both reference nouns.",
      ],
      solution: [
        "Since 床 is on the left of 书桌 and 衣柜 is on the right, 书桌 sits between them.",
        "Use `Object + 在 + A 和 B 中间`: **书桌在床和衣柜中间 (shūzhuō zài chuáng hé yīguì zhōngjiān)**.",
      ],
    },
    {
      id: "house-furniture-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "house-types-rooms",
      question:
        "Translate **'a two-storey villa'** into Simplified Chinese (or tone-marked Pinyin) by arranging **两层**, **别墅**, **的**, and **一栋** into natural Mandarin modifier-before-noun order.",
      answer: {
        type: "text",
        accept: [
          "一栋两层的别墅",
          "yí dòng liǎng céng de biéshù",
          "yī dòng liǎng céng de biéshù",
        ],
        display: "一栋两层的别墅 (yí dòng liǎng céng de biéshù)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["一栋二层的别墅"] },
          feedback: "Storeys take 两层 (liǎng céng), never 二层!",
        },
      ],
      hints: [
        "Put Number + Measure Word (一栋) first, then the modifier (两层的), then the noun (别墅).",
        "Remember 2 storeys = 两层 (not 二层).",
      ],
      solution: [
        "Number + MW (**一栋**) + Modifier (**两层的**) + Noun (**别墅**) = **一栋两层的别墅 (yí dòng liǎng céng de biéshù)**.",
      ],
    },
    {
      id: "house-furniture-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "position-words-you-zai",
      question:
        "Read this spatial puzzle carefully: **客厅的北边是厨房，南边是阳台。沙发在客厅中间，面对南边的阳台；电视在沙发对面。** Which direction is the TV (**电视**) on?",
      options: [
        "North side (北边), near the kitchen",
        "South side (南边), near the balcony",
        "Inside the kitchen (厨房里面)",
        "Outside the front door (大门外面)",
      ],
      answerIndex: 1,
      hints: [
        "Trace what the sofa (沙发) faces: 面对南边的阳台 (facing the south balcony).",
        "电视在沙发对面 means the TV is opposite the sofa — i.e., in the direction the sofa faces!",
      ],
      explanation:
        "The sofa sits in the middle facing **南边 (south)** toward the balcony (**阳台**), and the TV (**电视**) is **opposite (对面)** the sofa, so the TV is on the **south side (南边)** near the balcony.",
    },
    {
      id: "house-furniture-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "ideal-home-writing",
      question:
        "Transform **我的卧室比哥哥的小得多** into an equivalent negative comparison using **没有** (keeping **我的卧室**, **哥哥的**, and **大** — without adding extra rooms).",
      answer: {
        type: "text",
        accept: [
          "我的卧室没有哥哥的大",
          "我的卧室没有哥哥的那么大",
          "wǒ de wòshì méiyǒu gēge de dà",
          "wǒ de wòshì méiyǒu gēge de nàme dà",
        ],
        display: "我的卧室没有哥哥的那么大 (wǒ de wòshì méiyǒu gēge de nàme dà)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["我的卧室没有哥哥的小", "我的卧室没有哥哥的那么小"] },
          feedback: "Careful! 'Not as small as' reverses the meaning — swap 小 to 大: 我的卧室没有哥哥的那么大!",
        },
      ],
      hints: [
        "If A is smaller than B, then A is 'not as BIG as' B!",
        "Use the pattern A + 没有 + B + (那么) + 大.",
      ],
      solution: [
        "'My bedroom is much smaller than my brother's' flips to 'My bedroom is not as big as my brother's'.",
        "Result: **我的卧室没有哥哥的那么大 (wǒ de wòshì méiyǒu gēge de nàme dà)**.",
      ],
    },
    {
      id: "house-furniture-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "furniture-measure-words",
      question:
        "Translate **'a bright bedroom that has a big balcony'** into Simplified Chinese (or tone-marked Pinyin) using **一间**, **有大阳台的**, **明亮**, and **卧室**.",
      answer: {
        type: "text",
        accept: [
          "一间有大阳台的明亮卧室",
          "一间有大阳台的明亮的卧室",
          "yì jiān yǒu dà yángtái de míngliàng wòshì",
          "yī jiān yǒu dà yángtái de míngliàng wòshì",
        ],
        display: "一间有大阳台的明亮卧室 (yì jiān yǒu dà yángtái de míngliàng wòshì)",
      },
      hints: [
        "In Mandarin, relative clauses ('that has a big balcony') ALWAYS come BEFORE the noun!",
        "Order: Number+MW (一间) + Relative clause (有大阳台的) + Adjective (明亮) + Noun (卧室).",
      ],
      solution: [
        "Put **有大阳台的** before **明亮卧室**: **一间有大阳台的明亮卧室 (yì jiān yǒu dà yángtái de míngliàng wòshì)**.",
      ],
    },
    {
      id: "house-furniture-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "ideal-home-writing",
      question:
        "Read the estate agent's advert: **这套公寓在十八楼，一共四间房间，客厅比卧室宽敞得多，而且每个房间都有空调。虽然没有花园，但是楼下有游泳池，很适合一家四口住。** Which buyer would be MOST disappointed?",
      options: [
        "A family of four who love swimming every weekend.",
        "Someone who wants air-conditioning in every bedroom.",
        "A couple who want a private garden for planting fruit trees.",
        "A student who likes high-floor apartments with a spacious lounge.",
      ],
      answerIndex: 2,
      hints: [
        "Look at the concession clause starting with 虽然 (although).",
        "Identify the ONE feature this condo explicitly lacks (没有…).",
      ],
      explanation:
        "The advert states **虽然没有花园** (Suīrán méiyǒu huāyuán — although there is no garden), so a couple wanting a private **garden** for planting fruit trees would be most disappointed.",
    },
    {
      id: "house-furniture-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "position-words-you-zai",
      marks: 4,
      question:
        "Proofread and rewrite this flawed student paragraph in accurate Simplified Chinese (with tone-marked Pinyin), fixing all four grammar errors: *我住新加坡的一个公寓。在我的卧室里有二把椅子和一张电脑。台灯是在上面书桌。我的卧室比弟弟的很宽敞。*",
      hints: [
        "Error 1: missing 在 after 住 (and 套 for apartments).",
        "Error 2: extra 在 before 有, 二 instead of 两, and wrong classifier for 电脑 (台, not 张).",
        "Error 3: extra 是 before 在, and English order 上面书桌 instead of 书桌上面.",
        "Error 4: 很 is forbidden inside a 比 comparison (replace with 宽敞得多 or just 宽敞).",
      ],
      modelAnswer:
        "我住在新加坡的一套公寓里。我的卧室里有两把椅子和一台电脑。台灯在书桌上面。我的卧室比弟弟的宽敞得多。(Wǒ zhù zài Xīnjiāpō de yí tào gōngyù lǐ. Wǒ de wòshì lǐ yǒu liǎng bǎ yǐzi hé yì tái diànnǎo. Táidēng zài shūzhuō shàngmiàn. Wǒ de wòshì bǐ dìdi de kuānchang de duō.)",
      markScheme: [
        {
          point: "Fixes living-in phrase with 住在 (and 套/里)",
          keywords: ["住在新加坡", "zhù zài"],
        },
        {
          point: "Removes leading 在 before 有, fixes 两把椅子 and 一台电脑",
          keywords: ["两把椅子", "一台电脑", "liǎng bǎ yǐzi", "tái diànnǎo"],
        },
        {
          point: "Removes 是 before 在 and places 上面 after 书桌 (台灯在书桌上面)",
          keywords: ["台灯在书桌上面", "táidēng zài shūzhuō shàngmiàn"],
        },
        {
          point: "Removes 很 after 比 (e.g. 宽敞得多 / 宽敞一点儿 / 比弟弟的宽敞)",
          keywords: ["宽敞得多", "宽敞一点儿", "弟弟的宽敞", "kuānchang de duō"],
        },
      ],
      commonError:
        "Fixing the classifiers while overlooking the forbidden 是 before 在 or the forbidden 很 after 比.",
    },
    {
      id: "house-furniture-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "ideal-home-writing",
      marks: 4,
      question:
        "Design your dream home for an IGCSE 0547 email to a Chinese pen-pal (90–110 characters in Simplified Chinese + tone-marked Pinyin). Include: (1) house type & storeys, (2) an upstairs/downstairs room split, (3) a room description with spatial layout, and (4) a paired connective explaining why you hope to live there in the future.",
      hints: [
        "Open with 将来我希望住在一栋两层的别墅里 (future dream home + storeys).",
        "Split rooms cleanly using 楼下有…；楼上有… with 间 and 两.",
        "Describe one room using 又…又… plus a Place + 有 / Object + 在 sentence.",
        "Close with 因为…，所以… or 虽然…，但是… explaining why you want that home.",
      ],
      modelAnswer:
        "将来我希望住在一栋两层的海边别墅里。楼下有宽敞的客厅、现代的厨房和一个大花园；楼上有四间卧室、一间书房和两间卫生间。我的书房又安静又明亮，大窗户旁边有一张木头书桌，书桌上面有一台电脑。因为我喜欢看书和游泳，所以我希望花园后面还有一个游泳池。(Jiānglái wǒ xīwàng zhù zài yí dòng liǎng céng de hǎibiān biéshù lǐ. Lóuxià yǒu kuānchang de kètīng, xiàndài de chúfáng hé yí gè dà huāyuán; lóushàng yǒu sì jiān wòshì, yì jiān shūfáng hé liǎng jiān wèishēngjiān. Wǒ de shūfáng yòu ānjìng yòu míngliàng, dà chuānghu pángbiān yǒu yì zhāng mùtou shūzhuō, shūzhuō shàngmiàn yǒu yì tái diànnǎo. Yīnwèi wǒ xǐhuan kànshū hé yóuyǒng, suǒyǐ wǒ xīwàng huāyuán hòumiàn hái yǒu yí gè yóuyǒngchí.)",
      markScheme: [
        {
          point: "Specifies dream home type and storeys with future marker (将来 / 希望 + 别墅/公寓 + 层)",
          keywords: ["将来", "希望", "别墅", "公寓", "两层", "三层", "jiānglái", "biéshù"],
        },
        {
          point: "Splits rooms accurately across 楼下 and 楼上 with 间",
          keywords: ["楼下", "楼上", "间", "lóuxià", "lóushàng"],
        },
        {
          point: "Describes furniture & position using accurate classifiers and 方位词",
          keywords: ["旁边", "上面", "后面", "书桌", "电脑", "pángbiān", "shàngmiàn"],
        },
        {
          point: "Uses paired connectives (因为…所以… or 虽然…但是…) to justify the wish",
          keywords: ["因为", "所以", "虽然", "但是", "yīnwèi", "suǒyǐ", "suīrán"],
        },
      ],
      commonError:
        "Forgetting to include a second connective partner (writing 因为 without 所以, or 虽然 without 但是) or mixing up 楼下 and 楼上.",
    },
  ],
};
