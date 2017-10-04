import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalSoapComponent } from './traditional-soap.component';

describe('TraditionalSoapComponent', () => {
  let component: TraditionalSoapComponent;
  let fixture: ComponentFixture<TraditionalSoapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraditionalSoapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraditionalSoapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
