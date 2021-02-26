import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CodeFileService } from '../../../shared/code-file.service';
import { CodeFileModel } from '../../../shared/models/code-file.model';

@Component({
  selector: 'atlas-file-input-example',
  templateUrl: './file-input-example.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileInputExampleComponent {
  withDropAreaExample$ = new BehaviorSubject<CodeFileModel[]>(null);
  withoutDropAreaExample$ = new BehaviorSubject<CodeFileModel[]>(null);

  constructor(private codeFileService: CodeFileService) {
    this.codeFileService.loadFiles([
      'assets/example-files/file-input/drop-area-example/drop-area-example.component.html',
      'assets/example-files/file-input/drop-area-example/drop-area-example.component.ts'
    ]).pipe(
      tap(code => this.withDropAreaExample$.next(code))
    ).subscribe();
    this.codeFileService.loadFiles([
      'assets/example-files/file-input/input-only-example/input-only-example.component.html',
      'assets/example-files/file-input/input-only-example/input-only-example.component.ts'
    ]).pipe(
      tap(code => this.withoutDropAreaExample$.next(code))
    ).subscribe();
  }
}
