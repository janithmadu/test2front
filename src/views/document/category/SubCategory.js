// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import { useTheme } from '@mui/material/styles';

import { Grid, Box, IconButton, Button } from '@mui/material';
import { IconSettings, IconPlus } from '@tabler/icons';
import { Link,useParams } from 'react-router-dom';
import Permission from 'component/permission';
import { getAllSubDocumentCategory ,oneDocumentCategory} from 'services/api';
import { useEffect, useState } from 'react';



// ==============================|| DOCUMENT PAGE ||============================== //

const SubCategory = () => {
    const theme = useTheme();
    const [categories, setCategories] = useState([]);
   const [mainCategoryName, setMainCategoryName] = useState('');
    const [mainCategoryList, setMainCategoryList] = useState('');
    const [mainCategoryLists, setMainCategoryLists] = useState([]);

    const [subCategoryName, setSubCategoryName] = useState('');
    const [categoryType, setCategoryType] = useState('');
    const [documentType, setDocumentType] = useState('');
    const params = useParams();

    // fetch data
    async function fetchData() {
      

              await getAllSubDocumentCategory(params.id)
            .then((res) => {
                console.log(res.data.data);
                setCategories(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });

  await oneDocumentCategory(params.id)
                .then((res) => {
                    console.log(res.data.data);
                    setMainCategoryName(res.data.data.mainCategoryName);
                    setCategoryType(res.data.data.type);
                    setSubCategoryName(res.data.data.subCategoryName);
                    setMainCategoryList(res.data.data.mainCategoryId);
                    setDocumentType(res.data.data.documentType);
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
                        <Link to={`../category/main/edit/${params.id}`}>
                            <Box
                                sx={{
                                    background: theme.palette.primary.main,
                                    padding: '30px',
                                    borderRadius: '12px'
                                }}
                            >
                                <Typography variant="h3" color="white">
                                    {mainCategoryName}
                                </Typography>
                                <Typography variant="body2" color="white">
                                    {categoryType}
                            </Typography>

                            </Box>
                        </Link>
                    
                </Grid>
                <Permission name="documentsAdd" type="button">
                    <Grid item xs={12} md={12}>
                        <Box sx={{ textAlign: 'right', marginTop: '20px' }}>
                            <Link to={`../category/sub/add/${params.id}`}>
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }}>
                                    Add Sub Categoryt
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Permission>

              {categories.map((category, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Link to={`../sub/one/${params.id}`}>
                            <SubCard>
                                <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                                    {category.mainCategoryName || category.subCategoryName}
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

export default SubCategory;
