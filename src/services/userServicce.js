import { getUser, registerUser } from '../utils/request';

export const login = async (email, password) => {
    const result = await getUser({ email, password });
    return result;
};

export const register = async (username, email, password) => {
    const result = await registerUser({ username, email, password });
    return result;
};
