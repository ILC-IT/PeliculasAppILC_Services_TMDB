import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTemplateComponent } from './registro-template.component';

describe('RegistroTemplateComponent', () => {
  let component: RegistroTemplateComponent;
  let fixture: ComponentFixture<RegistroTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
