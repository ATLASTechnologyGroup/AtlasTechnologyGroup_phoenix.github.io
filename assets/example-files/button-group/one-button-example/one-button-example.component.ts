import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'atlas-one-button-example',
  templateUrl: './one-button-example.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneButtonExampleComponent {
  colors$ = new BehaviorSubject(['', 'primary', 'accent', 'warn', 'secondary-accent', 'tertiary-accent', 'neutral', 'success', 'brand']);
  color$ = new BehaviorSubject('primary');

  setColor($event: MatSelectChange) {
    this.color$.next($event.value);
  }
}
