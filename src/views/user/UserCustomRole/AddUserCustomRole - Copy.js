import { useState, useRef } from 'react';
// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import {
    TextField,
    Grid,
    Button,
    Box,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Checkbox,
    InputLabel,
    MenuItem,
    Select,
    FormGroup
} from '@mui/material';
import { createBusiness } from '../../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';

// ==============================|| SAMPLE PAGE ||============================== //

const AddUserCustomRole = () => {
    const theme = useTheme();

    const [customRoleName, setCustomRoleName] = useState('');

    const [businessView, setBusinessView] = useState(false);
    const [businessAdd, setBusinessAdd] = useState(false);
    const [businessEdit, setBusinessEdit] = useState(false);
    const [businessDelete, setBusinessDelete] = useState(false);

    const [userView, setUserView] = useState(false);
    const [userAdd, setUserAdd] = useState(false);
    const [userEdit, setUserEdit] = useState(false);
    const [userDelete, setUserDelete] = useState(false);

    const [rolesView, setRolesView] = useState(false);
    const [rolesAdd, setRolesAdd] = useState(false);
    const [rolesEdit, setRolesEdit] = useState(false);
    const [rolesDelete, setRolesDelete] = useState(false);

    const [productsView, setProductsView] = useState(false);
    const [productsAdd, setProductsAdd] = useState(false);
    const [productsEdit, setProductsEdit] = useState(false);
    const [productsDelete, setProductsDelete] = useState(false);

    const [servicesView, setServicesView] = useState(false);
    const [servicesAdd, setServicesAdd] = useState(false);
    const [servicesEdit, setSrvicesEdit] = useState(false);
    const [servicesDelete, setServicesDelete] = useState(false);

    const [itemsCategoriesView, setItemsCategoriesView] = useState(false);
    const [itemsCategoriesAdd, setItemsCategoriesAdd] = useState(false);
    const [itemsCategoriesEdit, setItemsCategoriesEdit] = useState(false);
    const [itemsCategoriesDelete, setItemsCategoriesDelete] = useState(false);

    const [itemsUomView, setItemsUomView] = useState(false);
    const [itemsUomAdd, setItemsUomAdd] = useState(false);
    const [itemsUomEdit, setItemsUomEdit] = useState(false);
    const [itemsUomDelete, setItemsUomDelete] = useState(false);

    const [partnersCustomersView, setPartnersCustomersView] = useState(false);
    const [partnersCustomersAdd, setPartnersCustomersAdd] = useState(false);
    const [partnersCustomersEdit, setPartnersCustomersEdit] = useState(false);
    const [partnersCustomersDelete, setPartnersCustomersDelete] = useState(false);

    const [partnersVendorsView, setPartnersVendorsView] = useState(false);
    const [partnersVendorsAdd, setPartnersVendorsAdd] = useState(false);
    const [partnersVendorsEdit, setPartnersVendorsEdit] = useState(false);
    const [partnersVendorsDelete, setPartnersVendorsDelete] = useState(false);

    const [partnersOtherView, setPartnersOtherView] = useState(false);
    const [partnersOtherAdd, setPartnersOtherAdd] = useState(false);
    const [partnersOtherEdit, setPartnersOtherEdit] = useState(false);
    const [partnersOtherDelete, setPartnersOtherDelete] = useState(false);

    const [documentsCategoryView, setDocumentsCategoryView] = useState(false);
    const [documentsCategoryAdd, setDocumentsCategoryAdd] = useState(false);
    const [documentsCategoryEdit, setDocumentsCategoryEdit] = useState(false);
    const [documentsCategoryDelete, setDocumentsCategoryDelete] = useState(false);

    const [documentsCollectionsView, setDocumentsCollectionsView] = useState(false);
    const [documentsCollectionsAdd, setDocumentsCollectionsAdd] = useState(false);
    const [documentsCollectionsEdit, setDocumentsCollectionsEdit] = useState(false);
    const [documentsCollectionsDelete, setDocumentsCollectionsDelete] = useState(false);

    const [documentsView, setDocumentsView] = useState(false);
    const [documentsAdd, setDocumentsAdd] = useState(false);
    const [documentsEdit, setDocumentsEdit] = useState(false);
    const [documentsDelete, setDocumentsDelete] = useState(false);
    const [documentsPrint, setDocumentsPrint] = useState(false);
    const [documentsApprove, setDocumentsApprove] = useState(false);

    const PostData = async () => {
        await createBusiness({
            roleName: roleName,
            businessView: businessView,
            businessAdd: businessAdd,
            businessEdit: businessEdit,
            usersAdd: usersAdd,
            usersView: usersView,
            usersEdit: usersEdit,
            rolesView: rolesView,
            rolesAdd: rolesAdd,
            rolesEdit: rolesEdit,
            productsView: productsView,
            productsAdd: productsAdd,
            productsEdit: productsEdit,
            servicesView: servicesView,
            servicesAdd: servicesAdd,
            servicesEdit: servicesEdit,
            itemsCategoriesView: itemsCategoriesView,
            itemsCategoriesAdd: itemsCategoriesAdd,
            itemsCategoriesEdit: itemsCategoriesEdit,
            itemsUomView: itemsUomView,
            itemsUomAdd: itemsUomAdd,
            itemsUomEdit: itemsUomEdit,
            partnersCustomersView: partnersCustomersView,
            partnersCustomersAdd: partnersCustomersAdd,
            partnersCustomersEdit: partnersCustomersEdit,
            partnersVendorsView: partnersVendorsView,
            partnersVendorsAdd: partnersVendorsAdd,
            partnersVendorsEdit: partnersVendorsEdit,
            partnersOtherView: partnersOtherView,
            partnersOtherAdd: partnersOtherAdd,
            partnersOtherEdit: partnersOtherEdit,
            documentsCategoryView: documentsCategoryView,
            documentsCategoryAdd: documentsCategoryAdd,
            documentsCategoryEdit: documentsCategoryEdit,
            documentsCollectionsView: documentsCollectionsView,
            documentsCollectionsAdd: documentsCollectionsAdd,
            documentsCollectionsEdit: documentsCollectionsEdit,
            documentsAdd: documentsAdd,
            documentsView: documentsView,
            documentsEdit: documentsEdit,
            documentsPrint: documentsPrint,
            documentsApprove: documentsApprove,
            userId: 'tyr6yy',
            businessId: '34355'
        });
    };

    return (
        <FormBox>
            <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                User Roles
            </Typography>

            <TextField
                fullWidth
                id="fullWidth"
                label="Role Name"
                variant="outlined"
                margin="normal"
                onChange={(e) => customRoleName(e.target.value)}
            />
            <Typography variant="h4" sx={{ textAlign: 'left', marginBottom: '10px', marginTop: '10px' }}>
                Administration
            </Typography>

            <Box
                sx={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Business
                </Typography>

                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox name="businessView" checked={businessView} onChange={(e) => setBusinessView(e.target.checked)} />
                        }
                        label="View"
                    />
                    <FormControlLabel
                        control={<Checkbox name="businessAdd" checked={businessAdd} onChange={(e) => setBusinessAdd(e.target.checked)} />}
                        label="Add"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox name="businessEdit" checked={businessEdit} onChange={(e) => setBusinessEdit(e.target.checked)} />
                        }
                        label="Edit"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="businessDelete"
                                checked={businessDelete}
                                onChange={(e) => setBusinessDelete(e.target.checked)}
                            />
                        }
                        label="Delete"
                    />
                </FormGroup>
            </Box>

            <Box
                sx={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Users
                </Typography>

                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox name="userView" checked={userView} onChange={(e) => setUserView(e.target.checked)} />}
                        label="View"
                    />
                    <FormControlLabel
                        control={<Checkbox name="userAdd" checked={userAdd} onChange={(e) => setUserAdd(e.target.checked)} />}
                        label="Add"
                    />
                    <FormControlLabel
                        control={<Checkbox name="userEdit" checked={userEdit} onChange={(e) => setUserEdit(e.target.checked)} />}
                        label="Edit"
                    />
                    <FormControlLabel
                        control={<Checkbox name="userDelete" checked={userDelete} onChange={(e) => setUserDelete(e.target.checked)} />}
                        label="Delete"
                    />
                </FormGroup>
            </Box>

            <Box
                sx={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Roles
                </Typography>

                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox name="rolesView" checked={rolesView} onChange={(e) => setRolesView(e.target.checked)} />}
                        label="View"
                    />
                    <FormControlLabel
                        control={<Checkbox name="rolesAdd" checked={rolesAdd} onChange={(e) => setRolesAdd(e.target.checked)} />}
                        label="Add"
                    />
                    <FormControlLabel
                        control={<Checkbox name="rolesEdit" checked={rolesEdit} onChange={(e) => setRolesEdit(e.target.checked)} />}
                        label="Edit"
                    />
                    <FormControlLabel
                        control={<Checkbox name="rolesDelete" checked={rolesDelete} onChange={(e) => setRolesDelete(e.target.checked)} />}
                        label="Delete"
                    />
                </FormGroup>
            </Box>

            <Typography variant="h4" sx={{ textAlign: 'left', marginBottom: '10px', marginTop: '10px' }}>
                Products | Services
            </Typography>

            <Box
                sx={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Products
                </Typography>

                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox name="productsView" checked={productsView} onChange={(e) => setProductsView(e.target.checked)} />
                        }
                        label="View"
                    />
                    <FormControlLabel
                        control={<Checkbox name="productsAdd" checked={productsAdd} onChange={(e) => setProductsAdd(e.target.checked)} />}
                        label="Add"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox name="productsEdit" checked={productsEdit} onChange={(e) => setProductsEdit(e.target.checked)} />
                        }
                        label="Edit"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="productsDelete"
                                checked={productsDelete}
                                onChange={(e) => setProductsDelete(e.target.checked)}
                            />
                        }
                        label="Delete"
                    />
                </FormGroup>
            </Box>

            <Box
                sx={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Services
                </Typography>

                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox name="servicesView" checked={servicesView} onChange={(e) => setServicesView(e.target.checked)} />
                        }
                        label="View"
                    />
                    <FormControlLabel
                        control={<Checkbox name="servicesAdd" checked={servicesAdd} onChange={(e) => setServicesAdd(e.target.checked)} />}
                        label="Add"
                    />
                    <FormControlLabel
                        control={<Checkbox name="servicesEdit" checked={servicesEdit} onChange={(e) => setSrvicesEdit(e.target.checked)} />}
                        label="Edit"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="servicesDelete"
                                checked={servicesDelete}
                                onChange={(e) => setServicesDelete(e.target.checked)}
                            />
                        }
                        label="Delete"
                    />
                </FormGroup>
            </Box>

            <Box
                sx={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Category
                </Typography>

                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="itemsCategoriesView"
                                checked={itemsCategoriesView}
                                onChange={(e) => setItemsCategoriesView(e.target.checked)}
                            />
                        }
                        label="View"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="itemsCategoriesAdd"
                                checked={itemsCategoriesAdd}
                                onChange={(e) => setItemsCategoriesAdd(e.target.checked)}
                            />
                        }
                        label="Add"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="itemsCategoriesEdit"
                                checked={itemsCategoriesEdit}
                                onChange={(e) => setItemsCategoriesEdit(e.target.checked)}
                            />
                        }
                        label="Edit"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="itemsCategoriesDelete"
                                checked={itemsCategoriesDelete}
                                onChange={(e) => setItemsCategoriesDelete(e.target.checked)}
                            />
                        }
                        label="Delete"
                    />
                </FormGroup>
            </Box>

            <Box
                sx={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    UOM
                </Typography>

                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox name="itemsUomView" checked={itemsUomView} onChange={(e) => setItemsUomView(e.target.checked)} />
                        }
                        label="View"
                    />
                    <FormControlLabel
                        control={<Checkbox name="itemsUomAdd" checked={itemsUomAdd} onChange={(e) => setItemsUomAdd(e.target.checked)} />}
                        label="Add"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox name="itemsUomEdit" checked={itemsUomEdit} onChange={(e) => setItemsUomEdit(e.target.checked)} />
                        }
                        label="Edit"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="itemsUomDelete"
                                checked={itemsUomDelete}
                                onChange={(e) => setItemsUomDelete(e.target.checked)}
                            />
                        }
                        label="Delete"
                    />
                </FormGroup>
            </Box>

            <Typography variant="h4" sx={{ textAlign: 'left', marginBottom: '10px', marginTop: '10px' }}>
                Partners
            </Typography>

            <Box
                sx={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Customer
                </Typography>

                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="partnersCustomersView"
                                checked={partnersCustomersView}
                                onChange={(e) => setPartnersCustomersView(e.target.checked)}
                            />
                        }
                        label="View"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="partnersCustomersAdd"
                                checked={partnersCustomersAdd}
                                onChange={(e) => setItemsUomAdd(e.target.checked)}
                            />
                        }
                        label="Add"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="partnersCustomersEdit"
                                checked={partnersCustomersEdit}
                                onChange={(e) => setItemsUomEdit(e.target.checked)}
                            />
                        }
                        label="Edit"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="partnersCustomersDelete"
                                checked={partnersCustomersDelete}
                                onChange={(e) => setPartnersCustomersDelete(e.target.checked)}
                            />
                        }
                        label="Delete"
                    />
                </FormGroup>
            </Box>

            <Box
                sx={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Vendors
                </Typography>

                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="partnersVendorsView"
                                checked={partnersVendorsView}
                                onChange={(e) => setPartnersVendorsView(e.target.checked)}
                            />
                        }
                        label="View"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="partnersVendorsAdd"
                                checked={partnersVendorsAdd}
                                onChange={(e) => setPartnersVendorsAdd(e.target.checked)}
                            />
                        }
                        label="Add"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="partnersVendorsEdit"
                                checked={partnersVendorsEdit}
                                onChange={(e) => setPartnersVendorsEdit(e.target.checked)}
                            />
                        }
                        label="Edit"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="partnersVendorsDelete"
                                checked={partnersVendorsDelete}
                                onChange={(e) => setPartnersVendorsDelete(e.target.checked)}
                            />
                        }
                        label="Delete"
                    />
                </FormGroup>
            </Box>

            <Box
                sx={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Other
                </Typography>

                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="partnersOtherView"
                                checked={partnersOtherView}
                                onChange={(e) => setPartnersOtherView(e.target.checked)}
                            />
                        }
                        label="View"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="partnersOtherAdd"
                                checked={partnersOtherAdd}
                                onChange={(e) => setPartnersOtherAdd(e.target.checked)}
                            />
                        }
                        label="Add"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="partnersOtherEdit"
                                checked={partnersOtherEdit}
                                onChange={(e) => setPartnersOtherEdit(e.target.checked)}
                            />
                        }
                        label="Edit"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="partnersOtherDelete"
                                checked={partnersOtherDelete}
                                onChange={(e) => setPartnersOtherDelete(e.target.checked)}
                            />
                        }
                        label="Delete"
                    />
                </FormGroup>
            </Box>

            <Typography variant="h4" sx={{ textAlign: 'left', marginBottom: '10px', marginTop: '10px' }}>
                Documents
            </Typography>

            <Box
                sx={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Category
                </Typography>

                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="documentsCategoryView"
                                checked={documentsCategoryView}
                                onChange={(e) => setDocumentsCategoryView(e.target.checked)}
                            />
                        }
                        label="View"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="documentsCategoryAdd"
                                checked={documentsCategoryAdd}
                                onChange={(e) => setDocumentsCategoryAdd(e.target.checked)}
                            />
                        }
                        label="Add"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="documentsCategoryEdit"
                                checked={documentsCategoryEdit}
                                onChange={(e) => setDocumentsCategoryEdit(e.target.checked)}
                            />
                        }
                        label="Edit"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="documentsCategoryDelete"
                                checked={documentsCategoryDelete}
                                onChange={(e) => setDocumentsCategoryDelete(e.target.checked)}
                            />
                        }
                        label="Delete"
                    />
                </FormGroup>
            </Box>

            <Box
                sx={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Collections
                </Typography>

                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="documentsCollectionsView"
                                checked={documentsCollectionsView}
                                onChange={(e) => setDocumentsCollectionsView(e.target.checked)}
                            />
                        }
                        label="View"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="documentsCollectionsAdd"
                                checked={documentsCollectionsAdd}
                                onChange={(e) => setDocumentsCollectionsAdd(e.target.checked)}
                            />
                        }
                        label="Add"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="documentsCollectionsEdit"
                                checked={documentsCollectionsEdit}
                                onChange={(e) => setDocumentsCollectionsEdit(e.target.checked)}
                            />
                        }
                        label="Edit"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="documentsCollectionsDelete"
                                checked={documentsCollectionsDelete}
                                onChange={(e) => setDocumentsCollectionsDelete(e.target.checked)}
                            />
                        }
                        label="Delete"
                    />
                </FormGroup>
            </Box>

            <Box
                sx={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' }
                }}
            >
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Documents
                </Typography>

                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox name="documentsView" checked={documentsView} onChange={(e) => setDocumentsView(e.target.checked)} />
                        }
                        label="View"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox name="documentsAdd" checked={documentsAdd} onChange={(e) => setDocumentsAdd(e.target.checked)} />
                        }
                        label="Add"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox name="documentsEdit" checked={documentsEdit} onChange={(e) => setDocumentsEdit(e.target.checked)} />
                        }
                        label="Edit"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="documentsDelete"
                                checked={documentsDelete}
                                onChange={(e) => setDocumentsDelete(e.target.checked)}
                            />
                        }
                        label="Delete"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                name="documentsPrint"
                                checked={documentsPrint}
                                onChange={(e) => setDocumentsPrint(e.target.checked)}
                            />
                        }
                        label="Print"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                name="documentsApprove"
                                checked={documentsApprove}
                                onChange={(e) => setDocumentsApprove(e.target.checked)}
                            />
                        }
                        label="Approve"
                    />
                </FormGroup>
            </Box>

            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                <Button variant="outlined" sx={{ borderRadius: '6px' }} onClick={PostData}>
                    cancel
                </Button>
                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }}>
                    add
                </Button>
            </Box>
        </FormBox>
    );
};

export default AddUserCustomRole;
