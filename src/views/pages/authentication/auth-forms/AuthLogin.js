import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

import { login } from '../../../../services/api';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Google from 'assets/images/icons/social-google.svg';
import { SET_BORDER_RADIUS, SET_FONT_FAMILY, SET_LOGIN_SUCCESS, SET_TOKEN, SET_ROLE_NAME, SET_USER } from 'store/actions';
import { useNavigate } from 'react-router-dom';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);
    const auth = useSelector((state) => state.auth);

    const [checked, setChecked] = useState(true);

    const googleHandler = async () => {
        console.error('Login');
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const setUp = () => {
        console.log('setup');
        const token = 'sawu28ueije3iu43u453ijrti';
        //dispatch({ type: SET_BORDER_RADIUS, borderRadius });
        dispatch({ type: SET_TOKEN, token });
        localStorage.setItem('token', token);
    };

    // useEffect(() => {
    //        console.log(borderRadius)
    //        dispatch({ type: SET_BORDER_RADIUS, borderRadius });
    //    }, [dispatch, borderRadius]);

    const checkUp = () => {
        const role = {
            _id: '62d78c38bfeb2313b04941a6',
            roleName: 'test role',
            businessView: true,
            businessAdd: true,
            businessEdit: true,
            usersAdd: true,
            usersView: true,
            usersEdit: true,
            rolesView: true,
            rolesAdd: true,
            rolesEdit: true,
            productsView: true,
            productsAdd: false,
            productsEdit: false,
            servicesView: true,
            servicesAdd: false,
            servicesEdit: false,
            itemsCategoriesView: true,
            itemsCategoriesAdd: false,
            itemsCategoriesEdit: false,
            itemsUomView: true,
            itemsUomAdd: false,
            itemsUomEdit: false,
            partnersCustomersView: true,
            partnersCustomersAdd: false,
            partnersCustomersEdit: false,
            partnersVendorsView: true,
            partnersVendorsAdd: false,
            partnersVendorsEdit: false,
            partnersOtherView: true,
            partnersOtherAdd: false,
            partnersOtherEdit: false,
            documentsCategoryView: true,
            documentsCategoryAdd: false,
            documentsCategoryEdit: false,
            documentsCollectionsView: true,
            documentsCollectionsAdd: false,
            documentsCollectionsEdit: false,
            documentsAdd: false,
            documentsView: true,
            documentsEdit: false,
            documentsPrint: false,
            documentsApprove: false,
            userId: 'tyr6yy',
            businessId: '34355',
            createdAt: '2022-07-20T05:01:44.046Z',
            __v: 0
        };

        dispatch({ type: SET_ROLE_NAME, role });

        localStorage.setItem('role', JSON.stringify(role));

        console.log('checkup', auth);
    };

    const go = () => {
        console.log('go');
        const token = '43575firjtg';
        dispatch({ type: SET_TOKEN, token });

        if (true) {
            console.log('ok');
            navigate(`/user/profile`, true);
        }
    };

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        await login({
                            email: values.email,
                            password: values.password
                        })
                            .then((res) => {
                                const token = res.data.token;
                                const role = res.data.permission;
                                const firstName = res.data.firstName;
                                const lastName = res.data.lastName;

                                dispatch({ type: SET_TOKEN, token });
                                dispatch({ type: SET_ROLE_NAME, role });
                                dispatch({ type: SET_USER, firstName, lastName });

                                localStorage.setItem('role', JSON.stringify(role));
                                localStorage.setItem('token', token);
                            })
                            .catch((err) => {
                                console.log(err.response.data.error);
                                setErrors({ submit: err.response.data.error });
                            });

                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }

                    console.log('login', auth);
                    await navigate(`/`, true);
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput1 }}>
                            <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-login"
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Email Address / Username"
                                inputProps={{}}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{ ...theme.typography.customInput1 }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-login"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                inputProps={{}}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={(event) => setChecked(event.target.checked)}
                                        name="checked"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Typography variant="subtitle1" color="primary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                                Forgot Password?
                            </Typography>
                        </Stack>
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    sx={{ padding: '12px 20px' }}
                                >
                                    Sign in
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseLogin;
