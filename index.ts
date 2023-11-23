// <>
const myArray: string[] = ['1','2']

const myArray2: Array<string> =  ['1','2']

const numberList : Array<number>  = [1,2,3]


type Student = {
    id: number
    name: string
}

type Teacher = {
    id: string
    name: string
}

type Person<T> = {
    school: string
    data: T
} 
type MapType= {
    [key in keyof Student]: number;
}

const studentA : Person<Student> = {
    school: 'FPT',
    data: {
        id: 1,
        name: 'Nam'
    } ,
}

const teacherA : Person<Teacher> = {
    school: 'FPT',
    data: {
        id: '1',
        name: 'Nam'
    } ,
}

// typeof

const n1 = ()=> {}

console.log( typeof n1);



// function f1 () {}
// type StudentKey = keyof Student

// const keys: StudentKey = 'id'

// type MapType = {
//     [Key in keyof Student]: boolean;
// }