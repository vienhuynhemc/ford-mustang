import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeuThichComponent } from './yeu-thich.component';

describe('YeuThichComponent', () => {
  let component: YeuThichComponent;
  let fixture: ComponentFixture<YeuThichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YeuThichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YeuThichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
