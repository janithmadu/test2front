import { useState, useRef } from 'react';
// material-ui
import { Typography } from '@mui/material';

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
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';
import { createBusiness } from '../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';

// ==============================|| BUDGET REQUEST PAGE ||============================== //

const ListBudgetRequest = () => {
    const theme = useTheme();

    const [collectionName, setCollectionName] = useState('');

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('#25778', '12.07.2018', 'pending', 24),
        createData('#25777', '19.07.2018', 'processing', 37),
        createData('#25775', '27.07.2018', 'complete', 24),
        createData('#25776', '06.07.2018', 'complete', 67),
        createData('#25778', '04.07.2018', 'pending', 49)
    ];

    const PostData = async () => {
        await createBusiness({
            name: businessName,
            address: businessAddress,
            contactName: contactName,
            email: email,
            userId: '2133',
            author: 'avishka dev'
        });
    };

    return (
        <Box
            sx={{
                padding: { xs: '10px', md: '0px 50px 0px 50px' },
                backgroundColor: '#fff',
                margin: 'auto'
            }}
        >
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ListBudgetRequest;
