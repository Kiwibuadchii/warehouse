import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuingComponent } from './issuing.component';

describe('IssuingComponent', () => {
  let component: IssuingComponent;
  let fixture: ComponentFixture<IssuingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssuingComponent]
    });
    fixture = TestBed.createComponent(IssuingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
