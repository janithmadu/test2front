// material-ui
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import { useTheme } from '@mui/material/styles';
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
import { IconSettings, IconPlus, IconCloudUpload } from '@tabler/icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Permission from 'component/permission';
import { createDocument, uploadDocument, oneDocumentCategory } from 'services/api';
import { Viewer, Worker } from '@react-pdf-viewer/core';

// ==============================|| DOCUMENT PAGE ||============================== //

const UploadDocument = () => {
    const theme = useTheme();
    const params = useParams();
    const navigate = useNavigate();

    const [referenceNo, setReferenceNo] = useState('');
    const [mainCategory, setMianCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [remarks, setRemarks] = useState('');
    const [documentName, setDocumentName] = useState('');
    const [status, setStatus] = useState('');
    const [fileUrl, setFileUrl] = useState('');
    const [fileName, setFileName] = useState('');

     const [mainCategoryName, setMainCategoryName] = useState('');
    const [mainCategoryId, setMainCategoryId] = useState('');
    const [mainCategoryLists, setMainCategoryLists] = useState([]);

    const [subCategoryName, setSubCategoryName] = useState('');
    const [categoryType, setCategoryType] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [subCategoryId, setSubCategoryId] = useState('');

    const upload = async (files) => {
        console.log('uploading... ');
        await uploadDocument(files)
            .then((res) => {
                console.log(res.data);
                setFileUrl(res.data.file.uplaodFileName);
                setFileName(res.data.file.originalFilename);
            })
            .catch((err) => {
                console.log(err.response.data.errors);
            });
    };
    const postData = async () => {
        await createDocument({
            referenceNo: referenceNo,
            mainCategory: mainCategoryId,
            subCategory: subCategoryId,
            remarks: remarks,
            documentName: documentName,
            status: status,
            fileUrl: 'fileUrl',
            fileName: 'fileName',
            userId: '4356'
        });
        navigate(`/documents/sub/one/${params.id}`, true);
    };


  async function fetchData() {    
            await oneDocumentCategory(params.id)
                .then((res) => {
                    console.log(res.data.data);
                    setSubCategoryId(res.data.data._id)
                    setMainCategoryName(res.data.data.mainCategoryName);
                    setCategoryType(res.data.data.type);
                    setSubCategoryName(res.data.data.subCategoryName);
                    setMainCategoryId(res.data.data.mainCategoryId);
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
        <Permission name="documentsAdd">
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px', margin: 'auto' }}>
                        Upload Documents 
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        id="fullWidth"
                        label="Reference No"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => setReferenceNo(e.target.value)}
                    />

                    <TextField
                        fullWidth
                        id="fullWidth"
                        label="Document Name"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => setDocumentName(e.target.value)}
                    />

                    <TextField
                        fullWidth
                        id="fullWidth"
                        label="Main Category"
                        variant="outlined"
                        margin="normal"
                        value={mainCategoryName}
                        disabled
                    />

                    <TextField
                        fullWidth
                        id="fullWidth"
                        label="Sub Category"
                        variant="outlined"
                        margin="normal"
                        value={subCategoryName}
                        disabled                        
                    />


                        <Button
                            variant="contained"
                            component="label"
                            sx={{ borderRadius: '6px', marginTop: '20px' }}
                            startIcon={<IconCloudUpload />}
                        >
                            Upload
                            <input
                                hidden
                                accept="application/pdf"
                                type="file"
                                onClick={(event) => {
                                    upload(event.target.files);
                                }}
                            />
                        </Button>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Remarks"
                        multiline
                        rows={4}
                        name="Remarks"
                        onChange={(e) => setRemarks(e.target.value)}
                    />

                    <FormControl fullWidth margin="normal">
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="status"
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <MenuItem value="tset">Pending</MenuItem>
                            <MenuItem value="tset">Work In Progress</MenuItem>
                            <MenuItem value="tset">Complete</MenuItem>
                            <MenuItem value="tset">Reject</MenuItem>
                            <MenuItem value="tset">Approved</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                        <Link to={`/documents/sub/one/${params.id}`}>
                            <Button variant="outlined" sx={{ borderRadius: '6px' }}>
                                cancel
                            </Button>
                        </Link>
                        <Button variant="contained" sx={{ borderRadius: '6px', marginLeft: '15px' }} onClick={postData}>
                            Save
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    {fileUrl && (
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                            <Viewer fileUrl={`${process.env.REACT_APP_API_URL}/api/v1/upload/${fileUrl}`} />
                        </Worker>
                    )}{' '}
                </Grid>
            </Grid>
        </Permission>
    );
};

export default UploadDocument;
