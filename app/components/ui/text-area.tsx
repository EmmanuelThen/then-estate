import React from 'react'
import { Description, Field, Label, Textarea } from '@headlessui/react'
import clsx from 'clsx'



type Props = {}

const TextArea = (props: Props) => {
    return (
        <div className="w-full max-w-md px-4">
            <Field>
                
                <Textarea
                    className={clsx(
                        'block w-full resize-none rounded-lg border-none bg-blackA2 py-1.5 px-3 text-sm/6',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                    rows={2}
                />
            </Field>
        </div>
    )
}

export default TextArea