import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public BACKGROUND_IMG_PATH: string = 'assets/img/dev.png';
  public IMG_ME_PATH: string = 'assets/img/me.jpg';

  ngOnInit(){
  }
}
