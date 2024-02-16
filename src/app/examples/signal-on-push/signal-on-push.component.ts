import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {ChangeDetectionCounterComponent} from '../../irrelevant/change-detection-counter/change-detection-counter.component';
import {AsyncPipe} from '@angular/common';
import {IncrementButtonComponent} from '../../irrelevant/increment-button/increment-button.component';
import {OnPushSubcomponentComponent} from '../../on-push-subcomponent/on-push-subcomponent.component';
import {ShowPreviousValuesComponent} from '../../irrelevant/show-previous-values/show-previous-values.component';
import {SwitchComponent} from '../../irrelevant/switch/switch.component';
import {sleep} from '../../irrelevant/sleep';

@Component({
  selector: 'app-signal-on-push',
  standalone: true,
  imports: [
    ChangeDetectionCounterComponent,
    AsyncPipe,
    IncrementButtonComponent,
    OnPushSubcomponentComponent,
    ShowPreviousValuesComponent,
    SwitchComponent,
  ],
  templateUrl: './signal-on-push.component.html',
  styleUrl: './signal-on-push.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalOnPushComponent {
  protected readonly value1 = signal(0);
  protected readonly value2 = signal(0);
  protected readonly showValue2 = signal(false);

  protected readonly value = computed(() => {
    console.log('recomputed');
    return this.showValue2() ? this.value2() : this.value1();
  });

  protected async update1(value: number): Promise<void> {
    await sleep(100);
    this.value1.set(value);
  }

  protected async update2(value: number): Promise<void> {
    await sleep(100);
    this.value2.set(value);
  }
}
