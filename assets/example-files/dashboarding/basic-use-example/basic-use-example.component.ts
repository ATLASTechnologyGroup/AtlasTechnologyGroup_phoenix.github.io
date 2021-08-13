import { AfterViewInit, ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DashboardItemPlacement, DashboardPlacementsChangeEvent } from '@atlas/ui-dashboarding';
import { NewGuid } from '@atlas/util';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { BasicUseExampleContentComponent } from '../basic-use-example-content/basic-use-example-content.component';

enum ExampleImagePaths {
  angularLogo = 'assets/angular.png',
  angularMaterialLogo = 'assets/angular-material.png',
  sassLogo = 'assets/sass.png'
}

@Component({
  selector: 'atlas-basic-use-example',
  templateUrl: './basic-use-example.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicUseExampleComponent implements AfterViewInit {

  private _dashboardItems = new BehaviorSubject<DashboardItemPlacement[]>([]);

  dashboardItems$ = this._dashboardItems.pipe(distinctUntilChanged());

  constructor() { }

  ngAfterViewInit(): void {
    this._dashboardItems.next([
      {
        id: NewGuid(),
        x: 0,
        y: 0,
        cols: 2,
        rows: 2,
        displayOrder: 0,
        component: BasicUseExampleContentComponent,
        placementConfig: {
          src: ExampleImagePaths.angularLogo
        }
      } as DashboardItemPlacement<BasicUseExampleContentComponent>,
      {
        id: NewGuid(),
        x: 3,
        y: 0,
        cols: 2,
        rows: 2,
        displayOrder: 1,
        component: BasicUseExampleContentComponent,
        placementConfig: {
          src: ExampleImagePaths.angularMaterialLogo
        }
      } as DashboardItemPlacement<BasicUseExampleContentComponent>,
      {
        id: NewGuid(),
        x: 6,
        y: 0,
        cols: 2,
        rows: 2,
        displayOrder: 1,
        component: BasicUseExampleContentComponent,
        placementConfig: {
          src: ExampleImagePaths.sassLogo
        }
      } as DashboardItemPlacement<BasicUseExampleContentComponent>
    ]);
  }

  onPlacementsChanged(event: DashboardPlacementsChangeEvent) {
    console.log('basic-use-example.onPlacementsChanged:', event);
    this._dashboardItems.next(event.placements);
  }

}
