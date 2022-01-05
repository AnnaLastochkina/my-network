import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/Auth-reducer";
import {ReduxStateType} from "../../Redux/redux-store";



type authResponseType = {
        data:{id: number
            email: string
            login: string
            resultCode: number
            messages: Array<string>}
}

class HeaderContainer extends React.Component<mapStateToPropsType & MapDispatchToPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header login = {this.props.login} isAuth={this.props.isAuth}/>
    }

}
type MapDispatchToPropsType = {
    getAuthUserData:()=> void
}

type mapStateToPropsType = {
    isAuth:boolean
    login:string| null
}
const mapStateToProps = (state:ReduxStateType):mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect<mapStateToPropsType,MapDispatchToPropsType,{},ReduxStateType>(mapStateToProps, {getAuthUserData})(HeaderContainer);