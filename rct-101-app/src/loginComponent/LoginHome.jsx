import { Box, Button, Center } from '@chakra-ui/react';
import { useNavigate } from "react-router";
import { useUserAuth } from '../context/UserAuthContext';
import { Link } from 'react-router-dom';
const LoginHome = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
          try {
            await logOut();
            navigate("/login");
          } catch (error) {
            console.log(error.message);
          }
    };
    return (<>
    <Box h={154}>
        {/* Top empty space */}
     </Box>
    <Box>
      <Center>
        <Box  >
          Hello Welcome <br />
          {user && user.email}
        </Box>
        </Center>

        <Center>
          <Button color="white" bgColor="#FF80AB" onClick={handleLogout}>
            Log out
          </Button>
          <Button color="white" bgColor="#FF80AB">
            <Link to="/">Back to Home</Link>
          </Button>
      </Center>
    </Box>
      </>
    );
};

export default LoginHome;