import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AppStatusBarDismissEvent, AppStatusMessage, AppStatusMessageType } from '@atlas/ui-app-shell';
import { NewGuid } from '@atlas/util';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-status-bar-example',
  templateUrl: './status-bar-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class StatusBarExampleComponent {

  private _messagesSubject = new BehaviorSubject<AppStatusMessage[]>([
    { id: NewGuid(), type: AppStatusMessageType.Info, message: 'This is an info message.  Its just informative.', dismissable: true },
    { id: NewGuid(), type: AppStatusMessageType.Warning, message: 'This is a warning message.  It should be taken somewhat seriously.', dismissable: true },
    { id: NewGuid(), type: AppStatusMessageType.Critical, message: 'This is a critical message.  It should be taken very seriously.', dismissable: true }
  ]);
  private _dismissedIdSubject = new BehaviorSubject<string[]>([]);

  activeMessages$ = combineLatest([
    this._messagesSubject,
    this._dismissedIdSubject
  ]).pipe(
    map(([messages, dismissedIds]) => (messages || []).filter(msg => dismissedIds.indexOf(msg.id) === -1))
  );

  onDismissMessages($event: AppStatusBarDismissEvent) {
    this._dismissedIdSubject.next(this._dismissedIdSubject.getValue().concat(
      $event.messages.map(x => x.id)
    ));
  }

}