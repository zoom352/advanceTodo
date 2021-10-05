
import { useEffect, useMemo, useRef, useState } from 'react';
import PostList from '../components/UI/postList';
import Postform from '../components/UI/postform.jsx';
// import MySelect from './components/UI/select/MySelect';
import PostFilter from '../components/UI/postFilter';
import MyModal from './../components/UI/MyModal/MyModal';
import { usePosts } from '../hooks/usePosts';

import PostService from '../API/PostService'

import { useFetching } from '../hooks/useFetching';
import { getPageCount, getPagesArray } from '../utils/pages';
import Pagination from './../components/UI/pagination/pagination';

const Posts = () => {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', search: '' })
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [modal, setModal] = useState(false)
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.search)
  const lastElement = useRef()
  const observer = useRef()
  console.log(lastElement)


  const [fetchPosts, isPostFetching, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  console.log(totalPages)

  useEffect(() => {
    if(isPostFetching) return;
    if(observer.current) observer.current.disconnect();
    var callback = function (entries, observer) {
      if (entries[0].isIntersecting && page < totalPages) {
        console.log(page)
        setPage(page + 1)
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current)
  }, [isPostFetching])


  useEffect(() => {
    fetchPosts(limit, page)
  }, [page])

  // получаем post из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const ChangePage = (page) => {
    setPage(page)
  }


  return (
    <div className="App">

      <button style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Create users
      </button>
      <MyModal visible={modal} setVisible={setModal}>
        <Postform createPost={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError &&
        <h1>the mistake was made ${postError}</h1>}

      <PostList removePost={removePost} posts={sortedAndSearchPosts}
        title='Кол-во постов' />
      <div
        ref={lastElement}
        style={{ height: 20, background: 'red' }} />
      {isPostFetching &&
        <h1>Loading</h1>}

      <Pagination page={page}
        totalPages={totalPages}
        ChangePage={ChangePage} />

    </div>
  );
}


export default Posts