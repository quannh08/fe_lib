import { combineReducers } from 'redux';

import loginReducer from './login';
import delStore from './delStore';
import searchReducer from './search';

const allReducer = combineReducers({
    loginReducer,
    delStore,
    searchReducer,
});

export default allReducer;
