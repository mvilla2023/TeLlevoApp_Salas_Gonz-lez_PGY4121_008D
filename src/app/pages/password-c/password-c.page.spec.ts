import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PasswordCPage } from './password-c.page';

describe('PasswordCPage', () => {
  let component: PasswordCPage;
  let fixture: ComponentFixture<PasswordCPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(PasswordCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
