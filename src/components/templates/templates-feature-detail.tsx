'use client'

import { AppHero } from '@/components/app-hero'
import { Button } from '@/components/ui/button'
import { useTemplateListing } from '@/lib/repokit'
import Link from 'next/link'
import { TemplatesUiLayoutDetail } from './templates-ui-layout-detail'

export function TemplatesFeatureDetail({ name }: { name: string }) {
  const listing = useTemplateListing({ name })

  if (!listing) {
    return (
      <div>
        <AppHero title="Not Found" subtitle={`Template with name "${name}" not found.`} />
        <div className="text-center">
          <Button asChild>
            <Link href="/templates">Back to templates</Link>
          </Button>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className="container py-4">
        <Button variant="link" className="pl-0" asChild>
          <Link href="/templates">Back to templates</Link>
        </Button>
      </div>
      <AppHero title={listing.name} subtitle={listing.description} />
      <TemplatesUiLayoutDetail listing={listing} />
    </div>
  )
}
