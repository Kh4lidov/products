export default function ProductPropList({ props }) {
    return (
        <ul>
            {props.map((p, index) => (
                <li key={index}>
                    {p.name}: {p.value}
                </li>
            ))}
        </ul>
    );
}
