import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';

import { NbThemeModule, NbLayoutModule, NbCardModule, NbAccordionModule, NbRadioModule, NbBadgeModule, NbProgressBarModule } from '@nebular/theme';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';

const nebulaModules = [
  NbLayoutModule,
  NbCardModule,
  NbRadioModule,
  NbBadgeModule,
  NbAccordionModule,
  NbProgressBarModule
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    nebulaModules,
    MarkdownModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
