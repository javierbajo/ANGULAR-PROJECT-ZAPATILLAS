import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { ContactoComponent } from './Contacto/Contacto.component';
import { LoginComponent } from './Login/Login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ZapatillasComponent } from './Zapatillas/Zapatillas.component';
import { NavComponent } from './Nav/Nav.component';
import { FooterComponent } from './Footer/Footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './Logout/Logout.component';
import { RegistroComponent } from './Registro/Registro.component';
import { ErrorPaginaComponent } from './ErrorPagina/ErrorPagina.component';
import { UsuarioComponent } from './Usuario/Usuario.component';






@NgModule({
  declarations: [												
    AppComponent,
      HomeComponent,
      ContactoComponent,
      ZapatillasComponent,
      LoginComponent,
      NavComponent,
      FooterComponent,
      LogoutComponent,
      RegistroComponent,
      ErrorPaginaComponent,
      UsuarioComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
   