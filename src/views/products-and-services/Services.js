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
import { getAllServices } from '../../services/api';
import Permission from 'component/permission';

// ==============================|| SERVICE PAGE ||============================== //

const Services = () => {
    const theme = useTheme();
    const [services, setServices] = useState([]);

    // fetch data
    async function fetchData() {
        await getAllServices()
            .then((res) => {
                console.log(res.data.data);
                setServices(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <Permission name="servicesView">
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px', margin: 'auto' }}>
                        Services
                    </Typography>
                </Grid>
                <Permission name="servicesAdd" type="button">
                    <Grid item xs={12} md={12}>
                        <Box sx={{ textAlign: 'right', marginTop: '20px' }}>
                            <Link to={`add`}>
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} startIcon={<IconPlus />}>
                                    Add Services
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Permission>
                {services.map((service, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Link to={service._id}>
                            <SubCard>
                                <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                                    {service.name}
                                </Typography>
                                <Typography variant="body2">{service.itemsType}</Typography>
                            </SubCard>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Permission>
    );
};

export default Services;
