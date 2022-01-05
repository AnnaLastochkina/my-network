import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/redux-store";
import {DialogsPageType} from "../../Redux/store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    dialogsPage:DialogsPageType
    isAuth:boolean
}

let mapStateToProps = (state:ReduxStateType):mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        updateNewMessageBody: (body:string)=> {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: ()=>{
            dispatch(sendMessageCreator());
        }

    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;