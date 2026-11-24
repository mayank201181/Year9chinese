import type { TopicPractice } from "../../types";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "chinese-festivals-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "spring-festival",
      question:
        "Write the 2-character Mandarin name for **Spring Festival / Chinese New Year**. (Type Simplified Hanzi or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: ["春节", "Chūnjié", "chūnjié"],
        display: "春节 (Chūnjié)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["中秋节", "Zhōngqiūjié"] },
          feedback: "中秋节 is Mid-Autumn Festival! Spring Festival uses 春 (chūn — spring).",
        },
        {
          spec: { type: "text", accept: ["元宵节", "Yuánxiāojié"] },
          feedback: "元宵节 is Lantern Festival on 正月十五, not Spring Festival itself.",
        },
      ],
      hints: [
        "Start with the character for 'spring' (chūn) followed by 'festival' (jié).",
      ],
      solution: [
        "Spring = 春 (chūn), Festival = 节 (jié).",
        "Together: 春节 (Chūnjié).",
      ],
    },
    {
      id: "chinese-festivals-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "spring-festival",
      question: "Which traditional meal is eaten on Chinese New Year's Eve (`除夕` chúxī)?",
      options: [
        "年夜饭 (niányèfàn)",
        "冰皮月饼 (bīngpí yuèbǐng)",
        "咸蛋粽子 (xiándàn zòngzi)",
        "甜汤圆 (tián tāngyuán)",
      ],
      answerIndex: 0,
      explanation:
        "Families gather on `除夕` to share `年夜饭` (niányèfàn — New Year's Eve reunion dinner). `月饼`, `粽子`, and `汤圆` belong to Mid-Autumn, Dragon Boat, and Lantern Festival.",
      hints: [
        "Break the word into 年 (year) + 夜 (eve/night) + 饭 (meal).",
      ],
    },
    {
      id: "chinese-festivals-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "mid-autumn-festival",
      question:
        "Write the 2-character Mandarin verb–object phrase meaning **'to admire the moon'** at Mid-Autumn Festival. (Type Simplified Hanzi or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: ["赏月", "shǎngyuè", "shǎng yuè"],
        display: "赏月 (shǎngyuè)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["看月亮", "kàn yuèliang", "kàn yuèliàng"] },
          feedback: "看月亮 is understandable, but the exact 2-character idiomatic Mid-Autumn term is 赏月 (shǎngyuè).",
        },
      ],
      hints: [
        "Use the literary verb meaning 'to appreciate' (shǎng) + 月 (yuè).",
      ],
      solution: [
        "赏 (shǎng — appreciate/admire) + 月 (yuè — moon) = 赏月 (shǎngyuè).",
      ],
    },
    {
      id: "chinese-festivals-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "mid-autumn-festival",
      question:
        "Write the lunar date of Mid-Autumn Festival (`中秋节`) in Simplified Hanzi or tone-marked Pinyin (month + day, without `农历`).",
      answer: {
        type: "text",
        accept: ["八月十五", "Bāyuè shíwǔ", "bāyuè shíwǔ", "农历八月十五", "Nónglì Bāyuè shíwǔ"],
        display: "八月十五 (Bāyuè shíwǔ)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["八月初十五", "Bāyuè chūshíwǔ"] },
          feedback: "Remember: 初 (chū) is ONLY used for lunar days 1–10! Drop 初 for day 15: 八月十五.",
        },
        {
          spec: { type: "text", accept: ["正月十五", "Zhēngyuè shíwǔ"] },
          feedback: "正月十五 is Lantern Festival (元宵节), whereas Mid-Autumn is in the 8th lunar month.",
        },
      ],
      hints: [
        "Mid-Autumn falls in the 8th lunar month on the full moon (day 15).",
        "Do NOT insert 初 before 十五 — days above 10 never take 初!",
      ],
      solution: [
        "8th lunar month = 八月 (Bāyuè); 15th day = 十五 (shíwǔ).",
        "Together: 八月十五 (Bāyuè shíwǔ).",
      ],
    },
    {
      id: "chinese-festivals-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "dragon-boat-lantern",
      question: "On `农历五月初五` (`端午节`), which activity commemorates the poet `屈原`?",
      options: [
        "贴春联 (pasting red couplets)",
        "猜灯谜 (guessing lantern riddles)",
        "划龙舟 (rowing dragon boats)",
        "发红包 (handing out red packets)",
      ],
      answerIndex: 2,
      explanation:
        "People `划龙舟` (row dragon boats) on `端午节` (`五月初五`) to commemorate `屈原` (Qū Yuán), recalling villagers rowing out to search for him.",
      hints: [
        "Match 端午节 (Dragon Boat Festival) with its water sport.",
        "Look for 龙舟 (dragon boat) paired with the rowing verb 划 (huá).",
      ],
    },
    {
      id: "chinese-festivals-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "dragon-boat-lantern",
      question:
        "What sweet round glutinous rice balls are eaten at Lantern Festival (`元宵节`) because their name sounds like `团圆`? (Type Simplified Hanzi or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: ["汤圆", "tāngyuán", "元宵", "yuánxiāo"],
        display: "汤圆 (tāngyuán)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["月饼", "yuèbǐng"] },
          feedback: "月饼 (mooncakes) are eaten at Mid-Autumn Festival, not Lantern Festival!",
        },
        {
          spec: { type: "text", accept: ["饺子", "jiǎozi"] },
          feedback: "饺子 (dumplings) are a Spring Festival dish, not sweet round rice balls.",
        },
      ],
      hints: [
        "The first character means 'soup' (tāng) and the second means 'round' (yuán).",
        "Both 汤圆 (southern/Singapore) and 元宵 (northern) are accepted.",
      ],
      solution: [
        "汤圆 (tāngyuán) — sweet glutinous rice balls served in soup on 正月十五 (元宵节).",
      ],
    },
    {
      id: "chinese-festivals-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "spring-festival",
      question:
        "Write the 2-character Chinese noun for the lucky **red packets** given to children at Spring Festival. (Type Simplified Hanzi or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: ["红包", "hóngbāo", "压岁钱", "yāsuìqián"],
        display: "红包 (hóngbāo)",
      },
      hints: [
        "Combine 红 (hóng — red) + 包 (bāo — packet/envelope).",
        "压岁钱 (yāsuìqián — New Year lucky money) is also accepted.",
      ],
      solution: [
        "红 (red) + 包 (packet) = 红包 (hóngbāo).",
      ],
    },
    {
      id: "chinese-festivals-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "festival-comparisons-writing",
      question: "Fill the blank to fix this comparison: `我觉得春节比端午节___热闹。`",
      options: [
        "很 (hěn)",
        "非常 (fēicháng)",
        "真 (zhēn)",
        "更 (gèng)",
      ],
      answerIndex: 3,
      explanation:
        "In a `比` comparison, `很`, `非常`, and `真` cannot be used before the adjective. Use `更` (gèng — even more): `春节比端午节更热闹`.",
      hints: [
        "Three of the adverbs are banned directly after 比.",
        "Pick the adverb meaning 'even more' (gèng).",
      ],
    },
    {
      id: "chinese-festivals-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "festival-comparisons-writing",
      question:
        "Complete the past-experience sentence with ONE aspect particle: `我以前在新加坡看___舞狮表演。` (Type Simplified Hanzi or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: ["过", "guo", "guò"],
        display: "过 (guo)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["了", "le"] },
          feedback: "With 以前 (ever before / previously), use 过 (guo) for past life experience rather than 了.",
        },
      ],
      hints: [
        "Notice the time cue 以前 (yǐqián — previously / ever before).",
        "Which particle placed right after a verb expresses life experience?",
      ],
      solution: [
        "以前 + Verb + 过 expresses life experience ('have watched a lion dance before'): 看过 (kànguo).",
      ],
    },
    {
      id: "chinese-festivals-quiz-q10",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "festival-comparisons-writing",
      question: "Which sentence puts Time, Subject, Place, Verb, and Object in the ONLY natural Mandarin order?",
      options: [
        "我去年中秋节赏月在滨海湾花园了。",
        "去年中秋节，我在滨海湾花园赏月了。",
        "在滨海湾花园，我赏月去年中秋节了。",
        "我赏月在滨海湾花园去年中秋节了。",
      ],
      answerIndex: 1,
      explanation:
        "`去年中秋节，我在滨海湾花园赏月了` obeys STPVO cleanly: Time (`去年中秋节`), Subject (`我`), Place (`在滨海湾花园`), Verb + Object + `了` (`赏月了`).",
      hints: [
        "Apply STPVO: both Time and Place must sit BEFORE the verb 赏月.",
        "Check that 在滨海湾花园 comes right before 赏月.",
      ],
    },
  ],
  papers: [
    {
      id: "chinese-festivals-p1",
      title: "Practice Paper 1 — Lunar Dates, Foods & Customs",
      questions: [
        {
          id: "chinese-festivals-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "spring-festival",
          question:
            "Write the 2-character Chinese word for **Chinese New Year's Eve**. (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["除夕", "chúxī"],
            display: "除夕 (chúxī)",
          },
          hints: ["This is the night families eat 年夜饭 and stay up late (守岁)."],
          solution: ["除夕 (chúxī) means New Year's Eve — literally 'ridding the old year's evening'."],
        },
        {
          id: "chinese-festivals-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "spring-festival",
          question:
            "Fill the missing verb to mean 'to set off fireworks': `___烟花` (Type 1 Simplified character or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["放", "fàng"],
            display: "放 (fàng)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["做", "zuò"] },
              feedback: "做 means 'to make/do'; setting off fireworks always takes the verb 放 (fàng).",
            },
          ],
          hints: ["This verb (fàng) also works with 鞭炮 (firecrackers) and 风筝 (kites)."],
          solution: ["放烟花 (fàng yānhuā) = to set off fireworks."],
        },
        {
          id: "chinese-festivals-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "spring-festival",
          question:
            "Write the 4-character Spring Festival greeting meaning **'Wishing you prosperity!'** (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["恭喜发财", "Gōngxǐ fācái", "gōngxǐ fācái", "gōngxǐfācái"],
            display: "恭喜发财 (Gōngxǐ fācái)",
          },
          hints: ["Starts with 恭喜 (congratulations) and ends with 发财 (become prosperous)."],
          solution: ["恭喜发财 (Gōngxǐ fācái) is one of the most popular Spring Festival greetings."],
        },
        {
          id: "chinese-festivals-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "spring-festival",
          question:
            "In the auspicious Spring Festival blessing `年年有___` ('abundance every year'), what single character sounds identical to `鱼` (fish)? (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["余", "yú"],
            display: "余 (yú)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["鱼"] },
              feedback: "鱼 means 'fish' — the pun works because the blessing itself uses 余 (yú, surplus/abundance)!",
            },
          ],
          hints: [
            "You need the character meaning 'surplus / leftover abundance'.",
            "It shares the exact Pinyin yú (2nd tone) with 鱼.",
          ],
          solution: [
            "鱼 (yú, fish) is a homophone of 余 (yú, surplus), creating 年年有余 (niánnián yǒuyú).",
          ],
        },
        {
          id: "chinese-festivals-p1-q05",
          kind: "short",
          difficulty: "warmup",
          guideRef: "mid-autumn-festival",
          question:
            "Write the 2-character Chinese word for **mooncakes**. (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["月饼", "yuèbǐng"],
            display: "月饼 (yuèbǐng)",
          },
          hints: ["Combine 月 (moon) + 饼 (round cake/pastry)."],
          solution: ["月饼 (yuèbǐng) = mooncake."],
        },
        {
          id: "chinese-festivals-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "mid-autumn-festival",
          question:
            "Fill the exact verb for carrying a lantern by its handle/stick: `___灯笼` (Type 1 Simplified character or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["提", "tí"],
            display: "提 (tí)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["贴", "tiē"] },
              feedback: "贴 (tiē) means 'to paste/stick' (like 贴春联); carrying a lantern takes 提 (tí).",
            },
          ],
          hints: [
            "This verb has the hand radical 扌 and 2nd tone (tí).",
            "Do not confuse it with 贴 (tiē, paste).",
          ],
          solution: ["提灯笼 (tí dēnglóng) = to carry a lantern by its handle/stick."],
        },
        {
          id: "chinese-festivals-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "mid-autumn-festival",
          question:
            "Who is the legendary moon goddess celebrated at Mid-Autumn Festival? (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["嫦娥", "Cháng'é", "cháng'é", "Chángé"],
            display: "嫦娥 (Cháng'é)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["屈原", "Qū Yuán"] },
              feedback: "屈原 is the poet remembered at Dragon Boat Festival, not Mid-Autumn!",
            },
            {
              spec: { type: "text", accept: ["后羿", "Hòu Yì"] },
              feedback: "后羿 is the archer (her husband); the question asks for the moon goddess herself.",
            },
          ],
          hints: [
            "She flew to the moon with the elixir of immortality (___奔月).",
            "Her husband is the archer 后羿 (Hòu Yì).",
          ],
          solution: ["嫦娥 (Cháng'é) — wife of 后羿, remembered in the legend 嫦娥奔月."],
        },
        {
          id: "chinese-festivals-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "dragon-boat-lantern",
          question:
            "Write the lunar date of Dragon Boat Festival (`端午节`) in Simplified Hanzi or tone-marked Pinyin (month + day, without `农历`).",
          answer: {
            type: "text",
            accept: ["五月初五", "Wǔyuè chūwǔ", "wǔyuè chūwǔ", "农历五月初五", "Nónglì Wǔyuè chūwǔ"],
            display: "五月初五 (Wǔyuè chūwǔ)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["五月五", "Wǔyuè wǔ"] },
              feedback: "Remember to include 初 (chū) for lunar days 1–10: 五月初五!",
            },
          ],
          hints: [
            "Dragon Boat Festival is the 'Double Fifth' festival.",
            "Days 1–10 on the lunar calendar require 初 (chū) before the day number.",
          ],
          solution: ["5th lunar month, 5th day = 五月初五 (Wǔyuè chūwǔ)."],
        },
        {
          id: "chinese-festivals-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "dragon-boat-lantern",
          question:
            "Complete the exact phrase for rowing dragon boats with ONE verb: `___龙舟` (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["划", "huá"],
            display: "划 (huá)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["画", "huà"] },
              feedback: "Watch out! 画 (huà) means 'to draw/paint'. Rowing a boat is 划 (huá, 2nd tone, knife radical 刂)!",
            },
          ],
          hints: [
            "It is pronounced huá (2nd tone) and has the blade radical 刂.",
            "Do NOT mix it up with 画 (huà — to draw)!",
          ],
          solution: ["划龙舟 (huá lóngzhōu) = to row dragon boats."],
        },
        {
          id: "chinese-festivals-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "dragon-boat-lantern",
          question:
            "Write the 3-character phrase meaning **'to guess lantern riddles'** at `元宵节`. (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["猜灯谜", "cāi dēngmí", "cāidēngmí"],
            display: "猜灯谜 (cāi dēngmí)",
          },
          hints: [
            "Combine 猜 (cāi — guess) + 灯 (dēng — lantern) + 谜 (mí — riddle).",
            "It is a classic game played while viewing 花灯 on 正月十五.",
          ],
          solution: ["猜灯谜 (cāi dēngmí) = to solve/guess lantern riddles."],
        },
        {
          id: "chinese-festivals-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "festival-comparisons-writing",
          question:
            "Write the 3-character Mandarin name for **Singapore's Chinatown**, famous for Spring Festival and Mid-Autumn decorations. (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["牛车水", "Niúchēshuǐ", "niúchēshuǐ"],
            display: "牛车水 (Niúchēshuǐ)",
          },
          hints: [
            "Literally translates as 'bullock-cart water' (牛 + 车 + 水).",
            "Start with 牛 (niú — ox/cow).",
          ],
          solution: ["牛车水 (Niúchēshuǐ) is the Mandarin name for Singapore's Chinatown."],
        },
        {
          id: "chinese-festivals-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "dragon-boat-lantern",
          question:
            "Write the 2-character verb meaning **'to commemorate / remember'** in `为了___屈原` (in order to commemorate Qu Yuan). (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["纪念", "jìniàn"],
            display: "纪念 (jìniàn)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["象征", "xiàngzhēng"] },
              feedback: "象征 means 'to symbolise' (used for colours/objects); honouring a person uses 纪念 (jìniàn).",
            },
          ],
          hints: [
            "Think of the word meaning 'to commemorate a historical person' (jìniàn).",
            "The second character is 念 (niàn — to think of / miss).",
          ],
          solution: ["纪念 (jìniàn) = to commemorate, as in 为了纪念屈原."],
        },
        {
          id: "chinese-festivals-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "spring-festival",
          marks: 3,
          question:
            "In Mandarin (include Simplified Hanzi + tone-marked Pinyin or English gloss), explain TWO New Year's Eve customs and ONE auspicious homophone linked to food or decoration.",
          hints: [
            "Mention exact verb–object customs like 吃年夜饭, 贴春联, or 守岁.",
            "Explain a pun such as 鱼/余 (年年有余), 年糕/年高, or 福倒/福到.",
          ],
          modelAnswer:
            "除夕晚上，我们全家人一起吃年夜饭、贴春联。(Chúxī wǎnshang, wǒmen quánjiārén yìqǐ chī niányèfàn, tiē chūnlián — On New Year's Eve, my whole family eats the reunion dinner and pastes couplets.) 我们还吃鱼，因为“鱼”和“余”同音，象征年年有余。(Wǒmen hái chī yú, yīnwèi yú hé yú tóngyīn, xiàngzhēng niánnián yǒuyú — We also eat fish because it sounds like surplus, symbolising abundance every year.)",
          markScheme: [
            {
              point: "Names an authentic New Year's Eve custom (e.g. 吃年夜饭 / 守岁 / 大扫除).",
              keywords: ["年夜饭", "niányèfàn", "守岁", "shǒusuì", "大扫除", "reunion dinner"],
            },
            {
              point: "Names a second accurate custom (e.g. 贴春联 / 放烟花 / 吃饺子 / 吃年糕).",
              keywords: ["贴春联", "tiē chūnlián", "春联", "饺子", "年糕", "烟花", "couplets"],
            },
            {
              point: "Explains a valid homophone symbolism (鱼/余 surplus, 倒/到 arrive, or 糕/高 rising higher).",
              keywords: ["年年有余", "余", "surplus", "福到了", "倒", "年年高升", "象征"],
            },
          ],
          commonError:
            "Listing foods without explaining the homophone connection (`鱼` → `余`, `倒` → `到`, `糕` → `高`).",
        },
        {
          id: "chinese-festivals-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "mid-autumn-festival",
          marks: 3,
          question:
            "Write a short 3-part bilingual response introducing Mid-Autumn Festival: give its lunar date, two evening activities, and its core cultural meaning.",
          hints: [
            "State 农历八月十五 (never *八月初十五*).",
            "Include high-band verbs 赏月, 吃月饼, or 提灯笼, plus 团圆 (reunion).",
          ],
          modelAnswer:
            "中秋节在农历八月十五。(Zhōngqiūjié zài Nónglì Bāyuè shíwǔ — It falls on the 15th day of the 8th lunar month.) 那天晚上，我们一家人一起赏月、吃月饼，孩子们还提灯笼。(Nàtiān wǎnshang, wǒmen yìjiārén yìqǐ shǎngyuè, chī yuèbǐng, háizimen hái tí dēnglóng — We admire the moon, eat mooncakes and carry lanterns.) 又大又圆的月亮和月饼象征全家团圆。(Yòu dà yòu yuán de yuèliang hé yuèbǐng xiàngzhēng quánjiā tuányuán — They symbolise whole-family reunion.)",
          markScheme: [
            {
              point: "Gives the accurate lunar date 八月十五 (15th day of 8th lunar month).",
              keywords: ["八月十五", "bāyuè shíwǔ", "15th day of the 8th"],
            },
            {
              point: "Includes authentic Mid-Autumn activities (赏月 / 吃月饼 / 提灯笼).",
              keywords: ["赏月", "shǎngyuè", "月饼", "yuèbǐng", "提灯笼", "dēnglóng"],
            },
            {
              point: "States the cultural symbolism of 团圆 (tuányuán — family reunion).",
              keywords: ["团圆", "tuányuán", "reunion"],
            },
          ],
          commonError:
            "Writing `*八月初十五*` with an extra `初`, or forgetting to link the round moon/mooncake to `团圆`.",
        },
        {
          id: "chinese-festivals-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "dragon-boat-lantern",
          marks: 4,
          question:
            "Contrast **Dragon Boat Festival** and **Lantern Festival** clearly in Mandarin (with tone-marked Pinyin or English): state BOTH lunar dates, BOTH traditional foods, and ONE distinct custom for each.",
          hints: [
            "Dragon Boat: 五月初五, 粽子, 划龙舟 (or 纪念屈原).",
            "Lantern Festival: 正月十五, 汤圆/元宵, 看花灯 / 猜灯谜.",
          ],
          modelAnswer:
            "端午节在农历五月初五，人们划龙舟、吃粽子，为了纪念诗人屈原。(Duānwǔjié zài Nónglì Wǔyuè chūwǔ, rénmen huá lóngzhōu, chī zòngzi, wèile jìniàn shīrén Qū Yuán.) 元宵节在农历正月十五，人们看花灯、猜灯谜，还吃象征团圆的汤圆。(Yuánxiāojié zài Nónglì Zhēngyuè shíwǔ, rénmen kàn huādēng, cāi dēngmí, hái chī xiàngzhēng tuányuán de tāngyuán.)",
          markScheme: [
            {
              point: "Gives Dragon Boat lunar date 五月初五.",
              keywords: ["五月初五", "wǔyuè chūwǔ"],
            },
            {
              point: "Gives Dragon Boat food & custom (粽子 and 划龙舟 / 屈原).",
              keywords: ["粽子", "zòngzi", "划龙舟", "huá lóngzhōu", "屈原"],
            },
            {
              point: "Gives Lantern Festival lunar date 正月十五.",
              keywords: ["正月十五", "zhēngyuè shíwǔ"],
            },
            {
              point: "Gives Lantern Festival food & custom (汤圆/元宵 and 看花灯/猜灯谜).",
              keywords: ["汤圆", "tāngyuán", "元宵", "猜灯谜", "cāi dēngmí", "花灯"],
            },
          ],
          commonError:
            "Swapping `粽子` and `汤圆`, or misspelling `划龙舟` with `画`.",
        },
      ],
    },
    {
      id: "chinese-festivals-p2",
      title: "Practice Paper 2 — Reading, Comparisons & Singapore Writing",
      questions: [
        {
          id: "chinese-festivals-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "spring-festival",
          question:
            "Write the 2-character Chinese word for **sticky New Year rice cake** (which puns with 'rising higher every year'). (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["年糕", "niángāo"],
            display: "年糕 (niángāo)",
          },
          hints: ["年 (year) + 糕 (cake, homophone of 高 high)."],
          solution: ["年糕 (niángāo) puns with 年年高升 (rising higher every year)."],
        },
        {
          id: "chinese-festivals-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "spring-festival",
          question:
            "Write the 4-character phrase for **dragon and lion dance** performed during Spring Festival. (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["舞龙舞狮", "wǔlóng wǔshī", "wǔlóngwǔshī"],
            display: "舞龙舞狮 (wǔlóng wǔshī)",
          },
          hints: ["Repeat the verb 舞 (wǔ — dance) before 龙 (dragon) and 狮 (lion)."],
          solution: ["舞龙舞狮 (wǔlóng wǔshī) = dragon dance and lion dance."],
        },
        {
          id: "chinese-festivals-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "dragon-boat-lantern",
          question:
            "Write the lunar date of **Lantern Festival (`元宵节`)** in Simplified Hanzi or tone-marked Pinyin (month + day, without `农历`).",
          answer: {
            type: "text",
            accept: ["正月十五", "Zhēngyuè shíwǔ", "zhēngyuè shíwǔ", "农历正月十五", "Nónglì Zhēngyuè shíwǔ"],
            display: "正月十五 (Zhēngyuè shíwǔ)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["正月初一", "Zhēngyuè chūyī"] },
              feedback: "正月初一 is Spring Festival Day 1! Lantern Festival is 14 days later on the 15th.",
            },
            {
              spec: { type: "text", accept: ["八月十五", "Bāyuè shíwǔ"] },
              feedback: "八月十五 is Mid-Autumn Festival! Lantern Festival is in the 1st lunar month (正月).",
            },
          ],
          hints: [
            "It falls in the 1st lunar month (正月 Zhēngyuè) on the night of the first full moon.",
            "Remember: day 15 does NOT take 初.",
          ],
          solution: ["正月十五 (Zhēngyuè shíwǔ) — 15th day of the 1st lunar month."],
        },
        {
          id: "chinese-festivals-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "spring-festival",
          question:
            "What 2-character Chinese verb means **'to pay a New Year visit to relatives and friends'**? (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["拜年", "bàinián"],
            display: "拜年 (bàinián)",
          },
          hints: [
            "In Singapore, families bring two mandarin oranges when they go to do this.",
            "Combines 拜 (bài — pay respects) + 年 (nián — New Year).",
          ],
          solution: ["拜年 (bàinián) = to visit relatives/friends and offer New Year greetings."],
        },
        {
          id: "chinese-festivals-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "mid-autumn-festival",
          question:
            "Translate the Singapore Mid-Autumn favourite `冰皮月饼` (bīngpí yuèbǐng) into English.",
          answer: {
            type: "text",
            accept: [
              "snow-skin mooncake",
              "snow-skin mooncakes",
              "snow skin mooncake",
              "snow skin mooncakes",
              "snowskin mooncake",
              "snowskin mooncakes",
            ],
            display: "snow-skin mooncake",
          },
          hints: [
            "冰皮 literally means 'icy skin' — a chilled, non-baked mooncake popular across Singapore!",
            "Two English words + 'mooncake'.",
          ],
          solution: ["冰皮月饼 (bīngpí yuèbǐng) = snow-skin mooncake."],
        },
        {
          id: "chinese-festivals-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "festival-comparisons-writing",
          question:
            "Fix the banned adverb in `*春节比中秋节很热闹*` by typing the single correct character to replace `很`. (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["更", "gèng"],
            display: "更 (gèng)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["很", "hěn"] },
              feedback: "很 cannot follow 比 directly — replace it with 更 (gèng — even more)!",
            },
            {
              spec: { type: "text", accept: ["非常", "fēicháng"] },
              feedback: "非常 is also banned after 比 — use 更 (gèng).",
            },
          ],
          hints: [
            "What 1-character adverb means 'even more' and works smoothly with 比?",
            "Pronounced gèng (4th tone).",
          ],
          solution: ["春节比中秋节更热闹 (Chūnjié bǐ Zhōngqiūjié gèng rènao)."],
        },
        {
          id: "chinese-festivals-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "festival-comparisons-writing",
          question:
            "Complete the simultaneous-action sentence with ONE repeated 2-character connective: `中秋节晚上，我们___赏月，___吃月饼。` (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["一边", "yìbiān", "yībiān"],
            display: "一边 (yìbiān)",
          },
          hints: [
            "Which paired phrase means 'while doing A, also doing B'?",
            "It repeats identically before both verbs: ___ V1，___ V2.",
          ],
          solution: ["一边…一边… (yìbiān… yìbiān…) links two actions happening at the same time."],
        },
        {
          id: "chinese-festivals-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "festival-comparisons-writing",
          question:
            "Read: `去年春节，我和弟弟在牛车水买了两盏红灯笼，每盏十五新币。` How many Singapore dollars did they spend in total? (Type a number.)",
          answer: {
            type: "number",
            value: 30,
            display: "30 新币",
          },
          traps: [
            {
              spec: { type: "number", value: 15 },
              feedback: "15新币 is the price of EACH lantern (每盏十五新币) — they bought TWO (两盏)!",
            },
          ],
          hints: [
            "两盏 means two lanterns; 每盏十五新币 means 15 SGD per lantern.",
            "Multiply 2 × 15.",
          ],
          solution: [
            "两盏 (2 lanterns) × 十五新币 (15 SGD each) = 30 新币.",
          ],
        },
        {
          id: "chinese-festivals-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "festival-comparisons-writing",
          question:
            "Negate the past sentence correctly: `去年端午节，我吃了粽子。` → `去年端午节，我___吃粽子。` (Type the 1- or 2-character negator in Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["没", "没有", "méi", "méiyǒu"],
            display: "没 / 没有 (méi)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["不", "bù"] },
              feedback: "Past actions take 没(有), NOT 不!",
            },
          ],
          hints: [
            "Which negator is required for completed past actions (replacing 了)?",
            "Notice 了 has already been dropped from the sentence!",
          ],
          solution: ["Past actions are negated with 没 or 没有 (and 了 is dropped): 我没吃粽子."],
        },
        {
          id: "chinese-festivals-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "festival-comparisons-writing",
          question:
            "Write the 2-character future-plan verb meaning **'to plan to'** in `明年春节，我___去外婆家拜年。` (Type Simplified Hanzi or tone-marked Pinyin.)",
          answer: {
            type: "text",
            accept: ["打算", "dǎsuàn", "dǎsuan", "准备", "zhǔnbèi"],
            display: "打算 (dǎsuàn)",
          },
          hints: [
            "One of the most useful IGCSE future-frame verbs (dǎsuàn).",
            "准备 (zhǔnbèi) is also accepted.",
          ],
          solution: ["明年春节，我打算去外婆家拜年。(dǎsuàn = to plan to)."],
        },
        {
          id: "chinese-festivals-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "spring-festival",
          question:
            "Read: `新加坡的春节有两天公共假期，很多家庭会在年夜饭时捞鱼生。` How many days of public holiday does Spring Festival have in Singapore? (Type a number.)",
          answer: {
            type: "number",
            value: 2,
            display: "2",
          },
          hints: [
            "Spot the quantity before 公共假期 (public holiday): 两天.",
            "两 = 2.",
          ],
          solution: ["两天公共假期 = 2 days of public holiday."],
        },
        {
          id: "chinese-festivals-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "mid-autumn-festival",
          question:
            "Read: `中秋节那天晚上，月亮又大又圆，像一个金色的盘子挂在天空。` What two adjectives describe the moon inside `又…又…`? (Give the 2-word English meaning, e.g. 'tall and thin'.)",
          answer: {
            type: "text",
            accept: ["big and round", "large and round", "round and big", "round and large"],
            display: "big and round",
          },
          hints: [
            "Translate 又大又圆 (yòu dà yòu yuán) directly.",
            "大 = big/large, 圆 = round.",
          ],
          solution: ["又大又圆 (yòu dà yòu yuán) = big and round."],
        },
        {
          id: "chinese-festivals-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "festival-comparisons-writing",
          marks: 3,
          question:
            "Write a short 3-sentence account of how you celebrated a Chinese festival in Singapore **last year** (include Simplified Hanzi + tone-marked Pinyin or English): state the time, the Singapore venue BEFORE the verb, and two actions using `了`.",
          hints: [
            "Follow STPVO: 去年… + 我和家人 + 在牛车水/在滨海湾花园 + Verb + 了 + Object.",
            "Mention authentic festival activities like 看花灯, 赏月, 吃月饼, or 吃年糕.",
          ],
          modelAnswer:
            "去年春节，我和家人在牛车水看了漂亮的花灯。(Qùnián Chūnjié, wǒ hé jiārén zài Niúchēshuǐ kànle piàoliang de huādēng — Last Spring Festival, my family and I viewed beautiful lanterns in Chinatown.) 我们还在那里买了春联，吃了又香又甜的年糕。(Wǒmen hái zài nàlǐ mǎile chūnlián, chīle yòu xiāng yòu tián de niángāo — We also bought couplets and ate fragrant sweet rice cake.) 虽然人很多，但是我觉得非常开心！(Suīrán rén hěn duō, dànshì wǒ juéde fēicháng kāixīn!)",
          markScheme: [
            {
              point: "Uses a specific past time marker (去年) with accurate past particle 了.",
              keywords: ["去年", "qùnián", "看了", "吃了", "买了", "去了"],
            },
            {
              point: "Places a Singapore venue (e.g. 在牛车水 / 在滨海湾花园 / 在外婆家) BEFORE the verb.",
              keywords: ["在牛车水", "niúchēshuǐ", "在滨海湾", "bīnhǎiwān", "在公园", "在外婆家"],
            },
            {
              point: "Includes two relevant festival activities/foods (e.g. 花灯, 春联, 年糕, 赏月, 月饼, 粽子).",
              keywords: ["花灯", "春联", "年糕", "月饼", "粽子", "赏月", "舞狮", "lanterns"],
            },
          ],
          commonError:
            "Putting `在牛车水` at the end of the sentence (`*看了花灯在牛车水*`) instead of before the verb.",
        },
        {
          id: "chinese-festivals-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "festival-comparisons-writing",
          marks: 3,
          question:
            "Compare TWO Chinese festivals in Mandarin (with tone-marked Pinyin or English): use one `比…更…` sentence, one `没有…那么…` or `虽然…但是…` sentence, and state which you prefer and why.",
          hints: [
            "Never put 很 after 比! Use 更 (gèng) or 得多.",
            "Explain your favourite with 因为… (e.g., 象征团圆 / 可以收红包 / 有意思).",
          ],
          modelAnswer:
            "我觉得春节比中秋节更热闹，因为到处都有舞龙舞狮和红色的花灯。(Wǒ juéde Chūnjié bǐ Zhōngqiūjié gèng rènao, yīnwèi dàochù dōu yǒu wǔlóng wǔshī hé hóngsè de huādēng.) 端午节没有春节那么长，但是划龙舟比赛特别精彩。(Duānwǔjié méiyǒu Chūnjié nàme cháng, dànshì huá lóngzhōu bǐsài tèbié jīngcǎi.) 我最喜欢春节，因为全家人可以一起吃年夜饭，非常温馨。(Wǒ zuì xǐhuan Chūnjié, yīnwèi quánjiārén kěyǐ yìqǐ chī niányèfàn, fēicháng wēnxīn.)",
          markScheme: [
            {
              point: "Accurate 比 comparison using 更 or 得多 without illegal 很.",
              keywords: ["更热闹", "gèng rènao", "更有意思", "更长", "得多", "bǐ"],
            },
            {
              point: "Uses a second comparison or contrast structure (没有…那么… or 虽然…但是…).",
              keywords: ["那么", "nàme", "但是", "dànshì"],
            },
            {
              point: "States personal preference with 最喜欢 and a justified reason using 因为.",
              keywords: ["最喜欢", "zuì xǐhuan", "因为", "yīnwèi"],
            },
          ],
          commonError:
            "Writing `*春节比中秋节很热闹*` or forgetting to justify why they prefer their chosen festival.",
        },
        {
          id: "chinese-festivals-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "festival-comparisons-writing",
          marks: 4,
          question:
            "Your e-pal in Beijing asks how you celebrate your favourite Chinese festival and what you plan to do next year. Write a 4-point bilingual reply covering: (1) favourite festival & its date, (2) past experience with `过`, (3) cultural meaning with `象征`, and (4) next year's plan with `打算`.",
          hints: [
            "Check each of the 4 grammar targets: lunar date, Verb + 过, 象征, and 明年我打算….",
            "Keep Simplified Chinese consistent throughout.",
          ],
          modelAnswer:
            "我最喜欢的中国节日是中秋节，它在农历八月十五。(Wǒ zuì xǐhuan de Zhōngguó jiérì shì Zhōngqiūjié, tā zài Nónglì Bāyuè shíwǔ.) 我以前在新加坡吃过冰皮月饼，也提过漂亮的灯笼。(Wǒ yǐqián zài Xīnjiāpō chīguo bīngpí yuèbǐng, yě tíguo piàoliang de dēnglóng.) 圆圆的月饼和满月象征全家团圆和幸福。(Yuányuán de yuèbǐng hé mǎnyuè xiàngzhēng quánjiā tuányuán hé xìngfú.) 明年八月十五，我打算请好朋友来我家一边赏月，一边喝茶。(Míngnián Bāyuè shíwǔ, wǒ dǎsuàn qǐng hǎo péngyou lái wǒ jiā yìbiān shǎngyuè, yìbiān hē chá.)",
          markScheme: [
            {
              point: "Names a specific festival with its accurate lunar date (正月初一 / 正月十五 / 五月初五 / 八月十五).",
              keywords: ["八月十五", "正月初一", "五月初五", "正月十五", "bāyuè shíwǔ", "zhēngyuè chūyī"],
            },
            {
              point: "Uses experiential Verb + 过 accurately (e.g. 吃过, 看过, 提过, 去过).",
              keywords: ["吃过", "看过", "提过", "去过", "chīguo", "kànguo", "qùguo"],
            },
            {
              point: "Explains cultural meaning with 象征 (e.g. 团圆, 好运, 幸福).",
              keywords: ["团圆", "好运", "幸福", "tuányuán", "hǎoyùn"],
            },
            {
              point: "States a clear future plan for next year (明年 + activity).",
              keywords: ["明年", "míngnián", "赏月", "包饺子", "拜年", "牛车水"],
            },
          ],
          commonError:
            "Missing one of the four bullet requirements or mixing up `过` (past experience) with `打算` (future plan).",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "chinese-festivals-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "spring-festival",
      question:
        "Read: `除夕之前我们要大扫除，把旧的灰尘扫出去；可是正月初一那天不能扫地，怕把好运扫走。` Why shouldn't you sweep the floor on Day 1?",
      options: [
        "Because shops selling brooms are closed on Day 1",
        "Because sweeping on Day 1 might sweep away good luck",
        "Because sweeping wakes up the legendary monster 年",
        "Because guests arrive early to inspect the red couplets",
      ],
      answerIndex: 1,
      explanation:
        "`怕把好运扫走` means 'afraid of sweeping away good luck (`好运`)'. That is why families finish `大扫除` (thorough cleaning) before `除夕` (`除夕之前`).",
      hints: [
        "Read the final clause carefully: 怕把好运扫走 (pà bǎ hǎoyùn sǎozǒu).",
        "把 + 好运 + 扫走 literally means 'sweep good luck away'.",
      ],
    },
    {
      id: "chinese-festivals-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "dragon-boat-lantern",
      question:
        "Unscramble these chunks into a natural Mandarin sentence (no spaces needed): `在滨海湾` / `去年端午节` / `看了龙舟比赛` / `我和同学`. (Type Simplified Hanzi or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: [
          "去年端午节我和同学在滨海湾看了龙舟比赛",
          "去年端午节，我和同学在滨海湾看了龙舟比赛",
          "去年端午节，我和同学在滨海湾看了龙舟比赛。",
          "我和同学去年端午节在滨海湾看了龙舟比赛",
          "我和同学去年端午节在滨海湾看了龙舟比赛。",
          "Qùnián Duānwǔjié, wǒ hé tóngxué zài Bīnhǎiwān kànle lóngzhōu bǐsài",
          "Qùnián Duānwǔjié wǒ hé tóngxué zài Bīnhǎiwān kànle lóngzhōu bǐsài",
          "Wǒ hé tóngxué qùnián Duānwǔjié zài Bīnhǎiwān kànle lóngzhōu bǐsài",
        ],
        display: "去年端午节，我和同学在滨海湾看了龙舟比赛。",
      },
      hints: [
        "Follow STPVO (or TSPVO): Time (`去年端午节`) + Subject (`我和同学`) + Place (`在滨海湾`) + Verb+Object (`看了龙舟比赛`).",
        "Remember: `在滨海湾` MUST come right before `看了龙舟比赛`.",
      ],
      solution: [
        "Time: 去年端午节 (Qùnián Duānwǔjié)",
        "Subject: 我和同学 (wǒ hé tóngxué)",
        "Place: 在滨海湾 (zài Bīnhǎiwān)",
        "Verb + 了 + Object: 看了龙舟比赛 (kànle lóngzhōu bǐsài)",
        "Full sentence: 去年端午节，我和同学在滨海湾看了龙舟比赛。",
      ],
    },
    {
      id: "chinese-festivals-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "mid-autumn-festival",
      question:
        "Read: `虽然在新加坡看不到秋天的落叶，但是每年八月十五，牛车水和滨海湾花园都会挂满五颜六色的花灯，节日气氛非常浓厚。` What is the writer's main point?",
      options: [
        "Singapore does not celebrate Mid-Autumn because there is no autumn",
        "Despite having no autumn leaves, Singapore's Mid-Autumn spirit is rich",
        "Gardens by the Bay only displays lanterns during Dragon Boat Festival",
        "Chinatown closes its lantern displays before the 15th lunar evening",
      ],
      answerIndex: 1,
      explanation:
        "Using `虽然…但是…`, the writer contrasts Singapore's tropical climate (no autumn leaves `看不到秋天的落叶`) with its rich festive atmosphere (`节日气氛非常浓厚`) created by colourful lanterns (`五颜六色的花灯`) in Chinatown and Gardens by the Bay.",
      hints: [
        "Look at the clause after 但是 (dànshì) — that carries the writer's main message.",
        "节日气氛非常浓厚 means 'the festive atmosphere is very rich/strong'.",
      ],
    },
    {
      id: "chinese-festivals-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "spring-festival",
      question:
        "Spot the ONE wrong character in this sentence and type ONLY the correct replacement character: `端午节那天，我和哥哥一起画龙舟，虽然很累，但是特别开心。` (Type Simplified Hanzi or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: ["划", "huá"],
        display: "划 (huá)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["画", "huà"] },
          feedback: "画 (huà) is the mistake itself ('drawing' a dragon boat)! Type the correct rowing character.",
        },
      ],
      hints: [
        "Look closely at the verb before 龙舟 — did they draw the boat or row it?",
        "Replace 画 (huà) with the 2nd-tone character meaning 'to row/paddle'.",
      ],
      solution: [
        "画 (huà, draw) should be 划 (huá, row/paddle): 划龙舟.",
      ],
    },
    {
      id: "chinese-festivals-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "dragon-boat-lantern",
      question:
        "Read this lantern riddle (`灯谜`): `有时落在山腰，有时挂在树梢；有时像面圆镜，有时像把镰刀。` (Sometimes round like a mirror, sometimes curved like a sickle.) What is the answer?",
      options: [
        "粽子 (zòngzi — rice dumpling)",
        "春联 (chūnlián — couplet)",
        "月亮 (yuèliang — the moon)",
        "鞭炮 (biānpào — firecracker)",
      ],
      answerIndex: 2,
      explanation:
        "The classic Chinese lantern riddle describes `月亮` (yuèliang — the moon), which looks like a round mirror (`圆镜`) when full and like a curved sickle (`镰刀`) when a crescent!",
      hints: [
        "Look at the two shapes: 圆镜 (round mirror) and 镰刀 (curved sickle).",
        "Which celestial object changes from a full circle to a crescent each lunar month?",
      ],
    },
    {
      id: "chinese-festivals-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "festival-comparisons-writing",
      question:
        "Translate accurately into Simplified Chinese: **'I have never eaten traditional mooncakes.'** (Use the past-experience negation pattern + 'traditional mooncakes'. Type Simplified Hanzi or tone-marked Pinyin.)",
      answer: {
        type: "text",
        accept: [
          "我从来没吃过传统月饼",
          "我从来没吃过传统月饼。",
          "我从来没有吃过传统月饼",
          "我从来没有吃过传统月饼。",
          "我从来没吃过传统的月饼",
          "我从来没吃过传统的月饼。",
          "我从来没有吃过传统的月饼",
          "我从来没有吃过传统的月饼。",
          "Wǒ cónglái méi chīguo chuántǒng yuèbǐng",
          "Wǒ cónglái méiyǒu chīguo chuántǒng yuèbǐng",
          "Wǒ cónglái méi chīguo chuántǒng de yuèbǐng",
        ],
        display: "我从来没吃过传统月饼。",
      },
      traps: [
        {
          spec: { type: "text", accept: ["我从来不吃过传统月饼", "我从来没吃了传统月饼"] },
          feedback: "Experiential negation ALWAYS keeps 没(有) + Verb + 过 (never *不…过* or *没…了*)!",
        },
      ],
      hints: [
        "Structure: Subject + 从来没(有) + Verb + 过 + Object.",
        "Unlike 了, the particle 过 STAYS in negative sentences!",
      ],
      solution: [
        "Never have done = 从来没(有) + Verb + 过.",
        "我从来没吃过传统月饼。(Wǒ cónglái méi chīguo chuántǒng yuèbǐng.)",
      ],
    },
    {
      id: "chinese-festivals-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "festival-comparisons-writing",
      marks: 5,
      question:
        "IGCSE 0547 Style Extended Writing (80–100 characters, include tone-marked Pinyin or English gloss): Write a blog post titled *My Favourite Chinese Festival in Singapore*. Cover: (1) which festival & its lunar date, (2) what you did last year using STPVO + `了`, (3) a comparison with another festival, (4) cultural symbolism, and (5) your plan for next year.",
      hints: [
        "Tick off all five bullets one by one before finishing.",
        "Use at least one paired connective (虽然…但是… / 不但…而且… / 因为…所以…).",
        "Check every character is Simplified Chinese and drop 很 after 比.",
      ],
      modelAnswer:
        "我最喜欢的中国节日是春节，它在农历正月初一。(Wǒ zuì xǐhuan de Zhōngguó jiérì shì Chūnjié, tā zài Nónglì Zhēngyuè chūyī.) 去年除夕，我和家人在外婆家吃了丰盛的年夜饭，还一起去牛车水看了花灯。(Qùnián chúxī, wǒ hé jiārén zài wàipó jiā chīle fēngshèng de niányèfàn, hái yìqǐ qù Niúchēshuǐ kànle huādēng.) 我觉得春节比端午节更热闹，而且春节的红色和鱼象征好运和年年有余。(Wǒ juéde Chūnjié bǐ Duānwǔjié gèng rènao, érqiě Chūnjié de hóngsè hé yú xiàngzhēng hǎoyùn hé niánnián yǒuyú.) 虽然准备节日有点儿累，但是全家人团聚非常幸福。(Suīrán zhǔnbèi jiérì yǒudiǎnr lèi, dànshì quánjiārén tuánjù fēicháng xìngfú.) 明年春节，我打算帮妈妈贴春联，还要学包饺子！(Míngnián Chūnjié, wǒ dǎsuàn bāng māma tiē chūnlián, hái yào xué bāo jiǎozi!)",
      markScheme: [
        {
          point: "Identifies a Chinese festival and its accurate lunar date (正月初一 / 正月十五 / 五月初五 / 八月十五).",
          keywords: ["正月初一", "八月十五", "五月初五", "正月十五", "zhēngyuè chūyī", "bāyuè shíwǔ"],
        },
        {
          point: "Narrates a specific past celebration accurately with 去年 + place before verb + 了.",
          keywords: ["去年", "qùnián", "吃了", "看了", "去了", "提了"],
        },
        {
          point: "Compares two festivals accurately (比…更… / 得多 / 没有…那么…).",
          keywords: ["比", "更热闹", "更有意思", "那么", "gèng"],
        },
        {
          point: "Explains genuine cultural symbolism (象征 + 好运 / 年年有余 / 团圆 / 纪念屈原).",
          keywords: ["象征", "xiàngzhēng", "好运", "年年有余", "团圆", "纪念屈原"],
        },
        {
          point: "States a clear future plan using 明年 + 打算 / 想 / 要.",
          keywords: ["明年", "míngnián", "打算", "dǎsuàn", "贴春联", "包饺子", "赏月"],
        },
      ],
      commonError:
        "Forgetting one of the 3 time frames (usually the future plan `明年打算…`) or writing `*比…很…*`.",
    },
    {
      id: "chinese-festivals-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "dragon-boat-lantern",
      marks: 4,
      question:
        "A younger Year 7 student confuses **Mid-Autumn**, **Dragon Boat**, and **Lantern Festival** because all three have special rice or moon-shaped foods and rich legends. Write a clear bilingual mini-guide (Simplified Hanzi + tone-marked Pinyin/English) distinguishing the THREE foods, the TWO legends (`嫦娥` & `屈原`), and why TWO of the three share day 15 (`十五`).",
      hints: [
        "Link 月饼 (中秋节), 粽子 (端午节), and 汤圆/元宵 (元宵节).",
        "Pair 嫦娥 with 中秋节 and 屈原 with 端午节.",
        "Explain that day 15 (正月十五 & 八月十五) is the full moon (满月), symbolising 团圆!",
      ],
      modelAnswer:
        "中秋节吃月饼，纪念或讲述嫦娥奔月的传说；端午节吃粽子，为了纪念爱国诗人屈原；元宵节吃汤圆，庆祝新年第一个满月。(Zhōngqiūjié chī yuèbǐng, jiǎngshù Cháng'é bēn yuè de chuánshuō; Duānwǔjié chī zòngzi, wèile jìniàn àiguó shīrén Qū Yuán; Yuánxiāojié chī tāngyuán, qìngzhù xīnnián dì yī gè mǎnyuè.) 元宵节在正月十五，中秋节在八月十五，因为农历十五的月亮又大又圆，所以这两个节日都象征全家团圆！(Yuánxiāojié zài Zhēngyuè shíwǔ, Zhōngqiūjié zài Bāyuè shíwǔ, yīnwèi Nónglì shíwǔ de yuèliang yòu dà yòu yuán, suǒyǐ zhè liǎng gè jiérì dōu xiàngzhēng quánjiā tuányuán!)",
      markScheme: [
        {
          point: "Matches all three festival foods cleanly (月饼, 粽子, 汤圆/元宵).",
          keywords: ["月饼", "yuèbǐng", "粽子", "zòngzi", "汤圆", "tāngyuán"],
        },
        {
          point: "Links 中秋节 to 嫦娥奔月 (moon legend) and 端午节 to 纪念屈原 (patriotic poet).",
          keywords: ["奔月", "诗人", "纪念", "jìniàn", "shīrén", "legend"],
        },
        {
          point: "Identifies BOTH lunar 15th dates: 正月十五 and 八月十五.",
          keywords: ["正月十五", "八月十五", "zhēngyuè shíwǔ", "bāyuè shíwǔ"],
        },
        {
          point: "Explains that lunar day 15 is the full/round moon (满月 / 又大又圆), symbolising 团圆 (reunion).",
          keywords: ["满月", "又大又圆", "团圆", "tuányuán", "full moon"],
        },
      ],
      commonError:
        "Confusing which legend goes with which festival, or omitting the link between day 15's full round moon and `团圆`.",
    },
  ],
};
