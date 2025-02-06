import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: any) => {
  if (!source?.asset?._ref) {
    console.warn("Invalid image source:", source);
    return "/fallback-image.jpg"; // Return a default image for invalid sources
  }
  return builder.image(source).url()
}
