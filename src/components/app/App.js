import React from "react";
import Header from "../header/Header";
import Content from "../content/Content";
import Footer from "../footer/Footer";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default App;
