import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarNavComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dfp-user-role-management-ui';
  sidebarCollapsed = false;

  onSidebarToggle(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
