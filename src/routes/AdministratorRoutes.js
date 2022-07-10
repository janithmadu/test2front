import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// administrator routing

const Business = Loadable(lazy(() => import('views/business')));
const CreateBusiness = Loadable(lazy(() => import('views/business/create')));
const AddBusinessUnit = Loadable(lazy(() => import('views/business/AddBusinessUnit')));

//User
const UserDetails = Loadable(lazy(() => import('views/user/UserDetails')));
const AddUser = Loadable(lazy(() => import('views/user/AddUser')));
const Users = Loadable(lazy(() => import('views/user/users')));

//partners
const Customers = Loadable(lazy(() => import('views/partners/customers')));
const Suppliers = Loadable(lazy(() => import('views/partners/suppliers')));
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
                    element: <Business />
                },
                {
                    path: 'create',
                    element: <CreateBusiness />
                },
                {
                    path: 'add-unit',
                    element: <AddBusinessUnit />
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
                    path: 'suppliers',
                    element: <Suppliers />
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
                }
            ]
        }
    ]
};
export default AdministratorRoutes;
