import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <a href="http://itechmentor.com/"><img
        src="http://itechmentor.com/images/tech%20mentor%20final-03.jpg"
        width={150}
        alt=""
      /></a>
      
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            {/* /<a href="http://itechmentor.com/">Blog Home</a> */}
            <Link className="link" to="/">
              Blog Home
            </Link>
          </li>
          <li className="topListItem">
            {/* <Link className="link" to="http://itechmentor.com/about-us.html">
              ABOUT US
            </Link> */}
            <a className="link" href="http://itechmentor.com/about-us.html">About Us</a>
          </li>
          <li className="topListItem">
            {/* <Link
              className="link"
              to="http://itechmentor.com/digital-marketing.html"
            >
              SERVICES
            </Link> */}
            <a className="link" href="http://itechmentor.com/digital-marketing.html">Services</a>
          </li>
          <li className="topListItem">
            {/* <Link className="link" to="http://itechmentor.com/contact.html">
              CONTACT US
            </Link> */}
            <a className="link" href="http://itechmentor.com/contact.html">Contact Us</a>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              {user && "Write"}
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img
              className="topImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZQRey0i7iX8rW1JcDmtYTP2iLkss7YJOA1dQEQk1vw&s"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
               Login
              </Link>
            </li>
            {/* <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li> */}
          </ul>
        )}
        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
    </div>
  );
}
