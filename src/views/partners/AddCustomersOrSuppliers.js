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
import { createBusiness } from '../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';

// ==============================|| SAMPLE PAGE ||============================== //

const AddCustomersOrSuppliers = () => {
    const theme = useTheme();

    const [contactPerson, setContactPerson] = useState('');
    const [name, setName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [partnerType, setPartnerType] = useState('customer');

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
            <FormBox>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '15px' }}>
                    Bussiness Partners Details
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                    <FormGroup row sx={{ justifyContent: 'center' }}>
                        <FormControlLabel control={<Checkbox />} label="Customer" />
                        <FormControlLabel control={<Checkbox />} label="Vendor" />
                        <FormControlLabel control={<Checkbox />} label="Other" />
                    </FormGroup>
                </Box>

                <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label">Business Name</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Business Unit">
                        <MenuItem value="kandy branch">Q business</MenuItem>
                        <MenuItem value="hr">W Business</MenuItem>
                        <MenuItem value="Finance">E Business</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Address 1"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setAddress1(e.target.value)}
                />
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Address 2"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setAddress2(e.target.value)}
                />
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="City"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setCity(e.target.value)}
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Business Unit">
                        <MenuItem value="kandy branch">Sri Lanka</MenuItem>
                        <MenuItem value="hr">Aus</MenuItem>
                        <MenuItem value="Finance">IND</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Contact Person"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setContactPerson(e.target.value)}
                />
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Phone Number"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setEmail(e.target.value)}
                />

                {(() => {
                    switch (partnerType) {
                        case 'customer':
                            return (
                                <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                    <Button variant="outlined" sx={{ borderRadius: '6px' }} onClick={PostData}>
                                        cancel
                                    </Button>
                                    <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '5px' }}>
                                        add
                                    </Button>
                                </Box>
                            );
                        case 'suppilers':
                            return (
                                <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                    <Button variant="outlined" sx={{ borderRadius: '6px' }} onClick={PostData}>
                                        cancel
                                    </Button>
                                    <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '5px' }}>
                                        add
                                    </Button>
                                </Box>
                            );

                        case 'both':
                            return (
                                <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                    <Button variant="outlined" sx={{ borderRadius: '6px' }} onClick={PostData}>
                                        cancel
                                    </Button>
                                    <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '5px' }}>
                                        add
                                    </Button>
                                </Box>
                            );
                        default:
                            return (
                                <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                    <Button variant="outlined" sx={{ borderRadius: '6px' }} onClick={PostData}>
                                        cancel
                                    </Button>
                                    <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }}>
                                        add
                                    </Button>
                                </Box>
                            );
                    }
                })()}
            </FormBox>
        </>
    );
};

export default AddCustomersOrSuppliers;
