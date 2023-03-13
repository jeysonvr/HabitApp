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
      txtName:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      txtUser:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      txtPassword:['',[Validators.required,Validators.minLength(8)]],
      txtPasswordConfirmation:['',[Validators.required,Validators.minLength(8)]],
      ddlHabits:['',[Validators.required,Validators.minLength(8)]],
    });
  }

}
