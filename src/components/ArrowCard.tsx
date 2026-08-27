import type { CollectionEntry } from "astro:content"
import { formatDate } from "@lib/utils"

type Props = {
  entry: CollectionEntry<"projects">
}

export default function ArrowCard({ entry }: Props) {
  return (
    <a
      href={`/projects/${entry.slug}`}
      class="group flex items-center gap-3 rounded-lg border border-black/15 p-4 transition-colors duration-300 hover:border-accent dark:border-white/20"
    >
      <div class="w-full">
        <div class="text-xs text-black/55 dark:text-white/55">
          {formatDate(entry.data.date)}
        </div>
        <div class="mt-2 font-semibold text-black group-hover:text-accent dark:text-white">
          {entry.data.title}
        </div>
        <div class="mt-1 line-clamp-2 text-sm">{entry.data.summary}</div>
      </div>
      <svg class="size-5 shrink-0 stroke-current transition-transform group-hover:translate-x-1">
        <use href="/ui.svg#arrow-right" />
      </svg>
    </a>
  )
}
