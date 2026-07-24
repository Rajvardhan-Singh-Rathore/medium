interface labelForButton {
    label:string
    onClick:()=>{}
}
export const Button = ({label,onClick}:labelForButton)=>{
    return (
        <button onClick={onClick} className="px-3 py-2 bg-zinc-800 rounded-lg font-semibold text-white">{label}</button>
    )
}