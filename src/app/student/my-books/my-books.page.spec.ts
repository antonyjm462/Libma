import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBooksPage } from './my-books.page';

describe('MyBooksPage', () => {
  let component: MyBooksPage;
  let fixture: ComponentFixture<MyBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBooksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
