import {SET_USER} from '../actions/actionType';

const INTIAL_STATE = {
    user:null,
};

const userReducer = (state = INTIAL_STATE,action) => {
    switch(action.type){
        case SET_USER:
        return{
            ...state,
            user:action.user,
        };
        default :
        return state;
    }

};

export default userReducer;