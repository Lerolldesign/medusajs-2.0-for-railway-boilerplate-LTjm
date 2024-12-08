"use client"

import { HttpTypes } from "@medusajs/types"
import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"
import { Package, RefreshCw } from "lucide-react"
import Link from "next/link"
import { TbNeedleThread, TbWashTemperature2 } from "react-icons/tb"
//import Accordion from "./accordion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Product Information",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Shipping & Returns",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full text-neutral-700">
      {/**    <Accordion>
        {tabs.map((tab, i) => (
          <Accordion.Item key={i} title={tab.label} headingSize="medium">
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion> */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h3 className="text-neutral-600 text-[.95rem] font-light  ">
              Caractéristiques
            </h3>
          </AccordionTrigger>
          <AccordionContent>
            {/**  {product.origin_country ? product.origin_country : "-"} */}
            <div className="flex flex-col">
              <div className="text-[.8rem] flex-col flex gap-2 py-3">
                <h4 className="flex items-center align-middle gap-2 font-bold">
                  Dimensions
                </h4>
                <span className="text-xs flex flex-col gap-2">
                  <span>
                    {product.length && product.width && product.height
                      ? `Longueur : ${product.length} cm - Largeur : ${product.width} cm  - Hauteur : ${product.height} cm`
                      : "-"}
                  </span>
                  <span>
                    Poid {product.weight ? `${product.weight} grammes` : "-"}
                  </span>
                </span>
              </div>
              <div className="text-[.8rem] flex-col flex gap-2 py-3">
                <h4 className="flex items-center align-middle gap-2 font-bold">
                  Composition
                </h4>
                <div className="text-xs flex flex-col gap-2">
                  <p>{product.material ? product.material : "-"}</p>
                  <p>Confection en atelier en Bourgogne Franche Compté</p>
                </div>
              </div>
              <div className="text-[.8rem] flex-col flex gap-2 py-3">
                <h4 className="flex items-center align-middle gap-2 font-bold">
                  Spécificités
                </h4>
                <p className="text-xs">
                  <p>{product.subtitle}</p>
                </p>
              </div>
            </div>
            {/**  <p>{product.type ? product.type.value : "-"}</p> */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <h3 className="text-neutral-600 text-[.95rem] font-light pb-5">
              Livraison, retour & stock
            </h3>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <div className="text-[.8rem] flex-col flex gap-2 py-3">
                <h4 className="flex items-center align-middle gap-2 font-bold">
                  <span>
                    <Package />
                  </span>
                  Délais de livraison
                </h4>
                <p className="text-xs">
                  Votre colis arrivera dans 3 à 5 jours ouvrables directement à
                  votre domicile. Si il s&apos;agit d&apos;une commande sur
                  mesure le délai peut se voir allongé.
                </p>
              </div>
              <div className="text-[.8rem] flex-col flex gap-2 py-3">
                <h4 className="flex items-center align-middle gap-2 font-bold">
                  <span>
                    <RefreshCw />
                  </span>
                  Retour & échange
                </h4>
                <p className="text-xs">
                  Votre article ne correspond pas à vos attentes ? Nous vous
                  l&apos;échangeons sous 14 jours. conformément aux conditions
                  énoncées dans nos conditions générales de vente
                </p>
              </div>
              <div className="text-[.8rem] flex-col flex gap-2 py-3">
                <h4 className="flex items-center align-middle gap-2 font-bold">
                  <span>
                    <TbNeedleThread className="size-6" />
                  </span>
                  Confection sur mesure
                </h4>
                <p className="text-xs">
                  Votre article n&apos;est plus en stock, selon les matériaux
                  utilisés nous pouvons vous le fabriquer sur mesure.
                  Choississez l&apos;option sur mesure, je reviendrai vers vous
                  pour les modalités. Compter 3 semaines de délai à compter de
                  la prise de commande sous réserve de la disponibilité des
                  tissus
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Link
        className="flex gap-1 items-center align-center font-bold py-10 md:py-5"
        href="/"
      >
        <TbWashTemperature2 className="size-5" />
        <span className="text-xs">Conseil d&apos;entretien</span>
      </Link>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/**  <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Material</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Country of origin</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Type</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Weight</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Dimensions</span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Fast delivery</span>
            <p className="max-w-sm">
              Your package will arrive in 3-5 business days at your pick up
              location or in the comfort of your home.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Simple exchanges</span>
            <p className="max-w-sm">
              Is the fit not quite right? No worries - we&apos;ll exchange your
              product for a new one.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Easy returns</span>
            <p className="max-w-sm">
              Just return your product and we&apos;ll refund your money. No
              questions asked – we&apos;ll do our best to make sure your return
              is hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
