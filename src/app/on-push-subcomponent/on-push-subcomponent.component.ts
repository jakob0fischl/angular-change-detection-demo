import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {
  ChangeDetectionCounterComponent
} from '../irrelevant/change-detection-counter/change-detection-counter.component';

@Component({
  selector: 'app-on-push-subcomponent',
  standalone: true,
  imports: [
    ChangeDetectionCounterComponent,
  ],
  templateUrl: './on-push-subcomponent.component.html',
  styleUrl: './on-push-subcomponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushSubcomponentComponent {
  @Input({ required: true }) data: any;
}
