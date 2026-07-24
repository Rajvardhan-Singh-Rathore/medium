export const FullBlog = ({publishedOn,title,content,AuthorName}:any)=>{
    return (
        <div className="mian w-full h-full p-10 flex gap-1 items-center justify-center">
            <div className="box1 flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                    <div className="title text-4xl font-bold">{title}</div>
                    <div className="text-zinc-500">Posted on {publishedOn}</div>
                </div>
                <div className="content text-zinc-700">{content}</div>
            </div>
            <div className="box p-10 flex flex-col gap-3 border-l border-zinc-200 rounded">
                <div className="font-medium">Author</div>
                <div className="flex p-5 gap-2 items-center">
                    <div className="avatar w-7 h-7 mt-1 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-100 border-dashed border-5 border-zinc-400">{AuthorName[0]}</div>
                    <div className="flex flex-col gap-1">
                        <div className="name text-2xl font-semibold">{AuthorName}</div>
                        <div className="designation text-zinc-400 text-sm">
                            description about the author comes here
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}