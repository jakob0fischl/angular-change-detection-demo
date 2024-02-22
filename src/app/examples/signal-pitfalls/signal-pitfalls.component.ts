import {ChangeDetectionStrategy, Component, computed, effect, signal} from '@angular/core';
import {sleep} from '../../irrelevant/sleep';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-signal-pitfalls',
  standalone: true,
  imports: [],
  templateUrl: './signal-pitfalls.component.html',
  styleUrl: './signal-pitfalls.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalPitfallsComponent {
  private readonly example = signal(0);

  /**
   * Async code
   * TLDR: don't use it with signals
   */

  /**
   * Return type is Promise => you will have to use a | async pipe again to get the actual value, just use rxjs
   * dependencies after the first await won't be tracked, this signal will never update as it won't realize example changes
   */
  public readonly asyncValue = computed(async () => {
    await sleep(100);
    return this.example();
  });

  public constructor() {
    setInterval(() => {
      this.example.update(it => it+1);

      this.asyncValue().then(it => console.log('value of asyncValue', it));
    }, 1000);


    /**
     * async effect, same issue as computed, everything after first await won't be tracked as dependency
     */
    effect(async () => {
      await sleep(100);
      console.log('this.example() effect', this.example());
    });

    /**
     * toSignal cannot be used in computed/effect
     */
    const exampleObservable$ = new BehaviorSubject(0);
    effect(() => {
      // this will throw an error when uncommented
      // toSignal(exampleObservable$, { requireSync: true })();
    });

    /**
     * toSignal and toObservable creates a subscription until the component they are attached to is destroyed
     * if you use it in service it will create a permanent subscription, probably not something you want (assuming service is provided in root)
     */
  }
}
