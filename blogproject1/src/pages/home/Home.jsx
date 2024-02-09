import React from "react";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../header/Header";

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
