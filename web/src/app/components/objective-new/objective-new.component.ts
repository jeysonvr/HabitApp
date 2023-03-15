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
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formNewObjective = this.formBuilder.group({
      txtTitle:['',[Validators.required,Validators.minLength(1)]],
      txtDescription:['',[Validators.required,Validators.minLength(1)]]
    });
  }
  get f() {
    return this.formNewObjective.controls;
  }

  async create(){
    if(this.formNewObjective.valid)
      this.router.navigate(['/objectiveList/false' ]);
  }
  async cancel(){
    this.router.navigate(['/objectiveList/true']);
  }

}
