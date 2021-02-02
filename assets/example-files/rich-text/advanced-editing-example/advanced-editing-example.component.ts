import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControlSubject, NgxObservableViewModel, ThemeService, ViewModelSubjectMap } from '@atlas/ui-core';
import { RichTextConfiguration, RichTextDefaultSettings, RichTextFeature, SupportedOutputs } from '@atlas/ui-rich-text';
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
  text: '<p>Testing, Testing</p><br/> <p>1 2 3</p>'
};

@Component({
  selector: 'atlas-rich-text-advanced-editing-example',
  templateUrl: './advanced-editing-example.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RichTextAdvancedEditingComponent extends NgxObservableViewModel<ViewModel, FormControlSubject, ViewModelSubjectModel> {

  styledOutput$ = this.model.text.value$.pipe(
    map((value: string) => this.sanitizer.bypassSecurityTrustHtml(value))
  );

  isDarkMode$ = this.themeService.theme$.pipe(
    map(theme => theme === AppThemes.DarkTheme)
  );

  configuration$: Observable<RichTextConfiguration> = of(
    {
      features: [...RichTextDefaultSettings.features, RichTextFeature.UploadImage, RichTextFeature.Links, RichTextFeature.Table],
      fileUploader: (file) => {
        alert(`For more complex cases, you can add a dialog here to help direct or name the image.  The image you uploaded will be replaced by an Atlas logo in lieu of uploading your image.`);
        return of({status: 200, targetUrl: 'assets/logo_small.png'});
      }
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