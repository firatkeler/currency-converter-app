import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CCSelect = ({label, options, value, onChange}) => {
    return(
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '15ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Age"
                    onChange={onChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {options.map((option, i) => <MenuItem key={i} value={option.value}>{option.text}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
}

export default CCSelect;
