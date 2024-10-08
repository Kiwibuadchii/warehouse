import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueOrderListComponent } from './issue-order-list.component';

describe('IssueOrderListComponent', () => {
  let component: IssueOrderListComponent;
  let fixture: ComponentFixture<IssueOrderListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssueOrderListComponent]
    });
    fixture = TestBed.createComponent(IssueOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
