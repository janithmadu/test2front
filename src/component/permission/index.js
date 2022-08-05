import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ==============================|| CUSTOM SUB CARD ||============================== //

const Permission = forwardRef(({ children, name, type, ...others }, ref) => {
    const theme = useTheme();
    const permission = useSelector((state) => state.auth);

    //  console.log(permission.role);

    function role(role) {
        switch (role) {
            case 'businessView':
                //return [permission.role].find((data) => data.businessView === true);
                if (permission.role.businessView) {
                    return true;
                }
                break;
            case 'businessAdd':
                if (permission.role.businessAdd) {
                    return true;
                }
                break;
            case 'businessEdit':
                if (permission.role.businessEdit) {
                    return true;
                }
                break;
            case 'usersView':
                if (permission.role.usersView) {
                    return true;
                }
                break;
            case 'usersAdd':
                if (permission.role.usersAdd) {
                    return true;
                }
                break;
            case 'usersEdit':
                if (permission.role.usersEdit) {
                    return true;
                }
                break;

            case 'rolesView':
                if (permission.role.rolesView) {
                    return true;
                }
                break;
            case 'rolesAdd':
                if (permission.role.rolesAdd) {
                    return true;
                }
                break;
            case 'rolesEdit':
                if (permission.role.rolesEdit) {
                    return true;
                }
                break;
            case 'productsView':
                if (permission.role.productsView) {
                    return true;
                }
                break;
            case 'productsAdd':
                if (permission.role.productsAdd) {
                    return true;
                }
                break;
            case 'productsEdit':
                if (permission.role.productsEdit) {
                    return true;
                }
                break;
            case 'productsDelete':
                if (permission.role.productsDelete) {
                    return true;
                }
                break;
            case 'servicesView':
                if (permission.role.servicesView) {
                    return true;
                }
                break;
            case 'servicesAdd':
                if (permission.role.servicesAdd) {
                    return true;
                }
                break;
            case 'servicesEdit':
                if (permission.role.servicesEdit) {
                    return true;
                }
                   break;
            case 'servicesDelete':
                if (permission.role.servicesDelete) {
                    return true;
                }
                break;
            case 'partnersCustomersView':
                if (permission.role.partnersCustomersView) {
                    return true;
                }
                break;
            case 'partnersCustomersAdd':
                if (permission.role.partnersCustomersAdd) {
                    return true;
                }
                break;
            case 'partnersCustomersEdit':
                if (permission.role.partnersCustomersEdit) {
                    return true;
                }
                break;
            case 'partnersVendorsView':
                if (permission.role.partnersVendorsView) {
                    return true;
                }

                break;
            case 'partnersVendorsAdd':
                if (permission.role.partnersVendorsAdd) {
                    return true;
                }

                break;
            case 'partnersVendorsEdit':
                if (permission.role.partnersVendorsEdit) {
                    return true;
                }

                break;
            case 'partnersOtherView':
                if (permission.role.partnersOtherView) {
                    return true;
                }

                break;
            case 'partnersOtherAdd':
                if (permission.role.partnersOtherAdd) {
                    return true;
                }

                break;
            case 'partnersOtherEdit':
                if (permission.role.partnersOtherEdit) {
                    return true;
                }
                break;
            case 'itemsCategoriesView':
                if (permission.role.itemsCategoriesView) {
                    return true;
                }
                break;
            case 'itemsCategoriesAdd':
                if (permission.role.itemsCategoriesAdd) {
                    return true;
                }
                break;
            case 'itemsCategoriesEdit':
                if (permission.role.itemsCategoriesEdit) {
                    return true;
                }
                break;
            case 'itemsUomView':
                if (permission.role.itemsUomView) {
                    return true;
                }
                break;
            case 'itemsUomAdd':
                if (permission.role.itemsUomAdd) {
                    return true;
                }
                break;
            case 'itemsUomEdit':
                if (permission.role.itemsUomEdit) {
                    return true;
                }
                break;
            case 'documentsCategoryView':
                if (permission.role.documentsCategoryView) {
                    return true;
                }
                break;
            case 'documentsCategoryAdd':
                if (permission.role.documentsCategoryAdd) {
                    return true;
                }
                break;
            case 'documentsCategoryEdit':
                if (permission.role.documentsCategoryEdit) {
                    return true;
                }

                break;
            case 'documentsCollectionsView':
                if (permission.role.documentsCollectionsView) {
                    return true;
                }
                break;
            case 'documentsCollectionsAdd':
                if (permission.role.documentsCollectionsAdd) {
                    return true;
                }
                break;
            case 'documentsCollectionsEdit':
                if (permission.role.documentsCollectionsEdit) {
                    return true;
                }
                break;
            case 'documentsView':
                if (permission.role.documentsView) {
                    return true;
                }
                break;
            case 'documentsAdd':
                if (permission.role.documentsAdd) {
                    return true;
                }
                break;
            case 'documentsEdit':
                if (permission.role.documentsEdit) {
                    return true;
                }
                break;
            default:
                return false;
        }
    }

    const checkPermission = role(name);

    // console.log(checkPermission);
    // console.log(checkPermission ? checkPermission : null);
    return (
        <>
            {checkPermission ? (
                children
            ) : type === 'button' ? (
                ''
            ) : (
                <Typography variant="h3" sx={{ textAlign: 'center', marginTop: '15px' }}>
                    Access Denied
                </Typography>
            )}
        </>
    );
});

Permission.propTypes = {
    children: PropTypes.node,
    content: PropTypes.bool,
    contentClass: PropTypes.string,
    darkTitle: PropTypes.bool,
    secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
    sx: PropTypes.object,
    contentSX: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
    name: PropTypes.string,
    type: PropTypes.string
};

export default Permission;
