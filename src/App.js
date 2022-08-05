//react
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { SET_ROLE_NAME, SET_USER } from 'store/actions';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing

import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import Footer from 'layout/Footer';

//isLogin
import { checkLogin, test } from './services/api/auth';

// ==============================|| APP ||============================== //

const App = () => {
    const dispatch = useDispatch();
    const customization = useSelector((state) => state.customization);
    const auth = useSelector((state) => state.auth);
    //console.log(process.env.NODE_ENV);

    useEffect(() => {
        async function fetchData() {
            await checkLogin()
                .then((res) => {
                    console.log(res.data);
                    const role = res.data.role;
                    const firstName = res.data.user.firstName;
                    const lastName = res.data.user.lastName;
                    dispatch({ type: SET_USER, firstName, lastName });
                    dispatch({ type: SET_ROLE_NAME, role });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        fetchData();
    }, []);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
            </ThemeProvider>
            <Footer />
        </StyledEngineProvider>
    );
};

export default App;
