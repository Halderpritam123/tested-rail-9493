import React from "react";
import {Box,Img,Text} from '@chakra-ui/react';
export default function CarouselProduct(props) {
  return (
    <Box w="98%" h={250} className="card" bgImage={props.url} >
      <Box pl={2} pt="65%" >
        <Text color="white">{props.head1}</Text>
        <Text color="white">{props.head2}</Text>
      </Box>
    </Box>
  );
}