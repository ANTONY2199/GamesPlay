import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostradorDeArmaComponent } from './mostrador-de-arma.component';

describe('MostradorDeArmaComponent', () => {
  let component: MostradorDeArmaComponent;
  let fixture: ComponentFixture<MostradorDeArmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostradorDeArmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostradorDeArmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
