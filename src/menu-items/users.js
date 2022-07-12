// assets
import { IconUserCircle, IconUserPlus, IconUsers } from '@tabler/icons';

// constant
const icons = {
    IconUserCircle,
    IconUserPlus,
    IconUsers
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const users = {
    id: 'users',
    title: 'Users',
    type: 'group',
    children: [
        {
            id: 'user2',
            title: 'Users',
            type: 'item',
            url: '/administrator/user',
            icon: icons.IconUsers,
            breadcrumbs: true
        },
        {
            id: 'user3',
            title: 'Role',
            type: 'item',
            url: '/administrator/user/role',
            icon: icons.IconUserPlus,
            breadcrumbs: true
        }
    ]
};

export default users;
