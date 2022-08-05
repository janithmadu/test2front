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
            id: 'businessView',
            title: 'Business',
            type: 'item',
            url: '/business',
            icon: icons.IconBuildingSkyscraper,
            breadcrumbs: true
        },

        {
            id: 'usersView',
            title: 'Users',
            type: 'item',
            url: '/user',
            icon: icons.IconUsers,
            breadcrumbs: true
        },

        {
            id: 'rolesView',
            title: 'Role',
            type: 'item',
            url: '/user/role',
            icon: icons.IconUserPlus,
            breadcrumbs: true
        }
    ]
};

export default administration;
