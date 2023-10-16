import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentAccount:{
        id:1,
        username:'elchin',
        fullName:'#gonagov_l',
        avatar:'https://preview.redd.it/hot-take-g5-as-a-transformation-is-amazing-and-luffy-being-v0-gksntq6pnchb1.jpg?width=640&crop=smart&auto=webp&s=0ae16feb011b924ee9e78fa260de650e69a17329'
    },
    accounts : [
        {
            id:1,
            username:'elchin',
            fullName:'#gonagov_l',
            avatar:'https://preview.redd.it/hot-take-g5-as-a-transformation-is-amazing-and-luffy-being-v0-gksntq6pnchb1.jpg?width=640&crop=smart&auto=webp&s=0ae16feb011b924ee9e78fa260de650e69a17329'
        },
        {
            id:1,
            username:'luffy',
            fullName:'#monkey.d.luffy',
            avatar:'https://lh3.googleusercontent.com/ogw/AKPQZvwakGwK_hL40s25N--pBPdu5yYRNedI4Z5nLPPBbw=s32-c-mo'
        },
    ]

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