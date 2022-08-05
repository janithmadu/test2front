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
    FormHelperText
} from '@mui/material';
import { createLocation } from '../../services/api';
import { useTheme } from '@mui/material/styles';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Permission from 'component/permission';
import FormBox from 'ui-component/box/FormBox';

// ==============================|| SAMPLE PAGE ||============================== //

const AddBusinessLocation = () => {
    const theme = useTheme();
    const params = useParams();
    const navigate = useNavigate();

    const [locationName, setLocationName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [locationType, setLocationType] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [web, setWeb] = useState('');

    const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

    const validationSchema = yup.object({
        locationName: yup.string('').required('Location Name is required'),
        address1: yup.string('').required('Address 1 is required'),
        address2: yup.string('').required('Address 2 is required'),
        locationType: yup.string('').required('Location Type is required'),
        country: yup.string('').required('country is required'),
        city: yup.string('').required('city is required'),
        email: yup.string('').required('email is required'),
        phoneNumber: yup.string('').required('Phone Number is required'),
        web: yup.string('').required('web is required')
    });

    const Submit = async () => {
        setValidateAfterSubmit(true);
    };

    return (
        <Permission name="businessAdd">
            <FormBox>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '10px' }}>
                    Add Location
                </Typography>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        locationName: '',
                        locationType: '',
                        name: '',
                        address1: '',
                        address2: '',
                        city: '',
                        country: 'Sri Lanka',
                        phoneNumber: '',
                        email: '',
                        web: '',
                        submit: null
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        console.log(values);
                        await createLocation({
                            name: values.locationName,
                            address1: values.address1,
                            address2: values.address2,
                            city: values.city,
                            country: values.country,
                            phoneNumber: values.phoneNumber,
                            email: values.email,
                            web: values.web,
                            businessId: params.id,
                            locationType: values.locationType,
                            userId: 'dsffdtg'
                        });
                        navigate(`../${params.id}`, true);
                    }}
                    validateOnChange={validateAfterSubmit}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Location Name"
                                variant="outlined"
                                margin="normal"
                                name="locationName"
                                error={!!errors.locationName}
                                helperText={touched.locationName ? errors.locationName : ''}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Location Type"
                                variant="outlined"
                                margin="normal"
                                name="locationType"
                                error={!!errors.locationType}
                                helperText={touched.locationType ? errors.locationType : ''}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Location Address 1"
                                variant="outlined"
                                margin="normal"
                                name="address1"
                                error={!!errors.address1}
                                helperText={touched.address1 ? errors.address1 : ''}
                                onChange={handleChange}
                            />

                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Location Address 2"
                                variant="outlined"
                                margin="normal"
                                name="address2"
                                error={!!errors.address2}
                                helperText={touched.address2 ? errors.address2 : ''}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="City"
                                variant="outlined"
                                margin="normal"
                                name="city"
                                error={!!errors.city}
                                helperText={touched.city ? errors.city : ''}
                                onChange={handleChange}
                            />
                            <FormControl fullWidth margin="normal" error={!!errors.country}>
                                <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Business Unit"
                                    name="country"
                                    value={values.country}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                                    <MenuItem value="Aus">Aus</MenuItem>
                                    <MenuItem value="IND">IND</MenuItem>
                                </Select>
                                {touched.country && errors.country && (
                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                        {errors.country}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Phone Number"
                                variant="outlined"
                                margin="normal"
                                name="phoneNumber"
                                error={!!errors.phoneNumber}
                                helperText={touched.phoneNumber ? errors.phoneNumber : ''}
                                onChange={handleChange}
                            />

                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                name="email"
                                error={!!errors.email}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Web"
                                variant="outlined"
                                margin="normal"
                                name="web"
                                error={!!errors.web}
                                helperText={touched.web ? errors.web : ''}
                                onChange={handleChange}
                            />
                            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                <Link to={`../${params.id}`}>
                                    <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                        cancel
                                    </Button>
                                </Link>
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} type="sumbit" onClick={Submit}>
                                    save
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </FormBox>
        </Permission>
    );
};

export default AddBusinessLocation;
