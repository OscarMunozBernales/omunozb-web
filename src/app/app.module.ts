import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { ExperienceRepositoryComponent } from './pages/experience-repository/experience-repository.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { RepositoryComponent } from './pages/repository/repository.component';
import { SkillsComponent } from './pages/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienceRepositoryComponent,
    ExperienceComponent,
    RepositoryComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
