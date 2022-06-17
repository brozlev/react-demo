import React, { useEffect, useRef } from "react";

interface Porps {
    isFocusedInitially: boolean,
    label: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// Controlled form
export const TextField = ({label, onChange, value, isFocusedInitially}: Porps) => {

    // this ref contains a reference to the input element
    const inputRef = useRef<HTMLInputElement>(null);

    // useEffect only on the first render because it's dependency list is empty
    useEffect(() => {
        if(inputRef.current !== null && isFocusedInitially){
            // using the ref to manipulate the dom element it's attached to
            inputRef.current.focus();
        }
    }, [])


    return (
        <div>
            <div>{label}</div>
            {/* refs can be assigned to elements with the ref prop */}
            <input ref={inputRef} type="text" onChange={onChange} value={value} />
        </div>
    )
}