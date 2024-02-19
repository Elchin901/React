import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = false;

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-xbox"></i>
        <i className="topIcon fa-brands fa-discord"></i>
        <i className="topIcon fa-brands fa-facebook-messenger"></i>
        <i className="topIcon fa-brands fa-spotify"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://64.media.tumblr.com/48e15d37a6c5df5c0b06965908ed607d/b900ab31943bbe56-f3/s250x400/23de9cff976c61bac8145d876405d396db4e3a32.png"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem"> <Link className="link" to="/login">
              Login
            </Link></li>
            <li className="topListItem"> <Link className="link" to="/register">
              Register
            </Link></li>
          </ul>
        )}
        <i className="topSearchIcon fa-brands fa-searchengin"></i>
      </div>
    </div>
  );
}
