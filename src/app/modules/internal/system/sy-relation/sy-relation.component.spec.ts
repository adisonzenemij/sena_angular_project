import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyRelationComponent } from './sy-relation.component';

describe('SyRelationComponent', () => {
  let component: SyRelationComponent;
  let fixture: ComponentFixture<SyRelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyRelationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
