import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainLayout from 'layout/MainLayout';
//import { selectCurrentToken } from './authSlice';

const ProtectRouter = () => {
    const auth = useSelector((state) => state.auth);

    const token = auth.token;
    // const token = '6786879'
    const location = useLocation();
    return token ? <MainLayout /> : <Navigate to="/login" state={{ from: location }} replace />;
};
export default ProtectRouter;
