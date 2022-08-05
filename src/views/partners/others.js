//react
import { useEffect, useState } from 'react';

// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import { useTheme } from '@mui/material/styles';

import { Grid, Box, IconButton, Button } from '@mui/material';
import { IconSettings, IconPlus } from '@tabler/icons';
import { Link } from 'react-router-dom';
import { getAllOthers } from '../../services/api';
import Permission from 'component/permission';

// ==============================|| BUSINESS PAGE ||============================== //

const Others = () => {
    const theme = useTheme();
    const [others, setOthers] = useState([]);

    // test for
    async function fetchData() {
        await getAllOthers()
            .then((res) => {
                console.log(res.data.data);
                setOthers(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []); // Or [] if effect doesn't need props or state

    return (
        <Permission name="partnersOtherView">
            <Grid container spacing={2}>
                <Permission name="partnersOtherAdd" type="button">
                    <Grid item xs={12} md={12}>
                        <Box sx={{ textAlign: 'right', marginTop: '20px' }}>
                            <Link to={`add`}>
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} startIcon={<IconPlus />}>
                                    Add Others
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Permission>
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
                {others.map((other, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Link to={`${other._id}`}>
                            <SubCard>
                                <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                                    {other.businessName}
                                </Typography>
                                <Typography variant="body2">{other.city}</Typography>
                            </SubCard>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Permission>
    );
};

export default Others;
