import { useRepokitFilterState } from '@/lib/repokit/use-repokit-filters'
import { TemplatesUiGrid } from '@/components/templates/templates-ui-grid'
import { Button } from '@/components/ui/button'

export function TemplatesUiMain() {
  const { clear, templates } = useRepokitFilterState()

  return templates.length ? (
    <TemplatesUiGrid templates={templates} />
  ) : (
    <div className="flex flex-col items-center justify-center gap-8 border border-gray-800 py-32 rounded-lg p-4 text-center">
      <div className="font-bold text-lg">No templates found</div>
      <Button variant="outline" onClick={clear}>
        Clear filters
      </Button>
    </div>
  )
}
