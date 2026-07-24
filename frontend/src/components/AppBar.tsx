import { Link } from "react-router-dom"

export const AppBar = ()=>{
    return (
        <div className="main py-1 -mt-18 flex items-center justify-center z-10">
            <div className="topBar flex justify-between px-3 py-2 rounded-lg bg-white fixed top-0 border-b border-zinc-200">
                <div className="left flex gap-1">
                    <Link to="/blogs"><div className="icon cursor-pointer mt-1 text-2xl font-medium ml-2">Medium</div></Link>
                </div>
                <div className="right flex gap-4 ml-290">
                    <Link to="/publish"><button className="cursor-pointer mt-2 self-center px-2 h-7 bg-green-400 text-zinc-800 text-lg rounded-full">publish</button></Link>
                    <button className="mt-1 px-2 py-1 text-red-500 text-lg rounded-full cursor-pointer">Logout</button>
                    <div className="flex gap-3 mt-1 font-medium">
                        <div className="avatar border border-zinc-200 p-3 shadow-sm w-8 h-8 flex items-center justify-center rounded-full bg-white">H</div>
                    </div>
                </div>
            </div>

        </div>
    )
}