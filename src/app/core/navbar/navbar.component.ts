import { Component, Input, input } from '@angular/core';
import user from '../../Data/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  //  @Input() User :user = new user();
  //   User.isuser = true;
  isusers = false;
}
