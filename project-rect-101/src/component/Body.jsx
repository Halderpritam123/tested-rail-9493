import CaptionCarousel from './CaptionCarousel';
import { Box, Heading, Img, Center } from '@chakra-ui/react';
import Favourits from './FavouritesSlider';
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
        <Box p={6} display="grid" gridTemplateColumns='repeat(3, 1fr)' gap={10}>
          <Box boxShadow='base' borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/uploads/1476dbd5-7861-4e31-9fe9-aa27a6d60e14.jpg?tr=w-400,cm-pad_resize" />
            <Heading color="#E80071" p={3} fontSize='xl'>Up To 30% Off</Heading>
          </Box>
          <Box><Img borderRadius="10px" src="https://images-static.nykaa.com/uploads/8440b977-a365-4a3e-a5f9-b4c8df2e936c.jpg?tr=w-400,cm-pad_resize" /><Heading color="#E80071" p={3} fontSize='xl'>Up To 30% Off</Heading></Box>
          <Box borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/uploads/f2cf761b-b8a7-4168-b2d4-deebd99d6001.jpg?tr=w-400,cm-pad_resize" /><Heading color="#E80071" p={3} fontSize='xl'>Up To 30% Off</Heading>
          </Box>
          <Box borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/uploads/1476dbd5-7861-4e31-9fe9-aa27a6d60e14.jpg?tr=w-400,cm-pad_resize" /><Heading color="#E80071" p={3} fontSize='xl'>Purifying properties of Bergamot</Heading></Box>
          <Box><Img borderRadius="10px" src="https://images-static.nykaa.com/uploads/91c524dc-b0b8-467b-883e-b1d5fbed1e23.gif?tr=w-400,cm-pad_resize" /><Heading color="#E80071" p={3} fontSize='xl'>Up To 30% Off</Heading></Box>
          <Box borderRadius="10px"><Img borderRadius="10px" src="https://images-static.nykaa.com/uploads/f2cf761b-b8a7-4168-b2d4-deebd99d6001.jpg?tr=w-400,cm-pad_resize" /><Heading color="#E80071" p={3} fontSize='xl'>Flat 10% off on ₹1299+</Heading></Box>
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
          <Heading pl={90} py={5} fontSize='2xl'>Only At Nykaa</Heading>
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
      <Favourits/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, distinctio, omnis praesentium officiis provident recusandae expedita laudantium adipisci corporis tempora pariatur nulla corrupti quae nobis? Laborum, ipsa qui dicta voluptate quas delectus incidunt atque velit repudiandae voluptas inventore blanditiis! Ratione est animi ipsam consectetur voluptas, laudantium quis nesciunt nihil commodi earum ullam et aspernatur, saepe provident minus quidem sequi ad dolore quae facilis temporibus aut. Debitis earum recusandae sed expedita commodi, eligendi, animi consequuntur repellat explicabo aliquam maiores dicta veritatis dolor quasi illum! Incidunt id ipsa, placeat obcaecati magnam ratione debitis ea voluptatem doloribus officiis aliquam labore architecto cumque inventore?
    </Box>
  )

}
export default Body;