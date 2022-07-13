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

// ==============================|| SAMPLE PAGE ||============================== //

const BudgetRequest = () => {
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
        <Box     sx={{
                padding: { xs: '10px', md: '0px 50px 0px 50px' },
                backgroundColor: '#fff',
                margin: 'auto'
            }}
            >
            <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px' }}>
               Budget Request
            </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
   <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Business Unit"
                    >
                        <MenuItem value="kandy branch">Category1</MenuItem>
                        <MenuItem value="hr">Category2</MenuItem>
                        <MenuItem value="Finance">Category3</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                     <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label">Product Or Service</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Business Unit"
                    >
                        <MenuItem value="kandy branch">Product Or Service 1</MenuItem>
                        <MenuItem value="hr">Product Or Service 2</MenuItem>
                        <MenuItem value="Finance">Product Or Service 3</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                 <Grid item xs={12} md={3}>
                     <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label">UOM</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Business Unit"
                    >
                        <MenuItem value="kandy branch">UOM1</MenuItem>
                        <MenuItem value="hr">UOM2</MenuItem>
                        <MenuItem value="Finance">UOM3</MenuItem>
                    </Select>
                </FormControl>
                </Grid> <Grid item xs={12} md={3}>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        margin="normal"
                    />
                </Grid>
            </Grid>

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
