'use client'

import { AppHero } from '@/components/app-hero'
import { TemplatesUiLayoutList } from '@/components/templates/templates-ui-layout-list'
import { useTemplateListings } from '@/lib/repokit'

export function TemplatesFeatureList() {
  const listings = useTemplateListings()
  return (
    <div>
      <AppHero title="Templates" subtitle="Jumpstart your app development process with these pre-built solutions." />
      <TemplatesUiLayoutList listings={listings} />
    </div>
  )
}
