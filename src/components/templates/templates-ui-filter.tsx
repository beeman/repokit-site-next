import { Input } from '@/components/ui/input'
import { useRepokitFilterState } from '@/lib/repokit/use-repokit-filters'
import { Button } from '@/components/ui/button'

export function TemplatesUiFilter() {
  return (
    <div className="flex flex-col gap-4">
      <TemplatesUiFilterHeader />
      <TemplatesUiFilterSearch />
      <TemplatesUiFilterKeywords />
      <TemplatesUiFilterSources />
    </div>
  )
}

function TemplatesUiFilterHeader() {
  const { clear, isFiltered } = useRepokitFilterState()
  return (
    <div className="flex justify-between items-center">
      <span className="text-md font-bold py-1.5">Filter Templates</span>
      {isFiltered ? (
        <Button variant="outline" onClick={() => clear()}>
          Clear
        </Button>
      ) : null}
    </div>
  )
}

function TemplatesUiFilterSearch() {
  const { search, setSearch } = useRepokitFilterState()

  return <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search templates..." />
}

function TemplatesUiFilterKeywords() {
  const { filters, selectedKeywords, toggleKeyword } = useRepokitFilterState()
  return filters.map((filter) => (
    <div className="flex flex-col gap-2" key={filter.id}>
      <div className={'text-md font-bold py-1.5'}>{filter.name}</div>
      <div className="flex flex-col gap-2">
        {filter.keywords.map((keyword) => (
          <Button
            onClick={() => toggleKeyword(keyword.id)}
            variant={selectedKeywords.includes(keyword.id) ? 'default' : 'outline'}
            key={keyword.id}
          >
            {keyword.name}
          </Button>
        ))}
      </div>
    </div>
  ))
}

function TemplatesUiFilterSources() {
  const { sources, selectedSources, toggleSource } = useRepokitFilterState()

  return (
    <div className="flex flex-col gap-2">
      <div className={'text-md font-bold py-1.5'}>Sources</div>
      <div className="flex flex-col gap-2">
        {sources.map((source) => (
          <Button
            key={source.id}
            variant={selectedSources.includes(source.id) ? 'default' : 'outline'}
            onClick={() => toggleSource(source.id)}
          >
            {source.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
