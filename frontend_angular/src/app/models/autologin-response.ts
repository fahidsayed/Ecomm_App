import { UserInfo } from "./userinfo";

export class AutoLoginResponse{
    validToken:boolean=false;
    userInfo:UserInfo=new UserInfo();
}