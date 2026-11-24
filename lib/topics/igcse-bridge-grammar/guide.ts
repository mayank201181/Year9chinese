import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "igcse-bridge-grammar",
  title: "IGCSE Bridge & Core Grammar (IGCSE 衔接与语法)",
  strand: "Culture & IGCSE Bridge",
  icon: "🎓",
  summary:
    "Bridge Year 9 directly into CIE IGCSE 0547: fluent self-introductions, routines, hobbies, STPVO word order, 了/过/正在/打算, and paired connectives.",
  intro:
    "Term 3 of Year 9 is your launchpad into **Cambridge IGCSE Mandarin Chinese (0547)**. You already know the vocabulary for home, neighbourhood, relatives, appearance, pets, school, and festivals — now you will weave it all into top-band sentences and paragraphs. In this topic you will master the universal **STPVO word-order engine**, control all four **time/aspect lenses** (`了`, `过`, `正在…呢`, `打算/会`), link ideas with **paired connectives** (`因为…所以…`, `虽然…但是…`, `不但…而且…`, `如果…就…`), and tick off every IGCSE 0547 writing bullet cleanly in Simplified Chinese.",
  guide: [
    {
      id: "igcse-self-intro-family-pets",
      heading: "IGCSE Self-Introduction, Family & Pets",
      discovery: {
        problem:
          "Compare two Year 9 IGCSE speaking openings:\n- **Opening 1**: `我叫大卫。我十四岁。我是英国人。我有四口人。我有狗。`\n- **Opening 2**: `大家好！我叫大卫，今年十四岁，生日是五月八号。我是英国人，现在跟家人住在新加坡。我家有四口人：爸爸、妈妈、姐姐和我，还养了一只又聪明又活泼的小狗，叫毛毛。`\nNotice Opening 2 uses **almost the exact same basic facts**, yet sounds ten times more fluent. Which 4 linking tools made the jump?",
        idea:
          "Opening 2: (1) groups closely related personal facts into one flowing sentence (`叫…，今年…岁，生日是…`), (2) replaces weak `我有四口人` with idiomatic `我家有四口人` (household classifier `口` kǒu), (3) uses the exact verb `养` (yǎng — keep/raise) + animal classifier `只` (zhī) + `叫` (called) for the pet, and (4) adds personality with `又…又…`!",
      },
      body: `In **IGCSE 0547** speaking role-plays, conversation topics, and directed writing, **Personal Identification, Family & Pets** is your warm-up showcase. Examiners immediately spot whether a student writes choppy English-style sentences or idiomatic Mandarin.

### High-Band Self-Introduction Toolkit
| Fact | Natural IGCSE Mandarin | Pinyin | Key Grammar Check |
| --- | --- | --- | --- |
| Name & Age | 我叫李明，今年十四岁。 | Wǒ jiào Lǐ Míng, jīnnián shísì suì. | Drop \`是\` before age: \`今年十四岁\` (NOT \`*我是十四岁*\`)! |
| Birthday | 我的生日是十月十二号。 | Wǒ de shēngrì shì Shíyuè shí'èr hào. | Big → Small order: Year → Month (\`月\`) → Day (\`号/日\`). |
| Nationality & Residence | 我是英国人，现在住在新加坡。 | Wǒ shì Yīngguórén, xiànzài zhù zài Xīnjiāpō. | \`住在 + Place\` (\`住\` + \`在\` together). |
| Household Size | 我家有五口人。 | Wǒ jiā yǒu wǔ kǒu rén. | Use \`我家有…口人\`, NEVER \`*我有五个人*\`! |
| Appearance & Character | 姐姐长着大眼睛，又耐心又幽默。 | Jiějie zhǎngzhe dà yǎnjing, yòu nàixīn yòu yōumò. | \`长着\` (born feature), \`戴着\` (glasses), \`又…又…\`. |
| Keeping a Pet | 我们养了一只小狗和两条金鱼。 | Wǒmen yǎngle yì zhī xiǎogǒu hé liǎng tiáo jīnyú. | Use \`养\` (keep) + exact classifier (\`只\` / \`条\` / \`匹\`) + \`两\` for 2! |

Remember the **\`二\` vs \`两\`** rule in family & pet descriptions: before ANY measure word (\`口\`, \`个\`, \`只\`, \`条\`), 2 is **always \`两\`** (liǎng): \`两个妹妹\`, \`两只猫\`, \`两条金鱼\`.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-block blueprint for an IGCSE 0547 self-introduction covering identity, residence, family and pets">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1" />
  <text x="280" y="25" text-anchor="middle" font-size="15" font-weight="800" fill="var(--brand)">IGCSE 0547 Self-Introduction Flow (自我介绍四步法)</text>
  <rect x="20" y="44" width="122" height="148" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="81" y="65" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">1. Identity</text>
  <text x="81" y="88" text-anchor="middle" font-size="11" fill="var(--ink)">我叫… (name)</text>
  <text x="81" y="109" text-anchor="middle" font-size="11" fill="var(--ink)">今年十四岁</text>
  <text x="81" y="130" text-anchor="middle" font-size="11" fill="var(--ink)">生日是…月…号</text>
  <text x="81" y="152" text-anchor="middle" font-size="11" fill="var(--ink)">我是…人</text>
  <text x="81" y="178" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">No 是 before 岁!</text>
  <rect x="153" y="44" width="122" height="148" rx="10" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="214" y="65" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">2. Home</text>
  <text x="214" y="88" text-anchor="middle" font-size="11" fill="var(--ink)">住在新加坡</text>
  <text x="214" y="109" text-anchor="middle" font-size="11" fill="var(--ink)">住在一套公寓</text>
  <text x="214" y="130" text-anchor="middle" font-size="11" fill="var(--ink)">在东陵读九年级</text>
  <text x="214" y="152" text-anchor="middle" font-size="11" fill="var(--ink)">我家附近有…</text>
  <text x="214" y="178" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">住在 + Place</text>
  <rect x="286" y="44" width="122" height="148" rx="10" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="347" y="65" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">3. Family</text>
  <text x="347" y="88" text-anchor="middle" font-size="11" fill="var(--ink)">我家有…口人</text>
  <text x="347" y="109" text-anchor="middle" font-size="11" fill="var(--ink)">爷爷/外婆/表哥</text>
  <text x="347" y="130" text-anchor="middle" font-size="11" fill="var(--ink)">戴着眼镜</text>
  <text x="347" y="152" text-anchor="middle" font-size="11" fill="var(--ink)">又聪明又友好</text>
  <text x="347" y="178" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Classifier: 口/位</text>
  <rect x="419" y="44" width="122" height="148" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="480" y="65" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">4. Pets</text>
  <text x="480" y="88" text-anchor="middle" font-size="11" fill="var(--ink)">养了一只狗</text>
  <text x="480" y="109" text-anchor="middle" font-size="11" fill="var(--ink)">两条金鱼</text>
  <text x="480" y="130" text-anchor="middle" font-size="11" fill="var(--ink)">它叫毛毛</text>
  <text x="480" y="152" text-anchor="middle" font-size="11" fill="var(--ink)">每天遛狗/喂它</text>
  <text x="480" y="178" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">两 + 只 / 条!</text>
  <rect x="20" y="205" width="521" height="31" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="280" y="225" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Upgrade tip: Link clauses with commas (，) + 还 (also) + 因为 (because) instead of choppy full stops!</text>
</svg>`,
      diagramCaption:
        "Structure your IGCSE personal profile across 4 smooth stages: Identity → Home → Family → Pets.",
      whyItWorks:
        "Chinese prefers topic–comment chains separated by commas (`我叫…，今年…岁，住在…`) rather than repeating `我` in every short sentence. Mastering `我家有…口人`, `养了`, and `又…又…` immediately removes awkward English calques.",
      keyPoints: [
        "State age without `是`: **我今年十四岁** (Wǒ jīnnián shísì suì — NEVER `*我是十四岁*`).",
        "State household size with **我家有 + Number + 口人** (`我家有四口人`, using `两口人` for 2).",
        "Use **养** (yǎng) for keeping pets, with exact classifiers: **一只狗/猫/兔子**, **两条金鱼**, **一匹马**.",
        "Describe people cleanly: **长着** (born features), **戴着** (glasses/hat), **穿着** (clothes), **又…又…** (two positive traits).",
      ],
      strategies: [
        "Combine 2–3 personal facts into one comma-linked sentence instead of repeating `我` five times.",
        "Always check `二` vs `两` before measure words (`两个弟弟`, `两只猫`) — it is one of the easiest IGCSE accuracy points to protect.",
      ],
      thinkDeeper:
        "Why is `我哥哥比我高一点儿，而且我们关系很好` far stronger in IGCSE than `我哥哥高。我矮。我喜欢哥哥。`?",
      workedExamples: [
        {
          title: "Fixing three classic Year 9 self-intro errors",
          problem:
            "Correct ALL three errors in this draft: `*我是十四岁，我有四个人，我家有二只猫。*`",
          steps: [
            "Error 1 (`*我是十四岁*`): drop `是` before an age → `我今年十四岁`.",
            "Error 2 (`*我有四个人*`): household size uses `我家有…口人` → `我家有四口人`.",
            "Error 3 (`*二只猫*`): 2 before a measure word must be `两` (liǎng), and keeping pets uses `养了` → `我家养了两只猫`.",
          ],
          answer:
            "我今年十四岁，我家有四口人，还养了两只猫。(Wǒ jīnnián shísì suì, wǒ jiā yǒu sì kǒu rén, hái yǎngle liǎng zhī māo.)",
          yourTurn: {
            question:
              "How do you say **'two goldfish'** in Simplified Chinese using the exact measure word and the `两` rule? (Type Simplified Hanzi or tone-marked Pinyin.)",
            answer: {
              type: "text",
              accept: ["两条金鱼", "liǎng tiáo jīnyú", "liǎngtiáojīnyú"],
              display: "两条金鱼 (liǎng tiáo jīnyú)",
            },
            solution:
              "Use 两 (liǎng) before classifiers + 条 (tiáo — long/fish classifier) + 金鱼 (jīnyú): 两条金鱼.",
          },
        },
        {
          title: "Adding appearance + personality in one fluent sentence",
          problem:
            "Combine: 'My cousin (mother's sister's older daughter) wears glasses. She is both clever and patient.'",
          steps: [
            "Maternal cousin (older female) = `表姐` (biǎojiě).",
            "Wearing glasses = `戴着眼镜` (dàizhe yǎnjìng — NEVER `穿`!).",
            "Both clever and patient = `又聪明又耐心` (yòu cōngmíng yòu nàixīn).",
          ],
          answer:
            "我表姐戴着眼镜，她又聪明又耐心。(Wǒ biǎojiě dàizhe yǎnjìng, tā yòu cōngmíng yòu nàixīn.)",
        },
      ],
    },
    {
      id: "igcse-routine-hobbies",
      heading: "Daily Routine & Hobbies to IGCSE Band",
      discovery: {
        problem:
          "A Year 9 student writes: `*我每天弹钢琴一个小时。*` Their Chinese teacher circles the verb and writes `弹钢琴弹了一个小时` (repeating `弹` twice!). Why on earth does Mandarin repeat the verb when you add a duration like `一个小时`?",
        idea:
          "Because `弹钢琴` already has an object (`钢琴`) sitting right after the verb `弹`! A Mandarin verb cannot hold BOTH a normal object AND a duration complement (`一个小时`) directly behind it at the same time — so you copy the verb (`Verb + Object + Verb + 了 + Duration`: `弹钢琴弹了一个小时`)!",
      },
      body: `Talking about your **daily routine (\`日常生活\`)** and **hobbies (\`爱好\` àihào)** makes up a huge share of IGCSE 0547 listening, reading, speaking, and writing. Three precision upgrades take you straight to Band A:

### 1. Sequencing Daily Routine with \`先…，然后…，最后…\`
Use exact routine verbs + clock times (\`点\`, \`半\`, \`一刻\`, \`差一刻\`) + sequence words:
- \`早上六点半我先起床，然后刷牙、吃早饭，七点一刻坐校车上学，下午四点回家做作业，最后晚上十点睡觉。\`
- Sequence ladder: **\`先\`** (xiān — first) → **\`然后\`** (ránhòu — then) → **\`接着\`** (jiēzhe — next) → **\`最后\`** (zuìhòu — finally).

### 2. Exact Hobby Verbs & Frequency Ladder
Never use \`玩\` (wán — play) for sports or musical instruments! Match every hobby to its exact verb:
| Hobby Category | Exact Mandarin Verb | Examples |
| --- | --- | --- |
| Hand / racket sports | **打** (dǎ) | 打篮球, 打网球, 打羽毛球, 打乒乓球 |
| Foot sport | **踢** (tī) | 踢足球 (kick football) |
| Pluck / keyboard instruments | **弹** (tán) | 弹钢琴 (piano), 弹吉他 (guitar) |
| Bowed instruments | **拉** (lā) | 拉小提琴 (violin) |
| Reading / watching | **看** (kàn) | 看书, 看电影, 看漫画 |
| Drawing / swimming / running | **画 / 游泳 / 跑步** | 画画儿, 游泳, 跑步, 听音乐 |

Expand hobbies using the **Frequency Ladder**: **\`总是\`** (zǒngshì — always) → **\`经常 / 常常\`** (jīngcháng — often) → **\`有时候\`** (yǒushíhou — sometimes) → **\`偶尔\`** (ǒu'ěr — occasionally) → **\`很少\`** (hěn shǎo — rarely) → **\`从来不\`** (cónglái bù — never, habit).

### 3. Adding Duration (Verb-Copy Structure)
When a verb has an object (\`弹钢琴\`, \`看书\`, \`做作业\`), copy the verb before the duration:
- **Formula**: \`Subject + Verb + Object + Verb + (了) + Duration\`
- Example: \`我每天晚上做作业做一个小时。\` / \`昨天我弹钢琴弹了半个小时。\` (Alternative shortcut: put duration before \`的\` + Object: \`我昨天弹了半个小时的钢琴。\` — both are 100% idiomatic!)`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Daily routine sequence ladder, frequency scale, and verb-copy duration formula">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1" />
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">Routine Sequencing · Frequency Scale · Duration Verb-Copy</text>
  <rect x="20" y="38" width="520" height="58" rx="9" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="34" y="57" font-size="11" font-weight="800" fill="var(--brand)">1. SEQUENCE</text>
  <rect x="122" y="47" width="84" height="38" rx="7" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="164" y="64" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">先 (xiān)</text>
  <text x="164" y="79" text-anchor="middle" font-size="10" fill="var(--ink)">起床·吃早饭</text>
  <text x="218" y="70" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink-2)">→</text>
  <rect x="230" y="47" width="112" height="38" rx="7" fill="var(--surface)" stroke="var(--line)" />
  <text x="286" y="64" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">然后 (ránhòu)</text>
  <text x="286" y="79" text-anchor="middle" font-size="10" fill="var(--ink-2)">上学·做作业</text>
  <text x="354" y="70" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink-2)">→</text>
  <rect x="366" y="47" width="158" height="38" rx="7" fill="var(--surface)" stroke="var(--good)" />
  <text x="445" y="64" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">最后 (zuìhòu)</text>
  <text x="445" y="79" text-anchor="middle" font-size="10" fill="var(--ink-2)">十点睡觉</text>
  <rect x="20" y="106" width="520" height="56" rx="9" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="34" y="125" font-size="11" font-weight="800" fill="var(--brand)">2. FREQUENCY</text>
  <text x="150" y="128" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">总是 100%</text>
  <text x="236" y="128" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">经常 75%</text>
  <text x="320" y="128" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">有时候 45%</text>
  <text x="404" y="128" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">偶尔 20%</text>
  <text x="488" y="128" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">从来不 0%</text>
  <line x1="126" y1="145" x2="512" y2="145" stroke="var(--brand)" stroke-width="3" stroke-linecap="round" />
  <circle cx="150" cy="145" r="5" fill="var(--good)" />
  <circle cx="236" cy="145" r="5" fill="var(--brand)" />
  <circle cx="320" cy="145" r="5" fill="var(--brand)" />
  <circle cx="404" cy="145" r="5" fill="var(--ink-2)" />
  <circle cx="488" cy="145" r="5" fill="var(--bad)" />
  <rect x="20" y="172" width="520" height="64" rx="9" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="280" y="192" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">3. DURATION VERB-COPY (动词重叠表示时长)</text>
  <text x="280" y="212" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">我 弹(V) 钢琴(O) 弹(V) 了 一个小时(Duration)。</text>
  <text x="280" y="229" text-anchor="middle" font-size="11" fill="var(--ink-2)">Never write *我弹钢琴一个小时* — copy the verb (or write 弹了一个小时的钢琴)!</text>
</svg>`,
      diagramCaption:
        "Upgrade routine & hobbies with 先…然后…最后…, the frequency scale, and the duration verb-copy pattern.",
      whyItWorks:
        "In IGCSE 0547, adding *how often* (`经常 / 偶尔 / 从来不`), *how long* (`弹钢琴弹了一个小时`), and *why* (`因为可以放松`) turns any simple hobby sentence into a high-band extended response.",
      keyPoints: [
        "Sequence daily routines with **先** (first) → **然后** (then) → **最后** (finally).",
        "Never use `玩` for instruments or sports: **打**篮球/网球, **踢**足球, **弹**钢琴/吉他, **拉**小提琴.",
        "Place frequency adverbs (`经常`, `偶尔`, `从来不`) right **before** the verb: `我周末经常去游泳`.",
        "For duration with an object, repeat the verb (`弹钢琴弹了一个小时`) or use `Verb + 了 + Duration + 的 + Object` (`弹了一个小时的钢琴`).",
      ],
      strategies: [
        "Build every hobby answer with the **4W formula**: Frequency (`经常`) + Exact Verb (`弹钢琴`) + Duration (`弹半个小时`) + Reason (`因为很有趣，能让我放松`).",
        "Check `从来不` (never as a habit) vs `从来没…过` (never have experienced in life).",
      ],
      thinkDeeper:
        "Why does `我每天跑步跑三十分钟` copy `跑` (because `跑步` is a verb–object separable compound `跑` + `步`), whereas `我每天休息三十分钟` does NOT need to copy `休息`?",
      workedExamples: [
        {
          title: "Upgrading a flat hobby sentence with frequency, duration & reason",
          problem:
            "Turn 'I play piano' into a Band-A IGCSE sentence meaning: 'I often play the piano at weekends; yesterday I played the piano for an hour because it helps me relax.'",
          steps: [
            "Frequency + exact verb (`弹`, never `玩`): `我周末经常弹钢琴。`",
            "Past duration using verb-copy: `昨天我弹钢琴弹了一个小时。`",
            "Reason clause: `因为弹钢琴能让我放松。`",
          ],
          answer:
            "我周末经常弹钢琴，昨天我弹钢琴弹了一个小时，因为这能让我放松。(Wǒ zhōumò jīngcháng tán gāngqín, zuótiān wǒ tán gāngqín tánle yí gè xiǎoshí, yīnwèi zhè néng ràng wǒ fàngsōng.)",
          yourTurn: {
            question:
              "What is the exact 1-character verb used for playing the **piano** (`___钢琴`) or **guitar** (`___吉他`)? (Type Simplified Hanzi or tone-marked Pinyin.)",
            answer: {
              type: "text",
              accept: ["弹", "tán"],
              display: "弹 (tán)",
            },
            solution:
              "Plucked or keyboard instruments take 弹 (tán): 弹钢琴 (tán gāngqín), 弹吉他 (tán jítā).",
          },
        },
        {
          title: "Ordering a 3-step morning routine",
          problem:
            "Translate using `先…，然后…，最后…`: 'Every morning at 6:30 I first get up, then eat breakfast, and finally take the school bus to school.'",
          steps: [
            "Time first: `每天早上六点半`.",
            "First step: `我先起床` (qǐchuáng).",
            "Second step: `然后吃早饭` (chī zǎofàn).",
            "Final step: `最后坐校车去上学` (zuò xiàochē qù shàngxué).",
          ],
          answer:
            "每天早上六点半，我先起床，然后吃早饭，最后坐校车去上学。",
        },
      ],
    },
    {
      id: "stpvo-tenses-aspect",
      heading: "STPVO Word Order & Time/Aspect Markers (了·过·正在·打算)",
      discovery: {
        problem:
          "Look at an English sentence: *'I studied Chinese in the library yesterday.'* Notice the order: **Subject – Verb – Object – Place – Time (SVOPT)**. Now look at Mandarin: `我昨天在图书馆学习了中文。` Why does Mandarin reverse the back half to **S – T – P – V – O**?",
        idea:
          "Mandarin sets the **stage** BEFORE the **action**! Like a film director calling 'When? Where? Action!', Chinese puts **Time (`昨天`)** and **Place (`在图书馆`)** before the verb (`学习中文`). Time can also open the sentence right before the subject (`昨天我在图书馆学习了中文`), so BOTH **STPVO** and **TSPVO** are gold-standard!",
      },
      body: `If you master ONE grammar law before starting IGCSE Year 10, make it **STPVO + The 4 Aspect Lenses**.

### 1. The Master Formula: **S – T – P – V – O**
- **S**ubject + **T**ime + **P**lace (\`在 + Location\`) + **V**erb + **O**bject
- (Optional transport/manner \`坐地铁 / 跟朋友一起\` sits right before the Verb too: **S + T + P + Manner/Companion + V + O**!)
- ✅ \`我 (S) 昨天下午 (T) 在图书馆 (P) 看了 (V) 两本中文书 (O)。\`
- ✅ \`昨天下午 (T)，我 (S) 在图书馆 (P) 看了 (V) 两本中文书 (O)。\` (TSPVO is equally natural!)
- ❌ \`*我看了两本中文书在图书馆昨天下午。*\` (Direct English SVOPT calque — loses grammar marks immediately!)

### 2. The Four Time & Aspect Lenses (Mandarin doesn't conjugate verbs!)
Instead of changing verb endings like English (*go / went / going*), Mandarin adds **markers** around the unchanged verb:

| Aspect Lens | Marker | Position | Affirmative Example | Negative Rule |
| --- | --- | --- | --- | --- |
| **Completed Past** | **了** (le) | Right after verb (or sentence-end) | 我昨天买**了**一本书。 | Drop \`了\`, use **没(有)**: 我昨天**没**买书。 |
| **Life Experience** | **过** (guo) | Right after verb | 我以前去**过**北京。 | **Keep \`过\`**, use **没(有)**: 我**没**去**过**北京。 |
| **Ongoing Now (-ing)** | **正在…呢** (zhèngzài…ne) | \`正在\` before verb, \`呢\` at end | 弟弟**正在**听音乐**呢**。 | Use **没(有)在**: 弟弟**没在**听音乐。 |
| **Future Plan / Prediction** | **打算 / 将来想 / 会** | Before verb | 明年我**打算**去上海。 | Use **不**: 明年我**不打算**去上海。 |

Watch the #1 exam trap: **\`没\` + \`了\` NEVER mix** (\`*我没去了*\` ❌ → \`我没去\` ✅), whereas **\`没\` + \`过\` MUST stay together** (\`我没去过\` ✅)!`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="STPVO word order slots and the four Mandarin aspect lenses: 了, 过, 正在...呢, and 打算/会">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1" />
  <text x="280" y="23" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">STPVO Word Order &amp; The 4 Aspect Lenses</text>
  <rect x="18" y="34" width="84" height="58" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="60" y="53" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">S · Subject</text>
  <text x="60" y="73" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">我</text>
  <rect x="110" y="34" width="104" height="58" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="162" y="53" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">T · Time</text>
  <text x="162" y="73" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">昨天下午</text>
  <rect x="222" y="34" width="118" height="58" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="281" y="53" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">P · Place</text>
  <text x="281" y="73" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">在图书馆</text>
  <rect x="348" y="34" width="90" height="58" rx="8" fill="var(--surface-2)" stroke="var(--good)" />
  <text x="393" y="53" text-anchor="middle" font-size="11" font-weight="800" fill="var(--good)">V · Verb</text>
  <text x="393" y="73" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">看了</text>
  <rect x="446" y="34" width="96" height="58" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="494" y="53" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">O · Object</text>
  <text x="494" y="73" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">中文书</text>
  <line x1="20" y1="108" x2="540" y2="108" stroke="var(--line)" stroke-dasharray="4 4" />
  <rect x="18" y="120" width="124" height="114" rx="9" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="80" y="140" text-anchor="middle" font-size="13" font-weight="800" fill="var(--brand)">了 (le)</text>
  <text x="80" y="158" text-anchor="middle" font-size="10" fill="var(--ink-2)">Completed Action</text>
  <text x="80" y="180" text-anchor="middle" font-size="11" fill="var(--ink)">吃了两个包子</text>
  <text x="80" y="200" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Neg: 没吃 (drop 了)</text>
  <text x="80" y="220" text-anchor="middle" font-size="10" fill="var(--bad)">✗ 没吃了</text>
  <rect x="151" y="120" width="124" height="114" rx="9" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="213" y="140" text-anchor="middle" font-size="13" font-weight="800" fill="var(--brand)">过 (guo)</text>
  <text x="213" y="158" text-anchor="middle" font-size="10" fill="var(--ink-2)">Life Experience</text>
  <text x="213" y="180" text-anchor="middle" font-size="11" fill="var(--ink)">去过北京</text>
  <text x="213" y="200" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Neg: 没去过 (keep!)</text>
  <text x="213" y="220" text-anchor="middle" font-size="10" fill="var(--bad)">✗ 不去过</text>
  <rect x="284" y="120" width="124" height="114" rx="9" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="346" y="140" text-anchor="middle" font-size="13" font-weight="800" fill="var(--good)">正在…呢</text>
  <text x="346" y="158" text-anchor="middle" font-size="10" fill="var(--ink-2)">Right Now (-ing)</text>
  <text x="346" y="180" text-anchor="middle" font-size="11" fill="var(--ink)">正在做作业呢</text>
  <text x="346" y="200" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Neg: 没在做作业</text>
  <text x="346" y="220" text-anchor="middle" font-size="10" fill="var(--ink-2)">zhèngzài … ne</text>
  <rect x="417" y="120" width="124" height="114" rx="9" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="479" y="140" text-anchor="middle" font-size="13" font-weight="800" fill="var(--brand)">打算 / 会</text>
  <text x="479" y="158" text-anchor="middle" font-size="10" fill="var(--ink-2)">Future Plan / Will</text>
  <text x="479" y="180" text-anchor="middle" font-size="11" fill="var(--ink)">明年打算去中国</text>
  <text x="479" y="200" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Neg: 不打算 / 不会</text>
  <text x="479" y="220" text-anchor="middle" font-size="10" fill="var(--ink-2)">将来想 (in future)</text>
</svg>`,
      diagramCaption:
        "Put Time and Place BEFORE the verb (STPVO), then pick one of the four aspect markers to control time.",
      whyItWorks:
        "Because Mandarin verbs never change spelling for tense, word order (`STPVO`) and aspect particles (`了`, `过`, `正在…呢`, `打算`) carry 100% of the time-frame signal — giving examiners clear proof you can handle past, present, and future.",
      keyPoints: [
        "Always place **Time** and **Place (`在…`)** BEFORE the verb: **S + T + P + V + O** (or **T + S + P + V + O**).",
        "Use **了** (le) for specific completed actions, and **drop `了`** when negating with **没(有)** (`我没买`).",
        "Use **过** (guo) for past life experience ('ever done'), and **keep `过`** when negating with **没(有)** (`我没去过`).",
        "Use **正在 + V (+ 呢)** for ongoing actions right now, and **打算 / 将来想 / 会** (negated with **不**) for future plans and predictions.",
      ],
      strategies: [
        "Before writing any Mandarin sentence with a time or location, mentally label the 5 boxes: `[S] [T] [P] [V] [O]`.",
        "Ask yourself: 'One specific event (`了`) or life experience (`过`)? Negative past (`没`, no `了`) or negative habit/future (`不`)?'",
      ],
      thinkDeeper:
        "Compare `我昨天去北京了` vs `我以前去过北京`. What crucial difference in meaning tells you whether the speaker is still in Beijing or has already returned?",
      workedExamples: [
        {
          title: "Fixing an English-ordered sentence with STPVO",
          problem:
            "Rearrange into natural Mandarin: `*我吃晚饭跟朋友在餐厅昨天晚上。*`",
          steps: [
            "Identify the 5 slots: S = `我`, T = `昨天晚上`, Companion = `跟朋友`, P = `在餐厅`, V+O = `吃晚饭`.",
            "Put Time and Place/Companion BEFORE the verb, and add `了` for the completed past event.",
            "Result: `昨天晚上，我跟朋友在餐厅吃了晚饭。` (or `我昨天晚上跟朋友在餐厅吃了晚饭。`).",
          ],
          answer:
            "昨天晚上，我跟朋友在餐厅吃了晚饭。(Zuótiān wǎnshang, wǒ gēn péngyou zài cāntīng chīle wǎnfàn.)",
          yourTurn: {
            question:
              "Complete the negative past-experience sentence with TWO characters (`没…过`): `我以前从来___去___上海。` Type the full 3-character verb phrase for **'have never been (to)'** (Simplified Hanzi or tone-marked Pinyin).",
            answer: {
              type: "text",
              accept: ["没去过", "没有去过", "méi qùguo", "méi qùguò", "méiyǒu qùguo", "méiyǒu qùguò"],
              display: "没去过 (méi qùguo)",
            },
            solution:
              "Negating past experience ALWAYS uses 没(有) + Verb + 过 (never drop 过!): 没去过 (méi qùguo).",
          },
        },
        {
          title: "Choosing between 正在…呢 and 打算",
          problem:
            "How do you say (a) 'My brother is doing homework right now' and (b) 'My brother plans to study Chinese in the future'?",
          steps: [
            "Ongoing right now → `正在 + V + 呢`: `弟弟正在做作业呢。`",
            "Future intention → `将来打算 / 将来想`: `弟弟将来打算学习中文。`",
          ],
          answer: "(a) 弟弟正在做作业呢。 (b) 弟弟将来打算学习中文。",
        },
      ],
    },
    {
      id: "igcse-connectives-writing",
      heading: "High-Band IGCSE Connectives & Exam Writing Checklist",
      discovery: {
        problem:
          "In English, saying *'Because it was raining, so we stayed home'* or *'Although it is hard, but I like Chinese'* is **wrong** — you can only use ONE word. What happens if you try to follow that English rule in Mandarin and drop the second partner?",
        idea:
          "Mandarin LOVES **paired connectives (关联词 guānliáncí)**! In Chinese, `因为…，所以…` (because… therefore…) and `虽然…，但是…` (although… yet…) work as magnetic pairs that lock two clauses together with crystal-clear logic — and using them is the #1 fastest way to jump from Band C to Band A in IGCSE 0547!",
      },
      body: `To score top marks for **Language Complexity** in Cambridge IGCSE 0547 writing (80–150 characters), you must move beyond \`和\` (and) and \`但是\` alone, and control all **five high-band paired connectives**:

| Paired Connective | Pinyin | Meaning | Model IGCSE Sentence |
| --- | --- | --- | --- |
| **因为…，所以…** | yīnwèi…, suǒyǐ… | Because…, therefore… | 因为中文很有用，所以我每天认真学习。 |
| **虽然…，但是…** | suīrán…, dànshì… | Although…, nevertheless… | 虽然汉字有点儿难，但是我觉得非常有趣。 |
| **不但…，而且…** | búdàn…, érqiě… | Not only…, but also… | 我的中文老师不但耐心，而且非常幽默。 |
| **如果…，就…** | rúguǒ…, jiù… | If…, then… | 如果明天不下雨，我就跟朋友去公园跑步。 |
| **一边…，一边…** | yìbiān…, yìbiān… | Doing A while doing B | 妈妈喜欢一边听音乐，一边做晚饭。 |

### Crucial Subject Placement Rule!
- When **BOTH clauses share the SAME subject**, put the subject **BEFORE** \`不但\` or \`一边\`:
  - ✅ \`我不但喜欢科学，而且喜欢中文。\` (Same subject \`我\` comes first!)
  - ✅ \`弟弟一边看电视，一边吃零食。\`
- With \`就\` (in \`如果…，就…\`), \`就\` **MUST sit AFTER the subject** of the second clause:
  - ✅ \`如果我有时间，我就去图书馆。\` (NOT \`*就我去图书馆*\`!)

### The 5-Point IGCSE 0547 Writing Checklist
Before submitting ANY Year 9 or IGCSE essay, verify:
1. **All bullet points covered?** Tick off every prompt bullet — missing one caps your content mark.
2. **All 3 time frames?** Past (\`去年/昨天 + 了/过\`), Present (\`现在/经常/正在\`), Future (\`明天/将来 + 打算/想/会\`).
3. **STPVO intact?** Every Time and \`在 + Place\` sits BEFORE its verb.
4. **At least 2–3 paired connectives + opinions?** \`因为…所以…\`, \`虽然…但是…\`, \`不但…而且…\`, \`比…更…\`.
5. **100% Simplified Chinese (\`简体中文\`)?** Zero Traditional slips (\`学\`, \`书\`, \`电\`, \`欢\`, \`过\`, \`虽\`, \`为\`, \`点\`, \`个\`, \`两\`, \`语\`, \`习\`, \`边\`, \`节\`).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five magnetic paired connectives for IGCSE Mandarin writing and the subject-placement rule">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1" />
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">5 High-Band Paired Connectives (关联词配对)</text>
  <rect x="20" y="38" width="252" height="36" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="146" y="61" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">因为 (yīnwèi)  ↔  所以 (suǒyǐ)</text>
  <rect x="288" y="38" width="252" height="36" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="414" y="61" text-anchor="middle" font-size="12" fill="var(--ink)">Cause &amp; Effect (Because → So)</text>
  <rect x="20" y="82" width="252" height="36" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="146" y="105" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">虽然 (suīrán)  ↔  但是 (dànshì)</text>
  <rect x="288" y="82" width="252" height="36" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="414" y="105" text-anchor="middle" font-size="12" fill="var(--ink)">Contrast (Although → Yet)</text>
  <rect x="20" y="126" width="252" height="36" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="146" y="149" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">不但 (búdàn)  ↔  而且 (érqiě)</text>
  <rect x="288" y="126" width="252" height="36" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="414" y="149" text-anchor="middle" font-size="12" fill="var(--ink)">Addition (Not only → But also)</text>
  <rect x="20" y="170" width="252" height="36" rx="8" fill="var(--surface-2)" stroke="var(--good)" />
  <text x="146" y="193" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">如果 (rúguǒ)  ↔  就 (jiù)</text>
  <rect x="288" y="170" width="252" height="36" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="414" y="193" text-anchor="middle" font-size="12" fill="var(--ink)">Condition (If → Subject + 就!)</text>
  <rect x="20" y="213" width="520" height="27" rx="7" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="280" y="231" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Bonus Pair: 一边…，一边… (simultaneous actions) · Golden rule: Subject BEFORE 就 (我就去, NOT *就我去*!)</text>
</svg>`,
      diagramCaption:
        "Memorise each magnetic connective pair and keep the subject BEFORE 就 (`我就去`) and BEFORE 不但 when both clauses share one subject.",
      whyItWorks:
        "Paired connectives force you to build complex multi-clause sentences with explicit logical relationships — turning a string of Band-C simple clauses into cohesive, examiner-ready IGCSE prose.",
      keyPoints: [
        "Lock in all 5 pairs: **因为…所以…**, **虽然…但是…**, **不但…而且…**, **如果…就…**, **一边…一边…**.",
        "NEVER cross-wire pairs (e.g., `*虽然…所以…*` ❌ or `*因为…但是…*` ❌).",
        "In **如果…，Subject + 就…**, ALWAYS place the subject BEFORE `就` (`我就去`, NEVER `*就我去*`).",
        "Check all 5 IGCSE writing pillars: every bullet answered, 3 time frames (Past/Present/Future), STPVO order, paired connectives + opinions, and 100% Simplified Chinese.",
      ],
      strategies: [
        "Draft a quick 4-icon margin checklist before any essay: `[Past 了/过] [Present] [Future 打算] [2+ Pairs]`.",
        "Always check whether the two clauses have the SAME subject (put Subject before `不但`) or DIFFERENT subjects (put `不但` before Subject 1).",
      ],
      thinkDeeper:
        "Why is `如果明天天气好，就我们去海边` grammatically wrong, and how does moving ONE word make it 100% natural Mandarin?",
      workedExamples: [
        {
          title: "Fixing 就 placement in a conditional sentence",
          problem:
            "Correct the word order: `*如果周末我有空，就我打算去图书馆看书。*`",
          steps: [
            "Spot the adverb `就` sitting BEFORE the subject `我`.",
            "Move `就` directly AFTER the subject `我` (adverbs always come after subjects and before verbs in Mandarin!).",
            "Corrected: `如果周末我有空，我就打算去图书馆看书。`",
          ],
          answer:
            "如果周末我有空，我就打算去图书馆看书。(Rúguǒ zhōumò wǒ yǒukòng, wǒ jiù dǎsuàn qù túshūguǎn kànshū.)",
          yourTurn: {
            question:
              "Complete the paired connective meaning **'Not only…, but also…'**: `我的卧室不但很大，___非常明亮。` (Type Simplified Hanzi or tone-marked Pinyin.)",
            answer: {
              type: "text",
              accept: ["而且", "érqiě"],
              display: "而且 (érqiě)",
            },
            solution:
              "不但 (búdàn — not only) ALWAYS pairs with 而且 (érqiě — but also): 我的卧室不但很大，而且非常明亮。",
          },
        },
        {
          title: "Linking two simple sentences with 虽然…但是…",
          problem:
            "Join into one Band-A sentence: `每天的作业很多。我很喜欢在东陵学校学习。`",
          steps: [
            "Recognise the contrast relationship: heavy homework vs enjoying school.",
            "Open clause 1 with `虽然` (suīrán) and clause 2 with `但是` (dànshì).",
            "Result: `虽然每天的作业很多，但是我很喜欢在东陵学校学习。`",
          ],
          answer:
            "虽然每天的作业很多，但是我很喜欢在东陵学校学习。(Suīrán měitiān de zuòyè hěn duō, dànshì wǒ hěn xǐhuan zài Dōnglíng Xuéxiào xuéxí.)",
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "我家有四口人 (Wǒ jiā yǒu sì kǒu rén)", back: "There are four people in my family (use household classifier 口, never *我有四个人*)." },
      { front: "今年十四岁 (jīnnián shísì suì)", back: "14 years old this year — NO 是 before age!" },
      { front: "养了一只小狗 (yǎngle yì zhī xiǎogǒu)", back: "Keep a puppy — use 养 (keep/raise) + exact animal classifier 只." },
      { front: "先…，然后…，最后…", back: "First…, then…, finally… — essential daily routine sequencing frame." },
      { front: "弹钢琴弹了一个小时", back: "Played the piano for an hour — verb-copy structure (V + O + V + 了 + Duration)." },
      { front: "经常 / 偶尔 / 从来不", back: "Often (jīngcháng) / occasionally (ǒu'ěr) / never as a habit (cónglái bù)." },
      { front: "STPVO Word Order", back: "Subject + Time + Place + Verb + Object (e.g. 我昨天在图书馆看了书)." },
      { front: "Verb + 了 (le) vs 没 + Verb", back: "Completed past action uses 了; negating it uses 没(有) and DROPS 了!" },
      { front: "Verb + 过 (guo) vs 没 + Verb + 过", back: "Past life experience ('have ever done'); negating it KEEPS 过 (我没去过北京)." },
      { front: "正在 + Verb (+ 呢)", back: "Ongoing action happening right now (-ing), e.g. 妹妹正在画画儿呢。" },
      { front: "打算 / 将来想 / 会", back: "Future intention ('plan to'), future wish ('want to in future'), prediction ('will')." },
      { front: "因为…，所以… (yīnwèi…, suǒyǐ…)", back: "Because…, therefore… — cause-and-effect connective pair." },
      { front: "虽然…，但是… (suīrán…, dànshì…)", back: "Although…, yet/nevertheless… — concession/contrast connective pair." },
      { front: "不但…，而且… (búdàn…, érqiě…)", back: "Not only…, but also… — progressive addition pair." },
      { front: "如果…，Subject + 就… (rúguǒ…, jiù…)", back: "If…, then… — always put Subject BEFORE 就 (我就去)!" },
      { front: "一边…，一边… (yìbiān…, yìbiān…)", back: "Doing two actions at the same time (while doing A, also doing B)." },
    ],
    mustKnow: [
      "Give a fluent self-introduction covering name, age (no 是!), birthday (month + 号), nationality, residence (住在), family (我家有…口人) and pets (养了 + exact classifier).",
      "Apply the 二 vs 两 rule accurately before every measure word (两口人, 两只狗, 两条金鱼, 两个小时).",
      "Sequence a daily routine fluently with clock times and 先…，然后…，最后….",
      "Match every sport and instrument to its exact verb: 打 (basketball/tennis/badminton), 踢 (football), 弹 (piano/guitar), 拉 (violin).",
      "Express hobby frequency (总是/经常/有时候/偶尔/从来不) and duration using verb-copy (弹钢琴弹了一个小时).",
      "Build every Mandarin sentence in STPVO (or TSPVO) order — Time and 在 + Place ALWAYS before the verb.",
      "Control all 4 aspect lenses: 了 (completed), 过 (life experience), 正在…呢 (ongoing), 打算/将来想/会 (future).",
      "Negate every aspect accurately: 没 + V (drop 了!), 没 + V + 过 (keep 过!), 没在 + V, 不打算 / 不 + habit.",
      "Use all 5 paired connectives accurately without cross-wiring pairs or putting 就 before a subject.",
      "Check IGCSE 0547 essays for 3 time frames, justified opinions, all prompt bullets, and 100% Simplified Chinese.",
    ],
    misconceptions: [
      {
        wrong: "Never write ❌: 我是十四岁，我有四个人。",
        right: "Write instead ✅: 我今年十四岁，我家有四口人。(No 是 before age; use 我家有…口人 for household size.)",
      },
      {
        wrong: "Never write ❌: 我喜欢玩钢琴和玩足球。",
        right: "Write instead ✅: 我喜欢弹钢琴和踢足球。(Use 弹 for piano/guitar, 拉 for violin, 打 for hand sports, 踢 for football!)",
      },
      {
        wrong: "Never write ❌: 我学习中文在图书馆昨天。",
        right: "Write instead ✅: 我昨天在图书馆学习了中文。(STPVO: Time and Place always come BEFORE the verb!)",
      },
      {
        wrong: "Never write ❌: 昨天我没去了学校。",
        right: "Write instead ✅: 昨天我没去学校。(Drop 了 whenever 没 negates a past action!)",
      },
      {
        wrong: "Never write ❌: 我以前不去北京 / 我没去北京 (when meaning 'never been').",
        right: "Write instead ✅: 我以前没去过北京。(Past life experience ALWAYS keeps 过 after 没!)",
      },
      {
        wrong: "Never write ❌: 如果明天不下雨，就我们去公园。",
        right: "Write instead ✅: 如果明天不下雨，我们就去公园。(就 is an adverb and MUST sit AFTER the subject 我们!)",
      },
      {
        wrong: "Never write ❌: 我昨天弹钢琴一个小时。",
        right: "Write instead ✅: 我昨天弹钢琴弹了一个小时。(Or: 我昨天弹了一个小时的钢琴 — never leave duration stuck behind an object!)",
      },
    ],
    examMistakes: [
      "Dropping one half of a paired connective or cross-wiring pairs (`*虽然…所以…*` or `*因为…但是…*`).",
      "Forgetting the verb-copy rule with duration (`*我看书两个小时*` instead of `我看书看了两个小时`).",
      "Using English SVOPT word order when under timed exam pressure — always check where `昨天` and `在学校` sit!",
      "Writing `*没…了*` together or negating past events with `不` (`*昨天我不吃早饭*` instead of `昨天我没吃早饭`).",
      "Omitting one of the three IGCSE time frames (usually forgetting to include a clear future plan with `打算 / 将来想`).",
      "Slipping Traditional variants into Simplified IGCSE scripts — always stick to Simplified `学`, `习`, `时`, `间`, `虽`, `为`, `过`, `两`.",
      "Writing `二` instead of `两` before measure words (`*二个小时*`, `*二只猫*` instead of `两个小时`, `两只猫`).",
    ],
    mnemonics: [
      {
        topic: "STPVO Master Word Order",
        device: "Some Tigers Prefer Very Oranges (Subject · Time · Place · Verb · Object)",
        explanation:
          "Set the scene (Time + Place) BEFORE the action (Verb + Object) every single time!",
      },
      {
        topic: "Negation Rule for 了 vs 过",
        device: "没 kicks 了 OUT, but invites 过 IN!",
        explanation:
          "Completed action: 买了 → 没买 (了 leaves!). Life experience: 去过 → 没去过 (过 stays!).",
      },
      {
        topic: "Exact Hobby Verbs",
        device: "Dǎ with hands, Tī with feet, Tán the keys, Lā the strings!",
        explanation:
          "打篮球/网球 (hands), 踢足球 (feet), 弹钢琴/吉他 (keys/plucked), 拉小提琴 (bowed strings).",
      },
      {
        topic: "The 5 Paired Connective Magnets",
        device: "因为↔所以 · 虽然↔但是 · 不但↔而且 · 如果↔就 · 一边↔一边",
        explanation:
          "Keep every magnet glued to its exact partner — and remember Subject goes BEFORE 就!",
      },
    ],
    realWorld: [
      {
        title: "CIE IGCSE 0547 Speaking Conversation",
        detail:
          "In the real IGCSE Mandarin speaking exam, examiners ask follow-up questions across Past, Present, and Future about your family, daily life, hobbies, and holidays — STPVO and paired connectives keep your answers smooth under pressure.",
        emoji: "🎙️",
      },
      {
        title: "IGCSE 0547 Directed & Extended Writing",
        detail:
          "Both the 80–100 character short essay and 150-character blog/letter reward students who tick all bullet points, maintain Simplified Chinese, and weave in `虽然…但是…`, `不但…而且…`, and `如果…就…`.",
        emoji: "✍️",
      },
      {
        title: "Real-Life Chatting with Mandarin Friends in Singapore",
        detail:
          "Whether texting a friend on WeChat about weekend plans (`如果周六不下雨，我们就去东海岸骑车`) or sharing past travel (`我去过成都看熊猫`), these exact grammar patterns are used in everyday Mandarin.",
        emoji: "💬",
      },
      {
        title: "Translating Without 'Chinglish' Traps",
        detail:
          "Understanding why Chinese puts `在图书馆` before `看书` and repeats `弹钢琴弹了一个小时` lets you think directly in Chinese structure rather than translating word-for-word from English.",
        emoji: "🧭",
      },
    ],
    videos: [
      {
        title: "Mandarin STPVO Word Order Explained Clearly",
        channel: "YouTube Mandarin Search",
        url: "https://www.youtube.com/results?search_query=Mandarin+Chinese+STPVO+word+order+grammar+lesson",
      },
      {
        title: "Chinese Aspect Particles 了 (le), 过 (guo) and 正在 (zhèngzài)",
        channel: "YouTube Mandarin Search",
        url: "https://www.youtube.com/results?search_query=Chinese+grammar+le+guo+zhengzai+explained+IGCSE",
      },
      {
        title: "IGCSE 0547 Chinese Paired Connectives (因为所以 虽然但是 不但而且)",
        channel: "YouTube Mandarin Search",
        url: "https://www.youtube.com/results?search_query=IGCSE+0547+Chinese+connectives+yinwei+suoyi+suiran+danshi",
      },
      {
        title: "Expressing Duration in Mandarin (Verb-Copy Structure)",
        channel: "YouTube Mandarin Search",
        url: "https://www.youtube.com/results?search_query=Chinese+grammar+duration+verb+copy+structure+lesson",
      },
    ],
    formulas: [
      {
        name: "STPVO / TSPVO Master Order",
        formula: "Subject + Time + Place (在…) + Verb + Object",
        note: "Time may also precede Subject: 昨天我在图书馆看了书。",
      },
      {
        name: "Household Size & Age",
        formula: "我今年 + Age + 岁，我家有 + Number + 口人",
        note: "No 是 before age; use 两 for 2 before any classifier.",
      },
      {
        name: "Daily Routine Sequence",
        formula: "先 + Action 1，然后 + Action 2，最后 + Action 3",
        note: "Pair with clock times: 六点半先起床，然后吃早饭…",
      },
      {
        name: "Duration Verb-Copy",
        formula: "Subject + V + O + V + (了) + Duration",
        note: "e.g. 我弹钢琴弹了一个小时 (or 弹了一个小时的钢琴).",
      },
      {
        name: "Completed Action (了) & Negation",
        formula: "V + 了 + O  ↔  没(有) + V + O",
        note: "Always drop 了 when negating with 没!",
      },
      {
        name: "Past Life Experience (过) & Negation",
        formula: "V + 过 + O  ↔  没(有) + V + 过 + O",
        note: "Always KEEP 过 when negating with 没!",
      },
      {
        name: "Ongoing Action (-ing)",
        formula: "Subject + 正在 + Verb + Object + 呢",
        note: "Negate with 没(有)在 + Verb: 他没在看电视。",
      },
      {
        name: "Future Plans & Predictions",
        formula: "Time (明年/将来) + Subject + 打算 / 想 / 会 + Verb",
        note: "Negate with 不: 我不打算 / 明天不会下雨。",
      },
      {
        name: "Cause & Effect Pair",
        formula: "因为 + Reason，所以 + Result",
        note: "yīnwèi…, suǒyǐ… (keep BOTH partners!).",
      },
      {
        name: "Concession / Contrast Pair",
        formula: "虽然 + Concession，但是 + Main Point",
        note: "suīrán…, dànshì… (never mix with 所以!).",
      },
      {
        name: "Progressive Addition Pair",
        formula: "Subject + 不但 + A，而且 + B",
        note: "búdàn…, érqiě… (same subject sits before 不但).",
      },
      {
        name: "Conditional Pair (就 rule)",
        formula: "如果 + Condition，Subject + 就 + Result",
        note: "rúguǒ…, Subject + jiù… (Subject MUST precede 就!).",
      },
    ],
  },
};
