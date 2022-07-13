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
    Select,
    FormGroup
} from '@mui/material';
import { createBusiness } from '../../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';

// ==============================|| SAMPLE PAGE ||============================== //

const AddUserCustomRole = () => {
    const theme = useTheme();

    const [customRoleName, setCustomRoleName] = useState('');

    const PostData = async () => {
        await createBusiness({
            name: businessName,
            address: businessAddress,
            contactName: contactName,
            email: email,
            userId: '2133',
            author: 'avishka dev'
        });
    };

    return (
        <FormBox>
            <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px' }}>
              User Custom Roles
            </Typography>
          

            <TextField
                fullWidth
                id="fullWidth"
                label="Custom Role Name"
                variant="outlined"
                margin="normal"
                onChange={(e) => customRoleName(e.target.value)}
            />
                <Box sx={{ textAlign: 'center' }}>
                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                    <FormControlLabel control={<Checkbox />} label="Print" />
                    <FormControlLabel control={<Checkbox />} label="Approve" />
                </FormGroup>
            </Box>

            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                <Button variant="outlined" sx={{ borderRadius: '6px' }} onClick={PostData}>
                    cancel
                </Button>
                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }}>
                    add
                </Button>
            </Box>
        </FormBox>
    );
};

export default AddUserCustomRole;
