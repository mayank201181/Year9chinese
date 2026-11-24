import type { Drill } from "./types";
import { numberToHanzi } from "../chinese/grammar.ts";

const PLACES = [
  { hanzi: "超市", pinyin: "chāoshì", en: "supermarket", mw: "家", mwPy: "jiā", altMw: ["个", "gè"], action: "买菜和日用品 (buy groceries)" },
  { hanzi: "银行", pinyin: "yínháng", en: "bank", mw: "家", mwPy: "jiā", altMw: ["个", "gè"], action: "取钱和换钱 (withdraw or exchange money)" },
  { hanzi: "邮局", pinyin: "yóujú", en: "post office", mw: "个", mwPy: "gè", altMw: ["家", "jiā"], action: "寄信和寄包裹 (mail letters and parcels)" },
  { hanzi: "医院", pinyin: "yīyuàn", en: "hospital", mw: "家", mwPy: "jiā", altMw: ["个", "gè"], action: "看病 (see a doctor)" },
  { hanzi: "公园", pinyin: "gōngyuán", en: "park", mw: "个", mwPy: "gè", altMw: [] as string[], action: "散步和跑步 (stroll and jog)" },
  { hanzi: "图书馆", pinyin: "túshūguǎn", en: "library", mw: "个", mwPy: "gè", altMw: ["座", "zuò"], action: "看书和借书 (read and borrow books)" },
  { hanzi: "电影院", pinyin: "diànyǐngyuàn", en: "cinema", mw: "家", mwPy: "jiā", altMw: ["个", "gè"], action: "看电影 (watch a movie)" },
  { hanzi: "地铁站", pinyin: "dìtiězhàn", en: "MRT / subway station", mw: "个", mwPy: "gè", altMw: [] as string[], action: "坐地铁 (catch the MRT)" },
  { hanzi: "公共汽车站", pinyin: "gōnggòng qìchēzhàn", en: "bus stop", mw: "个", mwPy: "gè", altMw: [] as string[], action: "坐公共汽车 (catch the bus)" },
  { hanzi: "购物中心", pinyin: "gòuwù zhōngxīn", en: "shopping mall", mw: "个", mwPy: "gè", altMw: [] as string[], action: "逛街和买衣服 (shop for clothes)" },
  { hanzi: "体育中心", pinyin: "tǐyù zhōngxīn", en: "sports centre", mw: "个", mwPy: "gè", altMw: [] as string[], action: "游泳和打篮球 (swim and play basketball)" },
  { hanzi: "餐厅", pinyin: "cāntīng", en: "restaurant", mw: "家", mwPy: "jiā", altMw: ["个", "gè"], action: "跟家人吃晚饭 (eat dinner with family)" },
  { hanzi: "书店", pinyin: "shūdiàn", en: "bookshop", mw: "家", mwPy: "jiā", altMw: ["个", "gè"], action: "买中文故事书 (buy Chinese storybooks)" },
  { hanzi: "博物馆", pinyin: "bówùguǎn", en: "museum", mw: "个", mwPy: "gè", altMw: ["座", "zuò"], action: "参观历史展览 (visit history exhibits)" },
] as const;

const ANCHORS = [
  { hanzi: "我家", pinyin: "wǒ jiā", en: "my home" },
  { hanzi: "学校", pinyin: "xuéxiào", en: "school" },
  { hanzi: "公园", pinyin: "gōngyuán", en: "the park" },
  { hanzi: "地铁站", pinyin: "dìtiězhàn", en: "the MRT station" },
  { hanzi: "爷爷家", pinyin: "yéye jiā", en: "Grandpa's house" },
  { hanzi: "新社区", pinyin: "xīn shèqū", en: "the new neighbourhood" },
] as const;

const TRANSPORTS = [
  { verb: "坐", verbPy: "zuò", phrase: "坐地铁", py: "zuò dìtiě", noun: "地铁", en: "take the MRT", wrongVerb: "骑" },
  { verb: "坐", verbPy: "zuò", phrase: "坐公共汽车", py: "zuò gōnggòng qìchē", noun: "公共汽车", en: "take the bus", wrongVerb: "骑" },
  { verb: "坐", verbPy: "zuò", phrase: "坐出租车", py: "zuò chūzūchē", noun: "出租车", en: "take a taxi", wrongVerb: "骑" },
  { verb: "骑", verbPy: "qí", phrase: "骑自行车", py: "qí zìxíngchē", noun: "自行车", en: "ride a bicycle", wrongVerb: "坐" },
  { verb: "开", verbPy: "kāi", phrase: "开车", py: "kāichē", noun: "车", en: "drive a car", wrongVerb: "骑" },
] as const;

const DIST_STATES = [
  { hanzi: "很近", pinyin: "hěn jìn", en: "very close to" },
  { hanzi: "很远", pinyin: "hěn yuǎn", en: "very far from" },
  { hanzi: "不远", pinyin: "bù yuǎn", en: "not far from" },
] as const;

const MINUTES = [
  { n: 5, py: "wǔ" },
  { n: 10, py: "shí" },
  { n: 15, py: "shíwǔ" },
  { n: 20, py: "èrshí" },
  { n: 25, py: "èrshíwǔ" },
  { n: 30, py: "sānshí" },
] as const;

const DIR_PHRASES = [
  { en: "go straight ahead", accept: ["一直往前走", "往前走", "yìzhí wǎng qián zǒu", "yīzhí wǎng qián zǒu", "wǎng qián zǒu"], display: "一直往前走 (yìzhí wǎng qián zǒu)" },
  { en: "turn left", accept: ["往左拐", "往左转", "wǎng zuǒ guǎi", "wǎng zuǒ zhuǎn"], display: "往左拐 (wǎng zuǒ guǎi)" },
  { en: "turn right", accept: ["往右拐", "往右转", "wǎng yòu guǎi", "wǎng yòu zhuǎn"], display: "往右拐 (wǎng yòu guǎi)" },
  { en: "cross the road", accept: ["过马路", "guò mǎlù"], display: "过马路 (guò mǎlù)" },
  { en: "traffic lights", accept: ["红绿灯", "hónglǜdēng"], display: "红绿灯 (hónglǜdēng)" },
  { en: "crossroads (4-way)", accept: ["十字路口", "shízì lùkǒu"], display: "十字路口 (shízì lùkǒu)" },
  { en: "Excuse me, may I ask…", accept: ["请问", "qǐngwèn"], display: "请问 (qǐngwèn)" },
  { en: "how to get there", accept: ["怎么走", "zěnme zǒu"], display: "怎么走 (zěnme zǒu)" },
  { en: "right on your left", accept: ["就在你的左边", "就在你左边", "jiù zài nǐ de zuǒbiān", "jiù zài nǐ zuǒbiān"], display: "就在你的左边 (jiù zài nǐ de zuǒbiān)" },
  { en: "right on your right", accept: ["就在你的右边", "就在你右边", "jiù zài nǐ de yòubiān", "jiù zài nǐ yòubiān"], display: "就在你的右边 (jiù zài nǐ de yòubiān)" },
] as const;

const COMPASS = [
  { hz: "北", full: "北边", py: "běi", fullPy: "běibiān", en: "North" },
  { hz: "东", full: "东边", py: "dōng", fullPy: "dōngbiān", en: "East" },
  { hz: "南", full: "南边", py: "nán", fullPy: "nánbiān", en: "South" },
  { hz: "西", full: "西边", py: "xī", fullPy: "xībiān", en: "West" },
] as const;

const AREA_VOCAB = [
  { hanzi: "市中心", pinyin: "shìzhōngxīn", en: "city centre / downtown", alt: [] as string[] },
  { hanzi: "郊区", pinyin: "jiāoqū", en: "suburbs", alt: [] as string[] },
  { hanzi: "农村", pinyin: "nóngcūn", en: "countryside / village", alt: [] as string[] },
  { hanzi: "方便", pinyin: "fāngbiàn", en: "convenient", alt: [] as string[] },
  { hanzi: "安静", pinyin: "ānjìng", en: "quiet / peaceful", alt: [] as string[] },
  { hanzi: "热闹", pinyin: "rènào", en: "lively / bustling", alt: ["rènao"] },
  { hanzi: "吵", pinyin: "chǎo", en: "noisy", alt: [] as string[] },
  { hanzi: "环境", pinyin: "huánjìng", en: "environment / surroundings", alt: [] as string[] },
  { hanzi: "交通", pinyin: "jiāotōng", en: "transport / traffic", alt: [] as string[] },
  { hanzi: "新鲜", pinyin: "xīnxiān", en: "fresh (air)", alt: [] as string[] },
  { hanzi: "安全", pinyin: "ānquán", en: "safe", alt: [] as string[] },
  { hanzi: "堵车", pinyin: "dǔchē", en: "traffic jam", alt: [] as string[] },
  { hanzi: "邻居", pinyin: "línjū", en: "neighbour", alt: [] as string[] },
  { hanzi: "绿化", pinyin: "lǜhuà", en: "greenery", alt: [] as string[] },
] as const;

const AREA_PAIRS = [
  { a: "市中心", aPy: "shìzhōngxīn", aEn: "The city centre", b: "郊区", bPy: "jiāoqū", bEn: "the suburbs" },
  { a: "郊区", aPy: "jiāoqū", aEn: "The suburbs", b: "市中心", bPy: "shìzhōngxīn", bEn: "the city centre" },
  { a: "农村", aPy: "nóngcūn", aEn: "The countryside", b: "城市", bPy: "chéngshì", bEn: "the city" },
  { a: "城市", aPy: "chéngshì", aEn: "The city", b: "农村", bPy: "nóngcūn", bEn: "the countryside" },
  { a: "新社区", aPy: "xīn shèqū", aEn: "The new neighbourhood", b: "旧社区", bPy: "jiù shèqū", bEn: "the old neighbourhood" },
  { a: "新加坡", aPy: "Xīnjiāpō", aEn: "Singapore", b: "郊区", bPy: "jiāoqū", bEn: "the suburbs" },
] as const;

const AREA_ADJS = [
  { hz: "方便", py: "fāngbiàn", en: "convenient", comp: "more convenient", altPy: [] as string[] },
  { hz: "安静", py: "ānjìng", en: "quiet", comp: "quieter", altPy: [] as string[] },
  { hz: "热闹", py: "rènào", en: "lively", comp: "livelier", altPy: ["rènao"] },
  { hz: "干净", py: "gānjìng", en: "clean", comp: "cleaner", altPy: [] as string[] },
  { hz: "安全", py: "ānquán", en: "safe", comp: "safer", altPy: [] as string[] },
  { hz: "远", py: "yuǎn", en: "far", comp: "farther", altPy: [] as string[] },
  { hz: "近", py: "jìn", en: "close", comp: "closer", altPy: [] as string[] },
] as const;

export const drills: Drill[] = [
  {
    id: "neighbourhood.local-places",
    topicId: "neighbourhood",
    title: "Neighbourhood Places & 附近有 (Local Facilities)",
    level: 1,
    guideRef: "local-facilities",
    generate(rng, tier) {
      if (tier === 1) {
        const place = rng.pick(PLACES);
        const anchor = rng.pick(ANCHORS);
        if (rng.bool()) {
          return {
            prompt: `Near ${anchor.en} (${anchor.hanzi}附近), how do you say **${place.en}** in Simplified Chinese or tone-marked Pinyin?`,
            answer: {
              type: "text",
              accept: [place.hanzi, place.pinyin],
              display: `${place.hanzi} (${place.pinyin})`,
            },
            hint: `Starts with Pinyin "${place.pinyin.slice(0, 3)}…".`,
            solution: [
              `**${place.en}** is **${place.hanzi} (${place.pinyin})**.`,
            ],
          };
        }
        return {
          prompt: `Type the tone-marked Pinyin (or Simplified Hanzi) for **${place.hanzi}** (context: ${anchor.hanzi}附近有${place.hanzi}).`,
          answer: {
            type: "text",
            accept: [place.pinyin, place.hanzi],
            display: `${place.pinyin} (${place.hanzi})`,
          },
          hint: `It means "${place.en}".`,
          solution: [
            `**${place.hanzi}** is read **${place.pinyin}** and means **${place.en}**.`,
          ],
        };
      }

      if (tier === 2) {
        const place = rng.pick(PLACES);
        const anchor = rng.pick(ANCHORS);
        return {
          prompt: `In ${anchor.en} (${anchor.hanzi}附近), which neighbourhood facility do you visit to **${place.action}**? Answer in Simplified Chinese or tone-marked Pinyin.`,
          answer: {
            type: "text",
            accept: [place.hanzi, place.pinyin],
            display: `${place.hanzi} (${place.pinyin})`,
          },
          hint: `Think of the Mandarin word for "${place.en}".`,
          solution: [
            `To ${place.action}, you go to the **${place.hanzi} (${place.pinyin})**.`,
          ],
        };
      }

      // Tier 3: Translate "Near [anchor] there is a [place]"
      const anchor = rng.pick(ANCHORS);
      const place = rng.pick(PLACES.slice(0, 12));
      const hz1 = `${anchor.hanzi}附近有一${place.mw}${place.hanzi}`;
      const py1 = `${anchor.pinyin} fùjìn yǒu yī ${place.mwPy} ${place.pinyin}`;
      const acc = [hz1, py1];
      if (place.altMw.length >= 2) {
        acc.push(
          `${anchor.hanzi}附近有一${place.altMw[0]}${place.hanzi}`,
          `${anchor.pinyin} fùjìn yǒu yī ${place.altMw[1]} ${place.pinyin}`,
        );
      }
      return {
        prompt: `Translate into Simplified Chinese (or tone-marked Pinyin) without adding a leading 在: **Near ${anchor.en} there is a ${place.en}.** (Use **${anchor.hanzi}附近** + **有** + **一${place.mw}${place.hanzi}**.)`,
        answer: {
          type: "text",
          accept: acc,
          display: `${hz1} (${py1})`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`在${hz1}`] },
            feedback: "Never put 在 before the Place in a 有 existence sentence!",
          },
        ],
        hint: `Place (${anchor.hanzi}附近) + 有 + 一${place.mw}${place.hanzi}.`,
        solution: [
          `Existence pattern \`Place + 有 + Object\` = **${hz1} (${py1})**.`,
        ],
      };
    },
  },
  {
    id: "neighbourhood.distance-and-transport",
    topicId: "neighbourhood",
    title: "Distance with 离 (lí) & Transport Verbs (坐·骑·开·走)",
    level: 1,
    guideRef: "distance-li-transport",
    generate(rng, tier) {
      if (tier === 1) {
        if (rng.bool()) {
          const anchor = rng.pick(ANCHORS);
          const place = rng.pick(PLACES.slice(0, 10));
          const st = rng.pick(DIST_STATES);
          return {
            prompt: `Fill in the single Mandarin distance preposition: **${anchor.hanzi}___${place.hanzi}${st.hanzi}。**`,
            answer: {
              type: "text",
              accept: ["离", "lí"],
              display: "离 (lí)",
            },
            traps: [
              {
                spec: { type: "text", accept: ["跟", "gēn"] },
                feedback: "Distance between places ALWAYS uses 离 (lí), never 跟!",
              },
              {
                spec: { type: "text", accept: ["到", "dào"] },
                feedback: "到 pairs with 从 (从A到B); distance with 近/远 always takes 离 (lí)!",
              },
            ],
            hint: "Template: A + ___ + B + 很近/很远/不远.",
            solution: [
              `Distance between **${anchor.hanzi}** and **${place.hanzi}** always takes **离 (lí)**: ${anchor.hanzi}离${place.hanzi}${st.hanzi}.`,
            ],
          };
        }
        const tr = rng.pick(TRANSPORTS);
        const place = rng.pick(PLACES.slice(0, 10));
        return {
          prompt: `Fill in the exact transport verb (**坐 / 骑 / 开**) to mean **${tr.en}**: **我每天___${tr.noun}去${place.hanzi}。**`,
          answer: {
            type: "text",
            accept: [tr.verb, tr.verbPy],
            display: `${tr.verb} (${tr.verbPy})`,
          },
          traps: [
            {
              spec: { type: "text", accept: [tr.wrongVerb] },
              feedback: `Careful! ${tr.noun} takes ${tr.verb} (${tr.verbPy}), not ${tr.wrongVerb}!`,
            },
          ],
          hint: "Sit inside as passenger = 坐; straddle a bike = 骑 (马 radical); steer a car = 开.",
          solution: [
            `**${tr.phrase} (${tr.py})** uses **${tr.verb} (${tr.verbPy})**.`,
          ],
        };
      }

      if (tier === 2) {
        const anchor = rng.pick(ANCHORS);
        const place = rng.pick(PLACES.slice(0, 10));
        const st = rng.pick(DIST_STATES);
        const hz = `${anchor.hanzi}离${place.hanzi}${st.hanzi}`;
        const py = `${anchor.pinyin} lí ${place.pinyin} ${st.pinyin}`;
        return {
          prompt: `Translate using **离** (no 是!): **${anchor.en[0].toUpperCase() + anchor.en.slice(1)} is ${st.en} the ${place.en}.**`,
          answer: {
            type: "text",
            accept: [hz, py],
            display: `${hz} (${py})`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${anchor.hanzi}是离${place.hanzi}${st.hanzi}`] },
              feedback: "Never insert 是 before 离 or 很近/很远!",
            },
          ],
          hint: `Order: ${anchor.hanzi} + 离 + ${place.hanzi} + ${st.hanzi}.`,
          solution: [
            `Apply \`A 离 B + ${st.hanzi}\`: **${hz} (${py})**.`,
          ],
        };
      }

      // Tier 3: 从 A 到 B + Transport + 要 + X 分钟
      const anchor = rng.pick(ANCHORS.slice(0, 4));
      let dest = rng.pick(PLACES.slice(0, 10));
      while (dest.hanzi === anchor.hanzi) {
        dest = rng.pick(PLACES.slice(0, 10));
      }
      const tr = rng.pick([
        { hz: "走路", py: "zǒulù", en: "walking" },
        { hz: "坐地铁", py: "zuò dìtiě", en: "taking the MRT" },
        { hz: "坐公共汽车", py: "zuò gōnggòng qìchē", en: "taking the bus" },
        { hz: "骑自行车", py: "qí zìxíngchē", en: "cycling" },
      ]);
      const mins = rng.pick(MINUTES);
      const minHz = `${numberToHanzi(mins.n)}分钟`;
      const minPy = `${mins.py} fēnzhōng`;
      const hz1 = `从${anchor.hanzi}到${dest.hanzi}${tr.hz}要${minHz}`;
      const hz2 = `从${anchor.hanzi}到${dest.hanzi}${tr.hz}${minHz}`;
      const py1 = `cóng ${anchor.pinyin} dào ${dest.pinyin} ${tr.py} yào ${minPy}`;
      const py2 = `cóng ${anchor.pinyin} dào ${dest.pinyin} ${tr.py} ${minPy}`;
      return {
        prompt: `Translate into Simplified Chinese (or tone-marked Pinyin): **From ${anchor.en} to the ${dest.en}, ${tr.en} takes ${mins.n} minutes.** (Use **从…到…**, **${tr.hz}**, and **${minHz}**.)`,
        answer: {
          type: "text",
          accept: [hz1, hz2, py1, py2],
          display: `${hz1} (${py1})`,
        },
        hint: `Order: 从${anchor.hanzi}到${dest.hanzi} + ${tr.hz} + (要) + ${minHz}.`,
        solution: [
          `Combine \`从 A 到 B\` + Transport + Duration: **${hz1} (${py1})**.`,
        ],
      };
    },
  },
  {
    id: "neighbourhood.street-directions",
    topicId: "neighbourhood",
    title: "Asking & Giving Directions (问路 · 往左/右拐 · 方位)",
    level: 2,
    guideRef: "giving-directions",
    generate(rng, tier) {
      if (tier === 1) {
        const phr = rng.pick(DIR_PHRASES);
        const dest = rng.pick(PLACES.slice(0, 8));
        return {
          prompt: `Giving directions to the **${dest.en} (${dest.hanzi})**: how do you say **${phr.en}** in Simplified Chinese or tone-marked Pinyin?`,
          answer: {
            type: "text",
            accept: [...phr.accept],
            display: phr.display,
          },
          hint: "Remember: 往 + direction (前/左/右) ALWAYS goes BEFORE the motion verb (走/拐).",
          solution: [
            `**${phr.en}** in Mandarin is **${phr.display}**.`,
          ],
        };
      }

      if (tier === 2) {
        const ord = rng.pick([
          { hz: "第一", py: "dì-yī", pyAlt: "dì yī", en: "first" },
          { hz: "第二", py: "dì-èr", pyAlt: "dì èr", en: "second" },
          { hz: "第三", py: "dì-sān", pyAlt: "dì sān", en: "third" },
        ]);
        const spot = rng.pick([
          { hz: "路口", py: "lùkǒu", en: "intersection" },
          { hz: "红绿灯", py: "hónglǜdēng", en: "traffic lights" },
        ]);
        const turn = rng.pick([
          { hz: "左", py: "zuǒ", en: "left", opp: "右" },
          { hz: "右", py: "yòu", en: "right", opp: "左" },
        ]);
        const dest = rng.pick(PLACES.slice(0, 6));
        const hz1 = `在${ord.hz}个${spot.hz}往${turn.hz}拐`;
        const hz2 = `在${ord.hz}个${spot.hz}往${turn.hz}转`;
        const py1 = `zài ${ord.py} gè ${spot.py} wǎng ${turn.py} guǎi`;
        const py2 = `zài ${ord.pyAlt} gè ${spot.py} wǎng ${turn.py} guǎi`;
        const py3 = `zài ${ord.py} gè ${spot.py} wǎng ${turn.py} zhuǎn`;
        return {
          prompt: `On the way to the **${dest.en} (${dest.hanzi})**, translate using P-D-V order: **turn ${turn.en} at the ${ord.en} ${spot.en}**.`,
          answer: {
            type: "text",
            accept: [hz1, hz2, py1, py2, py3],
            display: `${hz1} (${py1})`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`往${turn.hz}拐在${ord.hz}个${spot.hz}`] },
              feedback: "In Mandarin, Place (在…路口/红绿灯) ALWAYS precedes Direction+Verb (往左/右拐)!",
            },
            {
              spec: { type: "text", accept: [`在${ord.hz}个${spot.hz}往${turn.opp}拐`] },
              feedback: `Check left vs right! ${turn.en} is ${turn.hz} (${turn.py}), not ${turn.opp}.`,
            },
          ],
          hint: `Place first (在${ord.hz}个${spot.hz}), then Direction+Verb (往${turn.hz}拐).`,
          solution: [
            `Place → Direction → Verb = **${hz1} (${py1})**.`,
          ],
        };
      }

      // Tier 3: Compass navigation puzzle with 2 moves
      const startIdx = rng.int(0, 3);
      const start = COMPASS[startIdx];
      const moves = [
        { hz: "往左拐", py: "wǎng zuǒ guǎi", delta: -1, en: "turn left" },
        { hz: "往右拐", py: "wǎng yòu guǎi", delta: 1, en: "turn right" },
        { hz: "一直往前走", py: "yìzhí wǎng qián zǒu", delta: 0, en: "go straight" },
      ];
      const m1 = rng.pick(moves);
      const m2 = rng.pick(moves);
      const landmark = rng.pick(PLACES.slice(0, 6));
      const endIdx = (startIdx + m1.delta + m2.delta + 8) % 4;
      const end = COMPASS[endIdx];
      return {
        prompt: `You start outside the **${landmark.hanzi}** facing **${start.en} (${start.hz})**. Step 1: **${m1.hz}**. Step 2: **${m2.hz}**. Which compass direction are you now facing? (Answer in Simplified Chinese or tone-marked Pinyin.)`,
        answer: {
          type: "text",
          accept: [end.hz, end.full, end.py, end.fullPy],
          display: `${end.full} (${end.fullPy})`,
        },
        hint: `Step 1 (${m1.en}) from ${start.en} faces ${COMPASS[(startIdx + m1.delta + 4) % 4].en}; now apply Step 2 (${m2.en}).`,
        solution: [
          `Start facing **${start.en} (${start.hz})**.`,
          `After **${m1.hz}** (${m1.en}) → **${COMPASS[(startIdx + m1.delta + 4) % 4].en}**.`,
          `After **${m2.hz}** (${m2.en}) → **${end.en}: ${end.full} (${end.fullPy})**.`,
        ],
      };
    },
  },
  {
    id: "neighbourhood.city-vs-suburbs",
    topicId: "neighbourhood",
    title: "Comparing Areas: 市中心 vs 郊区 (比 · 没有 · 更)",
    level: 3,
    guideRef: "comparing-neighbourhoods",
    generate(rng, tier) {
      if (tier === 1) {
        const item = rng.pick(AREA_VOCAB);
        const frame = rng.pick([
          "Describing Singapore neighbourhoods",
          "Comparing city centre vs suburbs",
          "Writing a Year 9 community essay",
          "Explaining where you prefer to live",
        ]);
        return {
          prompt: `${frame}: write the Mandarin word for **${item.en}** in Simplified Chinese or tone-marked Pinyin.`,
          answer: {
            type: "text",
            accept: [item.hanzi, item.pinyin, ...item.alt],
            display: `${item.hanzi} (${item.pinyin})`,
          },
          hint: `Pinyin starts with "${item.pinyin.slice(0, 3)}…".`,
          solution: [
            `**${item.en}** is **${item.hanzi} (${item.pinyin})**.`,
          ],
        };
      }

      if (tier === 2) {
        const pair = rng.pick(AREA_PAIRS);
        const adj = rng.pick(AREA_ADJS);
        const strong = rng.bool();
        if (strong) {
          const hz = `${pair.a}比${pair.b}${adj.hz}得多`;
          const py = `${pair.aPy} bǐ ${pair.bPy} ${adj.py} de duō`;
          const acc = [hz, py, ...adj.altPy.map((ap) => `${pair.aPy} bǐ ${pair.bPy} ${ap} de duō`)];
          return {
            prompt: `Translate using **比…得多** (no 很!): **${pair.aEn} is much ${adj.comp} than ${pair.bEn}.**`,
            answer: {
              type: "text",
              accept: acc,
              display: `${hz} (${py})`,
            },
            traps: [
              {
                spec: { type: "text", accept: [`${pair.a}比${pair.b}很${adj.hz}`] },
                feedback: "Never insert 很 after 比! Use Adj + 得多 for 'much more …'.",
              },
            ],
            hint: `Template: ${pair.a} + 比 + ${pair.b} + ${adj.hz} + 得多.`,
            solution: [
              `Apply \`A 比 B + Adj + 得多\`: **${hz} (${py})**.`,
            ],
          };
        }
        const hz1 = `${pair.a}比${pair.b}${adj.hz}一点儿`;
        const hz2 = `${pair.a}比${pair.b}${adj.hz}一点`;
        const py1 = `${pair.aPy} bǐ ${pair.bPy} ${adj.py} yìdiǎnr`;
        const py2 = `${pair.aPy} bǐ ${pair.bPy} ${adj.py} yìdiǎn`;
        const acc = [
          hz1,
          hz2,
          py1,
          py2,
          ...adj.altPy.flatMap((ap) => [
            `${pair.aPy} bǐ ${pair.bPy} ${ap} yìdiǎnr`,
            `${pair.aPy} bǐ ${pair.bPy} ${ap} yìdiǎn`,
          ]),
        ];
        return {
          prompt: `Translate using **比…一点儿**: **${pair.aEn} is a little ${adj.comp} than ${pair.bEn}.**`,
          answer: {
            type: "text",
            accept: acc,
            display: `${hz1} (${py1})`,
          },
          hint: `Template: ${pair.a} + 比 + ${pair.b} + ${adj.hz} + 一点儿.`,
          solution: [
            `Apply \`A 比 B + Adj + 一点儿\`: **${hz1} (${py1})**.`,
          ],
        };
      }

      // Tier 3: Negative comparison A 没有 B (那么) + Adj
      const pair = rng.pick(AREA_PAIRS);
      const adj = rng.pick(AREA_ADJS);
      const hz1 = `${pair.a}没有${pair.b}${adj.hz}`;
      const hz2 = `${pair.a}没有${pair.b}那么${adj.hz}`;
      const py1 = `${pair.aPy} méiyǒu ${pair.bPy} ${adj.py}`;
      const py2 = `${pair.aPy} méiyǒu ${pair.bPy} nàme ${adj.py}`;
      const acc = [
        hz1,
        hz2,
        py1,
        py2,
        ...adj.altPy.flatMap((ap) => [
          `${pair.aPy} méiyǒu ${pair.bPy} ${ap}`,
          `${pair.aPy} méiyǒu ${pair.bPy} nàme ${ap}`,
        ]),
      ];
      return {
        prompt: `Translate using **没有** (never *比…不Adj*!): **${pair.aEn} is not as ${adj.en} as ${pair.bEn}.**`,
        answer: {
          type: "text",
          accept: acc,
          display: `${hz2} (${py2})`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${pair.a}比${pair.b}不${adj.hz}`] },
            feedback: "Never negate a 比 sentence with 不 + Adj — use A 没有 B (那么) + Adj!",
          },
        ],
        hint: `Template: ${pair.a} + 没有 + ${pair.b} + (那么) + ${adj.hz}.`,
        solution: [
          `Apply \`A 没有 B (那么) + Adj\`: **${hz2} (${py2})**.`,
        ],
      };
    },
  },
];
