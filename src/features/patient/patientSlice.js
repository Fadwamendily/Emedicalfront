import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { register } from './patientApi';



const initialState = {

    errors: [],
    registeer: '',
    loginstatus: ''

};


export const RegistredPatient = createAsyncThunk(

    'patient/register',
    async (data) => {

        const response = await register(data);
        return response;

    }

);

export const laboSlice = createSlice({
    name: 'patients', // Un nom, utilisé dans les types d’action
    initialState, // L’état initial du réducteur
    reducers: { // Un objet contenant des fonctions Redux «case reducers ». Les noms clés seront utilisés pour générer des actions.

    },

    extraReducers: (builder) => { // Ajouter des réducteurs pour des types d’action supplémentaires ici, et gérer l’état de chargement si nécessaire
        builder
            .addCase(RegistredPatient.pending, (state) => {
                state.registeer = 'loading'
            })

            .addCase(RegistredPatient.fulfilled, (state, action) => {

                console.log(action.payload, 'oooooo');

                if (action.payload.status === 200) {
                    state.registeer = 'success'


                }

                else {
                    state.registeer = 'failure'
/*                     state.errors = action.payload.response.data.errors.details
 */                }
            })

            .addCase(RegistredPatient.rejected, (state, action) => {

            })


    }
})

export const { } = laboSlice.actions;

export const selectregister = (state) => state.patients.registeer;
export default laboSlice.reducer;