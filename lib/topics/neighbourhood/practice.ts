import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "neighbourhood-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "local-facilities",
      question:
        "Write the Mandarin word for **supermarket** in Simplified Chinese or tone-marked Pinyin.",
      answer: {
        type: "text",
        accept: ["超市", "chāoshì"],
        display: "超市 (chāoshì)",
      },
      hints: ["Two syllables starting with chāo- (short for 超级市场)."],
      solution: ["Supermarket is **超市 (chāoshì)**."],
    },
    {
      id: "neighbourhood-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "local-facilities",
      question:
        "Write the Mandarin word for **MRT / subway station** in Simplified Chinese or tone-marked Pinyin.",
      answer: {
        type: "text",
        accept: ["地铁站", "dìtiězhàn"],
        display: "地铁站 (dìtiězhàn)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["地铁", "dìtiě"] },
          feedback: "地铁 is the subway/MRT train itself — add 站 (zhàn) for the station: 地铁站!",
        },
      ],
      hints: ["Combine 地铁 (MRT/subway) + 站 (station)."],
      solution: ["MRT/subway station is **地铁站 (dìtiězhàn)**."],
    },
    {
      id: "neighbourhood-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "distance-li-transport",
      question:
        "Fill in the single distance preposition: **我家___学校很近。** (Answer in Simplified Chinese or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: ["离", "lí"],
        display: "离 (lí)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["跟", "gēn"] },
          feedback: "Distance between two places ALWAYS uses 离 (lí), never 跟!",
        },
        {
          spec: { type: "text", accept: ["到", "dào"] },
          feedback: "到 is paired with 从 (从A到B); with 很近 / 很远, always use 离 (lí)!",
        },
      ],
      hints: [
        "Use the dedicated distance preposition placed directly between A and B.",
        "Second tone, Pinyin starts with l-.",
      ],
      solution: [
        "Distance sentences follow **`A 离 B + 很近 / 很远`**: **我家离学校很近**.",
      ],
    },
    {
      id: "neighbourhood-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "distance-li-transport",
      question:
        "Which verb correctly completes **我周末喜欢去公园___自行车** ('At weekends I like riding a bike in the park')?",
      options: ["坐 (zuò)", "骑 (qí)", "开 (kāi)", "走 (zǒu)"],
      answerIndex: 1,
      hints: [
        "Bicycles are straddled, not sat inside like a bus.",
        "Look for the verb with the horse radical 马.",
      ],
      explanation:
        "**骑 (qí)** pairs with bicycles (**骑自行车 qí zìxíngchē**). **坐** is for buses/MRT/taxis and **开** is for driving cars.",
    },
    {
      id: "neighbourhood-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "giving-directions",
      question:
        "Translate **go straight ahead** into Simplified Chinese (or tone-marked Pinyin) using **一直**, **往前**, and **走**.",
      answer: {
        type: "text",
        accept: ["一直往前走", "yìzhí wǎng qián zǒu", "yīzhí wǎng qián zǒu"],
        display: "一直往前走 (yìzhí wǎng qián zǒu)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["一直走往前"] },
          feedback: "Put 往前 BEFORE the verb 走: 一直往前走!",
        },
      ],
      hints: [
        "Keep 往 + Direction (往前) strictly BEFORE the verb 走.",
        "Start with 一直 (continuously/straight).",
      ],
      solution: [
        "**一直往前走 (yìzhí wǎng qián zǒu)** puts **往前** before **走**.",
      ],
    },
    {
      id: "neighbourhood-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "giving-directions",
      question:
        "Translate **turn right** into Simplified Chinese or tone-marked Pinyin.",
      answer: {
        type: "text",
        accept: ["往右拐", "往右转", "wǎng yòu guǎi", "wǎng yòu zhuǎn"],
        display: "往右拐 (wǎng yòu guǎi)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["往左拐", "往左转", "wǎng zuǒ guǎi"] },
          feedback: "Careful — 往左拐 means turn LEFT! Right is 右 (yòu).",
        },
        {
          spec: { type: "text", accept: ["拐往右"] },
          feedback: "Direction (往右) ALWAYS precedes the verb (拐): 往右拐!",
        },
      ],
      hints: [
        "Pattern: 往 + 右 + 拐 (or 转).",
        "Remember: 往 + direction goes BEFORE the verb.",
      ],
      solution: ["Turn right is **往右拐 (wǎng yòu guǎi)** (or **往右转 wǎng yòu zhuǎn**)."],
    },
    {
      id: "neighbourhood-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "giving-directions",
      question:
        "Choose the correct Mandarin order for **'turn left at the second intersection'**.",
      options: [
        "往左拐在第二个路口。",
        "第二个路口往左拐在。",
        "在第二个路口往左拐。",
        "在路口第二个拐往左。",
      ],
      answerIndex: 2,
      hints: [
        "Use Place → Direction → Verb (P-D-V) order.",
        "Start with 在第二个路口, then add 往左拐.",
      ],
      explanation:
        "**在第二个路口往左拐。** (Zài dì-èr gè lùkǒu wǎng zuǒ guǎi.) places the intersection **在第二个路口** BEFORE the turn command **往左拐**.",
    },
    {
      id: "neighbourhood-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "comparing-neighbourhoods",
      question:
        "Write the Mandarin word for **city centre / downtown** in Simplified Chinese or tone-marked Pinyin.",
      answer: {
        type: "text",
        accept: ["市中心", "shìzhōngxīn"],
        display: "市中心 (shìzhōngxīn)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["郊区", "jiāoqū"] },
          feedback: "郊区 (jiāoqū) means suburbs — city centre is 市中心 (shìzhōngxīn).",
        },
      ],
      hints: [
        "Literally 'city (市) + centre (中心)'.",
        "Three characters starting with 市 (shì).",
      ],
      solution: ["City centre is **市中心 (shìzhōngxīn)**."],
    },
    {
      id: "neighbourhood-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "comparing-neighbourhoods",
      question:
        "Write the Mandarin adjective for **quiet / peaceful** in Simplified Chinese or tone-marked Pinyin.",
      answer: {
        type: "text",
        accept: ["安静", "ānjìng"],
        display: "安静 (ānjìng)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["热闹", "rènào", "rènao"] },
          feedback: "热闹 (rènào) means lively/bustling — quiet is 安静 (ānjìng).",
        },
      ],
      hints: [
        "Two syllables: 1st tone + 4th tone, starting with ān-.",
        "Example: 郊区的环境很___。",
      ],
      solution: ["Quiet / peaceful is **安静 (ānjìng)**."],
    },
    {
      id: "neighbourhood-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      guideRef: "comparing-neighbourhoods",
      question:
        "Which sentence correctly translates **'The suburbs are not as convenient as the city centre'**?",
      options: [
        "郊区比市中心不方便。",
        "郊区比市中心没有方便。",
        "市中心没有郊区那么方便。",
        "郊区没有市中心那么方便。",
      ],
      answerIndex: 3,
      hints: [
        "Use the negative comparison pattern: A + 没有 + B + (那么) + Adj.",
        "Make sure A is 郊区 and B is 市中心.",
      ],
      explanation:
        "**郊区没有市中心那么方便。** (Jiāoqū méiyǒu shìzhōngxīn nàme fāngbiàn.) puts **郊区** first and uses **没有…那么方便** instead of the ungrammatical *比…不方便*.",
    },
  ],
  papers: [
    {
      id: "neighbourhood-p1",
      title: "Neighbourhood & Directions — Practice Paper 1",
      questions: [
        {
          id: "neighbourhood-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "local-facilities",
          question:
            "Write the Mandarin word for **hospital** in Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["医院", "yīyuàn"],
            display: "医院 (yīyuàn)",
          },
          hints: ["Starts with 医 (yī, as in 医生 doctor) + 院 (yuàn)."],
          solution: ["Hospital is **医院 (yīyuàn)**."],
        },
        {
          id: "neighbourhood-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "local-facilities",
          question:
            "Write the Mandarin word for **bank** in Simplified Chinese or tone-marked Pinyin (watch the second syllable!).",
          answer: {
            type: "text",
            accept: ["银行", "yínháng"],
            display: "银行 (yínháng)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["yínxíng"] },
              feedback: "Watch the polyphone 行! In 银行 (bank), 行 is read háng (yínháng), never xíng!",
            },
          ],
          hints: ["银 (silver) + 行 (háng — bank/firm)."],
          solution: ["Bank is **银行 (yínháng)**."],
        },
        {
          id: "neighbourhood-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "local-facilities",
          question:
            "Write the Mandarin word for **park** in Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["公园", "gōngyuán"],
            display: "公园 (gōngyuán)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["花园", "huāyuán"] },
              feedback: "花园 (huāyuán) is a home garden — a public park is 公园 (gōngyuán)!",
            },
          ],
          hints: [
            "Literally 'public yard': 公 (gōng) + 园 (yuán).",
            "Distinguish it from 花园 (private garden).",
          ],
          solution: ["Public park is **公园 (gōngyuán)**."],
        },
        {
          id: "neighbourhood-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "local-facilities",
          question:
            "Translate **'Near my home there is a supermarket'** into Simplified Chinese (or tone-marked Pinyin) using **我家附近**, **有**, and **一家超市** (or **一个超市**).",
          answer: {
            type: "text",
            accept: [
              "我家附近有一家超市",
              "我家附近有一个超市",
              "wǒ jiā fùjìn yǒu yì jiā chāoshì",
              "wǒ jiā fùjìn yǒu yī jiā chāoshì",
              "wǒ jiā fùjìn yǒu yí gè chāoshì",
              "wǒ jiā fùjìn yǒu yī gè chāoshì",
            ],
            display: "我家附近有一家超市 (wǒ jiā fùjìn yǒu yì jiā chāoshì)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["在我家附近有一家超市", "在我家附近有一个超市"] },
              feedback: "Drop the leading 在! Existence sentences follow Place + 有 + Object directly.",
            },
          ],
          hints: [
            "Use Place (我家附近) + 有 + Object (一家超市).",
            "Never put 在 at the start of a 有 sentence.",
          ],
          solution: [
            "Place + 有 + Object = **我家附近有一家超市 (wǒ jiā fùjìn yǒu yì jiā chāoshì)**.",
          ],
        },
        {
          id: "neighbourhood-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "distance-li-transport",
          question:
            "Translate **'My home is not far from school'** into Simplified Chinese (or tone-marked Pinyin) using **我家**, **离**, **学校**, and **不远**.",
          answer: {
            type: "text",
            accept: [
              "我家离学校不远",
              "wǒ jiā lí xuéxiào bù yuǎn",
            ],
            display: "我家离学校不远 (wǒ jiā lí xuéxiào bù yuǎn)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["我家是离学校不远"] },
              feedback: "Never insert 是 before 离 or 不远!",
            },
          ],
          hints: [
            "Pattern: A + 离 + B + 不远.",
            "Do NOT insert 是 anywhere in the sentence.",
          ],
          solution: [
            "**我家离学校不远 (wǒ jiā lí xuéxiào bù yuǎn)** follows `A 离 B + 不远` cleanly.",
          ],
        },
        {
          id: "neighbourhood-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "distance-li-transport",
          question:
            "Translate **from my home to the park** into Simplified Chinese or tone-marked Pinyin using **从…到…**.",
          answer: {
            type: "text",
            accept: ["从我家到公园", "cóng wǒ jiā dào gōngyuán"],
            display: "从我家到公园 (cóng wǒ jiā dào gōngyuán)",
          },
          hints: [
            "Use 从 (from) before 我家 and 到 (to) before 公园.",
            "Do NOT use 离 in a 从…到… journey phrase.",
          ],
          solution: [
            "**从我家到公园 (cóng wǒ jiā dào gōngyuán)**.",
          ],
        },
        {
          id: "neighbourhood-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "distance-li-transport",
          question:
            "Translate **take the bus** into Simplified Chinese (or tone-marked Pinyin) using **坐** and **公共汽车**.",
          answer: {
            type: "text",
            accept: ["坐公共汽车", "zuò gōnggòng qìchē"],
            display: "坐公共汽车 (zuò gōnggòng qìchē)",
          },
          hints: [
            "Passengers sitting inside a bus use 坐 (zuò).",
            "Follow 坐 with 公共汽车 (gōnggòng qìchē).",
          ],
          solution: ["Take the bus is **坐公共汽车 (zuò gōnggòng qìchē)**."],
        },
        {
          id: "neighbourhood-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "giving-directions",
          question:
            "Complete the polite direction question: **___，邮局怎么走？** (Write the 2-character polite opener in Simplified Chinese or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["请问", "qǐngwèn"],
            display: "请问 (qǐngwèn)",
          },
          hints: [
            "Literally 'please ask' — Excuse me, may I ask…",
            "3rd tone + 4th tone.",
          ],
          solution: ["Polite opener is **请问 (qǐngwèn)**."],
        },
        {
          id: "neighbourhood-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "giving-directions",
          question:
            "Write the Mandarin phrase for **at the first intersection** in Simplified Chinese (or tone-marked Pinyin) using **在**, **第一个**, and **路口**.",
          answer: {
            type: "text",
            accept: ["在第一个路口", "zài dì-yī gè lùkǒu", "zài dì yī gè lùkǒu"],
            display: "在第一个路口 (zài dì-yī gè lùkǒu)",
          },
          hints: [
            "Order: 在 + 第 + 一 + 个 + 路口.",
            "This entire Place block goes BEFORE 往左拐 / 往右拐.",
          ],
          solution: [
            "At the first intersection is **在第一个路口 (zài dì-yī gè lùkǒu)**.",
          ],
        },
        {
          id: "neighbourhood-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "giving-directions",
          question:
            "Translate **'It is right on your right'** into Simplified Chinese (or tone-marked Pinyin) using **就在**, **你的**, and **右边**.",
          answer: {
            type: "text",
            accept: ["就在你的右边", "就在你右边", "jiù zài nǐ de yòubiān", "jiù zài nǐ yòubiān"],
            display: "就在你的右边 (jiù zài nǐ de yòubiān)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["就在你的左边", "jiù zài nǐ de zuǒbiān"] },
              feedback: "左边 is left! Right-hand side is 右边 (yòubiān).",
            },
          ],
          hints: [
            "就在 = right at; 你的右边 = your right side.",
            "Double-check 左 (left) vs 右 (right).",
          ],
          solution: [
            "**就在你的右边 (jiù zài nǐ de yòubiān)**.",
          ],
        },
        {
          id: "neighbourhood-p1-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "comparing-neighbourhoods",
          question:
            "Which sentence accurately says **'The air in the suburbs is fresher than in the city centre'**?",
          options: [
            "郊区的空气比市中心新鲜。",
            "郊区的空气比市中心很新鲜。",
            "郊区的空气没有市中心新鲜。",
            "市中心的空气比郊区新鲜。",
          ],
          answerIndex: 0,
          hints: [
            "Follow A + 比 + B + Adj without 很.",
            "Check that 郊区的空气 comes first.",
          ],
          explanation:
            "**郊区的空气比市中心新鲜。** (Jiāoqū de kōngqì bǐ shìzhōngxīn xīnxiān.) compares suburban air to city air accurately without inserting **很**.",
        },
        {
          id: "neighbourhood-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-neighbourhoods",
          question:
            "Write the Mandarin noun for **environment / surroundings** in Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["环境", "huánjìng"],
            display: "环境 (huánjìng)",
          },
          hints: [
            "Used in ___很好 (the surroundings are very good).",
            "Tone pattern: 2nd tone + 4th tone.",
          ],
          solution: ["Environment / surroundings is **环境 (huánjìng)**."],
        },
        {
          id: "neighbourhood-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "local-facilities",
          marks: 3,
          question:
            "Write 2–3 sentences in Simplified Chinese (with tone-marked Pinyin) describing at least three local amenities near your home, how far your home is from school, and how you travel to school.",
          hints: [
            "Open with 我家附近有… (no leading 在!) and list 3 facilities.",
            "State distance with 我家离学校… (no 是!).",
            "Add your commute with 从我家到学校 + 走路 / 坐地铁 / 坐公共汽车 + duration.",
          ],
          modelAnswer:
            "我家附近有一家大超市、一个公园和一个地铁站。我家离学校不太远，从我家到学校坐地铁只要十五分钟。(Wǒ jiā fùjìn yǒu yì jiā dà chāoshì, yí gè gōngyuán hé yí gè dìtiězhàn. Wǒ jiā lí xuéxiào bú tài yuǎn, cóng wǒ jiā dào xuéxiào zuò dìtiě zhǐ yào shíwǔ fēnzhōng.)",
          markScheme: [
            {
              point: "Lists nearby amenities using 附近有 (no leading 在)",
              keywords: ["附近有", "超市", "公园", "地铁站", "图书馆", "fùjìn yǒu"],
            },
            {
              point: "Uses 离 (lí) accurately to describe distance",
              keywords: ["离学校", "离我家", "很近", "不远", "不太远", "lí xuéxiào"],
            },
            {
              point: "States transport method and duration cleanly (从…到… + 坐地铁/走路/坐公共汽车)",
              keywords: ["坐地铁", "走路", "坐公共汽车", "骑自行车", "分钟", "zuò dìtiě", "zǒulù"],
            },
          ],
          commonError:
            "Writing *在我家附近有…* (extra 在) or *我家是离学校不远* (extra 是).",
        },
        {
          id: "neighbourhood-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "giving-directions",
          marks: 3,
          question:
            "A visitor outside your school gate asks for the nearest library. Write a clear 3-step set of street directions in Simplified Chinese (with tone-marked Pinyin) including going straight, turning at an intersection or traffic lights, and pinpointing which side it is on.",
          hints: [
            "Step 1: 一直往前走 (and optionally 过马路).",
            "Step 2: Place FIRST (在第一个路口 / 红绿灯), then 往左拐 or 往右拐.",
            "Step 3: 图书馆就在你的左边 / 右边.",
          ],
          modelAnswer:
            "你先一直往前走，过马路以后，在第一个路口往左拐，再走三分钟，图书馆就在你的右边。(Nǐ xiān yìzhí wǎng qián zǒu, guò mǎlù yǐhòu, zài dì-yī gè lùkǒu wǎng zuǒ guǎi, zài zǒu sān fēnzhōng, túshūguǎn jiù zài nǐ de yòubiān.)",
          markScheme: [
            {
              point: "Includes straight-ahead movement (一直往前走 / 往前走)",
              keywords: ["一直往前走", "往前走", "wǎng qián zǒu"],
            },
            {
              point: "Places intersection/lights before the turn command (在第一个路口/红绿灯 + 往左拐/往右拐)",
              keywords: ["路口", "红绿灯", "往左拐", "往右拐", "wǎng zuǒ guǎi", "wǎng yòu guǎi"],
            },
            {
              point: "Pinpoints the final side cleanly (就在你的右边 / 左边)",
              keywords: ["就在你的右边", "就在你的左边", "jiù zài nǐ de yòubiān", "jiù zài nǐ de zuǒbiān"],
            },
          ],
          commonError:
            "Putting the intersection after the verb (*往左拐在第一个路口*) or reversing direction and verb (*走往前*).",
        },
        {
          id: "neighbourhood-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "comparing-neighbourhoods",
          marks: 4,
          question:
            "Write a balanced Year 9 paragraph (70–90 characters in Simplified Chinese + tone-marked Pinyin) weighing downtown against the outskirts: mention one strength of each area using a comparative structure, note one drawback, and state which area you prefer to live in with a clear reason.",
          hints: [
            "Compare using 比 (市中心比郊区方便得多) or 没有 (郊区没有市中心热闹，但是更安静).",
            "Mention a drawback with 有点儿 (有点儿吵 / 比较远).",
            "Close with 我更喜欢住在…，因为….",
          ],
          modelAnswer:
            "市中心比郊区方便得多，交通发达，也很热闹，不过周末有点儿吵。郊区没有市中心热闹，但是环境更安静，空气也更新鲜。虽然我喜欢去市中心逛街，但是我更喜欢住在郊区，因为那里安全又舒服。(Shìzhōngxīn bǐ jiāoqū fāngbiàn de duō, jiāotōng fādá, yě hěn rènào, búguò zhōumò yǒudiǎnr chǎo. Jiāoqū méiyǒu shìzhōngxīn rènào, dànshì huánjìng gèng ānjìng, kōngqì yě gèng xīnxiān. Suīrán wǒ xǐhuan qù shìzhōngxīn guàngjiē, dànshì wǒ gèng xǐhuan zhù zài jiāoqū, yīnwèi nàlǐ ānquán yòu shūfu.)",
          markScheme: [
            {
              point: "Uses a valid comparative structure (比…得多 / 没有…热闹)",
              keywords: ["市中心比郊区", "郊区没有市中心", "方便得多", "shìzhōngxīn bǐ jiāoqū", "jiāoqū méiyǒu"],
            },
            {
              point: "Mentions strengths of both areas (方便/热闹 and 安静/环境/空气新鲜)",
              keywords: ["安静", "环境", "空气", "新鲜", "ānjìng", "huánjìng"],
            },
            {
              point: "Acknowledges a drawback using contrast (虽然…但是 / 不过 / 有点儿吵)",
              keywords: ["虽然", "但是", "不过", "有点儿吵", "suīrán", "dànshì"],
            },
            {
              point: "States personal preference with a justified reason (更喜欢 / 因为)",
              keywords: ["更喜欢", "因为", "gèng xǐhuan", "yīnwèi"],
            },
          ],
          commonError:
            "Writing *郊区比市中心不热闹* instead of *郊区没有市中心热闹*, or adding 很 after 比.",
        },
      ],
    },
    {
      id: "neighbourhood-p2",
      title: "Neighbourhood & Directions — Practice Paper 2",
      questions: [
        {
          id: "neighbourhood-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "local-facilities",
          question:
            "Write the Mandarin word for **cinema** in Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["电影院", "diànyǐngyuàn"],
            display: "电影院 (diànyǐngyuàn)",
          },
          hints: ["电影 (movie) + 院 (institution/theatre)."],
          solution: ["Cinema is **电影院 (diànyǐngyuàn)**."],
        },
        {
          id: "neighbourhood-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "local-facilities",
          question:
            "Write the Mandarin word for **restaurant** (2 characters) in Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["餐厅", "饭馆", "cāntīng", "fànguǎn"],
            display: "餐厅 (cāntīng)",
          },
          hints: ["Starts with 餐 (cān — meal) + 厅 (tīng — hall)."],
          solution: ["Restaurant is **餐厅 (cāntīng)** (also **饭馆 fànguǎn**)."],
        },
        {
          id: "neighbourhood-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "local-facilities",
          question:
            "Write the Mandarin word for **sports centre** in Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["体育中心", "tǐyù zhōngxīn"],
            display: "体育中心 (tǐyù zhōngxīn)",
          },
          hints: [
            "体育 (PE/sports) + 中心 (centre).",
            "Four characters: 3rd + 4th + 1st + 1st tones.",
          ],
          solution: ["Sports centre is **体育中心 (tǐyù zhōngxīn)**."],
        },
        {
          id: "neighbourhood-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "distance-li-transport",
          question:
            "Translate **ride a bicycle** into Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["骑自行车", "qí zìxíngchē"],
            display: "骑自行车 (qí zìxíngchē)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["坐自行车", "zuò zìxíngchē"] },
              feedback: "Bicycles ALWAYS take 骑 (qí, horse radical 马), never 坐!",
            },
          ],
          hints: [
            "Verb for straddling a bike is 骑 (qí).",
            "Bicycle is 自行车 (zìxíngchē).",
          ],
          solution: ["Ride a bicycle is **骑自行车 (qí zìxíngchē)**."],
        },
        {
          id: "neighbourhood-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "distance-li-transport",
          question:
            "Translate **'The supermarket is very far from here'** into Simplified Chinese (or tone-marked Pinyin) using **超市**, **离**, **这里**, and **很远**.",
          answer: {
            type: "text",
            accept: [
              "超市离这里很远",
              "超市离这儿很远",
              "chāoshì lí zhèlǐ hěn yuǎn",
              "chāoshì lí zhèr hěn yuǎn",
            ],
            display: "超市离这里很远 (chāoshì lí zhèlǐ hěn yuǎn)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["超市是离这里很远"] },
              feedback: "Drop 是! Distance sentences use A + 离 + B + 很远 directly.",
            },
          ],
          hints: [
            "Template: A + 离 + B + 很远.",
            "Remember: NO 是 before 很远.",
          ],
          solution: [
            "**超市离这里很远 (chāoshì lí zhèlǐ hěn yuǎn)**.",
          ],
        },
        {
          id: "neighbourhood-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "distance-li-transport",
          question:
            "Translate **20 minutes by MRT** into Simplified Chinese (or tone-marked Pinyin) using **坐地铁** and **二十分钟**.",
          answer: {
            type: "text",
            accept: [
              "坐地铁二十分钟",
              "坐地铁要二十分钟",
              "zuò dìtiě èrshí fēnzhōng",
              "zuò dìtiě yào èrshí fēnzhōng",
            ],
            display: "坐地铁二十分钟 (zuò dìtiě èrshí fēnzhōng)",
          },
          hints: [
            "Put the transport phrase (坐地铁) BEFORE the duration (二十分钟).",
            "20 minutes = 二十分钟.",
          ],
          solution: [
            "Transport + duration = **坐地铁二十分钟 (zuò dìtiě èrshí fēnzhōng)**.",
          ],
        },
        {
          id: "neighbourhood-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "giving-directions",
          question:
            "Write the Mandarin word for **traffic lights** in Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["红绿灯", "hónglǜdēng"],
            display: "红绿灯 (hónglǜdēng)",
          },
          hints: [
            "Literally 'red-green-light'.",
            "Watch the umlaut on lǜ!",
          ],
          solution: ["Traffic lights is **红绿灯 (hónglǜdēng)**."],
        },
        {
          id: "neighbourhood-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "giving-directions",
          question:
            "Translate **cross the road** into Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["过马路", "guò mǎlù"],
            display: "过马路 (guò mǎlù)",
          },
          hints: [
            "过 (cross) + 马路 (road).",
            "Three characters: 4th + 3rd + 4th tone.",
          ],
          solution: ["Cross the road is **过马路 (guò mǎlù)**."],
        },
        {
          id: "neighbourhood-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "giving-directions",
          question:
            "Translate **turn left at the first intersection** into Simplified Chinese (or tone-marked Pinyin) using **在第一个路口** and **往左拐**.",
          answer: {
            type: "text",
            accept: [
              "在第一个路口往左拐",
              "在第一个路口往左转",
              "zài dì-yī gè lùkǒu wǎng zuǒ guǎi",
              "zài dì yī gè lùkǒu wǎng zuǒ guǎi",
            ],
            display: "在第一个路口往左拐 (zài dì-yī gè lùkǒu wǎng zuǒ guǎi)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["往左拐在第一个路口"] },
              feedback: "In Mandarin, Place (在第一个路口) MUST come BEFORE the action (往左拐)!",
            },
          ],
          hints: [
            "P-D-V order: Place first, then Direction + Verb.",
            "Combine 在第一个路口 + 往左拐.",
          ],
          solution: [
            "**在第一个路口往左拐 (zài dì-yī gè lùkǒu wǎng zuǒ guǎi)**.",
          ],
        },
        {
          id: "neighbourhood-p2-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "comparing-neighbourhoods",
          question:
            "Read: **虽然郊区离市中心比较远，但是那里的环境非常安静，很适合孩子长大。** What does the speaker think about the suburbs?",
          options: [
            "They are loud and unsafe for young children.",
            "They are right inside the noisy downtown core.",
            "They are quiet and well-suited for raising children despite being farther out.",
            "They have no parks, trees, or residential houses at all.",
          ],
          answerIndex: 2,
          hints: [
            "Focus on the clause after 但是 (but): 环境非常安静，很适合孩子长大.",
            "适合 (shìhé) = suitable for; 孩子长大 = children growing up.",
          ],
          explanation:
            "Although the suburbs (**郊区**) are farther from downtown (**离市中心比较远**), the speaker notes **环境非常安静，很适合孩子长大** — very quiet and suitable for children growing up.",
        },
        {
          id: "neighbourhood-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-neighbourhoods",
          question:
            "Write the Mandarin word for **convenient** in Simplified Chinese or tone-marked Pinyin.",
          answer: {
            type: "text",
            accept: ["方便", "fāngbiàn"],
            display: "方便 (fāngbiàn)",
          },
          hints: [
            "Two syllables: 1st tone + 4th tone, starting with fāng-.",
            "Example: 坐地铁去市中心非常___。",
          ],
          solution: ["Convenient is **方便 (fāngbiàn)**."],
        },
        {
          id: "neighbourhood-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "comparing-neighbourhoods",
          question:
            "Translate **'even quieter / quieter'** using the 1-character adverb **更** + **安静**.",
          answer: {
            type: "text",
            accept: ["更安静", "gèng ānjìng"],
            display: "更安静 (gèng ānjìng)",
          },
          hints: [
            "Place 更 (gèng) directly before 安静 (ānjìng) — no 很!",
            "Example: 郊区没有市中心热闹，但是___。",
          ],
          solution: ["Even quieter is **更安静 (gèng ānjìng)**."],
        },
        {
          id: "neighbourhood-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "distance-li-transport",
          marks: 3,
          question:
            "A classmate wrote three faulty sentences: (1) 我家跟地铁站很近。 (2) 我每天坐自行车去公园。 (3) 往右拐在第二个路口。 Rewrite all three accurately in Simplified Chinese (with tone-marked Pinyin) and note what you fixed.",
          hints: [
            "Sentence (1): swap 跟 for the distance preposition 离 (lí).",
            "Sentence (2): bicycles take 骑 (qí), never 坐.",
            "Sentence (3): move Place (在第二个路口) in front of 往右拐.",
          ],
          modelAnswer:
            "1) 我家离地铁站很近 (Wǒ jiā lí dìtiězhàn hěn jìn — use 离 for distance). 2) 我每天骑自行车去公园 (Wǒ měitiān qí zìxíngchē qù gōngyuán — use 骑 for bikes). 3) 在第二个路口往右拐 (Zài dì-èr gè lùkǒu wǎng yòu guǎi — put Place before Direction+Verb).",
          markScheme: [
            {
              point: "Fixes (1) to 我家离地铁站很近",
              keywords: ["我家离地铁站很近", "lí dìtiězhàn"],
            },
            {
              point: "Fixes (2) to 骑自行车",
              keywords: ["骑自行车", "qí zìxíngchē"],
            },
            {
              point: "Fixes (3) to 在第二个路口往右拐",
              keywords: ["在第二个路口往右拐", "dì-èr gè lùkǒu wǎng yòu guǎi", "dì èr gè lùkǒu wǎng yòu guǎi"],
            },
          ],
          commonError:
            "Changing 跟 to 到 in (1) instead of 离, or leaving 往右拐 at the front of (3).",
        },
        {
          id: "neighbourhood-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "giving-directions",
          marks: 3,
          question:
            "Write a short 2-turn street dialogue (Visitor + Local) in Simplified Chinese with tone-marked Pinyin: the visitor politely asks how to get to the nearest bank, and the local gives two clear steps plus a final landmark.",
          hints: [
            "Visitor: open with 请问 and end with 怎么走？",
            "Local: use 一直往前走, 过马路 or 在第一个红绿灯往左/右拐.",
            "Pinpoint the bank with 就在你的左边/右边 or 超市对面.",
          ],
          modelAnswer:
            "游客：请问，附近的银行怎么走？(Yóukè: Qǐngwèn, fùjìn de yínháng zěnme zǒu?) 当地人：你先一直往前走，在第一个红绿灯往右拐，银行就在你的左边，超市的对面。(Dāngdìrén: Nǐ xiān yìzhí wǎng qián zǒu, zài dì-yī gè hónglǜdēng wǎng yòu guǎi, yínháng jiù zài nǐ de zuǒbiān, chāoshì de duìmiàn.)",
          markScheme: [
            {
              point: "Polite question using 请问 + 银行 + 怎么走",
              keywords: ["请问", "银行", "怎么走", "qǐngwèn", "yínháng", "zěnme zǒu"],
            },
            {
              point: "At least two clear movement/turn steps in P-D-V order",
              keywords: ["往前走", "往左拐", "往右拐", "过马路", "wǎng qián zǒu", "wǎng yòu guǎi", "wǎng zuǒ guǎi"],
            },
            {
              point: "Final location pinpoint (就在你的左边/右边 or 对面)",
              keywords: ["就在", "左边", "右边", "对面", "jiù zài", "duìmiàn"],
            },
          ],
          commonError:
            "Omitting 请问 or mispronouncing 银行 as yínxíng instead of yínháng.",
        },
        {
          id: "neighbourhood-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "comparing-neighbourhoods",
          marks: 4,
          question:
            "Write an IGCSE-style email paragraph (80–100 characters in Simplified Chinese + tone-marked Pinyin) introducing your Singapore neighbourhood: include local amenities, commute time to school, a comparison with downtown, and your overall opinion.",
          hints: [
            "Start with 我住在新加坡的… and list amenities with 我家附近有….",
            "Include 离学校 + 从我家到学校 + transport + minutes.",
            "Compare your area with 市中心 using 没有 or 比 + 更.",
            "Conclude with 虽然…但是… or 不但…而且… expressing your opinion.",
          ],
          modelAnswer:
            "我住在新加坡西边的一个社区。我家附近有一家超市、一个图书馆和一个地铁站，生活非常方便。我家离学校不远，每天从我家到学校坐公共汽车只要十五分钟。这里虽然没有市中心那么热闹，但是环境更安静，空气也更干净。我不但喜欢这里的绿化，而且觉得邻居们都非常友好。(Wǒ zhù zài Xīnjiāpō xībiān de yí gè shèqū. Wǒ jiā fùjìn yǒu yì jiā chāoshì, yí gè túshūguǎn hé yí gè dìtiězhàn, shēnghuó fēicháng fāngbiàn. Wǒ jiā lí xuéxiào bù yuǎn, měitiān cóng wǒ jiā dào xuéxiào zuò gōnggòng qìchē zhǐ yào shíwǔ fēnzhōng. Zhèlǐ suīrán méiyǒu shìzhōngxīn nàme rènào, dànshì huánjìng gèng ānjìng, kōngqì yě gèng gānjìng. Wǒ búdàn xǐhuan zhèlǐ de lǜhuà, érqiě juéde línjūmen dōu fēicháng yǒuhǎo.)",
          markScheme: [
            {
              point: "Introduces neighbourhood amenities with 附近有",
              keywords: ["附近有", "超市", "图书馆", "地铁站", "公园", "fùjìn yǒu"],
            },
            {
              point: "States distance with 离 and commute with 从…到… + transport",
              keywords: ["离学校", "坐公共汽车", "坐地铁", "走路", "分钟", "lí xuéxiào"],
            },
            {
              point: "Compares area with 市中心 using 没有 or 比 and 更",
              keywords: ["市中心", "没有", "更安静", "比", "shìzhōngxīn", "ānjìng"],
            },
            {
              point: "Gives a justified opinion using paired connectives (虽然…但是 / 不但…而且 / 因为)",
              keywords: ["虽然", "但是", "不但", "而且", "因为", "suīrán", "búdàn"],
            },
          ],
          commonError:
            "Writing disconnected bullet sentences without connectives or omitting Pinyin/tones.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "neighbourhood-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "giving-directions",
      question:
        "You stand at the school gate facing **East (东)**. Follow these directions: **一直往前走到第一个红绿灯，往左拐，再走二百米，在第二个路口往左拐。** Which compass direction are you now facing? Answer in Simplified Chinese or tone-marked Pinyin (e.g. 东边 or 南边).",
      answer: {
        type: "text",
        accept: ["西", "西边", "西面", "xī", "xībiān", "xīmiàn"],
        display: "西边 (xībiān)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["东", "东边", "dōng", "dōngbiān"] },
          feedback: "Two left turns equal a 180° U-turn — from East (东) you end up facing West (西)!",
        },
        {
          spec: { type: "text", accept: ["北", "北边", "běi", "běibiān"] },
          feedback: "North (北) is after the FIRST left turn — remember there is a SECOND 往左拐!",
        },
      ],
      hints: [
        "Start facing East (东).",
        "First 往左拐 (turn left 90° anti-clockwise from East) → facing North (北).",
        "Second 往左拐 (turn left 90° again from North) → facing West (西)!",
      ],
      solution: [
        "East → left turn → North → second left turn → **West (西 / 西边 xībiān)**.",
      ],
    },
    {
      id: "neighbourhood-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "distance-li-transport",
      question:
        "Translate this complete two-part distance + journey sentence into Simplified Chinese (or tone-marked Pinyin): **'The library is not far from my home; walking only takes ten minutes.'** (Use **图书馆**, **离**, **我家**, **不远**, **走路**, **只要**, **十分钟**.)",
      answer: {
        type: "text",
        accept: [
          "图书馆离我家不远走路只要十分钟",
          "图书馆离我家不远，走路只要十分钟",
          "túshūguǎn lí wǒ jiā bù yuǎn, zǒulù zhǐ yào shí fēnzhōng",
          "túshūguǎn lí wǒ jiā bù yuǎn zǒulù zhǐ yào shí fēnzhōng",
        ],
        display: "图书馆离我家不远，走路只要十分钟 (túshūguǎn lí wǒ jiā bù yuǎn, zǒulù zhǐ yào shí fēnzhōng)",
      },
      hints: [
        "Clause 1 uses `A 离 B + 不远` (no 是!): 图书馆离我家不远.",
        "Clause 2 puts transport (走路) before 只要十分钟.",
      ],
      solution: [
        "Clause 1: **图书馆离我家不远**.",
        "Clause 2: **走路只要十分钟**.",
        "Combined: **图书馆离我家不远，走路只要十分钟**.",
      ],
    },
    {
      id: "neighbourhood-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "giving-directions",
      question:
        "Read the street map clues: **超市在银行的北边，邮局在银行的南边，医院在银行的对面（东边）。** If you walk **south (往南走)** from the supermarket (**超市**) past the bank (**银行**), which place do you reach straight ahead?",
      options: [
        "the post office (邮局)",
        "the hospital (医院)",
        "the supermarket (超市)",
        "the shopping mall (购物中心)",
      ],
      answerIndex: 0,
      hints: [
        "Sketch a quick vertical North–South line: 超市 (North) — 银行 (Middle) — 邮局 (South).",
        "Walking south from 超市 past 银行 leads directly to the building south of 银行.",
      ],
      explanation:
        "From north to south the line runs **超市 → 银行 → 邮局**, so walking south from **超市** past **银行** brings you directly to the **post office (邮局 yóujú)**.",
    },
    {
      id: "neighbourhood-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "comparing-neighbourhoods",
      question:
        "Rewrite **市中心比郊区热闹得多** as a negative comparison starting with **郊区** using **没有** (meaning 'The suburbs are not as lively as the city centre').",
      answer: {
        type: "text",
        accept: [
          "郊区没有市中心热闹",
          "郊区没有市中心那么热闹",
          "jiāoqū méiyǒu shìzhōngxīn rènào",
          "jiāoqū méiyǒu shìzhōngxīn nàme rènào",
          "jiāoqū méiyǒu shìzhōngxīn rènao",
          "jiāoqū méiyǒu shìzhōngxīn nàme rènao",
        ],
        display: "郊区没有市中心那么热闹 (jiāoqū méiyǒu shìzhōngxīn nàme rènào)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["郊区比市中心不热闹"] },
          feedback: "Never negate a 比 sentence with 不 + Adj! Use A 没有 B (那么) + Adj.",
        },
      ],
      hints: [
        "Swap A and B so 郊区 comes first.",
        "Follow `郊区 + 没有 + 市中心 + (那么) + 热闹`.",
      ],
      solution: [
        "Use `A 没有 B (那么) + Adj`: **郊区没有市中心那么热闹 (jiāoqū méiyǒu shìzhōngxīn nàme rènào)**.",
      ],
    },
    {
      id: "neighbourhood-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "distance-li-transport",
      question:
        "Three Tanglin students compare commutes:\n- **小明:** 我家离学校一公里，每天走路十二分钟。\n- **丽丽:** 我家离学校八公里，坐地铁只要十五分钟，但是还要从地铁站走路八分钟。\n- **大卫:** 我家离学校五公里，爸爸开车只要十分钟，不堵车的时候最快。\nWho takes the **LONGEST** total time from door to school on a normal, traffic-free morning?",
      options: [
        "小明 (walking the whole route)",
        "丽丽 (MRT plus final walk)",
        "大卫 (car ride without traffic)",
        "小明 and 大卫 take equal time",
      ],
      answerIndex: 1,
      hints: [
        "Add EVERY segment of each student's commute carefully!",
        "Look closely at 丽丽: 15 minutes MRT + 8 minutes walking from the MRT station.",
      ],
      explanation:
        "小明 takes **12 minutes**, 大卫 takes **10 minutes** without traffic, and **丽丽** takes **15 + 8 = 23 minutes** total (坐地铁十五分钟 + 走路八分钟).",
    },
    {
      id: "neighbourhood-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "giving-directions",
      question:
        "Translate **'After crossing the road, turn right at the second traffic lights'** into Simplified Chinese (or tone-marked Pinyin) using **过马路以后**, **在第二个红绿灯**, and **往右拐**.",
      answer: {
        type: "text",
        accept: [
          "过马路以后在第二个红绿灯往右拐",
          "过马路以后，在第二个红绿灯往右拐",
          "过马路以后，在第二个红绿灯往右转",
          "guò mǎlù yǐhòu, zài dì-èr gè hónglǜdēng wǎng yòu guǎi",
          "guò mǎlù yǐhòu zài dì-èr gè hónglǜdēng wǎng yòu guǎi",
        ],
        display: "过马路以后，在第二个红绿灯往右拐 (guò mǎlù yǐhòu, zài dì-èr gè hónglǜdēng wǎng yòu guǎi)",
      },
      hints: [
        "Chronological order first: 过马路以后 (after crossing the road).",
        "Then P-D-V order: Place (在第二个红绿灯) + Direction + Verb (往右拐).",
      ],
      solution: [
        "Combine in chronological + P-D-V order: **过马路以后，在第二个红绿灯往右拐**.",
      ],
    },
    {
      id: "neighbourhood-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "giving-directions",
      marks: 4,
      question:
        "Proofread and rewrite this flawed student text in accurate Simplified Chinese (with tone-marked Pinyin), correcting all four errors: *附近我家有很多商店。学校跟我家很近，我每天坐自行车去学校。从我家出来以后，往左拐在第一个路口。郊区比市中心不热闹，但是很安静。*",
      hints: [
        "Error 1: put 附近 AFTER 我家 (我家附近有…), never before!",
        "Error 2: swap 跟 for 离 (距离), and swap 坐 for 骑 before 自行车.",
        "Error 3: place 在第一个路口 BEFORE 往左拐.",
        "Error 4: swap 比…不热闹 for 没有…热闹.",
      ],
      modelAnswer:
        "我家附近有很多商店。学校离我家很近，我每天骑自行车去学校。从我家出来以后，在第一个路口往左拐。郊区没有市中心热闹，但是很安静。(Wǒ jiā fùjìn yǒu hěn duō shāngdiàn. Xuéxiào lí wǒ jiā hěn jìn, wǒ měitiān qí zìxíngchē qù xuéxiào. Cóng wǒ jiā chūlái yǐhòu, zài dì-yī gè lùkǒu wǎng zuǒ guǎi. Jiāoqū méiyǒu shìzhōngxīn rènào, dànshì hěn ānjìng.)",
      markScheme: [
        {
          point: "Places 附近 after 我家 (我家附近有很多商店)",
          keywords: ["我家附近有很多商店", "wǒ jiā fùjìn yǒu"],
        },
        {
          point: "Fixes distance with 离 and bike verb with 骑自行车",
          keywords: ["学校离我家很近", "骑自行车", "lí wǒ jiā", "qí zìxíngchē"],
        },
        {
          point: "Fixes P-D-V order to 在第一个路口往左拐",
          keywords: ["在第一个路口往左拐", "dì-yī gè lùkǒu wǎng zuǒ guǎi", "dì yī gè lùkǒu wǎng zuǒ guǎi"],
        },
        {
          point: "Fixes negative comparison to 郊区没有市中心热闹",
          keywords: ["郊区没有市中心", "jiāoqū méiyǒu shìzhōngxīn"],
        },
      ],
      commonError:
        "Spotting only 3 of the 4 grammar traps — especially missing either the leading 在 before 有 or the forbidden 比…不热闹.",
    },
    {
      id: "neighbourhood-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "comparing-neighbourhoods",
      marks: 4,
      question:
        "Write an IGCSE 0547 Role-Play / Blog paragraph (90–110 characters in Simplified Chinese + tone-marked Pinyin) inviting an exchange student to visit your area: explain how far you live from the nearest MRT station, give 2 clear walking directions from that station to your home, describe nearby amenities, and justify why you love living there compared with downtown.",
      hints: [
        "Include distance with 离 + 从地铁站到我家走路只要…分钟.",
        "Give clear P-D-V directions: 一直往前走, 在第一个路口往左/右拐, 就在你的左边/右边.",
        "List amenities with 附近有… and compare with 市中心 using 没有 / 比 + 更.",
        "Close with a justified opinion (不但…而且… / 虽然…但是…).",
      ],
      modelAnswer:
        "欢迎来我家玩儿！我家离地铁站非常近，从地铁站到我家走路只要六分钟。你从A出口出来，先一直往前走，过马路以后在第一个红绿灯往左拐，我们公寓就在你的右边，公园的对面。我家附近不但有一家大超市和一家好吃的餐厅，而且还有一个图书馆。这里虽然没有市中心那么热闹，但是环境更安静、空气更新鲜，所以我非常喜欢住在这里！(Huānyíng lái wǒ jiā wánr! Wǒ jiā lí dìtiězhàn fēicháng jìn, cóng dìtiězhàn dào wǒ jiā zǒulù zhǐ yào liù fēnzhōng. Nǐ cóng A chūkǒu chūlái, xiān yìzhí wǎng qián zǒu, guò mǎlù yǐhòu zài dì-yī gè hónglǜdēng wǎng zuǒ guǎi, wǒmen gōngyù jiù zài nǐ de yòubiān, gōngyuán de duìmiàn. Wǒ jiā fùjìn búdàn yǒu yì jiā dà chāoshì hé yì jiā hǎochī de cāntīng, érqiě hái yǒu yí gè túshūguǎn. Zhèlǐ suīrán méiyǒu shìzhōngxīn nàme rènào, dànshì huánjìng gèng ānjìng, kōngqì gèng xīnxiān, suǒyǐ wǒ fēicháng xǐhuan zhù zài zhèlǐ!)",
      markScheme: [
        {
          point: "States distance from MRT with 离 and walking duration with 从…到…",
          keywords: ["离地铁站", "走路", "分钟", "lí dìtiězhàn", "zǒulù"],
        },
        {
          point: "Gives accurate step-by-step directions (往前走, 过马路 / 路口 / 红绿灯, 往左/右拐, 就在)",
          keywords: ["往前走", "往左拐", "往右拐", "就在", "wǎng qián zǒu", "jiù zài"],
        },
        {
          point: "Describes nearby amenities with 附近 + facilities",
          keywords: ["附近", "超市", "餐厅", "图书馆", "公园", "fùjìn"],
        },
        {
          point: "Compares with downtown and justifies preference (市中心, 没有/比, 更, 虽然…但是/不但…而且)",
          keywords: ["市中心", "虽然", "但是", "更安静", "shìzhōngxīn", "suīrán"],
        },
      ],
      commonError:
        "Writing directions in English word order (*往左拐在第一个红绿灯*) or forgetting to compare with 市中心.",
    },
  ],
};
