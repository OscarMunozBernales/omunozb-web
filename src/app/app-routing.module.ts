import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./component/home/home.module').then(m => m.HomeModule) },
  { path: 'about-me', loadChildren: () => import('./component/aboutme/aboutme.module').then(m => m.AboutmeModule) },
  { path: 'projects', loadChildren: () => import('./component/projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'experience', loadChildren: () => import('./component/experience/experience.module').then(m => m.ExperienceModule) },
  { path: 'skills', loadChildren: () => import('./component/skills/skills.module').then(m => m.SkillsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
