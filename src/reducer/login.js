import { getCookie } from '../helper/cookie';

const token = getCookie('token');
var check = token ? true : false;
const loginReducer = (state = check, action) => {
    switch (action.type) {
        case 'CHECK_LOGIN':
            return action.status;
        default:
            return state;
    }
};

export default loginReducer;
