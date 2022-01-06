import React, {ComponentType} from "react";
import {connect} from "react-redux";

import {Navigate} from 'react-router-dom';
import {ReduxStateType} from "../Redux/redux-store";

type mapStateToPropsType = {
    isAuth: boolean
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        console.log(isAuth)
        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T}/>
    }
    const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    return connect(mapStateToProps)(RedirectComponent)

}