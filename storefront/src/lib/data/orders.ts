"use server"

import { sdk } from "@lib/config"
import medusaError from "@lib/util/medusa-error"
import { cache } from "react"
import { getAuthHeaders } from "./cookies"

export const retrieveOrder = cache(async function (id: string) {
  return sdk.store.order
    .retrieve(
      id,
      { fields: "*payment_collections.payments" },
      await { next: { tags: ["order"] }, ...getAuthHeaders() }
    )
    .then(({ order }: { order: any }) => order)
    .catch((err: any) => medusaError(err))
})

export const listOrders = cache(async function (
  limit: number = 10,
  offset: number = 0
) {
  return sdk.store.order
    .list(
      { limit, offset },
      await { next: { tags: ["order"] }, ...getAuthHeaders() }
    )
    .then(({ orders }: { orders: any }) => orders)
    .catch((err: any) => medusaError(err))
})
