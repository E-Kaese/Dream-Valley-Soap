/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BalmsComponent } from './balms.component';

describe('BalmsComponent', () => {
  let component: BalmsComponent;
  let fixture: ComponentFixture<BalmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
