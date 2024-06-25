import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button, cn } from "@nextui-org/react";
import Cancel from "../svg/Cancel";
import Xmark from "../svg/Xmark";


type Props = {}

const CardsButton = ({ buttontext, description, address, pricing, onClick }: any) => {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                >
                    {buttontext}
                </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
                <DropdownSection title="Property Info" showDivider>
                    <DropdownItem
                        key="new"
                        // shortcut="⌘N"
                        description={description}
                    // startContent={<Cancel />}
                    >
                        {address}
                    </DropdownItem>
                    <DropdownItem
                        key="copy"
                        // shortcut="⌘C"
                        description="Copy the file link"
                    // startContent={<Cancel />}
                    >
                        {pricing}
                    </DropdownItem>
                    {/* <DropdownItem
                        key="edit"
                        // shortcut="⌘⇧E"
                        description="Allows you to edit the file"
                    // startContent={<Cancel />}
                    >
                        Edit file
                    </DropdownItem> */}
                </DropdownSection>
                <DropdownSection title="Remove">
                    <DropdownItem
                        key="delete"
                        className=""
                        color="danger"
                        // shortcut="⌘⇧D"
                        description="This cannot be undone"
                        startContent={<span className={cn(iconClasses, "text-danger")}>X</span>}
                        onClick={onClick}
                    >
                        Remove from portfolio
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    )
}

export default CardsButton