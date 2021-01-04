import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormControlSubject, NgxObservableViewModel, ThemeService, ViewModelSubjectMap } from '@atlas/ui-core';
import { RichTextConfiguration, RichTextDefaultSettings, RichTextFeature } from '@atlas/ui-rich-text';
import { Observable, of, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppThemes } from '../../../app.model';

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
  selector: 'atlas-rich-text-replacement-text-example',
  templateUrl: './replacement-text-example.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RichTextReplacementTextExampleComponent extends NgxObservableViewModel<ViewModel, FormControlSubject, ViewModelSubjectModel> {

  styledOutput$ = this.model.text.value$.pipe(
    map((value: string) => this.sanitizer.bypassSecurityTrustHtml(value))
  );

  isDarkMode$ = this.themeService.theme$.pipe(
    map(theme => theme === AppThemes.DarkTheme)
  );

  configuration$: Observable<RichTextConfiguration> = of(
    {
      ...RichTextDefaultSettings,
      features: [...RichTextDefaultSettings.features, RichTextFeature.TextReplacement],
      textReplacementMenu: [
        {
          friendlyText: 'YoY Sales',
          placeholderName: 'DATABASE.YOY-SALES'
        },
        {
          friendlyText: 'Week over Week Sales',
          placeholderName: 'DATABASE.WOW-SALES'
        }
      ]
    }
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