import { Component, computed, effect, signal } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnPushComponentComponent } from './on-push-component/on-push-component.component';
import { SignalService } from './services/signal.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AsyncPipe, OnPushComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signals';

  protected counterSignal = signal(1);
  protected computedSignal = computed(() => `${this.counterSignal()} computed!`);
  
  protected counterSignal$ = toObservable(this.counterSignal);
  protected counterSignalFromObservable = toSignal(this.counterSignal$);

  constructor(private service: SignalService) {
    // Effect: Work like a trigger for the Signal;
    effect(() => {
      console.log(`altered in effect: ${this.counterSignal()}`);
    })
  }

  // Set: Add new value to Signal
  signalSet() {
    this.counterSignal.set(0);
  }

  // Update: Allow you to use the current value;
  signalUpdate() {
    this.counterSignal.update(current => current + 1)
  }
}
