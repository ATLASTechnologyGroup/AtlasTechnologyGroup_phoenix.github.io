import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DropAreaExampleComponent } from './drop-area-example.component';
import { AppShellTestingModule } from '@atlas/ui-app-shell';
import { SharedModule } from '../../../../shared/shared.module';
import { environment } from '../../../../../environments/environment';

describe('DropAreaExampleComponent', () => {
  let component: DropAreaExampleComponent;
  let fixture: ComponentFixture<DropAreaExampleComponent>;

  beforeEach(waitForAsync(() => {
    AppShellTestingModule.initializeSuite({
      imports: [
        SharedModule
      ],
      declarations: [DropAreaExampleComponent]
    }, environment)
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropAreaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
