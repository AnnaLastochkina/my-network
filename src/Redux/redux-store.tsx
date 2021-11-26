import {combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import {DialogsPageType, ProfilePageType} from "./store";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebarPage:sidebarReducer
})




 let store = createStore(reducers)
export type reduxStoreType = typeof store

export type ReduxStateType = ReturnType<typeof reducers>

export default store;