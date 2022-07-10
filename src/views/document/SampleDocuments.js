import { useState, useRef } from 'react';
// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import {
    TextField,
    Grid,
    Button,
    Box,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Checkbox,
    InputLabel,
    MenuItem,
    Select
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';

// ==============================|| SAMPLE PAGE ||============================== //

const SampleDocuments = () => {
    const theme = useTheme();

    return (
        <FormBox>
            <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                Sample Documents
            </Typography>

            <TextField fullWidth id="fullWidth" label="Contact Person" variant="outlined" margin="normal" />
            <TextField fullWidth id="fullWidth" label="Name" variant="outlined" margin="normal" />
            <TextField fullWidth id="fullWidth" label="Address" variant="outlined" margin="normal" />

            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                    cancel
                </Button>
                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }}>
                    Submit
                </Button>
            </Box>
        </FormBox>
    );
};

export default SampleDocuments;
