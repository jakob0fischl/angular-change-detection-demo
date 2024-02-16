import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';

@Component({
  selector: 'app-show-previous-values',
  standalone: true,
  imports: [],
  templateUrl: './show-previous-values.component.html',
  styleUrl: './show-previous-values.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowPreviousValuesComponent {
  @Input({ required: true }) public set value(value: any) {
    this.previousValues.update((previousValues) => [...previousValues, value]);
  }

  protected readonly previousValues = signal<any[]>([]);
  protected readonly JSON = JSON;
}
