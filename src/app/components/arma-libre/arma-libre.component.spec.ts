import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmaLibreComponent } from './arma-libre.component';

describe('ArmaLibreComponent', () => {
  let component: ArmaLibreComponent;
  let fixture: ComponentFixture<ArmaLibreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmaLibreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmaLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
