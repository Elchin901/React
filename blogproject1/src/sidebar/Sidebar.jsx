import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">about me</span>
        <img
          src="https://i.pinimg.com/736x/f2/5b/5e/f25b5e30e570e77dd0707239161c704d.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          itaque natus cupiditate atque beatae perferendis quasi ad nam
          assumenda magni, rerum nemo minus, nisi reiciendis inventore. Quia
          aperiam reiciendis temporibus.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">life</li>
          <li className="sidebarListItem">music</li>
          <li className="sidebarListItem">sport</li>
          <li className="sidebarListItem">tech</li>
          <li className="sidebarListItem">cinema</li>
          <li className="sidebarListItem">book</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">follow us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-xbox"></i>
          <i className="sidebarIcon fa-brands fa-discord"></i>
          <i className="sidebarIcon fa-brands fa-facebook-messenger"></i>
          <i className="sidebarIcon fa-brands fa-spotify"></i>
        </div>
      </div>
    </div>
  );
}
