import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-objective-list',
  templateUrl: './objective-list.component.html',
  styleUrls: ['./objective-list.component.css']
})
export class ObjectiveListComponent implements OnInit {

  isEmpty?: boolean;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.isEmpty = params['isEmpty'] == 'true' ? true : false;
    });
  }

}
