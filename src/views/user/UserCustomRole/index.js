// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import { useTheme } from '@mui/material/styles';

import { Grid, Box, IconButton, Button } from '@mui/material';
import { IconSettings, IconPlus } from '@tabler/icons';
import { Link } from 'react-router-dom';

// ==============================|| USERS PAGE ||============================== //

const UserCustomRole = () => {
    const theme = useTheme();

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Box
                        sx={{
                            background: theme.palette.primary.main,
                            padding: '30px',
                            borderRadius: '12px'
                        }}
                    >
                        <Typography variant="h3" color="white">
                            z tech
                        </Typography>
                        <Typography variant="body2" color="white">
                            Contact Name - Avishka Devinda
                        </Typography>
                        <Typography variant="body2" color="white">
                            Business Address - 23/5 road, kandy, srilanka
                        </Typography>
                        <Typography variant="body2" color="white">
                            Email - test@mail.com
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Box sx={{ textAlign: 'right', marginTop: '20px' }}>
                        <Link to={`add`}>
                            <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }}>
                                Add User
                            </Button>
                        </Link>
                    </Box>
                </Grid>

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
                ></Grid>
                <Grid item xs={12} md={4}>
                                        <Link to={`566`}>

                    <SubCard>
                        <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                            Haed Of Department
                        </Typography>
                    </SubCard>
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard>
                        <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                            Supervisor
                        </Typography>

                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard>
                        <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                            Partner
                        </Typography>

                    </SubCard>
                </Grid>
            </Grid>
        </>
    );
};

export default UserCustomRole;
