import logo from './logo.svg';
import {Box} from '@chakra-ui/react';
import './App.css';
import NavBar from './component/NavBar';
import Body from './component/Body';
import Product from './component/Product';
import AllProducts from './component/AllProduces';
function App() {
  return (
    <Box className="App">
  <NavBar/>
    {/* <Product/> */}
  {/* <Body/> */}
    <AllProducts/>
    </Box>
  );
}

export default App;
