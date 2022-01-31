import { createSlice } from '@reduxjs/toolkit';

const GameSlice = createSlice({
    name: 'cart',
    initialState: {
        id: null,
        type: null,
        color: null,
        max_number: null
    },
    reducers: {
        changeGame(state, action) {
            state.id = action.payload.id;
            state.type = action.payload.type;
            state.color = action.payload.color;
            state.max_number = action.payload.max_number;
        }
    },
});

export const gameActions = GameSlice.actions;

export default GameSlice;