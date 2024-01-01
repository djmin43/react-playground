// This is just a DOM object. variable is pointing to the object's reference.
const rootNode = document.getElementById("app");
// Where it should start
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);
let counterName = "One"

function App() {
    return <section>
        <h1>Counters</h1>
        <section>
            <Counter name="One" />
        </section>
    </section>;
}

function Counter(props) {


    const [numOfClicks, setNumOfClicks] = React.useState(0);

    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked {numOfClicks} times</p>
            <button className="button" onClick={() => setNumOfClicks(numOfClicks + 1)}>
                Click me
            </button>
        </article>
    );
}




