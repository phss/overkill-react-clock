const initialState = {
    time: new Date(),
};

export const timeKeeper = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CLOCK':
            return { time: action.time };
        default:
            return state;
    }
};
