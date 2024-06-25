import React from 'react';
import Dropdowns from './dropdowns';// Adjust the import path as needed
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";


const StatusDropdown = ({ statusTypes }) => {
    return (
        <Dropdowns
            title="Select Status"
            content={Object.keys(statusTypes).map((type) => (
                <DropdownItem key={type}>{statusTypes[type]}</DropdownItem>
            ))}
            onSelectionChange={undefined}
        />
    );
};

export default StatusDropdown;
