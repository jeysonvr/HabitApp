import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habit-new',
  templateUrl: './habit-new.component.html',
  styleUrls: ['./habit-new.component.css']
})
export class HabitNewComponent implements OnInit {

  public formNewHabit!: FormGroup;
  constructor(private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formNewHabit = this.formBuilder.group({
      txtName:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      txtUser:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      txtPassword:['',[Validators.required,Validators.minLength(8)]]
    })
  }

}
