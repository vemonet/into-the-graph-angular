import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetsOverviewComponent } from './datasets-overview.component';

describe('DatasetsOverviewComponent', () => {
  let component: DatasetsOverviewComponent;
  let fixture: ComponentFixture<DatasetsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
