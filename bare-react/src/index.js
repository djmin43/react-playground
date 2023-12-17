import _ from 'lodash';
import { createElement} from "react";
function component() {
    const element = document.createElement("div");

    element.innerHTML = _.join(["Hello", "webpack"], " ")

    return element
}

document.body.appendChild(component());

const testComponent = createElement("h1", {}, "hello react")

console.log(testComponent)

console.log("hello world")