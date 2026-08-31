"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Story, StoryLanguage } from "@/lib/stories";

const languages: { key: StoryLanguage; label: string; native: string }[] = [
  { key: "en", label: "English", native: "English" },
  { key: "mr", label: "Marathi", native: "मराठी" },
  { key: "hi", label: "Hindi", native: "हिन्दी" },
  { key: "gu", label: "Gujarati", native: "ગુજરાતી" },
  { key: "bn", label: "Bengali", native: "বাংলা" },
  { key: "ta", label: "Tamil", native: "தமிழ்" },
  { key: "kn", label: "Kannada", native: "ಕನ್ನಡ" },
];

type Props = {
  stories: Story[];
  limit?: number;
  compact?: boolean;
};

export default function StoriesShowcase({ stories, limit, compact = false }: Props) {
  const [language, setLanguage] = useState<StoryLanguage>("en");
  const visibleStories = useMemo(() => stories.slice(0, limit), [stories, limit]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-5 border-y border-[var(--hairline)] py-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-terracotta">
            {compact ? "Public-source stories" : "Seven language editions"}
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
            Editorial summaries of public reviews and records. These are not invented customer testimonials, and the photographs are real Unsplash images used only as illustrative visuals.
          </p>
        </div>
        <div className="flex max-w-full flex-wrap gap-2" aria-label="Story language">
          {languages.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setLanguage(item.key)}
              aria-pressed={language === item.key}
              className={`border px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.1em] transition-colors ${
                language === item.key
                  ? "border-foreground bg-foreground text-background"
                  : "border-[var(--hairline)] bg-background text-muted hover:border-foreground hover:text-foreground"
              }`}
            >
              {item.native}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-3">
        {visibleStories.map((story, index) => {
          const copy = story.translations[language] ?? story.translations.en;
          return (
            <article
              key={story.slug}
              className="group flex min-w-0 flex-col border border-[var(--hairline)] bg-background p-5 transition-colors duration-300 hover:bg-surface sm:p-6"
              style={{ marginLeft: index % 3 !== 0 ? "-1px" : undefined, marginTop: index >= 3 ? "-1px" : undefined }}
            >
              <Link href={`/stories/${story.slug}`} className="block overflow-hidden border border-[var(--hairline)]">
                {story.image ? (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.photoAlt ?? copy.headline}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/65 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-white">
                      Real photograph · illustrative visual
                    </div>
                  </div>
                ) : null}
              </Link>

              <div className="mt-5 flex items-center justify-between gap-4 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-terracotta">
                <span>{story.location}</span>
                <span>{story.kind === "client-approved" ? "Client approved" : "Public source"}</span>
              </div>
              <h3 className="mt-3 font-serif text-xl leading-tight text-foreground sm:text-2xl">{copy.headline}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted">{copy.summary}</p>

              <div className="mt-5 border-t border-[var(--hairline)] pt-4">
                <div className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-foreground">{story.sourceLabel}</div>
                <div className="mt-1 text-xs leading-5 text-muted">{story.photoCredit}</div>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <Link href={`/stories/${story.slug}`} className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground transition-colors hover:text-terracotta">
                    Read story →
                  </Link>
                  {story.sourceUrl ? (
                    <a href={story.sourceUrl} target="_blank" rel="noreferrer" className="text-xs text-muted underline decoration-[var(--hairline)] underline-offset-4 hover:text-foreground">
                      Source
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
