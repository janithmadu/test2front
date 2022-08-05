// material-ui
import { Typography } from '@mui/material';

// project imports

import { useTheme } from '@mui/material/styles';

import { Grid, Box, IconButton, Button } from '@mui/material';
import { IconSettings, IconPlus } from '@tabler/icons';

// ==============================|| DOCUMENT COLLECTION PAGE ||============================== //

const Footer = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                padding: '5px',
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'inherit',
                marginTop: '20px',
                marginBottom: '5px'
            }}
        >
             2022 &copy; Noprint Technologies (Pvt) Ltd. | www.noprint.co | +94 7777 52346 | hi@noprint.co
        </Box>
    );
};

export default Footer;
