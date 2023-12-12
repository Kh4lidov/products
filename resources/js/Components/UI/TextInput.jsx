import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref,
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                "py-2 px-3 text-sm font-light border-gray-300 focus:border-[#0FC5FF] focus:ring-[#0FC5FF] rounded-md shadow-sm " +
                className
            }
            ref={input}
        />
    );
});
