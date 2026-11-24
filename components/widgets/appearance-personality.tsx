"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type HairKey = "short" | "long" | "curly";
type OutfitKey = "shirt" | "jacket" | "sweater" | "uniform";
type AccessoryKey = "glasses" | "hat" | "scarf" | "watch";
type TraitPreset = "smart-funny" | "diligent-patient" | "mixed-shy";

const HAIR_MAP: Record<HairKey, { label: string; cn: string; py: string; en: string }> = {
  short: { label: "Short (短发)", cn: "黑色的短发", py: "hēisè de duǎnfà", en: "short black hair" },
  long: { label: "Long Straight (长直发)", cn: "黑色的长直发", py: "hēisè de cháng zhífà", en: "long straight black hair" },
  curly: { label: "Curly (卷发)", cn: "棕色的卷发", py: "zōngsè de juǎnfà", en: "curly brown hair" },
};

const OUTFIT_MAP: Record<OutfitKey, { label: string; cn: string; py: string; en: string; fill: string }> = {
  shirt: { label: "White Shirt (衬衫)", cn: "一件白色衬衫", py: "yí jiàn báisè chènshān", en: "a white shirt", fill: "#f8fafc" },
  jacket: { label: "Blue Jacket (外套)", cn: "一件蓝色外套", py: "yí jiàn lánsè wàitào", en: "a blue jacket", fill: "#3b82f6" },
  sweater: { label: "Red Sweater (毛衣)", cn: "一件红色毛衣", py: "yí jiàn hóngsè máoyī", en: "a red sweater", fill: "#ef4444" },
  uniform: { label: "School Uniform (校服)", cn: "一套整洁的校服", py: "yí tào zhěngjié de xiàofú", en: "a neat school uniform", fill: "#1e3a8a" },
};

const ACC_MAP: Record<AccessoryKey, { label: string; cn: string; py: string; en: string; mwNote: string }> = {
  glasses: { label: "Glasses (眼镜)", cn: "一副黑框眼镜", py: "yí fù hēikuàng yǎnjìng", en: "black-framed glasses", mwNote: "副 (fù) · 戴" },
  hat: { label: "Blue Hat (帽子)", cn: "一顶蓝色帽子", py: "yì dǐng lánsè màozi", en: "a blue hat", mwNote: "顶 (dǐng) · 戴" },
  scarf: { label: "Red Scarf (围巾)", cn: "一条红色围巾", py: "yì tiáo hóngsè wéijīn", en: "a red scarf", mwNote: "条 (tiáo) · 戴" },
  watch: { label: "Silver Watch (手表)", cn: "一块银色手表", py: "yí kuài yínsè shǒubiǎo", en: "a silver watch", mwNote: "块 (kuài) · 戴" },
};

const TRAIT_MAP: Record<TraitPreset, { label: string; cn: string; py: string; rule: string }> = {
  "smart-funny": {
    label: "Clever + Funny (+/+)",
    cn: "TA又聪明又幽默。",
    py: "Tā yòu cōngmíng yòu yōumò.",
    rule: "Same polarity (+/+) → 又…又… (no 很!)",
  },
  "diligent-patient": {
    label: "Diligent + Patient (+/+)",
    cn: "TA又认真又有耐心。",
    py: "Tā yòu rènzhēn yòu yǒu nàixīn.",
    rule: "Same polarity (+/+) → 又…又…",
  },
  "mixed-shy": {
    label: "Clever + Bit Shy (+/−)",
    cn: "TA虽然很聪明，但是有点儿害羞。",
    py: "Tā suīrán hěn cōngmíng, dànshì yǒudiǎnr hàixiū.",
    rule: "Mixed polarity (+/−) → 虽然…但是有点儿…!",
  },
};

function AvatarBuilder() {
  const [hair, setHair] = useState<HairKey>("long");
  const [outfit, setOutfit] = useState<OutfitKey>("jacket");
  const [acc, setAcc] = useState<AccessoryKey>("glasses");
  const [trait, setTrait] = useState<TraitPreset>("smart-funny");

  const h = HAIR_MAP[hair];
  const o = OUTFIT_MAP[outfit];
  const a = ACC_MAP[acc];
  const t = TRAIT_MAP[trait];

  const hairFill = hair === "curly" ? "#78350f" : "#1f2937";

  return (
    <WidgetFrame
      title="Appearance & 穿 vs 戴 Avatar Builder (外貌与穿着)"
      tryThis={[
        "Swap accessories (**眼镜 / 帽子 / 围巾 / 手表**) and notice the verb stays **戴着**, while the classifier switches between **副 / 顶 / 条 / 块**!",
        "Switch personality to **Clever + Bit Shy (+/−)** to see **又…又…** automatically upgrade into **虽然…但是有点儿…**.",
      ]}
      caption={
        <div className="space-y-1.5">
          <div className="font-bold text-ink">
            照片里的朋友留着{h.cn}，长着大眼睛，穿着{o.cn}，戴着{a.cn}。{t.cn}
          </div>
          <div className="text-xs text-ink-2">
            Zhàopiàn lǐ de péngyou liúzhe {h.py}, zhǎngzhe dà yǎnjing, chuānzhe {o.py}, dàizhe {a.py}. {t.py}
          </div>
          <div className="text-xs text-ink-2">
            <strong>Grammar spotlight:</strong> Hair = <strong>留着</strong> · Clothes = <strong>穿着</strong> · Accessory = <strong>戴着</strong> ({a.mwNote}) · {t.rule}
          </div>
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="min-w-0 flex flex-col items-center justify-center rounded-xl border border-line bg-surface-2 p-3">
          <svg
            viewBox="0 0 240 245"
            className="w-full max-w-[230px] h-auto"
            role="img"
            aria-label="Live customizable Mandarin avatar showing hair, clothes, and accessories"
          >
            {/* Back hair for long / curly */}
            {hair === "long" ? (
              <path d="M 68 85 C 62 145, 65 182, 78 192 L 162 192 C 175 182, 178 145, 172 85 Z" fill={hairFill} />
            ) : null}
            {hair === "curly" ? (
              <g fill={hairFill}>
                <circle cx="72" cy="95" r="18" />
                <circle cx="68" cy="122" r="17" />
                <circle cx="74" cy="148" r="15" />
                <circle cx="168" cy="95" r="18" />
                <circle cx="172" cy="122" r="17" />
                <circle cx="166" cy="148" r="15" />
              </g>
            ) : null}

            {/* Shoulders & outfit (穿) */}
            <path
              d="M 46 238 C 48 186, 78 164, 120 164 C 162 164, 192 186, 194 238 Z"
              fill={o.fill}
              stroke="var(--ink)"
              strokeWidth={2}
            />
            {outfit === "shirt" || outfit === "uniform" ? (
              <path d="M 102 164 L 120 186 L 138 164" fill="none" stroke="var(--ink)" strokeWidth={2} />
            ) : null}
            {outfit === "uniform" ? (
              <path d="M 120 186 L 114 222 L 120 232 L 126 222 Z" fill="#dc2626" />
            ) : null}

            {/* Neck & Face */}
            <rect x="108" y="142" width="24" height="26" rx="8" fill="#fde68a" stroke="var(--ink)" strokeWidth={1.5} />
            <circle cx="120" cy="102" r="46" fill="#fde68a" stroke="var(--ink)" strokeWidth={2} />

            {/* Top Hair */}
            {hair === "short" ? (
              <path d="M 74 96 C 74 52, 166 52, 166 96 C 152 76, 134 74, 120 74 C 106 74, 88 76, 74 96 Z" fill={hairFill} />
            ) : hair === "long" ? (
              <path d="M 74 98 C 74 48, 166 48, 166 98 C 154 74, 138 70, 120 70 C 102 70, 86 74, 74 98 Z" fill={hairFill} />
            ) : (
              <g fill={hairFill}>
                <circle cx="88" cy="68" r="17" />
                <circle cx="110" cy="58" r="18" />
                <circle cx="132" cy="58" r="18" />
                <circle cx="152" cy="68" r="17" />
              </g>
            )}

            {/* Eyes (眼睛 — 长着), nose, smile */}
            <circle cx="103" cy="102" r="5" fill="#111827" />
            <circle cx="137" cy="102" r="5" fill="#111827" />
            <circle cx="105" cy="100" r="1.5" fill="#ffffff" />
            <circle cx="139" cy="100" r="1.5" fill="#ffffff" />
            <path d="M 120 106 L 117 116 L 123 116" fill="none" stroke="#92400e" strokeWidth={1.6} />
            <path d="M 107 127 Q 120 137 133 127" fill="none" stroke="#991b1b" strokeWidth={2.2} strokeLinecap="round" />

            {/* Accessories (戴) */}
            {acc === "glasses" ? (
              <g fill="none" stroke="#111827" strokeWidth={2.6}>
                <rect x="86" y="92" width="30" height="20" rx="5" fill="rgba(255,255,255,0.28)" />
                <rect x="124" y="92" width="30" height="20" rx="5" fill="rgba(255,255,255,0.28)" />
                <line x1="116" y1="102" x2="124" y2="102" />
              </g>
            ) : null}
            {acc === "hat" ? (
              <g>
                <path d="M 72 68 C 76 34, 164 34, 168 68 Z" fill="#2563eb" stroke="var(--ink)" strokeWidth={1.8} />
                <rect x="64" y="64" width="112" height="10" rx="5" fill="#1d4ed8" stroke="var(--ink)" strokeWidth={1.5} />
              </g>
            ) : null}
            {acc === "scarf" ? (
              <g>
                <rect x="84" y="152" width="72" height="20" rx="9" fill="#dc2626" stroke="var(--ink)" strokeWidth={1.6} />
                <rect x="132" y="168" width="18" height="46" rx="5" fill="#b91c1c" stroke="var(--ink)" strokeWidth={1.5} />
              </g>
            ) : null}
            {acc === "watch" ? (
              <g>
                <rect x="174" y="200" width="26" height="32" rx="10" fill="#fde68a" stroke="var(--ink)" strokeWidth={1.5} />
                <rect x="172" y="208" width="30" height="12" rx="3" fill="#94a3b8" stroke="var(--ink)" strokeWidth={1.4} />
                <circle cx="187" cy="214" r="7" fill="#e2e8f0" stroke="var(--ink)" strokeWidth={1.4} />
                <line x1="187" y1="214" x2="187" y2="210" stroke="var(--ink)" strokeWidth={1.4} />
                <line x1="187" y1="214" x2="191" y2="214" stroke="var(--ink)" strokeWidth={1.4} />
              </g>
            ) : null}
          </svg>
          <div className="mt-2 grid w-full grid-cols-2 gap-2">
            <Readout label="Clothes Verb" value="穿着 (chuānzhe)" tone="brand" />
            <Readout label="Accessory Verb" value="戴着 (dàizhe)" tone="good" />
          </div>
        </div>

        <div className="min-w-0 space-y-3">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Hair (留着 liúzhe)</div>
            <Segmented
              label="Hairstyle"
              value={hair}
              onChange={setHair}
              options={(Object.keys(HAIR_MAP) as HairKey[]).map((k) => ({ value: k, label: HAIR_MAP[k].label }))}
            />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Clothes (穿着 chuānzhe)</div>
            <Segmented
              label="Outfit"
              value={outfit}
              onChange={setOutfit}
              options={(Object.keys(OUTFIT_MAP) as OutfitKey[]).map((k) => ({ value: k, label: OUTFIT_MAP[k].label }))}
            />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">3. Accessory (戴着 dàizhe)</div>
            <Segmented
              label="Accessory"
              value={acc}
              onChange={setAcc}
              options={(Object.keys(ACC_MAP) as AccessoryKey[]).map((k) => ({ value: k, label: ACC_MAP[k].label }))}
            />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">4. Personality (性格)</div>
            <Segmented
              label="Personality"
              value={trait}
              onChange={setTrait}
              options={(Object.keys(TRAIT_MAP) as TraitPreset[]).map((k) => ({ value: k, label: TRAIT_MAP[k].label }))}
            />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

type CmpMode = "height" | "age" | "diligence";

function numToCn(n: number): string {
  const d = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  if (n <= 10) return d[n];
  if (n < 20) return `十${d[n - 10]}`;
  const tens = Math.floor(n / 10);
  const ones = n % 10;
  return `${d[tens]}十${ones ? d[ones] : ""}`;
}

function ComparisonLab() {
  const [mode, setMode] = useState<CmpMode>("height");
  const [valA, setValA] = useState<number>(175);
  const [valB, setValB] = useState<number>(168);

  const handleModeChange = (next: CmpMode) => {
    setMode(next);
    if (next === "height") {
      setValA(175);
      setValB(168);
    } else if (next === "age") {
      setValA(17);
      setValB(14);
    } else {
      setValA(9);
      setValB(6);
    }
  };

  const cfg =
    mode === "height"
      ? { min: 145, max: 190, unit: "cm", adj: "高", unitCn: "厘米", nameA: "表哥", nameB: "我" }
      : mode === "age"
        ? { min: 10, max: 24, unit: "yrs", adj: "大", unitCn: "岁", nameA: "表姐", nameB: "我" }
        : { min: 1, max: 10, unit: "/10", adj: "认真", unitCn: "", nameA: "堂姐", nameB: "弟弟" };

  const diff = valA - valB;
  const absDiff = Math.abs(diff);

  let primaryCn = "";
  let mirrorCn = "";
  let degreeLabel = "";

  if (diff === 0) {
    primaryCn = `${cfg.nameA}和${cfg.nameB}一样${cfg.adj}。`;
    mirrorCn = `${cfg.nameB}跟${cfg.nameA}一样${cfg.adj}。`;
    degreeLabel = "Exact Equality (一样)";
  } else {
    const bigger = diff > 0 ? cfg.nameA : cfg.nameB;
    const smaller = diff > 0 ? cfg.nameB : cfg.nameA;
    if (mode === "diligence") {
      const suffix = absDiff <= 2 ? "一点儿" : "得多";
      primaryCn = `${bigger}比${smaller}${cfg.adj}${suffix}。`;
      mirrorCn = `${smaller}没有${bigger}那么${cfg.adj}。`;
      degreeLabel = absDiff <= 2 ? "Small gap (Adj + 一点儿)" : "Big gap (Adj + 得多)";
    } else {
      const gapCn = absDiff === 2 ? "两" : numToCn(absDiff);
      const degHint = absDiff <= 3 ? "一点儿" : "得多";
      primaryCn = `${bigger}比${smaller}${cfg.adj}${gapCn}${cfg.unitCn}。`;
      mirrorCn = `${smaller}没有${bigger}那么${cfg.adj}。`;
      degreeLabel = `Exact gap (${cfg.adj}${gapCn}${cfg.unitCn}) or ${cfg.adj}${degHint}`;
    }
  }

  const normA = ((valA - cfg.min) / (cfg.max - cfg.min)) * 100 + 25;
  const normB = ((valB - cfg.min) / (cfg.max - cfg.min)) * 100 + 25;

  return (
    <WidgetFrame
      title="比 (bǐ) · 没有 (méiyǒu) · 跟…一样 Comparison Lab"
      tryThis={[
        "Slide **A** and **B** to the exact same value to trigger **和/跟…一样**!",
        "Make **A** slightly bigger vs much bigger to see **一点儿** switch to **得多** (and NEVER **很**!).",
        "Watch how **没有** automatically flips the two names compared to **比**!",
      ]}
      caption={
        <div className="space-y-1.5">
          <div className="font-bold text-ink">
            Rule check: {diff === 0 ? "Do NOT add 很 after 一样 (一样高 ✓, 一样很高 ✗)!" : `NEVER write ${diff > 0 ? cfg.nameA : cfg.nameB}比${diff > 0 ? cfg.nameB : cfg.nameA}很${cfg.adj} — put degree or measurement AFTER ${cfg.adj}!`}
          </div>
          <div className="text-xs text-ink-2">{degreeLabel}</div>
        </div>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Comparison dimension"
          value={mode}
          onChange={handleModeChange}
          options={[
            { value: "height", label: "Height 身高 (高)" },
            { value: "age", label: "Age 年龄 (大)" },
            { value: "diligence", label: "Diligence 性格 (认真)" },
          ]}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="min-w-0 space-y-3 rounded-xl border border-line bg-surface-2 p-3">
            <Slider
              label={`${cfg.nameA} (${mode})`}
              value={valA}
              min={cfg.min}
              max={cfg.max}
              onChange={setValA}
              format={(v) => `${v} ${cfg.unit}`}
            />
            <Slider
              label={`${cfg.nameB} (${mode})`}
              value={valB}
              min={cfg.min}
              max={cfg.max}
              onChange={setValB}
              format={(v) => `${v} ${cfg.unit}`}
            />

            <svg
              viewBox="0 0 260 140"
              className="w-full h-auto rounded-lg bg-surface p-1"
              role="img"
              aria-label="Bar chart comparing person A and person B"
            >
              <line x1="20" y1="120" x2="240" y2="120" stroke="var(--line)" strokeWidth={1.5} />
              <rect
                x="56"
                y={120 - normA * 0.78}
                width="54"
                height={normA * 0.78}
                rx={6}
                fill="var(--brand-soft)"
                stroke="var(--brand)"
                strokeWidth={2}
              />
              <text x="83" y={114 - normA * 0.78} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--brand)">
                {valA}
              </text>
              <text x="83" y="135" textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--ink)">
                {cfg.nameA}
              </text>

              <rect
                x="150"
                y={120 - normB * 0.78}
                width="54"
                height={normB * 0.78}
                rx={6}
                fill="var(--surface-2)"
                stroke="var(--good)"
                strokeWidth={2}
              />
              <text x="177" y={114 - normB * 0.78} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--good)">
                {valB}
              </text>
              <text x="177" y="135" textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--ink)">
                {cfg.nameB}
              </text>
            </svg>
          </div>

          <div className="min-w-0 grid grid-cols-1 gap-2.5 content-start">
            <Readout
              label={diff === 0 ? "Equality (和…一样)" : "Superiority (比 bǐ)"}
              value={primaryCn}
              tone="brand"
            />
            <Readout
              label={diff === 0 ? "Symmetric Form (跟…一样)" : "Flipped Negative (没有 méiyǒu)"}
              value={mirrorCn}
              tone="good"
            />
            <Readout
              label="Banned Error to Avoid"
              value={diff === 0 ? `✗ ${cfg.nameA}和${cfg.nameB}一样很${cfg.adj}` : `✗ ${diff > 0 ? cfg.nameA : cfg.nameB}比${diff > 0 ? cfg.nameB : cfg.nameA}很${cfg.adj}`}
              tone="bad"
            />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "appearance-avatar-builder",
    title: "Appearance & 穿 vs 戴 Avatar Builder",
    blurb: "Customise hairstyle (留着), outfit (穿着), accessory (戴着), and personality (又…又… vs 虽然…但是有点儿…) to generate live IGCSE portrait descriptions.",
    Component: AvatarBuilder,
  },
  {
    id: "appearance-comparison-lab",
    title: "比 / 没有 / 跟…一样 Comparison Lab",
    blurb: "Slide height, age, or personality bars to see 比, 没有, and 跟…一样 update live — and spot why 很 is banned after 比.",
    Component: ComparisonLab,
  },
];
