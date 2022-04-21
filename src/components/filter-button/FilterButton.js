import React from "react";
import "./FilterButton.css";

class FilterButton extends React.Component {
    render() {
        return (
            <button
                className={this.props.isActive ? "filters-button active" : "filters-button"}
                onClick={() => {
                    this.props.onClick();
                }}
            >
                {this.props.text}
            </button>
        );
    }
}

export default FilterButton;
