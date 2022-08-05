import { useState, useEffect, useRef } from 'react';
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
    Select
} from '@mui/material';
import { createDocumentCategory, allDocumentCategory,oneDocumentCategory } from 'services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';
import { Link, useNavigate,useParams } from 'react-router-dom';
import Permission from 'component/permission';

// ==============================|| ADD DOCUMENT CATEGORY PAGE ||============================== //

const AddCollectionSubCategory = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const params = useParams();

    const [mainCategoryName, setMainCategoryName] = useState('');
    const [mainCategoryList, setMainCategoryList] = useState('');
    const [mainCategoryLists, setMainCategoryLists] = useState([]);

    const [subCategoryName, setSubCategoryName] = useState('');
    const [categoryType, setCategoryType] = useState('main');
    const [documentType, setDocumentType] = useState('Documents');
    const [templateType, setTemplateType] = useState('Document');

    const PostCategory = async () => {
        await createDocumentCategory({
            mainCategoryName: mainCategoryName,
            subCategoryName: subCategoryName,
            documentType: 'Collections',
            type: 'sub',
            userId: '2133',
            mainCategoryId: params.id,
            templateType:templateType
        });
        navigate(`/documents/collection/category/sub/${params.id}`, true);
    };

  

    useEffect(() => {
        async function fetchData() {
            await allDocumentCategory()
                .then((res) => {
                    console.log(res.data.data);
                    setMainCategoryLists(res.data.data);
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
        fetchData();
    }, []);

    return (
        <Permission name="documentsCategoryAdd">
            <FormBox>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    Add Collection Sub Category 
                </Typography>

             
              
                                    <TextField
                                        fullWidth
                                        id="fullWidth"
                                        label="Main Category Name"
                                        variant="outlined"
                                        margin="normal"
                                        value={mainCategoryName}
                                        disabled
                                    />
                                    <TextField
                                        fullWidth
                                        id="fullWidth"
                                        label="Sub Category Name"
                                        variant="outlined"
                                        margin="normal"
                                        onChange={(e) => setSubCategoryName(e.target.value)}
                                    />
                                    <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                        <Link to={`/documents/collection/category/sub/${params.id}`}>
                                            <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                                cancel
                                            </Button>
                                        </Link>
                                        <Button
                                            variant="contained"
                                            sx={{ borderRadius: '6px', marginLeft: '15px' }}
                                            onClick={PostCategory}
                                        >
                                            Save
                                        </Button>
                                    </Box>
                               
                        
            </FormBox>
        </Permission>
    );
};

export default AddCollectionSubCategory;
