import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'

const states = [
    { id: 1, state: 'Alabama' },
    { id: 2, state: 'Alaska' },
    { id: 3, state: 'Arizona' },
    { id: 4, state: 'Arkansas' },
    { id: 5, state: 'California' },
    { id: 6, state: 'Colorado' },
    { id: 7, state: 'Connecticut' },
    { id: 8, state: 'Delaware' },
    { id: 9, state: 'Florida' },
    { id: 10, state: 'Georgia' },
    { id: 11, state: 'Hawaii' },
    { id: 12, state: 'Idaho' },
    { id: 13, state: 'Illinois' },
    { id: 14, state: 'Indiana' },
    { id: 15, state: 'Iowa' },
    { id: 16, state: 'Kansas' },
    { id: 17, state: 'Kentucky' },
    { id: 18, state: 'Louisiana' },
    { id: 19, state: 'Maine' },
    { id: 20, state: 'Maryland' },
    { id: 21, state: 'Massachusetts' },
    { id: 22, state: 'Michigan' },
    { id: 23, state: 'Minnesota' },
    { id: 24, state: 'Mississippi' },
    { id: 25, state: 'Missouri' },
    { id: 26, state: 'Montana' },
    { id: 27, state: 'Nebraska' },
    { id: 28, state: 'Nevada' },
    { id: 29, state: 'New Hampshire' },
    { id: 30, state: 'New Jersey' },
    { id: 31, state: 'New Mexico' },
    { id: 32, state: 'New York' },
    { id: 33, state: 'North Carolina' },
    { id: 34, state: 'North Dakota' },
    { id: 35, state: 'Ohio' },
    { id: 36, state: 'Oklahoma' },
    { id: 37, state: 'Oregon' },
    { id: 38, state: 'Pennsylvania' },
    { id: 39, state: 'Rhode Island' },
    { id: 40, state: 'South Carolina' },
    { id: 41, state: 'South Dakota' },
    { id: 42, state: 'Tennessee' },
    { id: 43, state: 'Texas' },
    { id: 44, state: 'Utah' },
    { id: 45, state: 'Vermont' },
    { id: 46, state: 'Virginia' },
    { id: 47, state: 'Washington' },
    { id: 48, state: 'West Virginia' },
    { id: 49, state: 'Wisconsin' },
    { id: 50, state: 'Wyoming' },
];


type Props = {}

const Dropdown = (props: Props) => {
    const [selected, setSelected] = useState(states[1])


    return (
        <div className="mx-auto w-52">
            <Listbox value={selected} onChange={setSelected}>
                <ListboxButton
                    className={clsx(
                        'relative block w-full rounded-lg bg-blackA2  py-1.5 pr-8 pl-3 text-left text-sm/6',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                >
                    {selected.state}
                    <ChevronDownIcon
                        className="group pointer-events-none absolute top-2.5 right-2.5 w-4 h-4 fill-blackA9"
                        aria-hidden="true"
                    />
                </ListboxButton>
                <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <ListboxOptions
                        anchor="bottom"
                        className="w-[var(--button-width)] rounded-xl border border-white/5 bg-blackA2 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none"
                    >
                        {states.map((state) => (
                            <ListboxOption
                                key={state.state}
                                value={state}
                                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                            >
                                <CheckIcon className="invisible w-4 h-4 fill-blackA9 group-data-[selected]:visible" />
                                <div className="text-sm/6">{state.state}</div>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Transition>
            </Listbox>
        </div>
    )
}

export default Dropdown