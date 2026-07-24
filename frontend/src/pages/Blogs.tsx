
import { BlogCard } from "../components/BlogCard"

import { AppBar } from "../components/AppBar"
import { useBlogs } from "../hooks"
import { Link } from "react-router-dom";

export const Blogs = ()=>{

    const {loading,Blogs}= useBlogs();
    if(loading || !Blogs){
        return(
            <div className="w-full h-screen p-20 mt-20">
            <AppBar/>
            <div className="skull-main w-full h-full flex items-center justify-center p-20">

                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="flex h-[85vh] w-[95vw] mt-20 animate-pulse flex-col space-y-6 rounded-2xl bg-white p-8 overflow-hidden">
                        {/* Header Section */}
                        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                        <div>
                            <div className="h-8 w-48 rounded-lg bg-gray-200 mb-2"></div>
                            <div className="h-4 w-32 rounded bg-gray-200"></div>
                        </div>
                        <div className="h-10 w-24 rounded-lg bg-gray-200"></div>
                        </div>

                        {/* Blog Posts Grid / List */}
                        <div className="flex-1 space-y-6 overflow-hidden">
                        {/* Blog Post Item 1 */}
                        <div className="flex gap-6 border-b border-gray-100 pb-6">
                            <div className="h-28 w-40 shrink-0 rounded-xl bg-gray-200"></div>
                            <div className="flex-1 space-y-3 py-1">
                            <div className="h-6 w-3/4 rounded bg-gray-200"></div>
                            <div className="space-y-2">
                                <div className="h-4 w-full rounded bg-gray-200"></div>
                                <div className="h-4 w-5/6 rounded bg-gray-200"></div>
                            </div>
                            <div className="h-3 w-20 rounded bg-gray-200 pt-2"></div>
                            </div>
                        </div>

                        {/* Blog Post Item 2 */}
                        <div className="flex gap-6 border-b border-gray-100 pb-6">
                            <div className="h-28 w-40 shrink-0 rounded-xl bg-gray-200"></div>
                            <div className="flex-1 space-y-3 py-1">
                            <div className="h-6 w-1/2 rounded bg-gray-200"></div>
                            <div className="space-y-2">
                                <div className="h-4 w-full rounded bg-gray-200"></div>
                                <div className="h-4 w-4/5 rounded bg-gray-200"></div>
                            </div>
                            <div className="h-3 w-20 rounded bg-gray-200 pt-2"></div>
                            </div>
                        </div>

                        {/* Blog Post Item 3 (Hidden on smaller screens to fit height) */}
                        <div className="hidden md:flex gap-6">
                            <div className="h-28 w-40 shrink-0 rounded-xl bg-gray-200"></div>
                            <div className="flex-1 space-y-3 py-1">
                            <div className="h-6 w-2/3 rounded bg-gray-200"></div>
                            <div className="h-4 w-full rounded bg-gray-200"></div>
                            <div className="h-3 w-20 rounded bg-gray-200 pt-2"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>


            </div>
            </div>
        )
    }
    return (
        <div className="main w-full h-screen py-10">
            <AppBar></AppBar>
            
                <div className="mt-20 flex flex-col items-center justify-center h-full w-[90%] ml-20 p-2">
                <div className="flex flex-col w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-:none]">
                {
                    Blogs.map((el:any)=>(
                        <Link to = {`/blog/${el.id}`}>
                            <BlogCard key={el.id}authorName={el.author.name} title={el.title} content={el.content} publishedDate="D/M/Y"></BlogCard>
                        </Link>
                    ))
                }
                </div>
                </div>
            
         </div>
    )
}