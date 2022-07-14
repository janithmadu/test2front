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

const SamplePage = () => {
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
                        <Box sx={{ textAlign: 'right' }}>
                                            <Link to={`../details`}>

                            <IconButton
                                sx={{
                                    backgroundColor: theme.palette.primary.light,
                                    '&:hover': { backgroundColor: '#fff' },
                                    textAlign: 'right'
                                }}
                            >
                                <IconSettings stroke={1.5} size="1.5rem" color={theme.palette.primary.main} />
                            </IconButton>
                            </Link>
                        </Box>
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
                        justifyContent: 'flex-end',
                        alignContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Link to={`../add-location`}>
                        <Button variant="contained" sx={{ borderRadius: '6px' }} startIcon={<IconPlus />}>
                            Add Location
                        </Button>
                    </Link>

                    <Link to={`../add-unit`}>
                        <Button variant="contained" sx={{ marginLeft: '10px', borderRadius: '6px' }} startIcon={<IconPlus />}>
                            Add Business units
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard title="Colombo Branch">
                        <Typography variant="body2">Contact Name - Avishka Devinda</Typography>
                        <Typography variant="body2">Business Address - 23/5 road, kandy, srilanka</Typography>
                        <Typography variant="body2">Email - test@mail.com</Typography>
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard title="Kandy Branch">
                        <Typography variant="body2">Contact Name - Avishka Devinda</Typography>
                        <Typography variant="body2">Business Address - 23/5 road, kandy, srilanka</Typography>
                        <Typography variant="body2">Email - test@mail.com</Typography>
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard title="Galle Branch">
                        <Typography variant="body2">Contact Name - Avishka Devinda</Typography>
                        <Typography variant="body2">Business Address - 23/5 road, kandy, srilanka</Typography>
                        <Typography variant="body2">Email - test@mail.com</Typography>
                    </SubCard>
                </Grid>
            </Grid>
        </>
    );
};

export default SamplePage;
