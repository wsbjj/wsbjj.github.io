import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal } from "solid-js"
import Fuse from "fuse.js"
import ArrowCard from "@components/ArrowCard"
import SearchBar from "@components/SearchBar"

type Props = {
  data: CollectionEntry<"projects">[]
}

export default function Search({ data }: Props) {
  const [query, setQuery] = createSignal("")
  const [results, setResults] = createSignal<CollectionEntry<"projects">[]>([])

  const fuse = new Fuse(data, {
    keys: ["slug", "data.title", "data.summary", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  })

  createEffect(() => {
    const keyword = query().trim()
    setResults(keyword.length < 2 ? [] : fuse.search(keyword).map((result) => result.item))
  })

  const onSearchInput = (event: Event) => {
    setQuery((event.target as HTMLInputElement).value)
  }

  return (
    <div class="flex flex-col">
      <SearchBar
        onSearchInput={onSearchInput}
        query={query}
        setQuery={setQuery}
        placeholderText="输入项目名称或技术标签"
      />

      {query().trim().length >= 2 && (
        <div class="mt-10">
          <div class="mb-3 text-sm">
            找到 {results().length} 个结果
          </div>
          {results().length > 0 ? (
            <ul class="flex flex-col gap-3">
              {results().map((result) => (
                <li><ArrowCard entry={result} /></li>
              ))}
            </ul>
          ) : (
            <p class="rounded-lg border border-black/10 p-5 dark:border-white/15">
              没有匹配的项目，请尝试其他关键词。
            </p>
          )}
        </div>
      )}
    </div>
  )
}
