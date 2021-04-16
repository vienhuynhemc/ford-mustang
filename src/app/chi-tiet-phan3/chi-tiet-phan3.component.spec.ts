import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietPhan3Component } from './chi-tiet-phan3.component';

describe('ChiTietPhan3Component', () => {
  let component: ChiTietPhan3Component;
  let fixture: ComponentFixture<ChiTietPhan3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiTietPhan3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietPhan3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
