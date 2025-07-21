import { RepokitSource } from '@/lib/generated/repokit/types'
import { useMemo } from 'react'
import { useRepokitSources } from '@/lib/repokit/use-repokit-source'

export function useRepokitSourceMap(): Record<string, RepokitSource> {
  const sources = useRepokitSources()
  return useMemo(
    () =>
      sources.reduce(
        (acc, source) => ({
          ...acc,
          [source.name]: source,
        }),
        {} as Record<string, RepokitSource>,
      ),
    [sources],
  )
}
