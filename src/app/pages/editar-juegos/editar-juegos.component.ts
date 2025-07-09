import { Component, NgZone,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Router,ActivatedRoute, RouterLink } from '@angular/router';
import { VideojuegosService } from '../../services/videojuegos.service';

@Component({
  selector: 'app-editar-juegos',
  imports: [FormsModule, ReactiveFormsModule,],
  templateUrl: './editar-juegos.component.html',
  styleUrl: './editar-juegos.component.css'
})
export class EditarJuegosComponent {
editarVideojuegoForm: FormGroup = new FormGroup({});
  enviado: boolean = false;

  generos: string[] = [
    'Acción', 'Aventura', 'RPG', 'Shooter', 'Estrategia', 'Deportes', 'Simulación', 'Puzzle'
  ];

  plataformas: string[] = [
    'PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Móvil', 'Web'
  ];

  constructor(
    private videojuegosService: VideojuegosService,
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.mainForm();
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getVideojuego(id);
  }

  // Inicializar formulario
  mainForm() {
    this.editarVideojuegoForm = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      desarrollador: ['', [Validators.required]],
      plataforma: ['', [Validators.required]],
      anio: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      genero: ['', [Validators.required]]
    });
  }

  // Getter para controles
  get myForm() {
    return this.editarVideojuegoForm.controls;
  }

  // Obtener videojuego por ID
  getVideojuego(id: any) {
    this.videojuegosService.getVideojuego(id).subscribe((data) => {
      this.editarVideojuegoForm.setValue({
        titulo: data['titulo'],
        desarrollador: data['desarrollador'],
        plataforma: data['plataforma'],
        anio: data['anio'],
        genero: data['genero']
      });
    });
  }

  // Enviar formulario
  onSubmit(): void {
    this.enviado = true;
    if (!this.editarVideojuegoForm.valid) return;

    if (window.confirm('¿Estás seguro de que deseas actualizar este videojuego?')) {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.videojuegosService.actualizarVideojuego(id, this.editarVideojuegoForm.value).subscribe({
        complete: () => {
          this.router.navigateByUrl('/listar-videojuegos');
          console.log('Videojuego actualizado correctamente');
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }
}
