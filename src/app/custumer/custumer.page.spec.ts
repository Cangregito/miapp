import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustumerPage } from './custumer.page';

describe('CustumerPage', () => {
  let component: CustumerPage;
  let fixture: ComponentFixture<CustumerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CustumerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
