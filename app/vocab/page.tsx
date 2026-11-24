import type { Metadata } from "next";
import { ChineseVocabHub } from "@/components/ChineseVocabHub";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Audio Vocab Hub — Year 9 Mandarin Chinese",
  description: "Searchable Simplified Chinese vocabulary hub with tone-marked Pinyin and zh-CN audio for Tanglin Year 9 Mandarin.",
};

export default function VocabPage() {
  return <ChineseVocabHub />;
}
