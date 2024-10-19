import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks/Index";

function Blogs() {
    const { loading, blogs } = useBlogs();

    if (loading) {                              
        return (
            <div>
            <AppBar/>
                <div className="flex justify-center p-4">
                    <div>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    </div>
                </div>
            </div>
        ); 
    }

    return (
        <div> 
            <AppBar />
            <div className="flex justify-center p-4">
                <div>
                    {blogs.map(blog => (
                        <BlogCard
                            key={blog.id} // Add a unique key for each blog
                            id={blog.id}
                            authorName={blog.author.name || "Anonymous"} 
                            title={blog.title}
                            content={blog.content}
                            publishedDate={"26 Sept 2024"} // Update this to use actual date if available
                        />
                    ))}
                </div>
            </div>
        </div>
    );  
}

export default Blogs;
