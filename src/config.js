const config = {
    // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
    basename: '/',
    defaultPath: '/dashboard/default',
    fontFamily: `'Open Sans', sans-serif`,
    borderRadius: 6,
    apiUrl: process.env.REACT_APP_API_URL
    //https://bussiness-manegment-system.herokuapp.com
    //process.env.REACT_APP_API_URL
};

export default config;
