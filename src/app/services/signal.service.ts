import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  private counterSignal = signal(1)

  getCounterSignal() {
    return this.counterSignal.asReadonly();
  }
}
