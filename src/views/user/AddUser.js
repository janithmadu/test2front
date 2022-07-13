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
import FormBox from 'ui-component/box/FormBox';

// ==============================|| ADD USER PAGE ||============================== //

const AddUser = () => {
    const theme = useTheme();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [businessUnit, setBusinessUnit] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [departmentAndTeamUnit, setDepartmentAndTeamUnit] = useState('');
    const [designation, setDesignation] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [location, setLocation] = useState('');

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
                Add users
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Grid>
            </Grid>

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
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Business Unit"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <MenuItem value="kandy branch">Kandy</MenuItem>
                    <MenuItem value="hr">Colombo</MenuItem>
                    <MenuItem value="Finance">Galle</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Business Unit</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Business Unit"
                    value={businessUnit}
                    onChange={(e) => setBusinessUnit(e.target.value)}
                >
                    <MenuItem value="kandy branch">Kandy branch</MenuItem>
                    <MenuItem value="hr">HR</MenuItem>
                    <MenuItem value="Finance">Finance</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Department / Team</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Business Unit"
                    value={departmentAndTeamUnit}
                    onChange={(e) => setDepartmentAndTeamUnit(e.target.value)}
                >
                    <MenuItem value="kandy branch">Kandy branch</MenuItem>
                    <MenuItem value="hr">HR</MenuItem>
                    <MenuItem value="Finance">Finance</MenuItem>
                </Select>
            </FormControl>
            <TextField
                fullWidth
                id="fullWidth"
                label="Designation"
                variant="outlined"
                margin="normal"
                onChange={(e) => setDesignation(e.target.value)}
            />
            <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Business Unit"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <MenuItem value="kandy branch">Project Manager</MenuItem>
                    <MenuItem value="hr">Manager</MenuItem>
                    <MenuItem value="Finance">CEO</MenuItem>
                </Select>
            </FormControl>
            <TextField
                fullWidth
                id="fullWidth"
                label="password"
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
                    add
                </Button>
            </Box>
        </FormBox>
    );
};

export default AddUser;
