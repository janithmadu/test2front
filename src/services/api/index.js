import apiClient from './apiClient';

import config from '../../config';

export const createBusiness = (data) => {
    return apiClient.post(`/api/v1/business`, data);
};

export const createPost = (data) => {
    console.log(data);
    return apiClient.post('/api/v1/posts', data);
};

export const getLimitPosts = (limit) => {
    return apiClient.get(
        `/blogger/v3/blogs/${config.blogID}/posts?${limit ? `maxResults=${limit}&` : ''}fetchImages=true&key=${config.apiKey}`
    );
    //return apiClient.get(`https://www.googleapis.com/blogger/v3/blogs/8174258132304330866/posts?maxResults=10&fetchImages=true&key=AIzaSyDkDx5DazmKp67Vvt9d9ulmwlN1XaVcdd0`)
};

export const getOnePost = (id) => {
    return apiClient.get(`/blogger/v3/blogs/${config.blogID}/posts/${id}?fetchImages=true&key=${config.apiKey}`);
};

export const getOnePostSlug = (slug) => {
    return apiClient.get(`/api/v1/posts/slug/${slug}`);
};
