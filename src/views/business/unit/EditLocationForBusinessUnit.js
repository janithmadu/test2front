import { useState, useEffect } from 'react';
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
import { editOneBusinessForUnit, getOneBusinessForUnit } from '../../../services/api';
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import Permission from '../../../component/permission';
import usePermission from 'hooks/usePermission';

// ==============================|| EDIT BUSINESS UNIT PAGE ||============================== //

const EditLocationForBusinessUnit = () => {
    const theme = useTheme();
    const params = useParams();
    const navigate = useNavigate();
    const inputDisable = usePermission('businessEdit');

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [locationId, setLocationId] = useState('');

    const [id, setID] = useState('');

    const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

    const validationSchema = yup.object({
        name: yup.string('').required('Business Unit Name is required'),
        type: yup.string('').required('Business Unit Name is required')
    });

    const Submit = async () => {
        setValidateAfterSubmit(true);
    };

    // get business unit
    async function fetchData() {
        await getOneBusinessForUnit(params.id)
            .then((res) => {
                console.log(res.data.data);
                setName(res.data.data.name);
                setType(res.data.data.type);
                setLocationId(res.data.data.locationId);
                setID(res.data.data._id);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []); // Or [] if effect doesn't need props or state

    return (
        <Permission name="businessView">
            <Box
                sx={{
                    padding: { xs: '10px', md: '0px 130px 0px 130px' },
                    backgroundColor: '#fff',
                    margin: 'auto'
                }}
            >
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '15px' }}>
                    Business Unit details
                </Typography>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        name: name,
                        type: type,
                        submit: null
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        console.log(values);
                        await editOneBusinessForUnit(params.id, {
                            name: values.name,
                            type: values.type,
                            headOffice: false,
                            headOfficeId: '',
                            businessId: params.id
                        });
                        navigate(`../location/${locationId}`, true);
                    }}
                    validateOnChange={validateAfterSubmit}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <TextField fullWidth id="fullWidth" label="ID" variant="outlined" margin="normal" value={id} disabled />
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Business Unit Name"
                                variant="outlined"
                                margin="normal"
                                name="name"
                                value={values.name}
                                error={!!errors.name}
                                helperText={touched.name ? errors.name : ''}
                                onChange={handleChange}
                                disabled={inputDisable}
                            />
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Business Unit Type"
                                variant="outlined"
                                margin="normal"
                                name="type"
                                value={values.type}
                                error={!!errors.type}
                                helperText={touched.type ? errors.type : ''}
                                onChange={handleChange}
                                disabled={inputDisable}
                            />
                            <Permission name="businessEdit" type="button">
                                <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                    <Link to={`../location/${locationId}`}>
                                        <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                            cancel
                                        </Button>
                                    </Link>

                                    <Button
                                        variant="contained"
                                        sx={{ borderRadius: '6px', marginLeft: '15px' }}
                                        type="submit"
                                        onClick={Submit}
                                    >
                                        Save
                                    </Button>
                                </Box>
                            </Permission>
                        </form>
                    )}
                </Formik>
            </Box>
        </Permission>
    );
};

export default EditLocationForBusinessUnit;
