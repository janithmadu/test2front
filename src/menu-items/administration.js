// assets
import { IconSquarePlus, IconId, IconBuildingSkyscraper, IconUserPlus, IconUsers } from '@tabler/icons';

// constant
const icons = {
    IconSquarePlus,
    IconId,
    IconBuildingSkyscraper,
    IconUserPlus,
    IconUsers
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const administration = {
    id: 'Administration',
    title: 'administration',
    type: 'group',
    children: [
        {
            id: 'administration1',
            title: 'Business',
            type: 'item',
            url: '/administrator/business',
            icon: icons.IconBuildingSkyscraper,
            breadcrumbs: true
        },

        {
            id: 'administration4',
            title: 'Users',
            type: 'item',
            url: '/administrator/user',
            icon: icons.IconUsers,
            breadcrumbs: true
        },

        {
            id: 'administration5',
            title: 'Role',
            type: 'item',
            url: '/administrator/user/role',
            icon: icons.IconUserPlus,
            breadcrumbs: true
        }
    ]
};

export default administration;
