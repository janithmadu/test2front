import apiClient from './apiClient';

export const checkLogin = () => {
    return apiClient.get(`/api/v1/auth/me`);
};

export const updateProfile = (data) => {
    return apiClient.put(`/api/v1/auth/updatedetails`, data);
};

// export const checkLogin = async () => {
//     return await apiClient
//         .get(`/api/v1/auth/me`)
//         .then((res) => {
//             console.log(res.data);
//             console.log(res.data.user);
//             console.log(res.data.role);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };
