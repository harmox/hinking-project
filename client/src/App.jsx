import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './views/Nav.jsx'
import LogIn from './views/Login.jsx'
import Register from './views/Registerr.jsx'
import Add from './views/Add.jsx'
import Catalog from './views/Catalog.jsx'
import Search from './views/SearchV.jsx'
import Details from './views/Details.jsx'
import LogOut from './views/Logouts.jsx';
import Home from './views/home/Home.jsx';

function App() {

  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/search" element={<Search />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/create" element={<Add />} />

          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
