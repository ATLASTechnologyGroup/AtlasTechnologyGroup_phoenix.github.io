import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'atlas-split-button-dropdown-with-actions',
  templateUrl: './split-button-dropdown-with-actions.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplitButtonDropdownWithActionsComponent {
  action(value: string) {
    alert(value);
  }
}
