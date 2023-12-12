import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarCPage } from './actualizar-c.page';

describe('ActualizarCPage', () => {
  let component: ActualizarCPage;
  let fixture: ComponentFixture<ActualizarCPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActualizarCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
