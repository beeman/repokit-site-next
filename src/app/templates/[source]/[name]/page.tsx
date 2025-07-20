import { AppHero } from '@/components/app-hero'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { TemplatesUiLayoutDetail } from '@/components/templates/templates-ui-layout-detail'
import { useRepokitTemplate } from '@/lib/repokit/use-repokit-template'

export default async function TemplateDetailPage({ params }: { params: Promise<{ name: string; source: string }> }) {
  const { name, source } = await params

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
  return <TemplatesUiLayoutDetail template={template} />
}
