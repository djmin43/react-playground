// This is just a DOM object. variable is pointing to the object's reference.
const rootNode = document.getElementById("app");
// Where it should start
const root = ReactDOM.createRoot(rootNode);
let counterName = "One";
root.render(React.createElement(App));

function App() {
    return React.createElement("section", null,
        React.createElement("h1", null, "Counters"),
        React.createElement("section", null,
            counterName === "One" ? React.createElement(Counter, { name: "One" }) :
            React.createElement(Counter2, { name: "Two" }),
            ),
    );
}



function Counter(props) {
    return (
        React.createElement("article", null,
            React.createElement("h2", null, "Counter ", props.name),
            React.createElement("p", null, "You clicked 1 times"),
            React.createElement("button", null, "Click me"))
    );
}

function Counter2(props) {
    return (
        React.createElement("article", null,
            React.createElement("h2", null, "Counter ", props.name),
            React.createElement("p", null, "Times clicked: 1"),
            React.createElement("button", null, "Click me"))
    );
}


function rerender() {
    console.log("Updating...");
    counterName = "Two";
    root.render(React.createElement(App))

}
