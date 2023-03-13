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
      txtUsuario:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      txtPassword:['',[Validators.required,Validators.minLength(8)]]
    });
  }

  async login(){
    this.router.navigate(['/pokemonList' ]);
  }

}
