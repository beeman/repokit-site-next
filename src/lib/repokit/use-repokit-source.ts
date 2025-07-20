import { RepokitSource } from '../generated/repokit/types'
import { sources } from '../generated/repokit/sources'

export function useRepokitSources(): RepokitSource[] {
  return sources
}
