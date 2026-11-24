// Audited MCQ bank for Year 9 Mandarin Chinese — Pets & Animal Care (宠物)
// 3 papers × 15 MCQs = 45 MCQs. Simplified Chinese with tone-marked Pinyin throughout.
import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "pets-m1",
    title: "MCQ Paper 1 — Pets, Measure Words & Descriptions",
    questions: [
      {
        id: "pets-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "common-pets-measure-words",
        question: "Which measure word correctly completes **我家有两___金鱼** (My family has two goldfish)?",
        options: ["条 (tiáo)", "只 (zhī)", "匹 (pǐ)", "个 (gè)"],
        answerIndex: 0,
        hints: [
          "Think about the visual shape of a goldfish.",
          "Long, slender or swimming creatures like fish and snakes share one specific classifier.",
        ],
        explanation:
          "Goldfish (**金鱼**) are long, slender swimming creatures, so they take **条 (tiáo)**: **两条金鱼**. Using **只** or **个** for fish is a common error, and **匹** is only for horses.",
      },
      {
        id: "pets-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "common-pets-measure-words",
        question: "How do you say **two horses** accurately in Simplified Mandarin?",
        options: ["二匹马 (èr pǐ mǎ)", "两匹马 (liǎng pǐ mǎ)", "两只马 (liǎng zhī mǎ)", "两条马 (liǎng tiáo mǎ)"],
        answerIndex: 1,
        hints: [
          "Check BOTH the number two before a measure word AND the special classifier for horses.",
          "Horses take 匹 (pǐ), and 2 before a measure word is always 两 (liǎng).",
        ],
        explanation:
          "Horses always take the classifier **匹 (pǐ)**, and the number two directly before any measure word must be **两 (liǎng)**, giving **两匹马 (liǎng pǐ mǎ)**. *二匹马* breaks the 两 rule and *两只马* uses the wrong classifier.",
      },
      {
        id: "pets-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "common-pets-measure-words",
        question: "What does **仓鼠 (cāngshǔ)** mean in English?",
        options: ["guinea pig", "little rabbit", "hamster", "tortoise"],
        answerIndex: 2,
        hints: [
          "Look at the second character 鼠 (shǔ), which means rodent/mouse.",
          "仓 means storehouse — this small pet stores food in its cheeks!",
        ],
        explanation:
          "**仓鼠 (cāngshǔ)** literally means *storehouse mouse* — a **hamster** (taking **只**: 一只仓鼠). A rabbit is 兔子, a tortoise is 乌龟, and a guinea pig is 荷兰猪.",
      },
      {
        id: "pets-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "common-pets-measure-words",
        question: "Which group of animals ALL take the measure word **只 (zhī)**?",
        options: [
          "小狗、金鱼、马",
          "小猫、热带鱼、蛇",
          "兔子、乌龟、马",
          "小狗、兔子、乌龟",
        ],
        answerIndex: 3,
        hints: [
          "Eliminate any list that contains fish (金鱼/热带鱼), snakes (蛇), or horses (马).",
          "Compact pets, birds, and turtles all share 只 (zhī).",
        ],
        explanation:
          "**小狗、兔子、乌龟** (puppy, rabbit, turtle) all take **只 (zhī)**. Goldfish and snakes require **条 (tiáo)**, while horses require **匹 (pǐ)**.",
      },
      {
        id: "pets-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "common-pets-measure-words",
        question: "Which pronoun should you use in formal written Mandarin to refer back to your pet cat or dog?",
        options: ["他 (tā)", "它 (tā)", "她 (tā)", "他们 (tāmen)"],
        answerIndex: 1,
        hints: [
          "All three singular pronouns sound identical (tā), so look closely at the left-hand radical.",
          "Animals and inanimate objects use the character without the person or woman radical.",
        ],
        explanation:
          "Formal Simplified Mandarin uses **它 (tā)** for animals and things: **它很可爱**. **他** and **她** are for people, and **们** is a plural suffix.",
      },
      {
        id: "pets-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "describing-pets",
        question: "Which sentence correctly translates *\"My puppy is very lively\"* without any grammar errors?",
        options: [
          "我的小狗是活泼。",
          "我的小狗活泼很。",
          "我的小狗很活泼。",
          "我的小狗是有活泼。",
        ],
        answerIndex: 2,
        hints: [
          "Remember how Mandarin links a subject to an adjective like 活泼 (huópō).",
          "Never use 是 before a plain adjective; place 很 directly before the adjective.",
        ],
        explanation:
          "Mandarin adjectives do not take **是**; place **很** directly before the adjective: **我的小狗很活泼 (Wǒ de xiǎogǒu hěn huópō)**. Putting 很 after the adjective or inserting 是 is ungrammatical.",
      },
      {
        id: "pets-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "describing-pets",
        question: "What does **小兔子长着长长的耳朵和短短的尾巴** describe?",
        options: [
          "The little rabbit has long ears and a short tail.",
          "The little rabbit has short fur and a long tail.",
          "The little rabbit has big eyes and small paws.",
          "The little rabbit has white ears and long paws.",
        ],
        answerIndex: 0,
        hints: [
          "Break down the two nouns: 耳朵 (ěrduo) and 尾巴 (wěiba).",
          "长长 means long, and 短短 means short.",
        ],
        explanation:
          "**耳朵 (ěrduo)** means ears and **尾巴 (wěiba)** means tail, with **长着** introducing inborn features — so **小兔子长着长长的耳朵和短短的尾巴** means *The little rabbit has long ears and a short tail*.",
      },
      {
        id: "pets-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "describing-pets",
        question: "Which sentence uses **有点儿 (yǒudiǎnr)** accurately to describe a pet?",
        options: [
          "我的小猫淘气有点儿。",
          "我的小猫有点儿很淘气。",
          "我的小猫非常有点儿懒。",
          "我的小猫有时候有点儿淘气。",
        ],
        answerIndex: 3,
        hints: [
          "Check where 有点儿 must stand relative to the adjective.",
          "有点儿 goes directly BEFORE the adjective and is never stacked with 很 or 非常.",
        ],
        explanation:
          "**有点儿 (yǒudiǎnr)** always stands immediately before a slightly negative adjective without **很/非常**: **我的小猫有时候有点儿淘气** (*My kitten is a bit naughty sometimes*).",
      },
      {
        id: "pets-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "describing-pets",
        question: "Which sentence best combines two positive character traits using **又……又……**?",
        options: [
          "我的小狗很又聪明又活泼。",
          "我的小狗聪明又活泼又。",
          "我的小狗又聪明又活泼。",
          "我的小狗又聪明和又活泼。",
        ],
        answerIndex: 2,
        hints: [
          "Follow the tight frame: Subject + 又 + Adj 1 + 又 + Adj 2.",
          "Do not add 很 or 和 inside the 又……又…… pattern.",
        ],
        explanation:
          "The exact pattern is **又 + Adj 1 + 又 + Adj 2**: **我的小狗又聪明又活泼** (*My puppy is both clever and lively*). Never insert **很** or **和** into this structure.",
      },
      {
        id: "pets-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "describing-pets",
        question: "In the sentence **这只小狗的毛又白又软**, what does **毛 (máo)** refer to?",
        options: ["its paws", "its fur", "its tail", "its ears"],
        answerIndex: 1,
        hints: [
          "Look at the two adjectives describing 毛: 白 (white) and 软 (soft).",
          "This character also appears in the pet name 毛毛 (Máomao — Fluffy).",
        ],
        explanation:
          "**毛 (máo)** means **fur** (or feathers/hair), so **这只小狗的毛又白又软** means *This puppy's fur is both white and soft*. Paws are 爪子, tail is 尾巴, and ears are 耳朵.",
      },
      {
        id: "pets-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "caring-for-pets",
        question: "How do you say *\"Every Saturday I give my puppy a bath\"* in natural Mandarin?",
        options: [
          "我每个星期六洗澡小狗。",
          "我洗澡小狗每个星期六。",
          "我每个星期六小狗洗澡。",
          "我每个星期六给小狗洗澡。",
        ],
        answerIndex: 3,
        hints: [
          "洗澡 (xǐzǎo) is a verb-object compound and cannot take a second object directly after it.",
          "Use 给 (gěi) + pet right before 洗澡, keeping Time before the verb.",
        ],
        explanation:
          "Because **洗澡** already contains its own object (*澡*), the pet must be introduced beforehand with **给**: **我每个星期六给小狗洗澡** (*Every Saturday I give the puppy a bath*).",
      },
      {
        id: "pets-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "caring-for-pets",
        question: "Which sentence follows correct **STPVO** word order for *\"I walk the dog in the park every morning\"*?",
        options: [
          "我每天早上在公园遛狗。",
          "我遛狗每天早上在公园。",
          "我在公园遛狗每天早上。",
          "我每天早上遛狗在公园。",
        ],
        answerIndex: 0,
        hints: [
          "Recall STPVO: Subject → Time → Place → Verb + Object.",
          "Place BOTH 每天早上 (Time) and 在公园 (Place) before 遛狗 (Verb+Object).",
        ],
        explanation:
          "Following **Subject + Time + Place + Verb + Object**, **我每天早上在公园遛狗** places **每天早上** and **在公园** neatly before **遛狗**. Putting Time or Place at the end is English word order.",
      },
      {
        id: "pets-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "reasons-for-against-pets",
        question: "Which preposition completes **妹妹___猫毛过敏** (My younger sister is allergic to cat fur)?",
        options: ["给 (gěi)", "对 (duì)", "在 (zài)", "跟 (gēn)"],
        answerIndex: 1,
        hints: [
          "Mandarin uses one fixed preposition to mean 'towards / to' in the allergy pattern.",
          "Recall: Subject + ___ + allergen + 过敏 (guòmǐn).",
        ],
        explanation:
          "Allergies always follow **Subject + 对 + allergen + 过敏**: **妹妹对猫毛过敏** (*My younger sister is allergic to cat fur*). Using 给, 在, or 跟 is incorrect here.",
      },
      {
        id: "pets-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "reasons-for-against-pets",
        question: "Choose the most accurate Mandarin sentence for *\"Although keeping a dog is tiring, it is my best friend.\"*",
        options: [
          "因为养狗很累，所以它是我最好的朋友。",
          "不但养狗很累，而且它是我最好的朋友。",
          "养狗很累虽然，但是它是我最好的朋友。",
          "养狗虽然很累，但是它是我最好的朋友。",
        ],
        answerIndex: 3,
        hints: [
          "Contrast requires 虽然……但是……, not 因为……所以…… or 不但……而且…….",
          "Check where 虽然 stands in the first clause — never at the very end before the comma.",
        ],
        explanation:
          "**养狗虽然很累，但是它是我最好的朋友** correctly pairs **虽然** (before the predicate *很累*) with **但是** to express concession (*although… yet…*). **因为……所以……** expresses cause, not contrast.",
      },
      {
        id: "pets-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "common-pets-measure-words",
        question: "Look carefully at the tones of **只** in **我只有一只小猫**. Which Pinyin reading is completely accurate?",
        options: [
          "Wǒ zhǐ yǒu yì zhī xiǎomāo.",
          "Wǒ zhī yǒu yì zhǐ xiǎomāo.",
          "Wǒ zhī yǒu yì zhī xiǎomāo.",
          "Wǒ zhǐ yǒu yì zhǐ xiǎomāo.",
        ],
        answerIndex: 0,
        hints: [
          "The first 只 means 'only' (adverb); the second 只 is the animal measure word.",
          "'Only' is 3rd tone (zhǐ) and the animal measure word is 1st tone (zhī).",
        ],
        explanation:
          "The character **只** has two readings here: **zhǐ** (3rd tone = *only*) before 有, and **zhī** (1st tone = animal classifier) before 小猫 — giving **Wǒ zhǐ yǒu yì zhī xiǎomāo.**",
      },
    ],
  },
  {
    id: "pets-m2",
    title: "MCQ Paper 2 — Pet Care, Routines & Everyday Usage",
    questions: [
      {
        id: "pets-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "caring-for-pets",
        question: "What does the phrase **带小狗去看兽医 (dài xiǎogǒu qù kàn shòuyī)** mean?",
        options: [
          "buy dog food at the pet shop",
          "train the puppy in the park",
          "take the puppy to see the vet",
          "give the puppy a warm bath",
        ],
        answerIndex: 2,
        hints: [
          "Look at 兽医 (shòuyī): 医 means doctor (as in 医生).",
          "带 (dài) means to take/bring along.",
        ],
        explanation:
          "**带 (dài)** = take, **看兽医 (kàn shòuyī)** = see the vet (animal doctor), so **带小狗去看兽医** means *take the puppy to see the vet*.",
      },
      {
        id: "pets-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "caring-for-pets",
        question: "Which Mandarin verb means **to feed** (a pet)?",
        options: ["喂 (wèi)", "遛 (liù)", "陪 (péi)", "养 (yǎng)"],
        answerIndex: 0,
        hints: [
          "Look at the left-hand radical of the four characters.",
          "The character for 'to feed' has the mouth radical 口 on the left!",
        ],
        explanation:
          "**喂 (wèi)** carries the mouth radical **口** and means *to feed* (e.g. **喂狗 / 喂食**). **遛** means walk a dog, **陪** means accompany, and **养** means keep/raise.",
      },
      {
        id: "pets-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "caring-for-pets",
        question: "In **放学后我陪小狗玩儿**, what does **陪 (péi)** express?",
        options: [
          "to brush its fur",
          "to feed it dinner",
          "to clean its cage",
          "to keep it company",
        ],
        answerIndex: 3,
        hints: [
          "Notice the structure: 陪 + someone/pet + Verb (玩儿 = play).",
          "It is the same first character as 陪伴 (péibàn — companionship).",
        ],
        explanation:
          "**陪 (péi)** means *to accompany / keep company*, so **陪小狗玩儿** means *to play with the puppy (keep it company playing)*.",
      },
      {
        id: "pets-m2-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "describing-pets",
        question: "Which adjective describes a calm, well-behaved dog that never bites strangers?",
        options: ["淘气 (táoqì)", "温顺 (wēnshùn)", "吵 (chǎo)", "胆小 (dǎnxiǎo)"],
        answerIndex: 1,
        hints: [
          "Rule out negative traits like naughty (淘气), noisy (吵), and timid (胆小).",
          "Look for the word meaning 'gentle / docile'.",
        ],
        explanation:
          "**温顺 (wēnshùn)** means *gentle / docile*, ideal for a calm, friendly dog. **淘气** is naughty, **吵** is noisy, and **胆小** is timid.",
      },
      {
        id: "pets-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "caring-for-pets",
        question: "A family keeps **五条金鱼** in the living room. Which weekly job matches this pet?",
        options: [
          "给鱼缸换水 (gěi yúgāng huàn shuǐ)",
          "去公园遛金鱼 (qù gōngyuán liù jīnyú)",
          "每天给金鱼梳毛 (měitiān gěi jīnyú shū máo)",
          "用牵引绳带鱼散步 (yòng qiānyǐnshéng dài yú sànbù)",
        ],
        answerIndex: 0,
        hints: [
          "Goldfish live in a 鱼缸 (yúgāng — fish tank) and do not have fur or walk on leads!",
          "换水 (huàn shuǐ) means 'to change the water'.",
        ],
        explanation:
          "**给鱼缸换水 (gěi yúgāng huàn shuǐ)** means *to change the water in the fish tank*, the essential care task for **五条金鱼**. Fish cannot be brushed (**梳毛**) or walked on a leash (**牵引绳**).",
      },
      {
        id: "pets-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "caring-for-pets",
        question: "What does **我每星期清理一次仓鼠的笼子** tell us?",
        options: [
          "I feed my hamster fresh carrots every morning.",
          "I take my hamster to the vet once a month.",
          "I clean out the hamster's cage once a week.",
          "I buy a new cage for my hamster every year.",
        ],
        answerIndex: 2,
        hints: [
          "Decode the key nouns and verbs: 每星期一次 (once a week), 清理 (clean), 笼子 (cage).",
          "仓鼠 (cāngshǔ) is a hamster.",
        ],
        explanation:
          "**每星期一次** = once a week, **清理 (qīnglǐ)** = clean out, **笼子 (lóngzi)** = cage — so **我每星期清理一次仓鼠的笼子** means *I clean out the hamster's cage once a week*.",
      },
      {
        id: "pets-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "common-pets-measure-words",
        question: "How should you say **twelve goldfish** in Mandarin?",
        options: [
          "十两条金鱼 (shíliǎng tiáo jīnyú)",
          "十二只金鱼 (shí'èr zhī jīnyú)",
          "两十条金鱼 (liǎngshí tiáo jīnyú)",
          "十二条金鱼 (shí'èr tiáo jīnyú)",
        ],
        answerIndex: 3,
        hints: [
          "Does the 二 → 两 switch apply to 12, or ONLY to standalone 2?",
          "12 is ALWAYS 十二 (never *十两*), and goldfish take 条 (tiáo).",
        ],
        explanation:
          "Standalone 2 becomes **两**, but compound numbers like 12 and 22 always keep **二**: **十二条金鱼 (shí'èr tiáo jīnyú)** with **条** for fish.",
      },
      {
        id: "pets-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "describing-pets",
        question: "Read: **我的小猫叫雪球，今年四岁了。** Which statement is true?",
        options: [
          "The kitten is called Maomao and is two years old.",
          "The kitten is called Xueqiu and is four years old.",
          "The family owns four white kittens called Xueqiu.",
          "The kitten was adopted four months ago in winter.",
        ],
        answerIndex: 1,
        hints: [
          "叫 (jiào) introduces the pet's name: 雪球 (Xuěqiú — Snowball).",
          "四岁 (sì suì) gives the age (4 years old), not the quantity of cats.",
        ],
        explanation:
          "**叫雪球** tells us the cat's name is **Xueqiu (Snowball)**, and **今年四岁了** tells us it is **four years old** this year.",
      },
      {
        id: "pets-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "reasons-for-against-pets",
        question: "Which sentence correctly uses **因为……，所以……** to explain why a family does not keep a big dog?",
        options: [
          "虽然我家公寓太小，所以没有养大狗。",
          "因为我家公寓太小，但是没有养大狗。",
          "因为我家公寓太小，所以没有养大狗。",
          "所以我家公寓太小，因为没有养大狗。",
        ],
        answerIndex: 2,
        hints: [
          "Cause comes first with 因为 (because); result comes second with 所以 (therefore/so).",
          "Never mix 虽然 with 所以, or 因为 with 但是!",
        ],
        explanation:
          "**因为** (cause) pairs strictly with **所以** (result): **因为我家公寓太小，所以没有养大狗** (*Because our flat is too small, we don't keep a big dog*).",
      },
      {
        id: "pets-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "reasons-for-against-pets",
        question: "What benefit of keeping a pet is mentioned in **照顾宠物可以培养孩子的责任感**?",
        options: [
          "It helps children develop a sense of responsibility.",
          "It helps children save a lot of pocket money.",
          "It helps children finish school homework faster.",
          "It stops children from ever feeling tired at home.",
        ],
        answerIndex: 0,
        hints: [
          "Focus on 责任感 (zérèngǎn): 责任 means responsibility, 感 means sense/feeling.",
          "培养 (péiyǎng) means to cultivate/develop.",
        ],
        explanation:
          "**培养 (péiyǎng)** = develop/cultivate, **责任感 (zérèngǎn)** = sense of responsibility — so **照顾宠物可以培养孩子的责任感** means *Looking after a pet can develop children's sense of responsibility*.",
      },
      {
        id: "pets-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "caring-for-pets",
        question: "In Singapore, what item must dog owners use in public parks according to **遛狗的时候必须用牵引绳**?",
        options: [
          "a plastic fish tank",
          "a dog leash or lead",
          "a soft fur brush",
          "a hamster cage",
        ],
        answerIndex: 1,
        hints: [
          "Look at the final character 绳 (shéng), which means rope/cord.",
          "牵引绳 (qiānyǐnshéng) is used whenever you walk a dog (遛狗).",
        ],
        explanation:
          "**牵引绳 (qiānyǐnshéng)** means **dog leash / lead** (**绳** = rope/cord), required when walking a dog (**遛狗**) in Singapore parks.",
      },
      {
        id: "pets-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "describing-pets",
        question: "Which sentence means *\"This brown dog is very loyal and friendly to everyone\"*?",
        options: [
          "这只白色的小猫很安静，可是有点儿胆小。",
          "那只灰色的小鸟每天早上都叫，有点儿吵。",
          "这只棕色的兔子毛很柔软，最喜欢吃青菜。",
          "这只棕色的狗非常忠诚，对大家都很友好。",
        ],
        answerIndex: 3,
        hints: [
          "Look for 棕色 (zōngsè — brown), 狗 (dog), 忠诚 (zhōngchéng — loyal), and 友好 (yǒuhǎo — friendly).",
          "Check the animal noun first to eliminate cat, bird, and rabbit.",
        ],
        explanation:
          "**这只棕色的狗非常忠诚，对大家都很友好** matches every detail: **棕色** (brown), **狗** (dog), **忠诚** (loyal), and **友好** (friendly).",
      },
      {
        id: "pets-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "caring-for-pets",
        question: "Which sentence correctly expresses *\"Yesterday Mum took Maomao to the vet for a vaccination\"*?",
        options: [
          "明天妈妈带毛毛去看兽医打针。",
          "昨天妈妈去兽医带毛毛看打针。",
          "昨天妈妈带毛毛去看兽医打针了。",
          "昨天妈妈给毛毛打针兽医看了。",
        ],
        answerIndex: 2,
        hints: [
          "Check the time word (昨天 = yesterday, not 明天) and completed-action 了.",
          "Follow the serial-verb chain: 带 + pet + 去 + 看兽医 + 打针 + 了.",
        ],
        explanation:
          "**昨天妈妈带毛毛去看兽医打针了** uses **昨天** (yesterday), the clean serial-verb order **带毛毛去看兽医打针**, and final **了** for a completed past event.",
      },
      {
        id: "pets-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "reasons-for-against-pets",
        question: "Read: **宠物能陪伴老人，让他们不觉得孤独。** Why are pets helpful to elderly people here?",
        options: [
          "Pets keep them company so they do not feel lonely.",
          "Pets are cheap to feed and never need vaccinations.",
          "Pets help them clean the flat and carry shopping bags.",
          "Pets stay completely silent and sleep all day long.",
        ],
        answerIndex: 0,
        hints: [
          "Decode 陪伴 (péibàn — keep company) and 孤独 (gūdú — lonely).",
          "不觉得孤独 means 'do not feel lonely'.",
        ],
        explanation:
          "**陪伴 (péibàn)** means *keep company* and **不觉得孤独 (bù juéde gūdú)** means *not feel lonely*, so the sentence states that pets keep elderly people company so they do not feel lonely.",
      },
      {
        id: "pets-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "reasons-for-against-pets",
        question: "Which sentence uses **不但……，而且……** accurately to list TWO benefits of keeping a dog?",
        options: [
          "养狗不但很麻烦，而且我非常喜欢它。",
          "养狗虽然能多做运动，而且能带来快乐。",
          "养狗不但能多做运动，但是能带来快乐。",
          "养狗不但能多做运动，而且能带来快乐。",
        ],
        answerIndex: 3,
        hints: [
          "不但 (not only) ALWAYS pairs with 而且 (but also), never 但是.",
          "Both halves must point in the same direction (here, two benefits).",
        ],
        explanation:
          "**不但……，而且……** pairs two reinforcing points: **养狗不但能多做运动，而且能带来快乐** (*Keeping a dog not only gives more exercise, but also brings joy*).",
      },
    ],
  },
  {
    id: "pets-m3",
    title: "MCQ Paper 3 — Reading Comprehension & IGCSE Accuracy",
    questions: [
      {
        id: "pets-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "common-pets-measure-words",
        question: "Read: **我家没有养狗，只养了六条热带鱼和一只小乌龟。** How many animals does the speaker's family keep in total?",
        options: ["six animals", "seven animals", "five animals", "eight animals"],
        answerIndex: 1,
        hints: [
          "Count each pet carefully: 六条热带鱼 (6 tropical fish) + 一只小乌龟 (1 little turtle).",
          "没有养狗 means they do NOT keep a dog (0 dogs).",
        ],
        explanation:
          "The family keeps **六条热带鱼** (6 tropical fish) plus **一只小乌龟** (1 little turtle) and no dog (**没有养狗**), making **seven animals** in total.",
      },
      {
        id: "pets-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "describing-pets",
        question: "Read: **那只橘猫胖乎乎的，每天在沙发上睡十四个小时，真是太懒了！** What is the ginger cat's main trait?",
        options: [
          "very noisy and barks early",
          "very timid and hides outside",
          "very lively and runs outdoors",
          "very lazy and sleeps all day",
        ],
        answerIndex: 3,
        hints: [
          "Notice 睡十四个小时 (sleeps 14 hours a day) and the final adjective 懒 (lǎn).",
          "懒 (lǎn) means lazy.",
        ],
        explanation:
          "**睡十四个小时** (sleeps 14 hours) and **太懒了** (so **lazy**) show that the ginger cat is **very lazy and sleeps all day**.",
      },
      {
        id: "pets-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "caring-for-pets",
        question: "Read: **每天早上七点，我先给小狗喂狗粮，然后换干净的水，放学后再陪它玩儿。** Which job does the writer do FIRST each morning?",
        options: [
          "feeds the puppy dog food",
          "changes the puppy's water",
          "plays with the puppy outdoors",
          "gives the puppy a warm bath",
        ],
        answerIndex: 0,
        hints: [
          "Look right after 先 (xiān — first) in the sentence.",
          "喂狗粮 (wèi gǒuliáng) means to feed dog food.",
        ],
        explanation:
          "**先 (xiān — first)** directly introduces **给小狗喂狗粮** (*feeds the puppy dog food*), followed by **然后换干净的水** (then changes the water) and playing after school.",
      },
      {
        id: "pets-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "reasons-for-against-pets",
        question: "Read: **我们没有在宠物店买狗，而是从动物收容所领养了一只两岁的小狗。** How did the family get their puppy?",
        options: [
          "They bought it at a large pet shop.",
          "A neighbour gave it as a birthday gift.",
          "They adopted it from an animal shelter.",
          "They found it running in the park.",
        ],
        answerIndex: 2,
        hints: [
          "Note 没有……买 (did not buy) and the key verb 领养 (lǐngyǎng).",
          "动物收容所 means animal shelter; 领养 means to adopt.",
        ],
        explanation:
          "**没有在宠物店买** (did not buy at a pet shop) and **从动物收容所领养** (*adopted from an animal shelter*) confirm they adopted the two-year-old puppy.",
      },
      {
        id: "pets-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "reasons-for-against-pets",
        question: "Read: **妈妈觉得养狗最大的坏处是出门旅游不方便。** What is Mum's main concern about keeping a dog?",
        options: [
          "Dogs are too noisy in the morning.",
          "Dog food is too hard to buy locally.",
          "She is allergic to dog fur at home.",
          "Going away on holiday is inconvenient.",
        ],
        answerIndex: 3,
        hints: [
          "Look at the clause after 坏处是 (the drawback is): 出门旅游不方便.",
          "旅游 (lǚyóu) = travel / go on holiday; 不方便 = inconvenient.",
        ],
        explanation:
          "**出门旅游不方便** literally means *going out to travel / going on holiday is inconvenient*, which Mum calls the biggest drawback (**最大的坏处**).",
      },
      {
        id: "pets-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "common-pets-measure-words",
        question: "Which sentence contains NO measure-word or number mistakes?",
        options: [
          "爷爷养了一只鹦鹉和二条金鱼。",
          "爷爷养了一只鹦鹉和两条金鱼。",
          "爷爷养了一条鹦鹉和两只金鱼。",
          "爷爷养了一个鹦鹉和两条金鱼。",
        ],
        answerIndex: 1,
        hints: [
          "Parrots (鹦鹉) are birds → 只; goldfish (金鱼) → 条.",
          "Two before a measure word must be 两, not 二.",
        ],
        explanation:
          "A parrot takes **只** (**一只鹦鹉**) and two goldfish take **两 + 条** (**两条金鱼**), so **爷爷养了一只鹦鹉和两条金鱼** is completely accurate.",
      },
      {
        id: "pets-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "describing-pets",
        question: "Why does **我的小鸟的翅膀是绿色和黄色的** use **翅膀 (chìbǎng)**?",
        options: [
          "to describe the bird's loud chirping",
          "to describe the bird's small cage",
          "to describe the bird's coloured wings",
          "to describe the bird's sharp claws",
        ],
        answerIndex: 2,
        hints: [
          "The sentence mentions 绿色 (green) and 黄色 (yellow) on a bird (小鸟).",
          "翅膀 (chìbǎng) is the body part birds use to fly.",
        ],
        explanation:
          "**翅膀 (chìbǎng)** means **wings**, so **我的小鸟的翅膀是绿色和黄色的** describes the bird's green and yellow wings.",
      },
      {
        id: "pets-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "caring-for-pets",
        question: "Read: **我每天做完作业以后，都要陪毛毛玩儿半个小时，它高兴得一直摇尾巴。** How does Maomao show it is happy?",
        options: [
          "It keeps wagging its tail happily.",
          "It hides quietly under the sofa.",
          "It eats two whole bowls of food.",
          "It falls asleep on the bed immediately.",
        ],
        answerIndex: 0,
        hints: [
          "Look at the final clause: 它高兴得一直摇尾巴.",
          "摇 (yáo) = wag/shake; 尾巴 (wěiba) = tail.",
        ],
        explanation:
          "**高兴得一直摇尾巴** means *so happy that it keeps wagging its tail* (**摇** = wag, **尾巴** = tail).",
      },
      {
        id: "pets-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "reasons-for-against-pets",
        question: "A student wants to say *\"Although Dad does not like dogs, he agreed to let me keep a rabbit.\"* Where must **虽然** sit?",
        options: [
          "爸爸不喜欢狗虽然，但是他同意我养兔子。",
          "虽然爸爸不喜欢狗，但是他同意我养兔子。",
          "爸爸虽然不喜欢狗，可是同意我养兔子他。",
          "但是爸爸不喜欢狗，虽然他同意我养兔子。",
        ],
        answerIndex: 1,
        hints: [
          "In a 虽然……但是…… sentence, 虽然 opens the concession clause and 但是 opens the contrasting clause.",
          "Check that both clauses have normal Subject + Verb + Object order.",
        ],
        explanation:
          "**虽然爸爸不喜欢狗，但是他同意我养兔子** places **虽然** cleanly at the start of the concession clause and **但是** before the result clause **他同意我养兔子**.",
      },
      {
        id: "pets-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "caring-for-pets",
        question: "Which sentence correctly uses **正在……呢** to say *\"My older brother is training the puppy right now\"*?",
        options: [
          "哥哥训练小狗正在呢。",
          "哥哥明天正在训练小狗呢。",
          "哥哥昨天正在训练了小狗呢。",
          "哥哥正在训练小狗呢。",
        ],
        answerIndex: 3,
        hints: [
          "正在 stands directly BEFORE the verb (训练), and 呢 stands at the end.",
          "正在 marks an action happening right now, so it clashes with 明天 or completed 了.",
        ],
        explanation:
          "**正在 + Verb + Object + 呢** expresses an ongoing action right now: **哥哥正在训练小狗呢** (*My older brother is training the puppy right now*).",
      },
      {
        id: "pets-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "reasons-for-against-pets",
        question: "Read: **毛毛不只是宠物，还是我们的家庭成员。** What is the writer's attitude toward Maomao?",
        options: [
          "Maomao is too expensive and noisy to keep indoors.",
          "Maomao belongs to a neighbour rather than the family.",
          "Maomao is not merely a pet, but a true family member.",
          "Maomao will be given away when the family travels.",
        ],
        answerIndex: 2,
        hints: [
          "Notice the frame 不只是……，还是…… (is not just…, but also…).",
          "家庭成员 (jiātíng chéngyuán) means 'family member'.",
        ],
        explanation:
          "**不只是宠物，还是我们的家庭成员** means *not just a pet, but also our **family member***, expressing deep affection and belonging.",
      },
      {
        id: "pets-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "describing-pets",
        question: "Which sentence uses the **比 (bǐ)** comparison rule accurately without the classic **很** trap?",
        options: [
          "我的小狗比妹妹的小猫活泼得多。",
          "我的小狗比妹妹的小猫很活泼。",
          "我的小狗比妹妹的小猫非常活泼。",
          "我的小狗很比妹妹的小猫活泼。",
        ],
        answerIndex: 0,
        hints: [
          "Remember the golden 比 rule: NEVER put 很 or 非常 before the adjective after 比!",
          "To say 'much more [adj]', add 得多 (de duō) AFTER the adjective.",
        ],
        explanation:
          "In **A 比 B + Adj**, you must NEVER insert **很** or **非常**. To intensify the difference, add **得多** after the adjective: **我的小狗比妹妹的小猫活泼得多** (*My puppy is much livelier than my sister's kitten*).",
      },
      {
        id: "pets-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "common-pets-measure-words",
        question: "Which sentence uses EVERY number and animal measure word accurately?",
        options: [
          "农场里有两只马、三只兔子和二条金鱼。",
          "农场里有两匹马、三只兔子和两条金鱼。",
          "农场里有二匹马、三条兔子和两只金鱼。",
          "农场里有两匹马、三个兔子和两只金鱼。",
        ],
        answerIndex: 1,
        hints: [
          "Check all three classifiers: horses → 匹, rabbits → 只, goldfish → 条.",
          "Check EVERY standalone 'two' before a measure word — it must be 两, never 二!",
        ],
        explanation:
          "**农场里有两匹马、三只兔子和两条金鱼。** gets all three classifiers and numbers right: **两匹马** (2 horses), **三只兔子** (3 rabbits), and **两条金鱼** (2 goldfish).",
      },
      {
        id: "pets-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "caring-for-pets",
        question: "Read: **因为弟弟太小了，所以喂狗和遛狗都是我负责的。** Who takes care of feeding and walking the dog?",
        options: [
          "the younger brother every morning",
          "both parents on weekday nights",
          "the speaker, as the brother is too young",
          "the neighbour who lives next door",
        ],
        answerIndex: 2,
        hints: [
          "Check 弟弟太小了 (the younger brother is too young).",
          "都是我负责的 means 'I am the one responsible for all of them'.",
        ],
        explanation:
          "**喂狗和遛狗都是我负责的** states that **the speaker** is responsible for both feeding and walking the dog because **弟弟太小了** (the younger brother is too young).",
      },
      {
        id: "pets-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "reasons-for-against-pets",
        question: "Which closing sentence best completes an IGCSE paragraph for a student who does NOT currently have a pet?",
        options: [
          "虽然我现在没有宠物，但是将来我想领养一只温顺的小狗。",
          "我现在没有宠物，所以我从来不认识任何小动物。",
          "我没有宠物，因为我不喜欢写关于宠物的作业。",
          "现在我有一只小狗，所以我将来不想养任何宠物。",
        ],
        answerIndex: 0,
        hints: [
          "Top IGCSE endings link present reality with a future aspiration (将来想……).",
          "Look for balanced 虽然……但是…… grammar and natural Year 9 vocabulary like 领养 and 温顺.",
        ],
        explanation:
          "**虽然我现在没有宠物，但是将来我想领养一只温顺的小狗** smoothly pairs **虽然……但是……** with a future time frame (**将来想领养** — in the future I want to adopt a gentle puppy).",
      },
    ],
  },
];
