import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentAccount:{
        id:1,
        username:'elchin',
        avatar:'https://preview.redd.it/hot-take-g5-as-a-transformation-is-amazing-and-luffy-being-v0-gksntq6pnchb1.jpg?width=640&crop=smart&auto=webp&s=0ae16feb011b924ee9e78fa260de650e69a17329'
    },
    accounts : []
}

const auth = createSlice({
    name:'auth',
    initialState,
    reducers:{
        _addAccounts:(state, action)=>{
            state.accounts.push(action.payload)
        },
        _removeAccount:( state, action )=>{
            state.accounts=state.accounts.filter(account=> account.id !== action.payload)
            if(state.currentAccount && action.payload == state.currentAccount.id){
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount:(state, action) =>{
            state.currentAccount =action.payload
        }
    }
})

export const {_addAccount, _setCurrentAccount, _removeAccount} = auth.actions
export default auth.reducer