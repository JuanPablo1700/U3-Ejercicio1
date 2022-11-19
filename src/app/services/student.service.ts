import { Student } from './../models/student';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[];

  constructor() {
    this.students = [
      {
        controlnumber: '18401091',
        name: 'Juan Pablo Campos Casillas',
        curp: 'CACJ000817HNTMSNA4',
        age: 22,
        nip: 1234,
        email: 'jupacamposca@ittepic.edu.mx',
        career: 'ISC',
        photo: '../../assets/imgs/p.jpeg',
      },
      {
        controlnumber: "18401160",
        name: "Arlethe Monserrart Mora Lizarrarás",
        curp: "CACJ000817HNTMSNA4",
        age: 22,
        nip: 1234,
        email: "armomorali@ittepic.edu.mx",
        career: "ISC",
        photo: 'https://docs-demo.ionic.io/assets/madison.jpg',
      },
      {
        controlnumber: "18401086",
        name: "Adrian Valentin",
        curp: "CACJ000817HNTMSNA4",
        age: 22,
        nip: 1234,
        email: "bena@gmail.com",
        career: "ISC",
        photo: 'https://picsum.photos/id/684/600',
      },
      {
        controlnumber: "18401092",
        name: "Juan Pablo Campos Casillas",
        curp: "CACJ000817HNTMSNA4",
        age: 22,
        nip: 1234,
        email: "jupacamposca@gmail.com",
        career: "ISC",
        photo: 'https://picsum.photos/id/68/600',
      },
      {
        controlnumber: "18401090",
        name: "Juan Pablo Campos Casillas",
        curp: "CACJ000817HNTMSNA4",
        age: 22,
        nip: 1234,
        email: "jupacamposca@gmail.com",
        career: "ISC",
        photo: 'https://picsum.photos/id/4/600',
      }
    ];
  }

  public getStudents(): Student[]{
    return this.students;
  }

  //... sirve para quitar el arreglo de una coleccion de datos.
  //[{},{},{}] === ...{}{}{}
  public getStudent(controlnumber: string): Student{
    return {
      ...this.students.find(student => {
        return student.controlnumber === controlnumber;
      })
    }
  }

  public removeStudent(i: number){
    this.students.splice(i,1);
  }

  public newStudent(student:Student):void{
    this.students.push(student);
  }

  public updateStudent(studentUpdate:Student):void{
    this.students.forEach((student, index) => {
      if (student.controlnumber === studentUpdate.controlnumber) {
        console.log(studentUpdate);
        this.students[index] = studentUpdate;
      }
    })
    console.log(this.students);
  }
}
