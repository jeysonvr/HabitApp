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
      txtTitle:['',[Validators.required, Validators.minLength(1)]],
      ddlTime:['',[Validators.required, Validators.minLength(1)]],
      ddlDay:['',[Validators.required,Validators.minLength(1)]]
    })
  }

  get f() {
    return this.formNewHabit.controls;
  }

  async create(){
    if(this.formNewHabit.valid)
      this.router.navigate(['/habitList/false' ]);
  }
  async cancel(){
    this.router.navigate(['/habitList/true']);
  }

}
