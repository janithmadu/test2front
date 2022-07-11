// assets
import { IconBox, IconCirclePlus, IconUserCheck } from '@tabler/icons';

// constant
const icons = {
    IconBox,
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
            title: 'Suppliers',
            type: 'item',
            url: '/administrator/partners/suppliers',
            icon: icons.IconBox,
            breadcrumbs: true
        }
      
    ]
};

export default partners;
