
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import image1 from "../assets/meme.jpg";
import image2 from "../assets/meme1.jpg";
import image3 from "../assets/meme2.jpg";


const images = [image1, image2, image3];

export function CarouselDemo() {
  return (
    <Carousel className="group w-full max-w-48 sm:max-w-xs">
      <CarouselContent>
        {Array.from({ length:12 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-0">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <img src={images[index % images.length]} alt={`Slide ${index + 1}`}
                    className="w-full aspect-square object-cover rounded-md" />
                </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent >
      <CarouselPrevious className="opacity-0 group-hover:opacity-100 transition-duration-300 cursor-pointer" />
      <CarouselNext className="opacity-0 group-hover:opacity-100 transition-duration-300 cursor-pointer" />
    </Carousel>
  )
}
