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
        },
        {
            id: 'partners3',
            title: 'Others',
            type: 'item',
            url: '/administrator/partners/others',
            icon: icons.IconCell,
            breadcrumbs: true
        }
    ]
};

export default partners;
