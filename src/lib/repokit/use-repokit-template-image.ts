import { images } from '../generated/repokit/images'
import { RepokitTemplate } from '../generated/repokit/types'

export function useRepokitTemplateImage({ template }: { template: RepokitTemplate }) {
  const image = images[`${template.source.id}-${template.name}`]

  return image ?? null
}
