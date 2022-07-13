// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import { useTheme } from '@mui/material/styles';

import { Grid, Box, IconButton, Button } from '@mui/material';
import { IconSettings, IconPlus } from '@tabler/icons';
import { Link } from 'react-router-dom';

// ==============================|| DOCUMENT CATEGORY PAGE ||============================== //

const Category = () => {
    const theme = useTheme();

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px', margin: 'auto' }}>
                        Document Category
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Box sx={{ textAlign: 'right', marginTop: '20px' }}>
                        <Link to={`add`}>
                            <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }}>
                                Add Category
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
                    <SubCard>
                        <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                            Transport
                        </Typography>
                        <Typography variant="body2">Administration</Typography>
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard>
                        <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                            Payble
                        </Typography>

                        <Typography variant="body2">Finance</Typography>
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard>
                        <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                            Overtime
                        </Typography>

                        <Typography variant="body2">HR</Typography>
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard>
                        <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                            Transfers
                        </Typography>

                        <Typography variant="body2">security</Typography>
                    </SubCard>
                </Grid>
            </Grid>
        </>
    );
};

export default Category;
