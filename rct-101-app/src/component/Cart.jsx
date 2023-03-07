import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,Button,Input,Box
  } from '@chakra-ui/react'
  import { Icon } from '@chakra-ui/react'
  import { BsBagCheck } from "react-icons/bs";
  import { useRef } from 'react'
function Cart() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef =useRef()
  
    return (
      <>
           <Icon ref={btnRef} onClick={onOpen} as={BsBagCheck} />

        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <Box h={154}>
        {/* Top empty space */}
     </Box>
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default Cart;