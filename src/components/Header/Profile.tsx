import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData: boolean;
}


export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            
            {showProfileData && 
                <Box mr="4" textAlign={'right'}>
                    <Text>Rodrigo Kloeckner</Text>
                    <Text color="gray.300" fontSize={'small'}>rodrigo@gmail.com</Text>
                </Box>            
            }

            <Avatar size="md" name="Rodrigo Kloeckner" src="https://avatars.githubusercontent.com/u/74274647?v=4" />
        </Flex>
    );
}