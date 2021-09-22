import './App.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import PostList from './components/UI/postList';
import MyButton from './components/UI/button/myButton';
import MyInput from './components/UI/input/MyInput';
import Postform from './components/UI/postform.jsx';
import MySelect from './components/UI/select/MySelect';
import PostFilter from './components/UI/postFilter';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';
import PostService from './API/PostService';
import { useFetching } from './hooks/useFetching';



function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', search: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.search)
  // const [isPostFetching, setIsPostFetching] = useState(false)
  const [fetchPosts, isPostFetching, postError] = useFetching(async () => {
  const response = await PostService.getAll();
    setPosts(response.data)
  })


  useEffect( () => {
    fetchPosts()
  }, [])

  // получаем post из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }


  return (
    <div className="App">
      
      <button style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Create users
      </button>
      <MyModal visible={modal} setVisible={setModal}>
        <Postform createPost={createPost}/>
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError && 
          <h1>the mistake was made ${postError}</h1>}

        {isPostFetching ? <h1>Loading</h1> : <PostList removePost={removePost} posts={sortedAndSearchPosts}
          title='Кол-во постов' />}
    </div>
  );
}

export default App;
