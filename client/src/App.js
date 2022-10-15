import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Diary from './Pages/Diary';
import AddFoodPage from './Pages/AddFoodPage';
import Profile from './Pages/Profile';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d5453',
    },
    secondary: {
      main: '#6bd1c2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Register />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/diary' element={<Diary />} />
          <Route exact path='/addfood' element={<AddFoodPage />} />
          <Route exact path='/profile' element={<Profile />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
