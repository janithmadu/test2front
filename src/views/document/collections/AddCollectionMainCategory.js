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
import { createDocumentCategory, allDocumentCategory } from 'services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';
import { Link, useNavigate } from 'react-router-dom';
import Permission from 'component/permission';

// ==============================|| ADD DOCUMENT CATEGORY PAGE ||============================== //

const AddCollectionMainCategory = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [mainCategoryName, setMainCategoryName] = useState('');
    const [mainCategoryList, setMainCategoryList] = useState('');
    const [mainCategoryLists, setMainCategoryLists] = useState([]);

    const [subCategoryName, setSubCategoryName] = useState('');
    const [categoryType, setCategoryType] = useState('main');
    const [documentType, setDocumentType] = useState('Documents');
    const [templateType, setTemplateType] = useState('Collection');

    const PostMainCategory = async () => {
        await createDocumentCategory({
            mainCategoryName: mainCategoryName,
            subCategoryName: '',
            documentType: 'Collections',
            type: 'main',
            userId: '2133',
            mainCategoryId: '',
            templateType:templateType
        });
        navigate(`/documents/collection`, true);
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
        }
        fetchData();
    }, []);

    return (
        <Permission name="documentsCategoryAdd">
            <FormBox>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    Add Collection Main Category 
                </Typography>

             
                 

                
                               
                                    <TextField
                                        fullWidth
                                        id="fullWidth"
                                        label="Main Category Name"
                                        variant="outlined"
                                        margin="normal"
                                        onChange={(e) => setMainCategoryName(e.target.value)}
                                    />
                                    <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                        <Link to={`/documents/collection`}>
                                            <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                                cancel
                                            </Button>
                                        </Link>
                                        <Button
                                            variant="contained"
                                            sx={{ borderRadius: '6px', marginLeft: '15px' }}
                                            onClick={PostMainCategory}
                                        >
                                            Save
                                        </Button>
                                    </Box>
                               
                        
            </FormBox>
        </Permission>
    );
};

export default AddCollectionMainCategory;
