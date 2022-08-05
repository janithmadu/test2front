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
import { createItem, getAllItemCategoryProducts } from '../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import Permission from 'component/permission';

// ==============================|| SAMPLE PAGE ||============================== //

const AddProduct = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

    const validationSchema = yup.object({
        name: yup.string('Enter your Products or service Name').required('Products or service name is required'),
        category: yup.string('Enter your category').required('category is required'),
        description: yup.string('Enter your description').required('description is required')
    });
    const PostData = async () => {
        console.log('posting..');
        console.log(itemsType, sellAll, buyThis, category);
        await createItem({
            name: name,
            categoryId: '5643',
            description: description,
            itemsType: 'Product',
            sellAll: sellAll,
            buyThis: buyThis,
            businessId: 'uio7',
            userId: 'koik98'
        });
    };

    const Submit = async () => {
        setValidateAfterSubmit(true);
    };

    useEffect(() => {
        async function fetchData() {
            await getAllItemCategoryProducts()
                .then((res) => {
                    console.log(res.data.data);
                    setCategories(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        fetchData();
    }, []);

    return (
        <Permission name="productsAdd">
            <FormBox>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '15px' }}>
                    Products Details
                </Typography>
                <Formik
                    initialValues={{
                        name: '',
                        category: '',
                        description: '',
                        sellAll: false,
                        buyThis: false,
                        businessId: '',
                        userId: '',
                        submit: null
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        await createItem({
                            name: values.name,
                            categoryId: values.category,
                            description: values.description,
                            itemsType: 'Product',
                            sellAll: values.sellAll,
                            buyThis: values.buyThis,
                            businessId: 'uio7',
                            userId: 'koik98'
                        });
                        navigate(`../products`, true);
                    }}
                    validateOnChange={validateAfterSubmit}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Products Name"
                                variant="outlined"
                                margin="normal"
                                name="name"
                                type="text"
                                error={!!errors.name}
                                helperText={touched.name ? errors.name : ''}
                                onChange={handleChange}
                            />

                            <FormControl fullWidth margin="normal" error={!!errors.category}>
                                <InputLabel>Category</InputLabel>
                                <Select label="Category" name="category" value={values.category} onChange={handleChange}>
                                    {categories.map((category, index) => (
                                        <MenuItem value={category._id} key={index}>
                                            {category.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            {touched.category && errors.category && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.category}
                                </FormHelperText>
                            )}
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Description"
                                multiline
                                rows={4}
                                name="description"
                                error={!!errors.description}
                                helperText={touched.description ? errors.description : ''}
                                onChange={handleChange}
                            />

                            <Box sx={{ textAlign: 'center' }}>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={<Checkbox name="sellAll" checked={values.sellAll} onChange={handleChange} />}
                                        label="Sell This"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="buyThis" checked={values.buyThis} onChange={handleChange} />}
                                        label="Buy This"
                                    />
                                </FormGroup>
                            </Box>
                            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                <Link to={`../products`}>
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
            </FormBox>
        </Permission>
    );
};

export default AddProduct;
