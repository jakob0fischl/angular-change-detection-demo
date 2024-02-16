import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-normal-property-on-push',
  standalone: true,
  imports: [],
  templateUrl: './normal-property-on-push.component.html',
  styleUrl: './normal-property-on-push.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NormalPropertyOnPushComponent {

}
