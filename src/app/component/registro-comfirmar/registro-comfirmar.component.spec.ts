import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComfirmarComponent } from './registro-comfirmar.component';

describe('RegistroComfirmarComponent', () => {
  let component: RegistroComfirmarComponent;
  let fixture: ComponentFixture<RegistroComfirmarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroComfirmarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
