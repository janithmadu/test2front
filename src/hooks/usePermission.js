import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ==============================|| ELEMENT REFERENCE HOOKS  ||============================== //

const usePermission = (pageName) => {
    const permission = useSelector((state) => state.auth);

    let inputDisableCheck = true;

    switch (pageName) {
        case 'businessView':
            //return [permission.role].find((data) => data.businessView === true);
            if (permission.role.businessView) {
                return (inputDisableCheck = false);
            }
            break;
        case 'businessAdd':
            if (permission.role.businessAdd) {
                return (inputDisableCheck = false);
            }
            break;
        case 'businessEdit':
            if (permission.role.businessEdit) {
                return (inputDisableCheck = false);
            }
            break;
        case 'usersView':
            if (permission.role.usersView) {
                return (inputDisableCheck = false);
            }
            break;
        case 'usersAdd':
            if (permission.role.usersAdd) {
                return (inputDisableCheck = false);
            }
            break;
        case 'usersEdit':
            if (permission.role.usersEdit) {
                return (inputDisableCheck = false);
            }
            break;

        case 'rolesView':
            if (permission.role.rolesView) {
                return (inputDisableCheck = false);
            }
            break;
        case 'partnersCustomersEdit':
            if (permission.role.partnersCustomersEdit) {
                return (inputDisableCheck = false);
            }
            break;
        case 'partnersVendorsEdit':
            if (permission.role.partnersVendorsEdit) {
                return (inputDisableCheck = false);
            }
            break;
        case 'partnersOtherEdit':
            if (permission.role.partnersOtherEdit) {
                return (inputDisableCheck = false);
            }
            break;
        case 'productsEdit':
            if (permission.role.productsEdit) {
                return (inputDisableCheck = false);
            }
            break;
        case 'servicesEdit':
            if (permission.role.servicesEdit) {
                return (inputDisableCheck = false);
            }
            break;
        case 'itemsCategoriesEdit':
            if (permission.role.itemsCategoriesEdit) {
                return (inputDisableCheck = false);
            }
            break;
        case 'itemsUomEdit':
            if (permission.role.itemsUomEdit) {
                return (inputDisableCheck = false);
            }
            break;
        case 'documentsCategoryEdit':
            if (permission.role.documentsCategoryEdit) {
                return (inputDisableCheck = false);
            }

            break;

        default:
            return (inputDisableCheck = true);
    }

    return inputDisableCheck;
};

export default usePermission;
