import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { privateRoute, publicRoutes } from './components/route/route';
import Navbar from './components/UI/Navbar/Navbar';
import { Redirect } from 'react-router';
import { AuthContext } from './context';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';



function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    } 
    setLoading(false)
  }, [])

  if(loading) {
    return <p>loading</p>
  }

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      loading
    }}>
      <BrowserRouter>
        <Navbar />
        {isAuth
          ?
          <Switch>
            {privateRoute.map(r =>
              <Route component={r.component} path={r.path}
                exact={r.exact} 
                key={r.path}/>
            )}
            <Redirect to='/posts' />
          </Switch> :
          <Switch>
            {publicRoutes.map(pub =>
              <Route component={pub.component} path={pub.path}
                exact={pub.exact} 
                key={pub.path}/>
            )}
            <Redirect to='/login' />
          </Switch>}
      </BrowserRouter>
    </AuthContext.Provider>
  )

}

export default App;
