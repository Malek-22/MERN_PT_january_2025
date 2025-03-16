import Navbar from "./components/Navbar";
import FormWrapper from "./components/FormWrapper";
import { NameProvider } from "./components/NameContext";

function App() {
    return (
        <NameProvider>
            <Navbar />
            <FormWrapper />
        </NameProvider>
    );
}

export default App;
