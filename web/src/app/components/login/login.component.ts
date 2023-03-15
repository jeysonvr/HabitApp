import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin!: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      txtUser:['',[Validators.required,Validators.minLength(1)]],
      txtPassword:['',[Validators.required,Validators.minLength(1)]]
    });
  }

  async login(){
    if(this.formLogin.valid)
      this.router.navigate(['/objectiveList/true' ]);
  }
  async signin(){
    this.router.navigate(['/signin' ]);
  }

  get f() {
    return this.formLogin.controls;
  }

}
