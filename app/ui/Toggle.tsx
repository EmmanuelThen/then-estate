import React from 'react';
import * as Switch from '@radix-ui/react-switch';

const Toggle = ({ label, onCheckedChange, checked }: any) => (
  <form>
    <div className="flex items-center justify-between">
      <label className="font-medium text-xs leading-none pr-[15px]" htmlFor="airplane-mode">
        {label}
      </label>
      <Switch.Root
        className="w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_2px_10px] shadow-blackA4 data-[state=checked]:bg-green-500 outline-none cursor-default hover:cursor-pointer"
        id="airplane-mode"
        style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
        onCheckedChange={onCheckedChange}
        // checked={checked}
      >
        <Switch.Thumb className={`block w-[21px] h-[21px] bg-white  rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]`} />
      </Switch.Root>
    </div>
  </form>
);

export default Toggle;
