import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import signUpLottie from '../assets/lottie/93385-signup.json';


function SignUpPage() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function toggleShowPassword () {
    setShowPassword(!showPassword);
  }

  function toggleShowConfirmPassword () {
    setShowConfirmPassword(!showConfirmPassword);
  }

  return (
    <div className="flex flex-row justify-around items-center">
      <form className="flex flex-col mx-10">
        <h1 className="font-bold self-center mb-10 mt-5 text-2xl">Sign Up</h1>

        <div className="form-control mb-10">
          <label className="input-group input-group-lg">
            <span className="w-28 bg-primary">Name</span>
            <input type="text" placeholder="First Name" className="input input-bordered w-40" />
            <input type="text" placeholder="Last Name" className="input input-bordered w-40" />
          </label>
        </div>

        <div className="form-control mb-10">
          <label className="input-group input-group-lg">
            <span className="w-28 bg-primary">Email</span>
            <input type="email" placeholder="email@example.com" className="input input-bordered w-80" />
          </label>
        </div>

        <div className="form-control mb-10 flex flex-row justify-between">
          <label className="input-group input-group-lg">
            <span className="w-28 bg-primary">Gender</span>
            <select className="input input-bordered">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </label>

          <label className="input-group input-group-lg w-40">
            <span className="bg-primary">Age</span>
            <input type="number" className="input input-bordered w-24" />
          </label>
        </div>

        <div className="form-control mb-10">
          <label className="input-group input-group-lg">
            <span className="w-28 bg-primary" >Password</span>
            <input type={showPassword ? "text" : "password"} className="input input-bordered w-64" />
            <span className="bg-primary">
              <label className='swap bg-primary w-8'>
                <input type="checkbox" value={showPassword}/>
                <FontAwesomeIcon className='swap-on' onClick={toggleShowPassword} icon={faEye} />
                <FontAwesomeIcon className='swap-off' onClick={toggleShowPassword} icon={faEyeSlash} />
              </label>
            </span>
          </label>
        </div>

        <div className="form-control mb-10">
          <label className="input-group input-group-lg">
            <span className="w-28 bg-primary" >Confirm</span>
            <input type={showConfirmPassword ? "text" : "password"} className="input input-bordered w-64" />
            <span className="bg-primary">
              <label className='swap bg-primary w-8'>
                <input type="checkbox" value={showConfirmPassword}/>
                <FontAwesomeIcon className='swap-on' onClick={toggleShowConfirmPassword} icon={faEye} />
                <FontAwesomeIcon className='swap-off' onClick={toggleShowConfirmPassword} icon={faEyeSlash} />
              </label>
            </span>
          </label>
        </div>

        <button className="btn btn-primary">Sign Up</button>

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