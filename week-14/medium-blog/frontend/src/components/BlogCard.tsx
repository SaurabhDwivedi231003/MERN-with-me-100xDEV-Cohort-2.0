import {Link} from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export function BlogCard(
    {id, authorName, title, content, publishedDate} : BlogCardProps
) {
    return <Link to={`/blog/${id}`}>
        <div
            className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <Avatar size="small" name={authorName}/>
                <div
                    className="flex justify-center flex-col font-extralight text-slate-700 text-sm pl-2">
                    {authorName}
                </div>

                <div className="flex justify-center flex-col pl-2">
                    <Circle/>
                </div>

                <div
                    className="flex justify-center flex-col pl-2 font-thin text-sm text-slate-500">
                    {publishedDate}
                </div>
            </div>

            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="text-slate-400 text-sm font-thin pt-2">
                {`${Math.ceil(content.length / 100)} min read`}
            </div>
        </div>

    </Link>
}

export function Circle() {
    return (<div className="w-1 h-1 bg-gray-400 rounded-full"></div>)
}

export function Avatar({
    name,
    size = "small"
} : {
    name: string,
    size?: "small" | "big"
}) {
    return (

        <div
            className={`"relative inline-flex items-center justify-center ${size === "small"
                ? "w-6 h-6"
                : "w-10 h-10"} overflow-hidden bg-gray-600 rounded-full dark:bg-gray-600`}>
            <span
                className={`font-medium ${size === "small"
                    ? "text-xs"
                    : "text-md"} text-white dark:text-gray-300`}>{name[0]}</span>
        </div>

    )
}
