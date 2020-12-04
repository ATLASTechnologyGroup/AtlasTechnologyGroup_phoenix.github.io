import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SplitButtonDropdownWithActionsComponent } from './split-button-dropdown-with-actions.component';
import { AppShellTestingModule } from '@atlas/ui-app-shell';
import { SharedModule } from '../../../shared/shared.module';
import { environment } from '../../../../environments/environment';

describe('SplitButtonDropdownWithActionsComponent', () => {
  let component: SplitButtonDropdownWithActionsComponent;
  let fixture: ComponentFixture<SplitButtonDropdownWithActionsComponent>;

  beforeEach(waitForAsync(() => {
    AppShellTestingModule.initializeSuite({
      imports: [
        SharedModule
      ],
      declarations: [SplitButtonDropdownWithActionsComponent],
    }, environment)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitButtonDropdownWithActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
