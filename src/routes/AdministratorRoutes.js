import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// administrator routing

//Busuness
const Business = Loadable(lazy(() => import('views/business')));
const CreateBusiness = Loadable(lazy(() => import('views/business/create')));
const AddBusinessUnit = Loadable(lazy(() => import('views/business/unit/AddBusinessUnit')));
const EditBusinessUnit = Loadable(lazy(() => import('views/business/unit/EditBusinessUnit')));

const AddLocationForBusinessUnit = Loadable(lazy(() => import('views/business/unit/AddLocationForBusinessUnit')));
const EditLocationForBusinessUnit = Loadable(lazy(() => import('views/business/unit/EditLocationForBusinessUnit')));
const LocationForBusinessUnit = Loadable(lazy(() => import('views/business/unit/LocationForBusinessUnit')));

const HeadOfficeForBusinessUnit = Loadable(lazy(() => import('views/business/unit/HeadOfficeForBusinessUnit')));
const AddHeadOfficeForBusinessUnit = Loadable(lazy(() => import('views/business/unit/AddHeadOfficeForBusinessUnit')));
const EditHeadOfficeForBusinessUnit = Loadable(lazy(() => import('views/business/unit/EditHeadOfficeForBusinessUnit')));

const Businesses = Loadable(lazy(() => import('views/business/businesses')));
const AddBusinessLocation = Loadable(lazy(() => import('views/business/AddBusinessLocation')));
const OneBusinessLocation = Loadable(lazy(() => import('views/business/OneBusinessLocation')));
const BusinessDetails = Loadable(lazy(() => import('views/business/businessDetails')));

//User
const UserDetails = Loadable(lazy(() => import('views/user/UserDetails')));
const AddUser = Loadable(lazy(() => import('views/user/AddUser')));
const Users = Loadable(lazy(() => import('views/user/users')));
const UserRole = Loadable(lazy(() => import('views/user/UserRole')));
const UserCustomRole = Loadable(lazy(() => import('views/user/UserCustomRole/index')));
const AddUserCustomRole = Loadable(lazy(() => import('views/user/UserCustomRole/AddUserCustomRole')));
const OneUserCustomRole = Loadable(lazy(() => import('views/user/UserCustomRole/OneUserCustomRole')));
const OneUser = Loadable(lazy(() => import('views/user/OneUser')));

//Profile
const Profile = Loadable(lazy(() => import('views/user/Profile')));

//partners
const Customers = Loadable(lazy(() => import('views/partners/customers')));
const Vendors = Loadable(lazy(() => import('views/partners/vendors')));
const Others = Loadable(lazy(() => import('views/partners/others')));
//add customer or suppliers or both
const AddCustomersOrSuppliers = Loadable(lazy(() => import('views/partners/AddCustomersOrSuppliers')));
//edit and delete
const EditAndDeletePartner = Loadable(lazy(() => import('views/partners/EditAndDeletePartner')));

const AddCustomer = Loadable(lazy(() => import('views/partners/AddCustomer')));
const AddOther = Loadable(lazy(() => import('views/partners/AddOther')));
const AddVendor = Loadable(lazy(() => import('views/partners/AddVendor')));
const OneCustomer = Loadable(lazy(() => import('views/partners/OneCustomer')));
const OneVendor = Loadable(lazy(() => import('views/partners/OneVendor')));
const OneOther = Loadable(lazy(() => import('views/partners/OneOther')));

//documents
const Category = Loadable(lazy(() => import('views/document/category')));
const SubCategory = Loadable(lazy(() => import('views/document/category/SubCategory')));

const AddCategory = Loadable(lazy(() => import('views/document/category/AddCategory')));
const OneCategory = Loadable(lazy(() => import('views/document/category/OneCategory')));
const Collection = Loadable(lazy(() => import('views/document/collections')));
const AddCollection = Loadable(lazy(() => import('views/document/collections/AddCollection')));
const AddCollectionTemplate = Loadable(lazy(() => import('views/document/collections/AddCollectionTemplate')));
const CollectionTemplate = Loadable(lazy(() => import('views/document/collections/CollectionTemplate')));

//form
const Document = Loadable(lazy(() => import('views/document')));
const DocumentSubCategory = Loadable(lazy(() => import('views/document/DocumentSubCategory')));
const DocumentOneSubCategory = Loadable(lazy(() => import('views/document/DocumentOneSubCategory')));
const AddDocumentMainCategory = Loadable(lazy(() => import('views/document/AddDocumentMainCategory')));
const AddDocumentSubCategory = Loadable(lazy(() => import('views/document/AddDocumentSubCategory')));
const EditDocumentMainCategory = Loadable(lazy(() => import('views/document/EditDocumentMainCategory')));
const EditDocumentSubCategory = Loadable(lazy(() => import('views/document/EditDocumentSubCategory')));


//sample form
const SampleDocuments = Loadable(lazy(() => import('views/document/SampleDocuments')));
const UploadDocument = Loadable(lazy(() => import('views/document/UploadDocument')));
const OneUploadDocument = Loadable(lazy(() => import('views/document/OneUploadDocument')));

//Product And Service
const ProductAndService = Loadable(lazy(() => import('views/products-and-services/ProductAndService')));
const ProductAndServiceCategory = Loadable(lazy(() => import('views/products-and-services/category/ProductAndServiceCategory')));
const AddProductAndServiceCategory = Loadable(lazy(() => import('views/products-and-services/category/AddProductAndServiceCategory')));
const OneProductAndServiceCategory = Loadable(lazy(() => import('views/products-and-services/category/OneProductAndServiceCategory')));

const AddProduct = Loadable(lazy(() => import('views/products-and-services/AddProduct')));
const OneProduct = Loadable(lazy(() => import('views/products-and-services/OneProduct')));
const AddService = Loadable(lazy(() => import('views/products-and-services/AddService')));
const OneService = Loadable(lazy(() => import('views/products-and-services/OneService')));

const Products = Loadable(lazy(() => import('views/products-and-services/Products')));
const Services = Loadable(lazy(() => import('views/products-and-services/Services')));
const AddProductAndService = Loadable(lazy(() => import('views/products-and-services/AddProductAndService')));
const UOM = Loadable(lazy(() => import('views/products-and-services/UOM')));
const AddUOM = Loadable(lazy(() => import('views/products-and-services/UOM/AddUOM')));
const OneUOM = Loadable(lazy(() => import('views/products-and-services/UOM/OneUOM')));

const OneItem = Loadable(lazy(() => import('views/products-and-services/OneItem')));

//Budget Request
const BudgetRequest = Loadable(lazy(() => import('views/document/BudgetRequest')));

//Budget Request
const ListBudgetRequest = Loadable(lazy(() => import('views/document/ListBudgetRequest')));

//Protect Router
import ProtectRouter from './ProtectRouter';

// ==============================|| MAIN ROUTING ||============================== //

const AdministratorRoutes = {
    path: '/',
    element: <ProtectRouter />,
    children: [
        {
            path: 'business',
            children: [
                {
                    path: '',
                    element: <Businesses />
                },
                {
                    path: ':id',
                    element: <Business />
                },
                {
                    path: 'add',
                    element: <CreateBusiness />
                },
                {
                    path: 'unit/add/:id',
                    element: <AddBusinessUnit />
                },
                {
                    path: 'unit/edit/:id',
                    element: <EditBusinessUnit />
                },
                {
                    path: 'location/add/:id',
                    element: <AddBusinessLocation />
                },
                {
                    path: 'details/:id',
                    element: <BusinessDetails />
                },
                {
                    path: 'location/details/:id',
                    element: <OneBusinessLocation />
                },
                {
                    path: 'location/:id',
                    element: <LocationForBusinessUnit />
                },
                {
                    path: 'location/unit/add/:id',
                    element: <AddLocationForBusinessUnit />
                },
                {
                    path: 'location/unit/edit/:id',
                    element: <EditLocationForBusinessUnit />
                },
                {
                    path: 'head-office/:id',
                    element: <HeadOfficeForBusinessUnit />
                },
                {
                    path: 'head-office/unit/add/:id',
                    element: <AddHeadOfficeForBusinessUnit />
                },
                {
                    path: 'head-office/unit/edit/:id',
                    element: <EditHeadOfficeForBusinessUnit />
                }
            ]
        },
        {
            path: 'user',
            children: [
                {
                    path: ':id',
                    element: <OneUser />
                },
                {
                    path: '',
                    element: <Users />
                },
                {
                    path: 'add',
                    element: <AddUser />
                },
                {
                    path: 'role',
                    element: <UserCustomRole />
                },
                {
                    path: 'role/add',
                    element: <AddUserCustomRole />
                },
                {
                    path: 'role/:id',
                    element: <OneUserCustomRole />
                },
                {
                    path: 'profile',
                    element: <Profile />
                }
            ]
        },
        {
            path: 'partners',
            children: [
                {
                    path: 'customers',
                    element: <Customers />
                },
                {
                    path: 'vendors',
                    element: <Vendors />
                },
                {
                    path: 'others',
                    element: <Others />
                },
                {
                    path: 'add',
                    element: <AddCustomersOrSuppliers />
                },
                {
                    path: ':id',
                    element: <EditAndDeletePartner />
                },
                {
                    path: 'customers/add',
                    element: <AddCustomer />
                },
                {
                    path: 'vendors/add',
                    element: <AddVendor />
                },
                {
                    path: 'others/add',
                    element: <AddOther />
                },
                {
                    path: 'customers/:id',
                    element: <OneCustomer />
                },
                {
                    path: 'vendors/:id',
                    element: <OneVendor />
                },
                {
                    path: 'others/:id',
                    element: <OneOther />
                }
            ]
        },
        {
            path: 'documents',
            children: [
                {
                    path: 'category',
                    element: <Category />
                },
                {
                    path: 'category/add',
                    element: <AddCategory />
                },
                {
                    path: 'category/:id',
                    element: <OneCategory />
                },
                {
                    path: 'collection',
                    element: <Collection />
                },
                {
                    path: 'collection/add',
                    element: <AddCollection />
                },
                {
                    path: '',
                    element: <Document />
                },
                {
                    path: 'sample-documents',
                    element: <SampleDocuments />
                },
                {
                    path: 'budget-request/:id',
                    element: <BudgetRequest />
                },
                {
                    path: 'budget-request',
                    element: <ListBudgetRequest />
                },
                {
                    path: 'add/:id',
                    element: <UploadDocument />
                },
                {
                    path: 'edit/:id',
                    element: <OneUploadDocument />
                },

                {
                    path: 'collection/template',
                    element: <CollectionTemplate />
                },
                {
                    path: 'collection/template/add',
                    element: <AddCollectionTemplate />
                },
                {
                    
                    path: 'sub/:id',
                    element: <DocumentSubCategory />
                },
                {
                    
                       path: 'sub/one/:id',
                    element: <DocumentOneSubCategory />
                },{
                    
                    path: 'category/sub/:id',
                    element: <SubCategory />
                },{
                    path: 'category/type/document',
                    element: <AddDocumentMainCategory />
                    
                },{
                path: 'category/sub/add/:id',
                    element: <AddDocumentSubCategory />
                },{
                    path: 'category/main/edit/:id',
                    element: <EditDocumentMainCategory />
                    
                },{
                    
                     path: 'category/sub/edit/:id',
                    element: <EditDocumentSubCategory />
                }
            ]
        },
        {
            path: 'products-and-services',
            children: [
                {
                    path: 'products',
                    element: <Products />
                },
                {
                    path: 'products/add',
                    element: <AddProduct />
                },
                {
                    path: 'services',
                    element: <Services />
                },
                {
                    path: 'services/add',
                    element: <AddService />
                },
                {
                    path: 'category',
                    element: <ProductAndServiceCategory />
                },
                {
                    path: 'category/add',
                    element: <AddProductAndServiceCategory />
                },
                {
                    path: 'category/:id',
                    element: <OneProductAndServiceCategory />
                },
                {
                    path: 'uom',
                    element: <UOM />
                },
                {
                    path: 'uom/add',
                    element: <AddUOM />
                },
                {
                    path: 'uom/:id',
                    element: <OneUOM />
                },

                {
                    path: 'services/:id',
                    element: <OneService />
                },
                {
                    path: 'products/:id',
                    element: <OneProduct />
                }
            ]
        }
    ]
};
export default AdministratorRoutes;
