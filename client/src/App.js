import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Login from './Pages/Login';
import Register from './Pages/Register';

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

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
