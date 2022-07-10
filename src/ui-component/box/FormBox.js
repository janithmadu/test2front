import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ==============================|| CUSTOM SUB CARD ||============================== //

const FormBox = forwardRef(({ children, ...others }, ref) => {
    const theme = useTheme();

    return (
        <Box
            ref={ref}
            sx={{
                padding: { xs: '10px', md: '0px 130px 0px 130px' },
                backgroundColor: '#fff',
                margin: 'auto'
            }}
            {...others}
        >
            {children}
        </Box>
    );
});

FormBox.propTypes = {
    children: PropTypes.node,
    content: PropTypes.bool,
    contentClass: PropTypes.string,
    darkTitle: PropTypes.bool,
    secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
    sx: PropTypes.object,
    contentSX: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
};

export default FormBox;
