import { createSlice } from '@reduxjs/toolkit';

interface InterfaceInitialState {
    id: number,
    type: string,
    description: string,
    color: string,
    max_number: number,
    price: number,
    range: number,
    created_at: string,
    selectedNumbers: number[]
}
const initialState: InterfaceInitialState = {
    id: 0,
    type: "",
    description: "",
    color: "",
    max_number: 0,
    price: 0,
    range: 0,
    created_at: "",
    selectedNumbers: []
}
const GameSlice = createSlice({
    name: 'game',
    initialState,
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
        },
        addNumber(state, action) {
            const number: number = action.payload.number
            state.selectedNumbers.push(number)
            state.selectedNumbers.sort()
        },
    },
});

export const gameActions = GameSlice.actions;

export default GameSlice;