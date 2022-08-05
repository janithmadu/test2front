// assets
import { IconFileDescription, IconFileArrowRight, IconCategory, IconCircles,IconTemplate } from '@tabler/icons';

// constant
const icons = {
    IconFileDescription,
    IconFileArrowRight,
    IconCategory,
    IconCircles,
    IconTemplate
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const documents = {
    id: 'documents',
    title: 'Documents',
    type: 'group',
    children: [
        {
            id: 'documentsView',
            title: 'Documents',
            type: 'item',
            url: '/documents',
            icon: icons.IconFileDescription,
            breadcrumbs: true
        },
          
        
        {
            id: 'documentsCollectionsView',
            title: 'Collections',
            type: 'item',
            url: '/documents/collection',
            icon: icons.IconCircles,
            breadcrumbs: true
        }
         
    ]
};

export default documents;
