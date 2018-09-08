import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemeComponent } from './meme/meme.component';
import { MemeFormComponent } from './meme-form/meme-form.component';
//animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [//componentes
    AppComponent,
    MemeComponent,
    MemeFormComponent
  ],
  imports: [//modulos
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// se colocan todas las dependencias