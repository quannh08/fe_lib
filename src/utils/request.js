import { getCookie } from '../helper/cookie';
import axios from '../services/customize_axios';

const API_DOMAIN = 'http://127.0.0.1:8000/';

export const get = async (path) => {
    const response = await axios.get(API_DOMAIN + path);
    const result = response.data;
    return result;
};
//fake api login
export const getUser = async (options) => {
    const response = await axios.post(API_DOMAIN + 'user/login/', options);
    const result = response.data;
    return result;
};

export const registerUser = async (options) => {
    const response = await axios.post(API_DOMAIN + 'user/register/', options);
    console.log(response);
    const result = response.data;
    return result;
};

export const getStore = async (path) => {
    const token = getCookie('token');
    console.log(token);
    console.log(API_DOMAIN + path);
    // Gửi request với header Authorization chứa token
    const response = await axios.get(API_DOMAIN + path, {
        headers: {
            Authorization: `Bearer: ${token}`,
        },
    });

    console.log(response);
    return response.data;
};

export const post = async (path, options) => {
    const response = await axios.post(API_DOMAIN + path, options);
    const result = await response.data;
    return result;
};

export const del = async (path) => {
    const response = await axios.delete(API_DOMAIN + path);
    const result = await response.data;
    return result;
};

export const oldPatch = async (path, options) => {
    const response = await fetch(API_DOMAIN + path, {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(options),
    });
    const result = await response.json();
    return result;
};

export const patch = async (path) => {
    const response = await axios.patch(API_DOMAIN + path);
    const result = await response.data;
    return result;
};
