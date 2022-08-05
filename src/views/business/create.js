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
import { createBusiness } from '../../services/api';
import { useTheme } from '@mui/material/styles';
import Permission from 'component/permission';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import FormBox from 'ui-component/box/FormBox';

// ==============================|| SAMPLE PAGE ||============================== //

const CreateBusiness = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    //business
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [businessAddress1, setBusinessAddress1] = useState('');
    const [businessAddress2, setBusinessAddress2] = useState('');
    const [businessCity, setBusinessCity] = useState('');
    const [businessCountry, setBusinessCountry] = useState('Sri Lanka');
    const [businessEmail, setBusinessEmail] = useState('');
    const [businessPhoneNumber, setBusinessPhoneNumber] = useState('');
    const [businessWeb, setBusinessWeb] = useState('');
    const [defferentDetailsHO, setDefferentDetailsHO] = useState(false);

    //head office
    const [headOfficeAddress1, setHeadOfficeAddress1] = useState('');
    const [headOfficeAddress2, setHeadOfficeAddress2] = useState('');
    const [headOfficeEmail, setHeadOfficeEmail] = useState('');
    const [headOfficeCity, setHeadOfficeCity] = useState('');
    const [headOfficeCountry, setHeadOfficeCountry] = useState('Sri Lanka');
    const [headOfficePhoneNumber, setHeadOfficePhoneNumer] = useState('');
    const [headOffice, setHeadOffice] = useState(false);

    const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

    const DefferentDetailsHOCheckBox = async () => {
        console.log(!defferentDetailsHO);
        setDefferentDetailsHO(!defferentDetailsHO);
    };

    const PostData = async () => {
        await createBusiness({
            registationNumber: registrationNumber,
            businessName: businessName,
            businessAddress1: businessAddress1,
            businessAddress2: businessAddress2,
            businessCity: businessCity,
            businessCountry: businessCountry,
            businessPhoneNumber: businessPhoneNumber,
            businessEmail: businessEmail,
            businessWeb: businessWeb,
            userId: '879',
            headOfficeAddress1: headOfficeAddress1,
            headOfficeAddress2: headOfficeAddress2,
            headOfficeCity: headOfficeCity,
            headOfficeCountry: headOfficeCountry,
            headOfficePhoneNumber: headOfficePhoneNumber,
            headOfficeEmail: headOfficeEmail,
            headOffice: defferentDetailsHO
        });
    };

    const businessValidationSchema = yup.object({
        registationNumber: yup.string('').required('Registation Number is required'),
        businessName: yup.string('').required('Business Name is required'),
        businessAddress1: yup.string('').required('Business Address 2 is required'),
        businessAddress2: yup.string(''),
        businessCity: yup.string('').required('Business City is required'),
        businessCountry: yup.string('').required('Business Country is required'),
        businessEmail: yup.string('Enter your Email').email('Must be a valid email').max(255).required('Email is required'),
        businessWeb: yup.string('').required('Business Web is required'),
        businessPhoneNumber: yup.string('').required('Business Phone Number is required')
    });

    const headOfficeValidationSchema = yup.object({
        registationNumber: yup.string('').required('Registation Number is required'),
        businessName: yup.string('').required('Business Name is required'),
        businessAddress1: yup.string('').required('Business Address 2 is required'),
        businessAddress2: yup.string('').required('Business Address 2 is required'),
        businessCity: yup.string('').required('Business City is required'),
        businessCountry: yup.string('').required('Business Country is required'),
        businessEmail: yup.string('Enter your Email').email('Must be a valid email').max(255).required('Email is required'),
        businessWeb: yup.string('').required('Business Web is required'),
        businessPhoneNumber: yup.string('').required('Business Phone Number is required'),
        headOfficeAddress1: yup.string('').required('Head Office Address 1 is required'),
        headOfficeAddress2: yup.string('').required('Head Office Address 2 is required'),
        headOfficeCity: yup.string('').required('Head Office City is required'),
        headOfficeCountry: yup.string('').required('Head Office Country is required'),
        headOfficePhoneNumber: yup.string('').required('Head Office Phone Number is required'),
        headOfficeEmail: yup.string('Enter your Email').email('Must be a valid email').max(255).required('Email is required')
    });

    const businessInitialValues = {
        registationNumber: '',
        businessName: '',
        businessAddress1: '',
        businessAddress2: '',
        businessCity: '',
        businessCountry: '',
        businessPhoneNumber: '',
        businessEmail: '',
        businessWeb: '',
        submit: null
    };
    const withHeadOfficeInitialValues = {
        registationNumber: '',
        businessName: '',
        businessAddress1: '',
        businessAddress2: '',
        businessCity: '',
        businessCountry: '',
        businessPhoneNumber: '',
        businessEmail: '',
        businessWeb: '',
        headOfficeAddress1: '',
        headOfficeAddress2: '',
        headOfficeCity: '',
        headOfficeCountry: '',
        headOfficePhoneNumber: '',
        headOfficeEmail: '',
        submit: null
    };

    const Submit = async () => {
        setValidateAfterSubmit(true);
    };

    return (
        <Permission name="businessAdd">
            <FormBox>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '10px' }}>
                    Business Details
                </Typography>
                <Formik
                    initialValues={!validateAfterSubmit ? withHeadOfficeInitialValues : businessInitialValues}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        console.log(values);
                        await createBusiness({
                            registationNumber: values.registationNumber,
                            businessName: values.businessName,
                            businessAddress1: values.businessAddress1,
                            businessAddress2: values.businessAddress2,
                            businessCity: values.businessCity,
                            businessCountry: values.businessCountry,
                            businessPhoneNumber: values.businessPhoneNumber,
                            businessEmail: values.businessEmail,
                            businessWeb: values.businessWeb,
                            userId: '879',
                            headOfficeAddress1: values.headOfficeAddress1,
                            headOfficeAddress2: values.headOfficeAddress2,
                            headOfficeCity: values.headOfficeCity,
                            headOfficeCountry: values.headOfficeCountry,
                            headOfficePhoneNumber: values.headOfficePhoneNumber,
                            headOfficeEmail: values.headOfficeEmail,
                            headOffice: defferentDetailsHO
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
                                label="Registrstion Number"
                                variant="outlined"
                                margin="normal"
                                name="registationNumber"
                                error={!!errors.registationNumber}
                                helperText={touched.registationNumber ? errors.registationNumber : ''}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Business Name"
                                variant="outlined"
                                margin="normal"
                                name="businessName"
                                error={!!errors.businessName}
                                helperText={touched.businessName ? errors.businessName : ''}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Business Address 1"
                                variant="outlined"
                                margin="normal"
                                name="businessAddress1"
                                error={!!errors.businessAddress1}
                                helperText={touched.businessAddress1 ? errors.businessAddress1 : ''}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Business Address 2"
                                variant="outlined"
                                margin="normal"
                                name="businessAddress2"
                                error={!!errors.businessAddress2}
                                helperText={touched.businessAddress2 ? errors.businessAddress2 : ''}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="City"
                                variant="outlined"
                                margin="normal"
                                name="businessCity"
                                error={!!errors.businessCity}
                                helperText={touched.businessCity ? errors.businessCity : ''}
                                onChange={handleChange}
                            />
                            <FormControl fullWidth margin="normal" error={!!errors.businessCountry}>
                                <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Business Unit"
                                    name="businessCountry"
                                    value={values.businessCountry}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                                    <MenuItem value="Aus">Aus</MenuItem>
                                    <MenuItem value="IND">IND</MenuItem>
                                </Select>
                                {touched.businessCountry && errors.businessCountry && (
                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                        {errors.businessCountry}
                                    </FormHelperText>
                                )}
                            </FormControl>

                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Phone Number"
                                variant="outlined"
                                margin="normal"
                                name="businessPhoneNumber"
                                error={!!errors.businessPhoneNumber}
                                helperText={touched.businessPhoneNumber ? errors.businessPhoneNumber : ''}
                                onChange={handleChange}
                            />

                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                type="email"
                                name="businessEmail"
                                error={!!errors.businessEmail}
                                helperText={touched.businessEmail ? errors.businessEmail : ''}
                                onChange={handleChange}
                            />

                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Website"
                                variant="outlined"
                                margin="normal"
                                name="businessWeb"
                                error={!!errors.businessWeb}
                                helperText={touched.businessWeb ? errors.businessWeb : ''}
                                onChange={handleChange}
                            />

                            <FormControlLabel
                                control={<Checkbox onClick={DefferentDetailsHOCheckBox} />}
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
                                        name="headOfficeAddress1"
                                        error={!!errors.headOfficeAddress1}
                                        helperText={touched.headOfficeAddress1 ? errors.headOfficeAddress1 : ''}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Head Office Address 2"
                                        variant="outlined"
                                        margin="normal"
                                        name="headOfficeAddress2"
                                        error={!!errors.headOfficeAddress2}
                                        helperText={touched.headOfficeAddress2 ? errors.headOfficeAddress2 : ''}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        fullWidth
                                        label="City"
                                        variant="outlined"
                                        margin="normal"
                                        name="headOfficeCity"
                                        error={!!errors.headOfficeCity}
                                        helperText={touched.headOfficeCity ? errors.headOfficeCity : ''}
                                        onChange={handleChange}
                                    />
                                    <FormControl fullWidth margin="normal" error={!!errors.headOfficeCountry}>
                                        <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Business Unit"
                                            name="headOfficeCountry"
                                            value={values.headOfficeCountry}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                                            <MenuItem value="Aus">Aus</MenuItem>
                                            <MenuItem value="IND">IND</MenuItem>
                                        </Select>
                                        {touched.headOfficeCountry && errors.headOfficeCountry && (
                                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                                {errors.headOfficeCountry}
                                            </FormHelperText>
                                        )}
                                    </FormControl>

                                    <TextField
                                        fullWidth
                                        label="Phone number"
                                        variant="outlined"
                                        margin="normal"
                                        name="headOfficePhoneNumber"
                                        error={!!errors.headOfficePhoneNumber}
                                        helperText={touched.headOfficePhoneNumber ? errors.headOfficePhoneNumber : ''}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        variant="outlined"
                                        margin="normal"
                                        name="headOfficeEmail"
                                        error={!!errors.headOfficeEmail}
                                        helperText={touched.headOfficeEmail ? errors.headOfficeEmail : ''}
                                        onChange={handleChange}
                                    />
                                </>
                            )}

                            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                <Link to={`../`}>
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

export default CreateBusiness;
