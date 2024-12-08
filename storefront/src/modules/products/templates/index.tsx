import React, { Suspense } from "react"

import { HttpTypes } from "@medusajs/types"
import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ImageCarousel from "../components/image-carousel"
import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="flex flex-col  medium:flex-row medium:items-start py-6 relative w-full md:px-20 px-3"
        data-testid="product-container"
      >
        <div className="flex flex-col  xl:hidden px-8 mt-32 md:mt-20  ">
          <div className="md:px-0 block xl:hidden w-full relative">
            <ImageCarousel images={product?.images || []} />
          </div>

          {/**   <div className="order-first">
            <div className="hidden text-center pt-20 pb-10">
              {product.collection && (
                <LocalizedClientLink
                  href={`/collections/${product.collection.handle}`}
                  className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle py-10"
                >
                  {product.collection.title}
                </LocalizedClientLink>
              )}
              <h1 className="text-4xl font-lune text-lune pt-5">
                {product.title}
              </h1>
            </div>

         
            <Image
              src={
                product.thumbnail && product.thumbnail.startsWith("//")
                  ? "https:" + product.thumbnail
                  : product.thumbnail ?? ""
              }
              height={1500}
              width={500}
              className="inset-0 object-cover object-center w-full h-[115vw] md:h-[100vw] rounded-full border-lune border-4 border-double  "
              alt="background image"
              priority={true}
            />
          </div>*/}

          <div className="order-last px-1">
            <div className="flex flex-col small:sticky small:top-[20vh] small:py-0 medium:max-w-[300px] w-full py-8 gap-y-6">
              <ProductInfo product={product} />
              <div className="flex flex-col small:sticky small:top-48 small:py-0 medium:max-w-[300px] w-full py-8 gap-y-12 px-5">
                <ProductOnboardingCta />
                <Suspense
                  fallback={
                    <ProductActions
                      disabled={true}
                      product={product}
                      region={region}
                    />
                  }
                >
                  <ProductActionsWrapper id={product.id} region={region} />
                </Suspense>
              </div>
              <ProductTabs product={product} />
            </div>
          </div>
        </div>
        <div className="hidden md:hidden xl:flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6">
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </div>
        <div className="hidden px-8 md:px-0 xl:block w-full relative">
          <ImageGallery images={product?.images || []} />
        </div>

        <div className="hidden xl:flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12 px-5">
          <ProductOnboardingCta />
          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
      </div>
      <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
