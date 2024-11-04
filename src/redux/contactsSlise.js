import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
        items:[]
    }

export const contactsSlise = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    reducers: {
        addContact: (state, action) => { state.items.push(action.payload) },
        deleteContact: (state, action) => {  state.items = state.items.filter((item) => item.id !== action.payload) },
    },
});

export const contactsReducer = contactsSlise.reducer;
export const { addContact, deleteContact } = contactsSlise.actions;