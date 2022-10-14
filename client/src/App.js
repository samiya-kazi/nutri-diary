import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import Navbar from './Components/Navbar';
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
      <Login />
    </ThemeProvider>
  );
}

export default App;
