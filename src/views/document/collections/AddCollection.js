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
import { createBusiness } from '../../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';

// ==============================|| ADD DOCUMNET COLLECTION PAGE ||============================== //

const AddCollection = () => {
    const theme = useTheme();

    const [collectionName, setCollectionName] = useState('');
    const [mainCategory, setMainCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [selectForms, setSelectForms] = useState('');
    const [categoryType, setCategoryType] = useState('main');

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

    return (
        <FormBox>
            <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                Add Collection
            </Typography>

            <TextField
                fullWidth
                id="fullWidth"
                label="Collection Name"
                variant="outlined"
                margin="normal"
                onChange={(e) => setCollectionName(e.target.value)}
            />

            <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Main Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Business Unit"
                    value={mainCategory}
                    onChange={(e) => setMainCategory(e.target.value)}
                >
                    <MenuItem value="employee registions branch">Employee Registions</MenuItem>
                    <MenuItem value="customer payment">Customer Payment</MenuItem>
                    <MenuItem value="annual budget">Annual Budget</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Business Unit"
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                >
                    <MenuItem value="employee registions branch">Employee Registions</MenuItem>
                    <MenuItem value="customer paymentr">Customer Payment</MenuItem>
                    <MenuItem value="annual budgete">Annual Budget</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Select Form</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Business Unit"
                    value={selectForms}
                    onChange={(e) => setSelectForms(e.target.value)}
                >
                    <MenuItem value="kandy branch">Transport Request</MenuItem>
                    <MenuItem value="hr">Acount Payble</MenuItem>
                    <MenuItem value="Finance">Gate Pass</MenuItem>
                </Select>
            </FormControl>

            <Button variant="contained" sx={{ borderRadius: '6px', marginTop: '10px', backgroundColor: theme.palette.blue.main }}>
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
        </FormBox>
    );
};

export default AddCollection;
