import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react"

import Navigation from './views/Nav.jsx'
import LogIn from './views/Login.jsx'
import Register from './views/Registerr.jsx'
import Add from './views/Add.jsx'
import Catalog from './views/catalog/Catalog.jsx'
import Details from './views/details/Details.jsx'
import LogOut from './views/Logouts.jsx';
import Home from './views/home/Home.jsx';
import Error from './errors/Error.jsx';
import NotFound from './NotFound.jsx';
import MyVisits from './views/profile/MyVisits.jsx';

import ErrorContext from './context/errorContext.js';
import isUserLogged from './context/isUSerLogged.js'
import RouterGuard from './views/guards/RouterGuard.jsx';
import LogRegGuard from './views/guards/LoginRegGuard.jsx';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    setIsUserLoggedIn(!!sessionStorage.getItem('user'));
  }, [isUserLoggedIn]);
  return (
    <>
      <ErrorContext.Provider value={{ setError, }}>
        <isUserLogged.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
          <Navigation />
          {error && <Error error={error} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />

            <Route element={<RouterGuard />}>
              <Route path="/create" element={<Add />} />
              <Route path="/edit/:id" element={<Add />} />
              <Route path="/profile" element={<MyVisits />} />
            </Route>

            <Route element={<LogRegGuard />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<LogIn />} />
            </Route>

            <Route path="/catalog" element={<Catalog />} />
            <Route path="/logout" element={<LogOut />} />

            <Route path="*" element={< NotFound isUserLoggedIn={isUserLoggedIn} />} />
          </Routes >
        </isUserLogged.Provider >
      </ErrorContext.Provider >
    </>
  )
}

export default App