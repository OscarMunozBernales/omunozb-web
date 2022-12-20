import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit{

  public pages: any;

  constructor(
    private _router: Router,
  ) {}
  ngOnInit(): void {
    this.pages = this._router.config.filter(routes => routes.path != '' && routes.path != '**');
  }
}
