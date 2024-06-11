import Password from "./component/password/Password.jsx";
import Register from "./component/register form/Register.jsx";
import './App.css'
import Button from "./component/reusableComponent/Button.jsx";
import Calculator from "./component/calculator/Calculator.jsx";
import CheckboxList from "./component/checkbox/Checkbox.jsx";
import LocalStorage from "./component/localStorage/LocalStorage.jsx";
import ThemedComponent from "./component/Context/ThemedComponent.jsx";
import { ThemeProvider } from "./component/Context/Context.jsx";
import Counter from "./component/useRefHook/clickCounter.jsx";
import Stopwatch from "./component/useRefHook/stopwatch.jsx";

function App() {
  return (
    <>
    {/* <Password /> */}
    {/* <Register /> */}
    {/* <Calculator /> */}
    {/* <CheckboxList /> */}
    {/* <LocalStorage /> */}
    {/* <ThemeProvider >
    <ThemedComponent />
    </ThemeProvider> */}
    {/* <Counter /> */}
    <Stopwatch />
    </>
  )
}

export default App
