import logo from './logo.svg';
import {Box} from '@chakra-ui/react';
import './App.css';
import NavBar from './component/NavBar';
import AllRoutes from './component/AllRoutes';
function App() {
  return (
    <Box className="App">
  <NavBar/>
    <AllRoutes/>
    </Box>
  );
}

export default App;
