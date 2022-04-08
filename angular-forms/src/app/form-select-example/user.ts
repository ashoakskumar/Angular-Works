import { Profile } from "../domain/profile";
import { Technology } from "../domain/technology";

export class User {
    userName:string;
    profile: Profile;
    technology: Technology[];
}