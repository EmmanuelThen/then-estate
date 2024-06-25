import * as React from "react"
import { Card, CardContent } from "@/components2/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components2/ui/carousel"


type Props = {}

const Carousels = ({image, prevButtonClick, nextButtonClick}: any) => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div>
            <Carousel setApi={setApi} className="">
                <CarouselContent className="">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-[100%]">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="w-full">{image}</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="border border-red-500 w-5 h-5">
                    <CarouselPrevious onClick={prevButtonClick} />
                </div>
                <div className="">
                    <CarouselNext onClick={nextButtonClick} />
                </div>
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
            </div>
        </div>
    )
}

export default Carousels
