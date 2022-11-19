import { Student } from './../models/student';
import { StudentService } from './../services/student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  student: Student;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeControlNumber = paramMap.get('controlnumber');
      this.student = this.studentService.getStudent(recipeControlNumber);
    })
  }

}
