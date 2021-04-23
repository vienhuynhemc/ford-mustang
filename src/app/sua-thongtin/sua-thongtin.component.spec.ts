import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaThongtinComponent } from './sua-thongtin.component';

describe('SuaThongtinComponent', () => {
  let component: SuaThongtinComponent;
  let fixture: ComponentFixture<SuaThongtinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaThongtinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaThongtinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
