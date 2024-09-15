import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIssueOrderComponent } from './create-issue-order.component';

describe('CreateIssueOrderComponent', () => {
  let component: CreateIssueOrderComponent;
  let fixture: ComponentFixture<CreateIssueOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateIssueOrderComponent]
    });
    fixture = TestBed.createComponent(CreateIssueOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
