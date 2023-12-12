export default function CustomPrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `w-36 px-5 py-4 h-8 flex items-center justify-center text-sm border border-transparent rounded-md text-white bg-[#0FC5FF] hover:enabled:opacity-75 transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
