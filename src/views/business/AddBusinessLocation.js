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
import { createBusiness } from '../../services/api';
import { useTheme } from '@mui/material/styles';

// ==============================|| SAMPLE PAGE ||============================== //

const AddBusinessLocation = () => {
    const theme = useTheme();

    const [registrationNumber, setRegistrationNumber] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [businessAddress1, setBusinessAddress1] = useState('');
    const [businessAddress2, setBusinessAddress2] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [website, setWebsite] = useState('');
    const [defferentDetailsHO, setDefferentDetailsHO] = useState(false);

    const [headOfficeAddress1, setHeadOfficeAddress1] = useState('');
    const [headOfficeAddress2, setHeadOfficeAddress2] = useState('');
    const [headOfficeEmail, setHeadOfficeEmail] = useState('');
    const [headOfficeCity, setHeadOfficeCity] = useState('');
    const [headOfficePhoneNumber, setHeadOfficePhoneNumer] = useState('');

    const DefferentDetailsHOCheckBox = async () => {
        console.log(!defferentDetailsHO);
        setDefferentDetailsHO(!defferentDetailsHO);
    };

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
        <>
            <Box
                sx={{
                    padding: '40px',
                    backgroundColor: '#fff',
                    margin: 'auto'
                }}
            >
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '10px' }}>
                    Add Location
                </Typography>
                <TextField fullWidth id="fullWidth" label="Location Name" variant="outlined" margin="normal" />
                <TextField fullWidth id="fullWidth" label="Location Type" variant="outlined" margin="normal" />
                <TextField fullWidth id="fullWidth" label="Location Address 1" variant="outlined" margin="normal" />
                <TextField fullWidth id="fullWidth" label="Location Address 2" variant="outlined" margin="normal" />
                <TextField fullWidth id="fullWidth" label="City" variant="outlined" margin="normal" />
                <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Business Unit">
                        <MenuItem value="kandy branch">Sri Lanka</MenuItem>
                        <MenuItem value="hr">Aus</MenuItem>
                        <MenuItem value="Finance">IND</MenuItem>
                    </Select>
                </FormControl>
                <TextField fullWidth id="fullWidth" label="Phone Number" variant="outlined" margin="normal" />

                <TextField fullWidth id="fullWidth" label="Email" variant="outlined" margin="normal" />
                <TextField fullWidth id="fullWidth" label="Web" variant="outlined" margin="normal" />
                <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                    <Button variant="outlined" sx={{ borderRadius: '6px' }} onClick={PostData}>
                        cancel
                    </Button>
                    <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }}>
                        save
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default AddBusinessLocation;
