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
import { Link } from 'react-router-dom';

// ==============================|| USER ROLE PAGE ||============================== //

const UserRole = () => {
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
            {/*<Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                User Role
            </Typography>

            <TextField fullWidth id="fullWidth" label="Administraror" variant="outlined" margin="normal" disabled />
            <Box sx={{ textAlign: 'center' }}>
                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                    <FormControlLabel control={<Checkbox />} label="Print" />
                    <FormControlLabel control={<Checkbox />} label="Approve" />
                </FormGroup>
            </Box>
            <TextField fullWidth id="fullWidth" label="Head Of Department" variant="outlined" margin="normal" disabled />
            <Box sx={{ textAlign: 'center' }}>
                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                    <FormControlLabel control={<Checkbox />} label="Print" />
                    <FormControlLabel control={<Checkbox />} label="Approve" />
                </FormGroup>
            </Box>

            <TextField fullWidth id="fullWidth" label="Manager" variant="outlined" margin="normal" disabled />
            <Box sx={{ textAlign: 'center' }}>
                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                    <FormControlLabel control={<Checkbox />} label="Print" />
                    <FormControlLabel control={<Checkbox />} label="Approve" />
                </FormGroup>
            </Box>

            <TextField fullWidth id="fullWidth" label="Staff" variant="outlined" margin="normal" disabled />
            <Box sx={{ textAlign: 'center' }}>
                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                    <FormControlLabel control={<Checkbox />} label="Print" />
                    <FormControlLabel control={<Checkbox />} label="Approve" />
                </FormGroup>
            </Box>

            <TextField fullWidth id="fullWidth" label="Partner" variant="outlined" margin="normal" disabled />
            <Box sx={{ textAlign: 'center' }}>
                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                    <FormControlLabel control={<Checkbox />} label="Print" />
                    <FormControlLabel control={<Checkbox />} label="Approve" />
                </FormGroup>
            </Box>
*/}
            <TextField fullWidth id="fullWidth" label="Custom Role Name" variant="outlined" margin="normal" disabled />
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
                <Link to={`add`}>
                    <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }}>
                        Add New Role
                    </Button>
                </Link>
            </Box>
        </FormBox>
    );
};

export default UserRole;
