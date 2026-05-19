//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.


import React from "react";
import ReactDOM from "react-dom/client";

const d = new Date("April 26, 2008 13:15:00");
let time = d.getHours();
console.log(time);

const currentTime = {
    color: ""
};

let greeting = "";
if (time < 12) {
    greeting = "Good Morning"
    currentTime.color = "red"
} else if (time < 18) {
    greeting = "Good Afternoon"
    currentTime.color = "green"
}else{
    greeting = "Good Evening"  
    currentTime.color = "blue"
};
console.log(greeting);


ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <h1 className="heading" style={currentTime}>
           {greeting}
        </h1>
    </div>
);
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
