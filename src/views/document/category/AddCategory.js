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
import { createDocumentCategory, allDocumentCategory } from '../../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';
import { Link, useNavigate } from 'react-router-dom';
import Permission from 'component/permission';

// ==============================|| ADD DOCUMENT CATEGORY PAGE ||============================== //

const AddCategory = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [mainCategoryName, setMainCategoryName] = useState('');
    const [mainCategoryList, setMainCategoryList] = useState('');
    const [mainCategoryLists, setMainCategoryLists] = useState([]);

    const [subCategoryName, setSubCategoryName] = useState('');
    const [categoryType, setCategoryType] = useState('main');
    const [documentType, setDocumentType] = useState('Documents');
    const [templateType, setTemplateType] = useState('Document');

    const PostMainCategory = async () => {
        await createDocumentCategory({
            mainCategoryName: mainCategoryName,
            subCategoryName: '',
            documentType: documentType,
            type: 'main',
            userId: '2133',
            mainCategoryId: '',
            templateType:templateType
        });
        navigate(`../category`, true);
    };

    const PostSubCategory = async () => {
        await createDocumentCategory({
            mainCategoryName: '',
            subCategoryName: subCategoryName,
            documentType: documentType,
            type: 'sub',
            userId: '2133',
            mainCategoryId: mainCategoryList,
            templateType:templateType

        });
        navigate(`../category`, true);
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
                    Add Main Category
                </Typography>

               
                <Box sx={{ textAlign: 'center' }}>
                    <FormControl sx={{ marginTop: '20px' }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={documentType}
                            onChange={(e) => setDocumentType(e.target.value)}
                        >
                            <FormControlLabel value="Documents" control={<Radio />} label="Documents" />
                            <FormControlLabel value="Collections" control={<Radio />} label="Collections" />
                            <FormControlLabel value="Templates" control={<Radio />} label="Templates" />

                        </RadioGroup>
                    </FormControl>
                </Box>
                 {documentType==='Templates' && <Box sx={{ textAlign: 'center' }}>
                    <FormControl sx={{ marginTop: '20px' }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={templateType}
                            onChange={(e) => setTemplateType(e.target.value)}
                        >
                            <FormControlLabel value="Document" control={<Radio />} label="Document" />
                            <FormControlLabel value="Collection" control={<Radio />} label="Collection" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            }

                 <Box sx={{ textAlign: 'center' }}>
                    <FormControl sx={{ marginTop: '20px' }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="main"
                            onChange={(e) => setCategoryType(e.target.value)}
                        >
                            <FormControlLabel value="main" control={<Radio />} label="Main" />
                            <FormControlLabel value="sub" control={<Radio />} label="Sub" />
                        </RadioGroup>
                    </FormControl>
                </Box>

                {(() => {
                    switch (categoryType) {
                        case 'main':
                            return (
                                <>
                                    <TextField
                                        fullWidth
                                        id="fullWidth"
                                        label="Main Category Name"
                                        variant="outlined"
                                        margin="normal"
                                        onChange={(e) => setMainCategoryName(e.target.value)}
                                    />
                                    <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                        <Link to={`../category`}>
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
                                </>
                            );
                        case 'sub':
                            return (
                                <>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel id="demo-simple-select-label">Main Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Main category List"
                                            value={mainCategoryList}
                                            onChange={(e) => setMainCategoryList(e.target.value)}
                                        >
                                            {mainCategoryLists.map((category, index) => (
                                                <MenuItem value={category._id} key={index}>
                                                    {category.mainCategoryName}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <TextField
                                        fullWidth
                                        id="fullWidth"
                                        label="Sub Category Name"
                                        variant="outlined"
                                        margin="normal"
                                        onChange={(e) => setSubCategoryName(e.target.value)}
                                    />
                                    <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                        <Link to={`../category`}>
                                            <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                                cancel
                                            </Button>
                                        </Link>
                                        <Button
                                            variant="contained"
                                            sx={{ borderRadius: '6px', marginLeft: '15px' }}
                                            onClick={PostSubCategory}
                                        >
                                            Save
                                        </Button>
                                    </Box>
                                </>
                            );

                        default:
                            return <></>;
                    }
                })()}
            </FormBox>
        </Permission>
    );
};

export default AddCategory;
