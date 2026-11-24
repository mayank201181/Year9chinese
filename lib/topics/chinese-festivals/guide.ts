import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "chinese-festivals",
  title: "Chinese Festivals & Culture (中国节日)",
  strand: "Culture & IGCSE Bridge",
  icon: "🏮",
  summary:
    "Explore Spring, Mid-Autumn, Dragon Boat & Lantern Festivals — lunar dates, customs, foods, homophone symbolism and IGCSE cultural writing.",
  intro:
    "In Singapore, Chinese festivals light up the whole calendar — from Chinatown's 牛车水 (Niúchēshuǐ) lanterns at Spring Festival to mooncakes in September and dragon boats at Marina Bay. In Year 9 Mandarin, you will go beyond naming festivals: you will read lunar dates, match exact verb–object collocations (`贴春联`, `赏月`, `划龙舟`, `猜灯谜`), explain auspicious homophones (`鱼/余`, `团圆`), and narrate past and future celebrations across three time frames ready for IGCSE 0547.",
  guide: [
    {
      id: "spring-festival",
      heading: "Spring Festival / Chinese New Year (春节)",
      discovery: {
        problem:
          "At a Spring Festival reunion dinner in Singapore, Grandma insists you leave a little fish (`鱼 yú`) on the serving plate and hang the character `福` (fú — good fortune) upside down on the front door. Why would leaving food uneaten and hanging a sign upside down be considered *lucky*?",
        idea:
          "Mandarin loves auspicious puns (homophones, 谐音 xiéyīn)! `鱼` (yú, fish) sounds identical to `余` (yú, surplus/abundance), giving the blessing `年年有余` (niánnián yǒuyú — abundance every year). And `倒` (dào, upside down) sounds identical to `到` (dào, to arrive), so `福倒了` (good fortune is upside down) sounds like `福到了` (good fortune has arrived!).",
      },
      body: `**Spring Festival** — \`春节\` (Chūnjié), also called \`农历新年\` (Nónglì Xīnnián, Lunar New Year) — is China's most important traditional festival. It begins on **\`农历正月初一\`** (Nónglì Zhēngyuè chūyī, the 1st day of the 1st lunar month), usually falling in late January or February. Note that the 1st lunar month is specially called **\`正月\`** (Zhēngyuè), and lunar days 1–10 take the prefix **\`初\`** (chū): \`初一\` (1st), \`初二\` (2nd), \`初五\` (5th).

The celebrations begin the night before on **\`除夕\`** (chúxī — New Year's Eve), when generations gather for the reunion dinner, **\`年夜饭\`** (niányèfàn). In northern China, families wrap **\`饺子\`** (jiǎozi — dumplings, shaped like ancient gold ingots \`元宝\`), while in southern China and Singapore many families eat **\`年糕\`** (niángāo — sticky rice cake, punning with \`年年高升\` rising higher every year) and toss **\`捞鱼生\`** (lāo yúshēng — prosperity salad).

| Custom (习俗) | Pinyin | Exact Verb + Object | Cultural Meaning |
| --- | --- | --- | --- |
| 吃年夜饭 | chī niányèfàn | 吃 (eat) + 年夜饭 | Family reunion on 除夕 (New Year's Eve) |
| 贴春联 | tiē chūnlián | 贴 (paste/stick) + 春联 | Red couplets welcoming luck & spring |
| 放烟花 / 放鞭炮 | fàng yānhuā / fàng biānpào | 放 (set off) + 烟花 | Fireworks to drive away the monster 年 (Nián) |
| 舞龙舞狮 | wǔlóng wǔshī | 舞 (dance/perform) + 龙/狮 | Lion & dragon dances for energy and prosperity |
| 发红包 / 给压岁钱 | fā hóngbāo / gěi yāsuìqián | 发 / 给 (give out) + 红包 | Red packets from elders wishing children safety & luck |
| 拜年 | bàinián | 拜年 (pay New Year visit) | Visiting relatives with two mandarin oranges (橘子) |

Two greetings you must master for speaking and writing are **\`新年快乐！\`** (Xīnnián kuàilè — Happy New Year!) and **\`恭喜发财！\`** (Gōngxǐ fācái — Wishing you prosperity!).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spring Festival timeline from New Year's Eve to Day 1 and key verb-object customs">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1" />
  <text x="280" y="26" text-anchor="middle" font-size="15" font-weight="800" fill="var(--brand)">春节 (Chūnjié) — Timeline &amp; Verb–Object Map</text>
  <line x1="48" y1="68" x2="512" y2="68" stroke="var(--brand)" stroke-width="3" />
  <circle cx="105" cy="68" r="10" fill="var(--brand)" />
  <circle cx="280" cy="68" r="10" fill="var(--brand)" />
  <circle cx="455" cy="68" r="10" fill="var(--brand)" />
  <text x="105" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">除夕 (chúxī)</text>
  <text x="280" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">正月初一 (chūyī)</text>
  <text x="455" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">初二–十五 (Visits)</text>
  <rect x="26" y="88" width="158" height="142" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.2" />
  <text x="105" y="109" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">New Year's Eve</text>
  <text x="105" y="131" text-anchor="middle" font-size="12" fill="var(--ink)">大扫除 (dàsǎochú)</text>
  <text x="105" y="152" text-anchor="middle" font-size="12" fill="var(--ink)">贴春联 (tiē chūnlián)</text>
  <text x="105" y="173" text-anchor="middle" font-size="12" fill="var(--ink)">吃年夜饭 (niányèfàn)</text>
  <text x="105" y="194" text-anchor="middle" font-size="12" fill="var(--ink)">守岁 (shǒusuì)</text>
  <text x="105" y="216" text-anchor="middle" font-size="11" fill="var(--ink-2)">吃饺子 · 鱼 (余)</text>
  <rect x="201" y="88" width="158" height="142" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2" />
  <text x="280" y="109" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Day 1 (Lunar 1/1)</text>
  <text x="280" y="131" text-anchor="middle" font-size="12" fill="var(--ink)">穿新衣服 (chuān xīnyī)</text>
  <text x="280" y="152" text-anchor="middle" font-size="12" fill="var(--ink)">发红包 (fā hóngbāo)</text>
  <text x="280" y="173" text-anchor="middle" font-size="12" fill="var(--ink)">舞龙舞狮 (wǔlóng)</text>
  <text x="280" y="194" text-anchor="middle" font-size="12" fill="var(--ink)">放烟花 (fàng yānhuā)</text>
  <text x="280" y="216" text-anchor="middle" font-size="11" fill="var(--ink-2)">新年快乐 · 恭喜发财</text>
  <rect x="376" y="88" width="158" height="142" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.2" />
  <text x="455" y="109" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">Visiting &amp; Symbols</text>
  <text x="455" y="131" text-anchor="middle" font-size="12" fill="var(--ink)">去拜年 (qù bàinián)</text>
  <text x="455" y="152" text-anchor="middle" font-size="12" fill="var(--ink)">吃年糕 (niángāo)</text>
  <text x="455" y="173" text-anchor="middle" font-size="12" fill="var(--ink)">红 = 好运 (hǎoyùn)</text>
  <text x="455" y="194" text-anchor="middle" font-size="12" fill="var(--ink)">福倒了 = 福到了</text>
  <text x="455" y="216" text-anchor="middle" font-size="11" fill="var(--ink-2)">Ends on 元宵节 (1/15)</text>
</svg>`,
      diagramCaption:
        "How Spring Festival unfolds from New Year's Eve (除夕) to Day 1 (正月初一) and visiting days, paired with exact verbs.",
      whyItWorks:
        "Pairing every festival noun with its exact verb (`贴` for couplets, `放` for fireworks, `发/收` for red packets, `舞` for dragon/lion dance) prevents awkward literal translations from English like `*做烟花*` or `*玩舞狮*` and instantly raises your IGCSE lexical precision.",
      keyPoints: [
        "Spring Festival falls on **农历正月初一** (Nónglì Zhēngyuè chūyī); New Year's Eve is **除夕** (chúxī).",
        "Always use exact verb–object pairs: **贴春联** (paste couplets), **放烟花** (set off fireworks), **发/收红包** (give/receive red packets), **舞龙舞狮** (perform dragon/lion dance).",
        "Red (**红色**) symbolises luck and wards off the legendary beast **年** (Nián), who feared loud noises and the colour red.",
        "Traditional foods carry auspicious puns: **鱼** (fish → 余 surplus), **年糕** (rice cake → 年年高升 rising higher), **饺子** (dumplings → gold ingots).",
      ],
      strategies: [
        "Learn Spring Festival customs as verb–object chunks (`贴春联`, `吃年夜饭`, `发红包`) rather than isolated nouns.",
        "Remember lunar date formatting: `农历` + month (`正月` for month 1) + `初` for days 1–10 (`初一`, `初五`).",
      ],
      thinkDeeper:
        "Why do people clean the house (`大扫除` dàsǎochú) *before* New Year's Day rather than sweeping the floor *on* 正月初一 itself?",
      workedExamples: [
        {
          title: "Translating a New Year's Eve sentence cleanly",
          problem:
            "Translate into Simplified Chinese (with tone-marked Pinyin): 'On New Year's Eve, my whole family eats the reunion dinner together and pastes Spring Festival couplets.'",
          steps: [
            "Place the time phrase first: `除夕那天` (chúxī nàtiān) or `除夕晚上` (chúxī wǎnshang).",
            "Add the subject + together: `我们全家人一起` (wǒmen quánjiārén yìqǐ).",
            "Choose the exact verb–object pairs: `吃年夜饭` (eat reunion dinner) and `贴春联` (paste couplets).",
            "Join naturally: `除夕晚上，我们全家人一起吃年夜饭、贴春联。`",
          ],
          answer:
            "除夕晚上，我们全家人一起吃年夜饭、贴春联。(Chúxī wǎnshang, wǒmen quánjiārén yìqǐ chī niányèfàn, tiē chūnlián.)",
          yourTurn: {
            question:
              "What is the exact verb + noun phrase for 'to paste Spring Festival couplets'? (Type Simplified Hanzi or tone-marked Pinyin.)",
            answer: {
              type: "text",
              accept: ["贴春联", "tiē chūnlián", "tiēchūnlián"],
              display: "贴春联 (tiē chūnlián)",
            },
            solution:
              "Use the verb 贴 (tiē — to paste/stick) with 春联 (chūnlián — Spring Festival couplets): 贴春联 (tiē chūnlián).",
          },
        },
        {
          title: "Distinguishing 给/发红包 vs 收红包",
          problem:
            "A Year 9 student writes: '春节的时候，我给爷爷奶奶发红包。' Explain the cultural slip and fix the sentence for a teenager.",
          steps: [
            "Check who gives red packets (`红包` hóngbāo / `压岁钱` yāsuìqián): married adults and elders (`长辈` zhǎngbèi) give them to children and unmarried young people.",
            "Swap the verb from `发` (give out) to `收` (shōu — receive) or make the grandparents the subject.",
            "Natural fix: `春节的时候，爷爷奶奶给我发红包。` or `春节的时候，我收到很多红包。`",
          ],
          answer:
            "春节的时候，爷爷奶奶给我发红包。(Chūnjié de shíhou, yéye nǎinai gěi wǒ fā hóngbāo.)",
        },
      ],
    },
    {
      id: "mid-autumn-festival",
      heading: "Mid-Autumn Festival (中秋节)",
      discovery: {
        problem:
          "Why are mooncakes (`月饼` yuèbǐng) almost always baked in a round circle, cut into wedges, and shared by everyone around the table instead of eaten alone like a snack?",
        idea:
          "Mid-Autumn Festival falls on the 15th day of the 8th lunar month (`农历八月十五`), when the autumn moon is at its fullest and roundest (`又大又圆` yòu dà yòu yuán). In Chinese culture, roundness (`圆` yuán) symbolises **family reunion** (`团圆` tuányuán) — sharing a round mooncake means the family stays whole and united.",
      },
      body: `**Mid-Autumn Festival** — \`中秋节\` (Zhōngqiūjié) — takes place on **\`农历八月十五\`** (Nónglì Bāyuè shíwǔ, the 15th day of the 8th lunar month), usually in September or early October. Notice that days 11–30 do **not** use \`初\` — you say \`八月十五\`, never \`*八月初十五*\`.

The heart of Mid-Autumn is **\`团圆\`** (tuányuán — family reunion). Families gather outdoors or in parks such as Singapore's Gardens by the Bay or Chinese Garden to:
- **\`赏月\`** (shǎngyuè) — admire the bright full moon (\`月亮又大又圆\`). Notice the literary verb \`赏\` (appreciate/admire) is much higher-band than plain \`看月亮\`!
- **\`吃月饼\`** (chī yuèbǐng) — eat mooncakes (traditional lotus paste \`莲蓉\` liánróng, salted egg yolk \`蛋黄\` dànhuáng, or Singapore's famous snow-skin \`冰皮月饼\` bīngpí yuèbǐng) while drinking Chinese tea (\`喝茶\`).
- **\`提灯笼\`** (tí dēnglóng) — carry lanterns in the evening (verb \`提\` tí = hold/carry by a handle!).

Mid-Autumn is also tied to the beloved legend of **\`嫦娥奔月\`** (Cháng'é bēn yuè — Chang'e flying to the moon):
1. Long ago, ten suns scorched the earth. The brave archer **\`后羿\`** (Hòu Yì) shot down nine suns to save humanity.
2. Rewarded with an elixir of immortality, he gave it to his wife **\`嫦娥\`** (Cháng'é) for safekeeping.
3. To stop a greedy thief from stealing it, Chang'e drank the elixir and floated up to the Moon Palace, accompanied by the **\`玉兔\`** (Yùtù — Jade Rabbit).
4. Missing his wife, Hou Yi placed cakes and fruit under the full moon — inspiring the tradition of \`赏月\` and \`吃月饼\`.`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mid-Autumn Festival core circle linking full moon, mooncakes, lanterns, family reunion and the Chang'e legend">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1" />
  <text x="280" y="26" text-anchor="middle" font-size="15" font-weight="800" fill="var(--brand)">中秋节 (Zhōngqiūjié) · 农历八月十五</text>
  <circle cx="280" cy="138" r="56" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2" />
  <text x="280" y="130" text-anchor="middle" font-size="18" font-weight="800" fill="var(--brand)">团圆</text>
  <text x="280" y="150" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">tuányuán</text>
  <text x="280" y="167" text-anchor="middle" font-size="11" fill="var(--ink-2)">Family Reunion</text>
  <line x1="224" y1="114" x2="178" y2="92" stroke="var(--line)" stroke-width="2" />
  <line x1="336" y1="114" x2="382" y2="92" stroke="var(--line)" stroke-width="2" />
  <line x1="224" y1="164" x2="178" y2="188" stroke="var(--line)" stroke-width="2" />
  <line x1="336" y1="164" x2="382" y2="188" stroke="var(--line)" stroke-width="2" />
  <rect x="24" y="54" width="154" height="62" rx="10" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="101" y="76" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">赏月 (shǎngyuè)</text>
  <text x="101" y="95" text-anchor="middle" font-size="11" fill="var(--ink-2)">Admire the full moon</text>
  <text x="101" y="110" text-anchor="middle" font-size="11" fill="var(--brand)">月亮又大又圆</text>
  <rect x="382" y="54" width="154" height="62" rx="10" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="459" y="76" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">吃月饼 (yuèbǐng)</text>
  <text x="459" y="95" text-anchor="middle" font-size="11" fill="var(--ink-2)">Share round mooncakes</text>
  <text x="459" y="110" text-anchor="middle" font-size="11" fill="var(--brand)">配中国茶 (pèi chá)</text>
  <rect x="24" y="162" width="154" height="62" rx="10" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="101" y="184" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">提灯笼 (tí dēnglóng)</text>
  <text x="101" y="203" text-anchor="middle" font-size="11" fill="var(--ink-2)">Carry glowing lanterns</text>
  <text x="101" y="218" text-anchor="middle" font-size="11" fill="var(--brand)">挂在花园里</text>
  <rect x="382" y="162" width="154" height="62" rx="10" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="459" y="184" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">嫦娥 &amp; 玉兔</text>
  <text x="459" y="203" text-anchor="middle" font-size="11" fill="var(--ink-2)">Cháng'é &amp; Jade Rabbit</text>
  <text x="459" y="218" text-anchor="middle" font-size="11" fill="var(--brand)">后羿射日 (Hòu Yì)</text>
</svg>`,
      diagramCaption:
        "Everything at Mid-Autumn Festival orbits around 团圆 (tuányuán, reunion) — the round moon, round mooncakes, lanterns and the Chang'e legend.",
      whyItWorks:
        "Connecting the round shape (`圆`) to the abstract cultural concept (`团圆` reunion) lets you answer 'why?' questions in IGCSE writing — turning a basic list of activities into a Band A cultural explanation.",
      keyPoints: [
        "Mid-Autumn Festival is on **农历八月十五** (Nónglì Bāyuè shíwǔ — no `初` for days above 10!).",
        "High-band verbs: **赏月** (shǎngyuè — admire the moon), **吃月饼** (chī yuèbǐng), **提灯笼** (tí dēnglóng — carry a lantern by its handle).",
        "Core theme: **团圆** (tuányuán — family reunion), symbolised by the round full moon (`又大又圆`) and round mooncakes.",
        "Key legend figures: **嫦娥** (Cháng'é), archer **后羿** (Hòu Yì), and the Jade Rabbit **玉兔** (Yùtù).",
      ],
      strategies: [
        "Upgrade `看月亮` to `赏月` (shǎngyuè) in essays to show authentic cultural vocabulary.",
        "Remember `又…又…` to describe the moon (`月亮又大又圆`) or mooncakes (`月饼又香又甜`).",
      ],
      thinkDeeper:
        "Why do people in Singapore often give boxes of mooncakes (`送月饼`) to relatives, neighbours and business partners even weeks *before* 农历八月十五?",
      workedExamples: [
        {
          title: "Explaining Mid-Autumn symbolism with 象征",
          problem:
            "Write two linked sentences saying when Mid-Autumn Festival is and what mooncakes symbolise.",
          steps: [
            "State the lunar date: `中秋节在农历八月十五。` (Zhōngqiūjié zài Nónglì Bāyuè shíwǔ.)",
            "Describe the custom and symbolism with `象征` (xiàngzhēng — symbolise): `那天晚上，全家人一边赏月，一边吃月饼，因为圆圆的月饼象征团圆。`",
          ],
          answer:
            "中秋节在农历八月十五。那天晚上，全家人一边赏月，一边吃月饼，因为圆圆的月饼象征团圆。",
          yourTurn: {
            question:
              "What is the 2-character Chinese word meaning 'family reunion' at Mid-Autumn Festival? (Type Simplified Hanzi or tone-marked Pinyin.)",
            answer: {
              type: "text",
              accept: ["团圆", "tuányuán"],
              display: "团圆 (tuányuán)",
            },
            solution:
              "团圆 (tuányuán) means reunion — notice the second character 圆 (yuán, round), linking the round moon and mooncakes to family togetherness.",
          },
        },
        {
          title: "Choosing the right verb for lanterns",
          problem:
            "Compare `提灯笼` (tí dēnglóng), `挂灯笼` (guà dēnglóng), and `看花灯` (kàn huādēng). Which verb fits children walking through a park at Mid-Autumn?",
          steps: [
            "`提` (tí) means to carry something hanging from your hand — perfect for walking with a lantern stick.",
            "`挂` (guà) means to hang up (e.g., hanging red lanterns at the doorway).",
            "`看花灯` means viewing large illuminated lantern displays.",
          ],
          answer: "提灯笼 (tí dēnglóng) — children carrying lanterns as they walk through the park.",
        },
      ],
    },
    {
      id: "dragon-boat-lantern",
      heading: "Dragon Boat Festival (端午节) & Lantern Festival (元宵节)",
      discovery: {
        problem:
          "Both **Dragon Boat Festival** (`端午节`) and **Lantern Festival** (`元宵节`) feature glutinous rice foods (`粽子` zòngzi and `汤圆` tāngyuán). One is wrapped in bamboo leaves in a triangular pyramid; the other is rolled into round white balls in sweet soup. How do their shapes reveal two completely different cultural stories?",
        idea:
          "Triangular bamboo-wrapped `粽子` were thrown into the Miluo River (`汨罗江`) to stop fish from eating the body of the patriotic poet `屈原` (Qū Yuán) — so they are tied tightly with string to sink. Round `汤圆` (tāngyuán) sound like `团圆` (tuányuán — reunion), celebrating the first full moon of the new year on `正月十五`!",
      },
      body: `These two festivals are frequently tested together in Year 9 and IGCSE exams because students easily mix up their lunar dates, foods, and verbs. Keep them crystal clear side by side:

| Feature | Dragon Boat Festival (\`端午节\` Duānwǔjié) | Lantern Festival (\`元宵节\` Yuánxiāojié) |
| --- | --- | --- |
| **Lunar Date** | \`农历五月初五\` (5th day, 5th lunar month) | \`农历正月十五\` (15th day, 1st lunar month) |
| **Season / Place in Year** | Late May / June (early summer) | 15 days after Spring Festival (marks its grand finale!) |
| **Traditional Food** | \`粽子\` (zòngzi — sticky rice dumplings in bamboo leaves) | \`汤圆\` (tāngyuán, south/SG) / \`元宵\` (yuánxiāo, north) |
| **Key Activities** | \`划龙舟\` (huá lóngzhōu — row dragon boats), \`挂艾草\` | \`看花灯\` (kàn huādēng — view lantern displays), \`猜灯谜\` (cāi dēngmí — guess lantern riddles) |
| **Origin / Symbolism** | Commemorating (\`纪念\` jìniàn) the patriotic poet \`屈原\` (Qū Yuán) | First full moon of the lunar year; \`汤圆\` = \`团圆\` (reunion) |

Watch the **exact verbs** for both festivals:
- **\`划龙舟\`** (huá lóngzhōu) — \`划\` (huá, to row/paddle — notice it has the knife radical \`刂\`, NOT \`画\` huà to draw!).
- **\`猜灯谜\`** (cāi dēngmí) — \`猜\` (cāi, to guess) + \`灯谜\` (riddles hung on lanterns).
- **\`纪念屈原\`** (jìniàn Qū Yuán) — \`纪念\` (jìniàn, to commemorate/remember) is a gold-standard IGCSE word for explaining *why* a festival exists!`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side-by-side comparison of Dragon Boat Festival (5/5) and Lantern Festival (1/15)">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1" />
  <text x="280" y="25" text-anchor="middle" font-size="15" font-weight="800" fill="var(--brand)">端午节 (Duānwǔjié) vs 元宵节 (Yuánxiāojié)</text>
  <rect x="22" y="42" width="248" height="192" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5" />
  <text x="146" y="65" text-anchor="middle" font-size="14" font-weight="800" fill="var(--good)">端午节 · Dragon Boat</text>
  <text x="146" y="85" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">农历五月初五 (5th month, 5th day)</text>
  <line x1="42" y1="96" x2="250" y2="96" stroke="var(--line)" />
  <text x="38" y="118" font-size="12" fill="var(--ink)">Food: 吃粽子 (chī zòngzi)</text>
  <text x="38" y="140" font-size="12" fill="var(--ink)">Sport: 划龙舟 (huá lóngzhōu)</text>
  <text x="38" y="162" font-size="12" fill="var(--ink)">Poet: 纪念屈原 (jìniàn Qū Yuán)</text>
  <text x="38" y="184" font-size="12" fill="var(--ink)">Verb tip: 划 (huá) = row, NOT 画!</text>
  <text x="38" y="212" font-size="11" fill="var(--ink-2)">SG: Marina Bay / Bedok Reservoir races</text>
  <rect x="290" y="42" width="248" height="192" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5" />
  <text x="414" y="65" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">元宵节 · Lantern Festival</text>
  <text x="414" y="85" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">农历正月十五 (1st month, 15th day)</text>
  <line x1="310" y1="96" x2="518" y2="96" stroke="var(--line)" />
  <text x="306" y="118" font-size="12" fill="var(--ink)">Food: 吃汤圆 / 元宵 (tāngyuán)</text>
  <text x="306" y="140" font-size="12" fill="var(--ink)">Sight: 看花灯 (kàn huādēng)</text>
  <text x="306" y="162" font-size="12" fill="var(--ink)">Game: 猜灯谜 (cāi dēngmí)</text>
  <text x="306" y="184" font-size="12" fill="var(--ink)">Meaning: 汤圆 → 团圆 (reunion)</text>
  <text x="306" y="212" font-size="11" fill="var(--ink-2)">Closes the 15-day Spring Festival!</text>
</svg>`,
      diagramCaption:
        "Keep 端午节 (5/5, 粽子, 划龙舟, 屈原) and 元宵节 (1/15, 汤圆, 看花灯, 猜灯谜) cleanly separated.",
      whyItWorks:
        "Lunar dates follow memorable patterns: Dragon Boat is double-five (`五月初五`), while both Lantern Festival (`正月十五`) and Mid-Autumn (`八月十五`) fall on the 15th (`十五`) — the night of the full moon!",
      keyPoints: [
        "**端午节** (Duānwǔjié) is on **农历五月初五**; people **划龙舟** (row dragon boats) and **吃粽子** (eat rice dumplings) to **纪念屈原** (commemorate Qu Yuan).",
        "**元宵节** (Yuánxiāojié) is on **农历正月十五** — the 15th and final day of Chinese New Year celebrations.",
        "At Lantern Festival people **看花灯** (admire festive lanterns), **猜灯谜** (solve lantern riddles), and **吃汤圆** (eat sweet glutinous rice balls).",
        "Watch the character trap: `划龙舟` (huá — row) vs `画画儿` (huà — draw), and `汤圆` (Lantern Festival) vs `月饼` (Mid-Autumn Festival).",
      ],
      strategies: [
        "Anchor every festival to its date pattern: 1/1 (春节), 1/15 (元宵节), 5/5 (端午节), 8/15 (中秋节).",
        "Note that BOTH full-moon festivals (1/15 and 8/15) involve lanterns and round foods symbolising `团圆`!",
      ],
      thinkDeeper:
        "If someone tells you 'We admired lanterns and ate round sweet rice balls on the 15th day of the 1st lunar month', why is it **元宵节** and NOT **中秋节**?",
      workedExamples: [
        {
          title: "Explaining why we celebrate Dragon Boat Festival",
          problem:
            "Answer in Simplified Chinese: '中国人为什么要庆祝端午节？' (Why do Chinese people celebrate Dragon Boat Festival?)",
          steps: [
            "Open with `为了` (wèile — in order to) + `纪念` (jìniàn — commemorate) + `屈原` (Qū Yuán).",
            "Add the two signature customs: `所以人们在农历五月初五划龙舟、吃粽子。`",
          ],
          answer:
            "为了纪念爱国诗人屈原，所以人们在农历五月初五划龙舟、吃粽子。(Wèile jìniàn àiguó shīrén Qū Yuán, suǒyǐ rénmen zài Nónglì Wǔyuè chūwǔ huá lóngzhōu, chī zòngzi.)",
          yourTurn: {
            question:
              "What is the Chinese name for the triangular bamboo-wrapped sticky rice dumplings eaten at Dragon Boat Festival? (Type Simplified Hanzi or tone-marked Pinyin.)",
            answer: {
              type: "text",
              accept: ["粽子", "zòngzi"],
              display: "粽子 (zòngzi)",
            },
            solution:
              "粽子 (zòngzi) — sticky rice dumplings wrapped in bamboo or reed leaves, eaten on 农历五月初五.",
          },
        },
        {
          title: "Spotting the Lunar 15th pair",
          problem:
            "Compare what happens on `农历正月十五` and `农历八月十五` in one neat Chinese sentence.",
          steps: [
            "Link the two dates with their signature foods/customs.",
            "`农历正月十五是元宵节，人们看花灯、吃汤圆；农历八月十五是中秋节，人们赏月、吃月饼。`",
          ],
          answer:
            "农历正月十五是元宵节，人们看花灯、吃汤圆；农历八月十五是中秋节，人们赏月、吃月饼。",
        },
      ],
    },
    {
      id: "festival-comparisons-writing",
      heading: "Describing How You Celebrate Festivals in Singapore",
      discovery: {
        problem:
          "Compare two Year 9 paragraphs about Spring Festival in Singapore:\n- **Draft A**: `我喜欢春节。春节很好玩。我吃饺子。`\n- **Draft B**: `去年春节，我和家人一起去牛车水看花灯，还吃了又香又甜的年糕。我觉得春节比中秋节更热闹，因为它象征好运和新的开始。明年我打算去外婆家拜年！`\nWhat four IGCSE ingredients turn Draft A into Draft B?",
        idea:
          "Draft B uses: (1) **specific past narration** with `去年` + `了` (`去了`, `吃了`), (2) **Singapore cultural detail** (`牛车水` Chinatown), (3) **comparison + symbolism** (`比…更热闹` + `因为…象征好运`), and (4) **a future plan** (`明年我打算…`). That hits all top-band IGCSE 0547 criteria!",
      },
      body: `In Year 9 assessments and IGCSE 0547 essays, you rarely just list facts about a festival — you narrate **how you and your family celebrated** (past), **what you think it means** (present opinion & comparison), and **what you plan to do next year** (future).

### 1. Three Time Frames for Festival Essays
- **Past (specific event — \`了\` le)**: \`去年春节，我和家人一起去牛车水看花灯了。\` (Last Spring Festival, my family and I went to Chinatown to see the lanterns.)
- **Past experience (ever done — \`过\` guo)**: \`我以前在滨海湾看过龙舟比赛，非常精彩！\` (I have watched dragon boat races at Marina Bay before — super exciting!)
- **Habit / Present**: \`每年中秋节，我们一家人都在公园里赏月、提灯笼。\` (Every Mid-Autumn, our whole family admires the moon and carries lanterns in the park.)
- **Future plan (\`打算\` dǎsuàn / \`想\` xiǎng)**: \`明年春节，我打算帮妈妈贴春联，还要学包饺子。\` (Next Spring Festival, I plan to help Mum paste couplets and also learn to wrap dumplings.)

### 2. Explaining Cultural Symbolism & Comparing Festivals
- **Symbolism**: \`…象征…\` (xiàngzhēng — symbolises):
  - \`红色象征好运和快乐。\` (Red symbolises good luck and happiness.)
  - \`圆圆的月饼象征全家团圆。\` (Round mooncakes symbolise whole-family reunion.)
- **Comparing festivals with \`比\` (bǐ) and \`没有\` (méiyǒu)**:
  - \`我觉得春节比端午节更热闹。\` (I think Spring Festival is livelier than Dragon Boat Festival. — Never put \`很\` after \`比\`!)
  - \`端午节没有春节那么长，但是也很有意思。\` (Dragon Boat Festival isn't as long as Spring Festival, but it is also very interesting.)
- **Singapore cultural touchstones**: \`牛车水\` (Niúchēshuǐ — Chinatown), \`滨海湾花园\` (Bīnhǎiwān Huāyuán — Gardens by the Bay), \`捞鱼生\` (lāo yúshēng — tossing yusheng), \`公共假期\` (gōnggòng jiàqī — public holiday).`,
      diagram: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-step blueprint for writing a high-band IGCSE festival paragraph in Singapore">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1" />
  <text x="280" y="25" text-anchor="middle" font-size="15" font-weight="800" fill="var(--brand)">High-Band IGCSE Festival Writing Blueprint</text>
  <rect x="20" y="44" width="122" height="148" rx="10" fill="var(--brand-soft)" stroke="var(--brand)" />
  <text x="81" y="66" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">1. Date &amp; Hook</text>
  <text x="81" y="90" text-anchor="middle" font-size="11" fill="var(--ink)">我最喜欢…</text>
  <text x="81" y="110" text-anchor="middle" font-size="11" fill="var(--ink)">在农历…</text>
  <text x="81" y="132" text-anchor="middle" font-size="11" fill="var(--ink-2)">Name festival</text>
  <text x="81" y="149" text-anchor="middle" font-size="11" fill="var(--ink-2)">&amp; lunar date</text>
  <text x="81" y="176" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">Present</text>
  <rect x="153" y="44" width="122" height="148" rx="10" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="214" y="66" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">2. Past Story</text>
  <text x="214" y="90" text-anchor="middle" font-size="11" fill="var(--ink)">去年…了</text>
  <text x="214" y="110" text-anchor="middle" font-size="11" fill="var(--ink)">以前…过</text>
  <text x="214" y="132" text-anchor="middle" font-size="11" fill="var(--ink-2)">去牛车水看花灯</text>
  <text x="214" y="149" text-anchor="middle" font-size="11" fill="var(--ink-2)">吃了月饼/粽子</text>
  <text x="214" y="176" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Past (了 / 过)</text>
  <rect x="286" y="44" width="122" height="148" rx="10" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="347" y="66" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">3. Compare</text>
  <text x="347" y="90" text-anchor="middle" font-size="11" fill="var(--ink)">A 比 B 更热闹</text>
  <text x="347" y="110" text-anchor="middle" font-size="11" fill="var(--ink)">象征好运/团圆</text>
  <text x="347" y="132" text-anchor="middle" font-size="11" fill="var(--ink-2)">虽然…但是…</text>
  <text x="347" y="149" text-anchor="middle" font-size="11" fill="var(--ink-2)">因为…所以…</text>
  <text x="347" y="176" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">Opinion + Reason</text>
  <rect x="419" y="44" width="122" height="148" rx="10" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="480" y="66" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">4. Future Plan</text>
  <text x="480" y="90" text-anchor="middle" font-size="11" fill="var(--ink)">明年我打算…</text>
  <text x="480" y="110" text-anchor="middle" font-size="11" fill="var(--ink)">希望跟家人…</text>
  <text x="480" y="132" text-anchor="middle" font-size="11" fill="var(--ink-2)">学包饺子</text>
  <text x="480" y="149" text-anchor="middle" font-size="11" fill="var(--ink-2)">去拜年/赏月</text>
  <text x="480" y="176" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Future (打算)</text>
  <rect x="20" y="204" width="521" height="32" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
  <text x="280" y="224" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">STPVO Reminder: 去年春节 (T) + 我和家人 (S) + 在牛车水 (P) + 看了花灯 (V+O)!</text>
</svg>`,
      diagramCaption:
        "Combine a lunar date hook, a past celebration (了/过), a cultural comparison (比 + 象征), and a future plan (打算) to hit top marks.",
      whyItWorks:
        "IGCSE 0547 writing rubrics reward three time frames, justified opinions, and cultural awareness. Using `去牛车水` + `了/过` + `象征` + `比…更…` + `打算` guarantees you satisfy every band descriptor in under 100 characters.",
      keyPoints: [
        "Use **了** (le) for one specific past festival (`去年春节我吃了年糕`) and **过** (guo) for life experience (`我看过舞狮`).",
        "Use **象征** (xiàngzhēng — symbolises) to explain cultural meaning: `月饼象征团圆`, `红色象征好运`.",
        "Compare festivals with **A 比 B 更 + adj** (`春节比中秋节更热闹`) — never write `*比…很热闹*`!",
        "Place Singapore venues in the **Place** slot *before* the verb: `我们在牛车水看花灯` (NOT `*我们看花灯在牛车水*`).",
      ],
      strategies: [
        "Plan every 80–100 character festival paragraph with 4 checkpoints: Date → Last year (`去年…了`) → Meaning & comparison (`因为…象征…`) → Next year (`明年打算…`).",
        "Keep `过` and `了` strictly distinct: `吃过粽子` = have ever tried zongzi; `吃了两个粽子` = ate two zongzi on that specific occasion.",
      ],
      thinkDeeper:
        "Why is `我去年在牛车水看过了花灯` slightly awkward compared with `我去年在牛车水看了花灯` or `我以前在牛车水看过花灯`?",
      workedExamples: [
        {
          title: "Upgrading a festival sentence with STPVO + 了",
          problem:
            "Fix the word order and add a past marker: 'Last Mid-Autumn Festival I admired the moon in Gardens by the Bay with my family.'",
          steps: [
            "Time first: `去年中秋节` (Qùnián Zhōngqiūjié).",
            "Subject + companion: `我和家人` (wǒ hé jiārén).",
            "Place before verb: `在滨海湾花园` (zài Bīnhǎiwān Huāyuán).",
            "Verb + 了 + Object (or sentence-final 了): `赏了月，还吃了月饼。` / `一起赏月、吃月饼了。`",
          ],
          answer:
            "去年中秋节，我和家人在滨海湾花园一起赏月、吃月饼了。(Qùnián Zhōngqiūjié, wǒ hé jiārén zài Bīnhǎiwān Huāyuán yìqǐ shǎngyuè, chī yuèbǐng le.)",
          yourTurn: {
            question:
              "What is the 2-character Chinese verb meaning 'to symbolise / represent' (as in 'Red symbolises good luck')? (Type Simplified Hanzi or tone-marked Pinyin.)",
            answer: {
              type: "text",
              accept: ["象征", "xiàngzhēng"],
              display: "象征 (xiàngzhēng)",
            },
            solution:
              "象征 (xiàngzhēng) means 'to symbolise', e.g. 红色象征好运 (Hóngsè xiàngzhēng hǎoyùn).",
          },
        },
        {
          title: "Comparing two festivals without the 很 trap",
          problem:
            "Correct this common Year 9 mistake: `*我觉得春节比端午节很热闹。*`",
          steps: [
            "Spot the illegal adverb `很` right after `比`.",
            "Replace `很` with `更` (gèng — even more) or remove `很` and add `得多` (de duō — much more) after the adjective.",
            "Corrected sentence: `我觉得春节比端午节更热闹。` or `我觉得春节比端午节热闹得多。`",
          ],
          answer: "我觉得春节比端午节更热闹。(Wǒ juéde Chūnjié bǐ Duānwǔjié gèng rènao.)",
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "春节 (Chūnjié)", back: "Spring Festival / Chinese New Year — 农历正月初一 (1st day, 1st lunar month)." },
      { front: "除夕 (chúxī)", back: "Chinese New Year's Eve — the night families eat 年夜饭 (reunion dinner)." },
      { front: "年夜饭 (niányèfàn)", back: "New Year's Eve reunion dinner — often features 饺子, 年糕 and 鱼." },
      { front: "贴春联 (tiē chūnlián)", back: "To paste Spring Festival red couplets on the doorway (verb: 贴)." },
      { front: "发红包 / 压岁钱 (fā hóngbāo / yāsuìqián)", back: "To give out red packets / lucky money from elders to children." },
      { front: "舞龙舞狮 (wǔlóng wǔshī)", back: "Dragon dance and lion dance performed for prosperity and energy." },
      { front: "恭喜发财 (Gōngxǐ fācái)", back: "Wishing you prosperity! Classic Spring Festival greeting." },
      { front: "中秋节 (Zhōngqiūjié)", back: "Mid-Autumn Festival — 农历八月十五 (15th day, 8th lunar month)." },
      { front: "赏月 (shǎngyuè)", back: "To admire the full moon (higher-band verb than 看月亮)." },
      { front: "提灯笼 (tí dēnglóng)", back: "To carry a lantern by its handle during Mid-Autumn evening walks." },
      { front: "团圆 (tuányuán)", back: "Family reunion — symbolised by the round moon, 月饼 and 汤圆." },
      { front: "端午节 (Duānwǔjié)", back: "Dragon Boat Festival — 农历五月初五 (5th day, 5th lunar month)." },
      { front: "划龙舟 (huá lóngzhōu)", back: "To row dragon boats (verb: 划 huá, NOT 画 huà to draw)." },
      { front: "吃粽子 (chī zòngzi)", back: "To eat sticky rice dumplings wrapped in bamboo leaves to commemorate 屈原." },
      { front: "元宵节 (Yuánxiāojié)", back: "Lantern Festival — 农历正月十五 (15th day, 1st lunar month), ending CNY." },
      { front: "猜灯谜 (cāi dēngmí) & 吃汤圆 (chī tāngyuán)", back: "To solve lantern riddles and eat sweet glutinous rice balls at 元宵节." },
    ],
    mustKnow: [
      "State the exact lunar date of all four festivals: 春节 (正月初一), 元宵节 (正月十五), 端午节 (五月初五), 中秋节 (八月十五).",
      "Know when to use 初 (chū) in lunar dates (days 1–10 only: 初一, 初五; NEVER *初十五*).",
      "Match every festival activity to its exact verb: 贴春联, 放烟花, 发红包, 舞龙舞狮, 赏月, 提灯笼, 划龙舟, 猜灯谜.",
      "Match every traditional food to its festival: 饺子/年糕 (春节), 月饼 (中秋节), 粽子 (端午节), 汤圆/元宵 (元宵节).",
      "Explain the legend behind Mid-Autumn (嫦娥, 后羿, 玉兔) and Dragon Boat (纪念爱国诗人屈原).",
      "Explain auspicious homophones using 象征 (xiàngzhēng): 鱼/余 (abundance), 年糕/年高 (rising higher), 圆/团圆 (reunion), 福倒/福到.",
      "Narrate a past Singapore festival experience accurately with 了 (specific occasion) and 过 (ever experienced), placing 牛车水/公园 BEFORE the verb.",
      "Compare two festivals using A 比 B 更 + adj and A 没有 B (那么) + adj without adding 很 after 比.",
      "Use 新年快乐, 恭喜发财, 中秋节快乐 and 身体健康 appropriately in greetings.",
      "Write an 80–100 character paragraph combining past (去年…了), opinion/symbolism (因为…象征…), and future (明年打算…).",
    ],
    misconceptions: [
      {
        wrong: "Never write ❌: 中秋节在农历八月初十五。",
        right: "Write instead ✅: 中秋节在农历八月十五。(`初` chū is ONLY used for lunar days 1–10, like 初一 or 初五.)",
      },
      {
        wrong: "Never write ❌: 端午节人们画龙舟，吃月饼。",
        right: "Write instead ✅: 端午节人们划龙舟，吃粽子。(`划` huá = row; `画` huà = draw. Mooncakes belong to 中秋节, not 端午节!)",
      },
      {
        wrong: "Never write ❌: 我们看花灯在牛车水去年春节。",
        right: "Write instead ✅: 去年春节，我们在牛车水看花灯。(Follow STPVO: Time and Place always come BEFORE the verb!)",
      },
      {
        wrong: "Never write ❌: 我觉得春节比中秋节很热闹。",
        right: "Write instead ✅: 我觉得春节比中秋节更热闹。(NEVER use `很` directly after `比`; use `更` or `得多`.)",
      },
      {
        wrong: "Never write ❌: 元宵节和中秋节都是吃月饼的节日。",
        right: "Write instead ✅: 元宵节吃汤圆（或元宵），中秋节吃月饼。(Both fall on a lunar 15th full moon, but their foods differ!)",
      },
      {
        wrong: "Never write ❌: 春节的时候，我给爷爷奶奶发红包。",
        right: "Write instead ✅: 春节的时候，爷爷奶奶给我发红包。(Elders/married adults give red packets to children, not vice versa.)",
      },
    ],
    examMistakes: [
      "Mixing up the four lunar dates — especially confusing 正月十五 (元宵节) with 八月十五 (中秋节) or 正月初一 (春节).",
      "Writing Traditional variants instead of standard Simplified characters (`节`, `龙`, `灯`, `圆`, `庆`, `传`).",
      "Confusing `划` (huá — to row) with `画` (huà — to draw) in `划龙舟`.",
      "Translating 'admire the moon' or 'paste couplets' with generic English verbs (`*做春联*`, `*玩灯笼*`) instead of `贴春联`, `赏月`, `提灯笼`.",
      "Putting the place after the verb (`*吃年夜饭在爷爷家*`) instead of STPVO (`在爷爷家吃年夜饭`).",
      "Forgetting to explain *why* a festival is meaningful — adding one `象征` (symbolises) or `纪念` (commemorates) clause immediately boosts IGCSE content marks.",
      "Writing `了` and `没` together (`*去年我没吃了粽子*`) — always drop `了` when negating with `没`: `去年我没吃粽子`.",
    ],
    mnemonics: [
      {
        topic: "The Four Lunar Dates (1-1, 1-15, 5-5, 8-15)",
        device: "1-1 Starts, 1-15 Glows, 5-5 Rows, 8-15 Rounds!",
        explanation:
          "正月初一 (1/1) starts 春节; 正月十五 (1/15) glows with 元宵节 lanterns; 五月初五 (5/5) rows 端午节 dragon boats; 八月十五 (8/15) rounds out 中秋节 mooncakes.",
      },
      {
        topic: "Auspicious Homophones (谐音 xiéyīn)",
        device: "Fish = Surplus (鱼/余), Cake = Climb (糕/高), Inverted = Arrived (倒/到), Round = Reunited (圆/团圆)",
        explanation:
          "Every major Chinese festival food or decoration hides a sound-alike pun expressing wishes for abundance, progress, luck, or family unity.",
      },
      {
        topic: "Exact Festival Verbs",
        device: "Tiē couplets, Fàng fireworks, Shǎng moon, Tí lanterns, Huá boats, Cāi riddles!",
        explanation:
          "Memorise the six action verbs: 贴春联, 放烟花, 赏月, 提灯笼, 划龙舟, 猜灯谜.",
      },
      {
        topic: "初 (chū) Rule in Lunar Dates",
        device: "1 to 10 gets 初; 11 to 30 says No!",
        explanation:
          "Say 初一 (1st), 初二 (2nd), 初五 (5th), 初十 (10th), then drop 初 for 十五 (15th) — so 正月十五 and 八月十五.",
      },
    ],
    realWorld: [
      {
        title: "Chinatown (牛车水) & River Hongbao in Singapore",
        detail:
          "Every January/February, Singapore's Chinatown lights up with giant zodiac lanterns (`花灯`), festive street markets selling `年糕` and `春联`, and fireworks at River Hongbao (`春到河畔`).",
        emoji: "🏮",
      },
      {
        title: "Tossing Yusheng (捞鱼生) at Singapore Reunion Dinners",
        detail:
          "A uniquely Southeast Asian Chinese New Year tradition! Families lift shredded raw fish and colourful vegetables high with chopsticks while shouting blessings like `年年有余` and `步步高升`.",
        emoji: "🥢",
      },
      {
        title: "Mid-Autumn at Gardens by the Bay (滨海湾花园)",
        detail:
          "Every September, huge illuminated lantern sets celebrate `嫦娥` and `玉兔`, while families share baked and snow-skin (`冰皮`) mooncakes beneath the Supertrees.",
        emoji: "🌕",
      },
      {
        title: "Singapore Dragon Boat Regattas (新加坡龙舟赛)",
        detail:
          "Teams race colourful dragon boats (`划龙舟`) to pounding drums at Marina Bay and Bedok Reservoir around `端午节`, keeping the 2,000-year-old tribute to `屈原` alive.",
        emoji: "🐉",
      },
      {
        title: "School & Community Cultural Exchanges",
        detail:
          "Tanglin students celebrate Lunar New Year with lion dances (`舞狮`), calligraphy workshops (`写春联`), and exchanging pairs of mandarin oranges (`大吉大利` — big luck, big profit!).",
        emoji: "🍊",
      },
    ],
    videos: [
      {
        title: "Chinese New Year (春节) Traditions & Vocabulary in Mandarin",
        channel: "YouTube Mandarin Search",
        url: "https://www.youtube.com/results?search_query=Chinese+New+Year+Chunjie+Mandarin+vocabulary+IGCSE",
      },
      {
        title: "Mid-Autumn Festival (中秋节) Story of Chang'e in Mandarin",
        channel: "YouTube Mandarin Search",
        url: "https://www.youtube.com/results?search_query=Mid+Autumn+Festival+Zhongqiujie+Mandarin+Chinese+lesson",
      },
      {
        title: "Dragon Boat Festival (端午节) & Qu Yuan Explained in Chinese",
        channel: "YouTube Mandarin Search",
        url: "https://www.youtube.com/results?search_query=Dragon+Boat+Festival+Duanwujie+Qu+Yuan+Mandarin+vocabulary",
      },
      {
        title: "Lantern Festival (元宵节) Customs, Tangyuan & Riddles",
        channel: "YouTube Mandarin Search",
        url: "https://www.youtube.com/results?search_query=Lantern+Festival+Yuanxiaojie+Mandarin+Chinese+customs",
      },
    ],
    formulas: [
      {
        name: "Spring Festival Date",
        formula: "春节在农历正月初一 (Chūnjié zài Nónglì Zhēngyuè chūyī)",
        note: "1st day of the 1st lunar month; Eve = 除夕 (chúxī).",
      },
      {
        name: "Lantern Festival Date",
        formula: "元宵节在农历正月十五 (Yuánxiāojié zài Nónglì Zhēngyuè shíwǔ)",
        note: "15th day of the 1st lunar month — closes CNY.",
      },
      {
        name: "Dragon Boat Festival Date",
        formula: "端午节在农历五月初五 (Duānwǔjié zài Nónglì Wǔyuè chūwǔ)",
        note: "5th day of the 5th lunar month — commemorates 屈原.",
      },
      {
        name: "Mid-Autumn Festival Date",
        formula: "中秋节在农历八月十五 (Zhōngqiūjié zài Nónglì Bāyuè shíwǔ)",
        note: "15th day of the 8th lunar month — full moon & 团圆.",
      },
      {
        name: "Expressing Symbolism",
        formula: "A 象征 B (A xiàngzhēng B)",
        note: "e.g. 红色象征好运 (Red symbolises good luck); 月饼象征团圆.",
      },
      {
        name: "Expressing Commemoration",
        formula: "为了纪念 + Person (wèile jìniàn …)",
        note: "e.g. 为了纪念屈原，人们在端午节划龙舟、吃粽子。",
      },
      {
        name: "Past Specific Celebration",
        formula: "去年 + Festival，Subject + 在 Place + Verb + 了 + Object",
        note: "e.g. 去年春节，我在外婆家吃了年夜饭。",
      },
      {
        name: "Past Cultural Experience",
        formula: "Subject + 以前 + Verb + 过 + Object",
        note: "e.g. 我以前吃过冰皮月饼，也看过舞狮。",
      },
      {
        name: "Festival Comparison (More than)",
        formula: "Festival A 比 Festival B 更 + Adjective",
        note: "e.g. 春节比中秋节更热闹。(Never use 很 after 比!)",
      },
      {
        name: "Festival Comparison (Not as… as)",
        formula: "Festival A 没有 Festival B (那么) + Adjective",
        note: "e.g. 端午节没有春节那么热闹，但是很有意思。",
      },
      {
        name: "Two Actions Simultaneously",
        formula: "一边 + Action 1，一边 + Action 2",
        note: "e.g. 全家人一边赏月，一边吃月饼。",
      },
      {
        name: "Future Festival Plan",
        formula: "明年 + Festival，Subject + 打算 + Verb + Object",
        note: "e.g. 明年春节，我打算跟朋友去牛车水看花灯。",
      },
    ],
  },
};
