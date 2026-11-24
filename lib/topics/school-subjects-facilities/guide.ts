// Audited study guide for Year 9 Mandarin Chinese — School Subjects & Facilities (学校科目与设施)
// Simplified Chinese (简体中文) with tone-marked Pinyin throughout.
import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "school-subjects-facilities",
  title: "School Subjects & Facilities (学校科目与设施)",
  strand: "Pets & School",
  icon: "🏫",
  summary:
    "Master Year 9 school subjects and measure words (门 vs 节), describe your Tanglin timetable with 从……到……, give a campus tour, and compare subjects and teachers accurately.",
  intro:
    "School life is guaranteed to appear on both Year 9 assessments and IGCSE 0547 Speaking and Writing papers. The secret to jumping straight into Band A is separating **门 (mén)** for subjects from **节 (jié)** for timetable periods, anchoring your day cleanly with **从……到……**, placing every campus facility BEFORE the action (**在实验室做实验**), and comparing subjects with **比** — without falling into the classic **很** trap!",
  guide: [
    {
      id: "school-subjects-opinions",
      heading: "Year 9 School Subjects & Opinions (学校科目)",
      discovery: {
        problem:
          "Read these two Year 9 sentences: (1) **我学习十门科目 (shí mén kēmù).** (2) **我每天有六节课 (liù jié kè).** Both sentences talk about school classes, yet one uses **门 (mén)** and the other uses **节 (jié)**. Why would swapping them sound strange to a native speaker?",
        idea:
          "Mandarin separates a **whole subject/course** from a **single timetable period**: **门 (mén — doorway into a discipline)** counts school subjects (**两门外语**, **十门科目**), whereas **节 (jié — bamboo joint / segment)** counts individual timetable slots (**六节课**, **第一节课**).",
      },
      body: `Every Year 9 student at Tanglin studies a wide range of core and option subjects. Learn them in logical clusters so you can recall them rapidly in exams:

| Cluster | Core Subjects (Simplified + Tone-Marked Pinyin) |
|---|---|
| **Languages (外语/语言)** | 中文 (Zhōngwén), 英文 (Yīngwén), 西班牙文 (Xībānyáwén), 法文 (Fǎwén) |
| **STEM (数理化与电脑)** | 数学 (shùxué), 科学 (kēxué): 生物 (shēngwù — Biology), 化学 (huàxué — Chemistry), 物理 (wùlǐ — Physics), 电脑 (diànnǎo) / 计算机 (jìsuànjī) |
| **Humanities (人文)** | 地理 (dìlǐ — Geography), 历史 (lìshǐ — History) |
| **Arts & Sport (艺体)** | 艺术 (yìshù — Art), 音乐 (yīnyuè — Music), 戏剧 (xìjù — Drama), 体育 (tǐyù — PE), 设计 (shèjì — Design) |

### Measure Word **门 (mén)** & Expressing Clear Opinions

- **Counting subjects**: Always pair **门 (mén)** with subjects and remember **两** for *two*: **我学习两门外语** (*I study two foreign languages*), **九年级我们有十门科目** (*In Year 9 we have ten subjects*).
- **Asking which subject**: **你最喜欢哪门课？** (*Nǐ zuì xǐhuan nǎ mén kè?* — Which subject do you like best?)
- **Core opinion adjectives** (NO **是** before adjectives!):
  - **有趣 (yǒuqù)** / **有意思 (yǒuyìsi)** — interesting, fun
  - **有用 (yǒuyòng)** / **实用 (shíyòng)** — useful, practical
  - **重要 (zhòngyào)** — important
  - **难 (nán)** — difficult ↔ **容易 (róngyì)** — easy
  - **无聊 (wúliáo)** — boring
- **Pronunciation Watch**: In **音乐 (yīnyuè — Music)**, **乐** is pronounced **yuè** (4th tone), NOT *lè* (which means happy in 快乐)!`,
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Year 9 subjects map showing four subject clusters and the distinction between measure word 门 for whole subjects and 节 for timetable lessons"><rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Year 9 Subjects Map · 九年级科目与量词 (门 vs 节)</text><rect x="20" y="44" width="250" height="66" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="34" y="64" font-size="12" font-weight="800" fill="var(--brand)">Languages &amp; Humanities</text><text x="34" y="84" font-size="12" fill="var(--ink)">中文 · 英文 · 西班牙文</text><text x="34" y="102" font-size="12" fill="var(--ink)">历史 (lìshǐ) · 地理 (dìlǐ)</text><rect x="290" y="44" width="250" height="66" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="304" y="64" font-size="12" font-weight="800" fill="var(--brand)">STEM &amp; Creative Arts</text><text x="304" y="84" font-size="12" fill="var(--ink)">数学 · 生物 · 化学 · 物理 · 电脑</text><text x="304" y="102" font-size="12" fill="var(--ink)">艺术 · 音乐 (yīnyuè) · 戏剧 · 体育</text><rect x="20" y="124" width="250" height="104" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/><text x="145" y="148" text-anchor="middle" font-size="18" font-weight="800" fill="var(--good)">门 mén = Subject / Course</text><text x="145" y="172" text-anchor="middle" font-size="12" fill="var(--ink)">两门外语 (two foreign languages)</text><text x="145" y="192" text-anchor="middle" font-size="12" fill="var(--ink)">十门科目 (ten subjects)</text><text x="145" y="214" text-anchor="middle" font-size="11" fill="var(--ink-2)">Think: doorway into a discipline</text><rect x="290" y="124" width="250" height="104" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/><text x="415" y="148" text-anchor="middle" font-size="18" font-weight="800" fill="var(--brand)">节 jié = Lesson / Period</text><text x="415" y="172" text-anchor="middle" font-size="12" fill="var(--ink)">每天六节课 (six lessons a day)</text><text x="415" y="192" text-anchor="middle" font-size="12" fill="var(--ink)">第一节课 (Period 1)</text><text x="415" y="214" text-anchor="middle" font-size="11" fill="var(--ink-2)">Think: bamboo joint / time slot</text></svg>',
      diagramCaption:
        "Use 门 (mén) for whole subjects on your curriculum and 节 (jié) for single lessons on your daily timetable.",
      whyItWorks:
        "Visualising the literal characters keeps **门** and **节** impossible to mix up: **门** is literally a doorway (entering a whole field of study like Chemistry), while **节** is a bamboo joint (slicing the school day into 50-minute segments).",
      keyPoints: [
        "Use **门 (mén)** to count whole subjects (**两门外语**, **十门科目**, **哪门课**).",
        "Memorise the three Science branches inside **科学**: **生物 (Biology)**, **化学 (Chemistry)**, **物理 (Physics)**.",
        "Say **音乐 (yīnyuè)** — 4th tone *yuè*, NEVER *yīnlè*!",
        "State opinions cleanly with **我觉得 + Subject + 很/非常 + Adj** — NEVER insert **是** before an adjective.",
        "Give a concrete reason with **因为**: **我觉得中文虽然难，但是很有用**.",
      ],
      strategies: [
        "**Subject + Reason Pair**: Never write *我喜欢科学* on its own. Always bolt on a specific activity reason: **我最喜欢科学，因为可以在实验室做实验。**",
        "**GCSE Option Bridge**: Mention Year 10 plans with **选修 (xuǎnxiū)** — **明年十年级我打算选修中文和电脑。**",
      ],
      thinkDeeper:
        "Why do Mandarin speakers say **中文** / **英文** / **西班牙文** (ending in **文 wén**) as school subjects, yet also say **汉语** / **英语** (ending in **语 yǔ**)? When might **文** feel more natural on a school timetable?",
      workedExamples: [
        {
          title: "Counting Subjects & Giving a Justified Opinion",
          problem:
            "Translate into Simplified Chinese with Pinyin: *\"I study two foreign languages: Chinese and Spanish. I think Chinese is very useful.\"*",
          steps: [
            "*Two foreign languages*: 2 before a measure word = **两**, subject classifier = **门**, foreign language = **外语** → **两门外语 (liǎng mén wàiyǔ)**.",
            "List the two subjects: **中文和西班牙文 (Zhōngwén hé Xībānyáwén)**.",
            "Opinion clause (no **是** before adjective): **我觉得中文非常有用 (Wǒ juéde Zhōngwén fēicháng yǒuyòng)**.",
            "Join cleanly: **我学习两门外语：中文和西班牙文。我觉得中文非常有用。**",
          ],
          answer:
            "我学习两门外语：中文和西班牙文。我觉得中文非常有用。(Wǒ xuéxí liǎng mén wàiyǔ: Zhōngwén hé Xībānyáwén. Wǒ juéde Zhōngwén fēicháng yǒuyòng.)",
          yourTurn: {
            question:
              "Fill in the exact measure word for whole school subjects: 九年级我学习十___科目 (ten subjects).",
            answer: {
              type: "text",
              accept: ["门", "mén"],
              display: "门 (mén)",
            },
            solution: "Whole school subjects and courses take 门 (mén): 十门科目 (shí mén kēmù).",
          },
        },
        {
          title: "Splitting Science into Its Three Branches",
          problem:
            "Match each Mandarin Science branch to English: **生物 (shēngwù)**, **化学 (huàxué)**, **物理 (wùlǐ)**.",
          steps: [
            "**生** = life/living, **物** = things → **生物 (shēngwù)** = **Biology**.",
            "**化** = change/transform, **学** = study → **化学 (huàxué)** = **Chemistry**.",
            "**物** = matter, **理** = principles/laws → **物理 (wùlǐ)** = **Physics**.",
          ],
          answer: "生物 = Biology · 化学 = Chemistry · 物理 = Physics",
          yourTurn: {
            question:
              "What is the Mandarin word for **Chemistry**? (Simplified Hanzi or tone-marked Pinyin)",
            answer: {
              type: "text",
              accept: ["化学", "huàxué"],
              display: "化学 (huàxué)",
            },
            solution: "化学 (huàxué) means Chemistry (literally 'the study of transformation').",
          },
        },
      ],
    },
    {
      id: "school-timetable",
      heading: "School Day, Timetables & 从…到…",
      discovery: {
        problem:
          "Compare how English and Mandarin say *\"We have classes from 8:00 a.m. to 3:30 p.m.\"* An English learner writes *我们上课从上午八点到下午三点半*. Why does that feel backwards in Mandarin, and where must the **从……到……** time span sit?",
        idea:
          "**从……到…… (cóng…dào… — from… to…)** is a **Time phrase**, and in Mandarin **STPVO**, Time ALWAYS stands **BEFORE the verb**! Move the entire **从上午八点到下午三点半** block in front of **上课**: **我们从上午八点到下午三点半上课。**",
      },
      body: `Describing your Tanglin school day clearly requires **three building blocks**: **Time Spans (从……到……)**, **Ordinal Lessons (第一节课)**, and **After-School Life (课外活动 & 作业)**.

### 1. The **从……到……** Time-Span Formula
- **Subject + 从 + Start Time + 到 + End Time + Verb**
- **我们从上午八点到下午三点半上课。** (*Wǒmen cóng shàngwǔ bā diǎn dào xiàwǔ sān diǎn bàn shàngkè.* — We have lessons from 8:00 a.m. to 3:30 p.m.)
- **午饭时间从十二点半到一点半。** (*Wǔfàn shíjiān cóng shí'èr diǎn bàn dào yì diǎn bàn.* — Lunchtime is from 12:30 to 1:30.)
- Remember clock shortcuts: **八点** (8:00), **十点一刻** (10:15), **十二点半** (12:30), **两点** (2:00 — ALWAYS **两**, never *二点*!), **差一刻四点** (3:45).

### 2. Counting & Ordering Lessons with **节 (jié)**
- **每天有六节课** (*měitiān yǒu liù jié kè*) — have six lessons every day
- **上午四节，下午两节** (*shàngwǔ sì jié, xiàwǔ liǎng jié*) — four in the morning, two in the afternoon (note **两节**, never *二节*!)
- **星期三第一节课是中文。** (*Xīngqīsān dì yī jié kè shì Zhōngwén.*) — Period 1 on Wednesday is Chinese.
- Distinguish **上课** (attend/start class) ↔ **下课** (finish class) and **上学** (go to school) ↔ **放学** (finish the school day).

### 3. Breaks, CCAs & Homework
- **课间休息 (kèjiān xiūxi)** — morning break / recess
- **午饭时间 (wǔfàn shíjiān)** — lunchtime
- **课外活动 (kèwài huódòng)** — extracurricular activities / CCAs (**参加课外活动** — join CCAs)
- **做作业 (zuò zuòyè)** — do homework (**我每天晚上花一个小时做作业** — I spend an hour doing homework every evening)`,
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tanglin Year 9 school day timeline from 08:00 to 16:30 showing 上课, 休息, 午饭时间, 放学, and 课外活动 with the 从...到... structure"><rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Tanglin School Day Timeline · 从上午八点到下午三点半</text><line x1="36" y1="112" x2="524" y2="112" stroke="var(--brand)" stroke-width="4" stroke-linecap="round"/><circle cx="56" cy="112" r="9" fill="var(--brand)"/><text x="56" y="72" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">08:00</text><text x="56" y="90" text-anchor="middle" font-size="11" fill="var(--brand)">八点</text><text x="56" y="140" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">上课</text><text x="56" y="156" text-anchor="middle" font-size="10" fill="var(--ink-2)">第一节课</text><circle cx="164" cy="112" r="9" fill="var(--good)"/><text x="164" y="72" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">10:15</text><text x="164" y="90" text-anchor="middle" font-size="11" fill="var(--good)">十点一刻</text><text x="164" y="140" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">课间休息</text><text x="164" y="156" text-anchor="middle" font-size="10" fill="var(--ink-2)">xiūxi</text><circle cx="280" cy="112" r="9" fill="var(--good)"/><text x="280" y="72" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">12:30</text><text x="280" y="90" text-anchor="middle" font-size="11" fill="var(--good)">十二点半</text><text x="280" y="140" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">午饭时间</text><text x="280" y="156" text-anchor="middle" font-size="10" fill="var(--ink-2)">在食堂吃午饭</text><circle cx="396" cy="112" r="9" fill="var(--brand)"/><text x="396" y="72" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">15:30</text><text x="396" y="90" text-anchor="middle" font-size="11" fill="var(--brand)">三点半</text><text x="396" y="140" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">放学</text><text x="396" y="156" text-anchor="middle" font-size="10" fill="var(--ink-2)">共六节课</text><circle cx="498" cy="112" r="9" fill="var(--ink)"/><text x="498" y="72" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">16:30</text><text x="498" y="90" text-anchor="middle" font-size="11" fill="var(--ink-2)">四点半</text><text x="498" y="140" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">课外活动</text><text x="498" y="156" text-anchor="middle" font-size="10" fill="var(--ink-2)">CCAs</text><rect x="20" y="182" width="520" height="48" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/><text x="280" y="202" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Time-Span Rule: 从 + Start + 到 + End ALWAYS precedes the Verb!</text><text x="280" y="220" text-anchor="middle" font-size="12" fill="var(--ink)">✓ 我们从上午八点到下午三点半上课。  |  ✗ 我们上课从八点到三点半。</text></svg>',
      diagramCaption:
        "Anchor every school-day description with 从……到…… BEFORE the verb, plus 六节课 and 课外活动.",
      whyItWorks:
        "Just like a single time word (**每天早上**), a time span (**从上午八点到下午三点半**) functions as the **T (Time)** slot in STPVO — so keeping it right after the Subject and before **上课** makes every timetable sentence sound completely natural.",
      keyPoints: [
        "Place **从 + Start + 到 + End** BEFORE the verb: **我们从上午八点到下午三点半上课。**",
        "Use **节 (jié)** for timetable lessons (**每天有六节课**, **下午有两节课**, **第一节课**).",
        "Distinguish **上学 / 放学** (start/end of the whole school day) from **上课 / 下课** (start/end of a single lesson).",
        "Say **两点 (liǎng diǎn)** for 2 o'clock and **两节课 (liǎng jié kè)** for two lessons — never *二点* or *二节课*!",
        "Use **参加 (cānjiā)** with **课外活动 (kèwài huódòng — CCAs)** and **做 (zuò)** with **作业 (zuòyè — homework)**.",
      ],
      strategies: [
        "**Big-to-Small Time Funnel**: Always order time from largest to smallest unit: **星期三 + 上午 + 十点一刻** (Wednesday → morning → 10:15).",
        "**Two-Sentence Timetable**: Pair one overview sentence (**我们从八点到三点半上课，每天有六节课**) with one specific highlight (**星期四下午放学后我参加游泳课外活动**).",
      ],
      thinkDeeper:
        "Why do we say **一点半** (1:30) and **两点半** (2:30) without **个**, yet we say **一个半小时** (one and a half hours) WITH **个**?",
      workedExamples: [
        {
          title: "Building a Full 从……到…… School-Day Sentence",
          problem:
            "Translate into Simplified Chinese with tone-marked Pinyin: *\"We have classes from 8:00 a.m. to 3:30 p.m., and have six lessons every day.\"*",
          steps: [
            "Subject: **我们 (wǒmen)**.",
            "Time span BEFORE verb: **从上午八点到下午三点半 (cóng shàngwǔ bā diǎn dào xiàwǔ sān diǎn bàn)**.",
            "Verb: **上课 (shàngkè)**.",
            "Second clause with lesson measure word **节**: **每天有六节课 (měitiān yǒu liù jié kè)**.",
          ],
          answer:
            "我们从上午八点到下午三点半上课，每天有六节课。(Wǒmen cóng shàngwǔ bā diǎn dào xiàwǔ sān diǎn bàn shàngkè, měitiān yǒu liù jié kè.)",
          yourTurn: {
            question:
              "Fill in the exact measure word for individual timetable periods: 我们每天有六___课 (six lessons a day).",
            answer: {
              type: "text",
              accept: ["节", "jié"],
              display: "节 (jié)",
            },
            solution: "Individual timetable periods/lessons take 节 (jié): 六节课 (liù jié kè).",
          },
        },
        {
          title: "Describing After-School CCAs & Homework",
          problem:
            "Translate: *\"After school finishes at 3:30 p.m., I join extracurricular activities from 3:45 to 4:45.\"*",
          steps: [
            "*After school finishes at 3:30 p.m.*: **下午三点半放学以后 (xiàwǔ sān diǎn bàn fàngxué yǐhòu)**.",
            "*From 3:45 to 4:45* (before verb **参加**): **我从三点四十五分到四点四十五分** (or **从三点三刻到四点三刻**).",
            "*Join CCAs*: **参加课外活动 (cānjiā kèwài huódòng)**.",
          ],
          answer:
            "下午三点半放学以后，我从三点四十五分到四点四十五分参加课外活动。(Xiàwǔ sān diǎn bàn fàngxué yǐhòu, wǒ cóng sān diǎn sìshíwǔ fēn dào sì diǎn sìshíwǔ fēn cānjiā kèwài huódòng.)",
          yourTurn: {
            question:
              "What is the Mandarin phrase for **extracurricular activities / CCAs**?",
            answer: {
              type: "text",
              accept: ["课外活动", "kèwài huódòng"],
              display: "课外活动 (kèwài huódòng)",
            },
            solution: "课外活动 (kèwài huódòng — literally 'outside-class activities') means CCAs / extracurricular activities.",
          },
        },
      ],
    },
    {
      id: "school-facilities",
      heading: "School Facilities & Campus Tour (学校设施)",
      discovery: {
        problem:
          "Look at the endings of these campus rooms: **教室 (classroom)**, **实验室 (lab)**, **电脑室 (computer room)**, **音乐室 (music room)** vs **图书馆 (library)**, **体育馆 (sports hall)** vs **食堂 (canteen)**, **礼堂 (assembly hall)** vs **运动场 (sports field)**. What pattern do those final characters reveal?",
        idea:
          "Mandarin building suffixes work like instant architectural labels: **室 (shì)** = a specialist room, **馆 (guǎn)** = a large hall/pavilion for public/cultural/sports use, **堂 (táng)** = a big communal hall, **场 (chǎng)** = an open outdoor ground/field, and **池 (chí)** = a pool!",
      },
      body: `To give a confident Mandarin campus tour of Tanglin, combine **facility names**, **location words (方位词)**, and **STPVO action sentences**.

### 1. Campus Facilities by Suffix Family

| Suffix | Meaning | Essential Campus Facilities |
|---|---|---|
| **室 (shì)** | Specialist room | 教室 (jiàoshì — classroom), 科学实验室 (kēxué shíyànshì — science lab), 电脑室 (diànnǎoshì — ICT suite), 音乐室 (yīnyuèshì — music room), 艺术室 (yìshùshì — art room), 保健室 (bǎojiànshì — medical room) |
| **馆 (guǎn)** | Large indoor hall / building | 图书馆 (túshūguǎn — library), 体育馆 (tǐyùguǎn — sports hall / gym) |
| **堂 (táng)** | Big communal hall | 食堂 (shítáng — canteen / dining hall), 礼堂 (lǐtáng — assembly hall / auditorium) |
| **场 / 池** | Open field / pool | 运动场 (yùndòngchǎng) / 操场 (cāochǎng — sports field/pitch), 游泳池 (yóuyǒngchí — swimming pool) |

### 2. Saying Where Facilities Are on Campus (**A 在 B 的 + Position**)
- **科学实验室在图书馆的楼上。** (*The science lab is upstairs from the library.*)
- **运动场在体育馆的对面。** (*The sports field is opposite the sports hall.*)
- **音乐室在礼堂的旁边。** (*The music room is next to the assembly hall.*)
- **校园中间有一个很大的游泳池。** (*In the middle of the campus there is a very big swimming pool.*) — Notice **Place + 有 + Facility** for existence!

### 3. Saying What You Do There (**STPVO: 在 + Facility + Verb**)
Always put **在 + Facility** BEFORE the verb — NEVER at the end!
- **午饭时间我在食堂吃午饭。** (*At lunchtime I eat lunch in the canteen.*)
- **我们每星期在科学实验室做实验。** (*Every week we do experiments in the science lab.*)
- **我常常在图书馆借书和复习。** (*I often borrow books and revise in the library.*)
- **下雨的时候我们在体育馆打篮球。** (*When it rains we play basketball in the sports hall.*)`,
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified Tanglin campus map showing Classroom Block, Library, Science Lab, Auditorium, Music Room, Canteen, Sports Hall, Sports Field, and Swimming Pool with position words"><rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Campus Map &amp; Building Suffixes · 校园设施平面图</text><rect x="20" y="40" width="160" height="58" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="100" y="64" text-anchor="middle" font-size="13" font-weight="800" fill="var(--brand)">图书馆 túshūguǎn</text><text x="100" y="84" text-anchor="middle" font-size="11" fill="var(--ink-2)">借书 · 看书 (楼下)</text><rect x="198" y="40" width="164" height="58" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="64" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">科学实验室 shíyànshì</text><text x="280" y="84" text-anchor="middle" font-size="11" fill="var(--ink-2)">做实验 (旁边: 电脑室)</text><rect x="380" y="40" width="160" height="58" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="460" y="64" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">礼堂 &amp; 音乐室</text><text x="460" y="84" text-anchor="middle" font-size="11" fill="var(--ink-2)">lǐtáng · yīnyuèshì</text><rect x="20" y="114" width="160" height="58" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/><text x="100" y="138" text-anchor="middle" font-size="13" font-weight="800" fill="var(--good)">食堂 shítáng</text><text x="100" y="158" text-anchor="middle" font-size="11" fill="var(--ink-2)">午饭时间吃午饭</text><rect x="198" y="114" width="164" height="58" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="280" y="138" text-anchor="middle" font-size="13" font-weight="800" fill="var(--brand)">体育馆 tǐyùguǎn</text><text x="280" y="158" text-anchor="middle" font-size="11" fill="var(--ink-2)">打篮球 · 打羽毛球</text><rect x="380" y="114" width="160" height="58" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/><text x="460" y="138" text-anchor="middle" font-size="13" font-weight="800" fill="var(--good)">运动场 &amp; 游泳池</text><text x="460" y="158" text-anchor="middle" font-size="11" fill="var(--ink-2)">踢足球 · 游泳 (对面)</text><rect x="20" y="186" width="520" height="46" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.2"/><text x="280" y="205" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Suffix Clues: 室 (room) · 馆 (hall/gym) · 堂 (canteen/auditorium) · 场 (field) · 池 (pool)</text><text x="280" y="223" text-anchor="middle" font-size="11" fill="var(--ink)">Location: 体育馆在运动场的对面。 · Action (STPVO): 我们在实验室做实验。</text></svg>',
      diagramCaption:
        "Group campus buildings by their architectural suffix (室 / 馆 / 堂 / 场 / 池) and always place 在 + Facility before the verb.",
      whyItWorks:
        "Because Mandarin builds compound nouns from a function + building type (**科学实验 + 室** = science-experiment room; **游泳 + 池** = swimming pool), once you know five suffixes you can decode brand-new campus rooms on sight even in unseen exam reading texts.",
      keyPoints: [
        "Decode building suffixes instantly: **室** (room), **馆** (library/sports hall), **堂** (canteen/assembly hall), **场** (outdoor field), **池** (pool).",
        "Distinguish **食堂 (shítáng — canteen)** from **礼堂 (lǐtáng — assembly hall)** — watch the first character (**食** food vs **礼** ceremony)!",
        "Put **在 + Facility** BEFORE the verb: **我在图书馆借书**, NEVER *我借书在图书馆*.",
        "Describe campus layout with **A 在 B 的旁边 / 对面 / 前面 / 后面 / 楼上 / 楼下**.",
        "Praise facilities with top-band adjectives: **现代 (xiàndài)**, **宽敞 (kuānchang)**, **明亮 (míngliàng)**, **先进 (xiānjìn)**.",
      ],
      strategies: [
        "**Facility + Activity Hook**: Every time you name a room on your campus tour, immediately add what students do there (**学校有一个现代的图书馆，我午饭后常常在那里借书和复习**).",
        "**Tone Pair Alert**: Remember **教室 (jiàoshì — 4th tone, classroom)** vs **教中文 (jiāo Zhōngwén — 1st tone, teach Chinese)**!",
      ],
      thinkDeeper:
        "Compare **体育馆里有很多学生** (*There are many students inside the sports hall*) with **学生们都在体育馆里** (*The students are all in the sports hall*). Why does the first sentence use **有** while the second uses **在**?",
      workedExamples: [
        {
          title: "Combining Campus Location & Activity",
          problem:
            "Translate into Simplified Chinese: *\"The science lab is next to the library. We do experiments there every Wednesday.\"*",
          steps: [
            "Location frame (**A 在 B 的旁边**): **科学实验室在图书馆的旁边。**",
            "Activity frame (**STPVO**: Subject + Time + Place + Verb+Object): **我们每个星期三在那里做实验。**",
            "Combine cleanly with tone-marked Pinyin.",
          ],
          answer:
            "科学实验室在图书馆的旁边。我们每个星期三在那里做实验。(Kēxué shíyànshì zài túshūguǎn de pángbiān. Wǒmen měi ge xīngqīsān zài nàlǐ zuò shíyàn.)",
          yourTurn: {
            question:
              "What is the Mandarin word for **school canteen / dining hall**? (Watch: NOT assembly hall!)",
            answer: {
              type: "text",
              accept: ["食堂", "shítáng"],
              display: "食堂 (shítáng)",
            },
            solution: "食堂 (shítáng — 食 = food, 堂 = hall) means canteen. Assembly hall is 礼堂 (lǐtáng).",
          },
        },
        {
          title: "Fixing an English-Order Campus Sentence",
          problem:
            "Correct the word order in: *我经常打篮球在体育馆下雨的时候。*",
          steps: [
            "Move the time clause (**下雨的时候** — when it rains) to the front.",
            "Place **在体育馆** (Place) directly BEFORE **打篮球** (Verb+Object).",
            "Write: **下雨的时候，我经常在体育馆打篮球。**",
          ],
          answer: "下雨的时候，我经常在体育馆打篮球。(Xiàyǔ de shíhou, wǒ jīngcháng zài tǐyùguǎn dǎ lánqiú.)",
          yourTurn: {
            question:
              "What is the Mandarin word for **sports hall / indoor gym**?",
            answer: {
              type: "text",
              accept: ["体育馆", "tǐyùguǎn"],
              display: "体育馆 (tǐyùguǎn)",
            },
            solution: "体育馆 (tǐyùguǎn) means sports hall / indoor gymnasium.",
          },
        },
      ],
    },
    {
      id: "comparing-subjects-teachers",
      heading: "Comparing Subjects, Teachers & School Life",
      discovery: {
        problem:
          "Two Year 9 students try to translate *\"Maths is much harder than History\"*. Student A writes *数学比历史很难*. Student B writes **数学比历史难得多**. Why does Student A lose an accuracy mark immediately, while Student B earns top marks?",
        idea:
          "**比 (bǐ)** is ALREADY a degree comparison, so putting **很 (hěn)** or **非常 (fēicháng)** in front of the adjective is strictly forbidden! To show *how much* more, put **一点儿** (*a little*) or **得多** (*much more*) **AFTER** the adjective, or put **更 (gèng — even more)** BEFORE it.",
      },
      body: `Comparing subjects and describing teachers turns a plain list of school facts into a genuine Year 9 / IGCSE top-band essay.

### 1. The Four Comparison Formulas

| Structure | Formula | School-Life Example |
|---|---|---|
| **More … than** | **A 比 B + Adj (+ 一点儿 / 得多)** | **我觉得数学比历史难一点儿。** (Maths is a little harder than History.) |
| **Even more … than** | **A 比 B + 更 (gèng) + Adj** | **科学比地理更有趣。** (Science is even more interesting than Geography.) |
| **Not as … as** | **A 没有 B (那么) + Adj** | **艺术没有物理那么难。** (Art is not as difficult as Physics.) |
| **Superlative (most)** | **最 (zuì) + Adj / Verb** | **我最喜欢科学，因为实验很有趣。** (I like Science most because experiments are fun.) |

> **NEVER write** *数学比历史很难* or *科学比历史非常有趣*!

### 2. Describing Teachers & the **得 (de)** Complement
- Key teacher adjectives: **幽默 (yōumò — humorous)**, **耐心 (nàixīn — patient)**, **严格 (yángé — strict)**, **认真 (rènzhēn — conscientious)**, **友善 (yǒushàn — friendly)**.
- **Saying how well a teacher teaches**: Use the degree complement **得 (de)** after the verb **教 (jiāo — 1st tone!)**:
  - **王老师教得很好。** (*Wáng lǎoshī jiāo de hěn hǎo.* — Teacher Wang teaches very well.)
  - **虽然数学老师有点儿严格，但是他非常耐心，而且教得很好。** (*Although the Maths teacher is a bit strict, he is very patient and teaches very well.*)

### 3. Tanglin School Life Essay Blueprint (80–100 Characters)
1. **Intro + Timetable**: School name, Year 9, **从……到……**, **每天有六节课**.
2. **Subjects + Comparison**: Favourite subject (**最喜欢**), **比** comparison, and a teacher (**教得很好 / 幽默 / 耐心**).
3. **Campus + CCA**: Mention 1–2 modern facilities (**图书馆 / 游泳池 / 科学实验室**) and an after-school **课外活动**.
4. **Verdict + Future**: Balanced **虽然……，但是……** reflection + Year 10 **选修 (options)** plan.`,
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison grammar dashboard showing A 比 B plus adjective with 更 or 一点儿 or 得多, A 没有 B, 最喜欢, and the Verb plus 得 complement 教得很好"><rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Comparing Subjects &amp; Teachers · 比较句与程度补语</text><rect x="20" y="44" width="250" height="86" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="34" y="64" font-size="12" font-weight="800" fill="var(--brand)">✓ A 比 B + Adj (+ 一点儿 / 得多)</text><text x="34" y="88" font-size="13" fill="var(--ink)">数学比历史难一点儿。</text><text x="34" y="108" font-size="13" fill="var(--ink)">科学比地理更有趣。</text><text x="34" y="124" font-size="11" fill="var(--bad)">✗ NEVER: 数学比历史很难!</text><rect x="290" y="44" width="250" height="86" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="304" y="64" font-size="12" font-weight="800" fill="var(--brand)">✓ A 没有 B (那么) + Adj</text><text x="304" y="88" font-size="13" fill="var(--ink)">音乐没有物理那么难。</text><text x="304" y="108" font-size="12" fill="var(--ink-2)">Negating 比 uses 没有, not *不比*</text><text x="304" y="124" font-size="11" fill="var(--good)">✓ Superlative: 我最喜欢科学。</text><rect x="20" y="144" width="520" height="86" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/><text x="34" y="166" font-size="12" font-weight="800" fill="var(--good)">✓ Describing Teachers with Verb + 得 (de) Complement</text><text x="34" y="190" font-size="13" fill="var(--ink)">李老师不但幽默、耐心，而且教得很好 (jiāo de hěn hǎo)！</text><text x="34" y="214" font-size="11" fill="var(--ink-2)">Watch the tone: 教书/教中文 = jiāo (1st tone) · 教室 = jiàoshì (4th tone) · Complement = 得 (NOT 的!)</text></svg>',
      diagramCaption:
        "Master 比 (without 很!), 没有 (not as…as), 最 (most), and 教得很好 (Verb + 得) for top IGCSE accuracy.",
      whyItWorks:
        "In **教得很好**, the particle **得 (de)** opens a *result/degree slot* right after the verb to evaluate HOW the action is performed. Using **的** or **地** there is a classic spelling slip — remember: **的** links to nouns, **地** sits before verbs, and **得** sits right AFTER the verb!",
      keyPoints: [
        "NEVER put **很** or **非常** after **比** — write **数学比历史难得多** or **科学比地理更有趣**.",
        "Negate a comparison with **A 没有 B (那么) + Adj**: **地理没有物理那么难**.",
        "Use **最 (zuì)** for your top pick: **我最喜欢科学，但我最不喜欢……**",
        "Evaluate teaching quality with **Verb + 得**: **教得很好 (jiāo de hěn hǎo)** — NEVER use **的** here!",
        "Balance a strict teacher (**虽然有点儿严格**) with positive qualities (**但是非常耐心，而且教得很好**).",
      ],
      strategies: [
        "**The 比-Scan Habit**: Every single time you write **比** in an exam, immediately scan the next 3 characters to make sure **很** or **非常** did not sneak in!",
        "**Three-Character de Check**: Noun coming next? → **的**. Verb coming next? → **地**. Evaluating a verb right BEFORE it (教___很好)? → **得**!",
      ],
      thinkDeeper:
        "What is the subtle difference in meaning between **数学比历史难** (*Maths is harder than History*) and **历史没有数学那么难** (*History is not as hard as Maths*)? Notice which subject the speaker implies IS genuinely hard!",
      workedExamples: [
        {
          title: "Comparing Two Subjects & Naming Your Favourite",
          problem:
            "Translate into Simplified Chinese with Pinyin: *\"I think Maths is harder than History, but I like Science best.\"*",
          steps: [
            "Open with opinion verb: **我觉得 (Wǒ juéde)**.",
            "Comparison without **很**: **数学比历史难 (shùxué bǐ lìshǐ nán)**.",
            "Contrast with **但是 / 但** + superlative **最**: **但我最喜欢科学 (dàn wǒ zuì xǐhuan kēxué)**.",
          ],
          answer:
            "我觉得数学比历史难，但我最喜欢科学。(Wǒ juéde shùxué bǐ lìshǐ nán, dàn wǒ zuì xǐhuan kēxué.)",
          yourTurn: {
            question:
              "Fill in the single comparison word (no **很**!): 我觉得化学___地理难得多 (Chemistry is much harder than Geography).",
            answer: {
              type: "text",
              accept: ["比", "bǐ"],
              display: "比 (bǐ)",
            },
            solution: "A 比 B + Adj + 得多 compares two subjects: 化学比地理难得多。",
          },
        },
        {
          title: "Describing a Teacher with 得 (de)",
          problem:
            "Fix BOTH errors in this sentence: *我们的中文老师不但幽默，而且教的很好，她比数学老师很耐心。*",
          steps: [
            "Error 1: After the verb **教**, use the degree complement **得** (not **的**) → **教得很好**.",
            "Error 2: Remove **很** after **比** — replace with plain **耐心** or **更耐心 / 耐心得多** → **她比数学老师更耐心**.",
            "Corrected sentence: **我们的中文老师不但幽默，而且教得很好，她比数学老师更耐心。**",
          ],
          answer:
            "我们的中文老师不但幽默，而且教得很好，她比数学老师更耐心。(Wǒmen de Zhōngwén lǎoshī búdàn yōumò, érqiě jiāo de hěn hǎo, tā bǐ shùxué lǎoshī gèng nàixīn.)",
          yourTurn: {
            question:
              "Translate **teaches very well** into Simplified Mandarin (watch the right **de** character!).",
            answer: {
              type: "text",
              accept: ["教得很好", "jiāo de hěn hǎo"],
              display: "教得很好 (jiāo de hěn hǎo)",
            },
            solution: "Use 教 (jiāo, 1st tone) + degree complement 得 (de) + 很好 → 教得很好。",
          },
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "十门科目 (shí mén kēmù)", back: "ten school subjects — whole subjects take 门 (mén)" },
      { front: "六节课 (liù jié kè)", back: "six timetable lessons/periods — individual classes take 节 (jié)" },
      { front: "生物 / 化学 / 物理", back: "shēngwù (Biology) / huàxué (Chemistry) / wùlǐ (Physics)" },
      { front: "地理 / 历史 (dìlǐ / lìshǐ)", back: "Geography / History" },
      { front: "电脑 / 计算机", back: "diànnǎo / jìsuànjī — Computing / Computer Science" },
      { front: "音乐 (yīnyuè)", back: "Music — pronounce 乐 as yuè (4th tone), NOT lè!" },
      { front: "戏剧 / 艺术 / 体育", back: "xìjù (Drama) / yìshù (Art) / tǐyù (PE)" },
      { front: "从上午八点到下午三点半", back: "cóng shàngwǔ bā diǎn dào xiàwǔ sān diǎn bàn — from 8:00 a.m. to 3:30 p.m." },
      { front: "课外活动 (kèwài huódòng)", back: "extracurricular activities / CCAs (use with 参加)" },
      { front: "科学实验室 (kēxué shíyànshì)", back: "science laboratory (做实验 — do experiments)" },
      { front: "图书馆 / 体育馆", back: "túshūguǎn (library) / tǐyùguǎn (sports hall / gym)" },
      { front: "食堂 vs 礼堂", back: "shítáng (canteen — 食 food) vs lǐtáng (assembly hall — 礼 ceremony)" },
      { front: "运动场 / 游泳池", back: "yùndòngchǎng (sports field) / yóuyǒngchí (swimming pool)" },
      { front: "幽默 / 耐心 / 严格", back: "yōumò (humorous) / nàixīn (patient) / yángé (strict)" },
      { front: "教得很好 (jiāo de hěn hǎo)", back: "teaches very well — 1st-tone jiāo + 得 (NOT 的!)" },
      { front: "数学比历史难得多", back: "Maths is much harder than History — NEVER put 很 after 比!" },
    ],
    mustKnow: [
      "Can you name 12+ Year 9 school subjects in Simplified Chinese with accurate tone-marked Pinyin?",
      "Can you distinguish **门 (mén)** for whole subjects from **节 (jié)** for single lessons on a timetable?",
      "Can you describe your school hours using **从……到……** placed BEFORE **上课**?",
      "Can you tell apart **上学/放学** (school day) and **上课/下课** (individual class)?",
      "Can you name 10+ campus facilities and decode their suffixes (**室, 馆, 堂, 场, 池**)?",
      "Can you state where campus rooms are using **A 在 B 的旁边/对面/楼上/楼下**?",
      "Can you put **在 + Facility** BEFORE the action (**在实验室做实验**, **在食堂吃午饭**)?",
      "Can you compare two subjects accurately with **A 比 B + Adj (+ 一点儿/得多/更)** and **没有** without ever adding **很**?",
      "Can you describe teachers with **幽默, 耐心, 严格** and **教得很好** (using **得**)?",
      "Can you write an 80–100 character paragraph introducing Tanglin school life and Year 10 **选修** plans?",
    ],
    misconceptions: [
      {
        wrong: "Never write ❌ 我们每天有六门课 / 我学习九节课。",
        right: "Write instead ✅ 我们每天有六节课 / 我学习九门科目。(节 = timetable periods; 门 = whole subjects!)",
      },
      {
        wrong: "Never write ❌ 我们上课从上午八点到下午三点半。",
        right: "Write instead ✅ 我们从上午八点到下午三点半上课。(从……到…… is a Time phrase and goes BEFORE 上课!)",
      },
      {
        wrong: "Never write ❌ 我觉得数学比历史很难。",
        right: "Write instead ✅ 我觉得数学比历史难得多 / 更难。(NEVER insert 很 or 非常 after 比!)",
      },
      {
        wrong: "Never write ❌ 王老师教的很好。",
        right: "Write instead ✅ 王老师教得很好。(Use degree complement 得 after a verb, never 的!)",
      },
      {
        wrong: "Never write ❌ 我吃午饭在食堂 / 我们做实验在实验室。",
        right: "Write instead ✅ 我在食堂吃午饭 / 我们在实验室做实验。(STPVO: 在 + Place always precedes the verb!)",
      },
      {
        wrong: "Never confuse ❌ 食堂 (canteen) and 礼堂 (assembly hall).",
        right: "Write instead ✅ 在食堂吃午饭 (eat lunch in the canteen) · 在礼堂开周会 (hold assembly in the hall).",
      },
    ],
    examMistakes: [
      "Pronouncing **音乐** as *yīnlè* instead of **yīnyuè** (4th tone) in speaking assessments.",
      "Writing **二节课** or **二门外语** instead of **两节课** and **两门外语**.",
      "Inserting **很** after **比** (*物理比地理很难*) — the single most frequent IGCSE Band-drop error!",
      "Confusing **教室 (jiàoshì, 4th tone — classroom)** with **教 (jiāo, 1st tone — teach)**.",
      "Putting **从……到……** or **在图书馆** after the verb because of English sentence order.",
      "Writing **的** instead of **得** in **教得很好**.",
      "Confusing **上学 / 放学** (whole school day) with **上课 / 下课** (a single period).",
    ],
    mnemonics: [
      {
        topic: "门 (mén) vs 节 (jié)",
        device: "门 = Major doorway (whole Subject) · 节 = bamboo Joint (one Period on the timetable)",
        explanation:
          "You walk through 10 subject doorways (**十门科目**) across the year, sliced into 6 lesson joints (**六节课**) each day.",
      },
      {
        topic: "Campus Building Suffixes (室 · 馆 · 堂 · 场 · 池)",
        device: "Room = 室, Hall/Gym = 馆, Canteen/Assembly = 堂, Field = 场, Pool = 池!",
        explanation:
          "Look at the last character of any school facility to decode its size and purpose instantly.",
      },
      {
        topic: "Three 'de' Particles (的 · 地 · 得)",
        device: "的 before Nouns (好老师) · 地 before Verbs (认真地听) · 得 AFTER Verbs (教得很好)!",
        explanation:
          "Whenever you evaluate HOW a teacher teaches or how a student performs an action right after the verb, lock in **得**.",
      },
    ],
    realWorld: [
      {
        title: "Tanglin's Modern Campus Facilities",
        detail:
          "At Tanglin Trust School in Singapore, students move between the **图书馆 (library)**, **科学实验室 (science labs)**, **体育馆 (sports hall)**, **游泳池 (50m pool)**, and **食堂 (canteen)** — giving you authentic real-life material for IGCSE campus tours!",
        emoji: "🏫",
      },
      {
        title: "Singapore CCAs (课外活动)",
        detail:
          "Co-Curricular Activities (**课外活动 kèwài huódòng**) are a signature part of school life across Singapore. Naming specific clubs like **游泳俱乐部**, **羽毛球**, or **音乐团** makes your Mandarin speaking answers stand out.",
        emoji: "🏸",
      },
      {
        title: "Year 9 → IGCSE Option Choices (选修)",
        detail:
          "During Year 9, students pick their IGCSE subjects (**选修科目 xuǎnxiū kēmù**). Explaining WHY you plan to choose Chinese (**因为将来很有用**) directly practises the future time frame needed for Band A.",
        emoji: "🎯",
      },
      {
        title: "Comparing UK/International & Chinese School Days",
        detail:
          "Many secondary schools in China run from 7:30 a.m. to 5:00 p.m. with **早读 (morning reading)** and **眼保健操 (eye exercises)** — a vivid cultural comparison point alongside Tanglin's **从上午八点到下午三点半** day!",
        emoji: "⏰",
      },
    ],
    videos: [
      {
        title: "School Subjects & Opinions in Mandarin Chinese (IGCSE 0547)",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=Mandarin+Chinese+school+subjects+kemu+IGCSE",
      },
      {
        title: "Chinese Grammar: 从……到…… Time Spans & Timetable",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=Mandarin+Chinese+cong+dao+school+timetable+grammar",
      },
      {
        title: "Mandarin Chinese Campus Facilities & Locations",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=Mandarin+Chinese+school+facilities+tushuguan+shiyanshi",
      },
      {
        title: "How to Use 比 (bǐ) & Verb + 得 (de) Correctly in Chinese",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=Mandarin+Chinese+bi+comparison+de+complement+grammar",
      },
    ],
    formulas: [
      {
        name: "Counting Whole Subjects",
        formula: "Number (2 = 两) + 门 (mén) + Subject / 科目",
        note: "我学习两门外语、十门科目。",
      },
      {
        name: "Counting Timetable Lessons",
        formula: "Number (2 = 两) + 节 (jié) + 课",
        note: "我们每天有六节课，下午有两节课。",
      },
      {
        name: "School-Day Time Span",
        formula: "Subject + 从 (cóng) + Start + 到 (dào) + End + Verb",
        note: "我们从上午八点到下午三点半上课。",
      },
      {
        name: "Ordinal Lesson Slot",
        formula: "Weekday + 第 (dì) + Number + 节课 + 是 + Subject",
        note: "星期三第一节课是中文。",
      },
      {
        name: "Campus Facility Location",
        formula: "Facility A + 在 + Facility B + 的 + Position",
        note: "游泳池在体育馆的对面。",
      },
      {
        name: "Campus Activity (STPVO)",
        formula: "Subject + Time + 在 + Facility + Verb + Object",
        note: "午饭时间我在食堂吃午饭。",
      },
      {
        name: "Comparing Subjects with 比",
        formula: "A + 比 (bǐ) + B + Adj (+ 一点儿 / 得多)",
        note: "数学比历史难得多。(NEVER put 很 after 比!)",
      },
      {
        name: "Even More Comparison",
        formula: "A + 比 (bǐ) + B + 更 (gèng) + Adj",
        note: "科学比地理更有趣。",
      },
      {
        name: "Negative Comparison (Not as … as)",
        formula: "A + 没有 (méiyǒu) + B + (那么) + Adj",
        note: "艺术没有物理那么难。",
      },
      {
        name: "Evaluating Teaching with 得",
        formula: "Teacher + 教得 (jiāo de) + Degree + Adj",
        note: "王老师教得很好！(Use 得, NEVER 的!)",
      },
    ],
  },
};
