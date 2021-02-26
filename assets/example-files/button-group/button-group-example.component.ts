import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CodeFileService } from '../../../shared/code-file.service';
import { CodeFileModel } from '../../../shared/models/code-file.model';

@Component({
  selector: 'atlas-button-group-overview',
  templateUrl: './button-group-example.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonGroupExampleComponent implements OnInit, OnDestroy{
  oneButtonExample$ = new BehaviorSubject<CodeFileModel[]>(null);
  twoButtonExample$ = new BehaviorSubject<CodeFileModel[]>(null);
  threeButtonExample$ = new BehaviorSubject<CodeFileModel[]>(null);
  tenButtonExample$ = new BehaviorSubject<CodeFileModel[]>(null);
  mixedColorButtonExample$ = new BehaviorSubject<CodeFileModel[]>(null);
  mixedStyleButtonExample$ = new BehaviorSubject<CodeFileModel[]>(null);
  oneButtonExample = [
    'assets/example-files/button-group/one-button-example/one-button-example.component.ts',
    'assets/example-files/button-group/one-button-example/one-button-example.component.html'
  ];
  twoButtonExample = [
    'assets/example-files/button-group/two-button-example/two-button-example.component.ts',
    'assets/example-files/button-group/two-button-example/two-button-example.component.html'
  ];

  threeButtonExample = [
    'assets/example-files/button-group/three-button-example/three-button-example.component.ts',
    'assets/example-files/button-group/three-button-example/three-button-example.component.html'
  ];

  tenButtonExample = [
    'assets/example-files/button-group/ten-button-example/ten-button-example.component.ts',
    'assets/example-files/button-group/ten-button-example/ten-button-example.component.html'
  ];

  mixedColorButtonExample = [
    'assets/example-files/button-group/mixed-buttons-color-example/mixed-buttons-color-example.component.ts',
    'assets/example-files/button-group/mixed-buttons-color-example/mixed-buttons-color-example.component.html'
  ];
  mixedStyleButtonExample = [
    'assets/example-files/button-group/mixed-buttons-style-example/mixed-buttons-style-example.component.ts',
    'assets/example-files/button-group/mixed-buttons-style-example/mixed-buttons-style-example.component.html'
  ];
  subscriptions = new Subscription();
  constructor(private codeFileService: CodeFileService) {
  }

  ngOnInit(): void {
    this.subscriptions.add(this.codeFileService.loadFiles(this.oneButtonExample).subscribe(code => {
      this.oneButtonExample$.next(code);
    }));
    this.subscriptions.add(this.codeFileService.loadFiles(this.twoButtonExample).subscribe(code => {
      this.twoButtonExample$.next(code);
    }));
    this.subscriptions.add(this.codeFileService.loadFiles(this.threeButtonExample).subscribe(code => {
      this.threeButtonExample$.next(code);
    }));
    this.subscriptions.add(this.codeFileService.loadFiles(this.tenButtonExample).subscribe(code => {
      this.tenButtonExample$.next(code);
    }));
    this.subscriptions.add(this.codeFileService.loadFiles(this.mixedColorButtonExample).subscribe(code => {
      this.mixedColorButtonExample$.next(code);
    }));
    this.subscriptions.add(this.codeFileService.loadFiles(this.mixedStyleButtonExample).subscribe(code => {
      this.mixedStyleButtonExample$.next(code);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
