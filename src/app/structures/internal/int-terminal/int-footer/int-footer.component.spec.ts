import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntFooterComponent } from './int-footer.component';

describe('IntFooterComponent', () => {
  let component: IntFooterComponent;
  let fixture: ComponentFixture<IntFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
