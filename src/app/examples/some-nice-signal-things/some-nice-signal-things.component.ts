import {ChangeDetectionStrategy, Component, effect, ElementRef, input, model, viewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-some-nice-signal-things',
  standalone: true,
  imports: [],
  templateUrl: './some-nice-signal-things.component.html',
  styleUrl: './some-nice-signal-things.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SomeNiceSignalThingsComponent {
  /**
   * this shows some signal equivalents for rxjs/normal angular code
   * old variant is always commented out above the signal variant
   */

  /**
   * https://angular.io/guide/signal-inputs
   */
  /*
  protected readonly valueRequired$ = new BehaviorSubject(0);
  @Input({ required: true }) public set valueRequired(value: number) {
    this.valueRequired$.next(value);
  }
  */
  public readonly valueRequired = input.required();

  /*
  protected readonly value$ = new BehaviorSubject(0);
  @Input() public set value(value: number) {
    this.value$.next(value);
  }
  */
  public readonly value = input(0);


  /**
   * This is not initialized immediately, so you need to ensure you check it when it's already there
   * with a signal you will get undefined initially as well, but it will automatically update
   *
   * More info: https://angular.io/guide/signal-queries
   */
  // @ViewChild('input') public input: ElementRef<HTMLInputElement> | undefined;
  public readonly input = viewChild<ElementRef<HTMLInputElement>>('input');


  /**
   * https://github.com/angular/angular/pull/54252
   */
  /*
  @Input({ required: true }) public someTwoWayBinding = 0;
  @Output() public readonly someTwoWayBindingChange = new EventEmitter<number>();
   */
  public readonly someTwoWayBinding = model.required<number>();
  /**
   * you can also bind signals to the two-way binding directly
   * <example-component [(someTwoWayBinding)]="someSignal">
   */


  /*
  public constructor() {
    this.someObservable$.pipe(
      takeUntilDestroyed(),
    ).subscribe((value) => {
        console.log('someObservable$', value);
    })
  }
   */
  public constructor() {
    effect(() => {
      console.log('someSignal', this.someSignal());
    });
  }


  /**
   * https://angular.io/guide/rxjs-interop
   * WARNING: the following functions should be used with caution (especially outside components),
   *          they will create permanent subscriptions as long as the component/service they are
   *          attached to is alive
   */
  private readonly someObservable$ = new BehaviorSubject(0);
  protected readonly someSignal = toSignal(this.someObservable$);
  protected readonly someSignalWithInitialValue = toSignal(this.someObservable$, { initialValue: 0 });
  /**
   * WARNING: will throw an error if the observable doesn't emit immediately
   */
  protected readonly someSignalSync = toSignal(this.someObservable$, { requireSync: true });

  protected readonly signalToObservable$ = toObservable(this.someSignal);

}
