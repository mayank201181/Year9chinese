import type { Drill, Rng } from "./types";

const NAME_PY: Record<string, string> = {
  小明: "Xiǎomíng",
  林美: "Lín Měi",
  陈浩: "Chén Hào",
  安娜: "Ānnà",
  张宇: "Zhāng Yǔ",
  苏琳: "Sū Lín",
  李明: "Lǐ Míng",
  周悦: "Zhōu Yuè",
};
const CITY_PY: Record<string, string> = {
  新加坡: "Xīnjiāpō",
  伦敦: "Lúndūn",
  北京: "Běijīng",
  上海: "Shànghǎi",
  香港: "Xiānggǎng",
  悉尼: "Xīní",
  广州: "Guǎngzhōu",
  杭州: "Hángzhōu",
};
const SINGLE_REL_PY: Record<string, string> = {
  伯伯: "bóbo",
  叔叔: "shūshu",
  姑姑: "gūgu",
  舅舅: "jiùjiu",
  阿姨: "āyí",
  堂哥: "tánggē",
  表姐: "biǎojiě",
};
const NAMES = ["小明", "林美", "陈浩", "安娜", "张宇", "苏琳", "李明", "周悦"] as const;
const CITIES = ["新加坡", "伦敦", "北京", "上海", "香港", "悉尼", "广州", "杭州"] as const;
const JOBS: { cn: string; py: string; en: string }[] = [
  { cn: "医生", py: "yīshēng", en: "doctor" },
  { cn: "老师", py: "lǎoshī", en: "teacher" },
  { cn: "工程师", py: "gōngchéngshī", en: "engineer" },
  { cn: "律师", py: "lǜshī", en: "lawyer" },
  { cn: "护士", py: "hùshi", en: "nurse" },
  { cn: "厨师", py: "chúshī", en: "chef" },
  { cn: "商人", py: "shāngrén", en: "businessperson" },
];
const FESTIVALS = ["春节", "中秋节", "国庆节", "暑假", "寒假", "周末"] as const;
const CN_NUMS: Record<number, string> = {
  2: "两",
  3: "三",
  4: "四",
  5: "五",
  6: "六",
  7: "七",
  8: "八",
  9: "九",
};

interface RelativeSpec {
  en: string;
  cnCue: string;
  hanzi: string;
  pinyin: string;
  accept: string[];
  trapHanzi?: string;
  trapPinyin?: string;
  trapFeedback?: string;
  reason: string;
}

const CORE_RELATIVES: RelativeSpec[] = [
  {
    en: "father's father (paternal grandfather)",
    cnCue: "爸爸的爸爸",
    hanzi: "爷爷",
    pinyin: "yéye",
    accept: ["爷爷", "yéye"],
    trapHanzi: "外公",
    trapPinyin: "wàigōng",
    trapFeedback: "**外公 (wàigōng)** is mother's father; father's father is **爷爷 (yéye)**.",
    reason: "Father's parents are **爷爷 (yéye)** and **奶奶 (nǎinai)**.",
  },
  {
    en: "father's mother (paternal grandmother)",
    cnCue: "爸爸的妈妈",
    hanzi: "奶奶",
    pinyin: "nǎinai",
    accept: ["奶奶", "nǎinai"],
    trapHanzi: "外婆",
    trapPinyin: "wàipó",
    trapFeedback: "**外婆 (wàipó)** is mother's mother; father's mother is **奶奶 (nǎinai)**.",
    reason: "Father's mother is **奶奶 (nǎinai)**.",
  },
  {
    en: "mother's father (maternal grandfather — Singapore standard)",
    cnCue: "妈妈的爸爸",
    hanzi: "外公",
    pinyin: "wàigōng",
    accept: ["外公", "wàigōng", "姥爷", "lǎoye"],
    trapHanzi: "爷爷",
    trapPinyin: "yéye",
    trapFeedback: "**爷爷 (yéye)** is father's father; mother's father is **外公 (wàigōng)** (or Northern **姥爷**).",
    reason: "Mother's father is **外公 (wàigōng)** (or **姥爷 lǎoye** in Northern China).",
  },
  {
    en: "mother's mother (maternal grandmother — Singapore standard)",
    cnCue: "妈妈的妈妈",
    hanzi: "外婆",
    pinyin: "wàipó",
    accept: ["外婆", "wàipó", "姥姥", "lǎolao"],
    trapHanzi: "奶奶",
    trapPinyin: "nǎinai",
    trapFeedback: "**奶奶 (nǎinai)** is father's mother; mother's mother is **外婆 (wàipó)** (or Northern **姥姥**).",
    reason: "Mother's mother is **外婆 (wàipó)** (or **姥姥 lǎolao** in Northern China).",
  },
  {
    en: "father's older brother",
    cnCue: "爸爸的哥哥",
    hanzi: "伯伯",
    pinyin: "bóbo",
    accept: ["伯伯", "bóbo", "大伯", "dàbó"],
    trapHanzi: "叔叔",
    trapPinyin: "shūshu",
    trapFeedback: "**叔叔 (shūshu)** is father's YOUNGER brother; father's OLDER brother is **伯伯 (bóbo)**.",
    reason: "Father's older brother is **伯伯 (bóbo)**.",
  },
  {
    en: "father's younger brother",
    cnCue: "爸爸的弟弟",
    hanzi: "叔叔",
    pinyin: "shūshu",
    accept: ["叔叔", "shūshu"],
    trapHanzi: "伯伯",
    trapPinyin: "bóbo",
    trapFeedback: "**伯伯 (bóbo)** is father's OLDER brother; father's YOUNGER brother is **叔叔 (shūshu)**.",
    reason: "Father's younger brother is **叔叔 (shūshu)**.",
  },
  {
    en: "father's sister",
    cnCue: "爸爸的姐妹",
    hanzi: "姑姑",
    pinyin: "gūgu",
    accept: ["姑姑", "gūgu"],
    trapHanzi: "阿姨",
    trapPinyin: "āyí",
    trapFeedback: "**阿姨 (āyí)** is mother's sister; father's sister is **姑姑 (gūgu)**.",
    reason: "Father's sister (older or younger) is **姑姑 (gūgu)**.",
  },
  {
    en: "mother's brother (older or younger)",
    cnCue: "妈妈的兄弟",
    hanzi: "舅舅",
    pinyin: "jiùjiu",
    accept: ["舅舅", "jiùjiu"],
    trapHanzi: "叔叔",
    trapPinyin: "shūshu",
    trapFeedback: "**叔叔 (shūshu)** is father's younger brother; mother's brother is ALWAYS **舅舅 (jiùjiu)**.",
    reason: "Mother's brother (any age) is **舅舅 (jiùjiu)**.",
  },
  {
    en: "mother's sister (older or younger)",
    cnCue: "妈妈的姐妹",
    hanzi: "阿姨",
    pinyin: "āyí",
    accept: ["阿姨", "āyí", "姨妈", "yímā"],
    trapHanzi: "姑姑",
    trapPinyin: "gūgu",
    trapFeedback: "**姑姑 (gūgu)** is father's sister; mother's sister is **阿姨 (āyí)**.",
    reason: "Mother's sister is **阿姨 (āyí)**.",
  },
];

const SPOUSE_RELATIVES: RelativeSpec[] = [
  {
    en: "father's older brother's wife",
    cnCue: "伯伯的妻子",
    hanzi: "伯母",
    pinyin: "bómǔ",
    accept: ["伯母", "bómǔ"],
    trapHanzi: "婶婶",
    trapPinyin: "shěnshen",
    trapFeedback: "**婶婶** is father's YOUNGER brother's wife; **伯伯**'s wife is **伯母 (bómǔ)**.",
    reason: "**伯伯**'s wife is **伯母 (bómǔ)**.",
  },
  {
    en: "father's younger brother's wife",
    cnCue: "叔叔的妻子",
    hanzi: "婶婶",
    pinyin: "shěnshen",
    accept: ["婶婶", "shěnshen"],
    trapHanzi: "伯母",
    trapPinyin: "bómǔ",
    trapFeedback: "**伯母** is father's OLDER brother's wife; **叔叔**'s wife is **婶婶 (shěnshen)**.",
    reason: "**叔叔**'s wife is **婶婶 (shěnshen)**.",
  },
  {
    en: "father's sister's husband",
    cnCue: "姑姑的丈夫",
    hanzi: "姑父",
    pinyin: "gūfu",
    accept: ["姑父", "gūfu"],
    trapHanzi: "姨父",
    trapPinyin: "yífu",
    trapFeedback: "**姨父** is mother's sister's husband; **姑姑**'s husband is **姑父 (gūfu)**.",
    reason: "**姑姑**'s husband is **姑父 (gūfu)**.",
  },
  {
    en: "mother's brother's wife",
    cnCue: "舅舅的妻子",
    hanzi: "舅妈",
    pinyin: "jiùmā",
    accept: ["舅妈", "jiùmā"],
    trapHanzi: "阿姨",
    trapPinyin: "āyí",
    trapFeedback: "**阿姨** is mother's blood sister; **舅舅**'s wife is **舅妈 (jiùmā)**.",
    reason: "**舅舅**'s wife is **舅妈 (jiùmā)**.",
  },
  {
    en: "mother's sister's husband",
    cnCue: "阿姨的丈夫",
    hanzi: "姨父",
    pinyin: "yífu",
    accept: ["姨父", "yífu"],
    trapHanzi: "姑父",
    trapPinyin: "gūfu",
    trapFeedback: "**姑父** is father's sister's husband; **阿姨**'s husband is **姨父 (yífu)**.",
    reason: "**阿姨**'s husband is **姨父 (yífu)**.",
  },
];

export const drills: Drill[] = [
  {
    id: "relatives-family.paternal-maternal",
    topicId: "relatives-family",
    title: "Paternal vs Maternal Relatives (长辈称呼)",
    level: 1,
    guideRef: "paternal-maternal-grandparents",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const name = rng.pick(NAMES);
      const city = rng.pick(CITIES);

      if (tier === 1) {
        const rel = rng.pick(CORE_RELATIVES);
        const job = rng.pick(JOBS);
        const prompt = `${name}'s **${rel.en}** lives in ${city} (${job.en}). What Mandarin title does ${name} use?`;
        return {
          prompt,
          answer: { type: "text", accept: rel.accept, display: `${rel.hanzi} (${rel.pinyin})` },
          traps: rel.trapHanzi
            ? [{ spec: { type: "text", accept: [rel.trapHanzi, rel.trapPinyin!] }, feedback: rel.trapFeedback! }]
            : undefined,
          hint: "Check Father's side vs Mother's side first, then check age if it is Dad's brother.",
          solution: [rel.reason, `Answer: **${rel.hanzi} (${rel.pinyin})**.`],
        };
      }

      if (tier === 2) {
        const pool = [...CORE_RELATIVES, ...SPOUSE_RELATIVES];
        const rel = rng.pick(pool);
        const prompt = `${name} is introducing a relative from ${city}: **${rel.cnCue}** (${rel.en}). Write the exact Mandarin title.`;
        return {
          prompt,
          answer: { type: "text", accept: rel.accept, display: `${rel.hanzi} (${rel.pinyin})` },
          traps: rel.trapHanzi
            ? [{ spec: { type: "text", accept: [rel.trapHanzi, rel.trapPinyin!] }, feedback: rel.trapFeedback! }]
            : undefined,
          hint: "Match the parent branch (爸爸 vs 妈妈) and check whether it is a blood sibling or a spouse.",
          solution: [rel.reason, `Answer: **${rel.hanzi} (${rel.pinyin})**.`],
        };
      }

      // Tier 3: age-deduction & two-hop lineage
      const parentAge = rng.int(40, 48);
      const diff = rng.int(2, 6);
      const mode = rng.int(0, 4);
      if (mode === 0) {
        const uncAge = parentAge + diff;
        return {
          prompt: `${name}'s father is **${parentAge}** years old, and his brother in ${city} is **${uncAge}**. What does ${name} call this uncle?`,
          answer: { type: "text", accept: ["伯伯", "bóbo", "大伯", "dàbó"], display: "伯伯 (bóbo)" },
          traps: [{ spec: { type: "text", accept: ["叔叔", "shūshu"] }, feedback: `${uncAge} > ${parentAge}: he is OLDER than Dad, so use **伯伯 (bóbo)**!` }],
          hint: `Compare ${uncAge} with Dad's age (${parentAge}).`,
          solution: [`${uncAge} > ${parentAge} → father's older brother → **伯伯 (bóbo)**.`],
        };
      }
      if (mode === 1) {
        const uncAge = parentAge - diff;
        return {
          prompt: `${name}'s father is **${parentAge}** years old, and his brother in ${city} is **${uncAge}**. What does ${name} call this uncle?`,
          answer: { type: "text", accept: ["叔叔", "shūshu"], display: "叔叔 (shūshu)" },
          traps: [{ spec: { type: "text", accept: ["伯伯", "bóbo"] }, feedback: `${uncAge} < ${parentAge}: he is YOUNGER than Dad, so use **叔叔 (shūshu)**!` }],
          hint: `Compare ${uncAge} with Dad's age (${parentAge}).`,
          solution: [`${uncAge} < ${parentAge} → father's younger brother → **叔叔 (shūshu)**.`],
        };
      }
      if (mode === 2) {
        const older = rng.bool();
        const uncAge = older ? parentAge + diff : parentAge - diff;
        return {
          prompt: `${name}'s mother is **${parentAge}** years old, and her brother in ${city} is **${uncAge}**. What does ${name} call this uncle?`,
          answer: { type: "text", accept: ["舅舅", "jiùjiu"], display: "舅舅 (jiùjiu)" },
          traps: [
            { spec: { type: "text", accept: ["伯伯", "bóbo", "叔叔", "shūshu"] }, feedback: "Age does NOT split mother's brother — mother's brother is ALWAYS **舅舅 (jiùjiu)**!" },
          ],
          hint: "He is on MOTHER's side! Does age change mother's brother's title?",
          solution: ["Mother's brother is ALWAYS **舅舅 (jiùjiu)** regardless of age."],
        };
      }
      if (mode === 3) {
        const rel = rng.pick(SPOUSE_RELATIVES);
        return {
          prompt: `During a family dinner in ${city}, ${name} greets **${rel.cnCue}**. Write the exact Mandarin title (Hanzi or tone-marked Pinyin).`,
          answer: { type: "text", accept: rel.accept, display: `${rel.hanzi} (${rel.pinyin})` },
          traps: rel.trapHanzi
            ? [{ spec: { type: "text", accept: [rel.trapHanzi, rel.trapPinyin!] }, feedback: rel.trapFeedback! }]
            : undefined,
          hint: "Identify the blood uncle/aunt first, then recall their spouse's exact title.",
          solution: [rel.reason, `Answer: **${rel.hanzi} (${rel.pinyin})**.`],
        };
      }
      const northGrand = rng.bool();
      if (northGrand) {
        return {
          prompt: `${name}'s friend from ${city} says they are visiting **姥爷 (lǎoye)**. What is the Singapore / Southern Mandarin equivalent?`,
          answer: { type: "text", accept: ["外公", "wàigōng"], display: "外公 (wàigōng)" },
          traps: [{ spec: { type: "text", accept: ["爷爷", "yéye"] }, feedback: "**姥爷** is MATERNAL grandfather (**外公**), not paternal **爷爷**!" }],
          hint: "姥爷/姥姥 are the Northern names for mother's parents.",
          solution: ["Northern **姥爷 (lǎoye)** = Southern/Singapore **外公 (wàigōng)** (mother's father)."],
        };
      }
      return {
        prompt: `${name}'s friend from ${city} says they are visiting **姥姥 (lǎolao)**. What is the Singapore / Southern Mandarin equivalent?`,
        answer: { type: "text", accept: ["外婆", "wàipó"], display: "外婆 (wàipó)" },
        traps: [{ spec: { type: "text", accept: ["奶奶", "nǎinai"] }, feedback: "**姥姥** is MATERNAL grandmother (**外婆**), not paternal **奶奶**!" }],
        hint: "姥爷/姥姥 are the Northern names for mother's parents.",
        solution: ["Northern **姥姥 (lǎolao)** = Southern/Singapore **外婆 (wàipó)** (mother's mother)."],
      };
    },
  },
  {
    id: "relatives-family.cousin-tang-biao",
    topicId: "relatives-family",
    title: "Cousin Classifier: 堂 (táng) vs 表 (biǎo)",
    level: 1,
    guideRef: "cousins-family-tree",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const name = rng.pick(NAMES);
      const myAge = rng.int(12, 16);
      const offset = rng.nonZero(-5, 5);
      const cousinAge = myAge + offset;
      const isMale = rng.bool();
      const isOlder = cousinAge > myAge;

      const parents: { cn: string; en: string; isTang: boolean }[] = [
        { cn: "伯伯", en: "father's older brother", isTang: true },
        { cn: "叔叔", en: "father's younger brother", isTang: true },
        { cn: "姑姑", en: "father's sister", isTang: false },
        { cn: "舅舅", en: "mother's brother", isTang: false },
        { cn: "阿姨", en: "mother's sister", isTang: false },
      ];
      const par = rng.pick(parents);
      const prefix = par.isTang ? "堂" : "表";
      const prefixPy = par.isTang ? "táng" : "biǎo";
      const wrongPrefix = par.isTang ? "表" : "堂";
      const wrongPrefixPy = par.isTang ? "biǎo" : "táng";
      const suffix = isMale ? (isOlder ? "哥" : "弟") : isOlder ? "姐" : "妹";
      const suffixPy = isMale ? (isOlder ? "gē" : "dì") : isOlder ? "jiě" : "mèi";
      const wrongAgeSuffix = isMale ? (isOlder ? "弟" : "哥") : isOlder ? "妹" : "姐";
      const wrongAgePy = isMale ? (isOlder ? "dì" : "gē") : isOlder ? "mèi" : "jiě";

      const hanzi = `${prefix}${suffix}`;
      const pinyin = `${prefixPy}${suffixPy}`;
      const childEn = isMale ? "son" : "daughter";
      const childCn = isMale ? "儿子" : "女儿";

      let prompt: string;
      if (tier === 1) {
        prompt = `${name} is **${myAge}** years old. What does ${name} call their **${par.cn} (${par.en})**'s **${cousinAge}-year-old ${childEn}**?`;
      } else if (tier === 2) {
        prompt = `${name}今年**${myAge}岁**，${name}的**${par.cn}**有一个**${cousinAge}岁的${childCn}**。${name}应该叫TA什么？`;
      } else {
        const city = rng.pick(CITIES);
        prompt = `In ${city}, ${name} (${myAge}) meets their **${par.en}**'s **${cousinAge}-year-old ${childEn}**. Write the exact Mandarin cousin title.`;
      }

      return {
        prompt,
        answer: { type: "text", accept: [hanzi, pinyin], display: `${hanzi} (${pinyin})` },
        traps: [
          {
            spec: { type: "text", accept: [`${wrongPrefix}${suffix}`, `${wrongPrefixPy}${suffixPy}`] },
            feedback: par.isTang
              ? `**${par.cn}** is father's brother, so their child takes **堂 (táng)**, not **表 (biǎo)**!`
              : `**${par.cn}** (${par.en}) is NOT father's brother, so their child takes **表 (biǎo)**, not **堂 (táng)**!`,
          },
          {
            spec: { type: "text", accept: [`${prefix}${wrongAgeSuffix}`, `${prefixPy}${wrongAgePy}`] },
            feedback: `Compare the cousin's age (${cousinAge}) with ${name}'s age (${myAge}): ${isOlder ? "older" : "younger"} → **${suffix}**!`,
          },
        ],
        hint: `Step 1: Is ${par.cn} father's brother? (${par.isTang ? "Yes → 堂" : "No → 表"}). Step 2: Compare ${cousinAge} with ${myAge}.`,
        solution: [
          `1. **${par.cn}** (${par.en}) → prefix **${prefix} (${prefixPy})**.`,
          `2. ${isMale ? "Male" : "Female"}, ${cousinAge} ${isOlder ? ">" : "<"} ${myAge} → suffix **${suffix} (${suffixPy})**.`,
          `3. Combine: **${hanzi} (${pinyin})**.`,
        ],
      };
    },
  },
  {
    id: "relatives-family.measure-words-visiting",
    topicId: "relatives-family",
    title: "People Measure Words (口/个/位) & Visiting Verbs",
    level: 2,
    guideRef: "visiting-relatives",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const name = rng.pick(NAMES);
      const city = rng.pick(CITIES);
      const job = rng.pick(JOBS);
      const fest = rng.pick(FESTIVALS);

      if (tier === 1) {
        const pickType = rng.int(0, 2);
        if (pickType === 0) {
          const n = rng.int(3, 9);
          return {
            prompt: `Fill in the single measure word for household headcount: **${name}家住在${city}，家里有${CN_NUMS[n]}___人。**`,
            answer: { type: "text", accept: ["口", "kǒu"], display: "口 (kǒu)" },
            traps: [{ spec: { type: "text", accept: ["位", "wèi"] }, feedback: "Total household headcount uses **口 (kǒu)**, not **位**." }],
            hint: "Use the household-member classifier (literally 'mouths to feed').",
            solution: [`Household total always takes **口 (kǒu)**: **家里有${CN_NUMS[n]}口人**。`],
          };
        }
        if (pickType === 1) {
          const n = rng.int(2, 6);
          const cousin = rng.pick(["堂哥", "堂妹", "表姐", "表弟", "堂姐", "表妹"]);
          return {
            prompt: `Fill in the everyday people measure word: **${name}在${city}有${CN_NUMS[n]}___${cousin}。**`,
            answer: { type: "text", accept: ["个", "gè"], display: "个 (gè)" },
            traps: [{ spec: { type: "text", accept: ["口", "kǒu"] }, feedback: "**口 (kǒu)** is only for total household headcount — use **个 (gè)** for individual cousins." }],
            hint: "Use the general measure word for counting peers and cousins.",
            solution: [`General counting of cousins uses **个 (gè)**: **${CN_NUMS[n]}个${cousin}**。`],
          };
        }
        const elder = rng.pick(["伯伯", "叔叔", "姑姑", "舅舅", "阿姨", "外公", "爷爷"]);
        return {
          prompt: `Fill in the **polite/respectful** measure word: **${name}的${elder}住在${city}，是一___很有名的${job.cn}。**`,
          answer: { type: "text", accept: ["位", "wèi"], display: "位 (wèi)" },
          traps: [{ spec: { type: "text", accept: ["口", "kǒu"] }, feedback: "Polite introductions of elders and professions use **位 (wèi)**, not **口**." }],
          hint: "Choose the respectful measure word with the 亻 radical.",
          solution: [`Polite classifier for elders & professions = **位 (wèi)**: **一位很有名的${job.cn}**。`],
        };
      }

      if (tier === 2) {
        const sub = rng.int(0, 3);
        const elder = rng.pick(["爷爷", "奶奶", "外公", "外婆", "伯伯", "姑姑", "舅舅"]);
        if (sub === 0) {
          const noun = rng.pick(["表哥", "表妹", "堂弟", "堂姐", "舅舅", "姑姑"]);
          return {
            prompt: `Fill in the correct Mandarin word for **'two'** before a measure word: **${name}在${city}有___个${noun}。**`,
            answer: { type: "text", accept: ["两", "liǎng"], display: "两 (liǎng)" },
            traps: [{ spec: { type: "text", accept: ["二", "èr"] }, feedback: "Never use **二 (èr)** directly before a measure word — always use **两 (liǎng)**!" }],
            hint: "Before 个 / 位 / 口, 'two' is NOT 二!",
            solution: [`Always use **两 (liǎng)** before a measure word: **两个${noun}**。`],
          };
        }
        if (sub === 1) {
          return {
            prompt: `Fill in the respectful two-character verb meaning **'to visit warmly'**: **每年${fest}，${name}都会去${city}___${elder}。**`,
            answer: { type: "text", accept: ["看望", "kànwàng"], display: "看望 (kànwàng)" },
            traps: [{ spec: { type: "text", accept: ["看见", "kànjiàn"] }, feedback: "**看见** means 'to catch sight of'; warmly visiting elders is **看望 (kànwàng)**." }],
            hint: "Starts with 看 (kàn) and expresses caring visits to relatives.",
            solution: [`**看望 (kànwàng)** = to visit an elder or relative warmly: **去${city}看望${elder}**。`],
          };
        }
        if (sub === 2) {
          const age = rng.int(65, 82);
          return {
            prompt: `Fill in the two-character verb meaning **'to retire'**: **${name}的${elder}今年${age}岁，以前是${job.cn}，现在已经___了。**`,
            answer: { type: "text", accept: ["退休", "tuìxiū"], display: "退休 (tuìxiū)" },
            hint: "Combines 退 (step back) + 休 (rest).",
            solution: ["**退休 (tuìxiū)** means 'to retire': **现在已经退休了**。"],
          };
        }
        return {
          prompt: `Fill in the two-character Spring Festival verb meaning **'to pay a New Year visit'**: **大年初一，${name}去${city}的${elder}家___。**`,
          answer: { type: "text", accept: ["拜年", "bàinián"], display: "拜年 (bàinián)" },
          hint: "Combines 拜 (pay respects) + 年 (New Year).",
          solution: ["**拜年 (bàinián)** specifically means paying New Year visits to elders and relatives."],
        };
      }

      // Tier 3: residence word order & co-residence
      const elder = rng.pick(["爷爷奶奶", "外公外婆", "伯伯一家", "姑姑一家", "舅舅一家", "阿姨一家"]);
      const isTogether = rng.bool();
      if (isTogether) {
        const partner = rng.pick(["我们", "叔叔一家", "舅舅一家", "爸爸妈妈"]);
        return {
          prompt: `Translate the three/four-character phrase **'live together'** to finish: **${name}的${elder}和${partner}___（在${city}）。**`,
          answer: { type: "text", accept: ["住在一起", "zhù zài yìqǐ", "zhù zài yīqǐ"], display: "住在一起 (zhù zài yìqǐ)" },
          hint: "Combine 住在 (live at) + 一起 (together).",
          solution: [`**住在一起 (zhù zài yìqǐ)** means 'live together': **${elder}和${partner}住在一起**。`],
        };
      }
      const singleRel = rng.pick(["伯伯", "叔叔", "姑姑", "舅舅", "阿姨", "堂哥", "表姐"]);
      const nPy = NAME_PY[name];
      const rPy = SINGLE_REL_PY[singleRel];
      const cPy = CITY_PY[city];
      return {
        prompt: `Fix the faulty word order into natural Mandarin: **${name}的${singleRel}在${city}住。**`,
        answer: {
          type: "text",
          accept: [
            `${name}的${singleRel}住在${city}`,
            `${singleRel}住在${city}`,
            `${nPy} de ${rPy} zhù zài ${cPy}`,
            `${rPy} zhù zài ${cPy}`,
          ],
          display: `${name}的${singleRel}住在${city}`,
        },
        hint: "With 住 (to live), does 在 + Place come BEFORE 住 or AFTER 住?",
        solution: [`Place follows **住在**: **${name}的${singleRel}住在${city}** (*${nPy} de ${rPy} zhù zài ${cPy}*).`],
      };
    },
  },
  {
    id: "relatives-family.gatherings-connectives",
    topicId: "relatives-family",
    title: "Family Gatherings & Paired Connectives (聚会与连词)",
    level: 3,
    guideRef: "family-celebrations-writing",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const name = rng.pick(NAMES);
      const rel = rng.pick(["外婆", "外公", "爷爷", "奶奶", "舅舅", "姑姑", "阿姨", "表姐", "堂哥", "堂姐"]);
      const fest = rng.pick(FESTIVALS);
      const city = rng.pick(CITIES);

      if (tier === 1) {
        const mode = rng.int(0, 3);
        if (mode === 0) {
          return {
            prompt: `Fill in the two-character noun meaning **'relationship'**: **${name}和${rel}___很好，常常一起聊天儿。**`,
            answer: { type: "text", accept: ["关系", "guānxi", "guānxì"], display: "关系 (guānxi)" },
            hint: "Pinyin starts with guān-.",
            solution: [`**关系 (guānxi)** = relationship: **${name}和${rel}关系很好**。`],
          };
        }
        if (mode === 1) {
          return {
            prompt: `Fill in the two-character adjective meaning **'lively and festive'**: **${fest}时，很多亲戚来${city}聚会，家里非常___！**`,
            answer: { type: "text", accept: ["热闹", "rènao", "rènào"], display: "热闹 (rènao)" },
            hint: "Combines 热 (warm/hot) + 闹 (bustling).",
            solution: ["**热闹 (rènao)** means lively and festive."],
          };
        }
        if (mode === 2) {
          return {
            prompt: `Fill in the three-character noun meaning **'whole-family portrait photo'**: **每年${fest}，${name}全家都会在${rel}家拍一张___。**`,
            answer: { type: "text", accept: ["全家福", "quánjiāfú"], display: "全家福 (quánjiāfú)" },
            hint: "Literally 'whole (全) + family (家) + blessing (福)'.",
            solution: ["**全家福 (quánjiāfú)** = whole-family portrait photo."],
          };
        }
        return {
          prompt: `Fill in the two-character noun meaning **'family reunion'**: **${fest}的时候，${name}和住在${city}的${rel}一起吃___饭。**`,
          answer: { type: "text", accept: ["团圆", "tuányuán"], display: "团圆 (tuányuán)" },
          hint: "Combines 团 (gather) + 圆 (round/complete).",
          solution: ["**团圆 (tuányuán)** = family reunion (**团圆饭** = reunion dinner)."],
        };
      }

      if (tier === 2) {
        const pairMode = rng.int(0, 3);
        if (pairMode === 0) {
          return {
            prompt: `Complete the paired connective: **虽然${name}的${rel}住在${city}很远，___他们每周都视频聊天儿。**`,
            answer: { type: "text", accept: ["但是", "dànshì", "可是", "kěshì"], display: "但是 (dànshì)" },
            traps: [{ spec: { type: "text", accept: ["所以", "suǒyǐ"] }, feedback: "**所以** pairs with **因为**, whereas **虽然** pairs with **但是**!" }],
            hint: "虽然 (although) ALWAYS pairs with 'yet/but' in Mandarin.",
            solution: ["**虽然…，但是…** (*suīrán..., dànshì...*) completes the contrast."],
          };
        }
        if (pairMode === 1) {
          return {
            prompt: `Complete the paired connective: **因为${name}的${rel}非常幽默，___全家人都很喜欢在${fest}去${city}看望TA。**`,
            answer: { type: "text", accept: ["所以", "suǒyǐ"], display: "所以 (suǒyǐ)" },
            traps: [{ spec: { type: "text", accept: ["但是", "dànshì"] }, feedback: "**但是** is for contrast (**虽然**). Cause-and-effect **因为** pairs with **所以**!" }],
            hint: "因为 (because) pairs with 'therefore / so'.",
            solution: ["**因为…，所以…** (*yīnwèi..., suǒyǐ...*) links cause and result."],
          };
        }
        if (pairMode === 2) {
          return {
            prompt: `Complete the paired connective: **${name}的${rel}不但很聪明，___在${city}做饭做得特别好吃。**`,
            answer: { type: "text", accept: ["而且", "érqiě"], display: "而且 (érqiě)" },
            traps: [{ spec: { type: "text", accept: ["但是", "dànshì"] }, feedback: "Both qualities are positive, so **不但** (not only) pairs with **而且** (but also)!" }],
            hint: "不但 (not only) pairs with 'but also'.",
            solution: ["**不但…，而且…** (*búdàn..., érqiě...*) adds a second positive point."],
          };
        }
        return {
          prompt: `Complete the simultaneous-action pattern: **${fest}晚上，${name}和${rel}在${city}一边喝茶，___聊天儿。**`,
          answer: { type: "text", accept: ["一边", "yìbiān", "yībiān"], display: "一边 (yìbiān)" },
          hint: "Repeat the exact same two characters to show two actions happening at once.",
          solution: ["**一边…，一边…** (*yìbiān... yìbiān...*) means doing two things at once."],
        };
      }

      // Tier 3: nuanced cultural verbs & IGCSE connectives
      const mode = rng.int(0, 3);
      const elderOnly = rng.pick(["爷爷", "奶奶", "外公", "外婆"]);
      if (mode === 0) {
        return {
          prompt: `Choose the culturally accurate downward-affection verb ('dotes on / cherishes'): **住在${city}的${elderOnly}非常___${name}。**`,
          answer: { type: "text", accept: ["疼爱", "téng'ài"], display: "疼爱 (téng'ài)" },
          traps: [{ spec: { type: "text", accept: ["尊敬", "zūnjìng"] }, feedback: "**尊敬** goes upward (younger → elder); elder → younger affection is **疼爱 (téng'ài)**." }],
          hint: "Used when grandparents or elders dote lovingly on children (téng'ài).",
          solution: [`**疼爱 (téng'ài)** flows from elders to younger family members: **${elderOnly}非常疼爱${name}**。`],
        };
      }
      if (mode === 1) {
        return {
          prompt: `Choose the culturally accurate upward-respect verb ('deeply respects'): **${name}非常___住在${city}的${elderOnly}。**`,
          answer: { type: "text", accept: ["尊敬", "zūnjìng"], display: "尊敬 (zūnjìng)" },
          traps: [{ spec: { type: "text", accept: ["疼爱", "téng'ài"] }, feedback: "**疼爱** only goes from elders downward to children; from you to elders, use **尊敬 (zūnjìng)**!" }],
          hint: "Means 'to respect / esteem' an elder (zūnjìng).",
          solution: [`**尊敬 (zūnjìng)** expresses respect toward elders: **${name}非常尊敬${elderOnly}**。`],
        };
      }
      if (mode === 2) {
        return {
          prompt: `Fill in the four-character idiom meaning **'three generations living under one roof'**: **${name}一家住在${city}，___，非常幸福。**`,
          answer: { type: "text", accept: ["三代同堂", "sāndài tóngtáng"], display: "三代同堂 (sāndài tóngtáng)" },
          hint: "Literally 'three (三) generations (代) same (同) hall (堂)'.",
          solution: ["**三代同堂 (sāndài tóngtáng)** = three generations living under one roof."],
        };
      }
      return {
        prompt: `Fill in the future-plan verb ('plan to') to add a future time frame: **今年${fest}，${name}___坐飞机去${city}看望${rel}。**`,
        answer: { type: "text", accept: ["打算", "dǎsuan", "dǎsuàn"], display: "打算 (dǎsuan)" },
        hint: "A high-band IGCSE verb for future plans (dǎsuan).",
        solution: [`**打算 (dǎsuan)** introduces a future plan: **${name}打算坐飞机去${city}看望${rel}**。`],
      };
    },
  },
];
