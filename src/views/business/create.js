import { useState, useRef } from 'react';
// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { TextField, Grid, Button, Box } from '@mui/material';
import { createBusiness } from '../../services/api';
import { useTheme } from '@mui/material/styles';

// ==============================|| SAMPLE PAGE ||============================== //

const CreateBusiness = () => {
    const theme = useTheme();

    const [registrationNumber, setRegistrationNumber] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [businessAddress1, setBusinessAddress1] = useState('');
    const [businessAddress2, setBusinessAddress2] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [website, setWebsite] = useState('');

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
                <Typography variant="h3" sx={{ textAlign: 'center' }}>
                    Business Details
                </Typography>
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Registrstion Number"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                />
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Business Name"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setBusinessName(e.target.value)}
                />
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Business Address 1"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setBusinessAddress1(e.target.value)}
                />
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Business Address 2"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setBusinessAddress2(e.target.value)}
                />
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="City"
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

                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Website"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setWebsite(e.target.value)}
                />

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

export default CreateBusiness;
