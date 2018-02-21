import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoRemoveComponent } from './vehiculo-remove.component';

describe('VehiculoRemoveComponent', () => {
  let component: VehiculoRemoveComponent;
  let fixture: ComponentFixture<VehiculoRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
