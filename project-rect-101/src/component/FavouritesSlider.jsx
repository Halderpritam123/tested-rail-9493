import {Box,Text,Heading} from '@chakra-ui/react';
import "./FavouriteSlider.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  export const productData = [
    {
      id: 1,
      imageurl:
      "https://images-static.nykaa.com/uploads/1924a249-3bef-4a9c-8095-d5a9c2076569.jpg?tr=w-240,cm-pad_resize",
      head1:"Floral Fragnance",
    },
    {
      id: 2,
      imageurl:
      "https://images-static.nykaa.com/uploads/ccc99a7a-3aec-4a7b-8e40-57ab39e4097e.jpg?tr=w-240,cm-pad_resize",
      head1:"Sunscreens",
    },
    {
      id: 3,
      imageurl:
      "https://images-static.nykaa.com/uploads/207d5407-b589-4aeb-b5f3-54a9143ed8f5.jpg?tr=w-240,cm-pad_resize",
      head1:"Luxe Minis",
    },
    {
      id: 4,
      imageurl:
      "https://images-static.nykaa.com/uploads/b2df2716-c39d-40a7-b2a5-76c728a2590b.jpg?tr=w-240,cm-pad_resize",
      head1:"Luxe Minis",
    },
    {
      id: 5,
      imageurl:
      "https://images-static.nykaa.com/uploads/f922641b-03ce-4627-b0fe-1cd512a2af30.jpg?tr=w-240,cm-pad_resize",
      head1:"Blushes",
    },
    {
      id: 6,
      imageurl:
      "https://images-static.nykaa.com/uploads/ad2c3fa0-3f81-4fe2-a99c-5e5e59e95407.jpg?tr=w-240,cm-pad_resize",
      head1:"Lipsticks",
    },
    {
      id: 7,
      imageurl:
      "https://images-static.nykaa.com/uploads/3665639b-9bd5-4ff1-a3f8-a1d125b4d536.jpg?tr=w-240,cm-pad_resize",
      head1:"Foundation",
    },
    {
      id: 8,
      imageurl:
      "https://images-static.nykaa.com/uploads/86a11d9e-818b-48e4-9435-cb886f4e3762.jpg?tr=w-240,cm-pad_resize",
      head1:"Floral Fragnance",
    },
    {
      id: 9,
      imageurl:
      "https://images-static.nykaa.com/uploads/86a11d9e-818b-48e4-9435-cb886f4e3762.jpg?tr=w-240,cm-pad_resize",
      head1:"Sunscreens",
    },
    {
        id: 10,
        imageurl:
        "https://images-static.nykaa.com/uploads/2e8f18d5-06d0-4aab-8d8e-7644aa54023f.jpg?tr=w-240,cm-pad_resize",
        head1:" Weight Management",     
    },
    {
        id: 11,
        imageurl:
        "https://images-static.nykaa.com/uploads/c225c3e8-57c4-4e77-9162-c58426b81381.jpg?tr=w-240,cm-pad_resize",
        head1:"Budget-Friendly Cleansers",
    },
];
function Favourits(){
    const CarouselProduct=(props)=> {
      return (
        <Box border={"1px solid pink"} w="79%" h={300} className="card" bgImage={props.url} >
          <Box pt="111.6%" >
            <Text p={1} borderRadius="10px" pl={5} bg="white">{props.head1}</Text>
          </Box>
        </Box>
      );
    }
    const product = productData.map((item) => (
        <CarouselProduct
        url={item.imageurl}
        head1={item.head1}
        />
        ));
    return(
        <Box zIndex={0}>
    <Box className="CaptionCarousel">
      <Heading pl={90} fontSize='2xl' py={5}>Best In Beauty</Heading>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </Box>
    </Box>
    )
}
export default Favourits;
// import CarouselProduct from "./CarouselProduct";
// import { productData, responsive } from "./caurasoldata";
// import React from "react";
// import {Box,Img,Text} from '@chakra-ui/react';