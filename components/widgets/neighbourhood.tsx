"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

interface Destination {
  id: string;
  hanzi: string;
  pinyin: string;
  en: string;
  km: string;
  kmHz: string;
  distLabel: string;
  distPy: string;
  walkMin: number;
  walkHz: string;
  walkPy: string;
  mrtMin: number;
  mrtHz: string;
  mrtPy: string;
  bikeMin: number;
  bikeHz: string;
  bikePy: string;
  routeHz: string;
  routePy: string;
  routeEn: string;
  pathD: string;
  pinX: number;
  pinY: number;
}

const DESTINATIONS: Destination[] = [
  {
    id: "mrt",
    hanzi: "地铁站",
    pinyin: "dìtiězhàn",
    en: "MRT Station",
    km: "0.4 km",
    kmHz: "四百米",
    distLabel: "很近",
    distPy: "hěn jìn",
    walkMin: 5,
    walkHz: "五分钟",
    walkPy: "wǔ fēnzhōng",
    mrtMin: 2,
    mrtHz: "两分钟",
    mrtPy: "liǎng fēnzhōng",
    bikeMin: 2,
    bikeHz: "两分钟",
    bikePy: "liǎng fēnzhōng",
    routeHz: "一直往前走，在第一个路口往左拐，地铁站就在你的右边。",
    routePy: "Yìzhí wǎng qián zǒu, zài dì-yī gè lùkǒu wǎng zuǒ guǎi, dìtiězhàn jiù zài nǐ de yòubiān.",
    routeEn: "Go straight ahead, turn left at the first intersection, and the MRT station is right on your right.",
    pathD: "M 70 165 L 220 165 L 220 75",
    pinX: 256,
    pinY: 64,
  },
  {
    id: "library",
    hanzi: "图书馆",
    pinyin: "túshūguǎn",
    en: "Library",
    km: "1.2 km",
    kmHz: "一点二公里",
    distLabel: "不远",
    distPy: "bù yuǎn",
    walkMin: 15,
    walkHz: "十五分钟",
    walkPy: "shíwǔ fēnzhōng",
    mrtMin: 6,
    mrtHz: "六分钟",
    mrtPy: "liù fēnzhōng",
    bikeMin: 5,
    bikeHz: "五分钟",
    bikePy: "wǔ fēnzhōng",
    routeHz: "先一直往前走，过马路，在第二个路口往左拐，图书馆就在公园的旁边。",
    routePy: "Xiān yìzhí wǎng qián zǒu, guò mǎlù, zài dì-èr gè lùkǒu wǎng zuǒ guǎi, túshūguǎn jiù zài gōngyuán de pángbiān.",
    routeEn: "First walk straight ahead, cross the road, turn left at the second intersection, and the library is next to the park.",
    pathD: "M 70 165 L 365 165 L 365 75",
    pinX: 398,
    pinY: 64,
  },
  {
    id: "mall",
    hanzi: "购物中心",
    pinyin: "gòuwù zhōngxīn",
    en: "Shopping Mall",
    km: "2.5 km",
    kmHz: "两公里半",
    distLabel: "不太远",
    distPy: "bú tài yuǎn",
    walkMin: 25,
    walkHz: "二十五分钟",
    walkPy: "èrshíwǔ fēnzhōng",
    mrtMin: 10,
    mrtHz: "十分钟",
    mrtPy: "shí fēnzhōng",
    bikeMin: 10,
    bikeHz: "十分钟",
    bikePy: "shí fēnzhōng",
    routeHz: "一直往前走，在第一个路口往右拐，再走三分钟，购物中心就在你的左边。",
    routePy: "Yìzhí wǎng qián zǒu, zài dì-yī gè lùkǒu wǎng yòu guǎi, zài zǒu sān fēnzhōng, gòuwù zhōngxīn jiù zài nǐ de zuǒbiān.",
    routeEn: "Go straight ahead, turn right at the first intersection, walk 3 more minutes, and the mall is on your left.",
    pathD: "M 70 165 L 220 165 L 220 218",
    pinX: 266,
    pinY: 205,
  },
  {
    id: "sports",
    hanzi: "体育中心",
    pinyin: "tǐyù zhōngxīn",
    en: "Sports Centre",
    km: "4.0 km",
    kmHz: "四公里",
    distLabel: "有点儿远",
    distPy: "yǒudiǎnr yuǎn",
    walkMin: 40,
    walkHz: "四十分钟",
    walkPy: "sìshí fēnzhōng",
    mrtMin: 15,
    mrtHz: "十五分钟",
    mrtPy: "shíwǔ fēnzhōng",
    bikeMin: 15,
    bikeHz: "十五分钟",
    bikePy: "shíwǔ fēnzhōng",
    routeHz: "一直往前走，过了红绿灯以后在第二个路口往右拐，体育中心就在超市对面。",
    routePy: "Yìzhí wǎng qián zǒu, guò le hónglǜdēng yǐhòu zài dì-èr gè lùkǒu wǎng yòu guǎi, tǐyù zhōngxīn jiù zài chāoshì duìmiàn.",
    routeEn: "Go straight ahead, pass the traffic lights and turn right at the second intersection; the sports centre is opposite the supermarket.",
    pathD: "M 70 165 L 365 165 L 365 218",
    pinX: 410,
    pinY: 205,
  },
];

type ModeKey = "walk" | "bike" | "mrt";

function NeighbourhoodDirectionsNavigator() {
  const [destId, setDestId] = useState<string>("mrt");
  const [mode, setMode] = useState<ModeKey>("walk");

  const dest = DESTINATIONS.find((d) => d.id === destId) ?? DESTINATIONS[0];

  const transportMap: Record<ModeKey, { verbHz: string; verbPy: string; minHz: string; minPy: string; mins: number }> = {
    walk: { verbHz: "走路", verbPy: "zǒulù", minHz: dest.walkHz, minPy: dest.walkPy, mins: dest.walkMin },
    bike: { verbHz: "骑自行车", verbPy: "qí zìxíngchē", minHz: dest.bikeHz, minPy: dest.bikePy, mins: dest.bikeMin },
    mrt: { verbHz: "坐地铁", verbPy: "zuò dìtiě", minHz: dest.mrtHz, minPy: dest.mrtPy, mins: dest.mrtMin },
  };
  const tr = transportMap[mode];

  const liSentenceHz = `${dest.hanzi}离我家${dest.distLabel}（大概${dest.kmHz}）。`;
  const liSentencePy = `${dest.pinyin} lí wǒ jiā ${dest.distPy}.`;
  const journeyHz = `从我家到${dest.hanzi}${tr.verbHz}只要${tr.minHz}。`;
  const journeyPy = `Cóng wǒ jiā dào ${dest.pinyin} ${tr.verbPy} zhǐ yào ${tr.minPy}.`;

  return (
    <WidgetFrame
      title="Tanglin Neighbourhood Map & Directions Navigator"
      tryThis={[
        "Pick each neighbourhood facility to see live **A 离 B** distance, **从…到…** travel time, and **P-D-V street directions**.",
        "Switch between **走路 (walk)**, **骑自行车 (bike)**, and **坐地铁 (MRT)** — notice which verb pairs with bicycles (**骑**, never 坐!).",
      ]}
      caption={
        <div className="space-y-1.5">
          <div className="text-sm font-extrabold text-brand">
            请问，去{dest.hanzi}怎么走？ · {dest.routeHz}
          </div>
          <div className="text-xs font-semibold text-ink">{dest.routePy}</div>
          <div className="text-xs text-ink-2">{dest.routeEn}</div>
        </div>
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="flex flex-wrap gap-1.5">
          {DESTINATIONS.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setDestId(d.id)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition ${
                d.id === destId
                  ? "border-brand bg-brand-soft text-brand"
                  : "border-line bg-surface text-ink-2 hover:text-ink"
              }`}
            >
              {d.hanzi} ({d.en})
            </button>
          ))}
        </div>

        <Segmented<ModeKey>
          label="Transport mode"
          value={mode}
          onChange={setMode}
          options={[
            { value: "walk", label: "🚶 走路 (Walk)" },
            { value: "bike", label: "🚲 骑自行车 (Bike)" },
            { value: "mrt", label: "🚇 坐地铁 (MRT)" },
          ]}
        />

        <div className="rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 480 245"
            className="w-full h-auto"
            role="img"
            aria-label={`Neighbourhood street map route from home to ${dest.en}`}
          >
            <rect x="4" y="4" width="472" height="237" rx="12" fill="var(--surface)" stroke="var(--line)" />
            {/* Main horizontal road */}
            <rect x="28" y="150" width="424" height="30" fill="var(--surface-2)" stroke="var(--line)" />
            {/* Intersection 1 & 2 vertical roads */}
            <rect x="206" y="34" width="28" height="196" fill="var(--surface-2)" stroke="var(--line)" />
            <rect x="351" y="34" width="28" height="196" fill="var(--surface-2)" stroke="var(--line)" />

            <text x="220" y="26" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ink-2)">
              第一个路口 (1st Junction)
            </text>
            <text x="365" y="26" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--ink-2)">
              第二个路口 (2nd Junction)
            </text>

            {/* Start Home */}
            <circle cx="70" cy="165" r="14" fill="var(--good)" />
            <text x="70" y="169" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--surface)">
              家
            </text>
            <text x="70" y="198" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--good)">
              我家 (Start)
            </text>

            {/* Route path */}
            <path
              d={dest.pathD}
              fill="none"
              stroke="var(--brand)"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Destination pins */}
            {DESTINATIONS.map((d) => {
              const active = d.id === dest.id;
              return (
                <g key={d.id}>
                  <rect
                    x={d.pinX - 42}
                    y={d.pinY - 18}
                    width="84"
                    height="36"
                    rx="8"
                    fill={active ? "var(--brand-soft)" : "var(--surface-2)"}
                    stroke={active ? "var(--brand)" : "var(--line)"}
                    strokeWidth={active ? 2 : 1.2}
                  />
                  <text
                    x={d.pinX}
                    y={d.pinY - 1}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="800"
                    fill={active ? "var(--brand)" : "var(--ink)"}
                  >
                    {d.hanzi}
                  </text>
                  <text x={d.pinX} y={d.pinY + 12} textAnchor="middle" fontSize="9" fill="var(--ink-2)">
                    {d.km}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 min-w-0">
          <Readout label={`Distance (离) · ${liSentencePy}`} value={liSentenceHz} tone="brand" />
          <Readout label={`Journey (${tr.mins} min) · ${journeyPy}`} value={journeyHz} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

function CityVsSuburbsComparator() {
  const [cityConvenience, setCityConvenience] = useState<number>(9);
  const [suburbQuiet, setSuburbQuiet] = useState<number>(9);
  const [cityLively, setCityLively] = useState<number>(8);
  const [suburbFresh, setSuburbFresh] = useState<number>(8);

  const suburbConvenience = Math.max(2, 11 - cityConvenience);
  const cityQuiet = Math.max(2, 11 - suburbQuiet);

  const convenienceDiff = cityConvenience - suburbConvenience;
  const conveniencePhraseHz =
    convenienceDiff >= 4
      ? "市中心比郊区方便得多"
      : convenienceDiff >= 1
        ? "市中心比郊区方便一点儿"
        : "郊区跟市中心一样方便";

  const quietDiff = suburbQuiet - cityQuiet;
  const quietPhraseHz =
    quietDiff >= 4
      ? "郊区比市中心安静得多"
      : quietDiff >= 1
        ? "郊区比市中心安静一点儿"
        : "市中心跟郊区一样安静";

  const preferSuburb = suburbQuiet + suburbFresh >= cityConvenience + cityLively;

  const essayHz = `${conveniencePhraseHz}，但是郊区没有市中心那么热闹。另一方面，${quietPhraseHz}，而且空气更清新。虽然各有优点，但是我更喜欢住在${preferSuburb ? "郊区" : "市中心"}，因为${preferSuburb ? "那里环境安静、空气新鲜" : "那里交通方便、商店很多"}。`;
  const essayPy = preferSuburb
    ? "Suīrán shìzhōngxīn bǐ jiāoqū fāngbiàn, dànshì jiāoqū méiyǒu shìzhōngxīn nàme rènào, érqiě gèng ānjìng. Wǒ gèng xǐhuan zhù zài jiāoqū, yīnwèi nàlǐ huánjìng ānjìng, kōngqì xīnxiān."
    : "Suīrán jiāoqū gèng ānjìng, dànshì shìzhōngxīn bǐ jiāoqū fāngbiàn de duō, yě gèng rènào. Wǒ gèng xǐhuan zhù zài shìzhōngxīn, yīnwèi nàlǐ jiāotōng fāngbiàn, shāngdiàn hěn duō.";

  return (
    <WidgetFrame
      title="City Centre vs Suburbs Comparator (市中心 vs 郊区)"
      tryThis={[
        "Slide **Convenience** and **Quietness** to watch **一点儿** ('a little more') upgrade to **得多** ('much more') — with ZERO forbidden **很** after **比**!",
        "Tip the total scores to flip the speaker's final preference (**我更喜欢住在郊区 / 市中心**).",
      ]}
      caption={
        <div className="space-y-1">
          <div className="text-sm font-extrabold text-brand">{essayHz}</div>
          <div className="text-xs text-ink-2">{essayPy}</div>
        </div>
      }
    >
      <div className="space-y-4 min-w-0">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 min-w-0">
          <div className="rounded-xl border border-line bg-surface-2 p-3 space-y-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-brand">市中心 (City Centre)</div>
            <Slider label="方便 · Convenience" value={cityConvenience} min={4} max={10} onChange={setCityConvenience} format={(v) => `${v}/10`} />
            <Slider label="热闹 · Liveliness" value={cityLively} min={4} max={10} onChange={setCityLively} format={(v) => `${v}/10`} />
          </div>

          <div className="rounded-xl border border-line bg-surface-2 p-3 space-y-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-good">郊区 (Suburbs)</div>
            <Slider label="安静 · Quietness" value={suburbQuiet} min={4} max={10} onChange={setSuburbQuiet} format={(v) => `${v}/10`} />
            <Slider label="空气新鲜 · Fresh Air" value={suburbFresh} min={4} max={10} onChange={setSuburbFresh} format={(v) => `${v}/10`} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 min-w-0">
          <Readout label="比 · Convenience" value={conveniencePhraseHz} tone="brand" />
          <Readout label="比 · Quietness" value={quietPhraseHz} tone="good" />
          <Readout
            label="Preference (更喜欢)"
            value={preferSuburb ? "更喜欢郊区 (Suburbs)" : "更喜欢市中心 (Downtown)"}
            tone="ink"
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "neighbourhood-directions-navigator",
    title: "Tanglin Neighbourhood Map & Directions Navigator",
    blurb: "Explore local places, distance with 离, transport verbs (走路/骑自行车/坐地铁), and step-by-step P-D-V street directions.",
    Component: NeighbourhoodDirectionsNavigator,
  },
  {
    id: "city-vs-suburbs-comparator",
    title: "City Centre vs Suburbs Comparator",
    blurb: "Compare 市中心 vs 郊区 live using 比…得多/一点儿, 没有…那么…, 更, and 虽然…但是….",
    Component: CityVsSuburbsComparator,
  },
];
