export default function CustomSecondButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `w-36 px-5 py-4 h-8 flex items-center justify-center text-sm border border-gray-300 rounded-md text-gray-700 bg-white hover:enabled:opacity-75 transition ease-in-out duration-150 ${
                    disabled && "opacity-50"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
