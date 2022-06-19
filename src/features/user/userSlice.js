import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteUser, getme, getUser, getUsers, updateUser, uploadAvatar } from './userAPI';
import { message} from 'antd';


const initialState = {
    getme: {},
    alluser:[],
    avatarstatus:'',
    userById:[],
    user:null
    
};

// export const Getme = createAsyncThunk( // génere les créateurs d'acttion Redux
//     'users/getme',
//     async () => {
//         const response = await getme();
//         // The value we return becomes the fulfilled action payload // La valeur que nous retournons devient la fulfilled action payload
//         return response.data;
//     }
// );
export const GetUser = createAsyncThunk(
    'users/getUsers',
    async () => {
        const response = await getUsers();
        return response.data
    }
)

export const DeleteUser = createAsyncThunk(
    'users/deleteUser',
    async (id) => {
        const response = await deleteUser(id);
        return response  
    }
);
export const GetUserById = createAsyncThunk(
    'users/getUserById',
    async (id) => {
        const response = await getUser(id);
        return response.data
    }
)


//update user
export const UpdateUser = createAsyncThunk(
    'users/updateUser',
    async (data) => {
        const response = await updateUser(data);

        return response;
    }
)

// uploadd user avatar 
export const UploadAvatar = createAsyncThunk(
    'users/avatar',
    async (data) => {
        const response = await uploadAvatar(data);

        return response;
    }
);


export const userSlice = createSlice({
    name: 'users', // Un nom, utilisé dans les types d’action
    initialState, // L’état initial du réducteur
    reducers: { // Un objet contenant des fonctions Redux «case reducers ». Les noms clés seront utilisés pour générer des actions.

    },

    extraReducers: (builder) => { // Ajouter des réducteurs pour des types d’action supplémentaires ici, et gérer l’état de chargement si nécessaire
        builder
            
            // Getme
        //    .addCase(Getme.pending, (state) => {
                 
        //     })
        //     .addCase(Getme.fulfilled, (state, action) => {
                
        //         state.getme = action.payload
        //         console.log('payload',action.payload)
        //     })

        //     .addCase(Getme.rejected, (state, action) => {
               
        //     })

        
            /// upload avaytar
            .addCase(UploadAvatar.pending, (state, action) => {
                state.avatarstatus = 'loading'
            })

            .addCase(UploadAvatar.fulfilled, (state, action) => {

                console.log(action.payload);

                if (action.payload.data) {
                    state.avatarstatus = 'success'
                    state.user = action.payload.data.data
                    message.success("image téléchargé avec succées")
                }
                else {

                    state.avatarstatus = 'failure'
                }
            })
            .addCase(UploadAvatar.rejected, (state, action) => {
            })


            // GetUser
            .addCase(GetUser.pending, (state) => {
                 
            })
            .addCase(GetUser.fulfilled, (state, action) => {
                console.log('payload',action.payload.data)
                state.alluser = action.payload.data
                
            })

            .addCase(GetUser.rejected, (state, action) => {
               
            })
            // DeleteUser
            .addCase(DeleteUser.pending, (state) => {
                 
            })
            .addCase(DeleteUser.fulfilled, (state, action) => {
                console.log('payload',action)
                state.alluser = state.alluser.filter(p =>p._id !== action.payload)
                
            })

            .addCase(DeleteUser.rejected, (state, action) => {
               
            })

            
            // GetuserByid
            .addCase(GetUserById.pending, (state) => {

            })
            .addCase(GetUserById.fulfilled, (state, action) => {
                console.log(action.payload);
                state.userById = action.payload.data  // Ajouter un utilisateur au tableau d’état
            })

            .addCase(GetUserById.rejected, (state, action) => {
            })
            // pending, fulfilled, rejected: créateur d'action Redux
    }
})

export const {} = userSlice.actions;

export const selectuser = (state) => state.users.getme;
export const selectusers = (state) => state.users.alluser;
export const selectuserById = (state) => state.users.userById;
export const selectavatarstatus = (state) => state.users.avatarstatus;
export default userSlice.reducer;