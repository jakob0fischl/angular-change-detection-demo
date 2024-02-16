import {Component} from '@angular/core';
import {ChangeDetectionCounterComponent} from '../../irrelevant/change-detection-counter/change-detection-counter.component';
import {IncrementButtonComponent} from '../../irrelevant/increment-button/increment-button.component';
import {SwitchComponent} from '../../irrelevant/switch/switch.component';
import {DefaultSubcomponentComponent} from '../../default-subcomponent/default-subcomponent.component';

@Component({
  selector: 'app-normal-property',
  standalone: true,
  imports: [
    ChangeDetectionCounterComponent,
    IncrementButtonComponent,
    SwitchComponent,
    DefaultSubcomponentComponent,
  ],
  templateUrl: './normal-property.component.html',
  styleUrl: './normal-property.component.scss',
})
export class NormalPropertyComponent {
  protected value1 = 0;
  protected value2 = 0;
  protected showValue2 = false;
}
