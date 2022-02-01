import { createSlice } from '@reduxjs/toolkit';

const GameSlice = createSlice({
    name: 'game',
    initialState: {
        id: null,
        type: null,
        description: null,
        color: null,
        max_number: null,
        price: 0,
        range: 0,
        created_at: null
    },
    reducers: {
        changeGame(state, action) {
            state.id = action.payload.id;
            state.type = action.payload.type;
            state.color = action.payload.color;
            state.description = action.payload.description;
            state.max_number = action.payload.max_number;
            state.price = action.payload.price;
            state.range = action.payload.range;
            state.created_at = action.payload.created_at;
        }
    },
});

export const gameActions = GameSlice.actions;

export default GameSlice;