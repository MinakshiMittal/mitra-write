import { Link } from "react-router-dom";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
// import LightThemeIcon from "../../assets/LightThemeIcon.svg";
import "./SideNav.css";

defineLordIconElement(loadAnimation);

export const SideNav = () => {
  return (
    <div className="side-nav-container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <i className="fas fa-sticky-note nav"></i>
      </Link>
      <Link to="/archived-notes" style={{ textDecoration: "none" }}>
        <i className="fas fa-archive nav"></i>
      </Link>
      {/* <Link to="/history" style={{ textDecoration: "none" }}>
        <i className="fas fa-history icon-style"></i>
      </Link> */}
      {/* <Link to="/labels" style={{ textDecoration: "none" }}>
        <i className="fas fa-tags nav"></i>
      </Link> */}

      {/* <img src={LightThemeIcon} alt="light theme icon" className="icon-style" /> */}
    </div>
  );
};
