import type { Drill, DrillItem, Rng } from "./types";

interface FestivalFact {
  festival: string;
  festPinyin: string;
  festEn: string;
  date: string;
  datePinyin: string;
  dateEn: string;
  food: string;
  foodPinyin: string;
  foodEn: string;
  custom: string;
  customPinyin: string;
  customEn: string;
  verb: string;
  verbPinyin: string;
  obj: string;
  objPinyin: string;
  symbol: string;
  symbolPinyin: string;
  symbolEn: string;
}

const FESTIVALS: FestivalFact[] = [
  {
    festival: "春节",
    festPinyin: "Chūnjié",
    festEn: "Spring Festival",
    date: "正月初一",
    datePinyin: "Zhēngyuè chūyī",
    dateEn: "1st day of the 1st lunar month",
    food: "饺子",
    foodPinyin: "jiǎozi",
    foodEn: "dumplings",
    custom: "贴春联",
    customPinyin: "tiē chūnlián",
    customEn: "paste red couplets",
    verb: "贴",
    verbPinyin: "tiē",
    obj: "春联",
    objPinyin: "chūnlián",
    symbol: "好运",
    symbolPinyin: "hǎoyùn",
    symbolEn: "good luck",
  },
  {
    festival: "春节",
    festPinyin: "Chūnjié",
    festEn: "Spring Festival",
    date: "正月初一",
    datePinyin: "Zhēngyuè chūyī",
    dateEn: "1st day of the 1st lunar month",
    food: "年糕",
    foodPinyin: "niángāo",
    foodEn: "New Year sticky rice cake",
    custom: "发红包",
    customPinyin: "fā hóngbāo",
    customEn: "hand out red packets",
    verb: "发",
    verbPinyin: "fā",
    obj: "红包",
    objPinyin: "hóngbāo",
    symbol: "年年高升",
    symbolPinyin: "niánnián gāoshēng",
    symbolEn: "rising higher every year",
  },
  {
    festival: "中秋节",
    festPinyin: "Zhōngqiūjié",
    festEn: "Mid-Autumn Festival",
    date: "八月十五",
    datePinyin: "Bāyuè shíwǔ",
    dateEn: "15th day of the 8th lunar month",
    food: "月饼",
    foodPinyin: "yuèbǐng",
    foodEn: "mooncakes",
    custom: "赏月",
    customPinyin: "shǎngyuè",
    customEn: "admire the full moon",
    verb: "提",
    verbPinyin: "tí",
    obj: "灯笼",
    objPinyin: "dēnglóng",
    symbol: "团圆",
    symbolPinyin: "tuányuán",
    symbolEn: "family reunion",
  },
  {
    festival: "端午节",
    festPinyin: "Duānwǔjié",
    festEn: "Dragon Boat Festival",
    date: "五月初五",
    datePinyin: "Wǔyuè chūwǔ",
    dateEn: "5th day of the 5th lunar month",
    food: "粽子",
    foodPinyin: "zòngzi",
    foodEn: "sticky rice dumplings in bamboo leaves",
    custom: "划龙舟",
    customPinyin: "huá lóngzhōu",
    customEn: "row dragon boats",
    verb: "划",
    verbPinyin: "huá",
    obj: "龙舟",
    objPinyin: "lóngzhōu",
    symbol: "纪念屈原",
    symbolPinyin: "jìniàn Qū Yuán",
    symbolEn: "commemorating Qu Yuan",
  },
  {
    festival: "元宵节",
    festPinyin: "Yuánxiāojié",
    festEn: "Lantern Festival",
    date: "正月十五",
    datePinyin: "Zhēngyuè shíwǔ",
    dateEn: "15th day of the 1st lunar month",
    food: "汤圆",
    foodPinyin: "tāngyuán",
    foodEn: "sweet glutinous rice balls",
    custom: "猜灯谜",
    customPinyin: "cāi dēngmí",
    customEn: "guess lantern riddles",
    verb: "猜",
    verbPinyin: "cāi",
    obj: "灯谜",
    objPinyin: "dēngmí",
    symbol: "团圆",
    symbolPinyin: "tuányuán",
    symbolEn: "family reunion",
  },
];

const SUBJECTS = [
  { cn: "我", py: "wǒ", en: "I" },
  { cn: "我和家人", py: "wǒ hé jiārén", en: "my family and I" },
  { cn: "哥哥", py: "gēge", en: "my older brother" },
  { cn: "姐姐", py: "jiějie", en: "my older sister" },
  { cn: "爸爸妈妈", py: "bàba māma", en: "Mum and Dad" },
  { cn: "爷爷奶奶", py: "yéye nǎinai", en: "Grandpa and Grandma" },
  { cn: "外婆", py: "wàipó", en: "maternal grandma" },
  { cn: "我们全家人", py: "wǒmen quánjiārén", en: "our whole family" },
  { cn: "表哥和我", py: "biǎogē hé wǒ", en: "my cousin and I" },
  { cn: "同学们", py: "tóngxuémen", en: "classmates" },
];

const SINGAPORE_PLACES = [
  { cn: "在牛车水", py: "zài Niúchēshuǐ", en: "in Chinatown" },
  { cn: "在滨海湾花园", py: "zài Bīnhǎiwān Huāyuán", en: "at Gardens by the Bay" },
  { cn: "在公园里", py: "zài gōngyuán lǐ", en: "in the park" },
  { cn: "在外婆家", py: "zài wàipó jiā", en: "at Grandma's house" },
  { cn: "在学校礼堂", py: "zài xuéxiào lǐtáng", en: "in the school hall" },
  { cn: "在家里", py: "zài jiālǐ", en: "at home" },
  { cn: "在新加坡河边", py: "zài Xīnjiāpō Hé biān", en: "by the Singapore River" },
];

const OUTDOOR_WATER_PLACES = [
  { cn: "在滨海湾", py: "zài Bīnhǎiwān", en: "at Marina Bay" },
  { cn: "在新加坡河边", py: "zài Xīnjiāpō Hé biān", en: "by the Singapore River" },
  { cn: "在勿洛蓄水池", py: "zài Wùluò Xùshuǐchí", en: "at Bedok Reservoir" },
  { cn: "在加冷河", py: "zài Jiālěng Hé", en: "at the Kallang River" },
];

const OUTDOOR_FEST_PLACES = [
  { cn: "在牛车水", py: "zài Niúchēshuǐ", en: "in Chinatown" },
  { cn: "在滨海湾花园", py: "zài Bīnhǎiwān Huāyuán", en: "at Gardens by the Bay" },
  { cn: "在公园里", py: "zài gōngyuán lǐ", en: "in the park" },
  { cn: "在新加坡河边", py: "zài Xīnjiāpō Hé biān", en: "by the Singapore River" },
  { cn: "在学校礼堂", py: "zài xuéxiào lǐtáng", en: "in the school hall" },
];

function placeForCustom(rng: Rng, custom: string) {
  if (custom.includes("龙舟")) return rng.pick(OUTDOOR_WATER_PLACES);
  if (custom.includes("花灯") || custom.includes("灯谜") || custom.includes("赏月") || custom.includes("烟花")) {
    return rng.pick(OUTDOOR_FEST_PLACES);
  }
  return rng.pick(SINGAPORE_PLACES);
}

const SPRING_VOCAB_ITEMS = [
  { cn: "春节", py: "Chūnjié", en: "Spring Festival / Chinese New Year", clue: "1st day of the 1st lunar month" },
  { cn: "除夕", py: "chúxī", en: "Chinese New Year's Eve", clue: "the evening before 正月初一" },
  { cn: "年夜饭", py: "niányèfàn", en: "reunion dinner on New Year's Eve", clue: "the big family feast on 除夕" },
  { cn: "春联", py: "chūnlián", en: "Spring Festival red couplets", clue: "red auspicious poetry strips pasted on doorways" },
  { cn: "贴春联", py: "tiē chūnlián", en: "to paste Spring Festival couplets", clue: "exact verb + object for doorway couplets" },
  { cn: "放烟花", py: "fàng yānhuā", en: "to set off fireworks", clue: "exact verb + object for colourful sky fireworks" },
  { cn: "发红包", py: "fā hóngbāo", en: "to give out red packets", clue: "what elders do for children at 春节" },
  { cn: "红包", py: "hóngbāo", en: "red packet", clue: "red lucky envelope containing money" },
  { cn: "压岁钱", py: "yāsuìqián", en: "New Year lucky money", clue: "traditional term for money inside a 红包" },
  { cn: "舞龙舞狮", py: "wǔlóng wǔshī", en: "dragon and lion dance", clue: "lively New Year drum performance" },
  { cn: "饺子", py: "jiǎozi", en: "dumplings", clue: "northern New Year food shaped like gold ingots" },
  { cn: "年糕", py: "niángāo", en: "sticky New Year rice cake", clue: "food punning with 年年高升 (rising higher)" },
  { cn: "拜年", py: "bàinián", en: "to pay a New Year visit", clue: "visiting relatives with two mandarin oranges" },
  { cn: "守岁", py: "shǒusuì", en: "to stay up late on New Year's Eve", clue: "staying awake until midnight on 除夕" },
  { cn: "大扫除", py: "dàsǎochú", en: "big pre-New Year clean-up", clue: "cleaning the whole house before 除夕" },
  { cn: "新年快乐", py: "Xīnnián kuàilè", en: "Happy New Year", clue: "classic 4-character New Year greeting" },
  { cn: "恭喜发财", py: "Gōngxǐ fācái", en: "Wishing you prosperity", clue: "popular 4-character prosperity blessing" },
  { cn: "年年有余", py: "niánnián yǒuyú", en: "abundance every year", clue: "4-character blessing punning with 鱼 (fish)" },
  { cn: "牛车水", py: "Niúchēshuǐ", en: "Singapore's Chinatown", clue: "famous district lit with festive lanterns" },
  { cn: "捞鱼生", py: "lāo yúshēng", en: "to toss yusheng salad", clue: "Singapore CNY dinner custom shouting blessings" },
];

const MID_AUTUMN_ITEMS = [
  { cn: "中秋节", py: "Zhōngqiūjié", en: "Mid-Autumn Festival", verb: "庆祝", cue: "15th day of the 8th lunar month" },
  { cn: "八月十五", py: "Bāyuè shíwǔ", en: "15th day of the 8th lunar month", verb: "在", cue: "exact lunar date of 中秋节 (no 初!)" },
  { cn: "赏月", py: "shǎngyuè", en: "to admire the full moon", verb: "赏", cue: "high-band verb–object phrase for moon viewing" },
  { cn: "月饼", py: "yuèbǐng", en: "mooncake", verb: "吃", cue: "round traditional pastry shared with family" },
  { cn: "冰皮月饼", py: "bīngpí yuèbǐng", en: "snow-skin mooncake", verb: "吃", cue: "chilled Singapore mooncake variety" },
  { cn: "提灯笼", py: "tí dēnglóng", en: "to carry a lantern", verb: "提", cue: "holding a glowing lantern by its handle/stick" },
  { cn: "灯笼", py: "dēnglóng", en: "lantern", verb: "提", cue: "glowing festive lamp carried by children" },
  { cn: "团圆", py: "tuányuán", en: "family reunion", verb: "象征", cue: "core Mid-Autumn theme linked to 圆 (round)" },
  { cn: "嫦娥", py: "Cháng'é", en: "Chang'e (Moon Goddess)", verb: "讲", cue: "wife of 后羿 who flew to the moon" },
  { cn: "后羿", py: "Hòu Yì", en: "Hou Yi (legendary archer)", verb: "射", cue: "hero who shot down nine scorching suns" },
  { cn: "玉兔", py: "Yùtù", en: "the Jade Rabbit", verb: "看", cue: "Chang'e's companion on the moon" },
  { cn: "满月", py: "mǎnyuè", en: "full moon", verb: "看", cue: "bright round moon on lunar day 15" },
  { cn: "柚子", py: "yòuzi", en: "pomelo", verb: "吃", cue: "large citrus fruit eaten at Mid-Autumn" },
  { cn: "莲蓉", py: "liánróng", en: "lotus paste", verb: "吃", cue: "classic sweet filling inside traditional mooncakes" },
  { cn: "中国茶", py: "Zhōngguó chá", en: "Chinese tea", verb: "喝", cue: "warm drink paired with sweet mooncakes" },
  { cn: "传说", py: "chuánshuō", en: "legend", verb: "听", cue: "traditional folk story like 嫦娥奔月" },
];

const DB_LANTERN_COLLOCATIONS = [
  { fest: "端午节", festEn: "Dragon Boat Festival", date: "五月初五", datePy: "Wǔyuè chūwǔ", verb: "划", verbPy: "huá", obj: "龙舟", objPy: "lóngzhōu", phrase: "划龙舟", phrasePy: "huá lóngzhōu", en: "row dragon boats", wrongVerb: "画", wrongHint: "画 (huà) means 'draw' — rowing uses 划 (huá)!" },
  { fest: "端午节", festEn: "Dragon Boat Festival", date: "五月初五", datePy: "Wǔyuè chūwǔ", verb: "吃", verbPy: "chī", obj: "粽子", objPy: "zòngzi", phrase: "吃粽子", phrasePy: "chī zòngzi", en: "eat sticky rice dumplings", wrongVerb: "喝", wrongHint: "粽子 is solid food wrapped in bamboo leaves — use 吃!" },
  { fest: "端午节", festEn: "Dragon Boat Festival", date: "五月初五", datePy: "Wǔyuè chūwǔ", verb: "包", verbPy: "bāo", obj: "粽子", objPy: "zòngzi", phrase: "包粽子", phrasePy: "bāo zòngzi", en: "wrap zongzi dumplings", wrongVerb: "贴", wrongHint: "贴 is for pasting couplets; wrapping dumplings uses 包 (bāo)." },
  { fest: "端午节", festEn: "Dragon Boat Festival", date: "五月初五", datePy: "Wǔyuè chūwǔ", verb: "纪念", verbPy: "jìniàn", obj: "屈原", objPy: "Qū Yuán", phrase: "纪念屈原", phrasePy: "jìniàn Qū Yuán", en: "commemorate Qu Yuan", wrongVerb: "象征", wrongHint: "象征 means symbolise; honouring a person uses 纪念 (jìniàn)." },
  { fest: "元宵节", festEn: "Lantern Festival", date: "正月十五", datePy: "Zhēngyuè shíwǔ", verb: "看", verbPy: "kàn", obj: "花灯", objPy: "huādēng", phrase: "看花灯", phrasePy: "kàn huādēng", en: "view festive lanterns", wrongVerb: "划", wrongHint: "划 is for dragon boats; viewing lanterns uses 看 (kàn) or 赏." },
  { fest: "元宵节", festEn: "Lantern Festival", date: "正月十五", datePy: "Zhēngyuè shíwǔ", verb: "猜", verbPy: "cāi", obj: "灯谜", objPy: "dēngmí", phrase: "猜灯谜", phrasePy: "cāi dēngmí", en: "guess lantern riddles", wrongVerb: "贴", wrongHint: "Solving lantern riddles uses 猜 (cāi — guess)." },
  { fest: "元宵节", festEn: "Lantern Festival", date: "正月十五", datePy: "Zhēngyuè shíwǔ", verb: "吃", verbPy: "chī", obj: "汤圆", objPy: "tāngyuán", phrase: "吃汤圆", phrasePy: "chī tāngyuán", en: "eat sweet glutinous rice balls", wrongVerb: "放", wrongHint: "汤圆 are sweet rice balls eaten in soup — use 吃!" },
  { fest: "元宵节", festEn: "Lantern Festival", date: "正月十五", datePy: "Zhēngyuè shíwǔ", verb: "吃", verbPy: "chī", obj: "元宵", objPy: "yuánxiāo", phrase: "吃元宵", phrasePy: "chī yuánxiāo", en: "eat northern-style sweet rice balls", wrongVerb: "划", wrongHint: "元宵 are sweet rice balls eaten on 正月十五 — use 吃!" },
];

export const drills: Drill[] = [
  {
    id: "chinese-festivals.lunar-dates-festivals",
    topicId: "chinese-festivals",
    title: "Spring Festival & Lunar Dates Rapid Recall",
    level: 1,
    guideRef: "spring-festival",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          const item = rng.pick(SPRING_VOCAB_ITEMS);
          const stem = rng.pick([
            `Write the Simplified Chinese (or tone-marked Pinyin) for **${item.en}**.`,
            `Spring Festival vocab check: how do you say **${item.en}** in Mandarin?`,
            `Give the Mandarin phrase for **${item.en}** (${item.clue}).`,
          ]);
          return {
            prompt: stem,
            answer: {
              type: "text",
              accept: [item.cn, item.py, item.py.toLowerCase()],
              display: `${item.cn} (${item.py})`,
            },
            hint: `Clue: ${item.clue}.`,
            solution: [`${item.en} = ${item.cn} (${item.py}).`],
          };
        }
        if (mode === 1) {
          const f = rng.pick(FESTIVALS);
          const askDate = rng.bool();
          if (askDate) {
            const stem = rng.pick([
              `Which lunar date is **${f.festival}** (${f.festEn})? (Give month + day, e.g. without 农历.)`,
              `State the lunar calendar date of **${f.festival} (${f.festPinyin})** in Hanzi or tone-marked Pinyin.`,
            ]);
            return {
              prompt: stem,
              answer: {
                type: "text",
                accept: [f.date, f.datePinyin, f.datePinyin.toLowerCase(), `农历${f.date}`, `Nónglì ${f.datePinyin}`],
                display: `${f.date} (${f.datePinyin})`,
              },
              hint: `Remember: days 1–10 use 初 (chū), days 11–30 do NOT.`,
              solution: [`${f.festival} (${f.festEn}) falls on 农历${f.date} (${f.datePinyin}) — ${f.dateEn}.`],
            };
          }
          const stem = rng.pick([
            `Which Chinese festival falls on **农历${f.date}** (${f.dateEn})?`,
            `Name the festival celebrated on **${f.date} (${f.datePinyin})** in Simplified Hanzi or Pinyin.`,
          ]);
          return {
            prompt: stem,
            answer: {
              type: "text",
              accept: [f.festival, f.festPinyin, f.festPinyin.toLowerCase()],
              display: `${f.festival} (${f.festPinyin})`,
            },
            hint: `Traditional food on ${f.date}: ${f.food} (${f.foodEn}).`,
            solution: [`农历${f.date} is ${f.festival} (${f.festPinyin} — ${f.festEn}).`],
          };
        }
        const f = rng.pick(FESTIVALS);
        const subj = rng.pick(SUBJECTS);
        return {
          prompt: `Fill the missing **exact verb** for ${f.festEn}: \`${subj.cn}在${f.festival}___${f.obj}\` (${f.customEn}).`,
          answer: {
            type: "text",
            accept: [f.verb, f.verbPinyin],
            display: `${f.verb} (${f.verbPinyin})`,
          },
          hint: `Pair ${f.obj} (${f.objPinyin}) with its exact Mandarin action verb.`,
          solution: [`The exact collocation is ${f.verb}${f.obj} (${f.verbPinyin} ${f.objPinyin}).`],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          const item = rng.pick(SPRING_VOCAB_ITEMS);
          const subj = rng.pick(SUBJECTS);
          const place = rng.pick(SINGAPORE_PLACES);
          const templates = [
            `Translate the key Spring Festival term **${item.en}** (clue: ${item.clue}) as used when ${subj.en} celebrate ${place.en}.`,
            `Context: \`春节时，${subj.cn}${place.cn}常常提到“${item.en}”。\` Write the exact Mandarin word for **${item.en}**.`,
          ];
          return {
            prompt: rng.pick(templates),
            answer: {
              type: "text",
              accept: [item.cn, item.py, item.py.toLowerCase()],
              display: `${item.cn} (${item.py})`,
            },
            hint: `Clue: ${item.clue}.`,
            solution: [`${item.en} → ${item.cn} (${item.py}).`],
          };
        }
        const f = rng.pick(FESTIVALS);
        const subj = rng.pick(SUBJECTS);
        const askFood = rng.bool();
        if (askFood) {
          return {
            prompt: `Complete the sentence with the signature festival food: \`农历${f.date}是${f.festival}，${subj.cn}一定要吃___。\` (${f.foodEn})`,
            answer: {
              type: "text",
              accept: [f.food, f.foodPinyin],
              display: `${f.food} (${f.foodPinyin})`,
            },
            hint: `${f.festival} (${f.festEn}) features ${f.foodEn}.`,
            solution: [`On 农历${f.date} (${f.festival}), families eat ${f.food} (${f.foodPinyin} — ${f.foodEn}).`],
          };
        }
        return {
          prompt: `Complete the sentence with the exact lunar date (month + day): \`${f.festival}在农历___，${subj.cn}会${f.custom}。\` (${f.dateEn})`,
          answer: {
            type: "text",
            accept: [f.date, f.datePinyin, f.datePinyin.toLowerCase()],
            display: `${f.date} (${f.datePinyin})`,
          },
          hint: `Check whether the day is 1–10 (needs 初) or 11–30 (no 初).`,
          solution: [`${f.festival} falls on 农历${f.date} (${f.datePinyin}).`],
        };
      }

      // Tier 3: homophones, cultural symbolism & Singapore CNY sentences
      const puns = [
        { cue: "fish → surplus (年年有___)", ans: "余", py: "yú", trap: "鱼", trapMsg: "鱼 is fish — the pun character meaning 'surplus' is 余 (yú)!" },
        { cue: "upside down (倒) → has arrived (福___了)", ans: "到", py: "dào", trap: "倒", trapMsg: "倒 means upside down — the homophone meaning 'arrived' is 到 (dào)!" },
        { cue: "rice cake (年糕) → rising higher (年年___升)", ans: "高", py: "gāo", trap: "糕", trapMsg: "糕 means cake — the homophone meaning 'high/rising' is 高 (gāo)!" },
        { cue: "round moon/tangyuan → family reunion (团___)", ans: "圆", py: "yuán", trap: "元", trapMsg: "元 means 'first/origin' — round/reunion uses 圆 (yuán)!" },
        { cue: "mandarin oranges (橘) → auspicious (大___大利)", ans: "吉", py: "jí", trap: "橘", trapMsg: "橘 is orange — the blessing character meaning 'lucky' is 吉 (jí)!" },
      ];
      const usePun = rng.bool(0.5);
      if (usePun) {
        const p = rng.pick(puns);
        const subj = rng.pick(SUBJECTS);
        const place = rng.pick(SINGAPORE_PLACES);
        return {
          prompt: `Cultural Homophone Challenge: While celebrating ${place.en}, ${subj.en} explained the auspicious pun **${p.cue}**. Type the ONE missing Simplified character (or tone-marked Pinyin).`,
          answer: {
            type: "text",
            accept: [p.ans, p.py],
            display: `${p.ans} (${p.py})`,
          },
          traps: [
            {
              spec: { type: "text", accept: [p.trap] },
              feedback: p.trapMsg,
            },
          ],
          hint: `Pronounced ${p.py} — think of the auspicious meaning rather than the physical object!`,
          solution: [`The auspicious homophone character is ${p.ans} (${p.py}): ${p.cue.replace("___", p.ans)}.`],
        };
      }
      const f = rng.pick(FESTIVALS);
      const subj = rng.pick(SUBJECTS);
      const place = placeForCustom(rng, f.custom);
      return {
        prompt: `Write the exact **verb + object** custom (${f.customEn}) to complete: \`去年${f.festival}，${subj.cn}${place.cn}一起___了。\``,
        answer: {
          type: "text",
          accept: [f.custom, f.customPinyin, f.customPinyin.replace(/\s+/g, "")],
          display: `${f.custom} (${f.customPinyin})`,
        },
        hint: `This is the classic ${f.festEn} custom: ${f.customEn}.`,
        solution: [
          `去年${f.festival}，${subj.cn}${place.cn}一起${f.custom}了。`,
          `${f.custom} (${f.customPinyin}) = ${f.customEn}.`,
        ],
      };
    },
  },
  {
    id: "chinese-festivals.mid-autumn-vocab",
    topicId: "chinese-festivals",
    title: "Mid-Autumn Customs, Legends & Symbolism",
    level: 1,
    guideRef: "mid-autumn-festival",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const item = rng.pick(MID_AUTUMN_ITEMS);
      const subj = rng.pick(SUBJECTS);
      const place = rng.pick(SINGAPORE_PLACES);
      if (tier === 1) {
        const stem = rng.pick([
          `Write the Mandarin for **${item.en}** (Mid-Autumn vocabulary).`,
          `Mid-Autumn recall: give the Simplified Hanzi or tone-marked Pinyin for **${item.en}**.`,
          `Which Mid-Autumn term means **${item.en}** (${item.cue})?`,
        ]);
        return {
          prompt: stem,
          answer: {
            type: "text",
            accept: [item.cn, item.py, item.py.toLowerCase(), item.py.replace(/'/g, "")],
            display: `${item.cn} (${item.py})`,
          },
          hint: `Clue: ${item.cue}.`,
          solution: [`${item.en} = ${item.cn} (${item.py}).`],
        };
      }

      if (tier === 2) {
        const sentenceStyles = [
          `Fill the blank with the exact Mid-Autumn word (**${item.en}**): \`八月十五晚上，${subj.cn}${place.cn}聊到了___。\` (Clue: ${item.cue})`,
          `Complete the Mid-Autumn note (${item.en}): \`每年中秋节，${subj.cn}都很重视___。\` (Clue: ${item.cue})`,
        ];
        return {
          prompt: rng.pick(sentenceStyles),
          answer: {
            type: "text",
            accept: [item.cn, item.py, item.py.toLowerCase(), item.py.replace(/'/g, "")],
            display: `${item.cn} (${item.py})`,
          },
          hint: `Think of the Mid-Autumn term for "${item.en}" (${item.cue}).`,
          solution: [`The exact term is ${item.cn} (${item.py}) — ${item.en}.`],
        };
      }

      // Tier 3: Full clause completion with 一边…一边…, 又…又…, 象征, legends
      const t3Pool = [
        {
          prompt: `Complete with the high-band moon-viewing verb: \`去年中秋节，${subj.cn}${place.cn}一边___，一边吃月饼。\` (admire the moon)`,
          accept: ["赏月", "shǎngyuè", "shǎng yuè"],
          display: "赏月 (shǎngyuè)",
          sol: "赏月 (shǎngyuè) pairs smoothly with 吃月饼 inside 一边…一边….",
        },
        {
          prompt: `Complete with the exact verb–object for carrying lanterns: \`八月十五晚上，${subj.cn}${place.cn}高兴地___。\` (carry lanterns)`,
          accept: ["提灯笼", "tí dēnglóng", "tídēnglóng"],
          display: "提灯笼 (tí dēnglóng)",
          sol: "Use 提 (tí — carry by a handle) + 灯笼 (dēnglóng): 提灯笼.",
        },
        {
          prompt: `Complete the symbolism sentence: \`在${subj.cn}看来，圆圆的月饼和满月象征全家___。\` (family reunion)`,
          accept: ["团圆", "tuányuán"],
          display: "团圆 (tuányuán)",
          sol: "团圆 (tuányuán) means family reunion — anchored by the character 圆 (round).",
        },
        {
          prompt: `Complete the legend clue: \`${subj.cn}${place.cn}听奶奶讲了___奔月的动人传说。\` (the Moon Goddess)`,
          accept: ["嫦娥", "Cháng'é", "cháng'é", "Chángé"],
          display: "嫦娥 (Cháng'é)",
          sol: "嫦娥奔月 (Cháng'é bēn yuè) is the classic Mid-Autumn moon legend.",
        },
        {
          prompt: `Complete the moon description using \`又…又…\`: \`八月十五${place.cn}看到的月亮___，像一个大圆盘。\` (big and round)`,
          accept: ["又大又圆", "yòu dà yòu yuán", "yòudàyòuyuán"],
          display: "又大又圆 (yòu dà yòu yuán)",
          sol: "又大又圆 (yòu dà yòu yuán) = both big and round.",
        },
        {
          prompt: `Complete with the chilled Singapore favourite: \`${subj.cn}觉得传统蛋黄月饼太甜，更喜欢新加坡的___。\` (snow-skin mooncake)`,
          accept: ["冰皮月饼", "bīngpí yuèbǐng", "bīngpíyuèbǐng"],
          display: "冰皮月饼 (bīngpí yuèbǐng)",
          sol: "冰皮月饼 (bīngpí yuèbǐng) = snow-skin mooncake.",
        },
      ];
      const chosen = rng.pick(t3Pool);
      return {
        prompt: chosen.prompt,
        answer: {
          type: "text",
          accept: chosen.accept,
          display: chosen.display,
        },
        hint: `Write Simplified Hanzi or tone-marked Pinyin.`,
        solution: [chosen.sol],
      };
    },
  },
  {
    id: "chinese-festivals.dragon-boat-lantern",
    topicId: "chinese-festivals",
    title: "Dragon Boat vs Lantern Festival Collocations",
    level: 2,
    guideRef: "dragon-boat-lantern",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const c = rng.pick(DB_LANTERN_COLLOCATIONS);
      const subj = rng.pick(SUBJECTS);
      const place = placeForCustom(rng, c.phrase);

      if (tier === 1) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          return {
            prompt: `Fill the exact verb for **${c.fest}** (${c.festEn}): \`___${c.obj}\` (${c.en}).`,
            answer: {
              type: "text",
              accept: [c.verb, c.verbPy],
              display: `${c.verb} (${c.verbPy})`,
            },
            traps: [
              {
                spec: { type: "text", accept: [c.wrongVerb] },
                feedback: c.wrongHint,
              },
            ],
            hint: `Full phrase means "${c.en}".`,
            solution: [`${c.phrase} (${c.phrasePy}) = ${c.en}.`],
          };
        }
        if (mode === 1) {
          return {
            prompt: `Which festival does the custom **${c.phrase}** (${c.en}) belong to — \`端午节\` or \`元宵节\`?`,
            answer: {
              type: "text",
              accept: [c.fest, c.fest === "端午节" ? "Duānwǔjié" : "Yuánxiāojié"],
              display: `${c.fest} (${c.fest === "端午节" ? "Duānwǔjié" : "Yuánxiāojié"})`,
            },
            traps: [
              {
                spec: {
                  type: "text",
                  accept: [c.fest === "端午节" ? "元宵节" : "端午节"],
                },
                feedback: `Careful! ${c.phrase} belongs to ${c.fest} (农历${c.date}), not the other festival.`,
              },
            ],
            hint: `Lunar date clue: 农历${c.date}.`,
            solution: [`${c.phrase} is celebrated at ${c.fest} (农历${c.date}).`],
          };
        }
        return {
          prompt: `Give the full Mandarin verb–object phrase for **${c.en}** (at ${c.fest}, ${subj.en}).`,
          answer: {
            type: "text",
            accept: [c.phrase, c.phrasePy, c.phrasePy.replace(/\s+/g, "")],
            display: `${c.phrase} (${c.phrasePy})`,
          },
          hint: `Starts with verb ${c.verbPy} + ${c.obj}.`,
          solution: [`${c.en} = ${c.phrase} (${c.phrasePy}).`],
        };
      }

      if (tier === 2) {
        const askDate = rng.bool(0.35);
        if (askDate) {
          return {
            prompt: `Complete with the exact lunar date (month + day): \`农历___是${c.fest}，${subj.cn}${place.cn}${c.phrase}。\``,
            answer: {
              type: "text",
              accept: [c.date, c.datePy, c.datePy.toLowerCase()],
              display: `${c.date} (${c.datePy})`,
            },
            hint: `Remember: Dragon Boat = 5/5 (with 初); Lantern Festival = 1/15 (no 初).`,
            solution: [`${c.fest} is on 农历${c.date} (${c.datePy}).`],
          };
        }
        return {
          prompt: `Complete the sentence with the exact phrase for **${c.en}**: \`农历${c.date}那天，${subj.cn}${place.cn}一起___。\``,
          answer: {
            type: "text",
            accept: [c.phrase, c.phrasePy, c.phrasePy.replace(/\s+/g, "")],
            display: `${c.phrase} (${c.phrasePy})`,
          },
          hint: `农历${c.date} is ${c.fest} (${c.festEn}).`,
          solution: [`农历${c.date}那天，${subj.cn}${place.cn}一起${c.phrase}。`],
        };
      }

      // Tier 3: Spot-and-fix error or contrast sentence
      const askFix = rng.bool(0.5);
      if (askFix) {
        return {
          prompt: `Spot and fix the WRONG verb in this ${c.festEn} sentence (type ONLY the correct replacement verb): \`去年${c.fest}，${subj.cn}${place.cn}${c.wrongVerb}${c.obj}。\``,
          answer: {
            type: "text",
            accept: [c.verb, c.verbPy],
            display: `${c.verb} (${c.verbPy})`,
          },
          traps: [
            {
              spec: { type: "text", accept: [c.wrongVerb] },
              feedback: `${c.wrongVerb} is the error! ${c.wrongHint}`,
            },
          ],
          hint: `Check the verb right before ${c.obj} (${c.objPy}).`,
          solution: [`Replace ${c.wrongVerb} with ${c.verb} (${c.verbPy}): ${c.phrase}.`],
        };
      }
      const otherFood = c.fest === "端午节" ? "汤圆" : "粽子";
      const rightFood = c.fest === "端午节" ? "粽子" : "汤圆";
      const rightFoodPy = c.fest === "端午节" ? "zòngzi" : "tāngyuán";
      return {
        prompt: `Contrast check: \`${subj.cn}去年${c.fest}${place.cn}没吃${otherFood}，而是吃了传统的___。\` (Type the traditional food of ${c.fest}.)`,
        answer: {
          type: "text",
          accept: c.fest === "端午节" ? ["粽子", "zòngzi"] : ["汤圆", "tāngyuán", "元宵", "yuánxiāo"],
          display: `${rightFood} (${rightFoodPy})`,
        },
        traps: [
          {
            spec: { type: "text", accept: [otherFood] },
            feedback: `${otherFood} belongs to the OTHER festival! ${c.fest} features ${rightFood} (${rightFoodPy}).`,
          },
        ],
        hint: `农历${c.date} is ${c.fest} — which sticky rice treat matches this date?`,
        solution: [`At ${c.fest} (农历${c.date}), people eat ${rightFood} (${rightFoodPy}).`],
      };
    },
  },
  {
    id: "chinese-festivals.festival-narratives",
    topicId: "chinese-festivals",
    title: "Singapore Festival Narratives (了·过·比·象征)",
    level: 3,
    guideRef: "festival-comparisons-writing",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const f = rng.pick(FESTIVALS);
      const subj = rng.pick(SUBJECTS);
      const place = placeForCustom(rng, f.custom);
      const otherFest = rng.pick(FESTIVALS.filter((x) => x.festival !== f.festival));

      if (tier === 1) {
        const mode = rng.int(0, 3);
        if (mode === 0) {
          return {
            prompt: `Choose the right aspect marker (\`了\` or \`过\`) for past life experience: \`${subj.cn}以前${place.cn}吃___${f.food}。\``,
            answer: {
              type: "text",
              accept: ["过", "guo", "guò"],
              display: "过 (guo)",
            },
            traps: [{ spec: { type: "text", accept: ["了", "le"] }, feedback: "With 以前 (ever before), use 过 for life experience!" }],
            hint: "以前 (before / ever) pairs with the experiential marker.",
            solution: [`以前 + Verb + 过 expresses life experience: 吃过${f.food}.`],
          };
        }
        if (mode === 1) {
          return {
            prompt: `Fix the illegal adverb after \`比\` (type ONE replacement character): \`${subj.cn}觉得${f.festival}比${otherFest.festival}很热闹。\``,
            answer: {
              type: "text",
              accept: ["更", "gèng"],
              display: "更 (gèng)",
            },
            traps: [{ spec: { type: "text", accept: ["很", "hěn"] }, feedback: "Never put 很 after 比! Replace 很 with 更 (gèng)." }],
            hint: "Which 1-character adverb means 'even more'?",
            solution: [`${f.festival}比${otherFest.festival}更热闹。(Drop 很; use 更 gèng.)`],
          };
        }
        if (mode === 2) {
          return {
            prompt: `Negate the past festival sentence (type \`没\` or \`不\`): \`去年${f.festival}，${subj.cn}___吃${f.food}。\``,
            answer: {
              type: "text",
              accept: ["没", "没有", "méi", "méiyǒu"],
              display: "没 / 没有 (méi)",
            },
            traps: [{ spec: { type: "text", accept: ["不", "bù"] }, feedback: "Completed past actions take 没(有), never 不!" }],
            hint: "去年 (last year) is a completed past time frame.",
            solution: [`Past actions are negated with 没(有) and drop 了: 去年${f.festival}，${subj.cn}没吃${f.food}。`],
          };
        }
        return {
          prompt: `Fill the verb meaning **'to symbolise'**: \`${subj.cn}知道${f.festival}的${f.food}___${f.symbolEn}。\``,
          answer: {
            type: "text",
            accept: ["象征", "xiàngzhēng"],
            display: "象征 (xiàngzhēng)",
          },
          hint: "Two characters pronounced xiàngzhēng.",
          solution: [`象征 (xiàngzhēng) = to symbolise.`],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        if (mode === 0) {
          return {
            prompt: `Complete the future plan verb (**plan to**): \`明年${f.festival}，${subj.cn}___${place.cn}${f.custom}。\``,
            answer: {
              type: "text",
              accept: ["打算", "dǎsuàn", "dǎsuan", "准备", "zhǔnbèi"],
              display: "打算 (dǎsuàn)",
            },
            hint: "Standard IGCSE future-intention verb (dǎsuàn).",
            solution: [`明年${f.festival}，${subj.cn}打算${place.cn}${f.custom}。`],
          };
        }
        if (mode === 1) {
          return {
            prompt: `Complete the 'not as … as' comparison: \`${subj.cn}觉得${f.festival}___${otherFest.festival}那么热闹。\``,
            answer: {
              type: "text",
              accept: ["没有", "méiyǒu"],
              display: "没有 (méiyǒu)",
            },
            traps: [{ spec: { type: "text", accept: ["不比", "bùbǐ"] }, feedback: "The standard Year 9 'not as … as' pattern with 那么 is A 没有 B 那么 + adj!" }],
            hint: "Pattern: A 没有 B (那么) + Adjective.",
            solution: [`${f.festival}没有${otherFest.festival}那么热闹。`],
          };
        }
        return {
          prompt: `Complete the specific past sentence with ONE particle: \`去年${f.festival}，${subj.cn}${place.cn}吃___很多${f.food}。\``,
          answer: {
            type: "text",
            accept: ["了", "le"],
            display: "了 (le)",
          },
          traps: [{ spec: { type: "text", accept: ["过", "guo", "guò"] }, feedback: "With 去年 + specific quantity (很多), use completed-action 了 rather than 过!" }],
          hint: "去年 (last year) + specific quantity 很多 requires completed-action marker.",
          solution: [`去年${f.festival}，${subj.cn}${place.cn}吃了很多${f.food}。`],
        };
      }

      // Tier 3: Full STPVO unscrambling for Singapore festival narratives
      const timeOpt = rng.pick([
        { cn: `去年${f.festival}`, py: `Qùnián ${f.festPinyin}`, verbTail: `吃了${f.food}`, verbTailPy: `chīle ${f.foodPinyin}` },
        { cn: `今年${f.festival}`, py: `Jīnnián ${f.festPinyin}`, verbTail: `吃了${f.food}`, verbTailPy: `chīle ${f.foodPinyin}` },
        { cn: `明年${f.festival}`, py: `Míngnián ${f.festPinyin}`, verbTail: `打算吃${f.food}`, verbTailPy: `dǎsuàn chī ${f.foodPinyin}` },
      ]);
      const chunks = rng.shuffle([timeOpt.cn, subj.cn, place.cn, timeOpt.verbTail]);
      const ans1 = `${timeOpt.cn}${subj.cn}${place.cn}${timeOpt.verbTail}`;
      const ans2 = `${subj.cn}${timeOpt.cn}${place.cn}${timeOpt.verbTail}`;
      const py1 = `${timeOpt.py} ${subj.py} ${place.py} ${timeOpt.verbTailPy}`;
      const py2 = `${subj.py} ${timeOpt.py} ${place.py} ${timeOpt.verbTailPy}`;
      return {
        prompt: `Arrange these 4 chunks into correct Mandarin STPVO order: \`${chunks.join(" / ")}\``,
        answer: {
          type: "text",
          accept: [
            ans1,
            `${timeOpt.cn}，${subj.cn}${place.cn}${timeOpt.verbTail}`,
            `${timeOpt.cn}，${subj.cn}${place.cn}${timeOpt.verbTail}。`,
            `${ans1}。`,
            ans2,
            `${ans2}。`,
            py1,
            py2,
          ],
          display: `${timeOpt.cn}，${subj.cn}${place.cn}${timeOpt.verbTail}。`,
        },
        hint: `Order: Time (${timeOpt.cn}) + Subject (${subj.cn}) [or Subject + Time] → Place (${place.cn}) → Verb+Object (${timeOpt.verbTail}).`,
        solution: [
          `Time: ${timeOpt.cn} | Subject: ${subj.cn} | Place: ${place.cn} | Verb+Object: ${timeOpt.verbTail}.`,
          `Result: ${timeOpt.cn}，${subj.cn}${place.cn}${timeOpt.verbTail}。`,
        ],
      };
    },
  },
];
