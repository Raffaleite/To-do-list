import { InputHTMLAttributes } from 'react'


export function Input({ ...rest } :InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input 
            className="font-sans text-base font-normal leading-[1.4rem] text-[#808080] bg-[#262626] rounded-lg p-4 w-[638px] focus:outline focus:outline-[#8284FA]" 
            {...rest}
            />
    )
}