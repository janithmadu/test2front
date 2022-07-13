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
            id: 'business2',
            title: 'Businesses',
            type: 'item',
            url: '/administrator/business',
            icon: icons.IconBuildingSkyscraper,
            breadcrumbs: true
        },
        {
            id: 'business3',
            title: 'Add Business ',
            type: 'item',
            url: '/administrator/business/add',
            icon: icons.IconSquarePlus,
            breadcrumbs: true
        }
    ]
};

export default business;
