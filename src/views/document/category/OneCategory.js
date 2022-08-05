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
import { editDocumentCategory, allDocumentCategory, oneDocumentCategory } from '../../../services/api';
import { useTheme } from '@mui/material/styles';
import FormBox from 'ui-component/box/FormBox';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Permission from 'component/permission';
import usePermission from 'hooks/usePermission';

// ==============================|| ADD DOCUMENT CATEGORY PAGE ||============================== //

const OneCategory = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const params = useParams();
    const inputDisable = usePermission('documentsCategoryEdit');

    const [mainCategoryName, setMainCategoryName] = useState('');
    const [mainCategoryList, setMainCategoryList] = useState('');
    const [mainCategoryLists, setMainCategoryLists] = useState([]);

    const [subCategoryName, setSubCategoryName] = useState('');
    const [categoryType, setCategoryType] = useState('main');
    const [documentType, setDocumentType] = useState('');

    const PostMainCategory = async () => {
        await editDocumentCategory(params.id, {
            mainCategoryName: mainCategoryName,
            subCategoryName: '',
            documentType: documentType,
            type: 'main',
            userId: '2133',
            mainCategoryId: ''
        });
        navigate(`../category`, true);
    };

    const PostSubCategory = async () => {
        await editDocumentCategory(params.id, {
            mainCategoryName: '',
            subCategoryName: subCategoryName,
            documentType: documentType,
            type: 'sub',
            userId: '2133',
            mainCategoryId: mainCategoryList
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
        <Permission name="documentsCategoryView">
            <FormBox>
                <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    Category Details
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
                 <Box sx={{ textAlign: 'center' }}>
                    <FormControl sx={{ marginTop: '20px' }}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={categoryType}
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
                                        value={mainCategoryName}
                                        onChange={(e) => setMainCategoryName(e.target.value)}
                                        disabled={inputDisable}
                                    />
                                    <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                        <Permission name="documentsCategoryEdit" type="button">
                                            <Link to={`../category`}>
                                                <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                                    cancel
                                                </Button>
                                            </Link>
                                        </Permission>
                                        <Permission name="documentsCategoryEdit" type="button">
                                            <Button
                                                variant="contained"
                                                sx={{ borderRadius: '6px', marginLeft: '15px' }}
                                                onClick={PostMainCategory}
                                            >
                                                Save
                                            </Button>
                                        </Permission>
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
                                            disabled={inputDisable}
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
                                        value={subCategoryName}
                                        onChange={(e) => setSubCategoryName(e.target.value)}
                                        disabled={inputDisable}
                                    />
                                    <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                                        <Permission name="documentsCategoryEdit" type="button">
                                            <Link to={`../category`}>
                                                <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                                    cancel
                                                </Button>
                                            </Link>
                                        </Permission>
                                        <Permission name="documentsCategoryEdit" type="button">
                                            <Button
                                                variant="contained"
                                                sx={{ borderRadius: '6px', marginLeft: '15px' }}
                                                onClick={PostSubCategory}
                                            >
                                                Save
                                            </Button>
                                        </Permission>
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

export default OneCategory;
