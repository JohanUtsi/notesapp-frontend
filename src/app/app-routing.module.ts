import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NotesComponent} from './notes/notes.component';
import {AuthGuardGuard} from './auth-guard.guard';
import {ActivationComponent} from './activation/activation.component';
import {NewNoteComponent} from './notes/new-note/new-note.component';
import {ViewNoteComponent} from './view-note/view-note.component';
import {EditNoteComponent} from './edit-note/edit-note.component';
import {ShareNoteComponent} from './share-note/share-note.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'notes', component: NotesComponent, canActivate: [AuthGuardGuard]},
  {path: 'new-note', component: NewNoteComponent, canActivate: [AuthGuardGuard]},
  {path: 'note/:id', component: ViewNoteComponent, canActivate: [AuthGuardGuard]},
  {path: 'edit-note/:id', component: EditNoteComponent, canActivate: [AuthGuardGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'activate/:activationCode', component: ActivationComponent},
  {path: 'shared/:shareCode', component: ShareNoteComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
