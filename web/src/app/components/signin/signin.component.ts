import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public formSignin!: FormGroup;
  constructor(private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formSignin = this.formBuilder.group({
      txtName:['',[Validators.required,Validators.minLength(1)]],
      txtUser:['',[Validators.required,Validators.minLength(1)]],
      txtPassword:['',[Validators.required,Validators.minLength(1)]],
      txtPasswordConfirmation:['',[Validators.required,Validators.minLength(1)]],
      ddlHabits:['',[Validators.required,Validators.minLength(1)]],
    });
  }

  get f() {
    return this.formSignin.controls;
  }

  async signin(){
    if(this.formSignin.valid)
      this.router.navigate(['/objectiveList/true' ]);
  }
  async cancel(){
    this.router.navigate(['']);
  }

}
