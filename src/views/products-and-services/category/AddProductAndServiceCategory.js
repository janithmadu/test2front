//react
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
    FormGroup,
    FormHelperText
} from '@mui/material';
import { createItemCategory } from '../../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import Permission from 'component/permission';

// ==============================|| SAMPLE PAGE ||============================== //

const AddProductAndServiceCategory = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const validationSchema = yup.object({
        categoryName: yup.string('').required('Category Name is required'),
        itemType: yup.string('').required('items type is required')
    });

    return (
        <Permission name="itemsCategoriesAdd">
            <FormBox>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '10px' }}>
                    Add Products & Service Category
                </Typography>
                <Formik
                    initialValues={{
                        categoryName: '',
                        itemType: 'Service',
                        submit: null
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        console.log(values);
                        await createItemCategory({
                            name: values.categoryName,
                            itemType: values.itemType,
                            businessId: '5456',
                            userId: '2133'
                        });
                        navigate(`../category`, true);
                    }}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Category Name"
                                variant="outlined"
                                margin="normal"
                                name="categoryName"
                                error={!!errors.categoryName}
                                helperText={touched.categoryName ? errors.categoryName : ''}
                                onChange={handleChange}
                            />

                            <FormControl sx={{ marginTop: '20px' }} error={!!errors.itemType}>
                                <RadioGroup row name="itemType" value={values.itemType} name="itemType" onChange={handleChange}>
                                    <FormControlLabel value="Product" control={<Radio />} label="Product" />
                                    <FormControlLabel value="Service" control={<Radio />} label="Service" />
                                </RadioGroup>
                            </FormControl>
                            {touched.itemsType && errors.itemsType && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.itemType}
                                </FormHelperText>
                            )}

                            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                <Link to={`../category`}>
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

export default AddProductAndServiceCategory;
