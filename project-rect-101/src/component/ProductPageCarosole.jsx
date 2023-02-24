import {Box,Text,Heading,Img} from '@chakra-ui/react';
import "./EssentialCarasole.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
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
      "https://images-static.nykaa.com/uploads/a75ab48c-4a10-4f17-a186-5fa28bc7b94a.png?tr=w-300,cm-pad_resize",
    },
    {
      id: 2,
      imageurl:
      "https://images-static.nykaa.com/uploads/812fdde9-ad31-4239-97cd-b3fa188e4ed3.png?tr=w-300,cm-pad_resize",
    },
    {
      id: 3,
      imageurl:
      "https://images-static.nykaa.com/uploads/d0b95d76-4c82-4eea-8eae-636e624b04d3.png?tr=w-300,cm-pad_resize",
    },
    {
      id: 4,
      imageurl:
      "https://images-static.nykaa.com/uploads/3f20c6c8-ed4d-4c5f-a5e2-2c5ade72579b.png?tr=w-300,cm-pad_resize",
    },
    {
      id: 5,
      imageurl:
      "https://images-static.nykaa.com/uploads/6e1d5b47-9e41-4c75-b174-872500e7e141.png?tr=w-300,cm-pad_resize",
    },
];
function ProductPageCarosole(){
    const CarouselProduct=(props)=> {
      return (
        <Box w="79%" h={270} className="card" >
         <Img borderRadius="5px" src={props.url}/>
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
export default ProductPageCarosole;
