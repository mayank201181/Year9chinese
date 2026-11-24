// Procedural skill drills for Year 9 Mandarin Chinese — School Subjects & Facilities (学校科目与设施)
// 4 drills covering all 4 guide sections, seeded RNG, 3 tiers each.
import type { Drill, DrillItem, Rng } from "./types.ts";
import { clockAccepted, numberToHanzi } from "../chinese/grammar.ts";

interface SubjectEntry {
  hanzi: string;
  pinyin: string;
  alt: string[];
  en: string;
  cluster: string;
}

const SUBJECTS: SubjectEntry[] = [
  { hanzi: "中文", pinyin: "Zhōngwén", alt: ["汉语", "hànyǔ"], en: "Chinese", cluster: "Languages" },
  { hanzi: "英文", pinyin: "Yīngwén", alt: ["英语", "yīngyǔ"], en: "English", cluster: "Languages" },
  { hanzi: "西班牙文", pinyin: "Xībānyáwén", alt: ["西班牙语", "xībānyáyǔ"], en: "Spanish", cluster: "Languages" },
  { hanzi: "法文", pinyin: "Fǎwén", alt: ["法语", "fǎyǔ"], en: "French", cluster: "Languages" },
  { hanzi: "数学", pinyin: "shùxué", alt: [], en: "Maths", cluster: "STEM" },
  { hanzi: "科学", pinyin: "kēxué", alt: [], en: "Science", cluster: "STEM" },
  { hanzi: "生物", pinyin: "shēngwù", alt: [], en: "Biology", cluster: "STEM" },
  { hanzi: "化学", pinyin: "huàxué", alt: [], en: "Chemistry", cluster: "STEM" },
  { hanzi: "物理", pinyin: "wùlǐ", alt: [], en: "Physics", cluster: "STEM" },
  { hanzi: "地理", pinyin: "dìlǐ", alt: [], en: "Geography", cluster: "Humanities" },
  { hanzi: "历史", pinyin: "lìshǐ", alt: [], en: "History", cluster: "Humanities" },
  { hanzi: "电脑", pinyin: "diànnǎo", alt: ["计算机", "jìsuànjī"], en: "Computing / ICT", cluster: "STEM" },
  { hanzi: "艺术", pinyin: "yìshù", alt: ["美术", "měishù"], en: "Art", cluster: "Arts & Sport" },
  { hanzi: "音乐", pinyin: "yīnyuè", alt: [], en: "Music", cluster: "Arts & Sport" },
  { hanzi: "戏剧", pinyin: "xìjù", alt: [], en: "Drama", cluster: "Arts & Sport" },
  { hanzi: "体育", pinyin: "tǐyù", alt: [], en: "PE", cluster: "Arts & Sport" },
];

const OPINIONS = [
  { hanzi: "有趣", pinyin: "yǒuqù", alt: ["有意思", "yǒuyìsi"], en: "interesting" },
  { hanzi: "有用", pinyin: "yǒuyòng", alt: [], en: "useful" },
  { hanzi: "实用", pinyin: "shíyòng", alt: [], en: "practical" },
  { hanzi: "重要", pinyin: "zhòngyào", alt: [], en: "important" },
  { hanzi: "难", pinyin: "nán", alt: [], en: "difficult" },
  { hanzi: "容易", pinyin: "róngyì", alt: [], en: "easy" },
  { hanzi: "无聊", pinyin: "wúliáo", alt: [], en: "boring" },
];

const NUM_PINYIN: Record<number, string> = {
  1: "yī",
  2: "liǎng",
  3: "sān",
  4: "sì",
  5: "wǔ",
  6: "liù",
  7: "qī",
  8: "bā",
  9: "jiǔ",
  10: "shí",
  11: "shíyī",
  12: "shí'èr",
};

const COUNT_WORDS_EN: Record<number, string> = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
};

const WEEKDAYS = [
  { h: "星期一", p: "xīngqīyī", en: "Monday" },
  { h: "星期二", p: "xīngqī'èr", en: "Tuesday" },
  { h: "星期三", p: "xīngqīsān", en: "Wednesday" },
  { h: "星期四", p: "xīngqīsì", en: "Thursday" },
  { h: "星期五", p: "xīngqīwǔ", en: "Friday" },
];

interface ClockSlot {
  hour: number;
  minute: number;
  label24: string;
  hanzi: string;
  pinyin: string;
}

const CLOCK_SLOTS: ClockSlot[] = [
  { hour: 8, minute: 0, label24: "8:00", hanzi: "八点", pinyin: "bā diǎn" },
  { hour: 8, minute: 15, label24: "8:15", hanzi: "八点一刻", pinyin: "bā diǎn yí kè" },
  { hour: 8, minute: 30, label24: "8:30", hanzi: "八点半", pinyin: "bā diǎn bàn" },
  { hour: 9, minute: 0, label24: "9:00", hanzi: "九点", pinyin: "jiǔ diǎn" },
  { hour: 9, minute: 30, label24: "9:30", hanzi: "九点半", pinyin: "jiǔ diǎn bàn" },
  { hour: 10, minute: 15, label24: "10:15", hanzi: "十点一刻", pinyin: "shí diǎn yí kè" },
  { hour: 10, minute: 30, label24: "10:30", hanzi: "十点半", pinyin: "shí diǎn bàn" },
  { hour: 11, minute: 0, label24: "11:00", hanzi: "十一点", pinyin: "shíyī diǎn" },
  { hour: 12, minute: 30, label24: "12:30", hanzi: "十二点半", pinyin: "shí'èr diǎn bàn" },
  { hour: 1, minute: 30, label24: "1:30", hanzi: "一点半", pinyin: "yì diǎn bàn" },
  { hour: 2, minute: 0, label24: "2:00", hanzi: "两点", pinyin: "liǎng diǎn" },
  { hour: 2, minute: 30, label24: "2:30", hanzi: "两点半", pinyin: "liǎng diǎn bàn" },
  { hour: 3, minute: 30, label24: "3:30", hanzi: "三点半", pinyin: "sān diǎn bàn" },
  { hour: 4, minute: 30, label24: "4:30", hanzi: "四点半", pinyin: "sì diǎn bàn" },
];

const TIME_SPANS = [
  { start: "上午八点", startP: "shàngwǔ bā diǎn", end: "下午三点半", endP: "xiàwǔ sān diǎn bàn", en: "from 8:00 a.m. to 3:30 p.m.", verb: "上课", verbP: "shàngkè", verbEn: "have lessons" },
  { start: "上午八点一刻", startP: "shàngwǔ bā diǎn yí kè", end: "九点一刻", endP: "jiǔ diǎn yí kè", en: "from 8:15 a.m. to 9:15", verb: "上中文课", verbP: "shàng Zhōngwén kè", verbEn: "have Chinese" },
  { start: "十点一刻", startP: "shí diǎn yí kè", end: "十点半", endP: "shí diǎn bàn", en: "from 10:15 to 10:30", verb: "休息", verbP: "xiūxi", verbEn: "take a break" },
  { start: "十二点半", startP: "shí'èr diǎn bàn", end: "一点半", endP: "yì diǎn bàn", en: "from 12:30 to 1:30", verb: "吃午饭", verbP: "chī wǔfàn", verbEn: "eat lunch" },
  { start: "下午一点半", startP: "xiàwǔ yì diǎn bàn", end: "两点半", endP: "liǎng diǎn bàn", en: "from 1:30 p.m. to 2:30", verb: "上科学课", verbP: "shàng kēxué kè", verbEn: "have Science" },
  { start: "下午三点半", startP: "xiàwǔ sān diǎn bàn", end: "四点半", endP: "sì diǎn bàn", en: "from 3:30 p.m. to 4:30", verb: "参加课外活动", verbP: "cānjiā kèwài huódòng", verbEn: "join CCAs" },
  { start: "晚上七点", startP: "wǎnshang qī diǎn", end: "八点", endP: "bā diǎn", en: "from 7:00 p.m. to 8:00", verb: "做作业", verbP: "zuò zuòyè", verbEn: "do homework" },
  { start: "上午九点半", startP: "shàngwǔ jiǔ diǎn bàn", end: "十点半", endP: "shí diǎn bàn", en: "from 9:30 a.m. to 10:30", verb: "上数学课", verbP: "shàng shùxué kè", verbEn: "have Maths" },
  { start: "下午两点半", startP: "xiàwǔ liǎng diǎn bàn", end: "三点半", endP: "sān diǎn bàn", en: "from 2:30 p.m. to 3:30", verb: "上体育课", verbP: "shàng tǐyù kè", verbEn: "have PE" },
];

interface FacilityEntry {
  hanzi: string;
  pinyin: string;
  alt: string[];
  en: string;
  activity: string;
  activityP: string;
  activityEn: string;
}

const FACILITIES: FacilityEntry[] = [
  { hanzi: "图书馆", pinyin: "túshūguǎn", alt: [], en: "library", activity: "借书和看书", activityP: "jiè shū hé kànshū", activityEn: "borrow books and read" },
  { hanzi: "科学实验室", pinyin: "kēxué shíyànshì", alt: ["实验室", "shíyànshì"], en: "science lab", activity: "做实验", activityP: "zuò shíyàn", activityEn: "do experiments" },
  { hanzi: "体育馆", pinyin: "tǐyùguǎn", alt: [], en: "sports hall / indoor gym", activity: "打篮球", activityP: "dǎ lánqiú", activityEn: "play indoor basketball" },
  { hanzi: "运动场", pinyin: "yùndòngchǎng", alt: ["操场", "cāochǎng"], en: "sports field / pitch", activity: "踢足球", activityP: "tī zúqiú", activityEn: "play football outdoors" },
  { hanzi: "游泳池", pinyin: "yóuyǒngchí", alt: [], en: "swimming pool", activity: "游泳", activityP: "yóuyǒng", activityEn: "swim" },
  { hanzi: "食堂", pinyin: "shítáng", alt: [], en: "canteen / dining hall", activity: "吃午饭", activityP: "chī wǔfàn", activityEn: "eat lunch" },
  { hanzi: "礼堂", pinyin: "lǐtáng", alt: [], en: "assembly hall / auditorium", activity: "开周会", activityP: "kāi zhōuhuì", activityEn: "attend weekly assembly" },
  { hanzi: "电脑室", pinyin: "diànnǎoshì", alt: [], en: "computer room", activity: "上电脑课", activityP: "shàng diànnǎo kè", activityEn: "have Computing class" },
  { hanzi: "音乐室", pinyin: "yīnyuèshì", alt: [], en: "music room", activity: "唱歌和弹钢琴", activityP: "chànggē hé tán gāngqín", activityEn: "sing and play piano" },
  { hanzi: "艺术室", pinyin: "yìshùshì", alt: [], en: "art room", activity: "画画儿", activityP: "huàhuàr", activityEn: "paint and draw" },
  { hanzi: "教室", pinyin: "jiàoshì", alt: [], en: "classroom", activity: "上中文课", activityP: "shàng Zhōngwén kè", activityEn: "have Chinese class" },
  { hanzi: "保健室", pinyin: "bǎojiànshì", alt: [], en: "medical room", activity: "休息", activityP: "xiūxi", activityEn: "rest when unwell" },
];

const POSITIONS = [
  { h: "旁边", p: "pángbiān", en: "next to / beside" },
  { h: "对面", p: "duìmiàn", en: "opposite / across from" },
  { h: "前面", p: "qiánmiàn", en: "in front of" },
  { h: "后面", p: "hòumiàn", en: "behind" },
  { h: "楼上", p: "lóushàng", en: "upstairs from" },
  { h: "楼下", p: "lóuxià", en: "downstairs from" },
];

const SCHOOL_SUBJECT_PRONOUNS = [
  { h: "我", p: "wǒ" },
  { h: "我们", p: "wǒmen" },
  { h: "同学们", p: "tóngxuémen" },
  { h: "哥哥", p: "gēge" },
  { h: "姐姐", p: "jiějie" },
];

const SCHOOL_TIMES = [
  { h: "午饭时间", p: "wǔfàn shíjiān" },
  { h: "星期三上午", p: "xīngqīsān shàngwǔ" },
  { h: "每天放学后", p: "měitiān fàngxué hòu" },
  { h: "星期五下午", p: "xīngqīwǔ xiàwǔ" },
  { h: "下雨的时候", p: "xiàyǔ de shíhou" },
];

const TEACHER_TRAITS = [
  { h: "幽默", p: "yōumò", en: "humorous / witty" },
  { h: "耐心", p: "nàixīn", en: "patient" },
  { h: "严格", p: "yángé", en: "strict" },
  { h: "认真", p: "rènzhēn", en: "conscientious / serious" },
  { h: "友善", p: "yǒushàn", en: "kind / friendly" },
  { h: "教得很好", p: "jiāo de hěn hǎo", en: "teaches very well" },
  { h: "宽敞", p: "kuānchang", en: "spacious" },
  { h: "明亮", p: "míngliàng", en: "bright / well-lit" },
  { h: "现代", p: "xiàndài", en: "modern" },
  { h: "先进", p: "xiānjìn", en: "advanced" },
  { h: "擅长", p: "shàncháng", en: "to be good at" },
  { h: "选修", p: "xuǎnxiū", en: "to choose as an option / elective" },
  { h: "成绩", p: "chéngjì", en: "grades / results" },
  { h: "丰富", p: "fēngfù", en: "rich / varied (e.g. CCAs)" },
];

const COMPARE_BLANKS = [
  { s: "我觉得数学___历史难一点儿。", en: "Maths is a little harder than History.", ans: ["比", "bǐ"], disp: "比 (bǐ)", why: "A 比 B + Adj (+ 一点儿) compares two subjects." },
  { s: "科学___地理有趣得多。", en: "Science is much more interesting than Geography.", ans: ["比", "bǐ"], disp: "比 (bǐ)", why: "A 比 B + Adj + 得多 means 'much more … than'." },
  { s: "中文___西班牙文更有用。", en: "Chinese is even more useful than Spanish.", ans: ["比", "bǐ"], disp: "比 (bǐ)", why: "A 比 B + 更 + Adj means 'even more … than'." },
  { s: "物理___生物难得多。", en: "Physics is much harder than Biology.", ans: ["比", "bǐ"], disp: "比 (bǐ)", why: "A 比 B + Adj + 得多 compares two Science branches." },
  { s: "新图书馆___旧图书馆宽敞得多。", en: "The new library is much more spacious than the old library.", ans: ["比", "bǐ"], disp: "比 (bǐ)", why: "A 比 B + Adj + 得多 compares two campus facilities." },
  { s: "艺术___物理那么难。", en: "Art is not as difficult as Physics.", ans: ["没有", "méiyǒu"], disp: "没有 (méiyǒu)", why: "A 没有 B (那么) + Adj means 'not as … as'." },
  { s: "地理___化学那么难。", en: "Geography is not as difficult as Chemistry.", ans: ["没有", "méiyǒu"], disp: "没有 (méiyǒu)", why: "Negating a 比 comparison uses 没有 (méiyǒu)." },
  { s: "历史___数学那么难。", en: "History is not as difficult as Maths.", ans: ["没有", "méiyǒu"], disp: "没有 (méiyǒu)", why: "A 没有 B 那么 + Adj expresses 'not as … as'." },
  { s: "小教室___礼堂那么大。", en: "The small classroom is not as big as the auditorium.", ans: ["没有", "méiyǒu"], disp: "没有 (méiyǒu)", why: "Use 没有 for 'not as big as'." },
  { s: "星期五的作业___星期一那么多。", en: "Friday's homework is not as much as Monday's.", ans: ["没有", "méiyǒu"], disp: "没有 (méiyǒu)", why: "A 没有 B 那么 + Adj compares quantities negatively." },
  { s: "在所有科目里，我___喜欢科学。", en: "Of all subjects, I like Science most.", ans: ["最", "zuì"], disp: "最 (zuì)", why: "最 (zuì) marks the superlative ('most / favourite')." },
  { s: "我觉得体育是___轻松的课。", en: "I think PE is the most relaxing subject.", ans: ["最", "zuì"], disp: "最 (zuì)", why: "最 + Adj marks '-est / most'." },
  { s: "游泳池是我___喜欢的校园设施。", en: "The swimming pool is my favourite campus facility.", ans: ["最", "zuì"], disp: "最 (zuì)", why: "最喜欢 means 'like most / favourite'." },
  { s: "我觉得化学比生物___有趣。", en: "I think Chemistry is even more interesting than Biology.", ans: ["更", "gèng"], disp: "更 (gèng)", why: "After 比, use 更 (even more) before the adjective — NEVER 很!" },
  { s: "在新加坡学中文比法文___实用。", en: "Learning Chinese in Singapore is even more practical than French.", ans: ["更", "gèng"], disp: "更 (gèng)", why: "更 (gèng) means 'even more' in a 比 comparison." },
  { s: "新电脑室的设备比以前___先进。", en: "The new ICT suite's equipment is even more advanced than before.", ans: ["更", "gèng"], disp: "更 (gèng)", why: "更 (gèng) intensifies an adjective after 比 without using 很." },
  { s: "王老师不但很耐心，而且教___很好。", en: "Teacher Wang is not only patient, but also teaches very well.", ans: ["得", "de"], disp: "得 (de)", why: "Right AFTER a verb (教), use the degree complement 得 (never 的!)." },
  { s: "历史老师讲故事讲___特别生动。", en: "The History teacher tells stories especially vividly.", ans: ["得", "de"], disp: "得 (de)", why: "Evaluating HOW a verb is performed requires 得 after the verb." },
  { s: "李老师在课堂上解释___非常清楚。", en: "Teacher Li explains very clearly in class.", ans: ["得", "de"], disp: "得 (de)", why: "Degree complement 得 sits directly after 解释." },
  { s: "这个学期我的中文成绩提高___很快。", en: "This term my Chinese grades improved very quickly.", ans: ["得", "de"], disp: "得 (de)", why: "Verb (提高) + 得 + 很快 evaluates how fast the improvement happened." },
  { s: "虽然物理有点儿难，___我非常喜欢做实验。", en: "Although Physics is a bit hard, I love doing experiments.", ans: ["但是", "可是", "dànshì", "kěshì"], disp: "但是 (dànshì)", why: "虽然 (although) pairs with 但是 or 可是." },
  { s: "虽然数学老师很严格，___他帮我提高了成绩。", en: "Although the Maths teacher is strict, he helped raise my grades.", ans: ["但是", "可是", "dànshì", "kěshì"], disp: "但是 (dànshì)", why: "虽然 pairs with 但是 / 可是." },
  { s: "我们的校园不但很大，___设施十分现代。", en: "Our campus is not only big, but its facilities are also very modern.", ans: ["而且", "érqiě"], disp: "而且 (érqiě)", why: "不但 (not only) always pairs with 而且 (but also)." },
  { s: "除了中文以外，我___学习西班牙文。", en: "Besides Chinese, I also study Spanish.", ans: ["还", "也", "hái", "yě"], disp: "还 (hái)", why: "除了……以外 pairs with 还 / 也 ('also / in addition')." },
  { s: "___地理以外，我还打算选修计算机。", en: "Besides Geography, I also plan to choose Computer Science.", ans: ["除了", "chúle"], disp: "除了 (chúle)", why: "除了……以外，……还…… means 'besides …, also …'." },
  { s: "体育课___数学课轻松得多。", en: "PE class is much more relaxing than Maths class.", ans: ["比", "bǐ"], disp: "比 (bǐ)", why: "A 比 B + Adj + 得多 compares two school subjects." },
  { s: "戏剧室___音乐室那么吵。", en: "The drama studio is not as noisy as the music room.", ans: ["没有", "méiyǒu"], disp: "没有 (méiyǒu)", why: "A 没有 B (那么) + Adj expresses 'not as … as'." },
  { s: "在所有老师里，我___敬佩我们的历史老师。", en: "Of all teachers, I admire our History teacher most.", ans: ["最", "zuì"], disp: "最 (zuì)", why: "最 (zuì) marks the superlative ('most')." },
  { s: "张老师在科学实验室示范___非常认真。", en: "Teacher Zhang demonstrates very carefully in the science lab.", ans: ["得", "de"], disp: "得 (de)", why: "Degree complement 得 follows the verb (示范) to evaluate HOW it is done." },
  { s: "我觉得西班牙文比法文___容易一点儿。", en: "I think Spanish is a little bit even easier than French.", ans: ["更", "gèng"], disp: "更 (gèng)", why: "Use 更 (even more) before the adjective after 比 — never 很!" },
];

export const drills: Drill[] = [
  {
    id: "school-subjects-facilities.subjects-mw",
    topicId: "school-subjects-facilities",
    title: "School Subjects, 门 vs 节 & Subject Opinions",
    level: 1,
    guideRef: "school-subjects-opinions",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const s = rng.pick(SUBJECTS);
        const stems = [
          `How do you write the Year 9 subject **${s.en}** (${s.cluster}) in Simplified Mandarin?`,
          `On a Mandarin timetable, what is the word for **${s.en}**?`,
          `Translate the school subject **${s.en}** into Simplified Mandarin (or tone-marked Pinyin).`,
          `In the ${s.cluster} cluster, give the Mandarin name for **${s.en}**.`,
        ];
        return {
          prompt: rng.pick(stems),
          answer: {
            type: "text",
            accept: [s.hanzi, s.pinyin, s.pinyin.toLowerCase(), ...s.alt],
            display: `${s.hanzi} (${s.pinyin})`,
          },
          hint: `Tone-marked Pinyin starts with "${s.pinyin.slice(0, 3)}…".`,
          solution: [`${s.en} = ${s.hanzi} (${s.pinyin}).`],
        };
      }
      if (tier === 2) {
        const isWholeSubject = rng.bool();
        const n = rng.pick([2, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        const cH = n === 2 ? "两" : numberToHanzi(n);
        const cP = NUM_PINYIN[n] ?? "sān";
        const enN = COUNT_WORDS_EN[n] ?? String(n);
        if (isWholeSubject) {
          const noun = rng.pick([
            { h: "科目", p: "kēmù", en: "subjects" },
            { h: "外语", p: "wàiyǔ", en: "foreign languages" },
            { h: "选修课", p: "xuǎnxiūkè", en: "elective courses" },
            { h: "核心科目", p: "héxīn kēmù", en: "core subjects" },
          ]);
          const ansH = `${cH}门${noun.h}`;
          const ansP = `${cP} mén ${noun.p}`;
          return {
            prompt: `Translate **${enN} ${noun.en}** into Simplified Mandarin (watch **门 vs 节** and **两 vs 二**!).`,
            answer: {
              type: "text",
              accept: [ansH, ansP],
              display: `${ansH} (${ansP})`,
            },
            traps: [
              { spec: { type: "text", accept: [`${cH}节${noun.h}`, `${cP} jié ${noun.p}`] }, feedback: "Whole curriculum subjects/courses take 门 (mén), NOT 节!" },
              ...(n === 2
                ? [{ spec: { type: "text" as const, accept: [`二门${noun.h}`, `èr mén ${noun.p}`] }, feedback: "Before a measure word, standalone 2 MUST be 两 (liǎng)!" }]
                : []),
            ],
            hint: `Whole subjects take 门 (mén)${n === 2 ? ", and 2 before a MW is 两 (liǎng)" : ""}.`,
            solution: [
              `Whole courses take 门 (mén): ${cH} + 门 + ${noun.h} = ${ansH} (${ansP}).`,
            ],
          };
        }
        const dayPart = rng.pick([
          { h: "每天", p: "měitiān", en: "every day" },
          { h: "星期一", p: "xīngqīyī", en: "on Monday" },
          { h: "星期三", p: "xīngqīsān", en: "on Wednesday" },
          { h: "上午", p: "shàngwǔ", en: "in the morning" },
          { h: "下午", p: "xiàwǔ", en: "in the afternoon" },
        ]);
        const ansH = `${cH}节课`;
        const ansP = `${cP} jié kè`;
        return {
          prompt: `Complete the daily timetable phrase (${dayPart.en}): translate **${enN} lessons / periods** into Simplified Mandarin.`,
          answer: {
            type: "text",
            accept: [ansH, ansP],
            display: `${ansH} (${ansP})`,
          },
          traps: [
            { spec: { type: "text", accept: [`${cH}门课`, `${cP} mén kè`] }, feedback: "Individual timetable periods take 节 (jié), NOT 门!" },
            ...(n === 2
              ? [{ spec: { type: "text" as const, accept: ["二节课", "èr jié kè"] }, feedback: "Use 两 (liǎng) before a measure word, never 二!" }]
              : []),
          ],
          hint: `Single timetable periods take 节 (jié)${n === 2 ? ", and 2 before a MW is 两 (liǎng)" : ""}.`,
          solution: [
            `Individual timetable periods take 节 (jié): ${ansH} (${ansP}).`,
          ],
        };
      }
      // Tier 3: Full opinion sentence without 是 trap
      const s = rng.pick(SUBJECTS);
      const op = rng.pick(OPINIONS);
      const ansH = `我觉得${s.hanzi}很${op.hanzi}`;
      const ansH2 = `我觉得${s.hanzi}非常${op.hanzi}`;
      const ansP = `wǒ juéde ${s.pinyin} hěn ${op.pinyin}`;
      const altAccepts = [
        ansH,
        ansH2,
        ansP,
        ansP.toLowerCase(),
        ...op.alt.map((a) => `我觉得${s.hanzi}很${a}`),
      ];
      return {
        prompt: `Translate into Simplified Mandarin (remember: NO **是** before adjectives!): **I think ${s.en} is very ${op.en}.**`,
        answer: {
          type: "text",
          accept: altAccepts,
          display: `${ansH} (Wǒ juéde ${s.pinyin} hěn ${op.pinyin})`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`我觉得${s.hanzi}是${op.hanzi}`, `我觉得${s.hanzi}是很${op.hanzi}`] },
            feedback: "Never insert 是 before a Mandarin adjective! Link directly with 很 or 非常.",
          },
        ],
        hint: `Frame: 我觉得 + ${s.hanzi} + 很 + ${op.en} (${op.pinyin}).`,
        solution: [
          `${s.en} = ${s.hanzi}, ${op.en} = ${op.hanzi} (${op.pinyin}).`,
          `Full sentence (no 是!): ${ansH} (Wǒ juéde ${s.pinyin} hěn ${op.pinyin}).`,
        ],
      };
    },
  },
  {
    id: "school-subjects-facilities.timetable-spans",
    topicId: "school-subjects-facilities",
    title: "Timetables, Clock Times & 从……到……",
    level: 1,
    guideRef: "school-timetable",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        if (rng.bool(0.4)) {
          const day = rng.pick(WEEKDAYS);
          const period = rng.int(1, 6);
          const subj = rng.pick(SUBJECTS);
          const pH = `第${numberToHanzi(period)}节课`;
          const pP = `dì ${NUM_PINYIN[period] === "liǎng" ? "èr" : NUM_PINYIN[period]} jié kè`;
          return {
            prompt: `On **${day.en} (${day.h})**, Period ${period} is ${subj.en}. Write **Period ${period}** (the ordinal lesson phrase) in Simplified Mandarin.`,
            answer: {
              type: "text",
              accept: [pH, pP, pP.replace(/\s+/g, "")],
              display: `${pH} (${pP})`,
            },
            hint: `Use 第 (dì) + number (watch: ordinal 2nd is 第二, NOT *第两*!) + 节课.`,
            solution: [
              `Ordinal prefix 第 + ${numberToHanzi(period)} + 节课 = ${pH} (${pP}).`,
            ],
          };
        }
        const slot = rng.pick(CLOCK_SLOTS);
        const day = rng.pick(WEEKDAYS);
        const acceptedClock = clockAccepted(slot.hour, slot.minute);
        return {
          prompt: `On **${day.en}'s timetable**, a bell rings at **${slot.label24}**. Write **${slot.label24}** in Simplified Mandarin (or tone-marked Pinyin).`,
          answer: {
            type: "text",
            accept: [...acceptedClock, slot.pinyin, slot.pinyin.replace(/\s+/g, "")],
            display: `${slot.hanzi} (${slot.pinyin})`,
          },
          hint: `${slot.hour === 2 ? "2 o'clock is ALWAYS 两点 (liǎng diǎn)! " : ""}Use 点 (o'clock), 一刻 (:15), or 半 (:30).`,
          solution: [
            `${slot.label24} in Mandarin = ${slot.hanzi} (${slot.pinyin}).`,
          ],
        };
      }
      if (tier === 2) {
        const sp = rng.pick(TIME_SPANS);
        const day = rng.pick(WEEKDAYS);
        const spanH = `从${sp.start}到${sp.end}`;
        const spanP = `cóng ${sp.startP} dào ${sp.endP}`;
        return {
          prompt: `For **${day.en}'s schedule** (*${sp.verbEn}*), translate the time span **${sp.en}** using **从……到……**.`,
          answer: {
            type: "text",
            accept: [spanH, spanP],
            display: `${spanH} (${spanP})`,
          },
          hint: `Pattern: 从 (cóng) + ${sp.start} + 到 (dào) + ${sp.end}.`,
          solution: [
            `从 + start (${sp.start}) + 到 + end (${sp.end}) = ${spanH} (${spanP}).`,
          ],
        };
      }
      // Tier 3: Re-order scrambled 从……到…… STPVO sentence
      const sp = rng.pick(TIME_SPANS);
      const day = rng.pick(WEEKDAYS);
      const subj = rng.pick([
        { h: "我们", p: "wǒmen" },
        { h: "我", p: "wǒ" },
        { h: "同学们", p: "tóngxuémen" },
      ]);
      const spanH = `从${sp.start}到${sp.end}`;
      const spanP = `cóng ${sp.startP} dào ${sp.endP}`;
      const pieces = rng.shuffle([subj.h, day.h, spanH, sp.verb]);
      const ans1 = `${day.h}${subj.h}${spanH}${sp.verb}`;
      const ans2 = `${subj.h}${day.h}${spanH}${sp.verb}`;
      const ans1P = `${day.p} ${subj.p} ${spanP} ${sp.verbP}`;
      const ans2P = `${subj.p} ${day.p} ${spanP} ${sp.verbP}`;
      return {
        prompt: `Arrange these 4 timetable blocks into accurate Mandarin **STPVO** order: \`${pieces.join("` / `")}\``,
        answer: {
          type: "text",
          accept: [ans1, ans2, ans1P, ans2P],
          display: `${ans2} (${ans2P})`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${subj.h}${sp.verb}${spanH}${day.h}`, `${day.h}${subj.h}${sp.verb}${spanH}`] },
            feedback: "Put the entire 从……到…… time span BEFORE the verb!",
          },
        ],
        hint: "Order: Subject + Weekday (or Weekday + Subject) → 从……到…… → Verb.",
        solution: [
          `Time (${day.h} + ${spanH}) always stands before the verb (${sp.verb}).`,
          `Full sentence: ${ans2} (${ans2P}).`,
        ],
      };
    },
  },
  {
    id: "school-subjects-facilities.campus-facilities",
    topicId: "school-subjects-facilities",
    title: "Campus Facilities, Locations & STPVO (学校设施)",
    level: 2,
    guideRef: "school-facilities",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const f = rng.pick(FACILITIES);
        const prompts = [
          `Which campus facility is the **${f.en}** (where students ${f.activityEn})?`,
          `Translate **${f.en}** into Simplified Mandarin (or tone-marked Pinyin).`,
          `On a campus tour, where do students go to **${f.activityEn}**? Give the Mandarin facility name.`,
          `What is the Mandarin campus building name for **${f.en}**?`,
        ];
        const traps =
          f.hanzi === "食堂"
            ? [{ spec: { type: "text" as const, accept: ["礼堂", "lǐtáng"] }, feedback: "礼堂 is the assembly hall; the dining hall/canteen is 食堂 (shítáng)!" }]
            : f.hanzi === "礼堂"
              ? [{ spec: { type: "text" as const, accept: ["食堂", "shítáng"] }, feedback: "食堂 is the canteen; the assembly hall is 礼堂 (lǐtáng)!" }]
              : [];
        return {
          prompt: rng.pick(prompts),
          answer: {
            type: "text",
            accept: [f.hanzi, f.pinyin, ...f.alt],
            display: `${f.hanzi} (${f.pinyin})`,
          },
          traps,
          hint: `Watch the building suffix (室/馆/堂/场/池). Pinyin starts with "${f.pinyin.slice(0, 3)}…".`,
          solution: [
            `${f.en} = ${f.hanzi} (${f.pinyin}) — students ${f.activityEn} (${f.activity}) there.`,
          ],
        };
      }
      if (tier === 2) {
        const pair = rng.shuffle(FACILITIES);
        const fA = pair[0];
        const fB = pair[1];
        const pos = rng.pick(POSITIONS);
        if (rng.bool(0.5)) {
          return {
            prompt: `Fill in the exact campus position word (**${pos.en}**): **${fA.hanzi}在${fB.hanzi}的___。**`,
            answer: {
              type: "text",
              accept: [pos.h, pos.p],
              display: `${pos.h} (${pos.p})`,
            },
            hint: `Position word for "${pos.en}" starts with "${pos.p.slice(0, 2)}…".`,
            solution: [
              `${pos.en} = ${pos.h} (${pos.p}) → ${fA.hanzi}在${fB.hanzi}的${pos.h}。`,
            ],
          };
        }
        const ansH = `${fA.hanzi}在${fB.hanzi}的${pos.h}`;
        const ansP = `${fA.pinyin} zài ${fB.pinyin} de ${pos.p}`;
        return {
          prompt: `Translate this campus location sentence into Simplified Mandarin: **The ${fA.en} (${fA.hanzi}) is ${pos.en} the ${fB.en} (${fB.hanzi}).**`,
          answer: {
            type: "text",
            accept: [ansH, ansP],
            display: `${ansH} (${ansP})`,
          },
          hint: `Frame: ${fA.hanzi} + 在 + ${fB.hanzi} + 的 + ${pos.h}.`,
          solution: [
            `A 在 B 的 + Position → ${ansH} (${ansP}).`,
          ],
        };
      }
      // Tier 3: Re-order scrambled STPVO campus facility sentence
      const subj = rng.pick(SCHOOL_SUBJECT_PRONOUNS);
      const time = rng.pick(SCHOOL_TIMES);
      const f = rng.pick(FACILITIES);
      const placeH = `在${f.hanzi}`;
      const placeP = `zài ${f.pinyin}`;
      const pieces = rng.shuffle([subj.h, time.h, placeH, f.activity]);
      const ans1 = `${subj.h}${time.h}${placeH}${f.activity}`;
      const ans2 = `${time.h}${subj.h}${placeH}${f.activity}`;
      const ans1P = `${subj.p} ${time.p} ${placeP} ${f.activityP}`;
      const ans2P = `${time.p} ${subj.p} ${placeP} ${f.activityP}`;
      return {
        prompt: `Arrange these 4 campus blocks into accurate **STPVO** Mandarin: \`${pieces.join("` / `")}\``,
        answer: {
          type: "text",
          accept: [ans1, ans2, ans1P, ans2P],
          display: `${ans1} (${ans1P})`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${subj.h}${time.h}${f.activity}${placeH}`] },
            feedback: "Never put 在 + Facility after the verb! Move Place directly BEFORE the action.",
          },
        ],
        hint: "STPVO puts Subject + Time (or Time + Subject) → Place (在…) → Action.",
        solution: [
          `S (${subj.h}) + T (${time.h}) + P (${placeH}) + Action (${f.activity}) → ${ans1}.`,
        ],
      };
    },
  },
  {
    id: "school-subjects-facilities.compare-teachers",
    topicId: "school-subjects-facilities",
    title: "Comparing Subjects (比/没有/最) & Describing Teachers (得)",
    level: 3,
    guideRef: "comparing-subjects-teachers",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const c = rng.pick(COMPARE_BLANKS);
        return {
          prompt: `Fill in the missing Mandarin grammar word: **${c.s}**`,
          answer: {
            type: "text",
            accept: c.ans,
            display: c.disp,
          },
          hint: `English cue: "${c.en}"`,
          solution: [c.why, `Answer: ${c.disp}.`],
        };
      }
      if (tier === 2) {
        const tr = rng.pick(TEACHER_TRAITS);
        const prompt = rng.pick([
          `Translate this Year 9 school/teacher word or phrase into Simplified Mandarin: **${tr.en}**.`,
          `In an IGCSE essay on Tanglin school life, how do you write **${tr.en}** in Mandarin?`,
          `Give the Simplified Mandarin (or tone-marked Pinyin) for **${tr.en}**.`,
        ]);
        return {
          prompt,
          answer: {
            type: "text",
            accept: [tr.h, tr.p],
            display: `${tr.h} (${tr.p})`,
          },
          traps:
            tr.h === "教得很好"
              ? [{ spec: { type: "text" as const, accept: ["教的很好", "教地很好"] }, feedback: "Right after the verb 教, you MUST use degree complement 得 (never 的 or 地)!" }]
              : [],
          hint: `Tone-marked Pinyin starts with "${tr.p.slice(0, 3)}…".`,
          solution: [`${tr.en} = ${tr.h} (${tr.p}).`],
        };
      }
      // Tier 3: Translate full 比 or 没有 subject comparison sentences (zero 很 trap!)
      const pair = rng.shuffle(SUBJECTS);
      const sA = pair[0];
      const sB = pair[1];
      const mode = rng.pick(["bi-plain", "bi-geng", "bi-deduo", "meiyou"]);
      const adj = rng.pick([
        { h: "难", p: "nán", en: "harder", baseEn: "difficult" },
        { h: "有趣", p: "yǒuqù", en: "more interesting", baseEn: "interesting" },
        { h: "有用", p: "yǒuyòng", en: "more useful", baseEn: "useful" },
        { h: "容易", p: "róngyì", en: "easier", baseEn: "easy" },
      ]);
      if (mode === "meiyou") {
        const ansH = `${sA.hanzi}没有${sB.hanzi}那么${adj.h}`;
        const ansH2 = `${sA.hanzi}没有${sB.hanzi}${adj.h}`;
        const ansP = `${sA.pinyin} méiyǒu ${sB.pinyin} nàme ${adj.p}`;
        return {
          prompt: `Use **没有** to translate: **${sA.en} (${sA.hanzi}) is not as ${adj.baseEn} as ${sB.en} (${sB.hanzi}).**`,
          answer: {
            type: "text",
            accept: [ansH, ansH2, ansP, ansP.toLowerCase()],
            display: `${ansH} (${ansP})`,
          },
          hint: `Frame: ${sA.hanzi} + 没有 + ${sB.hanzi} + (那么) + ${adj.h}.`,
          solution: [
            `A 没有 B (那么) + Adj → ${ansH} (${ansP}).`,
          ],
        };
      }
      if (mode === "bi-geng") {
        const ansH = `${sA.hanzi}比${sB.hanzi}更${adj.h}`;
        const ansP = `${sA.pinyin} bǐ ${sB.pinyin} gèng ${adj.p}`;
        return {
          prompt: `Use **比……更……** (NO **很**!) to translate: **${sA.en} (${sA.hanzi}) is even ${adj.en} than ${sB.en} (${sB.hanzi}).**`,
          answer: {
            type: "text",
            accept: [ansH, ansP, ansP.toLowerCase()],
            display: `${ansH} (${ansP})`,
          },
          traps: [
            { spec: { type: "text", accept: [`${sA.hanzi}比${sB.hanzi}很${adj.h}`] }, feedback: "NEVER put 很 after 比! Use 更 (gèng) for 'even more'." },
          ],
          hint: `Frame: ${sA.hanzi} + 比 + ${sB.hanzi} + 更 + ${adj.h}.`,
          solution: [
            `A 比 B 更 + Adj → ${ansH} (${ansP}).`,
          ],
        };
      }
      if (mode === "bi-deduo") {
        const ansH = `${sA.hanzi}比${sB.hanzi}${adj.h}得多`;
        const ansP = `${sA.pinyin} bǐ ${sB.pinyin} ${adj.p} de duō`;
        return {
          prompt: `Use **比……得多** (NO **很**!) to translate: **${sA.en} (${sA.hanzi}) is much ${adj.en} than ${sB.en} (${sB.hanzi}).**`,
          answer: {
            type: "text",
            accept: [ansH, ansP, ansP.toLowerCase()],
            display: `${ansH} (${ansP})`,
          },
          traps: [
            { spec: { type: "text", accept: [`${sA.hanzi}比${sB.hanzi}很${adj.h}`, `${sA.hanzi}比${sB.hanzi}非常${adj.h}`] }, feedback: "NEVER put 很 or 非常 after 比! Add 得多 AFTER the adjective." },
          ],
          hint: `Frame: ${sA.hanzi} + 比 + ${sB.hanzi} + ${adj.h} + 得多.`,
          solution: [
            `A 比 B + Adj + 得多 → ${ansH} (${ansP}).`,
          ],
        };
      }
      const ansH = `${sA.hanzi}比${sB.hanzi}${adj.h}`;
      const ansP = `${sA.pinyin} bǐ ${sB.pinyin} ${adj.p}`;
      return {
        prompt: `Use **比** (NO **很**!) to translate: **${sA.en} (${sA.hanzi}) is ${adj.en} than ${sB.en} (${sB.hanzi}).**`,
        answer: {
          type: "text",
          accept: [ansH, ansP, ansP.toLowerCase()],
          display: `${ansH} (${ansP})`,
        },
        traps: [
          { spec: { type: "text", accept: [`${sA.hanzi}比${sB.hanzi}很${adj.h}`] }, feedback: "NEVER insert 很 after 比!" },
        ],
        hint: `Frame: ${sA.hanzi} + 比 + ${sB.hanzi} + ${adj.h}.`,
        solution: [
          `A 比 B + Adj → ${ansH} (${ansP}).`,
        ],
      };
    },
  },
];
