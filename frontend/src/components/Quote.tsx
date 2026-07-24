export const Quote = ()=>{
    return(
        <div className = "main relative border-zinc-300 p-20 bg-white w-full text-[#242424] h-full flex items-center justify-center">
            <div className="absolute left-0 top-1/2 h-4/5 w-px -translate-y-1/2 bg-gray-400"></div>

            <div className ="pl-4"></div>
            <div className="quote p-1 flex flex-col font-medium">
                <div className="text-3xl font-medium self-center">"The customer service I received was exceptional. The support team went above and beyond to address my concerns."</div>
                <div className="mt-4">Jules Winnfield</div>
                <div className=" text-zinc-400">CEO Active Inc</div>
            </div>
        </div>
    )
}