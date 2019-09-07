import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBooksPage } from './all-books.page';

describe('AllBooksPage', () => {
  let component: AllBooksPage;
  let fixture: ComponentFixture<AllBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBooksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
