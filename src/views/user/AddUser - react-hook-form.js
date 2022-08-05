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
import { createUser } from '../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// ==============================|| ADD USER PAGE ||============================== //

const AddUser = () => {
    const theme = useTheme();

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

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        phoneNumber: Yup.string().required('Phone Number is required'),
        businessName: Yup.string().required('Business Name is required'),
        businessUnit: Yup.string().required('Business Uint is required'),
        designation: Yup.string().required('Designation is required'),
        role: Yup.string().required('Role is required'),
        email: Yup.string('Enter your Email').email('Must be a valid email').max(255).required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match')
    });

    const PostData = async () => {
        await createUser({
            name: businessName,
            address: businessAddress,
            contactName: contactName,
            email: email,
            userId: '2133',
            author: 'avishka dev'
        });
    };

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (data) => {
        console.log(data);
        await createUser({
            firstName: data.firstName,
            lastName: data.lastName,
            designation: data.designation,
            businessUnit: data.businessUnit,
            phoneNumber: data.phoneNumber,
            businessId: '54657',
            email: data.email,
            password: data.password,
            role: data.role,
            roleId: 'retryt'
        });
    };

    return (
        <FormBox>
            <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                Add User
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Controller
                            control={control}
                            name="firstName"
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    error={!!errors.firstName}
                                    {...register('firstName')}
                                    helperText={errors.firstName ? errors.firstName.message : ''}
                                    label="first Name"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Controller
                            control={control}
                            name="lastName"
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    error={!!errors.lastName}
                                    {...register('lastName')}
                                    helperText={errors.lastName ? errors.lastName.message : ''}
                                    label="last Name"
                                />
                            )}
                        />
                    </Grid>
                </Grid>
                <Controller
                    control={control}
                    name="email"
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            error={!!errors.email}
                            {...register('email')}
                            helperText={errors.email ? errors.email.message : ''}
                            label="Email"
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            error={!!errors.phoneNumber}
                            {...register('phoneNumber')}
                            helperText={errors.phoneNumber ? errors.phoneNumber.message : ''}
                            label="Phone Number"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="businessName"
                    defaultValue=""
                    render={({ field }) => (
                        <FormControl
                            fullWidth
                            margin="normal"
                            error={!!errors.businessName}
                            helperText={errors.phoneNumber ? errors.phoneNumber.message : ''}
                        >
                            <InputLabel id="business">Business Name</InputLabel>
                            <Select
                                {...field}
                                labelId="business-label"
                                id="business"
                                {...register('businessName')}
                                name="businessName"
                                label="Business Name"
                            >
                                <MenuItem value="kandy branch">W kandy branch</MenuItem>
                                <MenuItem value="HR">M HR</MenuItem>
                                <MenuItem value="Finance">Finance</MenuItem>
                            </Select>
                            {errors.businessName && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.businessName.message}
                                </FormHelperText>
                            )}
                        </FormControl>
                    )}
                />

                <Controller
                    defaultValue=""
                    control={control}
                    name="businessUnit"
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal" error={!!errors.businessUnit}>
                            <InputLabel id="business-unit">Business Unit</InputLabel>
                            <Select
                                {...field}
                                labelId="business-unit-label"
                                id="business-unit"
                                {...register('businessUnit')}
                                name="businessUnit"
                                label="Business Uint"
                            >
                                <MenuItem value="kandy branch">W bussiness</MenuItem>
                                <MenuItem value="hr">M business</MenuItem>
                                <MenuItem value="R Business">Finance</MenuItem>
                            </Select>
                            {errors.businessUnit && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.businessUnit.message}
                                </FormHelperText>
                            )}
                        </FormControl>
                    )}
                />

                <Controller
                    control={control}
                    name="designation"
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            error={!!errors.designation}
                            {...register('designation')}
                            helperText={errors.designation ? errors.designation.message : ''}
                            label="Designation"
                        />
                    )}
                />

                <Controller
                    defaultValue=""
                    control={control}
                    name="role"
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal" error={!!errors.role}>
                            <InputLabel id="business-unit">Role</InputLabel>
                            <Select
                                {...field}
                                labelId="business-unit-label"
                                id="business-unit"
                                {...register('role')}
                                name="role"
                                label="Business Uint"
                            >
                                <MenuItem value="Project Manager">Project Manager</MenuItem>
                                <MenuItem value="Manager">Manager</MenuItem>
                                <MenuItem value="CEO">CEO</MenuItem>
                            </Select>
                            {errors.role && <FormHelperText error>{errors.role.message}</FormHelperText>}
                        </FormControl>
                    )}
                />

                <Controller
                    control={control}
                    name="password"
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            error={!!errors.password}
                            {...register('password')}
                            helperText={errors.password ? errors.password.message : ''}
                            label="Password"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            error={!!errors.confirmPassword}
                            {...register('confirmPassword')}
                            helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
                            label="Confirm Password"
                        />
                    )}
                />

                <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                    <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                        cancel
                    </Button>
                    <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} type="submit">
                        add
                    </Button>
                </Box>
            </form>
        </FormBox>
    );
};

export default AddUser;
