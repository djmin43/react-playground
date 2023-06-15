import "./App.css";
import { Basic } from "./examples/basic.tsx";
import { RegisterFields } from "./examples/register-fields.tsx";
import { ExistingForm } from "./examples/existing-form.tsx";

function App() {
  return (
    <main>
      <Basic />
      <RegisterFields />
      <ExistingForm />
    </main>
  );
}

export default App;
