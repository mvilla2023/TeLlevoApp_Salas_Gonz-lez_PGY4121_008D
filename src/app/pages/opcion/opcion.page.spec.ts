import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpcionPage } from './opcion.page';

describe('OpcionPage', () => {
  let component: OpcionPage;
  let fixture: ComponentFixture<OpcionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OpcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
