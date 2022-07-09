// assets
import { IconTruck, IconCirclePlus, IconUserCheck } from '@tabler/icons';

// constant
const icons = {
    IconTruck,
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
            title: 'customers',
            type: 'item',
            url: '/administrator/partners/customers',
            icon: icons.IconUserCheck,
            breadcrumbs: true
        },
        {
            id: 'partners2',
            title: 'suppliers',
            type: 'item',
            url: '/administrator/partners/suppliers',
            icon: icons.IconTruck,
            breadcrumbs: true
        },
        {
            id: 'partners3',
            title: 'Add partners',
            type: 'item',
            url: '/administrator/partners/add',
            icon: icons.IconCirclePlus,
            breadcrumbs: true
        }
    ]
};

export default partners;
