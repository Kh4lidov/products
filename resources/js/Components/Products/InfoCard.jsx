import { PencilIcon } from "@heroicons/react/20/solid/index.js";
import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline/index.js";

export const INFO_CARD_MODE = {
    ProductDetails: 0,
    AddProduct: 1,
    EditProduct: 2,
};

export default function InfoCard({
    header,
    children,
    mode,
    onEditProduct,
    onDeleteProduct,
    onClose,
}) {
    return (
        <div className="p-3 h-full bg-gray-700">
            <div className="flex justify-between">
                <div className="w-3/4">
                    <h2 className="text-xl text-white font-medium">{header}</h2>
                </div>
                <div className="w-1/4 flex gap-2 items-center justify-end">
                    {mode === INFO_CARD_MODE.ProductDetails && (
                        <div className="flex gap-0.5 items-center">
                            <span
                                className="group p-1 bg-[#00000066] hover:opacity-75 hover:cursor-pointer"
                                onClick={onEditProduct}
                            >
                                <PencilIcon className="w-3 text-[#C4C4C4B2] group-hover:text-white" />
                            </span>
                            <span
                                className="group p-1 bg-[#00000066] hover:opacity-75 hover:cursor-pointer"
                                onClick={onDeleteProduct}
                            >
                                <TrashIcon className="w-3 text-[#C4C4C4B2] group-hover:text-red-600" />
                            </span>
                        </div>
                    )}
                    <div>
                        <XMarkIcon
                            className="w-7 text-gray-300 hover:cursor-pointer hover:text-white"
                            onClick={onClose}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-4">{children}</div>
        </div>
    );
}
