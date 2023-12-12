import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarPPage } from './actualizar-p.page';

describe('ActualizarPPage', () => {
  let component: ActualizarPPage;
  let fixture: ComponentFixture<ActualizarPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActualizarPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
