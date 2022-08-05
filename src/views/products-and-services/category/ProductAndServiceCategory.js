//react
import { useEffect, useState } from 'react';

// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import { useTheme } from '@mui/material/styles';

import { Grid, Box, IconButton, Button } from '@mui/material';
import { IconSettings, IconPlus } from '@tabler/icons';
import { Link } from 'react-router-dom';
import { getAllItemCategory } from '../../../services/api';
import Permission from 'component/permission';

// ==============================|| BUSINESS PAGE ||============================== //

const ProductAndServiceCategory = () => {
    const theme = useTheme();

    const [category, setCategory] = useState([]);

    // fetch data
    async function fetchData() {
        await getAllItemCategory()
            .then((res) => {
                console.log(res.data.data);
                setCategory(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <Permission name="itemsCategoriesView">
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px', margin: 'auto' }}>
                        Category
                    </Typography>
                </Grid>
                <Permission name="itemsCategoriesAdd" type="button">
                    <Grid item xs={12} md={12}>
                        <Box sx={{ textAlign: 'right', marginTop: '20px' }}>
                            <Link to={`add`}>
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} startIcon={<IconPlus />}>
                                    Add Category
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Permission>

                {category.map((category, index) => (
                    <Grid item xs={12} md={4}>
                        <Link to={category._id}>
                            <SubCard>
                                <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                                    {category.name}
                                </Typography>
                                <Typography variant="body2">{category.itemType}</Typography>
                            </SubCard>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Permission>
    );
};

export default ProductAndServiceCategory;
