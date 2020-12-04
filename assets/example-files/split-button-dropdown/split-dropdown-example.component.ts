import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CodeFileModel } from '../../shared-docs/shared-docs-example/code-example/code-file.model';
import { CodeFileService } from '../../shared-docs/shared-docs-example/code-example/code-file.service';
import { BehaviorSubject, Subscription } from 'rxjs';

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
