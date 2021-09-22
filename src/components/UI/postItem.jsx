


const PostItem = (props) => {

    return <div>
        <div className='post'>
        <div className='post__content'>
          <strong>{props.number}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div>
          <button onClick={() => props.removePost(props.post)} className='post__btns'>
            delete
          </button>
        </div>
      </div>
    </div>
}

export default PostItem