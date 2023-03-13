import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {

  isEmpty?: boolean;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.isEmpty = params['isEmpty'] == 'true' ? true : false;
    });
  }

}
