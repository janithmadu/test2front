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
import { getAllDocumentCategory,getAllSubDocumentCategory,getAllSubCategoryForDocument,oneDocumentCategory } from 'services/api';
import { useEffect, useState } from 'react';



// ==============================|| DOCUMENT PAGE ||============================== //

const DocumentOneSubCategory = () => {
    const theme = useTheme();
    const [categories, setCategories] = useState([]);
    const [documents, setDocument] = useState([]);
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

              await getAllSubCategoryForDocument(params.id)
            .then((res) => {
                console.log(res.data.data);
                setDocument(res.data.data)
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
                        <Link to={`../category/sub/edit/${params.id}`}>

                            <Box
                                sx={{
                                    background: theme.palette.primary.main,
                                    padding: '30px',
                                    borderRadius: '12px'
                                }}
                            >
                                <Typography variant="h3" color="white">
                                    {subCategoryName}
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
                            <Link to={`/documents/add/${params.id}`}>
                                <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }}>
                                    Add Document
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Permission>

              {documents.map((document, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Link to={`/documents/edit/${document._id}`}>
                            <SubCard>
                                <Typography variant="body1" sx={{ fontSize: '1rem', fonrWeight: '600' }}>
                                {document.referenceNo}
                                </Typography>
                                <Typography variant="body2">{document.documentName}</Typography>
                            </SubCard>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Permission>
    );
};

export default DocumentOneSubCategory;
