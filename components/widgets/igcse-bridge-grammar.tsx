"use client";

import { useState } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

type OrderMode = "stpvo" | "tspvo" | "englishTrap";

const SUBJ_OPTS = [
  { id: "wo", cn: "我", py: "Wǒ", pyMid: "wǒ", en: "I" },
  { id: "jiejie", cn: "姐姐", py: "Jiějie", pyMid: "jiějie", en: "My older sister" },
  { id: "tongxue", cn: "我和同学", py: "Wǒ hé tóngxué", pyMid: "wǒ hé tóngxué", en: "My classmates and I" },
  { id: "baba", cn: "爸爸", py: "Bàba", pyMid: "bàba", en: "Dad" },
] as const;

const TIME_OPTS = [
  { id: "past1", cn: "昨天下午", py: "Zuótiān xiàwǔ", pyMid: "zuótiān xiàwǔ", en: "yesterday afternoon", frame: "past" as const },
  { id: "past2", cn: "上个周末", py: "Shàng gè zhōumò", pyMid: "shàng gè zhōumò", en: "last weekend", frame: "past" as const },
  { id: "now", cn: "现在", py: "Xiànzài", pyMid: "xiànzài", en: "right now", frame: "now" as const },
  { id: "future", cn: "明天下午", py: "Míngtiān xiàwǔ", pyMid: "míngtiān xiàwǔ", en: "tomorrow afternoon", frame: "future" as const },
] as const;

const SCENE_OPTS = [
  {
    id: "lib",
    place: "在图书馆",
    placePy: "zài túshūguǎn",
    placeEn: "in the library",
    verb: "看",
    verbPy: "kàn",
    obj: "中文书",
    objPy: "Zhōngwén shū",
    enPast: "read Chinese books",
    enNow: "reading Chinese books",
    enFut: "read Chinese books",
  },
  {
    id: "gym",
    place: "在体育馆",
    placePy: "zài tǐyùguǎn",
    placeEn: "in the sports hall",
    verb: "打",
    verbPy: "dǎ",
    obj: "羽毛球",
    objPy: "yǔmáoqiú",
    enPast: "played badminton",
    enNow: "playing badminton",
    enFut: "play badminton",
  },
  {
    id: "living",
    place: "在客厅里",
    placePy: "zài kètīng lǐ",
    placeEn: "in the living room",
    verb: "弹",
    verbPy: "tán",
    obj: "钢琴",
    objPy: "gāngqín",
    enPast: "played the piano",
    enNow: "playing the piano",
    enFut: "play the piano",
  },
  {
    id: "park",
    place: "在公园里",
    placePy: "zài gōngyuán lǐ",
    placeEn: "in the park",
    verb: "骑",
    verbPy: "qí",
    obj: "自行车",
    objPy: "zìxíngchē",
    enPast: "rode a bicycle",
    enNow: "riding a bicycle",
    enFut: "ride a bicycle",
  },
] as const;

function StpvoOrderWorkshop() {
  const [subjId, setSubjId] = useState<string>("wo");
  const [timeId, setTimeId] = useState<string>("past1");
  const [sceneId, setSceneId] = useState<string>("lib");
  const [mode, setMode] = useState<OrderMode>("stpvo");

  const s = SUBJ_OPTS.find((x) => x.id === subjId) ?? SUBJ_OPTS[0];
  const t = TIME_OPTS.find((x) => x.id === timeId) ?? TIME_OPTS[0];
  const sc = SCENE_OPTS.find((x) => x.id === sceneId) ?? SCENE_OPTS[0];

  const verbChunk =
    t.frame === "past"
      ? { cn: `${sc.verb}了`, py: `${sc.verbPy}le`, objCn: sc.obj, objPy: sc.objPy }
      : t.frame === "now"
        ? { cn: `正在${sc.verb}`, py: `zhèngzài ${sc.verbPy}`, objCn: `${sc.obj}呢`, objPy: `${sc.objPy} ne` }
        : { cn: `打算${sc.verb}`, py: `dǎsuàn ${sc.verbPy}`, objCn: sc.obj, objPy: sc.objPy };

  const placeSlot = t.frame === "now" ? { cn: sc.place, py: sc.placePy } : { cn: sc.place, py: sc.placePy };
  const slots =
    mode === "stpvo"
      ? [
          { code: "S", label: "Subject", cn: s.cn, py: s.py, accent: false },
          { code: "T", label: "Time", cn: t.cn, py: t.pyMid, accent: true },
          { code: "P", label: "Place", cn: placeSlot.cn, py: placeSlot.py, accent: true },
          { code: "V", label: "Verb", cn: verbChunk.cn, py: verbChunk.py, accent: false },
          { code: "O", label: "Object", cn: verbChunk.objCn, py: verbChunk.objPy, accent: false },
        ]
      : mode === "tspvo"
        ? [
            { code: "T", label: "Time", cn: `${t.cn}，`, py: `${t.py},`, accent: true },
            { code: "S", label: "Subject", cn: s.cn, py: s.pyMid, accent: false },
            { code: "P", label: "Place", cn: placeSlot.cn, py: placeSlot.py, accent: true },
            { code: "V", label: "Verb", cn: verbChunk.cn, py: verbChunk.py, accent: false },
            { code: "O", label: "Object", cn: verbChunk.objCn, py: verbChunk.objPy, accent: false },
          ]
        : [
            { code: "S", label: "Subject", cn: s.cn, py: s.py, accent: false },
            { code: "V", label: "Verb", cn: verbChunk.cn, py: verbChunk.py, accent: false },
            { code: "O", label: "Object", cn: verbChunk.objCn, py: verbChunk.objPy, accent: false },
            { code: "P", label: "Place ✗", cn: placeSlot.cn, py: placeSlot.py, accent: true },
            { code: "T", label: "Time ✗", cn: t.cn, py: t.pyMid, accent: true },
          ];

  const isLegal = mode !== "englishTrap";
  const sentenceCn = slots.map((x) => x.cn).join("") + "。";
  const sentencePy = slots.map((x) => x.py).join(" ") + ".";
  const englishLine =
    t.frame === "past"
      ? `${s.en} ${sc.enPast} ${sc.placeEn} ${t.en}.`
      : t.frame === "now"
        ? `${s.en} ${s.id === "wo" ? "am" : s.id === "tongxue" ? "are" : "is"} ${sc.enNow} ${sc.placeEn} ${t.en}.`
        : `${s.en} ${s.id === "wo" || s.id === "tongxue" ? "plan" : "plans"} to ${sc.enFut} ${sc.placeEn} ${t.en}.`;

  return (
    <WidgetFrame
      title="STPVO Sentence Order Workshop (汉语语序工坊)"
      tryThis={[
        "Toggle from **Mandarin STPVO (✅)** to **English SVOPT Trap (❌)** and watch Time and Place jump illegally behind the verb!",
        "Switch Time from `昨天下午` to `现在` and `明天下午` — notice how the verb marker shifts automatically between `了`, `正在…呢`, and `打算`.",
      ]}
      caption={
        isLegal ? (
          <div>
            <strong className="text-good">✅ Natural Mandarin ({mode.toUpperCase()}):</strong> Both{" "}
            <strong>Time ({t.cn})</strong> and <strong>Place ({sc.place})</strong> set the scene <em>before</em> the
            verb <strong>{verbChunk.cn}</strong>.
          </div>
        ) : (
          <div>
            <strong className="text-bad">❌ English Word-Order Calque (SVOPT):</strong> Putting{" "}
            <strong>{sc.place}</strong> and <strong>{t.cn}</strong> after the verb sounds broken in Chinese. Switch back
            to <strong>STPVO</strong> or <strong>TSPVO</strong>!
          </div>
        )
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Subject (主语 S)</div>
            <Segmented
              label="Subject"
              value={subjId}
              onChange={setSubjId}
              options={SUBJ_OPTS.map((x) => ({ value: x.id, label: x.cn }))}
            />
          </div>
          <div className="space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Time (时间 T)</div>
            <Segmented
              label="Time"
              value={timeId}
              onChange={setTimeId}
              options={TIME_OPTS.map((x) => ({ value: x.id, label: x.cn }))}
            />
          </div>
          <div className="space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Place + Action (地点 P + 动作 VO)</div>
            <Segmented
              label="Scene"
              value={sceneId}
              onChange={setSceneId}
              options={SCENE_OPTS.map((x) => ({ value: x.id, label: x.place.replace("在", "") }))}
            />
          </div>
          <div className="space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Word Order Mode</div>
            <Segmented
              label="Word order mode"
              value={mode}
              onChange={setMode}
              options={[
                { value: "stpvo", label: "STPVO ✅" },
                { value: "tspvo", label: "TSPVO ✅" },
                { value: "englishTrap", label: "SVOPT ❌" },
              ]}
            />
          </div>
        </div>

        <svg
          viewBox="0 0 560 112"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={`Word order blocks in ${mode} arrangement`}
          className="w-full h-auto rounded-xl border border-line bg-surface"
        >
          <rect x="0" y="0" width="560" height="112" rx="12" fill="var(--surface)" />
          {slots.map((slot, idx) => {
            const x = 14 + idx * 108;
            const fill = slot.accent
              ? isLegal
                ? "var(--brand-soft)"
                : "var(--bad-soft)"
              : "var(--surface-2)";
            const stroke = slot.accent ? (isLegal ? "var(--brand)" : "var(--bad)") : "var(--line)";
            const labelFill = slot.accent ? (isLegal ? "var(--brand)" : "var(--bad)") : "var(--ink-2)";
            return (
              <g key={`${slot.code}-${idx}`}>
                <rect x={x} y={16} width={100} height={80} rx={10} fill={fill} stroke={stroke} strokeWidth={1.6} />
                <text x={x + 50} y={35} textAnchor="middle" fontSize="11" fontWeight="800" fill={labelFill}>
                  {slot.code} · {slot.label}
                </text>
                <text x={x + 50} y={62} textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--ink)">
                  {slot.cn}
                </text>
                <text x={x + 50} y={84} textAnchor="middle" fontSize="9.5" fill="var(--ink-2)">
                  {slot.py}
                </text>
              </g>
            );
          })}
        </svg>

        <div
          className={`rounded-xl border p-3.5 ${
            isLegal ? "border-good bg-good-soft/40" : "border-bad bg-bad-soft/40"
          }`}
        >
          <div className="text-lg font-extrabold text-ink">
            {isLegal ? "✅ " : "❌ *"}
            {sentenceCn}
            {isLegal ? "" : "*"}
          </div>
          <div className="mt-1 text-sm font-semibold text-ink-2">{sentencePy}</div>
          <div className="mt-0.5 text-xs text-ink-2">English meaning: {englishLine}</div>
        </div>
      </div>
    </WidgetFrame>
  );
}

type AspectId = "le" | "guo" | "zhengzai" | "dasuan";
type ConnId = "yinwei" | "suiran" | "budan" | "ruguo" | "yibian";

const ASPECT_ACTIONS = [
  {
    id: "beijing",
    label: "去北京",
    lePos: { cn: "去年我去了北京。", py: "Qùnián wǒ qùle Běijīng.", en: "Last year I went to Beijing." },
    leNeg: { cn: "去年我没去北京。", py: "Qùnián wǒ méi qù Běijīng.", en: "Last year I didn't go to Beijing. (Drop 了!)" },
    guoPos: { cn: "我以前去过北京。", py: "Wǒ yǐqián qùguo Běijīng.", en: "I have been to Beijing before." },
    guoNeg: { cn: "我以前没去过北京。", py: "Wǒ yǐqián méi qùguo Běijīng.", en: "I have never been to Beijing. (Keep 过!)" },
    nowPos: { cn: "他正在去北京的飞机上呢。", py: "Tā zhèngzài qù Běijīng de fēijī shàng ne.", en: "He is on the plane to Beijing right now." },
    nowNeg: { cn: "他现在没在去北京。", py: "Tā xiànzài méi zài qù Běijīng.", en: "He is not heading to Beijing right now." },
    futPos: { cn: "明年暑假我打算去北京。", py: "Míngnián shǔjià wǒ dǎsuàn qù Běijīng.", en: "Next summer holiday I plan to go to Beijing." },
    futNeg: { cn: "明年暑假我不打算去北京。", py: "Míngnián shǔjià wǒ bù dǎsuàn qù Běijīng.", en: "Next summer holiday I don't plan to go to Beijing." },
  },
  {
    id: "piano",
    label: "弹钢琴",
    lePos: { cn: "昨天我弹钢琴弹了一个小时。", py: "Zuótiān wǒ tán gāngqín tánle yí gè xiǎoshí.", en: "Yesterday I played the piano for an hour." },
    leNeg: { cn: "昨天我没弹钢琴。", py: "Zuótiān wǒ méi tán gāngqín.", en: "Yesterday I didn't play the piano. (Drop 了!)" },
    guoPos: { cn: "我以前在舞台上弹过钢琴。", py: "Wǒ yǐqián zài wǔtái shàng tánguo gāngqín.", en: "I have played piano on stage before." },
    guoNeg: { cn: "我以前没弹过钢琴。", py: "Wǒ yǐqián méi tánguo gāngqín.", en: "I have never played the piano before. (Keep 过!)" },
    nowPos: { cn: "姐姐正在客厅里弹钢琴呢。", py: "Jiějie zhèngzài kètīng lǐ tán gāngqín ne.", en: "My older sister is playing piano in the living room right now." },
    nowNeg: { cn: "姐姐现在没在弹钢琴。", py: "Jiějie xiànzài méi zài tán gāngqín.", en: "My older sister is not playing piano right now." },
    futPos: { cn: "周末我打算在家弹钢琴。", py: "Zhōumò wǒ dǎsuàn zài jiā tán gāngqín.", en: "This weekend I plan to play the piano at home." },
    futNeg: { cn: "周末我不打算弹钢琴。", py: "Zhōumò wǒ bù dǎsuàn tán gāngqín.", en: "This weekend I don't plan to play the piano." },
  },
  {
    id: "mooncake",
    label: "吃月饼",
    lePos: { cn: "去年中秋节我吃了冰皮月饼。", py: "Qùnián Zhōngqiūjié wǒ chīle bīngpí yuèbǐng.", en: "Last Mid-Autumn I ate snow-skin mooncakes." },
    leNeg: { cn: "去年中秋节我没吃月饼。", py: "Qùnián Zhōngqiūjié wǒ méi chī yuèbǐng.", en: "Last Mid-Autumn I didn't eat mooncakes. (Drop 了!)" },
    guoPos: { cn: "我以前吃过双黄莲蓉月饼。", py: "Wǒ yǐqián chīguo shuānghuáng liánróng yuèbǐng.", en: "I have tried double-yolk lotus mooncakes before." },
    guoNeg: { cn: "我以前从来没吃过月饼。", py: "Wǒ yǐqián cónglái méi chīguo yuèbǐng.", en: "I have never eaten mooncakes before. (Keep 过!)" },
    nowPos: { cn: "全家人正在花园里吃月饼呢。", py: "Quánjiārén zhèngzài huāyuán lǐ chī yuèbǐng ne.", en: "The whole family is eating mooncakes in the garden right now." },
    nowNeg: { cn: "我们现在没在吃月饼。", py: "Wǒmen xiànzài méi zài chī yuèbǐng.", en: "We are not eating mooncakes right now." },
    futPos: { cn: "今年中秋节我打算自己做月饼。", py: "Jīnnián Zhōngqiūjié wǒ dǎsuàn zìjǐ zuò yuèbǐng.", en: "This Mid-Autumn I plan to make mooncakes myself." },
    futNeg: { cn: "今年中秋节我不打算买月饼。", py: "Jīnnián Zhōngqiūjié wǒ bù dǎsuàn mǎi yuèbǐng.", en: "This Mid-Autumn I don't plan to buy mooncakes." },
  },
] as const;

const ASPECT_RULES: Record<AspectId, { title: string; posRule: string; negRule: string; trap: string; dotX: number }> = {
  guo: {
    title: "Past Life Experience (过 guo)",
    posRule: "以前 + Verb + 过",
    negRule: "没(有) + Verb + 过 — KEEP 过!",
    trap: "Never write *不去过* or drop 过!",
    dotX: 90,
  },
  le: {
    title: "Completed Past Action (了 le)",
    posRule: "Past Time + Verb + 了 + Object",
    negRule: "没(有) + Verb — DROP 了!",
    trap: "Never mix 没 and 了 (*没去了* ❌)!",
    dotX: 215,
  },
  zhengzai: {
    title: "Ongoing Right Now (正在…呢)",
    posRule: "正在 + Verb + Object + 呢",
    negRule: "没(有)在 + Verb — NOT 不在!",
    trap: "Never write *正在不…* or *不在看*!",
    dotX: 345,
  },
  dasuan: {
    title: "Future Plan (打算 / 会)",
    posRule: "Future Time + 打算 + Verb",
    negRule: "不打算 / 不会 — uses 不!",
    trap: "Mental verbs & future plans take 不, not 没!",
    dotX: 470,
  },
};

const CONNECTIVE_DATA: Record<
  ConnId,
  {
    pair: string;
    pinyin: string;
    meaning: string;
    goodCn: string;
    goodPy: string;
    goodEn: string;
    badCn: string;
    whyBad: string;
    rule: string;
  }
> = {
  yinwei: {
    pair: "因为…，所以…",
    pinyin: "yīnwèi…, suǒyǐ…",
    meaning: "Because…, therefore… (Cause & Effect)",
    goodCn: "因为中文不但有趣而且有用，所以我每天认真复习。",
    goodPy: "Yīnwèi Zhōngwén búdàn yǒuqù érqiě yǒuyòng, suǒyǐ wǒ měitiān rènzhēn fùxí.",
    goodEn: "Because Chinese is both interesting and useful, I revise diligently every day.",
    badCn: "*因为中文很有用，但是我每天认真复习。*",
    whyBad: "Cross-wiring 因为 with 但是 breaks the cause–effect logic! Keep 因为 + 所以 together.",
    rule: "Keep BOTH 因为 and 所以 in Mandarin (unlike English!).",
  },
  suiran: {
    pair: "虽然…，但是…",
    pinyin: "suīrán…, dànshì…",
    meaning: "Although…, yet/nevertheless… (Contrast)",
    goodCn: "虽然科学实验有点儿难，但是我觉得非常有意思。",
    goodPy: "Suīrán kēxué shíyàn yǒudiǎnr nán, dànshì wǒ juéde fēicháng yǒu yìsi.",
    goodEn: "Although Science experiments are a bit hard, I find them very interesting.",
    badCn: "*虽然科学实验有点儿难，所以我喜欢科学。*",
    whyBad: "虽然 NEVER pairs with 所以! Always match 虽然 with 但是 (or 可是).",
    rule: "Pair 虽然 with 但是 / 可是 to earn instant Band-A contrast marks.",
  },
  budan: {
    pair: "不但…，而且…",
    pinyin: "búdàn…, érqiě…",
    meaning: "Not only…, but also… (Addition)",
    goodCn: "我的中文老师不但很有耐心，而且上课非常幽默。",
    goodPy: "Wǒ de Zhōngwén lǎoshī búdàn hěn yǒu nàixīn, érqiě shàngkè fēicháng yōumò.",
    goodEn: "My Chinese teacher is not only very patient, but also super humorous in class.",
    badCn: "*不但我的中文老师有耐心，而且上课非常幽默。*",
    whyBad: "When BOTH clauses share ONE subject (我的中文老师), put that subject BEFORE 不但!",
    rule: "Same subject → Subject + 不但…，而且…. Different subjects → 不但 S1…，而且 S2….",
  },
  ruguo: {
    pair: "如果…，Subject + 就…",
    pinyin: "rúguǒ…, jiù…",
    meaning: "If…, then… (Conditional)",
    goodCn: "如果周末不下雨，我们就去东海岸公园骑自行车。",
    goodPy: "Rúguǒ zhōumò bú xiàyǔ, wǒmen jiù qù Dōnghǎi'àn Gōngyuán qí zìxíngchē.",
    goodEn: "If it does not rain this weekend, we will go cycling at East Coast Park.",
    badCn: "*如果周末不下雨，就我们去东海岸公园骑自行车。*",
    whyBad: "就 is an adverb and MUST sit AFTER the subject 我们 (我们就去, NEVER *就我们去*)!",
    rule: "Always lock Subject BEFORE 就: 我就 / 我们就 / 他就.",
  },
  yibian: {
    pair: "一边…，一边…",
    pinyin: "yìbiān…, yìbiān…",
    meaning: "Doing A while doing B (Simultaneous)",
    goodCn: "中秋节晚上，我们全家人一边赏月，一边吃冰皮月饼。",
    goodPy: "Zhōngqiūjié wǎnshang, wǒmen quánjiārén yìbiān shǎngyuè, yìbiān chī bīngpí yuèbǐng.",
    goodEn: "On Mid-Autumn evening, our whole family admired the moon while eating snow-skin mooncakes.",
    badCn: "*我们一边全家人赏月，一边吃月饼。*",
    whyBad: "Put the shared subject (我们全家人) BEFORE the first 一边, followed by two active verbs!",
    rule: "Subject + 一边 + Action 1，一边 + Action 2.",
  },
};

function AspectConnectiveSwitcher() {
  const [lab, setLab] = useState<"aspect" | "connective">("aspect");
  const [actionId, setActionId] = useState<string>("beijing");
  const [aspect, setAspect] = useState<AspectId>("le");
  const [polarity, setPolarity] = useState<"pos" | "neg">("pos");
  const [conn, setConn] = useState<ConnId>("ruguo");

  const act = ASPECT_ACTIONS.find((a) => a.id === actionId) ?? ASPECT_ACTIONS[0];
  const rule = ASPECT_RULES[aspect];
  const activeSentence =
    aspect === "le"
      ? polarity === "pos"
        ? act.lePos
        : act.leNeg
      : aspect === "guo"
        ? polarity === "pos"
          ? act.guoPos
          : act.guoNeg
        : aspect === "zhengzai"
          ? polarity === "pos"
            ? act.nowPos
            : act.nowNeg
          : polarity === "pos"
            ? act.futPos
            : act.futNeg;

  const connInfo = CONNECTIVE_DATA[conn];

  return (
    <WidgetFrame
      title="Aspect & Paired-Connective Switcher (时态与关联词实验室)"
      tryThis={[
        "In **Aspect Lab**, switch `了` and `过` to **Negative 🚫** — watch `了` disappear under `没` while `过` stays!",
        "Switch to **Connectives Lab** and inspect `如果…就…` and `不但…而且…` to master the exact subject-placement rule.",
      ]}
      caption={
        lab === "aspect" ? (
          <div>
            <strong>{rule.title}:</strong> {polarity === "pos" ? rule.posRule : rule.negRule}.{" "}
            <span className="text-bad font-semibold">{rule.trap}</span>
          </div>
        ) : (
          <div>
            <strong>Golden IGCSE Rule:</strong> {connInfo.rule}
          </div>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Choose grammar lab"
          value={lab}
          onChange={setLab}
          options={[
            { value: "aspect", label: "Aspect Lab (了·过·正在·打算)" },
            { value: "connective", label: "Paired Connectives Lab (关联词)" },
          ]}
        />

        {lab === "aspect" ? (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Segmented
                label="Action verb"
                value={actionId}
                onChange={setActionId}
                options={ASPECT_ACTIONS.map((a) => ({ value: a.id, label: a.label }))}
              />
              <Segmented
                label="Polarity"
                value={polarity}
                onChange={setPolarity}
                options={[
                  { value: "pos", label: "Affirmative ✅" },
                  { value: "neg", label: "Negative 🚫" },
                ]}
              />
            </div>

            <Segmented
              label="Aspect lens"
              value={aspect}
              onChange={setAspect}
              options={[
                { value: "guo", label: "过 (Ever)" },
                { value: "le", label: "了 (Done)" },
                { value: "zhengzai", label: "正在…呢 (Now)" },
                { value: "dasuan", label: "打算 (Future)" },
              ]}
            />

            <svg
              viewBox="0 0 560 88"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label={`Timeline pinpointing ${rule.title}`}
              className="w-full h-auto rounded-xl border border-line bg-surface"
            >
              <rect x="0" y="0" width="560" height="88" rx="12" fill="var(--surface)" />
              <line x1="48" y1="42" x2="512" y2="42" stroke="var(--line)" strokeWidth="4" strokeLinecap="round" />
              {(["guo", "le", "zhengzai", "dasuan"] as AspectId[]).map((id) => {
                const r = ASPECT_RULES[id];
                const on = id === aspect;
                const label = id === "guo" ? "以前 · 过" : id === "le" ? "昨天 · 了" : id === "zhengzai" ? "现在 · 正在" : "明年 · 打算";
                return (
                  <g key={id}>
                    <circle
                      cx={r.dotX}
                      cy={42}
                      r={on ? 13 : 8}
                      fill={on ? "var(--brand)" : "var(--surface-2)"}
                      stroke="var(--brand)"
                      strokeWidth={on ? 2.5 : 1.5}
                    />
                    <text
                      x={r.dotX}
                      y={72}
                      textAnchor="middle"
                      fontSize="11"
                      fontWeight={on ? "800" : "600"}
                      fill={on ? "var(--brand)" : "var(--ink-2)"}
                    >
                      {label}
                    </text>
                  </g>
                );
              })}
              <text x="280" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink-2)">
                PAST ◄ ──────────────────────── NOW ──────────────────────── ► FUTURE
              </text>
            </svg>

            <div className="rounded-xl border border-brand/40 bg-brand-soft/35 p-3.5">
              <div className="text-xs font-bold uppercase tracking-wide text-brand">
                {rule.title} · {polarity === "pos" ? "Affirmative" : "Negative"}
              </div>
              <div className="mt-1 text-lg font-extrabold text-ink">{activeSentence.cn}</div>
              <div className="mt-0.5 text-sm font-semibold text-ink-2">{activeSentence.py}</div>
              <div className="mt-0.5 text-xs text-ink-2">{activeSentence.en}</div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <Segmented
              label="Paired connective"
              value={conn}
              onChange={setConn}
              options={[
                { value: "yinwei", label: "因为…所以" },
                { value: "suiran", label: "虽然…但是" },
                { value: "budan", label: "不但…而且" },
                { value: "ruguo", label: "如果…就" },
                { value: "yibian", label: "一边…一边" },
              ]}
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Readout
                label="Magnetic Pair"
                value={
                  <span className="text-base">
                    {connInfo.pair}
                    <span className="block text-xs font-semibold text-ink-2">{connInfo.pinyin}</span>
                  </span>
                }
              />
              <Readout
                label="Logical Function"
                tone="ink"
                value={<span className="text-sm font-bold">{connInfo.meaning}</span>}
              />
            </div>

            <div className="rounded-xl border border-good bg-good-soft/40 p-3.5">
              <div className="text-xs font-bold uppercase tracking-wide text-good">✅ Band-A IGCSE Model</div>
              <div className="mt-1 text-base font-extrabold text-ink">{connInfo.goodCn}</div>
              <div className="mt-0.5 text-sm font-semibold text-ink-2">{connInfo.goodPy}</div>
              <div className="mt-0.5 text-xs text-ink-2">{connInfo.goodEn}</div>
            </div>

            <div className="rounded-xl border border-bad bg-bad-soft/40 p-3">
              <div className="text-xs font-bold uppercase tracking-wide text-bad">❌ Common Exam Trap to Avoid</div>
              <div className="mt-1 text-sm font-bold text-ink">{connInfo.badCn}</div>
              <div className="mt-0.5 text-xs text-ink-2">{connInfo.whyBad}</div>
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "stpvo-sentence-order-workshop",
    title: "STPVO Sentence Order Workshop",
    blurb: "Build natural STPVO & TSPVO sentences across Past, Present, and Future, and compare them against the English SVOPT trap.",
    Component: StpvoOrderWorkshop,
  },
  {
    id: "aspect-connective-switcher",
    title: "Aspect & Paired-Connective Switcher",
    blurb: "Flip 了 / 过 / 正在…呢 / 打算 between affirmative and negative, and test all 5 magnetic IGCSE paired connectives.",
    Component: AspectConnectiveSwitcher,
  },
];
