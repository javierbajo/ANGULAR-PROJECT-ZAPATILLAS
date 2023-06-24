export class Usuario{

    constructor(userName:string, userLastname:string, userEmail:string, userPhoneNumber:number, userAdress:string){

        this.userName = userName;
        this.userLastname = userLastname;
        this.userEmail = userEmail;
        this.userPhoneNumber = userPhoneNumber;
        this.userAdress = userAdress;
    }

    userName:string="";
    userLastname:string="";
    userEmail:string="";
    userPhoneNumber:number=0;
    userAdress:string="";

}