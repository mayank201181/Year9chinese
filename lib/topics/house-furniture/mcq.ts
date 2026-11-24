import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  {
    id: "house-furniture-m1",
    title: "House, Rooms & Furniture — MCQ Paper 1 (Homes, Rooms & Classifiers)",
    questions: [
      {
        id: "house-furniture-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "house-types-rooms",
        question: "What does **公寓 (gōngyù)** mean in English?",
        options: [
          "apartment / condo",
          "detached house / villa",
          "swimming pool",
          "traditional courtyard",
        ],
        answerIndex: 0,
        hints: [
          "This is the most common type of high-rise residence in Singapore.",
          "Contrast it with 别墅 (biéshù), which means a detached house or villa.",
        ],
        explanation:
          "**公寓 (gōngyù)** means apartment / condo (e.g. 我家住在新加坡的一套公寓里). A detached house or villa is **别墅 (biéshù)**, not 公寓.",
      },
      {
        id: "house-furniture-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "house-types-rooms",
        question: "Which room is **书房 (shūfáng)**?",
        options: [
          "the kitchen",
          "the study room",
          "the living room",
          "the dining room",
        ],
        answerIndex: 1,
        hints: [
          "Break the compound into two roots: 书 (shū = book) + 房 (fáng = room).",
          "Kitchen is 厨房 (chúfáng); living room is 客厅 (kètīng).",
        ],
        explanation:
          "**书房 (shūfáng)** literally means 'book room' — the study room. Kitchen is **厨房 (chúfáng)** and living room is **客厅 (kètīng)**.",
      },
      {
        id: "house-furniture-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "house-types-rooms",
        question: "Choose the correct sentence for 'My family lives in a detached house (villa).'",
        options: [
          "我家住别墅里。",
          "我家在别墅住。",
          "我家住在别墅里。",
          "我家是住别墅里。",
        ],
        answerIndex: 2,
        hints: [
          "Remember the fixed verb-preposition pair for 'to live in/at'.",
          "Never omit 在 after 住, and never add 是 before 住.",
        ],
        explanation:
          "**我家住在别墅里。** (Wǒ jiā zhù zài biéshù lǐ.) correctly uses **住在 (zhù zài)** before the place. Dropping 在 (*我家住别墅里*) or adding 是 (*我家是住…*) is ungrammatical.",
      },
      {
        id: "house-furniture-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "house-types-rooms",
        question: "Which measure word correctly counts bedrooms in **我家有三___卧室**?",
        options: [
          "张 (zhāng)",
          "把 (bǎ)",
          "层 (céng)",
          "间 (jiān)",
        ],
        answerIndex: 3,
        hints: [
          "Look for the dedicated classifier used for rooms inside a house.",
          "层 counts storeys/floors of a building, whereas 張 and 把 are for furniture.",
        ],
        explanation:
          "**间 (jiān)** is the specific classifier for rooms: **三间卧室** (sān jiān wòshì — three bedrooms). **层 (céng)** counts storeys/floors, not individual rooms.",
      },
      {
        id: "house-furniture-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "house-types-rooms",
        question: "Complete the sentence accurately: **我们的房子有___层，我的卧室在___楼。**",
        options: [
          "两；二",
          "二；两",
          "两；两",
          "二；二",
        ],
        answerIndex: 0,
        hints: [
          "Check which blank sits directly before a measure word counting quantity (storeys).",
          "Ordinal floor labels (like '2nd floor' on a lift button) use 二, whereas quantities before classifiers use 两.",
        ],
        explanation:
          "**两；二** gives **有两层** (two storeys — quantity before measure word 层 uses 两) and **在二楼** (on the 2nd floor — ordinal floor number uses 二).",
      },
      {
        id: "house-furniture-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "house-types-rooms",
        question: "What is the meaning of **楼上 (lóushàng)** and **楼下 (lóuxià)**?",
        options: [
          "front garden / back garden",
          "upstairs / downstairs",
          "big room / small room",
          "living room / dining room",
        ],
        answerIndex: 1,
        hints: [
          "Look at the two direction roots: 上 (shàng = up) and 下 (xià = down).",
          "楼 (lóu) refers to floors/storeys of a building.",
        ],
        explanation:
          "**楼上 (lóushàng)** means upstairs and **楼下 (lóuxià)** means downstairs (e.g. 楼上有三间卧室，楼下有客厅和厨房).",
      },
      {
        id: "house-furniture-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "house-types-rooms",
        question: "Which room name translates as **balcony**?",
        options: [
          "花园 (huāyuán)",
          "客厅 (kètīng)",
          "阳台 (yángtái)",
          "卫生间 (wèishēngjiān)",
        ],
        answerIndex: 2,
        hints: [
          "Literally 'sun platform' — 阳 (yáng = sun) + 台 (tái = platform).",
          "花园 means garden and 客厅 means living room.",
        ],
        explanation:
          "**阳台 (yángtái)** means balcony (literally 'sun platform'). **花园 (huāyuán)** is garden, **客厅 (kètīng)** is living room, and **卫生间 (wèishēngjiān)** is bathroom.",
      },
      {
        id: "house-furniture-m1-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "furniture-measure-words",
        question: "Which classifier matches **床 (chuáng — bed)** and **书桌 (shūzhuō — desk)**?",
        options: [
          "把 (bǎ)",
          "台 (tái)",
          "间 (jiān)",
          "张 (zhāng)",
        ],
        answerIndex: 3,
        hints: [
          "Think of the classifier for flat horizontal surfaces.",
          "把 is for chairs, 台 is for electrical appliances, and 间 is for rooms.",
        ],
        explanation:
          "**张 (zhāng)** is used for furniture with a flat top surface: **一张床** (yì zhāng chuáng) and **一张书桌** (yì zhāng shūzhuō).",
      },
      {
        id: "house-furniture-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "furniture-measure-words",
        question: "Choose the correct Mandarin phrase for **two chairs**.",
        options: [
          "两把椅子 (liǎng bǎ yǐzi)",
          "二把椅子 (èr bǎ yǐzi)",
          "两张椅子 (liǎng zhāng yǐzi)",
          "两台椅子 (liǎng tái yǐzi)",
        ],
        answerIndex: 0,
        hints: [
          "First check the classifier for chairs (gripped backrest).",
          "Then apply the 二 vs 两 rule before a measure word.",
        ],
        explanation:
          "**两把椅子 (liǎng bǎ yǐzi)** uses both **两** before a classifier and **把 (bǎ)** for chairs. *二把椅子* violates the 两 rule, and 张/台 do not match chairs.",
      },
      {
        id: "house-furniture-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "furniture-measure-words",
        question: "Which group of items ALL take the measure word **台 (tái)**?",
        options: [
          "床、书桌、沙发",
          "电脑、电视、空调",
          "衣柜、书架、桌子",
          "椅子、台灯、镜子",
        ],
        answerIndex: 1,
        hints: [
          "台 (tái) is the classifier for electrical machines and appliances.",
          "Check which list contains only items you plug into electricity.",
        ],
        explanation:
          "**电脑、电视、空调** (diànnǎo, diànshì, kōngtiáo — computer, TV, air-conditioner) are all electrical appliances taking **台 (tái)**. 床/书桌 take 张 and 椅子 takes 把.",
      },
      {
        id: "house-furniture-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "furniture-measure-words",
        question: "What is the tone-marked Pinyin and meaning of **衣柜**?",
        options: [
          "shūjià — bookshelf",
          "táidēng — desk lamp",
          "yīguì — wardrobe",
          "shāfā — sofa",
        ],
        answerIndex: 2,
        hints: [
          "Look at the first character: 衣 (yī) as in 衣服 (clothes).",
          "柜 (guì) means cabinet or cupboard.",
        ],
        explanation:
          "**衣柜 (yīguì)** literally means 'clothes cabinet' — a wardrobe (一个衣柜). Bookshelf is **书架 (shūjià)** and desk lamp is **台灯 (táidēng)**.",
      },
      {
        id: "house-furniture-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "furniture-measure-words",
        question: "Which sentence uses **又…又… (yòu… yòu…)** correctly?",
        options: [
          "我的卧室又小又舒服。",
          "我的客厅又贵又明亮。",
          "这间厨房又干净又乱。",
          "我的卧室又大又明亮。",
        ],
        answerIndex: 3,
        hints: [
          "又…又… must link two adjectives with the SAME positive or negative tone.",
          "Eliminate any option that mixes a positive trait with a negative or contradictory trait.",
        ],
        explanation:
          "**我的卧室又大又明亮。** (Wǒ de wòshì yòu dà yòu míngliàng — My bedroom is both big and bright) pairs two positive qualities. Mixing 小+舒服 or 干净+乱 breaks the 又…又… rule.",
      },
      {
        id: "house-furniture-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "furniture-measure-words",
        question: "What is the precise classifier for **台灯 (táidēng — desk lamp)**?",
        options: [
          "盏 (zhǎn)",
          "栋 (dòng)",
          "间 (jiān)",
          "层 (céng)",
        ],
        answerIndex: 0,
        hints: [
          "栋, 间, and 层 all count buildings, rooms, or storeys.",
          "Think of the specialised classifier used for lamps and lights.",
        ],
        explanation:
          "**盏 (zhǎn)** is the precise classifier for lamps: **一盏台灯** (yì zhǎn táidēng). **栋** counts buildings, **间** counts rooms, and **层** counts storeys.",
      },
      {
        id: "house-furniture-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "house-types-rooms",
        question: "Which sentence uses Chinese listing punctuation and **和 (hé)** accurately?",
        options: [
          "楼下有客厅和厨房和餐厅。",
          "楼下有客厅、厨房和餐厅。",
          "楼下有客厅，厨房，餐厅。",
          "楼下和客厅、厨房有餐厅。",
        ],
        answerIndex: 1,
        hints: [
          "Between listed nouns in Chinese, use the enumeration comma (顿号 、).",
          "Place 和 (hé) ONLY before the final noun in the list.",
        ],
        explanation:
          "**楼下有客厅、厨房和餐厅。** (Lóuxià yǒu kètīng, chúfáng hé cāntīng.) uses **、** between the first two nouns and **和** before the last item only.",
      },
      {
        id: "house-furniture-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "furniture-measure-words",
        question: "Read: **我的书房虽然不大，但是有一张白色的大书桌和一个很大的书架。** Which statement is true?",
        options: [
          "The study is large and empty.",
          "The desk is black and small.",
          "The study is not big, yet has a large white desk and big bookshelf.",
          "There are two white desks and two bookshelves in the bedroom.",
        ],
        answerIndex: 2,
        hints: [
          "Break the sentence at 虽然…，但是… ('although…, still/but…').",
          "Check the room name (书房), colour (白色), and quantities (一张, 一个).",
        ],
        explanation:
          "**书房 (shūfáng)** is the study, **虽然不大** means 'although not big', and it contains **一张白色的大书桌** (a large white desk) and **一个很大的书架** (a very big bookshelf).",
      },
    ],
  },
  {
    id: "house-furniture-m2",
    title: "House, Rooms & Furniture — MCQ Paper 2 (Position Words & 有 vs 在)",
    questions: [
      {
        id: "house-furniture-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "position-words-you-zai",
        question: "What does **旁边 (pángbiān)** mean?",
        options: [
          "behind",
          "inside",
          "underneath",
          "next to / beside",
        ],
        answerIndex: 3,
        hints: [
          "Compare it with 后面 (behind), 里面 (inside), and 下面 (under).",
          "Example: 书桌在窗户旁边。",
        ],
        explanation:
          "**旁边 (pángbiān)** means next to / beside (e.g. 窗户旁边 = next to the window). Behind is **后面 (hòumiàn)** and inside is **里面 (lǐmiàn)**.",
      },
      {
        id: "house-furniture-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "position-words-you-zai",
        question: "How do you say **'on top of the desk'** in Mandarin?",
        options: [
          "书桌上面 (shūzhuō shàngmiàn)",
          "上面书桌 (shàngmiàn shūzhuō)",
          "书桌下面 (shūzhuō xiàmiàn)",
          "下面书桌 (xiàmiàn shūzhuō)",
        ],
        answerIndex: 0,
        hints: [
          "In Mandarin, position words ALWAYS go AFTER the reference noun.",
          "上面 means on top of; 下面 means under.",
        ],
        explanation:
          "**书桌上面 (shūzhuō shàngmiàn)** places the position word **上面** after the reference noun **书桌**. Putting 上面 before 书桌 is English word order and ungrammatical.",
      },
      {
        id: "house-furniture-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "position-words-you-zai",
        question: "Choose the grammatically correct Mandarin translation of **'There is a computer on the desk.'**",
        options: [
          "在书桌上面有一台电脑。",
          "书桌上面有一台电脑。",
          "有一台电脑在书桌上面。",
          "上面书桌有一台电脑。",
        ],
        answerIndex: 1,
        hints: [
          "Use the PYO existence template: Place + 有 + (Number + MW) + Object.",
          "Never add 在 at the start of a 有 existence sentence!",
        ],
        explanation:
          "**书桌上面有一台电脑。** (Shūzhuō shàngmiàn yǒu yì tái diànnǎo.) follows **`Place + 有 + Object`**. Adding **在** at the beginning (*在书桌上面有…*) is a classic learner error.",
      },
      {
        id: "house-furniture-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "position-words-you-zai",
        question: "Choose the grammatically correct Mandarin translation of **'My computer is on the desk.'**",
        options: [
          "我的电脑是在书桌上面。",
          "书桌上面在我的电脑。",
          "我的电脑在书桌上面。",
          "我的电脑有书桌上面。",
        ],
        answerIndex: 2,
        hints: [
          "This locates a specific/known object → use OZP: Object + 在 + Place.",
          "Remember: 在 already means 'is located at', so NEVER put 是 before 在!",
        ],
        explanation:
          "**我的电脑在书桌上面。** (Wǒ de diànnǎo zài shūzhuō shàngmiàn.) follows **`Object + 在 + Place`**. Never add **是** before **在**, and never swap Object and Place around 在.",
      },
      {
        id: "house-furniture-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "position-words-you-zai",
        question: "Which sentence correctly expresses **'between the bed and the wardrobe'**?",
        options: [
          "中间床和衣柜",
          "床中间和衣柜",
          "床和中间衣柜",
          "床和衣柜中间",
        ],
        answerIndex: 3,
        hints: [
          "In Mandarin, 中间 (zhōngjiān) acts just like any other position word.",
          "Place 中间 AFTER both reference nouns joined by 和: A 和 B 中间.",
        ],
        explanation:
          "**床和衣柜中间** (chuáng hé yīguì zhōngjiān) follows **`A 和 B 中间`** ('in the middle of A and B'). Putting 中间 before or between the nouns is wrong.",
      },
      {
        id: "house-furniture-m2-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "position-words-you-zai",
        question: "What is the opposite of **前面 (qiánmiàn — in front of)**?",
        options: [
          "后面 (hòumiàn)",
          "外面 (wàimiàn)",
          "左边 (zuǒbiān)",
          "下面 (xiàmiàn)",
        ],
        answerIndex: 0,
        hints: [
          "前 means front; look for the character meaning 'back / behind'.",
          "外面 is opposite to 里面; 下面 is opposite to 上面.",
        ],
        explanation:
          "**后面 (hòumiàn — behind)** is the direct opposite of **前面 (qiánmiàn — in front of)**. Outside is **外面 (wàimiàn)** and below is **下面 (xiàmiàn)**.",
      },
      {
        id: "house-furniture-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "position-words-you-zai",
        question: "Which verb correctly completes **书架___床的左边** ('The bookshelf is to the left of the bed')?",
        options: [
          "有 (yǒu)",
          "在 (zài)",
          "是 (shì)",
          "住 (zhù)",
        ],
        answerIndex: 1,
        hints: [
          "Look at what comes FIRST in the sentence: the object (书架), not the location.",
          "Object + ___ + Place requires the location verb.",
        ],
        explanation:
          "**在 (zài)** completes **`Object + 在 + Place`**: **书架在床的左边** (Shūjià zài chuáng de zuǒbiān). **有** would require the Place first (床的左边有一个书架).",
      },
      {
        id: "house-furniture-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "position-words-you-zai",
        question: "Which verb correctly completes **衣柜里面___很多校服** ('Inside the wardrobe there are many school uniforms')?",
        options: [
          "在 (zài)",
          "是 (shì)",
          "有 (yǒu)",
          "住 (zhù)",
        ],
        answerIndex: 2,
        hints: [
          "Look at what comes FIRST: a Place (衣柜里面), followed by an indefinite quantity (很多校服).",
          "Place + ___ + Object uses the existence verb.",
        ],
        explanation:
          "**有 (yǒu)** completes **`Place + 有 + Object`**: **衣柜里面有很多校服** (Yīguì lǐmiàn yǒu hěn duō xiàofú — Inside the wardrobe there are many school uniforms).",
      },
      {
        id: "house-furniture-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "position-words-you-zai",
        question: "Read: **书桌的左边是床，书桌的右边是书架。** Where is the desk (**书桌**)?",
        options: [
          "directly underneath the bed",
          "inside the wooden bookshelf",
          "outside the bedroom window",
          "between the bed and bookshelf",
        ],
        answerIndex: 3,
        hints: [
          "Sketch the left-to-right order: Bed — Desk — Bookshelf.",
          "床 is on the left (左边) of 书桌, and 书架 is on the right (右边) of 书桌.",
        ],
        explanation:
          "Since the bed (**床**) is to the left (**左边**) of the desk (**书桌**) and the bookshelf (**书架**) is to the right (**右边**), the desk is **between the bed and the bookshelf** (床和书架中间).",
      },
      {
        id: "house-furniture-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "position-words-you-zai",
        question: "How do you rewrite **床下面有一双运动鞋** as a **在** sentence?",
        options: [
          "运动鞋在床下面。",
          "床在运动鞋下面。",
          "运动鞋在下面床。",
          "在床下面运动鞋。",
        ],
        answerIndex: 0,
        hints: [
          "Keep the reference noun + position word intact: 床下面.",
          "Put the object (运动鞋) before 在, and the place (床下面) after 在.",
        ],
        explanation:
          "**运动鞋在床下面。** (Yùndòngxié zài chuáng xiàmiàn — The trainers are under the bed) moves **运动鞋** before **在** and keeps **床下面** after **在**. Writing *床在运动鞋下面* flips the meaning upside down!",
      },
      {
        id: "house-furniture-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "position-words-you-zai",
        question: "What does **窗户外面有一个漂亮的花园** mean?",
        options: [
          "Inside the window there is a blue curtain.",
          "Outside the window there is a pretty garden.",
          "Next to the garden there is a big window.",
          "Behind the sofa there is a clean balcony.",
        ],
        answerIndex: 1,
        hints: [
          "Decode each chunk: 窗户 (window) + 外面 (outside) + 有 (there is) + 漂亮的花园.",
          "Note that 外面 means outside, the opposite of 里面.",
        ],
        explanation:
          "**窗户外面 (chuānghu wàimiàn)** means 'outside the window', and **有一个漂亮的花园** means 'there is a pretty garden'.",
      },
      {
        id: "house-furniture-m2-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "position-words-you-zai",
        question: "Which sentence contains a grammar mistake?",
        options: [
          "沙发前面有一张小桌子。",
          "我的台灯在书桌上面。",
          "在我的卧室里有一张大床。",
          "床和衣柜中间有一把椅子。",
        ],
        answerIndex: 2,
        hints: [
          "Check all three 有 sentences and the one 在 sentence against the PYO / OZP templates.",
          "Remember the strict rule: never put 在 before the Place in a Place + 有 + Object sentence!",
        ],
        explanation:
          "**在我的卧室里有一张大床。** is incorrect because **在** must NOT precede the place in an existence (**有**) sentence. Write **我的卧室里有一张大床。** (Wǒ de wòshì lǐ yǒu yì zhāng dà chuáng.)",
      },
      {
        id: "house-furniture-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "position-words-you-zai",
        question: "Read: **电脑在台灯的右边。** Therefore, where is the desk lamp (**台灯**)?",
        options: [
          "台灯在电脑的右边。",
          "台灯在电脑的下面。",
          "台灯在电脑的后面。",
          "台灯在电脑的左边。",
        ],
        answerIndex: 3,
        hints: [
          "Draw the two items side by side: if the computer is to the right of the lamp, which side of the computer is the lamp on?",
          "The opposite of 右边 (right) is 左边 (left).",
        ],
        explanation:
          "If the computer (**电脑**) is to the right (**右边**) of the lamp (**台灯**), then **台灯在电脑的左边** (Táidēng zài diànnǎo de zuǒbiān — the lamp is to the left of the computer).",
      },
      {
        id: "house-furniture-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "position-words-you-zai",
        question: "What does **沙发对面有一台大电视** tell us about the TV?",
        options: [
          "It is opposite the sofa.",
          "It is underneath the sofa.",
          "It is inside the wardrobe.",
          "It is behind the armchair.",
        ],
        answerIndex: 0,
        hints: [
          "Look closely at the position word 对面 (duìmiàn).",
          "对面 means 'facing / opposite / across from'.",
        ],
        explanation:
          "**对面 (duìmiàn)** means opposite / facing across from: **沙发对面有一台大电视** (Shāfā duìmiàn yǒu yì tái dà diànshì — Opposite the sofa there is a big TV).",
      },
      {
        id: "house-furniture-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "position-words-you-zai",
        question: "A room plan says: **门在南边，床在窗户旁边，书桌在床和书架中间，椅子在书桌前面。** Which item is directly in front of the desk?",
        options: [
          "the bed (床)",
          "the chair (椅子)",
          "the bookshelf (书架)",
          "the window (窗户)",
        ],
        answerIndex: 1,
        hints: [
          "Scan the final clause: 椅子在书桌前面。",
          "Remember Object + 在 + Reference Noun + 前面 means the Object is in front of the Reference Noun.",
        ],
        explanation:
          "**椅子在书桌前面** (Yǐzi zài shūzhuō qiánmiàn) states directly that **the chair (椅子)** is in front of the desk (**书桌**).",
      },
    ],
  },
  {
    id: "house-furniture-m3",
    title: "House, Rooms & Furniture — MCQ Paper 3 (Comparisons, Opinions & Writing)",
    questions: [
      {
        id: "house-furniture-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ideal-home-writing",
        question: "Choose the grammatically correct sentence for **'My bedroom is bigger than my younger brother's.'**",
        options: [
          "我的卧室比弟弟的很大。",
          "我的卧室比弟弟的非常大。",
          "我的卧室比弟弟的大。",
          "我的卧室大比弟弟的。",
        ],
        answerIndex: 2,
        hints: [
          "Follow the 比 template: A + 比 + B + Adjective.",
          "NEVER place 很 or 非常 directly before the adjective in a 比 sentence!",
        ],
        explanation:
          "**我的卧室比弟弟的大。** (Wǒ de wòshì bǐ dìdi de dà.) follows **`A 比 B + Adj`** cleanly without **很** or **非常**, and omits the repeated noun after 弟弟的.",
      },
      {
        id: "house-furniture-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ideal-home-writing",
        question: "How do you say **'The living room is much brighter than the study'**?",
        options: [
          "客厅比书房很明亮。",
          "客厅比书房明亮一点儿。",
          "客厅比书房有点儿明亮。",
          "客厅比书房明亮得多。",
        ],
        answerIndex: 3,
        hints: [
          "To intensify a 比 comparison ('much more…'), place a degree complement AFTER the adjective.",
          "一点儿 means 'a little more', whereas 得多 means 'much more'.",
        ],
        explanation:
          "**客厅比书房明亮得多。** (Kètīng bǐ shūfáng míngliàng de duō.) places **得多** after **明亮** to mean 'much brighter'. **一点儿** only means 'a little brighter', and **很** is forbidden after 比.",
      },
      {
        id: "house-furniture-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ideal-home-writing",
        question: "What does **我的卧室没有客厅那么大** mean?",
        options: [
          "My bedroom is not as big as the living room.",
          "My bedroom has no living room inside it.",
          "My bedroom is bigger than the living room.",
          "The living room is smaller than my bedroom.",
        ],
        answerIndex: 0,
        hints: [
          "Look at the comparative structure A + 没有 + B + (那么) + Adjective.",
          "Here 没有 does NOT mean 'does not have'; it negates a comparison ('not as … as').",
        ],
        explanation:
          "**A 没有 B (那么) + Adj** means 'A is not as [adj] as B': **我的卧室没有客厅那么大** (Wǒ de wòshì méiyǒu kètīng nàme dà — My bedroom is not as big as the living room).",
      },
      {
        id: "house-furniture-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ideal-home-writing",
        question: "Which sentence uses **有点儿 (yǒudiǎnr)** correctly?",
        options: [
          "厨房小有点儿。",
          "厨房有点儿小。",
          "厨房比客厅有点儿大。",
          "客厅有点儿非常宽敞。",
        ],
        answerIndex: 1,
        hints: [
          "有点儿 means 'a little bit' (usually with a mild complaint/undesired adjective) and goes BEFORE the adjective.",
          "After an adjective in comparisons, use 一点儿 (大一点儿), never 有点儿.",
        ],
        explanation:
          "**厨房有点儿小。** (Chúfáng yǒudiǎnr xiǎo — The kitchen is a bit small) places **有点儿** directly BEFORE the negative/limiting adjective **小**. It never goes after an adjective or inside a 比 comparison.",
      },
      {
        id: "house-furniture-m3-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "ideal-home-writing",
        question: "Which pair of connectives fits: **___我的房间很小，___非常干净舒服。**",
        options: [
          "因为……所以……",
          "不但……而且……",
          "虽然……但是……",
          "如果……就……",
        ],
        answerIndex: 2,
        hints: [
          "Notice the contrast: small (limiting) vs very clean and comfortable (positive).",
          "Which pair translates 'Although…, still/but…'?",
        ],
        explanation:
          "**虽然……但是……** (suīrán… dànshì… — although…, but…) connects two contrasting ideas: **虽然我的房间很小，但是非常干净舒服。**",
      },
      {
        id: "house-furniture-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ideal-home-writing",
        question: "How do you say **'a big villa with a garden'** in natural Mandarin word order?",
        options: [
          "一栋大别墅有花园",
          "一栋别墅大有花园的",
          "一栋花园有的大别墅",
          "一栋有花园的大别墅",
        ],
        answerIndex: 3,
        hints: [
          "In Mandarin, ALL noun modifiers (including 'that has a garden') go BEFORE the noun with 的.",
          "Keep 'has a garden' as 有花园 + 的 right before 大别墅.",
        ],
        explanation:
          "**一栋有花园的大别墅** (yí dòng yǒu huāyuán de dà biéshù) places the modifier **有花园的** BEFORE the head noun **大别墅**.",
      },
      {
        id: "house-furniture-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ideal-home-writing",
        question: "Read: **我最喜欢客厅，因为晚上可以跟家人一起看电视、聊天儿。** Why does the speaker love the living room most?",
        options: [
          "They can watch TV and chat with family there in the evening.",
          "It is the quietest room for doing maths homework alone.",
          "It has three beds and a big study desk next to the door.",
          "They enjoy cooking dinner there with their grandparents.",
        ],
        answerIndex: 0,
        hints: [
          "Decode the clause after 因为 (because): 跟家人一起看电视、聊天儿.",
          "看电视 = watch TV; 聊天儿 = chat.",
        ],
        explanation:
          "**跟家人一起看电视、聊天儿** (gēn jiārén yìqǐ kàn diànshì, liáotiānr) means watching TV and chatting with family together in the evening (**晚上**).",
      },
      {
        id: "house-furniture-m3-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "ideal-home-writing",
        question: "What does **收拾房间 (shōushi fángjiān)** mean?",
        options: [
          "to paint the room",
          "to tidy up the room",
          "to move to a new house",
          "to buy new furniture",
        ],
        answerIndex: 1,
        hints: [
          "Example: 我每个星期天都收拾我的卧室。",
          "Moving house is 搬家 (bānjiā).",
        ],
        explanation:
          "**收拾房间 (shōushi fángjiān)** means to tidy up the room. Moving house is **搬家 (bānjiā)** and buying furniture is **买家具 (mǎi jiājù)**.",
      },
      {
        id: "house-furniture-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ideal-home-writing",
        question: "Which sentence expresses a **future dream home** for an IGCSE writing task?",
        options: [
          "去年我们搬家到了一套新公寓。",
          "现在我家住在新加坡的八楼。",
          "将来我想住在一栋靠海的别墅里。",
          "昨天我在卧室里收拾了书桌。",
        ],
        answerIndex: 2,
        hints: [
          "Look for the future time marker 将来 (jiānglái — in the future) and 想 (want to).",
          "去年 (last year) and 昨天 (yesterday) are past; 现在 (now) is present.",
        ],
        explanation:
          "**将来我想住在一栋靠海的别墅里。** (Jiānglái wǒ xiǎng zhù zài yí dòng kào hǎi de biéshù lǐ — In the future I want to live in a seaside villa) clearly uses the future time marker **将来**.",
      },
      {
        id: "house-furniture-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ideal-home-writing",
        question: "What is the meaning of **宽敞 (kuānchang)** when describing a room?",
        options: [
          "messy and dark",
          "narrow and noisy",
          "traditional and old",
          "spacious and roomy",
        ],
        answerIndex: 3,
        hints: [
          "Look at the first character 宽 (kuān = wide).",
          "Often paired in 又宽敞又明亮 (both spacious and bright).",
        ],
        explanation:
          "**宽敞 (kuānchang)** means spacious / roomy (e.g. 客厅又宽敞又明亮 — The living room is both spacious and bright).",
      },
      {
        id: "house-furniture-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "ideal-home-writing",
        question: "Read: **姐姐的卧室比我的整齐得多，但是我的卧室比她的明亮一点儿。** Which comparison is accurate?",
        options: [
          "The sister's bedroom is much tidier, while the speaker's is slightly brighter.",
          "The speaker's bedroom is much tidier and much brighter than the sister's.",
          "Both bedrooms are equally tidy, and the sister's is much brighter.",
          "The sister's bedroom is slightly messier and darker than the speaker's.",
        ],
        answerIndex: 0,
        hints: [
          "Track who is A and who is B in BOTH 比 clauses: Clause 1 has 姐姐的比我的整齐得多; Clause 2 has 我的比她的明亮一点儿.",
          "整齐 = tidy; 明亮 = bright; 得多 = much more; 一点儿 = a little more.",
        ],
        explanation:
          "**姐姐的卧室比我的整齐得多** means the older sister's bedroom is **much tidier**, while **我的卧室比她的明亮一点儿** means the speaker's bedroom is **slightly brighter**.",
      },
      {
        id: "house-furniture-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "house-types-rooms",
        question: "Read: **我们一家四口住在十五楼的一套组屋里。家里没有花园，但是有一个很大的阳台，妈妈在阳台上种了很多花。** Which statement is FALSE?",
        options: [
          "There are four people in the family.",
          "Their home has a big garden downstairs.",
          "They live on the 15th floor in an HDB flat.",
          "Mum grows many flowers on the balcony.",
        ],
        answerIndex: 1,
        hints: [
          "Scan carefully for the negative word 没有 (does not have).",
          "Distinguish 花园 (garden) from 阳台 (balcony).",
        ],
        explanation:
          "The passage explicitly says **家里没有花园** (Jiālǐ méiyǒu huāyuán — There is no garden at home), so claiming they have a big garden is false; instead Mum grows flowers on the **阳台 (balcony)**.",
      },
      {
        id: "house-furniture-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "ideal-home-writing",
        question: "Which sentence best expresses **'My room is messy, so Mum tells me to tidy it up'**?",
        options: [
          "我的房间很整齐，所以妈妈叫我收拾。",
          "我的房间虽然很乱，但是妈妈叫我收拾。",
          "因为我的房间很乱，所以妈妈叫我收拾。",
          "我的房间比妈妈的乱，但是我喜欢收拾。",
        ],
        answerIndex: 2,
        hints: [
          "Look for cause and effect: 因为…，所以… ('because…, therefore…').",
          "乱 (luàn) means messy; 整齐 (zhěngqí) means tidy.",
        ],
        explanation:
          "**因为我的房间很乱，所以妈妈叫我收拾。** (Yīnwèi wǒ de fángjiān hěn luàn, suǒyǐ māma jiào wǒ shōushi.) links cause (**乱** messy) and effect (**收拾** tidy up) with **因为…，所以…**.",
      },
      {
        id: "house-furniture-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "furniture-measure-words",
        question: "Which sentence puts **EVERY** classifier and spatial structure together with ZERO errors?",
        options: [
          "在书房里有一把书桌、两张椅子和一台书架。",
          "书房里面有二张书桌、两把椅子和一台电脑。",
          "书房里面有一张书桌、两把椅子，电脑是在书桌上面。",
          "书房里面有一张书桌、两把椅子，电脑在书桌上面。",
        ],
        answerIndex: 3,
        hints: [
          "Check four traps: 在 before 有, 二 before a classifier, 是 before 在, and matching 张/把/台/个 to furniture.",
          "Only one sentence clears all four checks cleanly.",
        ],
        explanation:
          "**书房里面有一张书桌、两把椅子，电脑在书桌上面。** gets every detail right: **书房里面有** (no leading 在), **一张书桌**, **两把椅子** (两 + 把), and **电脑在书桌上面** (no 是 before 在).",
      },
      {
        id: "house-furniture-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "ideal-home-writing",
        question: "In an IGCSE writing task asking about your **current bedroom AND your dream bedroom**, which closing sentence adds the strongest Band 1 upgrade?",
        options: [
          "我今年十四岁，我们一家四口人现在住在一个公寓里。",
          "虽然现在的卧室没有客厅大，但是将来我希望住在一栋有大花园的别墅里。",
          "我的卧室里面有一张大床，床很大也很软，我非常喜欢睡觉。",
          "书桌在卧室里，椅子在卧室里，电脑也在卧室里，都很大。",
        ],
        answerIndex: 1,
        hints: [
          "Look for paired connectives (虽然…但是…), negative comparison (没有…大), future time frame (将来我希望…), and a pre-noun modifier (有大花园的别墅).",
          "Avoid repetitive short clauses that reuse the same verb.",
        ],
        explanation:
          "**虽然现在的卧室没有客厅大，但是将来我希望住在一栋有大花园的别墅里。** combines **虽然…但是…**, a **没有** comparison, a **future time frame (将来)**, and **有大花园的别墅** in one cohesive sentence.",
      },
    ],
  },
];
