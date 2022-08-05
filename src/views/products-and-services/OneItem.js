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
    FormGroup,
    FormHelperText
} from '@mui/material';
import { getOneItem, editItem, getAllItemCategory } from '../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';
import { Formik } from 'formik';
import * as yup from 'yup';
import Permission from 'component/permission';

// ==============================|| SAMPLE PAGE ||============================== //

const OneItem = () => {
    const theme = useTheme();
    const params = useParams();
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [description, setDescription] = useState('');
    const [itemsType, setItemsType] = useState('');
    const [sellAll, setSellAll] = useState(Boolean);
    const [buyThis, setBuyThis] = useState(Boolean);

    const validationSchema = yup.object({
        name: yup.string('Enter your Products or service Name').required('Products or service name is required'),
        itemsType: yup.string('Enter your items type').required('items type is required'),
        category: yup.string('Enter your category').required('category is required'),
        description: yup.string('Enter your description').required('description is required')
    });

    useEffect(() => {
        async function fetchData() {
            await getOneItem(params.id)
                .then((res) => {
                    console.log(res.data.data);
                    setName(res.data.data.name);
                    setCategoryId(res.data.data.categoryId);
                    setDescription(res.data.data.description);
                    setItemsType(res.data.data.itemsType);
                    setBuyThis(res.data.data.buyThis);
                })
                .catch((err) => {
                    console.log(err);
                });

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
                    enableReinitialize={true}
                    initialValues={{
                        name: name,
                        category: categoryId,
                        description: description,
                        itemsType: itemsType,
                        sellAll: sellAll,
                        buyThis: buyThis,
                        businessId: '',
                        userId: '',
                        submit: null
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        await editItem(params.id, {
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
                                value={values.name}
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
                                value={values.description}
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
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} type="submit">
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

export default OneItem;
