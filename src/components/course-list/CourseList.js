import React from "react";
import CourseItem from "../course-item/CourseItem";
import "./CourseList.css";

class CourseList extends React.Component {
    handleCourseClick(mcn) {
        this.props.onClick(mcn);
    }
    handleBookmark(mcn) {
        this.props.onBookmark(mcn);
    }
    renderCourseItems() {
        this.courseItems = [];
        this.courses = this.props.courses.sort(function (a, b) {
            return a["title"].localeCompare(b["title"]);
        });
        for (let i = 0; i < this.courses.length; ++i) {
            let mcn = this.courses[i].mcn.replace(".", "-");
            let sem = this.courses[i].sem.includes("Spring") ? "s" : "f";
            sem = sem + this.courses[i].sem.slice(-2);
            let imageUrl = require(`../../resources/static/${mcn}${sem}.png`);
            this.courseItems.push(
                <CourseItem
                    key={i}
                    image={imageUrl}
                    title={this.courses[i].title}
                    mcn={this.courses[i].mcn}
                    sem={this.courses[i].sem}
                    level={this.courses[i].level}
                    onClick={(mcn) => this.handleCourseClick(mcn)}
                    onBookmark={(mcn) => this.handleBookmark(mcn)}
                />
            );
        }
        return this.courseItems;
    }
    render() {
        return (
            <div className="course-container">
                <div className="course-list">{this.renderCourseItems()}</div>
            </div>
        );
    }
}

export default CourseList;
