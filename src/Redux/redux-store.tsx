import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";
import thunkMiddleWare  from 'redux-thunk';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth:authReducer
})

export type reduxStoreType = typeof store

export type ReduxStateType = ReturnType<typeof reducers>


let store = createStore(reducers, applyMiddleware(thunkMiddleWare))


export default store;