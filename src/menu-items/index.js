import dashboard from './dashboard';
import pages from './pages';
import bussiness from './bussiness';
import users from './users';
import partners from './partners';
import documents from './documents';
import productAndService from './productAndService';
import other from './other';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    administratorItems: [dashboard, bussiness, users, partners, documents, productAndService, other],
    managerItems: [dashboard, documents, productAndService, other]
};

export default menuItems;
