import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import PI, {doublePi, triplePi} from "./math.js";
// import * as pie from "./math.js";
// <li>{pie.default}</li>
// <li>{pie.doublePi()}</li>

const date = new Date();
const today = date.getFullYear();
const food =
    "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/12/og-for-street-food-in-sydney.jpg";
const customStyle = {
    color: "black",
    border: "1px solid black"
};

if (today % 2 === 0) customStyle.color = "green";

ReactDOM.render(
    <div>
        <App />
        <h1 className="heading" contentEditable="false" spellCheck="false">
            My favourite foods of {today}
        </h1>
        <h1 style={customStyle}>are</h1>
        <div>
            <img src={food} alt="" />
        </div>
        <ul>
            <li>{PI}</li>
            <li>{doublePi()}</li>
            <li>{triplePi()}</li>
        </ul>
    </div>,
    document.getElementById("root")
);
