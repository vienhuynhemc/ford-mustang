import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietPhan2Component } from './chi-tiet-phan2.component';

describe('ChiTietPhan2Component', () => {
  let component: ChiTietPhan2Component;
  let fixture: ComponentFixture<ChiTietPhan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiTietPhan2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietPhan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
