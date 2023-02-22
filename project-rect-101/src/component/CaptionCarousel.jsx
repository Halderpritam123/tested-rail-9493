import {Box,Heading} from '@chakra-ui/react';
import "./CaptionCarousel.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselProduct from "./CarouselProduct";
import { productData, responsive } from "./caurasoldata";

function CaptionCarousel() {
  const product = productData.map((item) => (
    <CarouselProduct
      url={item.imageurl}
      head1={item.head1}
      head2={item.head2}
    />
  ));

  return (
    <Box zIndex={0}>

    <Box className="CaptionCarousel">
      <Heading pl={90} fontSize='2xl' py={5}>Best In Beauty</Heading>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </Box>
    </Box>
  );
}
export default CaptionCarousel;

