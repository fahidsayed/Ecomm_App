export class AutoLoginRequest{
    jwtToken:string|null=localStorage.getItem('ecomm_jwt');
}