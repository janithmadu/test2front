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
import { getAllBusiness } from '../../services/api';

import Permission from 'component/permission';

// ==============================|| BUSINESS PAGE ||============================== //

const Businesses = () => {
    const theme = useTheme();

    const [businesses, setBusinesses] = useState([]);

    // get all businesses
    async function fetchData() {
        await getAllBusiness()
            .then((res) => {
                console.log(res.data.data);
                setBusinesses(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []); // Or [] if effect doesn't need props or state

    return (
        <Permission name="businessView">
            <Grid container spacing={2}>
                <Permission name="businessAdd" type="button">
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
                        <Link to={`add`}>
                            <Button variant="contained" sx={{ borderRadius: '6px' }} startIcon={<IconPlus />}>
                                Add Business
                            </Button>
                        </Link>
                    </Grid>
                </Permission>
                {businesses.map((business, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Link to={business._id}>
                            <SubCard title={business.businessName}>
                                <Typography variant="body2">{business.businessEmail}</Typography>
                                <Typography variant="body2">{business.businessCity}</Typography>
                                <Typography variant="body2">{business.businessWeb}</Typography>
                            </SubCard>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Permission>
    );
};

export default Businesses;
