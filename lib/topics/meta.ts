// ---------------------------------------------------------------------------
// Topic registry for Tanglin Trust School Year 9 Mandarin Chinese.
// Source: Middle School Curriculum Overview p. 20 (continuing Year8chinese
// IGCSE 0547 Foreign Language pathway).
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  covers: string;
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Home & Community",
  "Pets & School",
  "Culture & IGCSE Bridge",
];

export const TOPIC_META: TopicMeta[] = [
  // ========================= HOME & COMMUNITY =============================
  {
    id: "house-furniture",
    title: "House, Rooms & Furniture (房屋与家具)",
    strand: "Home & Community",
    icon: "🏠",
    curriculum: "Year 9 Term 1 Chinese — House Types, Rooms, Furniture, Position Words & 有 vs 在",
    sections: [
      {
        id: "house-types-rooms",
        heading: "Types of Homes & Rooms (房子和房间)",
        covers: "公寓 (gōngyù), 别墅 (biéshù), 楼上/楼下 (lóushàng/lóuxià), 客厅, 卧室, 厨房, 卫生间, 书房, 花园, 阳台; measure words 间 (jiān) & 层 (céng); 住在... (zhù zài).",
      },
      {
        id: "furniture-measure-words",
        heading: "Furniture & Measure Words (家具和量词)",
        covers: "床 (一张床), 书桌, 椅子 (一把椅子), 沙发, 书架, 衣柜, 电脑, 台灯, 空调; describing room size & colours (我的卧室又大又明亮).",
      },
      {
        id: "position-words-you-zai",
        heading: "Position Words (方位词) & 有 vs 在",
        covers: "上面, 下面, 里面, 外面, 前面, 后面, 左边, 右边, 旁边, 中间; distinguishing existence (Place + 有 + Object: 书桌上面有一台电脑) from location (Object + 在 + Place: 电脑在书桌上面).",
      },
      {
        id: "ideal-home-writing",
        heading: "Describing Your Home & Dream Bedroom",
        covers: "Comparing rooms (我的卧室比弟弟的大), expressing likes/dislikes (我最喜欢客厅，因为...), and writing a cohesive 80-character description of your home.",
      },
    ],
  },
  {
    id: "neighbourhood",
    title: "Neighbourhood & Directions (社区与方向)",
    strand: "Home & Community",
    icon: "🗺️",
    curriculum: "Year 9 Term 1 Chinese — Local Places, Distance (离), Giving Directions & Comparing Areas",
    sections: [
      {
        id: "local-facilities",
        heading: "Places in the Neighbourhood (社区设施)",
        covers: "超市, 银行, 邮局, 医院, 公园, 图书馆, 电影院, 地铁站, 公共汽车站, 购物中心, 体育中心, 餐厅; saying what is near your home (我家附近有...).",
      },
      {
        id: "distance-li-transport",
        heading: "Expressing Distance with 离 (lí) & Transport",
        covers: "A 离 B 很近 / 很远 (我家离学校不远); how you get there (走路十分钟 / 坐地铁二十分钟 / 骑自行车); 从 A 到 B.",
      },
      {
        id: "giving-directions",
        heading: "Asking for & Giving Directions (问路和指路)",
        covers: "请问，...怎么走？ 一直往前走 (yìzhí wǎng qián zǒu), 往左拐 (wǎng zuǒ guǎi), 往右拐 (wǎng yòu guǎi), 过马路, 在第一个路口, 就在你的右边.",
      },
      {
        id: "comparing-neighbourhoods",
        heading: "City vs Suburbs & Neighbourhood Opinions",
        covers: "市中心 (shìzhōngxīn) vs 郊区 (jiāoqū); 方便 (fāngbiàn), 安静 (ānjìng), 热闹 (rènào), 环境很好; comparing areas with 比 and 没有 (郊区没有市中心热闹，但是更安静).",
      },
    ],
  },
  {
    id: "relatives-family",
    title: "Extended Family & Relatives (亲戚与大家庭)",
    strand: "Home & Community",
    icon: "👨‍👩‍👧‍👦",
    curriculum: "Year 9 Term 1 Chinese — Maternal vs Paternal Relatives, Cousins, Family Visits & Polite Measure Words",
    sections: [
      {
        id: "paternal-maternal-grandparents",
        heading: "Paternal vs Maternal Grandparents & Uncles/Aunts",
        covers: "Father's side: 爷爷 (yéye), 奶奶 (nǎinai), 伯伯 (bóbo), 叔叔 (shūshu), 姑姑 (gūgu) vs Mother's side: 外公/姥爷 (wàigōng/lǎoye), 外婆/姥姥 (wàipó/lǎolao), 舅舅 (jiùjiu), 阿姨 (āyí).",
      },
      {
        id: "cousins-family-tree",
        heading: "Cousins (堂 vs 表) & Extended Family Tree",
        covers: "堂哥/堂姐/堂弟/堂妹 (father's brother's children, same surname) vs 表哥/表姐/表弟/表妹 (other cousins); measure words 口 (kǒu), 个 (gè), 位 (wèi).",
      },
      {
        id: "visiting-relatives",
        heading: "Visiting Relatives & Describing Relationships",
        covers: "看望 (kànwàng), 拜访, 住在一起, 每年春节去外婆家; talking about ages, jobs and where relatives live (我舅舅住在新加坡/伦敦，他是一位医生).",
      },
      {
        id: "family-celebrations-writing",
        heading: "Describing Family Gatherings & Relationships",
        covers: "Getting on well (关系很好 / 常常一起聊天儿), contrasting personalities across generations, and writing an extended paragraph about your favourite relative.",
      },
    ],
  },
  {
    id: "appearance-personality",
    title: "Appearance & Personality (外貌与性格)",
    strand: "Home & Community",
    icon: "🧑",
    curriculum: "Year 9 Term 1 Chinese — Physical Descriptions, Clothing Verbs, Personality Traits & 比 Comparisons",
    sections: [
      {
        id: "height-hair-eyes",
        heading: "Describing Height, Hair & Facial Features",
        covers: "高/矮, 胖/瘦, 长头发/短头发, 黑色的直发/卷发, 大眼睛, 鼻子, 嘴巴; using 长着 (zhǎngzhe — born features) and 留着 (liúzhe — hairstyles).",
      },
      {
        id: "wearing-clothes-glasses",
        heading: "Wearing Clothes & Accessories (穿 vs 戴)",
        covers: "穿 (chuān) for clothes & shoes (穿着白色衬衫、牛仔裤) vs 戴 (dài) for glasses, hats, watches & scarves (戴着一副眼镜); describing someone in a photo.",
      },
      {
        id: "personality-traits",
        heading: "Personality Adjectives & 又…又… Patterns",
        covers: "聪明 (cōngmíng), 友好 (yǒuhǎo), 幽默 (yōumò), 认真 (rènzhēn), 勤快 (qínkuài), 懒 (lǎn), 害羞 (hàixiū), 耐心 (nàixīn), 严格 (yángé); 又…又… (both... and...) & 有点儿 (yǒudiǎnr — a bit, negative nuance).",
      },
      {
        id: "comparing-people",
        heading: "Comparing People with 比 (bǐ) & 跟…一样",
        covers: "A 比 B + adj (+ 一点儿 / 得多 / 三岁): 姐姐比我高五厘米; negative 没有 (我没有哥哥高); equality 跟...一样 (我和表姐一样喜欢看书). Never put 很 after 比!",
      },
    ],
  },

  // ========================== PETS & SCHOOL ===============================
  {
    id: "pets",
    title: "Pets & Animal Care (宠物)",
    strand: "Pets & School",
    icon: "🐶",
    curriculum: "Year 9 Term 2 Chinese — Common Pets, Animal Measure Words (只/条/匹), Caring for Pets & Reasons",
    sections: [
      {
        id: "common-pets-measure-words",
        heading: "Common Pets & Exact Animal Measure Words",
        covers: "小狗, 小猫, 兔子, 仓鼠 (cāngshǔ), 鸟, 乌龟 (wūguī), 金鱼 (jīnyú), 马; exact measure words: 一只狗/猫/兔子/鸟/乌龟, 一条金鱼/蛇, 一匹马.",
      },
      {
        id: "describing-pets",
        heading: "Describing Your Pet's Appearance & Character",
        covers: "毛 (máo — fur), 尾巴 (wěiba — tail), 耳朵 (ěrduo), 可爱, 活泼 (huópō), 聪明, 淘气 (táoqì — naughty), 温顺; 叫 (called: 我的小狗叫毛毛).",
      },
      {
        id: "caring-for-pets",
        heading: "Looking After Pets (照顾宠物)",
        covers: "养宠物 (yǎng chǒngwù), 喂 (wèi — feed), 遛狗 (liù gǒu — walk the dog), 洗澡 (xǐzǎo), 陪它玩儿 (péi tā wánr), 带它去看兽医 (shòuyī — vet); daily pet care routine.",
      },
      {
        id: "reasons-for-against-pets",
        heading: "Opinions: Pros & Cons of Keeping a Pet",
        covers: "Using 因为...，所以... & 虽然...，但是...: 养狗虽然很累，但是它是我最好的朋友; reasons why some families cannot keep pets (家里太小, 没时间照顾, 对猫毛过敏).",
      },
    ],
  },
  {
    id: "school-subjects-facilities",
    title: "School Subjects & Facilities (学校科目与设施)",
    strand: "Pets & School",
    icon: "🏫",
    curriculum: "Year 9 Term 2 Chinese — School Subjects, Timetables, Campus Facilities & Subject Opinions",
    sections: [
      {
        id: "school-subjects-opinions",
        heading: "Year 9 School Subjects & Opinions (学校科目)",
        covers: "中文, 英文, 西班牙文, 数学, 科学 (生物, 化学, 物理), 地理, 历史, 电脑/计算机, 艺术, 音乐, 戏剧, 体育; measure word 门 (mén); 有趣, 有用, 难, 容易, 无聊.",
      },
      {
        id: "school-timetable",
        heading: "School Day, Timetables & 从…到…",
        covers: "上课, 下课, 休息, 午饭时间, 第一节课; 从上午八点到下午三点半; 每天有六节课; 课外活动 (kèwài huódòng — CCAs) & 作业 (zuòyè).",
      },
      {
        id: "school-facilities",
        heading: "School Facilities & Campus Tour (学校设施)",
        covers: "教室, 图书馆, 科学实验室 (shíyànshì), 体育馆 (tǐyùguǎn), 运动场/操场, 游泳池, 食堂 (shítáng), 礼堂 (lǐtáng), 电脑室, 音乐室; describing locations on campus.",
      },
      {
        id: "comparing-subjects-teachers",
        heading: "Comparing Subjects, Teachers & School Life",
        covers: "Describing teachers (幽默, 耐心, 严格, 教得很好); comparing subjects with 比 & 最 (我觉得数学比历史难，但我最喜欢科学); writing a short essay about Tanglin school life.",
      },
    ],
  },

  // ===================== CULTURE & IGCSE BRIDGE ===========================
  {
    id: "chinese-festivals",
    title: "Chinese Festivals & Culture (中国节日)",
    strand: "Culture & IGCSE Bridge",
    icon: "🏮",
    curriculum: "Year 9 Term 3 Chinese — Spring Festival, Mid-Autumn, Dragon Boat & Lantern Festivals",
    sections: [
      {
        id: "spring-festival",
        heading: "Spring Festival / Chinese New Year (春节)",
        covers: "农历正月初一, 除夕 (chúxī), 年夜饭 (niányèfàn), 贴春联 (tiē chūnlián), 放烟花, 舞龙舞狮, 发红包 (hóngbāo), 吃饺子/年糕, 新年快乐, 恭喜发财.",
      },
      {
        id: "mid-autumn-festival",
        heading: "Mid-Autumn Festival (中秋节)",
        covers: "农历八月十五, 赏月 (shǎngyuè — admire the moon), 吃月饼 (yuèbǐng), 提灯笼 (tí dēnglóng), 团圆 (tuányuán — family reunion) and the legend of 嫦娥 (Cháng'é).",
      },
      {
        id: "dragon-boat-lantern",
        heading: "Dragon Boat Festival (端午节) & Lantern Festival (元宵节)",
        covers: "端午节 (农历五月初五): 划龙舟 (huá lóngzhōu), 吃粽子 (zòngzi), remembering poet 屈原 (Qū Yuán); 元宵节 (正月十五): 看花灯, 猜灯谜 (cāi dēngmí), 吃汤圆/元宵.",
      },
      {
        id: "festival-comparisons-writing",
        heading: "Describing How You Celebrate Festivals in Singapore",
        covers: "Narrating past festival celebrations with 了 and 过 (去年春节我和家人一起去牛车水看花灯), expressing cultural meaning (象征好运/团圆) and comparing festivals.",
      },
    ],
  },
  {
    id: "igcse-bridge-grammar",
    title: "IGCSE Bridge & Core Grammar (IGCSE 衔接与语法)",
    strand: "Culture & IGCSE Bridge",
    icon: "🎓",
    curriculum: "Year 9 Term 3 Chinese — IGCSE 0547 Bridge (Self-Intro, Family, Pets, Routine, Hobbies) & High-Band Grammar",
    sections: [
      {
        id: "igcse-self-intro-family-pets",
        heading: "IGCSE Self-Introduction, Family & Pets",
        covers: "Fluent IGCSE 0547 opening paragraph: name, age, birthday, nationality, living in Singapore, extended family members, appearances, personalities & pets.",
      },
      {
        id: "igcse-routine-hobbies",
        heading: "Daily Routine & Hobbies to IGCSE Band",
        covers: "Sequencing daily routines with 先...，然后...，最后... (起床, 吃早饭, 上学, 做作业, 睡觉); expanding hobbies with frequency (经常/偶尔/从来不), duration (弹钢琴弹了一个小时) & reasons.",
      },
      {
        id: "stpvo-tenses-aspect",
        heading: "STPVO Word Order & Time/Aspect Markers (了·过·正在·打算)",
        covers: "Master formula Subject + Time + Place + Verb + Object; completed action 了 (le), past experience 过 (guo), ongoing action 正在...呢 (zhèngzài...ne) and future plans 打算 / 将来想 / 会.",
      },
      {
        id: "igcse-connectives-writing",
        heading: "High-Band IGCSE Connectives & Exam Writing Checklist",
        covers: "Paired structures: 因为...所以..., 虽然...但是..., 不但...而且..., 如果...就..., 一边...一边...; hitting all IGCSE 0547 bullet points across 3 time frames with zero Simplified/Traditional slips.",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
