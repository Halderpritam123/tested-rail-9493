import logo from "./logo.png"
import offer from "./offer.jpg"
import { AiOutlineMobile } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdCardGiftcard } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import Navoptions from "./Navoption";
import Login from "./Login";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  Img,
  Tooltip,
  Center
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box pos="fixed" font-family="Inter, Roboto, Arial, sans-serif" w="100%" zIndex={99999}>
      <Box display="flex" justifyContent="space-between" px="7%" py="8px" bgImage="url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7a65e265-c116-4a4a-aeeb-7146aa802331/dblrd58-faf297c6-247b-48bb-a2ce-030f7c26a651.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdhNjVlMjY1LWMxMTYtNGE0YS1hZWViLTcxNDZhYTgwMjMzMVwvZGJscmQ1OC1mYWYyOTdjNi0yNDdiLTQ4YmItYTJjZS0wMzBmN2MyNmE2NTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.U2QT58dVPsh8f9T2UDTdCSFBIuCKn6rTkVWDCDieHYA')" >
        <Box>
          BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals</Box>
        <Box >
          <Link href="#" isxternal >
            <Icon as={AiOutlineMobile} />Get App
          </Link> |
          <Link href="#" isExternal>
            <Icon as={CiLocationOn} />Store & Events
          </Link> |
          <Link href="#" isExternal>
            <Icon as={MdCardGiftcard} />Gift Card
          </Link> |
          <Link href="#" isExternal>
            <Icon as={FiHelpCircle} />Help
          </Link>
        </Box>
      </Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        // py={{ base: 2 }}
        px={{ base: 50 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'} >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          {/* -------------------------- */}
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            <Img w={100} src={logo} align="center" p={1} />
          </Text>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
          <Box px="2%" w="40vw">

            <Input placeholder="Search on Sykaa" />
          </Box>

        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Popover>
            <PopoverTrigger>
              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                href={'#'}
                _hover={{
                  bg: 'pink.300',
                }}>
                Sign In
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
              <PopoverBody>{<Login/>}</PopoverBody>
            </PopoverContent>
          </Popover>
        </Stack>
        {/* --------------------------------- */}
        <Link p={6} to=""><Icon as={BsBagCheck} /></Link>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      <Box>
        <Box borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')} py={2} display="flex" justifyContent="space-around" px={50} align={Center} bg="white" zIndex={9} boxShadow="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px">
          <Tooltip maxWidth="500%" bg="white" color="black" label={<Navoptions />}  >
            Makeup
          </Tooltip>
          <Tooltip
            maxWidth="500%" bg="white" color="black"
            label={<Navoptions />} >
            Skin
          </Tooltip>
          <Tooltip maxWidth="500%" bg="white" color="black" label={<Navoptions />} aria-label='A tooltip'>
            Hair
          </Tooltip>
          <Tooltip maxWidth="500%" bg="white" color="black" label={<Navoptions />} aria-label='A tooltip'>
            Appliances
          </Tooltip>
          <Tooltip maxWidth="500%" bg="white" color="black" label={<Navoptions />} aria-label='A tooltip'>
            Bath & Body
          </Tooltip>
          <Tooltip maxWidth="500%" bg="white" color="black" label={<Navoptions />} aria-label='A tooltip'>
            Natural
          </Tooltip>
          <Tooltip maxWidth="500%" bg="white" color="black" label={<Navoptions />} aria-label='A tooltip'>
            Mom & Baby
          </Tooltip>
          <Tooltip maxWidth="500%" bg="white" color="black" label={<Navoptions />} aria-label='A tooltip'>
            Health & Wellness
          </Tooltip>
          <Tooltip maxWidth="500%" bg="white" color="black" label={<Navoptions />} aria-label='A tooltip'>
            Men
          </Tooltip>
          <Tooltip maxWidth="500%" bg="white" color="black" label={<Navoptions />} aria-label='A tooltip'>
            Fragrance
          </Tooltip>
          <Tooltip maxWidth="500%" bg="white" color="black" label={<Navoptions />} aria-label='A tooltip'>
            Pop Ups
          </Tooltip>
          <Box w="4%">
            <Img w="100%" src={offer} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                {/* ---------------------------------------- */}
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
                {/* ----------------------------- */}
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Categories',
    children: [
      {
        label: 'Makeup',
        // subLabel: 'Face',
        // href: '#',
      },
      {
        label: 'Skin',
        // subLabel: 'Up-and-coming Designers',
        // href: '#',
      },
      {
        label: 'Hair',
        // subLabel: 'Up-and-coming Designers',
        // href: '#',
      },
      {
        label: 'Appliances',
        // subLabel: 'Up-and-coming Designers',
        // href: '#',
      },
      {
        label: 'Bath & Body',
        // subLabel: 'Up-and-coming Designers',
        // href: '#',
      },
      {
        label: 'Natural',
        // subLabel: 'Up-and-coming Designers',
        // href: '#',
      },
    ],
  },
  {
    label: 'Brands',
    children: [
      {
        // label: Navoptions(),
      },
    ],
  },
  {
    label: 'Luxe',
  },
  {
    label: 'Nykaa Fashion',
    href: '#',
  },
  {
    label: 'Beauty Advice',
    href: '#',
  },
];
