import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueBookPage } from './issue-book.page';

describe('IssueBookPage', () => {
  let component: IssueBookPage;
  let fixture: ComponentFixture<IssueBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueBookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
