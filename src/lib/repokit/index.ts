import { listings } from '../generated/repokit/listings'
import { TemplateListing, TemplateSource } from '../generated/repokit/types'

// Re-export types so they can be used in the app.
export type { TemplateListing, TemplateSource }

export function useTemplateListing({ name }: { name: string }) {
  const listings = useTemplateListings()

  return listings.find((l) => l.name === name)
}

export function useTemplateListings(): TemplateListing[] {
  return listings
}
