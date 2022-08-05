import React, { useState, useRef } from 'react';
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
import { createBusinessUnit } from '../../../services/api';
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import Permission from '../../../component/permission';

// ==============================|| SAMPLE PAGE ||============================== //

const AddBusinessUnit = () => {
    const theme = useTheme();
    const params = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

    const validationSchema = yup.object({
        name: yup.string('').required('Business Unit Name is required'),
        type: yup.string('').required('Business Unit Name is required')
    });

    const Submit = async () => {
        setValidateAfterSubmit(true);
    };

    return (
        <Permission name="businessAdd">
            <Box
                sx={{
                    padding: { xs: '10px', md: '0px 130px 0px 130px' },
                    backgroundColor: '#fff',
                    margin: 'auto'
                }}
            >
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '15px' }}>
                    Add Business Unit
                </Typography>
                <Formik
                    initialValues={{
                        name: '',
                        type: '',
                        submit: null
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        console.log(values);
                        await createBusinessUnit({
                            name: values.name,
                            type: values.type,
                            businessId: params.id,
                            userId: '56457',
                            location: false,
                            headOffice: false,
                            headOfficeId: '',
                            locationId: ''
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
                                label="Business Unit Name"
                                variant="outlined"
                                margin="normal"
                                name="name"
                                error={!!errors.name}
                                helperText={touched.name ? errors.name : ''}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Business Unit Type"
                                variant="outlined"
                                margin="normal"
                                name="type"
                                error={!!errors.type}
                                helperText={touched.type ? errors.type : ''}
                                onChange={handleChange}
                            />

                            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                <Link to={`../${params.id}`}>
                                    <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                        cancel
                                    </Button>
                                </Link>

                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} type="submit" onClick={Submit}>
                                    Save
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
        </Permission>
    );
};

export default AddBusinessUnit;
