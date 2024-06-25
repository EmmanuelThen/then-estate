import React from "react";
import { Button } from "@nextui-org/button";

type Props = {
    text: any
}

const SecondaryButton = ({ text }: Props) => {
    return (
        <Button color='primary' size="sm" radius="md" variant="bordered">
            {text}
        </Button>
    )
}

export default SecondaryButton