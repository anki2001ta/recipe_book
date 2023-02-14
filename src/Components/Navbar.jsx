import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Input,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon ,Search2Icon} from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const NavLink = () => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('#3F4E4F', 'gray.700'),
    }}
    href={'#'}>
   
  </Link>
);

export default function Nav() {
    const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  let userData=useSelector((store)=>store.AuthReducer.userData)
  const handlelogout=()=>{
    userData={}
    navigate("/login")
  };

  const handleremedi=()=>{
    navigate("/singlepage")
  }
  return (
    <>
      <Box bg={useColorModeValue('teal', 'teal')} px={4}>
        <Flex h={16} alignItems={'center'} gap={5} justifyContent={'space-between'}>
          <Box color={"white"}>
            <Text fontFamily={"cursive"} fontWeight={600} fontSize={"24px"}> TastyHour</Text>
          </Box>
          <Box>
            <Input color={"white"} w={"800px"} borderRadius={"5px"} placeholder={"Search for Tasty Cusines..."} textIndent={"10px"} borderColor="white"/>
            <Button ml={4}>
            <Center>
            <Search2Icon />
            </Center>
            </Button>
          </Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  zIndex={2000}>
                  <Avatar
                    size={'sm'}
                    src={'https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}
               zIndex={2000} >
                  <br />
                  <Center>
                    <Avatar
                      size={'xl'}
                      src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHK_xd4GHWvzXkA3DygGiU3---JdQdHXbA_uTguFvckcwsMDakFodlYlaQMv4p6fWM5I&usqp=CAU'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{userData?.firstName==undefined?"Guest":`${userData.firstName} ${userData.lastName}`}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>My Account</MenuItem>
                  <MenuItem onClick={handleremedi}>My Recipes</MenuItem>
                  <MenuItem onClick={handlelogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}