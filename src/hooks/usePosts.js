import { useMemo } from "react";


export const useSortedPosts = (posts, sort) => {

    const sortedPosts = useMemo(() => {
        console.log('function was worked')
        if (sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        } else {
          return posts;
        }
      }, [sort, posts])

      return sortedPosts;
}


export const usePosts = (posts, sort, search) => {
    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(search))
      }, [search, sortedPosts])

    return sortedAndSearchPosts
}
