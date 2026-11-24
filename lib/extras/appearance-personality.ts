import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook: "Why does Mandarin use **穿 (chuān)** for your trainers yet **戴 (dài)** for your glasses — and why did one famous Chinese writer literally invent the word **幽默 (yōumò — humorous)** in 1924?",
  didYouKnow: [
    "The personality word **幽默 (yōumò — humorous)** is one of China's cleverest sound-and-meaning translations: in 1924, author Lin Yutang matched the English pronunciation *humour* using **幽** (subtle/quiet) + **默** (silent/witty)!",
    "Look closely at **眼镜** (*yǎnjìng* — glasses) vs **眼睛** (*yǎnjing* — eyes): the radical **目** inside **睛** literally depicts a real human eye, whereas the metal radical **钅** inside **镜** refers to polished bronze mirrors and spectacle lenses!",
    "In Mandarin, **穿 (chuān)** means 'to pass through' — that is why clothes with sleeves or trouser legs (and shoes your feet slip into) take **穿**, while accessories resting on top of your head, nose, neck, or wrist take **戴 (dài)**.",
    "The single character **长** plays TWO starring roles in appearance descriptions: **cháng** (2nd tone = long, **长头发**) and **zhǎng** (3rd tone = to grow / be born with, **长着大眼睛**) — you can even hear both back-to-back in **长着长长的头发**!",
    "Chinese **比 (bǐ)** comes from an ancient oracle-bone drawing of **two people standing side by side** comparing their heights — literally a visual height-chart frozen into a character!",
  ],
  activities: [
    {
      title: "Classroom 'Guess Who?' (猜猜他是谁！)",
      emoji: "🕵️",
      materials: [
        "12–16 portrait cards or cartoon avatars with varied hair, glasses, hats, and outfits",
        "A partner sitting across from you",
        "Scoreboard for fewest yes/no questions",
      ],
      steps: [
        "Each player secretly picks one portrait card without showing their partner.",
        "Take turns asking Mandarin yes/no questions using exact verbs: **他留着短发吗？** / **她戴着眼镜吗？** / **他穿着蓝色外套吗？** / **她比照片左边的人高吗？**",
        "Any player who accidentally says ~~穿眼镜~~ or ~~是高~~ loses one bonus point — self-correct immediately to earn it back!",
        "Win the round by guessing your partner's character in 5 questions or fewer and giving a 2-sentence full portrait.",
      ],
      maths:
        "Playing 'Guess Who?' in Mandarin turns **穿 vs 戴**, **留着 vs 长着**, and **比** comparisons into binary information filters — forcing instant grammatical accuracy under real communicative pressure.",
    },
    {
      title: "Height-Line & Personality Venn Diagram",
      emoji: "📏",
      materials: [
        "A sheet of paper with two overlapping circles (Venn diagram)",
        "A ruler or tape measure (optional) and coloured pens",
      ],
      steps: [
        "Pick yourself (**我**) and one close friend or cousin (e.g. **表哥 / 好朋友**).",
        "In the **overlap** centre, write three equality sentences using **跟 / 和…一样** (**我们一样喜欢运动 / 我们一样高**).",
        "In the **left and right** zones, write two **比** sentences (with exact gaps like **高四厘米** or **得多**, zero **很**!) and rewrite one of them using **没有**.",
        "Add one balanced personality sentence using **虽然…，但是有点儿…** at the bottom of your poster.",
      ],
      maths:
        "Visualising **比 (>)**, **没有 (<)**, and **跟…一样 (=)** on a Venn diagram locks in the exact mathematical direction of every Mandarin comparison formula.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Eyes (眼睛) vs Glasses (眼镜) — Spot the Radical!",
      svg: `<svg viewBox="0 0 560 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Visual comparison of Chinese characters for eyes versus glasses">
  <rect x="4" y="4" width="552" height="197" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="30" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--brand)">Sound-Alike Alert: 眼睛 (Eyes) vs 眼镜 (Glasses)</text>
  <rect x="20" y="46" width="248" height="140" rx="10" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.5"/>
  <text x="144" y="84" text-anchor="middle" font-size="30" font-weight="700" fill="var(--ink)">眼睛</text>
  <text x="144" y="106" text-anchor="middle" font-size="13" font-weight="700" fill="var(--good)">yǎnjing · Eyes (neutral tone)</text>
  <text x="144" y="130" text-anchor="middle" font-size="11.5" fill="var(--ink)">Radical: 目 (mù = eye) in BOTH chars!</text>
  <text x="144" y="152" text-anchor="middle" font-size="11.5" fill="var(--ink)">Verb: 长着 (zhǎngzhe — born with)</text>
  <text x="144" y="172" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--good)">长着一双大眼睛</text>
  <rect x="292" y="46" width="248" height="140" rx="10" fill="var(--surface-2)" stroke="var(--brand)" stroke-width="1.5"/>
  <text x="416" y="84" text-anchor="middle" font-size="30" font-weight="700" fill="var(--ink)">眼镜</text>
  <text x="416" y="106" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">yǎnjìng · Glasses (4th tone!)</text>
  <text x="416" y="130" text-anchor="middle" font-size="11.5" fill="var(--ink)">Radical: 钅 (metal frames / mirror)</text>
  <text x="416" y="152" text-anchor="middle" font-size="11.5" fill="var(--ink)">Verb: 戴着 (dàizhe — accessory)</text>
  <text x="416" y="172" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--brand)">戴着一副黑框眼镜</text>
</svg>`,
      caption: "Check the second character's radical: 目 = real eyes (眼睛), 钅 = metal-framed glasses (眼镜).",
    },
    {
      title: "Direction Flip: A 比 B 高 ≡ B 没有 A 高",
      svg: `<svg viewBox="0 0 560 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scale showing equivalence between bi and meiyou comparisons in Chinese">
  <rect x="4" y="4" width="552" height="197" rx="14" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="30" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--brand)">Scale Equivalence: Flipping 比 ↔ 没有</text>
  <rect x="40" y="66" width="84" height="104" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.6"/>
  <text x="82" y="108" text-anchor="middle" font-size="14" font-weight="700" fill="var(--brand)">哥哥</text>
  <text x="82" y="128" text-anchor="middle" font-size="12" fill="var(--ink)">178 cm</text>
  <text x="82" y="150" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Taller (+6)</text>
  <rect x="148" y="92" width="84" height="78" rx="8" fill="var(--surface-2)" stroke="var(--good)" stroke-width="1.6"/>
  <text x="190" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--good)">我</text>
  <text x="190" y="146" text-anchor="middle" font-size="12" fill="var(--ink)">172 cm</text>
  <rect x="260" y="52" width="280" height="40" rx="8" fill="var(--surface-2)" stroke="var(--brand)"/>
  <text x="400" y="77" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">哥哥比我高六厘米 (哥哥 &gt; 我)</text>
  <rect x="260" y="102" width="280" height="40" rx="8" fill="var(--surface-2)" stroke="var(--good)"/>
  <text x="400" y="127" text-anchor="middle" font-size="13" font-weight="700" fill="var(--good)">我没有哥哥那么高 (我 &lt; 哥哥)</text>
  <rect x="260" y="150" width="280" height="32" rx="8" fill="var(--surface-2)" stroke="var(--bad)"/>
  <text x="400" y="171" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--bad)">✗ 哥哥比我很高  |  ✗ 哥哥比我六厘米高</text>
</svg>`,
      caption: "Both sentences describe the exact same pair of heights — just starting from opposite speakers!",
    },
  ],
  history: {
    title: "How One Writer Invented 幽默 (yōumò) & How 比 Grew From Two Standing People",
    story:
      "Language evolves right alongside culture. In **1924**, the renowned bilingual Chinese scholar **Lin Yutang (林语堂)** wanted a vivid Mandarin word for the English concept of *humour* — gentle, clever wit rather than slapstick joking (**滑稽 huájī**). Writing in the Beijing newspaper *Morning Post*, he coined **幽默 (yōumò)**, matching the English sound while fusing two classical characters from the ancient *Songs of Chu*: **幽 (yōu — subtle, deep)** and **默 (mò — quiet, thoughtful)**. The word caught on across China and Singapore almost overnight, and today every Year 9 student uses **幽默** to describe a favourite teacher or uncle! Meanwhile, the comparison word **比 (bǐ)** goes back more than **3,000 years** to Shang Dynasty oracle bones, where scribes carved **two identical human figures standing side by side** — literally showing two people lining up shoulder-to-shoulder to see who is taller (**比高矮**)!",
  },
};
