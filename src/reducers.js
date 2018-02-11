const initialState = {
    time: new Date(),
};

export const timeKeeper = (state = initialState, { type, time }) => {
    switch (type) {
        case 'UPDATE_CLOCK':
            return { time };
        default:
            return state;
    }
};
