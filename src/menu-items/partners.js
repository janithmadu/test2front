// assets
import { IconTruckDelivery, IconCirclePlus, IconUserCheck, IconCell } from '@tabler/icons';

// constant
const icons = {
    IconTruckDelivery,
    IconCirclePlus,
    IconUserCheck,
    IconCell
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const partners = {
    id: 'partners',
    title: 'Partners',
    type: 'group',
    children: [
        {
            id: 'partnersCustomersView',
            title: 'Customers',
            type: 'item',
            url: '/partners/customers',
            icon: icons.IconUserCheck,
            breadcrumbs: true
        },
        {
            id: 'partnersVendorsView',
            title: 'Vendors',
            type: 'item',
            url: '/partners/vendors',
            icon: icons.IconTruckDelivery,
            breadcrumbs: true
        },
        {
            id: 'partnersOtherView',
            title: 'Others',
            type: 'item',
            url: '/partners/others',
            icon: icons.IconCell,
            breadcrumbs: true
        }
    ]
};

export default partners;
