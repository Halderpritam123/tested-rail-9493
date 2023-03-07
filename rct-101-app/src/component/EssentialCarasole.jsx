import {Box,Text,Heading} from '@chakra-ui/react';
import "./EssentialCarasole.css";
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
      "https://images-static.nykaa.com/uploads/c59db0d6-872e-4fd1-bc64-8331897b3965.jpg?tr=w-240,cm-pad_resize",
      head1:"Moisturisers",
    },
    {
      id: 2,
      imageurl:
      "https://images-static.nykaa.com/uploads/8f8b55d5-0bfc-4545-ba05-df0177672474.jpg?tr=w-240,cm-pad_resize",
      head1:"Bath Body",
    },
    {
      id: 3,
      imageurl:
      "https://images-static.nykaa.com/uploads/aff3b609-5b3e-4d8c-8ccb-ad9157824b2d.jpg?tr=w-240,cm-pad_resize",
      head1:"Face Washes",
    },
    {
      id: 4,
      imageurl:
      "https://images-static.nykaa.com/uploads/e3424d3e-3c6f-4dd2-9cd3-d9ce46570133.jpg?tr=w-240,cm-pad_resize",
      head1:"budget Makeup",
    },
    {
      id: 5,
      imageurl:
      "https://images-static.nykaa.com/uploads/4bec33e3-9145-442b-9171-308834402eb3.jpg?tr=w-240,cm-pad_resize",
      head1:"Value Combos",
    },
    {
      id: 6,
      imageurl:
      "https://images-static.nykaa.com/uploads/d4eba2cb-bbf9-4f6c-ac47-281819f52385.jpg?tr=w-240,cm-pad_resize",
      head1:"Shampoos",
    },
];
function Essential(){
    const CarouselProduct=(props)=> {
      return (
        <Box w="79%" h={230} className="card" bgImage={props.url} >
          <Box pt="100%" >
            <Text fontSize='xl' borderRadius="10px" pl={5} bg="white">{props.head1}</Text>
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
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </Box>
    </Box>
    )
}
export default Essential;
