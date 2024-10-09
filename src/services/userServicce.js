import { getUser } from '../utils/request';

export const login = async (email, password) => {
    const result = await getUser({ email, password });
    return result;
};

export const register = async (email, password) => {
    const result = await getUser({ email, password });
    return result;
};