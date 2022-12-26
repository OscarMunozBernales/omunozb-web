import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  public LINK_LINKEDIN: string = 'https://www.linkedin.com/in/omunozb/';
  public LINK_GITHUB: string = 'https://github.com/OscarMunozBernales';
  constructor(){}

  ngOnInit(): void {}
}
