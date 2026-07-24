import { Input } from "./Input"
import { Button } from "./Button"
import { Link,useNavigate } from "react-router-dom"
import type { SignupInput } from "@rvsr/medium-common"
import { useState } from "react"
import axios from 'axios'
import { BACKEND_URL } from "../config"
export const Auth = ({label}:{label:"Sign up"|"Sign in"})=>{
    const [postInputs,setPostInputs] = useState<SignupInput>({ 
        name:"",
        username:"",
        password:""
    });
    const navigate = useNavigate();
    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/users/${label==="Sign in"?'signup':'signin'}`,postInputs);
            const jwt = response.data.token;
            localStorage.setItem("token",jwt);
            navigate('/blogs')
        } 
        catch(e:any){alert(e.message);}
    }

    return(
        <div className="main w-full bg-white h-full flex items-center justify-center">
            <div className="box w-[60%] shadow-lg flex flex-col gap-2 bg-white border border-zinc-200 rounded-xl p-10">
                <div className="font-semibold text-3xl">{label==="Sign up"?"Sign in":"Sign up"} to Medium</div>
                <div className="description text-xl text-zinc-800">This is a full stack blog website made by rajvardhan singh rathore,feel free to post you blogs and use the app.
                <Link className="text-sm font-semibold text-blue-400" to={label==="Sign up" ? "/signup" : "/signin"}>{label==="Sign up"?"Sign up":"Sign in"}</Link>
                </div>
                <div className="hreffect inline-flex ">
                    <div className="w-full  text-zinc-400 mr-2">
                        <hr className="mt-3"></hr>
                    </div>
                    <span className="text-lg -mt-1 text-zinc-700">or</span>
                    <div className="w-full text-zinc-400 ml-2">
                        <hr className="mt-3"></hr>
                    </div>
                </div>
                {label==="Sign in"?<Input label="Name"onChange={(e)=>{setPostInputs((p)=>({...p,name:e.target.value}))}} placeholder="Rajvardhan Singh Rathore"/>:null}
                <Input label="Email"onChange={(e)=>{setPostInputs((p)=>({...p,username:e.target.value}))}} placeholder="rvsr@gmail.com"/>
                <Input type={"password"} label="Password"onChange={(e)=>{setPostInputs((p)=>({...p,password:e.target.value}))}} placeholder="12345678"/>
                <Button onClick = {sendRequest} label={label==="Sign up"?"Sign in":"Sign up"}/>
            </div>
        </div>
    )
}