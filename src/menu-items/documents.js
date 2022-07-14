// assets
import { IconFileDescription, IconFileArrowRight, IconCategory, IconCircles } from '@tabler/icons';

// constant
const icons = {
    IconFileDescription,
    IconFileArrowRight,
    IconCategory,
    IconCircles
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const documents = {
    id: 'documents',
    title: 'Documents',
    type: 'group',
    children: [
        {
            id: 'documents1',
            title: 'Category',
            type: 'item',
            url: '/administrator/documents/category',
            icon: icons.IconCategory,
            breadcrumbs: true
        },
        {
            id: 'documents2',
            title: 'Collections',
            type: 'item',
            url: '/administrator/documents/collection',
            icon: icons.IconCircles,
            breadcrumbs: true
        },

        {
            id: 'documents3',
            title: 'Documents',
            type: 'item',
            url: '/administrator/documents',
            icon: icons.IconFileDescription,
            breadcrumbs: true
        }
    ]
};

export default documents;
