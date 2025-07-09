import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarJuegosComponent } from './agregar-juegos.component';

describe('AgregarJuegosComponent', () => {
  let component: AgregarJuegosComponent;
  let fixture: ComponentFixture<AgregarJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarJuegosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
