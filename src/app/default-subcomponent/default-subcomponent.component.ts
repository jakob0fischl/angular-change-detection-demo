import {Component, Input} from '@angular/core';
import {
  ChangeDetectionCounterComponent,
} from '../irrelevant/change-detection-counter/change-detection-counter.component';

@Component({
  selector: 'app-default-subcomponent',
  standalone: true,
  imports: [
    ChangeDetectionCounterComponent,
  ],
  templateUrl: './default-subcomponent.component.html',
  styleUrl: './default-subcomponent.component.scss',
})
export class DefaultSubcomponentComponent {
  @Input({ required: true }) data: any;
}
