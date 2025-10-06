import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userInfo = {
    name: 'John Doe',
    initials: 'JD',
    role: 'Administrator'
  };

  onProfileClick() {
    console.log('Profile clicked');
  }

  onHelpClick() {
    console.log('Help clicked');
  }
}