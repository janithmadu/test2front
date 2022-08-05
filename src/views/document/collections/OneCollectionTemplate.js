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
    IconButton
} from '@mui/material';
import { createBusiness } from '../../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';
import usePermission from 'hooks/usePermission';
import { IconSquareX, IconX, IconPlus, IconCloudUpload, IconTrash } from '@tabler/icons';

// ==============================|| ADD DOCUMNET COLLECTION PAGE ||============================== //

const OneCollectionTemplate = () => {
    const theme = useTheme();
    const inputDisable = usePermission('DocumentCollectionAdd');
    console.log(inputDisable);
    const [collectionName, setCollectionName] = useState('');
    const [inputFields, setInputFields] = useState([
        {
            mainCategory: '',
            subCategory: '',
            document: ''
        },
        {
            mainCategory: '',
            subCategory: '',
            document: ''
        }
    ]);

    const PostData = async () => {
        console.log(inputFields);
        // await createBusiness({
        //     name: businessName,
        //     address: businessAddress,
        //     contactName: contactName,
        //     email: email,
        //     userId: '2133',
        //     author: 'avishka dev'
        // });
    };

    const addInputField = () => {
        setInputFields([
            ...inputFields,
            {
                mainCategory: '',
                subCategory: '',
                document: ''
            }
        ]);
        console.log(...inputFields, {
            mainCategory: '',
            subCategory: '',
            document: ''
        });
    };

    const removeInputFields = (index) => {
        const rows = [...inputFields];
        rows.splice(index, 1);
        console.log(rows);
        setInputFields(rows);
    };
    const handleChange = (index, evnt) => {
        const { name, value } = evnt.target;
        const list = [...inputFields];
        list[index][name] = value;
        console.log(list);
        setInputFields(list);
    };

    return (
        <Box
            sx={{
                padding: '10px',
                backgroundColor: '#fff',
                margin: 'auto'
            }}
        >
            {' '}
            <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                Add Collection Template
            </Typography>
            <TextField
                fullWidth
                id="fullWidth"
                label="Collection Name"
                variant="outlined"
                margin="normal"
                onChange={(e) => setCollectionName(e.target.value)}
            />
            <div className="col-sm-8">
                {inputFields.map((data, index) => {
                    const { mainCategory, subCategory, document } = data;
                    return (
                        <Grid container spacing={2} key={index}>
                            <Grid item xs={12} md={3.5}>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel id="demo-simple-select-label">Main Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Business Unit"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={mainCategory}
                                        name="mainCategory"
                                    >
                                        <MenuItem value="employee registions branch">Employee Registions</MenuItem>
                                        <MenuItem value="customer paymentr">Customer Payment</MenuItem>
                                        <MenuItem value="annual budgete">Annual Budget</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Business Unit"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={subCategory}
                                        name="subCategory"
                                    >
                                        <MenuItem value="employee registions branch">Employee Registions</MenuItem>
                                        <MenuItem value="customer paymentr">Customer Payment</MenuItem>
                                        <MenuItem value="annual budgete">Annual Budget</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel id="demo-simple-select-label">Document</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Business Unit"
                                        onChange={(evnt) => handleChange(index, evnt)}
                                        value={document}
                                        name="document"
                                    >
                                        <MenuItem value="employee registions branch">Employee Registions</MenuItem>
                                        <MenuItem value="customer paymentr">Customer Payment</MenuItem>
                                        <MenuItem value="annual budgete">Annual Budget</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={1} sx={{ margin: 'auto' }}>
                                <IconButton onClick={removeInputFields} sx={{ marginTop: '10px' }}>
                                    <IconCloudUpload size={24} color="#212121" />
                                </IconButton>
                            </Grid>
                            <Grid item xs={12} md={1} sx={{ margin: 'auto' }}>
                                <IconButton onClick={removeInputFields} sx={{ marginTop: '10px' }}>
                                    <IconTrash size={24} color="red" />
                                </IconButton>
                            </Grid>
                        </Grid>
                    );
                })}
            </div>
            <Button onClick={addInputField} variant="contained">
                add form
            </Button>
            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                    cancel
                </Button>
                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '10px' }} onClick={PostData}>
                    add
                </Button>
            </Box>
        </Box>
    );
};

export default OneCollectionTemplate;
