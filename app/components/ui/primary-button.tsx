import React from "react";
import { Button } from "@nextui-org/button";

type Props = {
    text: any
}

const PrimaryButton = ({ text, size, radius, variant, color, onClick }: any) => {
    return (
        <Button className="w-full text-white" color={color} size={size} radius={radius} variant={variant} onClick={onClick}>
            {text}
        </Button>
    )
}

export default PrimaryButton