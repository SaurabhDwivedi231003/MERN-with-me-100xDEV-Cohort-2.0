import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Blog {
    id: number;
    title: string;
    content: string;
    author: {
        name: string;
    };
}

export const useBlog = ({id} : {id : string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => { 
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                });
                setBlog(response.data.blog);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchBlog();
    }, [id]);
    
    return { loading, blog }; // Return an object
}

export const useBlogs = () => { 
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]); // Initialize as Blog[]

    useEffect(() => { 
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                });
                setBlogs(response.data.blogs);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchBlogs();
    }, []);
    
    return { loading, blogs }; // Return an object
};
