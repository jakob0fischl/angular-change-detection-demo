import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-increment-button',
  standalone: true,
  imports: [],
  templateUrl: './increment-button.component.html',
  styleUrl: './increment-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncrementButtonComponent {
  @Input({ required: true }) value!: number;
  @Output() valueChange = new EventEmitter<number>();

  protected increment(): void {
    this.valueChange.emit(this.value + 1);
  }
}
