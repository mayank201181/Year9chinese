"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, Stepper, WidgetFrame, type WidgetDef } from "./kit";

interface AnimalSpec {
  id: string;
  emoji: string;
  hanzi: string;
  pinyin: string;
  en: string;
  enPlural: string;
  mw: "只" | "条" | "匹";
  mwPinyin: "zhī" | "tiáo" | "pǐ";
  featureH: string;
  featureP: string;
  featureEn: string;
  reason: string;
}

const ANIMALS: AnimalSpec[] = [
  {
    id: "dog",
    emoji: "🐶",
    hanzi: "小狗",
    pinyin: "xiǎogǒu",
    en: "puppy",
    enPlural: "puppies",
    mw: "只",
    mwPinyin: "zhī",
    featureH: "棕色的短毛和短短的尾巴",
    featureP: "zōngsè de duǎnmáo hé duǎnduǎn de wěiba",
    featureEn: "short brown fur and a short tail",
    reason: "Compact furry pets take 只 (zhī).",
  },
  {
    id: "cat",
    emoji: "🐱",
    hanzi: "小猫",
    pinyin: "xiǎomāo",
    en: "kitten",
    enPlural: "kittens",
    mw: "只",
    mwPinyin: "zhī",
    featureH: "白色的软毛和一双大眼睛",
    featureP: "báisè de ruǎnmáo hé yì shuāng dà yǎnjing",
    featureEn: "soft white fur and a pair of big eyes",
    reason: "Cats and kittens take 只 (zhī).",
  },
  {
    id: "rabbit",
    emoji: "🐰",
    hanzi: "兔子",
    pinyin: "tùzi",
    en: "rabbit",
    enPlural: "rabbits",
    mw: "只",
    mwPinyin: "zhī",
    featureH: "长长的耳朵和白色的毛",
    featureP: "chángcháng de ěrduo hé báisè de máo",
    featureEn: "long ears and white fur",
    reason: "Small mammals like rabbits take 只 (zhī).",
  },
  {
    id: "hamster",
    emoji: "🐹",
    hanzi: "仓鼠",
    pinyin: "cāngshǔ",
    en: "hamster",
    enPlural: "hamsters",
    mw: "只",
    mwPinyin: "zhī",
    featureH: "圆圆的身体和小小的爪子",
    featureP: "yuányuán de shēntǐ hé xiǎoxiǎo de zhuǎzi",
    featureEn: "a round body and tiny paws",
    reason: "Small compact rodents take 只 (zhī).",
  },
  {
    id: "parrot",
    emoji: "🦜",
    hanzi: "鹦鹉",
    pinyin: "yīngwǔ",
    en: "parrot",
    enPlural: "parrots",
    mw: "只",
    mwPinyin: "zhī",
    featureH: "绿色和黄色的翅膀",
    featureP: "lǜsè hé huángsè de chìbǎng",
    featureEn: "green and yellow wings",
    reason: "All birds take 只 (zhī).",
  },
  {
    id: "turtle",
    emoji: "🐢",
    hanzi: "乌龟",
    pinyin: "wūguī",
    en: "turtle",
    enPlural: "turtles",
    mw: "只",
    mwPinyin: "zhī",
    featureH: "坚硬的龟壳和短短的腿",
    featureP: "jiānyìng de guīké hé duǎnduǎn de tuǐ",
    featureEn: "a hard shell and short legs",
    reason: "Turtles and tortoises take 只 (zhī).",
  },
  {
    id: "goldfish",
    emoji: "🐠",
    hanzi: "金鱼",
    pinyin: "jīnyú",
    en: "goldfish",
    enPlural: "goldfish",
    mw: "条",
    mwPinyin: "tiáo",
    featureH: "橘色的身体和漂亮的大尾巴",
    featureP: "júsè de shēntǐ hé piàoliang de dà wěiba",
    featureEn: "an orange body and a pretty tail",
    reason: "Long, slender swimming fish ALWAYS take 条 (tiáo) — never 只!",
  },
  {
    id: "horse",
    emoji: "🐴",
    hanzi: "马",
    pinyin: "mǎ",
    en: "horse",
    enPlural: "horses",
    mw: "匹",
    mwPinyin: "pǐ",
    featureH: "棕色的长毛和强壮的腿",
    featureP: "zōngsè de chángmáo hé qiángzhuàng de tuǐ",
    featureEn: "long brown hair and strong legs",
    reason: "Horses ALWAYS take 匹 (pǐ) — never 只 or 个!",
  },
];

const COUNT_WORDS: Record<number, { h: string; p: string; en: string }> = {
  1: { h: "一", p: "yì", en: "one" },
  2: { h: "两", p: "liǎng", en: "two" },
  3: { h: "三", p: "sān", en: "three" },
  4: { h: "四", p: "sì", en: "four" },
  5: { h: "五", p: "wǔ", en: "five" },
  6: { h: "六", p: "liù", en: "six" },
};

const POS_TRAITS = [
  { id: "keai", h: "可爱", p: "kě'ài", en: "cute" },
  { id: "huopo", h: "活泼", p: "huópō", en: "lively" },
  { id: "congming", h: "聪明", p: "cōngmíng", en: "clever" },
  { id: "wenshun", h: "温顺", p: "wēnshùn", en: "gentle" },
  { id: "anjing", h: "安静", p: "ānjìng", en: "quiet" },
] as const;

const QUIRKS = [
  { id: "taoqi", h: "淘气", p: "táoqì", en: "naughty" },
  { id: "lan", h: "懒", p: "lǎn", en: "lazy" },
  { id: "danxiao", h: "胆小", p: "dǎnxiǎo", en: "timid" },
  { id: "chao", h: "吵", p: "chǎo", en: "noisy" },
] as const;

function PetMeasureProfileWidget() {
  const [animalId, setAnimalId] = useState<string>("dog");
  const [count, setCount] = useState<number>(2);
  const [trait1, setTrait1] = useState<string>("congming");
  const [trait2, setTrait2] = useState<string>("huopo");
  const [quirkId, setQuirkId] = useState<string>("taoqi");
  const [showPinyin, setShowPinyin] = useState<"on" | "off">("on");

  const animal = ANIMALS.find((a) => a.id === animalId) ?? ANIMALS[0];
  const cnt = COUNT_WORDS[count] ?? COUNT_WORDS[1];
  const t1 = POS_TRAITS.find((t) => t.id === trait1) ?? POS_TRAITS[0];
  const t2 = POS_TRAITS.find((t) => t.id === trait2) ?? POS_TRAITS[1];
  const quirk = QUIRKS.find((q) => q.id === quirkId) ?? QUIRKS[0];

  const yiTone = count === 1 ? (animal.mw === "匹" ? "yì" : "yì") : cnt.p;
  const nounPhraseH = `${cnt.h}${animal.mw}${animal.hanzi}`;
  const nounPhraseP = `${yiTone} ${animal.mwPinyin} ${animal.pinyin}`;
  const pronH = count > 1 ? "它们" : "它";
  const pronP = count > 1 ? "Tāmen" : "Tā";
  const sameTrait = t1.id === t2.id;
  const traitClauseH = sameTrait ? `非常${t1.h}` : `又${t1.h}又${t2.h}`;
  const traitClauseP = sameTrait ? `fēicháng ${t1.p}` : `yòu ${t1.p} yòu ${t2.p}`;
  const traitClauseEn = sameTrait ? `very ${t1.en}` : `both ${t1.en} and ${t2.en}`;

  const fullH = `我家养了${nounPhraseH}。${pronH}长着${animal.featureH}，${traitClauseH}，可是有时候有点儿${quirk.h}。`;
  const fullP = `Wǒ jiā yǎng le ${nounPhraseP}. ${pronP} zhǎngzhe ${animal.featureP}, ${traitClauseP}, kěshì yǒushíhou yǒudiǎnr ${quirk.p}.`;
  const fullEn = `My family keeps ${cnt.en} ${count === 1 ? animal.en : animal.enPlural}. ${count > 1 ? "They have" : "It has"} ${animal.featureEn}, ${count > 1 ? "are" : "is"} ${traitClauseEn}, though sometimes a bit ${quirk.en}.`;

  return (
    <WidgetFrame
      title="Pet Profile &amp; Measure-Word Lab (宠物档案与量词实验室)"
      tryThis={[
        "Switch between **小狗**, **金鱼**, and **马** and watch the measure word shift across **只 → 条 → 匹**.",
        "Set quantity to **2** to trigger the **两 (liǎng)** rule alert, then compare with **1** and **3**.",
        "Pick two different positive traits plus a mild quirk to build an IGCSE **又……又…… + 有点儿** profile!",
      ]}
      caption={
        <div className="space-y-1.5">
          <div className="text-base font-bold text-ink">{fullH}</div>
          {showPinyin === "on" ? <div className="text-sm font-medium text-brand">{fullP}</div> : null}
          <div className="text-xs text-ink-2">{fullEn}</div>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
          {ANIMALS.map((a) => {
            const active = a.id === animal.id;
            return (
              <button
                key={a.id}
                type="button"
                onClick={() => setAnimalId(a.id)}
                className={`min-w-0 rounded-xl border px-2 py-2 text-center transition ${
                  active
                    ? "border-brand bg-brand-soft text-brand shadow-sm"
                    : "border-line bg-surface-2 text-ink hover:border-brand/50"
                }`}
              >
                <div className="text-xl" aria-hidden>{a.emoji}</div>
                <div className="truncate text-xs font-extrabold">{a.hanzi}</div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="min-w-0 space-y-3 rounded-xl border border-line bg-surface-2 p-3">
            <Stepper
              label="Quantity (数量)"
              value={count}
              min={1}
              max={6}
              onChange={setCount}
              format={(v) => `${v} (${COUNT_WORDS[v]?.h ?? v})`}
            />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wide text-ink-2">Pinyin Guide</span>
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
            <div className="space-y-2 pt-1">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Trait 1 (又…)</div>
              <Segmented
                label="First positive trait"
                value={trait1}
                onChange={setTrait1}
                options={POS_TRAITS.map((t) => ({ value: t.id, label: t.h }))}
              />
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Trait 2 (又…)</div>
              <Segmented
                label="Second positive trait"
                value={trait2}
                onChange={setTrait2}
                options={POS_TRAITS.map((t) => ({ value: t.id, label: t.h }))}
              />
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Mild Quirk (有点儿…)</div>
              <Segmented
                label="Mild quirk"
                value={quirkId}
                onChange={setQuirkId}
                options={QUIRKS.map((q) => ({ value: q.id, label: q.h }))}
              />
            </div>
          </div>

          <div className="min-w-0 space-y-3">
            <svg
              viewBox="0 0 360 190"
              className="h-auto w-full rounded-xl border border-line bg-surface"
              role="img"
              aria-label={`Measure word breakdown for ${nounPhraseH}`}
            >
              <rect x="10" y="10" width="340" height="170" rx="12" fill="var(--surface-2)" />
              <text x="180" y="34" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink-2)">
                Number + Measure Word + Pet
              </text>
              <rect x="22" y="48" width="90" height="72" rx="10" fill="var(--surface)" stroke={count === 2 ? "var(--good)" : "var(--line)"} strokeWidth="2" />
              <text x="67" y="84" textAnchor="middle" fontSize="28" fontWeight="800" fill={count === 2 ? "var(--good)" : "var(--ink)"}>
                {cnt.h}
              </text>
              <text x="67" y="108" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--ink-2)">
                {showPinyin === "on" ? yiTone : "Number"}
              </text>

              <rect x="128" y="48" width="90" height="72" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth="2" />
              <text x="173" y="84" textAnchor="middle" fontSize="28" fontWeight="800" fill="var(--brand)">
                {animal.mw}
              </text>
              <text x="173" y="108" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--brand)">
                {showPinyin === "on" ? animal.mwPinyin : "Measure Word"}
              </text>

              <rect x="234" y="48" width="104" height="72" rx="10" fill="var(--surface)" stroke="var(--line)" strokeWidth="2" />
              <text x="286" y="84" textAnchor="middle" fontSize="24" fontWeight="800" fill="var(--ink)">
                {animal.hanzi}
              </text>
              <text x="286" y="108" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--ink-2)">
                {showPinyin === "on" ? animal.pinyin : animal.en}
              </text>

              <rect x="22" y="132" width="316" height="36" rx="8" fill="var(--surface)" stroke="var(--line)" strokeWidth="1" />
              <text x="180" y="154" textAnchor="middle" fontSize="11" fontWeight="700" fill={count === 2 ? "var(--good)" : "var(--ink)"}>
                {count === 2 ? "✓ 2 before MW → 两 (liǎng), never 二!" : animal.reason}
              </text>
            </svg>

            <div className="grid grid-cols-2 gap-2">
              <Readout label="Exact Classifier" value={`${animal.mw} (${animal.mwPinyin})`} tone="brand" />
              <Readout label="Full Phrase" value={nounPhraseH} tone={count === 2 ? "good" : "ink"} />
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

interface CareSlot {
  id: string;
  label: string;
  timeH: string;
  timeP: string;
  hour: number;
  placeH: string;
  placeP: string;
  actionH: string;
  actionP: string;
  en: string;
}

const CARE_PROFILES: Record<string, { label: string; hanzi: string; pinyin: string; slots: CareSlot[] }> = {
  dog: {
    label: "🐶 小狗",
    hanzi: "小狗",
    pinyin: "xiǎogǒu",
    slots: [
      {
        id: "morn",
        label: "Morning Feed",
        timeH: "每天早上七点",
        timeP: "měitiān zǎoshang qī diǎn",
        hour: 7,
        placeH: "在厨房",
        placeP: "zài chúfáng",
        actionH: "给小狗喂狗粮",
        actionP: "gěi xiǎogǒu wèi gǒuliáng",
        en: "feed the puppy dog food in the kitchen at 7:00 a.m.",
      },
      {
        id: "aft",
        label: "After-School Play",
        timeH: "每天下午四点",
        timeP: "měitiān xiàwǔ sì diǎn",
        hour: 16,
        placeH: "在客厅",
        placeP: "zài kètīng",
        actionH: "陪小狗玩儿",
        actionP: "péi xiǎogǒu wánr",
        en: "play with the puppy in the living room at 4:00 p.m.",
      },
      {
        id: "eve",
        label: "Evening Walk",
        timeH: "每天晚上七点",
        timeP: "měitiān wǎnshang qī diǎn",
        hour: 19,
        placeH: "在公园里",
        placeP: "zài gōngyuán lǐ",
        actionH: "遛狗",
        actionP: "liù gǒu",
        en: "walk the dog in the park at 7:00 p.m.",
      },
      {
        id: "wknd",
        label: "Saturday Bath",
        timeH: "每个星期六上午十点",
        timeP: "měi ge xīngqīliù shàngwǔ shí diǎn",
        hour: 10,
        placeH: "在卫生间",
        placeP: "zài wèishēngjiān",
        actionH: "给小狗洗澡",
        actionP: "gěi xiǎogǒu xǐzǎo",
        en: "give the puppy a bath in the bathroom on Saturdays",
      },
    ],
  },
  cat: {
    label: "🐱 小猫",
    hanzi: "小猫",
    pinyin: "xiǎomāo",
    slots: [
      {
        id: "morn",
        label: "Morning Feed",
        timeH: "每天早上七点半",
        timeP: "měitiān zǎoshang qī diǎn bàn",
        hour: 7,
        placeH: "在阳台",
        placeP: "zài yángtái",
        actionH: "给小猫喂猫粮",
        actionP: "gěi xiǎomāo wèi māoliáng",
        en: "feed the kitten cat food on the balcony at 7:30 a.m.",
      },
      {
        id: "aft",
        label: "Brush Fur",
        timeH: "每天下午五点",
        timeP: "měitiān xiàwǔ wǔ diǎn",
        hour: 17,
        placeH: "在客厅",
        placeP: "zài kètīng",
        actionH: "给小猫梳毛",
        actionP: "gěi xiǎomāo shū máo",
        en: "brush the kitten’s fur in the living room at 5:00 p.m.",
      },
      {
        id: "eve",
        label: "Clean Litter",
        timeH: "每天晚上八点",
        timeP: "měitiān wǎnshang bā diǎn",
        hour: 20,
        placeH: "在卫生间",
        placeP: "zài wèishēngjiān",
        actionH: "清理猫砂盆",
        actionP: "qīnglǐ māoshāpén",
        en: "clean the litter tray in the bathroom at 8:00 p.m.",
      },
      {
        id: "wknd",
        label: "Vet Check",
        timeH: "每年春天",
        timeP: "měinián chūntiān",
        hour: 11,
        placeH: "去兽医诊所",
        placeP: "qù shòuyī zhěnsuǒ",
        actionH: "带小猫看兽医打针",
        actionP: "dài xiǎomāo kàn shòuyī dǎzhēn",
        en: "take the kitten to the vet clinic for a vaccination each spring",
      },
    ],
  },
  goldfish: {
    label: "🐠 金鱼",
    hanzi: "金鱼",
    pinyin: "jīnyú",
    slots: [
      {
        id: "morn",
        label: "Morning Feed",
        timeH: "每天早上八点",
        timeP: "měitiān zǎoshang bā diǎn",
        hour: 8,
        placeH: "在客厅",
        placeP: "zài kètīng",
        actionH: "给金鱼喂鱼食",
        actionP: "gěi jīnyú wèi yúshí",
        en: "feed the goldfish fish food in the living room at 8:00 a.m.",
      },
      {
        id: "aft",
        label: "Watch & Relax",
        timeH: "每天放学后",
        timeP: "měitiān fàngxué hòu",
        hour: 16,
        placeH: "在鱼缸旁边",
        placeP: "zài yúgāng pángbiān",
        actionH: "看金鱼游泳",
        actionP: "kàn jīnyú yóuyǒng",
        en: "watch the goldfish swim beside the fish tank after school",
      },
      {
        id: "eve",
        label: "Check Tank",
        timeH: "每天晚上九点",
        timeP: "měitiān wǎnshang jiǔ diǎn",
        hour: 21,
        placeH: "在客厅里",
        placeP: "zài kètīng lǐ",
        actionH: "检查鱼缸的灯",
        actionP: "jiǎnchá yúgāng de dēng",
        en: "check the fish tank light in the living room at 9:00 p.m.",
      },
      {
        id: "wknd",
        label: "Change Water",
        timeH: "每个星期天上午",
        timeP: "měi ge xīngqītiān shàngwǔ",
        hour: 10,
        placeH: "在客厅",
        placeP: "zài kètīng",
        actionH: "给鱼缸换水",
        actionP: "gěi yúgāng huàn shuǐ",
        en: "change the fish tank water every Sunday morning",
      },
    ],
  },
};

function PetCareRoutineWidget() {
  const [petKey, setPetKey] = useState<"dog" | "cat" | "goldfish">("dog");
  const [slotIdx, setSlotIdx] = useState<number>(2);
  const [minutes, setMinutes] = useState<number>(30);

  const profile = CARE_PROFILES[petKey];
  const slot = profile.slots[slotIdx] ?? profile.slots[0];

  const stpvoH = `我${slot.timeH}${slot.placeH}${slot.actionH}。`;
  const stpvoP = `Wǒ ${slot.timeP} ${slot.placeP} ${slot.actionP}.`;
  const verdictH = `虽然每天花${minutes}分钟照顾${profile.hanzi}有点儿累，但是它给我们带来了很多快乐！`;
  const verdictP = `Suīrán měitiān huā ${minutes} fēnzhōng zhàogù ${profile.pinyin} yǒudiǎnr lèi, dànshì tā gěi wǒmen dàilái le hěn duō kuàilè!`;

  return (
    <WidgetFrame
      title="Daily Pet Care STPVO Builder (照顾宠物日程与语序生成器)"
      tryThis={[
        "Click different time slots along the day and inspect the colour-coded **S → T → P → V+O** blocks.",
        "Switch from **小狗** to **金鱼** to see how care verbs change (**遛狗 / 给小狗洗澡** → **给鱼缸换水**).",
        "Adjust the daily care minutes slider to generate a live **虽然……，但是……** balanced reflection!",
      ]}
      caption={
        <div className="space-y-2">
          <div>
            <div className="text-base font-bold text-ink">{stpvoH}</div>
            <div className="text-xs font-medium text-brand">{stpvoP}</div>
            <div className="text-xs text-ink-2">I {slot.en}.</div>
          </div>
          <div className="border-t border-line pt-2">
            <div className="text-sm font-bold text-ink">{verdictH}</div>
            <div className="text-xs text-ink-2">{verdictP}</div>
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Select pet type"
            value={petKey}
            onChange={(v) => {
              setPetKey(v);
              setSlotIdx(0);
            }}
            options={[
              { value: "dog", label: "🐶 小狗" },
              { value: "cat", label: "🐱 小猫" },
              { value: "goldfish", label: "🐠 金鱼" },
            ]}
          />
          <div className="min-w-[180px] flex-1 sm:max-w-xs">
            <Slider
              label="Daily care time (每天照顾)"
              value={minutes}
              min={10}
              max={60}
              step={5}
              onChange={setMinutes}
              format={(v) => `${v} 分钟`}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {profile.slots.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSlotIdx(i)}
              className={`min-w-0 rounded-xl border px-3 py-2 text-left transition ${
                i === slotIdx
                  ? "border-brand bg-brand-soft text-brand shadow-sm"
                  : "border-line bg-surface-2 text-ink hover:border-brand/40"
              }`}
            >
              <div className="text-xs font-extrabold">{s.label}</div>
              <div className="truncate text-xs text-ink-2">{s.actionH}</div>
            </button>
          ))}
        </div>

        <svg
          viewBox="0 0 540 120"
          className="h-auto w-full rounded-xl border border-line bg-surface"
          role="img"
          aria-label="STPVO sentence order blocks for pet care"
        >
          <rect x="8" y="14" width="66" height="90" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth="1.5" />
          <text x="41" y="34" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--brand)">S</text>
          <text x="41" y="64" textAnchor="middle" fontSize="18" fontWeight="800" fill="var(--ink)">我</text>
          <text x="41" y="88" textAnchor="middle" fontSize="10" fill="var(--ink-2)">Subject</text>

          <rect x="84" y="14" width="152" height="90" rx="10" fill="var(--surface-2)" stroke="var(--line)" strokeWidth="1.5" />
          <text x="160" y="34" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--brand)">T · Time</text>
          <text x="160" y="64" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--ink)">{slot.timeH}</text>
          <text x="160" y="88" textAnchor="middle" fontSize="10" fill="var(--ink-2)">Before verb!</text>

          <rect x="246" y="14" width="122" height="90" rx="10" fill="var(--surface-2)" stroke="var(--line)" strokeWidth="1.5" />
          <text x="307" y="34" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--brand)">P · Place</text>
          <text x="307" y="64" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--ink)">{slot.placeH}</text>
          <text x="307" y="88" textAnchor="middle" fontSize="10" fill="var(--ink-2)">Before verb!</text>

          <rect x="378" y="14" width="154" height="90" rx="10" fill="var(--brand-soft)" stroke="var(--good)" strokeWidth="1.5" />
          <text x="455" y="34" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--good)">V + O · Care Action</text>
          <text x="455" y="64" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--ink)">{slot.actionH}</text>
          <text x="455" y="88" textAnchor="middle" fontSize="10" fill="var(--ink-2)">{slot.label}</text>
        </svg>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "pets-measure-profile",
    title: "Pet Profile & Measure-Word Lab",
    blurb: "Test 只 / 条 / 匹 and the 两 rule live while assembling an IGCSE pet profile.",
    Component: PetMeasureProfileWidget,
  },
  {
    id: "pets-care-routine",
    title: "Daily Pet Care STPVO Builder",
    blurb: "Build pet-care sentences in strict STPVO order with a balanced 虽然……但是…… reflection.",
    Component: PetCareRoutineWidget,
  },
];
