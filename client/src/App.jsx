import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react"

import Navigation from './views/Nav.jsx'
import LogIn from './views/Login.jsx'
import Register from './views/Registerr.jsx'
import Add from './views/Add.jsx'
import Catalog from './views/Catalog.jsx'
import Details from './views/details/Details.jsx'
import LogOut from './views/Logouts.jsx';
import Home from './views/home/Home.jsx';
import Error from './errors/Error.jsx';
import NotFound from './NotFound.jsx';
import MyVisits from './views/MyVisits.jsx';
import ErrorContext from './context/errorContext.js';
import isUserLogged from './context/isUSerLogged.js'




function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    setIsUserLoggedIn(!!localStorage.getItem('user'));
  }, []);
  return (
    <>
      <ErrorContext.Provider value={{ setError, }}>
        <isUserLogged.Provider value={{ setIsUserLoggedIn }}>
          <Navigation isUserLoggedIn={isUserLoggedIn} />
          {error && <Error error={error} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/edit/:id" element={<Add />} />

            <Route path="/create" element={<Add />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/profile" element={<MyVisits />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/login" element={<LogIn />} />

            <Route path="*" element={< NotFound isUserLoggedIn={isUserLoggedIn} />} />
          </Routes >
        </isUserLogged.Provider >
      </ErrorContext.Provider >
    </>
  )
}

export default App