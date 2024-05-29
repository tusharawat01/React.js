import React from 'react'

function Register() {

  const handleForm = (e) => {
    e.preventDefault();
    let form = e.target
    let formData = new FormData(form)
    let formObj = Object.fromEntries(formData.entries())
    console.log("Output : ",formObj)
  }

  return (
    <>
      <form onSubmit={handleForm}>
      <div>
        <label 
        htmlFor="firstName">First Name : </label>
        <input
        id="firstName"
        name="firstName"
        placeholder="First Name..." 
        type="text"
        required
        />
      </div>
      <div>
        <label 
        htmlFor="lastName">Last Name : </label>
        <input
        id="lastName"
        name="lastName"
        placeholder="Last Name..." 
        type="text"
        />
      </div>
      <div>
        <label 
        htmlFor="email">Email : </label>
        <input
        id="email"
        name="email"
        placeholder="Email..." 
        type="email"
        required
        />
      </div>
      <div>
      <label 
        htmlFor="password">Password : </label>
        <input
        id="password"
        name="password"
        placeholder="Password" 
        type="password"
        required
        />
      </div>
      <div>
      <label 
        htmlFor="confirmPassword">Confirm Password : </label>
        <input
        id="confirmPassword"
        name='confirmPassword'
        placeholder="Confirm password" 
        type="password"
        required
        />
      </div>
      <div>
        <label htmlFor="gender"> Gender : </label>
        <input
        id="genderMale"
        placeholder="Add gender"
        type="radio"
        name="gender."
        value="Male"
        required  
        />Male
        <input
        id="genderFemale"
        placeholder="Add gender"
        type="radio"
        name="gender."
        value="Ladies"  
        required
        />Ladies
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>


    </form>
    </>
  )
}

export default Register
