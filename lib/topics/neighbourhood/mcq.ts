import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  {
    id: "neighbourhood-m1",
    title: "Neighbourhood & Directions — MCQ Paper 1 (Local Facilities & Distance)",
    questions: [
      {
        id: "neighbourhood-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "local-facilities",
        question: "What does **邮局 (yóujú)** mean in English?",
        options: [
          "post office",
          "supermarket",
          "sports centre",
          "police station",
        ],
        answerIndex: 0,
        hints: [
          "You go here to send letters (寄信) or parcels (寄包裹).",
          "Supermarket is 超市 (chāoshì); police station is 警察局.",
        ],
        explanation:
          "**邮局 (yóujú)** means post office (e.g. 去邮局寄信). Supermarket is **超市 (chāoshì)** and sports centre is **体育中心 (tǐyù zhōngxīn)**.",
      },
      {
        id: "neighbourhood-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "local-facilities",
        question: "What is the correct tone-marked Pinyin for **银行 (bank)**?",
        options: [
          "yínxíng",
          "yínháng",
          "yīnhǎng",
          "yǐnháng",
        ],
        answerIndex: 1,
        hints: [
          "Watch the polyphone 行: it is NOT read xíng here!",
          "Both syllables carry 2nd tone (rising tone).",
        ],
        explanation:
          "**银行 (yínháng)** means bank — the character **行** is pronounced **háng** (2nd tone) in bank/industry words, never *xíng*.",
      },
      {
        id: "neighbourhood-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "local-facilities",
        question: "Which facility is **体育中心 (tǐyù zhōngxīn)**?",
        options: [
          "shopping mall",
          "public library",
          "sports centre",
          "subway station",
        ],
        answerIndex: 2,
        hints: [
          "体育 (tǐyù) is the same word used for PE / sports at school.",
          "Shopping mall is 购物中心 (gòuwù zhōngxīn).",
        ],
        explanation:
          "**体育中心 (tǐyù zhōngxīn)** means sports centre (体育 = sports/PE + 中心 = centre). Shopping mall is **购物中心 (gòuwù zhōngxīn)**.",
      },
      {
        id: "neighbourhood-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "local-facilities",
        question: "Choose the grammatically correct sentence for **'Near my home there is a supermarket and a library.'**",
        options: [
          "在我家附近有一家超市和一个图书馆。",
          "附近我家有一家超市和一个图书馆。",
          "我家附近是在一家超市和一个图书馆。",
          "我家附近有一家超市和一个图书馆。",
        ],
        answerIndex: 3,
        hints: [
          "附近 (nearby) behaves like a position word and goes AFTER 我家.",
          "Never add 在 before the Place in a Place + 有 + Object existence sentence!",
        ],
        explanation:
          "**我家附近有一家超市和一个图书馆。** (Wǒ jiā fùjìn yǒu yì jiā chāoshì hé yí gè túshūguǎn.) places **附近** after **我家** and uses **有** without a leading 在.",
      },
      {
        id: "neighbourhood-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "local-facilities",
        question: "Which place would you visit to **看电影 (kàn diànyǐng — watch a film)**?",
        options: [
          "电影院 (diànyǐngyuàn)",
          "博物馆 (bówùguǎn)",
          "医院 (yīyuàn)",
          "餐厅 (cāntīng)",
        ],
        answerIndex: 0,
        hints: [
          "Look for the place name containing 电影 (film/movie).",
          "医院 is hospital and 博物馆 is museum.",
        ],
        explanation:
          "**电影院 (diànyǐngyuàn)** is the cinema (movie theatre). **医院 (yīyuàn)** is a hospital and **博物馆 (bówùguǎn)** is a museum.",
      },
      {
        id: "neighbourhood-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "local-facilities",
        question: "Which classifier is most natural for shops, banks, hospitals, and restaurants (**一___超市 / 银行 / 餐厅**)?",
        options: [
          "间 (jiān)",
          "家 (jiā)",
          "把 (bǎ)",
          "台 (tái)",
        ],
        answerIndex: 1,
        hints: [
          "This character also means 'home/family', and doubles as the classifier for businesses.",
          "间 counts rooms inside a house; 把 and 台 are for furniture/appliances.",
        ],
        explanation:
          "**家 (jiā)** is the standard classifier for businesses and institutions: **一家超市**, **一家银行**, **一家餐厅**, **一家医院**.",
      },
      {
        id: "neighbourhood-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "local-facilities",
        question: "What does **公共汽车站 (gōnggòng qìchēzhàn)** mean?",
        options: [
          "MRT station",
          "airport terminal",
          "bus stop",
          "car park",
        ],
        answerIndex: 2,
        hints: [
          "公共汽车 (gōnggòng qìchē) means public bus; 站 (zhàn) means station/stop.",
          "MRT/subway station is 地铁站 (dìtiězhàn).",
        ],
        explanation:
          "**公共汽车站 (gōnggòng qìchēzhàn)** means bus stop. MRT/subway station is **地铁站 (dìtiězhàn)**.",
      },
      {
        id: "neighbourhood-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "distance-li-transport",
        question: "Choose the grammatically correct sentence for **'My home is very close to school.'**",
        options: [
          "我家跟学校很近。",
          "我家到学校很近。",
          "我家是离学校很近。",
          "我家离学校很近。",
        ],
        answerIndex: 3,
        hints: [
          "Mandarin uses the dedicated distance preposition 离 (lí) between the two places.",
          "Never insert 是 before 很近 or 很远!",
        ],
        explanation:
          "**我家离学校很近。** (Wǒ jiā lí xuéxiào hěn jìn.) follows **`A 离 B + 很近`** without **是**. Using 跟, 到, or adding 是 is incorrect.",
      },
      {
        id: "neighbourhood-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "distance-li-transport",
        question: "How do you ask **'How far is the MRT station from your home?'**",
        options: [
          "地铁站离你家有多远？",
          "地铁站跟你家几远？",
          "地铁站到你家多少远？",
          "地铁站是在你家多远？",
        ],
        answerIndex: 0,
        hints: [
          "Use the distance preposition 离 (lí) + 有多远 (how far).",
          "Never use 几远 or 多少远 for distance!",
        ],
        explanation:
          "**地铁站离你家有多远？** (Dìtiězhàn lí nǐ jiā yǒu duō yuǎn?) uses **`A 离 B 有多远？`** cleanly.",
      },
      {
        id: "neighbourhood-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "distance-li-transport",
        question: "Which verb correctly completes **我每天___自行车去公园** ('I ride a bicycle to the park every day')?",
        options: [
          "坐 (zuò)",
          "骑 (qí)",
          "开 (kāi)",
          "走 (zǒu)",
        ],
        answerIndex: 1,
        hints: [
          "Look for the verb containing the horse radical 马 (used for things you straddle).",
          "坐 is for sitting inside a bus/MRT/taxi; 开 is for driving a car.",
        ],
        explanation:
          "**骑 (qí)** is used for bicycles, motorbikes, and horses: **骑自行车 (qí zìxíngchē)**. Never say *坐自行车*!",
      },
      {
        id: "neighbourhood-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "distance-li-transport",
        question: "Choose the natural Mandarin sentence for **'From my home to school by MRT takes 20 minutes.'**",
        options: [
          "离我家到学校坐地铁二十分钟。",
          "我家到从学校坐地铁二十分钟。",
          "从我家到学校坐地铁要二十分钟。",
          "从我家离学校骑地铁要二十分钟。",
        ],
        answerIndex: 2,
        hints: [
          "Use the paired frame 从 A 到 B (from A to B).",
          "Check the transport verb for MRT: 坐地铁 (not 骑地铁).",
        ],
        explanation:
          "**从我家到学校坐地铁要二十分钟。** (Cóng wǒ jiā dào xuéxiào zuò dìtiě yào èrshí fēnzhōng.) correctly combines **从…到…** with **坐地铁** and duration.",
      },
      {
        id: "neighbourhood-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "distance-li-transport",
        question: "What does **走路十分钟 (zǒulù shí fēnzhōng)** mean?",
        options: [
          "a 10-minute bus ride",
          "a 10-minute bike ride",
          "10 kilometres away",
          "a 10-minute walk",
        ],
        answerIndex: 3,
        hints: [
          "走路 (zǒulù) literally means 'walk the road'.",
          "十分钟 = 10 minutes.",
        ],
        explanation:
          "**走路十分钟 (zǒulù shí fēnzhōng)** means a 10-minute walk (going on foot for 10 minutes).",
      },
      {
        id: "neighbourhood-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "distance-li-transport",
        question: "Read: **图书馆离我家很近，走路只要五分钟。** Why does the speaker include **只 (zhǐ)**?",
        options: [
          "To emphasise that 5 minutes is quick and convenient ('only 5 minutes').",
          "To complain that 5 minutes is too tiring and far away.",
          "To say the library is closed every five minutes.",
          "To explain that only buses are allowed on that street.",
        ],
        answerIndex: 0,
        hints: [
          "只 (zhǐ) means 'only / just' — here 只要五分钟 ('takes only 5 minutes').",
          "Match that tone with 很近 (very close).",
        ],
        explanation:
          "**只要五分钟 (zhǐ yào wǔ fēnzhōng)** means 'takes only 5 minutes', highlighting how close (**很近**) and convenient the library is.",
      },
      {
        id: "neighbourhood-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "local-facilities",
        question: "Which building suffix completes the Mandarin words for cultural halls like **library (túshū___)** and **museum (bówù___)**?",
        options: [
          "站 (zhàn — transport stop)",
          "馆 (guǎn — cultural hall)",
          "院 (yuàn — institution)",
          "局 (jú — office/bureau)",
        ],
        answerIndex: 1,
        hints: [
          "Look at the final character shared by both 图书馆 and 博物馆.",
          "站 is for stops (地铁站) and 院 is for 医院/电影院.",
        ],
        explanation:
          "Both **图书馆 (túshūguǎn)** and **博物馆 (bówùguǎn)** share the suffix **馆 (guǎn)**, used for cultural halls and service venues.",
      },
      {
        id: "neighbourhood-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "distance-li-transport",
        question: "Read: **公园离我家大概两公里，走路要二十五分钟，但是骑自行车只要十分钟。** Which statement is true?",
        options: [
          "The park is 25 km from the speaker's home.",
          "Walking to the park is faster than cycling there.",
          "Cycling to the park saves 15 minutes compared with walking.",
          "The speaker takes the MRT for 10 minutes to reach the park.",
        ],
        answerIndex: 2,
        hints: [
          "Extract the two durations: 走路 (walking) = 25 minutes; 骑自行车 (cycling) = 10 minutes.",
          "Compute the difference: 25 − 10 = 15 minutes!",
        ],
        explanation:
          "Walking (**走路**) takes **25 minutes (二十五分钟)** while cycling (**骑自行车**) takes **10 minutes (十分钟)**, so cycling saves **15 minutes** over the 2 km (**两公里**) trip.",
      },
    ],
  },
  {
    id: "neighbourhood-m2",
    title: "Neighbourhood & Directions — MCQ Paper 2 (Asking & Giving Directions)",
    questions: [
      {
        id: "neighbourhood-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "giving-directions",
        question: "How do you politely ask **'Excuse me, how do I get to the subway station?'**",
        options: [
          "你好，地铁站多远走？",
          "谢谢，地铁站去哪里？",
          "请问，地铁站是什么？",
          "请问，地铁站怎么走？",
        ],
        answerIndex: 3,
        hints: [
          "Open politely with 请问 (qǐngwèn).",
          "Use 怎么走 (zěnme zǒu — how to go/get there) at the end.",
        ],
        explanation:
          "**请问，地铁站怎么走？** (Qǐngwèn, dìtiězhàn zěnme zǒu?) is the standard polite way to ask how to get to the MRT station.",
      },
      {
        id: "neighbourhood-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "giving-directions",
        question: "What does **一直往前走 (yìzhí wǎng qián zǒu)** mean?",
        options: [
          "go straight ahead",
          "turn right quickly",
          "cross the bridge",
          "take the next bus",
        ],
        answerIndex: 0,
        hints: [
          "一直 (yìzhí) = straight/continuously; 往前 = forward; 走 = walk.",
          "Turning right is 往右拐 (wǎng yòu guǎi).",
        ],
        explanation:
          "**一直往前走 (yìzhí wǎng qián zǒu)** means go straight ahead (continuously walk forward).",
      },
      {
        id: "neighbourhood-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-directions",
        question: "Choose the correct Mandarin phrase for **'turn left'**.",
        options: [
          "拐往左 (guǎi wǎng zuǒ)",
          "往左拐 (wǎng zuǒ guǎi)",
          "往右拐 (wǎng yòu guǎi)",
          "走左拐 (zǒu zuǒ guǎi)",
        ],
        answerIndex: 1,
        hints: [
          "In Mandarin, 往 + Direction ALWAYS goes BEFORE the verb 拐 (turn).",
          "Check 左 (left) vs 右 (right).",
        ],
        explanation:
          "**往左拐 (wǎng zuǒ guǎi)** places **往左** ('towards left') BEFORE the verb **拐** ('turn'). **往右拐** means turn right.",
      },
      {
        id: "neighbourhood-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-directions",
        question: "Choose the correct word order for **'turn right at the first intersection'**.",
        options: [
          "往右拐在第一个路口。",
          "第一个路口在往右拐。",
          "在第一个路口往右拐。",
          "在路口第一个拐往右。",
        ],
        answerIndex: 2,
        hints: [
          "Remember P-D-V order: Place → Direction → Verb.",
          "Put 在第一个路口 FIRST, then 往右, then 拐!",
        ],
        explanation:
          "**在第一个路口往右拐。** (Zài dì-yī gè lùkǒu wǎng yòu guǎi.) follows Mandarin Place → Direction → Verb order cleanly.",
      },
      {
        id: "neighbourhood-m2-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "giving-directions",
        question: "What does **过马路 (guò mǎlù)** mean?",
        options: [
          "wait at traffic lights",
          "exit the MRT station",
          "walk down the lane",
          "cross the road",
        ],
        answerIndex: 3,
        hints: [
          "过 (guò) = cross/pass; 马路 (mǎlù) = road/street.",
          "Traffic lights are 红绿灯 (hónglǜdēng).",
        ],
        explanation:
          "**过马路 (guò mǎlù)** means to cross the road (过 = cross + 马路 = road).",
      },
      {
        id: "neighbourhood-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-directions",
        question: "What does **银行就在你的右边** tell you?",
        options: [
          "The bank is right on your right-hand side.",
          "The bank is far behind the traffic lights.",
          "The bank is directly to your left-hand side.",
          "The bank is closed until tomorrow morning.",
        ],
        answerIndex: 0,
        hints: [
          "就在 (jiù zài) = is right at; 你的右边 = your right side.",
          "银行 (yínháng) = bank.",
        ],
        explanation:
          "**银行就在你的右边** (Yínháng jiù zài nǐ de yòubiān) tells you the bank is **right on your right-hand side**.",
      },
      {
        id: "neighbourhood-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-directions",
        question: "What is a **红绿灯 (hónglǜdēng)**?",
        options: [
          "a pedestrian bridge",
          "traffic lights",
          "a zebra crossing",
          "a street map",
        ],
        answerIndex: 1,
        hints: [
          "Break it into three roots: 红 (red) + 绿 (green) + 灯 (light).",
          "Pedestrian bridge is 天桥; zebra crossing is 斑马线.",
        ],
        explanation:
          "**红绿灯 (hónglǜdēng)** literally means 'red-green light' — **traffic lights** (e.g. 在第二个红绿灯往左拐).",
      },
      {
        id: "neighbourhood-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-directions",
        question: "Why is a four-way crossroads called **十字路口 (shízì lùkǒu)**?",
        options: [
          "It always has ten different traffic lights.",
          "Only ten cars may cross at one time.",
          "The character 十 looks like a '+' cross.",
          "It takes ten minutes to walk across it.",
        ],
        answerIndex: 2,
        hints: [
          "Look at the visual shape of the Chinese character 十 (shí).",
          "字 (zì) means 'character' — literally '十-character junction'.",
        ],
        explanation:
          "**十字路口 (shízì lùkǒu)** literally means 'ten-character junction' because **十** looks exactly like a **+** crossroads!",
      },
      {
        id: "neighbourhood-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-directions",
        question: "Read: **从地铁站A出口出来，一直往前走，过马路以后，购物中心就在超市的对面。** Where is the shopping mall?",
        options: [
          "inside MRT Exit A",
          "behind the park entrance",
          "next to the hospital gate",
          "opposite the supermarket",
        ],
        answerIndex: 3,
        hints: [
          "Look at the final phrase: 购物中心就在超市的对面。",
          "对面 (duìmiàn) means opposite / across from.",
        ],
        explanation:
          "**购物中心就在超市的对面** (Gòuwù zhōngxīn jiù zài chāoshì de duìmiàn) states that the shopping mall is **opposite the supermarket**.",
      },
      {
        id: "neighbourhood-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-directions",
        question: "What does **迷路 (mílù)** mean in **我第一次来这里，有点儿迷路了**?",
        options: [
          "to get lost",
          "to cross the street",
          "to catch a bus",
          "to read a map",
        ],
        answerIndex: 0,
        hints: [
          "路 (lù) = road/way; 迷 (mí) = confused/lost.",
          "Context: 'It's my first time here, I've slightly ___.'",
        ],
        explanation:
          "**迷路 (mílù)** means to get lost (**有点儿迷路了** = got a little lost).",
      },
      {
        id: "neighbourhood-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-directions",
        question: "You are facing **North (北)**. If someone tells you **往右拐 (wǎng yòu guǎi)**, which compass direction are you now facing?",
        options: [
          "West (西)",
          "East (东)",
          "South (南)",
          "North (北)",
        ],
        answerIndex: 1,
        hints: [
          "Stand facing North on a compass: North is up, South is down, West is left, East is right.",
          "往右拐 means turn right (90° clockwise).",
        ],
        explanation:
          "Facing North (**北**), turning right (**往右拐 wǎng yòu guǎi**) turns you 90° clockwise to face **East (东 dōng)**.",
      },
      {
        id: "neighbourhood-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-directions",
        question: "Which sentence uses **先…，然后…，再…** naturally to give directions?",
        options: [
          "再一直往前走，先过马路，然后往左拐。",
          "然后过马路，再一直往前走，先往左拐。",
          "先一直往前走，然后过马路，再往左拐。",
          "先往左拐，再一直往前走，最后先过马路。",
        ],
        answerIndex: 2,
        hints: [
          "Check the chronological order of Chinese sequence markers: 先 (first) → 然后 (then) → 再 (next/then).",
          "Only one option begins with 先 and follows with 然后 then 再.",
        ],
        explanation:
          "**先一直往前走，然后过马路，再往左拐。** (Xiān yìzhí wǎng qián zǒu, ránhòu guò mǎlù, zài wǎng zuǒ guǎi.) sequences **先 → 然后 → 再** cleanly.",
      },
      {
        id: "neighbourhood-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "giving-directions",
        question: "Follow the route starting facing North: **一直往前走到第二个路口，往左拐，再走一百米，在第一个路口往左拐。** Which direction are you facing now?",
        options: [
          "North (北)",
          "East (东)",
          "West (西)",
          "South (南)",
        ],
        answerIndex: 3,
        hints: [
          "Track each turn step by step from North: First 往左拐 (turn left) → facing West.",
          "Second 往左拐 (turn left again from West) → 180° total turn from North!",
        ],
        explanation:
          "Starting North (**北**), the first **往左拐** faces West (**西**), and the second **往左拐** faces **South (南 nán)**.",
      },
      {
        id: "neighbourhood-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "giving-directions",
        question: "Which phrase is the most polite response after a stranger says **谢谢你帮我指路！**?",
        options: [
          "不客气！(Bú kèqi!)",
          "请问！(Qǐngwèn!)",
          "对不起！(Duìbuqǐ!)",
          "迷路了！(Mílù le!)",
        ],
        answerIndex: 0,
        hints: [
          "谢谢你 means 'Thank you' — choose the standard Mandarin reply meaning 'You're welcome!'.",
          "请问 = Excuse me; 对不起 = Sorry.",
        ],
        explanation:
          "**不客气！(Bú kèqi!)** means 'You're welcome!' and is the natural reply to **谢谢你**.",
      },
      {
        id: "neighbourhood-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "giving-directions",
        question: "Read: **去体育中心不用坐车，你从学校大门出来，往右拐，一直往前走五分钟，过了红绿灯就到了，就在公园旁边。** Which instruction is NOT part of the route?",
        options: [
          "Exit the school main gate and turn right.",
          "Take the MRT for two stops to the park.",
          "Walk straight ahead for five minutes.",
          "Pass the traffic lights to find it next to the park.",
        ],
        answerIndex: 1,
        hints: [
          "Notice the opening words: 不用坐车 ('no need to take transport/ride a vehicle').",
          "Check which option claims you must take the MRT.",
        ],
        explanation:
          "The directions explicitly start with **不用坐车** (no need to take transport) and tell you to walk (**一直往前走五分钟**), so taking the MRT is NOT part of the route.",
      },
    ],
  },
  {
    id: "neighbourhood-m3",
    title: "Neighbourhood & Directions — MCQ Paper 3 (City vs Suburbs & Opinions)",
    questions: [
      {
        id: "neighbourhood-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "comparing-neighbourhoods",
        question: "What do **市中心 (shìzhōngxīn)** and **郊区 (jiāoqū)** mean?",
        options: [
          "park / playground",
          "north side / south side",
          "city centre / suburbs",
          "bus stop / train station",
        ],
        answerIndex: 2,
        hints: [
          "市 = city + 中心 = centre.",
          "郊区 refers to the quieter residential outskirts outside downtown.",
        ],
        explanation:
          "**市中心 (shìzhōngxīn)** means city centre (downtown) and **郊区 (jiāoqū)** means suburbs.",
      },
      {
        id: "neighbourhood-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "comparing-neighbourhoods",
        question: "Which adjective means **convenient**?",
        options: [
          "安静 (ānjìng)",
          "热闹 (rènào)",
          "新鲜 (xīnxiān)",
          "方便 (fāngbiàn)",
        ],
        answerIndex: 3,
        hints: [
          "Used constantly with transport: 交通非常___ (Transport is very convenient).",
          "安静 = quiet; 热闹 = lively; 新鲜 = fresh.",
        ],
        explanation:
          "**方便 (fāngbiàn)** means convenient (e.g. 住在地铁站附近非常方便). **安静** is quiet and **热闹** is lively.",
      },
      {
        id: "neighbourhood-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-neighbourhoods",
        question: "How does **热闹 (rènào)** differ in tone from **吵 (chǎo)**?",
        options: [
          "热闹 is usually positive ('lively/bustling'), while 吵 is negative ('noisy').",
          "热闹 means completely silent, while 吵 means clean and spacious.",
          "热闹 only describes rural parks, while 吵 only describes libraries.",
          "热闹 is a verb meaning 'to walk', while 吵 means 'to drive fast'.",
        ],
        answerIndex: 0,
        hints: [
          "Think about describing a vibrant weekend night market vs roaring traffic outside your bedroom window.",
          "热闹 has a warm, festive connotation; 吵 is an annoyance.",
        ],
        explanation:
          "**热闹 (rènào)** has a positive nuance ('lively, vibrant, bustling'), whereas **吵 (chǎo)** is negative ('unpleasantly noisy').",
      },
      {
        id: "neighbourhood-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-neighbourhoods",
        question: "Choose the grammatically correct sentence for **'The suburbs are not as lively as the city centre, but they are quieter.'**",
        options: [
          "郊区比市中心不热闹，但是很更安静。",
          "郊区没有市中心热闹，但是更安静。",
          "郊区没有市中心比热闹，所以安静。",
          "市中心没有郊区热闹，但是更吵。",
        ],
        answerIndex: 1,
        hints: [
          "Use A 没有 B + Adj for 'not as … as' (NEVER *比…不Adj*!).",
          "Place 更 directly before 安静 without 很.",
        ],
        explanation:
          "**郊区没有市中心热闹，但是更安静。** (Jiāoqū méiyǒu shìzhōngxīn rènào, dànshì gèng ānjìng.) uses **没有** and **更安静** cleanly.",
      },
      {
        id: "neighbourhood-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-neighbourhoods",
        question: "What does **环境很好 (huánjìng hěn hǎo)** mean?",
        options: [
          "The bus ticket is very cheap today.",
          "The school homework is quite easy.",
          "The local environment is very good.",
          "The weather is cold and very windy.",
        ],
        answerIndex: 2,
        hints: [
          "环境 (huánjìng) refers to the physical surroundings, greenery, and cleanliness of an area.",
          "Often paired with 空气新鲜 (fresh air) and 安静 (quiet).",
        ],
        explanation:
          "**环境很好 (huánjìng hěn hǎo)** means the environment / surroundings are very good — a core Year 9 & IGCSE phrase for describing neighbourhoods.",
      },
      {
        id: "neighbourhood-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-neighbourhoods",
        question: "Which sentence correctly compares city transport and suburban transport using **比**?",
        options: [
          "市中心的交通比郊区很方便。",
          "市中心的交通比郊区非常方便。",
          "市中心的交通方便比郊区得多。",
          "市中心的交通比郊区方便得多。",
        ],
        answerIndex: 3,
        hints: [
          "Follow A + 比 + B + Adjective + 得多 (much more).",
          "Eliminate any sentence containing 很 or 非常 right after 比!",
        ],
        explanation:
          "**市中心的交通比郊区方便得多。** (Shìzhōngxīn de jiāotōng bǐ jiāoqū fāngbiàn de duō.) puts **得多** after **方便** with zero forbidden **很/非常**.",
      },
      {
        id: "neighbourhood-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-neighbourhoods",
        question: "What does **堵车 (dǔchē)** mean in **早上八点市中心常常堵车，所以坐地铁更快**?",
        options: [
          "traffic jam",
          "buy a new car",
          "park the car",
          "ride a bicycle",
        ],
        answerIndex: 0,
        hints: [
          "Look at the context: at 8 a.m. in the city centre, taking the MRT is faster because roads have ___.",
          "堵 (dǔ) means blocked/jammed + 车 (chē) = cars.",
        ],
        explanation:
          "**堵车 (dǔchē)** means traffic jam (literally 'blocked cars'), which explains why **坐地铁更快** (taking the MRT is faster).",
      },
      {
        id: "neighbourhood-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-neighbourhoods",
        question: "Choose the connective pair that fits: **我住的社区___交通很方便，___环境非常安静。**",
        options: [
          "虽然……但是……",
          "不但……而且……",
          "因为……但是……",
          "没有……而且……",
        ],
        answerIndex: 1,
        hints: [
          "Notice that BOTH clauses praise the neighbourhood (convenient transport + very quiet environment).",
          "Which pair translates 'not only…, but also…'?",
        ],
        explanation:
          "**不但……而且……** (búdàn… érqiě… — not only…, but also…) joins two positive facts about the neighbourhood smoothly.",
      },
      {
        id: "neighbourhood-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-neighbourhoods",
        question: "Read: **我更喜欢住在郊区，因为那里的空气比市中心新鲜得多。** Why does the speaker prefer the suburbs?",
        options: [
          "There are more shopping malls and cinemas nearby.",
          "The MRT station is only two minutes from their bedroom.",
          "The air there is much fresher than in the city centre.",
          "The streets there are much busier and louder at night.",
        ],
        answerIndex: 2,
        hints: [
          "Decode the clause after 因为: 那里的空气比市中心新鲜得多.",
          "空气 (kōngqì) = air; 新鲜 (xīnxiān) = fresh.",
        ],
        explanation:
          "**空气比市中心新鲜得多** (kōngqì bǐ shìzhōngxīn xīnxiān de duō) means the air is **much fresher** than in the city centre.",
      },
      {
        id: "neighbourhood-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "comparing-neighbourhoods",
        question: "What does **邻居 (línjū)** mean in **我们的邻居都很友好**?",
        options: [
          "bus drivers",
          "shopkeepers",
          "classmates",
          "neighbours",
        ],
        answerIndex: 3,
        hints: [
          "邻 (lín) = adjacent/neighbouring; 居 (jū) = reside/dwell.",
          "友好 (yǒuhǎo) means friendly.",
        ],
        explanation:
          "**邻居 (línjū)** means neighbour (**我们的邻居都很友好** = Our neighbours are all very friendly).",
      },
      {
        id: "neighbourhood-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "comparing-neighbourhoods",
        question: "Read: **虽然市中心的房子比郊区贵得多，而且周末有点儿吵，但是爸爸还是想住在市中心，因为离他公司很近，不用每天花一个小时坐车。** Why does Dad still want to live downtown?",
        options: [
          "It is close to his office so he avoids a one-hour daily commute.",
          "Houses downtown are much cheaper and quieter than suburban villas.",
          "He enjoys spending an hour on the bus every single morning.",
          "There is a huge farm right beside his office building.",
        ],
        answerIndex: 0,
        hints: [
          "Focus on the reason introduced by 因为 after 但是.",
          "离他公司很近 = close to his company/office; 不用花一个小时坐车 = no need to spend an hour commuting.",
        ],
        explanation:
          "Even though downtown homes are more expensive (**贵得多**) and a bit noisy (**有点儿吵**), Dad prefers it **因为离他公司很近，不用每天花一个小时坐车** — close to his office, avoiding a 1-hour commute.",
      },
      {
        id: "neighbourhood-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "local-facilities",
        question: "Read: **我家搬到了新加坡西边的一个新社区。附近不但有地铁站、大超市和图书馆，而且走路十分钟就到公园。唯一不太方便的是附近没有电影院。** What is the ONLY inconvenience mentioned?",
        options: [
          "There is no MRT station near the new neighbourhood.",
          "There is no cinema nearby.",
          "The park is more than an hour away by bus.",
          "There is neither a supermarket nor a library.",
        ],
        answerIndex: 1,
        hints: [
          "Look at the final sentence starting with 唯一不太方便的是 ('The only inconvenient thing is…').",
          "Identify what comes after 没有 (there is no…).",
        ],
        explanation:
          "**唯一不太方便的是附近没有电影院** (Wéiyī bú tài fāngbiàn de shì fùjìn méiyǒu diànyǐngyuàn) states the sole drawback: **there is no cinema nearby**.",
      },
      {
        id: "neighbourhood-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "distance-li-transport",
        question: "Which sentence puts **离**, **从…到…**, and a **transport verb** together with ZERO errors?",
        options: [
          "我家是离地铁站很近，从我家到地铁站坐自行车只要五分钟。",
          "我家跟地铁站很近，离我家到地铁站走路只要五分钟。",
          "我家离地铁站很近，从我家到地铁站走路只要五分钟。",
          "我家离地铁站很近，从我家到地铁站骑地铁只要五分钟。",
        ],
        answerIndex: 2,
        hints: [
          "Check every option for three traps: 是 before 离, 跟 instead of 离, and mismatched verbs (坐自行车 / 骑地铁).",
          "Only one sentence avoids all three traps.",
        ],
        explanation:
          "**我家离地铁站很近，从我家到地铁站走路只要五分钟。** correctly uses **离** (without 是), **从…到…**, and **走路**.",
      },
      {
        id: "neighbourhood-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "comparing-neighbourhoods",
        question: "Read: **农村的风景比城市美得多，空气也很新鲜；不过，如果生病了，去医院不太方便。** What does **不过 (búguò)** signal here?",
        options: [
          "A direct cause-and-effect conclusion.",
          "A list of three more reasons to love the countryside.",
          "A street direction telling you to cross a bridge.",
          "A polite contrast introducing a downside ('however / though').",
        ],
        answerIndex: 3,
        hints: [
          "Compare what comes before 不过 (scenery prettier, air fresh) with what comes after (going to hospital is inconvenient).",
          "不过 functions like a softer 但是 ('however').",
        ],
        explanation:
          "**不过 (búguò)** introduces a balanced contrast ('however / though') between the countryside's beauty (**风景美、空气新鲜**) and its drawback (**去医院不太方便**).",
      },
      {
        id: "neighbourhood-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "comparing-neighbourhoods",
        question: "Which closing sentence best upgrades an IGCSE essay comparing **city centre vs suburbs** to Band 1?",
        options: [
          "虽然市中心比郊区方便得多，但是将来我更想住在环境安静、空气新鲜的郊区。",
          "市中心很好，郊区也很好，我喜欢市中心，也喜欢郊区，都很好。",
          "我每天早上七点起床，然后坐公共汽车去学校，下午三点半回家。",
          "我家附近有一个超市、一个银行、一个邮局、一个公园和一个医院。",
        ],
        answerIndex: 0,
        hints: [
          "Look for paired connectives (虽然…但是…), a 比 comparison (+ 得多), a future preference (将来我更想住在…), and a pre-noun modifier ending in 的.",
          "Avoid repetitive basic clauses or off-topic daily routine lines.",
        ],
        explanation:
          "**虽然市中心比郊区方便得多，但是将来我更想住在环境安静、空气新鲜的郊区。** combines **虽然…但是…**, **比…得多**, **将来我更想住在**, and rich descriptive modifiers (**环境安静、空气新鲜的郊区**) in one cohesive sentence.",
      },
    ],
  },
];
