import { templates } from '../generated/repokit/templates'
import { RepokitTemplate } from '../generated/repokit/types'

export function useRepokitTemplates(): RepokitTemplate[] {
  return templates
}
