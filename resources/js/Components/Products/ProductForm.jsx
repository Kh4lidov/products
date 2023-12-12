import InputLabel from "@/Components/UI/InputLabel.jsx";
import TextInput from "@/Components/UI/TextInput.jsx";
import InputError from "@/Components/UI/InputError.jsx";
import SelectBox from "@/Components/UI/SelectBox.jsx";
import ProductProps from "@/Components/Products/ProductProps.jsx";
import { usePage } from "@inertiajs/react";

export const PRODUCT_FORM_MODE = {
    Add: 0,
    Edit: 1,
};

export default function ProductForm({
    form,
    statusTypes,
    mode = PRODUCT_FORM_MODE.Add,
}) {
    const { auth } = usePage().props;

    const handleProductDataChange = (d) => {
        form.setData("data", d);
    };

    return (
        <>
            <div>
                <InputLabel
                    htmlFor="article"
                    value="Артикул"
                    className="text-white font-normal"
                />
                <TextInput
                    id="article"
                    name="article"
                    className="mt-2 w-[30rem] disabled:bg-gray-100/50 disabled:border-gray-400"
                    value={form.data.article || ""}
                    onChange={(e) => form.setData("article", e.target.value)}
                    disabled={
                        mode === PRODUCT_FORM_MODE.Edit && !auth.user.is_admin
                    }
                />
                <InputError className="mt-2" message={form.errors.article} />
            </div>
            <div className="mt-3">
                <InputLabel
                    htmlFor="name"
                    value="Название"
                    className="text-white font-normal"
                />
                <TextInput
                    id="name"
                    name="name"
                    className="mt-2 w-[30rem]"
                    value={form.data.name || ""}
                    onChange={(e) => form.setData("name", e.target.value)}
                />
                <InputError className="mt-2" message={form.errors.name} />
            </div>
            <div className="mt-3">
                <InputLabel
                    htmlFor="status"
                    value="Статус"
                    className="text-white font-normal"
                />
                <SelectBox
                    className="mt-2 w-[30rem]"
                    selected={statusTypes.find(
                        (s) => s.value === form.data.status,
                    )}
                    options={statusTypes}
                    onChange={(selectedStatus) =>
                        form.setData("status", selectedStatus.value)
                    }
                />
                <InputError className="mt-2" message={form.errors.status} />
            </div>
            <div className="mt-3">
                <div className="text-white text-md font-medium">Атрибуты</div>
                <div className="mt-2">
                    <ProductProps
                        data={form.data.data}
                        onDataChange={handleProductDataChange}
                    />
                </div>
            </div>
        </>
    );
}
