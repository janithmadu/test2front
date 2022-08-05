import { useState, useEffect, useRef } from 'react';
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
import { editBusiness, getOneBusiness, getOneHeadOffice } from '../../services/api';
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Permission from 'component/permission';
import usePermission from 'hooks/usePermission';

// ==============================|| SAMPLE PAGE ||============================== //

const BusinessDetails = () => {
    const theme = useTheme();
    const params = useParams();
    const navigate = useNavigate();
    const inputDisable = usePermission('businessEdit');
    console.log('inputDisable:', inputDisable);
    const [registationNumber, setRegistrationNumber] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [businessAddress1, setBusinessAddress1] = useState('');
    const [businessAddress2, setBusinessAddress2] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [website, setWebsite] = useState('');
    const [defferentDetailsHO, setDefferentDetailsHO] = useState(false);
    const [businessCountry, setBusinessCountry] = useState('');

    const [headOfficeAddress1, setHeadOfficeAddress1] = useState('');
    const [headOfficeAddress2, setHeadOfficeAddress2] = useState('');
    const [headOfficeEmail, setHeadOfficeEmail] = useState('');
    const [headOfficeCity, setHeadOfficeCity] = useState('');
    const [headOfficePhoneNumber, setHeadOfficePhoneNumber] = useState('');
    const [headOfficeCountry, setHeadOfficeCountry] = useState('');

    const [businessId, setBusinessId] = useState('');

    const DefferentDetailsHOCheckBox = async () => {
        console.log(!defferentDetailsHO);
        setDefferentDetailsHO(!defferentDetailsHO);
    };

    const PostData = async () => {
        await editBusiness(params.id, {
            registationNumber: registationNumber,
            businessName: businessName,
            businessAddress1: businessAddress1,
            businessAddress2: businessAddress2,
            businessCity: city,
            businessCountry: businessCountry,
            businessPhoneNumber: phoneNumber,
            businessEmail: email,
            businessWeb: website,
            userId: '879',
            headOfficeAddress1: headOfficeAddress1,
            headOfficeAddress2: headOfficeAddress2,
            headOfficeCity: headOfficeCity,
            headOfficeCountry: headOfficeCountry,
            headOfficePhoneNumber: headOfficePhoneNumber,
            headOfficeEmail: headOfficeEmail,
            headOffice: defferentDetailsHO
        });
        navigate(`../${params.id}`, true);
    };

    // get all businesses
    async function fetchData() {
        await getOneBusiness(params.id)
            .then((res) => {
                console.log(res.data.data);
                setRegistrationNumber(res.data.data.registationNumber);
                setBusinessName(res.data.data.businessName);
                setBusinessAddress1(res.data.data.businessAddress1);
                setBusinessAddress2(res.data.data.businessAddress2);
                setCity(res.data.data.businessCity);
                setEmail(res.data.data.businessEmail);
                setWebsite(res.data.data.businessWeb);
                setBusinessCountry(res.data.data.businessCountry);
                setPhoneNumber(res.data.data.businessPhoneNumber);
                setDefferentDetailsHO(res.data.data.headOffice);
                setHeadOfficeAddress1(res.data.data.headOfficeAddress1);
                setHeadOfficeAddress2(res.data.data.headOfficeAddress2);
                setHeadOfficeEmail(res.data.data.headOfficeEmail);
                setHeadOfficeCity(res.data.data.headOfficeCity);
                setHeadOfficePhoneNumber(res.data.data.headOfficePhoneNumber);
                setHeadOfficeCountry(res.data.data.headOfficeCountry);
                setBusinessId(res.data.data._id);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []); // Or [] if effect doesn't need props or state

    return (
        <Permission name="businessView">
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

                <TextField fullWidth id="fullWidth" label="ID" variant="outlined" margin="normal" value={businessId} disabled />
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Registrstion Number"
                    variant="outlined"
                    margin="normal"
                    value={registationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    disabled={inputDisable}
                />
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Business Name"
                    variant="outlined"
                    margin="normal"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    disabled={inputDisable}
                />
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Business Address 1"
                    variant="outlined"
                    margin="normal"
                    value={businessAddress1}
                    onChange={(e) => setBusinessAddress1(e.target.value)}
                    disabled={inputDisable}
                />
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Business Address 2"
                    variant="outlined"
                    margin="normal"
                    value={businessAddress2}
                    onChange={(e) => setBusinessAddress2(e.target.value)}
                    disabled={inputDisable}
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Business Unit"
                        value={businessCountry}
                        onChange={(e) => setBusinessCountry(e.target.value)}
                        disabled={inputDisable}
                    >
                        <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                        <MenuItem value="Aus">Aus</MenuItem>
                        <MenuItem value="IND">IND</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    id="fullWidth"
                    label="City"
                    variant="outlined"
                    margin="normal"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    disabled={inputDisable}
                />

                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Phone Number"
                    variant="outlined"
                    margin="normal"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    disabled={inputDisable}
                />

                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={inputDisable}
                />

                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Website"
                    variant="outlined"
                    margin="normal"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    disabled={inputDisable}
                />
                <FormControlLabel
                    control={<Checkbox checked={defferentDetailsHO} onClick={DefferentDetailsHOCheckBox} />}
                    label="Defferent Details to Head Office ?"
                />
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
                            disabled={inputDisable}
                        />
                        <TextField
                            fullWidth
                            label="Head Office Address 2"
                            variant="outlined"
                            margin="normal"
                            value={headOfficeAddress2}
                            onChange={(e) => setHeadOfficeAddress2(e.target.value)}
                            disabled={inputDisable}
                        />
                        <TextField
                            fullWidth
                            label="City"
                            variant="outlined"
                            margin="normal"
                            value={headOfficeCity}
                            onChange={(e) => setHeadOfficeCity(e.target.value)}
                            disabled={inputDisable}
                        />
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="demo-simple-select-label">Country</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Business Unit"
                                value={headOfficeCountry}
                                onChange={(e) => setHeadOfficeCountry(e.target.value)}
                                disabled={inputDisable}
                            >
                                <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
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
                            onChange={(e) => setHeadOfficePhoneNumber(e.target.value)}
                            disabled={inputDisable}
                        />
                        <TextField
                            fullWidth
                            label="Email Address"
                            variant="outlined"
                            margin="normal"
                            value={headOfficeEmail}
                            onChange={(e) => setHeadOfficeEmail(e.target.value)}
                            disabled={inputDisable}
                        />
                    </>
                )}

                <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                    <Link to={`../${params.id}`}>
                        <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                            cancel
                        </Button>
                    </Link>
                    <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} onClick={PostData}>
                        save
                    </Button>
                </Box>
            </Box>
        </Permission>
    );
};

export default BusinessDetails;
