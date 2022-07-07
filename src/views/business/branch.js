// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { Grid } from '@mui/material';

// ==============================|| Branch ||============================== //

const SamplePage = () => (
    <>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <MainCard title="newTech business">
                    <Typography variant="body2">Contact Name - Avishka Devinda</Typography>
                    <Typography variant="body2">Business Address - 23/5 road, kandy, srilanka</Typography>
                    <Typography variant="body2">Email - test@mail.com</Typography>
                </MainCard>
            </Grid>
            <Grid item xs={12} md={4}>
                <MainCard title="newTech business">
                    <Typography variant="body2">Contact Name - Avishka Devinda</Typography>
                    <Typography variant="body2">Business Address - 23/5 road, kandy, srilanka</Typography>
                    <Typography variant="body2">Email - test@mail.com</Typography>
                </MainCard>
            </Grid>
            <Grid item xs={12} md={4}>
                <MainCard title="newTech business">
                    <Typography variant="body2">Contact Name - Avishka Devinda</Typography>
                    <Typography variant="body2">Business Address - 23/5 road, kandy, srilanka</Typography>
                    <Typography variant="body2">Email - test@mail.com</Typography>
                </MainCard>
            </Grid>
        </Grid>
    </>
);

export default SamplePage;
