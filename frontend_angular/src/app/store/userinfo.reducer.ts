import { createReducer,on } from '@ngrx/store';
import {UserInfo} from '../models/userinfo';
import * as UserInfoActions from './userinfo.actions';
import { getUserInfo,updateUserInfo } from './userinfo.actions';

// export interface State{
//     userInfo:UserInfo;
// }

export const initialState={
    userInfo:{firstName:'',lastName:'',email:'',phone:''},
}

const newState={
    userInfo:{firstName:'foid',lastName:'main',email:'whatwhat@what.com',phone:'9945394843'},
}

export const userInfoReducer = createReducer(initialState,
    on(getUserInfo,(state=> newState)));

// export function UserInfoReducer(state:State=initialState,action=UserInfoActions.){

// }