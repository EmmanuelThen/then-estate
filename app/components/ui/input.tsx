import React from "react";
import { Input } from "@nextui-org/react";

type Props = {}

const Inputs = (props: Props) => {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input variant="bordered" radius="md" type="search" label="Enter address, city, or ZIP code" />
        </div>
    )
}

export default Inputs