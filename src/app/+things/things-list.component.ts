import { Component, OnInit } from '@angular/core';
import { ThingsService } from './things.service';

@Component({
  selector: 'app-things-list',
  templateUrl: 'things-list.component.html',
})
export class ThingsListComponent implements OnInit {

  things: Array<string>;

  constructor(private _thingsService: ThingsService) { }

  ngOnInit(){
    this._thingsService.all()
      .subscribe((things) => {
        this.things = things;
      });
  }
}
