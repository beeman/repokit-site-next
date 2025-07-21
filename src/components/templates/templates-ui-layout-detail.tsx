import { Button } from '@/components/ui/button'
import { TemplatesUiImage } from '@/lib/repokit/templates-ui-image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { useRepokitTemplate } from '@/lib/repokit/use-repokit-template'
import { AppHero } from '@/components/app-hero'
import { TemplateUiSidebarDetail } from '@/components/templates/template-ui-sidebar-detail'

export function TemplatesUiLayoutDetail({ name, source }: { name: string; source: string }) {
  const template = useRepokitTemplate({ name, source })

  if (!template) {
    return (
      <div>
        <AppHero title="Not Found" subtitle={`Template "${source}/${name}" not found.`} />
        <div className="text-center">
          <Button asChild>
            <Link href="/templates">Back to templates</Link>
          </Button>
        </div>
      </div>
    )
  }
  return (
    <div className="grid md:grid-cols-4 gap-4 lg:gap-8">
      <div className="md:col-span-1">
        <div className="hidden md:block">
          <TemplateUiSidebarDetail template={template} />
        </div>
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Template details</AccordionTrigger>
              <AccordionContent>
                <TemplateUiSidebarDetail template={template} />
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
