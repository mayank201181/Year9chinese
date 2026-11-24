"use client";

import { useState } from "react";
import { Readout, Segmented, Stepper, WidgetFrame, type WidgetDef } from "./kit";

type Region = "south" | "north";
type BranchFilter = "all" | "paternal" | "maternal";

interface TreeNode {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  branch: "paternal" | "maternal" | "self";
  hanzi: string;
  northHanzi?: string;
  pinyin: string;
  northPinyin?: string;
  english: string;
  spouse: string;
  cousinRule: string;
  sampleCn: string;
  samplePy: string;
  sampleEn: string;
}

const TREE_NODES: TreeNode[] = [
  {
    id: "yeye",
    x: 24,
    y: 22,
    w: 98,
    h: 44,
    branch: "paternal",
    hanzi: "爷爷",
    pinyin: "yéye",
    english: "Paternal grandfather (father’s father)",
    spouse: "奶奶 (nǎinai)",
    cousinRule: "Father’s side elders (父系长辈)",
    sampleCn: "爷爷今年七十五岁，已经退休了。",
    samplePy: "Yéye jīnnián qīshíwǔ suì, yǐjīng tuìxiū le.",
    sampleEn: "Grandpa is 75 this year and has already retired.",
  },
  {
    id: "nainai",
    x: 136,
    y: 22,
    w: 98,
    h: 44,
    branch: "paternal",
    hanzi: "奶奶",
    pinyin: "nǎinai",
    english: "Paternal grandmother (father’s mother)",
    spouse: "爷爷 (yéye)",
    cousinRule: "Contains the female radical 女 (nǚ)",
    sampleCn: "每个周末我们都去看望奶奶。",
    samplePy: "Měi gè zhōumò wǒmen dōu qù kànwàng nǎinai.",
    sampleEn: "Every weekend we go to visit Grandma.",
  },
  {
    id: "waigong",
    x: 326,
    y: 22,
    w: 98,
    h: 44,
    branch: "maternal",
    hanzi: "外公",
    northHanzi: "姥爷",
    pinyin: "wàigōng",
    northPinyin: "lǎoye",
    english: "Maternal grandfather (mother’s father)",
    spouse: "外婆 / 姥姥 (wàipó / lǎolao)",
    cousinRule: "外 (wài) marks mother’s side; Northern China uses 姥爷",
    sampleCn: "外公住在新加坡，每天去公园散步。",
    samplePy: "Wàigōng zhù zài Xīnjiāpō, měitiān qù gōngyuán sànbù.",
    sampleEn: "Maternal Grandpa lives in Singapore and walks in the park daily.",
  },
  {
    id: "waipo",
    x: 438,
    y: 22,
    w: 98,
    h: 44,
    branch: "maternal",
    hanzi: "外婆",
    northHanzi: "姥姥",
    pinyin: "wàipó",
    northPinyin: "lǎolao",
    english: "Maternal grandmother (mother’s mother)",
    spouse: "外公 / 姥爷 (wàigōng / lǎoye)",
    cousinRule: "外婆 (Singapore/South) = 姥姥 (Beijing/North)",
    sampleCn: "每年春节我们全家都去外婆家吃团圆饭。",
    samplePy: "Měinián Chūnjié wǒmen quánjiā dōu qù wàipó jiā chī tuányuánfàn.",
    sampleEn: "Every Spring Festival our whole family goes to Grandma’s for reunion dinner.",
  },
  {
    id: "bobo",
    x: 14,
    y: 102,
    w: 68,
    h: 46,
    branch: "paternal",
    hanzi: "伯伯",
    pinyin: "bóbo",
    english: "Father’s OLDER brother",
    spouse: "伯母 (bómǔ)",
    cousinRule: "Children are 堂 cousins (堂哥/堂姐/堂弟/堂妹 — same surname)",
    sampleCn: "我伯伯是一位工程师，住在香港。",
    samplePy: "Wǒ bóbo shì yí wèi gōngchéngshī, zhù zài Xiānggǎng.",
    sampleEn: "My elder paternal uncle is an engineer and lives in Hong Kong.",
  },
  {
    id: "shushu",
    x: 88,
    y: 102,
    w: 68,
    h: 46,
    branch: "paternal",
    hanzi: "叔叔",
    pinyin: "shūshu",
    english: "Father’s YOUNGER brother",
    spouse: "婶婶 (shěnshen)",
    cousinRule: "Children are 堂 cousins (堂哥/堂姐/堂弟/堂妹 — same surname)",
    sampleCn: "叔叔比爸爸小三岁，他和爷爷住在一起。",
    samplePy: "Shūshu bǐ bàba xiǎo sān suì, tā hé yéye zhù zài yìqǐ.",
    sampleEn: "Younger Uncle is three years younger than Dad and lives with Grandpa.",
  },
  {
    id: "gugu",
    x: 162,
    y: 102,
    w: 68,
    h: 46,
    branch: "paternal",
    hanzi: "姑姑",
    pinyin: "gūgu",
    english: "Father’s sister (older or younger)",
    spouse: "姑父 (gūfu)",
    cousinRule: "TRAP! Children are 表 cousins (表哥/表姐/表弟/表妹), NOT 堂!",
    sampleCn: "我姑姑住在伦敦，她是一位律师。",
    samplePy: "Wǒ gūgu zhù zài Lúndūn, tā shì yí wèi lǜshī.",
    sampleEn: "My paternal aunt lives in London; she is a lawyer.",
  },
  {
    id: "baba",
    x: 236,
    y: 102,
    w: 58,
    h: 46,
    branch: "paternal",
    hanzi: "爸爸",
    pinyin: "bàba",
    english: "Father (paternal anchor)",
    spouse: "妈妈 (māma)",
    cousinRule: "Only 爸爸’s brothers’ children use 堂 (táng)!",
    sampleCn: "爸爸有两个兄弟和一个妹妹。",
    samplePy: "Bàba yǒu liǎng gè xiōngdì hé yí gè mèimei.",
    sampleEn: "Dad has two brothers and one younger sister.",
  },
  {
    id: "mama",
    x: 300,
    y: 102,
    w: 58,
    h: 46,
    branch: "maternal",
    hanzi: "妈妈",
    pinyin: "māma",
    english: "Mother (maternal anchor)",
    spouse: "爸爸 (bàba)",
    cousinRule: "All of 妈妈’s siblings’ children use 表 (biǎo).",
    sampleCn: "妈妈和阿姨关系非常好，常常聊天儿。",
    samplePy: "Māma hé āyí guānxi fēicháng hǎo, chángcháng liáotiānr.",
    sampleEn: "Mum and Auntie get on really well and often chat.",
  },
  {
    id: "jiujiu",
    x: 368,
    y: 102,
    w: 84,
    h: 46,
    branch: "maternal",
    hanzi: "舅舅",
    pinyin: "jiùjiu",
    english: "Mother’s brother (older OR younger)",
    spouse: "舅妈 (jiùmā)",
    cousinRule: "Children are 表 cousins (表哥/表姐/表弟/表妹)",
    sampleCn: "我舅舅是一位医生，他非常幽默。",
    samplePy: "Wǒ jiùjiu shì yí wèi yīshēng, tā fēicháng yōumò.",
    sampleEn: "My maternal uncle is a doctor; he is very humorous.",
  },
  {
    id: "ayi",
    x: 462,
    y: 102,
    w: 84,
    h: 46,
    branch: "maternal",
    hanzi: "阿姨",
    pinyin: "āyí",
    english: "Mother’s sister (older OR younger)",
    spouse: "姨父 (yífu)",
    cousinRule: "Children are 表 cousins (表哥/表姐/表弟/表妹)",
    sampleCn: "阿姨不但很友好，而且做饭很好吃。",
    samplePy: "Āyí búdàn hěn yǒuhǎo, érqiě zuòfàn hěn hǎochī.",
    sampleEn: "My maternal aunt is not only friendly, but also cooks delicious food.",
  },
  {
    id: "wo",
    x: 242,
    y: 184,
    w: 110,
    h: 42,
    branch: "self",
    hanzi: "我 (Me)",
    pinyin: "wǒ",
    english: "Anchor point for all cousin ages (哥/姐/弟/妹)",
    spouse: "Compare every cousin’s age directly against 我!",
    cousinRule: "堂 = 伯伯/叔叔’s kids · 表 = 姑姑/舅舅/阿姨’s kids",
    sampleCn: "我家有五口人，我还有三个表弟和一个堂姐。",
    samplePy: "Wǒ jiā yǒu wǔ kǒu rén, wǒ hái yǒu sān gè biǎodì hé yí gè tángjiě.",
    sampleEn: "There are five people in my household, plus three cousins and one older paternal female cousin.",
  },
];

function FamilyTreeExplorer() {
  const [region, setRegion] = useState<Region>("south");
  const [branch, setBranch] = useState<BranchFilter>("all");
  const [selectedId, setSelectedId] = useState<string>("jiujiu");

  const selected = TREE_NODES.find((n) => n.id === selectedId) ?? TREE_NODES[0];
  const activeHanzi = region === "north" && selected.northHanzi ? selected.northHanzi : selected.hanzi;
  const activePinyin = region === "north" && selected.northPinyin ? selected.northPinyin : selected.pinyin;

  return (
    <WidgetFrame
      title="Interactive Chinese Family Tree Explorer (互动家谱)"
      tryThis={[
        "Tap **伯伯**, **叔叔**, and **舅舅** to compare how Dad’s brothers split by age while Mum’s brother does not.",
        "Switch **Region** to **Northern China** to see **外公 / 外婆** flip into **姥爷 / 姥姥**.",
        "Tap **姑姑** and check why her children belong to **表**, not **堂**!",
      ]}
      caption={
        <div className="space-y-1.5">
          <div className="font-bold text-ink">
            {activeHanzi} ({activePinyin}) — {selected.english}
          </div>
          <div className="text-ink-2">
            <strong>Spouse / Note:</strong> {selected.spouse} · <strong>Cousin rule:</strong> {selected.cousinRule}
          </div>
          <div className="rounded-lg border border-line bg-surface px-3 py-2 text-ink">
            <div className="font-bold">{selected.sampleCn}</div>
            <div className="text-xs text-ink-2">{selected.samplePy}</div>
            <div className="text-xs text-ink-2">{selected.sampleEn}</div>
          </div>
        </div>
      }
    >
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Mandarin region"
            value={region}
            onChange={setRegion}
            options={[
              { value: "south", label: "Singapore / South (外公·外婆)" },
              { value: "north", label: "Beijing / North (姥爷·姥姥)" },
            ]}
          />
          <Segmented
            label="Filter branch"
            value={branch}
            onChange={setBranch}
            options={[
              { value: "all", label: "All" },
              { value: "paternal", label: "Dad’s Side" },
              { value: "maternal", label: "Mum’s Side" },
            ]}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
          <svg
            viewBox="0 0 560 238"
            className="w-full h-auto"
            role="img"
            aria-label="Interactive Mandarin Chinese paternal and maternal family tree"
          >
            {/* Connector lines */}
            <line x1="122" y1="44" x2="136" y2="44" stroke="var(--brand)" strokeWidth={2} />
            <line x1="129" y1="44" x2="129" y2="82" stroke="var(--brand)" strokeWidth={1.6} />
            <line x1="48" y1="82" x2="265" y2="82" stroke="var(--brand)" strokeWidth={1.6} />
            {[48, 122, 196, 265].map((cx) => (
              <line key={`p-${cx}`} x1={cx} y1="82" x2={cx} y2="102" stroke="var(--brand)" strokeWidth={1.6} />
            ))}

            <line x1="424" y1="44" x2="438" y2="44" stroke="var(--good)" strokeWidth={2} />
            <line x1="431" y1="44" x2="431" y2="82" stroke="var(--good)" strokeWidth={1.6} />
            <line x1="329" y1="82" x2="504" y2="82" stroke="var(--good)" strokeWidth={1.6} />
            {[329, 410, 504].map((cx) => (
              <line key={`m-${cx}`} x1={cx} y1="82" x2={cx} y2="102" stroke="var(--good)" strokeWidth={1.6} />
            ))}

            <line x1="294" y1="125" x2="300" y2="125" stroke="var(--ink-2)" strokeWidth={2} />
            <line x1="297" y1="125" x2="297" y2="184" stroke="var(--ink-2)" strokeWidth={1.8} />

            {TREE_NODES.map((node) => {
              const labelHz = region === "north" && node.northHanzi ? node.northHanzi : node.hanzi;
              const labelPy = region === "north" && node.northPinyin ? node.northPinyin : node.pinyin;
              const isSelected = node.id === selectedId;
              const dimmed = branch !== "all" && node.branch !== "self" && node.branch !== branch;
              const strokeColor =
                isSelected
                  ? "var(--brand)"
                  : node.branch === "paternal"
                    ? "var(--brand)"
                    : node.branch === "maternal"
                      ? "var(--good)"
                      : "var(--ink-2)";
              const fillColor = isSelected ? "var(--brand-soft)" : "var(--surface)";

              return (
                <g
                  key={node.id}
                  onClick={() => setSelectedId(node.id)}
                  style={{ cursor: "pointer", opacity: dimmed ? 0.28 : 1 }}
                  role="button"
                  tabIndex={0}
                  aria-label={`${labelHz} ${labelPy}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedId(node.id);
                    }
                  }}
                >
                  <rect
                    x={node.x}
                    y={node.y}
                    width={node.w}
                    height={node.h}
                    rx={8}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={isSelected ? 2.5 : 1.3}
                  />
                  <text
                    x={node.x + node.w / 2}
                    y={node.y + 19}
                    textAnchor="middle"
                    fontSize={node.w < 65 ? 12 : 13.5}
                    fontWeight={700}
                    fill="var(--ink)"
                  >
                    {labelHz}
                  </text>
                  <text
                    x={node.x + node.w / 2}
                    y={node.y + 35}
                    textAnchor="middle"
                    fontSize={9.5}
                    fill="var(--ink-2)"
                  >
                    {labelPy}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </WidgetFrame>
  );
}

type ParentKey = "bobo" | "shushu" | "gugu" | "jiujiu" | "ayi";
type GenderKey = "male" | "female";

const PARENT_INFO: Record<ParentKey, { label: string; cn: string; en: string; isTang: boolean }> = {
  bobo: { label: "伯伯 (Dad’s Older Bro)", cn: "伯伯", en: "father’s older brother", isTang: true },
  shushu: { label: "叔叔 (Dad’s Younger Bro)", cn: "叔叔", en: "father’s younger brother", isTang: true },
  gugu: { label: "姑姑 (Dad’s Sister)", cn: "姑姑", en: "father’s sister", isTang: false },
  jiujiu: { label: "舅舅 (Mum’s Brother)", cn: "舅舅", en: "mother’s brother", isTang: false },
  ayi: { label: "阿姨 (Mum’s Sister)", cn: "阿姨", en: "mother’s sister", isTang: false },
};

const COUNT_CN: Record<number, { hz: string; py: string; note: string }> = {
  1: { hz: "一个", py: "yí gè", note: "Standard singular: 一个" },
  2: { hz: "两个", py: "liǎng gè", note: "Always 两 (liǎng), NEVER 二, before 个!" },
  3: { hz: "三个", py: "sān gè", note: "Number + general classifier 个" },
  4: { hz: "四个", py: "sì gè", note: "Number + general classifier 个" },
  5: { hz: "五个", py: "wǔ gè", note: "Number + general classifier 个" },
};

function CousinClassifierLab() {
  const [parent, setParent] = useState<ParentKey>("gugu");
  const [gender, setGender] = useState<GenderKey>("male");
  const [myAge, setMyAge] = useState<number>(14);
  const [cousinAge, setCousinAge] = useState<number>(16);
  const [count, setCount] = useState<number>(2);

  const info = PARENT_INFO[parent];
  const prefix = info.isTang ? "堂" : "表";
  const prefixPy = info.isTang ? "táng" : "biǎo";
  const isOlder = cousinAge >= myAge;
  const isSameYear = cousinAge === myAge;
  const suffix = gender === "male" ? (isOlder ? "哥" : "弟") : isOlder ? "姐" : "妹";
  const suffixPy = gender === "male" ? (isOlder ? "gē" : "dì") : isOlder ? "jiě" : "mèi";
  const titleHz = `${prefix}${suffix}`;
  const titlePy = `${prefixPy}${suffixPy}`;
  const countData = COUNT_CN[count];
  const ageDiff = Math.abs(cousinAge - myAge);

  const sentenceCn =
    count === 1
      ? `我有一个${titleHz}，${gender === "male" ? "他" : "她"}今年${cousinAge}岁，是我${info.cn}的${gender === "male" ? "儿子" : "女儿"}。`
      : `我有${countData.hz}${titleHz}，他们都是我${info.cn}的孩子。`;
  const sentencePy =
    count === 1
      ? `Wǒ yǒu yí gè ${titlePy}, ${gender === "male" ? "tā" : "tā"} jīnnián ${cousinAge} suì, shì wǒ ${parent === "bobo" ? "bóbo" : parent === "shushu" ? "shūshu" : parent === "gugu" ? "gūgu" : parent === "jiujiu" ? "jiùjiu" : "āyí"} de ${gender === "male" ? "érzi" : "nǚ’ér"}.`
      : `Wǒ yǒu ${countData.py} ${titlePy}, tāmen dōu shì wǒ ${parent === "bobo" ? "bóbo" : parent === "shushu" ? "shūshu" : parent === "gugu" ? "gūgu" : parent === "jiujiu" ? "jiùjiu" : "āyí"} de háizi.`;

  return (
    <WidgetFrame
      title="Cousin 堂 vs 表 Classifier & 两/个 Lab"
      tryThis={[
        "Select **姑姑 (Dad’s Sister)** — notice it outputs **表**, NOT **堂**, even though she is on Dad’s side!",
        "Select **叔叔 (Dad’s Younger Bro)** and make the cousin **older than you** — notice the title is still **堂哥 / 堂姐**!",
        "Set **Count = 2** to see why **两个** replaces **二个**.",
      ]}
      caption={
        <div className="space-y-1.5">
          <div className="font-bold text-ink">{sentenceCn}</div>
          <div className="text-xs text-ink-2">{sentencePy}</div>
          <div className="text-xs text-ink-2">
            {isSameYear
              ? "Same birth year? Compare birth months — even one month older uses 哥 / 姐!"
              : `${info.cn} (${info.en}) → ${info.isTang ? "same paternal surname → 堂" : "different paternal surname → 表"}; cousin is ${ageDiff} year${ageDiff === 1 ? "" : "s"} ${isOlder ? "older" : "younger"} than you → ${suffix}.`}
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Whose child is this cousin?</div>
          <Segmented
            label="Parent sibling"
            value={parent}
            onChange={setParent}
            options={(Object.keys(PARENT_INFO) as ParentKey[]).map((k) => ({
              value: k,
              label: PARENT_INFO[k].label,
            }))}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="min-w-0 space-y-2 rounded-xl border border-line bg-surface-2 p-3">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Gender &amp; Ages</div>
            <Segmented
              label="Cousin gender"
              value={gender}
              onChange={setGender}
              options={[
                { value: "male", label: "Male (男)" },
                { value: "female", label: "Female (女)" },
              ]}
            />
            <Stepper label="Your age (我)" value={myAge} min={10} max={18} onChange={setMyAge} format={(v) => `${v}岁`} />
            <Stepper label="Cousin’s age" value={cousinAge} min={6} max={24} onChange={setCousinAge} format={(v) => `${v}岁`} />
            <Stepper label="How many?" value={count} min={1} max={5} onChange={setCount} />
          </div>

          <div className="min-w-0 grid grid-cols-1 gap-2.5 content-start">
            <Readout
              label="Exact Cousin Title"
              value={`${titleHz} (${titlePy})`}
              tone={info.isTang ? "good" : "brand"}
            />
            <Readout
              label="Prefix Rule"
              value={info.isTang ? "堂 · Father’s Brother Only" : "表 · Outer / Other Branch"}
              tone={info.isTang ? "good" : "ink"}
            />
            <Readout
              label={`Counting Phrase (${countData.note})`}
              value={`${countData.hz}${titleHz}`}
              tone="brand"
            />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "relatives-family-tree-explorer",
    title: "Interactive Paternal & Maternal Family Tree",
    blurb: "Click any relative on the tree to inspect Hanzi, tone-marked Pinyin, regional variants (外公 vs 姥爷), spouses, and IGCSE example sentences.",
    Component: FamilyTreeExplorer,
  },
  {
    id: "relatives-cousin-classifier",
    title: "Cousin 堂 vs 表 Classifier & Measure Word Lab",
    blurb: "Dial in parent branch, cousin age, and count to see 堂 vs 表, 哥/姐/弟/妹, and 两 vs 二 update live.",
    Component: CousinClassifierLab,
  },
];
