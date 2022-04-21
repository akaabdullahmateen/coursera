import React from "react";
import "./Filler.css";

class Filler extends React.Component {
    render() {
        return (
            <div className="filler">
                <div className="filler-inner">
                    <div className="filler-h1">
                        <span style={{ color: "#03c7e8" }}>More opportunities</span> for you to learn
                    </div>
                    <div className="filler-h2">
                        We've added 58+ learning opportunities to create one of the world's most comprehensive free-to-degree online
                        learning platforms.
                    </div>
                    <div className="filler-b">
                        <div className="filler-bi">
                            <div className="filler-h3">New</div>
                            <div className="filler-h4">Executive Education</div>
                            <div className="filler-h5">Short courses to develop leadership skills</div>
                        </div>
                        <div className="filler-bi">
                            <div className="filler-h3">New</div>
                            <div className="filler-h4">Master's Degree</div>
                            <div className="filler-h5">Online degree programs from top universities</div>
                        </div>
                        <div className="filler-bi" style={{ borderRight: "0" }}>
                            <div className="filler-h3">New</div>
                            <div className="filler-h4">Bachelor's Degree</div>
                            <div className="filler-h5">Begin or complete a degree fully online</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filler;
