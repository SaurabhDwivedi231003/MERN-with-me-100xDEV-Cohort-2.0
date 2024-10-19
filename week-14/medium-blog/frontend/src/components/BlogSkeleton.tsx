import { Circle } from "./BlogCard"

export const BlogSkeleton = () => {
  return (
  
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="h-4 w-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="flex justify-center pl-2 flex-col">
                    <Circle />
                </div>
                <div className="flex justify-center flex-col pl-2 font-thin text-sm text-slate-500">
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                </div>
            </div>

            <div className="text-xl font-semibold pt-2">
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            </div>
            <div className="text-md font-thin">
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            </div>
            <div className="text-slate-400 text-sm font-thin pt-2">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            </div>
        </div>


  )
}
