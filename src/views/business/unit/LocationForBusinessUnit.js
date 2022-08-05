//react
import { useState, useEffect } from 'react';
// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import { useTheme } from '@mui/material/styles';

import { Grid, Box, IconButton, Button } from '@mui/material';
import { IconSettings, IconPlus } from '@tabler/icons';
import { Link, useParams } from 'react-router-dom';
import { getOneLocation, getLocationForUnits } from 'services/api';

import Permission from 'component/permission';

// ==============================|| BUSINESS PAGE ||============================== //

const LocationForBusinessUnit = () => {
    const theme = useTheme();
    const params = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [web, setWeb] = useState('');
    const [locationId, setLocationId] = useState('');
    const [units, setUnits] = useState([]);

    // get all businesses
    async function fetchData() {
        await getOneLocation(params.id)
            .then((res) => {
                console.log(res.data.data);
                setName(res.data.data.name);
                setEmail(res.data.data.email);
                setCity(res.data.data.city);
                setWeb(res.data.data.web);
                setLocationId(res.data.data._id);
            })
            .catch((err) => {
                console.log(err);
            });

        await getLocationForUnits(params.id)
            .then((res) => {
                console.log(res.data.data);
                setUnits(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []); // Or [] if effect doesn't need props or state
    return (
        <>
            <Grid container spacing={2}>
                {name && (
                    <Grid item xs={12} md={12}>
                        <Link to={`../location/details/${locationId}`}>
                            <Box
                                sx={{
                                    background: theme.palette.primary.main,
                                    padding: '30px',
                                    borderRadius: '12px'
                                }}
                            >
                                <Typography variant="h3" color="white">
                                    {name}
                                </Typography>
                                <Typography variant="body2" color="white">
                                    {city}
                                </Typography>
                                <Typography variant="body2" color="white">
                                    {web}
                                </Typography>
                                <Typography variant="body2" color="white">
                                    {email}
                                </Typography>
                            </Box>
                        </Link>
                    </Grid>
                )}
                <Permission name="businessAdd" type="button">
                    {name && (
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
                            <Link to={`../location/unit/add/${params.id}`}>
                                <Button variant="contained" sx={{ marginLeft: '10px', borderRadius: '6px' }} startIcon={<IconPlus />}>
                                    Add Business units
                                </Button>
                            </Link>
                        </Grid>
                    )}
                </Permission>
                {units.map((unit, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Link to={`../location/unit/edit/${unit._id}`}>
                            <SubCard title={unit.name}>
                                <Typography variant="body2">{unit.type}</Typography>
                            </SubCard>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default LocationForBusinessUnit;
