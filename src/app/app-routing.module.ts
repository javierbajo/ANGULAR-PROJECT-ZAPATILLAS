import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ContactoComponent } from './Contacto/Contacto.component';
import { LoginComponent } from './Login/Login.component';
import { ZapatillasComponent } from './Zapatillas/Zapatillas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'zapatillas', component: ZapatillasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
