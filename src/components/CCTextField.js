import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CCTextField = ({label, onChange}) => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '15ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id={"outlined-basic"} label={label} onChange={onChange} variant="outlined" />
        </Box>
    );
}

export default CCTextField;
