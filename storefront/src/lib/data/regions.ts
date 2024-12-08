import { sdk } from "@lib/config"
import medusaError from "@lib/util/medusa-error"
// @ts-ignore
import { HttpTypes } from "@medusajs/types"

export const listRegions = async function () {
  return (
    sdk.store.region
      .list({}, { next: { tags: ["regions"] } })
      // @ts-ignore
      .then(({ regions }) => regions)
      .catch(medusaError)
  )
}

export const retrieveRegion = async function (id: string) {
  return (
    sdk.store.region
      .retrieve(id, {}, { next: { tags: ["regions"] } })
      // @ts-ignore
      .then(({ region }) => region)
      .catch(medusaError)
  )
}
// @ts-ignore
const regionMap = new Map<string, HttpTypes.StoreRegion>()

export const getRegion = async function (countryCode: string) {
  try {
    if (regionMap.has(countryCode)) {
      return regionMap.get(countryCode)
    }

    const regions = await listRegions()

    if (!regions) {
      return null
    }
    // @ts-ignore
    regions.forEach((region) => {
      region.countries?.forEach((c: any) => {
        regionMap.set(c?.iso_2 ?? "", region)
      })
    })

    const region = countryCode
      ? regionMap.get(countryCode)
      : regionMap.get("us")

    return region
  } catch (e: any) {
    return null
  }
}
