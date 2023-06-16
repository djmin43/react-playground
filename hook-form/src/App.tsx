import "./App.css";
import { Basic } from "./examples/basic.tsx";
import { RegisterFields } from "./examples/register-fields.tsx";
import { ExistingForm } from "./examples/existing-form.tsx";
import { HandleErrors } from "./examples/handle-errors.tsx";

function App() {
  return (
    <main>
      <Basic />
      <RegisterFields />
      <ExistingForm />
      <HandleErrors />
    </main>
  );
}

export default App;
