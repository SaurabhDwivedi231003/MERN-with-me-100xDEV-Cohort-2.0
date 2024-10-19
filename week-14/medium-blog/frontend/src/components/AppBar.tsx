import {Link} from "react-router-dom";
import {Avatar} from "./BlogCard";


export function AppBar() {
    return (
        <div className="border-b font-semibold flex justify-between px-10">
            <Link to="/blogs" className="flex flex-col justify-center">
                Medium
            </Link>
            <div>
            
            <Link to={'/publish'}>
                <button
                    type="button"
                    className="mr-8 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                    New
                </button>
            </Link>

                <Avatar size="big" name={"Saurabh"}/>
            </div>
        </div>
    )
}
