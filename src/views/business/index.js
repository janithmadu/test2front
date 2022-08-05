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
import { getOneBusiness, getOneBusinessForLocations, getBusinessForUnits, getOneHeadOffice } from '../../services/api';
import Permission from 'component/permission';

// ==============================|| BUSINESS PAGE ||============================== //

const SamplePage = () => {
    const theme = useTheme();
    const params = useParams();

    const [businessName, setBusinessName] = useState('');
    const [businessEmail, setBusinessEmail] = useState('');
    const [businessCity, setBusinessCity] = useState('');
    const [businessWeb, setBusinessWeb] = useState('');
    const [locations, setLocations] = useState([]);
    const [units, setUnits] = useState([]);

    const [headOfficeCheck, setHeadOfficeCheck] = useState(false);
    const [headOffice, setHeadOffice] = useState(false);
    const [headOfficeEmail, setEeadOfficeEmail] = useState('');
    const [headOfficeCity, setHeadOfficeCity] = useState('');

    // get all businesses
    async function fetchData() {
        await getOneBusiness(params.id)
            .then((res) => {
                console.log(res.data.data);
                setBusinessName(res.data.data.businessName);
                setBusinessEmail(res.data.data.businessEmail);
                setBusinessCity(res.data.data.businessCity);
                setBusinessWeb(res.data.data.businessWeb);
                setHeadOfficeCheck(res.data.data.headOffice);
                setHeadOffice(res.data.data.headOffice);
                setHeadOfficeCity(res.data.data.headOfficeEmail);
                setEeadOfficeEmail(res.data.data.headOfficeCity);
            })
            .catch((err) => {
                console.log(err);
            });

        await getOneBusinessForLocations(params.id)
            .then((res) => {
                console.log(res.data.data);
                setLocations(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
        await getBusinessForUnits(params.id)
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
        <Permission name="businessView">
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    {businessName && (
                        <Link to={`../details/${params.id}`}>
                            <Box
                                sx={{
                                    background: theme.palette.primary.main,
                                    padding: '30px',
                                    borderRadius: '12px'
                                }}
                            >
                                <Typography variant="h3" color="white">
                                    {businessName}
                                </Typography>
                                <Typography variant="body2" color="white">
                                    {businessCity}
                                </Typography>
                                <Typography variant="body2" color="white">
                                    {businessWeb}
                                </Typography>
                                <Typography variant="body2" color="white">
                                    {businessEmail}
                                </Typography>
                            </Box>
                        </Link>
                    )}
                </Grid>
                <Permission name="businessAdd" type="button">
                    {businessName && (
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
                            <Link to={`../location/add/${params.id}`}>
                                <Button variant="contained" sx={{ borderRadius: '6px' }} startIcon={<IconPlus />}>
                                    Add Location
                                </Button>
                            </Link>
                            {!headOffice && (
                                <Link to={`../unit/add/${params.id}`}>
                                    <Button variant="contained" sx={{ marginLeft: '10px', borderRadius: '6px' }} startIcon={<IconPlus />}>
                                        Add Business units
                                    </Button>
                                </Link>
                            )}
                        </Grid>
                    )}
                </Permission>

                {headOffice ? (
                    <Grid item xs={12} md={4}>
                        <Link to={`../head-office/${params.id}`}>
                            <SubCard title="Head Office">
                                <Typography variant="body2">{headOfficeEmail}</Typography>
                                <Typography variant="body2">{headOfficeCity}</Typography>
                            </SubCard>
                        </Link>
                    </Grid>
                ) : (
                    <></>
                )}
                {locations.length > 0 && (
                    <Grid item xs={12} md={12}>
                        <Typography variant="h4" sx={{ textAlign: 'left', marginBottom: '15px' }}>
                            Locations
                        </Typography>
                    </Grid>
                )}
                {locations.map((location, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Link to={`../location/${location._id}`}>
                            <SubCard title={location.name}>
                                <Typography variant="body2">{location.email}</Typography>
                                <Typography variant="body2">{location.city}</Typography>
                                <Typography variant="body2">{location.web}</Typography>
                            </SubCard>
                        </Link>
                    </Grid>
                ))}

                {units.length > 0 && (
                    <Grid item xs={12} md={12}>
                        <Typography variant="h4" sx={{ textAlign: 'left', marginTop: '15px' }}>
                            Units
                        </Typography>
                    </Grid>
                )}
                {units.map((unit, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Link to={`../unit/edit/${unit._id}`}>
                            <SubCard title={unit.name}>
                                <Typography variant="body2">{unit.type}</Typography>
                            </SubCard>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Permission>
    );
};

export default SamplePage;
