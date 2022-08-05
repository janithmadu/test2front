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
import { getAllItemUOM } from '../../../services/api';
import Permission from 'component/permission';

// ==============================|| BUSINESS PAGE ||============================== //

const UOM = () => {
    const theme = useTheme();
    const [itemsUOM, setItemsUOM] = useState([]);

    // fetch data
    async function fetchData() {
        await getAllItemUOM()
            .then((res) => {
                console.log(res.data.data);
                setItemsUOM(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <Permission name="itemsUomView">
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px', margin: 'auto' }}>
                        Units Of Measurement
                    </Typography>
                </Grid>
                <Permission name="itemsUomAdd" type="button">
                    <Grid item xs={12} md={12}>
                        <Box sx={{ textAlign: 'right', marginTop: '20px' }}>
                            <Link to={`add`}>
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} startIcon={<IconPlus />}>
                                    Add UOM
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Permission>
                {itemsUOM.map((uom, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Link to={uom._id}>
                            <SubCard>
                                <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                                    {uom.name}
                                </Typography>
                            </SubCard>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Permission>
    );
};

export default UOM;
