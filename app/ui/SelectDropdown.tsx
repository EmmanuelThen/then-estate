import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import TrendingDownArrow from '../components/svg/TrendingDownArrow';
import TrendingUpArrow from '../components/svg/TrendingUpArrow';
import Sparkles from '../components/svg/Sparkles';
import Bath from '../components/svg/Bath';
import Bed from '../components/svg/Bed';

type Props = {
  searchStatus: any
  selectItems: any
  placeholder: string
}

const SelectDropdown = ({ searchStatus, selectItems, placeholder }: Props) => (
  <Select.Root>
    <Select.Trigger
      className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[45px] gap-[5px] hover:opacity-70 transition duration-150 ease-in-out shadow-md bg-blackA3  outline-none"
      aria-label="Food"
    >
      <Select.Value placeholder={placeholder} />

      <Select.Icon className="text-mint11">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-y-scroll bg-white h-fit rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
        <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-mint11 cursor-default">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="p-[5px]">
          <Select.Group className='flex flex-col gap-2'>
            <Select.Label className="px-[25px] text-xs leading-[25px] text-slate10">
              Sort by
            </Select.Label>
            <Select.Separator className="h-[1px] bg-slate4 m-[5px]" />
            <SelectItem value='last_update_date'>
              <div className='flex items-center gap-2'>
                <p className='text-sm md:text-md '>{selectItems}</p>
              </div>
            </SelectItem>
            <SelectItem value='list_price_HL'>
              <div className='flex items-center gap-2'>
                <p className='text-sm md:text-md '>Price (High to Low)</p>
              </div>
            </SelectItem>
            <SelectItem value='list_price_LH'>
              <div className='flex items-center gap-2'>
                <p className='text-sm md:text-md '>Price (Low to High)</p>
              </div>
            </SelectItem>
            <SelectItem value='bedrooms'>
              <div className='flex items-center gap-2'>
                <p className='text-sm md:text-md '>Bedrooms</p>
              </div>
            </SelectItem>
            <SelectItem value='date_sold'>
              <div className='flex items-center gap-2'>
                <p className='text-sm md:text-md '>Date sold</p>
              </div>
            </SelectItem>
            <SelectItem value='photo_count'>
              <div className='flex items-center gap-2'>
                <p className='text-sm md:text-md '>Photo count</p>
              </div>
            </SelectItem>
            <SelectItem value='last_update_date'>
              <div className='flex items-center gap-2'>
                <p className='text-sm md:text-md '>Last update date</p>
              </div>
            </SelectItem>

          </Select.Group>


        </Select.Viewport>
        {/* <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-mint11 cursor-default">
          <ChevronDownIcon />
        </Select.ScrollDownButton> */}
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

// eslint-disable-next-line react/display-name
const SelectItem = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => {
  return (
    <Select.Item
      className={classnames(
        'text-[13px] leading-none text-black  rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-mint11/80 data-[highlighted]:text-mint1 hover:cursor-pointer',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default SelectDropdown;
