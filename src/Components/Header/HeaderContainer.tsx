import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/Auth-reducer";
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
        axios.get<authResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })

            .then(response => {
                if (response.data.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header login = {this.props.login} isAuth={this.props.isAuth}/>
    }

}
type MapDispatchToPropsType = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null) => void
}

type mapStateToPropsType = {
    isAuth:boolean
    login:string| null
}
const mapStateToProps = (state:ReduxStateType):mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect<mapStateToPropsType,MapDispatchToPropsType,{},ReduxStateType>(mapStateToProps, {setAuthUserData})(HeaderContainer);