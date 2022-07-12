// assets
import { IconTruckDelivery, IconCirclePlus, IconUserCheck } from '@tabler/icons';

// constant
const icons = {
    IconTruckDelivery,
    IconCirclePlus,
    IconUserCheck
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const partners = {
    id: 'partners',
    title: 'Partners',
    type: 'group',
    children: [
        {
            id: 'partners1',
            title: 'Customers',
            type: 'item',
            url: '/administrator/partners/customers',
            icon: icons.IconUserCheck,
            breadcrumbs: true
        },
        {
            id: 'partners2',
            title: 'Vendors',
            type: 'item',
            url: '/administrator/partners/vendors',
            icon: icons.IconTruckDelivery,
            breadcrumbs: true
        }
    ]
};

export default partners;
