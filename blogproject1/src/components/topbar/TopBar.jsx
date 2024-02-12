import "./topbar.css";

export default function TopBar(){

    return(
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-xbox"></i>
                <i className="topIcon fa-brands fa-discord"></i>
                <i className="topIcon fa-brands fa-facebook-messenger"></i>
                <i className="topIcon fa-brands fa-spotify"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">Logout</li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                className="topImg"
                src="https://64.media.tumblr.com/48e15d37a6c5df5c0b06965908ed607d/b900ab31943bbe56-f3/s250x400/23de9cff976c61bac8145d876405d396db4e3a32.png"
                alt=""
                />
                <i className="topSearchIcon fa-brands fa-searchengin"></i>
            </div>

        </div>
    )
}