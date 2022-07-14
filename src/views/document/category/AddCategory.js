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

// ==============================|| ADD DOCUMENT CATEGORY PAGE ||============================== //

const AddCategory = () => {
    const theme = useTheme();

    const [mainCategoryName, setMainCategoryName] = useState('');
    const [mainCategory, setCainCategory] = useState('');
    const [subCategoryName, setSubCategoryName] = useState('');
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
                Add Main Category
            </Typography>

            <Box sx={{ textAlign: 'center' }}>
                <FormControl sx={{ marginTop: '20px' }}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="main"
                        onChange={(e) => setCategoryType(e.target.value)}
                    >
                        <FormControlLabel value="main" control={<Radio />} label="Main" />
                        <FormControlLabel value="sub" control={<Radio />} label="Sub" />
                    </RadioGroup>
                </FormControl>
            </Box>

            {(() => {
                switch (categoryType) {
                    case 'main':
                        return (
                            <TextField
                                fullWidth
                                id="fullWidth"
                                label="Main Category Name"
                                variant="outlined"
                                margin="normal"
                                onChange={(e) => setMainCategoryName(e.target.value)}
                            />
                        );
                    case 'sub':
                        return (
                            <>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel id="demo-simple-select-label">Main Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Business Unit"
                                        value={mainCategory}
                                        onChange={(e) => setCainCategory(e.target.value)}
                                    >
                                        <MenuItem value="transport">Transport</MenuItem>
                                        <MenuItem value="payble">Payble</MenuItem>
                                        <MenuItem value="Finance">Finance</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField
                                    fullWidth
                                    id="fullWidth"
                                    label="Sub Category Name"
                                    variant="outlined"
                                    margin="normal"
                                    onChange={(e) => setSubCategoryName(e.target.value)}
                                />
                            </>
                        );

                    default:
                        return <></>;
                }
            })()}

            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                <Button variant="outlined" sx={{ borderRadius: '6px' }} onClick={PostData}>
                    cancel
                </Button>
                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }}>
                    Save
                </Button>
            </Box>
        </FormBox>
    );
};

export default AddCategory;
