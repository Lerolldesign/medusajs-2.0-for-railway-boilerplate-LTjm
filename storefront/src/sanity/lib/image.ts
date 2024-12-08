import createImageUrlBuilder from "@sanity/image-url"

import { dataset, projectId } from "../env"

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
})

export const urlForImage = (source: any) => {
  if (!source) return "" // Retourne une chaîne vide si la source est undefined
  return imageBuilder?.image(source).auto("format").fit("max").url() || ""
}
