// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import { useTheme } from '@mui/material/styles';

import { Grid, Box, IconButton, Button } from '@mui/material';
import { IconSettings, IconPlus } from '@tabler/icons';
import { Link } from 'react-router-dom';
import Permission from 'component/permission';
import { getCollectionCategory } from 'services/api';
import { useEffect, useState } from 'react';



// ==============================|| DOCUMENT PAGE ||============================== //

const Collection = () => {
    const theme = useTheme();
    const [categories, setCategories] = useState([]);

    // fetch data
    async function fetchData() {
      

              await getCollectionCategory()
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
        <Permission name="documentsView">
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px', margin: 'auto' }}>
                        Collection
                    </Typography>
                </Grid>

                <Permission name="documentsAdd" type="button">
                    <Grid item xs={12} md={12}>
                        <Box sx={{ textAlign: 'right', marginTop: '20px' }}>
                            <Link to={`collection/category/add`}>
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }}>
                                    Add Main Category
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Permission>

              {categories.map((category, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Link to={`category/sub/${category._id}`}>
                            <SubCard>
                                <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                                    {category.mainCategoryName }
                                </Typography>
                                <Typography variant="body2">{category.type}</Typography>
                            </SubCard>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Permission>
    );
};

export default Collection;

