import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from './../models/student';
import { StudentService } from './../services/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {
  
  public student:Student;
  public myForm: FormGroup;
  public validationMessage: Object;

  constructor(
    private studentService:StudentService,
    private fb:FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    
    this.activatedRoute.queryParams.subscribe((params) => {
      this.student = this.studentService.getStudent(params.controlnumber);
    })

    this.myForm = this.fb.group(
      {
        name: [
          this.student.name,
          Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zÑñA-Z]+[a-zÑñA-Z ]*$')
          ])
        ],
        curp: [
          this.student.curp,
          Validators.compose([
            Validators.required,
            Validators.minLength(18),
            Validators.maxLength(18),
            Validators.pattern('^[a-zÑñA-Z]+[a-zÑñA-Z0-9]*$')
          ])
        ],
        age: [
          this.student.age,
          Validators.compose([
            Validators.required,
            Validators.maxLength(3),
            Validators.pattern('[0-9]+'),
            Validators.min(17)
          ])
        ],
        nip: [
          this.student.nip,
          Validators.compose([
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(4),
            Validators.pattern('[1-9][0-9]+')
          ])
        ],
        email: [
          this.student.email,
          Validators.compose([
            Validators.required,
            Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)
          ])
        ],
        career: [
          this.student.career,
          Validators.required
        ],
        photo: [
          this.student.photo,
          Validators.compose([
            Validators.required,
            Validators.pattern(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/)
          ])
        ]
      }
    );

    this.validationMessage = {
      name: [
        {
          type: 'required',
          message: 'Nombre oblogatorio'
        },
        {
          type: 'pattern',
          message: 'El nombre esta mal formado'
        }
      ],
      curp: [
        {
          type: 'required',
          message: 'Curp obligatoria'
        },
        {
          type: 'minlength',
          message: 'La curp debe ser de 18 caracteres'
        },
        {
          type: 'maxlength',
          message: 'La curp debe ser de 18 caracteres'
        },
        {
          type: 'pattern',
          message: 'La curp esta mal formada'
        }
      ],
      age: [
        {
          type: 'required',
          message: 'Edad obligatoria'
        },
        {
          type: 'min',
          message: 'La edad minima es de 17'
        },
        {
          type: 'maxlength',
          message: 'La edad debe tener maximo 3 digitos'
        },
        {
          type: 'pattern',
          message: 'La edad esta mal formada'
        }
      ],
      nip: [
        {
          type: 'required',
          message: 'Nip obligatoria'
        },
        {
          type: 'minlength',
          message: 'El nip debe tener mas de un digito'
        },
        {
          type: 'maxlength',
          message: 'El nip debe tener menos de cinco digitos'
        },
        {
          type: 'pattern',
          message: 'El nip esta mal formado'
        }
      ],
      email: [
        {
          type: 'required',
          message: "Email obligatorio"
        },
        {
          type: 'pattern',
          message: 'El email esta mal formado'
        }
      ],
      career: [
        {
          type: 'required',
          message: "Carrera obligatoria"
        },
      ],
      photo: [
        {
          type: 'required',
          message: "Foto obligatoria"
        },
        {
          type: 'pattern',
          message: 'La URL esta mal formada'
        }
      ],
    }
  }

  public updateStudent():void{
    let studentUpdate: Student = {
      controlnumber: this.student.controlnumber,
      name: this.myForm.get('name').value,
      curp: this.myForm.get('curp').value,
      age: this.myForm.get('age').value,
      nip: this.myForm.get('nip').value,
      email: this.myForm.get('email').value,
      career: this.myForm.get('career').value,
      photo: this.myForm.get('photo').value,
    }
    this.studentService.updateStudent(studentUpdate)
    this.router.navigate(['']);
  }
}