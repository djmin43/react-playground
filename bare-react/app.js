// This is just a DOM object. variable is pointing to the object's reference.
const rootNode = document.getElementById("app");
// Where it should start
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
    return React.createElement("section", null,
        React.createElement("h1", null, "Counters"),
        React.createElement("section", null,
            React.createElement(Counter, null))
    );
}

function Counter() {
    return (
        React.createElement("article", null,
            React.createElement("h2", null, "Counter"),
            React.createElement("p", null, "You clicked 1 times"),
            React.createElement("button", null, "Click me"))
    );
}

