import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CodeFileService } from '../../shared-docs/shared-docs-example/code-example/code-file.service';

@Component({
  selector: 'atlas-rich-text-input-example',
  templateUrl: './rich-text-example.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RichTextInputExampleComponent implements OnInit {
  private subscriptions = new Subscription();
  basicExample$ = new BehaviorSubject(null);
  markdownExample$ = new BehaviorSubject(null);
  replacementTextExample$ = new BehaviorSubject(null);
  basicExample = [
    'assets/example-files/rich-text/basic-use-example/basic-use-example.component.html',
    'assets/example-files/rich-text/basic-use-example/basic-use-example.component.ts'
  ];
  markdownExample = [
    'assets/example-files/rich-text/markdown-output-example/markdown-output-example.component.html',
    'assets/example-files/rich-text/markdown-output-example/markdown-output-example.component.ts'
  ];
  replacementTextExample =  [
    'assets/example-files/rich-text/replacement-text-example/replacement-text-example.component.html',
    'assets/example-files/rich-text/replacement-text-example/replacement-text-example.component.ts'
  ];
  advancedEditingExample =  [
    'assets/example-files/rich-text/advanced-editing-example/advanced-editing-example.component.html',
    'assets/example-files/rich-text/advanced-editing-example/advanced-editing-example.component.ts'
  ];
  advancedEditingExample$ = this.codeFileService.loadFiles(this.advancedEditingExample);

  constructor(private codeFileService: CodeFileService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.codeFileService.loadFiles(this.basicExample).subscribe(code => {
      this.basicExample$.next(code);
    }));
    this.subscriptions.add(this.codeFileService.loadFiles(this.markdownExample).subscribe(code => {
      this.markdownExample$.next(code);
    }));
    this.subscriptions.add(this.codeFileService.loadFiles(this.replacementTextExample).subscribe(code => {
      this.replacementTextExample$.next(code);
    }));
  }

}
