import React from "react";
import "./Footer.css";
import reactLogo from "../../resources/icons/react.svg";
import nodejsLogo from "../../resources/icons/nodejs.svg";
import npmLogo from "../../resources/icons/npm.svg";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-left">
                    <div className="footer-logo-box">
                        <svg className="size-30" viewBox="0 0 108 72" fill="#999999" xmlns="http://www.w3.org/2000/svg">
                            <rect x="48" width="60" height="20" rx="10"></rect>
                            <rect x="25" y="52" width="60" height="20" rx="10"></rect>
                            <rect x="49" y="26" width="36" height="20" rx="10"></rect>
                            <rect y="52" width="20" height="20" rx="10"></rect>
                        </svg>
                        <div className="footer-app-name">Coursera</div>
                    </div>
                    <div className="footer-copyright-section">Copyright © 2022 Project Platforms, Inc</div>
                </div>
                <div className="footer-center">
                    <div className="footer-menu">
                        <div className="footer-h1">COURSES</div>
                        <div className="footer-h2">Home</div>
                        <div className="footer-h2">Plans and Pricing</div>
                        <div className="footer-h2">Gift membership</div>
                        <div className="footer-h2">FAQ</div>
                        <div className="footer-h2">Community</div>
                    </div>
                    <div className="footer-menu">
                        <div className="footer-h1">COMPANY</div>
                        <div className="footer-h2">About us</div>
                        <div className="footer-h2">Support center</div>
                        <div className="footer-h2">Careers</div>
                        <div className="footer-h2">Terms</div>
                        <div className="footer-h2">Privacy</div>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-h3">Built with</div>
                    <div className="footer-built-with">
                        <a href="https://www.reactjs.org" target="_blank">
                            <img className="footer-react-logo" src={reactLogo} />
                        </a>
                        <a href="https://www.nodejs.org" target="_blank">
                            <img className="footer-nodejs-logo" src={nodejsLogo} />
                        </a>
                        <a href="https://www.npmjs.org" target="_blank">
                            <img className="footer-npm-logo" src={npmLogo} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
