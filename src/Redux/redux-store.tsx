import {combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer
})

export type reduxStoreType = typeof store

export type ReduxStateType = ReturnType<typeof reducers>


 let store = createStore(reducers)



export default store;