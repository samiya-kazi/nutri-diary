import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import signUpLottie from '../assets/lottie/93385-signup.json';
import { signUp } from '../Services/apiClientService';


function SignUpPage() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [state, setState] = useState({});

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function toggleShowConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setState(prevState => { return { ...prevState, [name]: value } });
  }

  async function handleSubmit (event) {
    event.preventDefault();

    try {
      const { firstName, lastName, email, gender, age, password } = state;
      const res = await signUp(firstName, lastName, email, password, gender, age);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-row justify-around items-center">
      <form className="flex flex-col mx-10" onSubmit={handleSubmit}>
        <h1 className="font-bold self-center mb-10 mt-5 text-3xl">Sign Up</h1>

        <div className="form-control mb-10">
          <label className="input-group input-group-lg">
            <span className="w-28 bg-primary">Name</span>
            <input type="text" name="firstName" placeholder="First Name" className="input input-bordered w-40" onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered w-40" onChange={handleChange} />
          </label>
        </div>

        <div className="form-control mb-10">
          <label className="input-group input-group-lg">
            <span className="w-28 bg-primary">Email</span>
            <input type="email" name="email" placeholder="email@example.com" className="input input-bordered w-80" onChange={handleChange} />
          </label>
        </div>

        <div className="form-control mb-10 flex flex-row justify-between">
          <label className="input-group input-group-lg">
            <span className="w-28 bg-primary">Gender</span>
            <select className="input input-bordered" name="gender" onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className="input-group input-group-lg w-40">
            <span className="bg-primary">Age</span>
            <input type="number" name="age" className="input input-bordered w-24" onChange={handleChange} min={13} />
          </label>
        </div>

        <div className="form-control mb-10">
          <label className="input-group input-group-lg">
            <span className="w-28 bg-primary" >Password</span>
            <input type={showPassword ? "text" : "password"} name="password" className="input input-bordered w-64" onChange={handleChange} />
            <span className="bg-primary">
              <label className='swap bg-primary w-8'>
                <input type="checkbox" value={showPassword} />
                <FontAwesomeIcon className='swap-on' onClick={toggleShowPassword} icon={faEye} />
                <FontAwesomeIcon className='swap-off' onClick={toggleShowPassword} icon={faEyeSlash} />
              </label>
            </span>
          </label>
        </div>

        <div className="form-control mb-10">
          <label className="input-group input-group-lg">
            <span className="w-28 bg-primary" >Confirm</span>
            <input type={showConfirmPassword ? "text" : "password"} name="confirm" className="input input-bordered w-64" onChange={handleChange} />
            <span className="bg-primary">
              <label className='swap bg-primary w-8'>
                <input type="checkbox" value={showConfirmPassword} />
                <FontAwesomeIcon className='swap-on' onClick={toggleShowConfirmPassword} icon={faEye} />
                <FontAwesomeIcon className='swap-off' onClick={toggleShowConfirmPassword} icon={faEyeSlash} />
              </label>
            </span>
          </label>
          <label className="label">
            <span className="label-text-alt">{state.password !== state.confirm ? "Passwords do not match." : ""}</span>
          </label>
        </div>

        <button
          className="btn btn-primary"
          disabled={!(state.firstName && state.lastName && state.email && state.gender && state.age && state.password && state.password === state.confirm && state.age >= 13)}
        >Sign Up</button>

        <p className='mt-5 self-center'>Already have an account? <Link to="/login" >Login</Link></p>
      </form>

      <Player
        autoplay
        loop
        src={signUpLottie}
        style={{ height: '500px', width: '500px' }}
      />
    </div>
  )
}

export default SignUpPage