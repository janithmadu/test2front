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
import { getOneBusiness, getHeadOffliceForUnits } from 'services/api';

import Permission from 'component/permission';

// ==============================|| BUSINESS PAGE ||============================== //

const HeadOfficeForBusinessUnit = () => {
    const theme = useTheme();
    const params = useParams();

    const [headOffice, setHeadOffice] = useState(false);
    const [headOfficeEmail, setEeadOfficeEmail] = useState('');
    const [headOfficeCity, setHeadOfficeCity] = useState('');
    const [units, setUnits] = useState([]);

    // get all businesses
    async function fetchData() {
        await getOneBusiness(params.id)
            .then((res) => {
                console.log(res.data.data);
                setHeadOffice(res.data.data.headOffice);
                setHeadOfficeCity(res.data.data.headOfficeEmail);
                setEeadOfficeEmail(res.data.data.headOfficeCity);
            })
            .catch((err) => {
                console.log(err);
            });

        await getHeadOffliceForUnits(params.id)
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
                <Grid item xs={12} md={12}>
                    <Box
                        sx={{
                            background: theme.palette.primary.main,
                            padding: '30px',
                            borderRadius: '12px'
                        }}
                    >
                        <Typography variant="h3" sx={{ color: '#fff' }}>
                            Head Office
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#fff' }}>
                            {headOfficeEmail}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#fff' }}>
                            {headOfficeCity}
                        </Typography>
                    </Box>
                </Grid>

                <Permission name="businessAdd" type="button">
                    {headOffice && (
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
                            <Link to={`../head-office/unit/add/${params.id}`}>
                                <Button variant="contained" sx={{ marginLeft: '10px', borderRadius: '6px' }} startIcon={<IconPlus />}>
                                    Add Business units
                                </Button>
                            </Link>
                        </Grid>
                    )}
                </Permission>

                {units.map((unit, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Link to={`../head-office/unit/edit/${unit._id}`}>
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

export default HeadOfficeForBusinessUnit;
