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
    Select
} from '@mui/material';
import { createItemUOM } from '../../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import * as yup from 'yup';
import Permission from 'component/permission';

// ==============================|| SAMPLE PAGE ||============================== //

const AddUOM = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [name, setName] = useState('');

    const validationSchema = yup.object({
        name: yup.string('').required('UOM Name is required')
    });

    const PostData = async () => {
        await createItemUOM({
            name: name,
            businessId: 'yty',
            userId: 'fdgt5'
        });
    };

    return (
        <Permission name="itemsUomAdd">
            <FormBox>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '10px' }}>
                    Add UOM
                </Typography>
                <Formik
                    initialValues={{
                        name: '',
                        itemType: 'Service',
                        submit: null
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        console.log(values);
                        await createItemUOM({
                            name: values.name,
                            businessId: 'yty',
                            userId: 'fdgt5'
                        });
                        navigate(`../uom`, true);
                    }}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="UOM Name"
                                variant="outlined"
                                margin="normal"
                                name="name"
                                error={!!errors.name}
                                helperText={touched.name ? errors.name : ''}
                                onChange={handleChange}
                            />
                            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                <Link to={`../uom`}>
                                    <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                        cancel
                                    </Button>
                                </Link>
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} type="submit">
                                    Submit
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </FormBox>
        </Permission>
    );
};

export default AddUOM;
