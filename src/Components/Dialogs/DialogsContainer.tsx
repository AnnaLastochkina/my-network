import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/redux-store";
import {DialogsPageType} from "../../Redux/store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";

type mapStateToPropsType = {
    dialogsPage:DialogsPageType

}

let mapStateToProps = (state:ReduxStateType):mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
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



export default compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)