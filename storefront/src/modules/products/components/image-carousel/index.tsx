import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageCarousel = ({ images }: ImageGalleryProps) => {
  return (
    <div className="flex items-start relative">
      <Carousel className="w-full  overflow-x-scroll snap-x snap-mandatory">
        <div className="absolute flex justify-between w-[68vw] z-40 items-center bottom-[4vh] left-0">
          <div>
            <CarouselPrevious className="size-8" />
          </div>
          <div>
            <CarouselNext className="size-8" />
          </div>
        </div>
        <CarouselContent className="flex">
          {images.map((image, index) => (
            <CarouselItem
              key={image.id}
              className="snap-center flex-shrink-0 w-full"
            >
              <Container
                className="relative aspect-[30/45] md:aspect-[30/48] 2xl:aspect-[26/36] border-4 md:border-4 border-lune border-double w-full overflow-hidden bg-ui-bg-subtle rounded-full"
                id={image.id}
              >
                {!!image.url && (
                  <Image
                    src={image.url}
                    priority={index <= 2}
                    className="absolute inset-0 rounded-rounded"
                    alt={`Product image ${index + 1}`}
                    fill
                    sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                )}
              </Container>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default ImageCarousel
