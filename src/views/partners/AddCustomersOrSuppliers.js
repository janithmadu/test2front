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
    Select,
    FormGroup,
    FormHelperText
} from '@mui/material';
import { createPartner, getAllBusiness } from '../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';
import { Formik } from 'formik';
import * as yup from 'yup';

// ==============================|| SAMPLE PAGE ||============================== //

const AddCustomersOrSuppliers = () => {
    const theme = useTheme();
    const [businesses, setBusinesses] = useState([]);
    const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

    const validationSchema = yup.object({
        businessName: yup.string('Enter your Business Name').required('Business Name is required'),
        address1: yup.string('Enter your Addres 1').required('Addess 1 is required'),
        address2: yup.string('Enter your Addres 2').required('Addess 2 is required'),
        city: yup.string('Enter your City').required('City is required'),
        country: yup.string('Enter your country').required('country is required'),
        contactPerson: yup.string('Enter your Contact Person').required('Contact Person is required'),
        phoneNumber: yup.string('Enter your Phone Number').required('Phone Number is required'),
        email: yup.string('Enter your Email').email('Must be a valid email').max(255).required('Email is required')
    });

    const PostData = async () => {
        await createPartner({
            businessName: businessName,
            address1: address1,
            address2: address2,
            phoneNumber: phoneNumber,
            contactPerson: contactPerson,
            email: email,
            city: city,
            country: country,
            vendor: vendor,
            customer: customer,
            other: other,
            userId: '667',
            businessId: '789'
        });
    };

    const Submit = async () => {
        setValidateAfterSubmit(true);
    };

    useEffect(() => {
        async function fetchData() {
            await getAllBusiness()
                .then((res) => {
                    console.log(res.data.data);
                    setBusinesses(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        fetchData();
    }, []);

    return (
        <>
            <FormBox>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '15px' }}>
                    Bussiness Partners Details
                </Typography>

                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        address1: '',
                        address2: '',
                        businessName: '',
                        city: '',
                        country: '',
                        contactPerson: '',
                        phoneNumber: '',
                        email: '',
                        customer: true,
                        vendor: false,
                        other: false,
                        submit: null
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        await createPartner({
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
                    validateOnChange={validateAfterSubmit}
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
                                    {businesses.map((business, index) => (
                                        <MenuItem value={business._id} key={index}>
                                            {business.businessName}
                                        </MenuItem>
                                    ))}
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
                                onChange={handleChange}
                                helperText={touched.address2 ? errors.address2 : ''}
                            />

                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="City"
                                name="city"
                                variant="outlined"
                                margin="normal"
                                type="text"
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
                                label="Contact Person"
                                type="text"
                                name="contactPerson"
                                variant="outlined"
                                margin="normal"
                                helperText={touched.contactPerson ? errors.contactPerson : ''}
                                error={!!errors.contactPerson}
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
                                onChange={handleChange}
                                helperText={touched.email ? errors.email : ''}
                            />

                            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                    cancel
                                </Button>
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} type="submit" onClick={Submit}>
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

export default AddCustomersOrSuppliers;
