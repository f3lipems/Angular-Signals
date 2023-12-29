import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signals';

  protected counterSignal = signal(1);
  protected computedSignal = computed(() => `${this.counterSignal()} computed!`);

  constructor() {
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
