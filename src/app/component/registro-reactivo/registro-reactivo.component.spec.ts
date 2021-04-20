import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroReactivoComponent } from './registro-reactivo.component';

describe('RegistroReactivoComponent', () => {
  let component: RegistroReactivoComponent;
  let fixture: ComponentFixture<RegistroReactivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroReactivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
