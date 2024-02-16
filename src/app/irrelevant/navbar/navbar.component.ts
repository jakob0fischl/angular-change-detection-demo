import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {routes} from '../../app.routes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  protected readonly navLinks = routes;
}
