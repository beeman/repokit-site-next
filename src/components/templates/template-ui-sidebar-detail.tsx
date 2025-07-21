import { RepokitFilter, RepokitTemplate } from '@/lib/generated/repokit/types'
import { useRepokitSourceMap } from '@/lib/repokit/use-repokit-source-map'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AppModal } from '@/components/app-modal'
import { TemplatesUiGenerateCommand } from '@/components/templates/templates-ui-generate-command'
import { ExternalLinkIcon } from 'lucide-react'
import { useRepokitFiltersActive } from '@/lib/repokit/use-repokit-filters-active'

export function TemplateUiSidebarDetail({ template }: { template: RepokitTemplate }) {
  const sourceMap = useRepokitSourceMap()
  const activeFilters: RepokitFilter[] = useRepokitFiltersActive({ template })

  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <Button variant="link" className="pl-0" asChild>
          <Link href="/templates">Back to templates</Link>
        </Button>
      </div>
      <div className="border rounded-lg p-4 space-y-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">{template.name}</h3>
          <p className="text-sm text-gray-500">{template.description}</p>
        </div>
        <div className="space-y-2">
          <p className="flex justify-between text-sm">
            <strong>Author:</strong>
            <span>{sourceMap[template.source.name].name}</span>
          </p>
          {activeFilters.map((activeFilter) => (
            <div key={activeFilter.id} className="flex justify-between text-sm">
              <strong>{activeFilter.name}:</strong>
              <span>{activeFilter.keywords.map((keyword) => keyword.name).join(', ')}</span>
            </div>
          ))}
        </div>
        <AppModal title="Generate">
          <div className="space-y-4  overflow-x-auto">
            <p>
              Generate a new Solana project using the <strong>{template.name}</strong> template.
            </p>
            <TemplatesUiGenerateCommand template={template} />
            <p>Run the command above in your terminal to get started.</p>
          </div>
        </AppModal>
        <Button className="w-full" asChild variant="outline">
          <a href={template.repoUrl} target="_blank" rel="noopener noreferrer">
            View on GitHub <ExternalLinkIcon className="h-4 w-4 ml-2" />
          </a>
        </Button>
      </div>
    </div>
  )
}
