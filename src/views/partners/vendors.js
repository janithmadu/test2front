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
import { getAllVendors } from '../../services/api';
import Permission from 'component/permission';

// ==============================|| BUSINESS PAGE ||============================== //

const Vendors = () => {
    const theme = useTheme();
    const [vendors, setVendors] = useState([]);

    // test for
    async function fetchData() {
        await getAllVendors()
            .then((res) => {
                console.log(res.data.data);
                setVendors(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []); // Or [] if effect doesn't need props or state

    return (
        <Permission name="partnersVendorsView">
            <Grid container spacing={2}>
                <Permission name="partnersVendorsAdd" type="button">
                    <Grid item xs={12} md={12}>
                        <Box sx={{ textAlign: 'right', marginTop: '20px' }}>
                            <Link to={`add`}>
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} startIcon={<IconPlus />}>
                                    Add Vendors
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
                {vendors.map((vendor, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Link to={`${vendor._id}`}>
                            <SubCard>
                                <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                                    {vendor.businessName}
                                </Typography>
                                <Typography variant="body2">{vendor.city}</Typography>
                            </SubCard>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Permission>
    );
};

export default Vendors;
