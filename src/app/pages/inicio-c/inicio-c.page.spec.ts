import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioCPage } from './inicio-c.page';

describe('InicioCPage', () => {
  let component: InicioCPage;
  let fixture: ComponentFixture<InicioCPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
