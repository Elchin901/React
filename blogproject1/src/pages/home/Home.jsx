import React from "react";
import Posts from "../../posts/Posts";
import Header from "../../header/Header";
import Sidebar from "../../sidebar/Sidebar";


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
