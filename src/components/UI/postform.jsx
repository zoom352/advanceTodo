import { useState } from "react";
import MyButton from "./button/myButton";
import MyInput from "./input/MyInput";



const Postform = ({createPost}) => {

  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (event) => {
    event.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    createPost(newPost)
    setPost({title: '', body: ''})
  }


    return <div>
        <form>
        <MyInput
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})} 
        type='text'
        placeholder='название поста'/>
        <MyInput
         value={post.body}
         onChange={e => setPost({...post, body: e.target.value})}
         type='text' placeholder='описание поста'/>
        <MyButton addNewPost={addNewPost}>Create post</MyButton>
      </form>
    </div>
}


export default Postform;