import { Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { VideojuegosService } from '../../services/videojuegos.service';



@Component({
  selector: 'app-listar-juegos',
  imports: [RouterLink],
  templateUrl: './listar-juegos.component.html',
  styleUrl: './listar-juegos.component.css'
})
export class ListarJuegosComponent implements OnInit{
  listaVideojuegos: any[] = [];

  constructor(private videojuegosService: VideojuegosService) {
    this.getVideojuegos();
  }

  ngOnInit(): void {}

  // Método para obtener todos los videojuegos
  getVideojuegos() {
    this.videojuegosService.getVideojuegos().subscribe((data: any) => {
      this.listaVideojuegos = data;
    });
  }

  // Método para eliminar un videojuego
  eliminarVideojuego(videojuego: any, index: number) {
    if (window.confirm(`¿Seguro que deseas eliminar "${videojuego.titulo}"?`)) {
      this.videojuegosService.eliminarVideojuego(videojuego._id).subscribe(() => {
        this.listaVideojuegos.splice(index, 1);
      }, (error: any) => {
        console.error('Error al eliminar el videojuego:', error);
      });
    }
  }
}
