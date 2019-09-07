import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnBookPage } from './return-book.page';

describe('ReturnBookPage', () => {
  let component: ReturnBookPage;
  let fixture: ComponentFixture<ReturnBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnBookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
