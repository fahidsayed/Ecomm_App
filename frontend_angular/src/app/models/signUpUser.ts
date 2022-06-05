export class SignUpUser{
    firstName:string="";
    lastName:string="";
    email:string="";
    phone:string="";
    password:string="";
    //dateOfBirth:{day:Number,month:String,year:Number}={day:0,month:"",year:0};
    dateOfBirth:Date=new Date();
    dobDay:number=0;
    dobMonth:string="";
    dobYear:number=0;

    // constructor(firstName:string,lastName:string,email:string,
    //     phone:string,password:string,dateOfBirth:Date,
    //     dobDay:Number,dobMonth:string,dobYear:number){
    //     this.firstName=firstName;
    //     this.lastName=lastName;
    //     this.email=email;
    //     this.phone=phone;
    //     this.password=password;
    //     this.dateOfBirth=dateOfBirth;
    //     this.dobDay=dobDay;
    //     this.dobMonth=dobMonth;
    //     this.dobYear=dobYear;
    // }
}