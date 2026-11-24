import type { ExamPaper } from "../types.ts";

const HOME_NEIGHBOURHOOD_SVG =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Home and neighbourhood map showing MRT station, Park directly across Heping Road from My Home, Sports Centre in the top row, and Supermarket, My Home two-storey villa, and Library in the bottom row">' +
  '<rect x="8" y="8" width="544" height="234" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>' +
  '<text x="280" y="30" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">我家与社区位置图 (Home &amp; Neighbourhood Map)</text>' +
  '<rect x="24" y="42" width="152" height="54" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.4"/>' +
  '<text x="100" y="65" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">地铁站 (dìtiězhàn)</text>' +
  '<text x="100" y="83" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">走路十五分钟</text>' +
  '<rect x="200" y="42" width="160" height="54" rx="8" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.8"/>' +
  '<text x="280" y="65" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--good)">公园 (gōngyuán)</text>' +
  '<text x="280" y="83" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">绿树很多 · 很安静</text>' +
  '<rect x="384" y="42" width="152" height="54" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.4"/>' +
  '<text x="460" y="65" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">体育中心</text>' +
  '<text x="460" y="83" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">骑自行车五分钟</text>' +
  '<rect x="24" y="108" width="512" height="32" rx="4" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4"/>' +
  '<line x1="36" y1="124" x2="524" y2="124" stroke="var(--ink-2)" stroke-width="1.2" stroke-dasharray="10 8"/>' +
  '<rect x="208" y="112" width="144" height="24" rx="4" fill="var(--surface)"/>' +
  '<text x="280" y="128" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">和平路 (Hépíng Lù)</text>' +
  '<rect x="24" y="152" width="148" height="72" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.4"/>' +
  '<text x="98" y="182" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">超市 (chāoshì)</text>' +
  '<text x="98" y="203" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">我家左边</text>' +
  '<rect x="188" y="152" width="184" height="72" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>' +
  '<text x="280" y="176" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--brand)">我家：两层别墅</text>' +
  '<text x="280" y="196" text-anchor="middle" font-size="10.5" fill="var(--ink)">楼上：3间卧室 · 书房</text>' +
  '<text x="280" y="213" text-anchor="middle" font-size="10.5" fill="var(--ink)">楼下：客厅 · 厨房 · 花园</text>' +
  '<rect x="388" y="152" width="148" height="72" rx="8" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.4"/>' +
  '<text x="462" y="182" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">图书馆</text>' +
  '<text x="462" y="203" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">我家右边</text>' +
  '</svg>';

const FAMILY_PORTRAIT_CARD_SVG =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spring Festival family reunion profile card for maternal grandmother, maternal uncle who is a tall computer engineer in Singapore, 16-year-old cousin, and Year 9 student age 14">' +
  '<rect x="8" y="8" width="544" height="234" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>' +
  '<text x="280" y="32" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">春节全家福信息卡 (Family Reunion Card — 妈妈一家)</text>' +
  '<rect x="24" y="46" width="248" height="84" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4"/>' +
  '<text x="40" y="70" font-size="12.5" font-weight="700" fill="var(--brand)">外婆 (72岁 · wàipó)</text>' +
  '<text x="40" y="92" font-size="11.5" fill="var(--ink)">留着白色短发，戴着一副眼镜</text>' +
  '<text x="40" y="114" font-size="11" fill="var(--ink-2)">性格非常耐心，做年夜饭最好吃</text>' +
  '<rect x="288" y="46" width="248" height="84" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.7"/>' +
  '<text x="304" y="70" font-size="12.5" font-weight="700" fill="var(--brand)">舅舅 (44岁 · 妈妈的哥哥)</text>' +
  '<text x="304" y="92" font-size="11.5" fill="var(--ink)">住在新加坡，是一位电脑工程师</text>' +
  '<text x="304" y="114" font-size="11" fill="var(--ink-2)">个子很高，性格非常幽默</text>' +
  '<rect x="24" y="142" width="248" height="84" rx="8" fill="var(--brand-soft)" stroke="var(--good)" stroke-width="1.7"/>' +
  '<text x="40" y="166" font-size="12.5" font-weight="700" fill="var(--good)">表哥 (16岁 · 舅舅的儿子)</text>' +
  '<text x="40" y="188" font-size="11.5" fill="var(--ink)">穿着红色T恤，比我高八厘米</text>' +
  '<text x="40" y="210" font-size="11" fill="var(--ink-2)">又聪明又勤快，擅长物理和游泳</text>' +
  '<rect x="288" y="142" width="248" height="84" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.4"/>' +
  '<text x="304" y="166" font-size="12.5" font-weight="700" fill="var(--ink)">我 (14岁 · 九年级学生)</text>' +
  '<text x="304" y="188" font-size="11.5" fill="var(--ink)">家里养了一只小狗和两条金鱼</text>' +
  '<text x="304" y="210" font-size="11" fill="var(--ink-2)">最喜欢中文课和打羽毛球</text>' +
  '</svg>';

const WEEKLY_SCHOOL_CCA_SVG =
  '<svg viewBox="0 0 560 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Year 9 school day schedule showing morning lessons, canteen lunch, afternoon classes, and after-school CCA blank from 15:45 to 17:00">' +
  '<rect x="8" y="8" width="544" height="229" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>' +
  '<text x="280" y="32" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">九年级校园生活一览表 (Year 9 School Day Overview)</text>' +
  '<rect x="24" y="48" width="512" height="38" rx="7" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.3"/>' +
  '<text x="42" y="72" font-size="12" font-weight="700" fill="var(--brand)">08:00–12:00 上午</text>' +
  '<text x="190" y="72" font-size="12" fill="var(--ink)">中文 · 数学 · 物理 · 化学 (科学实验室)</text>' +
  '<rect x="24" y="94" width="512" height="38" rx="7" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.3"/>' +
  '<text x="42" y="118" font-size="12" font-weight="700" fill="var(--good)">12:00–13:00 午饭</text>' +
  '<text x="190" y="118" font-size="12" fill="var(--ink)">在学校食堂和朋友一起吃午饭、休息</text>' +
  '<rect x="24" y="140" width="512" height="38" rx="7" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.3"/>' +
  '<text x="42" y="164" font-size="12" font-weight="700" fill="var(--brand)">13:00–15:30 下午</text>' +
  '<text x="190" y="164" font-size="12" fill="var(--ink)">地理 · 艺术 · 体育 (大运动场 &amp; 游泳池)</text>' +
  '<rect x="24" y="186" width="512" height="38" rx="7" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/>' +
  '<text x="42" y="210" font-size="12" font-weight="700" fill="var(--brand)">15:45–17:00 放学后</text>' +
  '<text x="190" y="210" font-size="12" font-weight="700" fill="var(--ink)">[ ???? ] (CCAs: 戏剧社 · 游泳队 · 机器人)</text>' +
  '</svg>';

export const paper: ExamPaper = {
  id: "exam-4",
  title: "Year 9 Chinese Full End-of-Year Mock Paper (IGCSE 0547 Bridge)",
  calculator: false,
  minutes: 45,
  questions: [
    {
      id: "exam-4-q01",
      kind: "mcq",
      topicId: "house-furniture",
      guideRef: "house-types-rooms",
      difficulty: "warmup",
      question:
        "Which Mandarin term means **villa / detached house** (as contrasted with an apartment `公寓` gōngyù)?",
      options: [
        "书房 (shūfáng)",
        "阳台 (yángtái)",
        "客厅 (kètīng)",
        "别墅 (biéshù)",
      ],
      answerIndex: 3,
      hints: [
        "Eliminate individual rooms: `书房` (study), `阳台` (balcony), and `客厅` (living room).",
        "The two-character term has tones 2 and 4 (`biéshù`).",
      ],
      explanation:
        "`别墅` (biéshù) means a villa or detached house. `书房` (shūfáng) is a study, `阳台` (yángtái) is a balcony, and `客厅` (kètīng) is a living room.",
    },
    {
      id: "exam-4-q02",
      kind: "short",
      topicId: "house-furniture",
      guideRef: "furniture-measure-words",
      difficulty: "warmup",
      question:
        "Type the exact Mandarin measure word (Simplified Hanzi or tone-marked Pinyin) used for flat furniture like **a bed** (`一___床`) or **a desk** (`一___书桌`).",
      answer: {
        type: "text",
        accept: ["张", "zhāng"],
        display: "张 (zhāng)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["把", "bǎ"] },
          feedback: "`把` (bǎ) is for chairs (`一把椅子`), not beds or desks.",
        },
        {
          spec: { type: "text", accept: ["个", "gè", "ge"] },
          feedback: "Avoid generic `个` — flat surfaces like beds, desks, and photos take a specific 1st-tone measure word.",
        },
      ],
      hints: [
        "Used for flat, spread-out objects: beds, desks, tables, paper, tickets.",
        "1st tone: `zhāng`.",
      ],
      solution: [
        "Flat furniture such as `床` (bed) and `书桌` (desk) takes `张` (zhāng): `一张床`, `一张书桌`.",
        "By contrast, chairs take `把` (`一把椅子`) and computers take `台` (`一台电脑`).",
      ],
      commonError: "Using `个` instead of `张`, or mixing up `张` (desk/bed) and `把` (chair).",
    },
    {
      id: "exam-4-q03",
      kind: "mcq",
      topicId: "pets",
      guideRef: "common-pets-measure-words",
      difficulty: "warmup",
      question:
        "Which Mandarin sentence uses **both exact animal measure words and the number two** with zero errors?",
      options: [
        "我家有一条小猫和一只金鱼。",
        "我家有一只小猫和两条金鱼。",
        "我家有一匹小猫和两把金鱼。",
        "我家有一只小猫和二条金鱼。",
      ],
      answerIndex: 1,
      hints: [
        "Cats take `只` (zhī) and goldfish take `条` (tiáo).",
        "Before ANY measure word, the number 2 must be `两` (liǎng), NEVER `二` (èr)!",
      ],
      explanation:
        "Cats take `只` (`一只小猫`), fish take `条` (`两条金鱼`), and before a measure word Mandarin requires `两`, never `二`. Therefore `我家有一只小猫和两条金鱼。` is the only error-free option.",
    },
    {
      id: "exam-4-q04",
      kind: "short",
      topicId: "relatives-family",
      guideRef: "paternal-maternal-grandparents",
      difficulty: "warmup",
      question:
        "In Mandarin, what do you call your **mother's mother** (maternal grandmother)? Type Simplified Hanzi or tone-marked Pinyin.",
      answer: {
        type: "text",
        accept: ["外婆", "姥姥", "wàipó", "lǎolao", "lǎolǎo"],
        display: "外婆 (wàipó)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["奶奶", "nǎinai", "nǎinǎi"] },
          feedback: "`奶奶` (nǎinai) is your father's mother (paternal grandmother), not your mother's mother!",
        },
        {
          spec: { type: "text", accept: ["外公", "姥爷", "wàigōng", "lǎoye"] },
          feedback: "`外公` / `姥爷` is your maternal grandfather (mother's father), not grandmother.",
        },
      ],
      hints: [
        "Do not use `奶奶` — that is paternal (father's side).",
        "Both southern/Singapore `外婆` (wàipó) and northern `姥姥` (lǎolao) are standard.",
      ],
      solution: [
        "Paternal grandmother = `奶奶` (nǎinai); maternal grandmother = `外婆` (wàipó) or `姥姥` (lǎolao).",
        "In Singapore, `外公` and `外婆` are especially common.",
      ],
      commonError: "Calling a maternal grandmother `奶奶`, which only applies to your father's mother.",
    },
    {
      id: "exam-4-q05",
      kind: "mcq",
      topicId: "school-subjects-facilities",
      guideRef: "school-subjects-opinions",
      difficulty: "warmup",
      question:
        "Which set lists the **three branches of Science (`科学` kēxué)** studied in Year 9?",
      options: [
        "生物、化学、物理 (shēngwù, huàxué, wùlǐ)",
        "地理、历史、戏剧 (dìlǐ, lìshǐ, xìjù)",
        "数学、电脑、艺术 (shùxué, diànnǎo, yìshù)",
        "中文、英文、体育 (Zhōngwén, Yīngwén, tǐyù)",
      ],
      answerIndex: 0,
      hints: [
        "Look for Biology (`生物`), Chemistry (`化学`), and Physics (`物理`).",
        "Eliminate Humanities (`地理`, `历史`) and Languages (`中文`, `英文`).",
      ],
      explanation:
        "The three Science subjects are `生物` (shēngwù — Biology), `化学` (huàxué — Chemistry), and `物理` (wùlǐ — Physics). `地理` and `历史` are Humanities, while `艺术` and `戏剧` are Creative Arts.",
    },
    {
      id: "exam-4-q06",
      kind: "short",
      topicId: "neighbourhood",
      guideRef: "local-facilities",
      difficulty: "core",
      diagram: HOME_NEIGHBOURHOOD_SVG,
      question:
        "Study the map (`我家与社区位置图`). Complete this sentence stating that the park is **directly across the road / opposite** my home:\n\n**「公园在我家___。」**\n\nType the two-character Mandarin position word (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["对面", "duìmiàn"],
        display: "对面 (duìmiàn)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["旁边", "pángbiān"] },
          feedback: "`超市` and `图书馆` are beside (`旁边`) my home; `公园` is across `和平路` directly facing it (`对面`).",
        },
        {
          spec: { type: "text", accept: ["后面", "hòumian", "hòumiàn"] },
          feedback: "`后面` means behind; across the street facing a building is `对面` (duìmiàn).",
        },
      ],
      hints: [
        "Literally 'facing side' — `对` (facing) + `面` (side/surface).",
        "Both syllables are in the 4th tone: `duìmiàn`.",
      ],
      solution: [
        "On the map, `公园` faces `我家` directly across `和平路`.",
        "'Opposite / across from' is `对面` (duìmiàn): `公园在我家对面。`",
      ],
      commonError: "Using `前面` or `旁边` when a building is specifically across the street (`对面`).",
    },
    {
      id: "exam-4-q07",
      kind: "mcq",
      topicId: "chinese-festivals",
      guideRef: "spring-festival",
      difficulty: "core",
      question:
        "On **除夕** (Chúxī — Chinese New Year's Eve), which tradition brings all generations of the family together around one table?",
      options: [
        "吃月饼和赏月 (chī yuèbǐng hé shǎngyuè)",
        "吃粽子和划龙舟 (chī zòngzi hé huá lóngzhōu)",
        "吃丰盛的年夜饭 (chī fēngshèng de niányèfàn)",
        "吃汤圆和猜灯谜 (chī tāngyuán hé cāi dēngmí)",
      ],
      answerIndex: 2,
      hints: [
        "`除夕` is the final evening of the lunar year before `春节`.",
        "Literally 'year-evening-meal' (`年夜饭`).",
      ],
      explanation:
        "On `除夕` (New Year's Eve), families gather for `年夜饭` (niányèfàn — the New Year's Eve reunion dinner). `月饼/赏月` is Mid-Autumn, `粽子/划龙舟` is Dragon Boat, and `汤圆/猜灯谜` is Lantern Festival.",
    },
    {
      id: "exam-4-q08",
      kind: "short",
      topicId: "appearance-personality",
      guideRef: "wearing-clothes-glasses",
      difficulty: "core",
      question:
        "Type the single-character Mandarin verb (or verb + `着`, Simplified Hanzi or tone-marked Pinyin) used for **wearing clothes and shoes** in:\n\n**「我今天___白色的校服和运动鞋。」**",
      answer: {
        type: "text",
        accept: ["穿", "穿着", "chuān", "chuānzhe"],
        display: "穿 / 穿着 (chuān / chuānzhe)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["戴", "戴着", "dài", "dàizhe"] },
          feedback: "`戴` (dài) is strictly for accessories like glasses, hats, scarves, and watches — clothes and shoes take `穿` (chuān)!",
        },
      ],
      hints: [
        "Distinguish clothing/shoes (`___校服、运动鞋`) from accessories (`戴眼镜、手表`).",
        "1st tone: `chuān` (or `chuānzhe`).",
      ],
      solution: [
        "Clothes (`校服`, `衬衫`, `牛仔裤`) and shoes (`运动鞋`) always take `穿` / `穿着` (chuān / chuānzhe).",
        "Accessories (`眼镜`, `帽子`, `手表`, `围巾`) take `戴` / `戴着` (dài / dàizhe).",
      ],
      commonError: "Mixing up `穿` (clothes/shoes) and `戴` (glasses/hats/watches).",
    },
    {
      id: "exam-4-q09",
      kind: "mcq",
      topicId: "neighbourhood",
      guideRef: "giving-directions",
      difficulty: "core",
      question:
        "You ask a passer-by: `请问，最近的地铁站怎么走？` They reply:\n\n**「一直往前走，过马路后在第二个路口往右拐，就在银行旁边。」**\n\nWhich direction step is **NOT** mentioned in their reply?",
      options: [
        "Walk straight ahead first.",
        "Cross the road along the route.",
        "Turn right at the second junction.",
        "Turn left opposite the post office.",
      ],
      answerIndex: 3,
      hints: [
        "Match each clause: `一直往前走`, `过马路后`, `在第二个路口往右拐`, `在银行旁边`.",
        "Check whether `往左拐` (turn left) or `邮局` (post office) appears anywhere.",
      ],
      explanation:
        "The reply tells you to walk straight (`一直往前走`), cross the road (`过马路`), turn right at the second junction (`在第二个路口往右拐`), and find it beside the bank (`在银行旁边`). It never mentions turning left (`往左拐`) or a post office (`邮局`).",
    },
    {
      id: "exam-4-q10",
      kind: "short",
      topicId: "chinese-festivals",
      guideRef: "dragon-boat-lantern",
      difficulty: "core",
      question:
        "Type the three-character Mandarin name (Simplified Hanzi or tone-marked Pinyin) of the **Dragon Boat Festival**, celebrated on `农历五月初五` with `划龙舟` and `吃粽子`.",
      answer: {
        type: "text",
        accept: ["端午节", "Duānwǔjié", "duānwǔjié"],
        display: "端午节 (Duānwǔjié)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["中秋节", "Zhōngqiūjié", "zhōngqiūjié"] },
          feedback: "`中秋节` is Mid-Autumn Festival (`八月十五`), not Dragon Boat Festival (`五月初五`).",
        },
        {
          spec: { type: "text", accept: ["元宵节", "Yuánxiāojié", "yuánxiāojié"] },
          feedback: "`元宵节` is the Lantern Festival (`正月十五`), not Dragon Boat Festival.",
        },
        {
          spec: { type: "text", accept: ["春节", "Chūnjié", "chūnjié"] },
          feedback: "`春节` is Spring Festival (`正月初一`), not Dragon Boat Festival.",
        },
      ],
      hints: [
        "Do not translate 'Dragon Boat' literally (`龙舟节`) — use the official Mandarin festival name.",
        "1st tone + 3rd tone + 2nd tone: `Duānwǔjié`.",
      ],
      solution: [
        "The official Mandarin name for the Dragon Boat Festival (`五月初五`) is `端午节` (Duānwǔjié).",
        "Key customs: `划龙舟` (huá lóngzhōu), `吃粽子` (chī zòngzi), commemorating `屈原` (Qū Yuán).",
      ],
      commonError: "Writing literal `龙舟节` instead of the standard name `端午节` (Duānwǔjié).",
    },
    {
      id: "exam-4-q11",
      kind: "mcq",
      topicId: "relatives-family",
      guideRef: "cousins-family-tree",
      difficulty: "core",
      diagram: FAMILY_PORTRAIT_CARD_SVG,
      question:
        "Study the family reunion card (`春节全家福信息卡`). Which statement is **completely accurate**?",
      options: [
        "The paternal uncle lives in London, works as a doctor, and wears glasses.",
        "The maternal uncle is a tall computer engineer in Singapore, and his 16-year-old son is 表哥.",
        "The paternal grandmother has long black hair and keeps two goldfish at home.",
        "The 16-year-old cousin is 堂哥 because he is the father's older brother's son.",
      ],
      answerIndex: 1,
      hints: [
        "Notice the header `妈妈一家` (Mother's side): `舅舅` = mother's brother, `外婆` = mother's mother.",
        "Because `表哥` (16) is `舅舅`'s son (maternal side) and older than `我` (14), he takes `表`, not `堂`.",
      ],
      explanation:
        "On the card, `舅舅` (`妈妈的哥哥` — maternal uncle) lives in Singapore, works as a computer engineer (`电脑工程师`), and is tall (`个子很高`). His 16-year-old son is older than `我` (14) on the mother's side, so he is accurately called `表哥` (biǎogē).",
    },
    {
      id: "exam-4-q12",
      kind: "short",
      topicId: "pets",
      guideRef: "caring-for-pets",
      difficulty: "core",
      question:
        "Complete this sentence meaning *'Keeping a pet requires carefully **looking after** it every day'*:\n\n**「养宠物需要每天认真___它。」**\n\nType the two-character Mandarin verb (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["照顾", "zhàogù"],
        display: "照顾 (zhàogù)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["看望", "kànwàng"] },
          feedback: "`看望` (kànwàng) means to visit a relative or elder, not daily care for a pet or child.",
        },
        {
          spec: { type: "text", accept: ["喂", "wèi"] },
          feedback: "`喂` is one character meaning specifically 'to feed'; here you need the two-character verb meaning 'to look after / care for'.",
        },
      ],
      hints: [
        "Both syllables carry the 4th tone: `zhàogù`.",
        "Used for taking care of pets (`___宠物`), younger siblings, or grandparents.",
      ],
      solution: [
        "'To look after / care for' is `照顾` (zhàogù).",
        "Complete sentence: `养宠物需要每天认真照顾它。`",
      ],
      commonError: "Confusing `照顾` (care for) with `看望` (visit someone).",
    },
    {
      id: "exam-4-q13",
      kind: "mcq",
      topicId: "igcse-bridge-grammar",
      guideRef: "stpvo-tenses-aspect",
      difficulty: "core",
      question:
        "Which Mandarin sentence combines **correct STPVO word order** AND **accurate past-completed aspect (`了`)** to say *'Yesterday afternoon I played badminton for two hours at the sports hall'*?",
      options: [
        "我昨天下午在体育馆打了两个小时羽毛球。",
        "我打了羽毛球两个小时在体育馆昨天下午。",
        "我昨天下午正在体育馆打了两个小时羽毛球。",
        "我在体育馆昨天下午打算打了两个小时羽毛球。",
      ],
      answerIndex: 0,
      hints: [
        "Check STPVO order: S (`我`) → T (`昨天下午`) → P (`在体育馆`) → V+`了`+Duration+O (`打了两个小时羽毛球`).",
        "Can you mix `正在` (ongoing) or `打算` (future) with completed past `打了`? Never!",
      ],
      explanation:
        "`我昨天下午在体育馆打了两个小时羽毛球。` follows S + T + P + V + `了` + Duration + O cleanly. Mixing `正在` (present continuous) or `打算` (future) with `了` creates a tense contradiction, and putting Time/Place at the end is English word order.",
    },
    {
      id: "exam-4-q14",
      kind: "short",
      topicId: "appearance-personality",
      guideRef: "height-hair-eyes",
      difficulty: "core",
      question:
        "Type the Mandarin phrase (Simplified Hanzi or tone-marked Pinyin) meaning **curly hair** (the opposite of `直发` zhífà — straight hair).",
      answer: {
        type: "text",
        accept: ["卷发", "卷头发", "juǎnfà", "juǎn tóufa"],
        display: "卷发 (juǎnfà)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["直发", "直头发", "zhífà", "zhí tóufa"] },
          feedback: "`直发` (zhífà) means straight hair — you need the opposite, curly hair!",
        },
        {
          spec: { type: "text", accept: ["长发", "长头发", "chángfà", "cháng tóufa"] },
          feedback: "`长发` / `长头发` means long hair, not curly hair.",
        },
      ],
      hints: [
        "Combine `卷` (juǎn — rolled/curly, 3rd tone) with `发` (fà — hair, 4th tone).",
        "Tone-marked Pinyin: `juǎnfà` (or `卷头发` juǎn tóufa).",
      ],
      solution: [
        "Straight hair = `直发` (zhífà); curly hair = `卷发` (juǎnfà) or `卷头发` (juǎn tóufa).",
        "Example: `她留着棕色的长卷发。`",
      ],
      commonError: "Writing `fā` (1st tone — send/emit) instead of `fà` (4th tone — hair) in `直发`/`卷发`.",
    },
    {
      id: "exam-4-q15",
      kind: "mcq",
      topicId: "school-subjects-facilities",
      guideRef: "school-facilities",
      difficulty: "core",
      question:
        "Read the campus tour description:\n\n**「我们学校的游泳池很大，体育馆在游泳池旁边，礼堂在教学楼前面，食堂每天中午都很热闹。」**\n\nWhere is the **auditorium (`礼堂`)** located?",
      options: [
        "Right next to the school swimming pool",
        "Inside the busy student canteen",
        "In front of the classroom building",
        "Behind the indoor sports hall",
      ],
      answerIndex: 2,
      hints: [
        "Locate `礼堂` (lǐtáng) in the third clause: `礼堂在教学楼前面`.",
        "`教学楼` = classroom block; `前面` = in front of.",
      ],
      explanation:
        "`礼堂在教学楼前面` (Lǐtáng zài jiàoxuélóu qiánmian) means the auditorium (`礼堂`) is in front of (`前面`) the classroom building (`教学楼`). The sports hall (`体育馆`) is next to the swimming pool.",
    },
    {
      id: "exam-4-q16",
      kind: "short",
      topicId: "school-subjects-facilities",
      guideRef: "school-timetable",
      difficulty: "core",
      diagram: WEEKLY_SCHOOL_CCA_SVG,
      question:
        "Look at the **15:45–17:00** row of the school overview (`九年级校园生活一览表`). Type the four-character Mandarin term (Simplified Hanzi or tone-marked Pinyin) meaning **extra-curricular activities / CCAs**.",
      answer: {
        type: "text",
        accept: ["课外活动", "kèwài huódòng"],
        display: "课外活动 (kèwài huódòng)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["作业", "zuòyè"] },
          feedback: "`作业` (zuòyè) means homework, not extra-curricular activities (CCAs).",
        },
        {
          spec: { type: "text", accept: ["上课", "shàngkè"] },
          feedback: "`上课` means attending regular lessons, not after-school CCAs.",
        },
      ],
      hints: [
        "Literally 'outside-class' (`课外` kèwài) + 'activities' (`活动` huódòng).",
        "Tone-marked Pinyin: `kèwài huódòng`.",
      ],
      solution: [
        "`课外` (outside lessons) + `活动` (activities) forms `课外活动` (kèwài huódòng — CCAs / extra-curricular activities).",
        "Example: `放学后我参加游泳课外活动。`",
      ],
      commonError: "Writing `课后作业` (after-school homework) instead of `课外活动` (CCAs).",
    },
    {
      id: "exam-4-q17",
      kind: "mcq",
      topicId: "igcse-bridge-grammar",
      guideRef: "igcse-connectives-writing",
      difficulty: "challenge",
      question:
        "Read the complex IGCSE sentence carefully:\n\n**「虽然我家离学校有点儿远，每天早上要坐二十分钟地铁，但是因为社区环境安静又安全，所以我们全家都很喜欢住在这里。」**\n\nWhy does the family love living in this area despite the commute?",
      options: [
        "Because the MRT journey to school takes only two minutes.",
        "Because their school is right across the street from their house.",
        "Because the city centre right outside stays bustling past midnight.",
        "Because the neighbourhood environment is both quiet and safe.",
      ],
      answerIndex: 3,
      hints: [
        "Trace the nested connectives: `虽然…但是…` wraps `因为…所以…`!",
        "Focus on `因为社区环境安静又安全` (yīnwèi shèqū huánjìng ānjìng yòu ānquán).",
      ],
      explanation:
        "After `但是因为`, the writer explains `社区环境安静又安全` — the neighbourhood environment (`社区环境`) is quiet (`安静`) and safe (`安全`), so (`所以`) the whole family loves living there despite the 20-minute MRT ride.",
    },
    {
      id: "exam-4-q18",
      kind: "short",
      topicId: "appearance-personality",
      guideRef: "comparing-people",
      difficulty: "challenge",
      question:
        "Spot and fix the classic IGCSE grammar mistake in **「表哥比我很高八厘米。」** Type the corrected Mandarin sentence meaning *'My cousin is 8 cm taller than me'* (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: [
          "表哥比我高八厘米",
          "表哥比我高8厘米",
          "biǎogē bǐ wǒ gāo bā límǐ",
          "biǎogē bǐ wǒ gāo 8 límǐ",
        ],
        display: "表哥比我高八厘米 (biǎogē bǐ wǒ gāo bā límǐ)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["表哥比我很高八厘米", "biǎogē bǐ wǒ hěn gāo bā límǐ"] },
          feedback: "You kept the error! NEVER place `很` before the adjective inside a `比` comparison sentence.",
        },
        {
          spec: { type: "text", accept: ["表哥比我大八厘米", "biǎogē bǐ wǒ dà bā límǐ"] },
          feedback: "`大` is for age (`大两岁`), whereas height in centimetres uses `高` (`高八厘米`).",
        },
      ],
      hints: [
        "Only ONE illegal word needs to be deleted from `表哥比我很高八厘米`!",
        "Remember: `比` + `很` is NEVER allowed in Mandarin.",
      ],
      solution: [
        "In a `比` comparison, NEVER insert `很` (very) before the adjective.",
        "Removing `很` gives the crisp IGCSE sentence: `表哥比我高八厘米。` (Biǎogē bǐ wǒ gāo bā límǐ.)",
      ],
      commonError: "Leaving `很` inside `比` sentences because standalone adjectives usually take `很` (`他很高`).",
    },
    {
      id: "exam-4-q19",
      kind: "mcq",
      topicId: "chinese-festivals",
      guideRef: "mid-autumn-festival",
      difficulty: "challenge",
      question:
        "Read the Singapore festival diary entry:\n\n**「去年农历八月十五，新加坡滨海湾花园挂满了五颜六色的花灯。我和父母一边散步一边赏月，还吃了莲蓉月饼，感觉非常温馨。」**\n\nWhich festival is described, and what did the family do simultaneously?",
      options: [
        "Mid-Autumn Festival — strolling and admiring the moon at the same time.",
        "Lantern Festival — guessing lantern riddles and eating sweet rice balls.",
        "Spring Festival — watching lion dances and pasting red doorway couplets.",
        "Dragon Boat Festival — rowing dragon boats and wrapping bamboo dumplings.",
      ],
      answerIndex: 0,
      hints: [
        "Check the lunar date `农历八月十五` (15th of the 8th lunar month) and `月饼` (mooncake).",
        "Decode `一边散步一边赏月` (strolling while admiring the moon).",
      ],
      explanation:
        "`农历八月十五`, `赏月`, and `莲蓉月饼` (lotus-paste mooncakes) all belong to the Mid-Autumn Festival (`中秋节`). `一边散步一边赏月` means strolling and admiring the moon simultaneously.",
    },
    {
      id: "exam-4-q20",
      kind: "short",
      topicId: "neighbourhood",
      guideRef: "comparing-neighbourhoods",
      difficulty: "challenge",
      question:
        "Complete the negative comparison meaning *'The suburbs are not as convenient as the city centre'*:\n\n**「郊区___市中心方便。」**\n\nType the two-character Mandarin comparison word (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["没有", "méiyǒu"],
        display: "没有 (méiyǒu)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["不比", "bùbǐ", "bù bǐ"] },
          feedback: "`不比` means 'no more convenient than' (could be equal); 'not as convenient as' uses `A 没有 B + adj`.",
        },
        {
          spec: { type: "text", accept: ["不是", "búshì", "bùshì"] },
          feedback: "Never use `不是` to form an adjective comparison — use `没有` (méiyǒu).",
        },
      ],
      hints: [
        "Recall the standard negative comparison formula: `A + ___ + B + (+ 那么) + Adjective`.",
        "2nd tone + 3rd tone: `méiyǒu`.",
      ],
      solution: [
        "'A is not as [adj] as B' uses `A 没有 B (+ 那么) + Adjective`.",
        "Complete sentence: `郊区没有市中心方便。` (Jiāoqū méiyǒu shìzhōngxīn fāngbiàn.)",
      ],
      commonError: "Writing `郊区比市中心不方便` instead of `郊区没有市中心方便`.",
    },
    {
      id: "exam-4-q21",
      kind: "short",
      topicId: "igcse-bridge-grammar",
      guideRef: "igcse-routine-hobbies",
      difficulty: "challenge",
      question:
        "Complete this IGCSE hobby sentence meaning *'I normally swim often, and only **occasionally** go to the cinema at weekends'*:\n\n**「我平时经常游泳，只是周末___去电影院看电影。」**\n\nType the two-character Mandarin frequency adverb (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["偶尔", "ǒu'ěr", "ǒuěr"],
        display: "偶尔 (ǒu'ěr)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["经常", "jīngcháng"] },
          feedback: "`经常` means 'often', which contradicts `只是` ('only') here.",
        },
        {
          spec: { type: "text", accept: ["从来不", "从不", "cónglái bù", "cóngbù"] },
          feedback: "`从来不` means 'never', not 'occasionally'.",
        },
      ],
      hints: [
        "Sits between `经常` (often) and `从来不` (never) on the frequency scale.",
        "Both syllables have the 3rd tone in citation form: `ǒu'ěr`.",
      ],
      solution: [
        "Mandarin frequency scale for IGCSE: `总是` (always) → `经常 / 常常` (often) → `有时候` (sometimes) → `偶尔` (occasionally) → `从来不` (never).",
        "Complete sentence: `只是周末偶尔去电影院看电影。`",
      ],
      commonError: "Writing `有时` / `经常` when specifically asked for 'occasionally' (`偶尔` ǒu'ěr).",
    },
    {
      id: "exam-4-q22",
      kind: "written",
      topicId: "house-furniture",
      guideRef: "position-words-you-zai",
      difficulty: "core",
      marks: 3,
      question:
        "Write **3 sentences in Simplified Chinese** (with tone-marked Pinyin) describing a family home using all three notes:\n\n1. State that the family lives in a **two-storey detached villa** with a **garden** downstairs.\n2. Describe what exists inside the **bedroom** (a bed, a wardrobe, and a bookshelf) using the Mandarin existence structure.\n3. State the exact **location of the computer** (on top of the desk) using the Mandarin location structure.",
      modelAnswer:
        "我家住在郊区的一栋两层别墅里，楼下有一个漂亮的花园。我的卧室里有一张大床、一个衣柜和一个书架。我的电脑在书桌上面。\n\n(Wǒ jiā zhù zài jiāoqū de yí dòng liǎng céng biéshù lǐ, lóuxià yǒu yí gè piàoliang de huāyuán. Wǒ de wòshì lǐ yǒu yì zhāng dà chuáng, yí gè yīguì hé yí gè shūjià. Wǒ de diànnǎo zài shūzhuō shàngmian.)",
      markScheme: [
        {
          point: "Mentions a two-storey villa (`两层别墅`) and/or a downstairs garden (`楼下` + `花园`).",
          keywords: ["别墅", "biéshù", "两层", "花园", "huāyuán"],
        },
        {
          point: "Uses the existence pattern (`卧室里有`) with bedroom furniture (`衣柜` / `书架` / `床`).",
          keywords: ["卧室里", "wòshì lǐ", "衣柜", "yīguì", "书架", "shūjià"],
        },
        {
          point: "Uses the location pattern (`电脑在书桌上面` / `书桌上`).",
          keywords: ["电脑在", "diànnǎo zài", "书桌上面", "shūzhuō shàngmian", "书桌上"],
        },
      ],
      hints: [
        "Villa = `别墅` (biéshù); two storeys = `两层` (liǎng céng); garden = `花园` (huāyuán).",
        "Existence: `Place + 有 + Object` (`我的卧室里有一张床、一个衣柜和一个书架`).",
        "Location: `Object + 在 + Place` (`电脑在书桌上面`).",
      ],
      commonError: "Swapping `有` and `在` (`电脑有书桌上面` or `卧室里在一张床`).",
    },
    {
      id: "exam-4-q23",
      kind: "written",
      topicId: "pets",
      guideRef: "reasons-for-against-pets",
      difficulty: "core",
      marks: 3,
      question:
        "Write **3 sentences in Simplified Chinese** (with tone-marked Pinyin) giving your experience and views on keeping pets, covering all three notes:\n\n1. State that you **have kept an animal before** (e.g., a rabbit, tortoise, or goldfish) using the past-experience particle and exact measure word.\n2. Give **one practical reason** why some families cannot keep pets (e.g., flat too small, no time to care for it, or fur allergy).\n3. Say whether you **plan** to keep a pet in the future and explain **why**.",
      modelAnswer:
        "我小时候养过一只可爱的乌龟和两条金鱼。很多家庭不能养宠物，因为他们家里太小，没有时间照顾宠物，或者有人对猫毛过敏。将来我打算养一只小狗，因为小狗很聪明，能陪我一起玩儿。\n\n(Wǒ xiǎoshíhou yǎngguo yì zhī kě'ài de wūguī hé liǎng tiáo jīnyú. Hěn duō jiātíng bù néng yǎng chǒngwù, yīnwèi tāmen jiālǐ tài xiǎo, méiyǒu shíjiān zhàogù chǒngwù, huòzhě yǒu rén duì māomáo guòmǐn. Jiānglái wǒ dǎsuàn yǎng yì zhī xiǎogǒu, yīnwèi xiǎogǒu hěn cōngmíng, néng péi wǒ yìqǐ wánr.)",
      markScheme: [
        {
          point: "Uses experiential `养过` with a pet and accurate measure word (`一只乌龟` / `一只兔子` / `两条金鱼`).",
          keywords: ["养过", "yǎngguo", "yǎngguò", "乌龟", "兔子", "金鱼"],
        },
        {
          point: "Gives a concrete reason families cannot keep pets (`家里太小`, `没时间照顾`, or `过敏`).",
          keywords: ["过敏", "guòmǐn", "照顾", "zhàogù", "家里太小", "没时间"],
        },
        {
          point: "Expresses a future plan (`打算` / `将来想`) backed by a reason (`因为`).",
          keywords: ["打算", "dǎsuàn", "将来想", "jiānglái xiǎng", "因为", "yīnwèi"],
        },
      ],
      hints: [
        "Past experience: `我以前养过一只乌龟 / 一只兔子 / 两条金鱼。`",
        "Reasons against: `家里太小` (flat too small), `没有时间照顾` (no time to care), `对猫毛过敏` (allergic to cat fur).",
        "Future + reason: `将来我打算养…, 因为…`",
      ],
      commonError: "Writing `养了` instead of `养过` for general past life experience, or using `个` for animals.",
    },
    {
      id: "exam-4-q24",
      kind: "written",
      topicId: "relatives-family",
      guideRef: "family-celebrations-writing",
      difficulty: "challenge",
      marks: 4,
      question:
        "Write a **4-sentence Mandarin paragraph** (Simplified Hanzi + tone-marked Pinyin) describing a multi-generational **family festival celebration**, covering all four notes:\n\n1. Mention visiting your **maternal grandparents** during **Lunar New Year** or **Mid-Autumn**.\n2. Introduce **one cousin** with an accurate kinship title and describe one detail of their **appearance or character**.\n3. Mention **two festive traditions** your family enjoyed together.\n4. Conclude with a reflection on **family reunion** and close relationships.",
      modelAnswer:
        "每年中秋节，我们全家都会去新加坡东部的外公外婆家看望他们。我表姐也会来，她留着长长的直发，性格又友好又幽默。晚上我们全家人一起吃晚饭、吃月饼、提灯笼和赏月。我们的关系很好，我觉得全家团圆是最幸福的事。\n\n(Měinián Zhōngqiūjié, wǒmen quánjiā dōu huì qù Xīnjiāpō dōngbù de wàigōng wàipó jiā kànwàng tāmen. Wǒ biǎojiě yě huì lái, tā liúzhe chángcháng de zhífà, xìnggé yòu yǒuhǎo yòu yōumò. Wǎnshang wǒmen quánjiārén yìqǐ chī wǎnfàn, chī yuèbǐng, tí dēnglóng hé shǎngyuè. Wǒmen de guānxi hěn hǎo, wǒ juéde quánjiā tuányuán shì zuì xìngfú de shì.)",
      markScheme: [
        {
          point: "Names maternal grandparents (`外公` / `外婆` / `姥爷` / `姥姥`) and festival visit (`看望`).",
          keywords: ["外公", "外婆", "姥爷", "姥姥", "wàipó", "wàigōng"],
        },
        {
          point: "Uses an accurate cousin title (`表哥/表姐/表弟/表妹` or `堂哥/堂姐/堂弟/堂妹`) with a description.",
          keywords: ["表哥", "表姐", "表弟", "表妹", "堂哥", "堂姐", "堂弟", "堂妹"],
        },
        {
          point: "Includes two authentic festival traditions (`吃月饼`, `赏月`, `提灯笼`, `年夜饭`, `红包`, or `饺子`).",
          keywords: ["月饼", "赏月", "灯笼", "年夜饭", "红包", "饺子", "花灯"],
        },
        {
          point: "Reflects on family reunion (`团圆`) and/or strong family relationships (`关系很好`).",
          keywords: ["团圆", "tuányuán", "关系很好", "guānxi hěn hǎo"],
        },
      ],
      hints: [
        "Maternal grandparents: `外公外婆` (wàigōng wàipó) or `姥爷姥姥` (lǎoye lǎolao).",
        "Mother's side cousins use `表` (`表哥`, `表姐`, `表弟`, `表妹`).",
        "Finish strongly with `关系很好` (good relationship) and `全家团圆` (whole-family reunion).",
      ],
      commonError: "Using `爷爷奶奶` for maternal grandparents or calling a maternal cousin `堂姐` instead of `表姐`.",
    },
    {
      id: "exam-4-q25",
      kind: "written",
      topicId: "igcse-bridge-grammar",
      guideRef: "igcse-self-intro-family-pets",
      difficulty: "challenge",
      marks: 4,
      question:
        "**IGCSE 0547 End-of-Year Capstone Writing!** Write a cohesive **4–5 sentence self-introduction in Simplified Chinese** (with tone-marked Pinyin) for a partner school in Shanghai, hitting ALL four bullets across past, present, and future:\n\n1. **Identity & Neighbourhood**: Give your age, state that you live in Singapore, and describe why your local area is convenient or quiet.\n2. **School & Pastime**: Name your favourite subject with a comparison, plus one hobby stating frequency or duration.\n3. **Past Cultural Highlight**: Describe one festival celebration or trip you experienced last year or before.\n4. **Future Goal**: State what you plan to do next year using a high-band paired connective (**not only ... moreover ...** or **if ... then ...**).",
      modelAnswer:
        "大家好！我今年十四岁，住在新加坡一个既安静又方便的社区。在学校我最喜欢科学，我觉得科学比历史有趣；放学后我经常弹钢琴，每天弹一个小时。去年春节，我和家人去牛车水看了舞狮和花灯，也去过北京旅游。明年我打算更认真地学习中文，如果我的中文进步了，我就去上海看望你们！\n\n(Dàjiā hǎo! Wǒ jīnnián shísì suì, zhù zài Xīnjiāpō yí gè jì ānjìng yòu fāngbiàn de shèqū. Zài xuéxiào wǒ zuì xǐhuan kēxué, wǒ juéde kēxué bǐ lìshǐ yǒuqù; fàngxué hòu wǒ jīngcháng tán gāngqín, měitiān tán yí gè xiǎoshí. Qùnián Chūnjié, wǒ hé jiārén qù Niúchēshuǐ kànle wǔshī hé huādēng, yě qùguo Běijīng lǚyóu. Míngnián wǒ dǎsuàn gèng rènzhēn de xuéxí Zhōngwén, rúguǒ wǒ de Zhōngwén jìnbùle, wǒ jiù qù Shànghǎi kànwàng nǐmen!)",
      markScheme: [
        {
          point: "Introduces age, living in Singapore (`住在新加坡`), and neighbourhood quality (`方便` / `安静`).",
          keywords: ["住在新加坡", "新加坡", "xīnjiāpō", "方便", "fāngbiàn", "安静"],
        },
        {
          point: "States favourite subject (`最喜欢`) with a comparison and a hobby with frequency/duration (`经常` / `小时`).",
          keywords: ["最喜欢", "zuì xǐhuan", "经常", "jīngcháng", "小时", "xiǎoshí"],
        },
        {
          point: "Narrates a past festival/trip using past time (`去年`) and `了` or `过` (`看了` / `去过` / `吃了`).",
          keywords: ["去年", "qùnián", "去过", "看过", "看了", "吃了"],
        },
        {
          point: "States a next-year plan (`明年` / `打算`) with a high-band paired connective (`不但…而且…` or `如果…就…`).",
          keywords: ["打算", "dǎsuàn", "明年", "míngnián", "如果", "不但", "而且"],
        },
      ],
      hints: [
        "Hit all three time frames cleanly: past (`去年…看了 / 去过`), present (`我住在… / 经常…`), future (`明年我打算…`).",
        "Use STPVO order: `去年春节，我和家人在牛车水看了舞狮。`",
        "Boost your IGCSE language band with `不但…而且…` or `如果…就…` — and double-check that every character is Simplified Chinese!",
      ],
      commonError: "Writing only in the present tense and missing the past (`了`/`过`) and future (`打算`) time frames required for top IGCSE bands.",
    },
  ],
};
