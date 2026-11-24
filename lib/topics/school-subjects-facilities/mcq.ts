// Audited MCQ bank for Year 9 Mandarin Chinese — School Subjects & Facilities (学校科目与设施)
// 3 papers × 15 MCQs = 45 MCQs. Simplified Chinese with tone-marked Pinyin throughout.
import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "school-subjects-facilities-m1",
    title: "MCQ Paper 1 — Subjects, Measure Words & Timetables",
    questions: [
      {
        id: "school-subjects-facilities-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "school-subjects-opinions",
        question: "Which measure word correctly completes **九年级我们学习十___科目** (In Year 9 we study ten subjects)?",
        options: ["门 (mén)", "节 (jié)", "只 (zhī)", "条 (tiáo)"],
        answerIndex: 0,
        hints: [
          "Are we counting whole subjects across the curriculum, or single periods on a daily timetable?",
          "Whole subjects/courses take the 'doorway' classifier.",
        ],
        explanation:
          "Whole school subjects and courses take **门 (mén)**: **十门科目** (*ten subjects*). **节 (jié)** is for individual timetable periods (**六节课**), while **只** and **条** are for animals.",
      },
      {
        id: "school-subjects-facilities-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "school-subjects-opinions",
        question: "What are the three Science subjects **生物 (shēngwù)**, **化学 (huàxué)**, and **物理 (wùlǐ)** in that exact order?",
        options: [
          "Physics, Biology, Chemistry",
          "Chemistry, Physics, Biology",
          "Biology, Chemistry, Physics",
          "Geography, Chemistry, Biology",
        ],
        answerIndex: 2,
        hints: [
          "生 (shēng) means life/living — which science studies living things?",
          "化 (huà) means chemical change/transformation; 物理 studies physical laws.",
        ],
        explanation:
          "**生物 (shēngwù)** = **Biology**, **化学 (huàxué)** = **Chemistry**, and **物理 (wùlǐ)** = **Physics**.",
      },
      {
        id: "school-subjects-facilities-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "school-subjects-opinions",
        question: "Which Pinyin reading of **音乐** (Music) is completely accurate?",
        options: ["yīnlè", "yīnyuè", "yīnyào", "yíngyuè"],
        answerIndex: 1,
        hints: [
          "Watch the polyphone 乐: it is pronounced lè in 快乐 (happy), NOT in Music!",
          "In Music, 乐 is read with a y- initial and 4th tone.",
        ],
        explanation:
          "In **音乐 (Music)**, the character **乐** is read **yuè** (4th tone), giving **yīnyuè**. Saying *yīnlè* is a classic pronunciation error.",
      },
      {
        id: "school-subjects-facilities-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "school-subjects-opinions",
        question: "What school subject is **戏剧 (xìjù)**?",
        options: ["Geography", "Art & Design", "History", "Drama"],
        answerIndex: 3,
        hints: [
          "Students perform plays (表演话剧) in this subject.",
          "Geography is 地理, History is 历史, and Art is 艺术.",
        ],
        explanation:
          "**戏剧 (xìjù)** means **Drama / Theatre**. Geography is **地理**, Art is **艺术**, and History is **历史**.",
      },
      {
        id: "school-subjects-facilities-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "school-timetable",
        question: "Which measure word correctly completes **我们每天有六___课** (We have six lessons every day)?",
        options: ["节 (jié)", "门 (mén)", "个 (gè)", "张 (zhāng)"],
        answerIndex: 0,
        hints: [
          "Here we are counting individual lesson slots on a daily timetable.",
          "Think of a bamboo joint slicing the day into periods.",
        ],
        explanation:
          "Individual timetable periods take **节 (jié)**: **每天有六节课** (*six lessons every day*). **门** is used for whole subjects (**十门科目**).",
      },
      {
        id: "school-subjects-facilities-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-timetable",
        question: "Which sentence follows accurate Mandarin word order for *\"We have classes from 8:00 a.m. to 3:30 p.m.\"*?",
        options: [
          "我们上课从上午八点到下午三点半。",
          "我们上午八点上课到下午三点半从。",
          "我们从上午八点到下午三点半上课。",
          "从我们上午八点到下午三点半上课。",
        ],
        answerIndex: 2,
        hints: [
          "Treat 从……到…… as a Time phrase in STPVO word order.",
          "Place the entire 从上午八点到下午三点半 block BEFORE 上课.",
        ],
        explanation:
          "In Mandarin STPVO, **从上午八点到下午三点半** (Time) stands before the verb **上课**: **我们从上午八点到下午三点半上课**.",
      },
      {
        id: "school-subjects-facilities-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-timetable",
        question: "What does **午饭时间从十二点半到一点半** tell us?",
        options: [
          "School finishes from 12:30 to 1:30 every day.",
          "Morning break runs from 10:15 to 10:45 daily.",
          "Homework takes from 12:30 to 1:30 each afternoon.",
          "Lunchtime runs from 12:30 to 1:30.",
        ],
        answerIndex: 3,
        hints: [
          "午饭时间 (wǔfàn shíjiān) literally means 'lunch time'.",
          "十二点半 = 12:30; 一点半 = 1:30.",
        ],
        explanation:
          "**午饭时间** = lunchtime, **从十二点半到一点半** = from 12:30 to 1:30 — so **午饭时间从十二点半到一点半** means *Lunchtime runs from 12:30 to 1:30*.",
      },
      {
        id: "school-subjects-facilities-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-timetable",
        question: "How do you say *\"two afternoon lessons\"* accurately in Simplified Mandarin?",
        options: [
          "下午二节课 (xiàwǔ èr jié kè)",
          "下午两节课 (xiàwǔ liǎng jié kè)",
          "下午两门课 (xiàwǔ liǎng mén kè)",
          "下午二门课 (xiàwǔ èr mén kè)",
        ],
        answerIndex: 1,
        hints: [
          "Check BOTH rules: 2 before a measure word must be 两, and timetable lessons take 节.",
          "Eliminate anything using 二 or 门.",
        ],
        explanation:
          "Standalone 2 before a measure word is **两**, and single timetable lessons take **节**: **下午两节课 (xiàwǔ liǎng jié kè)**.",
      },
      {
        id: "school-subjects-facilities-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-timetable",
        question: "Which verb correctly completes **下午三点半___以后，我去参加课外活动** (After school finishes at 3:30 p.m., I join CCAs)?",
        options: ["放学 (fàngxué)", "上学 (shàngxué)", "上课 (shàngkè)", "选修 (xuǎnxiū)"],
        answerIndex: 0,
        hints: [
          "We need the verb for finishing the whole school day (at 3:30 p.m.).",
          "上学 means going to school; 上课 means starting a lesson.",
        ],
        explanation:
          "**放学 (fàngxué)** means *to finish school for the day*, so **下午三点半放学以后** means *after school finishes at 3:30 p.m.*",
      },
      {
        id: "school-subjects-facilities-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-subjects-opinions",
        question: "Which sentence accurately translates *\"I think Geography is very interesting, and Computing is very useful\"*?",
        options: [
          "我觉得历史很有趣，电脑很无聊。",
          "我觉得地理是很趣，电脑是有用。",
          "我觉得物理很容易，音乐很有用。",
          "我觉得地理很有趣，电脑很有用。",
        ],
        answerIndex: 3,
        hints: [
          "Check the subject nouns: Geography = 地理 (dìlǐ), Computing = 电脑 (diànnǎo).",
          "Check adjectives: interesting = 有趣 (yǒuqù), useful = 有用 (yǒuyòng), and NO 是 before adjectives!",
        ],
        explanation:
          "**我觉得地理很有趣，电脑很有用** accurately pairs **地理** (Geography) with **很有趣** and **电脑** (Computing) with **很有用**, without inserting **是**.",
      },
      {
        id: "school-subjects-facilities-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-facilities",
        question: "What is the key difference between **食堂 (shítáng)** and **礼堂 (lǐtáng)**?",
        options: [
          "食堂 is the science lab; 礼堂 is the computer room.",
          "食堂 is the library; 礼堂 is the sports hall.",
          "食堂 is the canteen; 礼堂 is the assembly hall.",
          "食堂 is the art studio; 礼堂 is the music room.",
        ],
        answerIndex: 2,
        hints: [
          "Look at the first character of each word: 食 (shí) relates to food; 礼 (lǐ) relates to ceremony.",
          "You eat lunch in 食堂 and attend Monday assembly in 礼堂.",
        ],
        explanation:
          "**食堂 (shítáng)** (with **食** = food) is the **canteen / dining hall**, whereas **礼堂 (lǐtáng)** (with **礼** = ceremony) is the **assembly hall / auditorium**.",
      },
      {
        id: "school-subjects-facilities-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-facilities",
        question: "Which sentence puts the campus facility in the right **STPVO** position for *\"We do experiments in the science lab\"*?",
        options: [
          "我们做实验在科学实验室。",
          "我们在科学实验室做实验。",
          "在科学实验室做实验我们。",
          "我们科学实验室在做实验。",
        ],
        answerIndex: 1,
        hints: [
          "STPVO requires 在 + Facility to sit directly BEFORE the verb (做实验).",
          "Subject (我们) → Place (在科学实验室) → Verb+Object (做实验).",
        ],
        explanation:
          "Following STPVO, **在科学实验室** stands right before **做实验**: **我们在科学实验室做实验**.",
      },
      {
        id: "school-subjects-facilities-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-subjects-teachers",
        question: "Which sentence correctly uses **比 (bǐ)** without the forbidden **很** trap?",
        options: [
          "我觉得数学比历史难一点儿。",
          "我觉得数学比历史很难一点儿。",
          "我觉得数学比历史非常难。",
          "我觉得数学很比历史难。",
        ],
        answerIndex: 0,
        hints: [
          "NEVER place 很 or 非常 before the adjective in a 比 sentence!",
          "To soften the comparison ('a little harder'), place 一点儿 AFTER the adjective.",
        ],
        explanation:
          "**我觉得数学比历史难一点儿** follows **A 比 B + Adj + 一点儿** cleanly with zero **很** or **非常**.",
      },
      {
        id: "school-subjects-facilities-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "comparing-subjects-teachers",
        question: "Choose the sentence that uses the right **de** particle for *\"Our Chinese teacher teaches very well\"*:",
        options: [
          "我们的中文老师教的很好。",
          "我们的中文老师教地很好。",
          "我们的中文老师教得很好。",
          "我们的中文老师很好得教。",
        ],
        answerIndex: 2,
        hints: [
          "Which particle sits directly AFTER a verb (教) to evaluate HOW the action is performed?",
          "的 links nouns, 地 precedes verbs, and 得 follows verbs!",
        ],
        explanation:
          "Evaluating a verb requires the degree complement **得 (de)** directly after **教**: **我们的中文老师教得很好 (jiāo de hěn hǎo)**.",
      },
      {
        id: "school-subjects-facilities-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "comparing-subjects-teachers",
        question: "Compare the tone of **教** in **教室 (classroom)** vs **教中文 (teach Chinese)**. Which Pinyin pair is accurate?",
        options: [
          "jiāoshì (1st) · jiào Zhōngwén (4th)",
          "jiāoshì (1st) · jiāo Zhōngwén (1st)",
          "jiàoshì (4th) · jiào Zhōngwén (4th)",
          "jiàoshì (4th) · jiāo Zhōngwén (1st)",
        ],
        answerIndex: 3,
        hints: [
          "教 is a famous polyphone: as a standalone action verb ('to teach'), it is 1st tone.",
          "Inside compounds like 教室 (classroom) and 教育 (education), it is 4th tone.",
        ],
        explanation:
          "**教室 (classroom)** is read 4th tone **jiàoshì**, whereas the verb **教 (to teach)** in **教中文** is read 1st tone **jiāo Zhōngwén**.",
      },
    ],
  },
  {
    id: "school-subjects-facilities-m2",
    title: "MCQ Paper 2 — Campus Tour, Facilities & Teacher Opinions",
    questions: [
      {
        id: "school-subjects-facilities-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "school-facilities",
        question: "Where on campus would you go to **借书 (borrow books)** and **复习 (revise)** quietly?",
        options: ["体育馆 (tǐyùguǎn)", "图书馆 (túshūguǎn)", "游泳池 (yóuyǒngchí)", "食堂 (shítáng)"],
        answerIndex: 1,
        hints: [
          "Look for the building containing 书 (shū — book)!",
          "体育馆 is sports hall, 游泳池 is pool, and 食堂 is canteen.",
        ],
        explanation:
          "**图书馆 (túshūguǎn)** means **library** (containing **书** = book), where students **借书** (borrow books) and revise quietly.",
      },
      {
        id: "school-subjects-facilities-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "school-facilities",
        question: "What does **游泳池在体育馆的对面** tell a visitor on a campus tour?",
        options: [
          "The swimming pool is upstairs from the sports hall.",
          "The swimming pool is inside the sports hall.",
          "The swimming pool is behind the canteen.",
          "The swimming pool is opposite the sports hall.",
        ],
        answerIndex: 3,
        hints: [
          "Decode 对面 (duìmiàn): 对 = facing, 面 = side/face.",
          "体育馆 = sports hall; 游泳池 = swimming pool.",
        ],
        explanation:
          "**对面 (duìmiàn)** means **opposite / across from**, so **游泳池在体育馆的对面** means *The swimming pool is opposite the sports hall*.",
      },
      {
        id: "school-subjects-facilities-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "school-facilities",
        question: "Which campus facility would students use for indoor basketball (**打篮球**) when it rains in Singapore?",
        options: ["体育馆 (tǐyùguǎn)", "音乐室 (yīnyuèshì)", "科学实验室 (kēxué shíyànshì)", "电脑室 (diànnǎoshì)"],
        answerIndex: 0,
        hints: [
          "Look for 体育 (PE/sport) + 馆 (large indoor hall).",
          "Music room, science lab, and computer room are not for basketball.",
        ],
        explanation:
          "**体育馆 (tǐyùguǎn)** is the **indoor sports hall / gymnasium**, ideal for playing basketball (**打篮球**) in rainy weather.",
      },
      {
        id: "school-subjects-facilities-m2-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "comparing-subjects-teachers",
        question: "What personality trait does **耐心 (nàixīn)** describe in **王老师对学生很有耐心**?",
        options: ["very strict", "very funny", "very patient", "very busy"],
        answerIndex: 2,
        hints: [
          "耐 (nài) = endure; 心 (xīn) = heart — someone who calmly helps you understand.",
          "Strict is 严格 and funny/humorous is 幽默.",
        ],
        explanation:
          "**耐心 (nàixīn)** means **patient / patience**, so **王老师对学生很有耐心** means *Teacher Wang is very patient with students*.",
      },
      {
        id: "school-subjects-facilities-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-subjects-teachers",
        question: "Which adjective describes a teacher who tells clever jokes and makes the whole class laugh?",
        options: ["严格 (yángé)", "幽默 (yōumò)", "无聊 (wúliáo)", "宽敞 (kuānchang)"],
        answerIndex: 1,
        hints: [
          "It is a phonetic loanword from English 'humour / humorous'!",
          "Listen to the Pinyin: yōumò.",
        ],
        explanation:
          "**幽默 (yōumò)** means **humorous / witty**. **严格** is strict, **无聊** is boring, and **宽敞** means spacious.",
      },
      {
        id: "school-subjects-facilities-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-facilities",
        question: "A student describes a new classroom as **又宽敞又明亮 (yòu kuānchang yòu míngliàng)**. What does this mean?",
        options: [
          "both quiet and small",
          "both noisy and crowded",
          "both old and dark",
          "both spacious and bright",
        ],
        answerIndex: 3,
        hints: [
          "宽 (kuān) = wide/broad → 宽敞 = spacious.",
          "明 (míng) = bright (sun 日 + moon 月) → 明亮 = bright/well-lit.",
        ],
        explanation:
          "**宽敞 (kuānchang)** = spacious and **明亮 (míngliàng)** = bright/well-lit, so **又宽敞又明亮** means *both spacious and bright*.",
      },
      {
        id: "school-subjects-facilities-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-timetable",
        question: "Read: **星期二上午第一节课是中文，第二节课是化学，十点一刻是课间休息。** What happens at 10:15 a.m. on Tuesday?",
        options: [
          "morning break / recess",
          "Chemistry in the lab",
          "Chinese Period 1",
          "lunch in the canteen",
        ],
        answerIndex: 0,
        hints: [
          "十点一刻 (shí diǎn yí kè) = 10:15.",
          "课间休息 (kèjiān xiūxi) means break/recess between classes.",
        ],
        explanation:
          "**十点一刻** is 10:15, and **课间休息 (kèjiān xiūxi)** means **morning break / recess**.",
      },
      {
        id: "school-subjects-facilities-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-facilities",
        question: "Which room should a student visit if they get a headache during Period 3 (**如果上课时头疼**)?",
        options: ["戏剧室 (xìjùshì)", "音乐室 (yīnyuèshì)", "保健室 (bǎojiànshì)", "电脑室 (diànnǎoshì)"],
        answerIndex: 2,
        hints: [
          "Look for 健 (jiàn — health, as in 健康).",
          "保 (protect) + 健 (health) + 室 (room) = medical room / school clinic.",
        ],
        explanation:
          "**保健室 (bǎojiànshì)** is the **medical room / school clinic** (**保健** = healthcare). The others are drama studio, music room, and computer room.",
      },
      {
        id: "school-subjects-facilities-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-subjects-teachers",
        question: "How do you express *\"Art is not as difficult as Physics\"* using Mandarin's negative comparison pattern?",
        options: [
          "艺术不比物理很困难。",
          "艺术没有物理那么难。",
          "艺术比物理没有难。",
          "艺术最没有物理难。",
        ],
        answerIndex: 1,
        hints: [
          "Negating A 比 B + Adj uses A 没有 B (那么) + Adj.",
          "Art = 艺术 (yìshù); Physics = 物理 (wùlǐ); difficult = 难 (nán).",
        ],
        explanation:
          "The standard *not as … as* pattern is **A 没有 B (那么) + Adj**: **艺术没有物理那么难** (*Art is not as difficult as Physics*).",
      },
      {
        id: "school-subjects-facilities-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-subjects-opinions",
        question: "Read: **我比较擅长中文和地理，不太擅长物理。** What does **擅长 (shàncháng)** express?",
        options: [
          "to be good at a subject or skill",
          "to dislike a strict school teacher",
          "to forget homework at home",
          "to revise before an autumn exam",
        ],
        answerIndex: 0,
        hints: [
          "Notice the contrast: 比较擅长 (fairly ___) vs 不太擅长 (not very ___).",
          "擅长 + subject/skill is a high-band IGCSE verb.",
        ],
        explanation:
          "**擅长 (shàncháng)** means **to be good at**, so the speaker is fairly good at Chinese and Geography, and not very good at Physics.",
      },
      {
        id: "school-subjects-facilities-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-timetable",
        question: "Which verb naturally pairs with **课外活动 (extracurricular activities / CCAs)**?",
        options: ["借 (jiè)", "喂 (wèi)", "穿 (chuān)", "参加 (cānjiā)"],
        answerIndex: 3,
        hints: [
          "We need the verb meaning 'to join / take part in' an activity or club.",
          "借 = borrow, 喂 = feed, 穿 = wear.",
        ],
        explanation:
          "**参加 (cānjiā)** means *to take part in / join*: **放学后我参加课外活动** (*After school I join CCAs*).",
      },
      {
        id: "school-subjects-facilities-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-facilities",
        question: "Read: **电脑室在科学实验室的楼上，里面有三十台很先进的电脑。** Which statement is true?",
        options: [
          "The computer room is opposite the swimming pool.",
          "There are thirteen old computers in the science lab.",
          "The computer room is upstairs from the science lab with 30 advanced computers.",
          "The science lab is upstairs from the computer room with 30 desks.",
        ],
        answerIndex: 2,
        hints: [
          "Check A 在 B 的楼上: A (电脑室) is UPSTAIRS from B (科学实验室).",
          "三十台很先进的电脑 = thirty very advanced computers.",
        ],
        explanation:
          "**电脑室在科学实验室的楼上** places the computer room **upstairs from the science lab**, and **三十台很先进的电脑** tells us there are **30 very advanced computers** inside.",
      },
      {
        id: "school-subjects-facilities-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "comparing-subjects-teachers",
        question: "Which sentence uses **虽然……，但是……** and **教得很好** cleanly about a strict Maths teacher?",
        options: [
          "因为数学老师有点儿严格，但是他教的很好。",
          "虽然数学老师有点儿严格，但是他教得很好。",
          "虽然数学老师严格有点儿，所以他教得很好。",
          "数学老师有点儿严格虽然，但是他很好教得。",
        ],
        answerIndex: 1,
        hints: [
          "Check three grammar points at once: 虽然↔但是 pairing, 有点儿 BEFORE 严格, and 教得很好 with 得!",
          "Eliminate any choice using 因为…但是, 虽然…所以, or 教的很好.",
        ],
        explanation:
          "**虽然数学老师有点儿严格，但是他教得很好** gets all three rules right: **虽然……但是……**, **有点儿严格**, and **教得很好** (with **得**).",
      },
      {
        id: "school-subjects-facilities-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "school-timetable",
        question: "Read: **我每天早上七点十五分坐校车去上学，下午四点半参加完羽毛球课外活动才回家。** When does the writer go home?",
        options: [
          "at 4:30 p.m., after finishing badminton CCA",
          "at 7:15 a.m., before taking the school bus",
          "at 3:30 p.m., straight after Period 6 ends",
          "at 12:30 p.m., right after canteen lunch",
        ],
        answerIndex: 0,
        hints: [
          "Look at the second clause: 下午四点半参加完羽毛球课外活动才回家.",
          "羽毛球 = badminton; 参加完 = after finishing participating in; 才回家 = only then goes home.",
        ],
        explanation:
          "**下午四点半参加完羽毛球课外活动才回家** specifies that the student goes home at **4:30 p.m., after finishing badminton CCA**.",
      },
      {
        id: "school-subjects-facilities-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "school-subjects-opinions",
        question: "Read: **明年十年级我打算选修中文、地理和计算机，因为这三门课既有趣又实用。** What does **选修 (xuǎnxiū)** mean here?",
        options: [
          "to drop a difficult subject before exams",
          "to borrow three textbooks from the library",
          "to choose elective subjects for Year 10",
          "to teach younger students after school",
        ],
        answerIndex: 2,
        hints: [
          "选 (xuǎn) = choose/select; 修 (xiū) = study a course.",
          "The student is planning ahead for 明年十年级 (next year in Year 10).",
        ],
        explanation:
          "**选修 (xuǎnxiū)** means **to choose as an elective / IGCSE option**, and **这三门课** uses **门** to refer to the three chosen subjects.",
      },
    ],
  },
  {
    id: "school-subjects-facilities-m3",
    title: "MCQ Paper 3 — Reading Comprehension & IGCSE School Life",
    questions: [
      {
        id: "school-subjects-facilities-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-timetable",
        question: "Read: **星期四上午我们有四节课：英文、数学、物理和中文；下午有两节体育课。** How many lessons does the student have on Thursday in total?",
        options: ["four lessons", "five lessons", "six lessons", "seven lessons"],
        answerIndex: 2,
        hints: [
          "Add morning lessons (上午有四节课) and afternoon lessons (下午有两节体育课).",
          "4 + 2 = ?",
        ],
        explanation:
          "Four morning lessons (**四节课**) plus two afternoon PE lessons (**两节体育课**) equals **six lessons** (**六节课**) on Thursday.",
      },
      {
        id: "school-subjects-facilities-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-facilities",
        question: "Read: **我们学校虽然没有足球场那么大的操场，但是有一个五十米长的游泳池和一个非常现代的图书馆。** What two facilities does the school definitely have?",
        options: [
          "a 50-metre swimming pool and a very modern library",
          "a huge football stadium and an old dining hall",
          "two indoor sports halls and a horse riding field",
          "a brand-new medical clinic and thirty music rooms",
        ],
        answerIndex: 0,
        hints: [
          "Look after 但是有 (but it has…): 五十米长的游泳池 and 非常现代的图书馆.",
          "游泳池 = swimming pool; 图书馆 = library.",
        ],
        explanation:
          "After **但是有**, the text explicitly names **一个五十米长的游泳池** (a 50-metre swimming pool) and **一个非常现代的图书馆** (a very modern library).",
      },
      {
        id: "school-subjects-facilities-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-subjects-teachers",
        question: "Read: **我觉得中文比西班牙文难一点儿，但是学中文在新加坡比学西班牙文更有用。** Which statement matches the speaker's view?",
        options: [
          "Spanish is harder and much more useful in Singapore.",
          "Chinese is easier than Spanish and less useful locally.",
          "Both Chinese and Spanish are completely boring to study.",
          "Chinese is a bit harder than Spanish, yet more useful in Singapore.",
        ],
        answerIndex: 3,
        hints: [
          "First clause: 中文比西班牙文难一点儿 (Chinese is a little harder than Spanish).",
          "Second clause: 在新加坡比学西班牙文更有用 (more useful in Singapore).",
        ],
        explanation:
          "The speaker thinks Chinese is **难一点儿** (*a little harder*) than Spanish, yet (**但是**) **更有用** (*even more useful*) in Singapore.",
      },
      {
        id: "school-subjects-facilities-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-timetable",
        question: "Read: **虽然每天晚上要做差不多一个小时的作业，但是只要按时完成，考试前压力就不大。** How does the writer avoid exam stress?",
        options: [
          "by skipping extracurricular clubs every afternoon",
          "by finishing homework on time each day",
          "by choosing fewer than five school subjects",
          "by studying only on Sunday afternoons",
        ],
        answerIndex: 1,
        hints: [
          "Focus on 只要按时完成，考试前压力就不大.",
          "按时完成 = complete on time; 压力不大 = not much pressure/stress.",
        ],
        explanation:
          "**只要按时完成，考试前压力就不大** means *as long as you finish homework on time, there isn't much stress before exams*.",
      },
      {
        id: "school-subjects-facilities-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-facilities",
        question: "Which sentence correctly uses **有** (existence) vs **在** (location) on a campus map?",
        options: [
          "图书馆在三百本中文书。",
          "三百本中文书在图书馆有。",
          "图书馆里有很多中文书，我的同学正在图书馆里看书。",
          "很多中文书有在图书馆里，同学看书在图书馆里。",
        ],
        answerIndex: 2,
        hints: [
          "Existence pattern: Place + 有 + Thing (图书馆里有很多中文书).",
          "Ongoing action in a place: Subject + 正在 + 在 Place + Verb (同学正在图书馆里看书).",
        ],
        explanation:
          "**图书馆里有很多中文书** uses **Place + 有 + Thing** for existence, and **我的同学正在图书馆里看书** places **在图书馆里** before **看书**.",
      },
      {
        id: "school-subjects-facilities-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-subjects-opinions",
        question: "Which sentence uses BOTH **门** and **节** accurately in the same sentence?",
        options: [
          "我学习九门科目，每天上六节课。",
          "我学习九节科目，每天上六门课。",
          "我学习九门科目，每天上六门课。",
          "我学习九个科目，每天上六个课。",
        ],
        answerIndex: 0,
        hints: [
          "Whole subjects (科目) → 门; daily timetable periods (课) → 节.",
          "Match 九___科目 with 门, and 六___课 with 节!",
        ],
        explanation:
          "**我学习九门科目，每天上六节课** separates **九门科目** (nine whole subjects) from **六节课** (six daily lessons) with total accuracy.",
      },
      {
        id: "school-subjects-facilities-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-subjects-teachers",
        question: "Read: **历史老师虽然布置的作业不少，但是他讲故事特别生动，大家都很喜欢上他的课。** Why do students enjoy the History teacher's classes?",
        options: [
          "He never sets any written homework at all.",
          "He tells historical stories in a very vivid way.",
          "He cancels lessons whenever it rains outside.",
          "He lets everyone play games in the ICT suite.",
        ],
        answerIndex: 1,
        hints: [
          "Note 作业不少 (not a small amount of homework = quite a lot!), then look after 但是.",
          "讲故事特别生动 = tells stories especially vividly.",
        ],
        explanation:
          "Although he sets quite a lot of homework (**作业不少**), **他讲故事特别生动** (*he tells stories especially vividly*), so everyone loves his lessons.",
      },
      {
        id: "school-subjects-facilities-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "school-timetable",
        question: "A Tanglin student writes: *\"Every Friday morning from 8:15 to 9:15 I have Biology in the science lab.\"* Which Mandarin sentence has flawless STPVO order?",
        options: [
          "我上生物课在科学实验室每个星期五从八点一刻到九点一刻。",
          "每个星期五我上生物课从八点一刻到九点一刻在科学实验室。",
          "我在科学实验室上生物课每个星期五上午从八点一刻到九点一刻。",
          "每个星期五上午，我从八点一刻到九点一刻在科学实验室上生物课。",
        ],
        answerIndex: 3,
        hints: [
          "Big-to-small Time first: 每个星期五上午 + 从八点一刻到九点一刻.",
          "Place (在科学实验室) comes AFTER Time and BEFORE the verb (上生物课).",
        ],
        explanation:
          "**每个星期五上午，我从八点一刻到九点一刻在科学实验室上生物课** keeps **Time → Place → Verb+Object** in textbook STPVO order.",
      },
      {
        id: "school-subjects-facilities-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "comparing-subjects-teachers",
        question: "Which sentence accurately says *\"My Chinese grades improved much faster this term than last term\"*?",
        options: [
          "这个学期我的中文成绩比上个学期很提高。",
          "这个学期我的中文成绩提高比上个学期非常快。",
          "这个学期我的中文成绩比上个学期提高得快得多。",
          "这个学期我的中文成绩没有上个学期提高很慢。",
        ],
        answerIndex: 2,
        hints: [
          "Combine two Band-A rules: A 比 B (NO 很!) + Verb + 得 + Adj + 得多.",
          "提高 (tígāo) = improve; 快得多 = much faster.",
        ],
        explanation:
          "**这个学期我的中文成绩比上个学期提高得快得多** combines **比** (without **很**) and the degree complement **提高得快得多** (*improved much faster*).",
      },
      {
        id: "school-subjects-facilities-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "school-facilities",
        question: "Read: **礼堂就在食堂的后面，音乐室在礼堂的左边，艺术室在礼堂的右边。** Which building stands directly in the middle between the music room and the art room?",
        options: ["the canteen (食堂)", "the assembly hall (礼堂)", "the library (图书馆)", "the sports hall (体育馆)"],
        answerIndex: 1,
        hints: [
          "Sketch it: 音乐室 is to the LEFT of 礼堂, and 艺术室 is to the RIGHT of 礼堂.",
          "So which hall sits right between 音乐室 and 艺术室?",
        ],
        explanation:
          "Since **音乐室** is to the left of **礼堂** and **艺术室** is to the right of **礼堂**, the **assembly hall (礼堂)** stands right in the middle.",
      },
      {
        id: "school-subjects-facilities-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "school-subjects-opinions",
        question: "Which sentence uses **除了……以外，还……** accurately for *\"Besides Chinese, I also study Spanish\"*?",
        options: [
          "除了中文以外，我还学习西班牙文。",
          "除了中文以外，我但是学习西班牙文。",
          "除了中文，所以我也学习西班牙文。",
          "以外除了中文，我还学习西班牙文。",
        ],
        answerIndex: 0,
        hints: [
          "Frame: 除了 + X + 以外，Subject + 还 / 也 + Verb + Y.",
          "Check that 除了 comes first and 以外 closes the phrase, followed by 还.",
        ],
        explanation:
          "**除了中文以外，我还学习西班牙文** correctly uses **除了……以外，……还……** to express *in addition to Chinese, I also study Spanish*.",
      },
      {
        id: "school-subjects-facilities-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "comparing-subjects-teachers",
        question: "Read: **在唐林读书虽然作业不少，但是因为设施很先进、老师又友善又耐心，所以我非常喜欢我的学校生活。** Which reason is NOT given for loving Tanglin school life?",
        options: [
          "The campus facilities are very advanced.",
          "The teachers are both friendly and patient.",
          "The school environment is positive despite homework.",
          "There is zero homework given on any weekday.",
        ],
        answerIndex: 3,
        hints: [
          "Check 作业不少 carefully — does 不少 mean 'none' or 'quite a lot'?",
          "不少 literally means 'not few' (= quite a lot)!",
        ],
        explanation:
          "**作业不少** means there is *quite a lot of homework*, so saying **there is zero homework given on any weekday** directly contradicts the text.",
      },
      {
        id: "school-subjects-facilities-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "school-timetable",
        question: "What time span is **从差一刻九点到十点一刻**, and how long is it?",
        options: [
          "8:15 to 10:15 — two hours",
          "9:15 to 10:45 — one and a half hours",
          "8:45 to 10:15 — one and a half hours",
          "8:45 to 10:45 — two hours",
        ],
        answerIndex: 2,
        hints: [
          "差一刻九点 = a quarter to nine (8:45).",
          "十点一刻 = a quarter past ten (10:15). Find the duration between 8:45 and 10:15!",
        ],
        explanation:
          "**差一刻九点** is **8:45** and **十点一刻** is **10:15**, giving a span of **one and a half hours** (**一个半小时**).",
      },
      {
        id: "school-subjects-facilities-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "school-facilities",
        question: "Which sentence accurately says *\"Our campus is not only big and clean, but also has a 50-metre swimming pool\"*?",
        options: [
          "我们的校园不但大干净，但是有五十米游泳池。",
          "我们的校园虽然又大又干净，而且有一个五十米长的游泳池。",
          "我们的校园因为又大又干净，所以有五十米长的游泳池。",
          "我们的校园不但又大又干净，而且有一个五十米长的游泳池。",
        ],
        answerIndex: 3,
        hints: [
          "'Not only … but also …' requires 不但……，而且…… (never 虽然…而且 or 不但…但是).",
          "Combine 又大又干净 with 而且有一个五十米长的游泳池.",
        ],
        explanation:
          "**我们的校园不但又大又干净，而且有一个五十米长的游泳池** cleanly pairs **不但……而且……** with **又大又干净**.",
      },
      {
        id: "school-subjects-facilities-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "comparing-subjects-teachers",
        question: "Which closing sentence best adds a future time frame to a Year 9 essay about school subjects?",
        options: [
          "昨天午饭时间，我在学校食堂和朋友一起吃了一盘好吃的鸡饭。",
          "明年十年级我打算选修中文和物理，希望将来能考出好成绩。",
          "我们每天从上午八点到下午三点半上课，每天一共有六节课。",
          "我们学校的新图书馆在体育馆的旁边，里面有很多中文书。",
        ],
        answerIndex: 1,
        hints: [
          "Look for future markers: 明年 (next year), 打算 (plan to), 希望将来 (hope in the future).",
          "昨天 is past, and 每天 / 在……旁边 are present.",
        ],
        explanation:
          "**明年十年级我打算选修中文和物理，希望将来能考出好成绩** adds a crisp future time frame (**明年**, **打算选修**, **将来**) — essential for Band A IGCSE writing.",
      },
    ],
  },
];
