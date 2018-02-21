import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoCreateMotoComponent } from './vehiculo-create-moto.component';

describe('VehiculoCreateMotoComponent', () => {
  let component: VehiculoCreateMotoComponent;
  let fixture: ComponentFixture<VehiculoCreateMotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoCreateMotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoCreateMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
