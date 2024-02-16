import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value!: boolean;
  @Output() public readonly valueChange = new EventEmitter<boolean>();

  protected emitChange(event: Event): void {
    this.valueChange.emit((event.target as HTMLInputElement).checked);
  }
}
