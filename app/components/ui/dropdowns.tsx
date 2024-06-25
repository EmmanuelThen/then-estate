import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

type Props = {}

const Dropdowns = ({ title, items, onSelectionChange }: any) => {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Type"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="solid"
                    className="capitalize"
                    color=""
                >
                    {/* {selectedValue} */} {title}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Multiple selection example"
                variant="flat"
                closeOnSelect={false}
                disallowEmptySelection
                selectionMode="multiple"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                {items?.map((item, index): any => (
                    <DropdownItem key={index}>{item}</DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
}

export default Dropdowns