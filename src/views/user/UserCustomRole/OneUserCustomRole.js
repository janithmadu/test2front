import { useState, useEffect, useRef } from 'react';
// material-ui
import { Typography } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import {
    TextField,
    Grid,
    Button,
    Box,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Checkbox,
    InputLabel,
    MenuItem,
    Select,
    FormGroup
} from '@mui/material';
import { editRole, getOneRoles } from 'services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';
import Permission from 'component/permission';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogin } from 'services/api/auth';
import { SET_ROLE_NAME } from 'store/actions';
import OneDefaultRole from './OneDefaultRole';
import OneAdminRole from './OneAdminRole';

// ==============================|| SAMPLE PAGE ||============================== //

const OneUserCustomRole = () => {
    const theme = useTheme();
    const params = useParams();
    const navigate = useNavigate();
    const roleCheck = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        async function fetchData() {
            await getOneRoles(params.id)
                .then((res) => {
                    setAdmin(res.data.data.admin);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        fetchData();
    }, []);

    return <FormBox>{admin ? <OneAdminRole /> : <OneDefaultRole />}</FormBox>;
};

export default OneUserCustomRole;
