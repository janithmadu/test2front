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
import { createBusiness } from '../../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';

// ==============================|| SAMPLE PAGE ||============================== //

const AddProductAndServiceCategory = () => {
    const theme = useTheme();

    const [categoryName, setCategoryName] = useState('');

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
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '10px' }}>
                    Add Products & Service Category
                </Typography>

                <TextField
                    fullWidth
                    id="fullWidth"
                    label="Category Name"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => categoryName(e.target.value)}
                />

                <Box>
                    <FormControl sx={{ marginTop: '20px' }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="ho"
                        >
                            <FormControlLabel value="Product" control={<Radio />} label="Product" />
                            <FormControlLabel value="Service" control={<Radio />} label="Service" />
                        </RadioGroup>
                    </FormControl>
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

export default AddProductAndServiceCategory;
