import { get, getStore, post, patch } from '../utils/request';

export const getProductList = async () => {
    const result = await get('books/');
    return result;
};
// export const getCategory = async () => {
//     const result = await get('category');
//     return result;
// };

export const getBookDetail = async (id) => {
    const result = await get(`books/${id}`);
    return result;
};
//AUthor
export const getAuthor = async () => {
    const result = await get('authors/');
    return result;
};
export const getAuthorById = async (id) => {
    const result = await get(`authors/${id}`);
    return result;
};

export const createBookStore = async (options) => {
    const result = await post('read-history/', options);
    return result;
};

export const getBookStore = async () => {
    const result = await getStore('read-history/');
    return result;
};

export const postReadHistory = async (options) => {
    const result = await post('read-history/', options);
    return result;
};

export const patchReadCount = async (id) => {
    const result = await patch(`books/${id}/increase-read-count/`);
    return result;
};

// export const delBookStore = async (id) => {
//     const result = await del(`store/${id}`);
//     return result;
// };
