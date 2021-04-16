import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietPhan4Component } from './chi-tiet-phan4.component';

describe('ChiTietPhan4Component', () => {
  let component: ChiTietPhan4Component;
  let fixture: ComponentFixture<ChiTietPhan4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiTietPhan4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietPhan4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
