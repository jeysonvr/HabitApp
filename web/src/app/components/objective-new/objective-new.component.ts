import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-objective-new',
  templateUrl: './objective-new.component.html',
  styleUrls: ['./objective-new.component.css']
})
export class ObjectiveNewComponent implements OnInit {

  public formNewObjective!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formNewObjective = this.formBuilder.group({
      txtName:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      txtUser:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      txtPassword:['',[Validators.required,Validators.minLength(8)]],
      txtPasswordConfirmation:['',[Validators.required,Validators.minLength(8)]],
      ddlHabits:['',[Validators.required,Validators.minLength(8)]],
    });
  }

}
