import logo from './logo.svg';
import {Box} from '@chakra-ui/react';
import './App.css';
import NavBar from './component/NavBar';
import Body from './component/Body';
function App() {
  return (
    <Box className="App">
  <NavBar/>
  <Body/>
    </Box>
  );
}

export default App;
