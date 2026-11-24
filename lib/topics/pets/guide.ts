// Audited study guide for Year 9 Mandarin Chinese — Pets & Animal Care (宠物)
// Simplified Chinese (简体中文) with tone-marked Pinyin throughout.
import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "pets",
  title: "Pets & Animal Care (宠物)",
  strand: "Pets & School",
  icon: "🐶",
  summary:
    "Master animal measure words (只, 条, 匹), describe your pet's looks and personality, narrate daily pet care, and weigh up the pros and cons of keeping a pet.",
  intro:
    "Pets are one of the highest-scoring speaking and writing topics in Year 9 Mandarin and IGCSE 0547. Examiners immediately notice two things: whether you choose the exact animal measure word (**只 zhī**, **条 tiáo**, **匹 pǐ**) instead of defaulting to **个**, and whether you can go beyond *\"My dog is cute\"* to build rich STPVO care routines and balanced **虽然……但是……** opinions.",
  guide: [
    {
      id: "common-pets-measure-words",
      heading: "Common Pets & Exact Animal Measure Words",
      discovery: {
        problem:
          "Look at these three phrases: **一只小狗 (yì zhī xiǎogǒu)**, **一条金鱼 (yì tiáo jīnyú)**, and **一匹马 (yì pǐ mǎ)**. All three mean *\"one [animal]\"*, yet each uses a completely different word after **一**. Why can't you just use **个 (gè)** for every pet, and how can you tell which animal takes **只**, **条**, or **匹**?",
        idea:
          "Mandarin measure words (量词 liàngcí) classify nouns by **shape and species**, like visual tags: **只 (zhī)** covers most compact animals and birds (dogs, cats, rabbits, hamsters, birds, turtles); **条 (tiáo)** signals long, slender or flexible bodies (goldfish, tropical fish, snakes); **匹 (pǐ)** is reserved strictly for horses. And remember: before ANY measure word, the number *two* is always **两 (liǎng)**, never **二 (èr)**!",
      },
      body: `In Mandarin, you can almost never put a number directly before a noun. Instead, you follow the universal counting bridge:

**Number + Measure Word (量词 liàngcí) + Noun**

For Year 9 pets, four core measure words handle almost every animal you will ever meet in IGCSE 0547:

| Measure Word | Pinyin | Shape / Species Rule | Core Year 9 Pets |
|---|---|---|---|
| **只** | **zhī** (1st tone) | Most pets, small animals & birds | 小狗 (xiǎogǒu), 小猫 (xiǎomāo), 兔子 (tùzi), 仓鼠 (cāngshǔ), 鸟 (niǎo), 鹦鹉 (yīngwǔ), 乌龟 (wūguī) |
| **条** | **tiáo** (2nd tone) | Long, narrow, wiggly or flexible bodies | 金鱼 (jīnyú), 热带鱼 (rèdàiyú), 蛇 (shé) |
| **匹** | **pǐ** (3rd tone) | Horses and ponies only | 马 (mǎ), 小马 (xiǎomǎ) |
| **头** | **tóu** (2nd tone) | Large farm livestock (bonus) | 牛 (niú — cow), 猪 (zhū — pig) |

### Watch the **两 (liǎng)** vs **二 (èr)** Rule & **一 (yī)** Tone Sandhi

- **Two of a pet**: ALWAYS use **两 (liǎng)** before a measure word: **两只小猫 (liǎng zhī xiǎomāo)**, **两条金鱼 (liǎng tiáo jīnyú)**, **两匹马 (liǎng pǐ mǎ)**. Never write *二只猫*!
- **Twelve or twenty pets**: Numbers ending in 2 from 12 upwards revert to **二**: **十二条金鱼 (shí'èr tiáo jīnyú)**, **二十只鸟 (èrshí zhī niǎo)**.
- **Pronouncing 只**: As an animal measure word it is **first tone zhī** (**一只狗 yì zhī gǒu**). When it means *\"only\"* it is **third tone zhǐ** (**我只有一只猫 wǒ zhǐ yǒu yì zhī māo**).
- **Pronoun for animals**: Use **它 (tā)** for pets — never **他** (he) or **她** (she) in formal written exams!`,
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animal measure words map showing 只 for compact pets and birds, 条 for long animals like goldfish and snakes, and 匹 for horses"><rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Animal Measure Words · 动物量词 (Number + MW + Pet)</text><rect x="20" y="48" width="190" height="145" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="115" y="74" text-anchor="middle" font-size="22" font-weight="800" fill="var(--brand)">只 zhī</text><text x="115" y="94" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink-2)">Compact pets &amp; birds</text><text x="115" y="118" text-anchor="middle" font-size="13" fill="var(--ink)">小狗 · 小猫 · 兔子</text><text x="115" y="140" text-anchor="middle" font-size="13" fill="var(--ink)">仓鼠 · 乌龟 · 小鸟</text><text x="115" y="164" text-anchor="middle" font-size="11" fill="var(--good)">✓ 两只小狗 (liǎng zhī)</text><text x="115" y="182" text-anchor="middle" font-size="11" fill="var(--bad)">✗ 二个小狗</text><rect x="224" y="48" width="156" height="145" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="302" y="74" text-anchor="middle" font-size="22" font-weight="800" fill="var(--brand)">条 tiáo</text><text x="302" y="94" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink-2)">Long &amp; slender bodies</text><text x="302" y="120" text-anchor="middle" font-size="13" fill="var(--ink)">金鱼 jīnyú</text><text x="302" y="142" text-anchor="middle" font-size="13" fill="var(--ink)">热带鱼 · 蛇 shé</text><text x="302" y="166" text-anchor="middle" font-size="11" fill="var(--good)">✓ 三条金鱼</text><text x="302" y="182" text-anchor="middle" font-size="11" fill="var(--bad)">✗ 三只金鱼</text><rect x="394" y="48" width="146" height="145" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="467" y="74" text-anchor="middle" font-size="22" font-weight="800" fill="var(--brand)">匹 pǐ</text><text x="467" y="94" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink-2)">Horses &amp; ponies</text><text x="467" y="122" text-anchor="middle" font-size="13" fill="var(--ink)">马 mǎ</text><text x="467" y="144" text-anchor="middle" font-size="13" fill="var(--ink)">小马 xiǎomǎ</text><text x="467" y="166" text-anchor="middle" font-size="11" fill="var(--good)">✓ 两匹白马</text><text x="467" y="182" text-anchor="middle" font-size="11" fill="var(--bad)">✗ 两只马</text><rect x="20" y="204" width="520" height="30" rx="8" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1"/><text x="280" y="223" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Golden Rule: 2 + Measure Word = 两 (liǎng) — 两只猫 · 两条金鱼 · 两匹马</text></svg>',
      diagramCaption:
        "Choose the measure word by animal shape/species (只, 条, 匹) and switch 二 to 两 whenever counting two.",
      whyItWorks:
        "Historically, **只 (zhī)** originally depicted a single bird held in a hand, so it naturally expanded to birds and compact household animals. **条 (tiáo)** originally meant a slender tree branch, explaining why fish, snakes, rivers, and trousers all share **条**. Seeing the visual origin makes the measure words stick without rote memorisation.",
      keyPoints: [
        "Use **只 (zhī)** for dogs (小狗), cats (小猫), rabbits (兔子), hamsters (仓鼠), birds (鸟/鹦鹉), and turtles (乌龟).",
        "Use **条 (tiáo)** for goldfish (金鱼), tropical fish (热带鱼), and snakes (蛇) — never *只* for fish!",
        "Use **匹 (pǐ)** exclusively for horses (马/小马).",
        "Always write **两 (liǎng)** directly before a measure word for *two*: **两只兔子**, **两条金鱼**, **两匹马**.",
        "Use **它 (tā)** as the pronoun for pets, and **养 (yǎng)** for *to keep/raise a pet*.",
      ],
      strategies: [
        "**Shape-Check First**: Before writing a number + animal, pause for one second and picture its silhouette — compact/feathered → **只**, wiggly/swimming → **条**, horse → **匹**.",
        "**Two-Check Second**: Scan every phrase for the digit 2; if a measure word sits right after it, immediately replace **二** with **两**.",
      ],
      thinkDeeper:
        "In everyday Beijing speech, people sometimes say **一条大狗 (yì tiáo dàgǒu)** for a very large dog like a greyhound or wolfhound, while **一只小狗** is standard for pets. Why do you think speakers stretch **条** to big dogs, yet NEVER say *一条仓鼠* (a hamster)?",
      workedExamples: [
        {
          title: "Counting Mixed Pets Accurately",
          problem:
            "Translate into Simplified Chinese with tone-marked Pinyin: *\"My family keeps two dogs and five goldfish.\"*",
          steps: [
            "Identify the verb for keeping pets: **养 (yǎng)** (with **了** for a current settled state, or simply **有**).",
            "Handle *\"two dogs\"*: 2 before a measure word = **两 (liǎng)**; dog takes **只 (zhī)** → **两只小狗 (liǎng zhī xiǎogǒu)**.",
            "Handle *\"five goldfish\"*: 5 = **五 (wǔ)**; goldfish are long/swimming so they take **条 (tiáo)** → **五条金鱼 (wǔ tiáo jīnyú)**.",
            "Join the two noun phrases with **和 (hé)**: **我家养了两只小狗和五条金鱼。**",
          ],
          answer: "我家养了两只小狗和五条金鱼。(Wǒ jiā yǎng le liǎng zhī xiǎogǒu hé wǔ tiáo jīnyú.)",
          yourTurn: {
            question:
              "How do you say **two goldfish** in Mandarin? (Type Simplified Hanzi or tone-marked Pinyin)",
            answer: {
              type: "text",
              accept: ["两条金鱼", "liǎng tiáo jīnyú"],
              display: "两条金鱼 (liǎng tiáo jīnyú)",
            },
            solution:
              "Use 两 (liǎng) for two before a measure word, and 条 (tiáo) for fish → 两条金鱼 (liǎng tiáo jīnyú).",
          },
        },
        {
          title: "Spotting and Fixing Measure-Word Slips",
          problem:
            "Correct the TWO grammar errors in this student sentence: *我朋友家有二只马。*",
          steps: [
            "Error 1: **二 (èr)** stands directly before a measure word — change **二** to **两 (liǎng)**.",
            "Error 2: **马 (mǎ)** never takes **只** — horses require the special classifier **匹 (pǐ)**.",
            "Write the corrected sentence: **我朋友家有两匹马。**",
          ],
          answer: "我朋友家有两匹马。(Wǒ péngyou jiā yǒu liǎng pǐ mǎ.)",
          yourTurn: {
            question:
              "Fill in the single missing measure word: 叔叔在农场养了两___白马 (two white horses).",
            answer: {
              type: "text",
              accept: ["匹", "pǐ"],
              display: "匹 (pǐ)",
            },
            solution: "Horses always take the measure word 匹 (pǐ): 两匹白马 (liǎng pǐ báimǎ).",
          },
        },
      ],
    },
    {
      id: "describing-pets",
      heading: "Describing Your Pet's Appearance & Character",
      discovery: {
        problem:
          "Compare these two Mandarin sentences about a puppy: (A) *我的小狗是活泼。* (B) **我的小狗又活泼又聪明，还长着一双大眼睛。** Why is sentence (A) grammatically wrong, and what makes sentence (B) sound like an A* IGCSE response?",
        idea:
          "In Mandarin, adjectives act like verbs — they do NOT take **是 (shì)**! Instead you link subject + **很 (hěn)** / **非常 (fēicháng)** + adjective, or combine two traits with **又……又…… (yòu…yòu…)** and describe inborn body features with **长着 (zhǎngzhe)**.",
      },
      body: `To bring your pet alive in speaking and writing, layer **four details**: **Name & Age → Colour & Body Parts → Positive Personality → Mild Quirk**.

### 1. Naming & Age
- **我的小狗叫毛毛。** (*Wǒ de xiǎogǒu jiào Máomao.*) — My puppy is called Maomao.
- **它今年三岁了。** (*Tā jīnnián sān suì le.*) — It is three years old this year. (No **是** before age!)

### 2. Body Parts & **长着 (zhǎngzhe)**
Use **有 (yǒu)** or the higher-band verb **长着 (zhǎngzhe — to have natural/inborn features)**:
- **毛 (máo)** — fur/feathers: **它的毛又白又软。** (*Tā de máo yòu bái yòu ruǎn.*)
- **耳朵 (ěrduo)** — ears: **小兔子长着一对长长的耳朵。** (*Xiǎo tùzi zhǎngzhe yí duì chángcháng de ěrduo.*)
- **尾巴 (wěiba)** — tail: **小狗的尾巴短短的，开心的时候会摇尾巴。** (*Xiǎogǒu de wěiba duǎnduǎn de, kāixīn de shíhou huì yáo wěiba.*)
- **眼睛 (yǎnjing)** — eyes: **小猫长着一双大大的蓝眼睛。** (*Xiǎomāo zhǎngzhe yì shuāng dàdà de lán yǎnjing.*)

### 3. Character Traits: **又……又……** vs **有点儿**
- **Positive traits**: 可爱 (kě'ài — cute), 活泼 (huópō — lively), 聪明 (cōngmíng — clever), 温顺 (wēnshùn — gentle), 忠诚 (zhōngchéng — loyal), 友好 (yǒuhǎo — friendly), 安静 (ānjìng — quiet).
- **Double up with 又……又……**: **我的小狗又聪明又活泼。** (*My puppy is both clever and lively.*) — Both adjectives must share the same positive or negative tone!
- **Add nuance with 有点儿 (yǒudiǎnr — a bit)**: Use **有点儿** before slightly negative or quirky traits like **淘气 (táoqì — naughty)**, **懒 (lǎn — lazy)**, **吵 (chǎo — noisy)**, or **胆小 (dǎnxiǎo — timid)**: **它有时候有点儿淘气。** (*It is a bit naughty sometimes.*) Never say *有点儿很淘气* or put **有点儿** after the adjective!`,
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-layer pet description blueprint: Name and Age, Physical Features with 长着, Personality with 又...又..., and Mild Quirk with 有点儿"><rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">4-Layer Pet Description Blueprint · 描写宠物四步法</text><rect x="20" y="46" width="250" height="84" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="34" y="68" font-size="12" font-weight="700" fill="var(--brand)">1. Name &amp; Age (名字和年龄)</text><text x="34" y="90" font-size="13" fill="var(--ink)">我的小狗叫毛毛，今年两岁。</text><text x="34" y="112" font-size="11" fill="var(--ink-2)">叫 jiào (called) · 两岁 (no 是!)</text><rect x="290" y="46" width="250" height="84" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="304" y="68" font-size="12" font-weight="700" fill="var(--brand)">2. Features (外貌 · 长着)</text><text x="304" y="90" font-size="13" fill="var(--ink)">它长着棕色短毛和长尾巴。</text><text x="304" y="112" font-size="11" fill="var(--ink-2)">毛 máo · 耳朵 ěrduo · 尾巴 wěiba</text><rect x="20" y="144" width="250" height="88" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/><text x="34" y="166" font-size="12" font-weight="700" fill="var(--good)">3. Positive Traits (又……又……)</text><text x="34" y="188" font-size="13" fill="var(--ink)">毛毛又聪明又活泼，非常温顺。</text><text x="34" y="210" font-size="11" fill="var(--ink-2)">Never write *是活泼* — use 很 or 又…又…</text><rect x="290" y="144" width="250" height="88" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/><text x="304" y="166" font-size="12" font-weight="700" fill="var(--bad)">4. Mild Quirk (有点儿 + Adj)</text><text x="304" y="188" font-size="13" fill="var(--ink)">可是它有时候有点儿淘气。</text><text x="304" y="210" font-size="11" fill="var(--ink-2)">有点儿 goes BEFORE adj (淘气/懒/吵)</text></svg>',
      diagramCaption:
        "Combine all four layers to turn a basic single-clause description into an IGCSE top-band paragraph.",
      whyItWorks:
        "Mandarin adjectives are **stative verbs** (*活泼* already means *\"to be lively\"*), so inserting **是** creates a redundant double verb. Adding **很 (hěn)** acts as a rhythmic neutral buffer, while **又……又……** lets you showcase two high-level adjectives in a single tight clause.",
      keyPoints: [
        "Never link a subject to a plain adjective with **是** — write **它很可爱**, NOT *它是可爱*.",
        "Use **叫 (jiào)** for a pet's name (**我的小猫叫雪球** — My cat is called Snowball).",
        "Use **长着 (zhǎngzhe)** for natural physical features (**长着白色的长毛和红眼睛**).",
        "Join two matching adjectives with **又……又……**: **又聪明又温顺** (both clever and gentle).",
        "Place **有点儿 (yǒudiǎnr)** directly **before** a mildly negative adjective (**有点儿淘气 / 有点儿懒**), never after it.",
      ],
      strategies: [
        "**Adjective-Pair Upgrade**: Whenever you catch yourself writing *很可爱，也很聪明*, fuse it immediately into **又可爱又聪明** for higher grammatical range.",
        "**Show, Don't Just Tell**: Follow a personality adjective with a tiny action — e.g. **它很淘气，常常咬我的袜子** (It is naughty and often chews my socks).",
      ],
      thinkDeeper:
        "Why does **又可爱又淘气** sound slightly awkward to native speakers, whereas **很可爱，可是有点儿淘气** sounds completely natural?",
      workedExamples: [
        {
          title: "Upgrading a Basic Pet Description",
          problem:
            "Combine these facts into ONE natural Mandarin sentence using **又……又……** and **长着**: *My rabbit has white fur. It is cute and gentle.*",
          steps: [
            "Start with the subject: **我的兔子 (Wǒ de tùzi)**.",
            "Describe the fur with **长着**: **长着白色的毛 (zhǎngzhe báisè de máo)**.",
            "Combine *cute* (**可爱**) and *gentle* (**温顺**) with **又……又……**: **又可爱又温顺 (yòu kě'ài yòu wēnshùn)**.",
            "Join cleanly: **我的兔子长着白色的毛，又可爱又温顺。**",
          ],
          answer: "我的兔子长着白色的毛，又可爱又温顺。(Wǒ de tùzi zhǎngzhe báisè de máo, yòu kě'ài yòu wēnshùn.)",
          yourTurn: {
            question:
              "Translate into Mandarin: **My puppy is called Maomao.** (Use 叫 and Simplified Hanzi or tone-marked Pinyin)",
            answer: {
              type: "text",
              accept: ["我的小狗叫毛毛", "我的狗叫毛毛", "wǒ de xiǎogǒu jiào máomao", "wǒ de gǒu jiào máomao"],
              display: "我的小狗叫毛毛 (Wǒ de xiǎogǒu jiào Máomao)",
            },
            solution: "Subject (我的小狗) + 叫 (jiào, is called) + name (毛毛) → 我的小狗叫毛毛。",
          },
        },
        {
          title: "Using 有点儿 Correctly",
          problem:
            "Fix the word order and meaning error in: *我的小猫很懒有点儿。*",
          steps: [
            "**有点儿 (yǒudiǎnr)** MUST stand **before** the adjective, never after it.",
            "Do not stack **很** and **有点儿** together — **有点儿** already serves as the degree adverb.",
            "Write: **我的小猫有点儿懒。** (*Wǒ de xiǎomāo yǒudiǎnr lǎn.*)",
          ],
          answer: "我的小猫有点儿懒。(Wǒ de xiǎomāo yǒudiǎnr lǎn.)",
          yourTurn: {
            question:
              "What is the Mandarin word for **naughty / mischievous** (often paired with 有点儿 for pets)?",
            answer: {
              type: "text",
              accept: ["淘气", "调皮", "táoqì", "tiáopí"],
              display: "淘气 (táoqì)",
            },
            solution: "淘气 (táoqì) — or 调皮 (tiáopí) — means naughty/mischievous: 它有点儿淘气。",
          },
        },
      ],
    },
    {
      id: "caring-for-pets",
      heading: "Looking After Pets (照顾宠物)",
      discovery: {
        problem:
          "An English student translates *\"I walk the dog in the park every evening\"* word-for-word as *我遛狗在公园每天晚上*. Why does a Mandarin listener immediately stumble on this sentence, and what is the exact order those four blocks must sit in?",
        idea:
          "Mandarin locks every action sentence into **STPVO** order: **Subject + Time + Place + Verb + Object**. Time (**每天晚上**) and Place (**在公园**) ALWAYS stand **before** the action (**遛狗**): **我每天晚上在公园遛狗。**",
      },
      body: `Describing how you **look after (照顾 zhàogù)** a pet is the core of Year 9 Term 2 speaking and writing. Master these six high-frequency pet-care verbs and their special structures:

| Verb / Phrase | Pinyin | Meaning | Essential Pattern |
|---|---|---|---|
| **养宠物** | **yǎng chǒngwù** | to keep / raise a pet | 我家养了一只小狗。 |
| **喂** | **wèi** | to feed | 我每天早晚**喂**它吃狗粮 / **给**它**喂**食。 |
| **遛狗** | **liù gǒu** | to walk the dog | 晚饭后我去公园**遛狗**。 |
| **洗澡** | **xǐzǎo** | to bathe | 我周末**给**小狗**洗澡** (NEVER *洗澡小狗*!). |
| **陪……玩儿** | **péi…wánr** | to play with (accompany) | 放学后我**陪**它**玩儿**半个小时。 |
| **带……去看兽医** | **dài…qù kàn shòuyī** | to take … to the vet | 如果它生病了，我**带**它**去看兽医**。 |

### Two Traps That Catch Year 9 Students Every Time

1. **给 + Pet + 洗澡 (gěi…xǐzǎo)**: **洗澡** is a verb-object compound (*wash + bath*), so it CANNOT take a second object directly after it. Never write *我洗澡我的狗*! Instead, put **给 + pet** in front: **我给我的小狗洗澡。** (Literally: *I for my puppy wash-a-bath.*)
2. **STPVO Word Order**: Always place **Time** and **Place** BEFORE the verb:
   - **Subject**: 我 (wǒ)
   - **Time**: 每天放学以后 (měitiān fàngxué yǐhòu)
   - **Place**: 在公园里 (zài gōngyuán lǐ)
   - **Verb + Object**: 遛狗 (liù gǒu)
   - Full sentence: **我每天放学以后在公园里遛狗。**

### Extra Care Actions for Higher Marks
- **清理笼子 (qīnglǐ lóngzi)** — clean out the cage (hamsters, rabbits, birds)
- **给鱼缸换水 (gěi yúgāng huàn shuǐ)** — change the water in the fish tank
- **给小猫梳毛 (gěi xiǎomāo shū máo)** — brush the cat's fur
- **训练小狗 (xùnliàn xiǎogǒu)** — train the puppy`,
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="STPVO sentence order pipeline for pet care showing Subject, Time, Place, Verb and Object plus the 给 plus pet plus 洗澡 rule"><rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Pet-Care Sentence Engine · STPVO 语序</text><rect x="20" y="50" width="84" height="74" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="62" y="72" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">S · Subject</text><text x="62" y="96" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">我</text><text x="62" y="114" text-anchor="middle" font-size="10" fill="var(--ink-2)">wǒ</text><text x="113" y="92" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink-2)">→</text><rect x="122" y="50" width="136" height="74" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="190" y="72" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">T · Time</text><text x="190" y="96" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">每天晚上七点</text><text x="190" y="114" text-anchor="middle" font-size="10" fill="var(--ink-2)">měitiān wǎnshang qī diǎn</text><text x="267" y="92" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink-2)">→</text><rect x="276" y="50" width="114" height="74" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="333" y="72" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">P · Place</text><text x="333" y="96" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">在公园里</text><text x="333" y="114" text-anchor="middle" font-size="10" fill="var(--ink-2)">zài gōngyuán lǐ</text><text x="399" y="92" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink-2)">→</text><rect x="408" y="50" width="132" height="74" rx="10" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.5"/><text x="474" y="72" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">V + O · Action</text><text x="474" y="96" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)">遛狗 / 陪它玩儿</text><text x="474" y="114" text-anchor="middle" font-size="10" fill="var(--ink-2)">liù gǒu / péi tā wánr</text><rect x="20" y="142" width="250" height="86" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/><text x="34" y="164" font-size="12" font-weight="700" fill="var(--good)">✓ Separable Verb Rule (洗澡)</text><text x="34" y="188" font-size="13" fill="var(--ink)">我每个星期六给小狗洗澡。</text><text x="34" y="210" font-size="11" fill="var(--ink-2)">Use 给 (gěi) + pet BEFORE 洗澡</text><rect x="290" y="142" width="250" height="86" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/><text x="304" y="164" font-size="12" font-weight="700" fill="var(--brand)">✓ Serial-Verb Vet Pattern (带…去…)</text><text x="304" y="188" font-size="13" fill="var(--ink)">妈妈带小猫去看兽医。</text><text x="304" y="210" font-size="11" fill="var(--ink-2)">带 (take) + pet + 去 + 看兽医 (vet)</text></svg>',
      diagramCaption:
        "Put Time and Place before the Verb (STPVO), and use 给 + pet + 洗澡 when bathing a pet.",
      whyItWorks:
        "Mandarin builds scenes like a film camera zooming in: **Who** (Subject) → **When** (Time) → **Where** (Place) → **Action** (Verb + Object). Because the setting is established first, you never tack *\"in the park\"* or *\"every morning\"* onto the end of a sentence.",
      keyPoints: [
        "Follow **STPVO** strictly: **我每天晚上在公园遛狗** (Subject + Time + Place + Verb + Object).",
        "Say **给 + pet + 洗澡** (give the pet a bath), NEVER *洗澡小狗*.",
        "Use **陪 + pet + 玩儿** (accompany the pet to play) and **带 + pet + 去看兽医** (take the pet to the vet).",
        "Distinguish **遛狗 (liù gǒu — walk the dog)** from **喂狗 (wèi gǒu — feed the dog)** — watch the tone and Hanzi!",
        "Add frequency words right before the verb phrase: **每天 (every day)**, **每星期一次 (once a week)**, **常常 (often)**.",
      ],
      strategies: [
        "**Zoom-In Check**: Before finishing any Mandarin sentence, ask: *Did I put the time and place BEFORE the verb?* If either is sitting at the end, move it forward!",
        "**Routine Sequencing**: Link three pet-care jobs with **先……，然后……，最后……** (first… then… finally…) to score top fluency marks.",
      ],
      thinkDeeper:
        "**遛狗 (liù gǒu)** is also a verb-object compound (遛 = stroll/air, 狗 = dog). How would you say *\"walk the dog for thirty minutes\"* in Mandarin without putting *三十分钟* right after *狗*?",
      workedExamples: [
        {
          title: "Building a Full STPVO Routine Sentence",
          problem:
            "Put these scrambled elements into the right Mandarin order: `遛狗` / `每天早上` / `我` / `在公园`.",
          steps: [
            "Slot 1 (Subject): **我 (wǒ)**.",
            "Slot 2 (Time): **每天早上 (měitiān zǎoshang)**.",
            "Slot 3 (Place): **在公园 (zài gōngyuán)**.",
            "Slot 4 (Verb + Object): **遛狗 (liù gǒu)**.",
            "Combine: **我每天早上在公园遛狗。** (Time may also stand before Subject for emphasis: **每天早上我在公园遛狗。**)",
          ],
          answer: "我每天早上在公园遛狗。(Wǒ měitiān zǎoshang zài gōngyuán liù gǒu.)",
          yourTurn: {
            question:
              "What is the Mandarin verb phrase for **to walk the dog**? (Simplified Hanzi or tone-marked Pinyin)",
            answer: {
              type: "text",
              accept: ["遛狗", "liù gǒu", "liùgǒu"],
              display: "遛狗 (liù gǒu)",
            },
            solution: "遛狗 (liù gǒu) means to walk the dog — note 4th tone on liù and 3rd tone on gǒu.",
          },
        },
        {
          title: "Giving a Pet a Bath & Visiting the Vet",
          problem:
            "Translate into Simplified Chinese: *\"At weekends I give my puppy a bath.\"*",
          steps: [
            "Time word: **周末 (zhōumò)** (at weekends) + Subject **我 (wǒ)**.",
            "Use the **给 + recipient + 洗澡** frame: **给我的小狗洗澡 (gěi wǒ de xiǎogǒu xǐzǎo)**.",
            "Assemble: **周末我给我的小狗洗澡。** (or **我周末给小狗洗澡。**)",
          ],
          answer: "周末我给我的小狗洗澡。(Zhōumò wǒ gěi wǒ de xiǎogǒu xǐzǎo.)",
          yourTurn: {
            question:
              "What is the Mandarin word for **vet / veterinarian**?",
            answer: {
              type: "text",
              accept: ["兽医", "shòuyī"],
              display: "兽医 (shòuyī)",
            },
            solution: "兽医 (shòuyī — literally 'animal doctor'): 带它去看兽医 (take it to see the vet).",
          },
        },
      ],
    },
    {
      id: "reasons-for-against-pets",
      heading: "Opinions: Pros & Cons of Keeping a Pet",
      discovery: {
        problem:
          "Read this sentence: **虽然养狗很累，但是它是我最好的朋友。** An English speaker often deletes **但是** because in English you cannot say *\"Although… but…\"*. What happens in Mandarin if you keep BOTH **虽然** and **但是** — is that an error or actually better?",
        idea:
          "In Mandarin, paired connectives work as **matched brackets**! **虽然……，但是……** (*although…, yet…*) and **因为……，所以……** (*because…, so…*) are NOT errors — using BOTH halves together is natural, idiomatic, and directly rewarded on IGCSE mark schemes!",
      },
      body: `High-band Year 9 and IGCSE answers never give a one-sided opinion. They weigh up **benefits (好处 hǎochù)** against **drawbacks (坏处 huàichù)** using paired connectives.

### The Three Power Pairs

1. **因为……，所以……** (*yīnwèi……, suǒyǐ……* — because…, therefore/so…)
   - **因为家里太小，所以我们没有养狗。** (*Because our home is too small, we don't keep a dog.*)
   - **因为爸爸对猫毛过敏，所以我不能养猫。** (*Because Dad is allergic to cat fur, I can't keep a cat.*)
2. **虽然……，但是……** (*suīrán……, dànshì……* — although…, yet/but…)
   - **养狗虽然很累，但是它是我最好的朋友。** (*Although keeping a dog is tiring, it is my best friend.*)
   - Notice: when both clauses share the same subject, **虽然** can sit either before OR after the subject!
3. **不但……，而且……** (*búdàn……, érqiě……* — not only…, but also…)
   - **养宠物不但能陪伴我们，而且能培养责任感。** (*Keeping a pet can not only keep us company, but also build a sense of responsibility.*)

### Allergy Pattern: **对……过敏 (duì…guòmǐn)**
To say someone is allergic to something, NEVER translate *\"to\"* as 到 or 给. Always use **对 (duì)**:
- **Subject + 对 + Allergen + 过敏**
- **我对猫毛过敏。** (*Wǒ duì māomáo guòmǐn.* — I am allergic to cat fur.)

### Balanced Pros & Cons Bank

| Pros of Keeping a Pet (好处 hǎochù) | Cons / Reasons Against (坏处 huàichù) |
|---|---|
| 陪伴我们，不觉得孤独 (keeps us company, not lonely) | 家里太小，没有足够的空间 (home too small, not enough space) |
| 培养责任感 / 学会负责任 (builds responsibility) | 爸爸妈妈工作很忙，没时间照顾 (too busy, no time to care) |
| 每天遛狗可以多做运动 (daily walks give exercise) | 对猫毛/狗毛过敏 (allergic to cat/dog fur) |
| 带来快乐，帮我放松心情 (brings joy, helps relax) | 买狗粮和看兽医很花钱 (food and vet bills cost a lot) |`,
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Balanced scales showing Pros and Cons of keeping a pet joined by Mandarin paired connectives 因为所以 and 虽然但是"><rect x="4" y="4" width="552" height="242" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><text x="280" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Weighing Pros &amp; Cons · 养宠物的好处与坏处</text><rect x="20" y="44" width="248" height="122" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/><text x="144" y="66" text-anchor="middle" font-size="13" font-weight="800" fill="var(--good)">✓ 好处 hǎochù (Pros)</text><text x="34" y="90" font-size="12" fill="var(--ink)">• 陪伴我们，不觉得孤独</text><text x="34" y="112" font-size="12" fill="var(--ink)">• 学会负责任 (责任感)</text><text x="34" y="134" font-size="12" fill="var(--ink)">• 带来快乐、放松心情</text><text x="34" y="156" font-size="12" fill="var(--ink)">• 遛狗能多做运动</text><rect x="292" y="44" width="248" height="122" rx="10" fill="var(--surface-2)" stroke="var(--bad)" stroke-width="1.5"/><text x="416" y="66" text-anchor="middle" font-size="13" font-weight="800" fill="var(--bad)">✗ 坏处 huàichù (Cons)</text><text x="306" y="90" font-size="12" fill="var(--ink)">• 家里太小，没空间</text><text x="306" y="112" font-size="12" fill="var(--ink)">• 没时间照顾，很累</text><text x="306" y="134" font-size="12" fill="var(--ink)">• 对猫毛/狗毛过敏</text><text x="306" y="156" font-size="12" fill="var(--ink)">• 买食物和看兽医花钱</text><rect x="20" y="178" width="520" height="54" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/><text x="280" y="200" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Matched Connective Brackets (必须成对使用!)</text><text x="280" y="220" text-anchor="middle" font-size="12" fill="var(--ink)">虽然养狗很累，但是它是我最好的朋友。 · 因为对猫毛过敏，所以不能养猫。</text></svg>',
      diagramCaption:
        "Pair 虽然……但是…… and 因为……所以…… to weigh up advantages and disadvantages smoothly.",
      whyItWorks:
        "Because Mandarin has no verb tenses or subjunctive endings to signal a subordinate clause, **paired connectives** act like opening and closing brackets — **虽然** opens the concession and **但是** signals the turn to your real conclusion.",
      keyPoints: [
        "Always pair **虽然……，但是……** (although…, yet…) and **因为……，所以……** (because…, so…) in formal writing.",
        "Use **对 + allergen + 过敏** (*duì…guòmǐn*) for allergies: **弟弟对猫毛过敏**.",
        "Express *no time to look after* concisely: **没时间照顾 (méi shíjiān zhàogù)**.",
        "Use **不但……，而且……** (*not only… but also…*) to stack two reasons for keeping a pet.",
        "Remember Singapore context vocabulary: **公寓 (gōngyù — flat/condo)**, **空间 (kōngjiān — space)**, **领养 (lǐngyǎng — adopt)**.",
      ],
      strategies: [
        "**Concession Sandwich**: Even if you love pets, always acknowledge ONE drawback first with **虽然……，但是……** — examiners reward balanced argumentation.",
        "**No-Pet Blueprint**: If you don't own a pet in real life, never write a 5-character answer *我没有宠物*. Explain WHY with **因为……，所以……** and say what pet you WOULD like in the future (**将来我想养……**).",
      ],
      thinkDeeper:
        "In **虽然我爸爸对猫毛过敏，但是我们养了五条金鱼**, the two subjects (**我爸爸** and **我们**) are different. Where MUST **虽然** sit when the two clauses have different subjects — before or after the first subject?",
      workedExamples: [
        {
          title: "Explaining Why a Family Cannot Keep a Cat",
          problem:
            "Translate into Simplified Chinese using **因为……，所以……** and **对……过敏**: *\"Because my younger sister is allergic to cat fur, my family does not keep a cat.\"*",
          steps: [
            "Open the cause clause with **因为 (yīnwèi)**: **因为妹妹对猫毛过敏**.",
            "Open the result clause with **所以 (suǒyǐ)**: **所以我家没有养猫** (or **所以我家不养猫**).",
            "Combine: **因为妹妹对猫毛过敏，所以我家没有养猫。**",
          ],
          answer: "因为妹妹对猫毛过敏，所以我家没有养猫。(Yīnwèi mèimei duì māomáo guòmǐn, suǒyǐ wǒ jiā méiyǒu yǎng māo.)",
          yourTurn: {
            question:
              "Fill in the single missing preposition: 爸爸___猫毛过敏 (Dad is allergic to cat fur).",
            answer: {
              type: "text",
              accept: ["对", "duì"],
              display: "对 (duì)",
            },
            solution: "The allergy pattern always uses 对 (duì): Subject + 对 + allergen + 过敏.",
          },
        },
        {
          title: "Writing a Balanced 虽然……但是…… Opinion",
          problem:
            "Complete the sentence with the right paired connective and translate: *虽然照顾宠物很花时间，___它能给我们带来很多快乐。*",
          steps: [
            "Spot the opening bracket **虽然 (suīrán — although)**.",
            "Supply its closing partner **但是 (dànshì)** or **可是 (kěshì)**.",
            "Translate: *\"Although looking after a pet takes a lot of time, it can bring us a lot of joy.\"*",
          ],
          answer: "但是 (dànshì) / 可是 (kěshì) — Although looking after a pet takes a lot of time, it can bring us a lot of joy.",
          yourTurn: {
            question:
              "Fill in the paired connective that completes **虽然**: 养狗虽然很累，___它是我最好的朋友。",
            answer: {
              type: "text",
              accept: ["但是", "可是", "dànshì", "kěshì"],
              display: "但是 (dànshì)",
            },
            solution: "虽然 (although) pairs with 但是 (dànshì) or 可是 (kěshì).",
          },
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "一只小狗 (yì zhī xiǎogǒu)", back: "one puppy / dog — measure word 只 (zhī, 1st tone)" },
      { front: "两条金鱼 (liǎng tiáo jīnyú)", back: "two goldfish — 两 before MW, 条 (tiáo) for fish" },
      { front: "一匹马 (yì pǐ mǎ)", back: "one horse — horses ALWAYS take 匹 (pǐ)" },
      { front: "仓鼠 (cāngshǔ)", back: "hamster — measure word 只 (一只仓鼠)" },
      { front: "乌龟 (wūguī)", back: "turtle / tortoise — measure word 只 (一只乌龟)" },
      { front: "毛 / 尾巴 / 耳朵", back: "máo (fur) / wěiba (tail) / ěrduo (ear)" },
      { front: "活泼 (huópō)", back: "lively, energetic (adjective — use 很 or 又…又…, no 是)" },
      { front: "淘气 (táoqì)", back: "naughty, mischievous — often with 有点儿 (有点儿淘气)" },
      { front: "温顺 (wēnshùn)", back: "gentle, docile (character trait)" },
      { front: "照顾宠物 (zhàogù chǒngwù)", back: "to look after a pet" },
      { front: "遛狗 (liù gǒu)", back: "to walk the dog (note 4th tone liù!)" },
      { front: "喂食 (wèishí)", back: "to feed (喂 wèi, 4th tone)" },
      { front: "给小狗洗澡 (gěi xiǎogǒu xǐzǎo)", back: "to give the puppy a bath (NEVER *洗澡小狗*)" },
      { front: "带它去看兽医 (dài tā qù kàn shòuyī)", back: "to take it to see the vet (兽医 shòuyī)" },
      { front: "对猫毛过敏 (duì māomáo guòmǐn)", back: "allergic to cat fur (always use 对 duì)" },
      { front: "虽然……，但是……", back: "suīrán…, dànshì… — although…, yet/but… (keep BOTH halves!)" },
    ],
    mustKnow: [
      "Can you name at least 8 common pets in Simplified Chinese with tone-marked Pinyin?",
      "Can you pick the exact animal measure word (**只**, **条**, **匹**) without defaulting to 个?",
      "Can you switch **二** to **两** every time you count *two* pets (两只猫, 两条金鱼, 两匹马)?",
      "Can you describe a pet's name, age, fur/ears/tail using **叫** and **长着**?",
      "Can you combine two positive traits with **又……又……** and add a quirk with **有点儿**?",
      "Can you order pet-care sentences cleanly in **STPVO** (Subject + Time + Place + Verb + Object)?",
      "Can you use **给 + pet + 洗澡**, **陪 + pet + 玩儿**, and **带 + pet + 去看兽医** accurately?",
      "Can you explain allergies with **对……过敏** and lack of time with **没时间照顾**?",
      "Can you weigh pros and cons using **因为……，所以……** and **虽然……，但是……**?",
      "Can you write a 70–90 character Year 9 paragraph introducing a real or dream pet?",
    ],
    misconceptions: [
      {
        wrong: "Never write ❌ 我家有二只金鱼。",
        right: "Write instead ✅ 我家有两条金鱼。(Use 两 for 2 before a MW, and 条 — never 只 — for fish!)",
      },
      {
        wrong: "Never write ❌ 我的小狗是可爱。",
        right: "Write instead ✅ 我的小狗很可爱 / 我的小狗又可爱又聪明。(Adjectives never take 是.)",
      },
      {
        wrong: "Never write ❌ 我每周末洗澡我的小狗。",
        right: "Write instead ✅ 我每周末给我的小狗洗澡。(洗澡 is a verb-object compound — put 给 + pet in front!)",
      },
      {
        wrong: "Never write ❌ 我遛狗在公园每天晚上。",
        right: "Write instead ✅ 我每天晚上在公园遛狗。(STPVO: Time and Place ALWAYS come before the verb!)",
      },
      {
        wrong: "Never write ❌ 爸爸过敏猫毛 / 爸爸给猫毛过敏。",
        right: "Write instead ✅ 爸爸对猫毛过敏。(Allergy structure is ALWAYS Subject + 对 + allergen + 过敏.)",
      },
      {
        wrong: "Never write ❌ 我的小猫可爱有点儿。",
        right: "Write instead ✅ 我的小猫有点儿淘气。(有点儿 goes BEFORE a slightly negative adjective, never after.)",
      },
    ],
    examMistakes: [
      "Using **个 (gè)** as a lazy catch-all for animals (*一个狗*) — costs immediate accuracy marks in IGCSE 0547.",
      "Writing **他** (he) or **她** (she) instead of **它 (tā)** when referring back to a pet.",
      "Forgetting the second half of **虽然……，但是……** or **因为……，所以……** because of English interference.",
      "Confusing **只 (zhī, 1st tone — animal MW)** with **只 (zhǐ, 3rd tone — only)** in speaking/Pinyin tasks.",
      "Accidentally mixing Traditional forms into Simplified exam scripts — always stick strictly to Simplified **猫, 只, 条, 马, 乌龟, 养, 照顾**.",
      "Putting the pet after **洗澡** (*洗澡狗*) instead of using **给狗洗澡**.",
      "Writing a one-line answer (*我没有宠物*) when you don't own a pet — always add reasons (**因为……所以……**) and a future wish (**将来我想养……**).",
    ],
    mnemonics: [
      {
        topic: "Animal Measure Words (只 · 条 · 匹)",
        device: "ZIP — Z (只 zhī) for Zoo-small pets, I/T (条 tiáo) for Tall/long wigglers, P (匹 pǐ) for Ponies!",
        explanation:
          "Picture a compact hamster/dog/cat/bird/turtle (只), a long wavy goldfish or snake (条), and a prancing pony/horse (匹).",
      },
      {
        topic: "STPVO Pet-Care Word Order",
        device: "S-T-P-V-O = Someone Takes Pets Very Orderly (Subject → Time → Place → Verb → Object)",
        explanation:
          "Time and Place always set the stage BEFORE the care verb: 我 (S) 每天晚上 (T) 在公园 (P) 遛 (V) 狗 (O).",
      },
      {
        topic: "Pet Care Verbs Trio (喂 · 遛 · 洗)",
        device: "Feed it (喂 wèi — has mouth 口), Walk it (遛 liù — has walking radical 辶), Bathe it (洗 xǐ — has water 氵)!",
        explanation:
          "Every key pet-care character carries its meaning right inside its left-hand radical: 口 = mouth (feed), 辶 = walk/road (walk the dog), 氵 = three water drops (wash).",
      },
    ],
    realWorld: [
      {
        title: "HDB & Condo Pet Rules in Singapore",
        detail:
          "In Singapore HDB flats, residents may keep one approved small dog breed (like a Maltese or Toy Poodle) or up to two cats under NParks' Cat Management Framework, which is why **因为公寓空间小，所以我们养了小猫或金鱼** is a super authentic speaking point for Tanglin students!",
        emoji: "🇸🇬",
      },
      {
        title: "Goldfish & Good Fortune (年年有余)",
        detail:
          "In Chinese culture, **金鱼 (jīnyú)** sounds like *\"abundant gold\"* and **鱼 (yú)** is a homophone for **余 (yú — surplus)**. Many Singaporean Chinese homes and shops keep **三条、六条或九条金鱼** for harmony and prosperity.",
        emoji: "🐠",
      },
      {
        title: "Adopt, Don't Shop — 领养代替购买",
        detail:
          "Animal welfare charities such as SPCA Singapore promote **领养代替购买 (lǐngyǎng dàitì gòumǎi — adopt instead of buy)**. Knowing **领养 (lǐngyǎng)** lets you give thoughtful, mature answers in IGCSE discussions.",
        emoji: "🐾",
      },
      {
        title: "Leash Law & Responsible Ownership",
        detail:
          "Singapore's parks (like Botanic Gardens and East Coast Park) require dogs to be kept on a **牵引绳 (qiānyǐnshéng — leash)** outside designated dog runs — a great concrete detail when discussing **负责任 (fù zérèn)**.",
        emoji: "🦮",
      },
    ],
    videos: [
      {
        title: "Chinese Animal Measure Words (只, 条, 匹) Explained",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=Mandarin+Chinese+animal+measure+words+zhi+tiao+pi",
      },
      {
        title: "Talking About Pets in Mandarin Chinese (IGCSE 0547)",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=IGCSE+Mandarin+Chinese+pets+chongwu+vocabulary",
      },
      {
        title: "Chinese Grammar: 又……又…… vs 有点儿",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=Mandarin+grammar+you+you+youdianr+explanation",
      },
      {
        title: "Chinese Paired Connectives: 虽然……但是…… & 因为……所以……",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=Mandarin+Chinese+suiran+danshi+yinwei+suoyi",
      },
    ],
    formulas: [
      {
        name: "Animal Counting Formula",
        formula: "Number (2 = 两) + 只 / 条 / 匹 + Animal",
        note: "两只小狗 (2 dogs) · 三条金鱼 (3 goldfish) · 两匹马 (2 horses)",
      },
      {
        name: "Naming a Pet",
        formula: "我的 + [Pet] + 叫 + [Name]",
        note: "我的小狗叫毛毛。(Wǒ de xiǎogǒu jiào Máomao.)",
      },
      {
        name: "Natural Physical Features",
        formula: "Subject + 长着 (zhǎngzhe) + Feature",
        note: "小兔子长着长长的耳朵和白色的毛。",
      },
      {
        name: "Double-Trait Pattern",
        formula: "Subject + 又 (yòu) + Adj 1 + 又 (yòu) + Adj 2",
        note: "我的小狗又聪明又活泼。(Both adjectives must match in tone.)",
      },
      {
        name: "Mildly Negative Quirk",
        formula: "Subject + 有点儿 (yǒudiǎnr) + Adj",
        note: "小猫有时候有点儿淘气。(有点儿 ALWAYS precedes the adjective.)",
      },
      {
        name: "STPVO Pet-Care Word Order",
        formula: "Subject + Time + Place + Verb + Object",
        note: "我每天晚上在公园遛狗。",
      },
      {
        name: "Bathing a Pet (Separable Verb)",
        formula: "Subject + 给 (gěi) + Pet + 洗澡 (xǐzǎo)",
        note: "我每个星期六给小狗洗澡。(Never *洗澡小狗*!)",
      },
      {
        name: "Taking a Pet to the Vet",
        formula: "Subject + 带 (dài) + Pet + 去看兽医 (qù kàn shòuyī)",
        note: "如果小狗生病了，爸爸带它去看兽医。",
      },
      {
        name: "Allergy Structure",
        formula: "Subject + 对 (duì) + Allergen + 过敏 (guòmǐn)",
        note: "姐姐对猫毛过敏，所以我们不能养猫。",
      },
      {
        name: "Balanced Opinion Brackets",
        formula: "虽然……，但是…… / 因为……，所以……",
        note: "养狗虽然很累，但是它是我最好的朋友。",
      },
    ],
  },
};
