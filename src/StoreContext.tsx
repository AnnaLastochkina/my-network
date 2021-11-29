import React from 'react';
import {Store} from "redux";
import store from "./Redux/redux-store";

const StoreContext = React.createContext(store)

export const Provider = (props: { store: Store, children: any }) => {
    return (
        <StoreContext.Provider value = {props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;