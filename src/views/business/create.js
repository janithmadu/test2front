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
                <FormControlLabel control={<Checkbox onClick={DefferentDetailsHOCheckBox} />} label="Defferent Details to Head Office ?" />
                {!defferentDetailsHO ? (
                    <></>
                ) : (
                    <>
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
                )}

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
