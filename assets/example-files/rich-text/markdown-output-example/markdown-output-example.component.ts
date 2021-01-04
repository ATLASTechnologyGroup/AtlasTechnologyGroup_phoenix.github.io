import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControlSubject, NgxObservableViewModel, ThemeService, ViewModelSubjectMap } from '@atlas/ui-core';
import { RichTextConfiguration, SupportedOutputs } from '@atlas/ui-rich-text';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppThemes } from '../../../app.model';

interface ViewModel {
  text: string;
}

interface ViewModelSubjectModel extends ViewModelSubjectMap<FormControlSubject> {
  text: FormControlSubject<string>;
}

const DefaultViewModel = {
  text: '# Testing Testing \n\n 123'
};

@Component({
  selector: 'atlas-rich-text-markdown-output-example',
  templateUrl: './markdown-output-example.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RichTextMarkdownOutputExampleComponent extends NgxObservableViewModel<ViewModel, FormControlSubject, ViewModelSubjectModel> {

  isDarkMode$ = this.themeService.theme$.pipe(
    map(theme => theme === AppThemes.DarkTheme)
  );

  configuration$: Observable<RichTextConfiguration> = of(
    {
      outputType: SupportedOutputs.Markdown
    }
  );

  // Typically, you would pipe the result through a markdown to html converter to properly display.
  displayedMarkdown$ = this.model.text.value$.pipe(
    map(val => {
      return this.sanitizer.bypassSecurityTrustHtml(val.replace(/\n/g, '\\n'));
    })
  );

  constructor(
    private themeService: ThemeService,
    private sanitizer: DomSanitizer) {
    super({
      initialState: DefaultViewModel,
      subjectConstructor: FormControlSubject,
      validatorMap: {
      }
    });
  }

}