import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DirectivaComponent } from './component/directiva/directiva.component';
import { ClientesComponent } from './component/clientes/clientes.component';


import { ClienteService } from './service/cliente.service';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './component/form/form.component';
import {FormsModule} from '@angular/forms'

const routes: Routes =[

  {path:'',redirectTo: '/clientes', pathMatch: 'full'},
  {path:'directivas', component: DirectivaComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'clientes/form', component: FormComponent},
];





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
