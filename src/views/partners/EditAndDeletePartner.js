import * as yup from 'yup';

import { useState, useEffect, useRef } from 'react';
// material-ui
import { Typography } from '@mui/material';

import { Link, useNavigate, useParams } from 'react-router-dom';

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
    FormGroup,
    FormHelperText
} from '@mui/material';
import { editPartner, getOnePartner } from '../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';
import { Formik } from 'formik';
import { IconTrash } from '@tabler/icons';

// ==============================|| SAMPLE PAGE ||============================== //

const EditAndDeletePartner = () => {
    const theme = useTheme();
    const params = useParams();
    const navigate = useNavigate();

    const [contactPerson, setContactPerson] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [vendor, setVendor] = useState(false);
    const [customer, setCustomer] = useState(true);
    const [other, setOther] = useState(false);

    const [partnerType, setPartnerType] = useState('customer');

    const validationSchema = yup.object({
        businessName: yup.string().required('Business Name is required'),
        address1: yup.string().required('Addess 1 is required'),
        address2: yup.string().required('Addess 2 is required'),
        city: yup.string().required('City is required'),
        country: yup.string().required('country is required'),
        contactPerson: yup.string().required('Contact Person is required'),
        phoneNumber: yup.string().required('Phone Number is required'),
        email: yup.string('Enter your Email').email('Must be a valid email').max(255).required('Email is required')
    });

    // test for
    async function fetchData() {
        await getOnePartner(params.id)
            .then((res) => {
                console.log(res.data.data);
                setBusinessName(res.data.data.businessName);
                setAddress1(res.data.data.address1);
                setAddress2(res.data.data.address2);
                setPhoneNumber(res.data.data.phoneNumber);
                setContactPerson(res.data.data.contactPerson);
                setEmail(res.data.data.email);
                setCity(res.data.data.city);
                setCountry(res.data.data.country);
                setCustomer(res.data.data.customer);
                setVendor(res.data.data.vendor);
                setOther(res.data.data.other);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []); // Or [] if effect doesn't need props or state

    return (
        <>
            <FormBox>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '15px' }}>
                    Bussiness Partners Details
                </Typography>

                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        address1: address1,
                        address2: address2,
                        businessName: 'Q business',
                        city: city,
                        country: 'Sri Lanka',
                        contactPerson: contactPerson,
                        phoneNumber: phoneNumber,
                        email: email,
                        customer: customer,
                        vendor: vendor,
                        other: other,
                        submit: null
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        console.log(values);
                        await editPartner(params.id, {
                            businessName: values.businessName,
                            address1: values.address1,
                            address2: values.address2,
                            phoneNumber: values.phoneNumber,
                            contactPerson: values.contactPerson,
                            email: values.email,
                            city: values.city,
                            country: values.country,
                            vendor: values.vendor,
                            customer: values.customer,
                            other: values.other,
                            userId: '667',
                            businessId: '789'
                        });
                    }}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <Box sx={{ textAlign: 'center' }}>
                                <FormGroup row sx={{ justifyContent: 'center' }}>
                                    <FormControlLabel
                                        control={<Checkbox name="customer" checked={values.customer} onChange={handleChange} />}
                                        label="Customer"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="vendor" checked={values.vendor} onChange={handleChange} />}
                                        label="Vendor"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="other" checked={values.other} onChange={handleChange} />}
                                        label="Other"
                                    />
                                </FormGroup>
                            </Box>

                            <FormControl fullWidth margin="normal" error={!!errors.businessName}>
                                <InputLabel id="demo-simple-select-label">Business Name</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Business Unit"
                                    name="businessName"
                                    value={values.businessName}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="Q business">Q business</MenuItem>
                                    <MenuItem value="W Business">W Business</MenuItem>
                                    <MenuItem value="E Business">E Business</MenuItem>
                                </Select>
                                {touched.businessName && errors.businessName && (
                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                        {errors.businessName}
                                    </FormHelperText>
                                )}
                            </FormControl>

                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Address 1"
                                name="address1"
                                type="text"
                                variant="outlined"
                                margin="normal"
                                error={!!errors.address1}
                                helperText={touched.address1 ? errors.address1 : ''}
                                value={values.address1}
                                onChange={handleChange}
                            />

                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Address 2"
                                name="address2"
                                variant="outlined"
                                margin="normal"
                                type="text"
                                error={!!errors.address2}
                                helperText={touched.address2 ? errors.address2 : ''}
                                value={values.address2}
                                onChange={handleChange}
                            />

                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="City"
                                name="city"
                                variant="outlined"
                                margin="normal"
                                type="text"
                                value={values.city}
                                error={!!errors.city}
                                helperText={touched.city ? errors.city : ''}
                                onChange={handleChange}
                            />

                            <FormControl fullWidth margin="normal" error={!!errors.country}>
                                <InputLabel id="demo-simple-select-label">Country</InputLabel>
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
                            </FormControl>
                            {touched.country && errors.country && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.country}
                                </FormHelperText>
                            )}

                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Contact Person"
                                type="text"
                                name="contactPerson"
                                variant="outlined"
                                margin="normal"
                                error={!!errors.contactPerson}
                                helperText={touched.contactPerson ? errors.contactPerson : ''}
                                value={values.contactPerson}
                                onChange={handleChange}
                            />

                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Phone Number"
                                type="text"
                                name="phoneNumber"
                                variant="outlined"
                                margin="normal"
                                error={!!errors.phoneNumber}
                                helperText={touched.phoneNumber ? errors.phoneNumber : ''}
                                value={values.phoneNumber}
                                onChange={handleChange}
                            />

                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Email"
                                name="email"
                                type="text"
                                variant="outlined"
                                margin="normal"
                                error={!!errors.email}
                                helperText={touched.email ? errors.email : ''}
                                value={values.email}
                                onChange={handleChange}
                            />

                            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                    cancel
                                </Button>
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} type="submit">
                                    Save
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </FormBox>
        </>
    );
};

export default EditAndDeletePartner;
