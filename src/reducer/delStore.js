import { getBookStore } from '../services/bookService';

var store = [];
const getBook = async () => {
    store = await getBookStore();
};
getBook();
const delStore = (state = store, action) => {
    let newState = [...state];
    switch (action.type) {
        case 'DEL_BOOK':
            newState = state.filter((item) => item.id != action.id);
            return newState;
        default:
            return state;
    }
};

export default delStore;
