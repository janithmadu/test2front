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
    Select
} from '@mui/material';
import { getOneItemUOM, editItemUOM } from '../../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';
import { Formik } from 'formik';

import * as yup from 'yup';
import Permission from 'component/permission';
import usePermission from 'hooks/usePermission';

// ==============================|| SAMPLE PAGE ||============================== //

const OneUOM = () => {
    const theme = useTheme();
    const params = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const inputDisable = usePermission('itemsUomEdit');

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

    useEffect(() => {
        async function fetchData() {
            await getOneItemUOM(params.id)
                .then((res) => {
                    console.log(res.data.data);
                    setName(res.data.data.name);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        fetchData();
    }, []);

    return (
        <Permission name="itemsUomView">
            <FormBox>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '10px' }}>
                    UOM Details
                </Typography>
                <Formik
                    initialValues={{
                        name: name,
                        submit: null
                    }}
                    enableReinitialize={true}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        console.log(values);
                        await editItemUOM(params.id, {
                            name: values.name
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
                                value={values.name}
                                error={!!errors.name}
                                helperText={touched.name ? errors.name : ''}
                                onChange={handleChange}
                                disabled={inputDisable}
                            />
                            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                <Permission name="itemsUomEdit" type="button">
                                    <Link to={`../uom`}>
                                        <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                            cancel
                                        </Button>
                                    </Link>
                                </Permission>
                                <Permission name="itemsUomEdit" type="button">
                                    <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} type="submit">
                                        Save
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

export default OneUOM;
