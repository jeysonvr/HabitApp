import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-objective-list',
  templateUrl: './objective-list.component.html',
  styleUrls: ['./objective-list.component.css']
})
export class ObjectiveListComponent implements OnInit {

  isEmpty?: boolean;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.isEmpty = params['isEmpty'] == 'true' ? true : false;
    });
  }

  create(){
    this.router.navigate(['newObjective']);
  }

  habits(){
    this.router.navigate(['habitList/true']);
  }
}
