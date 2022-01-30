import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function CCButton({onClick}) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '15ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Button variant="contained" onClick={onClick}>CONVERT</Button>
        </Box>
    );
}

// export default CCButton;
