import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  {
    id: "igcse-bridge-grammar-m1",
    title: "MCQ Paper 1 — Self-Introduction, Family, Routine & Hobbies",
    questions: [
      {
        id: "igcse-bridge-grammar-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "igcse-self-intro-family-pets",
        question: "Which sentence states a student's age and household size idiomatically in Mandarin?",
        options: [
          "我是十四岁，我有四个人。",
          "我今年十四岁，我家有四口人。",
          "我是十四岁，我家有四口人。",
          "我今年十四岁，我有四个人。",
        ],
        answerIndex: 1,
        explanation:
          "Mandarin drops `是` before an age (`我今年十四岁`) and states household size with `我家有…口人` (`我家有四口人`), never `*我是十四岁*` or `*我有四个人*`.",
        hints: [
          "Check TWO rules: age takes no 是, and family size uses 我家有…口人.",
        ],
      },
      {
        id: "igcse-bridge-grammar-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "igcse-self-intro-family-pets",
        question: "Choose the sentence that correctly applies the `二` vs `两` rule AND exact animal classifiers.",
        options: [
          "我家养了两只小猫和两条金鱼。",
          "我家养了二只小猫和二条金鱼。",
          "我家养了两匹小猫和两只金鱼。",
          "我家养了两个小猫和两个金鱼。",
        ],
        answerIndex: 0,
        explanation:
          "Before any measure word, 2 is always `两` (liǎng). Cats take `只` (`两只小猫`) and fish take `条` (`两条金鱼`), so `我家养了两只小猫和两条金鱼` is 100% accurate.",
        hints: [
          "Before a classifier, 2 must be 两 (liǎng), never 二.",
          "Check exact classifiers: cats = 只 (zhī); goldfish = 条 (tiáo).",
        ],
      },
      {
        id: "igcse-bridge-grammar-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "igcse-self-intro-family-pets",
        question: "Which sentence correctly uses `穿` (chuān) and `戴` (dài) to describe a family member?",
        options: [
          "我表哥穿着一副眼镜，戴着白色衬衫。",
          "我表哥穿着一顶帽子，戴着牛仔裤。",
          "我表哥戴着运动鞋，穿着一块手表。",
          "我表哥穿着白色衬衫，戴着一副眼镜。",
        ],
        answerIndex: 3,
        explanation:
          "Clothes and shoes take `穿` (`穿着白色衬衫`), whereas accessories such as glasses, hats, scarves, and watches take `戴` (`戴着一副眼镜`).",
        hints: [
          "Clothes on the body/feet = 穿 (chuān); accessories = 戴 (dài).",
          "Check which verb pairs with 白色衬衫 (white shirt) and which pairs with 眼镜 (glasses).",
        ],
      },
      {
        id: "igcse-bridge-grammar-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "igcse-self-intro-family-pets",
        question: "How do you write your birthday '18 October' in correct Chinese Big-to-Small date order?",
        options: [
          "我的生日是十八号十月。",
          "我的生日是十月十八点。",
          "我的生日是十月十八号。",
          "我的生日是十八月十号。",
        ],
        answerIndex: 2,
        explanation:
          "Chinese dates ALWAYS move from largest unit to smallest: Month (`十月`) before Day (`十八号`): `我的生日是十月十八号`. `点` is for clock hours, not calendar days.",
        hints: [
          "Chinese puts the bigger unit (Month 月) before the smaller unit (Day 号/日).",
          "10th month = 十月; 18th day = 十八号.",
        ],
      },
      {
        id: "igcse-bridge-grammar-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "igcse-routine-hobbies",
        question: "Choose the exact Mandarin verb–object pair for **'to play the piano'** and **'to play football'**.",
        options: [
          "弹钢琴和踢足球 (tán gāngqín hé tī zúqiú)",
          "玩钢琴和打足球 (wán gāngqín hé dǎ zúqiú)",
          "拉钢琴和踢足球 (lā gāngqín hé tī zúqiú)",
          "打钢琴和玩足球 (dǎ gāngqín hé wán zúqiú)",
        ],
        answerIndex: 0,
        explanation:
          "Keyboard/plucked instruments take `弹` (`弹钢琴`), while football takes `踢` (`踢足球`). Never use `玩` for instruments or team sports, and `拉` is for bowed instruments like `拉小提琴`.",
        hints: [
          "Piano keys are pressed/plucked with fingers: 弹 (tán).",
          "Football is kicked with feet: 踢 (tī).",
        ],
      },
      {
        id: "igcse-bridge-grammar-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "igcse-routine-hobbies",
        question: "Which verb pairs with `小提琴` (xiǎotíqín — violin)?",
        options: [
          "打小提琴 (dǎ xiǎotíqín)",
          "踢小提琴 (tī xiǎotíqín)",
          "拉小提琴 (lā xiǎotíqín)",
          "弹小提琴 (tán xiǎotíqín)",
        ],
        answerIndex: 2,
        explanation:
          "Bowed string instruments like the violin and erhu take `拉` (lā — pull the bow across the strings): `拉小提琴`. `弹` is for piano/guitar, `打` for hand sports, and `踢` for football.",
        hints: [
          "Think of pulling a bow across violin strings!",
          "Which verb literally means 'to pull' (lā)?",
        ],
      },
      {
        id: "igcse-bridge-grammar-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "igcse-routine-hobbies",
        question: "Which sequence of daily-routine connectors means **'first…, then…, finally…'**?",
        options: [
          "因为…，所以…，最后…",
          "先…，然后…，最后…",
          "虽然…，然后…，但是…",
          "一边…，一边…，最后…",
        ],
        answerIndex: 1,
        explanation:
          "`先…，然后…，最后…` (xiān…, ránhòu…, zuìhòu…) is the standard three-step sequence ladder for daily routines ('first…, then…, finally…').",
        hints: [
          "先 (xiān) means 'first'; 最后 (zuìhòu) means 'finally'.",
          "Which middle word means 'then / afterwards' (ránhòu)?",
        ],
      },
      {
        id: "igcse-bridge-grammar-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "igcse-routine-hobbies",
        question: "Which sentence correctly expresses hobby **duration** ('Yesterday I played the piano for an hour')?",
        options: [
          "昨天我弹钢琴一个小时了。",
          "昨天我一个小时弹了钢琴。",
          "昨天我弹了钢琴一个小时。",
          "昨天我弹钢琴弹了一个小时。",
        ],
        answerIndex: 3,
        explanation:
          "When a verb takes an object (`钢琴`), express duration with the verb-copy pattern `V + O + V + 了 + Duration`: `昨天我弹钢琴弹了一个小时` (or `弹了一个小时的钢琴`).",
        hints: [
          "A single verb cannot hold BOTH a direct object (钢琴) AND a duration (一个小时) right after it.",
          "Look for the sentence that copies the verb 弹 before 了 + 一个小时!",
        ],
      },
      {
        id: "igcse-bridge-grammar-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "igcse-routine-hobbies",
        question: "Rank these three frequency adverbs from MOST frequent to LEAST frequent.",
        options: [
          "总是 → 经常 → 偶尔",
          "偶尔 → 经常 → 总是",
          "经常 → 总是 → 偶尔",
          "总是 → 偶尔 → 经常",
        ],
        answerIndex: 0,
        explanation:
          "`总是` (zǒngshì = always, 100%) > `经常` (jīngcháng = often, ~75%) > `偶尔` (ǒu'ěr = occasionally, ~20%).",
        hints: [
          "总是 means 'always' and 偶尔 means 'occasionally'.",
          "Check which order starts with 总是 and ends with 偶尔.",
        ],
      },
      {
        id: "igcse-bridge-grammar-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "igcse-routine-hobbies",
        question: "Read: `每天早上六点三刻，我坐校车去东陵学校。` What time does the student board the school bus?",
        options: [
          "6:15 am",
          "6:30 am",
          "6:45 am",
          "7:15 am",
        ],
        answerIndex: 2,
        explanation:
          "`一刻` (yí kè) is 15 minutes (one quarter of an hour), so `六点三刻` is 6 hours + 3 quarters = **6:45 am** (also said `差一刻七点`).",
        hints: [
          "One 刻 (kè) equals 15 minutes.",
          "Calculate 3 × 15 minutes past 6 o'clock.",
        ],
      },
      {
        id: "igcse-bridge-grammar-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "igcse-routine-hobbies",
        question: "How do you say **'I never drink coffee (as a habit)'** in natural Mandarin?",
        options: [
          "我从来没喝咖啡。",
          "我从来不喝过咖啡。",
          "我经常不喝咖啡了。",
          "我从来不喝咖啡。",
        ],
        answerIndex: 3,
        explanation:
          "Habitual 'never' uses `从来不 + Verb`: `我从来不喝咖啡`. By contrast, `从来没 + Verb + 过` (`我从来没喝过咖啡`) means 'I have never tried coffee in my life'.",
        hints: [
          "Habits and preferences are negated with 不 (bù), not 没.",
          "Pair 从来 (ever/at all) with 不 before 喝咖啡.",
        ],
      },
      {
        id: "igcse-bridge-grammar-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "igcse-self-intro-family-pets",
        question: "Which sentence uses `又…又…` (both… and…) accurately to describe a pet?",
        options: [
          "我的小狗又聪明又有点儿淘气。",
          "我的小狗又聪明又活泼。",
          "我的小狗很又聪明又活泼。",
          "我的小狗又聪明又很活泼。",
        ],
        answerIndex: 1,
        explanation:
          "`又 + Adj1 + 又 + Adj2` links two balanced qualities without extra `很`: `我的小狗又聪明又活泼`. Never insert `很` or mix a positive trait with `有点儿` inside `又…又…`.",
        hints: [
          "又…又… connects two matching adjectives cleanly without 很.",
          "Check which option has no 很 and keeps both adjectives balanced!",
        ],
      },
      {
        id: "igcse-bridge-grammar-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "igcse-routine-hobbies",
        question: "Read: `我平时每天晚上做作业做两个小时，但是周末我喜欢去公园打羽毛球放松一下。` Why does the writer play badminton at weekends?",
        options: [
          "To prepare for a school PE test",
          "To spend two hours doing homework",
          "To relax after busy weekday study",
          "To teach their younger sister sports",
        ],
        answerIndex: 2,
        explanation:
          "`放松一下` (fàngsōng yíxià) means 'to relax a bit' — contrasting with doing two hours of homework on weekday evenings (`平时每天晚上做作业做两个小时`).",
        hints: [
          "Look at the final verb phrase: 放松一下 (fàngsōng yíxià).",
          "放松 is a high-frequency IGCSE word for explaining *why* you enjoy a hobby.",
        ],
      },
      {
        id: "igcse-bridge-grammar-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "igcse-self-intro-family-pets",
        question: "Which opening sentence would score the HIGHEST band in an IGCSE 0547 self-introduction?",
        options: [
          "我叫安娜，今年十四岁，现在跟父母和弟弟住在新加坡，还养了一只可爱的兔子。",
          "我叫安娜。我是十四岁。我住新加坡。我有四个人。我有兔子。",
          "我叫安娜，我今年是十四岁，在新加坡我住着，我家有二只兔子。",
          "我是叫安娜，十四岁今年，住在新加坡跟我的父母和弟弟，养了兔子一只。",
        ],
        answerIndex: 0,
        explanation:
          "`我叫安娜，今年十四岁，现在跟父母和弟弟住在新加坡，还养了一只可爱的兔子` links facts smoothly with commas, drops `是` before age, puts `跟…` before `住在新加坡`, and uses `养了 + 一只` accurately.",
        hints: [
          "Check every grammar detail: no 是 before age, 住在 + place, 养了 + classifier + noun.",
          "Eliminate choppy single-clause drafts and English word order.",
        ],
      },
      {
        id: "igcse-bridge-grammar-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "igcse-routine-hobbies",
        question: "Which alternative structure has the EXACT same meaning as `我昨天看书看了半个小时`?",
        options: [
          "我昨天看书半个小时了。",
          "我昨天半个小时看书了。",
          "我昨天看了书半个小时。",
          "我昨天看了半个小时的书。",
        ],
        answerIndex: 3,
        explanation:
          "Alongside verb-copy (`看书看了半个小时`), Mandarin allows inserting duration + `的` before the object: `Verb + 了 + Duration + 的 + Object` → `我昨天看了半个小时的书`!",
        hints: [
          "Remember the second valid duration pattern from the guide: V + 了 + Duration + 的 + O.",
          "Look for 的 right between 半个小时 and 书.",
        ],
      },
    ],
  },
  {
    id: "igcse-bridge-grammar-m2",
    title: "MCQ Paper 2 — STPVO Word Order & Time/Aspect Markers",
    questions: [
      {
        id: "igcse-bridge-grammar-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "stpvo-tenses-aspect",
        question: "What does the core Mandarin word-order formula **STPVO** stand for?",
        options: [
          "Subject – Tense – Pronoun – Verb – Object",
          "Subject – Topic – Predicate – Verb – Order",
          "Subject – Time – Place – Verb – Object",
          "Subject – Time – Purpose – Verb – Object",
        ],
        answerIndex: 2,
        explanation:
          "**STPVO** stands for **Subject + Time + Place + Verb + Object**, reminding you that BOTH Time and Place (`在…`) sit BEFORE the verb in Mandarin.",
        hints: [
          "Think of the two stage-setting elements that move in front of the verb in Chinese.",
          "When? (T) + Where? (P) → Action (V + O).",
        ],
      },
      {
        id: "igcse-bridge-grammar-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "stpvo-tenses-aspect",
        question: "Choose the sentence that follows correct Mandarin **STPVO** word order.",
        options: [
          "我打网球在体育中心昨天下午了。",
          "我在体育中心昨天下午打了网球。",
          "我昨天下午打了网球在体育中心。",
          "我昨天下午在体育中心打了网球。",
        ],
        answerIndex: 3,
        explanation:
          "`我昨天下午在体育中心打了网球` puts Subject (`我`) → Time (`昨天下午`) → Place (`在体育中心`) → Verb + `了` (`打了`) → Object (`网球`) in textbook STPVO order.",
        hints: [
          "Time (昨天下午) comes BEFORE Place (在体育中心), and BOTH come BEFORE the verb (打了网球).",
          "Eliminate any option where 在体育中心 sits after 打了网球 or before 昨天下午.",
        ],
      },
      {
        id: "igcse-bridge-grammar-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "stpvo-tenses-aspect",
        question: "Which aspect marker completes a **past life experience**: `你以前去___中国吗？` (Have you ever been to China?)",
        options: [
          "过 (guo)",
          "了 (le)",
          "正在 (zhèngzài)",
          "打算 (dǎsuàn)",
        ],
        answerIndex: 0,
        explanation:
          "`Verb + 过` (`去过中国`) expresses past life experience ('have ever been to'). `正在` is ongoing right now, `打算` is future, and `了` marks a single specific completed event rather than general life experience with `以前`.",
        hints: [
          "Notice 以前 (yǐqián — before / ever).",
          "Which particle means 'have experienced doing X at least once'?",
        ],
      },
      {
        id: "igcse-bridge-grammar-m2-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "stpvo-tenses-aspect",
        question: "Complete the ongoing (-ing) sentence: `别吵，姐姐___房间里复习中文呢！`",
        options: [
          "打算在 (dǎsuàn zài)",
          "正在 (zhèngzài)",
          "去过 (qùguo)",
          "买了 (mǎile)",
        ],
        answerIndex: 1,
        explanation:
          "`正在 + (Place) + Verb + 呢` (`姐姐正在房间里复习中文呢`) expresses an action happening right now ('is revising Chinese right now'). Notice sentence-final `呢` confirms ongoing action!",
        hints: [
          "Look at the warning 别吵 ('Don't make noise!') and sentence-final 呢.",
          "Which marker expresses an action in progress right now?",
        ],
      },
      {
        id: "igcse-bridge-grammar-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stpvo-tenses-aspect",
        question: "How do you negate the completed past sentence `昨天我买了两本书`?",
        options: [
          "昨天我不买了书。",
          "昨天我没买了书。",
          "昨天我不买书。",
          "昨天我没买书。",
        ],
        answerIndex: 3,
        explanation:
          "Negating a completed past action requires `没(有)` AND drops `了`: `昨天我没买书`. Remember the golden rule: `没` kicks `了` out!",
        hints: [
          "Completed past events are negated with 没(有), never 不.",
          "When 没 enters the sentence, 了 MUST disappear!",
        ],
      },
      {
        id: "igcse-bridge-grammar-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stpvo-tenses-aspect",
        question: "How do you negate the past-experience sentence `我以前吃过北京烤鸭` ('I have never eaten Peking duck')?",
        options: [
          "我以前没吃过北京烤鸭。",
          "我以前不吃过北京烤鸭。",
          "我以前没吃了北京烤鸭。",
          "我以前不吃北京烤鸭。",
        ],
        answerIndex: 0,
        explanation:
          "Unlike `了`, experiential `过` MUST STAY when negated with `没(有)`: `我以前没吃过北京烤鸭`. Writing `*不吃过*` or `*没吃了*` is ungrammatical.",
        hints: [
          "Recall the mnemonic: 没 kicks 了 out, but invites 过 IN!",
          "Keep both 没 and 过 around the verb 吃.",
        ],
      },
      {
        id: "igcse-bridge-grammar-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stpvo-tenses-aspect",
        question: "Which sentence expresses a **future plan** negated accurately?",
        options: [
          "下个周末我没打算去游泳。",
          "下个周末我打算没去游泳。",
          "下个周末我不打算去游泳。",
          "下个周末我不打算去了游泳。",
        ],
        answerIndex: 2,
        explanation:
          "Future intentions and mental verbs like `打算` (plan to) are negated with `不`, never `没` and never with past `了`: `下个周末我不打算去游泳`.",
        hints: [
          "Future plans and mental verbs (打算, 想) take 不, not 没.",
          "Check where 不 sits: directly before 打算.",
        ],
      },
      {
        id: "igcse-bridge-grammar-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stpvo-tenses-aspect",
        question: "Spot the ONLY sentence where `在 + Place` is positioned correctly with a companion (`跟朋友`).",
        options: [
          "我昨天看了电影跟朋友在电影院。",
          "我昨天跟朋友在电影院看了电影。",
          "我看了电影昨天跟朋友在电影院。",
          "跟朋友我看了电影昨天在电影院。",
        ],
        answerIndex: 1,
        explanation:
          "`我昨天跟朋友在电影院看了电影` places Time (`昨天`), Companion (`跟朋友`), and Place (`在电影院`) ALL cleanly before the verb phrase `看了电影`.",
        hints: [
          "Both Companion (跟朋友) and Place (在电影院) come BEFORE the main verb 看了电影.",
          "Subject + Time + Companion + Place + Verb + Object!",
        ],
      },
      {
        id: "igcse-bridge-grammar-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stpvo-tenses-aspect",
        question: "What is the exact difference between `他去了伦敦` and `他去过伦敦`?",
        options: [
          "他去了伦敦 is a future travel plan; 他去过伦敦 is an ongoing flight",
          "他去了伦敦 means he never went; 他去过伦敦 means he went yesterday",
          "Both sentences mean he is sitting on a plane to London right now",
          "他去了伦敦 means he went (may still be there); 他去过伦敦 means he visited and returned",
        ],
        answerIndex: 3,
        explanation:
          "`他去了伦敦` means he went to London (and could still be there now), whereas `他去过伦敦` means he has the past life experience of visiting London and has already returned.",
        hints: [
          "Think about the core meaning of 过 (guo): a past experience that is completely over.",
          "Contrast 'has gone to London' (去了) vs 'has been to London before' (去过).",
        ],
      },
      {
        id: "igcse-bridge-grammar-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stpvo-tenses-aspect",
        question: "Choose the sentence that correctly negates an **ongoing action** ('My younger brother is NOT playing games right now').",
        options: [
          "弟弟现在没在玩电脑游戏。",
          "弟弟现在不在玩电脑游戏。",
          "弟弟现在没玩了电脑游戏。",
          "弟弟现在正在不玩电脑游戏。",
        ],
        answerIndex: 0,
        explanation:
          "Ongoing `正在 + V` is negated with `没(有)在 + V`: `弟弟现在没在玩电脑游戏`. Never write `*不在玩*` or `*正在不玩*`!",
        hints: [
          "The ongoing marker 在/正在 is negated with 没 (not 不) right before 在.",
          "Look for 没在 + Verb.",
        ],
      },
      {
        id: "igcse-bridge-grammar-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stpvo-tenses-aspect",
        question: "Which sentence uses **TSPVO** (Time before Subject) naturally and accurately?",
        options: [
          "在公园里，明天早上我打算跑步。",
          "明天早上，我打算在公园里跑步。",
          "明天早上，我打算跑步在公园里。",
          "我打算跑步，明天早上在公园里。",
        ],
        answerIndex: 1,
        explanation:
          "Time (`明天早上`) may smoothly open the sentence before the Subject (`我`), while Place (`在公园里`) stays directly before the Verb (`跑步`): `明天早上，我打算在公园里跑步`.",
        hints: [
          "Time can start the sentence (T, S + P + V + O).",
          "Check that 在公园里 still sits BEFORE 跑步!",
        ],
      },
      {
        id: "igcse-bridge-grammar-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "stpvo-tenses-aspect",
        question: "Complete the weather/future prediction sentence: `天气预报说，今天下午___下大雨。`",
        options: [
          "过 (guo)",
          "了 (le)",
          "会 (huì)",
          "正在 (zhèngzài)",
        ],
        answerIndex: 2,
        explanation:
          "`会` (huì) expresses future likelihood or weather predictions ('will rain heavily this afternoon'): `今天下午会下大雨`. `打算` is only for human intentions, not weather!",
        hints: [
          "This is a forecast about what WILL happen later today.",
          "Which modal verb expresses 'will / is likely to' for weather predictions?",
        ],
      },
      {
        id: "igcse-bridge-grammar-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "stpvo-tenses-aspect",
        question: "Why does `今天早上我喝了两杯水` put `了` directly after `喝` rather than only at the end?",
        options: [
          "Verb + 了 right before a quantified object (两杯水) marks a specific completed amount",
          "了 must always be placed before the subject whenever a sentence mentions morning",
          "喝了 means 'has never drunk' when followed by a measure word like 杯",
          "Because 两杯水 is a future plan, 了 replaces 打算 before the noun",
        ],
        answerIndex: 0,
        explanation:
          "When an object has a specific quantity (`两杯水`, `三本书`, `一个苹果`), Mandarin places aspectual `了` right after the verb (`Verb + 了 + Quantity + Noun`): `喝了两杯水`.",
        hints: [
          "Look at what follows 喝了: 两杯水 (a quantified object: number + classifier + noun).",
          "Remember where completed-action 了 goes with quantified objects!",
        ],
      },
      {
        id: "igcse-bridge-grammar-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "stpvo-tenses-aspect",
        question: "Read this 3-sentence diary entry and identify its time frames in order: `去年我去过香港。现在我正在准备考试呢。明年暑假我打算去日本旅游。`",
        options: [
          "Present → Future → Past",
          "Future → Past → Present",
          "Past → Future → Present",
          "Past → Present → Future",
        ],
        answerIndex: 3,
        explanation:
          "Sentence 1 (`去年…去过`) = **Past**; Sentence 2 (`现在…正在…呢`) = **Present (ongoing)**; Sentence 3 (`明年…打算`) = **Future** — giving the classic Past → Present → Future progression!",
        hints: [
          "Decode the three time cues: 去年 (last year), 现在 (now), 明年暑假 (next summer holiday).",
          "Match each cue to Past, Present, or Future.",
        ],
      },
      {
        id: "igcse-bridge-grammar-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "stpvo-tenses-aspect",
        question: "Spot the ONLY sentence with ZERO grammar errors across STPVO, aspect, and negation.",
        options: [
          "上个星期天，我在家里没做了作业，因为我去了外婆家。",
          "上个星期天，我没在家里做作业，因为我去了外婆家。",
          "上个星期天，我不在家里做作业了，因为我去外婆家过。",
          "我没做作业在家里上个星期天，因为我去了外婆家。",
        ],
        answerIndex: 1,
        explanation:
          "`上个星期天，我没在家里做作业，因为我去了外婆家` gets every rule right: TSPVO order, `没` before `在家里` with `了` dropped, and `去了外婆家` for the completed visit.",
        hints: [
          "Check three traps: *没做了* (illegal!), *不在…了* (wrong negator!), and English word order.",
          "Only one sentence keeps TSPVO AND drops 了 after 没.",
        ],
      },
    ],
  },
  {
    id: "igcse-bridge-grammar-m3",
    title: "MCQ Paper 3 — Paired Connectives & IGCSE 0547 Exam Mastery",
    questions: [
      {
        id: "igcse-bridge-grammar-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "igcse-connectives-writing",
        question: "Complete the paired connective: `因为今天下雨，___我们取消了足球比赛。`",
        options: [
          "所以 (suǒyǐ — therefore)",
          "但是 (dànshì — but)",
          "而且 (érqiě — moreover)",
          "一边 (yìbiān — while)",
        ],
        answerIndex: 0,
        explanation:
          "`因为` (yīnwèi — because) ALWAYS pairs with `所以` (suǒyǐ — therefore/so): `因为今天下雨，所以我们取消了足球比赛`.",
        hints: [
          "Match 因为 (cause) with its magnetic result partner.",
        ],
      },
      {
        id: "igcse-bridge-grammar-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "igcse-connectives-writing",
        question: "Complete the paired connective: `虽然物理有点儿难，___我觉得科学课非常有趣。`",
        options: [
          "所以 (suǒyǐ — so)",
          "而且 (érqiě — also)",
          "但是 (dànshì — yet/but)",
          "如果 (rúguǒ — if)",
        ],
        answerIndex: 2,
        explanation:
          "`虽然` (suīrán — although) ALWAYS pairs with `但是` (dànshì — but/yet) or `可是`: `虽然物理有点儿难，但是我觉得科学课非常有趣`.",
        hints: [
          "The two clauses contrast 'a bit hard' with 'very interesting'.",
          "Recall the exact partner of 虽然 (suīrán).",
        ],
      },
      {
        id: "igcse-bridge-grammar-m3-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "igcse-connectives-writing",
        question: "Complete the paired connective: `我的新公寓不但交通很方便，___环境特别安静。`",
        options: [
          "但是 (dànshì — however)",
          "而且 (érqiě — but also)",
          "所以 (suǒyǐ — therefore)",
          "然后 (ránhòu — then)",
        ],
        answerIndex: 1,
        explanation:
          "`不但` (búdàn — not only) ALWAYS pairs with `而且` (érqiě — but also): `不但交通很方便，而且环境特别安静`.",
        hints: [
          "Both clauses add positive points about the apartment.",
          "Look for the magnetic partner of 不但 (búdàn).",
        ],
      },
      {
        id: "igcse-bridge-grammar-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "igcse-connectives-writing",
        question: "Choose the ONLY grammatically correct `如果…，就…` conditional sentence.",
        options: [
          "如果明天晴天，就我们去东海岸骑自行车。",
          "明天如果晴天，就去我们东海岸骑自行车。",
          "如果明天晴天，我们去东海岸就骑自行车了。",
          "如果明天晴天，我们就去东海岸骑自行车。",
        ],
        answerIndex: 3,
        explanation:
          "Because `就` (jiù) is an adverb, the Subject (`我们`) MUST come BEFORE `就`: `如果明天晴天，我们就去东海岸骑自行车`. Never put `就` before the subject (`*就我们…*`)!",
        hints: [
          "Check the golden Subject + 就 rule!",
          "Where must 我们 sit relative to 就?",
        ],
      },
      {
        id: "igcse-bridge-grammar-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "igcse-connectives-writing",
        question: "Complete the simultaneous-action sentence: `晚上复习的时候，哥哥喜欢___听轻音乐，___写中文作文。`",
        options: [
          "先…然后…",
          "一边…一边…",
          "因为…所以…",
          "虽然…但是…",
        ],
        answerIndex: 1,
        explanation:
          "`一边…一边…` (yìbiān… yìbiān…) expresses two actions happening at the exact same time: listening to soft music while writing a Chinese essay.",
        hints: [
          "He listens to music AND writes his essay simultaneously.",
          "Which repeated pair expresses two actions at once?",
        ],
      },
      {
        id: "igcse-bridge-grammar-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "igcse-connectives-writing",
        question: "When BOTH clauses share the SAME subject (`我`), where should `我` sit with `不但…而且…`?",
        options: [
          "不但我喜欢历史，而且我喜欢地理。",
          "不但喜欢我历史，而且喜欢地理。",
          "我喜欢不但历史，而且喜欢地理。",
          "我不但喜欢历史，而且喜欢地理。",
        ],
        answerIndex: 3,
        explanation:
          "When both clauses share the same subject (`我`), put the subject ONCE **before `不但`**: `我不但喜欢历史，而且喜欢地理`.",
        hints: [
          "Same subject for both clauses → put the subject at the very front, BEFORE 不但!",
          "Test which sentence flows most cleanly without repeating 我 awkwardly.",
        ],
      },
      {
        id: "igcse-bridge-grammar-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "igcse-connectives-writing",
        question: "Spot the cross-wired connective ERROR among these four Year 9 sentences.",
        options: [
          "虽然每天坐地铁只要十五分钟，所以我很喜欢我家附近。",
          "因为每天坐地铁只要十五分钟，所以我很喜欢我家附近。",
          "虽然我家离学校有点儿远，但是坐校车非常方便。",
          "我家附近不但有地铁站，而且有一个大图书馆。",
        ],
        answerIndex: 0,
        explanation:
          "`*虽然…所以…*` cross-wires two different connective pairs! `虽然` must pair with `但是` (contrast), whereas `所以` must pair with `因为` (cause–effect).",
        hints: [
          "Inspect the opening and second-clause connective in every option.",
          "One sentence mixes 虽然 (although) with 所以 (so)!",
        ],
      },
      {
        id: "igcse-bridge-grammar-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "igcse-connectives-writing",
        question:
          "Read: `因为我对猫毛过敏，所以家里不能养猫；不过，爸爸妈妈同意让我养两条漂亮的金鱼。` What does `不过` (búguò) function like here?",
        options: [
          "A past-experience marker identical to 过",
          "A sequencing word identical to 最后",
          "A mild contrast word meaning 'however / but'",
          "A conditional word meaning 'if only'",
        ],
        answerIndex: 2,
        explanation:
          "`不过` (búguò) is a high-band conversational contrast connective meaning 'however / though / but' — here softening the disappointment of not keeping a cat by introducing the two goldfish!",
        hints: [
          "Look at the two ideas: allergic to cat fur (can't keep a cat) vs parents agreed to two goldfish.",
          "This connective introduces a softer contrast than 但是.",
        ],
      },
      {
        id: "igcse-bridge-grammar-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "igcse-connectives-writing",
        question:
          "Which sentence uses `有点儿` (yǒudiǎnr) with the RIGHT emotional nuance (typically mild complaint / negative trait)?",
        options: [
          "我的宠物狗有点儿非常聪明。",
          "今天的数学作业有点儿难，但我还是做完了。",
          "新加坡的美食有点儿好吃极了。",
          "妈妈送给我的生日礼物有点儿太棒了。",
        ],
        answerIndex: 1,
        explanation:
          "`有点儿 + Adj` expresses 'a little too / somewhat (undesirable)' — so `今天的数学作业有点儿难` ('a bit hard') is natural, whereas pairing `有点儿` with strongly positive phrases (`*有点儿太棒了*`) is unnatural!",
        hints: [
          "Recall from Year 9: 有点儿 carries a mild complaint or negative nuance.",
          "Which option uses 有点儿 with an adjective like 难, 累, or 贵?",
        ],
      },
      {
        id: "igcse-bridge-grammar-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "igcse-connectives-writing",
        question: "In an IGCSE 0547 email task with **4 bullet points**, what happens if you write 120 fluent characters but skip Bullet 4?",
        options: [
          "Extra characters automatically replace the missing bullet point",
          "Examiners only grade spelling and ignore bullet completion",
          "Only the first two bullet points count toward total marks",
          "Your Content/Task Completion band is capped for missing a bullet",
        ],
        answerIndex: 3,
        explanation:
          "In Cambridge IGCSE 0547, every bullet point in the prompt is checked directly; skipping even one bullet caps your Content/Communication score regardless of length.",
        hints: [
          "Think about the 5-point IGCSE writing checklist.",
          "Does writing extra words on Bullet 1 compensate for skipping Bullet 4?",
        ],
      },
      {
        id: "igcse-bridge-grammar-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "igcse-connectives-writing",
        question: "Which sentence is 100% **Simplified Chinese (`简体中文`)** with ZERO grammar slips?",
        options: [
          "如果明天不下雨，就我跟朋友去图书馆看中文书。",
          "虽然我觉得中文很有用，但是我经常在学校学中文每天。",
          "我每天早上七点半起床，然后坐校车去学校学习中文。",
          "因为我喜欢打篮球，所以我昨天没打篮球了。",
        ],
        answerIndex: 2,
        explanation:
          "`我每天早上七点半起床，然后坐校车去学校学习中文` has 100% Simplified characters and flawless grammar! The other options contain `*就我…*` (`就` before subject), `*每天*` at the end, or `*没打篮球了*` (mixing `没` with `了`).",
        hints: [
          "Audit every option for: 就 position, Time position (STPVO), and 没 + 了.",
          "Eliminate the three sentences with clear grammar errors.",
        ],
      },
      {
        id: "igcse-bridge-grammar-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "igcse-connectives-writing",
        question:
          "Read: `虽然以前我对历史不太感兴趣，但是自从今年换了一位幽默的老师以后，我不但开始认真听课，而且历史成绩进步了很多。` Why did the student's History grade improve?",
        options: [
          "They got a humorous new teacher this year and began listening attentively",
          "They dropped History to spend more time studying Mandarin and Science",
          "They had already loved History since primary school and rarely studied",
          "They hired a private tutor during the Chinese New Year holiday",
        ],
        answerIndex: 0,
        explanation:
          "The clause `自从今年换了一位幽默的老师以后，我不但开始认真听课，而且历史成绩进步了很多` explains that after switching to a humorous teacher this year (`幽默的老师`), the student started listening carefully (`认真听课`) and their History marks improved greatly (`进步了很多`).",
        hints: [
          "Decode 换了一位幽默的老师 (changed to a humorous teacher) and 认真听课 (listen attentively).",
          "Trace the progression from 虽然以前… (previously) to 但是自从今年… (since this year).",
        ],
      },
      {
        id: "igcse-bridge-grammar-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "igcse-connectives-writing",
        question: "Which sentence correctly contrasts TWO DIFFERENT subjects using `不但…，而且…`?",
        options: [
          "我不但喜欢打网球，妹妹而且也喜欢打网球。",
          "不但我喜欢打网球，而且也妹妹喜欢打网球。",
          "我不但喜欢打网球，而且妹妹喜欢打网球不。",
          "不但我喜欢打网球，而且我妹妹也非常喜欢打网球。",
        ],
        answerIndex: 3,
        explanation:
          "When the two clauses have **different subjects** (`我` vs `我妹妹`), `不但` sits **BEFORE Subject 1** and `而且` sits **BEFORE Subject 2**: `不但我喜欢打网球，而且我妹妹也非常喜欢打网球`!",
        hints: [
          "Same subject → Subject + 不但…，而且…. Different subjects → 不但 + Subject 1…，而且 + Subject 2…!",
          "Check where 也 sits relative to 我妹妹 (always AFTER the subject!).",
        ],
      },
      {
        id: "igcse-bridge-grammar-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "igcse-connectives-writing",
        question:
          "Which closing line would earn top IGCSE marks for **Future Frame + Conditional Connective + Register** in an email to a Chinese pen pal?",
        options: [
          "再见吧，明年有空我再写信告诉你新加坡的天气，明天见！",
          "如果你明年暑假来新加坡旅游，我就带你去牛车水吃美食，希望很快收到你的回信！",
          "明年来新加坡旅游，就我带你去吃美食在牛车水，希望很快见你，拜拜！",
          "如果明年暑假你来新加坡旅游了，所以我去牛车水跟你吃美食，再见啦！",
        ],
        answerIndex: 1,
        explanation:
          "`如果你明年暑假来新加坡旅游，我就带你去牛车水吃美食，希望很快收到你的回信！` combines `如果…，我就…` (correct subject before `就`), future time (`明年暑假`), natural STPVO, and an authentic email sign-off (`希望很快收到你的回信`).",
        hints: [
          "Check for: Subject BEFORE 就, no *如果…所以…*, Place before Verb, and warm pen-pal sign-off.",
          "Look for 希望很快收到你的回信 ('Hope to receive your reply soon!').",
        ],
      },
      {
        id: "igcse-bridge-grammar-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "igcse-connectives-writing",
        question:
          "Read: `为了准备明年的IGCSE中文考试，我打算从下个星期开始，每天晚上在书房里一边听中文播客，一边练习写汉字。` Which THREE grammar structures appear in this single sentence?",
        options: [
          "Comparison 比, experiential 过, and ongoing 正在…呢",
          "Negation 没, sequence 最后, and concession 虽然…但是…",
          "Purpose 为了, future plan 打算 + STPVO, and simultaneous 一边…一边…",
          "Conditional 如果…就…, duration verb-copy, and addition 不但…而且…",
        ],
        answerIndex: 2,
        explanation:
          "The sentence layers three Band-A structures cleanly: `为了` (in order to / purpose), `打算` + Time (`每天晚上`) + Place (`在书房里`) before the verb (Future + STPVO), and `一边…一边…` (doing two actions simultaneously).",
        hints: [
          "Spot the three highlighted structural markers: 为了, 打算 + 每天晚上在书房里, and 一边…一边….",
          "Eliminate any option mentioning 比, 过, 虽然, or 如果 (none appear in the sentence!).",
        ],
      },
    ],
  },
];
