import React from 'react';
import { Box, Text, Anchor } from 'grommet';

function HomePage() {
    return (
        <Box height='calc(100vh - 65pt)' align='center' justify='center' >
            <Text weight='700' size='100pt' margin={{left: '20pt', bottom: 'none' }} >home.</Text>
            <Anchor href='/' margin='none'>[ back to safety. ]</Anchor>
        </Box>
    );
}

export default HomePage;