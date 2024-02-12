import React from "react";
import Posts from "../../components/posts/Posts";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import './home.css'


export default function Home() {
  return (
    <>
    <Header/>
      <div className="home">
        <Posts/>
        <Sidebar/>
      </div>
    </>
  );
}
