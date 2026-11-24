"use client";
import { useMemo, useState } from "react";
import { VOCAB } from "@/lib/generated/vocab";
import { TOPIC_META } from "@/lib/topics/meta";
import { usePinyinVisible } from "@/lib/pinyinDisplay";
import { PinyinToggleButton, SpeakButtons } from "./HanziAudio";

export function ChineseVocabHub() {
  const [topicId, setTopicId] = useState<string>("all");
  const [query, setQuery] = useState("");
  const showPinyin = usePinyinVisible();

  const allEntries = useMemo(() => {
    const out: {
      topicId: string;
      topicTitle: string;
      topicIcon: string;
      group: string;
      hanzi: string;
      pinyin: string;
      english: string;
      pos: string;
      notes?: string;
    }[] = [];
    for (const meta of TOPIC_META) {
      for (const g of VOCAB[meta.id] ?? []) {
        for (const it of g.items) {
          out.push({
            topicId: meta.id,
            topicTitle: meta.title,
            topicIcon: meta.icon,
            group: g.title,
            hanzi: it.hanzi,
            pinyin: it.pinyin,
            english: it.english,
            pos: it.pos,
            notes: it.notes,
          });
        }
      }
    }
    return out;
  }, []);

  const q = query.trim().toLowerCase();
  const visible = useMemo(
    () =>
      allEntries.filter((e) => {
        if (topicId !== "all" && e.topicId !== topicId) return false;
        if (!q) return true;
        return (
          e.hanzi.includes(q) ||
          e.pinyin.toLowerCase().includes(q) ||
          e.english.toLowerCase().includes(q) ||
          e.group.toLowerCase().includes(q)
        );
      }),
    [allEntries, topicId, q],
  );

  return (
    <div className="space-y-5 pb-8">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="chip border-0 bg-brand-soft text-brand">🗣️ {allEntries.length} Simplified Chinese Words · zh-CN Audio</span>
          <h1 className="mt-2 text-2xl font-black sm:text-3xl">Year 9 Mandarin Audio Vocab Hub (词汇表)</h1>
          <p className="mt-1 text-sm text-ink-2">
            Tap 🔊 (normal) or 🐢 (slow) to hear every word, or toggle Pinyin off to test your character recognition!
          </p>
        </div>
        <PinyinToggleButton />
      </header>

      <div className="card space-y-3 p-4">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Hanzi (卧室), Pinyin (wòshì) or English (bedroom)…"
          aria-label="Search Mandarin vocabulary"
          className="input text-sm"
        />
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setTopicId("all")}
            className={`btn btn-sm ${topicId === "all" ? "btn-primary" : "btn-secondary"}`}
          >
            All ({allEntries.length})
          </button>
          {TOPIC_META.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTopicId(t.id)}
              className={`btn btn-sm ${topicId === t.id ? "btn-primary" : "btn-secondary"}`}
            >
              {t.icon} {t.title.split(" (")[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((e, i) => (
          <article key={`${e.topicId}-${e.hanzi}-${i}`} className="card flex flex-col justify-between gap-2 p-3.5">
            <div>
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-xl font-black text-ink" lang="zh-CN">
                    {e.hanzi}
                  </div>
                  {showPinyin ? <div className="text-sm font-bold text-brand">{e.pinyin}</div> : null}
                </div>
                <SpeakButtons text={e.hanzi} compact />
              </div>
              <div className="mt-1 text-sm font-semibold text-ink">{e.english}</div>
              {e.notes ? <p className="mt-1 text-xs text-ink-2">{e.notes}</p> : null}
            </div>
            <div className="flex items-center justify-between border-t border-line pt-2 text-[11px] font-bold text-ink-2">
              <span className="truncate">{e.topicIcon} {e.group}</span>
              <span className="shrink-0 rounded bg-surface-2 px-1.5 py-0.5">{e.pos}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
