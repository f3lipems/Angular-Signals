import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-on-push-component',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './on-push-component.component.html',
  styleUrl: './on-push-component.component.scss'
})
export class OnPushComponentComponent {

}
