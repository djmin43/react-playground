// This is just a DOM object. variable is pointing to the object's reference.
const rootNode = document.getElementById("app");

// Where it should start
const root = ReactDOM.createRoot(rootNode);

root.render(React.createElement(App));

function App() {
    return (
        React.createElement("article", null,
            React.createElement("h2", null, "Counter"),
            React.createElement("p", null, "You clicked 1 times"),
            React.createElement("button", null, "Click me"))
    );
}

console.log(App());

let articleElements = document.getElementsByTagName("article");
let articleElement = document.getElementsByTagName("article").item(0);
console.log(articleElements);
console.log(articleElement);