import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ChangeDetectionCounterComponent} from '../../irrelevant/change-detection-counter/change-detection-counter.component';
import {IncrementButtonComponent} from '../../irrelevant/increment-button/increment-button.component';
import {OnPushSubcomponentComponent} from '../../on-push-subcomponent/on-push-subcomponent.component';
import {SwitchComponent} from '../../irrelevant/switch/switch.component';
import {BehaviorSubject, combineLatest, combineLatestAll, delay, map} from 'rxjs';
import {sleep} from '../../irrelevant/sleep';
import {AsyncPipe} from '@angular/common';
import {ShowPreviousValuesComponent} from '../../irrelevant/show-previous-values/show-previous-values.component';

@Component({
  selector: 'app-rxjs-on-push',
  standalone: true,
  imports: [
    ChangeDetectionCounterComponent,
    IncrementButtonComponent,
    OnPushSubcomponentComponent,
    SwitchComponent,
    AsyncPipe,
    ShowPreviousValuesComponent,
  ],
  templateUrl: './rxjs-on-push.component.html',
  styleUrl: './rxjs-on-push.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsOnPushComponent {
  protected readonly value1$ = new BehaviorSubject<number>(0);
  protected readonly value2$ = new BehaviorSubject<number>(0);

  protected readonly showValue2$ = new BehaviorSubject<boolean>(false);

  protected readonly value$ = combineLatest([
    this.value1$,
    this.value2$,
    this.showValue2$,
  ]).pipe(
    map(([value1, value2, showValue2]) => {
      console.log('recomputed');
      return showValue2 ? value2 : value1;
    }),
  );

  protected readonly delayedValue$ = this.value1$.pipe(
    delay(100),
  );

  protected async update1(value: number): Promise<void> {
    await sleep(100);
    this.value1$.next(value);
  }

  protected async update2(value: number): Promise<void> {
    await sleep(100);
    this.value2$.next(value);
  }
}
