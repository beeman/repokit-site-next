import { Button } from '@/components/ui/button'
import { ExternalLinkIcon } from 'lucide-react'
import { AppModal } from '@/components/app-modal'
import { RepokitSource, RepokitTemplate } from '@/lib/repokit'
import { TemplatesUiGenerateCommand } from './templates-ui-generate-command'
import { TemplatesUiImage } from '@/lib/repokit/templates-ui-image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { useRepokitFilters } from '@/lib/repokit/use-repokit-filters'
import { useMemo } from 'react'
import { RepokitFilter } from '@/lib/generated/repokit/types'
import { useRepokitSources } from '@/lib/repokit/use-repokit-source'

function TemplateSidebar({ template }: { template: RepokitTemplate }) {
  const filters = useRepokitFilters()
  const sources = useRepokitSources()
  const sourceMap = useMemo(() => {
    return sources.reduce(
      (acc, source) => {
        return {
          ...acc,
          [source.name]: source,
        }
      },
      {} as Record<string, RepokitSource>,
    )
  }, [sources])
  const templateKeywords = template.keywords ?? []

  const activeFilters: RepokitFilter[] = useMemo(() => {
    return filters.reduce((acc, filter) => {
      if (!filter.keywords) {
        return acc
      }
      if (filter.keywords.some((keyword) => templateKeywords.includes(keyword.id))) {
        return [
          ...acc,
          {
            ...filter,
            keywords: filter.keywords.filter((keyword) => templateKeywords.includes(keyword.id)),
          },
        ]
      }
      return acc
    }, [] as RepokitFilter[])
  }, [filters, template])

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

export function TemplatesUiLayoutDetail({ template }: { template: RepokitTemplate }) {
  return (
    <div className="grid md:grid-cols-4 gap-4 lg:gap-8">
      <div className="md:col-span-1">
        <div className="hidden md:block">
          <TemplateSidebar template={template} />
        </div>
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Template details</AccordionTrigger>
              <AccordionContent>
                <TemplateSidebar template={template} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="md:col-span-3 gap-4">
        <div className="">
          <div>
            <div className="border rounded-lg overflow-hidden mb-4">
              <div className="w-full h-full flex items-center justify-center">
                <TemplatesUiImage template={template} />
              </div>
            </div>
          </div>
          <div>
            <div className="prose dark:prose-invert max-w-none border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
              <div dangerouslySetInnerHTML={{ __html: template.readme }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
