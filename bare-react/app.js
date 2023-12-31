// This is just a DOM object. variable is pointing to the object's reference.
const rootNode = document.getElementById("app");
// Where it should start
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);
let counterName = "One"

function App() {
    const counterOne = <Counter name={counterName} />
    const counterTwo = <Counter2 name={counterName} />
    return <section>
        <h1>Counters</h1>
        <section>
            {counterName === "One" ? counterOne : counterTwo}
        </section>
    </section>;
}

function Counter({name}) {
    return (
        <article>
            <h2>Counter {name}</h2>
            <p>You clicked 1 times</p>
            <button className="button" onClick={rerender}>
                Click me
            </button>
        </article>
    );
}

function Counter2({name}) {
    return (
        <article>
            <h2>Counter {name}</h2>
            <p>You clicked 1 times</p>
            <button className="button">
                Click me
            </button>
        </article>
    );
}

function rerender() {
    console.log("Rerender...");
    counterName = "Two";
    root.render(React.createElement(App));
}


