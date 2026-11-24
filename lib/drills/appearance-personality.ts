import type { Drill, Rng } from "./types";

const PEOPLE_PY: Record<string, string> = {
  哥哥: "gēge",
  姐姐: "jiějie",
  弟弟: "dìdi",
  妹妹: "mèimei",
  表哥: "biǎogē",
  表姐: "biǎojiě",
  堂弟: "tángdì",
  堂妹: "tángmèi",
  林老师: "Lín lǎoshī",
  陈浩: "Chén Hào",
};
const TRAIT_CMP_PY: Record<string, string> = {
  高: "gāo",
  聪明: "cōngmíng",
  幽默: "yōumò",
  认真: "rènzhēn",
  勤快: "qínkuài",
  耐心: "nàixīn",
  开朗: "kāilǎng",
};
const PEOPLE = ["哥哥", "姐姐", "弟弟", "妹妹", "表哥", "表姐", "堂弟", "堂妹", "林老师", "陈浩"] as const;
const COLOURS = ["白色", "蓝色", "黑色", "红色", "黄色", "灰色", "绿色", "深蓝色"] as const;

interface WearItem {
  cn: string;
  py: string;
  en: string;
  verb: "穿" | "戴";
  verbPy: "chuān" | "dài";
  mw: string;
  mwPy: string;
}

const WEAR_ITEMS: WearItem[] = [
  { cn: "衬衫", py: "chènshān", en: "shirt", verb: "穿", verbPy: "chuān", mw: "件", mwPy: "jiàn" },
  { cn: "T恤衫", py: "T-xùshān", en: "T-shirt", verb: "穿", verbPy: "chuān", mw: "件", mwPy: "jiàn" },
  { cn: "外套", py: "wàitào", en: "jacket", verb: "穿", verbPy: "chuān", mw: "件", mwPy: "jiàn" },
  { cn: "毛衣", py: "máoyī", en: "sweater", verb: "穿", verbPy: "chuān", mw: "件", mwPy: "jiàn" },
  { cn: "牛仔裤", py: "niúzǎikù", en: "jeans", verb: "穿", verbPy: "chuān", mw: "条", mwPy: "tiáo" },
  { cn: "裤子", py: "kùzi", en: "trousers", verb: "穿", verbPy: "chuān", mw: "条", mwPy: "tiáo" },
  { cn: "裙子", py: "qúnzi", en: "skirt", verb: "穿", verbPy: "chuān", mw: "条", mwPy: "tiáo" },
  { cn: "连衣裙", py: "liányīqún", en: "dress", verb: "穿", verbPy: "chuān", mw: "条", mwPy: "tiáo" },
  { cn: "运动鞋", py: "yùndòngxié", en: "trainers", verb: "穿", verbPy: "chuān", mw: "双", mwPy: "shuāng" },
  { cn: "皮鞋", py: "píxié", en: "leather shoes", verb: "穿", verbPy: "chuān", mw: "双", mwPy: "shuāng" },
  { cn: "袜子", py: "wàzi", en: "socks", verb: "穿", verbPy: "chuān", mw: "双", mwPy: "shuāng" },
  { cn: "眼镜", py: "yǎnjìng", en: "glasses", verb: "戴", verbPy: "dài", mw: "副", mwPy: "fù" },
  { cn: "太阳镜", py: "tàiyángjìng", en: "sunglasses", verb: "戴", verbPy: "dài", mw: "副", mwPy: "fù" },
  { cn: "帽子", py: "màozi", en: "hat", verb: "戴", verbPy: "dài", mw: "顶", mwPy: "dǐng" },
  { cn: "围巾", py: "wéijīn", en: "scarf", verb: "戴", verbPy: "dài", mw: "条", mwPy: "tiáo" },
  { cn: "手表", py: "shǒubiǎo", en: "wristwatch", verb: "戴", verbPy: "dài", mw: "块", mwPy: "kuài" },
];

const HAIR_AND_FEATURES: { phrase: string; en: string; verb: "留着" | "长着"; py: "liúzhe" | "zhǎngzhe"; note: string }[] = [
  { phrase: "黑色的长直发", en: "long straight black hair", verb: "留着", py: "liúzhe", note: "hairstyle" },
  { phrase: "棕色的卷发", en: "curly brown hair", verb: "留着", py: "liúzhe", note: "hairstyle" },
  { phrase: "短短的黑头发", en: "short black hair", verb: "留着", py: "liúzhe", note: "hairstyle" },
  { phrase: "整齐的短发", en: "neat short hair", verb: "留着", py: "liúzhe", note: "hairstyle" },
  { phrase: "短短的白胡子", en: "a short white beard", verb: "留着", py: "liúzhe", note: "beard" },
  { phrase: "一双明亮的大眼睛", en: "a pair of bright big eyes", verb: "长着", py: "zhǎngzhe", note: "born facial feature" },
  { phrase: "一张可爱的圆脸", en: "a cute round face", verb: "长着", py: "zhǎngzhe", note: "born facial feature" },
  { phrase: "高高的鼻子", en: "a prominent nose", verb: "长着", py: "zhǎngzhe", note: "born facial feature" },
  { phrase: "小小的嘴巴", en: "a small mouth", verb: "长着", py: "zhǎngzhe", note: "born facial feature" },
  { phrase: "一对大耳朵", en: "a pair of big ears", verb: "长着", py: "zhǎngzhe", note: "born facial feature" },
];

const TRAITS: { cn: string; py: string; en: string; opp?: string; oppPy?: string; neg?: boolean }[] = [
  { cn: "聪明", py: "cōngmíng", en: "clever / smart" },
  { cn: "友好", py: "yǒuhǎo", en: "friendly" },
  { cn: "幽默", py: "yōumò", en: "humorous / funny" },
  { cn: "认真", py: "rènzhēn", en: "serious / diligent", opp: "粗心", oppPy: "cūxīn" },
  { cn: "勤快", py: "qínkuài", en: "hardworking", opp: "懒", oppPy: "lǎn" },
  { cn: "耐心", py: "nàixīn", en: "patient" },
  { cn: "开朗", py: "kāilǎng", en: "outgoing / cheerful", opp: "内向", oppPy: "nèixiàng" },
  { cn: "活泼", py: "huópō", en: "lively / energetic" },
  { cn: "善良", py: "shànliáng", en: "kind-hearted" },
  { cn: "诚实", py: "chéngshí", en: "honest" },
  { cn: "细心", py: "xìxīn", en: "careful / attentive", opp: "粗心", oppPy: "cūxīn" },
  { cn: "懒", py: "lǎn", en: "lazy", opp: "勤快", oppPy: "qínkuài", neg: true },
  { cn: "害羞", py: "hàixiū", en: "shy", neg: true },
  { cn: "严格", py: "yángé", en: "strict", neg: true },
  { cn: "粗心", py: "cūxīn", en: "careless", opp: "认真", oppPy: "rènzhēn", neg: true },
  { cn: "严肃", py: "yánsù", en: "stern / serious-looking", neg: true },
];

const POS_TRAITS = TRAITS.filter((t) => !t.neg);
const NEG_TRAITS = TRAITS.filter((t) => t.neg);

function cmToCn(cm: number): string {
  const m = Math.floor(cm / 100);
  const rem = cm % 100;
  const digits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  const d1 = Math.floor(rem / 10);
  const d2 = rem % 10;
  return `${digits[m]}米${digits[d1]}${digits[d2]}`;
}

export const drills: Drill[] = [
  {
    id: "appearance-personality.chuan-vs-dai",
    topicId: "appearance-personality",
    title: "Wearing Verbs (穿 vs 戴) & Clothing Classifiers",
    level: 1,
    guideRef: "wearing-clothes-glasses",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const person = rng.pick(PEOPLE);
      const colour = rng.pick(COLOURS);
      const item = rng.pick(WEAR_ITEMS);
      const wrongVerb = item.verb === "穿" ? "戴" : "穿";
      const wrongVerbPy = item.verb === "穿" ? "dài" : "chuān";

      if (tier === 1) {
        return {
          prompt: `Choose **穿 (chuān)** or **戴 (dài)**: **照片里${person}___着一${item.mw}${colour}的${item.cn}（${item.en}）。**`,
          answer: { type: "text", accept: [item.verb, item.verbPy], display: `${item.verb} (${item.verbPy})` },
          traps: [
            {
              spec: { type: "text", accept: [wrongVerb, wrongVerbPy] },
              feedback:
                item.verb === "穿"
                  ? `**${item.cn}** (${item.en}) is a garment/footwear item pulled onto your body → use **穿 (chuān)**, not **戴**!`
                  : `**${item.cn}** (${item.en}) is an accessory on your head/face/neck/wrist → use **戴 (dài)**, not **穿**!`,
            },
          ],
          hint: `Is ${item.cn} (${item.en}) a garment/shoe (穿) or an accessory (戴)?`,
          solution: [
            `**${item.cn}** (${item.en}) takes **${item.verb} (${item.verbPy})**: **${person}${item.verb}着一${item.mw}${colour}的${item.cn}**。`,
          ],
        };
      }

      if (tier === 2) {
        return {
          prompt: `Fill in the exact clothing/accessory measure word: **${person}${item.verb}着一___${colour}的${item.cn}（${item.en}）。**`,
          answer: { type: "text", accept: [item.mw, item.mwPy], display: `${item.mw} (${item.mwPy})` },
          hint: "Pick from 件 (tops), 条 (trousers/skirts/scarves), 双 (shoes/socks), 副 (glasses), 顶 (hats), 块 (watches).",
          solution: [`**${item.cn}** takes classifier **${item.mw} (${item.mwPy})**: **一${item.mw}${colour}的${item.cn}**。`],
        };
      }

      // Tier 3: verb + 着 + 一 + classifier together
      const fullHz = `${item.verb}着一${item.mw}`;
      const yiTone = item.mwPy.startsWith("j") || item.mwPy.startsWith("f") || item.mwPy.startsWith("k") ? "yí" : "yì";
      const fullPy = `${item.verbPy}zhe ${yiTone} ${item.mwPy}`;
      return {
        prompt: `Write **verb + 着 + 一 + exact classifier** (4 characters) to complete: **${person}今天____${colour}的${item.cn}（${item.en}）。**`,
        answer: { type: "text", accept: [fullHz, fullPy, `${item.verbPy}zhe yī ${item.mwPy}`], display: `${fullHz} (${fullPy})` },
        traps: [
          {
            spec: { type: "text", accept: [`${wrongVerb}着一${item.mw}`] },
            feedback: `Right measure word (**${item.mw}**), wrong wearing verb! **${item.cn}** takes **${item.verb}**, not **${wrongVerb}**.`,
          },
        ],
        hint: `Combine ${item.verb === "穿" ? "garment verb" : "accessory verb"} + 着 + 一 + exact classifier for ${item.cn}.`,
        solution: [
          `1. Wearing verb for **${item.cn}** = **${item.verb}着**.`,
          `2. Exact classifier = **一${item.mw}**.`,
          `3. Combined: **${fullHz}** (**${person}今天${fullHz}${colour}的${item.cn}**).`,
        ],
      };
    },
  },
  {
    id: "appearance-personality.features-state-verbs",
    topicId: "appearance-personality",
    title: "Hair, Facial Features (留着 vs 长着) & No 是",
    level: 1,
    guideRef: "height-hair-eyes",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const person = rng.pick(PEOPLE);

      if (tier === 1) {
        const feat = rng.pick(HAIR_AND_FEATURES);
        const wrong = feat.verb === "留着" ? "长着" : "留着";
        const wrongPy = feat.verb === "留着" ? "zhǎngzhe" : "liúzhe";
        return {
          prompt: `Choose **留着 (liúzhe)** or **长着 (zhǎngzhe)**: **${person}___${feat.phrase}（${feat.en}）。**`,
          answer: { type: "text", accept: [feat.verb, feat.py], display: `${feat.verb} (${feat.py})` },
          traps: [
            {
              spec: { type: "text", accept: [wrong, wrongPy] },
              feedback:
                feat.verb === "留着"
                  ? `Hairstyles and beards take **留着 (liúzhe)**, not **长着**!`
                  : `Born facial features (eyes, nose, mouth, face) take **长着 (zhǎngzhe)**, not **留着**!`,
            },
          ],
          hint: "留着 = hairstyles & beards you keep; 长着 = born facial features.",
          solution: [`**${feat.phrase}** is a ${feat.note} → **${feat.verb} (${feat.py})**.`],
        };
      }

      if (tier === 2) {
        const vocabPool: { cue: string; hz: string; py: string; trapHz?: string; trapPy?: string; trapMsg?: string }[] = [
          { cue: "straight hair", hz: "直发", py: "zhífà", trapHz: "卷发", trapPy: "juǎnfà", trapMsg: "**卷发** means curly hair; straight hair is **直发 (zhífà)**." },
          { cue: "curly hair", hz: "卷发", py: "juǎnfà", trapHz: "直发", trapPy: "zhífà", trapMsg: "**直发** means straight hair; curly hair is **卷发 (juǎnfà)**." },
          { cue: "eyes (body part, NOT glasses!)", hz: "眼睛", py: "yǎnjing", trapHz: "眼镜", trapPy: "yǎnjìng", trapMsg: "**眼镜** means glasses (metal radical 钅); eyes are **眼睛 (yǎnjing)**!" },
          { cue: "glasses (worn with 戴)", hz: "眼镜", py: "yǎnjìng", trapHz: "眼睛", trapPy: "yǎnjing", trapMsg: "**眼睛** means eyes; glasses are **眼镜 (yǎnjìng)**!" },
          { cue: "round face", hz: "圆脸", py: "yuánliǎn" },
          { cue: "medium build", hz: "中等身材", py: "zhōngděng shēncái" },
          { cue: "short (in height/stature)", hz: "矮", py: "ǎi", trapHz: "短", trapPy: "duǎn", trapMsg: "**短** means short in length (hair); short in height is **矮 (ǎi)**!" },
          { cue: "slim / thin", hz: "瘦", py: "shòu" },
          { cue: "beard / moustache", hz: "胡子", py: "húzi" },
        ];
        const v = rng.pick(vocabPool);
        return {
          prompt: `Describing **${person}**: write the Mandarin word for **'${v.cue}'** (Simplified Hanzi or tone-marked Pinyin).`,
          answer: { type: "text", accept: [v.hz, v.py], display: `${v.hz} (${v.py})` },
          traps: v.trapHz
            ? [{ spec: { type: "text", accept: [v.trapHz, v.trapPy!] }, feedback: v.trapMsg! }]
            : undefined,
          hint: `Recall the exact appearance term for '${v.cue}'.`,
          solution: [`'${v.cue}' = **${v.hz} (${v.py})**.`],
        };
      }

      // Tier 3: fix 是 + bare adjective OR pick zhǎng vs cháng
      const fixAdj = rng.bool();
      if (fixAdj) {
        const adj = rng.pick([
          { cn: "高", py: "gāo", en: "tall" },
          { cn: "矮", py: "ǎi", en: "short" },
          { cn: "瘦", py: "shòu", en: "slim" },
          { cn: "聪明", py: "cōngmíng", en: "clever" },
          { cn: "幽默", py: "yōumò", en: "humorous" },
          { cn: "认真", py: "rènzhēn", en: "diligent" },
          { cn: "开朗", py: "kāilǎng", en: "outgoing" },
        ]);
        const pPy = PEOPLE_PY[person];
        return {
          prompt: `Fix the English-interference error by replacing **是** with **很**: **我${person}是${adj.cn}。**`,
          answer: {
            type: "text",
            accept: [
              `我${person}很${adj.cn}`,
              `${person}很${adj.cn}`,
              `wǒ ${pPy} hěn ${adj.py}`,
              `${pPy} hěn ${adj.py}`,
            ],
            display: `我${person}很${adj.cn}`,
          },
          hint: "Never put 是 before a bare adjective — swap 是 for 很!",
          solution: [`Replace **是** with **很**: **我${person}很${adj.cn}** (*wǒ ${pPy} hěn ${adj.py}* — ${adj.en}).`],
        };
      }
      const isBornVerb = rng.bool();
      if (isBornVerb) {
        const bodyPart = rng.pick(["大眼睛", "高鼻子", "圆脸", "大耳朵"]);
        return {
          prompt: `Write the exact tone-marked Pinyin of **长** in **${person}长着${bodyPart}** (zhǎng or cháng?):`,
          answer: { type: "text", accept: ["zhǎng"], display: "zhǎng" },
          traps: [{ spec: { type: "text", accept: ["cháng"] }, feedback: "**cháng** means 'long' (length). Before **着** ('born with / grown with'), **长** is third-tone **zhǎng**!" }],
          hint: "Here 长 is a verb meaning 'grown with / born with', not the adjective 'long'.",
          solution: ["**长着** = **zhǎngzhe** (3rd tone)."],
        };
      }
      const hairCol = rng.pick(["黑色", "棕色", "金色", "乌黑"]);
      return {
        prompt: `Write the exact tone-marked Pinyin of **长** in **${person}留着${hairCol}的长头发** (zhǎng or cháng?):`,
        answer: { type: "text", accept: ["cháng"], display: "cháng" },
        traps: [{ spec: { type: "text", accept: ["zhǎng"] }, feedback: "**zhǎng** means 'grow / born with'. Describing hair length (**长头发**), **长** is second-tone **cháng**!" }],
        hint: "Here 长 is an adjective describing length ('long hair').",
        solution: ["**长头发** = **cháng tóufa** (2nd tone)."],
      };
    },
  },
  {
    id: "appearance-personality.personality-youdianr",
    topicId: "appearance-personality",
    title: "Personality Traits, 又…又… & 有点儿 vs 一点儿",
    level: 2,
    guideRef: "personality-traits",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const person = rng.pick(PEOPLE);

      if (tier === 1) {
        const t = rng.pick(TRAITS);
        return {
          prompt: `Describing **${person}**: write the Mandarin personality adjective meaning **'${t.en}'** (Simplified Hanzi or tone-marked Pinyin).`,
          answer: { type: "text", accept: [t.cn, t.py], display: `${t.cn} (${t.py})` },
          traps: t.opp
            ? [{ spec: { type: "text", accept: [t.opp, t.oppPy!] }, feedback: `Careful — **${t.opp} (${t.oppPy})** means the OPPOSITE! '${t.en}' is **${t.cn} (${t.py})**.` }]
            : undefined,
          hint: `First letter of Pinyin: '${t.py[0]}'.`,
          solution: [`'${t.en}' = **${t.cn} (${t.py})**.`],
        };
      }

      if (tier === 2) {
        const beforeAdj = rng.bool();
        if (beforeAdj) {
          const neg = rng.pick(NEG_TRAITS);
          const ctx = rng.pick(["平时", "有时候", "周末", "在学校", "在家"]);
          return {
            prompt: `Choose **有点儿 (yǒudiǎnr)** or **一点儿 (yìdiǎnr)**: **${person}${ctx}___${neg.cn}（${neg.en}）。**`,
            answer: { type: "text", accept: ["有点儿", "yǒudiǎnr", "有点", "yǒudiǎn"], display: "有点儿 (yǒudiǎnr)" },
            traps: [
              { spec: { type: "text", accept: ["一点儿", "yìdiǎnr", "一点", "yìdiǎn"] }, feedback: `**一点儿** sits AFTER an adjective in comparisons! BEFORE a mildly negative adjective (**${neg.cn}**), use **有点儿 (yǒudiǎnr)**.` },
            ],
            hint: `Check the position: the blank is BEFORE the mildly negative adjective ${neg.cn}.`,
            solution: [`BEFORE a mildly negative adjective → **有点儿 (yǒudiǎnr)**: **有点儿${neg.cn}**。`],
          };
        }
        const other = rng.pick(PEOPLE.filter((p) => p !== person));
        const cmpAdj = rng.pick(["高", "矮", "认真", "勤快", "耐心", "幽默", "细心"]);
        return {
          prompt: `Choose **有点儿 (yǒudiǎnr)** or **一点儿 (yìdiǎnr)**: **${person}比${other}${cmpAdj}___。**`,
          answer: { type: "text", accept: ["一点儿", "yìdiǎnr", "一点", "yìdiǎn"], display: "一点儿 (yìdiǎnr)" },
          traps: [
            { spec: { type: "text", accept: ["有点儿", "yǒudiǎnr", "有点", "yǒudiǎn"] }, feedback: "**有点儿** goes BEFORE an adjective! AFTER an adjective in a **比** comparison, always use **一点儿 (yìdiǎnr)**." },
          ],
          hint: `Check the position: the blank is AFTER the adjective ${cmpAdj} inside a 比 comparison.`,
          solution: [`AFTER an adjective in a **比** comparison → **一点儿 (yìdiǎnr)**: **比${other}${cmpAdj}一点儿**。`],
        };
      }

      // Tier 3: polarity check — 又…又… vs 虽然…但是…
      const samePolarity = rng.bool();
      if (samePolarity) {
        const pair = rng.shuffle(POS_TRAITS).slice(0, 2);
        return {
          prompt: `Both **${pair[0].cn}** (${pair[0].en}) and **${pair[1].cn}** (${pair[1].en}) are positive! Fill in the single repeated character to say 'both... and...': **${person}___${pair[0].cn}___${pair[1].cn}。**`,
          answer: { type: "text", accept: ["又", "yòu"], display: "又 (yòu)" },
          traps: [{ spec: { type: "text", accept: ["很", "hěn"] }, feedback: "Never put **很** inside **又…又…**! Use **又 (yòu)**." }],
          hint: "Same-polarity 'both... and...' pattern (4th tone, yòu).",
          solution: [`Both traits are positive → **又${pair[0].cn}又${pair[1].cn}** (*yòu ${pair[0].py} yòu ${pair[1].py}*).`],
        };
      }
      const pos = rng.pick(POS_TRAITS);
      const neg = rng.pick(NEG_TRAITS);
      return {
        prompt: `Mixed polarity! **${pos.cn}** (+) and **${neg.cn}** (−) CANNOT use 又…又…. Complete the contrast: **${person}虽然很${pos.cn}，___有点儿${neg.cn}。**`,
        answer: { type: "text", accept: ["但是", "dànshì", "可是", "kěshì"], display: "但是 (dànshì)" },
        traps: [{ spec: { type: "text", accept: ["又", "yòu"] }, feedback: "Positive + negative traits CANNOT use **又**! Pair **虽然** with **但是 (dànshì)**." }],
        hint: "Pair 虽然 (although) with its required partner 'yet/but'.",
        solution: [`Mixed traits use **虽然…，但是有点儿…**: **虽然很${pos.cn}，但是有点儿${neg.cn}**。`],
      };
    },
  },
  {
    id: "appearance-personality.bi-meiyou-yiyang",
    topicId: "appearance-personality",
    title: "Comparisons: 比 (bǐ), 没有 (méiyǒu) & 跟…一样",
    level: 3,
    guideRef: "comparing-people",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const [pA, pB] = rng.shuffle(PEOPLE).slice(0, 2);

      if (tier === 1) {
        const hA = rng.int(155, 185);
        const rel = rng.int(0, 2); // 0: >, 1: <, 2: =
        const gap = rng.int(3, 12);
        const hB = rel === 0 ? hA - gap : rel === 1 ? hA + gap : hA;

        if (rel === 0) {
          return {
            prompt: `**${pA}** is **${hA} cm** and **${pB}** is **${hB} cm**. Fill in **比**, **没有**, or **一样**: **${pA}___${pB}高。**`,
            answer: { type: "text", accept: ["比", "bǐ"], display: "比 (bǐ)" },
            traps: [{ spec: { type: "text", accept: ["没有", "méiyǒu"] }, feedback: `${pA} (${hA} cm) is TALLER than ${pB} (${hB} cm), so use **比 (bǐ)**, not **没有**!` }],
            hint: `Compare ${hA} cm vs ${hB} cm: ${pA} > ${pB}.`,
            solution: [`${hA} > ${hB} → **${pA}比${pB}高** (${pA} is taller than ${pB}).`],
          };
        }
        if (rel === 1) {
          return {
            prompt: `**${pA}** is **${hA} cm** and **${pB}** is **${hB} cm**. Fill in **比**, **没有**, or **一样**: **${pA}___${pB}高。**`,
            answer: { type: "text", accept: ["没有", "méiyǒu"], display: "没有 (méiyǒu)" },
            traps: [{ spec: { type: "text", accept: ["比", "bǐ"] }, feedback: `${pA} (${hA} cm) is SHORTER than ${pB} (${hB} cm), so use **没有 (méiyǒu)** ('not as tall as'), not **比**!` }],
            hint: `Compare ${hA} cm vs ${hB} cm: ${pA} < ${pB} ('not as tall as').`,
            solution: [`${hA} < ${hB} → **${pA}没有${pB}高** (${pA} is not as tall as ${pB}).`],
          };
        }
        return {
          prompt: `**${pA}** is **${hA} cm** and **${pB}** is **${hB} cm**. Fill in **比**, **没有**, or **一样**: **${pA}和${pB}___高。**`,
          answer: { type: "text", accept: ["一样", "yíyàng", "yīyàng"], display: "一样 (yíyàng)" },
          hint: `Both are ${hA} cm — exact equality!`,
          solution: [`${hA} = ${hB} → **${pA}和${pB}一样高** (the same height).`],
        };
      }

      if (tier === 2) {
        const sub = rng.int(0, 2);
        const trait = rng.pick(["高", "聪明", "幽默", "认真", "勤快", "耐心", "开朗"]);
        const aPy = PEOPLE_PY[pA];
        const bPy = PEOPLE_PY[pB];
        const tPy = TRAIT_CMP_PY[trait];
        if (sub === 0) {
          return {
            prompt: `Rewrite **${pA}比${pB}${trait}** starting with **${pB}** using **没有** (keep the exact same meaning):`,
            answer: {
              type: "text",
              accept: [
                `${pB}没有${pA}${trait}`,
                `${pB}没有${pA}那么${trait}`,
                `${bPy} méiyǒu ${aPy} ${tPy}`,
                `${bPy} méiyǒu ${aPy} nàme ${tPy}`,
              ],
              display: `${pB}没有${pA}${trait}`,
            },
            traps: [
              { spec: { type: "text", accept: [`${pA}没有${pB}${trait}`, `${aPy} méiyǒu ${bPy} ${tPy}`] }, feedback: `Watch the direction! **${pA}比${pB}${trait}** means **${pB}** is less, so **${pB}** must come first.` },
            ],
            hint: `Flip A and B when changing 比 → 没有: ${pB} + 没有 + ${pA} + ${trait}.`,
            solution: [`**${pA}比${pB}${trait}** ≡ **${pB}没有${pA}${trait}** (*${bPy} méiyǒu ${aPy} ${tPy}*).`],
          };
        }
        if (sub === 1) {
          return {
            prompt: `Fix the banned word **很** so this sentence means *'${pA} is MUCH more ${trait} than ${pB}'*: **${pA}比${pB}很${trait}。**`,
            answer: {
              type: "text",
              accept: [
                `${pA}比${pB}${trait}得多`,
                `${pA}比${pB}${trait}多了`,
                `${aPy} bǐ ${bPy} ${tPy} de duō`,
                `${aPy} bǐ ${bPy} ${tPy} duō le`,
              ],
              display: `${pA}比${pB}${trait}得多`,
            },
            traps: [
              { spec: { type: "text", accept: [`${pA}比${pB}非常${trait}`, `${pA}比${pB}太${trait}`] }, feedback: `**非常** and **太** are ALSO banned after **比**! Place **得多** or **多了** AFTER **${trait}**.` },
            ],
            hint: `Delete 很 and place 得多 (or 多了) AFTER ${trait}.`,
            solution: [`Remove banned **很** and place **得多** after the adjective: **${pA}比${pB}${trait}得多** (*${aPy} bǐ ${bPy} ${tPy} de duō*).`],
          };
        }
        return {
          prompt: `Fill in the ONLY adverb meaning **'even more'** allowed directly BEFORE the adjective after **比**: **${pB}很${trait}，但是${pA}比${pB}___${trait}！**`,
          answer: { type: "text", accept: ["更", "gèng"], display: "更 (gèng)" },
          traps: [
            { spec: { type: "text", accept: ["很", "hěn", "非常", "fēicháng"] }, feedback: "**很** and **非常** are strictly banned after **比**! Use **更 (gèng)** for 'even more'." },
          ],
          hint: "Fourth-tone single character (gèng) meaning 'even more'.",
          solution: [`**更 (gèng)** is allowed before the adjective after **比**: **${pA}比${pB}更${trait}**。`],
        };
      }

      // Tier 3: three-person Mandarin height arithmetic deduction
      const [x, y, z] = rng.shuffle(PEOPLE).slice(0, 3);
      const base = rng.int(158, 174);
      const up = rng.int(3, 12);
      const down = rng.int(4, 14);
      const diff = up + down;
      return {
        prompt: `Read carefully: **${x}身高${cmToCn(base)}。${y}比${x}高${up}厘米，${z}没有${x}高，比${x}矮${down}厘米。** How many centimetres taller is **${y}** than **${z}**? (Type a number.)`,
        answer: { type: "number", value: diff, display: String(diff) },
        traps: [
          {
            spec: { type: "number", value: Math.abs(up - down) },
            feedback: `${y} is ABOVE ${x} (+${up} cm) and ${z} is BELOW ${x} (−${down} cm), so ADD ${up} + ${down} = ${diff} cm!`,
          },
        ],
        hint: `Compute ${y} = ${base} + ${up} cm and ${z} = ${base} − ${down} cm, then subtract.`,
        solution: [
          `1. ${x} = ${base} cm; ${y} = ${base} + ${up} = ${base + up} cm; ${z} = ${base} − ${down} = ${base - down} cm.`,
          `2. Gap = (${base + up}) − (${base - down}) = ${up} + ${down} = **${diff}** cm.`,
        ],
      };
    },
  },
];
