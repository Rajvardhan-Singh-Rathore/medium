import axios from "axios";
import { useState } from "react"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = ()=>{
    const navigate = useNavigate();
    const [title,setTitle] = useState("");
    const [description,setdescription] = useState("");
    return (
        <div className="main w-full h-screen p-10 bg-zinc-200">
            <div className="contain w-full h-full bg-zinc-200 rounded-xl flex flex-col gap-3 p-2">
                <input onChange ={(e)=>setTitle(e.target.value)} className="title outline-none text-4xl text-zinc-800 px-4 py-2 font-bold h-[20%] border shadow border-zinc-300 rounded-4xl bg-zinc-100 text-wrap" type="text" placeholder="Title.."></input>
                <textarea onChange ={(e)=>setdescription(e.target.value)} className="content outline-none h-[80%] border shadow border-zinc-300 rounded-xl bg-zinc-100 text-2xl text-zinc-800 p-4" placeholder="content goes here.."></textarea>
                <div className="w-full flex justify-center">
                    <button onClick={async ()=>{
                        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                            title,
                            content:description
                        },{
                            headers:{"Authorization":localStorage.getItem('token')}
                        });
                        navigate(`/blog/${response.data.nayaBlog.id}`);
                    }} className="px-3 py-1 w-1/2 text-zinc-300 font-medium bg-zinc-800 shadow-sm border-5 border-dashed border-zinc-500 rounded-full cursor-pointer text-2xl">Publish</button>
                </div>
            </div>
        </div>
    )
}