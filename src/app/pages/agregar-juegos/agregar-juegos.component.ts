import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VideojuegosService } from '../../services/videojuegos.service';

@Component({
  selector: 'app-agregar-juegos',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './agregar-juegos.component.html',
  styleUrl: './agregar-juegos.component.css'
})
export class AgregarJuegosComponent {
  
  videojuegoForm: FormGroup = new FormGroup({});
  enviado: boolean = false;

  plataformas: string[] = [
    'PC',
    'PlayStation',
    'Xbox',
    'Nintendo Switch',
    'Mobile'
  ];

  generos: string[] = [
    'Acción',
    'Aventura',
    'RPG',
    'Estrategia',
    'Deportes',
    'Simulación',
    'Puzzle',
    'Multijugador'
  ];

  constructor(
    private videojuegoService: VideojuegosService,
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.mainForm();
  }

  ngOnInit(): void {}

  // Definir formulario con validaciones
  mainForm() {
    this.videojuegoForm = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      desarrollador: ['', [Validators.required]],
      plataforma: ['', [Validators.required]],
      anio: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]], 
      genero: ['', [Validators.required]]
    });
  }

  // Getter para controles
  get myForm() {
    return this.videojuegoForm.controls;
  }

  // Enviar formulario
  onSubmit(): void {
    this.enviado = true;
    if (!this.videojuegoForm.valid) {
      return;
    } else {
      this.videojuegoService.agregarVideojuego(this.videojuegoForm.value).subscribe({
        complete: () => {
          console.log('Videojuego agregado correctamente');
          this.ngZone.run(() => this.router.navigateByUrl('/listar-videojuegos'));
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }
}
