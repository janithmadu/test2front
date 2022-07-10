// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import { useTheme } from '@mui/material/styles';

import { Grid, Box, IconButton, Button } from '@mui/material';
import { IconSettings, IconPlus } from '@tabler/icons';

// ==============================|| BUSINESS PAGE ||============================== //

const Document = () => {
    const theme = useTheme();

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px', margin: 'auto' }}>
                        Documents
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                    <SubCard>
                        <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                            Transport Request
                        </Typography>
                        <Typography variant="body2">Administration</Typography>
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard>
                        <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                            Account Payble
                        </Typography>

                        <Typography variant="body2">Finance</Typography>
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard>
                        <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                            Budget Request
                        </Typography>

                        <Typography variant="body2">Finance</Typography>
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SubCard>
                        <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                            Gate Pass
                        </Typography>

                        <Typography variant="body2">secrutiy</Typography>
                    </SubCard>
                </Grid>
            </Grid>
        </>
    );
};

export default Document;