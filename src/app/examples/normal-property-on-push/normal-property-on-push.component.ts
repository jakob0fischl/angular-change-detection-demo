import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  ChangeDetectionCounterComponent,
} from '../../irrelevant/change-detection-counter/change-detection-counter.component';
import {IncrementButtonComponent} from '../../irrelevant/increment-button/increment-button.component';
import {SwitchComponent} from '../../irrelevant/switch/switch.component';
import {OnPushSubcomponentComponent} from '../../on-push-subcomponent/on-push-subcomponent.component';

@Component({
  selector: 'app-normal-property-on-push',
  standalone: true,
  imports: [
    ChangeDetectionCounterComponent,
    IncrementButtonComponent,
    SwitchComponent,
    OnPushSubcomponentComponent,
  ],
  templateUrl: './normal-property-on-push.component.html',
  styleUrl: './normal-property-on-push.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NormalPropertyOnPushComponent {
  protected value1 = 0;
  protected value2 = 0;
  protected showValue2 = false;
}
