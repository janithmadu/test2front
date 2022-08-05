import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, List, Typography } from '@mui/material';

// project imports
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';
import { useDispatch, useSelector } from 'react-redux';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
    const theme = useTheme();
    const permission = useSelector((state) => state.auth);

    // menu list collapse & items
    const items = item.children?.map((menu) => {
        switch (menu.type) {
            case 'collapse':
                return <NavCollapse key={menu.id} menu={menu} level={1} />;
            case 'item':
                switch (menu.id) {
                    case 'businessView':
                        const businessView = [permission.role].find((data) => data.businessView === true);
                        if (businessView) {
                            return <NavItem key={menu.id} item={menu} level={1} />;
                        }
                        return <></>;

                        break;
                    case 'usersView':
                        const usersView = [permission.role].find((data) => data.usersView === true);

                        if (usersView) {
                            return <NavItem key={menu.id} item={menu} level={1} />;
                        }
                        return <></>;

                        break;
                    case 'rolesView':
                        const rolesView = [permission.role].find((data) => data.rolesView === true);

                        if (rolesView) {
                            return <NavItem key={menu.id} item={menu} level={1} />;
                        }
                        return <></>;
                        break;
                    case 'productsView':
                        const productsView = [permission.role].find((data) => data.productsView === true);

                        if (productsView) {
                            return <NavItem key={menu.id} item={menu} level={1} />;
                        }
                        return <></>;
                        break;

                    case 'servicesView':
                        const servicesView = [permission.role].find((data) => data.servicesView === true);

                        if (servicesView) {
                            return <NavItem key={menu.id} item={menu} level={1} />;
                        }
                        return <></>;
                        break;
                    case 'itemsCategoriesView':
                        const itemsCategoriesView = [permission.role].find((data) => data.itemsCategoriesView === true);

                        if (itemsCategoriesView) {
                            return <NavItem key={menu.id} item={menu} level={1} />;
                        }
                        return <></>;
                        break;
                    case 'partnersCustomersView':
                        const partnersCustomersView = [permission.role].find((data) => data.partnersCustomersView === true);

                        if (partnersCustomersView) {
                            return <NavItem key={menu.id} item={menu} level={1} />;
                        }
                        return <></>;
                        break;
                    case 'partnersVendorsView':
                        const partnersVendorsView = [permission.role].find((data) => data.partnersVendorsView === true);

                        if (partnersVendorsView) {
                            return <NavItem key={menu.id} item={menu} level={1} />;
                        }
                        return <></>;
                        break;
                    case 'partnersOtherView':
                        const partnersOtherView = [permission.role].find((data) => data.partnersOtherView === true);

                        if (partnersOtherView) {
                            return <NavItem key={menu.id} item={menu} level={1} />;
                        }
                        return <></>;
                        break;
                    case 'documentsCategoryView':
                        const documentsCategoryView = [permission.role].find((data) => data.documentsCategoryView === true);

                        if (documentsCategoryView) {
                            return <NavItem key={menu.id} item={menu} level={1} />;
                        }
                        return <></>;
                        break;
                    case 'documentsCollectionsView':
                        const documentsCollectionsView = [permission.role].find((data) => data.documentsCollectionsView === true);

                        if (documentsCollectionsView) {
                            return <NavItem key={menu.id} item={menu} level={1} />;
                        }
                        return <></>;
                        break;
                         case 'documentsCollectionsTempateView':
                        const documentsCollectionsTempateView = [permission.role].find((data) => data.documentsCollectionsView === true);

                        if (documentsCollectionsTempateView) {
                            return <NavItem key={menu.id} item={menu} level={1} />;
                        }
                        return <></>;
                        break;
                        
                    case 'documentsView':
                        const documentsView = [permission.role].find((data) => data.documentsView === true);

                        if (documentsView) {
                            return <NavItem key={menu.id} item={menu} level={1} />;
                        }
                        return <></>;
                        break;
                    case 'itemsUomView':
                        const itemsUomView = [permission.role].find((data) => data.itemsUomView === true);

                        if (itemsUomView) {
                            return <NavItem key={menu.id} item={menu} level={1} />;
                        }
                        return <></>;
                        break;
                    default:
                        return <></>;
                }
            default:
                return (
                    <Typography key={menu.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return (
        <>
            <List
                subheader={
                    item.title &&
                    (() => {
                        switch (item.title) {
                            case 'administration':
                                if (permission.role.businessView || permission.role.usersView || permission.role.rolesView) {
                                    return (
                                        <>
                                            <Typography
                                                variant="caption"
                                                sx={{ ...theme.typography.menuCaption }}
                                                display="block"
                                                gutterBottom
                                            >
                                                {item.title}
                                            </Typography>
                                            {/* group divider */}
                                            <Divider sx={{ mt: 0.25, mb: 1.25 }} />
                                        </>
                                    );
                                }
                            case 'Items':
                                if (permission.role.productsView || permission.role.servicesView || permission.role.itemsCategoriesView) {
                                    return (
                                        <>
                                            <Typography
                                                variant="caption"
                                                sx={{ ...theme.typography.menuCaption }}
                                                display="block"
                                                gutterBottom
                                            >
                                                {item.title}
                                            </Typography>
                                            {/* group divider */}
                                            <Divider sx={{ mt: 0.25, mb: 1.25 }} />
                                        </>
                                    );
                                }
                            case 'Partners':
                                if (
                                    permission.role.partnersCustomersView ||
                                    permission.role.partnersVendorsView ||
                                    permission.role.partnersOtherView
                                ) {
                                    return (
                                        <>
                                            <Typography
                                                variant="caption"
                                                sx={{ ...theme.typography.menuCaption }}
                                                display="block"
                                                gutterBottom
                                            >
                                                {item.title}
                                            </Typography>
                                            {/* group divider */}
                                            <Divider sx={{ mt: 0.25, mb: 1.25 }} />
                                        </>
                                    );
                                }

                            case 'Documents':
                                if (
                                    permission.role.documentsCategoryView ||
                                    permission.role.documentsCollectionsView ||
                                    permission.role.documentsView
                                ) {
                                    return (
                                        <>
                                            <Typography
                                                variant="caption"
                                                sx={{ ...theme.typography.menuCaption }}
                                                display="block"
                                                gutterBottom
                                            >
                                                {item.title}
                                            </Typography>
                                            {/* group divider */}
                                            <Divider sx={{ mt: 0.25, mb: 1.25 }} />
                                        </>
                                    );
                                }

                            default:
                                return <></>;
                        }
                    })()
                }
            >
                {items}
            </List>
        </>
    );
};

NavGroup.propTypes = {
    item: PropTypes.object
};

export default NavGroup;
