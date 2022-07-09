// assets
import { IconSquarePlus, IconId, IconBuildingSkyscraper } from '@tabler/icons';

// constant
const icons = {
    IconSquarePlus,
    IconId,
    IconBuildingSkyscraper
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const business = {
    id: 'Business',
    title: 'Business',
    type: 'group',
    children: [
        {
            id: 'business1',
            title: 'Business Details',
            type: 'item',
            url: '/administrator/business/create',
            icon: icons.IconId,
            breadcrumbs: true
        },
        {
            id: 'business2',
            title: 'Business Units',
            type: 'item',
            url: '/administrator/business',
            icon: icons.IconBuildingSkyscraper,
            breadcrumbs: true
        },
        {
            id: 'business3',
            title: 'Add Business Units',
            type: 'item',
            url: '/administrator/business/add-unit',
            icon: icons.IconSquarePlus,
            breadcrumbs: true
        }
    ]
};

export default business;
