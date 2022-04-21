import React from "react";
import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <button className="button size-30" onClick={() => console.log("back")}>
                    <img src={require("../../resources/icons/back.png")} className="size-16" />
                </button>
                <button className="button size-30" style={{ marginLeft: "-10px" }} onClick={() => console.log("forward")}>
                    <img src={require("../../resources/icons/forward.png")} className="size-16" />
                </button>
                <svg className="size-24" viewBox="0 0 108 72" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                    <rect x="48" width="60" height="20" rx="10"></rect>
                    <rect x="25" y="52" width="60" height="20" rx="10"></rect>
                    <rect x="49" y="26" width="36" height="20" rx="10"></rect>
                    <rect y="52" width="20" height="20" rx="10"></rect>
                </svg>
                <div className="header-h1" id="header-app-name">
                    coursera
                </div>
                <div className="header-h2" id="header-separator">
                    /
                </div>
                <div className="header-h3" id="header-course-name">
                    Learn components in React
                </div>
                <input className="search-box" id="header-search-box" type="text" placeholder="Search for anything" />
            </div>
        );
    }
}

export default Header;
