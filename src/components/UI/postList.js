import { CSSTransition, TransitionGroup } from "react-transition-group"
import PostItem from "./postItem"


const PostList = ({posts, title, removePost}) => {

  if(!posts.length) {
    return (
      <h1 style={{ textAlign: 'center' }}>its an empty</h1>
    )
  }

    return <div>
        <h1 style={{textAlign: 'center'}}>
            {title}
        </h1>
      <TransitionGroup>
         {posts.map((post, index) => 
         <CSSTransition
         key={post.id}
         timeout={500}
         classNames="post"
       >
         <PostItem removePost={removePost} number={index + 1} key={post.id} post={post}/>
         </CSSTransition>
         )}
                     
      </TransitionGroup>
    </div>
}

export default PostList