import { Box,Stack, Center,Image,Text } from "@chakra-ui/react";
import { Link as RouterLink} from "react-router-dom";
 function ProductCard({id
,image,price1,rateing,title}){
    return(<Center>
        <RouterLink to={`/products/${id}`}>
            <Box>
        <Image src={image} h={300} w={250}/>
        <Stack>
        <Text>{title}</Text>
        <Text>{rateing}</Text>
        <Text>{price1}</Text>
        </Stack>
        </Box>
        </RouterLink>
    </Center>)
}
export default ProductCard