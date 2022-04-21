import React from "react";
import Filler from "../filler/Filler";
import Filters from "../filters/Filters";
import CourseList from "../course-list/CourseList";
import CoursePage from "../course-page/CoursePage";
import "./Content.css";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            isCourseSelected: false,
        };
    }
    handleChange(courses) {
        this.setState({ courses: courses });
    }
    handleCourseClick(mcn) {
        this.setState({ isCourseSelected: true });
        console.log(mcn);
    }
    handleBookmark(mcn) {
        console.log(`Bookmark:${mcn}`);
    }
    render() {
        return this.state.isCourseSelected ? (
            <CoursePage />
        ) : (
            <div className="content">
                <Filler />
                <Filters onChange={(courses) => this.handleChange(courses)} />
                <CourseList
                    courses={this.state.courses}
                    onClick={(mcn) => this.handleCourseClick(mcn)}
                    onBookmark={(mcn) => this.handleBookmark(mcn)}
                />
            </div>
        );
    }
}

export default Content;
