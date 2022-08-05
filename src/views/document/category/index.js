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
import { getAllMainCategory } from 'services/api';
import Permission from 'component/permission';

// ==============================|| DOCUMENT CATEGORY PAGE ||============================== //

const Category = () => {
    const theme = useTheme();
    const [categories, setCategories] = useState([]);

    // fetch data
    async function fetchData() {
        await getAllMainCategory()
            .then((res) => {
                console.log(res.data.data);
                setCategories(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <Permission name="documentsCategoryView">
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px', margin: 'auto' }}>
                        Document Category
                    </Typography>
                </Grid>
                <Permission name="documentsCategoryAdd" type="button">
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

                <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                        marginTop: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        alignItems: 'center'
                    }}
                ></Grid>
                {categories.map((category, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Link to={category._id}>
                            <SubCard>
                                <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                                    {category.mainCategoryName }
                                </Typography>
                                <Typography variant="body2">{category.templateType}</Typography>
                            </SubCard>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Permission>
    );
};

export default Category;
