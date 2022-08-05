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
    title: 'Items',
    type: 'group',
    children: [
        {
            id: 'productsView',
            title: 'Products',
            type: 'item',
            url: '/products-and-services/products',
            icon: icons.IconPackage,
            breadcrumbs: true
        },
        {
            id: 'servicesView',
            title: 'Services',
            type: 'item',
            url: '/products-and-services/services',
            icon: icons.IconSquareCheck,
            breadcrumbs: true
        },
        {
            id: 'itemsCategoriesView',
            title: 'Category',
            type: 'item',
            url: '/products-and-services/category',
            icon: icons.IconCategory,
            breadcrumbs: true
        },
        {
            id: 'itemsUomView',
            title: 'UOM',
            type: 'item',
            url: '/products-and-services/uom',
            icon: icons.IconPercentage,
            breadcrumbs: true
        }
    ]
};

export default productAndService;
