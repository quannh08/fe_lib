const searchReducer = (state = '', action) => {
    switch (action.type) {
        case 'SEARCH':
            return action.option;
        default:
            return state;
    }
};

export default searchReducer;
