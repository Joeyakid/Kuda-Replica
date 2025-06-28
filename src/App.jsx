import React from 'react'
import Header from './static/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiscoverPersonal from './pages/DiscoverPersonal';
import DiscoverBusiness from './pages/DiscoverBusiness';
import Blog from "./pages/Blog";
import GetHelp from "./pages/GetHelp"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<DiscoverPersonal />} />
        <Route path="/discoverbusiness" element={<DiscoverBusiness />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gethelp" element={<GetHelp />} />
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App