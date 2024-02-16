import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-signal-on-push',
  standalone: true,
  imports: [],
  templateUrl: './signal-on-push.component.html',
  styleUrl: './signal-on-push.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalOnPushComponent {

}
