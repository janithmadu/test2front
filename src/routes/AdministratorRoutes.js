import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// administrator routing

//Busuness
const Business = Loadable(lazy(() => import('views/business')));
const CreateBusiness = Loadable(lazy(() => import('views/business/create')));
const AddBusinessUnit = Loadable(lazy(() => import('views/business/AddBusinessUnit')));
const Businesses = Loadable(lazy(() => import('views/business/businesses')));
const AddBusinessLocation = Loadable(lazy(() => import('views/business/AddBusinessLocation')));

//User
const UserDetails = Loadable(lazy(() => import('views/user/UserDetails')));
const AddUser = Loadable(lazy(() => import('views/user/AddUser')));
const Users = Loadable(lazy(() => import('views/user/users')));
const UserRole = Loadable(lazy(() => import('views/user/UserRole')));
const AddUserCustomRole = Loadable(lazy(() => import('views/user/UserCustomRole/AddUserCustomRole')));

//partners
const Customers = Loadable(lazy(() => import('views/partners/customers')));
const Vendors = Loadable(lazy(() => import('views/partners/vendors')));
//add customer or suppliers or both
const AddCustomersOrSuppliers = Loadable(lazy(() => import('views/partners/AddCustomersOrSuppliers')));

//documents
const Category = Loadable(lazy(() => import('views/document/category')));
const AddCategory = Loadable(lazy(() => import('views/document/category/AddCategory')));
const Collection = Loadable(lazy(() => import('views/document/collections')));
const AddCollection = Loadable(lazy(() => import('views/document/collections/AddCollection')));
//form
const Document = Loadable(lazy(() => import('views/document')));
//sample form
const SampleDocuments = Loadable(lazy(() => import('views/document/SampleDocuments')));

//Product And Service
const ProductAndService = Loadable(lazy(() => import('views/products-and-services/ProductAndService')));
const ProductAndServiceCategory = Loadable(lazy(() => import('views/products-and-services/category/ProductAndServiceCategory')));
const AddProductAndServiceCategory = Loadable(lazy(() => import('views/products-and-services/category/AddProductAndServiceCategory')));
const Products = Loadable(lazy(() => import('views/products-and-services/Products')));
const Services = Loadable(lazy(() => import('views/products-and-services/Services')));
const AddProductAndService = Loadable(lazy(() => import('views/products-and-services/AddProductAndService')));
const UOM = Loadable(lazy(() => import('views/products-and-services/UOM')));
const AddUOM = Loadable(lazy(() => import('views/products-and-services/UOM/AddUOM')));

//Budget Request
const BudgetRequest = Loadable(lazy(() => import('views/document/BudgetRequest')));

//Protect Router
import ProtectRouter from './ProtectRouter';

// ==============================|| MAIN ROUTING ||============================== //

const AdministratorRoutes = {
    path: '/administrator',
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
                    path: 'add-unit',
                    element: <AddBusinessUnit />
                },
                {
                    path: 'add-location',
                    element: <AddBusinessLocation />
                }
            ]
        },
        {
            path: 'user',
            children: [
                {
                    path: 'details',
                    element: <UserDetails />
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
                    element: <UserRole />
                },
                {
                    path: 'role/add',
                    element: <AddUserCustomRole />
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
                    path: 'add',
                    element: <AddCustomersOrSuppliers />
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
                    path: 'budget-request',
                    element: <BudgetRequest />
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
                    element: <AddProductAndService />
                },
                {
                    path: 'services',
                    element: <Services />
                },
                {
                    path: 'services/add',
                    element: <AddProductAndService />
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
                    path: 'uom',
                    element: <UOM />
                },
                {
                    path: 'uom/add',
                    element: <AddUOM />
                }
            ]
        }
    ]
};
export default AdministratorRoutes;
