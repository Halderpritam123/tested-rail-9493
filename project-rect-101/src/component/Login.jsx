import { FcGoogle } from 'react-icons/fc';
import {Flex,Input,Stack,Text,useColorModeValue,Center,Heading,FormControl,HStack,PinInput,PinInputField,Button} from '@chakra-ui/react'
function Login() {
  return (
    <Flex 
    //   minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: 'xl', md: 'xl' }}>
            Login / Create Account
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          Register now ans get 2000 Sykaa reward points instantly!
        </Center>
        <Center
          fontSize={{ base: 'xs', sm: 'xs' }}
        //   fontWeight="bold"
          color={useColorModeValue('gray.800', 'gray.400')}>
            {/* ----------------- */}
          <Input w="70%" placeholder='Enter Mobile No'/>  Send OTP
        </Center>
        <FormControl>
          <Center>
            <HStack>
              <PinInput>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Center>
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Verify
          </Button>
        </Stack>
      <Center>
      <Button
        w={'full'}
        maxW={'md'}
        variant={'outline'}
        leftIcon={<FcGoogle />}>
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>
            </Stack>
          </Flex>
  );
}
export default Login;