import { Box,Text, Heading, Img, Center } from '@chakra-ui/react';
import AllProductCarasole from './AllProductCarasole';
function AllProducts(){
    return(<Box>
        <Box h={154}>
        {/* Top empty space */}
      </Box>
      <Box px={20} pt={2}>
        <AllProductCarasole/>
      </Box>
      <Box display="flex" mx={20} mt={4}>
        <Box h={410} w="60%" bgColor="#CFD8DC"><Center> <Heading pt={100} fontSize='3xl' >Foundation Finder</Heading></Center>
        <Center><Text pt={20} px={20}>Buying the right foundation is always a difficult task. Fret not! We're bringing you the ultimate guide to find the perfect foundation for your skin tone.</Text>
        </Center>
        <Center> <Heading pt={50} fontSize='xl' color="#fc2779" >Shop Now ></Heading></Center>
        </Box>
        <Box w="40%"> <Img w="100%" src="https://www.nykaa.com/media/categoryInfo/art_banner_image/foundation_buiyingguide_banner_n3.jpg"/></Box>
      </Box>
      <Center> <Heading px={20} py={3} fontSize='3xl' >All Products</Heading></Center>
      <Box px={20} display="flex">
        <Box h={800} w="30%" border="1px solid black"></Box>
        <Box h={800} w="70%" border="1px solid black"></Box>
      </Box>
    </Box>)
}
export default AllProducts;