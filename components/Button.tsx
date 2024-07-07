import React from "react"
import { twMerge } from "tailwind-merge"


const Button = (props:any)=>{
    const {className,children,...otherProps} = props;
    const cn = twMerge("bg-black text-white py-2 px-4 hover:bg-slate-800",className)

    return (
      <button {...otherProps} className={cn}>
        {children}
      </button>
    )
}

export default Button;