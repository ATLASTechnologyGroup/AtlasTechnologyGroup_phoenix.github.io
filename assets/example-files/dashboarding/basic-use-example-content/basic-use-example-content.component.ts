import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, Renderer2, ViewEncapsulation } from '@angular/core';
import { DashboardItemPlacement, DashboardPlacementConsumer } from '@atlas/ui-dashboarding';
import { isTruthy } from '@atlas/util';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter, map, skip, tap } from 'rxjs/operators';

@Component({
  selector: 'atlas-basic-use-example-content',
  template: '',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicUseExampleContentComponent implements DashboardPlacementConsumer, OnDestroy {

  private _onDestroySubs = new Subscription();
  private _placement = new BehaviorSubject<DashboardItemPlacement<BasicUseExampleContentComponent>>(null);

  placement$ = this._placement.asObservable();

  imageUrl$ = this.placement$.pipe(
    map(placement => placement?.placementConfig?.src)
  );

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this._onDestroySubs.add(this.placement$.pipe(
      skip(1),
      tap(placement => console.log('Dashboard-Image - Placement:', placement))
    ).subscribe());

    this._onDestroySubs.add(this.imageUrl$.pipe(
      filter(isTruthy),
      tap(imgUrl => this.renderer.setStyle(this.el.nativeElement, 'background-image', `url(${imgUrl})`))
    ).subscribe());
  }

  ngOnDestroy() {
    this._onDestroySubs.unsubscribe();
  }

  registerOnPlacementChange(cb: (placement: DashboardItemPlacement<BasicUseExampleContentComponent>) => any): void {
    this._onDestroySubs.add(this.placement$.pipe(
      tap(p => cb(p))
    ).subscribe());
  }

  updatePlacement(value: DashboardItemPlacement<BasicUseExampleContentComponent>): void {
    this._placement.next(value);
  }

}
