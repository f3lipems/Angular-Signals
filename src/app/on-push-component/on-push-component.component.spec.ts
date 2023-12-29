import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushComponentComponent } from './on-push-component.component';

describe('OnPushComponentComponent', () => {
  let component: OnPushComponentComponent;
  let fixture: ComponentFixture<OnPushComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnPushComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnPushComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
