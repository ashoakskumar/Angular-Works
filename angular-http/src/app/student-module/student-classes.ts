
export class Student{

    public constructor(public rollNo: number,
        public studentName: string,
        public studentAge: number,
        public schoolName: string,
        public gender: string,
        public academicYears: StudentAcademics[]){}
    getStudentDetailByYear(rollNo: number, year: number): () => Student {
        throw new Error("Method not implemented.");
    }
    getAvailYear(): () => number[] {
        throw new Error("Method not implemented.");
    }
}
export class StudentAcademics{
    constructor(public academicYr: number,public marks: Marks){}
    
}
export class Marks {
    constructor(public maths :number,
        public science: number,
        public arts: number){}
}


