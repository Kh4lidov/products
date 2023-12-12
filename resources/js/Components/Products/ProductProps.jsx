import InputLabel from "@/Components/UI/InputLabel.jsx";
import TextInput from "@/Components/UI/TextInput.jsx";
import { TrashIcon } from "@heroicons/react/24/outline/index.js";

export default function ProductProps({ data, onDataChange }) {
    const addNewProp = () => {
        const prop = { name: "", value: "", pseudoId: Math.random() };

        onDataChange([...data, prop]);
    };

    const changePropName = (prop, newValue) => {
        prop.name = newValue;

        onDataChange([...data]);
    };

    const changePropValue = (prop, newValue) => {
        prop.value = newValue;

        onDataChange([...data]);
    };

    const removeProp = (pseudoId) => {
        onDataChange(data.filter((d) => d.pseudoId !== pseudoId));
    };

    return (
        <>
            <ul>
                {data.map((d) => (
                    <li key={d.pseudoId} className="mt-3">
                        <div className="flex gap-2">
                            <div>
                                <InputLabel
                                    value="Название"
                                    className="text-white font-normal"
                                />
                                <TextInput
                                    className="mt-2 w-[13.5rem]"
                                    name="name"
                                    value={d.name || ""}
                                    onChange={(e) =>
                                        changePropName(d, e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <InputLabel
                                    value="Значение"
                                    className="text-white font-normal"
                                />
                                <div className="mt-2 flex items-center">
                                    <TextInput
                                        className="w-[13.5rem]"
                                        name="value"
                                        value={d.value || ""}
                                        onChange={(e) =>
                                            changePropValue(d, e.target.value)
                                        }
                                    />
                                    <div>
                                        <TrashIcon
                                            className="ml-2.5 w-4 text-gray-400 hover:text-red-600 hover:cursor-pointer"
                                            onClick={() =>
                                                removeProp(d.pseudoId)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="mt-2">
                <button
                    onClick={addNewProp}
                    className="text-xs text-[#0FC5FF] underline decoration-dashed underline-offset-[6px] hover:opacity-75"
                >
                    + Добавить атрибут
                </button>
            </div>
        </>
    );
}
