import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ButtonGroupExampleComponent } from './button-group-example.component';
import { AppShellTestingModule } from '@atlas/ui-app-shell';
import { SharedModule } from '../../../shared/shared.module';
import { environment } from '../../../../environments/environment';
import { InMemoryCacheService } from '@atlas/ui-core';
import { AppStartup } from '../../../app.startup';

describe('ButtonGroupExampleComponent', () => {
  let component: ButtonGroupExampleComponent;
  let fixture: ComponentFixture<ButtonGroupExampleComponent>;


  beforeEach(waitForAsync(() => {
    AppShellTestingModule.initializeSuite({
      providers: [
        InMemoryCacheService,
        ...AppStartup
      ],
      imports: [
        SharedModule
      ],
      declarations: [ButtonGroupExampleComponent]
    }, environment)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGroupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
