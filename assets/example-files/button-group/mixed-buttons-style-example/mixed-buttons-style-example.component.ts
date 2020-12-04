import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'atlas-mixed-buttons-style-example',
  templateUrl: './mixed-buttons-style-example.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MixedButtonsStyleExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
