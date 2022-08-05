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
import { getAllCustomers } from '../../services/api';
import Permission from 'component/permission';

// ==============================|| BUSINESS PAGE ||============================== //

const Customers = () => {
    const theme = useTheme();
    const [customers, setCustomers] = useState([]);

    // test for
    async function fetchData() {
        await getAllCustomers()
            .then((res) => {
                console.log(res.data.data);
                setCustomers(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []); // Or [] if effect doesn't need props or state

    return (
        <Permission name="partnersCustomersView">
            <Grid container spacing={2}>
                <Permission name="partnersCustomersAdd" type="button">
                    <Grid item xs={12} md={12}>
                        <Box sx={{ textAlign: 'right', marginTop: '20px' }}>
                            <Link to={`add`}>
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} startIcon={<IconPlus />}>
                                    Add Customers
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
                {customers.map((customer, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Link to={`${customer._id}`}>
                            <SubCard>
                                <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                                    {customer.businessName}
                                </Typography>
                                <Typography variant="body2">{customer.city}</Typography>
                            </SubCard>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Permission>
    );
};

export default Customers;
