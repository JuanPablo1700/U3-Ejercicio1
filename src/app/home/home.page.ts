import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from "../models/student";
import { StudentService } from "../services/student.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public students: Student[];
  
  constructor(
    private studentService: StudentService,
    private route: Router
  ) {
    this.students = this.studentService.getStudents();
  }

  public removeStudent(i : number){
    this.studentService.removeStudent(i);
    this.students = this.studentService.getStudents();
  }

  public updateStudent(controlnumber: String){
    this.route.navigate(['/update-student'], {
      queryParams: {controlnumber: controlnumber}
    });
  }

}
