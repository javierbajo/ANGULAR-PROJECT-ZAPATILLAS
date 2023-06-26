import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ContactoComponent } from './Contacto/Contacto.component';
import { LoginComponent } from './Login/Login.component';
import { ZapatillasComponent } from './Zapatillas/Zapatillas.component';
import { LogoutComponent } from './Logout/Logout.component';
import { RegistroComponent } from './Registro/Registro.component';
import { ErrorPaginaComponent } from './ErrorPagina/ErrorPagina.component';
import { UsuarioComponent } from './Usuario/Usuario.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'zapatillas', component: ZapatillasComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: '**', component: ErrorPaginaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
