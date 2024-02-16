import {Component, DoCheck, signal} from '@angular/core';

@Component({
  selector: 'app-change-detection-counter',
  standalone: true,
  imports: [],
  templateUrl: './change-detection-counter.component.html',
  styleUrl: './change-detection-counter.component.scss',
})
export class ChangeDetectionCounterComponent implements DoCheck {
  protected readonly changeDetectionCount = signal(0);

  public ngDoCheck(): void {
    this.changeDetectionCount.update(count => count + 1);
  }
}

