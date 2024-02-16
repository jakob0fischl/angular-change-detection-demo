import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-rxjs-on-push',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-on-push.component.html',
  styleUrl: './rxjs-on-push.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsOnPushComponent {

}
