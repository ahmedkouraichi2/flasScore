import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { ClassificationComponent } from './components/classification/classification.component';
import { HeaderComponent } from './components/header/header.component';
import { WordCapComponent } from './components/word-cap/word-cap.component';
import { BlogComponent } from './components/blog/blog.component';
import { VedioComponent } from './components/vedio/vedio.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ResultComponent,
    NewsComponent,
    ClassificationComponent,
    HeaderComponent,
    WordCapComponent,
    BlogComponent,
    VedioComponent,
    AddMatchComponent,
    AddTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
