import _ from 'lodash';
import { createElement} from "react";
import {createRoot} from "react-dom";
function component() {
    const element = document.createElement("div");

    element.innerHTML = _.join(["Hello", "webpack"], " ")

    return element
}

document.body.appendChild(component());

const testComponent = createElement("h1", {}, "hello react")

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(testComponent);

console.log(testComponent)

console.log("hello world")