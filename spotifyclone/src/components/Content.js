import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "views/Home";
import Search from "views/Search";
import Collection from "views/Collection";

function Content() {
  return (
    <main className="flex-auto">
        <Navbar/>
        <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Search" element={<Search/>} />
        <Route path="Collection" element={<Collection/>}/>
        </Routes>
    </main>
  )
}

export default Content
