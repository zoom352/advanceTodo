import { useEffect } from "react"
import { useParams } from "react-router"
import { useState } from "react/cjs/react.development"
import PostService from "../API/PostService"
import { useFetching } from "../hooks/useFetching"


const PostIdPages = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return <div>
        <h2>u opened a page = {params.id}</h2>
        {isLoading ? <p>loading</p>
        :<p>{post.id}, {post.title}</p>}
    </div>
}


export default PostIdPages