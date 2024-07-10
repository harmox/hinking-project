import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react"

import Navigation from './views/Nav.jsx'
import LogIn from './views/Login.jsx'
import Register from './views/Registerr.jsx'
import Add from './views/Add.jsx'
import Catalog from './views/Catalog.jsx'
import Details from './views/Details.jsx'
import LogOut from './views/Logouts.jsx';
import Home from './views/home/Home.jsx';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    setIsUserLoggedIn(!!localStorage.getItem('user'));
  }, []);

  return (
    <>
      <Navigation isUserLoggedIn={isUserLoggedIn} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/create" element={<Add />} />

          <Route path="/register" element={<Register setIsUserLoggedIn={setIsUserLoggedIn}/>} />
          <Route path="/logout" element={<LogOut setIsUserLoggedIn={setIsUserLoggedIn} />} />
          <Route path="/login" element={<LogIn setIsUserLoggedIn={setIsUserLoggedIn}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
