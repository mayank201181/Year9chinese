import type { ExamPaper } from "../types.ts";

const PET_CARE_CARD_SVG =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pet profile and daily care schedule for puppy Maomao showing feeding at 07:00, park walk blank at 16:30, bath and play on weekends, and vet checkup every six months">' +
  '<rect x="10" y="10" width="540" height="230" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>' +
  '<rect x="24" y="22" width="512" height="44" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="280" y="42" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">宠物照顾表 (Chǒngwù Zhàogùbiǎo — Pet Care Card)</text>' +
  '<text x="280" y="59" text-anchor="middle" font-size="11" fill="var(--ink-2)">小狗：毛毛 (2岁) · 白色的毛，大耳朵，很活泼</text>' +
  '<rect x="24" y="78" width="248" height="70" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4"/>' +
  '<text x="40" y="102" font-size="12" font-weight="700" fill="var(--brand)">07:00 早上</text>' +
  '<text x="40" y="124" font-size="12.5" fill="var(--ink)">喂狗粮、换干净的水</text>' +
  '<text x="40" y="140" font-size="10.5" fill="var(--ink-2)">wèi gǒuliáng (feed dog food)</text>' +
  '<rect x="288" y="78" width="248" height="70" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.8"/>' +
  '<text x="304" y="102" font-size="12" font-weight="700" fill="var(--brand)">16:30 放学后</text>' +
  '<text x="304" y="124" font-size="12.5" font-weight="700" fill="var(--ink)">去公园 [ ??? ]</text>' +
  '<text x="304" y="140" font-size="10.5" fill="var(--brand)">walk the dog (2 characters)</text>' +
  '<rect x="24" y="160" width="248" height="66" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4"/>' +
  '<text x="40" y="183" font-size="12" font-weight="700" fill="var(--good)">周末 (zhōumò)</text>' +
  '<text x="40" y="204" font-size="12.5" fill="var(--ink)">洗澡 · 陪它玩儿</text>' +
  '<text x="40" y="219" font-size="10.5" fill="var(--ink-2)">xǐzǎo · péi tā wánr</text>' +
  '<rect x="288" y="160" width="248" height="66" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4"/>' +
  '<text x="304" y="183" font-size="12" font-weight="700" fill="var(--good)">每半年 (every 6 months)</text>' +
  '<text x="304" y="204" font-size="12.5" fill="var(--ink)">带它去看兽医</text>' +
  '<text x="304" y="219" font-size="10.5" fill="var(--ink-2)">dài tā qù kàn shòuyī</text>' +
  '</svg>';

const TIMETABLE_SVG =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Year 9 Mandarin timetable for Monday, Tuesday, and Wednesday showing four lessons, lunch, and after-school CCA">' +
  '<rect x="8" y="8" width="544" height="244" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>' +
  '<text x="280" y="30" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">九年级课程表 (Year 9 Timetable · Mon–Wed)</text>' +
  '<rect x="20" y="40" width="520" height="28" rx="5" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/>' +
  '<text x="86" y="59" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">时间 (Time)</text>' +
  '<text x="220" y="59" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">星期一 (Mon)</text>' +
  '<text x="348" y="59" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--brand)">星期二 (Tue)</text>' +
  '<text x="476" y="59" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">星期三 (Wed)</text>' +
  '<line x1="154" y1="40" x2="154" y2="242" stroke="var(--line)" stroke-width="1.2"/>' +
  '<line x1="284" y1="40" x2="284" y2="242" stroke="var(--line)" stroke-width="1.2"/>' +
  '<line x1="412" y1="40" x2="412" y2="242" stroke="var(--line)" stroke-width="1.2"/>' +
  '<line x1="20" y1="98" x2="540" y2="98" stroke="var(--line)" stroke-width="1"/>' +
  '<line x1="20" y1="128" x2="540" y2="128" stroke="var(--line)" stroke-width="1"/>' +
  '<line x1="20" y1="158" x2="540" y2="158" stroke="var(--line)" stroke-width="1"/>' +
  '<line x1="20" y1="184" x2="540" y2="184" stroke="var(--line)" stroke-width="1"/>' +
  '<line x1="20" y1="214" x2="540" y2="214" stroke="var(--line)" stroke-width="1"/>' +
  '<rect x="20" y="158" width="520" height="26" fill="var(--surface-2)"/>' +
  '<text x="86" y="88" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">08:00 第一节</text>' +
  '<text x="220" y="88" text-anchor="middle" font-size="11.5" fill="var(--ink)">中文</text>' +
  '<text x="348" y="88" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--ink)">数学</text>' +
  '<text x="476" y="88" text-anchor="middle" font-size="11.5" fill="var(--ink)">化学</text>' +
  '<text x="86" y="118" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">09:10 第二节</text>' +
  '<text x="220" y="118" text-anchor="middle" font-size="11.5" fill="var(--ink)">数学</text>' +
  '<text x="348" y="118" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--ink)">英文</text>' +
  '<text x="476" y="118" text-anchor="middle" font-size="11.5" fill="var(--ink)">地理</text>' +
  '<text x="86" y="148" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">10:30 第三节</text>' +
  '<text x="220" y="148" text-anchor="middle" font-size="11.5" fill="var(--ink)">生物</text>' +
  '<text x="348" y="148" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--ink)">体育</text>' +
  '<text x="476" y="148" text-anchor="middle" font-size="11.5" fill="var(--ink)">中文</text>' +
  '<text x="86" y="175" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--good)">11:30 午饭</text>' +
  '<text x="348" y="175" text-anchor="middle" font-size="11" font-weight="600" fill="var(--good)">食堂吃午饭 · 休息</text>' +
  '<text x="86" y="204" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">12:30 第四节</text>' +
  '<text x="220" y="204" text-anchor="middle" font-size="11.5" fill="var(--ink)">历史</text>' +
  '<text x="348" y="204" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--ink)">音乐</text>' +
  '<text x="476" y="204" text-anchor="middle" font-size="11.5" fill="var(--ink)">电脑</text>' +
  '<text x="86" y="232" text-anchor="middle" font-size="10.5" fill="var(--brand)">15:30 课外活动</text>' +
  '<text x="220" y="232" text-anchor="middle" font-size="11" fill="var(--ink)">篮球</text>' +
  '<text x="348" y="232" text-anchor="middle" font-size="11" font-weight="600" fill="var(--brand)">管弦乐团</text>' +
  '<text x="476" y="232" text-anchor="middle" font-size="11" fill="var(--ink)">游泳</text>' +
  '</svg>';

const CAMPUS_MAP_SVG =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="School campus map with Science Lab, Library, and Auditorium in the top row, Sports Field in the centre, and Classroom Block, Canteen, and Sports Hall with Swimming Pool in the bottom row">' +
  '<rect x="8" y="8" width="544" height="234" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>' +
  '<text x="280" y="30" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">学校设施平面图 (School Campus Map)</text>' +
  '<rect x="26" y="44" width="154" height="54" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="103" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">科学实验室</text>' +
  '<text x="103" y="86" text-anchor="middle" font-size="10" fill="var(--ink-2)">kēxué shíyànshì</text>' +
  '<rect x="202" y="44" width="156" height="54" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="280" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">图书馆</text>' +
  '<text x="280" y="86" text-anchor="middle" font-size="10" fill="var(--ink-2)">túshūguǎn</text>' +
  '<rect x="380" y="44" width="154" height="54" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="457" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">礼堂</text>' +
  '<text x="457" y="86" text-anchor="middle" font-size="10" fill="var(--ink-2)">lǐtáng</text>' +
  '<rect x="130" y="110" width="300" height="46" rx="22" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.8"/>' +
  '<text x="280" y="138" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--good)">大操场 / 运动场 (yùndòngchǎng)</text>' +
  '<rect x="26" y="170" width="154" height="54" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="103" y="194" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">教学楼 (教室)</text>' +
  '<text x="103" y="212" text-anchor="middle" font-size="10" fill="var(--ink-2)">jiàoshì</text>' +
  '<rect x="202" y="170" width="156" height="54" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="280" y="194" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">食堂</text>' +
  '<text x="280" y="212" text-anchor="middle" font-size="10" fill="var(--ink-2)">shítáng</text>' +
  '<rect x="380" y="170" width="154" height="54" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="457" y="194" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">体育馆 &amp; 游泳池</text>' +
  '<text x="457" y="212" text-anchor="middle" font-size="10" fill="var(--ink-2)">tǐyùguǎn &amp; yóuyǒngchí</text>' +
  '</svg>';

export const paper: ExamPaper = {
  id: "exam-2",
  title: "Year 9 Chinese Term 2 Mock Paper (Pets, School & Grammar)",
  calculator: false,
  minutes: 45,
  questions: [
    {
      id: "exam-2-q01",
      kind: "mcq",
      topicId: "pets",
      guideRef: "common-pets-measure-words",
      difficulty: "warmup",
      question:
        "Choose the exact pair of Mandarin animal measure words for **a goldfish** (`一___金鱼`) and **a horse** (`一___马`):",
      options: [
        "只 (zhī) and 条 (tiáo)",
        "条 (tiáo) and 匹 (pǐ)",
        "匹 (pǐ) and 只 (zhī)",
        "张 (zhāng) and 把 (bǎ)",
      ],
      answerIndex: 1,
      hints: [
        "Long, winding, or swimming animals like fish and snakes share one measure word.",
        "Horses have their own dedicated 3rd-tone measure word.",
      ],
      explanation:
        "Fish (`金鱼` jīnyú) and snakes (`蛇` shé) take `条` (tiáo), while horses (`马` mǎ) take `匹` (pǐ): `一条金鱼` and `一匹马`. `只` (zhī) is for dogs, cats, birds, rabbits, and tortoises.",
    },
    {
      id: "exam-2-q02",
      kind: "short",
      topicId: "pets",
      guideRef: "common-pets-measure-words",
      difficulty: "warmup",
      question:
        "Type the two-character Mandarin name (Simplified Hanzi or tone-marked Pinyin) for the small pet **hamster**.",
      answer: {
        type: "text",
        accept: ["仓鼠", "cāngshǔ"],
        display: "仓鼠 (cāngshǔ)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["兔子", "tùzi"] },
          feedback: "`兔子` (tùzi) means rabbit, not hamster.",
        },
        {
          spec: { type: "text", accept: ["乌龟", "wūguī"] },
          feedback: "`乌龟` (wūguī) means tortoise/turtle, not hamster.",
        },
      ],
      hints: [
        "Literally 'granary mouse' — `仓` (cāng) + `鼠` (shǔ).",
        "1st tone followed by 3rd tone: `cāngshǔ`.",
      ],
      solution: [
        "Hamster is `仓鼠` (cāngshǔ), taking measure word `只`: `一只仓鼠`.",
        "Compare with `兔子` (tùzi — rabbit) and `乌龟` (wūguī — tortoise).",
      ],
      commonError: "Writing `老鼠` (lǎoshǔ — ordinary mouse/rat) instead of `仓鼠` (cāngshǔ — pet hamster).",
    },
    {
      id: "exam-2-q03",
      kind: "mcq",
      topicId: "school-subjects-facilities",
      guideRef: "school-subjects-opinions",
      difficulty: "warmup",
      question:
        "Which Mandarin measure word specifically counts **school subjects / courses** in `我今年学九___科目`?",
      options: [
        "张 (zhāng)",
        "把 (bǎ)",
        "只 (zhī)",
        "门 (mén)",
      ],
      answerIndex: 3,
      hints: [
        "Literally the character for 'door / gateway', used for branches of study or languages.",
        "2nd tone, matching `九___科目` (jiǔ ___ kēmù).",
      ],
      explanation:
        "School subjects and academic disciplines take `门` (mén): `九门科目` (nine subjects) or `一门外语` (a foreign language). `张`, `把`, and `只` count flat objects, gripped objects, and animals.",
    },
    {
      id: "exam-2-q04",
      kind: "short",
      topicId: "school-subjects-facilities",
      guideRef: "school-subjects-opinions",
      difficulty: "warmup",
      question:
        "Type the two-character Mandarin school subject name (Simplified Hanzi or tone-marked Pinyin) for **Geography**.",
      answer: {
        type: "text",
        accept: ["地理", "dìlǐ"],
        display: "地理 (dìlǐ)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["历史", "lìshǐ"] },
          feedback: "`历史` (lìshǐ) means History, not Geography.",
        },
        {
          spec: { type: "text", accept: ["物理", "wùlǐ"] },
          feedback: "`物理` (wùlǐ) means Physics (patterns of matter), not Geography (patterns of the Earth).",
        },
      ],
      hints: [
        "Literally 'Earth' (`地`) + 'principles / patterns' (`理`).",
        "4th tone followed by 3rd tone: `dìlǐ`.",
      ],
      solution: [
        "`地` (dì — earth) + `理` (lǐ — study/principles) gives `地理` (dìlǐ — Geography).",
        "Compare with `物理` (wùlǐ — Physics) and `历史` (lìshǐ — History).",
      ],
      commonError: "Confusing `地理` (dìlǐ — Geography) with `物理` (wùlǐ — Physics).",
    },
    {
      id: "exam-2-q05",
      kind: "mcq",
      topicId: "pets",
      guideRef: "describing-pets",
      difficulty: "warmup",
      question:
        "Read the pet description:\n\n**「我家的小猫叫雪球，它性格很温顺，但是有时候也有点儿淘气。」**\n\nWhat do **温顺** (wēnshùn) and **淘气** (táoqì) mean?",
      options: [
        "gentle/docile, and naughty/mischievous",
        "noisy/loud, and extremely lazy",
        "shy/nervous, and constantly hungry",
        "brave/fast, and easily frightened",
      ],
      answerIndex: 0,
      hints: [
        "Notice `但是` (but) — `温顺` is a calm positive trait, while `有点儿淘气` is a playful negative trait.",
        "`温` (warm/gentle) hints at `温顺` (wēnshùn).",
      ],
      explanation:
        "`温顺` (wēnshùn) means gentle/docile/tame, and `淘气` (táoqì) means naughty/mischievous. `但是` contrasts the cat's usually gentle nature with occasionally being a bit naughty.",
    },
    {
      id: "exam-2-q06",
      kind: "short",
      topicId: "pets",
      guideRef: "caring-for-pets",
      difficulty: "core",
      diagram: PET_CARE_CARD_SVG,
      question:
        "Look at the pet care card (`宠物照顾表`). Type the exact two-character Mandarin verb-object phrase (Simplified Hanzi or tone-marked Pinyin) missing from the **16:30** box meaning **walk the dog**.",
      answer: {
        type: "text",
        accept: ["遛狗", "liùgǒu", "liù gǒu"],
        display: "遛狗 (liù gǒu)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["走路", "zǒulù"] },
          feedback: "`走路` means walking on foot yourself; taking a dog for a walk uses the specific verb `遛` (`遛狗`).",
        },
        {
          spec: { type: "text", accept: ["看狗", "kàngǒu", "kàn gǒu"] },
          feedback: "`看狗` means looking at a dog, not walking a dog.",
        },
      ],
      hints: [
        "Mandarin has a dedicated 4th-tone verb meaning 'to take an animal/pet for a stroll', followed by `狗`.",
        "Its Pinyin is `liù gǒu` (4th tone + 3rd tone).",
      ],
      solution: [
        "'To walk the dog' is `遛狗` (liù gǒu) — literally stroll-dog.",
        "Full schedule item: `每天放学后去公园遛狗。`",
      ],
      commonError: "Translating 'walk the dog' literally as `走狗` (which is an insult in Chinese!) instead of `遛狗`.",
    },
    {
      id: "exam-2-q07",
      kind: "mcq",
      topicId: "school-subjects-facilities",
      guideRef: "school-facilities",
      difficulty: "core",
      question:
        "Which school facility would Year 9 students go to for a **化学实验** (huàxué shíyàn — chemistry practical)?",
      options: [
        "大礼堂 (dà lǐtáng)",
        "学生食堂 (xuésheng shítáng)",
        "科学实验室 (kēxué shíyànshì)",
        "学校音乐室 (xuéxiào yīnyuèshì)",
      ],
      answerIndex: 2,
      hints: [
        "Spot the shared characters `实验` (shíyàn — experiment) in the question!",
        "`室` (shì) means room, so 'experiment room' = laboratory.",
      ],
      explanation:
        "`科学实验室` (kēxué shíyànshì) means science laboratory, where students carry out `化学实验` (chemistry experiments). `礼堂` is the auditorium/hall, `食堂` is the canteen, and `音乐室` is the music room.",
    },
    {
      id: "exam-2-q08",
      kind: "short",
      topicId: "pets",
      guideRef: "caring-for-pets",
      difficulty: "core",
      question:
        "Complete the sentence meaning *'If the puppy gets sick, we need to take it to see the **vet**'*:\n\n**「如果小狗生病了，我们要带它去看___。」**\n\nType the two-character Mandarin noun (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["兽医", "shòuyī"],
        display: "兽医 (shòuyī)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["医生", "yīshēng"] },
          feedback: "`医生` (yīshēng) is a doctor for humans — animals see a `兽医` (shòuyī, literally 'animal doctor').",
        },
      ],
      hints: [
        "Combine `兽` (shòu — beast/animal) with `医` (yī — doctor/medicine).",
        "4th tone + 1st tone: `shòuyī`.",
      ],
      solution: [
        "Human doctor = `医生` (yīshēng); animal doctor (vet) = `兽医` (shòuyī).",
        "Complete sentence: `如果小狗生病了，我们要带它去看兽医。`",
      ],
      commonError: "Writing `动物医生` or `医生` instead of the standard two-character noun `兽医` (shòuyī).",
    },
    {
      id: "exam-2-q09",
      kind: "mcq",
      topicId: "appearance-personality",
      guideRef: "comparing-people",
      difficulty: "core",
      question:
        "Read the comparison of two teachers:\n\n**「张老师跟李老师一样耐心，但是张老师比李老师幽默得多。」**\n\nWhich English summary is completely accurate?",
      options: [
        "Teacher Li is much more humorous than Teacher Zhang, and slightly more patient.",
        "Both teachers are equally patient, and Teacher Zhang is much more humorous.",
        "Teacher Zhang is less patient than Teacher Li, although a little more humorous.",
        "Neither teacher is patient, because both teachers are extremely strict in class.",
      ],
      answerIndex: 1,
      hints: [
        "`A 跟 B 一样 + adj` means A and B are equally [adj].",
        "`adj + 得多` (de duō) after a `比` comparison means 'much more [adj]'.",
      ],
      explanation:
        "`张老师跟李老师一样耐心` means Teacher Zhang and Teacher Li are equally patient (`一样耐心`). `张老师比李老师幽默得多` means Teacher Zhang is much more humorous (`幽默得多`) than Teacher Li.",
    },
    {
      id: "exam-2-q10",
      kind: "short",
      topicId: "igcse-bridge-grammar",
      guideRef: "stpvo-tenses-aspect",
      difficulty: "core",
      question:
        "Arrange these four chunks into a natural Mandarin sentence following **STPVO** (`Subject + Time + Place + Verb-Object`, Simplified Hanzi or tone-marked Pinyin):\n\n`在图书馆` · `做作业` · `每天放学后` · `我`",
      answer: {
        type: "text",
        accept: [
          "我每天放学后在图书馆做作业",
          "每天放学后我在图书馆做作业",
          "wǒ měitiān fàngxué hòu zài túshūguǎn zuò zuòyè",
          "měitiān fàngxué hòu wǒ zài túshūguǎn zuò zuòyè",
        ],
        display: "我每天放学后在图书馆做作业",
      },
      traps: [
        {
          spec: {
            type: "text",
            accept: ["我做作业在图书馆每天放学后", "wǒ zuò zuòyè zài túshūguǎn měitiān fàngxué hòu"],
          },
          feedback: "That is English word order! In Mandarin, Time (`每天放学后`) and Place (`在图书馆`) must go BEFORE the verb (`做作业`).",
        },
        {
          spec: {
            type: "text",
            accept: ["我在图书馆每天放学后做作业", "wǒ zài túshūguǎn měitiān fàngxué hòu zuò zuòyè"],
          },
          feedback: "Time (`每天放学后`) comes BEFORE Place (`在图书馆`): S → T → P → V → O.",
        },
      ],
      hints: [
        "Check the order: Subject (`我`) → Time (`每天放学后`) → Place (`在图书馆`) → Verb-Object (`做作业`).",
        "Unlike English, NEVER put `在图书馆` or `每天放学后` at the end of the sentence.",
      ],
      solution: [
        "Map each chunk to STPVO: S = `我`, T = `每天放学后`, P = `在图书馆`, VO = `做作业`.",
        "Combine in order: `我每天放学后在图书馆做作业。` (`每天放学后我在图书馆做作业` is also acceptable).",
      ],
      commonError: "Copying English word order (`I do homework in the library after school` → `我做作业在图书馆放学后`).",
    },
    {
      id: "exam-2-q11",
      kind: "mcq",
      topicId: "school-subjects-facilities",
      guideRef: "school-timetable",
      difficulty: "core",
      diagram: TIMETABLE_SVG,
      question:
        "Study the Year 9 timetable (`九年级课程表`). Which statement accurately describes **Tuesday (`星期二`)**?",
      options: [
        "Chinese is period one, Geography is period two, and swimming is after school.",
        "Chemistry is period one, Biology is period three, and basketball is after school.",
        "Maths is period two, History is period four, and lunch is in the auditorium.",
        "Maths is period one, PE is period three, and orchestra is the after-school CCA.",
      ],
      answerIndex: 3,
      hints: [
        "Read down the highlighted middle column headed `星期二 (Tue)`.",
        "Check `第一节` (`数学`), `第三节` (`体育`), and `15:30 课外活动` (`管弦乐团` — orchestra).",
      ],
      explanation:
        "In the `星期二` column, period 1 (`第一节`) is `数学` (Maths), period 2 is `英文`, period 3 (`第三节`) is `体育` (PE), period 4 is `音乐`, and the 15:30 CCA (`课外活动`) is `管弦乐团` (orchestra).",
    },
    {
      id: "exam-2-q12",
      kind: "short",
      topicId: "school-subjects-facilities",
      guideRef: "school-timetable",
      difficulty: "core",
      question:
        "Complete the time-span pattern meaning *'from 8:00 am to 3:30 pm'*:\n\n**「我们每天___上午八点___下午三点半上课。」**\n\nType the **two characters** of the pattern separated by a space (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["从 到", "从到", "cóng dào", "cóngdào"],
        display: "从…到 (cóng…dào)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["在 到", "在到", "zài dào"] },
          feedback: "'From A to B' starts with `从` (cóng — from), not `在` (zài — at).",
        },
        {
          spec: { type: "text", accept: ["离 到", "离到", "lí dào"] },
          feedback: "`离` expresses distance between two places, whereas `从…到…` expresses a span from A to B.",
        },
      ],
      hints: [
        "The first character means 'from' (2nd tone) and the second means 'to / until' (4th tone).",
        "Recall the Year 9 timetable formula: `___ A ___ B` (`cóng...dào...`).",
      ],
      solution: [
        "`从…到…` (cóng...dào...) means 'from ... to ...' for both time and distance.",
        "Complete sentence: `我们每天从上午八点到下午三点半上课。`",
      ],
      commonError: "Using `在…到…` instead of `从…到…`.",
    },
    {
      id: "exam-2-q13",
      kind: "mcq",
      topicId: "pets",
      guideRef: "reasons-for-against-pets",
      difficulty: "core",
      question:
        "Choose the correct paired connective to complete this balanced pet opinion:\n\n**「___养狗每天都要花时间照顾它，___它能给我们带来很多快乐。」**",
      options: [
        "因为…所以… (yīnwèi…suǒyǐ…)",
        "不但…而且… (búdàn…érqiě…)",
        "虽然…但是… (suīrán…dànshì…)",
        "如果…就… (rúguǒ…jiù…)",
      ],
      answerIndex: 2,
      hints: [
        "Clause 1 gives a drawback (takes daily time to care for it); Clause 2 gives a positive contrast (brings lots of joy).",
        "Which Mandarin pair means 'although ... yet/but ...'?",
      ],
      explanation:
        "`虽然…但是…` (suīrán...dànshì... — although... yet/but...) joins a drawback (`每天都要花时间照顾它`) with a contrasting benefit (`能给我们带来很多快乐`). Unlike English, Mandarin uses BOTH `虽然` and `但是` in the same sentence.",
    },
    {
      id: "exam-2-q14",
      kind: "short",
      topicId: "school-subjects-facilities",
      guideRef: "comparing-subjects-teachers",
      difficulty: "core",
      question:
        "Translate **'I think Maths is harder than History'** into Mandarin starting with `我觉得` (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: [
          "我觉得数学比历史难",
          "我觉得数学比历史更难",
          "wǒ juéde shùxué bǐ lìshǐ nán",
          "wǒ juéde shùxué bǐ lìshǐ gèng nán",
        ],
        display: "我觉得数学比历史难 (wǒ juéde shùxué bǐ lìshǐ nán)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["我觉得数学比历史很难", "wǒ juéde shùxué bǐ lìshǐ hěn nán"] },
          feedback: "Never put `很` after `比`! Use `比历史难` or `比历史更难`.",
        },
        {
          spec: { type: "text", accept: ["我觉得历史比数学难", "wǒ juéde lìshǐ bǐ shùxué nán"] },
          feedback: "Check the subject order — `历史比数学难` says History is harder than Maths!",
        },
      ],
      hints: [
        "Maths = `数学` (shùxué), History = `历史` (lìshǐ), hard = `难` (nán).",
        "Follow `我觉得 + A + 比 + B + Adjective` with NO `很`.",
      ],
      solution: [
        "Map the terms: `我觉得` (I think) + `数学` (Maths) + `比` + `历史` (History) + `难` (hard).",
        "Result: `我觉得数学比历史难。` (`更难` for 'even harder' is also valid).",
      ],
      commonError: "Inserting `很` (`比历史很难`) or mixing up `历史` and `地理`.",
    },
    {
      id: "exam-2-q15",
      kind: "mcq",
      topicId: "igcse-bridge-grammar",
      guideRef: "stpvo-tenses-aspect",
      difficulty: "core",
      question:
        "Which Mandarin sentence correctly expresses **past life experience** (*'I have kept a tortoise before'*)?",
      options: [
        "我以前养过一只乌龟。",
        "我以前正在养一只乌龟呢。",
        "我以前打算养一只乌龟。",
        "我以前将来想养一只乌龟。",
      ],
      answerIndex: 0,
      hints: [
        "Which aspect marker directly after a verb (`Verb + ___`) means 'have ever done before'?",
        "`正在…呢` is ongoing action, while `打算` and `将来想` express future plans.",
      ],
      explanation:
        "`Verb + 过` (guo) marks past life experience ('have done before'), so `我以前养过一只乌龟。` (Wǒ yǐqián yǎngguo yì zhī wūguī.) is correct. `正在…呢` is for actions happening right now, and `打算` / `将来想` are for future intentions.",
    },
    {
      id: "exam-2-q16",
      kind: "short",
      topicId: "school-subjects-facilities",
      guideRef: "school-facilities",
      difficulty: "core",
      diagram: CAMPUS_MAP_SVG,
      question:
        "Study the campus map (`学校设施平面图`). Which facility is located **在科学实验室和礼堂中间** (between the science lab and the auditorium)? Type its Mandarin name (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["图书馆", "túshūguǎn"],
        display: "图书馆 (túshūguǎn)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["食堂", "shítáng"] },
          feedback: "`食堂` (canteen) is in the bottom row between `教学楼` and `体育馆`, not between `科学实验室` and `礼堂`.",
        },
        {
          spec: { type: "text", accept: ["操场", "大操场", "运动场", "cāochǎng", "yùndòngchǎng"] },
          feedback: "`大操场 / 运动场` is in the middle courtyard below the top row, not between `科学实验室` and `礼堂`.",
        },
      ],
      hints: [
        "Locate `科学实验室` (top left) and `礼堂` (top right).",
        "`中间` (zhōngjiān) means 'in the middle / between'.",
      ],
      solution: [
        "Along the top row of the campus map: `科学实验室` (left) — `图书馆` (middle) — `礼堂` (right).",
        "Therefore, the facility in between is `图书馆` (túshūguǎn — library).",
      ],
      commonError: "Confusing `图书馆` (library) with `书店` (bookshop) or reading the bottom row (`食堂`).",
    },
    {
      id: "exam-2-q17",
      kind: "mcq",
      topicId: "appearance-personality",
      guideRef: "wearing-clothes-glasses",
      difficulty: "challenge",
      question:
        "Read the description of a science teacher:\n\n**「王老师个子不高不矮，留着短卷发，今天穿着深蓝色的西装，戴着一块银色手表，讲课非常认真。」**\n\nWhich statement is **FALSE** according to the passage?",
      options: [
        "Teacher Wang is of medium height and has short curly hair.",
        "Teacher Wang is wearing a dark blue suit and a silver watch.",
        "Teacher Wang is very tall and wears a pair of dark glasses.",
        "Teacher Wang teaches lessons in a very conscientious manner.",
      ],
      answerIndex: 2,
      hints: [
        "Check `不高不矮` (neither tall nor short = medium height) and `一块银色手表` (a silver watch).",
        "Does the passage mention `眼镜` (glasses) or being very tall (`很高`)?",
      ],
      explanation:
        "The passage says `个子不高不矮` (medium height) and `戴着一块银色手表` (wearing a silver watch), with no mention of being tall or wearing glasses (`眼镜`). Therefore claiming Teacher Wang is very tall and wears dark glasses is false.",
    },
    {
      id: "exam-2-q18",
      kind: "short",
      topicId: "pets",
      guideRef: "reasons-for-against-pets",
      difficulty: "challenge",
      question:
        "Complete the reason why a family cannot keep a cat:\n\n**「我们家不能养猫，因为我弟弟对猫毛___。」**\n\nType the two-character Mandarin word (Simplified Hanzi or tone-marked Pinyin) meaning **allergic**.",
      answer: {
        type: "text",
        accept: ["过敏", "guòmǐn"],
        display: "过敏 (guòmǐn)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["讨厌", "tǎoyàn"] },
          feedback: "`讨厌` means to dislike/hate, not to have a medical allergy (`对…过敏`).",
        },
        {
          spec: { type: "text", accept: ["害怕", "hàipà"] },
          feedback: "`害怕` means to be afraid of, whereas `对…___` takes the medical term for allergic (`过敏`).",
        },
      ],
      hints: [
        "The full Mandarin pattern is `对 + [allergen] + 过敏`.",
        "4th tone + 3rd tone: `guòmǐn`.",
      ],
      solution: [
        "'To be allergic to X' is `对 X 过敏` (duì X guòmǐn).",
        "So 'allergic to cat fur' is `对猫毛过敏` (duì māomáo guòmǐn).",
      ],
      commonError: "Forgetting the preposition `对` (`对猫毛过敏`) or writing `生病` instead of `过敏`.",
    },
    {
      id: "exam-2-q19",
      kind: "mcq",
      topicId: "igcse-bridge-grammar",
      guideRef: "igcse-routine-hobbies",
      difficulty: "challenge",
      question:
        "Which sentence uses the Mandarin **verb-copying duration structure** correctly to mean *'I play the piano for one hour every evening'*?",
      options: [
        "我每天晚上弹钢琴弹一个小时。",
        "我每天晚上弹一个小时钢琴弹。",
        "我每天晚上一个小时弹钢琴。",
        "我弹钢琴每天晚上一个小时。",
      ],
      answerIndex: 0,
      hints: [
        "When a verb (`弹`) has BOTH an object (`钢琴`) AND a duration (`一个小时`), repeat the verb right before the duration!",
        "Formula: `Subject + Time + Verb + Object + Verb + Duration`.",
      ],
      explanation:
        "In Mandarin, a verb cannot take both a direct object and a duration phrase at the same time, so you copy the verb (`弹钢琴弹一个小时` — tán gāngqín tán yí gè xiǎoshí). Putting the duration before the verb or at the end without repeating `弹` is ungrammatical.",
    },
    {
      id: "exam-2-q20",
      kind: "short",
      topicId: "appearance-personality",
      guideRef: "personality-traits",
      difficulty: "challenge",
      question:
        "Complete the sentence meaning *'Our Maths teacher is very **strict** with us, but she explains clearly'*:\n\n**「数学老师对我们很___，但是她讲得很清楚。」**\n\nType the two-character Mandarin adjective (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["严格", "yángé"],
        display: "严格 (yángé)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["认真", "rènzhēn"] },
          feedback: "`认真` (rènzhēn) means conscientious/hard-working, not strict.",
        },
        {
          spec: { type: "text", accept: ["耐心", "nàixīn"] },
          feedback: "`耐心` (nàixīn) means patient, which wouldn't contrast with `但是她讲得很清楚` the way 'strict' does.",
        },
      ],
      hints: [
        "Both syllables carry the 2nd tone (`yángé`).",
        "Commonly paired with `对学生很___` (very strict with students).",
      ],
      solution: [
        "'Strict' in Mandarin is `严格` (yángé).",
        "Notice the useful IGCSE pattern `对 + person + 很严格` ('strict with someone').",
      ],
      commonError: "Confusing `严格` (strict) with `严肃` (serious-looking) or `认真` (conscientious).",
    },
    {
      id: "exam-2-q21",
      kind: "short",
      topicId: "igcse-bridge-grammar",
      guideRef: "igcse-connectives-writing",
      difficulty: "challenge",
      question:
        "Complete the high-band paired connective meaning *'Not only is Science interesting, **moreover** it is very useful'*:\n\n**「科学不但很有趣，___非常有用。」**\n\nType the two-character Mandarin connective (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["而且", "érqiě"],
        display: "而且 (érqiě)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["但是", "dànshì"] },
          feedback: "`但是` (but) pairs with `虽然` (although) for contrast, not with `不但` (not only).",
        },
        {
          spec: { type: "text", accept: ["所以", "suǒyǐ"] },
          feedback: "`所以` (therefore) pairs with `因为` (because), not with `不但`.",
        },
      ],
      hints: [
        "Memorise the IGCSE paired set: `不但…___…` ('not only ... moreover ...').",
        "2nd tone + 3rd tone: `érqiě`.",
      ],
      solution: [
        "`不但…而且…` (búdàn...érqiě...) adds a second strong point to boost IGCSE writing bands.",
        "Complete sentence: `科学不但很有趣，而且非常有用。`",
      ],
      commonError: "Pairing `不但` with `和` or `但是` instead of `而且`.",
    },
    {
      id: "exam-2-q22",
      kind: "written",
      topicId: "pets",
      guideRef: "reasons-for-against-pets",
      difficulty: "core",
      marks: 3,
      question:
        "Write a **3-sentence Mandarin paragraph** (Simplified Hanzi + tone-marked Pinyin) giving a balanced view of keeping a pet dog, covering all three notes:\n\n1. Introduce **a cute puppy** using the exact animal measure word.\n2. Use the Mandarin **although ... yet/but ...** structure to say looking after it is tiring yet makes you very happy.\n3. Mention **one daily care routine** (such as feeding it or taking it to the park for a walk).",
      modelAnswer:
        "我家养了一只可爱的小狗，它叫豆豆。虽然照顾小狗有点儿累，但是它让我非常开心。每天放学后，我都会喂它，然后带它去公园遛狗。\n\n(Wǒ jiā yǎngle yì zhī kě'ài de xiǎogǒu, tā jiào Dòudou. Suīrán zhàogù xiǎogǒu yǒudiǎnr lèi, dànshì tā ràng wǒ fēicháng kāixīn. Měitiān fàngxué hòu, wǒ dōu huì wèi tā, ránhòu dài tā qù gōngyuán liùgǒu.)",
      markScheme: [
        {
          point: "Introduces a puppy/dog with exact measure word `一只小狗` (or `一只狗`).",
          keywords: ["一只", "yì zhī", "小狗", "xiǎogǒu"],
        },
        {
          point: "Uses the full concession pair `虽然…但是…` to balance effort and enjoyment.",
          keywords: ["虽然", "suīrán", "但是", "dànshì"],
        },
        {
          point: "Includes a concrete daily care action (`喂` feed, `遛狗` walk the dog, or `洗澡` bathe).",
          keywords: ["遛狗", "liùgǒu", "liù gǒu", "喂", "wèi", "洗澡", "xǐzǎo"],
        },
      ],
      hints: [
        "Dogs take measure word `只`: `一只可爱的小狗` (yì zhī kě'ài de xiǎogǒu).",
        "Keep both halves of `虽然…但是…` in the same sentence.",
        "Good care verbs: `喂` (wèi — feed), `遛狗` (liù gǒu — walk the dog), `陪它玩儿` (péi tā wánr).",
      ],
      commonError: "Omitting `但是` after `虽然` (copying English) or writing `一个狗` instead of `一只狗`.",
    },
    {
      id: "exam-2-q23",
      kind: "written",
      topicId: "school-subjects-facilities",
      guideRef: "comparing-subjects-teachers",
      difficulty: "core",
      marks: 3,
      question:
        "Write **3 connected sentences in Simplified Chinese** (with tone-marked Pinyin) giving your opinions on school classes and staff:\n\n1. Name your **favourite science discipline (Biology or Chemistry)** and say why it is interesting or useful.\n2. Contrast the difficulty of **Physics and Art** using the Mandarin comparative marker (no degree adverb `very`!).\n3. Praise a teacher as **humorous or patient**, adding that they **teach very well**.",
      modelAnswer:
        "我最喜欢的科目是化学，因为它既有趣又有用。我觉得物理比艺术难一点儿。我们的科学老师非常幽默，而且教得很好。\n\n(Wǒ zuì xǐhuan de kēmù shì huàxué, yīnwèi tā jì yǒuqù yòu yǒuyòng. Wǒ juéde wùlǐ bǐ yìshù nán yìdiǎnr. Wǒmen de kēxué lǎoshī fēicháng yōumò, érqiě jiāo de hěn hǎo.)",
      markScheme: [
        {
          point: "Names `化学` or `生物` as favourite subject with a clear reason (`有趣` / `有用`).",
          keywords: ["化学", "huàxué", "生物", "shēngwù", "有趣", "yǒuqù", "有用", "yǒuyòng"],
        },
        {
          point: "Uses `比` accurately to compare `物理` and `艺术` (e.g., `物理比艺术难`).",
          keywords: ["比", "bǐ", "物理", "wùlǐ", "艺术", "yìshù"],
        },
        {
          point: "Describes teacher trait (`幽默` / `耐心`) and uses complement `教得很好`.",
          keywords: ["教得很好", "jiāo de hěn hǎo", "幽默", "yōumò", "耐心", "nàixīn"],
        },
      ],
      hints: [
        "Chemistry = `化学` (huàxué), Biology = `生物` (shēngwù), Physics = `物理` (wùlǐ), Art = `艺术` (yìshù).",
        "Comparison: `物理比艺术难` (or `难一点儿`) — never write `很难` right after `比`.",
        "'Teaches very well' uses the degree complement `得`: `教得很好` (jiāo de hěn hǎo).",
      ],
      commonError: "Writing `教很好` without `得` (`教得很好`) or using `很` inside a `比` comparison.",
    },
    {
      id: "exam-2-q24",
      kind: "written",
      topicId: "igcse-bridge-grammar",
      guideRef: "igcse-routine-hobbies",
      difficulty: "challenge",
      marks: 4,
      question:
        "Write a **4-sentence IGCSE-band daily routine paragraph** in Simplified Chinese (with tone-marked Pinyin) covering all four prompts:\n\n1. Sequence your morning using **first ... then ...** (waking up at 6:45 am and eating breakfast).\n2. State your school day span using **from 8:00 am to 3:30 pm**.\n3. Mention an **after-school activity** with a frequency word (**often** or **twice a week**).\n4. State that you **do homework** in the evening and **go to sleep** at 10:00 pm.",
      modelAnswer:
        "我每天早上六点三刻先起床，然后吃早饭。我们从上午八点到下午三点半上课。放学后，我经常参加游泳课外活动。晚上我先做作业，最后十点睡觉。\n\n(Wǒ měitiān zǎoshang liù diǎn sānkè xiān qǐchuáng, ránhòu chī zǎofàn. Wǒmen cóng shàngwǔ bā diǎn dào xiàwǔ sān diǎn bàn shàngkè. Fàngxué hòu, wǒ jīngcháng cānjiā yóuyǒng kèwài huódòng. Wǎnshang wǒ xiān zuò zuòyè, zuìhòu shí diǎn shuìjiào.)",
      markScheme: [
        {
          point: "Sequences morning actions with `先…然后…` and `起床` / `吃早饭`.",
          keywords: ["然后", "ránhòu", "起床", "qǐchuáng", "吃早饭", "chī zǎofàn"],
        },
        {
          point: "Gives school hours using `从…到…` (`从上午八点到下午三点半上课`).",
          keywords: ["从上午", "cóng shàngwǔ", "三点半", "sān diǎn bàn", "上课", "shàngkè"],
        },
        {
          point: "Includes an after-school CCA (`课外活动`) with frequency (`经常` / `常常` / `每周两次`).",
          keywords: ["课外活动", "kèwài huódòng", "经常", "jīngcháng", "常常", "chángcháng"],
        },
        {
          point: "Mentions evening homework (`做作业`) and bedtime (`睡觉`).",
          keywords: ["做作业", "zuò zuòyè", "睡觉", "shuìjiào"],
        },
      ],
      hints: [
        "6:45 is `六点三刻` (liù diǎn sānkè) or `六点四十五分` (liù diǎn sìshíwǔ fēn).",
        "Place `从上午八点到下午三点半` BEFORE the verb `上课`.",
        "Use `先…然后…最后…` to give your paragraph clear IGCSE sequencing.",
      ],
      commonError: "Putting times at the end of the sentence (`我起床六点三刻`) instead of right after the subject.",
    },
    {
      id: "exam-2-q25",
      kind: "written",
      topicId: "appearance-personality",
      guideRef: "height-hair-eyes",
      difficulty: "challenge",
      marks: 4,
      question:
        "Write a **4-sentence Mandarin profile** (Simplified Hanzi + tone-marked Pinyin) of your closest schoolmate covering all four notes:\n\n1. Describe **facial features or hairstyle** using the accurate Mandarin continuous verbs.\n2. Mention **school uniform and one accessory** (glasses or a wristwatch).\n3. Link **two positive character traits** (clever and hard-working) using the paired adjective pattern.\n4. State a **shared pastime** that both of you enjoy equally.",
      modelAnswer:
        "我最好的朋友长着大眼睛，留着黑色的短头发。他平时穿着学校校服，戴着一块黑色手表。他的性格又聪明又勤快。他跟我一样喜欢打篮球。\n\n(Wǒ zuì hǎo de péngyou zhǎngzhe dà yǎnjing, liúzhe hēisè de duǎn tóufa. Tā píngshí chuānzhe xuéxiào xiàofú, dàizhe yí kuài hēisè shǒubiǎo. Tā de xìnggé yòu cōngmíng yòu qínkuài. Tā gēn wǒ yíyàng xǐhuan dǎ lánqiú.)",
      markScheme: [
        {
          point: "Uses `长着` (born features like `大眼睛`) and/or `留着` (hairstyle like `短头发` / `长头发`).",
          keywords: ["长着", "zhǎngzhe", "留着", "liúzhe", "大眼睛", "短头发", "长头发"],
        },
        {
          point: "Distinguishes clothing (`穿着校服`) from accessories (`戴着手表` / `戴着眼镜`).",
          keywords: ["穿着", "chuānzhe", "戴着", "dàizhe", "校服", "手表", "眼镜"],
        },
        {
          point: "Joins two character adjectives with `又…又…` (`又聪明又勤快`).",
          keywords: ["又聪明", "yòu cōngmíng", "勤快", "qínkuài", "认真", "rènzhēn"],
        },
        {
          point: "Expresses an equally enjoyed shared pastime using `跟…一样喜欢`.",
          keywords: ["一样喜欢", "yíyàng xǐhuan", "一样", "yíyàng"],
        },
      ],
      hints: [
        "Eyes/nose take `长着` (zhǎngzhe); hair takes `留着` (liúzhe).",
        "Uniform takes `穿着` (chuānzhe); watch (`手表`) or glasses (`眼镜`) takes `戴着` (dàizhe).",
        "Join two adjectives with `又…又…` (`又聪明又勤快`), never `和`!",
      ],
      commonError: "Using `穿` for watches/glasses or linking two personality adjectives with `和`.",
    },
  ],
};
