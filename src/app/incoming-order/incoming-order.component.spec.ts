import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingOrderComponent } from './incoming-order.component';

describe('IncomingOrderComponent', () => {
  let component: IncomingOrderComponent;
  let fixture: ComponentFixture<IncomingOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomingOrderComponent]
    });
    fixture = TestBed.createComponent(IncomingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
