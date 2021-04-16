import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietPhan1Component } from './chi-tiet-phan1.component';

describe('ChiTietPhan1Component', () => {
  let component: ChiTietPhan1Component;
  let fixture: ComponentFixture<ChiTietPhan1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiTietPhan1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietPhan1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
