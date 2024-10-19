import { AppBar } from "../components/AppBar";
import { BlogSkeleton } from "../components/BlogSkeleton";
import FullBlog from "../components/FullBlog";
import { useBlog } from "../hooks/Index"
import { useParams } from "react-router-dom";

// perfect usecase of AtomFamily / selectors
// But here we are using Hooks only.
export default function Blog() {
  const {id} = useParams(); 
  const { loading, blog } = useBlog({
    id: id || ""
  });  

  if(loading){
    return(
      <div>
      <AppBar/>
          <div className="flex justify-center p-4">
              <div>
              <BlogSkeleton/>
             
              </div>
          </div>
      </div>
    )
  }

  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  )
}
 