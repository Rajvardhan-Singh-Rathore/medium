import type { ChangeEvent } from "react";

interface ipProps {
    label:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
    placeholder:string;
    type?:string
}
export const Input = ({type,label,onChange,placeholder}:ipProps)=>{
    return (
        <div className="flex flex-col">
            {label}
            <input type={type} onChange={onChange} placeholder={placeholder} className={`outline-none focus:border-zinc-700 border border-zinc-300 rounded-md px-3 py-2 font-thin text-lg`}></input>
        </div>
    )
}