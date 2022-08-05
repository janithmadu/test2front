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
import { getAllUsers } from '../../services/api';
import Permission from 'component/permission';

// ==============================|| USERS PAGE ||============================== //

const Users = () => {
    const theme = useTheme();
    const [users, setUsers] = useState([]);

    // test for
    async function fetchData() {
        await getAllUsers()
            .then((res) => {
                console.log(res.data.data);
                setUsers(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []); // Or [] if effect doesn't need props or state

    return (
        <Permission name="usersView">
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Box sx={{ textAlign: 'right', marginTop: '20px' }}>
                        <Permission name="usersAdd" type="button">
                            <Link to={`add`}>
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} startIcon={<IconPlus />}>
                                    Add User
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

                {users.map((user, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Link to={user._id}>
                            <SubCard>
                                <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                                    {user.firstName} {user.lastName}
                                </Typography>
                                <Typography variant="body2">{user.email}</Typography>
                            </SubCard>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Permission>
    );
};

export default Users;
