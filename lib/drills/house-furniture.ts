import type { Drill } from "./types";
import { numberToHanzi } from "../chinese/grammar.ts";

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
};

const ORDINAL_PINYIN: Record<number, string> = {
  1: "yī",
  2: "èr",
  3: "sān",
  4: "sì",
  5: "wǔ",
  6: "liù",
  7: "qī",
  8: "bā",
  9: "jiǔ",
  10: "shí",
  12: "shí'èr",
};

const ROOMS = [
  { hanzi: "客厅", pinyin: "kètīng", en: "living room", mw: "间", mwPy: "jiān" },
  { hanzi: "卧室", pinyin: "wòshì", en: "bedroom", mw: "间", mwPy: "jiān" },
  { hanzi: "厨房", pinyin: "chúfáng", en: "kitchen", mw: "间", mwPy: "jiān" },
  { hanzi: "卫生间", pinyin: "wèishēngjiān", en: "bathroom", mw: "间", mwPy: "jiān" },
  { hanzi: "书房", pinyin: "shūfáng", en: "study room", mw: "间", mwPy: "jiān" },
  { hanzi: "饭厅", pinyin: "fàntīng", en: "dining room", mw: "间", mwPy: "jiān" },
  { hanzi: "阳台", pinyin: "yángtái", en: "balcony", mw: "个", mwPy: "gè" },
  { hanzi: "花园", pinyin: "huāyuán", en: "garden", mw: "个", mwPy: "gè" },
  { hanzi: "公寓", pinyin: "gōngyù", en: "apartment / condo", mw: "套", mwPy: "tào" },
  { hanzi: "别墅", pinyin: "biéshù", en: "villa / detached house", mw: "栋", mwPy: "dòng" },
  { hanzi: "楼上", pinyin: "lóushàng", en: "upstairs", mw: "", mwPy: "" },
  { hanzi: "楼下", pinyin: "lóuxià", en: "downstairs", mw: "", mwPy: "" },
] as const;

const COUNTABLE_SPACES = ROOMS.filter((r) => r.mw !== "");

const OWNERS = [
  { hanzi: "我家", pinyin: "wǒ jiā", en: "my family's home" },
  { hanzi: "爷爷家", pinyin: "yéye jiā", en: "Grandpa's house" },
  { hanzi: "姐姐的新家", pinyin: "jiějie de xīnjiā", en: "my sister's new home" },
  { hanzi: "外婆的房子", pinyin: "wàipó de fángzi", en: "Grandma's house" },
  { hanzi: "朋友的公寓", pinyin: "péngyou de gōngyù", en: "my friend's apartment" },
  { hanzi: "叔叔的别墅", pinyin: "shūshu de biéshù", en: "Uncle's villa" },
] as const;

const FURNITURE = [
  { hanzi: "床", pinyin: "chuáng", en: "bed", plural: "beds", mw: "张", mwPy: "zhāng", altMw: [] as string[], shape: "flat horizontal surface" },
  { hanzi: "书桌", pinyin: "shūzhuō", en: "desk", plural: "desks", mw: "张", mwPy: "zhāng", altMw: [] as string[], shape: "flat horizontal surface" },
  { hanzi: "桌子", pinyin: "zhuōzi", en: "table", plural: "tables", mw: "张", mwPy: "zhāng", altMw: [] as string[], shape: "flat horizontal surface" },
  { hanzi: "椅子", pinyin: "yǐzi", en: "chair", plural: "chairs", mw: "把", mwPy: "bǎ", altMw: [] as string[], shape: "gripped backrest/handle" },
  { hanzi: "电脑", pinyin: "diànnǎo", en: "computer", plural: "computers", mw: "台", mwPy: "tái", altMw: [] as string[], shape: "electrical appliance" },
  { hanzi: "电视", pinyin: "diànshì", en: "TV", plural: "TVs", mw: "台", mwPy: "tái", altMw: [] as string[], shape: "electrical appliance" },
  { hanzi: "空调", pinyin: "kōngtiáo", en: "air-conditioner", plural: "air-conditioners", mw: "台", mwPy: "tái", altMw: [] as string[], shape: "electrical appliance" },
  { hanzi: "台灯", pinyin: "táidēng", en: "desk lamp", plural: "desk lamps", mw: "盏", mwPy: "zhǎn", altMw: ["个", "gè"], shape: "lamp/light" },
  { hanzi: "衣柜", pinyin: "yīguì", en: "wardrobe", plural: "wardrobes", mw: "个", mwPy: "gè", altMw: [] as string[], shape: "boxy storage cabinet" },
  { hanzi: "书架", pinyin: "shūjià", en: "bookshelf", plural: "bookshelves", mw: "个", mwPy: "gè", altMw: [] as string[], shape: "boxy storage unit" },
  { hanzi: "镜子", pinyin: "jìngzi", en: "mirror", plural: "mirrors", mw: "面", mwPy: "miàn", altMw: ["个", "gè"], shape: "flat vertical pane" },
  { hanzi: "沙发", pinyin: "shāfā", en: "sofa", plural: "sofas", mw: "张", mwPy: "zhāng", altMw: ["个", "gè"], shape: "flat seating surface" },
] as const;

const COLOURS = [
  { hanzi: "白色", pinyin: "báisè", en: "white" },
  { hanzi: "黑色", pinyin: "hēisè", en: "black" },
  { hanzi: "蓝色", pinyin: "lánsè", en: "blue" },
  { hanzi: "绿色", pinyin: "lǜsè", en: "green" },
  { hanzi: "红色", pinyin: "hóngsè", en: "red" },
  { hanzi: "黄色", pinyin: "huángsè", en: "yellow" },
  { hanzi: "灰色", pinyin: "huīsè", en: "grey" },
  { hanzi: "棕色", pinyin: "zōngsè", en: "brown" },
] as const;

const POSITIONS = [
  { hanzi: "上面", pinyin: "shàngmiàn", en: "on top of", alt: ["上边", "shàngbiān"] },
  { hanzi: "下面", pinyin: "xiàmiàn", en: "under", alt: ["下边", "xiàbiān"] },
  { hanzi: "里面", pinyin: "lǐmiàn", en: "inside", alt: ["里边", "lǐbiān"] },
  { hanzi: "外面", pinyin: "wàimiàn", en: "outside", alt: ["外边", "wàibiān"] },
  { hanzi: "前面", pinyin: "qiánmiàn", en: "in front of", alt: ["前边", "qiánbiān"] },
  { hanzi: "后面", pinyin: "hòumiàn", en: "behind", alt: ["后边", "hòubiān"] },
  { hanzi: "左边", pinyin: "zuǒbiān", en: "to the left of", alt: [] as string[] },
  { hanzi: "右边", pinyin: "yòubiān", en: "to the right of", alt: [] as string[] },
  { hanzi: "旁边", pinyin: "pángbiān", en: "next to", alt: [] as string[] },
  { hanzi: "中间", pinyin: "zhōngjiān", en: "in the middle of", alt: [] as string[] },
] as const;

const REF_OBJECTS = [
  { hanzi: "书桌", pinyin: "shūzhuō", en: "desk" },
  { hanzi: "床", pinyin: "chuáng", en: "bed" },
  { hanzi: "沙发", pinyin: "shāfā", en: "sofa" },
  { hanzi: "衣柜", pinyin: "yīguì", en: "wardrobe" },
  { hanzi: "窗户", pinyin: "chuānghu", en: "window" },
  { hanzi: "书架", pinyin: "shūjià", en: "bookshelf" },
] as const;

const SMALL_OBJECTS = [
  { hanzi: "电脑", pinyin: "diànnǎo", mw: "台", mwPy: "tái", en: "computer" },
  { hanzi: "台灯", pinyin: "táidēng", mw: "盏", mwPy: "zhǎn", en: "desk lamp" },
  { hanzi: "椅子", pinyin: "yǐzi", mw: "把", mwPy: "bǎ", en: "chair" },
  { hanzi: "书包", pinyin: "shūbāo", mw: "个", mwPy: "gè", en: "schoolbag" },
  { hanzi: "中文书", pinyin: "Zhōngwén shū", mw: "本", mwPy: "běn", en: "Chinese book" },
  { hanzi: "小猫", pinyin: "xiǎomāo", mw: "只", mwPy: "zhī", en: "kitten" },
  { hanzi: "足球", pinyin: "zúqiú", mw: "个", mwPy: "gè", en: "football" },
  { hanzi: "闹钟", pinyin: "nàozhōng", mw: "个", mwPy: "gè", en: "alarm clock" },
] as const;

const ROOM_ADJ_PAIRS = [
  { a1: "大", p1: "dà", e1: "big", a2: "明亮", p2: "míngliàng", e2: "bright" },
  { a1: "宽敞", p1: "kuānchang", e1: "spacious", a2: "舒服", p2: "shūfu", e2: "comfortable" },
  { a1: "干净", p1: "gānjìng", e1: "clean", a2: "整齐", p2: "zhěngqí", e2: "tidy" },
  { a1: "安静", p1: "ānjìng", e1: "quiet", a2: "舒服", p2: "shūfu", e2: "comfortable" },
  { a1: "现代", p1: "xiàndài", e1: "modern", a2: "干净", p2: "gānjìng", e2: "clean" },
  { a1: "明亮", p1: "míngliàng", e1: "bright", a2: "宽敞", p2: "kuānchang", e2: "spacious" },
  { a1: "小", p1: "xiǎo", e1: "small", a2: "乱", p2: "luàn", e2: "messy" },
] as const;

const COMP_ROOMS = [
  { a: "我的卧室", aPy: "wǒ de wòshì", aEn: "My bedroom", b: "弟弟的", bPy: "dìdi de", bEn: "my younger brother's" },
  { a: "客厅", aPy: "kètīng", aEn: "The living room", b: "书房", bPy: "shūfáng", bEn: "the study" },
  { a: "姐姐的卧室", aPy: "jiějie de wòshì", aEn: "My older sister's bedroom", b: "我的", bPy: "wǒ de", bEn: "mine" },
  { a: "别墅", aPy: "biéshù", aEn: "The villa", b: "公寓", bPy: "gōngyù", bEn: "the apartment" },
  { a: "厨房", aPy: "chúfáng", aEn: "The kitchen", b: "卫生间", bPy: "wèishēngjiān", bEn: "the bathroom" },
  { a: "新家", aPy: "xīnjiā", aEn: "Our new home", b: "旧家", bPy: "jiùjiā", bEn: "our old home" },
] as const;

const COMP_ADJS = [
  { hanzi: "大", pinyin: "dà", en: "big", comp: "bigger" },
  { hanzi: "小", pinyin: "xiǎo", en: "small", comp: "smaller" },
  { hanzi: "明亮", pinyin: "míngliàng", en: "bright", comp: "brighter" },
  { hanzi: "宽敞", pinyin: "kuānchang", en: "spacious", comp: "more spacious" },
  { hanzi: "干净", pinyin: "gānjìng", en: "clean", comp: "cleaner" },
  { hanzi: "安静", pinyin: "ānjìng", en: "quiet", comp: "quieter" },
] as const;

function numWord(n: number): { hanzi: string; pinyin: string } {
  if (n === 2) return { hanzi: "两", pinyin: "liǎng" };
  return { hanzi: numberToHanzi(n), pinyin: NUM_PINYIN[n] ?? String(n) };
}

export const drills: Drill[] = [
  {
    id: "house-furniture.rooms-and-floors",
    topicId: "house-furniture",
    title: "Homes, Rooms & 二/两 Floor Rules",
    level: 1,
    guideRef: "house-types-rooms",
    generate(rng, tier) {
      if (tier === 1) {
        const room = rng.pick(ROOMS);
        const owner = rng.pick(OWNERS);
        const mode = rng.int(1, 2);
        if (mode === 1) {
          return {
            prompt: `In ${owner.en} (${owner.hanzi}), how do you say **${room.en}** in Simplified Chinese or tone-marked Pinyin?`,
            answer: {
              type: "text",
              accept: [room.hanzi, room.pinyin],
              display: `${room.hanzi} (${room.pinyin})`,
            },
            hint: `Starts with Pinyin syllable "${room.pinyin.slice(0, 2)}…"`,
            solution: [
              `**${room.en}** in Mandarin is **${room.hanzi} (${room.pinyin})**.`,
            ],
          };
        }
        return {
          prompt: `Type the tone-marked Pinyin (or Simplified Hanzi) for **${room.hanzi}** (context: ${owner.hanzi}).`,
          answer: {
            type: "text",
            accept: [room.pinyin, room.hanzi],
            display: `${room.pinyin} (${room.hanzi})`,
          },
          hint: `It means "${room.en}".`,
          solution: [
            `**${room.hanzi}** is read **${room.pinyin}** and means **${room.en}**.`,
          ],
        };
      }

      if (tier === 2) {
        const owner = rng.pick(OWNERS);
        const style = rng.int(1, 3);
        if (style === 1) {
          const room = rng.pick(ROOMS.slice(0, 6));
          const n = rng.pick([2, 3, 4, 5]);
          const nw = numWord(n);
          return {
            prompt: `Fill in the exact room classifier: **${owner.hanzi}有${nw.hanzi}___${room.hanzi}。** (Simplified Chinese or tone-marked Pinyin.)`,
            answer: {
              type: "text",
              accept: ["间", "jiān"],
              display: "间 (jiān)",
            },
            traps: [
              {
                spec: { type: "text", accept: ["层", "céng"] },
                feedback: "层 (céng) counts storeys of a building — rooms take 间 (jiān)!",
              },
            ],
            hint: "Use the dedicated classifier for rooms inside a home.",
            solution: [
              `Rooms take the classifier **间 (jiān)**: ${nw.hanzi}间${room.hanzi}.`,
            ],
          };
        }
        if (style === 2) {
          const room = rng.pick(ROOMS.slice(0, 6));
          return {
            prompt: `Choose **二** or **两** for ${owner.hanzi}: **${owner.hanzi}有___层，楼上有两间${room.hanzi}。**`,
            answer: {
              type: "text",
              accept: ["两", "liǎng"],
              display: "两 (liǎng)",
            },
            traps: [
              {
                spec: { type: "text", accept: ["二", "èr"] },
                feedback: "层 (céng) is a classifier counting storeys — 2 before a classifier is ALWAYS 两 (liǎng)!",
              },
            ],
            hint: "Does 2 sit directly before the storey classifier 层?",
            solution: [
              "Before a measure word (层), 2 is always **两 (liǎng)**: **两层** (two storeys).",
            ],
          };
        }
        const room = rng.pick(ROOMS.slice(0, 6));
        const floor = rng.pick([2, 12]);
        const fHz = floor === 2 ? "二" : "十二";
        const fPy = ORDINAL_PINYIN[floor];
        return {
          prompt: `Write the Chinese number for **floor ${floor}** in: **${owner.hanzi}的${room.hanzi}在___楼。** (Answer in Simplified Chinese or tone-marked Pinyin.)`,
          answer: {
            type: "text",
            accept: [fHz, fPy],
            display: `${fHz} (${fPy})`,
          },
          traps:
            floor === 2
              ? [
                  {
                    spec: { type: "text", accept: ["两", "liǎng"] },
                    feedback: "Floor numbers (2nd floor) are ordinal labels, so use 二 (èr): 二楼!",
                  },
                ]
              : undefined,
          hint: "Floor numbers like 2nd floor / 12th floor are ordinal labels — use 二, never 两.",
          solution: [
            `Floor ${floor} is **${fHz}楼 (${fPy} lóu)** — ordinal floor numbers always use **二**.`,
          ],
        };
      }

      // Tier 3: Translate full Number + MW + Room/Home phrase
      const space = rng.pick(COUNTABLE_SPACES);
      const count = rng.pick([1, 2, 3, 4, 5, 6]);
      const nw = numWord(count);
      const hanzi = `${nw.hanzi}${space.mw}${space.hanzi}`;
      const py = `${nw.pinyin} ${space.mwPy} ${space.pinyin}`;
      const enNoun = count === 1 ? space.en : `${space.en}s`;
      return {
        prompt: `Translate **${count} ${enNoun}** into Simplified Chinese (or tone-marked Pinyin) using the exact classifier **${space.mw}**.`,
        answer: {
          type: "text",
          accept: [hanzi, py],
          display: `${hanzi} (${py})`,
        },
        traps:
          count === 2
            ? [
                {
                  spec: { type: "text", accept: [`二${space.mw}${space.hanzi}`, `èr ${space.mwPy} ${space.pinyin}`] },
                  feedback: "Use 两 (liǎng), never 二 (èr), directly before a measure word!",
                },
              ]
            : undefined,
        hint: `Formula: Number${count === 2 ? " (use 两!)" : ""} + ${space.mw} + ${space.hanzi}.`,
        solution: [
          `Number (${nw.hanzi}) + Measure Word (${space.mw}) + Noun (${space.hanzi}) = **${hanzi} (${py})**.`,
        ],
      };
    },
  },
  {
    id: "house-furniture.furniture-classifiers",
    topicId: "house-furniture",
    title: "Furniture & Measure Words (张·把·台·盏·个)",
    level: 1,
    guideRef: "furniture-measure-words",
    generate(rng, tier) {
      if (tier === 1) {
        const item = rng.pick(FURNITURE);
        const room = rng.pick(ROOMS.slice(0, 6));
        const count = rng.pick([1, 2, 3, 4]);
        const nw = numWord(count);
        const acc = [item.mw, item.mwPy, ...item.altMw];
        return {
          prompt: `Fill in the exact measure word for **${item.hanzi} (${item.en})**: **${room.hanzi}里有${nw.hanzi}___${item.hanzi}。**`,
          answer: {
            type: "text",
            accept: acc,
            display: `${item.mw} (${item.mwPy})`,
          },
          hint: `Think of the shape/category of ${item.en}: ${item.shape}.`,
          solution: [
            `**${item.hanzi} (${item.en})** is a ${item.shape}, so it takes **${item.mw} (${item.mwPy})**: ${nw.hanzi}${item.mw}${item.hanzi}.`,
          ],
        };
      }

      if (tier === 2) {
        const item = rng.pick(FURNITURE.slice(0, 10));
        const count = rng.pick([1, 2, 3, 4, 5]);
        const nw = numWord(count);
        const hz = `${nw.hanzi}${item.mw}${item.hanzi}`;
        const py = `${nw.pinyin} ${item.mwPy} ${item.pinyin}`;
        const acc = [hz, py];
        if (item.altMw.length >= 2) {
          acc.push(`${nw.hanzi}${item.altMw[0]}${item.hanzi}`, `${nw.pinyin} ${item.altMw[1]} ${item.pinyin}`);
        }
        const label = count === 1 ? `1 ${item.en}` : `${count} ${item.plural}`;
        return {
          prompt: `Translate **${label}** into Simplified Chinese (or tone-marked Pinyin) using the exact furniture classifier.`,
          answer: {
            type: "text",
            accept: acc,
            display: `${hz} (${py})`,
          },
          traps:
            count === 2
              ? [
                  {
                    spec: { type: "text", accept: [`二${item.mw}${item.hanzi}`, `èr ${item.mwPy} ${item.pinyin}`] },
                    feedback: "Remember: 2 before ANY classifier is 两 (liǎng), never 二!",
                  },
                ]
              : undefined,
          hint: `Classifier for ${item.en} (${item.shape}) is ${item.mw} (${item.mwPy}).`,
          solution: [
            `${nw.hanzi} + ${item.mw} + ${item.hanzi} = **${hz} (${py})**.`,
          ],
        };
      }

      // Tier 3: Number + MW + Colour + 的 + Furniture
      const item = rng.pick(FURNITURE.slice(0, 8));
      const colour = rng.pick(COLOURS);
      const count = rng.pick([1, 2, 3]);
      const nw = numWord(count);
      const hz = `${nw.hanzi}${item.mw}${colour.hanzi}的${item.hanzi}`;
      const py = `${nw.pinyin} ${item.mwPy} ${colour.pinyin} de ${item.pinyin}`;
      const acc = [hz, py];
      if (item.altMw.length >= 2) {
        acc.push(`${nw.hanzi}${item.altMw[0]}${colour.hanzi}的${item.hanzi}`);
      }
      const label = count === 1 ? `1 ${colour.en} ${item.en}` : `${count} ${colour.en} ${item.plural}`;
      return {
        prompt: `Translate **${label}** into Simplified Chinese (or tone-marked Pinyin) using **Number + MW + Colour + 的 + Noun**.`,
        answer: {
          type: "text",
          accept: acc,
          display: `${hz} (${py})`,
        },
        hint: `Start with ${nw.hanzi}${item.mw}, add ${colour.hanzi}的, then ${item.hanzi}.`,
        solution: [
          `Order: Number+MW (${nw.hanzi}${item.mw}) + Colour (${colour.hanzi}的) + Noun (${item.hanzi}) = **${hz} (${py})**.`,
        ],
      };
    },
  },
  {
    id: "house-furniture.position-you-zai",
    topicId: "house-furniture",
    title: "Position Words (方位词) & 有 vs 在",
    level: 2,
    guideRef: "position-words-you-zai",
    generate(rng, tier) {
      if (tier === 1) {
        const pos = rng.pick(POSITIONS);
        const ref = rng.pick(REF_OBJECTS);
        return {
          prompt: `Complete the Mandarin spatial phrase for **${pos.en} the ${ref.en}**: **${ref.hanzi}___** (Write the position word in Simplified Chinese or tone-marked Pinyin.)`,
          answer: {
            type: "text",
            accept: [pos.hanzi, pos.pinyin, ...pos.alt],
            display: `${pos.hanzi} (${pos.pinyin})`,
          },
          hint: `Position words always follow the reference noun (${ref.hanzi}). Think of "${pos.en}".`,
          solution: [
            `**${pos.en}** is **${pos.hanzi} (${pos.pinyin})** → **${ref.hanzi}${pos.hanzi}**.`,
          ],
        };
      }

      if (tier === 2) {
        const ref = rng.pick(REF_OBJECTS);
        const obj = rng.pick(SMALL_OBJECTS);
        const pos = rng.pick(POSITIONS.slice(0, 9));
        const isYou = rng.bool();
        if (isYou) {
          return {
            prompt: `Choose **有** or **在** to complete: **${ref.hanzi}${pos.hanzi}___一${obj.mw}${obj.hanzi}。**`,
            answer: {
              type: "text",
              accept: ["有", "yǒu"],
              display: "有 (yǒu)",
            },
            traps: [
              {
                spec: { type: "text", accept: ["在", "zài"] },
                feedback: "Place comes first and an indefinite object comes second (PYO) → use 有!",
              },
            ],
            hint: "Place + ___ + (Num + MW + Object) = existence sentence.",
            solution: [
              `Place (**${ref.hanzi}${pos.hanzi}**) comes first, followed by indefinite **一${obj.mw}${obj.hanzi}** → use **有 (yǒu)**. `,
            ],
          };
        }
        return {
          prompt: `Choose **有** or **在** to complete: **我的${obj.hanzi}___${ref.hanzi}${pos.hanzi}。**`,
          answer: {
            type: "text",
            accept: ["在", "zài"],
            display: "在 (zài)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["有", "yǒu"] },
              feedback: "Specific Object comes first and Place comes second (OZP) → use 在!",
            },
          ],
          hint: "Specific Object + ___ + Place = location sentence.",
          solution: [
            `Specific Object (**我的${obj.hanzi}**) comes first, followed by Place (**${ref.hanzi}${pos.hanzi}**) → use **在 (zài)**. `,
          ],
        };
      }

      // Tier 3: Rewrite Place + 有 + 一MW Object -> Object + 在 + Place
      const ref = rng.pick(REF_OBJECTS);
      const obj = rng.pick(SMALL_OBJECTS);
      const pos = rng.pick(POSITIONS.slice(0, 9));
      const hz1 = `${obj.hanzi}在${ref.hanzi}${pos.hanzi}`;
      const hz2 = `${obj.hanzi}在${ref.hanzi}的${pos.hanzi}`;
      const py1 = `${obj.pinyin} zài ${ref.pinyin} ${pos.pinyin}`;
      const py2 = `${obj.pinyin} zài ${ref.pinyin} de ${pos.pinyin}`;
      return {
        prompt: `Rewrite this **有** sentence as a **在** location sentence (drop 一${obj.mw}): **${ref.hanzi}${pos.hanzi}有一${obj.mw}${obj.hanzi}。**`,
        answer: {
          type: "text",
          accept: [hz1, hz2, py1, py2],
          display: `${hz1} (${py1})`,
        },
        traps: [
          {
            spec: { type: "text", accept: [`${obj.hanzi}是在${ref.hanzi}${pos.hanzi}`, `${obj.hanzi}是在${ref.hanzi}的${pos.hanzi}`] },
            feedback: "Never insert 是 before 在 — 在 already acts as the verb 'is located at'!",
          },
        ],
        hint: `Flip to OZP: ${obj.hanzi} + 在 + ${ref.hanzi}${pos.hanzi}.`,
        solution: [
          `Move **${obj.hanzi}** in front of **在**, and place **${ref.hanzi}${pos.hanzi}** after **在**: **${hz1} (${py1})**.`,
        ],
      };
    },
  },
  {
    id: "house-furniture.room-comparisons",
    topicId: "house-furniture",
    title: "Describing & Comparing Rooms (又…又… · 比 · 没有)",
    level: 3,
    guideRef: "ideal-home-writing",
    generate(rng, tier) {
      if (tier === 1) {
        const room = rng.pick(ROOMS.slice(0, 7));
        const pair = rng.pick(ROOM_ADJ_PAIRS);
        const hz1 = `又${pair.a1}又${pair.a2}`;
        const hz2 = `又${pair.a2}又${pair.a1}`;
        const py1 = `yòu ${pair.p1} yòu ${pair.p2}`;
        const py2 = `yòu ${pair.p2} yòu ${pair.p1}`;
        return {
          prompt: `Complete with **又…又…** to mean **both ${pair.e1} and ${pair.e2}**: **${room.hanzi}___。**`,
          answer: {
            type: "text",
            accept: [hz1, hz2, py1, py2],
            display: `${hz1} (${py1})`,
          },
          hint: `Pattern: 又 + ${pair.a1} + 又 + ${pair.a2}.`,
          solution: [
            `Slot both matching adjectives into 又…又…: **${hz1} (${py1})**.`,
          ],
        };
      }

      if (tier === 2) {
        const pair = rng.pick(COMP_ROOMS);
        const adj = rng.pick(COMP_ADJS);
        const strong = rng.bool();
        if (strong) {
          const hz = `${adj.hanzi}得多`;
          const py = `${adj.pinyin} de duō`;
          return {
            prompt: `Complete the **比** comparison to mean **much ${adj.comp}**: **${pair.a}比${pair.b}___。** (Simplified Chinese or tone-marked Pinyin.)`,
            answer: {
              type: "text",
              accept: [hz, py],
              display: `${hz} (${py})`,
            },
            traps: [
              {
                spec: { type: "text", accept: [`很${adj.hanzi}`, `hěn ${adj.pinyin}`] },
                feedback: "NEVER put 很 after 比! Use Adj + 得多 for 'much more …'.",
              },
              {
                spec: { type: "text", accept: [`${adj.hanzi}一点儿`, `${adj.pinyin} yìdiǎnr`] },
                feedback: "一点儿 means 'a little more' — 'much more' uses 得多!",
              },
            ],
            hint: `Attach 得多 (much more) after ${adj.hanzi}. Never use 很!`,
            solution: [
              `Adjective (${adj.hanzi}) + **得多 (de duō)** = **${hz} (${py})**.`,
            ],
          };
        }
        const hz = `${adj.hanzi}一点儿`;
        const hzAlt = `${adj.hanzi}一点`;
        const py = `${adj.pinyin} yìdiǎnr`;
        const pyAlt = `${adj.pinyin} yìdiǎn`;
        return {
          prompt: `Complete the **比** comparison to mean **a little ${adj.comp}**: **${pair.a}比${pair.b}___。** (Simplified Chinese or tone-marked Pinyin.)`,
          answer: {
            type: "text",
            accept: [hz, hzAlt, py, pyAlt],
            display: `${hz} (${py})`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`有点儿${adj.hanzi}`, `yǒudiǎnr ${adj.pinyin}`] },
              feedback: "有点儿 goes before undesired adjectives without 比; inside a 比 comparison put 一点儿 AFTER the adjective!",
            },
          ],
          hint: `Attach 一点儿 (a little more) AFTER ${adj.hanzi}.`,
          solution: [
            `Adjective (${adj.hanzi}) + **一点儿 (yìdiǎnr)** = **${hz} (${py})**.`,
          ],
        };
      }

      // Tier 3: Full 比 or 没有 sentence
      const pair = rng.pick(COMP_ROOMS);
      const adj = rng.pick(COMP_ADJS);
      const useBi = rng.bool();
      if (useBi) {
        const hz = `${pair.a}比${pair.b}${adj.hanzi}得多`;
        const py = `${pair.aPy} bǐ ${pair.bPy} ${adj.pinyin} de duō`;
        return {
          prompt: `Translate into Simplified Chinese (or tone-marked Pinyin): **${pair.aEn} is much ${adj.comp} than ${pair.bEn}.**`,
          answer: {
            type: "text",
            accept: [hz, py],
            display: `${hz} (${py})`,
          },
          traps: [
            {
              spec: { type: "text", accept: [`${pair.a}比${pair.b}很${adj.hanzi}`] },
              feedback: "Remove 很 and put 得多 after the adjective!",
            },
          ],
          hint: `Template: ${pair.a} + 比 + ${pair.b} + ${adj.hanzi} + 得多.`,
          solution: [
            `Apply **A 比 B + Adj + 得多**: **${hz} (${py})**.`,
          ],
        };
      }
      const hz1 = `${pair.a}没有${pair.b}那么${adj.hanzi}`;
      const hz2 = `${pair.a}没有${pair.b}${adj.hanzi}`;
      const py1 = `${pair.aPy} méiyǒu ${pair.bPy} nàme ${adj.pinyin}`;
      const py2 = `${pair.aPy} méiyǒu ${pair.bPy} ${adj.pinyin}`;
      return {
        prompt: `Translate into Simplified Chinese (or tone-marked Pinyin): **${pair.aEn} is not as ${adj.en} as ${pair.bEn}.**`,
        answer: {
          type: "text",
          accept: [hz1, hz2, py1, py2],
          display: `${hz1} (${py1})`,
        },
        hint: `Template: ${pair.a} + 没有 + ${pair.b} + (那么) + ${adj.hanzi}.`,
        solution: [
          `Apply **A 没有 B (那么) + Adj**: **${hz1} (${py1})**.`,
        ],
      };
    },
  },
];
