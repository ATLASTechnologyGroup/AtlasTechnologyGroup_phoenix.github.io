import { ChangeDetectionStrategy, Component, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ToastService } from '@atlas/ui-app-shell';

@Component({
  selector: 'atlas-toast-service-demo',
  templateUrl: './toast-service-demo.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastServiceDemoComponent {

  @ViewChild('toastTemplateB', { read: TemplateRef }) toastTemplateRef: TemplateRef<any>;

  constructor(
    private toastService: ToastService
  ) { }

  showTestToastA() {
    const toastRef = this.toastService.showToast({
      autoHideDelay: 5000,
      classes: ['test-custom-toast-class-a'],
      title: 'Test toast title A',
      message: 'This is just a test of the emergency toast broadcast system.',
      icon: 'build',
      iconColor: 'warn'
    });

    console.log('New toast A ref', toastRef);
  }

  showTestToastB() {
    const toastRef = this.toastService.showToast({
      classes: ['toast-accent'],
      icon: 'done',
      template: this.toastTemplateRef,
      templateContext: {
        userName: 'Test User'
      },
      click: toast => {
        alert(`Toast ${toast.id} click!`);
        toast.beginDismiss();
      }
    });

    console.log('New toast B ref', toastRef);
  }
}
