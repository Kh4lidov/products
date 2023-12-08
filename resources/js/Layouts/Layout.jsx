import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import { Head } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <Authenticated navigation={[{ route: "products", title: "Продукты" }]}>
            <Head title="Администратор" />

            <div>{children}</div>
        </Authenticated>
    );
}
