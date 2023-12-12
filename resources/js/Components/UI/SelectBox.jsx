import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function SelectBox({
    selected,
    options,
    onChange,
    className,
    disabled,
}) {
    return (
        <div className={"relative " + className}>
            <Listbox value={selected} onChange={onChange} disabled={disabled}>
                <div className="relative mt-1">
                    <Listbox.Button
                        className={({ open }) =>
                            "relative text-sm w-full py-2 px-3 border-gray-300 focus:border-[#0FC5FF] focus:ring-[#0FC5FF] rounded-md shadow-sm text-left form-input " +
                            (open ? "focus-ring" : "")
                        }
                    >
                        <span className="block truncate font-light">
                            {selected && selected.name} &nbsp;
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {options.map((item, itemIndex) => (
                                <Listbox.Option
                                    key={itemIndex}
                                    className={({ active }) =>
                                        "relative cursor-pointer select-none py-1 px-3 " +
                                        (active && "bg-[#50A9FC]")
                                    }
                                    value={item}
                                >
                                    <span className="block truncate font-light">
                                        {item.name}
                                    </span>
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}
