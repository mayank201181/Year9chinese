// Procedural skill drills for Year 9 Mandarin Chinese — Pets & Animal Care (宠物)
// 4 drills covering all 4 guide sections, seeded RNG, 3 tiers each.
import type { Drill, DrillItem, Rng } from "./types.ts";
import { numberToHanzi } from "../chinese/grammar.ts";

interface PetAnimal {
  hanzi: string;
  pinyin: string;
  enSingle: string;
  enPlural: string;
  mw: "只" | "条" | "匹";
  mwPinyin: "zhī" | "tiáo" | "pǐ";
  rule: string;
}

const ANIMALS: PetAnimal[] = [
  { hanzi: "小狗", pinyin: "xiǎogǒu", enSingle: "puppy", enPlural: "puppies", mw: "只", mwPinyin: "zhī", rule: "dogs take 只 (zhī)" },
  { hanzi: "狗", pinyin: "gǒu", enSingle: "dog", enPlural: "dogs", mw: "只", mwPinyin: "zhī", rule: "dogs take 只 (zhī)" },
  { hanzi: "小猫", pinyin: "xiǎomāo", enSingle: "kitten", enPlural: "kittens", mw: "只", mwPinyin: "zhī", rule: "cats take 只 (zhī)" },
  { hanzi: "猫", pinyin: "māo", enSingle: "cat", enPlural: "cats", mw: "只", mwPinyin: "zhī", rule: "cats take 只 (zhī)" },
  { hanzi: "兔子", pinyin: "tùzi", enSingle: "rabbit", enPlural: "rabbits", mw: "只", mwPinyin: "zhī", rule: "rabbits take 只 (zhī)" },
  { hanzi: "仓鼠", pinyin: "cāngshǔ", enSingle: "hamster", enPlural: "hamsters", mw: "只", mwPinyin: "zhī", rule: "hamsters take 只 (zhī)" },
  { hanzi: "小鸟", pinyin: "xiǎoniǎo", enSingle: "little bird", enPlural: "little birds", mw: "只", mwPinyin: "zhī", rule: "birds take 只 (zhī)" },
  { hanzi: "鹦鹉", pinyin: "yīngwǔ", enSingle: "parrot", enPlural: "parrots", mw: "只", mwPinyin: "zhī", rule: "parrots take 只 (zhī)" },
  { hanzi: "乌龟", pinyin: "wūguī", enSingle: "turtle", enPlural: "turtles", mw: "只", mwPinyin: "zhī", rule: "turtles take 只 (zhī)" },
  { hanzi: "金鱼", pinyin: "jīnyú", enSingle: "goldfish", enPlural: "goldfish", mw: "条", mwPinyin: "tiáo", rule: "slender swimming fish take 条 (tiáo)" },
  { hanzi: "热带鱼", pinyin: "rèdàiyú", enSingle: "tropical fish", enPlural: "tropical fish", mw: "条", mwPinyin: "tiáo", rule: "tropical fish take 条 (tiáo)" },
  { hanzi: "蛇", pinyin: "shé", enSingle: "snake", enPlural: "snakes", mw: "条", mwPinyin: "tiáo", rule: "long flexible snakes take 条 (tiáo)" },
  { hanzi: "马", pinyin: "mǎ", enSingle: "horse", enPlural: "horses", mw: "匹", mwPinyin: "pǐ", rule: "horses always take 匹 (pǐ)" },
  { hanzi: "小马", pinyin: "xiǎomǎ", enSingle: "pony", enPlural: "ponies", mw: "匹", mwPinyin: "pǐ", rule: "ponies/horses always take 匹 (pǐ)" },
];

const OWNERS = [
  { hanzi: "我家", pinyin: "Wǒ jiā", en: "my family" },
  { hanzi: "哥哥", pinyin: "Gēge", en: "my older brother" },
  { hanzi: "姐姐", pinyin: "Jiějie", en: "my older sister" },
  { hanzi: "妹妹", pinyin: "Mèimei", en: "my younger sister" },
  { hanzi: "爷爷", pinyin: "Yéye", en: "Grandpa" },
  { hanzi: "表姐", pinyin: "Biǎojiě", en: "my cousin" },
  { hanzi: "叔叔", pinyin: "Shūshu", en: "Uncle" },
  { hanzi: "朋友家", pinyin: "Péngyou jiā", en: "my friend's family" },
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
  12: "shí'èr",
  20: "èrshí",
  22: "èrshí'èr",
};

function countHanzi(n: number): string {
  return n === 2 ? "两" : numberToHanzi(n);
}

function countPinyin(n: number): string {
  return NUM_PINYIN[n] ?? "yī";
}

function animalCountEn(n: number, a: PetAnimal): string {
  const words: Record<number, string> = {
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
    12: "twelve",
    20: "twenty",
    22: "twenty-two",
  };
  return `${words[n] ?? n} ${n === 1 ? a.enSingle : a.enPlural}`;
}

interface TraitEntry {
  hanzi: string;
  pinyin: string;
  en: string;
  positive: boolean;
}

const TRAITS: TraitEntry[] = [
  { hanzi: "可爱", pinyin: "kě'ài", en: "cute", positive: true },
  { hanzi: "活泼", pinyin: "huópō", en: "lively", positive: true },
  { hanzi: "聪明", pinyin: "cōngmíng", en: "clever", positive: true },
  { hanzi: "温顺", pinyin: "wēnshùn", en: "gentle", positive: true },
  { hanzi: "忠诚", pinyin: "zhōngchéng", en: "loyal", positive: true },
  { hanzi: "友好", pinyin: "yǒuhǎo", en: "friendly", positive: true },
  { hanzi: "安静", pinyin: "ānjìng", en: "quiet", positive: true },
  { hanzi: "漂亮", pinyin: "piàoliang", en: "pretty", positive: true },
  { hanzi: "淘气", pinyin: "táoqì", en: "naughty", positive: false },
  { hanzi: "懒", pinyin: "lǎn", en: "lazy", positive: false },
  { hanzi: "吵", pinyin: "chǎo", en: "noisy", positive: false },
  { hanzi: "胆小", pinyin: "dǎnxiǎo", en: "timid", positive: false },
];

const BODY_PARTS = [
  { hanzi: "毛", pinyin: "máo", en: "fur" },
  { hanzi: "尾巴", pinyin: "wěiba", en: "tail" },
  { hanzi: "耳朵", pinyin: "ěrduo", en: "ears" },
  { hanzi: "眼睛", pinyin: "yǎnjing", en: "eyes" },
  { hanzi: "鼻子", pinyin: "bízi", en: "nose" },
  { hanzi: "爪子", pinyin: "zhuǎzi", en: "paws" },
  { hanzi: "翅膀", pinyin: "chìbǎng", en: "wings" },
  { hanzi: "龟壳", pinyin: "guīké", en: "turtle shell" },
];

const PET_SUBJECTS = [
  { hanzi: "小狗", pinyin: "xiǎogǒu", en: "puppy" },
  { hanzi: "小猫", pinyin: "xiǎomāo", en: "kitten" },
  { hanzi: "兔子", pinyin: "tùzi", en: "rabbit" },
  { hanzi: "仓鼠", pinyin: "cāngshǔ", en: "hamster" },
  { hanzi: "鹦鹉", pinyin: "yīngwǔ", en: "parrot" },
  { hanzi: "乌龟", pinyin: "wūguī", en: "turtle" },
];

const CARE_VOCAB = [
  { hanzi: "遛狗", pinyin: "liù gǒu", alt: ["liùgǒu"], en: "walk the dog", cue: "evening park routine" },
  { hanzi: "照顾", pinyin: "zhàogù", alt: [], en: "look after / take care of", cue: "daily responsibility" },
  { hanzi: "喂", pinyin: "wèi", alt: ["喂食", "wèishí"], en: "feed", cue: "breakfast and dinner time" },
  { hanzi: "洗澡", pinyin: "xǐzǎo", alt: [], en: "bathe / take a bath", cue: "Saturday grooming" },
  { hanzi: "兽医", pinyin: "shòuyī", alt: [], en: "vet / veterinarian", cue: "when a pet is sick" },
  { hanzi: "看兽医", pinyin: "kàn shòuyī", alt: ["kànshòuyī"], en: "see the vet", cue: "annual health check" },
  { hanzi: "狗粮", pinyin: "gǒuliáng", alt: [], en: "dog food", cue: "bought at the pet shop" },
  { hanzi: "猫粮", pinyin: "māoliáng", alt: [], en: "cat food", cue: "two meals a day" },
  { hanzi: "鱼食", pinyin: "yúshí", alt: [], en: "fish food", cue: "for goldfish in the tank" },
  { hanzi: "笼子", pinyin: "lóngzi", alt: [], en: "cage", cue: "home for a hamster or bird" },
  { hanzi: "鱼缸", pinyin: "yúgāng", alt: [], en: "fish tank", cue: "needs fresh water" },
  { hanzi: "牵引绳", pinyin: "qiānyǐnshéng", alt: [], en: "dog leash", cue: "required in Singapore parks" },
  { hanzi: "宠物店", pinyin: "chǒngwùdiàn", alt: [], en: "pet shop", cue: "where you buy supplies" },
  { hanzi: "清理", pinyin: "qīnglǐ", alt: [], en: "clean out", cue: "weekly cage chore" },
  { hanzi: "梳毛", pinyin: "shū máo", alt: ["shūmáo"], en: "brush fur", cue: "for long-haired cats" },
  { hanzi: "换水", pinyin: "huàn shuǐ", alt: ["huànshuǐ"], en: "change the water", cue: "fish tank maintenance" },
  { hanzi: "训练", pinyin: "xùnliàn", alt: [], en: "train", cue: "teaching a puppy tricks" },
  { hanzi: "领养", pinyin: "lǐngyǎng", alt: [], en: "adopt (a pet)", cue: "from an animal shelter" },
  { hanzi: "打针", pinyin: "dǎzhēn", alt: [], en: "have a vaccination / injection", cue: "at the vet clinic" },
  { hanzi: "陪它玩儿", pinyin: "péi tā wánr", alt: ["陪它玩", "péi tā wán"], en: "play with it", cue: "after finishing homework" },
];

const CARE_TIME_CHUNKS = [
  { hanzi: "每天早上", pinyin: "měitiān zǎoshang", en: "every morning" },
  { hanzi: "每天晚上", pinyin: "měitiān wǎnshang", en: "every evening" },
  { hanzi: "每天放学后", pinyin: "měitiān fàngxué hòu", en: "every day after school" },
  { hanzi: "每个周末", pinyin: "měi ge zhōumò", en: "every weekend" },
  { hanzi: "每个星期六", pinyin: "měi ge xīngqīliù", en: "every Saturday" },
  { hanzi: "晚饭以后", pinyin: "wǎnfàn yǐhòu", en: "after dinner" },
];

const CARE_STPVO_SUBJECTS = [
  { hanzi: "我", pinyin: "wǒ" },
  { hanzi: "哥哥", pinyin: "gēge" },
  { hanzi: "姐姐", pinyin: "jiějie" },
  { hanzi: "爸爸", pinyin: "bàba" },
  { hanzi: "妈妈", pinyin: "māma" },
];

const CARE_STPVO_PLACES_ACTIONS = [
  { place: "在公园", placePy: "zài gōngyuán", action: "遛狗", actionPy: "liù gǒu" },
  { place: "在花园里", placePy: "zài huāyuán lǐ", action: "陪小狗玩儿", actionPy: "péi xiǎogǒu wánr" },
  { place: "在客厅", placePy: "zài kètīng", action: "给小猫梳毛", actionPy: "gěi xiǎomāo shū máo" },
  { place: "在卫生间", placePy: "zài wèishēngjiān", action: "给小狗洗澡", actionPy: "gěi xiǎogǒu xǐzǎo" },
  { place: "在阳台", placePy: "zài yángtái", action: "清理笼子", actionPy: "qīnglǐ lóngzi" },
  { place: "在客厅里", placePy: "zài kètīng lǐ", action: "给鱼缸换水", actionPy: "gěi yúgāng huàn shuǐ" },
];

interface ConnectiveCase {
  sentence: string;
  en: string;
  ans: string[];
  display: string;
  why: string;
}

const OPINION_CONNECTIVES: ConnectiveCase[] = [
  { sentence: "因为家里太小，___我们没有养大狗。", en: "Because our home is too small, so we don't keep a big dog.", ans: ["所以", "suǒyǐ"], display: "所以 (suǒyǐ)", why: "因为 (because) pairs with 所以 (therefore/so)." },
  { sentence: "因为爸爸对猫毛过敏，___我家不能养猫。", en: "Because Dad is allergic to cat fur, so we can't keep a cat.", ans: ["所以", "suǒyǐ"], display: "所以 (suǒyǐ)", why: "因为 pairs with 所以." },
  { sentence: "因为妈妈工作太忙，___没时间照顾小狗。", en: "Because Mum is too busy at work, so she has no time to look after a puppy.", ans: ["所以", "suǒyǐ"], display: "所以 (suǒyǐ)", why: "因为 pairs with 所以." },
  { sentence: "因为乌龟很安静，___不会吵到邻居。", en: "Because turtles are quiet, so they won't disturb neighbours.", ans: ["所以", "suǒyǐ"], display: "所以 (suǒyǐ)", why: "因为 pairs with 所以." },
  { sentence: "因为金鱼不需要遛，___很适合公寓。", en: "Because goldfish don't need walking, so they suit flats well.", ans: ["所以", "suǒyǐ"], display: "所以 (suǒyǐ)", why: "因为 pairs with 所以." },
  { sentence: "养狗虽然很累，___它是我最好的朋友。", en: "Although keeping a dog is tiring, it is my best friend.", ans: ["但是", "可是", "dànshì", "kěshì"], display: "但是 (dànshì)", why: "虽然 (although) pairs with 但是 or 可是." },
  { sentence: "虽然仓鼠很小，___清理笼子有点儿麻烦。", en: "Although hamsters are small, cleaning the cage is a bit troublesome.", ans: ["但是", "可是", "dànshì", "kěshì"], display: "但是 (dànshì)", why: "虽然 pairs with 但是 or 可是." },
  { sentence: "虽然看兽医很花钱，___小狗给我们带来了快乐。", en: "Although seeing the vet costs a lot, the puppy brings us joy.", ans: ["但是", "可是", "dànshì", "kěshì"], display: "但是 (dànshì)", why: "虽然 pairs with 但是 or 可是." },
  { sentence: "虽然小猫有点儿淘气，___全家都很喜欢它。", en: "Although the kitten is a bit naughty, the whole family loves it.", ans: ["但是", "可是", "dànshì", "kěshì"], display: "但是 (dànshì)", why: "虽然 pairs with 但是 or 可是." },
  { sentence: "虽然我现在没有宠物，___将来想领养一只小狗。", en: "Although I don't have a pet now, in the future I want to adopt a puppy.", ans: ["但是", "可是", "dànshì", "kěshì"], display: "但是 (dànshì)", why: "虽然 pairs with 但是 or 可是." },
  { sentence: "养宠物不但能陪伴老人，___能培养孩子的责任感。", en: "Keeping a pet can not only keep elderly people company, but also develop children's responsibility.", ans: ["而且", "érqiě"], display: "而且 (érqiě)", why: "不但 (not only) always pairs with 而且 (but also)." },
  { sentence: "我的小狗不但很聪明，___对大家都很友好。", en: "My puppy is not only clever, but also friendly to everyone.", ans: ["而且", "érqiě"], display: "而且 (érqiě)", why: "不但 pairs with 而且." },
  { sentence: "遛狗不但能让我多做运动，___能帮我放松心情。", en: "Walking the dog not only lets me exercise more, but also helps me relax.", ans: ["而且", "érqiě"], display: "而且 (érqiě)", why: "不但 pairs with 而且." },
  { sentence: "金鱼不但很漂亮，___非常安静。", en: "Goldfish are not only pretty, but also very quiet.", ans: ["而且", "érqiě"], display: "而且 (érqiě)", why: "不但 pairs with 而且." },
  { sentence: "领养小狗不但能帮助动物，___很有意义。", en: "Adopting a puppy not only helps animals, but is also very meaningful.", ans: ["而且", "érqiě"], display: "而且 (érqiě)", why: "不但 pairs with 而且." },
  { sentence: "___妹妹对猫毛过敏，所以我家只养了金鱼。", en: "Because my younger sister is allergic to cat fur, my family only keeps goldfish.", ans: ["因为", "yīnwèi"], display: "因为 (yīnwèi)", why: "所以 in the second clause pairs with 因为 (because) in the first." },
  { sentence: "___公寓空间不够大，所以我们没有养大狗。", en: "Because our flat isn't spacious enough, we don't keep a big dog.", ans: ["因为", "yīnwèi"], display: "因为 (yīnwèi)", why: "所以 signals a cause clause starting with 因为." },
  { sentence: "___养猫很花时间，但是它每天都能陪伴我。", en: "Although keeping a cat takes time, it keeps me company every day.", ans: ["虽然", "suīrán"], display: "虽然 (suīrán)", why: "但是 in the second clause pairs with 虽然 (although) in the first." },
  { sentence: "___爸爸一开始不同意，但是后来他也很喜欢毛毛。", en: "Although Dad disagreed at first, later he also loved Maomao.", ans: ["虽然", "suīrán"], display: "虽然 (suīrán)", why: "但是 signals a concession clause opened by 虽然." },
  { sentence: "小兔子___毛很柔软，而且性格非常温顺。", en: "The little rabbit not only has soft fur, but also has a very gentle character.", ans: ["不但", "búdàn", "bùdàn"], display: "不但 (búdàn)", why: "而且 pairs with 不但 (not only)." },
  { sentence: "爸爸___猫毛过敏，所以家里不能养猫。", en: "Dad is allergic to cat fur, so we can't keep a cat at home.", ans: ["对", "duì"], display: "对 (duì)", why: "The allergy pattern always uses 对 (duì): 对……过敏." },
  { sentence: "弟弟___狗毛过敏，所以我们养了乌龟。", en: "My younger brother is allergic to dog fur, so we keep a turtle.", ans: ["对", "duì"], display: "对 (duì)", why: "Use 对 (duì) before the allergen in 对……过敏." },
  { sentence: "表姐___鸟毛过敏，所以不能养鹦鹉。", en: "My cousin is allergic to bird feathers, so she cannot keep a parrot.", ans: ["对", "duì"], display: "对 (duì)", why: "Use 对 (duì) before the allergen in 对……过敏." },
  { sentence: "这只温顺的小狗___陌生人也很友好。", en: "This gentle puppy is also very friendly towards strangers.", ans: ["对", "duì"], display: "对 (duì)", why: "对 + person + 友好 means 'friendly towards …'." },
  { sentence: "你___青少年养宠物有什么看法？", en: "What is your view on teenagers keeping pets?", ans: ["对", "duì"], display: "对 (duì)", why: "对 + topic + 有什么看法 means 'what opinion do you have on …'." },
  { sentence: "___小狗生病了，我们就带它去看兽医。", en: "If the puppy gets sick, we take it to see the vet.", ans: ["如果", "要是", "rúguǒ", "yàoshi"], display: "如果 (rúguǒ)", why: "如果……就…… expresses a condition ('if …, then …')." },
  { sentence: "___家人一起照顾，养狗就不会太累。", en: "If the family looks after it together, keeping a dog won't be too tiring.", ans: ["如果", "要是", "rúguǒ", "yàoshi"], display: "如果 (rúguǒ)", why: "如果……就…… introduces an 'if' condition." },
  { sentence: "如果每天去遛狗，___能多做运动。", en: "If you walk the dog every day, then you can get more exercise.", ans: ["就", "jiù"], display: "就 (jiù)", why: "如果 (if) pairs with 就 (then) before the verb." },
];

const OPINION_PHRASES = [
  { hanzi: "对猫毛过敏", pinyin: "duì māomáo guòmǐn", en: "allergic to cat fur", alt: [] },
  { hanzi: "对狗毛过敏", pinyin: "duì gǒumáo guòmǐn", en: "allergic to dog fur", alt: [] },
  { hanzi: "没时间照顾", pinyin: "méi shíjiān zhàogù", en: "no time to look after", alt: ["没有时间照顾", "méiyǒu shíjiān zhàogù"] },
  { hanzi: "责任感", pinyin: "zérèngǎn", en: "sense of responsibility", alt: [] },
  { hanzi: "负责任", pinyin: "fù zérèn", en: "responsible / take responsibility", alt: ["fùzérèn"] },
  { hanzi: "陪伴", pinyin: "péibàn", en: "companionship / keep company", alt: [] },
  { hanzi: "孤独", pinyin: "gūdú", en: "lonely", alt: [] },
  { hanzi: "好处", pinyin: "hǎochù", en: "advantage / benefit", alt: [] },
  { hanzi: "坏处", pinyin: "huàichù", en: "disadvantage / drawback", alt: [] },
  { hanzi: "花钱", pinyin: "huā qián", en: "costly / spend money", alt: ["huāqián"] },
  { hanzi: "麻烦", pinyin: "máfan", en: "troublesome", alt: [] },
  { hanzi: "空间", pinyin: "kōngjiān", en: "space", alt: [] },
  { hanzi: "公寓", pinyin: "gōngyù", en: "flat / apartment", alt: [] },
  { hanzi: "家庭成员", pinyin: "jiātíng chéngyuán", en: "family member", alt: [] },
  { hanzi: "看法", pinyin: "kànfǎ", en: "opinion / view", alt: [] },
  { hanzi: "同意", pinyin: "tóngyì", en: "agree", alt: [] },
  { hanzi: "保护", pinyin: "bǎohù", en: "protect", alt: [] },
  { hanzi: "快乐", pinyin: "kuàilè", en: "happy / joyful", alt: [] },
  { hanzi: "放松", pinyin: "fàngsōng", en: "relax", alt: [] },
  { hanzi: "过敏", pinyin: "guòmǐn", en: "allergic / allergy", alt: [] },
];

export const drills: Drill[] = [
  {
    id: "pets.animal-measure-words",
    topicId: "pets",
    title: "Animal Measure Words (只 · 条 · 匹 & 两)",
    level: 1,
    guideRef: "common-pets-measure-words",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const a = rng.pick(ANIMALS);
      const owner = rng.pick(OWNERS);
      if (tier === 1) {
        const n = rng.pick([1, 2, 3, 4, 5, 6]);
        const cH = countHanzi(n);
        const traps =
          a.mw === "只"
            ? [{ spec: { type: "text" as const, accept: ["个", "gè"] }, feedback: `Don't use 个 for pets — ${a.rule}.` }]
            : a.mw === "条"
              ? [{ spec: { type: "text" as const, accept: ["只", "zhī"] }, feedback: `Watch out! ${a.hanzi} takes 条 (tiáo), never 只.` }]
              : [{ spec: { type: "text" as const, accept: ["只", "zhī"] }, feedback: `Horses/ponies never take 只 — use 匹 (pǐ)!` }];
        return {
          prompt: `Fill in the exact animal measure word: **${owner.hanzi}有${cH}___${a.hanzi}** (${owner.en} has ${animalCountEn(n, a)}).`,
          answer: {
            type: "text",
            accept: [a.mw, a.mwPinyin],
            display: `${a.mw} (${a.mwPinyin})`,
          },
          traps,
          hint: `Picture the shape/species of ${a.hanzi} (${a.enSingle}): compact pets → 只, slender/swimming → 条, horses → 匹.`,
          solution: [
            `Rule: ${a.rule}.`,
            `${owner.hanzi}有${cH}${a.mw}${a.hanzi} (${owner.pinyin} yǒu ${countPinyin(n)} ${a.mwPinyin} ${a.pinyin}).`,
          ],
        };
      }
      if (tier === 2) {
        const n = rng.pick([1, 2, 2, 3, 4, 5, 6, 8]);
        const cH = countHanzi(n);
        const cP = countPinyin(n);
        const phraseH = `${cH}${a.mw}${a.hanzi}`;
        const phraseP = `${cP} ${a.mwPinyin} ${a.pinyin}`;
        const traps = [];
        if (n === 2) {
          traps.push({
            spec: { type: "text" as const, accept: [`二${a.mw}${a.hanzi}`, `èr ${a.mwPinyin} ${a.pinyin}`] },
            feedback: "Before a measure word, standalone 2 MUST be 两 (liǎng), never 二!",
          });
        }
        if (a.mw !== "只") {
          traps.push({
            spec: { type: "text" as const, accept: [`${cH}只${a.hanzi}`, `${cP} zhī ${a.pinyin}`] },
            feedback: `Careful — ${a.rule}, not 只!`,
          });
        }
        return {
          prompt: `Translate **${animalCountEn(n, a)}** into Simplified Mandarin (number + exact measure word + noun).`,
          answer: {
            type: "text",
            accept: [phraseH, phraseP, phraseP.replace(/\s+/g, "")],
            display: `${phraseH} (${phraseP})`,
          },
          traps,
          hint: `${n === 2 ? "Remember 两 before a measure word! " : ""}${a.enSingle} = ${a.hanzi} (${a.pinyin}); ${a.rule}.`,
          solution: [
            `Number: ${n} → ${cH} (${cP})${n === 2 ? " (2 before a MW is always 两)" : ""}.`,
            `Measure word: ${a.mw} (${a.mwPinyin}) because ${a.rule}.`,
            `Full phrase: ${phraseH} (${phraseP}).`,
          ],
        };
      }
      // Tier 3: Watch compound numbers (2 vs 12 vs 20 vs 22) + full owner sentence
      const n = rng.pick([2, 12, 20, 22]);
      const cH = countHanzi(n);
      const cP = countPinyin(n);
      const verb = rng.bool() ? { h: "有", p: "yǒu", en: "has" } : { h: "养了", p: "yǎng le", en: "keeps" };
      const fullH = `${owner.hanzi}${verb.h}${cH}${a.mw}${a.hanzi}`;
      const fullP = `${owner.pinyin} ${verb.p} ${cP} ${a.mwPinyin} ${a.pinyin}`;
      return {
        prompt: `Translate into Simplified Mandarin (check 二 vs 两 and the exact classifier): **${owner.en} ${verb.en} ${animalCountEn(n, a)}** (use **${owner.hanzi}** and **${verb.h}**).`,
        answer: {
          type: "text",
          accept: [fullH, fullP, fullP.toLowerCase()],
          display: `${fullH} (${fullP})`,
        },
        hint: `Only standalone 2 uses 两; 12/20/22 keep 二. Classifier for ${a.hanzi}: ${a.mw} (${a.mwPinyin}).`,
        solution: [
          `Count ${n}: ${cH} (${cP}).`,
          `Classifier: ${a.mw} (${a.mwPinyin}) — ${a.rule}.`,
          `Sentence: ${fullH} (${fullP}).`,
        ],
      };
    },
  },
  {
    id: "pets.describe-character",
    topicId: "pets",
    title: "Describing Pets: Features, 又…又… & 有点儿",
    level: 1,
    guideRef: "describing-pets",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      const pet = rng.pick(PET_SUBJECTS);
      if (tier === 1) {
        if (rng.bool(0.45)) {
          const bp = rng.pick(BODY_PARTS);
          return {
            prompt: `In a description of a **${pet.en} (${pet.hanzi})**, how do you say **${bp.en}** in Simplified Mandarin (or tone-marked Pinyin)?`,
            answer: {
              type: "text",
              accept: [bp.hanzi, bp.pinyin],
              display: `${bp.hanzi} (${bp.pinyin})`,
            },
            hint: `Tone-marked Pinyin starts with "${bp.pinyin.slice(0, 2)}…".`,
            solution: [`${bp.en} = ${bp.hanzi} (${bp.pinyin}).`],
          };
        }
        const tr = rng.pick(TRAITS);
        return {
          prompt: `To describe your **${pet.en} (${pet.hanzi})**, what is the Mandarin adjective for **${tr.en}**?`,
          answer: {
            type: "text",
            accept: [tr.hanzi, tr.pinyin],
            display: `${tr.hanzi} (${tr.pinyin})`,
          },
          hint: `Starts with "${tr.pinyin.slice(0, 2)}…" (no 是 needed when using adjectives in sentences).`,
          solution: [`${tr.en} = ${tr.hanzi} (${tr.pinyin}): 我的${pet.hanzi}很${tr.hanzi}。`],
        };
      }
      if (tier === 2) {
        const negs = TRAITS.filter((t) => !t.positive);
        const pos = TRAITS.filter((t) => t.positive);
        if (rng.bool(0.45)) {
          const tr = rng.pick(negs);
          return {
            prompt: `Translate into Simplified Mandarin (watch **有点儿** word order!): **My ${pet.en} is a bit ${tr.en}.**`,
            answer: {
              type: "text",
              accept: [
                `我的${pet.hanzi}有点儿${tr.hanzi}`,
                `我的${pet.hanzi}有点${tr.hanzi}`,
                `wǒ de ${pet.pinyin} yǒudiǎnr ${tr.pinyin}`,
                `wǒ de ${pet.pinyin} yǒudiǎn ${tr.pinyin}`,
              ],
              display: `我的${pet.hanzi}有点儿${tr.hanzi} (Wǒ de ${pet.pinyin} yǒudiǎnr ${tr.pinyin})`,
            },
            traps: [
              {
                spec: { type: "text", accept: [`我的${pet.hanzi}${tr.hanzi}有点儿`, `我的${pet.hanzi}很${tr.hanzi}有点儿`] },
                feedback: "有点儿 MUST stand directly BEFORE the adjective (never after, and never stacked with 很)!",
              },
            ],
            hint: `Frame: 我的${pet.hanzi} + 有点儿 + ${tr.hanzi} (no 很, no 是).`,
            solution: [
              `Place 有点儿 (yǒudiǎnr) immediately before ${tr.hanzi} (${tr.pinyin}).`,
              `我的${pet.hanzi}有点儿${tr.hanzi} (Wǒ de ${pet.pinyin} yǒudiǎnr ${tr.pinyin}).`,
            ],
          };
        }
        const tr = rng.pick(pos);
        return {
          prompt: `Translate into Simplified Mandarin (remember: NO **是** before adjectives!): **My ${pet.en} is very ${tr.en}.**`,
          answer: {
            type: "text",
            accept: [
              `我的${pet.hanzi}很${tr.hanzi}`,
              `我的${pet.hanzi}非常${tr.hanzi}`,
              `wǒ de ${pet.pinyin} hěn ${tr.pinyin}`,
              `wǒ de ${pet.pinyin} fēicháng ${tr.pinyin}`,
            ],
            display: `我的${pet.hanzi}很${tr.hanzi} (Wǒ de ${pet.pinyin} hěn ${tr.pinyin})`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`我的${pet.hanzi}是${tr.hanzi}`, `我的${pet.hanzi}是很${tr.hanzi}`] },
              feedback: "Never use 是 before a Mandarin adjective! Link directly with 很 or 非常.",
            },
          ],
          hint: `Subject (我的${pet.hanzi}) + 很 / 非常 + ${tr.hanzi}.`,
          solution: [
            `Mandarin adjectives never take 是 — use 很 (hěn) or 非常 (fēicháng).`,
            `我的${pet.hanzi}很${tr.hanzi} (Wǒ de ${pet.pinyin} hěn ${tr.pinyin}).`,
          ],
        };
      }
      // Tier 3: Combine two distinct positive traits with 又……又……
      const pos = TRAITS.filter((t) => t.positive);
      const shuffled = rng.shuffle(pos);
      const t1 = shuffled[0];
      const t2 = shuffled[1];
      return {
        prompt: `Use **又……又……** to translate: **My ${pet.en} is both ${t1.en} and ${t2.en}.**`,
        answer: {
          type: "text",
          accept: [
            `我的${pet.hanzi}又${t1.hanzi}又${t2.hanzi}`,
            `我的${pet.hanzi}又${t2.hanzi}又${t1.hanzi}`,
            `wǒ de ${pet.pinyin} yòu ${t1.pinyin} yòu ${t2.pinyin}`,
            `wǒ de ${pet.pinyin} yòu ${t2.pinyin} yòu ${t1.pinyin}`,
          ],
          display: `我的${pet.hanzi}又${t1.hanzi}又${t2.hanzi} (Wǒ de ${pet.pinyin} yòu ${t1.pinyin} yòu ${t2.pinyin})`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`我的${pet.hanzi}很又${t1.hanzi}又${t2.hanzi}`] },
            feedback: "Do not add 很 before 又……又……!",
          },
        ],
        hint: `Frame: 我的${pet.hanzi} + 又 + ${t1.en} + 又 + ${t2.en} (no 很, no 和).`,
        solution: [
          `${t1.en} = ${t1.hanzi} (${t1.pinyin}), ${t2.en} = ${t2.hanzi} (${t2.pinyin}).`,
          `Combine with 又……又……: 我的${pet.hanzi}又${t1.hanzi}又${t2.hanzi}。`,
        ],
      };
    },
  },
  {
    id: "pets.care-routines",
    topicId: "pets",
    title: "Pet Care Verbs & STPVO Routines (照顾宠物)",
    level: 2,
    guideRef: "caring-for-pets",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const v = rng.pick(CARE_VOCAB);
        const style = rng.pick(["translate", "context"]);
        const prompt =
          style === "translate"
            ? `Translate this pet-care term into Simplified Mandarin (or tone-marked Pinyin): **${v.en}** (${v.cue}).`
            : `Which Mandarin pet-care word/phrase means **${v.en}**? (Context: *${v.cue}*)`;
        return {
          prompt,
          answer: {
            type: "text",
            accept: [v.hanzi, v.pinyin, ...v.alt],
            display: `${v.hanzi} (${v.pinyin})`,
          },
          hint: `Tone-marked Pinyin starts with "${v.pinyin.slice(0, 2)}…".`,
          solution: [`${v.en} = ${v.hanzi} (${v.pinyin}).`],
        };
      }
      if (tier === 2) {
        const subj = rng.pick(CARE_STPVO_SUBJECTS);
        const time = rng.pick(CARE_TIME_CHUNKS);
        const patterns = [
          {
            blank: `${subj.hanzi}${time.hanzi}___小狗洗澡。`,
            en: `${subj.hanzi} gives the puppy a bath (${time.en})`,
            ans: ["给", "gěi"],
            disp: "给 (gěi)",
            why: "洗澡 is a separable verb-object — introduce the pet beforehand with 给 (gěi).",
          },
          {
            blank: `${subj.hanzi}${time.hanzi}___小猫玩儿。`,
            en: `${subj.hanzi} plays with / keeps the kitten company (${time.en})`,
            ans: ["陪", "péi"],
            disp: "陪 (péi)",
            why: "Use 陪 (péi — accompany) + pet + 玩儿.",
          },
          {
            blank: `如果小狗生病了，${subj.hanzi}___它去看兽医。`,
            en: `if the puppy gets sick, ${subj.hanzi} takes it to see the vet`,
            ans: ["带", "dài"],
            disp: "带 (dài)",
            why: "Use 带 (dài — take along) + pet + 去看兽医.",
          },
          {
            blank: `${subj.hanzi}${time.hanzi}___公园遛狗。`,
            en: `${subj.hanzi} walks the dog in the park (${time.en})`,
            ans: ["在", "zài"],
            disp: "在 (zài)",
            why: "STPVO puts 在 + Place before the action: 在公园遛狗.",
          },
          {
            blank: `${subj.hanzi}${time.hanzi}___小狗吃狗粮。`,
            en: `${subj.hanzi} feeds the puppy dog food (${time.en})`,
            ans: ["喂", "wèi"],
            disp: "喂 (wèi)",
            why: "喂 (wèi) means 'to feed'.",
          },
        ];
        const p = rng.pick(patterns);
        return {
          prompt: `Fill in the single missing Mandarin word: **${p.blank}** (*${p.en}*).`,
          answer: {
            type: "text",
            accept: p.ans,
            display: p.disp,
          },
          hint: p.why.split("—")[0].trim(),
          solution: [p.why, `Answer: ${p.disp}.`],
        };
      }
      // Tier 3: Re-order scrambled STPVO pet-care sentence
      const subj = rng.pick(CARE_STPVO_SUBJECTS);
      const time = rng.pick(CARE_TIME_CHUNKS);
      const pa = rng.pick(CARE_STPVO_PLACES_ACTIONS);
      const pieces = rng.shuffle([subj.hanzi, time.hanzi, pa.place, pa.action]);
      const stpvoH = `${subj.hanzi}${time.hanzi}${pa.place}${pa.action}`;
      const tspvoH = `${time.hanzi}${subj.hanzi}${pa.place}${pa.action}`;
      const stpvoP = `${subj.pinyin} ${time.pinyin} ${pa.placePy} ${pa.actionPy}`;
      const tspvoP = `${time.pinyin} ${subj.pinyin} ${pa.placePy} ${pa.actionPy}`;
      return {
        prompt: `Arrange these 4 blocks into correct **STPVO** Mandarin order: \`${pieces.join("` / `")}\``,
        answer: {
          type: "text",
          accept: [stpvoH, tspvoH, stpvoP, tspvoP],
          display: `${stpvoH} (${stpvoP})`,
        },
        hint: "Follow STPVO: Subject → Time → Place (在…) → Action (Time may also stand first before Subject).",
        solution: [
          `S (${subj.hanzi}) + T (${time.hanzi}) + P (${pa.place}) + VO (${pa.action}).`,
          `Full sentence: ${stpvoH} (${stpvoP}).`,
        ],
      };
    },
  },
  {
    id: "pets.opinions-connectives",
    topicId: "pets",
    title: "Pet Opinions & Paired Connectives (因为/虽然/对…过敏)",
    level: 3,
    guideRef: "reasons-for-against-pets",
    generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      if (tier === 1) {
        const c = rng.pick(OPINION_CONNECTIVES);
        return {
          prompt: `Fill in the missing connective/preposition: **${c.sentence}**`,
          answer: {
            type: "text",
            accept: c.ans,
            display: c.display,
          },
          hint: `Meaning: "${c.en}"`,
          solution: [c.why, `Full meaning: ${c.en}`],
        };
      }
      if (tier === 2) {
        const ph = rng.pick(OPINION_PHRASES);
        const frame = rng.pick([
          `Translate this key pet-opinion expression into Simplified Mandarin: **${ph.en}**.`,
          `In a Year 9 essay on keeping pets, how do you write **${ph.en}** in Mandarin?`,
        ]);
        return {
          prompt: frame,
          answer: {
            type: "text",
            accept: [ph.hanzi, ph.pinyin, ...ph.alt],
            display: `${ph.hanzi} (${ph.pinyin})`,
          },
          hint: `Tone-marked Pinyin starts with "${ph.pinyin.slice(0, 3)}…".`,
          solution: [`${ph.en} = ${ph.hanzi} (${ph.pinyin}).`],
        };
      }
      // Tier 3: Translate full allergy or paired-connective clauses
      const person = rng.pick([
        { h: "爸爸", p: "bàba", en: "Dad" },
        { h: "妈妈", p: "māma", en: "Mum" },
        { h: "哥哥", p: "gēge", en: "older brother" },
        { h: "姐姐", p: "jiějie", en: "older sister" },
        { h: "弟弟", p: "dìdi", en: "younger brother" },
        { h: "妹妹", p: "mèimei", en: "younger sister" },
      ]);
      const allergen = rng.pick([
        { h: "猫毛", p: "māomáo", en: "cat fur", pet: "猫", petP: "māo", petEn: "a cat" },
        { h: "狗毛", p: "gǒumáo", en: "dog fur", pet: "狗", petP: "gǒu", petEn: "a dog" },
        { h: "兔毛", p: "tùmáo", en: "rabbit fur", pet: "兔子", petP: "tùzi", petEn: "a rabbit" },
        { h: "鸟毛", p: "niǎomáo", en: "bird feathers", pet: "鸟", petP: "niǎo", petEn: "a bird" },
      ]);
      if (rng.bool(0.55)) {
        const ansH = `${person.h}对${allergen.h}过敏`;
        const ansP = `${person.p} duì ${allergen.p} guòmǐn`;
        return {
          prompt: `Translate into Simplified Mandarin: **${person.en} is allergic to ${allergen.en}.** (Use **${person.h}**.)`,
          answer: {
            type: "text",
            accept: [ansH, ansP],
            display: `${ansH} (${ansP})`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${person.h}过敏${allergen.h}`, `${person.h}给${allergen.h}过敏`] },
              feedback: "Use the fixed allergy frame: Subject + 对 (duì) + allergen + 过敏!",
            },
          ],
          hint: `Pattern: ${person.h} + 对 + ${allergen.h} + 过敏.`,
          solution: [
            `Allergy pattern: Subject + 对 (duì) + allergen + 过敏 (guòmǐn).`,
            `${ansH} (${ansP}).`,
          ],
        };
      }
      const c = rng.pick(OPINION_CONNECTIVES);
      return {
        prompt: `Complete this IGCSE pet-opinion sentence cleanly (Simplified Hanzi or Pinyin): **${c.sentence}** *(English: "${c.en}")*`,
        answer: {
          type: "text",
          accept: c.ans,
          display: c.display,
        },
        hint: "Check the paired connective bracket in the other clause (因为↔所以, 虽然↔但是, 不但↔而且, 如果↔就, 对……过敏).",
        solution: [c.why, `Answer: ${c.display}.`],
      };
    },
  },
];
