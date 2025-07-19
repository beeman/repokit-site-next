import { templates } from '../generated/repokit/templates'
import { RepokitSource, RepokitTemplate } from '../generated/repokit/types'
import { images } from '@/lib/generated/repokit/images'

// Re-export types so they can be used in the app.
export type { RepokitTemplate, RepokitSource }

export function useRepokitTemplate({ name }: { name: string }) {
  const templates = useRepokitTemplates()

  return templates.find((l) => l.name === name)
}

export function useRepokitTemplateImage({ template }: { template: RepokitTemplate }) {
  const image = images[`${template.source.name}-${template.name}`]

  return image ?? null
}

export function useRepokitTemplates(): RepokitTemplate[] {
  return templates
}
