import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'atlas-two-button-example',
  templateUrl: './two-button-example.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoButtonExampleComponent{
  colors$ = new BehaviorSubject(['', 'primary', 'accent', 'warn', 'secondary-accent', 'tertiary-accent', 'neutral', 'success', 'brand']);
  color$ = new BehaviorSubject('primary');

  setColor($event: MatSelectChange) {
    this.color$.next($event.value);
  }

}
