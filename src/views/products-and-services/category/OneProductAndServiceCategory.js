//react
import { useState, useEffect, useRef } from 'react';
// material-ui
import { Typography } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { IconTrash } from '@tabler/icons';

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
import { getOneItemCategory, editItemCategory } from '../../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';
import { Formik } from 'formik';
import * as yup from 'yup';
import Permission from 'component/permission';
import usePermission from 'hooks/usePermission';

// ==============================|| SAMPLE PAGE ||============================== //

const OneProductAndServiceCategory = () => {
    const theme = useTheme();
    const params = useParams();
    const navigate = useNavigate();
    const inputDisable = usePermission('itemsCategoriesEdit');

    const [categoryName, setCategoryName] = useState('');
    const [itemType, setItemType] = useState('');

    const validationSchema = yup.object({
        categoryName: yup.string('').required('Category Name is required'),
        itemType: yup.string('').required('items type is required')
    });

    useEffect(() => {
        async function fetchData() {
            await getOneItemCategory(params.id)
                .then((res) => {
                    console.log(res.data.data);
                    setCategoryName(res.data.data.name);
                    setItemType(res.data.data.itemType);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        fetchData();
    }, []);

    return (
        <Permission name="itemsCategoriesView">
            <FormBox>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '10px' }}>
                    Add Products & Service Category
                </Typography>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        categoryName: categoryName,
                        itemType: itemType,
                        submit: null
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        console.log(values);
                        await editItemCategory(params.id, {
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
                                value={values.categoryName}
                                error={!!errors.categoryName}
                                helperText={touched.categoryName ? errors.categoryName : ''}
                                onChange={handleChange}
                                disabled={inputDisable}
                            />

                            <FormControl sx={{ marginTop: '20px' }} error={!!errors.itemType}>
                                <RadioGroup row name="itemType" value={values.itemType} name="itemType" onChange={handleChange}>
                                    <FormControlLabel value="Product" control={<Radio />} label="Product" disabled={inputDisable} />
                                    <FormControlLabel value="Service" control={<Radio />} label="Service" disabled={inputDisable} />
                                </RadioGroup>
                            </FormControl>
                            {touched.itemsType && errors.itemsType && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.itemType}
                                </FormHelperText>
                            )}

                            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                <Permission name="itemsCategoriesEdit" type="button">
                                    <Link to={`../category`}>
                                        <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                            cancel
                                        </Button>
                                    </Link>
                                </Permission>
                                <Permission name="itemsCategoriesEdit" type="button">
                                    <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} type="submit">
                                        Submit
                                    </Button>
                                </Permission>
                            </Box>
                        </form>
                    )}
                </Formik>
            </FormBox>
        </Permission>
    );
};

export default OneProductAndServiceCategory;
