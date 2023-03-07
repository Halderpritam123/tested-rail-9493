import CaptionCarousel from './CaptionCarousel';
import { Box,Text, Heading, Img, Center } from '@chakra-ui/react';
import Favourits from './FavouritesSlider';
import Essential from './EssentialCarasole';
import Footer from './Footer';
function Body() {
  return (
    <Box>
       <Box h={154}>
        {/* Top empty space */}
     </Box> 
      <CaptionCarousel />
      <Box display="flex" justifyContent="space-around">
        <Box><Img src="https://images-static.nykaa.com/uploads/9882cc03-45ed-4d66-b4a7-4d34db83e720.png?tr=w-600,cm-pad_resize" /></Box>
        <Box><Img src="https://images-static.nykaa.com/uploads/97b7c067-686a-4fe9-b32e-924dcbcb1f61.jpg?tr=w-600,cm-pad_resize" /></Box>
      </Box>
      <Box>
        <Heading pl={90} fontSize='2xl' py={5}>First Purchase App Offers</Heading>
        <Center>
          <Img borderRadius="10px" src="https://images-static.nykaa.com/uploads/8aa5e37a-3b29-46da-b782-9ed02a4ec064.jpg?tr=w-1200,cm-pad_resize" />
        </Center>
      </Box>
      <Heading pl={90} py={5} fontSize='2xl'>First Purchase App Offers</Heading>
      <Center>
        <Box display="grid" gridTemplateColumns='repeat(3, 1fr)' gap={10}>
          <Box  boxShadow='base' border="1px solid pink" borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/uploads/1476dbd5-7861-4e31-9fe9-aa27a6d60e14.jpg?tr=w-400,cm-pad_resize" />
            <Heading color="#E80071" p={3} fontSize='xl'>Up To 30% Off</Heading>
          </Box>
          <Box boxShadow='base' border="1px solid pink" borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/uploads/8440b977-a365-4a3e-a5f9-b4c8df2e936c.jpg?tr=w-400,cm-pad_resize" /><Heading color="#E80071" p={3} fontSize='xl'>Up To 30% Off</Heading></Box>
          <Box boxShadow='base' border="1px solid pink" borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/uploads/f2cf761b-b8a7-4168-b2d4-deebd99d6001.jpg?tr=w-400,cm-pad_resize" /><Heading color="#E80071" p={3} fontSize='xl'>Up To 30% Off</Heading>
          </Box>
          <Box boxShadow='base' border="1px solid pink" borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/uploads/1476dbd5-7861-4e31-9fe9-aa27a6d60e14.jpg?tr=w-400,cm-pad_resize" /><Heading color="#E80071" p={3} fontSize='xl'>Purifying properties of Bergamot</Heading></Box>
          <Box boxShadow='base' border="1px solid pink" borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/uploads/91c524dc-b0b8-467b-883e-b1d5fbed1e23.gif?tr=w-400,cm-pad_resize" /><Heading color="#E80071" p={3} fontSize='xl'>Up To 30% Off</Heading></Box>
          <Box boxShadow='base' border="1px solid pink" borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/uploads/f2cf761b-b8a7-4168-b2d4-deebd99d6001.jpg?tr=w-400,cm-pad_resize" /><Heading color="#E80071" p={3} fontSize='xl'>Flat 10% off on ₹1299+</Heading></Box>
        </Box>
      </Center>
      <Center>
        <Box p={6} display="grid" gridTemplateColumns='repeat(2, 1fr)' gap={10}>
          <Box><Img borderRadius="10px" src="https://images-static.nykaa.com/uploads/12ea9993-f29d-4732-aa66-2de20275f641.jpg?tr=w-600,cm-pad_resize" /></Box>
          <Box><Img borderRadius="10px" src="https://images-static.nykaa.com/uploads/c7ae3973-167e-4ce1-b572-1364e1f5c2e2.jpg?tr=w-600,cm-pad_resize" /></Box>
        </Box>
      </Center>
      <Box bg="#FFF6F9" mx={90}>
        <Box>
          <Heading pl={10} py={5} fontSize='2xl'>Only At Nykaa</Heading>
          <Center>
            <Box p={6} display="grid" gridTemplateColumns='repeat(3, 1fr)' gap={10}>
              <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/creatives/fd337b94-586a-457c-8d66-335bb8d47db2/default.png?tr=w-400,cm-pad_resize" />
                <Heading p={3} fontSize='lg'>Up To 20% Off</Heading>
              </Box>
              <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/creatives/f3be8ac5-6ed5-4c61-b5d4-73b3cc76dc91/default.png?tr=w-400,cm-pad_resize" /><Heading p={3} fontSize='lg'>Up To 30% Off</Heading></Box>
              <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/creatives/8a35fbc9-dcb8-40c9-a524-906297c69844/default.jpg?tr=w-400,cm-pad_resize" /><Heading p={3} fontSize='lg'>91% Saw Brighter Skin in Weeks</Heading>
              </Box>
            </Box>
          </Center>
        </Box>
        <Box>
          <Center>
            <Box p={6} display="grid" gridTemplateColumns='repeat(1, 1fr)' gap={10}>
              <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/creatives/c6b55ef7-11ea-4f51-a25c-35aafa050285/default.jpg?tr=w-400,cm-pad_resize" />
                <Heading p={3} fontSize='lg'>Up To 25% Off</Heading>
              </Box>
            </Box>
          </Center>
        </Box>
      </Box>
      <Heading pl={90} py={5} fontSize='2xl'>New at Nykaa</Heading>
      <Box>
        {/* append new arrrive data */}
      </Box>
      <Box >
        <Heading pl={90} py={5} fontSize='2xl'>Discover Our Favourites</Heading>
        <Img px={90} w="100%" borderRadius="10px" src="https://images-static.nykaa.com/uploads/82eed1ab-64b2-4cb9-818b-9b39cd9284ec.jpg?tr=w-1200,cm-pad_resize" />
      </Box>
      <Favourits />
      <Box>
        <Heading pl={90} py={5} fontSize='2xl'>Popular Picks</Heading>
        <Center>
          <Img px={90} w="100%" borderRadius="10px" src="https://images-static.nykaa.com/uploads/fd34eddd-690e-4f5b-b656-859c1e8df184.png?tr=w-1200,cm-pad_resize" />
        </Center>
        <Box></Box>
        {/* append High rating data */}
      </Box>
      <Box>
        <Heading pl={90} py={5} fontSize='2xl'>Featured Brands
        </Heading>
        <Center>
          <Box p={12} display="grid" gridTemplateColumns='repeat(5, 1fr)' gap={10}>
            <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img w="100%" borderRadius="10px" src="https://images-static.nykaa.com/creatives/7665aa19-e8cf-4b7e-81fe-948377539e14/default.jpg?tr=w-240,cm-pad_resize" />
              <Heading p={3} fontSize='lg'>Up To 20% Off</Heading>
            </Box>
            <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img w="100%" borderRadius="10px" src="https://images-static.nykaa.com/creatives/22e90ee9-35c1-4a42-b25f-fc62fb45d613/default.png?tr=w-240,cm-pad_resize" /><Heading p={3} fontSize='lg'>Up To 30% Off</Heading></Box>
            <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img w="100%" borderRadius="10px" src="https://images-static.nykaa.com/creatives/3d014b89-d850-41f6-8999-2ca0a7758214/default.jpg?tr=w-240,cm-pad_resize" /><Heading p={3} fontSize='lg'>91% Saw Brighter Skin in Weeks</Heading>
            </Box>
            <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img w="100%" borderRadius="10px" src="https://images-static.nykaa.com/creatives/3d014b89-d850-41f6-8999-2ca0a7758214/default.jpg?tr=w-240,cm-pad_resize" /><Heading p={3} fontSize='lg'>91% Saw Brighter Skin in Weeks</Heading>
            </Box>
            <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img w="100%" borderRadius="10px" src="https://images-static.nykaa.com/creatives/3d014b89-d850-41f6-8999-2ca0a7758214/default.jpg?tr=w-240,cm-pad_resize" /><Heading p={3} fontSize='lg'>91% Saw Brighter Skin in Weeks</Heading>
            </Box>
          </Box>
        </Center>
        <Center>
          <Box px={12} display="grid" gridTemplateColumns='repeat(4, 1fr)' gap={10}>
            <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img w="100%" borderRadius="10px" src="https://images-static.nykaa.com/creatives/49395ef6-0458-49fe-911f-2a415c602046/default.png?tr=w-240,cm-pad_resize" />
              <Heading p={3} fontSize='lg'>Up To 20% Off</Heading>
            </Box>
            <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img w="100%" borderRadius="10px" src="https://images-static.nykaa.com/creatives/de9fd13c-72b0-4728-846c-fcd70df8e602/default.jpg?tr=w-240,cm-pad_resize" /><Heading p={3} fontSize='lg'>Up To 30% Off</Heading></Box>
            <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img w="100%" borderRadius="10px" src="https://images-static.nykaa.com/creatives/626dee77-f0de-4ea1-94f0-9b5bde33f977/default.jpg?tr=w-240,cm-pad_resize" /><Heading p={3} fontSize='lg'>91% Saw Brighter Skin in Weeks</Heading>
            </Box>
            <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img w="100%" borderRadius="10px" src="https://images-static.nykaa.com/creatives/fb25aee3-8b4a-4f36-abc0-845590245aac/default.jpg?tr=w-240,cm-pad_resize" /><Heading p={3} fontSize='lg'>91% Saw Brighter Skin in Weeks</Heading>
            </Box>
          </Box>
        </Center>
        <Center>
          <Box px={12} py={6} display="grid" gridTemplateColumns='repeat(2, 1fr)' gap={10}>
            <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img w="100%" borderRadius="10px" src="https://images-static.nykaa.com/creatives/49395ef6-0458-49fe-911f-2a415c602046/default.png?tr=w-240,cm-pad_resize" />
              <Heading p={3} fontSize='lg'>Up To 20% Off</Heading>
            </Box>
            <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img w="100%" borderRadius="10px" src="https://images-static.nykaa.com/creatives/de9fd13c-72b0-4728-846c-fcd70df8e602/default.jpg?tr=w-240,cm-pad_resize" /><Heading p={3} fontSize='lg'>Up To 30% Off</Heading></Box>
          </Box>
        </Center>
      </Box>
      <Box bg="rgb(229, 242, 244)" pb={10}>
        <Box>
          <Heading pl={90} py={5} fontSize='2xl'>Everyday Essentials</Heading>
          <Img pb={10} w="100%" px={10} src="https://images-static.nykaa.com/uploads/2adda7a5-567a-4db1-b408-06c96be60287.jpg?tr=w-1200,cm-pad_resize"/>
         <Essential/>
        </Box>
      </Box>
      <Box>
        <Heading pt={6} fontSize='2xl' pl={10}>Game Zone</Heading>
        <Text pl={10}>Play & Win</Text>
        <Box borderRadius="10px" mt={5} mx={10} bgImage="url('https://images-static.nykaa.com/uploads/22eaef70-8ee8-45ec-9d15-2dab3ea9f621.jpg?tr=w-1200,cm-pad_resize')" bgSize="100%">
        <Box py={120} pl={10} w="50%">
        <Heading fontSize='6xl' color="white">Exciting Offers</Heading>
        <Heading fontSize='3xl' color="white">On Your Favourite Brands</Heading>
        </Box>
        </Box>
        <Box>
          <Heading pt={6} pl={10} fontSize='2xl'>Beauty Advice</Heading>
          <Text pl={10}>Discover Latest Tips & Tricks</Text>
          <Box p={10} display="grid" gridTemplateColumns="repeat(2,1fr)" gap={10}>
          <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img w="100%" borderRadius="10px" src="https://images-static.nykaa.com/uploads/71c7558d-637c-40ee-b09b-7dfda35cf125.jpg?tr=w-600,cm-pad_resize" /><Heading p={3} fontSize='lg'>Catch Up On Top Trends, Expert Advice, Fresh Launches & More</Heading>
          <Heading pl={5} fontSize='md' color="#E80071">Watch Now</Heading></Box>
          <Box border={"1px solid pink"} boxShadow='base' borderRadius="10px"><Img w="100%" borderRadius="10px" src="https://images-static.nykaa.com/uploads/e7c366df-a513-4932-9cdc-fbeda4a707a5.jpg?tr=w-600,cm-pad_resize" /><Heading p={3} fontSize='lg'>Catch Up On Top Trends,Expert Advice, Fresh Launches & More</Heading>
          <Heading pl={5} fontSize='md' color="#E80071">Read More</Heading>
          </Box>
          </Box>
        </Box>
      </Box>
      <Img px={10} w="100%" borderRadius="10px" src="https://images-static.nykaa.com/uploads/49e43a50-37b5-405a-be2d-ab90055115ec.jpg?tr=w-1200,cm-pad_resize"/>
      <Box borderRadius="10px" mt={7} mx={10} color="white"  bg="#8c8d94">
      <Footer/>
      </Box>
    </Box>
  )

}
export default Body;