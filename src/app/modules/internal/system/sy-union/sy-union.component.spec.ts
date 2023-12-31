import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyUnionComponent } from './sy-union.component';

describe('SyUnionComponent', () => {
  let component: SyUnionComponent;
  let fixture: ComponentFixture<SyUnionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyUnionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyUnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
