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
    const [teamName, setTeamName] = useState('');

    const [businessType, setBusinessType] = useState('ho');

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
                {(() => {
                    switch (businessType) {
                        case 'ho':
                            return (
                                <Typography variant="h3" sx={{ textAlign: 'center' }}>
                                    Your Head Office Details
                                </Typography>
                            );
                        case 'branch':
                            return (
                                <Typography variant="h3" sx={{ textAlign: 'center' }}>
                                    Your Branch Details
                                </Typography>
                            );
                        case 'department':
                            return (
                                <Typography variant="h3" sx={{ textAlign: 'center' }}>
                                    Your Department Details
                                </Typography>
                            );

                        case 'team':
                            return (
                                <Typography variant="h3" sx={{ textAlign: 'center' }}>
                                    Your Team Details
                                </Typography>
                            );

                        default:
                            return <>tt</>;
                    }
                })()}

                <Box sx={{ textAlign: 'center' }}>
                    <FormControl sx={{ marginTop: '20px' }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="ho"
                            onChange={(e) => setBusinessType(e.target.value)}
                        >
                            <FormControlLabel value="ho" control={<Radio />} label="HO" />
                            <FormControlLabel value="branch" control={<Radio />} label="Branch" />
                            <FormControlLabel value="department" control={<Radio />} label="Department" />
                            <FormControlLabel value="team" control={<Radio />} label="Team" />
                        </RadioGroup>
                    </FormControl>
                </Box>

                {(() => {
                    switch (businessType) {
                        case 'ho':
                            return (
                                <>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Defferent Details to Head Office ?" />

                                    <TextField
                                        fullWidth
                                        label="Head Office Address 1"
                                        variant="outlined"
                                        margin="normal"
                                        value={headOfficeAddress1}
                                        onChange={(e) => setHeadOfficeAddress1(e.target.value)}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Head Office Address 2"
                                        variant="outlined"
                                        margin="normal"
                                        value={headOfficeAddress2}
                                        onChange={(e) => setHeadOfficeAddress2(e.target.value)}
                                    />
                                    <TextField
                                        fullWidth
                                        label="City"
                                        variant="outlined"
                                        margin="normal"
                                        value={headOfficeCity}
                                        onChange={(e) => setHeadOfficeCity(e.target.value)}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Phone number"
                                        variant="outlined"
                                        margin="normal"
                                        value={headOfficePhoneNumber}
                                        onChange={(e) => setHeadOfficePhoneNumer(e.target.value)}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        variant="outlined"
                                        margin="normal"
                                        value={headOfficeEmail}
                                        onChange={(e) => setHeadOfficeEmail(e.target.value)}
                                    />
                                </>
                            );
                        case 'branch':
                            return (
                                <>
                                    <TextField
                                        fullWidth
                                        label="Branch Address 1"
                                        variant="outlined"
                                        margin="normal"
                                        value={branchAddress1}
                                        onChange={(e) => setBranchAddress1(e.target.value)}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Branch Address 2"
                                        variant="outlined"
                                        margin="normal"
                                        value={branchAddress2}
                                        onChange={(e) => setBranchAddress2(e.target.value)}
                                    />

                                    <TextField
                                        fullWidth
                                        label="City"
                                        variant="outlined"
                                        margin="normal"
                                        value={branchCity}
                                        onChange={(e) => setBranchCity(e.target.value)}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Phone number"
                                        variant="outlined"
                                        margin="normal"
                                        value={branchPhoneNumber}
                                        onChange={(e) => setBranchPhoneNumber(e.target.value)}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        variant="outlined"
                                        margin="normal"
                                        value={branchEmail}
                                        onChange={(e) => setBranchEmail(e.target.value)}
                                    />
                                </>
                            );
                        case 'department':
                            return (
                                <>
                                    <TextField
                                        fullWidth
                                        id="fullWidth"
                                        label="Department Name"
                                        variant="outlined"
                                        margin="normal"
                                        value={departmentName}
                                        onChange={(e) => setDepartmentName(e.target.value)}
                                    />
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel id="demo-simple-select-label">Business Unit</InputLabel>
                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Business Unit">
                                            <MenuItem value={10}>Kandy branch</MenuItem>
                                            <MenuItem value={20}>HR</MenuItem>
                                            <MenuItem value={30}>Finance</MenuItem>
                                        </Select>
                                    </FormControl>
                                </>
                            );
                        case 'team':
                            return (
                                <>
                                    <TextField
                                        fullWidth
                                        id="fullWidth"
                                        label="Team Name"
                                        variant="outlined"
                                        margin="normal"
                                        value={teamName}
                                        onChange={(e) => setTeamName(e.target.value)}
                                    />
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel id="demo-simple-select-label">Business Unit</InputLabel>
                                        <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Business Unit">
                                            <MenuItem value={10}>Kandy branch</MenuItem>
                                            <MenuItem value={20}>HR</MenuItem>
                                            <MenuItem value={30}>Finance</MenuItem>
                                        </Select>
                                    </FormControl>
                                </>
                            );
                        default:
                            return <></>;
                    }
                })()}

                <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                    <Button variant="outlined" sx={{ borderRadius: '6px' }} onClick={PostData}>
                        cancel
                    </Button>
                    <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '5px' }}>
                        Create
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default AddBusinessUnit;
