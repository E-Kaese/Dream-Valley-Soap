/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoconutAndClayComponent } from './coconutAndClay.component';

describe('CoconutAndClayComponent', () => {
  let component: CoconutAndClayComponent;
  let fixture: ComponentFixture<CoconutAndClayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoconutAndClayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoconutAndClayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
