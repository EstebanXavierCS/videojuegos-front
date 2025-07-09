import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarJuegosComponent } from './editar-juegos.component';

describe('EditarJuegosComponent', () => {
  let component: EditarJuegosComponent;
  let fixture: ComponentFixture<EditarJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarJuegosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
