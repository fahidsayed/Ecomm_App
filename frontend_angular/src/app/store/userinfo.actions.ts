import { Action } from "@ngrx/store";
import { UserInfo } from "../models/userinfo";
import { createAction } from "@ngrx/store";

export const getUserInfo= createAction("[UserInfo] Get UserInfo");
export const updateUserInfo= createAction("[UserInfo] Update UserInfo");

// export const GET_USERINFO="[UserInfo] Get UserInfo" ;
// export const UPDATE_USERINFO="[UserInfo] Update UserInfo";

// export class GetUserInfo implements Action {
//     readonly type=GET_USERINFO;
//     constructor(public payload:UserInfo){

//     }
// }
// export class UpdateUserInfo implements Action {
//     readonly type=UPDATE_USERINFO;
//     constructor(public payload:UserInfo){
    
//         }    
    
// }

// export type UserInfoListActions=GetUserInfo|UpdateUserInfo;