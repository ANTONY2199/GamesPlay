import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContedidoPrincipalComponent } from './contedido-principal.component';

describe('ContedidoPrincipalComponent', () => {
  let component: ContedidoPrincipalComponent;
  let fixture: ComponentFixture<ContedidoPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContedidoPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContedidoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
