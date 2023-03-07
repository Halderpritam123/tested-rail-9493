import { Box, Text, Heading, Img, Center } from '@chakra-ui/react';
import AdsCarousel from './AdsCarosole';
import ProductPageCarosole from './ProductPageCarosole';
import Footer from "./Footer"
import { Link } from 'react-router-dom';
function Product() {
    return (<Box>
        <Box h={154}>
            {/* Top empty space */}
        </Box>
        <AdsCarousel />
        <Center>
            <Heading>BRANDS YOU WILL LOVE</Heading>
        </Center>
        <Center>
            <Box p={6} display="grid" gridTemplateColumns='repeat(4, 1fr)' gap={10}>
                <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/creatives/cc4e2c99-402d-4c29-ae4b-0cedd27a2a6c/default.jpg?tr=w-300,cm-pad_resize" /><Heading color="#E80071" p={3} fontSize='xl'>Upto 20% Off</Heading></Box>
                <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/creatives/d0e6f90b-acf4-460e-b8b4-957d4daaa9d4/default.jpg?tr=w-300,cm-pad_resize" /><Heading color="#E80071" p={3} fontSize='xl'>Upto 30% Off</Heading></Box>
                <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/creatives/6279238e-7e14-4543-ba4f-ca8724102f4f/default.jpg?tr=w-300,cm-pad_resize" /><Heading color="#E80071" p={3} fontSize='xl'>Complexion Icons</Heading></Box>
                <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/creatives/7f85d155-d0c8-4d15-9924-f12792564e12/default.jpg?tr=w-300,cm-pad_resize" /><Heading color="#E80071" p={3} fontSize='xl'>Upto 35% Off</Heading></Box>
            </Box>
        </Center>
        <Center>
            <Box display="grid" gridTemplateColumns='repeat(3, 1fr)' gap={10}>
                <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/creatives/cc4e2c99-402d-4c29-ae4b-0cedd27a2a6c/default.jpg?tr=w-300,cm-pad_resize" /><Heading color="#E80071" p={3} fontSize='xl'>Upto 20% Off</Heading></Box>
                <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/creatives/d0e6f90b-acf4-460e-b8b4-957d4daaa9d4/default.jpg?tr=w-300,cm-pad_resize" /><Heading color="#E80071" p={3} fontSize='xl'>Upto 30% Off</Heading></Box>
                <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/creatives/6279238e-7e14-4543-ba4f-ca8724102f4f/default.jpg?tr=w-300,cm-pad_resize" /><Heading color="#E80071" p={3} fontSize='xl'>Complexion Icons</Heading></Box>
            </Box>
        </Center>
        <Center>
            <Heading>SHOP BY CATEGORY</Heading>
        </Center>
        <Center>
            <Box display="grid" gridTemplateColumns='repeat(4, 1fr)' gap={5}>
                <Link to="/product"><Box border={"1px solid gray"} boxShadow='base' borderRadius="7px"><Img src="https://images-static.nykaa.com/uploads/9b5d2e95-9862-4210-9052-69d57e266c1a.png?tr=w-300,cm-pad_resize" /></Box></Link>
                <Box border={"1px solid gray"} boxShadow='base' borderRadius="7px"><Img src="https://images-static.nykaa.com/uploads/50721198-7a1d-4bca-8ad8-41accc5e196a.png?tr=w-300,cm-pad_resize" /></Box>
                <Box border={"1px solid gray"} boxShadow='base' borderRadius="7px"><Img src="https://images-static.nykaa.com/uploads/f8f3978f-911f-4808-be05-cd2b076cbc41.png?tr=w-300,cm-pad_resize" /></Box>
                <Box border={"1px solid gray"} boxShadow='base' borderRadius="7px"><Img src="https://images-static.nykaa.com/uploads/69a2e1fb-af56-447b-a5e2-f7ed35e6631e.png?tr=w-300,cm-pad_resize" /></Box>
                <Box border={"1px solid gray"} boxShadow='base' borderRadius="7px"><Img src="https://images-static.nykaa.com/uploads/0407623b-584c-4353-8308-e78b9f2bd924.png?tr=w-300,cm-pad_resize" /></Box>
                <Box border={"1px solid gray"} boxShadow='base' borderRadius="7px"><Img src="https://images-static.nykaa.com/uploads/b60ac98f-c620-448c-af55-8cc80dc05514.png?tr=w-300,cm-pad_resize" /></Box>
                <Box border={"1px solid gray"} boxShadow='base' borderRadius="7px"><Img src="https://images-static.nykaa.com/uploads/92feebf7-949c-417f-8e4b-07a3a3f1b36d.png?tr=w-300,cm-pad_resize" /></Box>
                <Box border={"1px solid gray"} boxShadow='base' borderRadius="7px"><Img src="https://images-static.nykaa.com/uploads/f037423f-91b7-42d1-ad30-6b360134132c.png?tr=w-300,cm-pad_resize" /></Box>
            </Box>
        </Center>
        <Center>
            <Heading>BESTSELLERS</Heading>
        </Center>
        <Box>
            {/* append best seller items */}
        </Box>
        <Center>
            <Img borderRadius="7px" src="https://images-static.nykaa.com/uploads/2a2bb648-fef5-40d8-a03f-5e4c235da630.png?tr=w-1200,cm-pad_resize" />
        </Center>
        <Center>
            <Heading>New At Sykaa</Heading>
        </Center>
        <Box>
            {/* append new arrived items */}
        </Box>
        <Center>
            <Heading>MUST-HAVE MINIS</Heading>
        </Center>
        <ProductPageCarosole />
        <Center>
            <Heading mt={10}>TRENDING NOW</Heading>
        </Center>
        <Center>
        <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap={4}>
            <Box>
                <Img src="https://images-static.nykaa.com/uploads/3a4524e8-b765-400c-8d4b-903fc73c223c.jpg?tr=w-600,cm-pad_resize"/>
            </Box>
            <Box>
                <Img src="https://images-static.nykaa.com/uploads/6ecc5e91-2fe3-4b8f-a077-6d64e21ca33f.jpg?tr=w-600,cm-pad_resize"/>
            </Box>
            <Box>
                <Img src="https://images-static.nykaa.com/uploads/8bc7754d-713a-4efc-8f01-96067896719c.jpg?tr=w-600,cm-pad_resize"/>
            </Box>
            <Box>
                <Img src="https://images-static.nykaa.com/uploads/c47bee3f-8359-4766-9fb8-76d20938f4c7.jpg?tr=w-600,cm-pad_resize"/>
            </Box>
        </Box>
        </Center>
        <Center>
            <Img px={10} mt={5} w="100%" src="https://images-static.nykaa.com/uploads/2a2bb648-fef5-40d8-a03f-5e4c235da630.png?tr=w-1200,cm-pad_resize"/>
        </Center>
        <Box borderRadius="10px" mt={7} mx={10} color="white"  bg="#8c8d94">
      <Footer/>
      </Box>
    </Box>)
}
export default Product