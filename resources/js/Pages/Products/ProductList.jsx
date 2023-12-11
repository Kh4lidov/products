import Layout from "@/Layouts/Layout.jsx";
import ProductPropList from "@/Components/Products/ProductPropList.jsx";
import { useState } from "react";
import { router, useForm } from "@inertiajs/react";
import CustomPrimaryButton from "@/Components/CustomPrimaryButton.jsx";
import ProductDetails from "@/Components/Products/ProductDetails.jsx";
import { INFO_CARD_MODE } from "@/Components/Common/Products/InfoCardMode.js";
import ProductForm from "@/Components/Products/ProductForm.jsx";
import InfoCard from "@/Components/Products/InfoCard.jsx";
import { PRODUCT_FORM_MODE } from "@/Components/Common/Products/ProductFormMode.js";

const statuses = [
    {
        name: "Доступен",
        value: "available",
    },
    {
        name: "Не доступен",
        value: "unavailable",
    },
];

export default function ProductList({ products }) {
    const [showInfoCard, setShowInfoCard] = useState(null);

    const addForm = useForm({
        article: "",
        name: "",
        status: statuses[0].value,
        data: [],
    });

    const editForm = useForm({});

    const submitAdd = () => {
        addForm.post(route("products.create"), {
            only: ["products"],
            onSuccess: closeInfoCard,
        });
    };

    const submitEdit = () => {
        editForm.put(
            route("products.edit", {
                productId: editForm.data.id,
            }),
            {
                only: ["products"],
                onSuccess: () => setShowInfoCard(INFO_CARD_MODE.ProductDetails),
            },
        );
    };

    const deleteProduct = async () => {
        await axios({
            url: route("products.delete", { productId: editForm.data.id }),
            method: "DELETE",
        });

        router.reload({
            only: ["products"],
            onSuccess: closeInfoCard,
        });
    };

    const handleEditProduct = () => {
        setShowInfoCard(INFO_CARD_MODE.EditProduct);
    };

    const closeInfoCard = () => {
        setShowInfoCard(null);

        if (showInfoCard === INFO_CARD_MODE.ProductDetails) {
            return;
        }

        if (showInfoCard === INFO_CARD_MODE.AddProduct) {
            addForm.reset();
            addForm.errors && addForm.clearErrors();

            return;
        }

        if (showInfoCard === INFO_CARD_MODE.EditProduct) {
            editForm.errors && editForm.clearErrors();
        }
    };

    return (
        <>
            <Layout>
                <div className="flex">
                    <div className="w-1/2">
                        <table className="text-left text-gray-500 text-xs">
                            <thead className="border-b-2 border-[#C4C4C4]">
                                <tr className="uppercase leading-3">
                                    <th className="w-48 px-5 font-normal">
                                        Артикул
                                    </th>
                                    <th className="w-48 px-5 py-3 font-normal">
                                        Название
                                    </th>
                                    <th className="w-48 px-5 py-3 font-normal">
                                        Статус
                                    </th>
                                    <th className="w-48 px-5 py-3 font-normal">
                                        Атрибуты
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((p) => (
                                    <tr
                                        key={p.id}
                                        className="border-b-2 border-[#C4C4C4] bg-white leading-4 hover:bg-gray-200 hover:cursor-pointer"
                                        onClick={() => {
                                            const newP = JSON.parse(
                                                JSON.stringify(p),
                                            );
                                            editForm.setData(newP);
                                            setShowInfoCard(
                                                INFO_CARD_MODE.ProductDetails,
                                            );
                                        }}
                                    >
                                        <td className="px-5 py-3 break-all font-normal">
                                            {p.article}
                                        </td>
                                        <td className="px-5 py-3 break-all font-normal">
                                            {p.name}
                                        </td>
                                        <td className="px-5 py-3 font-normal">
                                            {
                                                statuses.find(
                                                    (s) => s.value === p.status,
                                                ).name
                                            }
                                        </td>
                                        <td className="px-5 py-3 brek-all font-normal">
                                            <ProductPropList props={p.data} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="w-1/2">
                        {showInfoCard === null && (
                            <div className="flex justify-end mt-3 mr-5 h-fit">
                                <CustomPrimaryButton
                                    onClick={() => {
                                        setShowInfoCard(
                                            INFO_CARD_MODE.AddProduct,
                                        );
                                    }}
                                >
                                    Добавить
                                </CustomPrimaryButton>
                            </div>
                        )}
                        {showInfoCard === INFO_CARD_MODE.ProductDetails && (
                            <div className="h-96">
                                <InfoCard
                                    header={editForm.data.name}
                                    mode={INFO_CARD_MODE.ProductDetails}
                                    onEditProduct={handleEditProduct}
                                    onDeleteProduct={deleteProduct}
                                    onClose={closeInfoCard}
                                >
                                    <ProductDetails
                                        data={editForm.data}
                                        statusTypes={statuses}
                                    />
                                </InfoCard>
                            </div>
                        )}
                        {showInfoCard === INFO_CARD_MODE.AddProduct && (
                            <div className="h-fit">
                                <InfoCard
                                    header="Добавить продукт"
                                    onClose={closeInfoCard}
                                >
                                    <ProductForm
                                        form={addForm}
                                        statusTypes={statuses}
                                    />

                                    <div className="my-6">
                                        <CustomPrimaryButton
                                            disabled={addForm.processing}
                                            onClick={submitAdd}
                                        >
                                            Добавить
                                        </CustomPrimaryButton>
                                    </div>
                                </InfoCard>
                            </div>
                        )}
                        {showInfoCard === INFO_CARD_MODE.EditProduct && (
                            <div className="h-fit">
                                <InfoCard
                                    header={
                                        "Редактировать " + editForm.data.name
                                    }
                                    onClose={closeInfoCard}
                                >
                                    <ProductForm
                                        form={editForm}
                                        statusTypes={statuses}
                                        mode={PRODUCT_FORM_MODE.Edit}
                                    />

                                    <div className="my-6">
                                        <CustomPrimaryButton
                                            disabled={editForm.processing}
                                            onClick={submitEdit}
                                        >
                                            Сохранить
                                        </CustomPrimaryButton>
                                    </div>
                                </InfoCard>
                            </div>
                        )}
                    </div>
                </div>
            </Layout>
        </>
    );
}
