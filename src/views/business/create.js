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

    const [businessName, setBusinessName] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [email, setEmail] = useState('');
    const [contactName, setContactName] = useState('');

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
                <Typography variant="h3">Create Business</Typography>
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
                    label="Business Address"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setBusinessAddress(e.target.value)}
                />
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Contact Name"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setContactName(e.target.value)}
                />
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Email Address"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Box sx={{ textAlign: 'right' }}>
                    <Button variant="contained" sx={{ borderRadius: '6px' }} onClick={PostData}>
                        Create
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default CreateBusiness;
