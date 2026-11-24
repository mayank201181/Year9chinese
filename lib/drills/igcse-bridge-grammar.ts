import type { Drill, DrillItem, Rng } from "./types";

const SUBJECTS = [
  { cn: "我", py: "wǒ", en: "I", pron: "我" },
  { cn: "哥哥", py: "gēge", en: "my older brother", pron: "他" },
  { cn: "姐姐", py: "jiějie", en: "my older sister", pron: "她" },
  { cn: "弟弟", py: "dìdi", en: "my younger brother", pron: "他" },
  { cn: "妹妹", py: "mèimei", en: "my younger sister", pron: "她" },
  { cn: "爸爸", py: "bàba", en: "Dad", pron: "他" },
  { cn: "妈妈", py: "māma", en: "Mum", pron: "她" },
  { cn: "表哥", py: "biǎogē", en: "my older cousin", pron: "他" },
  { cn: "我和同学", py: "wǒ hé tóngxué", en: "my classmates and I", pron: "我们" },
  { cn: "我们全家", py: "wǒmen quánjiā", en: "our whole family", pron: "我们" },
];

const YOUNG_SUBJECTS = SUBJECTS.slice(0, 5).concat([SUBJECTS[7]]);
const FAMILY_HOME_SUBJECTS = [
  { cn: "我", py: "wǒ" },
  { cn: "表哥", py: "biǎogē" },
  { cn: "表姐", py: "biǎojiě" },
  { cn: "好朋友", py: "hǎo péngyou" },
  { cn: "同桌", py: "tóngzhuō" },
  { cn: "邻居", py: "línjū" },
];

const HOBBY_VERBS = [
  { verb: "打", py: "dǎ", obj: "篮球", objPy: "lánqiú", en: "play basketball", wrong: "踢", why: "Hand/racket sports take 打 (dǎ), not 踢!" },
  { verb: "打", py: "dǎ", obj: "网球", objPy: "wǎngqiú", en: "play tennis", wrong: "玩", why: "Never use 玩 for sports — racket sports take 打 (dǎ)!" },
  { verb: "打", py: "dǎ", obj: "羽毛球", objPy: "yǔmáoqiú", en: "play badminton", wrong: "玩", why: "Badminton is a racket sport and takes 打 (dǎ)!" },
  { verb: "打", py: "dǎ", obj: "乒乓球", objPy: "pīngpāngqiú", en: "play table tennis", wrong: "踢", why: "Table tennis is played with a paddle — use 打 (dǎ)!" },
  { verb: "踢", py: "tī", obj: "足球", objPy: "zúqiú", en: "play football", wrong: "打", why: "Football is kicked with feet — use 踢 (tī), NOT 打!" },
  { verb: "弹", py: "tán", obj: "钢琴", objPy: "gāngqín", en: "play the piano", wrong: "玩", why: "Keyboard instruments take 弹 (tán), NEVER 玩!" },
  { verb: "弹", py: "tán", obj: "吉他", objPy: "jítā", en: "play the guitar", wrong: "拉", why: "Plucked strings (guitar) take 弹 (tán); 拉 is for bowed instruments!" },
  { verb: "拉", py: "lā", obj: "小提琴", objPy: "xiǎotíqín", en: "play the violin", wrong: "弹", why: "Bowed instruments (violin) take 拉 (lā), not 弹!" },
  { verb: "看", py: "kàn", obj: "中文书", objPy: "Zhōngwén shū", en: "read Chinese books", wrong: "玩", why: "Reading books takes 看 (kàn)!" },
  { verb: "做", py: "zuò", obj: "作业", objPy: "zuòyè", en: "do homework", wrong: "写", why: "The standard IGCSE collocation here is 做作业 (zuò zuòyè)." },
];

const STPVO_SCENES = [
  { place: "在图书馆", placePy: "zài túshūguǎn", verb: "看", verbPy: "kàn", obj: "中文书", objPy: "Zhōngwén shū", en: "read Chinese books at the library" },
  { place: "在书房里", placePy: "zài shūfáng lǐ", verb: "写", verbPy: "xiě", obj: "中文作文", objPy: "Zhōngwén zuòwén", en: "write a Chinese essay in the study" },
  { place: "在体育馆", placePy: "zài tǐyùguǎn", verb: "打", verbPy: "dǎ", obj: "羽毛球", objPy: "yǔmáoqiú", en: "play badminton in the sports hall" },
  { place: "在操场上", placePy: "zài cāochǎng shàng", verb: "踢", verbPy: "tī", obj: "足球", objPy: "zúqiú", en: "play football on the sports field" },
  { place: "在客厅里", placePy: "zài kètīng lǐ", verb: "弹", verbPy: "tán", obj: "钢琴", objPy: "gāngqín", en: "play the piano in the living room" },
  { place: "在电影院", placePy: "zài diànyǐngyuàn", verb: "看", verbPy: "kàn", obj: "中国电影", objPy: "Zhōngguó diànyǐng", en: "watch a Chinese film at the cinema" },
  { place: "在厨房里", placePy: "zài chúfáng lǐ", verb: "包", verbPy: "bāo", obj: "饺子", objPy: "jiǎozi", en: "wrap dumplings in the kitchen" },
  { place: "在公园里", placePy: "zài gōngyuán lǐ", verb: "骑", verbPy: "qí", obj: "自行车", objPy: "zìxíngchē", en: "ride a bicycle in the park" },
  { place: "在音乐室", placePy: "zài yīnyuèshì", verb: "拉", verbPy: "lā", obj: "小提琴", objPy: "xiǎotíqín", en: "play the violin in the music room" },
  { place: "在餐厅里", placePy: "zài cāntīng lǐ", verb: "吃", verbPy: "chī", obj: "炒面", objPy: "chǎomiàn", en: "eat fried noodles at the restaurant" },
];

const EXP_VERBS = [
  { verb: "去", verbPy: "qù", obj: "北京", objPy: "Běijīng", en: "been to Beijing" },
  { verb: "去", verbPy: "qù", obj: "上海", objPy: "Shànghǎi", en: "been to Shanghai" },
  { verb: "去", verbPy: "qù", obj: "成都", objPy: "Chéngdū", en: "been to Chengdu" },
  { verb: "吃", verbPy: "chī", obj: "北京烤鸭", objPy: "Běijīng kǎoyā", en: "tasted Peking duck" },
  { verb: "吃", verbPy: "chī", obj: "四川火锅", objPy: "Sìchuān huǒguō", en: "eaten Sichuan hotpot" },
  { verb: "看", verbPy: "kàn", obj: "大熊猫", objPy: "dàxióngmāo", en: "seen giant pandas" },
  { verb: "坐", verbPy: "zuò", obj: "中国高铁", objPy: "Zhōngguó gāotiě", en: "ridden China's high-speed train" },
  { verb: "爬", verbPy: "pá", obj: "长城", objPy: "Chángchéng", en: "climbed the Great Wall" },
];

const PETS_AND_CLOTHES = [
  { noun: "小狗", py: "xiǎogǒu", en: "puppy", mw: "只", mwPy: "zhī", wrongMw: "条", kind: "pet" as const },
  { noun: "小猫", py: "xiǎomāo", en: "kitten", mw: "只", mwPy: "zhī", wrongMw: "个", kind: "pet" as const },
  { noun: "兔子", py: "tùzi", en: "rabbit", mw: "只", mwPy: "zhī", wrongMw: "匹", kind: "pet" as const },
  { noun: "仓鼠", py: "cāngshǔ", en: "hamster", mw: "只", mwPy: "zhī", wrongMw: "条", kind: "pet" as const },
  { noun: "乌龟", py: "wūguī", en: "tortoise", mw: "只", mwPy: "zhī", wrongMw: "匹", kind: "pet" as const },
  { noun: "金鱼", py: "jīnyú", en: "goldfish", mw: "条", mwPy: "tiáo", wrongMw: "只", kind: "pet" as const },
  { noun: "马", py: "mǎ", en: "horse", mw: "匹", mwPy: "pǐ", wrongMw: "只", kind: "pet" as const },
  { noun: "家人", py: "jiārén", en: "household family members", mw: "口", mwPy: "kǒu", wrongMw: "只", kind: "family" as const },
  { noun: "眼镜", py: "yǎnjìng", en: "glasses", verb: "戴", verbPy: "dài", wrongVerb: "穿", kind: "wear" as const },
  { noun: "帽子", py: "màozi", en: "hat", verb: "戴", verbPy: "dài", wrongVerb: "穿", kind: "wear" as const },
  { noun: "手表", py: "shǒubiǎo", en: "watch", verb: "戴", verbPy: "dài", wrongVerb: "穿", kind: "wear" as const },
  { noun: "围巾", py: "wéijīn", en: "scarf", verb: "戴", verbPy: "dài", wrongVerb: "穿", kind: "wear" as const },
  { noun: "白色衬衫", py: "báisè chènshān", en: "white shirt", verb: "穿", verbPy: "chuān", wrongVerb: "戴", kind: "wear" as const },
  { noun: "牛仔裤", py: "niúzǎikù", en: "jeans", verb: "穿", verbPy: "chuān", wrongVerb: "戴", kind: "wear" as const },
  { noun: "运动鞋", py: "yùndòngxié", en: "trainers", verb: "穿", verbPy: "chuān", wrongVerb: "戴", kind: "wear" as const },
  { noun: "校服", py: "xiàofú", en: "school uniform", verb: "穿", verbPy: "chuān", wrongVerb: "戴", kind: "wear" as const },
];

const CONNECTIVE_PAIRS = [
  {
    first: "因为",
    firstPy: "yīnwèi",
    second: "所以",
    secondPy: "suǒyǐ",
    meaning: "because … therefore …",
    examples: [
      { c1: "中文非常有用", c2: "每天认真复习汉字", sameSubj: true },
      { c1: "今天外面下大雨", c2: "取消了户外的足球赛", sameSubj: true },
      { c1: "我家离地铁站很近", c2: "每天上学非常方便", sameSubj: true },
      { c1: "科学实验很有趣", c2: "最喜欢上科学课", sameSubj: true },
      { c1: "对猫毛过敏", c2: "家里只养了两条金鱼", sameSubj: true },
    ],
  },
  {
    first: "虽然",
    firstPy: "suīrán",
    second: "但是",
    secondPy: "dànshì",
    meaning: "although … yet/but …",
    examples: [
      { c1: "汉字笔画有点儿多", c2: "觉得写汉字很有意思", sameSubj: true },
      { c1: "每天的作业不少", c2: "依然按时完成了", sameSubj: true },
      { c1: "养小狗很花时间", c2: "非常喜欢照顾它", sameSubj: true },
      { c1: "我家离市中心有点儿远", c2: "很喜欢郊区的安静", sameSubj: true },
      { c1: "天气非常炎热", c2: "还是看完了整场比赛", sameSubj: true },
    ],
  },
  {
    first: "不但",
    firstPy: "búdàn",
    second: "而且",
    secondPy: "érqiě",
    meaning: "not only … but also …",
    examples: [
      { c1: "中文写得工整", c2: "发音非常标准", sameSubj: true },
      { c1: "性格非常耐心", c2: "讲话十分幽默", sameSubj: true },
      { c1: "喜欢打网球", c2: "还经常去游泳", sameSubj: true },
      { c1: "每天认真复习", c2: "还主动帮助同学", sameSubj: true },
      { c1: "会弹钢琴", c2: "还会拉小提琴", sameSubj: true },
    ],
  },
  {
    first: "如果",
    firstPy: "rúguǒ",
    second: "就",
    secondPy: "jiù",
    meaning: "if … then … (Subject + 就)",
    examples: [
      { c1: "明天不下雨", c2: "去东海岸骑自行车", sameSubj: true },
      { c1: "周末有空", c2: "去图书馆看中文书", sameSubj: true },
      { c1: "每天复习十五分钟", c2: "会进步得非常快", sameSubj: true },
      { c1: "今年暑假去北京", c2: "一定要去爬长城", sameSubj: true },
      { c1: "考试结束了", c2: "跟同学去吃火锅", sameSubj: true },
    ],
  },
  {
    first: "一边",
    firstPy: "yìbiān",
    second: "一边",
    secondPy: "yìbiān",
    meaning: "while doing A … also doing B …",
    examples: [
      { c1: "听轻音乐", c2: "练习写汉字", sameSubj: true },
      { c1: "赏月", c2: "吃冰皮月饼", sameSubj: true },
      { c1: "喝热绿茶", c2: "看中文漫画书", sameSubj: true },
      { c1: "吃早饭", c2: "听中文广播", sameSubj: true },
      { c1: "在公园散步", c2: "跟好朋友聊天儿", sameSubj: true },
    ],
  },
];

export const drills: Drill[] = [
  {
    id: "igcse-bridge-grammar.self-intro-classifiers",
    topicId: "igcse-bridge-grammar",
    title: "Self-Intro, Two (两) & Exact Classifiers",
    level: 1,
    guideRef: "igcse-self-intro-family-pets",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const subj = rng.pick(SUBJECTS);
      const item = rng.pick(PETS_AND_CLOTHES);

      if (tier === 1) {
        if (item.kind === "pet") {
          const homeSubj = rng.pick(FAMILY_HOME_SUBJECTS);
          const count = rng.pick([1, 2, 3, 4]);
          const numCn = count === 2 ? "两" : ["", "一", "两", "三", "四"][count];
          return {
            prompt: `Choose the exact animal classifier for **${item.noun}** (${item.en}): \`${homeSubj.cn}家养了${numCn}___${item.noun}。\``,
            answer: {
              type: "text",
              accept: [item.mw, item.mwPy],
              display: `${item.mw} (${item.mwPy})`,
            },
            traps: [
              {
                spec: { type: "text", accept: [item.wrongMw] },
                feedback: `Careful! ${item.noun} (${item.en}) takes the exact classifier ${item.mw} (${item.mwPy}), not ${item.wrongMw}.`,
              },
            ],
            hint: `Exact classifier for ${item.en} (${item.noun}).`,
            solution: [`${numCn}${item.mw}${item.noun} — ${item.noun} takes classifier ${item.mw} (${item.mwPy}).`],
          };
        }
        if (item.kind === "family") {
          const homeSubj = rng.pick(FAMILY_HOME_SUBJECTS);
          const n = rng.int(3, 7);
          const nCn = ["", "", "", "三", "四", "五", "六", "七"][n];
          return {
            prompt: `Fill the household classifier for family size: \`${homeSubj.cn}家有${nCn}___人。\``,
            answer: {
              type: "text",
              accept: ["口", "kǒu"],
              display: "口 (kǒu)",
            },
            traps: [{ spec: { type: "text", accept: ["只", "zhī"] }, feedback: "只 is for animals! Household family members take 口 (kǒu)." }],
            hint: "3-stroke character meaning 'mouth' (kǒu).",
            solution: [`${homeSubj.cn}家有${nCn}口人 (classifier 口 kǒu for household size).`],
          };
        }
        return {
          prompt: `Choose **穿** (clothes/shoes) or **戴** (accessories) for **${item.noun}** (${item.en}): \`${subj.cn}___着${item.noun}。\``,
          answer: {
            type: "text",
            accept: [item.verb, item.verbPy],
            display: `${item.verb} (${item.verbPy})`,
          },
          traps: [
            {
              spec: { type: "text", accept: [item.wrongVerb] },
              feedback: `${item.noun} (${item.en}) takes ${item.verb} (${item.verbPy}), not ${item.wrongVerb}!`,
            },
          ],
          hint: "Clothes & shoes = 穿 (chuān); glasses/hats/watches/scarves = 戴 (dài).",
          solution: [`${subj.cn}${item.verb}着${item.noun} (${item.verbPy}zhe ${item.py}).`],
        };
      }

      if (tier === 2) {
        const petItems = PETS_AND_CLOTHES.filter((x): x is Extract<typeof x, { kind: "pet" }> => x.kind === "pet");
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const homeSubj = rng.pick(FAMILY_HOME_SUBJECTS);
          const p = rng.pick(petItems);
          return {
            prompt: `Write **"two ${p.en}s"** in Mandarin using the \`两\` rule and exact classifier (as in \`${homeSubj.cn}家养了___\`).`,
            answer: {
              type: "text",
              accept: [`两${p.mw}${p.noun}`, `liǎng ${p.mwPy} ${p.py}`],
              display: `两${p.mw}${p.noun} (liǎng ${p.mwPy} ${p.py})`,
            },
            traps: [
              {
                spec: { type: "text", accept: [`二${p.mw}${p.noun}`] },
                feedback: "Before ANY measure word, 2 MUST be 两 (liǎng), never 二!",
              },
            ],
            hint: `Use 两 + exact classifier for ${p.noun} + ${p.noun}.`,
            solution: [`两${p.mw}${p.noun} (liǎng ${p.mwPy} ${p.py}).`],
          };
        }
        if (mode === 1) {
          const ySubj = rng.pick(YOUNG_SUBJECTS);
          const age = rng.int(11, 18);
          const ageCn = `十${["", "一", "二", "三", "四", "五", "六", "七", "八"][age - 10]}`;
          return {
            prompt: `Fix the classic IGCSE age mistake (drop \`是\`): rewrite \`*${ySubj.cn}今年是${ageCn}岁*\` cleanly without \`是\`.`,
            answer: {
              type: "text",
              accept: [`${ySubj.cn}今年${ageCn}岁`, `${ySubj.cn}今年${ageCn}岁。`, `${ySubj.cn}${ageCn}岁`, `${ySubj.py} jīnnián shí${["", "yī", "èr", "sān", "sì", "wǔ", "liù", "qī", "bā"][age - 10]} suì`],
              display: `${ySubj.cn}今年${ageCn}岁`,
            },
            traps: [
              {
                spec: { type: "text", accept: [`${ySubj.cn}今年是${ageCn}岁`, `${ySubj.cn}是${ageCn}岁`] },
                feedback: "Delete 是 before an age in Mandarin!",
              },
            ],
            hint: `Simply drop 是: ${ySubj.cn}今年 + age + 岁.`,
            solution: [`${ySubj.cn}今年${ageCn}岁 (never insert 是 before an age!).`],
          };
        }
        const wearItems = PETS_AND_CLOTHES.filter((x): x is Extract<typeof x, { kind: "wear" }> => x.kind === "wear");
        const w = rng.pick(wearItems);
        return {
          prompt: `Spot and fix the wrong verb (type ONLY the correct replacement verb): \`照片里，${subj.cn}${w.wrongVerb}着${w.noun}。\``,
          answer: {
            type: "text",
            accept: [w.verb, w.verbPy],
            display: `${w.verb} (${w.verbPy})`,
          },
          traps: [{ spec: { type: "text", accept: [w.wrongVerb] }, feedback: `${w.wrongVerb} is the error! Replace it with ${w.verb} (${w.verbPy}).` }],
          hint: `${w.noun} = ${w.en}. Does it take 穿 or 戴?`,
          solution: [`Replace ${w.wrongVerb} with ${w.verb} (${w.verbPy}): ${w.verb}着${w.noun}.`],
        };
      }

      // Tier 3: Combine Big-to-Small birthday dates or full pet-keeping sentences
      const months = [
        { n: 1, cn: "一月", py: "Yīyuè", en: "January" },
        { n: 3, cn: "三月", py: "Sānyuè", en: "March" },
        { n: 5, cn: "五月", py: "Wǔyuè", en: "May" },
        { n: 7, cn: "七月", py: "Qīyuè", en: "July" },
        { n: 9, cn: "九月", py: "Jiǔyuè", en: "September" },
        { n: 10, cn: "十月", py: "Shíyuè", en: "October" },
        { n: 11, cn: "十一月", py: "Shíyīyuè", en: "November" },
        { n: 12, cn: "十二月", py: "Shí'èryuè", en: "December" },
      ];
      const days = [
        { n: 4, cn: "四号", py: "sì hào", alt: "四日" },
        { n: 8, cn: "八号", py: "bā hào", alt: "八日" },
        { n: 12, cn: "十二号", py: "shí'èr hào", alt: "十二日" },
        { n: 15, cn: "十五号", py: "shíwǔ hào", alt: "十五日" },
        { n: 19, cn: "十九号", py: "shíjiǔ hào", alt: "十九日" },
        { n: 23, cn: "二十三号", py: "èrshísān hào", alt: "二十三日" },
        { n: 28, cn: "二十八号", py: "èrshíbā hào", alt: "二十八日" },
      ];
      const m = rng.pick(months);
      const d = rng.pick(days);
      return {
        prompt: `Write the Chinese Big-to-Small birthday date (**${d.n} ${m.en}**) to complete: \`${subj.cn}的生日是___。\` (Type Simplified Hanzi or tone-marked Pinyin.)`,
        answer: {
          type: "text",
          accept: [
            `${m.cn}${d.cn}`,
            `${m.cn}${d.alt}`,
            `${m.py} ${d.py}`,
            `${m.py.toLowerCase()} ${d.py}`,
          ],
          display: `${m.cn}${d.cn} (${m.py} ${d.py})`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${d.cn}${m.cn}`] },
            feedback: "Chinese dates go Big → Small: Month (月) BEFORE Day (号/日)!",
          },
        ],
        hint: `Month (${m.cn}) first, then Day (${d.n} + 号 or 日)!`,
        solution: [`${d.n} ${m.en} = ${m.cn}${d.cn} (${m.py} ${d.py}).`],
      };
    },
  },
  {
    id: "igcse-bridge-grammar.stpvo-aspect",
    topicId: "igcse-bridge-grammar",
    title: "STPVO Word Order & 了 / 过 / 正在 / 打算 Selector",
    level: 1,
    guideRef: "stpvo-tenses-aspect",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const subj = rng.pick(SUBJECTS);
      const scene = rng.pick(STPVO_SCENES);
      const exp = rng.pick(EXP_VERBS);

      if (tier === 1) {
        const aspect = rng.int(0, 3);
        if (aspect === 0) {
          return {
            prompt: `Choose the right marker (\`了\`, \`过\`, \`正在\`, or \`打算\`): \`昨天下午${subj.cn}${scene.place}${scene.verb}___${scene.obj}。\` (completed past)`,
            answer: { type: "text", accept: ["了", "le"], display: "了 (le)" },
            traps: [{ spec: { type: "text", accept: ["打算", "dǎsuàn"] }, feedback: "昨天下午 is past, not a future plan!" }],
            hint: "Specific completed action yesterday → completed-action particle.",
            solution: [`昨天下午${subj.cn}${scene.place}${scene.verb}了${scene.obj}。(了 marks completed past action.)`],
          };
        }
        if (aspect === 1) {
          return {
            prompt: `Choose the right marker (\`了\`, \`过\`, \`正在\`, or \`打算\`): \`${subj.cn}以前${exp.verb}___${exp.obj}。\` (have ever ${exp.en})`,
            answer: { type: "text", accept: ["过", "guo", "guò"], display: "过 (guo)" },
            traps: [{ spec: { type: "text", accept: ["了", "le"] }, feedback: "With 以前 ('have ever'), use experiential 过 (guo)!" }],
            hint: "以前 + Verb + ___ expresses life experience.",
            solution: [`${subj.cn}以前${exp.verb}过${exp.obj}。(过 marks past life experience.)`],
          };
        }
        if (aspect === 2) {
          return {
            prompt: `Choose the right marker (\`了\`, \`过\`, \`正在\`, or \`打算\`): \`现在${subj.cn}___${scene.place}${scene.verb}${scene.obj}呢！\` (ongoing right now)`,
            answer: { type: "text", accept: ["正在", "zhèngzài", "正", "在"], display: "正在 (zhèngzài)" },
            traps: [{ spec: { type: "text", accept: ["打算", "dǎsuàn"] }, feedback: "现在 + …呢 signals an action happening RIGHT NOW — use 正在!" }],
            hint: "Pairs with 现在 and sentence-final 呢 for '-ing'.",
            solution: [`现在${subj.cn}正在${scene.place}${scene.verb}${scene.obj}呢！(正在…呢 = right now.)`],
          };
        }
        return {
          prompt: `Choose the right marker (\`了\`, \`过\`, \`正在\`, or \`打算\`): \`明年暑假${subj.cn}___去${exp.obj === "北京" || exp.obj === "上海" || exp.obj === "成都" ? exp.obj : "北京"}旅游。\` (future plan)`,
          answer: { type: "text", accept: ["打算", "dǎsuàn", "dǎsuan", "准备", "zhǔnbèi"], display: "打算 (dǎsuàn)" },
          traps: [{ spec: { type: "text", accept: ["过", "guo"] }, feedback: "明年暑假 is next summer (future) — use 打算!" }],
          hint: "Future intention verb meaning 'plan to' (dǎsuàn).",
          solution: [`明年暑假${subj.cn}打算… (打算 = plan to).`],
        };
      }

      if (tier === 2) {
        const negType = rng.int(0, 2);
        if (negType === 0) {
          return {
            prompt: `Negate the completed past action (type the exact 2-character Verb phrase, e.g. without \`了\`): \`昨天${subj.cn}${scene.place}${scene.verb}了${scene.obj}\` → \`昨天${subj.cn}${scene.place}___${scene.obj}。\``,
            answer: {
              type: "text",
              accept: [`没${scene.verb}`, `没有${scene.verb}`, `méi ${scene.verbPy}`, `méiyǒu ${scene.verbPy}`],
              display: `没${scene.verb} (méi ${scene.verbPy})`,
            },
            traps: [
              {
                spec: { type: "text", accept: [`没${scene.verb}了`, `不${scene.verb}了`] },
                feedback: "Remember: 没 kicks 了 OUT! Never write *没…了* or *不…了* for a simple past non-event.",
              },
            ],
            hint: `Use 没 + ${scene.verb} and DROP 了!`,
            solution: [`昨天${subj.cn}${scene.place}没${scene.verb}${scene.obj}。(没 drops 了.)`],
          };
        }
        if (negType === 1) {
          return {
            prompt: `Negate the past life experience (type the exact 3-character phrase keeping \`过\`): \`${subj.cn}以前${exp.verb}过${exp.obj}\` → \`${subj.cn}以前___${exp.obj}。\``,
            answer: {
              type: "text",
              accept: [
                `没${exp.verb}过`,
                `没有${exp.verb}过`,
                `méi ${exp.verbPy}guo`,
                `méi ${exp.verbPy}guò`,
                `méiyǒu ${exp.verbPy}guo`,
              ],
              display: `没${exp.verb}过 (méi ${exp.verbPy}guo)`,
            },
            traps: [
              {
                spec: { type: "text", accept: [`不${exp.verb}过`, `没${exp.verb}了`] },
                feedback: "Experiential negation ALWAYS uses 没 + Verb + 过 (never 不…过 or 没…了)!",
              },
            ],
            hint: `没 invites 过 IN: 没 + ${exp.verb} + 过!`,
            solution: [`${subj.cn}以前没${exp.verb}过${exp.obj}。(Keep 过 after 没!)`],
          };
        }
        return {
          prompt: `Negate the ongoing action (type the 2-character negative marker): \`${subj.cn}现在___${scene.verb}${scene.obj}，${subj.pron}在休息。\``,
          answer: {
            type: "text",
            accept: ["没在", "没有在", "méi zài", "méizài", "méiyǒu zài"],
            display: "没在 (méi zài)",
          },
          traps: [{ spec: { type: "text", accept: ["不在", "búzài", "bù zài"] }, feedback: "Negating ongoing 在/正在 + Verb uses 没在, never *不在*!" }],
          hint: "Ongoing 正在 is negated with 没 + 在.",
          solution: [`${subj.cn}现在没在${scene.verb}${scene.obj}。(没在 = is not currently doing.)`],
        };
      }

      // Tier 3: Full STPVO / TSPVO sentence assembly!
      const timeFrame = rng.pick([
        { t: "昨天下午", tPy: "zuótiān xiàwǔ", v: `${scene.verb}了${scene.obj}`, vPy: `${scene.verbPy}le ${scene.objPy}` },
        { t: "上个周末", tPy: "shàng gè zhōumò", v: `${scene.verb}了${scene.obj}`, vPy: `${scene.verbPy}le ${scene.objPy}` },
        { t: "明天下午", tPy: "míngtiān xiàwǔ", v: `打算${scene.verb}${scene.obj}`, vPy: `dǎsuàn ${scene.verbPy} ${scene.objPy}` },
        { t: "下个星期六", tPy: "xià gè xīngqīliù", v: `打算${scene.verb}${scene.obj}`, vPy: `dǎsuàn ${scene.verbPy} ${scene.objPy}` },
      ]);
      const pieces = rng.shuffle([subj.cn, timeFrame.t, scene.place, timeFrame.v]);
      const stpvo = `${subj.cn}${timeFrame.t}${scene.place}${timeFrame.v}`;
      const tspvo = `${timeFrame.t}${subj.cn}${scene.place}${timeFrame.v}`;
      const tspvoComma = `${timeFrame.t}，${subj.cn}${scene.place}${timeFrame.v}`;
      const isFuture = timeFrame.v.startsWith("打算");
      const futureAlt1 = isFuture ? `${subj.cn}${timeFrame.t}打算${scene.place}${scene.verb}${scene.obj}` : stpvo;
      const futureAlt2 = isFuture ? `${timeFrame.t}，${subj.cn}打算${scene.place}${scene.verb}${scene.obj}` : tspvoComma;
      const futureAlt3 = isFuture ? `${timeFrame.t}${subj.cn}打算${scene.place}${scene.verb}${scene.obj}` : tspvo;
      return {
        prompt: `STPVO Word-Order Builder — arrange these 4 chunks into natural Mandarin: \`${pieces.join(" / ")}\``,
        answer: {
          type: "text",
          accept: [
            stpvo,
            `${stpvo}。`,
            tspvo,
            `${tspvo}。`,
            tspvoComma,
            `${tspvoComma}。`,
            futureAlt1,
            `${futureAlt1}。`,
            futureAlt2,
            `${futureAlt2}。`,
            futureAlt3,
            `${futureAlt3}。`,
            `${subj.py} ${timeFrame.tPy} ${scene.placePy} ${timeFrame.vPy}`,
            `${timeFrame.tPy} ${subj.py} ${scene.placePy} ${timeFrame.vPy}`,
          ],
          display: `${stpvo}。`,
        },
        hint: `Apply STPVO (or TSPVO): Time (${timeFrame.t}) & Place (${scene.place}) MUST both come before the verb!`,
        solution: [
          `S: ${subj.cn} | T: ${timeFrame.t} | P: ${scene.place} | V+O: ${timeFrame.v}.`,
          `Natural STPVO: ${stpvo}。(TSPVO: ${tspvoComma}。is also accepted!)`,
        ],
      };
    },
  },
  {
    id: "igcse-bridge-grammar.paired-connectives",
    topicId: "igcse-bridge-grammar",
    title: "High-Band Paired Connectives (关联词)",
    level: 2,
    guideRef: "igcse-connectives-writing",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const pair = rng.pick(CONNECTIVE_PAIRS);
      const ex = rng.pick(pair.examples);
      const subj = rng.pick(SUBJECTS);

      if (tier === 1) {
        const askSecond = rng.bool(0.6);
        if (askSecond) {
          return {
            prompt: `Paired connective partner check (${pair.meaning}): \`${pair.first}…，___…\` (${subj.cn} context: \`${ex.c1}\`). Type the matching second connective.`,
            answer: {
              type: "text",
              accept:
                pair.second === "但是"
                  ? ["但是", "dànshì", "可是", "kěshì"]
                  : [pair.second, pair.secondPy],
              display: `${pair.second} (${pair.secondPy})`,
            },
            hint: `Recall the magnetic pair for ${pair.first} (${pair.firstPy}).`,
            solution: [`${pair.first} (${pair.firstPy}) pairs with ${pair.second} (${pair.secondPy}) — ${pair.meaning}.`],
          };
        }
        return {
          prompt: `Complete the opening connective (${pair.meaning}): \`___${ex.c1}，${pair.second === "就" ? `${subj.cn}就` : pair.second}${ex.c2}。\``,
          answer: {
            type: "text",
            accept:
              pair.first === "如果"
                ? ["如果", "rúguǒ", "要是", "yàoshi"]
                : pair.first === "不但"
                  ? ["不但", "búdàn", "bùdàn", "不仅", "bùjǐn"]
                  : [pair.first, pair.firstPy],
            display: `${pair.first} (${pair.firstPy})`,
          },
          hint: `Look at the second partner (${pair.second}) to pick its exact match!`,
          solution: [`${pair.first}…${pair.second}… (${pair.meaning}).`],
        };
      }

      if (tier === 2) {
        const sentence =
          pair.first === "如果"
            ? `如果${ex.c1}，${subj.cn}___${ex.c2}。`
            : pair.first === "一边"
              ? `${subj.cn}一边${ex.c1}，___${ex.c2}。`
              : `${pair.first}${ex.c1}，___${subj.cn}${ex.c2}。`;
        const wrong = pair.first === "虽然" ? "所以" : pair.first === "因为" ? "但是" : pair.first === "不但" ? "但是" : "所以";
        return {
          prompt: `Complete the IGCSE sentence with the matching partner connective: \`${sentence}\``,
          answer: {
            type: "text",
            accept:
              pair.second === "但是"
                ? ["但是", "dànshì", "可是", "kěshì"]
                : [pair.second, pair.secondPy],
            display: `${pair.second} (${pair.secondPy})`,
          },
          traps: [
            {
              spec: { type: "text", accept: [wrong] },
              feedback: `Don't cross-wire pairs! ${pair.first} pairs with ${pair.second} (${pair.secondPy}), NOT ${wrong}.`,
            },
          ],
          hint: `Relationship: ${pair.meaning}.`,
          solution: [`Complete pair: ${pair.first}…${pair.second}… → ${sentence.replace("___", pair.second)}`],
        };
      }

      // Tier 3: Fix Subject + 就 placement OR repair a cross-wired connective sentence
      const mode = rng.int(0, 1);
      if (mode === 0) {
        const condPair = CONNECTIVE_PAIRS[3]; // 如果…就…
        const cex = rng.pick(condPair.examples);
        return {
          prompt: `Fix the misplaced \`就\` in the second clause (type ONLY the corrected second clause starting with \`${subj.cn}\`): \`如果${cex.c1}，*就${subj.cn}${cex.c2}*。\``,
          answer: {
            type: "text",
            accept: [
              `${subj.cn}就${cex.c2}`,
              `${subj.cn}就${cex.c2}。`,
            ],
            display: `${subj.cn}就${cex.c2}`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`就${subj.cn}${cex.c2}`] },
              feedback: `Move the subject (${subj.cn}) BEFORE the adverb 就!`,
            },
          ],
          hint: `Golden rule: Subject (${subj.cn}) MUST sit directly BEFORE 就!`,
          solution: [`Move ${subj.cn} before 就 → ${subj.cn}就${cex.c2}。`],
        };
      }
      const crossPairs = [
        { open: "虽然", wrong: "所以", fix: "但是", fixPy: "dànshì", c1: "汉字有点儿难", c2: "很有意思" },
        { open: "因为", wrong: "但是", fix: "所以", fixPy: "suǒyǐ", c1: "中文很有用", c2: "每天认真学" },
        { open: "不但", wrong: "所以", fix: "而且", fixPy: "érqiě", c1: "很聪明", c2: "非常友好" },
        { open: "如果", wrong: "所以", fix: "就", fixPy: "jiù", c1: "周末不下雨", c2: "去公园跑步" },
      ];
      const cp = rng.pick(crossPairs);
      const bodyClause =
        cp.open === "如果"
          ? `如果${cp.c1}，${subj.cn}${cp.wrong}${cp.c2}。`
          : `${cp.open}${subj.cn}${cp.c1}，${cp.wrong}${cp.c2}。`;
      return {
        prompt: `Repair the cross-wired connective error by typing ONLY the correct replacement for \`${cp.wrong}\`: \`${bodyClause}\``,
        answer: {
          type: "text",
          accept: cp.fix === "但是" ? ["但是", "dànshì", "可是", "kěshì"] : [cp.fix, cp.fixPy],
          display: `${cp.fix} (${cp.fixPy})`,
        },
        traps: [{ spec: { type: "text", accept: [cp.wrong] }, feedback: `${cp.wrong} is the cross-wired error! What pairs with ${cp.open}?` }],
        hint: `Look at the opening connective ${cp.open} — give its exact partner!`,
        solution: [`${cp.open} pairs with ${cp.fix} (${cp.fixPy}), never ${cp.wrong}!`],
      };
    },
  },
  {
    id: "igcse-bridge-grammar.routine-hobbies-duration",
    topicId: "igcse-bridge-grammar",
    title: "Routine Sequence, Hobby Verbs & Duration Verb-Copy",
    level: 3,
    guideRef: "igcse-routine-hobbies",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const subj = rng.pick(SUBJECTS);
      const hv = rng.pick(HOBBY_VERBS);
      const durations = [
        { cn: "半个小时", py: "bàn gè xiǎoshí", en: "half an hour" },
        { cn: "一个小时", py: "yí gè xiǎoshí", en: "one hour" },
        { cn: "两个小时", py: "liǎng gè xiǎoshí", en: "two hours" },
        { cn: "三十分钟", py: "sānshí fēnzhōng", en: "30 minutes" },
        { cn: "四十五分钟", py: "sìshíwǔ fēnzhōng", en: "45 minutes" },
      ];
      const dur = rng.pick(durations);

      if (tier === 1) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          return {
            prompt: `Fill the exact hobby verb for **${hv.en}**: \`周末${subj.cn}经常___${hv.obj}。\``,
            answer: {
              type: "text",
              accept: [hv.verb, hv.py],
              display: `${hv.verb} (${hv.py})`,
            },
            traps: [{ spec: { type: "text", accept: [hv.wrong] }, feedback: hv.why }],
            hint: `Do not use generic 玩! What exact 1-character verb pairs with ${hv.obj}?`,
            solution: [`${hv.verb}${hv.obj} (${hv.py} ${hv.objPy}) = ${hv.en}.`],
          };
        }
        const freqs = [
          { cn: "总是", py: "zǒngshì", en: "always (100%)" },
          { cn: "经常", py: "jīngcháng", en: "often (~75%)" },
          { cn: "有时候", py: "yǒushíhou", en: "sometimes (~45%)" },
          { cn: "偶尔", py: "ǒu'ěr", en: "occasionally (~20%)" },
          { cn: "很少", py: "hěn shǎo", en: "rarely (~10%)" },
          { cn: "从来不", py: "cónglái bù", en: "never as a habit (0%)" },
        ];
        const fr = rng.pick(freqs);
        return {
          prompt: `Fill the frequency adverb meaning **${fr.en}**: \`${subj.cn}周末___${hv.verb}${hv.obj}。\``,
          answer: {
            type: "text",
            accept: fr.cn === "经常" ? ["经常", "常常", "jīngcháng", "chángcháng"] : [fr.cn, fr.py, fr.py.replace(/'/g, "")],
            display: `${fr.cn} (${fr.py})`,
          },
          hint: `Recall the frequency ladder: 总是 → 经常 → 有时候 → 偶尔 → 很少 → 从来不.`,
          solution: [`${fr.en} = ${fr.cn} (${fr.py}).`],
        };
      }

      if (tier === 2) {
        const askSeq = rng.bool(0.35);
        if (askSeq) {
          const steps = [
            { pos: "first", cn: "先", py: "xiān", sentence: `每天早上${subj.cn}___起床，然后吃早饭，最后去上学。` },
            { pos: "then / afterwards", cn: "然后", py: "ránhòu", sentence: `每天早上${subj.cn}先刷牙，___吃早饭，最后坐校车上学。` },
            { pos: "finally", cn: "最后", py: "zuìhòu", sentence: `晚上${subj.cn}先做作业，然后洗澡，___十点睡觉。` },
          ];
          const st = rng.pick(steps);
          return {
            prompt: `Complete the daily-routine sequence marker meaning **${st.pos}**: \`${st.sentence}\``,
            answer: {
              type: "text",
              accept: st.cn === "然后" ? ["然后", "ránhòu", "接着", "jiēzhe"] : [st.cn, st.py],
              display: `${st.cn} (${st.py})`,
            },
            hint: "Recall the 3-step sequence ladder: 先…，然后…，最后….",
            solution: [`${st.pos} = ${st.cn} (${st.py}).`],
          };
        }
        return {
          prompt: `Verb-Copy Duration Check: type the missing **2-character \`Verb + 了\`** to say "${subj.en} did '${hv.en}' for ${dur.en}": \`昨天${subj.cn}${hv.verb}${hv.obj}___${dur.cn}。\``,
          answer: {
            type: "text",
            accept: [`${hv.verb}了`, `${hv.py}le`, `${hv.py} le`],
            display: `${hv.verb}了 (${hv.py}le)`,
          },
          hint: `Copy the verb ${hv.verb} (${hv.py}) right after ${hv.obj} and add 了!`,
          solution: [`昨天${subj.cn}${hv.verb}${hv.obj}${hv.verb}了${dur.cn}。(V + O + V + 了 + Duration).`],
        };
      }

      // Tier 3: Build full duration phrase (both Verb-copy and V + 了 + Duration + 的 + O accepted!)
      const copyAns = `${hv.verb}${hv.obj}${hv.verb}了${dur.cn}`;
      const deAns = `${hv.verb}了${dur.cn}的${hv.obj}`;
      return {
        prompt: `Write the complete past **duration verb phrase** (without subject/time) for **"${hv.en} for ${dur.en}"** using either Verb-Copy (\`V+O+V+了+Duration\`) or \`V+了+Duration+的+O\`: \`昨天${subj.cn}___。\``,
        answer: {
          type: "text",
          accept: [
            copyAns,
            deAns,
            `${hv.py} ${hv.objPy} ${hv.py}le ${dur.py}`,
            `${hv.py}le ${dur.py} de ${hv.objPy}`,
          ],
          display: `${copyAns} / ${deAns}`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${hv.verb}${hv.obj}${dur.cn}`, `${hv.verb}了${hv.obj}${dur.cn}`] },
            feedback: `Never glue duration directly after ${hv.obj}! Copy the verb (${copyAns}) or use 的 (${deAns}).`,
          },
        ],
        hint: `Repeat ${hv.verb}: ${hv.verb} + ${hv.obj} + ${hv.verb}了 + ${dur.cn} (or ${hv.verb}了 + ${dur.cn} + 的 + ${hv.obj}).`,
        solution: [
          `Verb-copy form: ${copyAns}`,
          `Alternative 的 form: ${deAns}`,
        ],
      };
    },
  },
];
