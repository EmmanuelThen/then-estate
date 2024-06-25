
import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import CardsButton from "./CardsButton";

type Props = {}

const Cards = ({ image, buttontext, text, description, address, pricing, onClick }: any) => {
  return (
    <Card
      isFooterBlurred={true}
      radius="lg"
      className="border-none w-fit"
    >
      {image}
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80 w-full">{text}</p>
        <div className="text-tiny text-white bg-black/20 rounded-full">
          <CardsButton
            buttontext={'More'}
            description={description}
            address={address}
            pricing={pricing}
            onClick={onClick}
          />
        </div>
      </CardFooter>
    </Card>
  )
}

export default Cards


