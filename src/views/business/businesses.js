// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import { useTheme } from '@mui/material/styles';

import { Grid, Box, IconButton, Button } from '@mui/material';
import { IconSettings, IconPlus } from '@tabler/icons';
import { Link } from 'react-router-dom';

// ==============================|| BUSINESS PAGE ||============================== //

const Businesses = () => {
    const theme = useTheme();

    return (
        <>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                        marginTop: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography variant="h3"></Typography>
                    <Link to={`add`}>
                        <Button variant="contained" sx={{ borderRadius: '6px' }} startIcon={<IconPlus />}>
                            Add Business
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link to={`4364656`}>
                        <SubCard title=" Test1 Technology">
                            <Typography variant="body2">Contact Name - Avishka Devinda</Typography>
                            <Typography variant="body2">Business Address - 23/5 road, kandy, srilanka</Typography>
                            <Typography variant="body2">Email - test@mail.com</Typography>
                        </SubCard>
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link to={`34456`}>
                        <SubCard title="Test2 Technology">
                            <Typography variant="body2">Contact Name - Avishka Devinda</Typography>
                            <Typography variant="body2">Business Address - 23/5 road, kandy, srilanka</Typography>
                            <Typography variant="body2">Email - test@mail.com</Typography>
                        </SubCard>
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link to={`3543456`}>
                        <SubCard title="Test3 Technology">
                            <Typography variant="body2">Contact Name - Avishka Devinda</Typography>
                            <Typography variant="body2">Business Address - 23/5 road, kandy, srilanka</Typography>
                            <Typography variant="body2">Email - test@mail.com</Typography>
                        </SubCard>
                    </Link>
                </Grid>
            </Grid>
        </>
    );
};

export default Businesses;
