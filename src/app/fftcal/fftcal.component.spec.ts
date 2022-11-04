import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FftcalComponent } from './fftcal.component';

describe('FftcalComponent', () => {
  let component: FftcalComponent;
  let fixture: ComponentFixture<FftcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FftcalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FftcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
