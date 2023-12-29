import { Component, signal } from '@angular/core';
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
  protected objectSignal = signal({action: 'none', value: 1});

  // Set: Add new value to Signal
  signalSet() {
    this.counterSignal.set(0);
  }

  // Update: Allow you to use the current value;
  signalUpdate() {
    this.counterSignal.update(current => current + 1)
  }
}
