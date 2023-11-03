import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceabilityComponent } from './ap-traceability.component';

describe('TraceabilityComponent', () => {
  let component: TraceabilityComponent;
  let fixture: ComponentFixture<TraceabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraceabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraceabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
