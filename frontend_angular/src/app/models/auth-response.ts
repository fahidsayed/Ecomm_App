
import { UserInfo } from "./userinfo";

export class AuthResponse {
    jwt:string="";
    userInfo:UserInfo=new UserInfo();
}
