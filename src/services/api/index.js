import apiClient from './apiClient';

import config from '../../config';

export const login = (data) => {
    return apiClient.post(`/api/v1/auth/login`, data);
};

export const getHeadOffice = () => {
    return apiClient.get('/api/v1/business/head-office');
};

export const getOneHeadOffice = (id) => {
    return apiClient.get(`/api/v1/business/head-office/${id}`);
};

export const getAllBusiness = () => {
    return apiClient.get('/api/v1/business');
};

export const getOneBusiness = (id) => {
    return apiClient.get(`/api/v1/business/businessId/${id}`);
};

export const createBusiness = (data) => {
    return apiClient.post(`/api/v1/business`, data);
};

export const editBusiness = (id, data) => {
    return apiClient.put(`/api/v1/business/businessId/${id}`, data);
};

export const createLocation = (data) => {
    return apiClient.post(`/api/v1/business/location`, data);
};

//get all business for location
export const getOneBusinessForLocations = (id) => {
    return apiClient.get(`/api/v1/business/location/businessId/${id}`);
};

//get All Customers
export const getAllLocation = () => {
    return apiClient.get('/api/v1/business/location');
};

//get single location
export const getOneLocation = (id) => {
    return apiClient.get(`/api/v1/business/location/${id}`);
};

export const editLocation = (id, data) => {
    return apiClient.put(`/api/v1/business/location/${id}`, data);
};

//get business for units
export const getBusinessForUnits = (id) => {
    return apiClient.get(`/api/v1/business/unit/${id}`);
};

//get business for units
export const getLocationForUnits = (id) => {
    return apiClient.get(`/api/v1/business/location/unit/${id}`);
};

//get business for units
export const getHeadOffliceForUnits = (id) => {
    return apiClient.get(`/api/v1/business/head-office/unit/${id}`);
};

//get business for one units
export const getOneBusinessForUnit = (id) => {
    return apiClient.get(`/api/v1/business/unit/unitId/${id}`);
};

//one business for unit update
export const editOneBusinessForUnit = (id, data) => {
    return apiClient.put(`/api/v1/business/unit/unitId/${id}`, data);
};

export const createBusinessUnit = (data) => {
    return apiClient.post(`/api/v1/business/unit`, data);
};

export const getAllBusinessUnit = () => {
    return apiClient.get('/api/v1/business/unit');
};

export const createPost = (data) => {
    return apiClient.post('/api/v1/posts', data);
};

//customers
export const getAllCustomers = () => {
    return apiClient.get('/api/v1/partner/customers');
};

//vendors
export const getAllVendors = () => {
    return apiClient.get('/api/v1/partner/vendors');
};

//others
export const getAllOthers = () => {
    return apiClient.get('/api/v1/partner/others');
};

//create partner - customer or vendor or other
export const createPartner = (data) => {
    return apiClient.post('/api/v1/partner', data);
};

//update partner - customer or vendor or other
export const editPartner = (id, data) => {
    return apiClient.put(`/api/v1/partner/partnerId/${id}`, data);
};

//get single patrner
export const getOnePartner = (id) => {
    return apiClient.get(`/api/v1/partner/partnerId/${id}`);
};

//get all services
export const getAllServices = () => {
    return apiClient.get('/api/v1/item/services');
};

//get all products
export const getAllProducts = () => {
    return apiClient.get('/api/v1/item/products');
};

//create service - service or product
export const createItem = (data) => {
    return apiClient.post('/api/v1/item', data);
};

//get single items
export const getOneItem = (id) => {
    return apiClient.get(`/api/v1/item/itemId/${id}`);
};

//update item
export const editItem = (id, data) => {
    return apiClient.put(`/api/v1/item/itemId/${id}`, data);
};

//Delete item
export const deleteItem = (id) => {
    return apiClient.delete(`/api/v1/item/itemId/${id}` );
};


//get all items UOM
export const getAllItemUOM = () => {
    return apiClient.get('/api/v1/uom');
};

//create items UOM
export const createItemUOM = (data) => {
    return apiClient.post('/api/v1/uom', data);
};

//get single items
export const getOneItemUOM = (id) => {
    return apiClient.get(`/api/v1/uom/uomId/${id}`);
};

//update item - OUM
export const editItemUOM = (id, data) => {
    return apiClient.put(`/api/v1/uom/uomId/${id}`, data);
};

//create items category
export const createItemCategory = (data) => {
    return apiClient.post('/api/v1/item/category', data);
};

//get all items category
export const getAllItemCategory = () => {
    return apiClient.get('/api/v1/item/category');
};

//get single items
export const getOneItemCategory = (id) => {
    return apiClient.get(`/api/v1/item/category/${id}`);
};

//update item
export const editItemCategory = (id, data) => {
    return apiClient.put(`/api/v1/item/category/${id}`, data);
};

//get all service catrgory items
export const getAllItemCategoryServices = (id) => {
    return apiClient.get(`/api/v1/item/category/filter/services`);
};

//get all products category items
export const getAllItemCategoryProducts = (id) => {
    return apiClient.get(`/api/v1/item/category/filter/products`);
};

//Create user
export const createUser = (data) => {
    return apiClient.post(`/api/v1/users`, data);
};

//update item
export const editUser = (id, data) => {
    return apiClient.put(`/api/v1/users/${id}`, data);
};

//get user
export const getUser = (id) => {
    return apiClient.get(`/api/v1/users/${id}`);
};

//Create Role
export const createRole = (data) => {
    return apiClient.post(`/api/v1/role`, data);
};

//get all roles
export const getAllRoles = () => {
    return apiClient.get('/api/v1/role');
};

//get one role
export const getOneRoles = (id) => {
    return apiClient.get(`/api/v1/role/${id}`);
};

//update item
export const editRole = (id, data) => {
    console.log(id, data);
    return apiClient.put(`/api/v1/role/${id}`, data);
};

//get user
export const getAllUsers = (id) => {
    return apiClient.get(`/api/v1/users`);
};

//All Document Category
export const allDocumentCategory = () => {
    return apiClient.get(`/api/v1/document/category`);
};

//All Document Category
export const oneDocumentCategory = (id) => {
    return apiClient.get(`/api/v1/document/category/${id}`);
};

//All Document Category
export const editDocumentCategory = (id, data) => {
    return apiClient.put(`/api/v1/document/category/${id}`, data);
};

//Create Document Category
export const createDocumentCategory = (data) => {
    return apiClient.post(`/api/v1/document/category`, data);
};

//Create Document Collection
export const createDocumentCollection = (data) => {
    return apiClient.post(`/api/v1/document/collection`, data);
};

//Create Document Collection
export const createDocumentCollectionTemplate = (data) => {
    return apiClient.post(`/api/v1/document/collection/template`, data);
};

//All Document
export const allDocument = () => {
    return apiClient.get(`/api/v1/document`);
};

//get one Document
export const oneDocument = (id) => {
    return apiClient.get(`/api/v1/document/documentId/${id}`);
};

//Create Document
export const createDocument = (data) => {
    return apiClient.post(`/api/v1/document`, data);
};



//get all Document category
export const getAllDocumentCategory = () => {
    return apiClient.get(`/api/v1/document/category/type/document`);
};


//get all Document category
export const getAllSubDocumentCategory = (id) => {
    return apiClient.get(`/api/v1/document/category/type/document/${id}`);
};


//get all Main category
export const getAllMainCategory = () => {
    return apiClient.get(`/api/v1/document/category/type/main`);
};



//Create Document
export const editDocument = (id, data) => {
    console.log(id, data);
    return apiClient.put(`/api/v1/document/documentId/${id}`, data);
};


//Create Document
export const getAllSubCategoryForDocument = (id) => {
    console.log(id);
    return apiClient.get(`/api/v1/document/type/document/${id}`);
};



//get all Document category
export const getCollectionCategory = () => {
    return apiClient.get(`/api/v1/document/category/type/collection`);
};

//get all Document category
export const getCollectionSubCategory = (id) => {
    return apiClient.get(`/api/v1/document/category/type/collection/sub/${id}`);
};



export const uploadDocument = (files) => {
    console.log(files[0]);
    const formData = new FormData();
    formData.append('upload', files[0]);
    console.log(formData);

    return apiClient.post(`/api/v1/upload`, formData);
};
