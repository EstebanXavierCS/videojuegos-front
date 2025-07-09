import { Routes } from '@angular/router';
import { ListarJuegosComponent } from './pages/listar-juegos/listar-juegos.component';
import { AgregarJuegosComponent } from './pages/agregar-juegos/agregar-juegos.component';
import { EditarJuegosComponent } from './pages/editar-juegos/editar-juegos.component';


export const routes: Routes = [
     {path: '', redirectTo: '/listar-juegos', pathMatch: 'full'},
    {path:'listar-juegos', component:ListarJuegosComponent, pathMatch: 'full'},
    {path: 'agregar-juegos', component: AgregarJuegosComponent, pathMatch: 'full'},
    {path:'editar-juegos/:id', component: EditarJuegosComponent, pathMatch: 'full'},
    {path: '**', redirectTo: '/listar-juegos', pathMatch: 'full'}
];

