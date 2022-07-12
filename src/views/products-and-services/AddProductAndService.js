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
    FormGroup
} from '@mui/material';
import { createBusiness } from '../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';

// ==============================|| SAMPLE PAGE ||============================== //

const AddProductAndService = () => {
    const theme = useTheme();

    const [productAndServiceName, setProductAndServiceName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

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
        <>
            <FormBox>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '15px' }}>
                    Products & Services
                </Typography>

                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Products & Services Name"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setProductAndServiceName(e.target.value)}
                />

                <Box sx={{ textAlign: 'center' }}>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox />} label="Product" />
                        <FormControlLabel control={<Checkbox />} label="Service" />
                    </FormGroup>
                </Box>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Category">
                        <MenuItem value="transport">Transport</MenuItem>
                        <MenuItem value="budget">Budget</MenuItem>
                        <MenuItem value="packing">Packing</MenuItem>
                    </Select>
                </FormControl>
                <TextField fullWidth margin="normal" label="Description" multiline rows={4} />
                <Box sx={{ textAlign: 'center' }}>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox />} label="Sell this" />
                        <FormControlLabel control={<Checkbox />} label="Buy this" />
                    </FormGroup>
                </Box>
                <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                    <Button variant="outlined" sx={{ borderRadius: '6px' }} onClick={PostData}>
                        cancel
                    </Button>
                    <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }}>
                        Submit
                    </Button>
                </Box>
            </FormBox>
        </>
    );
};

export default AddProductAndService;
