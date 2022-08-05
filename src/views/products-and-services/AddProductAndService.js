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
import { createItem, getAllItemCategory } from '../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';
import { Formik } from 'formik';
import * as yup from 'yup';

// ==============================|| SAMPLE PAGE ||============================== //

const AddProductAndService = () => {
    const theme = useTheme();
    const [categories, setCategories] = useState([]);
    const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

    const validationSchema = yup.object({
        name: yup.string('Enter your Products or service Name').required('Products or service name is required'),
        itemsType: yup.string('Enter your items type').required('items type is required'),
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
            itemsType: itemsType,
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
            await getAllItemCategory()
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
        <>
            <FormBox>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '15px' }}>
                    Products & Services
                </Typography>
                <Formik
                    initialValues={{
                        name: '',
                        category: '',
                        description: '',
                        itemsType: 'Product',
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
                            itemsType: values.itemsType,
                            sellAll: values.sellAll,
                            buyThis: values.buyThis,
                            businessId: 'uio7',
                            userId: 'koik98'
                        });
                    }}
                    validateOnChange={validateAfterSubmit}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Products & Services Name"
                                variant="outlined"
                                margin="normal"
                                name="name"
                                type="text"
                                error={!!errors.name}
                                helperText={touched.name ? errors.name : ''}
                                onChange={handleChange}
                            />

                            <Box>
                                <FormControl sx={{ marginTop: '10px' }} error={!!errors.itemsType}>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        value={values.itemsType}
                                        name="itemsType"
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="Product" control={<Radio />} label="Product" />
                                        <FormControlLabel value="Service" control={<Radio />} label="Service" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            {touched.itemsType && errors.itemsType && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.itemsType}
                                </FormHelperText>
                            )}
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
                                <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                    cancel
                                </Button>
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} type="submit" onClick={Submit}>
                                    Submit
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </FormBox>
        </>
    );
};

export default AddProductAndService;
