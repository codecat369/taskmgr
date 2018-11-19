import { OnDestroy, OnInit, Component, Input, Inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  title = 'app';
  showFiller = false;
  thm1 = true;

  constructor(
    private oc: OverlayContainer,
  ) {
    this.oc.getContainerElement().classList.add('theme-a');
  }

  ngOnInit() {
  }

}
