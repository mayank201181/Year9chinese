"use client";
import { useState } from "react";
import Link from "next/link";
import type { FormulaFact, Misconception } from "@/lib/types";
import { Rich, RichInline } from "./Rich";
import { PrintButton } from "./Certificate";

export interface VaultTopicData {
  id: string;
  title: string;
  icon: string;
  strand: string;
  misconceptions: Misconception[];
  examMistakes: string[];
  formulas: FormulaFact[];
}

type ViewTab = "all" | "traps" | "cheatsheet";

const SUBJECT_CARDS = [
  {
    "title": "1. Golden Word Order: STPVO",
    "badge": "Word Order",
    "lines": [
      "**Subject + Time + Place (`在...`) + Verb + Object** — e.g. `我周末在公园遛狗。` (`Wǒ zhōumò zài gōngyuán liù gǒu.`)",
      "**Never** put `在 + place` at the end of a sentence like English! Location goes **before** the action.",
      "With `有` (existence) vs `在` (location): `桌子上面有一本书` (*There is a book on the table*) vs `书在桌子上面` (*The book is on the table*)."
    ]
  },
  {
    "title": "2. Comparisons (`比`), Distance (`离`) & Adjectives",
    "badge": "Core Patterns",
    "lines": [
      "`A 比 B + adj` (`哥哥比我高`, *Older brother is taller than me*) — **never** add `很` after `比`! Use `一点儿` or `得多` after the adjective.",
      "`A 离 B 很近 / 很远` (`我家离地铁站很近`, *My home is close to the MRT station*).",
      "**Never** write `是` before a bare adjective — use `很/非常/真` (`我的卧室很大`, not `我的卧室是大`)."
    ]
  },
  {
    "title": "3. Essential Year 9 Measure Words (量词)",
    "badge": "Measure Words",
    "lines": [
      "`只` (`zhī`) — dogs, cats, birds, rabbits · `条` (`tiáo`) — fish, snakes, rivers, trousers · `匹` (`pǐ`) — horses.",
      "`间` (`jiān`) — rooms (`三间卧室`) · `张` (`zhāng`) — beds, tables, desks, photos · `把` (`bǎ`) — chairs · `座` (`zuò`) — buildings, bridges.",
      "`位` (`wèi`) — polite measure word for relatives/teachers (`一位亲戚`) · `门` (`mén`) — school subjects (`八门课`)."
    ]
  },
  {
    "title": "4. High-Scoring IGCSE 0547 Connectives",
    "badge": "IGCSE Bridge",
    "lines": [
      "`又 + adj1 + 又 + adj2` (*both ... and ...*: `我的小狗又可爱又聪明`).",
      "`因为...，所以...` (*because..., therefore...*) · `虽然...，但是...` (*although..., yet...*) — Mandarin keeps **both** halves!",
      "`不但...，而且...` (*not only..., but also...*) · `如果...，就...` (*if..., then...*) · `从...到...` (*from... to...*)."
    ]
  }
];

export function FormulasVault({ topics }: { topics: VaultTopicData[] }) {
  const [tab, setTab] = useState<ViewTab>("all");
  const [strandFilter, setStrandFilter] = useState<string>("All");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const visibleTopics = topics.filter((t) => (strandFilter === "All" ? true : t.strand === strandFilter));

  const totalTraps = topics.reduce((s, t) => s + t.misconceptions.length, 0);
  const totalMistakes = topics.reduce((s, t) => s + t.examMistakes.length, 0);
  const totalFormulas = topics.reduce((s, t) => s + t.formulas.length, 0);

  return (
    <div className="space-y-6 print:space-y-3">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap gap-2">
            <span className="chip border-0 bg-bad-soft text-bad">❌→✅ {totalTraps} Mark-Scheme Swaps</span>
            <span className="chip border-0 bg-accent-soft text-warn">⚠️ {totalMistakes} Examiner Warnings</span>
            <span className="chip border-0 bg-brand-soft text-brand">📖 {totalFormulas} Key Rules &amp; Definitions</span>
          </div>
          <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl print:text-xl">
            🎯 Year 9 Chinese Grammar, Measure Words & Mark-Saver Vault
          </h1>
          <p className="mt-1 max-w-3xl text-ink-2 print:hidden">
            What <strong>earns marks</strong> vs what <strong>loses marks</strong> in Year 9 Mandarin Chinese — mark-scheme phrasing, key formulae and examiner traps in one printable vault.
          </p>
        </div>
        <PrintButton label="Print Cheat-Sheet" />
      </header>

      {/* High-Yield Year 9 Chinese Quick-Reference Cards */}
      <section aria-label="Year 9 Chinese Non-Negotiable Exam Rules" className="grid gap-3 md:grid-cols-2">
        {SUBJECT_CARDS.map((c) => (
          <article key={c.title} className="card border-l-4 border-brand p-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-extrabold text-ink">{c.title}</h2>
              <span className="chip shrink-0 border-0 bg-brand-soft text-xs text-brand">{c.badge}</span>
            </div>
            <ul className="mt-2 space-y-1.5 text-sm text-ink-2">
              {c.lines.map((line, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden className="text-brand font-bold">•</span>
                  <span className="min-w-0 flex-1">
                    <RichInline text={line} />
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* Filters */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface p-3">
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Vault view">
          <button type="button" role="tab" aria-selected={tab === "all"} onClick={() => setTab("all")} className={`btn btn-sm ${tab === "all" ? "btn-primary" : "btn-secondary"}`}>
            All ({totalTraps + totalFormulas})
          </button>
          <button type="button" role="tab" aria-selected={tab === "traps"} onClick={() => setTab("traps")} className={`btn btn-sm ${tab === "traps" ? "btn-primary" : "btn-secondary"}`}>
            ❌→✅ Never Write / Write Instead ({totalTraps})
          </button>
          <button type="button" role="tab" aria-selected={tab === "cheatsheet"} onClick={() => setTab("cheatsheet")} className={`btn btn-sm ${tab === "cheatsheet" ? "btn-primary" : "btn-secondary"}`}>
            📖 Formulas, Rules &amp; Definitions ({totalFormulas})
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {["All","Home & Community","Pets & School","Culture & IGCSE Bridge"].map((s) => (
            <button key={s} type="button" onClick={() => setStrandFilter(s)} className={`chip cursor-pointer text-xs ${strandFilter === s ? "border-brand bg-brand-soft text-brand" : ""}`}>
              {s === "All" ? "All Strands" : s}
            </button>
          ))}
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter e.g. 卧室, wòshì, 比, 只, 春节…"
            aria-label="Filter exam vault"
            className="input h-9 w-52 text-sm"
          />
        </div>
      </div>

      {/* Topic-by-Topic Exam Vault */}
      <div className="space-y-6">
        {visibleTopics.map((t) => {
          const traps = t.misconceptions.filter((m) => !q || m.wrong.toLowerCase().includes(q) || m.right.toLowerCase().includes(q));
          const mistakes = t.examMistakes.filter((m) => !q || m.toLowerCase().includes(q));
          const formulas = t.formulas.filter((f) => !q || f.name.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q) || (f.note ?? "").toLowerCase().includes(q));

          const showTraps = tab !== "cheatsheet" && (traps.length > 0 || mistakes.length > 0);
          const showFormulas = tab !== "traps" && formulas.length > 0;
          if (!showTraps && !showFormulas) return null;

          return (
            <section key={t.id} id={`vault-${t.id}`} className="card space-y-4 p-4 sm:p-5 break-inside-avoid">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-brand">{t.strand}</div>
                  <h2 className="text-xl font-black">
                    <span aria-hidden>{t.icon} </span>
                    {t.title}
                  </h2>
                </div>
                <div className="no-print flex flex-wrap gap-2">
                  <Link href={`/topic/${t.id}?tab=revise`} className="btn btn-secondary btn-sm">
                    🧠 Flashcards &amp; Revise
                  </Link>
                  <Link href={`/topic/${t.id}?tab=practise`} className="btn btn-primary btn-sm">
                    ✏️ Practise →
                  </Link>
                </div>
              </div>

              {showTraps && traps.length > 0 ? (
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-bad">
                    ❌ Never Write This → ✅ Write This Instead (CIE Mark-Scheme Precision)
                  </h3>
                  <ul className="mt-2 space-y-2.5">
                    {traps.map((m, idx) => (
                      <li key={idx} className="grid overflow-hidden rounded-xl border border-line sm:grid-cols-2">
                        <div className="bg-bad-soft p-3.5 text-sm">
                          <div className="text-xs font-black uppercase tracking-wider text-bad">❌ Loses Marks — Never Write</div>
                          <p className="mt-1 line-through decoration-bad/60">
                            <RichInline text={m.wrong} />
                          </p>
                        </div>
                        <div className="bg-good-soft p-3.5 text-sm">
                          <div className="text-xs font-black uppercase tracking-wider text-good">✅ Earns Marks — Write Instead</div>
                          <p className="mt-1 font-semibold">
                            <RichInline text={m.right} />
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {showTraps && mistakes.length > 0 ? (
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-warn">⚠️ Examiner Report Warnings</h3>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {mistakes.map((x, idx) => (
                      <li key={idx} className="flex gap-2.5 rounded-xl border border-line bg-surface-2 p-3 text-sm">
                        <span aria-hidden className="font-black text-warn">!</span>
                        <span className="min-w-0 flex-1">
                          <RichInline text={x} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {showFormulas && formulas.length > 0 ? (
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-brand">📖 Key Formulas, Rules &amp; Definitions</h3>
                  <dl className="mt-2 grid gap-3 sm:grid-cols-2">
                    {formulas.map((f, idx) => (
                      <div key={idx} className="min-w-0 rounded-xl border border-line bg-surface p-3.5">
                        <dt className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
                          <RichInline text={f.name} />
                        </dt>
                        <dd className="mt-1 overflow-x-auto">
                          <Rich text={f.formula} className="text-[0.98rem] font-semibold text-ink" />
                          {f.note ? <Rich text={f.note} className="mt-0.5 text-xs text-ink-2" /> : null}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </div>
  );
}
