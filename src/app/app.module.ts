import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    AboutMeComponent,
    PageNotFoundComponent,
    LoginComponent,
    CrudComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutMeComponent},
      {path: 'reports', component: ReportsComponent},
      {path: 'login', component: LoginComponent},
      {path: 'crud', component: CrudComponent},
      {path: 'chat', component: ChatComponent},
      {path: '', redirectTo: '/about', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent} // this route has to come last
    ]),
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
