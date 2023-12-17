import _ from 'lodash';
import {createElement, useState} from "react";
import {createRoot} from "react-dom";
function component() {
    const element = document.createElement("div");

    element.innerHTML = _.join(["Hello", "webpack"], " ")

    return element
}

document.body.appendChild(component());

const StatefulComponent = () => {
    const [count, useCount] = useState(0)
    return (
        <div>
            {count}
        </div>
    );
};
console.log("stateful", StatefulComponent)

const childComponent = createElement("span", {className: " child"}, "I am a child component")
const testComponent = createElement("h1", {}, ["hello react", StatefulComponent])

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const render = root.render(testComponent);
console.log("render", render)

console.log(testComponent)

console.log("hello world")

