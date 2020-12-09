import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControlSubject, InputValidationResult, InputValidationResultType, InputValidatorKey, NgxObservableViewModel, ViewModelSubjectMap } from '@atlas/ui-core';

const requiredErrorResult: InputValidationResult = {
  key: InputValidatorKey.required,
  type: InputValidationResultType.Error
};

interface ViewModel {
  files: File[];
}

interface ViewModelSubjectModel extends ViewModelSubjectMap<FormControlSubject> {
  files: FormControlSubject<File[]>;
}

const DefaultViewModel = {
  files: undefined
};

@Component({
  selector: 'atlas-drop-area-example',
  templateUrl: './drop-area-example.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropAreaExampleComponent extends NgxObservableViewModel<ViewModel, FormControlSubject, ViewModelSubjectModel> {

  constructor() {
    super({
      initialState: DefaultViewModel,
      subjectConstructor: FormControlSubject,
      validatorMap: {
        file: [
          // Sloppy required function because required doesn't currently
          // accept files properly.
          (val) => val ? undefined : requiredErrorResult
        ]
      }
    });
  }

  fileChosen($event: File[]) {
    console.log('File chosen', $event);
  }
}
