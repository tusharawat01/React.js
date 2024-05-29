import React from 'react';

function Register() {

  const handleForm = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());
    console.log("Output : ", formObj);
  }

  return (
    <>
      <form onSubmit={handleForm} className='flex flex-col z-0 w-1/2 h-3/4 bg-gray-300 p-4'>
        <h1 className='text-5xl font-bold text-gray-800 mb-10'>Register Form</h1>
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
    </>
  );
}

export default Register;
