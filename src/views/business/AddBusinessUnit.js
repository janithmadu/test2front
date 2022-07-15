import React, { useState, useRef } from 'react';
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
import { createBusiness } from '../../services/api';
import { useTheme } from '@mui/material/styles';

// ==============================|| SAMPLE PAGE ||============================== //

const AddBusinessUnit = () => {
    const theme = useTheme();

    const [headOfficeAddress1, setHeadOfficeAddress1] = useState('');
    const [headOfficeAddress2, setHeadOfficeAddress2] = useState('');
    const [headOfficeEmail, setHeadOfficeEmail] = useState('');
    const [headOfficeCity, setHeadOfficeCity] = useState('');
    const [headOfficePhoneNumber, setHeadOfficePhoneNumer] = useState('');

    const [branchAddress1, setBranchAddress1] = useState('');
    const [branchAddress2, setBranchAddress2] = useState('');
    const [branchEmail, setBranchEmail] = useState('');
    const [branchCity, setBranchCity] = useState('');
    const [branchPhoneNumber, setBranchPhoneNumber] = useState('');

    const [departmentName, setDepartmentName] = useState('');
    const [departmentValue, setDepartmentValue] = useState('');

    const [teamName, setTeamName] = useState('');
    const [teamValue, setTeamValue] = useState('');

    const [businessType, setBusinessType] = useState('ho');

    const [defferentDetailsHO, setDefferentDetailsHO] = useState(false);

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

    const DefferentDetailsHOCheckBox = async () => {
        console.log(!defferentDetailsHO);
        setDefferentDetailsHO(!defferentDetailsHO);
    };
    return (
        <>
            <Box
                sx={{
                    padding: { xs: '10px', md: '0px 130px 0px 130px' },
                    backgroundColor: '#fff',
                    margin: 'auto'
                }}
            >
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '15px' }}>
                    Add Business Unit
                </Typography>
                <TextField fullWidth id="fullWidth" label="Business Unit Name" variant="outlined" margin="normal" />
                <TextField fullWidth id="fullWidth" label="Business Unit Type" variant="outlined" margin="normal" />
                <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                    <Button variant="outlined" sx={{ borderRadius: '6px' }} onClick={PostData}>
                        cancel
                    </Button>
                    <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }}>
                        Save
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default AddBusinessUnit;
