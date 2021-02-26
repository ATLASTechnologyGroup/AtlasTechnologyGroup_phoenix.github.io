import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CodeFileService } from '../../../shared/code-file.service';
import { CodeFileModel } from '../../../shared/models/code-file.model';

@Component({
  selector: 'atlas-split-dropdown-example',
  templateUrl: './split-dropdown-example.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplitDropdownExampleComponent implements OnInit, OnDestroy {
  splitButtonWithActionsExampleCode$ = new BehaviorSubject<CodeFileModel[]>(null);

  splitButtonWithActionsExampleCode = [
    'assets/example-files/split-button-dropdown/split-button-dropdown-with-actions/split-button-dropdown-with-actions.component.ts',
    'assets/example-files/split-button-dropdown/split-button-dropdown-with-actions/split-button-dropdown-with-actions.component.html'
  ];
  subscriptions = new Subscription();
  constructor(private codeFileService: CodeFileService) {
  }

  ngOnInit(): void {
    this.subscriptions.add(this.codeFileService.loadFiles(this.splitButtonWithActionsExampleCode).subscribe(code => {
      this.splitButtonWithActionsExampleCode$.next(code);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
