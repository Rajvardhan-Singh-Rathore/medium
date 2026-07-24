import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export const useBlogs = ()=>{
    const [loading,setLoading] = useState(true);
    const [Blogs,setBlogs] = useState([]);

    useEffect(()=>{
        const fetchedBlogs = async()=>{
            try{
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                    headers:{"Authorization":localStorage.getItem('token')}
                });
                setBlogs(()=>response.data.Blogs);
                setLoading(()=>false);
            }catch(e:any){alert(e.message);}
        }
        fetchedBlogs();
        
    },[])

    return {
        loading,Blogs
    }
}
export const useBlog = ({id}:{id:string})=>{
    interface Blog {
        id: string;
        title: string;
        content: string;
        author: {
            name: string;
        };
    }

    const [loading,setLoading] = useState(true);
    const [Blog,setBlog] = useState<Blog|null>(null);

    useEffect(()=>{
        const getBlog = async()=>{
            try{const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                headers:{"Authorization":localStorage.getItem('token')}
            })
            setBlog(()=>response.data.searchedBlog);
            setLoading(()=>false);
            }catch(e:any){alert(e);console.log(e.response);}
        }
        getBlog();
    },[])
    return {loading,Blog}
}