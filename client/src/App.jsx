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

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    setIsUserLoggedIn(!!localStorage.getItem('user'));
  }, []);
  //TODO 404
  return (
    <>
      <Navigation isUserLoggedIn={isUserLoggedIn} />
      {error && <Error error={error} setError={setError} />}
      <Routes>
        <Route path="/" element={<Home setError={setError} />} />
        <Route path="/details/:id" element={<Details setError={setError} />} />
        <Route path="/edit/:id" element={<Add setError={setError} />} />


        <Route path="/create" element={<Add setError={setError} />} />
        <Route path="/catalog" element={<Catalog setError={setError} />} />

        <Route path="/register" element={<Register setIsUserLoggedIn={setIsUserLoggedIn} setError={setError} />} />
        <Route path="/logout" element={<LogOut setIsUserLoggedIn={setIsUserLoggedIn} setError={setError} />} />
        <Route path="/login" element={<LogIn setIsUserLoggedIn={setIsUserLoggedIn} setError={setError} />} />
        <Route path="*" element={< NotFound />} />
      </Routes >
    </>
  )
}

export default App
