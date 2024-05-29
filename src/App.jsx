import Password from "./component/password/Password.jsx";
import './App.css'

function App() {
  // const [password, setPassword] = useState("")
  // const [showPassword, setShowPassword] = useState(false)

  // const handelPasswordChange = (e) => setPassword(e.target.value);

  // const handelToogleButton = () => setShowPassword(!showPassword);

  return (
    <>

    {/* <label htmlFor='password'>Password : </label>
    <input     
    type={showPassword ? "text" : "password"}
    placeholder= "password" 
    id= "password"
    value= {password}
    onChange={handelPasswordChange}
    />
    <button 
    type='button'
    onClick={handelToogleButton}>
      {showPassword ? "Hide" : "Show"} 
    </button> */}
    <Password />
  
    </>
  )
}

export default App
