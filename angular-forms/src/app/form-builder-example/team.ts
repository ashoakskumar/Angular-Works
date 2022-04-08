import { Department } from "./department";
import { Employee } from "./employee";

export class Team {
    teamName:string;
    teamManager:string;
    teamDept = {} as Department;
    employees = [] as Employee[];
}