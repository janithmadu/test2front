import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainLayout from 'layout/MainLayout';
//import { selectCurrentToken } from './authSlice';

const ProtectRouter = () => {
const token = "dfdgdfh";
const location = useLocation();
return token ? <MainLayout/>: <Navigate to="/login" state={{ from: location }} replace />;
};
export default ProtectRouter;


