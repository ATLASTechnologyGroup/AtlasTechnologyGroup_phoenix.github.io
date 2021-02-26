import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SplitDropdownExampleComponent } from './split-dropdown-example.component';
import { AppShellTestingModule } from '@atlas/ui-app-shell';
import { SharedModule } from '../../../shared/shared.module';
import { environment } from '../../../../environments/environment';
import { InMemoryCacheService } from '@atlas/ui-core';
import { AppStartup } from '../../../app.startup';

describe('SplitDropdownExampleComponent', () => {
  let component: SplitDropdownExampleComponent;
  let fixture: ComponentFixture<SplitDropdownExampleComponent>;


  beforeEach(waitForAsync(() => {
    AppShellTestingModule.initializeSuite({
      providers: [
        InMemoryCacheService,
        ...AppStartup
      ],
      imports: [
        SharedModule
      ],
      declarations: [SplitDropdownExampleComponent]
    }, environment)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitDropdownExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
