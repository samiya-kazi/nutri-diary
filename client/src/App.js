import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="w-full" data-theme="customTheme">
      <Router>
      <NavBar />
        <Routes>
          <Route path='/login' Component={LoginPage}/>
          <Route path='/sign-up' Component={SignUpPage}/>
          <Route path='/dashboard' Component={Dashboard}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
