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
import Permission from 'component/permission';
import usePermission from 'hooks/usePermission';

// ==============================|| SAMPLE PAGE ||============================== //

const OneCustomer = () => {
    const theme = useTheme();
    const params = useParams();
    const navigate = useNavigate();
    const inputDisable = usePermission('partnersCustomersEdit');

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
        <Permission name="partnersCustomersView">
            <FormBox>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '15px' }}>
                    Customer Details
                </Typography>

                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        address1: address1,
                        address2: address2,
                        businessName: businessName,
                        city: city,
                        country: 'Sri Lanka',
                        contactPerson: contactPerson,
                        phoneNumber: phoneNumber,
                        email: email,
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
                            vendor: false,
                            customer: true,
                            other: false,
                            userId: '667',
                            businessId: '789'
                        });
                        navigate(`../customers`, true);
                    }}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Business Name"
                                name="businessName"
                                type="text"
                                variant="outlined"
                                margin="normal"
                                error={!!errors.businessName}
                                helperText={touched.businessName ? errors.businessName : ''}
                                onChange={handleChange}
                                disabled={inputDisable}
                                value={values.businessName}
                            />

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
                                disabled={inputDisable}
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
                                disabled={inputDisable}
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
                                    disabled={inputDisable}
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
                                disabled={inputDisable}
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
                                disabled={inputDisable}
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
                                disabled={inputDisable}
                            />

                            <Permission name="partnersCustomersEdit" type="button">
                                <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                    <Link to={`../customers`}>
                                        <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                            cancel
                                        </Button>
                                    </Link>
                                    <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} type="submit">
                                        Save
                                    </Button>
                                </Box>
                            </Permission>
                        </form>
                    )}
                </Formik>
            </FormBox>
        </Permission>
    );
};

export default OneCustomer;
