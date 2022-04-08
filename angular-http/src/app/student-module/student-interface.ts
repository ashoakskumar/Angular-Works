export interface IStudent {
    rollNo: number;
    studentName: string;
    studentAge: number;
    schoolName: string;
    gender: string;
    academicYears: IStudentAcademics[];
    getStudentDetailByYear(rollNo: number,year :number): ()=> IStudent;
    getAvailYear(): ()=> number[];
}
export interface IStudentAcademics{
    academicYr: number;
    marks: IMarks;
    
}
export interface IMarks {
    maths :number;
    science: number;
    arts: number;
}