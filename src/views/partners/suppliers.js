// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import { useTheme } from '@mui/material/styles';

import { Grid, Box, IconButton, Button } from '@mui/material';
import { IconSettings, IconPlus } from '@tabler/icons';

// ==============================|| BUSINESS PAGE ||============================== //

const Suppliers = () => {
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
                    <SubCard>
                        <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                            Damro
                        </Typography>
                        <Typography variant="body2">Colombo</Typography>
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard>
                        <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                            Keels
                        </Typography>

                        <Typography variant="body2">Kandy</Typography>
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard>
                        <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                            Singers
                        </Typography>

                        <Typography variant="body2">Galle</Typography>
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard>
                        <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                            Abans
                        </Typography>

                        <Typography variant="body2">Nugegoda</Typography>
                    </SubCard>
                </Grid>
            </Grid>
        </>
    );
};

export default Suppliers;
