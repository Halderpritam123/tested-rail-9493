import React from "react";
import {Box,Img,Text} from '@chakra-ui/react';
export default function CarouselProduct(props) {
  return (
    <Box w="800px" h={250} className="card" bgImage={props.url}  >
      <Box pl={2} pt="62%" >
        <Text color="white">{props.head1}</Text>
        <Text color="white">{props.head2}</Text>
      </Box>
    </Box>
  );
}