import React from 'react';
import { useState } from 'react';
import './Pome.css'
import { Grid, GridItem,Box,Heading, Button } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import axios from 'axios';
import { useEffect,useReducer } from 'react';
import './Search.css';
import {Search2Icon  } from '@chakra-ui/icons'
import "./FilterPanel.css"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,Checkbox,CheckboxGroup,Stack,Input
} from '@chakra-ui/react'
const initialArg={
    products:[],
    isLoading:false,
    isError:false
}
const reducer=(state,{type,payload})=>{
    switch(type){
        case "Fetch_Request":{
            return {...state,isLoading:true,isError:false}
        }
        case "Fetch_Sucess":{
            return {...state,products:payload,isLoading:false,isError:false}
        }
        case "Fetch_Faild":{
            return {...state,products:[],isLoading:false,isError:payload}
        }
        default:{
            return state;
        }
    }
}
const Pome = () => {
  const [state, dispatch] = useReducer(reducer, initialArg)
  const {products,isLoading,isError}=state
  const [page,setPage]=useState(1)
  const limit=4;
  const getData=()=>{
      dispatch({type:"Fetch_Request"})
      axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`).then(res=>{
          dispatch({type:"Fetch_Sucess",payload:res.data})
    })
          .catch(err=>
              dispatch({type:"Fetch_Faild",payload:err.message})
          
          )
}
useEffect(()=>{
  getData()
},[page])
  return (
    <Box className='home'>
      {/* search Bar  */}
      <Box className='searchBar-wrap'>
    <Search2Icon className='searchBar-icon' />
    <input
      type='text'
      placeholder='Search'
      value=""
      onChange=""
    />
  </Box>
      <Box className='home_panelList-wrap'>
        <Box className='home_panel-wrap'>
      {/* side Slide  */}
      <div>
    <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Sort By : Popularity 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <CheckboxGroup colorScheme='green' defaultValue={'Popularity'}>
  <Stack spacing={[1, 4]} direction={['column']}>
    <Checkbox value='Popularity'>Popularity</Checkbox>
    <Checkbox value='Discount'>Discount</Checkbox>
    <Checkbox value='Name'>Name</Checkbox>
    <Checkbox value='topRated'>Customer Top Rated</Checkbox>
    <Checkbox value='new'>New Arrivals</Checkbox>
    <Checkbox value='h2l'>Price: High To Low</Checkbox>
    <Checkbox value='l2h'>Price: Low To High
</Checkbox>
  </Stack>
</CheckboxGroup>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Brand
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Stack spacing={[1, 4]} direction={['column']}>
    <Box as="span" flex='1' textAlign='left'>
          <Input placeholder='Search'/>
        </Box>
        <Checkbox value='Mamaearth'>Mamaearth</Checkbox>
        <Checkbox value='NykaaCosmetics'>Nykaa Cosmetics Arrivals</Checkbox>
        <Checkbox value='Deborah'>Deborah</Checkbox>
        <Checkbox value='Revlon'>Revlon</Checkbox>
        <Checkbox value='Kryolan'>Kryolan</Checkbox>
        </Stack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Price
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Stack spacing={[1, 4]} direction={['column']}>
        <Checkbox value='0-499'>Rs. 0 - Rs. 499</Checkbox>
        <Checkbox value='500-999'>Rs. 500 - Rs. 999</Checkbox>
        <Checkbox value='1000-1999'>Rs. 1000 - Rs. 1999</Checkbox>
        <Checkbox value='2000-3999'>Rs. 2000 - Rs. 3999</Checkbox>
        </Stack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Discount
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Stack spacing={[1, 4]} direction={['column']}>
        <Checkbox value='0-499'>All Discounted Products</Checkbox>
        <Checkbox value='500-999'>40% And Above</Checkbox>
        <Checkbox value='1000-1999'>30% And Above</Checkbox>
        <Checkbox value='2000-3999'>20% And Above</Checkbox>
        <Checkbox value='2000-3999'>10% And Above
</Checkbox>
        </Stack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Preference
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Stack spacing={[1, 4]} direction={['column']}>
        <Checkbox value='vitc'>Vitamin C</Checkbox>
        <Checkbox value='Vegan'>Vegan</Checkbox>
        <Checkbox value='CrueltyFree'> Cruelty-Free
</Checkbox>
        <Checkbox value='Organic'>Organic</Checkbox>
        </Stack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Gender
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Stack spacing={[1, 4]} direction={['column']}>
        <Checkbox value='Female'>Female</Checkbox>
        <Checkbox value='Unisex'>Unisex</Checkbox>
        </Stack>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Color
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Stack spacing={[1, 4]} direction={['column']}>
        <Checkbox value='Transparent
'>Transparent
</Checkbox>
        <Checkbox value='Black
'>Black
</Checkbox>
<Checkbox value='Black
'>Pink

</Checkbox>
<Checkbox value='Purple
'>Purple
</Checkbox>
        </Stack>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  </div>
        </Box>
        <Box className='home_list-wrap'>
      {/* list  */}
      <Box>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {products?.map(el=> <GridItem key={el.id}>
                <ProductCard id={el.id} image={el.image} price1={el.price1} rating={el.rateing} title={el.title}/>
            </GridItem>)}
        <Button onClick={()=>setPage(page-1)}>Pre</Button>
        <Button>{page}</Button>
        <Button onClick={()=>setPage(page+1)}>Next</Button>
        <Button onClick={()=>setPage(1)}>Reset</Button>
</Grid>
    </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Pome;
