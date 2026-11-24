import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  {
    id: "chinese-festivals-m1",
    title: "MCQ Paper 1 — Spring Festival & Mid-Autumn Core",
    questions: [
      {
        id: "chinese-festivals-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "spring-festival",
        question: "On which lunar calendar date does Spring Festival (`春节` Chūnjié) begin?",
        options: [
          "农历正月初一 (Nónglì Zhēngyuè chūyī)",
          "农历正月十五 (Nónglì Zhēngyuè shíwǔ)",
          "农历五月初五 (Nónglì Wǔyuè chūwǔ)",
          "农历八月十五 (Nónglì Bāyuè shíwǔ)",
        ],
        answerIndex: 0,
        explanation:
          "`春节` begins on `农历正月初一` (the 1st day of the 1st lunar month). `正月十五` is Lantern Festival, `五月初五` is Dragon Boat Festival, and `八月十五` is Mid-Autumn Festival.",
        hints: [
          "Spring Festival marks the very first day of the lunar new year.",
          "The first lunar month is specially named 正月 (Zhēngyuè) and day 1 takes 初 (chū).",
        ],
      },
      {
        id: "chinese-festivals-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "spring-festival",
        question: "What does `除夕` (chúxī) mean in English?",
        options: [
          "Lantern Festival evening",
          "Chinese New Year's Eve",
          "Mid-Autumn full moon night",
          "Dragon Boat Festival morning",
        ],
        answerIndex: 1,
        explanation:
          "`除夕` (chúxī) is Chinese New Year's Eve — the night before `正月初一` when families gather to eat `年夜饭` (niányèfàn).",
        hints: [
          "This evening comes immediately before 农历正月初一.",
          "Families stay up late (守岁 shǒusuì) and share 年夜饭 on this night.",
        ],
      },
      {
        id: "chinese-festivals-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "spring-festival",
        question: "Choose the exact verb–object phrase for 'to paste Spring Festival couplets'.",
        options: [
          "放春联 (fàng chūnlián)",
          "划春联 (huá chūnlián)",
          "贴春联 (tiē chūnlián)",
          "猜春联 (cāi chūnlián)",
        ],
        answerIndex: 2,
        explanation:
          "`贴春联` (tiē chūnlián) uses `贴` (to paste/stick). `放` is for fireworks (`放烟花`), `划` is for rowing boats (`划龙舟`), and `猜` is for guessing riddles (`猜灯谜`).",
        hints: [
          "Spring Festival couplets are stuck onto the sides of doorways.",
          "Look for the Mandarin verb meaning 'to stick or paste' (tiē).",
        ],
      },
      {
        id: "chinese-festivals-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "spring-festival",
        question: "Why do many Chinese families leave a little fish (`鱼` yú) uneaten at `年夜饭`?",
        options: [
          "Fish symbolises longevity and strong health",
          "Fish is too salty to finish in one meal",
          "Fish reminds people of the poet 屈原 (Qū Yuán)",
          "Fish sounds like 余 (yú), meaning surplus",
        ],
        answerIndex: 3,
        explanation:
          "`鱼` (yú, fish) is a homophone of `余` (yú, surplus), giving the auspicious blessing `年年有余` (niánnián yǒuyú — abundance every year). `屈原` belongs to Dragon Boat Festival.",
        hints: [
          "Think about Mandarin homophones (谐音 xiéyīn).",
          "Recall the 4-character New Year blessing 年年有余 (niánnián yǒuyú).",
        ],
      },
      {
        id: "chinese-festivals-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "spring-festival",
        question: "Which sentence correctly describes how red packets (`红包`) are exchanged at `春节`?",
        options: [
          "爷爷奶奶给孩子们发红包。(Elders give children red packets.)",
          "小学生给爷爷奶奶发红包。(Pupils give elders red packets.)",
          "大家在端午节互相发红包。(Everyone gives red packets at Dragon Boat.)",
          "人们把红包贴在大门两边。(People paste red packets on doors.)",
        ],
        answerIndex: 0,
        explanation:
          "At `春节`, elders and married adults give `红包` (or `压岁钱`) to children: `爷爷奶奶给孩子们发红包`. Doorways are decorated with `春联`, not `红包`.",
        hints: [
          "Who traditionally gives 红包 (hóngbāo / 压岁钱) to whom?",
          "Check both the giver/receiver relationship and the correct festival.",
        ],
      },
      {
        id: "chinese-festivals-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "spring-festival",
        question: "What does the popular Chinese New Year greeting `恭喜发财` (Gōngxǐ fācái) wish someone?",
        options: [
          "Good luck in school exams",
          "A safe and pleasant journey",
          "Wishing you wealth and prosperity",
          "A peaceful Mid-Autumn reunion",
        ],
        answerIndex: 2,
        explanation:
          "`恭喜发财` (Gōngxǐ fācái) literally means 'congratulations and wishing you wealth and prosperity'. It is one of the most common `春节` greetings in Singapore and China.",
        hints: [
          "恭喜 means congratulations; 发财 relates to prosperity/fortune.",
          "People often say it right after 新年快乐 when visiting relatives.",
        ],
      },
      {
        id: "chinese-festivals-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "spring-festival",
        question: "Why is hanging the character `福` (fú) upside down (`倒` dào) considered auspicious?",
        options: [
          "Because 倒 (dào) sounds like 跑 (pǎo), chasing winter away",
          "Because 倒 (dào) sounds like 到 (dào), meaning luck arrives",
          "Because 倒 (dào) sounds like 高 (gāo), meaning rising higher",
          "Because 倒 (dào) sounds like 圆 (yuán), meaning family unity",
        ],
        answerIndex: 1,
        explanation:
          "`福倒了` (fú dào le — good fortune is upside down) sounds identical to `福到了` (fú dào le — good fortune has arrived!), because `倒` and `到` share the exact pronunciation `dào`.",
        hints: [
          "Check the Pinyin and tone of 倒 (dào, upside down).",
          "Which common verb also has the exact pronunciation dào?",
        ],
      },
      {
        id: "chinese-festivals-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "spring-festival",
        question: "Which traditional Spring Festival food puns with 'rising higher every year' (`年年高升`)?",
        options: [
          "月饼 (yuèbǐng)",
          "粽子 (zòngzi)",
          "汤圆 (tāngyuán)",
          "年糕 (niángāo)",
        ],
        answerIndex: 3,
        explanation:
          "`年糕` (niángāo — sticky rice cake) contains `糕` (gāo), a homophone of `高` (gāo — high/tall), symbolising `年年高升` (improving every year). `月饼`, `粽子` and `汤圆` belong to other festivals.",
        hints: [
          "Look for the food whose second syllable sounds like 高 (gāo, high).",
          "Eliminate foods eaten at Mid-Autumn, Dragon Boat, and Lantern Festival.",
        ],
      },
      {
        id: "chinese-festivals-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "mid-autumn-festival",
        question: "Which lunar calendar date is correctly written for Mid-Autumn Festival (`中秋节`)?",
        options: [
          "农历八月初十五 (Bāyuè chūshíwǔ)",
          "农历八月初五 (Bāyuè chūwǔ)",
          "农历八月十五 (Bāyuè shíwǔ)",
          "农历正月十五 (Zhēngyuè shíwǔ)",
        ],
        answerIndex: 2,
        explanation:
          "`中秋节` is on `农历八月十五` (the 15th day of the 8th lunar month). Never put `初` before days 11–30 (`*八月初十五*` is wrong), and `正月十五` is Lantern Festival.",
        hints: [
          "Mid-Autumn falls in the 8th lunar month on the night of the full moon (day 15).",
          "Remember the rule for 初 (chū): only days 1–10 use 初!",
        ],
      },
      {
        id: "chinese-festivals-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "mid-autumn-festival",
        question: "What does the high-band Mid-Autumn verb `赏月` (shǎngyuè) mean?",
        options: [
          "To admire the full moon",
          "To bake sweet mooncakes",
          "To light paper lanterns",
          "To tell the Chang'e story",
        ],
        answerIndex: 0,
        explanation:
          "`赏月` (shǎngyuè) means 'to admire / appreciate the full moon', combining `赏` (appreciate) and `月` (moon). It is much more idiomatic than `看月亮`.",
        hints: [
          "Notice the character 月 (yuè — moon) inside 赏月.",
          "赏 (shǎng) means to appreciate or admire scenery.",
        ],
      },
      {
        id: "chinese-festivals-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mid-autumn-festival",
        question: "Choose the most accurate verb–object phrase for children walking in a park carrying lanterns.",
        options: [
          "放灯笼 (fàng dēnglóng)",
          "贴灯笼 (tiē dēnglóng)",
          "划灯笼 (huá dēnglóng)",
          "提灯笼 (tí dēnglóng)",
        ],
        answerIndex: 3,
        explanation:
          "`提灯笼` (tí dēnglóng) uses `提` (to carry something hanging from your hand/stick). `放` is for fireworks, `贴` is for couplets, and `划` is for dragon boats.",
        hints: [
          "Think about how a child holds a lantern by its stick or handle.",
          "The verb 提 (tí) has the hand radical 扌 and means 'to carry by a handle'.",
        ],
      },
      {
        id: "chinese-festivals-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mid-autumn-festival",
        question: "In the Mid-Autumn legend, who is `嫦娥` (Cháng'é)?",
        options: [
          "The patriotic poet remembered by dragon boat races",
          "The woman who flew to the moon after drinking an elixir",
          "The fierce monster frightened away by red couplets",
          "The scholar who invented the first lantern riddles",
        ],
        answerIndex: 1,
        explanation:
          "`嫦娥` (Cháng'é), wife of the archer `后羿` (Hòu Yì), drank the elixir of immortality to keep it safe and floated up to the moon, inspiring the legend `嫦娥奔月`. `屈原` is the poet of Dragon Boat Festival.",
        hints: [
          "Recall the four-character title 嫦娥奔月 (Cháng'é bēn yuè).",
          "Who lives on the moon with the Jade Rabbit (玉兔 Yùtù)?",
        ],
      },
      {
        id: "chinese-festivals-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mid-autumn-festival",
        question: "Why do both the full moon and round mooncakes (`月饼`) symbolise `团圆` (tuányuán)?",
        options: [
          "Their round shape (圆 yuán) stands for a whole, united family",
          "Their golden colour stands for wealth and good exam grades",
          "Their sweet taste stands for defeating the monster 年 (Nián)",
          "Their small size stands for travelling safely across rivers",
        ],
        answerIndex: 0,
        explanation:
          "The character `圆` (yuán, round/complete) appears inside `团圆` (tuányuán, family reunion), so the round moon (`又大又圆`) and round `月饼` symbolise a whole, united family.",
        hints: [
          "Look at the second character of 团圆 (tuányuán).",
          "What physical shape do the Mid-Autumn moon and traditional mooncakes share?",
        ],
      },
      {
        id: "chinese-festivals-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "spring-festival",
        question: "Read the sentence: `虽然除夕晚上很晚了，但是我们一家人还是守岁到十二点。` What did the family do?",
        options: [
          "They swept the house carefully before midnight",
          "They went to sleep early because they were tired",
          "They stayed awake until midnight to welcome the New Year",
          "They walked to Chinatown to solve lantern riddles",
        ],
        answerIndex: 2,
        explanation:
          "`守岁` (shǒusuì) means staying up late on `除夕` (New Year's Eve) to see out the old year and welcome the new one at midnight (`到十二点`).",
        hints: [
          "Look at the concession structure 虽然…但是… ('Although it was very late, our family still…').",
          "守 (shǒu) means to keep watch and 岁 (suì) means year — staying up until 12 o'clock.",
        ],
      },
      {
        id: "chinese-festivals-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "mid-autumn-festival",
        question: "Which sentence best describes a Mid-Autumn evening in natural, high-band Mandarin?",
        options: [
          "八月十五晚上，我们一家人划龙舟，还吃了饺子。",
          "正月初一晚上，我们全家人赏月，还吃了月饼。",
          "八月十五晚上，月亮又大又圆，我们一边吃粽子一边看烟花。",
          "八月十五晚上，月亮又大又圆，我们一边赏月一边吃月饼。",
        ],
        answerIndex: 3,
        explanation:
          "Only `八月十五晚上，月亮又大又圆，我们一边赏月一边吃月饼` matches the Mid-Autumn date (`八月十五`), description (`又大又圆`), and authentic customs (`赏月` and `吃月饼`).",
        hints: [
          "Check all three details: lunar date, moon description, and festival customs/food.",
          "Eliminate any option mentioning 正月初一, 划龙舟, 饺子, or 粽子.",
        ],
      },
    ],
  },
  {
    id: "chinese-festivals-m2",
    title: "MCQ Paper 2 — Dragon Boat, Lantern Festival & Singapore",
    questions: [
      {
        id: "chinese-festivals-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "dragon-boat-lantern",
        question: "When is Dragon Boat Festival (`端午节` Duānwǔjié) celebrated on the lunar calendar?",
        options: [
          "农历正月初一 (1st month, 1st day)",
          "农历五月初五 (5th month, 5th day)",
          "农历正月十五 (1st month, 15th day)",
          "农历八月十五 (8th month, 15th day)",
        ],
        answerIndex: 1,
        explanation:
          "`端午节` falls on `农历五月初五` (the 5th day of the 5th lunar month) — easy to remember as 'double five'.",
        hints: [
          "Dragon Boat Festival is also known as the 'Double Fifth' festival.",
          "Because day 5 is between 1 and 10, it takes 初: 初五.",
        ],
      },
      {
        id: "chinese-festivals-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "dragon-boat-lantern",
        question: "Which two customs belong specifically to Dragon Boat Festival (`端午节`)?",
        options: [
          "贴春联和发红包 (couplets & red packets)",
          "赏月和吃月饼 (moon viewing & mooncakes)",
          "猜灯谜和吃汤圆 (riddles & rice balls)",
          "划龙舟和吃粽子 (dragon boats & zongzi)",
        ],
        answerIndex: 3,
        explanation:
          "At `端午节`, people `划龙舟` (row dragon boats) and `吃粽子` (eat bamboo-leaf sticky rice dumplings). The other three pairs belong to `春节`, `中秋节`, and `元宵节`.",
        hints: [
          "Look for the characters 龙舟 (dragon boat) and 粽子 (sticky rice dumplings).",
          "Eliminate customs tied to New Year, Mid-Autumn, or Lantern Festival.",
        ],
      },
      {
        id: "chinese-festivals-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "dragon-boat-lantern",
        question: "Which character is the CORRECT verb meaning 'to row / paddle' in `___龙舟`?",
        options: [
          "划 (huá)",
          "画 (huà)",
          "花 (huā)",
          "话 (huà)",
        ],
        answerIndex: 0,
        explanation:
          "`划龙舟` (huá lóngzhōu) uses `划` (huá, rising 2nd tone, with radical `刂` like an oar slicing water). `画` means 'to draw', `花` means 'flower/spend', and `话` means 'speech'.",
        hints: [
          "Be careful not to confuse huá (row) with huà (draw a picture)!",
          "Picture the right-hand blade radical 刂 as a paddle cutting through water.",
        ],
      },
      {
        id: "chinese-festivals-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "dragon-boat-lantern",
        question: "Whom do Chinese people commemorate (`纪念` jìniàn) on Dragon Boat Festival?",
        options: [
          "The legendary archer 后羿 (Hòu Yì)",
          "The Moon Goddess 嫦娥 (Cháng'é)",
          "The patriotic poet 屈原 (Qū Yuán)",
          "The New Year monster 年 (Nián)",
        ],
        answerIndex: 2,
        explanation:
          "`端午节` commemorates the ancient patriotic poet `屈原` (Qū Yuán): villagers rowed boats (`划龙舟`) to look for him and tossed rice dumplings (`粽子`) into the river to protect his body from fish.",
        hints: [
          "This historical figure from the Warring States period wrote famous poetry.",
          "后羿 and 嫦娥 belong to Mid-Autumn; 年 belongs to Spring Festival.",
        ],
      },
      {
        id: "chinese-festivals-m2-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "dragon-boat-lantern",
        question: "Which festival falls on `农历正月十五` and marks the official end of Spring Festival celebrations?",
        options: [
          "端午节 (Duānwǔjié — Dragon Boat)",
          "元宵节 (Yuánxiāojié — Lantern Festival)",
          "中秋节 (Zhōngqiūjié — Mid-Autumn)",
          "除夕 (chúxī — New Year's Eve)",
        ],
        answerIndex: 1,
        explanation:
          "`元宵节` (Yuánxiāojié — Lantern Festival) falls on `农历正月十五`, the 15th day of the 1st lunar month, closing the 15-day Spring Festival period.",
        hints: [
          "Count 15 days after 正月初一 (Spring Festival Day 1).",
          "It is celebrated on the first full moon of the lunar new year.",
        ],
      },
      {
        id: "chinese-festivals-m2-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "dragon-boat-lantern",
        question: "What does the Lantern Festival activity `猜灯谜` (cāi dēngmí) mean?",
        options: [
          "Guessing riddles written on lanterns",
          "Making sweet glutinous rice balls",
          "Watching dragon and lion dances",
          "Pasting red couplets on doorways",
        ],
        answerIndex: 0,
        explanation:
          "`猜灯谜` (cāi dēngmí) combines `猜` (guess), `灯` (lantern), and `谜` (riddle) — solving riddles hung on festive lanterns during `元宵节`.",
        hints: [
          "Break the word into 猜 (guess) + 灯 (lantern) + 谜 (riddle).",
          "People play this word game while viewing 花灯 (huādēng).",
        ],
      },
      {
        id: "chinese-festivals-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "dragon-boat-lantern",
        question: "Why do families eat round `汤圆` (tāngyuán) at Lantern Festival (`元宵节`)?",
        options: [
          "Because 汤圆 honours the poet 屈原 (Qū Yuán)",
          "Because 汤圆 scares away the monster 年 (Nián)",
          "Because 汤圆 sounds like 年糕 (rising higher)",
          "Because 汤圆 sounds like 团圆 (family reunion)",
        ],
        answerIndex: 3,
        explanation:
          "Round `汤圆` (tāngyuán) sound closely like `团圆` (tuányuán — family reunion), wishing the family harmony and togetherness in the new year.",
        hints: [
          "Listen to the sound of tāngyuán and look at its round shape (圆).",
          "Which key festival value means 'family reunion'?",
        ],
      },
      {
        id: "chinese-festivals-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "festival-comparisons-writing",
        question: "Where in Singapore is `牛车水` (Niúchēshuǐ), famous for its Spring Festival & Mid-Autumn lights?",
        options: [
          "Orchard Road shopping district",
          "Sentosa Island beach resort",
          "Chinatown heritage district",
          "East Coast Park cycling trail",
        ],
        answerIndex: 2,
        explanation:
          "`牛车水` (Niúchēshuǐ — literally 'bullock-cart water') is the Mandarin name for Singapore's Chinatown, famous for festive markets and `花灯` displays.",
        hints: [
          "Historically, water was delivered to this Singapore Chinese heritage quarter by ox-drawn carts (牛车).",
          "Families go to 牛车水 before 春节 to buy decorations and view zodiac lanterns.",
        ],
      },
      {
        id: "chinese-festivals-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "festival-comparisons-writing",
        question: "Which sentence follows correct Mandarin STPVO word order for a past celebration in Singapore?",
        options: [
          "我和家人看花灯在牛车水去年春节了。",
          "去年春节，我和家人在牛车水看了花灯。",
          "在牛车水我和家人去年春节看了花灯。",
          "我和家人去年春节看了花灯在牛车水。",
        ],
        answerIndex: 1,
        explanation:
          "`去年春节，我和家人在牛车水看了花灯` follows STPVO strictly: Time (`去年春节`), Subject (`我和家人`), Place (`在牛车水`), Verb + `了` + Object (`看了花灯`). Never put `在 + Place` after the verb here.",
        hints: [
          "Remember STPVO: Time and Place must BOTH come before the verb!",
          "Check where 在牛车水 sits relative to 看了花灯.",
        ],
      },
      {
        id: "chinese-festivals-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "festival-comparisons-writing",
        question: "Which comparison between two festivals is grammatically CORRECT in Mandarin?",
        options: [
          "春节比端午节很热闹。",
          "春节比端午节非常热闹。",
          "春节比很端午节热闹。",
          "春节比端午节更热闹。",
        ],
        answerIndex: 3,
        explanation:
          "With `比` (bǐ), NEVER use `很` or `非常` directly before the adjective. Use `更` (gèng — even more) or a degree phrase after the adjective: `春节比端午节更热闹`.",
        hints: [
          "Recall the golden 比 rule: 很 and 非常 are banned after 比!",
          "Which adverb means 'even more' and works smoothly with 比?",
        ],
      },
      {
        id: "chinese-festivals-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "festival-comparisons-writing",
        question: "Choose the sentence that correctly expresses a **past life experience** ('I have eaten zongzi before').",
        options: [
          "我以前吃过粽子，非常好吃。",
          "我以前吃了粽子，非常好吃。",
          "我以前正在吃粽子，非常好吃。",
          "我以前打算吃粽子，非常好吃。",
        ],
        answerIndex: 0,
        explanation:
          "`以前 + Verb + 过` (`我以前吃过粽子`) expresses life experience ('have ever eaten before'). `正在` means right now, `打算` is future, and `了` marks a single specific completed event rather than general life experience with `以前`.",
        hints: [
          "Which aspect particle goes right after a verb to mean 'have ever done'?",
          "Pair 以前 (before/previously) with the experiential marker 过 (guo).",
        ],
      },
      {
        id: "chinese-festivals-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "festival-comparisons-writing",
        question: "How do you negate a past festival action correctly: 'Last Dragon Boat Festival I didn't eat zongzi'?",
        options: [
          "去年端午节，我不吃了粽子。",
          "去年端午节，我没吃了粽子。",
          "去年端午节，我没吃粽子。",
          "去年端午节，我不吃粽子。",
        ],
        answerIndex: 2,
        explanation:
          "Negating a completed past action uses `没(有)` AND drops `了`: `去年端午节，我没吃粽子`. Never write `*没吃了*` or `*不吃了*` for a simple past non-event.",
        hints: [
          "Past actions are negated with 没(有), never 不.",
          "When 没 negates a past verb, what happens to 了?",
        ],
      },
      {
        id: "chinese-festivals-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "festival-comparisons-writing",
        question: "Complete the sentence explaining cultural meaning: `在中国文化里，红色___好运和幸福。`",
        options: [
          "纪念 (jìniàn — commemorate)",
          "象征 (xiàngzhēng — symbolise)",
          "庆祝 (qìngzhù — celebrate)",
          "准备 (zhǔnbèi — prepare)",
        ],
        answerIndex: 1,
        explanation:
          "`象征` (xiàngzhēng) means 'to symbolise': `红色象征好运和幸福` (Red symbolises good luck and happiness). `纪念` is used for commemorating a person or historical event, such as `纪念屈原`.",
        hints: [
          "Red represents or symbolises good fortune — which verb means 'symbolise'?",
          "Contrast 纪念 (commemorate a person) with 象征 (symbolise an abstract meaning).",
        ],
      },
      {
        id: "chinese-festivals-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "dragon-boat-lantern",
        question: "A classmate says: `我们在正月十五那天去公园赏灯，还吃了汤圆，也猜了很多灯谜。` Which festival are they describing?",
        options: [
          "元宵节 (Lantern Festival)",
          "中秋节 (Mid-Autumn Festival)",
          "端午节 (Dragon Boat Festival)",
          "除夕夜 (New Year's Eve)",
        ],
        answerIndex: 0,
        explanation:
          "All three clues point directly to `元宵节` (Lantern Festival): the date `正月十五`, eating `汤圆`, and solving `灯谜` (lantern riddles).",
        hints: [
          "Check the lunar date: 正月十五 is the 15th day of the 1st lunar month.",
          "Both 汤圆 and 猜灯谜 are signature customs of one specific festival.",
        ],
      },
      {
        id: "chinese-festivals-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "festival-comparisons-writing",
        question: "Which sentence correctly uses `没有` to say 'Dragon Boat Festival is not as lively as Spring Festival'?",
        options: [
          "端午节不比春节很热闹。",
          "端午节没有春节很热闹。",
          "春节没有端午节那么热闹。",
          "端午节没有春节那么热闹。",
        ],
        answerIndex: 3,
        explanation:
          "`A 没有 B (那么) + Adjective` means 'A is not as adj as B': `端午节没有春节那么热闹`. Reversing the order (`春节没有端午节那么热闹`) flips the meaning!",
        hints: [
          "Check which festival is LESS lively: Dragon Boat (端午节) goes first as A.",
          "Use A 没有 B 那么 + adj, never *没有…很…*.",
        ],
      },
    ],
  },
  {
    id: "chinese-festivals-m3",
    title: "MCQ Paper 3 — IGCSE Reading Comprehension & Cultural Nuance",
    questions: [
      {
        id: "chinese-festivals-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "festival-comparisons-writing",
        question:
          "Read: `每年春节前一个星期，妈妈都会带我去牛车水买年糕、橘子和春联，因为那里特别热闹。` When do they visit Chinatown?",
        options: [
          "On the night of Lantern Festival",
          "One week after Spring Festival",
          "One week before Spring Festival",
          "On the morning of Mid-Autumn Festival",
        ],
        answerIndex: 2,
        explanation:
          "`春节前一个星期` means 'one week before Spring Festival' (`前` = before), when they go to `牛车水` to buy `年糕`, `橘子` (mandarin oranges), and `春联`.",
        hints: [
          "Look closely at the time word 前 (qián — before) vs 后 (hòu — after).",
          "Check what items they are buying: 年糕, 橘子, 春联.",
        ],
      },
      {
        id: "chinese-festivals-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mid-autumn-festival",
        question:
          "Read: `我不怎么喜欢传统的蛋黄月饼，因为太甜了；我更喜欢新加坡的冰皮月饼，又凉又好吃！` Why does the writer prefer snow-skin mooncakes?",
        options: [
          "They are cool and tasty, whereas traditional ones are too sweet",
          "They are much cheaper than traditional salted-yolk mooncakes",
          "They are shaped like bamboo triangles instead of circles",
          "They are eaten only during Spring Festival in Chinatown",
        ],
        answerIndex: 0,
        explanation:
          "The writer says traditional `蛋黄月饼` are `太甜了` (too sweet) and prefers `冰皮月饼` (snow-skin mooncakes) because they are `又凉又好吃` (both cool and delicious).",
        hints: [
          "Translate 太甜了 (tài tián le) and 又凉又好吃 (yòu liáng yòu hǎochī).",
          "Notice the contrast between 不怎么喜欢 (don't really like) and 更喜欢 (prefer).",
        ],
      },
      {
        id: "chinese-festivals-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "spring-festival",
        question:
          "Read: `除夕那天，我们先打扫房间，然后在门上贴红色的春联，晚上全家人一起吃年夜饭。` What is the SECOND thing they do?",
        options: [
          "Eat the reunion dinner together",
          "Clean and tidy all the rooms",
          "Watch the lion dance outdoors",
          "Paste red couplets on the door",
        ],
        answerIndex: 3,
        explanation:
          "The sequence is `先打扫房间` (1st: clean the rooms), `然后在门上贴红色的春联` (2nd: paste red couplets on the door), and `晚上…吃年夜饭` (3rd: eat reunion dinner).",
        hints: [
          "Track the sequence markers: 先 (first) → 然后 (then) → 晚上 (in the evening).",
          "Read the clause right after 然后 (ránhòu).",
        ],
      },
      {
        id: "chinese-festivals-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "dragon-boat-lantern",
        question:
          "Read: `去年端午节，我和同学去滨海湾看了龙舟比赛。虽然天气非常热，但是比赛精彩极了！` How did the writer feel about the race?",
        options: [
          "Bored because the race took too long",
          "Thrilled despite the very hot weather",
          "Disappointed because it rained heavily",
          "Tired from rowing the dragon boat themselves",
        ],
        answerIndex: 1,
        explanation:
          "`虽然天气非常热，但是比赛精彩极了` means 'Although the weather was very hot, the race was extraordinarily exciting (`精彩极了`)!' Notice the writer `看了` (watched), not rowed.",
        hints: [
          "Look at 虽然…但是…: the second clause gives the main opinion.",
          "精彩极了 (jīngcǎi jíle) means 'extremely exciting / brilliant'.",
        ],
      },
      {
        id: "chinese-festivals-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "spring-festival",
        question: "In Singapore, why do visitors bring a pair of mandarin oranges (`一对橘子`) when visiting relatives at `春节`?",
        options: [
          "Because oranges symbolise remembering ancient poets",
          "Because oranges are only harvested on 正月十五",
          "Because 橘 (jú) sounds like 吉 (jí), meaning good luck",
          "Because oranges replace eating dumplings at dinner",
        ],
        answerIndex: 2,
        explanation:
          "In Chinese dialects and Mandarin cultural wordplay, `橘` (jú — mandarin orange) connects with `吉` (jí — auspicious/good luck), expressed in the greeting `大吉大利` (great luck and prosperity), and pairs symbolise double blessings (`好事成双`).",
        hints: [
          "Think of another auspicious pun (谐音) connected to the greeting 大吉大利!",
          "Pairs (two oranges) are given for double good fortune.",
        ],
      },
      {
        id: "chinese-festivals-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "dragon-boat-lantern",
        question: "Which pairing of **Festival → Traditional Food → Cultural Reason** is 100% accurate?",
        options: [
          "中秋节 → 汤圆 → 纪念屈原",
          "端午节 → 月饼 → 象征年年有余",
          "春节 → 粽子 → 庆祝月亮又大又圆",
          "元宵节 → 汤圆 → 象征全家团圆",
        ],
        answerIndex: 3,
        explanation:
          "`元宵节 → 汤圆 → 象征全家团圆` is completely accurate! The other options scramble foods and reasons across different festivals.",
        hints: [
          "Check every single link in the chain: festival, food, AND reason.",
          "Eliminate pairs that mismatch 屈原, 月饼, or 粽子.",
        ],
      },
      {
        id: "chinese-festivals-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "festival-comparisons-writing",
        question: "What does `去年春节，我和表哥一起去舞狮表演现场拍了很多照片` tell us?",
        options: [
          "The writer performed a lion dance with their cousin",
          "The writer and cousin took many photos at a lion dance show",
          "The writer plans to watch a lion dance next Spring Festival",
          "The writer has never seen a lion dance in Singapore before",
        ],
        answerIndex: 1,
        explanation:
          "`去舞狮表演现场拍了很多照片` means they went to the lion dance performance venue and took many photos (`拍了很多照片`). `去年` + `了` makes it a completed past event, not a future plan.",
        hints: [
          "Identify the main verb: 拍了很多照片 (took many photos).",
          "Check the time frame: 去年 (last year) + 了.",
        ],
      },
      {
        id: "chinese-festivals-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "festival-comparisons-writing",
        question: "Choose the sentence that correctly combines **past experience** AND **future intention** about Chinese festivals.",
        options: [
          "我以前吃过粽子，明年端午节我打算自己学包粽子。",
          "我以前吃了粽子，明年端午节我吃过自己包的粽子。",
          "我明年吃过粽子，以前端午节我打算自己学包粽子。",
          "我以前正在吃粽子，明年端午节我没学包粽子。",
        ],
        answerIndex: 0,
        explanation:
          "`我以前吃过粽子` correctly uses `以前 + Verb + 过` for past life experience, and `明年端午节我打算自己学包粽子` correctly uses `明年 + 打算` for a future plan.",
        hints: [
          "Check both time markers: 以前 pairs with 过; 明年 pairs with 打算.",
          "Eliminate sentences where 明年 is paired with 过 or 没.",
        ],
      },
      {
        id: "chinese-festivals-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "mid-autumn-festival",
        question: "Read: `中秋节那天，虽然爷爷住在伦敦，但是我们通过视频电话一起赏月、聊天儿。` How did they celebrate with Grandpa?",
        options: [
          "Grandpa flew from London to Singapore for dinner",
          "They sent Grandpa a box of snow-skin mooncakes by post",
          "They admired the moon and chatted with him via video call",
          "They waited until Spring Festival to visit Grandpa in London",
        ],
        answerIndex: 2,
        explanation:
          "`通过视频电话一起赏月、聊天儿` means 'admired the moon and chatted together via video call (`视频电话` shìpín diànhuà)' even though Grandpa lives in London.",
        hints: [
          "Look at 通过视频电话 (tōngguò shìpín diànhuà — via video call).",
          "Notice 虽然…但是… explains how distance did not stop their celebration.",
        ],
      },
      {
        id: "chinese-festivals-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "dragon-boat-lantern",
        question: "Why do BOTH `元宵节` (正月十五) and `中秋节` (八月十五) share the cultural theme of `团圆` (reunion)?",
        options: [
          "Both festivals take place during Singapore's December school holidays",
          "Both fall on the 15th lunar day when the moon is completely round",
          "Both festivals commemorate the ancient poet 屈原 (Qū Yuán)",
          "Both festivals forbid eating sweet foods or lighting red lanterns",
        ],
        answerIndex: 1,
        explanation:
          "In the lunar calendar, the 15th day (`十五`) of a month is the full moon (`满月` mǎnyuè). Both `正月十五` (`元宵节`) and `八月十五` (`中秋节`) celebrate the round full moon, linking `圆` (round) with `团圆` (reunion).",
        hints: [
          "Compare the day number in 正月十五 and 八月十五.",
          "What phase is the moon on the 15th day of any lunar month?",
        ],
      },
      {
        id: "chinese-festivals-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "spring-festival",
        question: "In the Singapore Chinese New Year custom `捞鱼生` (lāo yúshēng), what do diners do as they lift the ingredients high?",
        options: [
          "Stay completely silent to honour ancestors",
          "Sing the story of Chang'e and the Jade Rabbit",
          "Solve riddles written on red paper strips",
          "Shout auspicious blessings for luck and success",
        ],
        answerIndex: 3,
        explanation:
          "During `捞鱼生` (tossing yusheng), everyone lifts the shredded ingredients high with chopsticks while shouting auspicious four-character blessings (`吉祥话`) like `年年有余` and `步步高升`.",
        hints: [
          "Think about the lively Singapore CNY dinner tradition of 'Lo Hei' (捞起 / 捞鱼生).",
          "Higher tosses and loud blessings represent higher luck in the new year!",
        ],
      },
      {
        id: "chinese-festivals-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "festival-comparisons-writing",
        question: "Spot the ONLY sentence with ZERO Traditional characters AND correct grammar.",
        options: [
          "我觉得春节不但很热闹，而且非常有意义。",
          "我觉得春节不但很热闹，而且非常有意义，因为我喜欢春节比中秋节。",
          "我觉得春节比中秋节很热闹，因为有红包。",
          "我觉得春节虽然很热闹，所以非常有意义。",
        ],
        answerIndex: 0,
        explanation:
          "`我觉得春节不但很热闹，而且非常有意义` uses the paired connective `不但…而且…` cleanly with 100% Simplified Chinese. The others misuse `比` (`*喜欢春节比中秋节*`, `*比…很热闹*`) or break a paired connective (`*虽然…所以…*`).",
        hints: [
          "Check every grammar structure carefully: 不但…而且…, 比, and 虽然…但是….",
          "Can 虽然 ever pair with 所以? Can 很 follow 比?",
        ],
      },
      {
        id: "chinese-festivals-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "spring-festival",
        question: "Which 4-character expression best describes a festival street filled with lanterns, music, and crowds?",
        options: [
          "安安静静 (ān'ān jìngjìng)",
          "热热闹闹 (rèrè nàonào)",
          "冷冷清清 (lěnglěng qīngqīng)",
          "马马虎虎 (mǎmǎ hūhū)",
        ],
        answerIndex: 1,
        explanation:
          "`热热闹闹` (rèrè nàonào — bustling, lively, festive) is the AABB reduplicated form of `热闹` (rènao), ideal for describing `春节` or `牛车水`. `安安静静` means quiet and `冷冷清清` means deserted.",
        hints: [
          "Which adjective means 'lively and bustling'?",
          "AABB reduplication intensifies two-character adjectives like 热闹.",
        ],
      },
      {
        id: "chinese-festivals-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "mid-autumn-festival",
        question:
          "Read: `虽然月饼很好吃，但是因为热量太高，爸爸只让我每天吃半个，还要配一杯绿茶。` What rule did Dad set?",
        options: [
          "No mooncakes at all until after Mid-Autumn",
          "Two whole mooncakes every night with milk",
          "Only half a mooncake per day with green tea",
          "One snow-skin mooncake only at weekends",
        ],
        answerIndex: 2,
        explanation:
          "`只让我每天吃半个，还要配一杯绿茶` means Dad only lets the writer eat half a mooncake (`半个`) each day paired with a cup of green tea (`配一杯绿茶`), because mooncakes are high in calories (`热量太高`).",
        hints: [
          "Focus on 只让 (only lets), 每天 (every day), 半个 (half of one), and 配一杯绿茶.",
          "热量太高 (rèliàng tài gāo) means 'too high in calories'.",
        ],
      },
      {
        id: "chinese-festivals-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "festival-comparisons-writing",
        question:
          "An IGCSE prompt asks: `介绍一下你最喜欢的中国节日、去年怎么庆祝的，以及明年的打算。` Which checklist hits ALL three bullets?",
        options: [
          "Name festival + 象征 meaning; 去年…了 past story; 明年我打算… future plan",
          "Name three festivals; list four lunar dates; translate five foods into English",
          "Describe your school timetable; describe your pet; say Happy New Year",
          "Explain 屈原's biography; copy two greetings; compare two flavours of tea",
        ],
        answerIndex: 0,
        explanation:
          "The prompt has three exact bullets: favourite festival (`我最喜欢的中国节日` + `象征`), how you celebrated last year (`去年怎么庆祝的` → `去年…了`), and next year's plan (`明年的打算` → `明年我打算…`). Covering all three time frames unlocks top IGCSE marks!",
        hints: [
          "Count the three bullet points in the Chinese prompt carefully.",
          "Match each bullet to its time frame: present opinion, past (去年), and future (明年).",
        ],
      },
    ],
  },
];
