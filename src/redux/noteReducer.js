import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: [
        {id:1, text:"To implement the update function in your Redux slice for managing notes", createdOn: new Date().toLocaleString()},
        {id:2, text:"To implement the update function in your Redux slice for managing notes", createdOn: new Date().toLocaleString()},
    ],
}

const noteSlice = createSlice({
    name: 'note',
    initialState: initialState,
    reducers:{
        setInitialState:(state, action) => {
            state.notes = [...action.payload]
        },

        //adding a note
        add:(state, action) => {
            state.notes.push({
                id: state.notes.length + 1,
                text: action.payload,
                createdOn: new Date().toLocaleString(),
            })
        },

        //delete a note
        delete:(state, action) => {
            state.notes.splice(action.payload, 1);
        },

        //update a note
        update:(state, action) => {
            const {id, text} = action.payload;
            const noteToUpdate = state.notes.find((note) => note.id === id);
            if(noteToUpdate){
                noteToUpdate.text = text;
            }
        }
    }
});

export const noteReducer = noteSlice.reducer;
export const noteAction = noteSlice.actions;