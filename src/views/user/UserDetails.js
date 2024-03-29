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

// ==============================|| USER DETAILS PAGE ||============================== //

const UserDetails = () => {
    const theme = useTheme();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [businessUnit, setBusinessUnit] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [departmentAndTeamUnit, setDepartmentAndTeamUnit] = useState('');
    const [designation, setDesignation] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
                    Your Details
                </Typography>
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="First Name"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Last Name"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setLastName(e.target.value)}
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
                    label="Phone number"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label">Business Unit</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Business Unit"
                        value={businessUnit}
                        onChange={(e) => setBusinessUnit(e.target.value)}
                        disabled
                    >
                        <MenuItem value="kandy branch">Kandy branch</MenuItem>
                        <MenuItem value="hr">HR</MenuItem>
                        <MenuItem value="Finance">Finance</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label">Location</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Business Unit"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        disabled
                    >
                        <MenuItem value="kandy branch">Kandy</MenuItem>
                        <MenuItem value="hr">Colombo</MenuItem>
                        <MenuItem value="Finance">Galle</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Designation"
                    variant="outlined"
                    margin="normal"
                    disabled
                    onChange={(e) => setDesignation(e.target.value)}
                />

                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <TextField
                    fullWidth
                    id="fullWidth"
                    label=" Confirm Password"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setConfirmPassword(e.target.value)}
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

export default UserDetails;
