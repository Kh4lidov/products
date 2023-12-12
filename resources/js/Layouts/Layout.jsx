import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";

export default function Layout({ children }) {
    return (
        <Authenticated navigation={[{ route: "products", title: "Продукты" }]}>
            <div>{children}</div>
        </Authenticated>
    );
}
