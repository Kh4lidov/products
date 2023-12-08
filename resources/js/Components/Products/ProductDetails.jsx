import ProductPropList from "@/Components/Products/ProductPropList.jsx";

export default function ProductDetails({ data, statusTypes }) {
    return (
        <>
            <div className="flex">
                <div className="w-32">
                    <span className="text-[#FFFFFFB2]">Артикул</span>
                </div>
                <div className="w-fit">
                    <span className="text-white">{data.article}</span>
                </div>
            </div>
            <div className="flex mt-3">
                <div className="w-32">
                    <span className="text-[#FFFFFFB2]">Название</span>
                </div>
                <div className="w-fit">
                    <span className="text-white">{data.name}</span>
                </div>
            </div>
            <div className="flex mt-3">
                <div className="w-32">
                    <span className="text-[#FFFFFFB2]">Статус</span>
                </div>
                <div className="w-fit">
                    <span className="text-white">
                        {statusTypes.find((s) => s.value === data.status).name}
                    </span>
                </div>
            </div>
            <div className="flex mt-3">
                <div className="w-32">
                    <span className="text-[#FFFFFFB2]">Атрибуты</span>
                </div>
                <div className="w-fit text-white">
                    <ProductPropList props={data.data} />
                </div>
            </div>
        </>
    );
}
