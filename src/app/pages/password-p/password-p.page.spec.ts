import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PasswordPPage } from './password-p.page';

describe('PasswordPPage', () => {
  let component: PasswordPPage;
  let fixture: ComponentFixture<PasswordPPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(PasswordPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
