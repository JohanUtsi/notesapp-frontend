import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from './login/login.module';
import {RegisterModule} from './register/register.module';
import {NotesComponent} from './notes/notes.component';
import {TitlebarModule} from './titlebar/titlebar.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './JWT/JWTInterceptor';
import {NotesModule} from './notes/notes.module';
import {ActivationModule} from './activation/activation.module';
import {ViewNoteModule} from './view-note/view-note.module';
import {EditNoteModule} from './edit-note/edit-note.module';
import {ShareNoteModule} from './share-note/share-note.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    TitlebarModule,
    NotesModule,
    ActivationModule,
    ViewNoteModule,
    EditNoteModule,
    ShareNoteModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
