import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FileInputExampleComponent } from './file-input-example.component';
import { AppShellTestingModule } from '@atlas/ui-app-shell';
import { SharedModule } from '../../../shared/shared.module';
import { environment } from '../../../../environments/environment';
import { InMemoryCacheService } from '@atlas/ui-core';
import { AppStartup } from '../../../app.startup';

describe('FileInputExampleComponent', () => {
  let component: FileInputExampleComponent;
  let fixture: ComponentFixture<FileInputExampleComponent>;

  beforeEach(waitForAsync(() => {
    AppShellTestingModule.initializeSuite({
      providers: [
        InMemoryCacheService,
        ...AppStartup
      ],
      imports: [
        SharedModule
      ],
      declarations: [FileInputExampleComponent]
    }, environment)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
