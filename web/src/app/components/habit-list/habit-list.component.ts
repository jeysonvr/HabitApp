import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {

  isEmpty?: boolean;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.isEmpty = params['isEmpty'] == 'true' ? true : false;
    });
  }

  newHabit(){
    this.router.navigate(['newHabit']);
  }
  cancel(){
    this.router.navigate(['objectiveList/false']);
  }

}
