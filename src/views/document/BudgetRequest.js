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
import { createBusiness } from '../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';

// ==============================|| BUDGET REQUEST PAGE ||============================== //

const BudgetRequest = () => {
    const theme = useTheme();

    const [collectionName, setCollectionName] = useState('');
    const [mainCategory, setMainCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [selectForms, setSelectForms] = useState('');
    const [categoryType, setCategoryType] = useState('main');
    const [inputFields, setInputFields] = useState([
        {
            year: '',
            category: '',
            item: '',
            uom: ''
        }
    ]);

    const PostData = async () => {
        await createBusiness({
            name: businessName,
            address: businessAddress,
            contactName: contactName,
            email: email,
            userId: '2133',
            author: 'avishka dev'
        });
    };

    const addInputField = () => {
        setInputFields([
            ...inputFields,
            {
                year: '',
                category: '',
                item: '',
                uom: ''
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
                padding: { xs: '10px', md: '0px 50px 0px 50px' },
                backgroundColor: '#fff',
                margin: 'auto'
            }}
        >
            <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                Budget Request
            </Typography>

            <Grid container spacing={2} sx={{ marginLeft: '0px' }}>
                <Grid item xs={12} md={3}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="demo-simple-select-label">Year</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Business Unit">
                            <MenuItem value="kandy branch">2020</MenuItem>
                            <MenuItem value="hr">2021</MenuItem>
                            <MenuItem value="Finance">2022</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            {inputFields.map((data, index) => {
                const { year, category, item, uom } = data;
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Business Unit"
                                    onChange={(evnt) => handleChange(index, evnt)}
                                    value={category}
                                    name="category"
                                >
                                    <MenuItem value="kandy branch">Category1</MenuItem>
                                    <MenuItem value="hr">Category2</MenuItem>
                                    <MenuItem value="Finance">Category3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="demo-simple-select-label">Product Or Service</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Business Unit"
                                    onChange={(evnt) => handleChange(index, evnt)}
                                    value={item}
                                    name="item"
                                >
                                    <MenuItem value="kandy branch">Product Or Service 1</MenuItem>
                                    <MenuItem value="hr">Product Or Service 2</MenuItem>
                                    <MenuItem value="Finance">Product Or Service 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="demo-simple-select-label">UOM</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Business Unit"
                                    onChange={(evnt) => handleChange(index, evnt)}
                                    value={uom}
                                    name="uom"
                                >
                                    <MenuItem value="kandy branch">UOM1</MenuItem>
                                    <MenuItem value="hr">UOM2</MenuItem>
                                    <MenuItem value="Finance">UOM3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="demo-simple-select-label">UOM</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Business Unit"
                                    onChange={(evnt) => handleChange(index, evnt)}
                                    value={uom}
                                    name="uom"
                                >
                                    <MenuItem value="kandy branch">UOM1</MenuItem>
                                    <MenuItem value="hr">UOM2</MenuItem>
                                    <MenuItem value="Finance">UOM3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <TextField fullWidth label="Name" variant="outlined" margin="normal" />
                        </Grid>
                        <Grid item xs={12} md={2} sx={{ margin: 'auto' }}>
                            <Typography>Total</Typography>
                        </Grid>
                    </Grid>
                );
            })}
            <Button
                onClick={addInputField}
                variant="contained"
                sx={{ borderRadius: '6px', marginTop: '10px', backgroundColor: theme.palette.blue.main }}
            >
                add form
            </Button>
            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                <Button variant="outlined" sx={{ borderRadius: '6px' }} onClick={PostData}>
                    cancel
                </Button>
                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '10px' }}>
                    add
                </Button>
            </Box>
        </Box>
    );
};

export default BudgetRequest;
