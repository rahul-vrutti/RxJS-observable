import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMapNotificationComponent } from './concat-map-notification.component';

describe('ConcatMapNotificationComponent', () => {
  let component: ConcatMapNotificationComponent;
  let fixture: ComponentFixture<ConcatMapNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcatMapNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcatMapNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
