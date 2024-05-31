import React, { useState } from 'react';
import Input from '../reusableComponent/Input';

function Register() {

  const [error, setError] = useState("")
  const [submitted, setSubmitted] =useState(false)
  const [data, setData] = useState([])

  const handleForm = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());

    setError("")
    if(formObj.password !== formObj.confirmPassword){
      setError("Password does not match")
      return;
    }

    if (submitted) return;

    setSubmitted(true);
    form.reset();

    const newData = {
      id: data.length + 1,
      ...formObj
    }

    setData([...data,newData])

    setTimeout(() => {
      setSubmitted(false)
    },3000)

    console.log(JSON.stringify(formObj))
  }

  
  const removeData = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center p-4">
        <form onSubmit={handleForm} className="flex flex-col w-full md:w-5/12 bg-gray-300 p-4 mb-4 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-10">Register Form</h1>
          {error && <h3 className="text-orange-500 mb-4">{error}</h3>}
          {submitted && <h3 className="text-green-500 mb-4">Form submitted successfully!</h3>}
          <Input id="firstName" label="First Name" type="text" required/>
          <Input id="lastName" label="Last Name" type="text" required />
          <Input id="email" label="Email" type="email" required />
          <Input id="password" label="Password" type="password" required />
          <Input id="confirmPassword" label="Confirm Password" type="password" required />
          <div className="mb-4 flex flex-col md:flex-row items-start">
            <label className="text-lg mr-2">Gender: </label>
            <div className="flex">
              <div className="mr-4">
                <input id="genderMale" type="radio" name="gender" value="Male" className="mr-2" required />
                <label htmlFor="genderMale">Male</label>
              </div>
              <div>
                <input id="genderFemale" type="radio" name="gender" value="Female" className="mr-2" required />
                <label htmlFor="genderFemale">Female</label>
              </div>
            </div>
          </div>
          <div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
          </div>
        </form>
        <div className="w-full md:w-5/12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Submissions</h2>
          <ul className="pl-5">
            {data.map((val) => (
              <li key={val.id} className="mb-2 flex justify-between items-center">
                <span>{val.id}. {val.firstName} {val.lastName} - {val.email}, {val.gender}</span>
                <button className="ml-4 px-2 py-1 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500" onClick={() => removeData(val.id)}>REMOVE</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}



export default Register;
