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
import { editUser, getUser, getAllRoles, getAllLocation, getAllBusinessUnit, getAllBusiness } from '../../services/api';
import { useTheme } from '@mui/material/styles';
import { Formik } from 'formik';
import * as yup from 'yup';
import { IconTrash } from '@tabler/icons';
import FormBox from 'ui-component/box/FormBox';

// ==============================|| SINGLE LOCATION PAGE ||============================== //

const OneUser = () => {
    const theme = useTheme();
    const params = useParams();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [businessUnit, setBusinessUnit] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [departmentAndTeamUnit, setDepartmentAndTeamUnit] = useState('');
    const [designation, setDesignation] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [location, setLocation] = useState('');

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
            await getUser(params.id)
                .then((res) => {
                    console.log(res.data.data);
                    setFirstName(res.data.data.firstName);
                    setLastName(res.data.data.lastName);
                    setBusinessUnit(res.data.data.businessUnitId);
                    setBusinessName(res.data.data.businessId);
                    setEmail(res.data.data.email);
                    setPhoneNumber(res.data.data.phoneNumber);
                    setDesignation(res.data.data.designation);
                    setPassword(res.data.data.password);
                    setRole(res.data.data.roleId);
                    setLocation(res.data.data.locationId);
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
                    // setLocations(...locations, [{_id:'5467', name:'tt'}]);
                    //const query = {_id:'5467', name:'tt'}
                    // setLocations(locations =>[...locations, query]);
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
                        firstName: firstName,
                        lastName: lastName,
                        businessUnit: businessUnit,
                        businessName: businessName,
                        phoneNumber: phoneNumber,
                        designation: designation,
                        roleName: role,
                        password: password,
                        email: email,
                        location: location,
                        confirmPassword: password,
                        submit: null
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        console.log(values);
                        await editUser(params.id, {
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
                        navigate(`../`, true);
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
                                <Link to={`../`}>
                                    <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                        cancel
                                    </Button>
                                </Link>
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

export default OneUser;
