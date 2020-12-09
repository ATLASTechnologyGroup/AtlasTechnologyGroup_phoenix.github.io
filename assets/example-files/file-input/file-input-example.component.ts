import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CodeFileService } from '../../shared-docs/shared-docs-example/code-example/code-file.service';

@Component({
  selector: 'atlas-file-input-example',
  templateUrl: './file-input-example.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileInputExampleComponent implements OnInit {
  private subscriptions = new Subscription();
  withDropAreaExample$ = new BehaviorSubject(null);
  withoutDropAreaExample$ = new BehaviorSubject(null);
  withDropAreaExample = [
    'assets/example-files/file-input/drop-area-example/drop-area-example.component.html',
    'assets/example-files/file-input/drop-area-example/drop-area-example.component.ts'
  ];
  withoutDropAreaExample = [
    'assets/example-files/file-input/input-only-example/input-only-example.component.html',
    'assets/example-files/file-input/input-only-example/input-only-example.component.ts'
  ];
  constructor(private codeFileService: CodeFileService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.codeFileService.loadFiles(this.withDropAreaExample).subscribe(code => {
      this.withDropAreaExample$.next(code);
    }));
    this.subscriptions.add(this.codeFileService.loadFiles(this.withoutDropAreaExample).subscribe(code => {
      this.withoutDropAreaExample$.next(code);
    }));
  }

}
