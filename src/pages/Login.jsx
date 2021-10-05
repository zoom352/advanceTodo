import { useContext } from "react";
import MyButton from "../components/UI/button/myButton"
import { AuthContext } from "../context";


const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = event => {
        event.preventDefault();
          setIsAuth(true)
          localStorage.setItem('auth', 'true')
    }

    const Pass = (e) => {
       return e.target.value
    }

    const Password = (e) => {
        return e.target.value
    }

    return <form onSubmit={login}>
        <input type='text' onChange={Pass}/>
        <input type='text' onChange={Password}/>
        <MyButton>enter</MyButton>
    </form>
}


export default Login