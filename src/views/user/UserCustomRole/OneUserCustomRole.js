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

const OneUserCustomRole = () => {
    const theme = useTheme();

    const [customRoleName, setCustomRoleName] = useState('');

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
                User Custom Roles
            </Typography>

            <TextField
                fullWidth
                id="fullWidth"
                label="Role name"
                variant="outlined"
                margin="normal"
                value="Head Of Department"
                onChange={(e) => customRoleName(e.target.value)}
            />
       <Typography variant="h4" sx={{ textAlign: 'left', marginBottom: '10px', marginTop:'10px' }}>
                Administration
            </Typography>

            <Box sx={{ 
                textAlign: 'center', 
                display:'flex',
                alignItems:{xs: 'flex-start', md: 'center'},
                justifyContent:'space-between',
                alignContent:'center',
                flexDirection:{ xs: 'column', md: 'row' },
             }}>
               <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Business
            </Typography>

                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                </FormGroup>
            </Box>

     <Box sx={{          textAlign: 'center', 
                display:'flex',
                alignItems:{xs: 'flex-start', md: 'center'},
                justifyContent:'space-between',
                alignContent:'center',
                flexDirection:{ xs: 'column', md: 'row' }}}>
               <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Locations
            </Typography>

                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                </FormGroup>
            </Box>  

               <Box sx={{          textAlign: 'center', 
                display:'flex',
                alignItems:{xs: 'flex-start', md: 'center'},
                justifyContent:'space-between',
                alignContent:'center',
                flexDirection:{ xs: 'column', md: 'row' }}}>
               <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Units
            </Typography>

                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                </FormGroup>
            </Box>

   <Box sx={{          textAlign: 'center', 
                display:'flex',
                alignItems:{xs: 'flex-start', md: 'center'},
                justifyContent:'space-between',
                alignContent:'center',
                flexDirection:{ xs: 'column', md: 'row' }}}>
               <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Users
            </Typography>

                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                </FormGroup>
            </Box>

   <Box sx={{          textAlign: 'center', 
                display:'flex',
                alignItems:{xs: 'flex-start', md: 'center'},
                justifyContent:'space-between',
                alignContent:'center',
                flexDirection:{ xs: 'column', md: 'row' }}}>
               <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Roles
            </Typography>

                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                </FormGroup>
            </Box>

 <Typography variant="h4" sx={{ textAlign: 'left', marginBottom: '10px', marginTop:'10px' }}>
                Products | Services
            </Typography>

            <Box sx={{          textAlign: 'center', 
                display:'flex',
                alignItems:{xs: 'flex-start', md: 'center'},
                justifyContent:'space-between',
                alignContent:'center',
                flexDirection:{ xs: 'column', md: 'row' }}}>
               <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Products
            </Typography>

                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                </FormGroup>
            </Box>

     <Box sx={{          textAlign: 'center', 
                display:'flex',
                alignItems:{xs: 'flex-start', md: 'center'},
                justifyContent:'space-between',
                alignContent:'center',
                flexDirection:{ xs: 'column', md: 'row' }}}>
               <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Services
            </Typography>

                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                </FormGroup>
            </Box>  

               <Box sx={{          textAlign: 'center', 
                display:'flex',
                alignItems:{xs: 'flex-start', md: 'center'},
                justifyContent:'space-between',
                alignContent:'center',
                flexDirection:{ xs: 'column', md: 'row' }}}>
               <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Category
            </Typography>

                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                </FormGroup>
            </Box>

   <Box sx={{          textAlign: 'center', 
                display:'flex',
                alignItems:{xs: 'flex-start', md: 'center'},
                justifyContent:'space-between',
                alignContent:'center',
                flexDirection:{ xs: 'column', md: 'row' }}}>
               <Typography variant="body1" sx={{ textAlign: 'center' }}>
                UOM
            </Typography>

                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                </FormGroup>
            </Box>



 <Typography variant="h4" sx={{ textAlign: 'left', marginBottom: '10px', marginTop:'10px' }}>
                Partners
            </Typography>

            <Box sx={{          textAlign: 'center', 
                display:'flex',
                alignItems:{xs: 'flex-start', md: 'center'},
                justifyContent:'space-between',
                alignContent:'center',
                flexDirection:{ xs: 'column', md: 'row' }}}>
               <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Customer
            </Typography>

                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                </FormGroup>
            </Box>

     <Box sx={{          textAlign: 'center', 
                display:'flex',
                alignItems:{xs: 'flex-start', md: 'center'},
                justifyContent:'space-between',
                alignContent:'center',
                flexDirection:{ xs: 'column', md: 'row' }}}>
               <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Vendors
            </Typography>

                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                </FormGroup>
            </Box>  

               <Box sx={{          textAlign: 'center', 
                display:'flex',
                alignItems:{xs: 'flex-start', md: 'center'},
                justifyContent:'space-between',
                alignContent:'center',
                flexDirection:{ xs: 'column', md: 'row' }}}>
               <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Other
            </Typography>

                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                </FormGroup>
            </Box>


 <Typography variant="h4" sx={{ textAlign: 'left', marginBottom: '10px', marginTop:'10px' }}>
                Documents
            </Typography>

            <Box sx={{          textAlign: 'center', 
                display:'flex',
                alignItems:{xs: 'flex-start', md: 'center'},
                justifyContent:'space-between',
                alignContent:'center',
                flexDirection:{ xs: 'column', md: 'row' }}}>
               <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Category
            </Typography>

                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                </FormGroup>
            </Box>

     <Box sx={{          textAlign: 'center', 
                display:'flex',
                alignItems:{xs: 'flex-start', md: 'center'},
                justifyContent:'space-between',
                alignContent:'center',
                flexDirection:{ xs: 'column', md: 'row' }}}>
               <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Collections
            </Typography>

                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                </FormGroup>
            </Box>  

               <Box sx={{          textAlign: 'center', 
                display:'flex',
                alignItems:{xs: 'flex-start', md: 'center'},
                justifyContent:'space-between',
                alignContent:'center',
                flexDirection:{ xs: 'column', md: 'row' }}}>
               <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Documents
            </Typography>

                <FormGroup row>
                    <FormControlLabel control={<Checkbox />} label="Add" />
                    <FormControlLabel control={<Checkbox />} label="View" />
                    <FormControlLabel control={<Checkbox />} label="Edit" />
                    <FormControlLabel control={<Checkbox />} label="Print" />
                    <FormControlLabel control={<Checkbox />} label="Approve" />
                </FormGroup>
            </Box>

            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                <Button variant="outlined" sx={{ borderRadius: '6px' }} onClick={PostData}>
                    cancel
                </Button>
                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }}>
                    add
                </Button>
            </Box>
        </FormBox>
    );
};

export default OneUserCustomRole;
