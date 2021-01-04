import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RichTextInputExampleComponent } from './rich-text-example.component';
import { AppShellTestingModule } from '@atlas/ui-app-shell';
import { SharedModule } from '../../shared/shared.module';
import { environment } from '../../../environments/environment';

describe('RichTextInputExampleComponent', () => {
  let component: RichTextInputExampleComponent;
  let fixture: ComponentFixture<RichTextInputExampleComponent>;

  beforeEach(waitForAsync(() => {
    AppShellTestingModule.initializeSuite({
      imports: [
        SharedModule
      ],
      declarations: [RichTextInputExampleComponent]
    }, environment)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichTextInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
