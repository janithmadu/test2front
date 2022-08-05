import { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SET_TOKEN } from 'store/actions';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Box,
    Chip,
    ClickAwayListener,
    Grid,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Popper,
    Stack,
    Typography
} from '@mui/material';

// third-party

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';
import User1 from 'assets/images/users/user-round.svg';

// assets
import { IconLogout, IconSettings, IconUser } from '@tabler/icons';

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const customization = useSelector((state) => state.customization);
    const auth = useSelector((state) => state.auth);

    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [open, setOpen] = useState(false);
    /**
     * anchorRef is used on different componets and specifying one type leads to other components throwing an error
     * */
    const anchorRef = useRef(null);
    const handleLogout = async () => {
        const token = null;
        dispatch({ type: SET_TOKEN, token });
        localStorage.removeItem('token');
        localStorage.removeItem('role');

        console.log('Logout successfully ! ');
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const handleListItemClick = (event, index, route = '') => {
        setSelectedIndex(index);
        handleClose(event);

        if (route && route !== '') {
            navigate(route);
        }
    };
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <>
            <Avatar
                src={'User1'}
                sx={{
                    ...theme.typography.mediumAvatar,
                    margin: '8px 8px 8px 8px !important',
                    cursor: 'pointer',
                    color: '#212121c7',
                    background: '#2121212e'
                }}
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                color="primary"
                onClick={handleToggle}
            />
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 14]
                            }
                        }
                    ]
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions in={open} {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                                    <Box sx={{ p: '16px 16px 0px 16px' }}>
                                        <Stack>
                                            <Stack direction="row" spacing={0.5} alignItems="center">
                                                <Typography component="span" variant="h4" sx={{ fontWeight: 600 }}>
                                                    {auth.firstName} {auth.lastName}
                                                </Typography>
                                            </Stack>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{ fontWeight: 400, fontSize: '0.875rem', color: 'rgb(99, 115, 129)' }}
                                            >
                                                {auth.role.roleName}
                                            </Typography>
                                        </Stack>
                                    </Box>
                                    <Box sx={{ p: '0px 16px 16px 16px' }}>
                                        <List
                                            component="nav"
                                            sx={{
                                                width: '100%',
                                                maxWidth: 250,
                                                minWidth: 200,
                                                backgroundColor: theme.palette.background.paper,
                                                borderRadius: '10px',
                                                [theme.breakpoints.down('md')]: {
                                                    minWidth: '100%'
                                                },
                                                '& .MuiListItemButton-root': {
                                                    mt: 0.5
                                                }
                                            }}
                                        >
                                            <ListItemButton
                                                sx={{ borderRadius: `${customization.borderRadius}px`, backgroundColor: '#fff' }}
                                                onClick={(event) => handleListItemClick(event, 0, '/user/profile')}
                                            >
                                                <ListItemIcon>
                                                    <IconSettings stroke={1.5} size="1.3rem" />
                                                </ListItemIcon>
                                                <ListItemText primary={<Typography variant="body2">Account Settings</Typography>} />
                                            </ListItemButton>

                                            <ListItemButton
                                                sx={{ borderRadius: `${customization.borderRadius}px` }}
                                                selected={selectedIndex === 4}
                                                onClick={handleLogout}
                                            >
                                                <ListItemIcon>
                                                    <IconLogout stroke={1.5} size="1.3rem" />
                                                </ListItemIcon>
                                                <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
                                            </ListItemButton>
                                        </List>
                                    </Box>
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </>
    );
};

export default ProfileSection;
