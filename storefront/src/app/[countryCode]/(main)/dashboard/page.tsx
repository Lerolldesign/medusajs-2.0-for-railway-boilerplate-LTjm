import { retrieveCustomer } from "@lib/data/customer"
import { listOrders } from "@lib/data/orders"
import Overview from "@modules/account/components/overview"
import { notFound } from "next/navigation"

export default async function Dashboard() {
  const customer = await retrieveCustomer().catch(() => null)
  const orders = (await listOrders().catch(() => null)) || null

  if (!customer) {
    notFound()
  }
  return (
    <div>
      page
      <Overview customer={customer} orders={orders} />
    </div>
  )
}
