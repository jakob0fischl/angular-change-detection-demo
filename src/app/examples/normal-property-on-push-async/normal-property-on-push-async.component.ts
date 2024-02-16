import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ChangeDetectionCounterComponent
} from '../../irrelevant/change-detection-counter/change-detection-counter.component';
import {IncrementButtonComponent} from '../../irrelevant/increment-button/increment-button.component';
import {OnPushSubcomponentComponent} from '../../on-push-subcomponent/on-push-subcomponent.component';
import {SwitchComponent} from '../../irrelevant/switch/switch.component';
import {sleep} from '../../irrelevant/sleep';

@Component({
  selector: 'app-normal-property-on-push-async',
  standalone: true,
  imports: [
    ChangeDetectionCounterComponent,
    IncrementButtonComponent,
    OnPushSubcomponentComponent,
    SwitchComponent,
  ],
  templateUrl: './normal-property-on-push-async.component.html',
  styleUrl: './normal-property-on-push-async.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NormalPropertyOnPushAsyncComponent {
  protected value1 = 0;
  protected value2 = 0;
  protected showValue2 = false;

  protected async update1(value: number): Promise<void> {
    await sleep(100);
    this.value1 = value;
  }

  protected async update2(value: number): Promise<void> {
    await sleep(100);
    this.value2 = value;
  }
}
