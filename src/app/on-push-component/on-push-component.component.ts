import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-on-push-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './on-push-component.component.html',
  styleUrl: './on-push-component.component.scss',
})
export class OnPushComponentComponent {
  counterSignalOnPush = signal(1);

  constructor() {

    // Work only without SSR
    
    // setInterval(() => {
    //   this.counterSignalOnPush.update(current => current + 1);
    //   console.log(`Counter Signal value: ${this.counterSignalOnPush()}`);
    // }, 2000)
  }

  updateSignalCounter() {
    this.counterSignalOnPush.update(current => current + 1);
  }

}
