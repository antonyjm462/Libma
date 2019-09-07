import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianDashboardPage } from './librarian-dashboard.page';

describe('LibrarianDashboardPage', () => {
  let component: LibrarianDashboardPage;
  let fixture: ComponentFixture<LibrarianDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrarianDashboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
