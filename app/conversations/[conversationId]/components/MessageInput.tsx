'use client';

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

type MessageInputProps = {
    id: string,
    placeholder?: string,
    required: boolean,
    type?: string,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const MessageInput = ({
    id,
    placeholder,
    required,
    type,
    register,
    errors
}:MessageInputProps) => {
    return ( 
        <div className="w-full relative">
            <input 
            id={id}
            autoComplete={id}
            placeholder={placeholder}
            type={type}
            {...register(id, {required})}
            className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none"
            />
        </div>
     );
}
 
export default MessageInput;