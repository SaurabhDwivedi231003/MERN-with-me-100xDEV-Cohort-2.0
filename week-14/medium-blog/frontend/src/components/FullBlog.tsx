import {Blog} from "../hooks/Index"
import {AppBar} from "./AppBar"
import {Avatar} from "./BlogCard"

export default function FullBlog({blog} : {
    blog: Blog
}) {
    return (
        <div>
            <AppBar/>
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                    <div className="col-span-8">
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-2">
                            Posted on 23 October 2024
                        </div>
                        <div className="">
                            {blog.author.name}
                        </div>
                        <div className="pt-4">
                            {blog.content}
                        </div>
                    </div>

                    <div className="col-span-4">
                        <div className="text-slate-700 text-lg">
                            Auther
                        </div>
                        <div className="flex ">
                            <div className="pr-4 flex flex-col justify-center">
                                <Avatar size="big" name={blog.author.name || "Anonymous"}/>
                            </div>

                            <div>
                                <div className="text-xl font-bold">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="pt-2 text-slate-500">
                                    Random catch phrash about the auther's ability to grab user's attentions
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
