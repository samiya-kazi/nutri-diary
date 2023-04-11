import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import loginLottie from '../assets/lottie/121421-login.json';

function LoginPage() {

  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword () {
    setShowPassword(!showPassword);
  }

  return (
    <div className="flex flex-row justify-center items-center">
      <Player
        autoplay
        loop
        src={loginLottie}
        style={{ height: '600px', width: '600px' }}
      />

      <form className="flex flex-col mx-10">
        <h1 className="font-bold self-center mb-10 mt-5 text-2xl">Login</h1>
        <div className="form-control mb-10">
          <label className="input-group input-group-lg">
            <span className="w-28 bg-primary">Email</span>
            <input type="text" placeholder="email@example.com" className="input input-bordered" />
          </label>
        </div>

        <div className="form-control mb-10">
          <label className="input-group input-group-lg">
            <span className="w-28 bg-primary" >Password</span>
            <input type={showPassword ? "text" : "password"} className="input input-bordered" />
            <span className="bg-primary">
              <label className='swap bg-primary'>
                <input type="checkbox" value={showPassword}/>
                <FontAwesomeIcon className='swap-on' onClick={toggleShowPassword} icon={faEye} />
                <FontAwesomeIcon className='swap-off' onClick={toggleShowPassword} icon={faEyeSlash} />
              </label>
            </span>
          </label>
        </div>

        <button className="btn btn-primary">Login</button>

        <p className='mt-5'>Don't have an account? <Link to="/sign-up" >Sign up</Link></p>
      </form>
    </div>
  )
}

export default LoginPage