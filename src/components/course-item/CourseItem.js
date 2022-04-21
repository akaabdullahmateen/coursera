import React from "react";
import "./CourseItem.css";

class CourseItem extends React.Component {
    render() {
        this.title = this.props.title;
        let titleParts = this.title.split(" ");
        let titleSize = titleParts.length;
        if (titleSize > 7) {
            titleParts = titleParts.slice(0, 7);
            let t = titleParts.join(" ");
            t = t + " ...";
            this.title = t;
        }
        return (
            <div
                className="course-item"
                onClick={() => {
                    this.props.onClick(this.props.mcn);
                }}
            >
                <div className="course-header">
                    <img className="course-image" alt="" src={this.props.image} />
                </div>
                <div className="course-body">
                    <div className="course-title">{this.title}</div>
                    <div className="course-h course-mcn">{this.props.mcn}</div>
                    <div className="course-h course-sem">{this.props.sem}</div>
                    <div className="course-h course-level">{this.props.level}</div>
                    <button
                        className="button course-button"
                        onClick={(event) => {
                            this.props.onBookmark(this.props.mcn);
                            event.stopPropagation();
                        }}
                    >
                        <img className="course-button-image" src={require("../../resources/icons/bookmark.png")} alt="" />
                    </button>
                </div>
            </div>
        );
    }
}

export default CourseItem;
