'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { TemplatesUiFilter } from '@/components/templates/templates-ui-filter'
import { TemplatesUiMain } from '@/components/templates/templates-ui-main'

export function TemplatesUiLayoutList() {
  return (
    <div className="grid md:grid-cols-4 gap-4 lg:gap-8">
      <div className="md:col-span-1">
        <div className="hidden md:block">
          <TemplatesUiFilter />
        </div>
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Filter and Search</AccordionTrigger>
              <AccordionContent>
                <TemplatesUiFilter />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="md:col-span-3">
        <TemplatesUiMain />
      </div>
    </div>
  )
}
