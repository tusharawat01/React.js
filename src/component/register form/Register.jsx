import React, { useState } from 'react';

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
      <div className='flex'>
      <form onSubmit={handleForm} className='flex flex-col z-0 w-5/12 h-fit bg-gray-300 p-4'>
        <h1 className='text-5xl font-bold text-gray-800 mb-10'>Register Form</h1>
        {error && <h3 className=' text-orange-500'>{error}</h3>}
        {submitted && <h3 className='text-green-500'>Form submitted successfully!</h3>}
        <div className='mb-4 flex flex-col items-start'>
          <label htmlFor="firstName" className="text-lg">First Name: </label>
          <input
            id="firstName"
            name="firstName"
            placeholder="First Name..." 
            type="text"
            className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            required
          />
        </div>
        <div className='mb-4 flex flex-col items-start'>
          <label htmlFor="lastName" className='text-lg'>Last Name: </label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Last Name..." 
            type="text"
            className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            required
          />
        </div>
        <div className='mb-4 flex flex-col items-start'>
          <label htmlFor="email" className='text-lg'>Email: </label>
          <input
            id="email"
            name="email"
            placeholder="Email..." 
            type="email"
            className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            required
          />
        </div>
        <div className='mb-4 flex flex-col items-start'>
          <label htmlFor="password" className='text-lg'>Password: </label>
          <input
            id="password"
            name="password"
            placeholder="Password" 
            type="password"
            className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            required
          />
        </div>
        <div className='mb-4 flex flex-col items-start'>
          <label htmlFor="confirmPassword" className='text-lg'>Confirm Password: </label>
          <input
            id="confirmPassword"
            name='confirmPassword'
            placeholder="Confirm password" 
            type="password"
            className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
            required
          />
        </div>
        <div className='mb-4 flex  items-start'>
          <label className='text-lg mr-10'>Gender: </label>
          <div>
            <input
              id="genderMale"
              type="radio"
              name="gender"
              value="Male"
              className='mr-2'
              required
            />
            <label htmlFor="genderMale" className='mr-4'>Male</label>
          </div>
          <div>
            <input
              id="genderFemale"
              type="radio"
              name="gender"
              value="Female"
              className='mr-2'
              required
            />
            <label htmlFor="genderFemale">Female</label>
          </div>
        </div>
        <div>
          <button type="submit" className='px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>Submit</button>
        </div>
      </form>
      <div className='ml-10 text-center'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Submissions</h2>
        <ul className='pl-5'>
          {data.map((val) => (
            <li key={val.id} className='mb-2 flex justify-between items-center'>
              <span>{val.id}. {val.firstName} {val.lastName} - {val.email}, {val.gender}</span>
              <button className='ml-4 px-2 py-1 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500' onClick={() => removeData(val.id)}>REMOVE</button>
            </li>
          ))}
        </ul>
      </div>
      </div>
     
    </>
  );
}

export default Register;
