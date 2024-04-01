import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Page404Component } from './pages/page404/page404.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { ConceptComponent } from './pages/concept/concept.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RulesComponent } from './pages/rules/rules.component';

const routes: Routes = [
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./modules/admin/admin.module').then((m) => m.AdminModule),
  //   canActivate: [AdminGuard]
  // },
  // {
  //   path: 'user',
  //   loadChildren: () =>
  //     import('./modules/user/user.module').then((m) => m.UserModule),
  // },
  // { path: 'connexion', component: LoginComponent },
  { path: 'page-404', component: Page404Component },
  { path: 'concept', component: ConceptComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bonnes-pratiques', component: RulesComponent },
  { path: 'accueil', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'page-404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
