import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InputOnlyExampleComponent } from './input-only-example.component';
import { AppShellTestingModule } from '@atlas/ui-app-shell';
import { SharedModule } from '../../../../shared/shared.module';
import { environment } from '../../../../../environments/environment';

describe('InputOnlyExampleComponent', () => {
  let component: InputOnlyExampleComponent;
  let fixture: ComponentFixture<InputOnlyExampleComponent>;

  beforeEach(waitForAsync(() => {
    AppShellTestingModule.initializeSuite({
      imports: [
        SharedModule
      ],
      declarations: [InputOnlyExampleComponent]
    }, environment)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOnlyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
