import React from 'react';
import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import TickerBadge from './TickerBadge';



const AccordionDemo = ({ accordionTrigger, accordionContent }: any) => (
  <Accordion.Root
    className="my-2 w-full rounded-md shadow-[0_2px_10px] shadow-black/5"
    type="single"
    defaultValue="item-2"
    collapsible
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>
        {accordionTrigger}
        {/* <TickerBadge /> */}
      </AccordionTrigger>
      <AccordionContent>
        <div className=''>
          {accordionContent}
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);

const AccordionItem = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => (
  <Accordion.Item
    className={classNames(
      'hover:cursor-pointer transition duration-150 ease-in-out focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

const AccordionTrigger = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        'hover:cursor-pointer transition duration-150 ease-in-out  shadow-mauve6 hover:bg-blackA3 data-[state=open]:bg-default group flex h-[45px] flex-1 cursor-default items-center justify-between  px-5 text-[15px] leading-none shadow-blackA9 shadow-[0_4px_7px] outline-none',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className=" ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      'transition duration-150 ease-in-out text-mauve11 bg-blackA1 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="py-[15px] px-5">{children}</div>
  </Accordion.Content>
));

export default AccordionDemo;

