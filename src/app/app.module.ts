import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MemeComponent } from './meme/meme.component';
import { MemeFormComponent } from './meme-form/meme-form.component';
//animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//
import {MatCardModule} from '@angular/material/card';
// Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [//componentes
    AppComponent,
    MemeComponent,
    MemeFormComponent,
    
  ],
  imports: [//modulos
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// se colocan todas las dependencias