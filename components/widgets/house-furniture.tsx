"use client";

import { useState } from "react";
import { Readout, Segmented, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type SentenceMode = "you" | "zai";

interface RefFurniture {
  id: string;
  hanzi: string;
  pinyin: string;
  en: string;
}

interface TargetItem {
  id: string;
  hanzi: string;
  pinyin: string;
  mw: string;
  mwPy: string;
  en: string;
  emoji: string;
}

interface PosOption {
  id: string;
  hanzi: string;
  pinyin: string;
  en: string;
  dx: number;
  dy: number;
}

const REFS: RefFurniture[] = [
  { id: "desk", hanzi: "书桌", pinyin: "shūzhuō", en: "desk" },
  { id: "bed", hanzi: "床", pinyin: "chuáng", en: "bed" },
  { id: "sofa", hanzi: "沙发", pinyin: "shāfā", en: "sofa" },
  { id: "wardrobe", hanzi: "衣柜", pinyin: "yīguì", en: "wardrobe" },
];

const ITEMS: TargetItem[] = [
  { id: "pc", hanzi: "电脑", pinyin: "diànnǎo", mw: "台", mwPy: "tái", en: "computer", emoji: "💻" },
  { id: "lamp", hanzi: "台灯", pinyin: "táidēng", mw: "盏", mwPy: "zhǎn", en: "desk lamp", emoji: "💡" },
  { id: "bag", hanzi: "书包", pinyin: "shūbāo", mw: "个", mwPy: "gè", en: "schoolbag", emoji: "🎒" },
  { id: "cat", hanzi: "小猫", pinyin: "xiǎomāo", mw: "只", mwPy: "zhī", en: "kitten", emoji: "🐱" },
  { id: "chair", hanzi: "椅子", pinyin: "yǐzi", mw: "把", mwPy: "bǎ", en: "chair", emoji: "🪑" },
];

const POSITIONS: PosOption[] = [
  { id: "top", hanzi: "上面", pinyin: "shàngmiàn", en: "on top of", dx: 0, dy: -66 },
  { id: "under", hanzi: "下面", pinyin: "xiàmiàn", en: "under", dx: 0, dy: 68 },
  { id: "left", hanzi: "左边", pinyin: "zuǒbiān", en: "to the left of", dx: -125, dy: 0 },
  { id: "right", hanzi: "右边", pinyin: "yòubiān", en: "to the right of", dx: 125, dy: 0 },
  { id: "front", hanzi: "前面", pinyin: "qiánmiàn", en: "in front of", dx: -52, dy: 62 },
  { id: "behind", hanzi: "后面", pinyin: "hòumiàn", en: "behind", dx: 54, dy: -60 },
  { id: "beside", hanzi: "旁边", pinyin: "pángbiān", en: "next to", dx: 118, dy: 34 },
  { id: "inside", hanzi: "里面", pinyin: "lǐmiàn", en: "inside", dx: 0, dy: 0 },
];

function FloorplanYouZaiLab() {
  const [mode, setMode] = useState<SentenceMode>("you");
  const [refId, setRefId] = useState<string>("desk");
  const [itemId, setItemId] = useState<string>("pc");
  const [posId, setPosId] = useState<string>("top");

  const refObj = REFS.find((r) => r.id === refId) ?? REFS[0];
  const item = ITEMS.find((i) => i.id === itemId) ?? ITEMS[0];
  const pos = POSITIONS.find((p) => p.id === posId) ?? POSITIONS[0];

  const placeHz = `${refObj.hanzi}${pos.hanzi}`;
  const placePy = `${refObj.pinyin} ${pos.pinyin}`;

  const sentenceHz =
    mode === "you"
      ? `${placeHz}有一${item.mw}${item.hanzi}。`
      : `我的${item.hanzi}在${placeHz}。`;

  const sentencePy =
    mode === "you"
      ? `${placePy} yǒu yī ${item.mwPy} ${item.pinyin}.`
      : `Wǒ de ${item.pinyin} zài ${placePy}.`;

  const sentenceEn =
    mode === "you"
      ? `There is a ${item.en} ${pos.en} the ${refObj.en}.`
      : `My ${item.en} is ${pos.en} the ${refObj.en}.`;

  const cx = 230;
  const cy = 112;
  const itemX = cx + pos.dx;
  const itemY = cy + pos.dy;

  return (
    <WidgetFrame
      title="Floorplan & 有 vs 在 Position Lab"
      tryThis={[
        "Move the item around the furniture and toggle **有 (Existence)** vs **在 (Location)** to watch the Place and Object blocks flip!",
        "Notice how the position word (**上面, 下面, 左边, 旁边…**) ALWAYS stays directly AFTER the reference noun.",
      ]}
      caption={
        <div className="space-y-1">
          <div className="text-base font-extrabold text-brand">{sentenceHz}</div>
          <div className="text-sm font-semibold text-ink">{sentencePy}</div>
          <div className="text-xs text-ink-2">
            {sentenceEn} —{" "}
            {mode === "you"
              ? "Existence (PYO): Place + 有 + (Num + MW) + Object. Never add 在 before the Place!"
              : "Location (OZP): Known Object + 在 + Place. Never add 是 before 在!"}
          </div>
        </div>
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <Segmented<SentenceMode>
            label="Sentence pattern"
            value={mode}
            onChange={setMode}
            options={[
              { value: "you", label: "有 · Existence (PYO)" },
              { value: "zai", label: "在 · Location (OZP)" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 min-w-0">
          <div className="space-y-2 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Reference Furniture</div>
            <div className="flex flex-wrap gap-1.5">
              {REFS.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRefId(r.id)}
                  className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                    r.id === refId
                      ? "border-brand bg-brand-soft text-brand"
                      : "border-line bg-surface text-ink-2 hover:text-ink"
                  }`}
                >
                  {r.hanzi} ({r.en})
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 min-w-0">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Target Object</div>
            <div className="flex flex-wrap gap-1.5">
              {ITEMS.map((it) => (
                <button
                  key={it.id}
                  type="button"
                  onClick={() => setItemId(it.id)}
                  className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                    it.id === itemId
                      ? "border-brand bg-brand-soft text-brand"
                      : "border-line bg-surface text-ink-2 hover:text-ink"
                  }`}
                >
                  {it.emoji} {it.hanzi}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2 min-w-0">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Position Word (方位词)</div>
          <div className="flex flex-wrap gap-1.5">
            {POSITIONS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPosId(p.id)}
                className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                  p.id === posId
                    ? "border-good bg-good-soft text-good"
                    : "border-line bg-surface text-ink-2 hover:text-ink"
                }`}
              >
                {p.hanzi} ({p.pinyin})
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 460 220"
            className="w-full h-auto"
            role="img"
            aria-label={`Diagram showing ${item.en} ${pos.en} ${refObj.en}`}
          >
            <rect x="6" y="6" width="448" height="208" rx="12" fill="var(--surface)" stroke="var(--line)" />
            <rect
              x={cx - 64}
              y={cy - 34}
              width="128"
              height="68"
              rx="10"
              fill="var(--surface-2)"
              stroke="var(--ink-2)"
              strokeWidth="2"
            />
            <text x={cx} y={cy - 4} textAnchor="middle" fontSize="15" fontWeight="800" fill="var(--ink)">
              {refObj.hanzi}
            </text>
            <text x={cx} y={cy + 15} textAnchor="middle" fontSize="11" fill="var(--ink-2)">
              {refObj.pinyin} ({refObj.en})
            </text>

            {pos.id !== "inside" ? (
              <line
                x1={cx}
                y1={cy}
                x2={itemX}
                y2={itemY}
                stroke="var(--brand)"
                strokeWidth="2"
                strokeDasharray="5 4"
              />
            ) : null}

            <g transform={`translate(${itemX}, ${itemY})`}>
              <rect
                x="-46"
                y="-24"
                width="92"
                height="48"
                rx="10"
                fill="var(--brand-soft)"
                stroke="var(--brand)"
                strokeWidth="2"
              />
              <text x="0" y="-3" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--brand)">
                {item.emoji} {item.hanzi}
              </text>
              <text x="0" y="14" textAnchor="middle" fontSize="10" fill="var(--ink)">
                {pos.hanzi}
              </text>
            </g>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 min-w-0">
          <Readout
            label={mode === "you" ? "Slot 1 · Place" : "Slot 1 · Object"}
            value={mode === "you" ? placeHz : `我的${item.hanzi}`}
            tone="ink"
          />
          <Readout
            label="Slot 2 · Verb"
            value={mode === "you" ? "有 (yǒu)" : "在 (zài)"}
            tone={mode === "you" ? "brand" : "good"}
          />
          <Readout
            label={mode === "you" ? "Slot 3 · Object" : "Slot 3 · Place"}
            value={mode === "you" ? `一${item.mw}${item.hanzi}` : placeHz}
            tone="ink"
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

const ROOM_OPTIONS = [
  { id: "bedroom", hanzi: "我的卧室", pinyin: "Wǒ de wòshì", adjHz: "又大又明亮", adjPy: "yòu dà yòu míngliàng" },
  { id: "living", hanzi: "客厅", pinyin: "Kètīng", adjHz: "又宽敞又舒服", adjPy: "yòu kuānchang yòu shūfu" },
  { id: "study", hanzi: "书房", pinyin: "Shūfáng", adjHz: "又安静又整齐", adjPy: "yòu ānjìng yòu zhěngqí" },
] as const;

const NUM_HZ = ["零", "一", "两", "三", "四", "五"];
const NUM_PY = ["líng", "yī", "liǎng", "sān", "sì", "wǔ"];

function MeasureWordFurnisher() {
  const [roomId, setRoomId] = useState<string>("bedroom");
  const [desks, setDesks] = useState<number>(1);
  const [chairs, setChairs] = useState<number>(2);
  const [computers, setComputers] = useState<number>(1);
  const [wardrobes, setWardrobes] = useState<number>(1);

  const room = ROOM_OPTIONS.find((r) => r.id === roomId) ?? ROOM_OPTIONS[0];

  const pieces = [
    { count: desks, mw: "张", mwPy: "zhāng", hz: "书桌", py: "shūzhuō", label: "书桌 (Desk)" },
    { count: chairs, mw: "把", mwPy: "bǎ", hz: "椅子", py: "yǐzi", label: "椅子 (Chair)" },
    { count: computers, mw: "台", mwPy: "tái", hz: "电脑", py: "diànnǎo", label: "电脑 (Computer)" },
    { count: wardrobes, mw: "个", mwPy: "gè", hz: "衣柜", py: "yīguì", label: "衣柜 (Wardrobe)" },
  ];

  const active = pieces.filter((p) => p.count > 0);
  const listHz = active
    .map((p, idx) => {
      const phrase = `${NUM_HZ[p.count]}${p.mw}${p.hz}`;
      if (idx === 0) return phrase;
      if (idx === active.length - 1) return `和${phrase}`;
      return `、${phrase}`;
    })
    .join("");

  const listPy = active
    .map((p, idx) => {
      const phrase = `${NUM_PY[p.count]} ${p.mwPy} ${p.py}`;
      if (idx === 0) return phrase;
      if (idx === active.length - 1) return ` hé ${phrase}`;
      return `, ${phrase}`;
    })
    .join("");

  const paragraphHz =
    active.length > 0
      ? `${room.hanzi}${room.adjHz}。里面有${listHz}。`
      : `${room.hanzi}${room.adjHz}。里面现在还没有家具。`;
  const paragraphPy =
    active.length > 0
      ? `${room.pinyin} ${room.adjPy}. Lǐmiàn yǒu ${listPy}.`
      : `${room.pinyin} ${room.adjPy}. Lǐmiàn xiànzài hái méiyǒu jiājù.`;

  const hasTwo = pieces.some((p) => p.count === 2);

  return (
    <WidgetFrame
      title="Measure-Word Room Furnisher (量词房间设计)"
      tryThis={[
        "Set any furniture quantity to **2** and watch Mandarin automatically switch to **两 (liǎng)** before the classifier!",
        "Notice how the generated Chinese sentence uses **`、`** between earlier items and **和 (hé)** only before the final item.",
      ]}
      caption={
        <div className="space-y-1">
          <div className="text-base font-extrabold text-brand">{paragraphHz}</div>
          <div className="text-sm font-semibold text-ink">{paragraphPy}</div>
          {hasTwo ? (
            <div className="text-xs font-bold text-good">
              ✨ 二 vs 两 Alert: Because you chose 2 of an item, Mandarin uses 两 (liǎng) before the classifier (e.g. 两把椅子), NEVER 二!
            </div>
          ) : (
            <div className="text-xs text-ink-2">
              Try setting one item to 2 to see the 两 (liǎng) classifier rule in action.
            </div>
          )}
        </div>
      }
    >
      <div className="space-y-4 min-w-0">
        <Segmented<string>
          label="Choose room"
          value={roomId}
          onChange={setRoomId}
          options={ROOM_OPTIONS.map((r) => ({ value: r.id, label: r.hanzi }))}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 min-w-0">
          <div className="rounded-xl border border-line bg-surface-2 p-3 space-y-2.5">
            <Stepper label="书桌 · 张 (zhāng)" value={desks} min={0} max={4} onChange={setDesks} />
            <Stepper label="椅子 · 把 (bǎ)" value={chairs} min={0} max={5} onChange={setChairs} />
            <Stepper label="电脑 · 台 (tái)" value={computers} min={0} max={4} onChange={setComputers} />
            <Stepper label="衣柜 · 个 (gè)" value={wardrobes} min={0} max={4} onChange={setWardrobes} />
          </div>

          <div className="rounded-xl border border-line bg-surface-2 p-3 flex flex-col justify-between gap-2">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Live Classifier Breakdown</div>
            <div className="grid grid-cols-2 gap-2">
              {pieces.map((p) => (
                <Readout
                  key={p.hz}
                  label={p.label}
                  value={p.count === 0 ? "没有 (0)" : `${NUM_HZ[p.count]}${p.mw}${p.hz}`}
                  tone={p.count === 2 ? "good" : p.count === 0 ? "ink" : "brand"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "floorplan-you-zai-lab",
    title: "Floorplan & 有 vs 在 Position Lab",
    blurb: "Move bedroom items around furniture and toggle 有 (Existence) vs 在 (Location) to master 方位词 word order.",
    Component: FloorplanYouZaiLab,
  },
  {
    id: "measure-word-furnisher",
    title: "Measure-Word Room Furnisher",
    blurb: "Furnish a room with 张, 把, 台, and 个 — triggering the 二 vs 两 rule and Chinese list punctuation live.",
    Component: MeasureWordFurnisher,
  },
];
