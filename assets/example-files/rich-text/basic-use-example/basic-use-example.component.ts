import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControlSubject, NgxObservableViewModel, ThemeService, ViewModelSubjectMap } from '@atlas/ui-core';
import { map } from 'rxjs/operators';
import { AppThemes } from '../../../../app.model';

interface ViewModel {
  text: string;
}

interface ViewModelSubjectModel extends ViewModelSubjectMap<FormControlSubject> {
  text: FormControlSubject<string>;
}

const DefaultViewModel = {
  text: '<p>Testing, Testing</p><br/> <p>1 2 3</p>'
};

@Component({
  selector: 'atlas-rich-text-basic-use-example',
  templateUrl: './basic-use-example.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RichTextBasicUseExampleComponent extends NgxObservableViewModel<ViewModel, FormControlSubject, ViewModelSubjectModel> {

  styledOutput$ = this.model.text.value$.pipe(
    map((value: string) => this.sanitizer.bypassSecurityTrustHtml(value))
  );

  isDarkMode$ = this.themeService.theme$.pipe(
    map(theme => theme === AppThemes.DarkTheme)
  );

  constructor(private sanitizer: DomSanitizer,
    private themeService: ThemeService) {
    super({
      initialState: DefaultViewModel,
      subjectConstructor: FormControlSubject,
      validatorMap: {
      }
    });
  }

}