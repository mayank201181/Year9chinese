"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

const WEEKDAYS = [
  { id: "mon", h: "星期一", p: "Xīngqīyī", en: "Monday" },
  { id: "tue", h: "星期二", p: "Xīngqī'èr", en: "Tuesday" },
  { id: "wed", h: "星期三", p: "Xīngqīsān", en: "Wednesday" },
  { id: "thu", h: "星期四", p: "Xīngqīsì", en: "Thursday" },
  { id: "fri", h: "星期五", p: "Xīngqīwǔ", en: "Friday" },
] as const;

const SUBJ_OPTIONS = [
  { id: "cn", h: "中文", p: "Zhōngwén", en: "Chinese", room: "中文教室" },
  { id: "ma", h: "数学", p: "shùxué", en: "Maths", room: "教室" },
  { id: "sc", h: "科学", p: "kēxué", en: "Science", room: "科学实验室" },
  { id: "hi", h: "历史", p: "lìshǐ", en: "History", room: "教室" },
  { id: "ge", h: "地理", p: "dìlǐ", en: "Geography", room: "教室" },
  { id: "cs", h: "电脑", p: "diànnǎo", en: "Computing", room: "电脑室" },
  { id: "pe", h: "体育", p: "tǐyù", en: "PE", room: "体育馆" },
] as const;

const CCA_OPTIONS = [
  { id: "badminton", h: "羽毛球", p: "yǔmáoqiú", en: "badminton" },
  { id: "swim", h: "游泳", p: "yóuyǒng", en: "swimming" },
  { id: "music", h: "音乐团", p: "yīnyuètuán", en: "music ensemble" },
  { id: "coding", h: "电脑俱乐部", p: "diànnǎo jùlèbù", en: "coding club" },
] as const;

function formatMandarinTime(halfHours: number): { h: string; p: string; en: string } {
  const hr24 = Math.floor(halfHours);
  const half = Math.abs(halfHours - hr24 - 0.5) < 0.01;
  const periodH = hr24 < 12 ? "上午" : "下午";
  const periodP = hr24 < 12 ? "shàngwǔ" : "xiàwǔ";
  const hr12 = hr24 > 12 ? hr24 - 12 : hr24;
  const cnDigits: Record<number, { h: string; p: string }> = {
    1: { h: "一", p: "yì" },
    2: { h: "两", p: "liǎng" },
    3: { h: "三", p: "sān" },
    4: { h: "四", p: "sì" },
    5: { h: "五", p: "wǔ" },
    6: { h: "六", p: "liù" },
    7: { h: "七", p: "qī" },
    8: { h: "八", p: "bā" },
    9: { h: "九", p: "jiǔ" },
    10: { h: "十", p: "shí" },
    11: { h: "十一", p: "shíyī" },
    12: { h: "十二", p: "shí'èr" },
  };
  const d = cnDigits[hr12] ?? { h: "八", p: "bā" };
  return {
    h: `${periodH}${d.h}点${half ? "半" : ""}`,
    p: `${periodP} ${d.p} diǎn${half ? " bàn" : ""}`,
    en: `${hr12}:${half ? "30" : "00"} ${hr24 < 12 ? "a.m." : "p.m."}`,
  };
}

const LESSON_WORDS: Record<number, { h: string; p: string }> = {
  4: { h: "四", p: "sì" },
  5: { h: "五", p: "wǔ" },
  6: { h: "六", p: "liù" },
  7: { h: "七", p: "qī" },
  8: { h: "八", p: "bā" },
};

function TimetableBuilderWidget() {
  const [dayId, setDayId] = useState<string>("wed");
  const [startT, setStartT] = useState<number>(8);
  const [endT, setEndT] = useState<number>(15.5);
  const [lessons, setLessons] = useState<number>(6);
  const [subjA, setSubjA] = useState<string>("sc");
  const [subjB, setSubjB] = useState<string>("hi");
  const [ccaId, setCcaId] = useState<string>("swim");

  const day = WEEKDAYS.find((d) => d.id === dayId) ?? WEEKDAYS[2];
  const sA = SUBJ_OPTIONS.find((s) => s.id === subjA) ?? SUBJ_OPTIONS[2];
  const sB = SUBJ_OPTIONS.find((s) => s.id === subjB) ?? SUBJ_OPTIONS[3];
  const cca = CCA_OPTIONS.find((c) => c.id === ccaId) ?? CCA_OPTIONS[1];
  const startFmt = formatMandarinTime(startT);
  const endFmt = formatMandarinTime(endT);
  const lesWord = LESSON_WORDS[lessons] ?? LESSON_WORDS[6];

  const mainH = `${day.h}我们从${startFmt.h}到${endFmt.h}上课，一天有${lesWord.h}节课。放学后我参加${cca.h}课外活动。`;
  const mainP = `${day.p} wǒmen cóng ${startFmt.p} dào ${endFmt.p} shàngkè, yì tiān yǒu ${lesWord.p} jié kè. Fàngxué hòu wǒ cānjiā ${cca.p} kèwài huódòng.`;
  const mainEn = `On ${day.en} we have lessons from ${startFmt.en} to ${endFmt.en}, with ${lessons} lessons in the day. After school I join ${cca.en} CCA.`;

  const sameSubj = sA.id === sB.id;
  const cmpH = sameSubj
    ? `在所有科目里，我最喜欢${sA.h}，因为非常有趣！`
    : `我觉得${sA.h}比${sB.h}更有趣，所以我最喜欢${sA.h}！`;
  const cmpP = sameSubj
    ? `Zài suǒyǒu kēmù lǐ, wǒ zuì xǐhuan ${sA.p}, yīnwèi fēicháng yǒuqù!`
    : `Wǒ juéde ${sA.p} bǐ ${sB.p} gèng yǒuqù, suǒyǐ wǒ zuì xǐhuan ${sA.p}!`;

  const barStartX = 40 + ((startT - 7) / 10) * 460;
  const barEndX = 40 + ((endT - 7) / 10) * 460;
  const barW = Math.max(40, barEndX - barStartX);

  return (
    <WidgetFrame
      title="Tanglin Timetable &amp; 从……到…… Builder (课程表与时间生成器)"
      tryThis={[
        "Drag the start and end sliders — notice how **从……到……** always stays BEFORE **上课**, and **2:00** switches automatically to **两点 (liǎng diǎn)**!",
        "Change daily lessons to see **节 (jié)** for periods vs **门 (mén)** for whole curriculum subjects.",
        "Pick two different subjects to see a zero-**很** **A 比 B 更有趣** comparison sentence!",
      ]}
      caption={
        <div className="space-y-2">
          <div>
            <div className="text-base font-bold text-ink">{mainH}</div>
            <div className="text-xs font-medium text-brand">{mainP}</div>
            <div className="text-xs text-ink-2">{mainEn}</div>
          </div>
          <div className="border-t border-line pt-2">
            <div className="text-sm font-bold text-ink">{cmpH}</div>
            <div className="text-xs text-ink-2">{cmpP}</div>
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Select weekday"
            value={dayId}
            onChange={setDayId}
            options={WEEKDAYS.map((d) => ({ value: d.id, label: d.h }))}
          />
          <Segmented
            label="Select after-school CCA"
            value={ccaId}
            onChange={setCcaId}
            options={CCA_OPTIONS.map((c) => ({ value: c.id, label: c.h }))}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="min-w-0 space-y-3 rounded-xl border border-line bg-surface-2 p-3">
            <Slider
              label="Start school (开始上课)"
              value={startT}
              min={7}
              max={9}
              step={0.5}
              onChange={setStartT}
              format={(v) => formatMandarinTime(v).h}
            />
            <Slider
              label="Finish school (放学时间)"
              value={endT}
              min={14}
              max={16.5}
              step={0.5}
              onChange={setEndT}
              format={(v) => formatMandarinTime(v).h}
            />
            <Stepper
              label="Lessons per day (每天几节课)"
              value={lessons}
              min={4}
              max={8}
              onChange={setLessons}
              format={(v) => `${LESSON_WORDS[v]?.h ?? v}节课`}
            />
          </div>

          <div className="min-w-0 space-y-2.5 rounded-xl border border-line bg-surface-2 p-3">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Favourite Subject A (更有趣)</div>
            <Segmented
              label="Favourite subject"
              value={subjA}
              onChange={setSubjA}
              options={SUBJ_OPTIONS.map((s) => ({ value: s.id, label: s.h }))}
            />
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Compare With Subject B (比…)</div>
            <Segmented
              label="Comparison subject"
              value={subjB}
              onChange={setSubjB}
              options={SUBJ_OPTIONS.map((s) => ({ value: s.id, label: s.h }))}
            />
            <div className="grid grid-cols-2 gap-2 pt-1">
              <Readout label="Period MW" value={`${lesWord.h}节课 (jié)`} tone="brand" />
              <Readout label="Total Span" value={`${(endT - startT).toFixed(1)} hrs`} tone="good" />
            </div>
          </div>
        </div>

        <svg
          viewBox="0 0 540 112"
          className="h-auto w-full rounded-xl border border-line bg-surface"
          role="img"
          aria-label="Visual school day timetable bar from start to finish time"
        >
          <text x="270" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">
            {day.h}课程表 · 从{startFmt.h}到{endFmt.h} ({lesWord.h}节课)
          </text>
          <line x1="40" y1="62" x2="500" y2="62" stroke="var(--line)" strokeWidth="4" strokeLinecap="round" />
          <rect x={barStartX} y="44" width={barW} height="34" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth="2" />
          <text x={barStartX + barW / 2} y="65" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--brand)">
            {startFmt.h} → {endFmt.h} ({lesWord.h}节课)
          </text>
          {[7, 9, 11, 13, 15, 17].map((hr) => {
            const x = 40 + ((hr - 7) / 10) * 460;
            return (
              <g key={hr}>
                <line x1={x} y1="84" x2={x} y2="90" stroke="var(--ink-2)" strokeWidth="1.5" />
                <text x={x} y="103" textAnchor="middle" fontSize="10" fill="var(--ink-2)">
                  {`${hr}:00`}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </WidgetFrame>
  );
}

interface CampusNode {
  id: string;
  hanzi: string;
  pinyin: string;
  en: string;
  suffix: string;
  suffixRule: string;
  col: number;
  row: number;
  x: number;
  y: number;
  activityH: string;
  activityP: string;
  activityEn: string;
}

const CAMPUS_NODES: CampusNode[] = [
  {
    id: "lib",
    hanzi: "图书馆",
    pinyin: "túshūguǎn",
    en: "Library",
    suffix: "馆 (guǎn)",
    suffixRule: "Large cultural/public hall",
    col: 0,
    row: 0,
    x: 20,
    y: 26,
    activityH: "借书和复习",
    activityP: "jiè shū hé fùxí",
    activityEn: "borrow books and revise",
  },
  {
    id: "lab",
    hanzi: "科学实验室",
    pinyin: "kēxué shíyànshì",
    en: "Science Lab",
    suffix: "室 (shì)",
    suffixRule: "Specialist classroom/room",
    col: 1,
    row: 0,
    x: 150,
    y: 26,
    activityH: "做有趣的实验",
    activityP: "zuò yǒuqù de shíyàn",
    activityEn: "do interesting experiments",
  },
  {
    id: "ict",
    hanzi: "电脑室",
    pinyin: "diànnǎoshì",
    en: "ICT Suite",
    suffix: "室 (shì)",
    suffixRule: "Specialist room",
    col: 2,
    row: 0,
    x: 280,
    y: 26,
    activityH: "上电脑课",
    activityP: "shàng diànnǎo kè",
    activityEn: "have Computing lessons",
  },
  {
    id: "hall",
    hanzi: "礼堂",
    pinyin: "lǐtáng",
    en: "Assembly Hall",
    suffix: "堂 (táng)",
    suffixRule: "Large communal hall",
    col: 3,
    row: 0,
    x: 410,
    y: 26,
    activityH: "开星期一周会",
    activityP: "kāi xīngqīyī zhōuhuì",
    activityEn: "hold Monday assembly",
  },
  {
    id: "canteen",
    hanzi: "食堂",
    pinyin: "shítáng",
    en: "Canteen",
    suffix: "堂 (táng)",
    suffixRule: "Dining hall (食 = food)",
    col: 0,
    row: 1,
    x: 20,
    y: 126,
    activityH: "吃午饭",
    activityP: "chī wǔfàn",
    activityEn: "eat lunch with friends",
  },
  {
    id: "gym",
    hanzi: "体育馆",
    pinyin: "tǐyùguǎn",
    en: "Sports Hall",
    suffix: "馆 (guǎn)",
    suffixRule: "Large indoor sports hall",
    col: 1,
    row: 1,
    x: 150,
    y: 126,
    activityH: "打篮球和羽毛球",
    activityP: "dǎ lánqiú hé yǔmáoqiú",
    activityEn: "play basketball and badminton",
  },
  {
    id: "pool",
    hanzi: "游泳池",
    pinyin: "yóuyǒngchí",
    en: "Swimming Pool",
    suffix: "池 (chí)",
    suffixRule: "Pool / water basin",
    col: 2,
    row: 1,
    x: 280,
    y: 126,
    activityH: "上游泳课",
    activityP: "shàng yóuyǒng kè",
    activityEn: "have swimming lessons",
  },
  {
    id: "field",
    hanzi: "运动场",
    pinyin: "yùndòngchǎng",
    en: "Sports Field",
    suffix: "场 (chǎng)",
    suffixRule: "Open outdoor ground",
    col: 3,
    row: 1,
    x: 410,
    y: 126,
    activityH: "跑步和踢足球",
    activityP: "pǎobù hé tī zúqiú",
    activityEn: "run and play football",
  },
];

function relationBetween(a: CampusNode, b: CampusNode): { h: string; p: string; en: string } {
  if (a.id === b.id) return { h: "里面", p: "lǐmiàn", en: "inside" };
  if (a.col === b.col && a.row !== b.row) return { h: "对面", p: "duìmiàn", en: "opposite" };
  if (a.row === b.row && Math.abs(a.col - b.col) === 1) {
    return a.col < b.col
      ? { h: "左边", p: "zuǒbiān", en: "to the left of" }
      : { h: "右边", p: "yòubiān", en: "to the right of" };
  }
  if (a.row === b.row) return { h: "旁边", p: "pángbiān", en: "alongside" };
  return a.row < b.row
    ? { h: "后面", p: "hòumiàn", en: "behind" }
    : { h: "前面", p: "qiánmiàn", en: "in front of" };
}

function CampusExplorerWidget() {
  const [focusId, setFocusId] = useState<string>("lab");
  const [refId, setRefId] = useState<string>("gym");
  const [showPinyin, setShowPinyin] = useState<"on" | "off">("on");

  const focus = CAMPUS_NODES.find((n) => n.id === focusId) ?? CAMPUS_NODES[1];
  const ref = CAMPUS_NODES.find((n) => n.id === refId) ?? CAMPUS_NODES[5];
  const rel = relationBetween(focus, ref);

  const locH = focus.id === ref.id ? `我们学校有一个现代的${focus.hanzi}。` : `${focus.hanzi}在${ref.hanzi}的${rel.h}。`;
  const locP =
    focus.id === ref.id
      ? `Wǒmen xuéxiào yǒu yí ge xiàndài de ${focus.pinyin}.`
      : `${focus.pinyin} zài ${ref.pinyin} de ${rel.p}.`;
  const locEn =
    focus.id === ref.id
      ? `Our school has a modern ${focus.en.toLowerCase()}.`
      : `The ${focus.en.toLowerCase()} is ${rel.en} the ${ref.en.toLowerCase()}.`;

  const actH = `我们经常在${focus.hanzi}${focus.activityH}。`;
  const actP = `Wǒmen jīngcháng zài ${focus.pinyin} ${focus.activityP}.`;
  const actEn = `We often ${focus.activityEn} in the ${focus.en.toLowerCase()}.`;

  return (
    <WidgetFrame
      title="Tanglin Campus Map &amp; Facilities Explorer (校园地图与方位探索)"
      tryThis={[
        "Tap any building on the campus map to inspect its **architectural suffix** (**室 / 馆 / 堂 / 场 / 池**) and STPVO activity sentence.",
        "Select a second reference building to auto-generate **A 在 B 的对面 / 左边 / 右边 / 前面 / 后面**!",
        "Compare **食堂 (shítáng — Canteen)** vs **礼堂 (lǐtáng — Assembly Hall)** on the map.",
      ]}
      caption={
        <div className="space-y-2">
          <div>
            <div className="text-base font-bold text-ink">{locH}</div>
            {showPinyin === "on" ? <div className="text-xs font-medium text-brand">{locP}</div> : null}
            <div className="text-xs text-ink-2">{locEn}</div>
          </div>
          <div className="border-t border-line pt-2">
            <div className="text-sm font-bold text-ink">{actH}</div>
            {showPinyin === "on" ? <div className="text-xs font-medium text-brand">{actP}</div> : null}
            <div className="text-xs text-ink-2">{actEn}</div>
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
            Tap map = Building A (brand) · Buttons below = Reference B (green)
          </div>
          <Segmented
            label="Toggle Pinyin"
            value={showPinyin}
            onChange={setShowPinyin}
            options={[
              { value: "on", label: "Show Pinyin" },
              { value: "off", label: "Hanzi Only" },
            ]}
          />
        </div>

        <svg
          viewBox="0 0 550 220"
          className="h-auto w-full rounded-xl border border-line bg-surface"
          role="img"
          aria-label="Interactive Tanglin campus map with eight clickable school facilities"
        >
          <rect x="8" y="8" width="534" height="204" rx="12" fill="var(--surface-2)" />
          <line x1="20" y1="108" x2="530" y2="108" stroke="var(--line)" strokeWidth="2" strokeDasharray="6 4" />
          <text x="275" y="103" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ink-2)">
            校园中心步道 · Central Walkway (对面 across)
          </text>
          {CAMPUS_NODES.map((n) => {
            const isA = n.id === focus.id;
            const isB = n.id === ref.id;
            const stroke = isA ? "var(--brand)" : isB ? "var(--good)" : "var(--line)";
            const fill = isA ? "var(--brand-soft)" : "var(--surface)";
            return (
              <g
                key={n.id}
                onClick={() => setFocusId(n.id)}
                style={{ cursor: "pointer" }}
                role="button"
                tabIndex={0}
                aria-label={`Select ${n.hanzi} (${n.en})`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setFocusId(n.id);
                  }
                }}
              >
                <rect x={n.x} y={n.y} width="120" height="68" rx="10" fill={fill} stroke={stroke} strokeWidth={isA || isB ? 2.5 : 1.2} />
                <text x={n.x + 60} y={n.y + 28} textAnchor="middle" fontSize="14" fontWeight="800" fill={isA ? "var(--brand)" : "var(--ink)"}>
                  {n.hanzi}
                </text>
                <text x={n.x + 60} y={n.y + 46} textAnchor="middle" fontSize="10" fill="var(--ink-2)">
                  {showPinyin === "on" ? n.pinyin : n.en}
                </text>
                <text x={n.x + 60} y={n.y + 60} textAnchor="middle" fontSize="9" fontWeight="700" fill={isA ? "var(--brand)" : isB ? "var(--good)" : "var(--ink-2)"}>
                  {isA ? "Building A" : isB ? "Reference B" : n.en}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Reference Building B (在___的…)</div>
          <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-8">
            {CAMPUS_NODES.map((n) => (
              <button
                key={n.id}
                type="button"
                onClick={() => setRefId(n.id)}
                className={`min-w-0 truncate rounded-lg border px-2 py-1.5 text-xs font-bold transition ${
                  n.id === ref.id
                    ? "border-good bg-surface text-good shadow-sm"
                    : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                }`}
              >
                {n.hanzi}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Selected Facility" value={focus.hanzi} tone="brand" />
          <Readout label="Suffix Clue" value={focus.suffix} tone="good" />
          <Readout label="Position Word" value={`${rel.h} (${rel.p})`} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "school-timetable-builder",
    title: "Tanglin Timetable & 从……到…… Builder",
    blurb: "Adjust school hours, daily lessons (节), CCAs and subject comparisons (比) live.",
    Component: TimetableBuilderWidget,
  },
  {
    id: "school-campus-explorer",
    title: "Tanglin Campus Map & Facilities Explorer",
    blurb: "Click campus buildings to generate relative location sentences (对面/旁边) and STPVO activities.",
    Component: CampusExplorerWidget,
  },
];
