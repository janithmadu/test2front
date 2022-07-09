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
            <Box
                sx={{
                    padding: { xs: '10px', md: '0px 130px 0px 130px' },
                    backgroundColor: '#fff',
                    margin: 'auto'
                }}
            >
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    Bussiness Partners Details
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                    <FormControl sx={{ marginTop: '20px' }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="customer"
                            onChange={(e) => setPartnerType(e.target.value)}
                        >
                            <FormControlLabel value="customer" control={<Radio />} label="Customer" />
                            <FormControlLabel value="suppilers" control={<Radio />} label="Suppilers" />
                            <FormControlLabel value="both" control={<Radio />} label="Both" />
                        </RadioGroup>
                    </FormControl>
                </Box>

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
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setName(e.target.value)}
                />
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
                    label="city"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setCity(e.target.value)}
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
                                    <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '5px' }}>
                                        add
                                    </Button>
                                </Box>
                            );
                    }
                })()}
            </Box>
        </>
    );
};

export default AddCustomersOrSuppliers;
