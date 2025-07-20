import { RepokitFilter, RepokitSource, RepokitTemplate } from '../generated/repokit/types'
import { filters } from '@/lib/generated/repokit/filters'
import { useRepokitTemplates } from '@/lib/repokit/use-repokit-templates'
import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs'
import { useMemo } from 'react'
import { filterTemplates } from '@/components/templates/filter-templates'
import { useRepokitSources } from '@/lib/repokit/use-repokit-source'

export function useRepokitFilters(): RepokitFilter[] {
  return filters
}

export interface RepokitUrlState {
  clear: () => Promise<void>
  isFiltered: boolean
  search: string
  selectedKeywords: string[]
  selectedSources: string[]
  setSearch: (value: string) => Promise<URLSearchParams>
  toggleKeyword: (keyword: string) => Promise<URLSearchParams>
  toggleSource: (source: string) => Promise<URLSearchParams>
}

export function useRepokitUrlState(): RepokitUrlState {
  const [search, setSearch] = useQueryState('search', parseAsString.withDefault(''))
  const [selectedKeywords, setSelectedKeywords] = useQueryState(
    'keywords',
    parseAsArrayOf(parseAsString).withDefault([]),
  )
  const [selectedSources, setSelectedSources] = useQueryState('sources', parseAsArrayOf(parseAsString).withDefault([]))

  return {
    clear: async () => {
      await Promise.all([setSearch(''), setSelectedKeywords([]), setSelectedSources([])])
    },
    isFiltered: selectedKeywords.length > 0 || selectedSources.length > 0 || search.length > 0,
    search,
    selectedKeywords,
    selectedSources,
    setSearch,
    toggleKeyword: async (input: string) => await setSelectedKeywords(toggleItem(selectedKeywords, input)),
    toggleSource: async (input: string) => await setSelectedSources(toggleItem(selectedSources, input)),
  }
}

export function useRepokitFilterState(): RepokitUrlState & {
  filters: RepokitFilter[]
  sources: RepokitSource[]
  templates: RepokitTemplate[]
} {
  const filters = useRepokitFilters()
  const sources = useRepokitSources()
  const templates = useRepokitTemplates()

  const state = useRepokitUrlState()

  return {
    ...state,
    filters,
    sources,
    templates: useMemo(() => filterTemplates({ ...state, templates }), [state, templates]),
  }
}

function toggleItem(items: string[], item: string) {
  return items.includes(item) ? items.filter((i) => i !== item) : [...items, item]
}
