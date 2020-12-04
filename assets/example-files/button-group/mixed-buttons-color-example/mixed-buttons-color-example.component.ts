import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'atlas-mixed-buttons-color-example',
  templateUrl: './mixed-buttons-color-example.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MixedButtonsColorExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
