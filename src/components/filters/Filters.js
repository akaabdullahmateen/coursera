import React from "react";
import FilterButton from "../filter-button/FilterButton";
import "./Filters.css";

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.initializeFilterList();
        this.state = {
            isActive: Array(this.filterList.length).fill(false),
        };
    }

    initializeFilterList() {
        this.filterList = [
            { text: "All Topics", param: "all-topics" },
            { text: "Algorithms and Data Structures", param: "#cat=engineering&subcat=computerscience&spec=algorithmsanddatastructures" },
            { text: "Artificial Intelligence", param: "#cat=engineering&subcat=computerscience&spec=artificialintelligence" },
            { text: "Computer Design and Engineering", param: "#cat=engineering&subcat=computerscience&spec=computerdesignandengineering" },
            { text: "Computer Networks", param: "#cat=engineering&subcat=computerscience&spec=computernetworks" },
            { text: "Cryptography", param: "#cat=engineering&subcat=computerscience&spec=cryptography" },
            { text: "Data Mining", param: "#cat=engineering&subcat=computerscience&spec=datamining" },
            { text: "Software Design and Engineering", param: "#cat=engineering&subcat=computerscience&spec=softwaredesignandengineering" },
            { text: "Theory of Computation", param: "#cat=engineering&subcat=computerscience&spec=theoryofcomputation" },
            { text: "Applied Mathematics", param: "#cat=mathematics&subcat=appliedmathematics" },
            { text: "Calculus", param: "#cat=mathematics&subcat=calculus" },
            { text: "Computation", param: "#cat=mathematics&subcat=computation" },
            { text: "Differential Equations", param: "#cat=mathematics&subcat=differentialequations" },
            { text: "Discrete Mathematics", param: "#cat=mathematics&subcat=discretemathematics" },
            { text: "Linear Algebra", param: "#cat=mathematics&subcat=linearalgebra" },
            { text: "Probability and Statistics", param: "#cat=mathematics&subcat=probabilityandstatistics" },
        ];
        this.filterList.sort(function (a, b) {
            return a["text"].localeCompare(b["text"]);
        });
        let j = -1;
        for (let i = 0; i < this.filterList.length; ++i) {
            if (this.filterList[parseInt(i)].param === "all-topics") {
                j = i;
            }
        }
        [this.filterList[j], this.filterList[0]] = [this.filterList[0], this.filterList[j]];
    }

    handleClick(i) {
        const t = Array(this.filterList.length).fill(false);
        t[i] = true;
        this.setState({ isActive: t });
        const data = require("../../resources/data/courses.json");
        let courses = [];
        for (let j in data) {
            if (this.filterList[i].text === "All Topics") {
                courses.push(data[j]);
            }
            for (let k in data[j].topics) {
                if (data[j].topics[k].subCat === this.filterList[i].text || data[j].topics[k].speciality === this.filterList[i].text) {
                    courses.push(data[j]);
                }
            }
        }
        this.props.onChange(courses);
    }

    renderFilters() {
        this.filterButtonList = [];
        for (let index = 0; index < this.filterList.length; ++index) {
            let item = (
                <FilterButton
                    key={this.filterList[index].param}
                    text={this.filterList[index].text}
                    param={this.filterList[index].param}
                    isActive={this.state.isActive[index]}
                    onClick={() => {
                        this.handleClick.bind(index);
                        this.handleClick(index);
                    }}
                />
            );
            this.filterButtonList.push(item);
        }
        return this.filterButtonList;
    }

    componentDidMount() {
        this.handleClick(0);
    }

    render() {
        return <div className="filters">{this.renderFilters()}</div>;
    }
}

export default Filters;
