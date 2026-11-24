import type { ExamPaper } from "../types.ts";

const BEDROOM_FLOORPLAN_SVG =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bedroom floorplan showing wardrobe, window, desk with computer and lamp, bed, chair, and bookshelf">' +
  '<rect x="10" y="10" width="540" height="230" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>' +
  '<text x="280" y="34" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">卧室平面图 (Wòshì Píngmiàntú — Bedroom Floorplan)</text>' +
  '<rect x="44" y="48" width="472" height="176" rx="8" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/>' +
  '<rect x="200" y="42" width="160" height="12" rx="4" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="280" y="69" text-anchor="middle" font-size="11" font-weight="600" fill="var(--brand)">窗户 (chuānghu)</text>' +
  '<rect x="60" y="64" width="102" height="44" rx="6" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="111" y="90" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">衣柜 (yīguì)</text>' +
  '<rect x="60" y="126" width="128" height="82" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.8"/>' +
  '<rect x="68" y="136" width="28" height="62" rx="5" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.2"/>' +
  '<text x="140" y="171" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">床 (chuáng)</text>' +
  '<rect x="330" y="76" width="168" height="58" rx="6" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.8"/>' +
  '<text x="414" y="96" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">书桌 (shūzhuō)</text>' +
  '<rect x="342" y="102" width="76" height="24" rx="4" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/>' +
  '<text x="380" y="118" text-anchor="middle" font-size="10.5" fill="var(--ink)">电脑</text>' +
  '<rect x="426" y="102" width="60" height="24" rx="4" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2"/>' +
  '<text x="456" y="118" text-anchor="middle" font-size="10.5" fill="var(--ink)">台灯</text>' +
  '<rect x="384" y="144" width="60" height="28" rx="5" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.4"/>' +
  '<text x="414" y="162" text-anchor="middle" font-size="11" fill="var(--ink)">椅子</text>' +
  '<rect x="206" y="136" width="96" height="48" rx="6" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="254" y="164" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">书架 (shūjià)</text>' +
  '<rect x="242" y="218" width="76" height="12" rx="3" fill="var(--surface)" stroke="var(--good)" stroke-width="1.8"/>' +
  '<text x="280" y="212" text-anchor="middle" font-size="11" font-weight="600" fill="var(--good)">门 (mén)</text>' +
  '</svg>';

const STREET_MAP_SVG =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Neighbourhood street map from My Home along Zhongshan Road to the first intersection with Park, Library, Supermarket, and MRT Station">' +
  '<rect x="8" y="8" width="544" height="234" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>' +
  '<text x="20" y="30" font-size="13" font-weight="700" fill="var(--ink)">社区地图 (Shèqū Dìtú — Neighbourhood Map)</text>' +
  '<text x="532" y="30" text-anchor="end" font-size="11" font-weight="700" fill="var(--brand)">北 N ↑</text>' +
  '<rect x="24" y="128" width="512" height="32" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<rect x="274" y="40" width="34" height="190" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<rect x="275" y="129" width="32" height="30" fill="var(--surface-2)"/>' +
  '<text x="150" y="148" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink-2)">中山路</text>' +
  '<text x="291" y="148" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">路口1</text>' +
  '<rect x="34" y="172" width="82" height="44" rx="7" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>' +
  '<text x="75" y="191" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">我家</text>' +
  '<text x="75" y="207" text-anchor="middle" font-size="10" fill="var(--brand)">起点 Start →</text>' +
  '<rect x="34" y="62" width="102" height="46" rx="7" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="85" y="83" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">银行</text>' +
  '<text x="85" y="99" text-anchor="middle" font-size="10" fill="var(--ink-2)">yínháng</text>' +
  '<rect x="152" y="54" width="108" height="46" rx="7" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="206" y="75" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">公园</text>' +
  '<text x="206" y="91" text-anchor="middle" font-size="10" fill="var(--ink-2)">gōngyuán</text>' +
  '<rect x="142" y="172" width="118" height="44" rx="6" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="201" y="198" text-anchor="middle" font-size="12" fill="var(--ink)">邮局 (yóujú)</text>' +
  '<rect x="322" y="54" width="118" height="46" rx="7" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="381" y="75" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">图书馆</text>' +
  '<text x="381" y="91" text-anchor="middle" font-size="10" fill="var(--ink-2)">túshūguǎn</text>' +
  '<rect x="322" y="172" width="118" height="46" rx="7" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="381" y="193" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">超市</text>' +
  '<text x="381" y="209" text-anchor="middle" font-size="10" fill="var(--ink-2)">chāoshì</text>' +
  '<rect x="454" y="114" width="76" height="58" rx="7" fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="492" y="139" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">地铁站</text>' +
  '<text x="492" y="156" text-anchor="middle" font-size="10" fill="var(--ink-2)">dìtiězhàn</text>' +
  '</svg>';

const FAMILY_TREE_SVG =
  '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Extended family tree showing paternal grandparents Li Ming and Wang Fang, paternal uncle Li Qiang and daughter Li Xiaohong age 16, parents Li Wei and Zhang Min, maternal grandparents Zhang Jianguo and Chen Xiulan, maternal uncle Zhang Tao and son Zhang Xiaoyu age 12, and Me Li An age 14">' +
  '<rect x="8" y="8" width="544" height="234" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="2"/>' +
  '<text x="280" y="30" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">大家庭家谱 (Extended Family Tree)</text>' +
  '<rect x="46" y="44" width="190" height="34" rx="7" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="141" y="65" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--ink)">爷爷 (李明) &amp; 奶奶 (王芳)</text>' +
  '<rect x="324" y="44" width="196" height="34" rx="7" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="422" y="65" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--ink)">外公 (张建国) &amp; 外婆 (陈秀兰)</text>' +
  '<line x1="141" y1="78" x2="141" y2="96" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<line x1="88" y1="96" x2="210" y2="96" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<line x1="88" y1="96" x2="88" y2="110" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<line x1="210" y1="96" x2="210" y2="110" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<line x1="422" y1="78" x2="422" y2="96" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<line x1="350" y1="96" x2="472" y2="96" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<line x1="350" y1="96" x2="350" y2="110" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<line x1="472" y1="96" x2="472" y2="110" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<rect x="28" y="110" width="120" height="36" rx="7" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="88" y="132" text-anchor="middle" font-size="11.5" fill="var(--ink)">伯伯 (李强)</text>' +
  '<rect x="160" y="110" width="102" height="36" rx="7" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="211" y="132" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--ink)">爸爸 (李伟)</text>' +
  '<rect x="298" y="110" width="104" height="36" rx="7" fill="var(--surface)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="350" y="132" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--ink)">妈妈 (张敏)</text>' +
  '<rect x="414" y="110" width="118" height="36" rx="7" fill="var(--surface)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="473" y="132" text-anchor="middle" font-size="11.5" fill="var(--ink)">舅舅 (张涛)</text>' +
  '<line x1="262" y1="128" x2="298" y2="128" stroke="var(--ink)" stroke-width="1.8"/>' +
  '<line x1="280" y1="128" x2="280" y2="180" stroke="var(--ink)" stroke-width="1.8"/>' +
  '<line x1="88" y1="146" x2="88" y2="180" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<line x1="473" y1="146" x2="473" y2="180" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<rect x="22" y="180" width="132" height="44" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>' +
  '<text x="88" y="199" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">李小红 (16岁)</text>' +
  '<text x="88" y="216" text-anchor="middle" font-size="10.5" fill="var(--brand)">? (女 · female)</text>' +
  '<rect x="216" y="180" width="128" height="44" rx="8" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="2"/>' +
  '<text x="280" y="199" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">我: 李安 (14岁)</text>' +
  '<text x="280" y="216" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Year 9 student</text>' +
  '<rect x="406" y="180" width="134" height="44" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="473" y="199" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">张小宇 (12岁)</text>' +
  '<text x="473" y="216" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">男 · male</text>' +
  '</svg>';

export const paper: ExamPaper = {
  id: "exam-1",
  title: "Year 9 Chinese Term 1 Mock Paper (Home, Neighbourhood & Family)",
  calculator: false,
  minutes: 45,
  questions: [
    {
      id: "exam-1-q01",
      kind: "mcq",
      topicId: "house-furniture",
      guideRef: "house-types-rooms",
      difficulty: "warmup",
      question:
        "Read the short description:\n\n**「我住在市中心的一栋公寓里，我家在八楼，有客厅、厨房、卫生间和三间卧室。」**\n\nWhich statement matches this description?",
      options: [
        "They live in a two-storey villa with three bathrooms.",
        "They live in a suburban flat on the sixth floor.",
        "They live in a city-centre flat on the eighth floor with three bedrooms.",
        "They live in a downtown house with a garden and three studies.",
      ],
      answerIndex: 2,
      hints: [
        "Break down `市中心` (shìzhōngxīn), `公寓` (gōngyù), and `八楼` (bā lóu).",
        "`三间卧室` (sān jiān wòshì) tells you the number of bedrooms.",
      ],
      explanation:
        "`市中心` (shìzhōngxīn) means city centre, `公寓` (gōngyù) is an apartment/flat, `八楼` (bā lóu) is the eighth floor, and `三间卧室` (sān jiān wòshì) means three bedrooms. `别墅` (biéshù) would be a villa, and `书房` (shūfáng) would be a study.",
    },
    {
      id: "exam-1-q02",
      kind: "short",
      topicId: "house-furniture",
      guideRef: "furniture-measure-words",
      difficulty: "warmup",
      question:
        "Type the exact Mandarin measure word (Simplified Hanzi or tone-marked Pinyin) used for **a chair** in `一___椅子`.",
      answer: {
        type: "text",
        accept: ["把", "bǎ"],
        display: "把 (bǎ)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["张", "zhāng"] },
          feedback: "`张` (zhāng) is for flat surfaces like beds (`一张床`) and desks (`一张书桌`), not chairs.",
        },
        {
          spec: { type: "text", accept: ["个", "gè", "ge"] },
          feedback: "Avoid generic `个` here — chairs take a specific measure word for objects with a handle or back to grasp.",
        },
      ],
      hints: [
        "Chairs have a back you can grip, like umbrellas and keys.",
        "It is the 3rd-tone measure word paired with `椅子` (yǐzi).",
      ],
      solution: [
        "Flat furniture (`床`, `书桌`) takes `张` (zhāng), whereas objects with a back/handle like `椅子` (yǐzi) take `把` (bǎ).",
        "So 'one chair' is `一把椅子` (yì bǎ yǐzi).",
      ],
      commonError: "Using `张` (zhāng) for chairs because beds and tables take `张`.",
    },
    {
      id: "exam-1-q03",
      kind: "mcq",
      topicId: "neighbourhood",
      guideRef: "local-facilities",
      difficulty: "warmup",
      question:
        "Which neighbourhood facility would you visit if you want to **寄信和寄包裹** (jì xìn hé jì bāoguǒ — post a letter and parcel)?",
      options: [
        "邮局 (yóujú)",
        "银行 (yínháng)",
        "医院 (yīyuàn)",
        "餐厅 (cāntīng)",
      ],
      answerIndex: 0,
      hints: [
        "Think about the first character `邮` (yóu — mail/postal).",
        "`银行` handles money, `医院` treats patients, and `餐厅` serves meals.",
      ],
      explanation:
        "`邮局` (yóujú) means post office, where you send letters (`寄信`) and parcels (`寄包裹`). `银行` (yínháng) is a bank, `医院` (yīyuàn) is a hospital, and `餐厅` (cāntīng) is a restaurant.",
    },
    {
      id: "exam-1-q04",
      kind: "short",
      topicId: "relatives-family",
      guideRef: "paternal-maternal-grandparents",
      difficulty: "warmup",
      question:
        "In Mandarin, what do you call your **mother's brother** (maternal uncle)? Type Simplified Hanzi or tone-marked Pinyin.",
      answer: {
        type: "text",
        accept: ["舅舅", "jiùjiu", "jiùjiù"],
        display: "舅舅 (jiùjiu)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["叔叔", "shūshu", "shūshū"] },
          feedback: "`叔叔` (shūshu) is your father's younger brother (paternal side), not your mother's brother.",
        },
        {
          spec: { type: "text", accept: ["伯伯", "bóbo", "bóbó"] },
          feedback: "`伯伯` (bóbo) is your father's older brother (paternal side), not your mother's brother.",
        },
      ],
      hints: [
        "Chinese separates paternal uncles (`伯伯` / `叔叔`) from maternal uncles.",
        "The title starts with `j` and has a 4th tone on the first syllable.",
      ],
      solution: [
        "Father's older brother = `伯伯` (bóbo); father's younger brother = `叔叔` (shūshu).",
        "Mother's brother (older or younger) = `舅舅` (jiùjiu).",
      ],
      commonError: "Calling every uncle `叔叔` (shūshu), which only applies to your father's younger brother.",
    },
    {
      id: "exam-1-q05",
      kind: "mcq",
      topicId: "appearance-personality",
      guideRef: "wearing-clothes-glasses",
      difficulty: "warmup",
      question:
        "Choose the correct verb phrase to complete the sentence:\n\n**「我的中文老师___一副黑色的眼镜。」** (Wǒ de Zhōngwén lǎoshī ___ yí fù hēisè de yǎnjìng.)",
      options: [
        "穿着 (chuānzhe)",
        "长着 (zhǎngzhe)",
        "留着 (liúzhe)",
        "戴着 (dàizhe)",
      ],
      answerIndex: 3,
      hints: [
        "In Mandarin, clothes/shoes take one verb, while accessories like glasses, hats, and watches take another.",
        "`长着` is for born features and `留着` is for hairstyles.",
      ],
      explanation:
        "Glasses (`眼镜` yǎnjìng) are an accessory, so Mandarin requires `戴着` (dàizhe — wearing an accessory). `穿着` (chuānzhe) is strictly for clothes and shoes, `长着` (zhǎngzhe) is for born features, and `留着` (liúzhe) is for hairstyles.",
    },
    {
      id: "exam-1-q06",
      kind: "short",
      topicId: "house-furniture",
      guideRef: "position-words-you-zai",
      difficulty: "core",
      diagram: BEDROOM_FLOORPLAN_SVG,
      question:
        "Look at the bedroom floorplan (`卧室平面图`). Complete this existence sentence using the single correct Mandarin verb (`有` or `在`, Hanzi or Pinyin):\n\n**「书桌上面___一台电脑和一盏台灯。」**",
      answer: {
        type: "text",
        accept: ["有", "yǒu"],
        display: "有 (yǒu)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["在", "zài"] },
          feedback: "Word-order check! `在` uses Object + `在` + Place (`电脑在书桌上面`), whereas Place + ___ + Object uses `有`.",
        },
        {
          spec: { type: "text", accept: ["是", "shì"] },
          feedback: "Never use `是` (to be) to say an object exists on top of a surface.",
        },
      ],
      hints: [
        "Check whether the sentence starts with a **Place** or an **Object**.",
        "The formula `Place + ___ + Object` states what exists in that place.",
      ],
      solution: [
        "`书桌上面` (on top of the desk) is a **Place**, and `一台电脑和一盏台灯` (a computer and a desk lamp) is the **Object**.",
        "Place + `有` (yǒu) + Object expresses existence: `书桌上面有一台电脑和一盏台灯。`",
      ],
      commonError: "Writing `书桌上面在一台电脑` instead of separating `Place + 有 + Object` from `Object + 在 + Place`.",
    },
    {
      id: "exam-1-q07",
      kind: "mcq",
      topicId: "neighbourhood",
      guideRef: "distance-li-transport",
      difficulty: "core",
      question:
        "Which sentence uses `离` (lí) in the **correct Mandarin word order** to mean *'My home is very close to the MRT station'*?",
      options: [
        "我家很近离地铁站。",
        "我家离地铁站很近。",
        "离我家地铁站很近。",
        "我家在地铁站离很近。",
      ],
      answerIndex: 1,
      hints: [
        "Follow the exact distance pattern: **Place A + `离` + Place B + 很近 / 很远**.",
        "The adjective (`很近`) always goes at the very end of the clause.",
      ],
      explanation:
        "Mandarin distance sentences always follow **A + `离` + B + 很近/很远/不远**, so `我家离地铁站很近。` (Wǒ jiā lí dìtiězhàn hěn jìn.) is correct. Putting `很近` before `离` or inserting `在` breaks Mandarin word order.",
    },
    {
      id: "exam-1-q08",
      kind: "short",
      topicId: "appearance-personality",
      guideRef: "height-hair-eyes",
      difficulty: "core",
      question:
        "In Mandarin, you use `长着` (zhǎngzhe) for facial features you are born with. Type the two-character Mandarin verb phrase (Hanzi or tone-marked Pinyin) used for **keeping a hairstyle** to complete:\n\n**「她___长长的黑色直发。」**",
      answer: {
        type: "text",
        accept: ["留着", "liúzhe"],
        display: "留着 (liúzhe)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["穿着", "chuānzhe"] },
          feedback: "`穿着` (chuānzhe) is for clothes and shoes, not hairstyles.",
        },
        {
          spec: { type: "text", accept: ["戴着", "dàizhe"] },
          feedback: "`戴着` (dàizhe) is for accessories like hats or glasses, not hair.",
        },
        {
          spec: { type: "text", accept: ["长着", "zhǎngzhe"] },
          feedback: "`长着` (zhǎngzhe) is for born features like eyes or noses; hairstyles someone grows/keeps take `留着`.",
        },
      ],
      hints: [
        "Think of the verb meaning 'to keep / grow (hair or a beard)', followed by the continuous aspect marker `着`.",
        "Its Pinyin begins with `liú` (2nd tone) + neutral `zhe`.",
      ],
      solution: [
        "Mandarin distinguishes `长着` (zhǎngzhe — born features like `大眼睛`) from `留着` (liúzhe — hairstyles like `长头发` or `短发`).",
        "Complete sentence: `她留着长长的黑色直发。` (Tā liúzhe chángcháng de hēisè zhífà.)",
      ],
      commonError: "Translating English 'has long hair' literally as `戴着` or confusing `长着` with `留着`.",
    },
    {
      id: "exam-1-q09",
      kind: "mcq",
      topicId: "relatives-family",
      guideRef: "visiting-relatives",
      difficulty: "core",
      question:
        "Read the short passage:\n\n**「每年春节，我们全家都会去新加坡东部的姥姥家看望她。我阿姨是一位中学老师，她住在外婆家附近，所以我们常常一起吃晚饭。」**\n\nWhich statement is true according to the passage?",
      options: [
        "The paternal grandmother lives in eastern Singapore near a hospital.",
        "The paternal aunt is a primary teacher who lives far away.",
        "The maternal aunt is a secondary teacher who lives near the maternal grandmother.",
        "The maternal uncle visits them every weekend to cook dinner.",
      ],
      answerIndex: 2,
      hints: [
        "Check both `姥姥` (lǎolao) and `外婆` (wàipó) — both mean maternal grandmother!",
        "`阿姨` (āyí) is maternal aunt and `中学老师` (zhōngxué lǎoshī) is secondary-school teacher.",
      ],
      explanation:
        "`阿姨` (āyí) is the maternal aunt, `一位中学老师` means a secondary-school teacher, and `住在外婆家附近` means she lives near the maternal grandmother (`外婆` / `姥姥`).",
    },
    {
      id: "exam-1-q10",
      kind: "short",
      topicId: "appearance-personality",
      guideRef: "personality-traits",
      difficulty: "core",
      question:
        "Complete the Mandarin pattern meaning *'My older sister is both clever and friendly'*:\n\n**「我姐姐___聪明___友好。」**\n\nType the **single repeated Mandarin character** (or its tone-marked Pinyin) that fills both blanks.",
      answer: {
        type: "text",
        accept: ["又", "yòu"],
        display: "又 (yòu)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["和", "hé"] },
          feedback: "`和` (hé) only joins nouns — NEVER use `和` to join two adjectives!",
        },
        {
          spec: { type: "text", accept: ["也", "yě"] },
          feedback: "`也` means 'also', whereas the standard paired pattern for 'both [adj 1] and [adj 2]' is `又…又…`.",
        },
      ],
      hints: [
        "Never link two Mandarin adjectives with `和`.",
        "Use the 4th-tone paired pattern `___ A ___ B` meaning 'both A and B'.",
      ],
      solution: [
        "In Mandarin, two adjectives describing the same person or room are linked with `又…又…` (yòu...yòu...).",
        "Complete sentence: `我姐姐又聪明又友好。` (Wǒ jiějie yòu cōngmíng yòu yǒuhǎo.)",
      ],
      commonError: "Writing `我姐姐聪明和友好` by translating English 'and' directly as `和`.",
    },
    {
      id: "exam-1-q11",
      kind: "mcq",
      topicId: "neighbourhood",
      guideRef: "giving-directions",
      difficulty: "core",
      diagram: STREET_MAP_SVG,
      question:
        "Study the street map (`社区地图`). Starting from **我家** and walking east along `中山路`, you follow these directions:\n\n**「一直往前走，在第一个路口往左拐，就在你的右边。」**\n\nWhich place do you reach?",
      options: [
        "图书馆 (túshūguǎn)",
        "公园 (gōngyuán)",
        "超市 (chāoshì)",
        "地铁站 (dìtiězhàn)",
      ],
      answerIndex: 0,
      hints: [
        "`一直往前走` means walk straight ahead to `路口1` (the first junction).",
        "When walking east (to the right on the map), turning left (`往左拐`) turns you north (upwards) — now check which building is on your **right** (`右边`)!",
      ],
      explanation:
        "Walking east along `中山路` to the first junction and turning left (`往左拐`) faces you north. Looking north, `公园` is on your left (`左边`) and `图书馆` (túshūguǎn) is on your right (`右边`).",
    },
    {
      id: "exam-1-q12",
      kind: "short",
      topicId: "neighbourhood",
      guideRef: "comparing-neighbourhoods",
      difficulty: "core",
      question:
        "Type the two-character Mandarin word (Simplified Hanzi or tone-marked Pinyin) meaning **suburbs / outskirts** (the opposite of `市中心` shìzhōngxīn).",
      answer: {
        type: "text",
        accept: ["郊区", "jiāoqū"],
        display: "郊区 (jiāoqū)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["农村", "nóngcūn"] },
          feedback: "`农村` (nóngcūn) means rural countryside/village; the Year 9 term specifically for suburbs/outskirts is `郊区` (jiāoqū).",
        },
        {
          spec: { type: "text", accept: ["市中心", "shìzhōngxīn"] },
          feedback: "`市中心` means city centre — you need the opposite area on the edge of the city.",
        },
      ],
      hints: [
        "It pairs the character for 'outskirts' (`郊`) with `区` (district/area).",
        "Both syllables are in the 1st tone: `jiāo` + `qū`.",
      ],
      solution: [
        "City centre is `市中心` (shìzhōngxīn), while suburbs/outskirts is `郊区` (jiāoqū).",
        "Example: `郊区没有市中心热闹，但是更安静。`",
      ],
      commonError: "Confusing `郊区` (suburbs) with `社区` (shèqū — local neighbourhood/community).",
    },
    {
      id: "exam-1-q13",
      kind: "mcq",
      topicId: "appearance-personality",
      guideRef: "comparing-people",
      difficulty: "core",
      question:
        "Which Mandarin sentence is **grammatically correct** for saying *'My older brother is 5 cm taller than me'*?",
      options: [
        "哥哥比我很高五厘米。",
        "哥哥比我高五厘米。",
        "哥哥比五厘米高我。",
        "哥哥很高比我五厘米。",
      ],
      answerIndex: 1,
      hints: [
        "Remember the golden `比` (bǐ) rule: NEVER place `很` (hěn) before the adjective in a `比` comparison!",
        "The exact difference (`五厘米`) goes directly AFTER the adjective.",
      ],
      explanation:
        "The formula is **A + `比` + B + Adjective + Exact Difference**, giving `哥哥比我高五厘米。` (Gēge bǐ wǒ gāo wǔ límǐ.). Adding `很` before `高` (`比我很高`) is a classic IGCSE grammar error.",
    },
    {
      id: "exam-1-q14",
      kind: "short",
      topicId: "house-furniture",
      guideRef: "position-words-you-zai",
      difficulty: "core",
      question:
        "Rewrite the existence sentence **「床旁边有一个书架。」** as a location sentence starting with **书架** using **在** (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: [
          "书架在床旁边",
          "书架在床的旁边",
          "shūjià zài chuáng pángbiān",
          "shūjià zài chuáng de pángbiān",
        ],
        display: "书架在床旁边 (shūjià zài chuáng pángbiān)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["书架有床旁边", "shūjià yǒu chuáng pángbiān"] },
          feedback: "When you start with the Object (`书架`), use `在` (is located at), not `有`.",
        },
        {
          spec: { type: "text", accept: ["床旁边在书架", "chuáng pángbiān zài shūjià"] },
          feedback: "Check the order: Object (`书架`) must come BEFORE `在`, and Place (`床旁边`) comes AFTER `在`.",
        },
      ],
      hints: [
        "Flip `Place + 有 + Object` into `Object + 在 + Place`.",
        "Drop `一个` when stating where a specific known item (`书架`) is located.",
      ],
      solution: [
        "Identify the Object (`书架` shūjià) and the Place (`床旁边` chuáng pángbiān).",
        "Apply `Object + 在 + Place`: `书架在床旁边。` (or `书架在床的旁边。`).",
      ],
      commonError: "Keeping `一个` after `书架` or forgetting to swap the Place and Object around `在`.",
    },
    {
      id: "exam-1-q15",
      kind: "mcq",
      topicId: "relatives-family",
      guideRef: "paternal-maternal-grandparents",
      difficulty: "core",
      question:
        "Choose the correct kinship title to complete the sentence:\n\n**「我爸爸的哥哥是一位很有经验的工程师，我应该叫他___。」**",
      options: [
        "叔叔 (shūshu)",
        "舅舅 (jiùjiu)",
        "外公 (wàigōng)",
        "伯伯 (bóbo)",
      ],
      answerIndex: 3,
      hints: [
        "Notice `爸爸的哥哥` — father's **older** brother!",
        "`叔叔` is father's *younger* brother, and `舅舅` is mother's brother.",
      ],
      explanation:
        "Your father's older brother (`爸爸的哥哥`) is called `伯伯` (bóbo). Your father's younger brother is `叔叔` (shūshu), your mother's brother is `舅舅` (jiùjiu), and your mother's father is `外公` (wàigōng).",
    },
    {
      id: "exam-1-q16",
      kind: "short",
      topicId: "relatives-family",
      guideRef: "cousins-family-tree",
      difficulty: "core",
      diagram: FAMILY_TREE_SVG,
      question:
        "Study the family tree (`大家庭家谱`). **我 (李安, 14岁)** is introducing **李小红 (16岁)**. What exact two-character cousin title should `我` call `李小红`? (Simplified Hanzi or tone-marked Pinyin)",
      answer: {
        type: "text",
        accept: ["堂姐", "tángjiě"],
        display: "堂姐 (tángjiě)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["表姐", "biǎojiě"] },
          feedback: "`表` (biǎo) is for mother's-side cousins or father's sister's children. `李小红` is father's brother's child (same surname `李`), so use `堂`!",
        },
        {
          spec: { type: "text", accept: ["堂妹", "tángmèi"] },
          feedback: "Check the ages! `李小红` is 16 and `我` is 14, so she is older (`姐`), not younger (`妹`).",
        },
        {
          spec: { type: "text", accept: ["姐姐", "jiějie", "jiějiě"] },
          feedback: "`姐姐` is your own sister; your paternal uncle's daughter takes a cousin prefix (`堂`).",
        },
      ],
      hints: [
        "Step 1: Check surname & side — `李小红` is `伯伯`'s daughter (father's brother's child, same surname `李`), so pick `堂` (táng) or `表` (biǎo).",
        "Step 2: Check gender (female) and age (16 vs 14 → older).",
      ],
      solution: [
        "Father's brother's children share your surname (`李`), so they are `堂` (táng) cousins (whereas `张小宇`, `舅舅`'s son, is `表弟`).",
        "`李小红` is female and older (16 > 14), so she is `堂姐` (tángjiě).",
      ],
      commonError: "Confusing `堂` (father's brother's children) with `表` (all other cousins) or ignoring the age comparison.",
    },
    {
      id: "exam-1-q17",
      kind: "mcq",
      topicId: "neighbourhood",
      guideRef: "comparing-neighbourhoods",
      difficulty: "challenge",
      question:
        "Read the opinion carefully:\n\n**「郊区没有市中心那么热闹，但是空气更清新，生活也很安静。」**\n\nWhich English summary accurately reflects the sentence?",
      options: [
        "The suburbs are not as lively as the city centre, yet the air is fresher and life is quiet.",
        "The city centre is quieter than the suburbs, although the suburbs have busier nightlife.",
        "The suburbs are much livelier than the city centre, so the air feels less fresh there.",
        "Neither the suburbs nor the city centre is lively, because both areas are very quiet.",
      ],
      answerIndex: 0,
      hints: [
        "`A 没有 B (那么) + adj` means 'A is not as [adj] as B'.",
        "Check `热闹` (rènào — lively/bustling), `更清新` (fresher), and `安静` (ānjìng — quiet).",
      ],
      explanation:
        "`郊区没有市中心那么热闹` means the suburbs (`郊区`) are not as lively (`热闹`) as the city centre (`市中心`). `但是空气更清新，生活也很安静` adds that the air is fresher and life is quiet.",
    },
    {
      id: "exam-1-q18",
      kind: "short",
      topicId: "appearance-personality",
      guideRef: "comparing-people",
      difficulty: "challenge",
      question:
        "Translate **'I am not as tall as my older brother'** into Mandarin using the negative comparison pattern with **没有** (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: [
          "我没有哥哥高",
          "我没有哥哥那么高",
          "我没有我哥哥高",
          "我没有我哥哥那么高",
          "wǒ méiyǒu gēge gāo",
          "wǒ méiyǒu gēge nàme gāo",
          "wǒ méiyǒu wǒ gēge gāo",
          "wǒ méiyǒu wǒ gēge nàme gāo",
        ],
        display: "我没有哥哥高 (wǒ méiyǒu gēge gāo)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["我比哥哥不高", "wǒ bǐ gēge bù gāo"] },
          feedback: "Never negate the adjective directly after `比`! Use `A 没有 B (+ 那么) + adj` instead.",
        },
        {
          spec: { type: "text", accept: ["哥哥没有我高", "gēge méiyǒu wǒ gāo"] },
          feedback: "That reverses the people — `哥哥没有我高` means 'My older brother is not as tall as me'!",
        },
      ],
      hints: [
        "Use the pattern **A + `没有` + B + (+ `那么`) + Adjective**.",
        "Here A = `我`, B = `哥哥`, and Adjective = `高`.",
      ],
      solution: [
        "Negative comparisons ('A is not as [adj] as B') replace `比` with `没有` (méiyǒu).",
        "Putting A (`我`), B (`哥哥`), and `高` in order gives `我没有哥哥高。` (or `我没有哥哥那么高。`).",
      ],
      commonError: "Writing `我比哥哥不高` or swapping A and B so the sentence says the opposite.",
    },
    {
      id: "exam-1-q19",
      kind: "mcq",
      topicId: "house-furniture",
      guideRef: "ideal-home-writing",
      difficulty: "challenge",
      question:
        "Read the diary entry:\n\n**「我们去年从市中心的公寓搬到了郊区的两层别墅。新家的客厅比以前的大得多，楼下还有一个漂亮的花园，不过离地铁站有点儿远。」**\n\nAccording to the entry, what is the **drawback** of the family's new home?",
      options: [
        "The living room is smaller than the old flat.",
        "There is no garden on the ground floor.",
        "It is a bit far from the MRT station.",
        "The villa only has one storey in total.",
      ],
      answerIndex: 2,
      hints: [
        "Look for the contrast marker `不过` (búguò — however) near the end.",
        "Translate `离地铁站有点儿远` (lí dìtiězhàn yǒudiǎnr yuǎn).",
      ],
      explanation:
        "After `不过` (however), the writer states `离地铁站有点儿远` — it is a bit far (`有点儿远`) from the MRT station (`地铁站`). The living room is actually much bigger (`大得多`), the villa has two storeys (`两层`), and there is a garden downstairs (`楼下还有一个漂亮的花园`).",
    },
    {
      id: "exam-1-q20",
      kind: "short",
      topicId: "neighbourhood",
      guideRef: "distance-li-transport",
      difficulty: "challenge",
      question:
        "Complete this sentence meaning *'My home is very close to the sports centre; going **on foot** only takes ten minutes'*:\n\n**「我家离体育中心很近，___只要十分钟。」**\n\nType the two-character Mandarin verb phrase meaning **to walk / go on foot** (Simplified Hanzi or tone-marked Pinyin).",
      answer: {
        type: "text",
        accept: ["走路", "步行", "zǒulù", "bùxíng"],
        display: "走路 (zǒulù)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["坐车", "zuòchē"] },
          feedback: "`坐车` means taking a bus or car, not going on foot.",
        },
        {
          spec: { type: "text", accept: ["骑车", "骑自行车", "qíchē", "qí zìxíngchē"] },
          feedback: "`骑车` / `骑自行车` means riding a bicycle, not walking.",
        },
      ],
      hints: [
        "Think of the everyday Mandarin phrase literally meaning 'walk the road' (`走` + `路`).",
        "Its tone-marked Pinyin is `zǒulù` (3rd tone + 4th tone); `步行` (bùxíng) is also accepted.",
      ],
      solution: [
        "In Mandarin, transport expressions go before the duration: `走路十分钟` (walk for 10 minutes), `坐地铁二十分钟` (take the MRT for 20 minutes).",
        "So the missing phrase is `走路` (zǒulù) or formal `步行` (bùxíng).",
      ],
      commonError: "Writing `走十分钟` without `路` or using English word order `要十分钟走路`.",
    },
    {
      id: "exam-1-q21",
      kind: "short",
      topicId: "appearance-personality",
      guideRef: "personality-traits",
      difficulty: "challenge",
      question:
        "In Mandarin, `一点儿` goes **after** an adjective (`高一点儿` = a little taller). Type the different Mandarin phrase (Simplified Hanzi or tone-marked Pinyin) that goes **before** an adjective to mean *'a bit / slightly'* with a mild complaint:\n\n**「这间书房___小，放不下一张大书桌。」**",
      answer: {
        type: "text",
        accept: ["有点儿", "有点", "yǒudiǎnr", "yǒudiǎn"],
        display: "有点儿 (yǒudiǎnr)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["一点儿", "一点", "yìdiǎnr", "yīdiǎnr", "yìdiǎn"] },
          feedback: "`一点儿` only goes AFTER an adjective (`小一点儿` — a bit smaller). Before an adjective to show complaint, use `有点儿`!",
        },
      ],
      hints: [
        "It starts with `有` (yǒu) and expresses a slight negative nuance ('a bit too...').",
        "Its tone-marked Pinyin is `yǒudiǎnr` (or `yǒudiǎn`).",
      ],
      solution: [
        "`有点儿` (yǒudiǎnr) + Adjective goes BEFORE the adjective and signals a mild complaint (e.g., `有点儿小`, `有点儿害羞`, `有点儿远`).",
        "Complete sentence: `这间书房有点儿小，放不下一张大书桌。`",
      ],
      commonError: "Putting `一点儿` before an adjective (`一点儿小`), which is ungrammatical in Mandarin.",
    },
    {
      id: "exam-1-q22",
      kind: "written",
      topicId: "house-furniture",
      guideRef: "ideal-home-writing",
      difficulty: "core",
      marks: 3,
      question:
        "Write 3 connected sentences in **Simplified Chinese** (include tone-marked Pinyin) describing a student's dream personal room using all three English notes:\n\n1. State that the room is **both spacious and bright** (use the paired adjective pattern).\n2. State that there is a **desk beside the window** with a **desk lamp** on top.\n3. Compare it to the **younger brother's** room by saying yours is **bigger**.",
      modelAnswer:
        "我的梦想卧室又大又明亮。窗户旁边有一张书桌，书桌上面有一盏台灯。我的卧室比弟弟的大得多。\n\n(Wǒ de mèngxiǎng wòshì yòu dà yòu míngliàng. Chuānghu pángbiān yǒu yì zhāng shūzhuō, shūzhuō shàngmian yǒu yì zhǎn táidēng. Wǒ de wòshì bǐ dìdi de dà de duō.)",
      markScheme: [
        {
          point: "Describes the room as both big and bright using `又大又明亮` (or `又大又亮`).",
          keywords: ["又大又明亮", "明亮", "míngliàng", "又大又亮"],
        },
        {
          point: "Accurately places the desk (`书桌`) beside the window (`窗户`) and/or lamp (`台灯`) on top using `有` or `在`.",
          keywords: ["书桌", "shūzhuō", "台灯", "táidēng", "窗户", "chuānghu"],
        },
        {
          point: "Compares room size against younger brother's using `比弟弟` without `很`.",
          keywords: ["比弟弟", "bǐ dìdi", "弟弟的", "dìdi de"],
        },
      ],
      hints: [
        "Use `又大又明亮` (yòu dà yòu míngliàng) for 'both big and bright'.",
        "Use `Place + 有 + Object`: `窗户旁边有一张书桌，书桌上面有一盏台灯。`",
        "For the comparison, write `我的卧室比弟弟的大` (or `大得多`) — never put `很` after `比`!",
      ],
      commonError: "Writing `我的卧室比弟弟的很大` (illegal `很` with `比`) or forgetting `的` after `弟弟`.",
    },
    {
      id: "exam-1-q23",
      kind: "written",
      topicId: "neighbourhood",
      guideRef: "giving-directions",
      difficulty: "core",
      marks: 3,
      question:
        "A visitor in Singapore asks how to walk from the bus stop to the local bookshop. Write **3 clear direction steps in Simplified Chinese** (with tone-marked Pinyin) covering:\n\n1. **Walk straight ahead**.\n2. **Turn right at the second junction**.\n3. Explain that the bookshop is **opposite the supermarket**.",
      modelAnswer:
        "从公共汽车站一直往前走。在第二个路口往右拐。书店就在超市对面。\n\n(Cóng gōnggòng qìchēzhàn yìzhí wǎng qián zǒu. Zài dì-èr gè lùkǒu wǎng yòu guǎi. Shūdiàn jiù zài chāoshì duìmiàn.)",
      markScheme: [
        {
          point: "Gives the instruction to walk straight ahead (`一直往前走`).",
          keywords: ["一直往前走", "往前走", "yìzhí wǎng qián zǒu", "wǎng qián zǒu"],
        },
        {
          point: "Specifies turning right at the second junction (`在第二个路口往右拐`).",
          keywords: ["往右拐", "右拐", "wǎng yòu guǎi", "第二个路口", "dì-èr gè lùkǒu"],
        },
        {
          point: "States the destination is opposite the supermarket (`在超市对面`).",
          keywords: ["超市对面", "chāoshì duìmiàn", "对面", "duìmiàn"],
        },
      ],
      hints: [
        "Recall the three core direction verbs: `一直往前走`, `往左拐` / `往右拐`, `过马路`.",
        "Put the place phrase BEFORE the action: `在第二个路口往右拐`.",
        "'Opposite X' in Mandarin is `在 X 对面` (`在超市对面`).",
      ],
      commonError: "Putting `在第二个路口` at the end of the sentence instead of before `往右拐`.",
    },
    {
      id: "exam-1-q24",
      kind: "written",
      topicId: "relatives-family",
      guideRef: "family-celebrations-writing",
      difficulty: "challenge",
      marks: 4,
      question:
        "Write a **4-sentence paragraph in Simplified Chinese** (with tone-marked Pinyin) introducing your favourite extended family member using all four notes:\n\n1. Introduce your **maternal aunt** who lives in **London**.\n2. State her occupation (**doctor**) using the **polite measure word** for people.\n3. Mention that your family **visits** her **every summer holiday**.\n4. Explain that you **get along very well** and often **chat together**.",
      modelAnswer:
        "我最喜欢的亲戚是我的阿姨，她住在伦敦。她是一位很有耐心的医生。每年暑假，我们全家都会去伦敦看望她。我们的关系很好，常常一起聊天儿。\n\n(Wǒ zuì xǐhuan de qīnqi shì wǒ de āyí, tā zhù zài Lúndūn. Tā shì yí wèi hěn yǒu nàixīn de yīshēng. Měinián shǔjià, wǒmen quánjiā dōu huì qù Lúndūn kànwàng tā. Wǒmen de guānxi hěn hǎo, chángcháng yìqǐ liáotiānr.)",
      markScheme: [
        {
          point: "Correctly names maternal aunt (`阿姨`) and states she lives in London (`住在伦敦`).",
          keywords: ["阿姨", "āyí", "伦敦", "lúndūn"],
        },
        {
          point: "Uses the polite measure word `位` with doctor (`一位医生`).",
          keywords: ["一位", "yí wèi", "医生", "yīshēng"],
        },
        {
          point: "Uses `看望` (or `拜访`) with `每年暑假` for visiting every summer holiday.",
          keywords: ["看望", "kànwàng", "拜访", "bàifǎng", "暑假", "shǔjià"],
        },
        {
          point: "States good relationship (`关系很好`) and chatting together (`一起聊天儿`).",
          keywords: ["关系很好", "guānxi hěn hǎo", "聊天", "liáotiān"],
        },
      ],
      hints: [
        "Maternal aunt = `阿姨` (āyí); paternal aunt would be `姑姑` (gūgu).",
        "Use `一位` (yí wèi) before respected jobs like `医生` (yīshēng) or `老师` (lǎoshī).",
        "Time phrase goes early: `每年暑假，我们去伦敦看望她。`",
      ],
      commonError: "Using `姑姑` instead of `阿姨` for mother's sister, or writing `看` instead of `看望` for visiting relatives.",
    },
    {
      id: "exam-1-q25",
      kind: "written",
      topicId: "appearance-personality",
      guideRef: "comparing-people",
      difficulty: "challenge",
      marks: 4,
      question:
        "Write a **4-sentence Mandarin comparison** (Simplified Hanzi + tone-marked Pinyin) about two classmates, **Xiao Ming** and **Da Wei**, covering all four notes:\n\n1. Xiao Ming wears a **white shirt** and **a pair of glasses** (distinguish the clothing verb from the accessory verb).\n2. Xiao Ming is **6 cm taller** than Da Wei (use the exact-difference comparison structure).\n3. Da Wei's personality is **humorous and patient**.\n4. State that both boys **enjoy reading books equally** (use the Mandarin equality pattern).",
      modelAnswer:
        "小明穿着白色衬衫，戴着一副眼镜。小明比大卫高六厘米。大卫的性格又幽默又有耐心。小明跟大卫一样喜欢看书。\n\n(Xiǎomíng chuānzhe báisè chènshān, dàizhe yí fù yǎnjìng. Xiǎomíng bǐ Dàwèi gāo liù límǐ. Dàwèi de xìnggé yòu yōumò yòu yǒu nàixīn. Xiǎomíng gēn Dàwèi yíyàng xǐhuan kànshū.)",
      markScheme: [
        {
          point: "Correctly distinguishes `穿着` (white shirt `衬衫`) and `戴着` (glasses `一副眼镜`).",
          keywords: ["穿着", "chuānzhe", "戴着", "dàizhe", "眼镜", "yǎnjìng"],
        },
        {
          point: "Writes `小明比大卫高六厘米` (or `6厘米`) with no `很`.",
          keywords: ["比大卫高", "bǐ dàwèi gāo", "六厘米", "6厘米", "liù límǐ"],
        },
        {
          point: "Includes both personality traits: humorous (`幽默`) and patient (`耐心`).",
          keywords: ["幽默", "yōumò", "耐心", "nàixīn"],
        },
        {
          point: "Uses the equality pattern `跟…一样` with reading books (`喜欢看书`).",
          keywords: ["一样喜欢看书", "yíyàng xǐhuan kànshū", "喜欢看书", "xǐhuan kànshū"],
        },
      ],
      hints: [
        "Shirt takes `穿着` (chuānzhe), while glasses take `戴着一副眼镜` (dàizhe yí fù yǎnjìng).",
        "Exact height comparison: `A 比 B 高六厘米` — keep `很` completely out!",
        "Equality structure: `A 跟 B 一样 + verb/adjective` (`小明跟大卫一样喜欢看书`).",
      ],
      commonError: "Using `穿着眼镜` for glasses or putting `很` inside a `比` sentence.",
    },
  ],
};
