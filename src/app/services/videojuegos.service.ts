import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {

   // Ruta base del backend (ajustada a rutas específicas de videojuegos)
  baseUri: string = 'https://backendvideojuegos-4dm4.onrender.com/api/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // Agregar videojuego
  agregarVideojuego(data: any): Observable<any> {
    let url = `${this.baseUri}/agregar`;
    return this.http.post(url, data).pipe(catchError(this.errorManager));
  }

  // Obtener todos los videojuegos
  getVideojuegos(): Observable<any> {
    let url = `${this.baseUri}/videojuegos`;
    return this.http.get(url);
  }

  // Obtener videojuego por ID
  getVideojuego(id: any): Observable<any> {
    let url = `${this.baseUri}/videojuego/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: any) => res || {}),
      catchError(this.errorManager)
    );
  }

  // Actualizar videojuego
  actualizarVideojuego(id: any, data: any): Observable<any> {
    let url = `${this.baseUri}/actualizar/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorManager)
    );
  }

  // Eliminar videojuego
  eliminarVideojuego(id: any): Observable<any> {
    let url = `${this.baseUri}/eliminar/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorManager)
    );
  }

  // Manejo de errores
  errorManager(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error: ${error.status}\nMensaje: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }
}
