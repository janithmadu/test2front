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
    FormHelperText
} from '@mui/material';
import { getUser, getAllRoles, getAllLocation, getAllBusinessUnit, getAllBusiness } from '../../services/api';
import { checkLogin, updateProfile } from '../../services/api/auth';
import { useTheme } from '@mui/material/styles';
import { Formik } from 'formik';
import * as yup from 'yup';
import { IconTrash } from '@tabler/icons';
import FormBox from 'ui-component/box/FormBox';

// ==============================|| SINGLE LOCATION PAGE ||============================== //

const Profile = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        businessName: '',
        businessUnit: '',
        email: '',
        phoneNumber: '',
        location: '',
        designation: '',
        role: '',
        password: ''
    });

    const [roles, setRoles] = useState([]);
    const [businesses, setBusinesses] = useState([]);
    const [locations, setLocations] = useState([]);
    const [businessUnits, setBusinessUnits] = useState([]);

    const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

    const validationSchema = yup.object({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        phoneNumber: yup.string().required('Phone Number is required'),
        businessName: yup.string().required('Business Name is required'),
        businessUnit: yup.string().required('Business Unit is required'),
        designation: yup.string().required('Designation is required'),
        location: yup.string().required('Location is required'),
        roleName: yup.string().required('Role is required'),
        email: yup.string('Enter your Email').email('Must be a valid email').max(255).required('Email is required'),
        password: yup
            .string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: yup
            .string()
            .required('Confirm Password is required')
            .oneOf([yup.ref('password'), null], 'Confirm Password does not match')
    });

    const Submit = async () => {
        setValidateAfterSubmit(true);
    };

    useEffect(() => {
        async function fetchData() {
            await checkLogin()
                .then((res) => {
                    console.log(res.data.user);
                    const { firstName, lastName, businessId, email, designation, roleId, locationId, phoneNumber, businessUnitId } =
                        res.data.user;

                    setUser({
                        firstName,
                        lastName,
                        businessName: businessId,
                        businessUnit: businessUnitId,
                        email,
                        phoneNumber,
                        location: locationId,
                        designation,
                        role: roleId
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
            await getAllRoles()
                .then((res) => {
                    console.log(res.data.data);
                    setRoles(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });

            await getAllLocation()
                .then((res) => {
                    console.log(res.data.data);
                    setLocations(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });

            await getAllBusinessUnit()
                .then((res) => {
                    console.log(res.data.data);
                    setBusinessUnits(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });

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
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '10px' }}>
                    Your Details
                </Typography>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        firstName: user.firstName,
                        lastName: user.lastName,
                        businessUnit: user.businessUnit,
                        businessName: user.businessName,
                        phoneNumber: user.phoneNumber,
                        designation: user.designation,
                        roleName: user.role,
                        password: user.password,
                        email: user.email,
                        location: user.location,
                        confirmPassword: user.password,
                        submit: null
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        console.log(values);
                        await updateProfile({
                            firstName: values.firstName,
                            lastName: values.lastName,
                            designation: values.designation,
                            phoneNumber: values.phoneNumber,
                            email: values.email,
                            password: values.password,
                            roleId: values.roleName,
                            businessId: values.businessName,
                            businessUnitId: values.businessUnit,
                            locationId: values.location
                        });
                    }}
                    validateOnChange={validateAfterSubmit}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="First Name"
                                variant="outlined"
                                margin="normal"
                                name="firstName"
                                value={values.firstName}
                                error={!!errors.firstName}
                                helperText={touched.firstName ? errors.firstName : ''}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Last Name"
                                variant="outlined"
                                margin="normal"
                                name="lastName"
                                value={values.lastName}
                                error={!!errors.lastName}
                                helperText={touched.lastName ? errors.lastName : ''}
                                onChange={handleChange}
                            />

                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                type="email"
                                name="email"
                                value={values.email}
                                error={!!errors.email}
                                helperText={touched.email ? errors.email : ''}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Phone number"
                                variant="outlined"
                                margin="normal"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                error={!!errors.phoneNumber}
                                helperText={touched.phoneNumber ? errors.phoneNumber : ''}
                                onChange={handleChange}
                            />
                            <FormControl fullWidth margin="normal" error={!!errors.businessName}>
                                <InputLabel id="demo-simple-select-label">Business </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Business name"
                                    name="businessName"
                                    value={values.businessName}
                                    onChange={handleChange}
                                    disabled
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

                            <FormControl fullWidth margin="normal" error={!!errors.location}>
                                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="location"
                                    name="location"
                                    value={values.location}
                                    onChange={handleChange}
                                    disabled
                                >
                                    {locations.map((location, index) => (
                                        <MenuItem value={location._id} key={index}>
                                            {location.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                                {touched.location && errors.location && (
                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                        {errors.location}
                                    </FormHelperText>
                                )}
                            </FormControl>

                            <FormControl fullWidth margin="normal" error={!!errors.businessUnit}>
                                <InputLabel id="demo-simple-select-label">Business Unit</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Business Unit"
                                    name="businessUnit"
                                    value={values.businessUnit}
                                    onChange={handleChange}
                                    disabled
                                >
                                    {businessUnits.map((businessUnit, index) => (
                                        <MenuItem value={businessUnit._id} key={index}>
                                            {businessUnit.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                                {touched.businessUnit && errors.businessUnit && (
                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                        {errors.businessUnit}
                                    </FormHelperText>
                                )}
                            </FormControl>

                            <FormControl fullWidth margin="normal" error={!!errors.roleName}>
                                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="role Name"
                                    name="roleName"
                                    value={values.roleName}
                                    onChange={handleChange}
                                    disabled
                                >
                                    {roles.map((role, index) => (
                                        <MenuItem value={role._id} key={index}>
                                            {role.roleName}
                                        </MenuItem>
                                    ))}
                                </Select>
                                {touched.roleName && errors.roleName && (
                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                        {errors.roleName}
                                    </FormHelperText>
                                )}
                            </FormControl>

                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Designation"
                                variant="outlined"
                                margin="normal"
                                name="designation"
                                value={values.designation}
                                error={!!errors.designation}
                                helperText={touched.designation ? errors.designation : ''}
                                onChange={handleChange}
                            />

                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Password"
                                variant="outlined"
                                margin="normal"
                                name="password"
                                type="password"
                                value={values.password}
                                error={!!errors.password}
                                helperText={touched.password ? errors.password : ''}
                                onChange={handleChange}
                            />

                            <TextField
                                fullWidth
                                id="fullWidth"
                                label=" Confirm Password"
                                variant="outlined"
                                margin="normal"
                                type="password"
                                name="confirmPassword"
                                value={values.confirmPassword}
                                error={!!errors.confirmPassword}
                                helperText={touched.confirmPassword ? errors.confirmPassword : ''}
                                onChange={handleChange}
                            />
                            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                    cancel
                                </Button>
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} type="submit" onClick={Submit}>
                                    save
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </FormBox>
        </>
    );
};

export default Profile;
