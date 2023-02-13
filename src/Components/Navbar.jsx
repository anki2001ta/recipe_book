import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Box w={"100%"} border="1px solid green" h={"65px"} backgroundColor={"#E0D8B0"}
     position={"fixed"} top={0}>
        <Box display={"flex"} border="1px solid green">
            <Text>Foodie</Text>

        </Box>

        <Box>

        </Box>
        
    </Box>
  )
}

export default Navbar