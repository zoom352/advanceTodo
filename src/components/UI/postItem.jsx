import { useEffect } from "react"
import { useHistory } from "react-router"
import PostService from "../../API/PostService"
import { useFetching } from "../../hooks/useFetching"
import PostIdPages from "../../pages/postIdPages"



const PostItem = (props) => {
  
  const router = useHistory();
  

    return <div>
        <div className='post'>
        <div className='post__content'>
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className='post__btns'>
          <button onClick={() => router.push(`/posts/${props.post.id}`)}>
            open
          </button>
          <button onClick={() => props.removePost(props.post)}>
            delete
          </button>
        </div>
      </div>
    </div>
}

export default PostItem