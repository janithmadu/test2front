// assets
import { IconCategory, IconCirclePlus, IconPackage, IconSquareCheck, IconPercentage } from '@tabler/icons';

// constant
const icons = {
    IconCategory,
    IconCirclePlus,
    IconPackage,
    IconSquareCheck,
    IconPercentage
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const productAndService = {
    id: 'productAndService',
    title: 'Product | Service',
    type: 'group',
    children: [
        {
            id: 'productAndService1',
            title: 'Products',
            type: 'item',
            url: '/administrator/products-and-services/products',
            icon: icons.IconPackage,
            breadcrumbs: true
        },
        {
            id: 'productAndService2',
            title: 'Services',
            type: 'item',
            url: '/administrator/products-and-services/services',
            icon: icons.IconSquareCheck,
            breadcrumbs: true
        },
        {
            id: 'productAndService3',
            title: 'Category',
            type: 'item',
            url: '/administrator/products-and-services/category',
            icon: icons.IconCategory,
            breadcrumbs: true
        },
        {
            id: 'productAndService4',
            title: 'UOM',
            type: 'item',
            url: '/administrator/products-and-services/uom',
            icon: icons.IconPercentage,
            breadcrumbs: true
        }
    ]
};

export default productAndService;
