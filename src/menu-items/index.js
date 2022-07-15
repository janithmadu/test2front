import dashboard from './dashboard';
import pages from './pages';
import bussiness from './bussiness';
import users from './users';
import partners from './partners';
import documents from './documents';
import productAndService from './productAndService';
import administration from './administration';

import other from './other';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    administratorItems: [administration, productAndService, partners, documents],
    managerItems: [dashboard, documents, productAndService, other]
};

export default menuItems;
