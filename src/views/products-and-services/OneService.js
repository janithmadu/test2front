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
import { getOneItem, editItem, getAllItemCategoryServices,deleteItem } from '../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';
import { Formik } from 'formik';
import * as yup from 'yup';
import Permission from 'component/permission';
import usePermission from 'hooks/usePermission';

// ==============================|| SAMPLE PAGE ||============================== //

const OneService = () => {
    const theme = useTheme();
    const params = useParams();
    const navigate = useNavigate();
    const inputDisable = usePermission('servicesEdit');

    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [description, setDescription] = useState('');
    const [itemsType, setItemsType] = useState('');
    const [sellAll, setSellAll] = useState(Boolean);
    const [buyThis, setBuyThis] = useState(Boolean);

    const validationSchema = yup.object({
        name: yup.string('Enter your Products or service Name').required('Products or service name is required'),
        category: yup.string('Enter your category').required('category is required'),
        description: yup.string('Enter your description').required('description is required')
    });

const DeleteData = async () => {
        await deleteItem(params.id).then((res) => {
                        navigate(`../services`, true);
                })
                .catch((err) => {
                    console.log(err);
                });
    };


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
                    setSellAll(res.data.data.sellAll);
                })
                .catch((err) => {
                    console.log(err);
                });

            await getAllItemCategoryServices()
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
        <Permission name="servicesView">
            <FormBox>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '15px' }}>
                    Services Details
                </Typography>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        name: name,
                        category: categoryId,
                        description: description,
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
                            itemsType: 'Service',
                            sellAll: values.sellAll,
                            buyThis: values.buyThis,
                            businessId: 'uio7',
                            userId: 'koik98'
                        });
                        navigate(`../services`, true);
                    }}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Services Name"
                                variant="outlined"
                                margin="normal"
                                name="name"
                                type="text"
                                value={values.name}
                                error={!!errors.name}
                                helperText={touched.name ? errors.name : ''}
                                onChange={handleChange}
                                disabled={inputDisable}
                            />

                            <FormControl fullWidth margin="normal" error={!!errors.category}>
                                <InputLabel>Category</InputLabel>
                                <Select
                                    label="Category"
                                    name="category"
                                    value={values.category}
                                    onChange={handleChange}
                                    disabled={inputDisable}
                                >
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
                                disabled={inputDisable}
                            />

                            <Box sx={{ textAlign: 'center' }}>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="sellAll"
                                                checked={values.sellAll}
                                                onChange={handleChange}
                                                disabled={inputDisable}
                                            />
                                        }
                                        label="Sell This"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="buyThis"
                                                checked={values.buyThis}
                                                onChange={handleChange}
                                                disabled={inputDisable}
                                            />
                                        }
                                        label="Buy This"
                                    />
                                </FormGroup>
                            </Box>
                                <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                            <Permission name="servicesEdit" type="button">                                    
                                    <Link to={`../services`}>
                                        <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                            cancel
                                        </Button>
                                    </Link>
                                    </Permission>                                    
                                    <Permission name="servicesDelete" type="button">
                                    <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px',background:'#c4141b','&:hover':{background:'red'}, color:'#fff' }} onClick={DeleteData} >
                                        Delete
                                    </Button>
                                    </Permission>
                                    <Permission name="servicesEdit" type="button">
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

export default OneService;
