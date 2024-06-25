import React from "react";
import { Tooltip, Button } from "@nextui-org/react";

type Props = {}

const NextToolTip = ({tooltipContent, buttontext, tooltipColor, buttonColor, onClick, radius, buttonSize, variant, className, isDisabled}: any) => {
    return (
        <Tooltip className="" color={tooltipColor} showArrow={true} content={tooltipContent} closeDelay={0}>
            <Button disabled={isDisabled} className={className} color={buttonColor} onClick={onClick} radius={radius} size={buttonSize} variant={variant}>
                {buttontext}
            </Button>
        </Tooltip>
    )
}

export default NextToolTip