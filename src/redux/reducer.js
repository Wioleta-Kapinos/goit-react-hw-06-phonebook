import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContact } from "./actions";

const initialStateContacts = [];

export const contactsReducer = createReducer(initialStateContacts, {
    [addContact] : (state, action) => {
        return [...state, action.payload];
    },
    [deleteContact]: (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
    }},
)

const initialStateFilter = "";

export const filterReducer = createReducer(initialStateFilter, {
    [filterContact] : (state, action) => (state = action.payload),
})