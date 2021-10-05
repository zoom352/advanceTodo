import About from "../../pages/about";
import Login from "../../pages/Login";
import PostIdPages from "../../pages/postIdPages";
import Posts from "../../pages/posts";


export const privateRoute = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPages, exact: true},
]


export const publicRoutes = [
    {path: '/login', component: Login, exact: true}
]