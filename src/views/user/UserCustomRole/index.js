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

import { getAllRoles } from '../../../services/api';
import Permission from 'component/permission';

// ==============================|| USERS PAGE ||============================== //

const UserCustomRole = () => {
    const theme = useTheme();
    const [roles, setRoles] = useState([]);

    // fetch data
    async function fetchData() {
        await getAllRoles()
            .then((res) => {
                console.log(res.data.data);
                setRoles(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <Permission name="rolesView">
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Box sx={{ textAlign: 'right', marginTop: '20px' }}>
                        <Permission name="rolesAdd" type="button">
                            <Link to={`add`}>
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} startIcon={<IconPlus />}>
                                    Add Role
                                </Button>
                            </Link>
                        </Permission>
                    </Box>
                </Grid>

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
                {roles.map((roles, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Link to={roles._id}>
                            <SubCard>
                                <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                                    {roles.roleName}
                                </Typography>
                            </SubCard>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Permission>
    );
};

export default UserCustomRole;
