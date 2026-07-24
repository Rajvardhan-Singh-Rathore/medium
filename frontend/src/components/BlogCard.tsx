interface BlogContents{
    authorName   :string,
    title        :string,
    content      :string,
    publishedDate:string
}
export const BlogCard = ({authorName,title,content,publishedDate}:BlogContents)=>{
    return (
        <div className="main w-full h-full p-5 border-b border-zinc-400">
            <div className="header">
                <div className="head1 flex gap-1">
                    <div className="avatar bg-red-400 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-xl">{authorName[0]}</div>
                    <span className="flex items-center text-lg font">{authorName}</span>
                    <span className="flex items-center text-lg font text-zinc-400">{publishedDate}</span>
                </div>
            </div>
            <div className="title text-2xl font-medium">
                {title}
            </div>
            <div className="content text-zinc-700">
                {content}
            </div>
            <div className="footer flex items-center justify-between">
                <div className="inner1 flex">
                    <div className="text-zinc-400">3 min read</div>
                </div>
            </div>
        </div>
    )
}