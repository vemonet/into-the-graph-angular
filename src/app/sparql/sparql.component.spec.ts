import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparqlComponent } from './sparql.component';

describe('SparqlComponent', () => {
  let component: SparqlComponent;
  let fixture: ComponentFixture<SparqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
