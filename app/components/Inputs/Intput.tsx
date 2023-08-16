'use client'
import clsx from 'clsx'
import {FieldValues, FieldErrors, UseFormRegister} from 'react-hook-form'

type InputProps = {
    label: string,
    id: string,
    type?: string,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    disabled?: boolean,
    errors: FieldValues
}

const Input = ({
    label,
    id,
    register,
    required,
    errors,
    type = 'text',
    disabled
}:InputProps) => {
    return ( 
        <div>
            <label 
            className="
            block 
            text-sm 
            font-medium 
            leading-6 
            text-gray-900
          "
            htmlFor={id}
            >
                {label}
           <div className='mt-2'>
             <input
                id={id}
                autoComplete={id} 
                type={type}
                {...register(id, { required } )}
                className={clsx(` 
                form-input 
                block 
                w-full 
                rounded-md 
                border-0 
                py-1.5 
                text-gray-900 
                shadow-sm 
                ring-1 
                ring-inset 
                ring-gray-300 placeholder:text-gray-400 
                focus:ring-2 
                focus:ring-inset 
                focus:ring-sky-600 
                sm:text-sm 
                sm:leading-6`, 
                errors[id] && `focus:ring-rose-500`, disabled && `opacity-50 cursor-default`)}
                />
           </div>
            </label>
        </div>
     );
}
 
export default Input;