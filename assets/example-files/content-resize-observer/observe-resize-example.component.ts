import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'atlas-observe-resize-example',
  templateUrl: './observe-resize-example.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObserveResizeExampleComponent {

  private _contentSizeSubject = new BehaviorSubject<DOMRectReadOnly>(null);
  private _testContentSubject = new BehaviorSubject<string[]>(['This is just a test.']);
  private _testContentInputSubject = new BehaviorSubject<string>('');

  contentSize$ = this._contentSizeSubject.asObservable();
  testContent$ = this._testContentSubject.asObservable();
  testContentInput$ = this._testContentInputSubject.asObservable();

  constructor() { }

  setTestContentInput(value: string) {
    this._testContentInputSubject.next(value);
  }

  onClearTestContent() {
    this._testContentSubject.next([]);
  }

  onAddTestContent() {
    const content = this._testContentInputSubject.getValue();
    if (content?.length) {
      this._testContentSubject.next((this._testContentSubject.getValue() || []).concat([content]));
    }
  }

  onContentResized(entries: ResizeObserverEntry[]) {
    if (entries?.length) {
      const domRect = entries[0].contentRect;
      console.log('Content size changed:', domRect);
      this._contentSizeSubject.next(domRect);
    }
  }

}
