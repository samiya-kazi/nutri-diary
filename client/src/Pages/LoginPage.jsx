import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import loginLottie from '../assets/lottie/121421-login.json';
import { login } from '../Services/apiClientService';

function LoginPage() {

  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState({});

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setState(prevState => { return { ...prevState, [name]: value } });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const { email, password } = state;
      const res = await login(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-row justify-around items-center">
      <Player
        autoplay
        loop
        src={loginLottie}
        style={{ height: '600px', width: '600px' }}
      />

      <form className="flex flex-col mx-10" onSubmit={handleSubmit}>
        <h1 className="font-bold self-center mb-10 mt-5 text-3xl">Login</h1>
        <div className="form-control mb-10">
          <label className="input-group input-group-lg">
            <span className="w-28 bg-primary">Email</span>
            <input type="email" name="email" placeholder="email@example.com" required className="input input-bordered w-72" onChange={handleChange} />
          </label>
        </div>

        <div className="form-control mb-10">
          <label className="input-group input-group-lg">
            <span className="w-28 bg-primary" >Password</span>
            <input type={showPassword ? "text" : "password"} name="password" required className="input input-bordered w-60" onChange={handleChange} />
            <span className="bg-primary">
              <label className='swap bg-primary'>
                <input type="checkbox" value={showPassword} />
                <FontAwesomeIcon className='swap-on' onClick={toggleShowPassword} icon={faEye} />
                <FontAwesomeIcon className='swap-off' onClick={toggleShowPassword} icon={faEyeSlash} />
              </label>
            </span>
          </label>
        </div>

        <button className="btn btn-primary" disabled={!state.email || !state.password} >Login</button>

        <p className='mt-5 self-center'>Don't have an account? <Link to="/sign-up" >Sign up</Link></p>
      </form>

      {/* <div class="toast">
        <div class="alert alert-error">
          <div>
            <span>New message arrived.</span>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default LoginPage