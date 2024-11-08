import { ButtonHTMLAttributes } from 'react'

export function Button({ children, ...rest } :ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button 
        className="bg-[#1E6F9F] flex items-center leading-[1.4rem] gap-2 p-4 rounded-lg text-[#F2F2F2] font-bold font-sans text-sm hover:bg-[#2395DA] transition-colors duration-200 ease-in-out"
        {...rest}
        >
            {children}
        </button>
    )
}