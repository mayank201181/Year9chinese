"use client";

import { useState } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

type FestivalId = "spring" | "lantern" | "dragon" | "midautumn";

interface FestivalProfile {
  id: FestivalId;
  hanzi: string;
  pinyin: string;
  english: string;
  lunarDate: string;
  lunarDatePinyin: string;
  lunarDay: number;
  moonPhaseLabel: string;
  food: string;
  foodPinyin: string;
  foodEn: string;
  customs: { hanzi: string; pinyin: string; en: string }[];
  symbol: string;
  symbolPinyin: string;
  symbolEn: string;
  greeting: string;
  greetingPinyin: string;
  sgSpot: string;
  sgSpotPinyin: string;
  sgSpotEn: string;
  modelCn: string;
  modelPy: string;
  modelEn: string;
}

const FESTIVALS: Record<FestivalId, FestivalProfile> = {
  spring: {
    id: "spring",
    hanzi: "春节",
    pinyin: "Chūnjié",
    english: "Spring Festival (Chinese New Year)",
    lunarDate: "农历正月初一",
    lunarDatePinyin: "Nónglì Zhēngyuè chūyī",
    lunarDay: 1,
    moonPhaseLabel: "New Moon (初一 — dark sky, fresh start)",
    food: "饺子 / 年糕 / 鱼",
    foodPinyin: "jiǎozi / niángāo / yú",
    foodEn: "dumplings, rice cake & fish",
    customs: [
      { hanzi: "贴春联", pinyin: "tiē chūnlián", en: "paste red couplets" },
      { hanzi: "吃年夜饭", pinyin: "chī niányèfàn", en: "eat reunion dinner" },
      { hanzi: "发红包", pinyin: "fā hóngbāo", en: "give red packets" },
      { hanzi: "舞龙舞狮", pinyin: "wǔlóng wǔshī", en: "dragon & lion dance" },
    ],
    symbol: "年年有余 · 好运",
    symbolPinyin: "niánnián yǒuyú · hǎoyùn",
    symbolEn: "abundance every year & good fortune",
    greeting: "新年快乐！恭喜发财！",
    greetingPinyin: "Xīnnián kuàilè! Gōngxǐ fācái!",
    sgSpot: "在牛车水",
    sgSpotPinyin: "zài Niúchēshuǐ",
    sgSpotEn: "in Chinatown",
    modelCn: "去年春节，我和家人在牛车水看了花灯，还吃了年糕。",
    modelPy: "Qùnián Chūnjié, wǒ hé jiārén zài Niúchēshuǐ kànle huādēng, hái chīle niángāo.",
    modelEn: "Last Spring Festival, my family and I viewed lanterns in Chinatown and ate rice cake.",
  },
  lantern: {
    id: "lantern",
    hanzi: "元宵节",
    pinyin: "Yuánxiāojié",
    english: "Lantern Festival",
    lunarDate: "农历正月十五",
    lunarDatePinyin: "Nónglì Zhēngyuè shíwǔ",
    lunarDay: 15,
    moonPhaseLabel: "First Full Moon (正月十五 — bright & round)",
    food: "汤圆 / 元宵",
    foodPinyin: "tāngyuán / yuánxiāo",
    foodEn: "sweet glutinous rice balls",
    customs: [
      { hanzi: "看花灯", pinyin: "kàn huādēng", en: "admire festive lanterns" },
      { hanzi: "猜灯谜", pinyin: "cāi dēngmí", en: "solve lantern riddles" },
      { hanzi: "吃汤圆", pinyin: "chī tāngyuán", en: "eat sweet rice balls" },
    ],
    symbol: "团圆 · 幸福",
    symbolPinyin: "tuányuán · xìngfú",
    symbolEn: "family unity & happiness",
    greeting: "元宵节快乐！",
    greetingPinyin: "Yuánxiāojié kuàilè!",
    sgSpot: "在牛车水",
    sgSpotPinyin: "zài Niúchēshuǐ",
    sgSpotEn: "in Chinatown",
    modelCn: "元宵节晚上，我们在牛车水一边看花灯，一边猜灯谜。",
    modelPy: "Yuánxiāojié wǎnshang, wǒmen zài Niúchēshuǐ yìbiān kàn huādēng, yìbiān cāi dēngmí.",
    modelEn: "On Lantern Festival evening, we admired lanterns and guessed riddles in Chinatown.",
  },
  dragon: {
    id: "dragon",
    hanzi: "端午节",
    pinyin: "Duānwǔjié",
    english: "Dragon Boat Festival",
    lunarDate: "农历五月初五",
    lunarDatePinyin: "Nónglì Wǔyuè chūwǔ",
    lunarDay: 5,
    moonPhaseLabel: "Waxing Crescent (初五 — Double Fifth)",
    food: "粽子",
    foodPinyin: "zòngzi",
    foodEn: "bamboo-leaf sticky rice dumplings",
    customs: [
      { hanzi: "划龙舟", pinyin: "huá lóngzhōu", en: "row dragon boats" },
      { hanzi: "吃粽子", pinyin: "chī zòngzi", en: "eat zongzi dumplings" },
      { hanzi: "纪念屈原", pinyin: "jìniàn Qū Yuán", en: "commemorate poet Qu Yuan" },
    ],
    symbol: "纪念爱国诗人屈原",
    symbolPinyin: "jìniàn àiguó shīrén Qū Yuán",
    symbolEn: "honouring the patriotic poet Qu Yuan",
    greeting: "端午安康！",
    greetingPinyin: "Duānwǔ ānkāng!",
    sgSpot: "在滨海湾",
    sgSpotPinyin: "zài Bīnhǎiwān",
    sgSpotEn: "at Marina Bay",
    modelCn: "去年端午节，我和同学在滨海湾看了精彩的龙舟比赛。",
    modelPy: "Qùnián Duānwǔjié, wǒ hé tóngxué zài Bīnhǎiwān kànle jīngcǎi de lóngzhōu bǐsài.",
    modelEn: "Last Dragon Boat Festival, my classmates and I watched an exciting dragon boat race at Marina Bay.",
  },
  midautumn: {
    id: "midautumn",
    hanzi: "中秋节",
    pinyin: "Zhōngqiūjié",
    english: "Mid-Autumn Festival",
    lunarDate: "农历八月十五",
    lunarDatePinyin: "Nónglì Bāyuè shíwǔ",
    lunarDay: 15,
    moonPhaseLabel: "Harvest Full Moon (八月十五 — 又大又圆)",
    food: "月饼 / 冰皮月饼",
    foodPinyin: "yuèbǐng / bīngpí yuèbǐng",
    foodEn: "baked & snow-skin mooncakes",
    customs: [
      { hanzi: "赏月", pinyin: "shǎngyuè", en: "admire the full moon" },
      { hanzi: "吃月饼", pinyin: "chī yuèbǐng", en: "share round mooncakes" },
      { hanzi: "提灯笼", pinyin: "tí dēnglóng", en: "carry glowing lanterns" },
    ],
    symbol: "全家团圆 · 嫦娥奔月",
    symbolPinyin: "quánjiā tuányuán · Cháng’é bēn yuè",
    symbolEn: "family reunion & the legend of Chang’e",
    greeting: "中秋节快乐！",
    greetingPinyin: "Zhōngqiūjié kuàilè!",
    sgSpot: "在滨海湾花园",
    sgSpotPinyin: "zài Bīnhǎiwān Huāyuán",
    sgSpotEn: "at Gardens by the Bay",
    modelCn: "去年中秋节，我们全家在滨海湾花园一边赏月，一边吃月饼。",
    modelPy: "Qùnián Zhōngqiūjié, wǒmen quánjiā zài Bīnhǎiwān Huāyuán yìbiān shǎngyuè, yìbiān chī yuèbǐng.",
    modelEn: "Last Mid-Autumn, our whole family admired the moon and ate mooncakes at Gardens by the Bay.",
  },
};

const ORDER: FestivalId[] = ["spring", "lantern", "dragon", "midautumn"];

function LunarFestivalExplorer() {
  const [festId, setFestId] = useState<FestivalId>("spring");
  const [showPinyin, setShowPinyin] = useState<"both" | "hanzi">("both");
  const f = FESTIVALS[festId];
  const activeIdx = ORDER.indexOf(festId);

  return (
    <WidgetFrame
      title="Lunar Calendar Festival Explorer (农历节日探索)"
      tryThis={[
        "Compare the **moon phase** on `正月十五` (元宵节) and `八月十五` (中秋节) — why are BOTH full moons linked to `团圆`?",
        "Switch to **Hanzi Only** mode and test whether you can read each lunar date and verb–object custom aloud!",
      ]}
      caption={
        <div>
          <strong>Singapore Model Sentence:</strong> {f.modelCn}
          {showPinyin === "both" ? (
            <div className="mt-1 text-ink-2">
              {f.modelPy} — <em>{f.modelEn}</em>
            </div>
          ) : null}
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Select Chinese festival"
            value={festId}
            onChange={setFestId}
            options={[
              { value: "spring", label: "春节 1/1" },
              { value: "lantern", label: "元宵节 1/15" },
              { value: "dragon", label: "端午节 5/5" },
              { value: "midautumn", label: "中秋节 8/15" },
            ]}
          />
          <Segmented
            label="Display script mode"
            value={showPinyin}
            onChange={setShowPinyin}
            options={[
              { value: "both", label: "Hanzi + Pinyin" },
              { value: "hanzi", label: "Hanzi Only" },
            ]}
          />
        </div>

        <svg
          viewBox="0 0 560 156"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={`Lunar timeline highlighting ${f.english} and its moon phase`}
          className="w-full h-auto rounded-xl border border-line bg-surface"
        >
          <rect x="0" y="0" width="560" height="156" rx="12" fill="var(--surface)" />
          <line x1="56" y1="54" x2="364" y2="54" stroke="var(--line)" strokeWidth="4" strokeLinecap="round" />
          {ORDER.map((id, i) => {
            const x = 56 + i * 102;
            const item = FESTIVALS[id];
            const isActive = id === festId;
            return (
              <g key={id}>
                <circle
                  cx={x}
                  cy={54}
                  r={isActive ? 15 : 10}
                  fill={isActive ? "var(--brand)" : "var(--surface-2)"}
                  stroke="var(--brand)"
                  strokeWidth={isActive ? 2.5 : 1.5}
                />
                <text
                  x={x}
                  y={30}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight={isActive ? "800" : "600"}
                  fill={isActive ? "var(--brand)" : "var(--ink-2)"}
                >
                  {item.hanzi}
                </text>
                <text x={x} y={82} textAnchor="middle" fontSize="10" fill="var(--ink-2)">
                  {item.lunarDate.replace("农历", "")}
                </text>
              </g>
            );
          })}

          <rect x="394" y="18" width="148" height="120" rx="10" fill="var(--surface-2)" stroke="var(--line)" />
          <text x="468" y="37" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--ink)">
            Moon Phase · Day {f.lunarDay}
          </text>
          {f.lunarDay === 15 ? (
            <circle cx="468" cy="76" r="24" fill="var(--accent)" stroke="var(--brand)" strokeWidth="2" />
          ) : f.lunarDay === 5 ? (
            <g>
              <circle cx="468" cy="76" r="24" fill="var(--line)" />
              <path d="M 468 52 A 24 24 0 0 1 468 100 A 14 24 0 0 0 468 52 Z" fill="var(--accent)" />
            </g>
          ) : (
            <circle cx="468" cy="76" r="24" fill="var(--ink-2)" stroke="var(--line)" strokeWidth="2" opacity="0.35" />
          )}
          <text x="468" y="122" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--brand)">
            {f.lunarDay === 15 ? "Full Moon (满月)" : f.lunarDay === 5 ? "Crescent (初五)" : "New Moon (初一)"}
          </text>

          <rect x="20" y="102" width="356" height="36" rx="8" fill="var(--brand-soft)" />
          <text x="198" y="124" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--brand)">
            #{activeIdx + 1} in Lunar Year · {f.moonPhaseLabel}
          </text>
        </svg>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Readout
            label="Lunar Date (农历日期)"
            value={
              <span className="text-base">
                {f.lunarDate}
                {showPinyin === "both" ? <span className="block text-xs font-semibold text-ink-2">{f.lunarDatePinyin}</span> : null}
              </span>
            }
          />
          <Readout
            label="Traditional Food (传统食物)"
            tone="good"
            value={
              <span className="text-base">
                {f.food}
                {showPinyin === "both" ? (
                  <span className="block text-xs font-semibold text-ink-2">
                    {f.foodPinyin} — {f.foodEn}
                  </span>
                ) : null}
              </span>
            }
          />
          <Readout
            label="Meaning / Legend (寓意)"
            tone="ink"
            value={
              <span className="text-base">
                {f.symbol}
                {showPinyin === "both" ? (
                  <span className="block text-xs font-semibold text-ink-2">
                    {f.symbolPinyin} ({f.symbolEn})
                  </span>
                ) : null}
              </span>
            }
          />
          <Readout
            label="Greeting (祝福语)"
            value={
              <span className="text-base">
                {f.greeting}
                {showPinyin === "both" ? <span className="block text-xs font-semibold text-ink-2">{f.greetingPinyin}</span> : null}
              </span>
            }
          />
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Exact Verb–Object Customs (动词 + 宾语)</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {f.customs.map((c) => (
              <span key={c.hanzi} className="chip">
                <strong className="text-ink">{c.hanzi}</strong>
                {showPinyin === "both" ? <span>({c.pinyin} · {c.en})</span> : null}
              </span>
            ))}
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

interface ActivityCard {
  id: string;
  belongsTo: FestivalId;
  hanzi: string;
  pinyin: string;
  en: string;
  pastHanzi: string;
  pastPinyin: string;
  expHanzi: string;
  expPinyin: string;
}

const ACTIVITY_CARDS: ActivityCard[] = [
  {
    id: "couplets",
    belongsTo: "spring",
    hanzi: "贴春联",
    pinyin: "tiē chūnlián",
    en: "paste red couplets",
    pastHanzi: "贴了春联",
    pastPinyin: "tiēle chūnlián",
    expHanzi: "贴过春联",
    expPinyin: "tiēguo chūnlián",
  },
  {
    id: "redpacket",
    belongsTo: "spring",
    hanzi: "吃年糕",
    pinyin: "chī niángāo",
    en: "eat sticky New Year rice cake",
    pastHanzi: "吃了年糕",
    pastPinyin: "chīle niángāo",
    expHanzi: "吃过年糕",
    expPinyin: "chīguo niángāo",
  },
  {
    id: "moon",
    belongsTo: "midautumn",
    hanzi: "赏月、吃月饼",
    pinyin: "shǎngyuè, chī yuèbǐng",
    en: "admire the moon & eat mooncakes",
    pastHanzi: "赏月、吃了月饼",
    pastPinyin: "shǎngyuè, chīle yuèbǐng",
    expHanzi: "吃过月饼",
    expPinyin: "chīguo yuèbǐng",
  },
  {
    id: "lanterns",
    belongsTo: "midautumn",
    hanzi: "提灯笼",
    pinyin: "tí dēnglóng",
    en: "carry glowing lanterns",
    pastHanzi: "提了灯笼",
    pastPinyin: "tíle dēnglóng",
    expHanzi: "提过灯笼",
    expPinyin: "tíguo dēnglóng",
  },
  {
    id: "dragonboat",
    belongsTo: "dragon",
    hanzi: "划龙舟",
    pinyin: "huá lóngzhōu",
    en: "row dragon boats",
    pastHanzi: "划了龙舟",
    pastPinyin: "huále lóngzhōu",
    expHanzi: "划过龙舟",
    expPinyin: "huáguo lóngzhōu",
  },
  {
    id: "zongzi",
    belongsTo: "dragon",
    hanzi: "吃粽子",
    pinyin: "chī zòngzi",
    en: "eat bamboo-wrapped zongzi",
    pastHanzi: "吃了粽子",
    pastPinyin: "chīle zòngzi",
    expHanzi: "吃过粽子",
    expPinyin: "chīguo zòngzi",
  },
  {
    id: "riddles",
    belongsTo: "lantern",
    hanzi: "猜灯谜",
    pinyin: "cāi dēngmí",
    en: "guess lantern riddles",
    pastHanzi: "猜了灯谜",
    pastPinyin: "cāile dēngmí",
    expHanzi: "猜过灯谜",
    expPinyin: "cāiguo dēngmí",
  },
  {
    id: "tangyuan",
    belongsTo: "lantern",
    hanzi: "吃汤圆",
    pinyin: "chī tāngyuán",
    en: "eat sweet glutinous rice balls",
    pastHanzi: "吃了汤圆",
    pastPinyin: "chīle tāngyuán",
    expHanzi: "吃过汤圆",
    expPinyin: "chīguo tāngyuán",
  },
];

type TimeFrame = "past" | "exp" | "habit" | "future";

function FestivalMatcherWorkshop() {
  const [festId, setFestId] = useState<FestivalId>("dragon");
  const [actId, setActId] = useState<string>("dragonboat");
  const [timeFrame, setTimeFrame] = useState<TimeFrame>("past");

  const fest = FESTIVALS[festId];
  const act = ACTIVITY_CARDS.find((a) => a.id === actId) ?? ACTIVITY_CARDS[0];
  const isMatch = act.belongsTo === festId;
  const trueFest = FESTIVALS[act.belongsTo];

  const built = (() => {
    if (timeFrame === "past") {
      return {
        label: "Specific Past (去年 + 了)",
        cn: `去年${fest.hanzi}，我和家人${fest.sgSpot}${act.pastHanzi}。`,
        py: `Qùnián ${fest.pinyin}, wǒ hé jiārén ${fest.sgSpotPinyin} ${act.pastPinyin}.`,
        en: `Last ${fest.english}, my family and I ${act.en} ${fest.sgSpotEn}.`,
      };
    }
    if (timeFrame === "exp") {
      return {
        label: "Life Experience (以前 + 过)",
        cn: `我以前在新加坡${act.expHanzi}，觉得很有意思！`,
        py: `Wǒ yǐqián zài Xīnjiāpō ${act.expPinyin}, juéde hěn yǒu yìsi!`,
        en: `I have done "${act.en}" in Singapore before and found it very interesting!`,
      };
    }
    if (timeFrame === "habit") {
      return {
        label: "Annual Habit (每年)",
        cn: `每年${fest.hanzi}，我们全家都会${fest.sgSpot}${act.hanzi}。`,
        py: `Měinián ${fest.pinyin}, wǒmen quánjiā dōu huì ${fest.sgSpotPinyin} ${act.pinyin}.`,
        en: `Every ${fest.english}, our whole family does "${act.en}" ${fest.sgSpotEn}.`,
      };
    }
    return {
      label: "Future Plan (明年打算)",
      cn: `明年${fest.hanzi}，我打算跟朋友${fest.sgSpot}${act.hanzi}。`,
      py: `Míngnián ${fest.pinyin}, wǒ dǎsuàn gēn péngyou ${fest.sgSpotPinyin} ${act.pinyin}.`,
      en: `Next ${fest.english}, I plan to ${act.en} ${fest.sgSpotEn} with friends.`,
    };
  })();

  return (
    <WidgetFrame
      title="Festival Customs, Foods & Tense Matcher (节日习俗句子工坊)"
      tryThis={[
        "Pick `端午节` and match BOTH of its authentic customs (`划龙舟`, `吃粽子`), then switch the time frame from **Past (了)** to **Future (打算)**.",
        "Intentionally test a mismatch like `中秋节 + 吃汤圆` to see the cultural diagnosis!",
      ]}
      caption={
        isMatch ? (
          <div>
            <strong className="text-good">✅ Authentic Cultural Match!</strong> {act.hanzi} ({act.pinyin}) belongs to{" "}
            <strong>
              {fest.hanzi} ({fest.lunarDate})
            </strong>
            . Notice how <strong>{fest.sgSpot}</strong> sits <em>before</em> the verb (STPVO).
          </div>
        ) : (
          <div>
            <strong className="text-bad">⚠️ Cultural Mismatch!</strong> <strong>{act.hanzi}</strong> ({act.en}) actually
            belongs to <strong>{trueFest.hanzi} ({trueFest.lunarDate})</strong>, not {fest.hanzi}! Switch the festival or
            pick a matching custom.
          </div>
        )
      }
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Choose Festival (节日)</div>
          <Segmented
            label="Festival selector"
            value={festId}
            onChange={setFestId}
            options={[
              { value: "spring", label: "春节" },
              { value: "midautumn", label: "中秋节" },
              { value: "dragon", label: "端午节" },
              { value: "lantern", label: "元宵节" },
            ]}
          />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Match Custom / Food (习俗或食物)</div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {ACTIVITY_CARDS.map((card) => {
              const selected = card.id === actId;
              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setActId(card.id)}
                  className={`rounded-xl border px-2.5 py-2 text-left text-xs font-bold transition ${
                    selected
                      ? "border-brand bg-brand-soft text-brand"
                      : "border-line bg-surface-2 text-ink hover:border-brand/50"
                  }`}
                >
                  <div className="text-sm">{card.hanzi}</div>
                  <div className="text-[11px] font-normal text-ink-2">{card.pinyin}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">3. Switch IGCSE Time Frame (时态)</div>
          <Segmented
            label="Time frame selector"
            value={timeFrame}
            onChange={setTimeFrame}
            options={[
              { value: "past", label: "去年…了 (Past)" },
              { value: "exp", label: "以前…过 (Ever)" },
              { value: "habit", label: "每年 (Habit)" },
              { value: "future", label: "明年打算 (Future)" },
            ]}
          />
        </div>

        <div
          className={`rounded-xl border p-3.5 ${
            isMatch ? "border-good bg-good-soft/40" : "border-bad bg-bad-soft/40"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-wide text-ink-2">
            <span>{built.label}</span>
            <span className={isMatch ? "text-good" : "text-bad"}>{isMatch ? "Matched ✓" : "Check Festival ✗"}</span>
          </div>
          <div className="mt-1.5 text-lg font-extrabold text-ink">{built.cn}</div>
          <div className="mt-1 text-sm font-semibold text-ink-2">{built.py}</div>
          <div className="mt-0.5 text-xs text-ink-2">{built.en}</div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "lunar-festival-explorer",
    title: "Lunar Calendar Festival Explorer",
    blurb: "Inspect all four festivals across the lunar year, compare moon phases, and toggle Pinyin to test Hanzi fluency.",
    Component: LunarFestivalExplorer,
  },
  {
    id: "festival-customs-foods-matcher",
    title: "Festival Customs, Foods & Tense Matcher",
    blurb: "Pair festivals with authentic foods and verbs, catch cultural mismatches, and transform sentences across 4 IGCSE time frames.",
    Component: FestivalMatcherWorkshop,
  },
];
