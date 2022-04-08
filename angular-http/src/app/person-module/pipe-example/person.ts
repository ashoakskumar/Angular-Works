export interface Person{
    id:number;
    name:string;
    dob:Date;
    gender:boolean;
    location:string;
    address:Address[];
}
export interface Address {
    state:string;
    country:string;
}