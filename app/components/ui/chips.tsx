import React from "react";
import { Chip } from "@nextui-org/react";


type Props = {}

const Chips = ({text, size}: any) => {
    return (
        <Chip color="primary" variant="faded" size={size}>{text}</Chip>
    )
}

export default Chips