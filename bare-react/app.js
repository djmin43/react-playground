const rootNode = document.getElementById("app");

// Where it should start
const root = ReactDOM.createRoot(rootNode);

root.render(React.createElement(App));

function App() {
    console.log("Called App")

    return React.createElement("button", null, "Click me");
}

console.log(App());